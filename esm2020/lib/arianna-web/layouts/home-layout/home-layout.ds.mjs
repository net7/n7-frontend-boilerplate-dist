import { LayoutDataSource } from '@n7-frontend/core';
import { Subject, forkJoin, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import helpers from '../../../common/helpers';
export class AwHomeLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.facetInputs = {};
        this.autocompletePopoverOpen = false;
        this.autocompleteChanged$ = new Subject();
        this.numOfItemsStr = null;
        this.currentHoverEntity = null;
        this.hasScrollBackground = false;
        this.resultsLimit = -1;
        this.selectedEntitiesIds = [];
        this.destroyed$ = new Subject();
        this.homeAutocompleteIsLoading = false;
        this.resultsListIsLoading = false;
        /** Enabled from: arianna-config/features-enabled/carousel */
        this.carouselEnabled = false;
        // ===== BUBBLE CHART =====
        this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
        this.selectedBubbles = []; // array of IDs
        this.updateComponent = (id, data, options) => {
            // update components from EH
            if (options) {
                this.one(id).updateOptions(options);
            }
            this.one(id).update(data);
        };
    }
    // ========================
    onInit({ communication, mainState, configuration, tippy, }) {
        this.communication = communication;
        this.configuration = configuration;
        // this.facetData = [];
        this.mainState = mainState;
        this.tippy = tippy;
        this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
        this.bubblesEnabled = this.configuration.get('features-enabled')?.bubblechart;
        this.carouselEnabled = this.configuration.get('features-enabled')?.carousel;
        if (this.carouselEnabled) {
            this.loadCarousel();
        }
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        // update streams
        this.mainState.update('headTitle', 'Arianna4View - Homepage');
        this.mainState.update('pageTitle', 'Arianna4View - Homepage');
        this.mainState.updateCustom('currentNav', 'home');
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
        this.outerLinks = this.configuration.get('home-layout')['outer-links'].test;
        this.outerLinksTitle = this.configuration.get('home-layout')['outer-links'].title;
        this.outerLinksDescription = this.configuration.get('home-layout')['outer-links'].description;
        this.one('aw-bubble-chart').updateOptions({
            selectable: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit,
        });
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths').entitaBasePath,
            selectable: true,
        });
    }
    onDestroy() {
        this.destroyed$.next();
    }
    makeRequest$(query, params) {
        // make request from EH
        return this.communication.request$(query, {
            onError: (error) => console.error(error),
            params,
        });
    }
    initialFilterRequest() {
        return this.communication.request$('globalFilter', {
            onError: (error) => console.error(error),
            params: {
                entitiesListSize: this.configuration.get('bubble-chart').bubbleLimit,
            },
        });
    }
    parseInitialRequest(response) {
        this.firstBubbleResponse = response.entitiesData;
        const facetData = [];
        response.typeOfEntityData.forEach((toe) => {
            const TOEconfigData = this.configuration.get('config-keys')[toe.type];
            facetData.push({
                ...toe,
                enabled: true,
                locked: false,
                ...TOEconfigData,
            });
        });
        this.one('aw-home-facets-wrapper').update(facetData);
    }
    renderPreviewsFromApolloQuery(response) {
        if (!response || !response.itemsPagination) {
            return;
        }
        let numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            let numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            let numOfItemsTmpStr = `${numOfItems}`;
            if (numOfItems < 10)
                numOfItemsTmpStr = `00${numOfItems}`;
            else if (numOfItems < 100)
                numOfItemsTmpStr = `0${numOfItems}`;
            if (numOfThousand > 0)
                this.numOfItemsStr = `${numOfThousand}.${numOfItemsTmpStr}`;
            else
                this.numOfItemsStr = `${numOfItems}`;
        }
        else {
            this.numOfItemsStr = '0';
        }
        this.one('aw-linked-objects').updateOptions({
            context: 'home',
            config: this.configuration,
        });
        this.one('aw-linked-objects').update(response.itemsPagination);
        // scroll control
        setTimeout(() => {
            this._scrollBackgroundControl();
        });
    }
    updateTags(onlyBubbles) {
        if (!onlyBubbles) {
            this.renderItemTags();
        }
    }
    handleFacetSearchChange(change) {
        const payload = change.inputPayload;
        const { value } = change;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
    }
    renderItemTags() {
        /*
              Try to build an item tag for each selected query looking at the data from the
              first response. If the needed bubble data cannot be found, ask the backend
              for that bubble's data.
          */
        const queryList = []; // list of pending queries
        const tagsData = []; // list of tags data built from query
        this.selectedBubbles.forEach((b) => {
            const theBubble = this.firstBubbleResponse.find((el) => el.entity.id === b);
            if (theBubble) { // if a bubble was found
                const bubbleConfig = this.configuration.get('config-keys')[theBubble.entity.typeOfEntity];
                tagsData.push({
                    label: theBubble.entity.label,
                    icon: 'n7-icon-close',
                    payload: b,
                    classes: `tag-${bubbleConfig['class-name']}`,
                });
            }
            else { // if the bubble was not found, make a query
                const params = { entityId: b, entitiesListSize: 1 };
                queryList.push(this.makeRequest$('getMissingBubble', params));
            }
        });
        if (queryList.length > 0) { // if there are pending bubble queries
            forkJoin(queryList).subscribe((forkres) => {
                forkres.forEach((r) => {
                    const bubbleConfig = this.configuration.get('config-keys')[r.typeOfEntity];
                    tagsData.push({
                        label: r.label,
                        icon: 'n7-icon-close',
                        payload: r.id,
                        classes: `tag-${bubbleConfig['class-name']}`,
                    });
                });
                this.one('aw-home-item-tags-wrapper').update(tagsData);
            });
        }
        else {
            this.one('aw-home-item-tags-wrapper').update(tagsData);
        }
    }
    /**
     * Loads data for the carousel component
     */
    loadCarousel() {
        const baseUrls = this.configuration.get('baseUrls') || {};
        const baseUrl = baseUrls.portaleMatriceServer || null;
        this.communication.request$('getSlider', baseUrl ? {
            params: { baseUrl }
        } : {}).subscribe({
            next: (res) => {
                if (res) {
                    this.one('aw-carousel').update(res);
                }
            },
            error: (err) => {
                console.error(err);
                this.carouselEnabled = false;
            },
        });
    }
    onHeroChange(value) {
        if (value) {
            const escapedValue = helpers.escapeQuotes(value);
            this.autocompleteChanged$.next(escapedValue);
            this.homeAutocompleteIsLoading = true;
            this.homeAutocompleteQuery = escapedValue;
            if (!this.autocompletePopoverOpen) {
                this._toggleAutocompletePopover();
            }
        }
        else if (this.autocompletePopoverOpen) {
            this._toggleAutocompletePopover();
        }
    }
    _scrollBackgroundControl() {
        const node = document.getElementById('bubble-results-list');
        if (!node)
            return;
        const source$ = fromEvent(node, 'scroll');
        // height control
        setTimeout(() => {
            this._setHasScrollBackground(node);
        }, 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe(({ target }) => {
            this._setHasScrollBackground(target);
        });
    }
    _setHasScrollBackground(target) {
        this.hasScrollBackground = target ? (target.scrollHeight > (target.scrollTop + target.clientHeight)) : false;
    }
    _listenAutoCompleteChanges() {
        this.one('aw-home-autocomplete').updateOptions({
            keys: this.configuration.get('config-keys'),
            config: this.configuration,
            labels: this.configuration.get('labels'),
            paths: this.configuration.get('paths'),
        });
        this.autocompleteChanged$.pipe(debounceTime(500), takeUntil(this.destroyed$)).subscribe((value) => {
            this.communication.request$('autoComplete', {
                onError: (error) => console.error(error),
                params: {
                    input: value,
                    itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] },
                },
            }).subscribe((response) => {
                this.homeAutocompleteIsLoading = false;
                this.one('aw-home-autocomplete').update({
                    response,
                    query: value,
                });
            });
        });
    }
    _toggleAutocompletePopover() {
        if (!this.autocompletePopover) {
            const template = document.getElementById('aw-home-advanced-autocomplete-popover');
            template.style.display = 'block';
            const [popOver] = this.tippy('.aw-home__top-hero .n7-hero__input', {
                content: template,
                trigger: 'manual',
                interactive: true,
                arrow: false,
                flip: false,
                appendTo: 'parent',
                theme: 'light-border',
                placement: 'bottom-start',
                maxWidth: '100%',
                onHidden: () => { this.autocompletePopoverOpen = false; },
            });
            this.autocompletePopover = popOver;
        }
        if (this.autocompletePopoverOpen) {
            this.autocompletePopover.hide();
        }
        else {
            this.autocompletePopover.show();
        }
        this.autocompletePopoverOpen = !this.autocompletePopoverOpen;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLE1BQU0sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCO0lBQXBEOztRQVNVLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBSXRCLDRCQUF1QixHQUFHLEtBQUssQ0FBQztRQUVoQyx5QkFBb0IsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV2RCxrQkFBYSxHQUFXLElBQUksQ0FBQztRQUU3Qix1QkFBa0IsR0FBUSxJQUFJLENBQUM7UUFFL0Isd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBRTVCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBVXhCLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUUxQyw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFFbEMseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBRXBDLDZEQUE2RDtRQUN0RCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUUvQiwyQkFBMkI7UUFDcEIsbUJBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQywrREFBK0Q7UUFFdkYsb0JBQWUsR0FBVSxFQUFFLENBQUEsQ0FBQyxlQUFlO1FBeUQzQyxvQkFB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SSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUNBQXVDLENBQUMsQ0FBQztZQUNsRixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEVBQUU7Z0JBQ2pFLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSxLQUFLO2dCQUNYLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsY0FBYztnQkFDckIsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDMUQsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztTQUNwQztRQUNELElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQy9ELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIGZvcmtKb2luLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHVibGljLWFwaSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgdGlwcHk6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZmFjZXRJbnB1dHM6IGFueSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXI6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgbnVtT2ZJdGVtc1N0cjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHJlc3VsdHNMaW1pdCA9IC0xO1xyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IFtdO1xyXG5cclxuICBwdWJsaWMgb3V0ZXJMaW5rczogYW55O1xyXG5cclxuICBwdWJsaWMgb3V0ZXJMaW5rc1RpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBvdXRlckxpbmtzRGVzY3JpcHRpb246IHN0cmluZztcclxuXHJcbiAgcHVibGljIGhvbWVBdXRvY29tcGxldGVRdWVyeTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBob21lQXV0b2NvbXBsZXRlSXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyByZXN1bHRzTGlzdElzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAvKiogRW5hYmxlZCBmcm9tOiBhcmlhbm5hLWNvbmZpZy9mZWF0dXJlcy1lbmFibGVkL2Nhcm91c2VsICovXHJcbiAgcHVibGljIGNhcm91c2VsRW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAvLyA9PT09PSBCVUJCTEUgQ0hBUlQgPT09PT1cclxuICBwdWJsaWMgYnViYmxlc0VuYWJsZWQgPSBmYWxzZTsgLy8gdHJ1ZSBpZiB0aGlzIEFyaWFubmEgV2ViIHByb2plY3QgaGFzIHRoZSBidWJibGUgY2hhcnQgbW9kdWxlXHJcblxyXG4gIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZXM6IGFueVtdID0gW10gLy8gYXJyYXkgb2YgSURzXHJcblxyXG4gIC8vIHN0b3JlIGxhc3QgYnViYmxlIHJlc3BvbnNlIHRvIHJlZnJlc2ggdGhlIGdyYXBoIHdpdGggdGhlIHNhbWUgZGF0YVxyXG4gIHB1YmxpYyBsYXN0QnViYmxlUmVzcG9uc2U6IGFueVxyXG5cclxuICAvLyBzdG9yZSB0aGUgZmlyc3QgYXJyYXkgb2YgYnViYmxlcywgdG8gZmluZCB0aGVtIGluIGNhc2Ugb2Ygbm8gcmVzdWx0cy5cclxuICBwdWJsaWMgZmlyc3RCdWJibGVSZXNwb25zZTogYW55XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIG9uSW5pdCh7XHJcbiAgICBjb21tdW5pY2F0aW9uLCBtYWluU3RhdGUsIGNvbmZpZ3VyYXRpb24sIHRpcHB5LFxyXG4gIH0pIHtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgLy8gdGhpcy5mYWNldERhdGEgPSBbXTtcclxuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xyXG4gICAgdGhpcy50aXBweSA9IHRpcHB5O1xyXG4gICAgdGhpcy5yZXN1bHRzTGltaXQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J107XHJcbiAgICB0aGlzLmJ1YmJsZXNFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpPy5idWJibGVjaGFydDtcclxuICAgIHRoaXMuY2Fyb3VzZWxFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpPy5jYXJvdXNlbDtcclxuICAgIGlmICh0aGlzLmNhcm91c2VsRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmxvYWRDYXJvdXNlbCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbmUoJ2F3LWhlcm8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsndG9wLWhlcm8nXSk7XHJcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYm90dG9tLWhlcm8nXSk7XHJcbiAgICAvLyB1cGRhdGUgc3RyZWFtc1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gSG9tZXBhZ2UnKTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmE0VmlldyAtIEhvbWVwYWdlJyk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnaG9tZScpO1xyXG4gICAgLy8gbGlzdGVuIGF1dG9jb21wbGV0ZSBjaGFuZ2VzXHJcbiAgICB0aGlzLl9saXN0ZW5BdXRvQ29tcGxldGVDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLm91dGVyTGlua3MgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydvdXRlci1saW5rcyddLnRlc3Q7XHJcbiAgICB0aGlzLm91dGVyTGlua3NUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ10udGl0bGU7XHJcbiAgICB0aGlzLm91dGVyTGlua3NEZXNjcmlwdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ10uZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIHNlbGVjdGFibGU6IHRydWUsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBiYXNlUGF0aDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcclxuICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYWtlUmVxdWVzdCQocXVlcnksIHBhcmFtcykge1xyXG4gICAgLy8gbWFrZSByZXF1ZXN0IGZyb20gRUhcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocXVlcnksIHtcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50ID0gKGlkLCBkYXRhLCBvcHRpb25zPykgPT4ge1xyXG4gICAgLy8gdXBkYXRlIGNvbXBvbmVudHMgZnJvbSBFSFxyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uZShpZCkudXBkYXRlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbEZpbHRlclJlcXVlc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpLmJ1YmJsZUxpbWl0LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLmZpcnN0QnViYmxlUmVzcG9uc2UgPSByZXNwb25zZS5lbnRpdGllc0RhdGE7XHJcbiAgICBjb25zdCBmYWNldERhdGEgPSBbXTtcclxuICAgIHJlc3BvbnNlLnR5cGVPZkVudGl0eURhdGEuZm9yRWFjaCgodG9lKSA9PiB7XHJcbiAgICAgIGNvbnN0IFRPRWNvbmZpZ0RhdGEgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3RvZS50eXBlXTtcclxuICAgICAgZmFjZXREYXRhLnB1c2goe1xyXG4gICAgICAgIC4uLnRvZSxcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgLi4uVE9FY29uZmlnRGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKGZhY2V0RGF0YSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55KSB7XHJcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG51bU9mSXRlbXMgPSByZXNwb25zZS5pdGVtc1BhZ2luYXRpb24udG90YWxDb3VudDtcclxuICAgIGlmIChudW1PZkl0ZW1zID4gMCkge1xyXG4gICAgICBsZXQgbnVtT2ZUaG91c2FuZCA9IDA7XHJcbiAgICAgIHdoaWxlIChudW1PZkl0ZW1zID4gOTk5KSB7XHJcbiAgICAgICAgbnVtT2ZJdGVtcyAtPSAxMDAwO1xyXG4gICAgICAgIG51bU9mVGhvdXNhbmQgKz0gMTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbnVtT2ZJdGVtc1RtcFN0ciA9IGAke251bU9mSXRlbXN9YDtcclxuICAgICAgaWYgKG51bU9mSXRlbXMgPCAxMCkgbnVtT2ZJdGVtc1RtcFN0ciA9IGAwMCR7bnVtT2ZJdGVtc31gO1xyXG4gICAgICBlbHNlIGlmIChudW1PZkl0ZW1zIDwgMTAwKSBudW1PZkl0ZW1zVG1wU3RyID0gYDAke251bU9mSXRlbXN9YDtcclxuICAgICAgaWYgKG51bU9mVGhvdXNhbmQgPiAwKSB0aGlzLm51bU9mSXRlbXNTdHIgPSBgJHtudW1PZlRob3VzYW5kfS4ke251bU9mSXRlbXNUbXBTdHJ9YDtcclxuICAgICAgZWxzZSB0aGlzLm51bU9mSXRlbXNTdHIgPSBgJHtudW1PZkl0ZW1zfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSAnMCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgY29udGV4dDogJ2hvbWUnLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbik7XHJcblxyXG4gICAgLy8gc2Nyb2xsIGNvbnRyb2xcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlVGFncyhvbmx5QnViYmxlcz86IGJvb2xlYW4pIHtcclxuICAgIGlmICghb25seUJ1YmJsZXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJJdGVtVGFncygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XHJcbiAgICBjb25zdCBwYXlsb2FkOiBzdHJpbmcgPSBjaGFuZ2UuaW5wdXRQYXlsb2FkO1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gY2hhbmdlO1xyXG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xyXG4gICAgdGhpcy5mYWNldElucHV0c1twYXlsb2FkXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbVRhZ3MoKSB7XHJcbiAgICAvKlxyXG4gICAgICAgICAgVHJ5IHRvIGJ1aWxkIGFuIGl0ZW0gdGFnIGZvciBlYWNoIHNlbGVjdGVkIHF1ZXJ5IGxvb2tpbmcgYXQgdGhlIGRhdGEgZnJvbSB0aGVcclxuICAgICAgICAgIGZpcnN0IHJlc3BvbnNlLiBJZiB0aGUgbmVlZGVkIGJ1YmJsZSBkYXRhIGNhbm5vdCBiZSBmb3VuZCwgYXNrIHRoZSBiYWNrZW5kXHJcbiAgICAgICAgICBmb3IgdGhhdCBidWJibGUncyBkYXRhLlxyXG4gICAgICAqL1xyXG4gICAgY29uc3QgcXVlcnlMaXN0ID0gW107IC8vIGxpc3Qgb2YgcGVuZGluZyBxdWVyaWVzXHJcbiAgICBjb25zdCB0YWdzRGF0YSA9IFtdOyAvLyBsaXN0IG9mIHRhZ3MgZGF0YSBidWlsdCBmcm9tIHF1ZXJ5XHJcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKChiKSA9PiB7IC8vIHRyeSB0byBnZXQgdGhlIGRhdGEgb2YgZWFjaCBzZWxlY3RlZCBidWJibGVcclxuICAgICAgY29uc3QgdGhlQnViYmxlID0gdGhpcy5maXJzdEJ1YmJsZVJlc3BvbnNlLmZpbmQoKGVsKSA9PiBlbC5lbnRpdHkuaWQgPT09IGIpO1xyXG4gICAgICBpZiAodGhlQnViYmxlKSB7IC8vIGlmIGEgYnViYmxlIHdhcyBmb3VuZFxyXG4gICAgICAgIGNvbnN0IGJ1YmJsZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbdGhlQnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHldO1xyXG4gICAgICAgIHRhZ3NEYXRhLnB1c2goe1xyXG4gICAgICAgICAgbGFiZWw6IHRoZUJ1YmJsZS5lbnRpdHkubGFiZWwsXHJcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICBwYXlsb2FkOiBiLFxyXG4gICAgICAgICAgY2xhc3NlczogYHRhZy0ke2J1YmJsZUNvbmZpZ1snY2xhc3MtbmFtZSddfWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7IC8vIGlmIHRoZSBidWJibGUgd2FzIG5vdCBmb3VuZCwgbWFrZSBhIHF1ZXJ5XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBlbnRpdHlJZDogYiwgZW50aXRpZXNMaXN0U2l6ZTogMSB9O1xyXG4gICAgICAgIHF1ZXJ5TGlzdC5wdXNoKHRoaXMubWFrZVJlcXVlc3QkKCdnZXRNaXNzaW5nQnViYmxlJywgcGFyYW1zKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHF1ZXJ5TGlzdC5sZW5ndGggPiAwKSB7IC8vIGlmIHRoZXJlIGFyZSBwZW5kaW5nIGJ1YmJsZSBxdWVyaWVzXHJcbiAgICAgIGZvcmtKb2luKHF1ZXJ5TGlzdCkuc3Vic2NyaWJlKChmb3JrcmVzKSA9PiB7XHJcbiAgICAgICAgZm9ya3Jlcy5mb3JFYWNoKChyOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJ1YmJsZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbci50eXBlT2ZFbnRpdHldO1xyXG4gICAgICAgICAgdGFnc0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiByLmxhYmVsLFxyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHIuaWQsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6IGB0YWctJHtidWJibGVDb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWRzIGRhdGEgZm9yIHRoZSBjYXJvdXNlbCBjb21wb25lbnRcclxuICAgKi9cclxuICBsb2FkQ2Fyb3VzZWwoKSB7XHJcbiAgICBjb25zdCBiYXNlVXJscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2Jhc2VVcmxzJykgfHwge307XHJcbiAgICBjb25zdCBiYXNlVXJsID0gYmFzZVVybHMucG9ydGFsZU1hdHJpY2VTZXJ2ZXIgfHwgbnVsbDtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0U2xpZGVyJywgYmFzZVVybCA/IHtcclxuICAgICAgcGFyYW1zOiB7IGJhc2VVcmwgfVxyXG4gICAgfSA6IHt9KS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiAocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgdGhpcy5vbmUoJ2F3LWNhcm91c2VsJykudXBkYXRlKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkhlcm9DaGFuZ2UodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBjb25zdCBlc2NhcGVkVmFsdWUgPSBoZWxwZXJzLmVzY2FwZVF1b3Rlcyh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQubmV4dChlc2NhcGVkVmFsdWUpO1xyXG4gICAgICB0aGlzLmhvbWVBdXRvY29tcGxldGVJc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmhvbWVBdXRvY29tcGxldGVRdWVyeSA9IGVzY2FwZWRWYWx1ZTtcclxuICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcclxuICAgICAgdGhpcy5fdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2Nyb2xsQmFja2dyb3VuZENvbnRyb2woKSB7XHJcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZS1yZXN1bHRzLWxpc3QnKTtcclxuICAgIGlmICghbm9kZSkgcmV0dXJuO1xyXG4gICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudChub2RlLCAnc2Nyb2xsJyk7XHJcblxyXG4gICAgLy8gaGVpZ2h0IGNvbnRyb2xcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKG5vZGUpO1xyXG4gICAgfSwgNTAwKTtcclxuXHJcbiAgICAvLyBzY3JvbGwgbGlzdGVuXHJcbiAgICBzb3VyY2UkLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSg1MCksXHJcbiAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IGFueSB9KSA9PiB7XHJcbiAgICAgIHRoaXMuX3NldEhhc1Njcm9sbEJhY2tncm91bmQodGFyZ2V0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh0YXJnZXQpIHtcclxuICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHRhcmdldCA/IChcclxuICAgICAgdGFyZ2V0LnNjcm9sbEhlaWdodCA+ICh0YXJnZXQuc2Nyb2xsVG9wICsgdGFyZ2V0LmNsaWVudEhlaWdodClcclxuICAgICkgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAga2V5czogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKSxcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyksXHJcbiAgICAgIHBhdGhzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUNoYW5nZWQkLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcclxuICAgICkuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHtcclxuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgaW5wdXQ6IHZhbHVlLFxyXG4gICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7IG9mZnNldDogMCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLmhvbWVBdXRvY29tcGxldGVJc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGUoe1xyXG4gICAgICAgICAgcmVzcG9uc2UsXHJcbiAgICAgICAgICBxdWVyeTogdmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCkge1xyXG4gICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIpIHtcclxuICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXctaG9tZS1hZHZhbmNlZC1hdXRvY29tcGxldGUtcG9wb3ZlcicpO1xyXG4gICAgICB0ZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgY29uc3QgW3BvcE92ZXJdID0gdGhpcy50aXBweSgnLmF3LWhvbWVfX3RvcC1oZXJvIC5uNy1oZXJvX19pbnB1dCcsIHtcclxuICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZSxcclxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcclxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBhcnJvdzogZmFsc2UsXHJcbiAgICAgICAgZmxpcDogZmFsc2UsXHJcbiAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxyXG4gICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcclxuICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgb25IaWRkZW46ICgpID0+IHsgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9IGZhbHNlOyB9LFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyID0gcG9wT3ZlcjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5oaWRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9ICF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuO1xyXG4gIH1cclxufVxyXG4iXX0=