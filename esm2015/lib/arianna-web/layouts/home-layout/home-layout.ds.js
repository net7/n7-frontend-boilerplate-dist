/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { Subject, forkJoin, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
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
        // BUBBLE CHART DATA ↓
        this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
        // true if this Arianna Web project has the bubble chart module
        this.selectedBubbles = []; // array of IDs
        // store the first array of bubbles, to find them in case of zero results (entities data returned as empty array from backend)
        // BUBBLE CHART DATA ↑
        this.homeAutocompleteIsLoading = false;
        this.resultsListIsLoading = false;
        this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        (id, data, options) => {
            // update components from EH
            if (options) {
                this.one(id).updateOptions(options);
            }
            this.one(id).update(data);
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ communication, mainState, configuration, tippy }) {
        this.communication = communication;
        this.configuration = configuration;
        // this.facetData = [];
        this.mainState = mainState;
        this.tippy = tippy;
        this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        this.mainState.updateCustom('currentNav', 'home');
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
        this.outerLinks = this.configuration.get('home-layout')['outer-links']['test'];
        this.outerLinksTitle = this.configuration.get('home-layout')['outer-links']['title'];
        this.one('aw-bubble-chart').updateOptions({
            selectable: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit
        });
    }
    /**
     * @return {?}
     */
    onDestroy() {
        this.destroyed$.next();
    }
    /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    makeRequest$(query, params) {
        // make request from EH
        return this.communication.request$(query, {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params
        });
    }
    /**
     * @return {?}
     */
    initialFilterRequest() {
        return this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            (error) => console.error(error)),
            params: {
                entitiesListSize: this.configuration.get('home-layout')['entitiesQuerySize']
            },
        });
    }
    /**
     * @param {?} response
     * @return {?}
     */
    parseInitialRequest(response) {
        this.firstBubbleResponse = response.entitiesData;
        /** @type {?} */
        const facetData = [];
        response.typeOfEntityData.forEach((/**
         * @param {?} toe
         * @return {?}
         */
        (toe) => {
            /** @type {?} */
            const TOEconfigData = this.configuration.get("config-keys")[toe.type.replace(" ", "-")];
            facetData.push(Object.assign({}, toe, { enabled: true, locked: false, configKey: toe.type.replace(" ", "-") }, TOEconfigData));
        }));
        this.one('aw-home-facets-wrapper').update(facetData);
    }
    /**
     * @param {?} response
     * @return {?}
     */
    renderPreviewsFromApolloQuery(response) {
        if (!response || !response.itemsPagination) {
            return;
        }
        ;
        /** @type {?} */
        let numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            /** @type {?} */
            let numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            /** @type {?} */
            let numOfItemsTmpStr = numOfItems + '';
            if (numOfItems < 10)
                numOfItemsTmpStr = '00' + numOfItems;
            else if (numOfItems < 100)
                numOfItemsTmpStr = '0' + numOfItems;
            if (numOfThousand > 0)
                this.numOfItemsStr = numOfThousand + '.' + numOfItemsTmpStr;
            else
                this.numOfItemsStr = numOfItems + '';
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._scrollBackgroundControl();
        }));
    }
    /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    updateTags(onlyBubbles) {
        if (!onlyBubbles) {
            this.renderItemTags();
        }
    }
    /**
     * @param {?} change
     * @return {?}
     */
    handleFacetSearchChange(change) {
        /** @type {?} */
        var payload = change.inputPayload;
        /** @type {?} */
        var value = change.value;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
    }
    /**
     * @param {?} enter
     * @return {?}
     */
    handleFacetSearchEnter(enter) {
        /** @type {?} */
        var payload = enter.inputPayload;
        // get the text entered in this input
        /** @type {?} */
        var value = this.facetInputs[payload];
    }
    /**
     * @return {?}
     */
    renderItemTags() {
        /*
                    Try to build an item tag for each selected query looking at the data from the
                    first response. If the needed bubble data cannot be found, ask the backend
                    for that bubble's data.
                */
        /** @type {?} */
        let queryList = [] // list of pending queries
        ;
        // list of pending queries
        /** @type {?} */
        let tagsData = [] // list of tags data built from query
        ;
        this.selectedBubbles.forEach((/**
         * @param {?} b
         * @return {?}
         */
        b => {
            // try to get the data of each selected bubble
            /** @type {?} */
            let theBubble = this.firstBubbleResponse.find((/**
             * @param {?} el
             * @return {?}
             */
            el => el.entity.id == b));
            if (theBubble) { // if a bubble was found
                tagsData.push({
                    label: theBubble.entity.label,
                    icon: 'n7-icon-close',
                    payload: b,
                    classes: `tag-${theBubble.entity.typeOfEntity.replace(/ /g, '-')}`
                });
            }
            else { // if the bubble was not found, make a query
                // if the bubble was not found, make a query
                /** @type {?} */
                let params = { entityId: b, entitiesListSize: 1 };
                queryList.push(this.makeRequest$('getMissingBubble', params));
            }
        }));
        if (queryList.length > 0) { // if there are pending bubble queries
            forkJoin(queryList).subscribe((/**
             * @param {?} forkres
             * @return {?}
             */
            forkres => {
                forkres.forEach((/**
                 * @param {?} r
                 * @return {?}
                 */
                r => {
                    tagsData.push({
                        label: r.label,
                        icon: 'n7-icon-close',
                        payload: r.id,
                        classes: `tag-${r.typeOfEntity.replace(/ /g, '-')}`
                    });
                }));
                this.one('aw-home-item-tags-wrapper').update(tagsData);
            }));
        }
        else {
            this.one('aw-home-item-tags-wrapper').update(tagsData);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onHeroChange(value) {
        if (value) {
            this.autocompleteChanged$.next(value);
            this.homeAutocompleteIsLoading = true;
            this.homeAutocompleteQuery = value;
            if (!this.autocompletePopoverOpen) {
                this._toggleAutocompletePopover();
            }
        }
        else if (this.autocompletePopoverOpen) {
            this._toggleAutocompletePopover();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _scrollBackgroundControl() {
        /** @type {?} */
        const node = document.getElementById('bubble-results-list');
        if (!node)
            return;
        /** @type {?} */
        const source$ = fromEvent(node, 'scroll');
        // height control
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._setHasScrollBackground(node);
        }), 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ target }) => {
            this._setHasScrollBackground(target);
        }));
    }
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    _setHasScrollBackground(target) {
        this.hasScrollBackground = target ? (target.scrollHeight > (target.scrollTop + target.clientHeight)) : false;
    }
    /**
     * @private
     * @return {?}
     */
    _listenAutoCompleteChanges() {
        this.one('aw-home-autocomplete').updateOptions({
            keys: this.configuration.get('config-keys'),
            config: this.configuration,
            labels: this.configuration.get('labels')
        });
        this.autocompleteChanged$.pipe(debounceTime(500), takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.communication.request$('autoComplete', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => console.error(error)),
                params: {
                    input: value,
                    itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
                }
            }).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.homeAutocompleteIsLoading = false;
                this.one('aw-home-autocomplete').update(response);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _toggleAutocompletePopover() {
        if (!this.autocompletePopover) {
            /** @type {?} */
            const template = document.getElementById('aw-home-advanced-autocomplete-popover');
            template.style.display = 'block';
            this.autocompletePopover = this.tippy('.aw-home__top-hero .n7-hero__input', {
                content: template,
                trigger: 'manual',
                interactive: true,
                arrow: false,
                flip: false,
                appendTo: 'parent',
                theme: 'light-border',
                placement: 'bottom-start',
                maxWidth: '100%',
                onHidden: (/**
                 * @return {?}
                 */
                () => this.autocompletePopoverOpen = false),
            })[0];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.tippy;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetInputs;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompletePopover;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompletePopoverOpen;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompleteChanged$;
    /** @type {?} */
    AwHomeLayoutDS.prototype.numOfItemsStr;
    /** @type {?} */
    AwHomeLayoutDS.prototype.currentHoverEntity;
    /** @type {?} */
    AwHomeLayoutDS.prototype.hasScrollBackground;
    /** @type {?} */
    AwHomeLayoutDS.prototype.resultsLimit;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedEntitiesIds;
    /** @type {?} */
    AwHomeLayoutDS.prototype.outerLinks;
    /** @type {?} */
    AwHomeLayoutDS.prototype.outerLinksTitle;
    /** @type {?} */
    AwHomeLayoutDS.prototype.homeAutocompleteQuery;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.destroyed$;
    /** @type {?} */
    AwHomeLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.lastBubbleResponse;
    /** @type {?} */
    AwHomeLayoutDS.prototype.firstBubbleResponse;
    /** @type {?} */
    AwHomeLayoutDS.prototype.homeAutocompleteIsLoading;
    /** @type {?} */
    AwHomeLayoutDS.prototype.resultsListIsLoading;
    /** @type {?} */
    AwHomeLayoutDS.prototype.updateComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7SUFBcEQ7O1FBS1ksZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFFdEIsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLHlCQUFvQixHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZELGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLHVCQUFrQixHQUFRLElBQUksQ0FBQztRQUMvQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFJeEIsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztRQUUxQyxtQkFBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLCtEQUErRDs7UUFDdkYsb0JBQWUsR0FBVSxFQUFFLENBQUEsQ0FBTSxlQUFlOzs7UUFJaEQsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQXVDN0Isb0JBQWU7Ozs7OztRQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFRLEVBQUUsRUFBRTtZQUM1Qyw0QkFBNEI7WUFDNUIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsSUFBSSxDQUFD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bSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZm9ya0pvaW4sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICAgIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG4gICAgcHJpdmF0ZSB0aXBweTogYW55O1xuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICAgIHByaXZhdGUgZmFjZXRJbnB1dHM6IGFueSA9IHt9O1xuICAgIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3ZlcjogYW55O1xuICAgIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICAgIHB1YmxpYyBudW1PZkl0ZW1zU3RyOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBjdXJyZW50SG92ZXJFbnRpdHk6IGFueSA9IG51bGw7XG4gICAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQgPSBmYWxzZTtcbiAgICBwdWJsaWMgcmVzdWx0c0xpbWl0ID0gLTE7XG4gICAgcHVibGljIHNlbGVjdGVkRW50aXRpZXNJZHMgPSBbXTtcbiAgICBwdWJsaWMgb3V0ZXJMaW5rczogYW55O1xuICAgIHB1YmxpYyBvdXRlckxpbmtzVGl0bGU6IHN0cmluZztcbiAgICBwdWJsaWMgaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIC8vIEJVQkJMRSBDSEFSVCBEQVRBIOKGk1xuICAgIHB1YmxpYyBidWJibGVzRW5hYmxlZCA9IGZhbHNlOyAvLyB0cnVlIGlmIHRoaXMgQXJpYW5uYSBXZWIgcHJvamVjdCBoYXMgdGhlIGJ1YmJsZSBjaGFydCBtb2R1bGVcbiAgICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdICAgICAgLy8gYXJyYXkgb2YgSURzXG4gICAgcHVibGljIGxhc3RCdWJibGVSZXNwb25zZTogYW55ICAgICAgICAgIC8vIHN0b3JlIGxhc3QgYnViYmxlIHJlc3BvbnNlIHRvIHJlZnJlc2ggdGhlIGdyYXBoIHdpdGggdGhlIHNhbWUgZGF0YVxuICAgIHB1YmxpYyBmaXJzdEJ1YmJsZVJlc3BvbnNlOiBhbnkgICAgICAgICAvLyBzdG9yZSB0aGUgZmlyc3QgYXJyYXkgb2YgYnViYmxlcywgdG8gZmluZCB0aGVtIGluIGNhc2Ugb2YgemVybyByZXN1bHRzIChlbnRpdGllcyBkYXRhIHJldHVybmVkIGFzIGVtcHR5IGFycmF5IGZyb20gYmFja2VuZClcbiAgICAvLyBCVUJCTEUgQ0hBUlQgREFUQSDihpFcbiAgICBwdWJsaWMgaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHB1YmxpYyByZXN1bHRzTGlzdElzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgb25Jbml0KHsgY29tbXVuaWNhdGlvbiwgbWFpblN0YXRlLCBjb25maWd1cmF0aW9uLCB0aXBweSB9KSB7XG4gICAgICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgICAgIC8vIHRoaXMuZmFjZXREYXRhID0gW107XG4gICAgICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgICAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XG4gICAgICAgIHRoaXMucmVzdWx0c0xpbWl0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG4gICAgICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJylbJ2J1YmJsZWNoYXJ0J10gOiBmYWxzZTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWhlcm8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsndG9wLWhlcm8nXSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWhlcm8tcGF0cmltb25pbycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydib3R0b20taGVybyddKTtcbiAgICAgICAgLy8gdXBkYXRlIHN0cmVhbXNcbiAgICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBIb21lJyk7XG4gICAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBIb21lIExheW91dCcpO1xuICAgICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnaG9tZScpO1xuICAgICAgICAvLyBsaXN0ZW4gYXV0b2NvbXBsZXRlIGNoYW5nZXNcbiAgICAgICAgdGhpcy5fbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLm91dGVyTGlua3MgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydvdXRlci1saW5rcyddWyd0ZXN0J107XG4gICAgICAgIHRoaXMub3V0ZXJMaW5rc1RpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnb3V0ZXItbGlua3MnXVsndGl0bGUnXTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpLmJ1YmJsZUxpbWl0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25EZXN0cm95KCl7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbWFrZVJlcXVlc3QkKHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICAgICAgLy8gbWFrZSByZXF1ZXN0IGZyb20gRUhcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChxdWVyeSwge1xuICAgICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50ID0gKGlkLCBkYXRhLCBvcHRpb25zPykgPT4ge1xuICAgICAgICAvLyB1cGRhdGUgY29tcG9uZW50cyBmcm9tIEVIXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSlcbiAgICB9XG5cbiAgICBpbml0aWFsRmlsdGVyUmVxdWVzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2VudGl0aWVzUXVlcnlTaXplJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcGFyc2VJbml0aWFsUmVxdWVzdChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmZpcnN0QnViYmxlUmVzcG9uc2UgPSByZXNwb25zZS5lbnRpdGllc0RhdGFcbiAgICAgICAgY29uc3QgZmFjZXREYXRhID0gW11cbiAgICAgICAgcmVzcG9uc2UudHlwZU9mRW50aXR5RGF0YS5mb3JFYWNoKCh0b2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFRPRWNvbmZpZ0RhdGEgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbdG9lLnR5cGUucmVwbGFjZShcIiBcIiwgXCItXCIpXTtcbiAgICAgICAgICAgIGZhY2V0RGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAuLi50b2UsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2NrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ0tleTogdG9lLnR5cGUucmVwbGFjZShcIiBcIiwgXCItXCIpLFxuICAgICAgICAgICAgICAgIC4uLlRPRWNvbmZpZ0RhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoZmFjZXREYXRhKTtcbiAgICB9XG5cbiAgICByZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55KSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH07XG4gICAgICAgIGxldCBudW1PZkl0ZW1zID0gcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLnRvdGFsQ291bnQ7XG4gICAgICAgIGlmIChudW1PZkl0ZW1zID4gMCkge1xuICAgICAgICAgICAgbGV0IG51bU9mVGhvdXNhbmQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKG51bU9mSXRlbXMgPiA5OTkpIHtcbiAgICAgICAgICAgICAgICBudW1PZkl0ZW1zIC09IDEwMDA7XG4gICAgICAgICAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG51bU9mSXRlbXNUbXBTdHIgPSBudW1PZkl0ZW1zICsgJyc7XG4gICAgICAgICAgICBpZiAobnVtT2ZJdGVtcyA8IDEwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAwJyArIG51bU9mSXRlbXM7XG4gICAgICAgICAgICBlbHNlIGlmIChudW1PZkl0ZW1zIDwgMTAwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAnICsgbnVtT2ZJdGVtcztcbiAgICAgICAgICAgIGlmIChudW1PZlRob3VzYW5kID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZlRob3VzYW5kICsgJy4nICsgbnVtT2ZJdGVtc1RtcFN0cjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZkl0ZW1zICsgJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgICBjb250ZXh0OiAnaG9tZScsXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbik7XG5cbiAgICAgICAgLy8gc2Nyb2xsIGNvbnRyb2xcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVGFncyhvbmx5QnViYmxlcz86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFvbmx5QnViYmxlcykge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJJdGVtVGFncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBjaGFuZ2UuaW5wdXRQYXlsb2FkO1xuICAgICAgICB2YXIgdmFsdWU6IHN0cmluZyA9IGNoYW5nZS52YWx1ZTtcbiAgICAgICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgICAgICB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihlbnRlcikge1xuICAgICAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gZW50ZXIuaW5wdXRQYXlsb2FkO1xuICAgICAgICAvLyBnZXQgdGhlIHRleHQgZW50ZXJlZCBpbiB0aGlzIGlucHV0XG4gICAgICAgIHZhciB2YWx1ZTogc3RyaW5nID0gdGhpcy5mYWNldElucHV0c1twYXlsb2FkXTtcbiAgICB9XG5cbiAgICByZW5kZXJJdGVtVGFncygpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIFRyeSB0byBidWlsZCBhbiBpdGVtIHRhZyBmb3IgZWFjaCBzZWxlY3RlZCBxdWVyeSBsb29raW5nIGF0IHRoZSBkYXRhIGZyb20gdGhlXG4gICAgICAgICAgICBmaXJzdCByZXNwb25zZS4gSWYgdGhlIG5lZWRlZCBidWJibGUgZGF0YSBjYW5ub3QgYmUgZm91bmQsIGFzayB0aGUgYmFja2VuZFxuICAgICAgICAgICAgZm9yIHRoYXQgYnViYmxlJ3MgZGF0YS5cbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHF1ZXJ5TGlzdCA9IFtdIC8vIGxpc3Qgb2YgcGVuZGluZyBxdWVyaWVzXG4gICAgICAgIGxldCB0YWdzRGF0YSA9IFtdICAvLyBsaXN0IG9mIHRhZ3MgZGF0YSBidWlsdCBmcm9tIHF1ZXJ5XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goYiA9PiB7IC8vIHRyeSB0byBnZXQgdGhlIGRhdGEgb2YgZWFjaCBzZWxlY3RlZCBidWJibGVcbiAgICAgICAgICAgIGxldCB0aGVCdWJibGUgPSB0aGlzLmZpcnN0QnViYmxlUmVzcG9uc2UuZmluZChlbCA9PiBlbC5lbnRpdHkuaWQgPT0gYilcbiAgICAgICAgICAgIGlmICh0aGVCdWJibGUpIHsgLy8gaWYgYSBidWJibGUgd2FzIGZvdW5kXG4gICAgICAgICAgICAgICAgdGFnc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGVCdWJibGUuZW50aXR5LmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGB0YWctJHt0aGVCdWJibGUuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJyl9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgYnViYmxlIHdhcyBub3QgZm91bmQsIG1ha2UgYSBxdWVyeVxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7IGVudGl0eUlkOiBiLCBlbnRpdGllc0xpc3RTaXplOiAxIH1cbiAgICAgICAgICAgICAgICBxdWVyeUxpc3QucHVzaCh0aGlzLm1ha2VSZXF1ZXN0JCgnZ2V0TWlzc2luZ0J1YmJsZScsIHBhcmFtcykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocXVlcnlMaXN0Lmxlbmd0aCA+IDApIHsgLy8gaWYgdGhlcmUgYXJlIHBlbmRpbmcgYnViYmxlIHF1ZXJpZXNcbiAgICAgICAgICAgIGZvcmtKb2luKHF1ZXJ5TGlzdCkuc3Vic2NyaWJlKGZvcmtyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGZvcmtyZXMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogci5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBgdGFnLSR7ci50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpfWBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlcicpLnVwZGF0ZSh0YWdzRGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IZXJvQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhvbWVBdXRvY29tcGxldGVRdWVyeSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3Njcm9sbEJhY2tncm91bmRDb250cm9sKCkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZS1yZXN1bHRzLWxpc3QnKVxuICAgICAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudChub2RlLCAnc2Nyb2xsJyk7XG5cbiAgICAgICAgLy8gaGVpZ2h0IGNvbnRyb2xcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKG5vZGUpO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIC8vIHNjcm9sbCBsaXN0ZW5cbiAgICAgICAgc291cmNlJC5waXBlKFxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDUwKVxuICAgICAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IGFueSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEhhc1Njcm9sbEJhY2tncm91bmQodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHRhcmdldCA/IChcbiAgICAgICAgICAgIHRhcmdldC5zY3JvbGxIZWlnaHQgPiAodGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQpXG4gICAgICAgICkgOiBmYWxzZVxuICAgIH1cblxuICAgIHByaXZhdGUgX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAga2V5czogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKSxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5waXBlKFxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICAgICApLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHtcbiAgICAgICAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjogeyBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J10gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVBdXRvY29tcGxldGVJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdy1ob21lLWFkdmFuY2VkLWF1dG9jb21wbGV0ZS1wb3BvdmVyJyk7XG4gICAgICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3ZlciA9IHRoaXMudGlwcHkoJy5hdy1ob21lX190b3AtaGVybyAubjctaGVyb19faW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgY29udGVudDogdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG9uSGlkZGVuOiAoKSA9PiB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gZmFsc2UsXG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3Blbikge1xuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9ICF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuO1xuICAgIH1cbn1cbiJdfQ==