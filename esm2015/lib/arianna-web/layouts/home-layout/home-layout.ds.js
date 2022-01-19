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
        var _a, _b;
        this.communication = communication;
        this.configuration = configuration;
        // this.facetData = [];
        this.mainState = mainState;
        this.tippy = tippy;
        this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
        this.bubblesEnabled = (_a = this.configuration.get('features-enabled')) === null || _a === void 0 ? void 0 : _a.bubblechart;
        this.carouselEnabled = (_b = this.configuration.get('features-enabled')) === null || _b === void 0 ? void 0 : _b.carousel;
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
            facetData.push(Object.assign(Object.assign(Object.assign({}, toe), { enabled: true, locked: false }), TOEconfigData));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QyxNQUFNLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjtJQUFwRDs7UUFTVSxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUl0Qiw0QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFFaEMseUJBQW9CLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFFdkQsa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFFN0IsdUJBQWtCLEdBQVEsSUFBSSxDQUFDO1FBRS9CLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUU1QixpQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWxCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQVV4QixlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFMUMsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBRWxDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUVwQyw2REFBNkQ7UUFDdEQsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFL0IsMkJBQTJCO1FBQ3BCLG1CQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsK0RBQStEO1FBRXZGLG9CQUFlLEdBQVUsRUFBRSxDQUFBLENBQUMsZUFBZTtRQXlEM0Msb0JBQWUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJ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USxDQUFDLGNBQWMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQ2xGLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRTtnQkFDakUsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixXQUFXLEVBQUUsSUFBSTtnQkFDakIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxjQUFjO2dCQUNyQixTQUFTLEVBQUUsY0FBYztnQkFDekIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMxRCxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDL0QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgZm9ya0pvaW4sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMtYXBpJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSB0aXBweTogYW55O1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBmYWNldElucHV0czogYW55ID0ge307XHJcblxyXG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3ZlcjogYW55O1xyXG5cclxuICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlQ2hhbmdlZCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBudW1PZkl0ZW1zU3RyOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgY3VycmVudEhvdmVyRW50aXR5OiBhbnkgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgaGFzU2Nyb2xsQmFja2dyb3VuZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgcmVzdWx0c0xpbWl0ID0gLTE7XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RlZEVudGl0aWVzSWRzID0gW107XHJcblxyXG4gIHB1YmxpYyBvdXRlckxpbmtzOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBvdXRlckxpbmtzVGl0bGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIG91dGVyTGlua3NEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5OiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHVibGljIGhvbWVBdXRvY29tcGxldGVJc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHJlc3VsdHNMaXN0SXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIC8qKiBFbmFibGVkIGZyb206IGFyaWFubmEtY29uZmlnL2ZlYXR1cmVzLWVuYWJsZWQvY2Fyb3VzZWwgKi9cclxuICBwdWJsaWMgY2Fyb3VzZWxFbmFibGVkID0gZmFsc2U7XHJcblxyXG4gIC8vID09PT09IEJVQkJMRSBDSEFSVCA9PT09PVxyXG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZCA9IGZhbHNlOyAvLyB0cnVlIGlmIHRoaXMgQXJpYW5uYSBXZWIgcHJvamVjdCBoYXMgdGhlIGJ1YmJsZSBjaGFydCBtb2R1bGVcclxuXHJcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXSAvLyBhcnJheSBvZiBJRHNcclxuXHJcbiAgLy8gc3RvcmUgbGFzdCBidWJibGUgcmVzcG9uc2UgdG8gcmVmcmVzaCB0aGUgZ3JhcGggd2l0aCB0aGUgc2FtZSBkYXRhXHJcbiAgcHVibGljIGxhc3RCdWJibGVSZXNwb25zZTogYW55XHJcblxyXG4gIC8vIHN0b3JlIHRoZSBmaXJzdCBhcnJheSBvZiBidWJibGVzLCB0byBmaW5kIHRoZW0gaW4gY2FzZSBvZiBubyByZXN1bHRzLlxyXG4gIHB1YmxpYyBmaXJzdEJ1YmJsZVJlc3BvbnNlOiBhbnlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgb25Jbml0KHtcclxuICAgIGNvbW11bmljYXRpb24sIG1haW5TdGF0ZSwgY29uZmlndXJhdGlvbiwgdGlwcHksXHJcbiAgfSkge1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICAvLyB0aGlzLmZhY2V0RGF0YSA9IFtdO1xyXG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XHJcbiAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XHJcbiAgICB0aGlzLnJlc3VsdHNMaW1pdCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXTtcclxuICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJyk/LmJ1YmJsZWNoYXJ0O1xyXG4gICAgdGhpcy5jYXJvdXNlbEVuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJyk/LmNhcm91c2VsO1xyXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxFbmFibGVkKSB7XHJcbiAgICAgIHRoaXMubG9hZENhcm91c2VsKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uZSgnYXctaGVybycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWyd0b3AtaGVybyddKTtcclxuICAgIHRoaXMub25lKCdhdy1ob21lLWhlcm8tcGF0cmltb25pbycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydib3R0b20taGVybyddKTtcclxuICAgIC8vIHVwZGF0ZSBzdHJlYW1zXHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hNFZpZXcgLSBIb21lcGFnZScpO1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gSG9tZXBhZ2UnKTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdob21lJyk7XHJcbiAgICAvLyBsaXN0ZW4gYXV0b2NvbXBsZXRlIGNoYW5nZXNcclxuICAgIHRoaXMuX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKTtcclxuICAgIHRoaXMub3V0ZXJMaW5rcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ10udGVzdDtcclxuICAgIHRoaXMub3V0ZXJMaW5rc1RpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnb3V0ZXItbGlua3MnXS50aXRsZTtcclxuICAgIHRoaXMub3V0ZXJMaW5rc0Rlc2NyaXB0aW9uID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnb3V0ZXItbGlua3MnXS5kZXNjcmlwdGlvbjtcclxuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWNoYXJ0LXRpcHB5JykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxyXG4gICAgICBzZWxlY3RhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1ha2VSZXF1ZXN0JChxdWVyeSwgcGFyYW1zKSB7XHJcbiAgICAvLyBtYWtlIHJlcXVlc3QgZnJvbSBFSFxyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChxdWVyeSwge1xyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XHJcbiAgICAvLyB1cGRhdGUgY29tcG9uZW50cyBmcm9tIEVIXHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsRmlsdGVyUmVxdWVzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpIHtcclxuICAgIHRoaXMuZmlyc3RCdWJibGVSZXNwb25zZSA9IHJlc3BvbnNlLmVudGl0aWVzRGF0YTtcclxuICAgIGNvbnN0IGZhY2V0RGF0YSA9IFtdO1xyXG4gICAgcmVzcG9uc2UudHlwZU9mRW50aXR5RGF0YS5mb3JFYWNoKCh0b2UpID0+IHtcclxuICAgICAgY29uc3QgVE9FY29uZmlnRGF0YSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbdG9lLnR5cGVdO1xyXG4gICAgICBmYWNldERhdGEucHVzaCh7XHJcbiAgICAgICAgLi4udG9lLFxyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgbG9ja2VkOiBmYWxzZSxcclxuICAgICAgICAuLi5UT0Vjb25maWdEYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoZmFjZXREYXRhKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkpIHtcclxuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbnVtT2ZJdGVtcyA9IHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi50b3RhbENvdW50O1xyXG4gICAgaWYgKG51bU9mSXRlbXMgPiAwKSB7XHJcbiAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcclxuICAgICAgd2hpbGUgKG51bU9mSXRlbXMgPiA5OTkpIHtcclxuICAgICAgICBudW1PZkl0ZW1zIC09IDEwMDA7XHJcbiAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBudW1PZkl0ZW1zVG1wU3RyID0gYCR7bnVtT2ZJdGVtc31gO1xyXG4gICAgICBpZiAobnVtT2ZJdGVtcyA8IDEwKSBudW1PZkl0ZW1zVG1wU3RyID0gYDAwJHtudW1PZkl0ZW1zfWA7XHJcbiAgICAgIGVsc2UgaWYgKG51bU9mSXRlbXMgPCAxMDApIG51bU9mSXRlbXNUbXBTdHIgPSBgMCR7bnVtT2ZJdGVtc31gO1xyXG4gICAgICBpZiAobnVtT2ZUaG91c2FuZCA+IDApIHRoaXMubnVtT2ZJdGVtc1N0ciA9IGAke251bU9mVGhvdXNhbmR9LiR7bnVtT2ZJdGVtc1RtcFN0cn1gO1xyXG4gICAgICBlbHNlIHRoaXMubnVtT2ZJdGVtc1N0ciA9IGAke251bU9mSXRlbXN9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9ICcwJztcclxuICAgIH1cclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBjb250ZXh0OiAnaG9tZScsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uKTtcclxuXHJcbiAgICAvLyBzY3JvbGwgY29udHJvbFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3Njcm9sbEJhY2tncm91bmRDb250cm9sKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVUYWdzKG9ubHlCdWJibGVzPzogYm9vbGVhbikge1xyXG4gICAgaWYgKCFvbmx5QnViYmxlcykge1xyXG4gICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGYWNldFNlYXJjaENoYW5nZShjaGFuZ2UpIHtcclxuICAgIGNvbnN0IHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBjaGFuZ2U7XHJcbiAgICAvLyBzdG9yZSB0aGUgZW50ZXJlZCB0ZXh0IGluIGZhY2V0SW5wdXRzXHJcbiAgICB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtVGFncygpIHtcclxuICAgIC8qXHJcbiAgICAgICAgICBUcnkgdG8gYnVpbGQgYW4gaXRlbSB0YWcgZm9yIGVhY2ggc2VsZWN0ZWQgcXVlcnkgbG9va2luZyBhdCB0aGUgZGF0YSBmcm9tIHRoZVxyXG4gICAgICAgICAgZmlyc3QgcmVzcG9uc2UuIElmIHRoZSBuZWVkZWQgYnViYmxlIGRhdGEgY2Fubm90IGJlIGZvdW5kLCBhc2sgdGhlIGJhY2tlbmRcclxuICAgICAgICAgIGZvciB0aGF0IGJ1YmJsZSdzIGRhdGEuXHJcbiAgICAgICovXHJcbiAgICBjb25zdCBxdWVyeUxpc3QgPSBbXTsgLy8gbGlzdCBvZiBwZW5kaW5nIHF1ZXJpZXNcclxuICAgIGNvbnN0IHRhZ3NEYXRhID0gW107IC8vIGxpc3Qgb2YgdGFncyBkYXRhIGJ1aWx0IGZyb20gcXVlcnlcclxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goKGIpID0+IHsgLy8gdHJ5IHRvIGdldCB0aGUgZGF0YSBvZiBlYWNoIHNlbGVjdGVkIGJ1YmJsZVxyXG4gICAgICBjb25zdCB0aGVCdWJibGUgPSB0aGlzLmZpcnN0QnViYmxlUmVzcG9uc2UuZmluZCgoZWwpID0+IGVsLmVudGl0eS5pZCA9PT0gYik7XHJcbiAgICAgIGlmICh0aGVCdWJibGUpIHsgLy8gaWYgYSBidWJibGUgd2FzIGZvdW5kXHJcbiAgICAgICAgY29uc3QgYnViYmxlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVt0aGVCdWJibGUuZW50aXR5LnR5cGVPZkVudGl0eV07XHJcbiAgICAgICAgdGFnc0RhdGEucHVzaCh7XHJcbiAgICAgICAgICBsYWJlbDogdGhlQnViYmxlLmVudGl0eS5sYWJlbCxcclxuICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcclxuICAgICAgICAgIHBheWxvYWQ6IGIsXHJcbiAgICAgICAgICBjbGFzc2VzOiBgdGFnLSR7YnViYmxlQ29uZmlnWydjbGFzcy1uYW1lJ119YCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHsgLy8gaWYgdGhlIGJ1YmJsZSB3YXMgbm90IGZvdW5kLCBtYWtlIGEgcXVlcnlcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVudGl0eUlkOiBiLCBlbnRpdGllc0xpc3RTaXplOiAxIH07XHJcbiAgICAgICAgcXVlcnlMaXN0LnB1c2godGhpcy5tYWtlUmVxdWVzdCQoJ2dldE1pc3NpbmdCdWJibGUnLCBwYXJhbXMpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAocXVlcnlMaXN0Lmxlbmd0aCA+IDApIHsgLy8gaWYgdGhlcmUgYXJlIHBlbmRpbmcgYnViYmxlIHF1ZXJpZXNcclxuICAgICAgZm9ya0pvaW4ocXVlcnlMaXN0KS5zdWJzY3JpYmUoKGZvcmtyZXMpID0+IHtcclxuICAgICAgICBmb3JrcmVzLmZvckVhY2goKHI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYnViYmxlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVtyLnR5cGVPZkVudGl0eV07XHJcbiAgICAgICAgICB0YWdzRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgbGFiZWw6IHIubGFiZWwsXHJcbiAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcclxuICAgICAgICAgICAgcGF5bG9hZDogci5pZCxcclxuICAgICAgICAgICAgY2xhc3NlczogYHRhZy0ke2J1YmJsZUNvbmZpZ1snY2xhc3MtbmFtZSddfWAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlcicpLnVwZGF0ZSh0YWdzRGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZHMgZGF0YSBmb3IgdGhlIGNhcm91c2VsIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGxvYWRDYXJvdXNlbCgpIHtcclxuICAgIGNvbnN0IGJhc2VVcmxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYmFzZVVybHMnKSB8fCB7fTtcclxuICAgIGNvbnN0IGJhc2VVcmwgPSBiYXNlVXJscy5wb3J0YWxlTWF0cmljZVNlcnZlciB8fCBudWxsO1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRTbGlkZXInLCBiYXNlVXJsID8ge1xyXG4gICAgICBwYXJhbXM6IHsgYmFzZVVybCB9XHJcbiAgICB9IDoge30pLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICB0aGlzLm9uZSgnYXctY2Fyb3VzZWwnKS51cGRhdGUocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uSGVyb0NoYW5nZSh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IGhlbHBlcnMuZXNjYXBlUXVvdGVzKHZhbHVlKTtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5uZXh0KGVzY2FwZWRWYWx1ZSk7XHJcbiAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5ID0gZXNjYXBlZFZhbHVlO1xyXG4gICAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcclxuICAgICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3Blbikge1xyXG4gICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpIHtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpO1xyXG4gICAgaWYgKCFub2RlKSByZXR1cm47XHJcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KG5vZGUsICdzY3JvbGwnKTtcclxuXHJcbiAgICAvLyBoZWlnaHQgY29udHJvbFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3NldEhhc1Njcm9sbEJhY2tncm91bmQobm9kZSk7XHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIHNjcm9sbCBsaXN0ZW5cclxuICAgIHNvdXJjZSQucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwKSxcclxuICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9OiB7IHRhcmdldDogYW55IH0pID0+IHtcclxuICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh0YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCkge1xyXG4gICAgdGhpcy5oYXNTY3JvbGxCYWNrZ3JvdW5kID0gdGFyZ2V0ID8gKFxyXG4gICAgICB0YXJnZXQuc2Nyb2xsSGVpZ2h0ID4gKHRhcmdldC5zY3JvbGxUb3AgKyB0YXJnZXQuY2xpZW50SGVpZ2h0KVxyXG4gICAgKSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpIHtcclxuICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBrZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSxcclxuICAgICAgcGF0aHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyksXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxyXG4gICAgKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywge1xyXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBpbnB1dDogdmFsdWUsXHJcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZSh7XHJcbiAgICAgICAgICByZXNwb25zZSxcclxuICAgICAgICAgIHF1ZXJ5OiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlcikge1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdy1ob21lLWFkdmFuY2VkLWF1dG9jb21wbGV0ZS1wb3BvdmVyJyk7XHJcbiAgICAgIHRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBjb25zdCBbcG9wT3Zlcl0gPSB0aGlzLnRpcHB5KCcuYXctaG9tZV9fdG9wLWhlcm8gLm43LWhlcm9fX2lucHV0Jywge1xyXG4gICAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlLFxyXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxyXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIGFycm93OiBmYWxzZSxcclxuICAgICAgICBmbGlwOiBmYWxzZSxcclxuICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXHJcbiAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXInLFxyXG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBvbkhpZGRlbjogKCkgPT4geyB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gZmFsc2U7IH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIgPSBwb3BPdmVyO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5zaG93KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW47XHJcbiAgfVxyXG59XHJcbiJdfQ==