/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import { Subject, forkJoin, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import helpers from 'n7-boilerplate-lib/lib/common/helpers';
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
        // true if this Arianna Web project has the bubble chart module
        this.selectedBubbles = []; // array of IDs
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
    // store the first array of bubbles, to find them in case of zero results (entities data returned as empty array from backend)
    // ========================
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
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths')['entitaBasePath'],
            selectable: true
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
                entitiesListSize: this.configuration.get('bubble-chart')['bubbleLimit']
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
            const TOEconfigData = this.configuration.get('config-keys')[toe.type];
            facetData.push(Object.assign({}, toe, { enabled: true, locked: false }, TOEconfigData));
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
        const queryList = [];
        // list of pending queries
        /** @type {?} */
        const tagsData = [];
        this.selectedBubbles.forEach((/**
         * @param {?} b
         * @return {?}
         */
        b => {
            // try to get the data of each selected bubble
            /** @type {?} */
            const theBubble = this.firstBubbleResponse.find((/**
             * @param {?} el
             * @return {?}
             */
            el => el.entity.id === b));
            if (theBubble) { // if a bubble was found
                // if a bubble was found
                /** @type {?} */
                const bubbleConfig = this.configuration.get('config-keys')[theBubble.entity.typeOfEntity];
                tagsData.push({
                    label: theBubble.entity.label,
                    icon: 'n7-icon-close',
                    payload: b,
                    classes: `tag-${bubbleConfig['class-name']}`
                });
            }
            else { // if the bubble was not found, make a query
                // if the bubble was not found, make a query
                /** @type {?} */
                const params = { entityId: b, entitiesListSize: 1 };
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
                    /** @type {?} */
                    const bubbleConfig = this.configuration.get('config-keys')[r.typeOfEntity];
                    tagsData.push({
                        label: r.label,
                        icon: 'n7-icon-close',
                        payload: r.id,
                        classes: `tag-${bubbleConfig['class-name']}`
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
            value = helpers.escapeDoubleQuotes(value);
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
            labels: this.configuration.get('labels'),
            paths: this.configuration.get('paths')
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
                this.one('aw-home-autocomplete').update({
                    response,
                    query: value
                });
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
    AwHomeLayoutDS.prototype.homeAutocompleteIsLoading;
    /** @type {?} */
    AwHomeLayoutDS.prototype.resultsListIsLoading;
    /** @type {?} */
    AwHomeLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.lastBubbleResponse;
    /** @type {?} */
    AwHomeLayoutDS.prototype.firstBubbleResponse;
    /** @type {?} */
    AwHomeLayoutDS.prototype.updateComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxPQUFPLE1BQU0sdUNBQXVDLENBQUM7QUFFNUQsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7SUFBcEQ7O1FBS1ksZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFFdEIsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLHlCQUFvQixHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZELGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzdCLHVCQUFrQixHQUFRLElBQUksQ0FBQztRQUMvQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsaUJBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFJeEIsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzFDLDhCQUF5QixHQUFHLEtBQUssQ0FBQztRQUNsQyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7O1FBRTdCLG1CQUFjLEdBQUcsS0FBSyxDQUFDLENBQUssK0RBQStEOztRQUMzRixvQkFBZSxHQUFVLEVBQUUsQ0FBQSxDQUFDLGVBQWU7UUE4QzNDLG9CQUFlOzs7Ozs7UUFBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBUSxFQUFFLEVBQUU7WUFDNUMsNEJBQTRCO1lBQzVC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Ozs7OztJQUNqQyxpREFBd0M7Ozs7O0lBQ3hDLDhDQUE4RDs7SUFDOUQsdUNBQW9DOztJQUNwQyw0Q0FBc0M7O0lBQ3RDLDZDQUFtQzs7SUFDbkMsc0NBQXlCOztJQUN6Qiw2Q0FBZ0M7O0lBQ2hDLG9DQUF1Qjs7SUFDdkIseUNBQStCOztJQUMvQiwrQ0FBcUM7Ozs7O0lBQ3JDLG9DQUFpRDs7SUFDakQsbURBQXlDOztJQUN6Qyw4Q0FBb0M7O0lBRXBDLHdDQUE4Qjs7SUFDOUIseUNBQWtDOztJQUNsQyw0Q0FBOEI7O0lBQzlCLDZDQUErQjs7SUE0Qy9CLHlDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGZvcmtKb2luLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnbjctYm9pbGVycGxhdGUtbGliL2xpYi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICAgIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICAgIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG4gICAgcHJpdmF0ZSB0aXBweTogYW55O1xuICAgIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICAgIHByaXZhdGUgZmFjZXRJbnB1dHM6IGFueSA9IHt9O1xuICAgIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3ZlcjogYW55O1xuICAgIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICAgIHB1YmxpYyBudW1PZkl0ZW1zU3RyOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBjdXJyZW50SG92ZXJFbnRpdHk6IGFueSA9IG51bGw7XG4gICAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQgPSBmYWxzZTtcbiAgICBwdWJsaWMgcmVzdWx0c0xpbWl0ID0gLTE7XG4gICAgcHVibGljIHNlbGVjdGVkRW50aXRpZXNJZHMgPSBbXTtcbiAgICBwdWJsaWMgb3V0ZXJMaW5rczogYW55O1xuICAgIHB1YmxpYyBvdXRlckxpbmtzVGl0bGU6IHN0cmluZztcbiAgICBwdWJsaWMgaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIHB1YmxpYyBob21lQXV0b2NvbXBsZXRlSXNMb2FkaW5nID0gZmFsc2U7XG4gICAgcHVibGljIHJlc3VsdHNMaXN0SXNMb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gPT09PT0gQlVCQkxFIENIQVJUID09PT09XG4gICAgcHVibGljIGJ1YmJsZXNFbmFibGVkID0gZmFsc2U7ICAgICAvLyB0cnVlIGlmIHRoaXMgQXJpYW5uYSBXZWIgcHJvamVjdCBoYXMgdGhlIGJ1YmJsZSBjaGFydCBtb2R1bGVcbiAgICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIElEc1xuICAgIHB1YmxpYyBsYXN0QnViYmxlUmVzcG9uc2U6IGFueSAgICAgLy8gc3RvcmUgbGFzdCBidWJibGUgcmVzcG9uc2UgdG8gcmVmcmVzaCB0aGUgZ3JhcGggd2l0aCB0aGUgc2FtZSBkYXRhXG4gICAgcHVibGljIGZpcnN0QnViYmxlUmVzcG9uc2U6IGFueSAgICAvLyBzdG9yZSB0aGUgZmlyc3QgYXJyYXkgb2YgYnViYmxlcywgdG8gZmluZCB0aGVtIGluIGNhc2Ugb2YgemVybyByZXN1bHRzIChlbnRpdGllcyBkYXRhIHJldHVybmVkIGFzIGVtcHR5IGFycmF5IGZyb20gYmFja2VuZClcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIG9uSW5pdCh7IGNvbW11bmljYXRpb24sIG1haW5TdGF0ZSwgY29uZmlndXJhdGlvbiwgdGlwcHkgfSkge1xuICAgICAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICAvLyB0aGlzLmZhY2V0RGF0YSA9IFtdO1xuICAgICAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICAgICAgdGhpcy50aXBweSA9IHRpcHB5O1xuICAgICAgICB0aGlzLnJlc3VsdHNMaW1pdCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXVxuICAgICAgICB0aGlzLmJ1YmJsZXNFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpWydidWJibGVjaGFydCddIDogZmFsc2U7XG4gICAgICAgIHRoaXMub25lKCdhdy1oZXJvJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3RvcC1oZXJvJ10pO1xuICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYm90dG9tLWhlcm8nXSk7XG4gICAgICAgIC8vIHVwZGF0ZSBzdHJlYW1zXG4gICAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gSG9tZScpO1xuICAgICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hIFdlYjogSG9tZSBMYXlvdXQnKTtcbiAgICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ2hvbWUnKTtcbiAgICAgICAgLy8gbGlzdGVuIGF1dG9jb21wbGV0ZSBjaGFuZ2VzXG4gICAgICAgIHRoaXMuX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5vdXRlckxpbmtzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnb3V0ZXItbGlua3MnXVsndGVzdCddO1xuICAgICAgICB0aGlzLm91dGVyTGlua3NUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ11bJ3RpdGxlJ107XG4gICAgICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLm9uZSgnYXctY2hhcnQtdGlwcHknKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpWydlbnRpdGFCYXNlUGF0aCddLFxuICAgICAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpe1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpXG4gICAgfVxuXG4gICAgcHVibGljIG1ha2VSZXF1ZXN0JChxdWVyeSwgcGFyYW1zKSB7XG4gICAgICAgIC8vIG1ha2UgcmVxdWVzdCBmcm9tIEVIXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocXVlcnksIHtcbiAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcbiAgICAgICAgLy8gdXBkYXRlIGNvbXBvbmVudHMgZnJvbSBFSFxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uZShpZCkudXBkYXRlKGRhdGEpXG4gICAgfVxuXG4gICAgaW5pdGlhbEZpbHRlclJlcXVlc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKVsnYnViYmxlTGltaXQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuZmlyc3RCdWJibGVSZXNwb25zZSA9IHJlc3BvbnNlLmVudGl0aWVzRGF0YTtcbiAgICAgICAgY29uc3QgZmFjZXREYXRhID0gW107XG4gICAgICAgIHJlc3BvbnNlLnR5cGVPZkVudGl0eURhdGEuZm9yRWFjaCgodG9lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBUT0Vjb25maWdEYXRhID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVt0b2UudHlwZV07XG4gICAgICAgICAgICBmYWNldERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgLi4udG9lLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAuLi5UT0Vjb25maWdEYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKGZhY2V0RGF0YSk7XG4gICAgfVxuXG4gICAgcmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9O1xuICAgICAgICBsZXQgbnVtT2ZJdGVtcyA9IHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi50b3RhbENvdW50O1xuICAgICAgICBpZiAobnVtT2ZJdGVtcyA+IDApIHtcbiAgICAgICAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChudW1PZkl0ZW1zID4gOTk5KSB7XG4gICAgICAgICAgICAgICAgbnVtT2ZJdGVtcyAtPSAxMDAwO1xuICAgICAgICAgICAgICAgIG51bU9mVGhvdXNhbmQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBudW1PZkl0ZW1zVG1wU3RyID0gbnVtT2ZJdGVtcyArICcnO1xuICAgICAgICAgICAgaWYgKG51bU9mSXRlbXMgPCAxMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwMCcgKyBudW1PZkl0ZW1zO1xuICAgICAgICAgICAgZWxzZSBpZiAobnVtT2ZJdGVtcyA8IDEwMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwJyArIG51bU9mSXRlbXM7XG4gICAgICAgICAgICBpZiAobnVtT2ZUaG91c2FuZCA+IDApXG4gICAgICAgICAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZUaG91c2FuZCArICcuJyArIG51bU9mSXRlbXNUbXBTdHI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZJdGVtcyArICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gJzAnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAgY29udGV4dDogJ2hvbWUnLFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pO1xuXG4gICAgICAgIC8vIHNjcm9sbCBjb250cm9sXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsQmFja2dyb3VuZENvbnRyb2woKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRhZ3Mob25seUJ1YmJsZXM/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICghb25seUJ1YmJsZXMpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVySXRlbVRhZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUZhY2V0U2VhcmNoQ2hhbmdlKGNoYW5nZSkge1xuICAgICAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gY2hhbmdlLmlucHV0UGF5bG9hZDtcbiAgICAgICAgdmFyIHZhbHVlOiBzdHJpbmcgPSBjaGFuZ2UudmFsdWU7XG4gICAgICAgIC8vIHN0b3JlIHRoZSBlbnRlcmVkIHRleHQgaW4gZmFjZXRJbnB1dHNcbiAgICAgICAgdGhpcy5mYWNldElucHV0c1twYXlsb2FkXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGhhbmRsZUZhY2V0U2VhcmNoRW50ZXIoZW50ZXIpIHtcbiAgICAgICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGVudGVyLmlucHV0UGF5bG9hZDtcbiAgICAgICAgLy8gZ2V0IHRoZSB0ZXh0IGVudGVyZWQgaW4gdGhpcyBpbnB1dFxuICAgICAgICB2YXIgdmFsdWU6IHN0cmluZyA9IHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF07XG4gICAgfVxuXG4gICAgcmVuZGVySXRlbVRhZ3MoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBUcnkgdG8gYnVpbGQgYW4gaXRlbSB0YWcgZm9yIGVhY2ggc2VsZWN0ZWQgcXVlcnkgbG9va2luZyBhdCB0aGUgZGF0YSBmcm9tIHRoZVxuICAgICAgICAgICAgZmlyc3QgcmVzcG9uc2UuIElmIHRoZSBuZWVkZWQgYnViYmxlIGRhdGEgY2Fubm90IGJlIGZvdW5kLCBhc2sgdGhlIGJhY2tlbmRcbiAgICAgICAgICAgIGZvciB0aGF0IGJ1YmJsZSdzIGRhdGEuXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IFtdOyAvLyBsaXN0IG9mIHBlbmRpbmcgcXVlcmllc1xuICAgICAgICBjb25zdCB0YWdzRGF0YSA9IFtdOyAgLy8gbGlzdCBvZiB0YWdzIGRhdGEgYnVpbHQgZnJvbSBxdWVyeVxuICAgICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKGIgPT4geyAvLyB0cnkgdG8gZ2V0IHRoZSBkYXRhIG9mIGVhY2ggc2VsZWN0ZWQgYnViYmxlXG4gICAgICAgICAgICBjb25zdCB0aGVCdWJibGUgPSB0aGlzLmZpcnN0QnViYmxlUmVzcG9uc2UuZmluZChlbCA9PiBlbC5lbnRpdHkuaWQgPT09IGIpO1xuICAgICAgICAgICAgaWYgKHRoZUJ1YmJsZSkgeyAvLyBpZiBhIGJ1YmJsZSB3YXMgZm91bmRcbiAgICAgICAgICAgICAgICBjb25zdCBidWJibGVDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3RoZUJ1YmJsZS5lbnRpdHkudHlwZU9mRW50aXR5XTtcbiAgICAgICAgICAgICAgICB0YWdzRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRoZUJ1YmJsZS5lbnRpdHkubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogYixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogYHRhZy0ke2J1YmJsZUNvbmZpZ1snY2xhc3MtbmFtZSddfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gaWYgdGhlIGJ1YmJsZSB3YXMgbm90IGZvdW5kLCBtYWtlIGEgcXVlcnlcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVudGl0eUlkOiBiLCBlbnRpdGllc0xpc3RTaXplOiAxIH07XG4gICAgICAgICAgICAgICAgcXVlcnlMaXN0LnB1c2godGhpcy5tYWtlUmVxdWVzdCQoJ2dldE1pc3NpbmdCdWJibGUnLCBwYXJhbXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChxdWVyeUxpc3QubGVuZ3RoID4gMCkgeyAvLyBpZiB0aGVyZSBhcmUgcGVuZGluZyBidWJibGUgcXVlcmllc1xuICAgICAgICAgICAgZm9ya0pvaW4ocXVlcnlMaXN0KS5zdWJzY3JpYmUoZm9ya3JlcyA9PiB7XG4gICAgICAgICAgICAgICAgZm9ya3Jlcy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWJibGVDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3IudHlwZU9mRW50aXR5XTtcbiAgICAgICAgICAgICAgICAgICAgdGFnc0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogci5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBgdGFnLSR7YnViYmxlQ29uZmlnWydjbGFzcy1uYW1lJ119YFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlcicpLnVwZGF0ZSh0YWdzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhlcm9DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGhlbHBlcnMuZXNjYXBlRG91YmxlUXVvdGVzKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmhvbWVBdXRvY29tcGxldGVJc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ob21lQXV0b2NvbXBsZXRlUXVlcnkgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGUtcmVzdWx0cy1saXN0JylcbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNvdXJjZSQgPSBmcm9tRXZlbnQobm9kZSwgJ3Njcm9sbCcpO1xuXG4gICAgICAgIC8vIGhlaWdodCBjb250cm9sXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZChub2RlKTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAvLyBzY3JvbGwgbGlzdGVuXG4gICAgICAgIHNvdXJjZSQucGlwZShcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSg1MClcbiAgICAgICAgKS5zdWJzY3JpYmUoKHsgdGFyZ2V0IH06IHsgdGFyZ2V0OiBhbnkgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh0YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCkge1xuICAgICAgICB0aGlzLmhhc1Njcm9sbEJhY2tncm91bmQgPSB0YXJnZXQgPyAoXG4gICAgICAgICAgICB0YXJnZXQuc2Nyb2xsSGVpZ2h0ID4gKHRhcmdldC5zY3JvbGxUb3AgKyB0YXJnZXQuY2xpZW50SGVpZ2h0KVxuICAgICAgICApIDogZmFsc2VcbiAgICB9XG5cbiAgICBwcml2YXRlIF9saXN0ZW5BdXRvQ29tcGxldGVDaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICAgIGtleXM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyksXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyksXG4gICAgICAgICAgICBwYXRoczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5waXBlKFxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICAgICApLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHtcbiAgICAgICAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjogeyBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J10gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVBdXRvY29tcGxldGVJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F3LWhvbWUtYWR2YW5jZWQtYXV0b2NvbXBsZXRlLXBvcG92ZXInKTtcbiAgICAgICAgICAgIHRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyID0gdGhpcy50aXBweSgnLmF3LWhvbWVfX3RvcC1oZXJvIC5uNy1oZXJvX19pbnB1dCcsIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb25IaWRkZW46ICgpID0+IHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSBmYWxzZSxcbiAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW47XG4gICAgfVxufVxuIl19