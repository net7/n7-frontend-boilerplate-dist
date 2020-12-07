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
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled').bubblechart : false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QyxNQUFNLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjtJQUFwRDs7UUFTVSxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUl0Qiw0QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFFaEMseUJBQW9CLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFFdkQsa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFFN0IsdUJBQWtCLEdBQVEsSUFBSSxDQUFDO1FBRS9CLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQUU1QixpQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWxCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQVF4QixlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFMUMsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBRWxDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUVwQywyQkFBMkI7UUFDcEIsbUJBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQywrREFBK0Q7UUFFdkYsb0JBQWUsR0FBVSxFQUFFLENBQUEsQ0FBQyxlQUFlO1FBb0QzQyxvQkFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFRLEVBQUUsRUFBRTtZQUM5Qyw0QkFBNEI7WUFD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O1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sMEJBQTBCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQ2xGLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRTtnQkFDakUsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixXQUFXLEVBQUUsSUFBSTtnQkFDakIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxjQUFjO2dCQUNyQixTQUFTLEVBQUUsY0FBYztnQkFDekIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMxRCxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDL0QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgZm9ya0pvaW4sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgdGlwcHk6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZmFjZXRJbnB1dHM6IGFueSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXI6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgbnVtT2ZJdGVtc1N0cjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHJlc3VsdHNMaW1pdCA9IC0xO1xyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IFtdO1xyXG5cclxuICBwdWJsaWMgb3V0ZXJMaW5rczogYW55O1xyXG5cclxuICBwdWJsaWMgb3V0ZXJMaW5rc1RpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBob21lQXV0b2NvbXBsZXRlUXVlcnk6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgcmVzdWx0c0xpc3RJc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgLy8gPT09PT0gQlVCQkxFIENIQVJUID09PT09XHJcbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkID0gZmFsc2U7IC8vIHRydWUgaWYgdGhpcyBBcmlhbm5hIFdlYiBwcm9qZWN0IGhhcyB0aGUgYnViYmxlIGNoYXJ0IG1vZHVsZVxyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIElEc1xyXG5cclxuICAvLyBzdG9yZSBsYXN0IGJ1YmJsZSByZXNwb25zZSB0byByZWZyZXNoIHRoZSBncmFwaCB3aXRoIHRoZSBzYW1lIGRhdGFcclxuICBwdWJsaWMgbGFzdEJ1YmJsZVJlc3BvbnNlOiBhbnlcclxuXHJcbiAgLy8gc3RvcmUgdGhlIGZpcnN0IGFycmF5IG9mIGJ1YmJsZXMsIHRvIGZpbmQgdGhlbSBpbiBjYXNlIG9mIG5vIHJlc3VsdHMuXHJcbiAgcHVibGljIGZpcnN0QnViYmxlUmVzcG9uc2U6IGFueVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29tbXVuaWNhdGlvbiwgbWFpblN0YXRlLCBjb25maWd1cmF0aW9uLCB0aXBweSxcclxuICB9KSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIC8vIHRoaXMuZmFjZXREYXRhID0gW107XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcclxuICAgIHRoaXMudGlwcHkgPSB0aXBweTtcclxuICAgIHRoaXMucmVzdWx0c0xpbWl0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddO1xyXG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKS5idWJibGVjaGFydCA6IGZhbHNlO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWhlcm8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsndG9wLWhlcm8nXSk7XHJcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYm90dG9tLWhlcm8nXSk7XHJcbiAgICAvLyB1cGRhdGUgc3RyZWFtc1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gSG9tZXBhZ2UnKTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmE0VmlldyAtIEhvbWVwYWdlJyk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnaG9tZScpO1xyXG4gICAgLy8gbGlzdGVuIGF1dG9jb21wbGV0ZSBjaGFuZ2VzXHJcbiAgICB0aGlzLl9saXN0ZW5BdXRvQ29tcGxldGVDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLm91dGVyTGlua3MgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydvdXRlci1saW5rcyddLnRlc3Q7XHJcbiAgICB0aGlzLm91dGVyTGlua3NUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ10udGl0bGU7XHJcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIHNlbGVjdGFibGU6IHRydWUsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgICBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBiYXNlUGF0aDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aCxcclxuICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYWtlUmVxdWVzdCQocXVlcnksIHBhcmFtcykge1xyXG4gICAgLy8gbWFrZSByZXF1ZXN0IGZyb20gRUhcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocXVlcnksIHtcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50ID0gKGlkLCBkYXRhLCBvcHRpb25zPykgPT4ge1xyXG4gICAgLy8gdXBkYXRlIGNvbXBvbmVudHMgZnJvbSBFSFxyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uZShpZCkudXBkYXRlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbEZpbHRlclJlcXVlc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpLmJ1YmJsZUxpbWl0LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLmZpcnN0QnViYmxlUmVzcG9uc2UgPSByZXNwb25zZS5lbnRpdGllc0RhdGE7XHJcbiAgICBjb25zdCBmYWNldERhdGEgPSBbXTtcclxuICAgIHJlc3BvbnNlLnR5cGVPZkVudGl0eURhdGEuZm9yRWFjaCgodG9lKSA9PiB7XHJcbiAgICAgIGNvbnN0IFRPRWNvbmZpZ0RhdGEgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3RvZS50eXBlXTtcclxuICAgICAgZmFjZXREYXRhLnB1c2goe1xyXG4gICAgICAgIC4uLnRvZSxcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGxvY2tlZDogZmFsc2UsXHJcbiAgICAgICAgLi4uVE9FY29uZmlnRGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKGZhY2V0RGF0YSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55KSB7XHJcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IG51bU9mSXRlbXMgPSByZXNwb25zZS5pdGVtc1BhZ2luYXRpb24udG90YWxDb3VudDtcclxuICAgIGlmIChudW1PZkl0ZW1zID4gMCkge1xyXG4gICAgICBsZXQgbnVtT2ZUaG91c2FuZCA9IDA7XHJcbiAgICAgIHdoaWxlIChudW1PZkl0ZW1zID4gOTk5KSB7XHJcbiAgICAgICAgbnVtT2ZJdGVtcyAtPSAxMDAwO1xyXG4gICAgICAgIG51bU9mVGhvdXNhbmQgKz0gMTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbnVtT2ZJdGVtc1RtcFN0ciA9IGAke251bU9mSXRlbXN9YDtcclxuICAgICAgaWYgKG51bU9mSXRlbXMgPCAxMCkgbnVtT2ZJdGVtc1RtcFN0ciA9IGAwMCR7bnVtT2ZJdGVtc31gO1xyXG4gICAgICBlbHNlIGlmIChudW1PZkl0ZW1zIDwgMTAwKSBudW1PZkl0ZW1zVG1wU3RyID0gYDAke251bU9mSXRlbXN9YDtcclxuICAgICAgaWYgKG51bU9mVGhvdXNhbmQgPiAwKSB0aGlzLm51bU9mSXRlbXNTdHIgPSBgJHtudW1PZlRob3VzYW5kfS4ke251bU9mSXRlbXNUbXBTdHJ9YDtcclxuICAgICAgZWxzZSB0aGlzLm51bU9mSXRlbXNTdHIgPSBgJHtudW1PZkl0ZW1zfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSAnMCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgY29udGV4dDogJ2hvbWUnLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbik7XHJcblxyXG4gICAgLy8gc2Nyb2xsIGNvbnRyb2xcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlVGFncyhvbmx5QnViYmxlcz86IGJvb2xlYW4pIHtcclxuICAgIGlmICghb25seUJ1YmJsZXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJJdGVtVGFncygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XHJcbiAgICBjb25zdCBwYXlsb2FkOiBzdHJpbmcgPSBjaGFuZ2UuaW5wdXRQYXlsb2FkO1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gY2hhbmdlO1xyXG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xyXG4gICAgdGhpcy5mYWNldElucHV0c1twYXlsb2FkXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbVRhZ3MoKSB7XHJcbiAgICAvKlxyXG4gICAgICAgICAgVHJ5IHRvIGJ1aWxkIGFuIGl0ZW0gdGFnIGZvciBlYWNoIHNlbGVjdGVkIHF1ZXJ5IGxvb2tpbmcgYXQgdGhlIGRhdGEgZnJvbSB0aGVcclxuICAgICAgICAgIGZpcnN0IHJlc3BvbnNlLiBJZiB0aGUgbmVlZGVkIGJ1YmJsZSBkYXRhIGNhbm5vdCBiZSBmb3VuZCwgYXNrIHRoZSBiYWNrZW5kXHJcbiAgICAgICAgICBmb3IgdGhhdCBidWJibGUncyBkYXRhLlxyXG4gICAgICAqL1xyXG4gICAgY29uc3QgcXVlcnlMaXN0ID0gW107IC8vIGxpc3Qgb2YgcGVuZGluZyBxdWVyaWVzXHJcbiAgICBjb25zdCB0YWdzRGF0YSA9IFtdOyAvLyBsaXN0IG9mIHRhZ3MgZGF0YSBidWlsdCBmcm9tIHF1ZXJ5XHJcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKChiKSA9PiB7IC8vIHRyeSB0byBnZXQgdGhlIGRhdGEgb2YgZWFjaCBzZWxlY3RlZCBidWJibGVcclxuICAgICAgY29uc3QgdGhlQnViYmxlID0gdGhpcy5maXJzdEJ1YmJsZVJlc3BvbnNlLmZpbmQoKGVsKSA9PiBlbC5lbnRpdHkuaWQgPT09IGIpO1xyXG4gICAgICBpZiAodGhlQnViYmxlKSB7IC8vIGlmIGEgYnViYmxlIHdhcyBmb3VuZFxyXG4gICAgICAgIGNvbnN0IGJ1YmJsZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbdGhlQnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHldO1xyXG4gICAgICAgIHRhZ3NEYXRhLnB1c2goe1xyXG4gICAgICAgICAgbGFiZWw6IHRoZUJ1YmJsZS5lbnRpdHkubGFiZWwsXHJcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICBwYXlsb2FkOiBiLFxyXG4gICAgICAgICAgY2xhc3NlczogYHRhZy0ke2J1YmJsZUNvbmZpZ1snY2xhc3MtbmFtZSddfWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7IC8vIGlmIHRoZSBidWJibGUgd2FzIG5vdCBmb3VuZCwgbWFrZSBhIHF1ZXJ5XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBlbnRpdHlJZDogYiwgZW50aXRpZXNMaXN0U2l6ZTogMSB9O1xyXG4gICAgICAgIHF1ZXJ5TGlzdC5wdXNoKHRoaXMubWFrZVJlcXVlc3QkKCdnZXRNaXNzaW5nQnViYmxlJywgcGFyYW1zKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHF1ZXJ5TGlzdC5sZW5ndGggPiAwKSB7IC8vIGlmIHRoZXJlIGFyZSBwZW5kaW5nIGJ1YmJsZSBxdWVyaWVzXHJcbiAgICAgIGZvcmtKb2luKHF1ZXJ5TGlzdCkuc3Vic2NyaWJlKChmb3JrcmVzKSA9PiB7XHJcbiAgICAgICAgZm9ya3Jlcy5mb3JFYWNoKChyOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJ1YmJsZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbci50eXBlT2ZFbnRpdHldO1xyXG4gICAgICAgICAgdGFnc0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiByLmxhYmVsLFxyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHIuaWQsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6IGB0YWctJHtidWJibGVDb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSGVyb0NoYW5nZSh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IGhlbHBlcnMuZXNjYXBlUXVvdGVzKHZhbHVlKTtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5uZXh0KGVzY2FwZWRWYWx1ZSk7XHJcbiAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5ID0gZXNjYXBlZFZhbHVlO1xyXG4gICAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcclxuICAgICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3Blbikge1xyXG4gICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpIHtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpO1xyXG4gICAgaWYgKCFub2RlKSByZXR1cm47XHJcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KG5vZGUsICdzY3JvbGwnKTtcclxuXHJcbiAgICAvLyBoZWlnaHQgY29udHJvbFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3NldEhhc1Njcm9sbEJhY2tncm91bmQobm9kZSk7XHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIHNjcm9sbCBsaXN0ZW5cclxuICAgIHNvdXJjZSQucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwKSxcclxuICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9OiB7IHRhcmdldDogYW55IH0pID0+IHtcclxuICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh0YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCkge1xyXG4gICAgdGhpcy5oYXNTY3JvbGxCYWNrZ3JvdW5kID0gdGFyZ2V0ID8gKFxyXG4gICAgICB0YXJnZXQuc2Nyb2xsSGVpZ2h0ID4gKHRhcmdldC5zY3JvbGxUb3AgKyB0YXJnZXQuY2xpZW50SGVpZ2h0KVxyXG4gICAgKSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpIHtcclxuICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBrZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSxcclxuICAgICAgcGF0aHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyksXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxyXG4gICAgKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywge1xyXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBpbnB1dDogdmFsdWUsXHJcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZSh7XHJcbiAgICAgICAgICByZXNwb25zZSxcclxuICAgICAgICAgIHF1ZXJ5OiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlcikge1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdy1ob21lLWFkdmFuY2VkLWF1dG9jb21wbGV0ZS1wb3BvdmVyJyk7XHJcbiAgICAgIHRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBjb25zdCBbcG9wT3Zlcl0gPSB0aGlzLnRpcHB5KCcuYXctaG9tZV9fdG9wLWhlcm8gLm43LWhlcm9fX2lucHV0Jywge1xyXG4gICAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlLFxyXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxyXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIGFycm93OiBmYWxzZSxcclxuICAgICAgICBmbGlwOiBmYWxzZSxcclxuICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXHJcbiAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXInLFxyXG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBvbkhpZGRlbjogKCkgPT4geyB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gZmFsc2U7IH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIgPSBwb3BPdmVyO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5zaG93KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW47XHJcbiAgfVxyXG59XHJcbiJdfQ==