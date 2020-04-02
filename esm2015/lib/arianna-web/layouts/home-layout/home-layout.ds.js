/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
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
    // ========================
    /**
     * @param {?} __0
     * @return {?}
     */
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
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
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
            params,
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
                entitiesListSize: this.configuration.get('bubble-chart').bubbleLimit,
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
        const payload = change.inputPayload;
        const { value } = change;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
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
        (b) => {
            // try to get the data of each selected bubble
            /** @type {?} */
            const theBubble = this.firstBubbleResponse.find((/**
             * @param {?} el
             * @return {?}
             */
            (el) => el.entity.id === b));
            if (theBubble) { // if a bubble was found
                // if a bubble was found
                /** @type {?} */
                const bubbleConfig = this.configuration.get('config-keys')[theBubble.entity.typeOfEntity];
                tagsData.push({
                    label: theBubble.entity.label,
                    icon: 'n7-icon-close',
                    payload: b,
                    classes: `tag-${bubbleConfig['class-name']}`,
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
            (forkres) => {
                forkres.forEach((/**
                 * @param {?} r
                 * @return {?}
                 */
                (r) => {
                    /** @type {?} */
                    const bubbleConfig = this.configuration.get('config-keys')[r.typeOfEntity];
                    tagsData.push({
                        label: r.label,
                        icon: 'n7-icon-close',
                        payload: r.id,
                        classes: `tag-${bubbleConfig['class-name']}`,
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
            /** @type {?} */
            const escapedValue = helpers.escapeDoubleQuotes(value);
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
            paths: this.configuration.get('paths'),
        });
        this.autocompleteChanged$.pipe(debounceTime(500), takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.communication.request$('autoComplete', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => console.error(error)),
                params: {
                    input: value,
                    itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] },
                },
            }).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.homeAutocompleteIsLoading = false;
                this.one('aw-home-autocomplete').update({
                    response,
                    query: value,
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
                onHidden: (/**
                 * @return {?}
                 */
                () => { this.autocompletePopoverOpen = false; }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsTUFBTSxPQUFPLGNBQWUsU0FBUSxnQkFBZ0I7SUFBcEQ7O1FBU1UsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFJdEIsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBRWhDLHlCQUFvQixHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXZELGtCQUFhLEdBQVcsSUFBSSxDQUFDO1FBRTdCLHVCQUFrQixHQUFRLElBQUksQ0FBQztRQUUvQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFNUIsaUJBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVsQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFReEIsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTFDLDhCQUF5QixHQUFHLEtBQUssQ0FBQztRQUVsQyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7O1FBRzdCLG1CQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsK0RBQStEOztRQUV2RixvQkFBZSxHQUFVLEVBQUUsQ0FBQSxDQUFDLGVBQWU7UUFvRDNDLG9CQUFlOzs7Ozs7UUFBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBUSxFQUFFLEVBQUU7WUFDOUMsNEJBQTRCO1lBQzVC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QWdDOztJQUVoQyxvQ0FBdUI7O0lBRXZCLHlDQUErQjs7SUFFL0IsK0NBQXFDOzs7OztJQUVyQyxvQ0FBaUQ7O0lBRWpELG1EQUF5Qzs7SUFFekMsOENBQW9DOztJQUdwQyx3Q0FBOEI7O0lBRTlCLHlDQUFrQzs7SUFHbEMsNENBQThCOztJQUc5Qiw2Q0FBK0I7O0lBOEMvQix5Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBmb3JrSm9pbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG5cbiAgcHJpdmF0ZSB0aXBweTogYW55O1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgZmFjZXRJbnB1dHM6IGFueSA9IHt9O1xuXG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3ZlcjogYW55O1xuXG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBudW1PZkl0ZW1zU3RyOiBzdHJpbmcgPSBudWxsO1xuXG4gIHB1YmxpYyBjdXJyZW50SG92ZXJFbnRpdHk6IGFueSA9IG51bGw7XG5cbiAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQgPSBmYWxzZTtcblxuICBwdWJsaWMgcmVzdWx0c0xpbWl0ID0gLTE7XG5cbiAgcHVibGljIHNlbGVjdGVkRW50aXRpZXNJZHMgPSBbXTtcblxuICBwdWJsaWMgb3V0ZXJMaW5rczogYW55O1xuXG4gIHB1YmxpYyBvdXRlckxpbmtzVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBob21lQXV0b2NvbXBsZXRlSXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgcHVibGljIHJlc3VsdHNMaXN0SXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgLy8gPT09PT0gQlVCQkxFIENIQVJUID09PT09XG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZCA9IGZhbHNlOyAvLyB0cnVlIGlmIHRoaXMgQXJpYW5uYSBXZWIgcHJvamVjdCBoYXMgdGhlIGJ1YmJsZSBjaGFydCBtb2R1bGVcblxuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIElEc1xuXG4gIC8vIHN0b3JlIGxhc3QgYnViYmxlIHJlc3BvbnNlIHRvIHJlZnJlc2ggdGhlIGdyYXBoIHdpdGggdGhlIHNhbWUgZGF0YVxuICBwdWJsaWMgbGFzdEJ1YmJsZVJlc3BvbnNlOiBhbnlcblxuICAvLyBzdG9yZSB0aGUgZmlyc3QgYXJyYXkgb2YgYnViYmxlcywgdG8gZmluZCB0aGVtIGluIGNhc2Ugb2Ygbm8gcmVzdWx0cy5cbiAgcHVibGljIGZpcnN0QnViYmxlUmVzcG9uc2U6IGFueVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBvbkluaXQoe1xuICAgIGNvbW11bmljYXRpb24sIG1haW5TdGF0ZSwgY29uZmlndXJhdGlvbiwgdGlwcHksXG4gIH0pIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgLy8gdGhpcy5mYWNldERhdGEgPSBbXTtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XG4gICAgdGhpcy5yZXN1bHRzTGltaXQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J107XG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKS5idWJibGVjaGFydCA6IGZhbHNlO1xuICAgIHRoaXMub25lKCdhdy1oZXJvJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3RvcC1oZXJvJ10pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWhlcm8tcGF0cmltb25pbycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydib3R0b20taGVybyddKTtcbiAgICAvLyB1cGRhdGUgc3RyZWFtc1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gSG9tZScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBIb21lIExheW91dCcpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdob21lJyk7XG4gICAgLy8gbGlzdGVuIGF1dG9jb21wbGV0ZSBjaGFuZ2VzXG4gICAgdGhpcy5fbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpO1xuICAgIHRoaXMub3V0ZXJMaW5rcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ10udGVzdDtcbiAgICB0aGlzLm91dGVyTGlua3NUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ10udGl0bGU7XG4gICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpLmJ1YmJsZUxpbWl0LFxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgYmFzZVBhdGg6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGgsXG4gICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgbWFrZVJlcXVlc3QkKHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICAvLyBtYWtlIHJlcXVlc3QgZnJvbSBFSFxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocXVlcnksIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXMsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50ID0gKGlkLCBkYXRhLCBvcHRpb25zPykgPT4ge1xuICAgIC8vIHVwZGF0ZSBjb21wb25lbnRzIGZyb20gRUhcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSk7XG4gIH1cblxuICBpbml0aWFsRmlsdGVyUmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpLmJ1YmJsZUxpbWl0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpIHtcbiAgICB0aGlzLmZpcnN0QnViYmxlUmVzcG9uc2UgPSByZXNwb25zZS5lbnRpdGllc0RhdGE7XG4gICAgY29uc3QgZmFjZXREYXRhID0gW107XG4gICAgcmVzcG9uc2UudHlwZU9mRW50aXR5RGF0YS5mb3JFYWNoKCh0b2UpID0+IHtcbiAgICAgIGNvbnN0IFRPRWNvbmZpZ0RhdGEgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3RvZS50eXBlXTtcbiAgICAgIGZhY2V0RGF0YS5wdXNoKHtcbiAgICAgICAgLi4udG9lLFxuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBsb2NrZWQ6IGZhbHNlLFxuICAgICAgICAuLi5UT0Vjb25maWdEYXRhLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoZmFjZXREYXRhKTtcbiAgfVxuXG4gIHJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkpIHtcbiAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG51bU9mSXRlbXMgPSByZXNwb25zZS5pdGVtc1BhZ2luYXRpb24udG90YWxDb3VudDtcbiAgICBpZiAobnVtT2ZJdGVtcyA+IDApIHtcbiAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcbiAgICAgIHdoaWxlIChudW1PZkl0ZW1zID4gOTk5KSB7XG4gICAgICAgIG51bU9mSXRlbXMgLT0gMTAwMDtcbiAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xuICAgICAgfVxuICAgICAgbGV0IG51bU9mSXRlbXNUbXBTdHIgPSBgJHtudW1PZkl0ZW1zfWA7XG4gICAgICBpZiAobnVtT2ZJdGVtcyA8IDEwKSBudW1PZkl0ZW1zVG1wU3RyID0gYDAwJHtudW1PZkl0ZW1zfWA7XG4gICAgICBlbHNlIGlmIChudW1PZkl0ZW1zIDwgMTAwKSBudW1PZkl0ZW1zVG1wU3RyID0gYDAke251bU9mSXRlbXN9YDtcbiAgICAgIGlmIChudW1PZlRob3VzYW5kID4gMCkgdGhpcy5udW1PZkl0ZW1zU3RyID0gYCR7bnVtT2ZUaG91c2FuZH0uJHtudW1PZkl0ZW1zVG1wU3RyfWA7XG4gICAgICBlbHNlIHRoaXMubnVtT2ZJdGVtc1N0ciA9IGAke251bU9mSXRlbXN9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gJzAnO1xuICAgIH1cbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGNvbnRleHQ6ICdob21lJyxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pO1xuXG4gICAgLy8gc2Nyb2xsIGNvbnRyb2xcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Njcm9sbEJhY2tncm91bmRDb250cm9sKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVGFncyhvbmx5QnViYmxlcz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIW9ubHlCdWJibGVzKSB7XG4gICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgY29uc3QgcGF5bG9hZDogc3RyaW5nID0gY2hhbmdlLmlucHV0UGF5bG9hZDtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBjaGFuZ2U7XG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1UYWdzKCkge1xuICAgIC8qXG4gICAgICAgICAgVHJ5IHRvIGJ1aWxkIGFuIGl0ZW0gdGFnIGZvciBlYWNoIHNlbGVjdGVkIHF1ZXJ5IGxvb2tpbmcgYXQgdGhlIGRhdGEgZnJvbSB0aGVcbiAgICAgICAgICBmaXJzdCByZXNwb25zZS4gSWYgdGhlIG5lZWRlZCBidWJibGUgZGF0YSBjYW5ub3QgYmUgZm91bmQsIGFzayB0aGUgYmFja2VuZFxuICAgICAgICAgIGZvciB0aGF0IGJ1YmJsZSdzIGRhdGEuXG4gICAgICAqL1xuICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IFtdOyAvLyBsaXN0IG9mIHBlbmRpbmcgcXVlcmllc1xuICAgIGNvbnN0IHRhZ3NEYXRhID0gW107IC8vIGxpc3Qgb2YgdGFncyBkYXRhIGJ1aWx0IGZyb20gcXVlcnlcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKChiKSA9PiB7IC8vIHRyeSB0byBnZXQgdGhlIGRhdGEgb2YgZWFjaCBzZWxlY3RlZCBidWJibGVcbiAgICAgIGNvbnN0IHRoZUJ1YmJsZSA9IHRoaXMuZmlyc3RCdWJibGVSZXNwb25zZS5maW5kKChlbCkgPT4gZWwuZW50aXR5LmlkID09PSBiKTtcbiAgICAgIGlmICh0aGVCdWJibGUpIHsgLy8gaWYgYSBidWJibGUgd2FzIGZvdW5kXG4gICAgICAgIGNvbnN0IGJ1YmJsZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbdGhlQnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHldO1xuICAgICAgICB0YWdzRGF0YS5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogdGhlQnViYmxlLmVudGl0eS5sYWJlbCxcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICAgICAgcGF5bG9hZDogYixcbiAgICAgICAgICBjbGFzc2VzOiBgdGFnLSR7YnViYmxlQ29uZmlnWydjbGFzcy1uYW1lJ119YCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgYnViYmxlIHdhcyBub3QgZm91bmQsIG1ha2UgYSBxdWVyeVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVudGl0eUlkOiBiLCBlbnRpdGllc0xpc3RTaXplOiAxIH07XG4gICAgICAgIHF1ZXJ5TGlzdC5wdXNoKHRoaXMubWFrZVJlcXVlc3QkKCdnZXRNaXNzaW5nQnViYmxlJywgcGFyYW1zKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHF1ZXJ5TGlzdC5sZW5ndGggPiAwKSB7IC8vIGlmIHRoZXJlIGFyZSBwZW5kaW5nIGJ1YmJsZSBxdWVyaWVzXG4gICAgICBmb3JrSm9pbihxdWVyeUxpc3QpLnN1YnNjcmliZSgoZm9ya3JlcykgPT4ge1xuICAgICAgICBmb3JrcmVzLmZvckVhY2goKHIpID0+IHtcbiAgICAgICAgICBjb25zdCBidWJibGVDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3IudHlwZU9mRW50aXR5XTtcbiAgICAgICAgICB0YWdzRGF0YS5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiByLmxhYmVsLFxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgcGF5bG9hZDogci5pZCxcbiAgICAgICAgICAgIGNsYXNzZXM6IGB0YWctJHtidWJibGVDb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgICB9XG4gIH1cblxuICBvbkhlcm9DaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IGhlbHBlcnMuZXNjYXBlRG91YmxlUXVvdGVzKHZhbHVlKTtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQubmV4dChlc2NhcGVkVmFsdWUpO1xuICAgICAgdGhpcy5ob21lQXV0b2NvbXBsZXRlSXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5ID0gZXNjYXBlZFZhbHVlO1xuICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZS1yZXN1bHRzLWxpc3QnKTtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KG5vZGUsICdzY3JvbGwnKTtcblxuICAgIC8vIGhlaWdodCBjb250cm9sXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKG5vZGUpO1xuICAgIH0sIDUwMCk7XG5cbiAgICAvLyBzY3JvbGwgbGlzdGVuXG4gICAgc291cmNlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwKSxcbiAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IGFueSB9KSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCkge1xuICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHRhcmdldCA/IChcbiAgICAgIHRhcmdldC5zY3JvbGxIZWlnaHQgPiAodGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQpXG4gICAgKSA6IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpIHtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGtleXM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyksXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyksXG4gICAgICBwYXRoczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKSxcbiAgICB9KTtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUNoYW5nZWQkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICkuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdhdXRvQ29tcGxldGUnLCB7XG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGlucHV0OiB2YWx1ZSxcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH0sXG4gICAgICAgIH0sXG4gICAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGUoe1xuICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgIHF1ZXJ5OiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F3LWhvbWUtYWR2YW5jZWQtYXV0b2NvbXBsZXRlLXBvcG92ZXInKTtcbiAgICAgIHRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgY29uc3QgW3BvcE92ZXJdID0gdGhpcy50aXBweSgnLmF3LWhvbWVfX3RvcC1oZXJvIC5uNy1oZXJvX19pbnB1dCcsIHtcbiAgICAgICAgY29udGVudDogdGVtcGxhdGUsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG9uSGlkZGVuOiAoKSA9PiB7IHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSBmYWxzZTsgfSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyID0gcG9wT3ZlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5zaG93KCk7XG4gICAgfVxuICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSAhdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbjtcbiAgfVxufVxuIl19