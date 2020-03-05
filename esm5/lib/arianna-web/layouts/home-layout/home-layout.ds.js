/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { Subject, forkJoin, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import helpers from '../../../common/helpers';
var AwHomeLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutDS, _super);
    function AwHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetInputs = {};
        _this.autocompletePopoverOpen = false;
        _this.autocompleteChanged$ = new Subject();
        _this.numOfItemsStr = null;
        _this.currentHoverEntity = null;
        _this.hasScrollBackground = false;
        _this.resultsLimit = -1;
        _this.selectedEntitiesIds = [];
        _this.destroyed$ = new Subject();
        _this.homeAutocompleteIsLoading = false;
        _this.resultsListIsLoading = false;
        // ===== BUBBLE CHART =====
        _this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
        // true if this Arianna Web project has the bubble chart module
        _this.selectedBubbles = []; // array of IDs
        _this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        function (id, data, options) {
            // update components from EH
            if (options) {
                _this.one(id).updateOptions(options);
            }
            _this.one(id).update(data);
        });
        return _this;
    }
    // ========================
    // ========================
    /**
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onInit = 
    // ========================
    /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var communication = _a.communication, mainState = _a.mainState, configuration = _a.configuration, tippy = _a.tippy;
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
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
    };
    /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    AwHomeLayoutDS.prototype.makeRequest$ = /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    function (query, params) {
        // make request from EH
        return this.communication.request$(query, {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: params,
        });
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.initialFilterRequest = /**
     * @return {?}
     */
    function () {
        return this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: {
                entitiesListSize: this.configuration.get('bubble-chart').bubbleLimit,
            },
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.parseInitialRequest = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        this.firstBubbleResponse = response.entitiesData;
        /** @type {?} */
        var facetData = [];
        response.typeOfEntityData.forEach((/**
         * @param {?} toe
         * @return {?}
         */
        function (toe) {
            /** @type {?} */
            var TOEconfigData = _this.configuration.get('config-keys')[toe.type];
            facetData.push(tslib_1.__assign({}, toe, { enabled: true, locked: false }, TOEconfigData));
        }));
        this.one('aw-home-facets-wrapper').update(facetData);
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderPreviewsFromApolloQuery = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        if (!response || !response.itemsPagination) {
            return;
        }
        /** @type {?} */
        var numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            /** @type {?} */
            var numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            /** @type {?} */
            var numOfItemsTmpStr = "" + numOfItems;
            if (numOfItems < 10)
                numOfItemsTmpStr = "00" + numOfItems;
            else if (numOfItems < 100)
                numOfItemsTmpStr = "0" + numOfItems;
            if (numOfThousand > 0)
                this.numOfItemsStr = numOfThousand + "." + numOfItemsTmpStr;
            else
                this.numOfItemsStr = "" + numOfItems;
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
        function () {
            _this._scrollBackgroundControl();
        }));
    };
    /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateTags = /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    function (onlyBubbles) {
        if (!onlyBubbles) {
            this.renderItemTags();
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetSearchChange = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        /** @type {?} */
        var payload = change.inputPayload;
        var value = change.value;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderItemTags = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /*
                  Try to build an item tag for each selected query looking at the data from the
                  first response. If the needed bubble data cannot be found, ask the backend
                  for that bubble's data.
              */
        /** @type {?} */
        var queryList = [];
        // list of pending queries
        /** @type {?} */
        var tagsData = [];
        this.selectedBubbles.forEach((/**
         * @param {?} b
         * @return {?}
         */
        function (b) {
            // try to get the data of each selected bubble
            /** @type {?} */
            var theBubble = _this.firstBubbleResponse.find((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el.entity.id === b; }));
            if (theBubble) { // if a bubble was found
                // if a bubble was found
                /** @type {?} */
                var bubbleConfig = _this.configuration.get('config-keys')[theBubble.entity.typeOfEntity];
                tagsData.push({
                    label: theBubble.entity.label,
                    icon: 'n7-icon-close',
                    payload: b,
                    classes: "tag-" + bubbleConfig['class-name'],
                });
            }
            else { // if the bubble was not found, make a query
                // if the bubble was not found, make a query
                /** @type {?} */
                var params = { entityId: b, entitiesListSize: 1 };
                queryList.push(_this.makeRequest$('getMissingBubble', params));
            }
        }));
        if (queryList.length > 0) { // if there are pending bubble queries
            forkJoin(queryList).subscribe((/**
             * @param {?} forkres
             * @return {?}
             */
            function (forkres) {
                forkres.forEach((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) {
                    /** @type {?} */
                    var bubbleConfig = _this.configuration.get('config-keys')[r.typeOfEntity];
                    tagsData.push({
                        label: r.label,
                        icon: 'n7-icon-close',
                        payload: r.id,
                        classes: "tag-" + bubbleConfig['class-name'],
                    });
                }));
                _this.one('aw-home-item-tags-wrapper').update(tagsData);
            }));
        }
        else {
            this.one('aw-home-item-tags-wrapper').update(tagsData);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onHeroChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            /** @type {?} */
            var escapedValue = helpers.escapeDoubleQuotes(value);
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
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._scrollBackgroundControl = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var node = document.getElementById('bubble-results-list');
        if (!node)
            return;
        /** @type {?} */
        var source$ = fromEvent(node, 'scroll');
        // height control
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._setHasScrollBackground(node);
        }), 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var target = _a.target;
            _this._setHasScrollBackground(target);
        }));
    };
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    AwHomeLayoutDS.prototype._setHasScrollBackground = /**
     * @private
     * @param {?} target
     * @return {?}
     */
    function (target) {
        this.hasScrollBackground = target ? (target.scrollHeight > (target.scrollTop + target.clientHeight)) : false;
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._listenAutoCompleteChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (value) {
            _this.communication.request$('autoComplete', {
                onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return console.error(error); }),
                params: {
                    input: value,
                    itemsPagination: { offset: 0, limit: _this.configuration.get('home-layout')['results-limit'] },
                },
            }).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.homeAutocompleteIsLoading = false;
                _this.one('aw-home-autocomplete').update({
                    response: response,
                    query: value,
                });
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._toggleAutocompletePopover = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autocompletePopover) {
            /** @type {?} */
            var template = document.getElementById('aw-home-advanced-autocomplete-popover');
            template.style.display = 'block';
            var _a = tslib_1.__read(this.tippy('.aw-home__top-hero .n7-hero__input', {
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
                function () { _this.autocompletePopoverOpen = false; }),
            }), 1), popOver = _a[0];
            this.autocompletePopover = popOver;
        }
        if (this.autocompletePopoverOpen) {
            this.autocompletePopover.hide();
        }
        else {
            this.autocompletePopover.show();
        }
        this.autocompletePopoverOpen = !this.autocompletePopoverOpen;
    };
    return AwHomeLayoutDS;
}(LayoutDataSource));
export { AwHomeLayoutDS };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUFvQywwQ0FBZ0I7SUFBcEQ7UUFBQSxxRUE2U0M7UUFwU1MsaUJBQVcsR0FBUSxFQUFFLENBQUM7UUFJdEIsNkJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBRWhDLDBCQUFvQixHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXZELG1CQUFhLEdBQVcsSUFBSSxDQUFDO1FBRTdCLHdCQUFrQixHQUFRLElBQUksQ0FBQztRQUUvQix5QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFNUIsa0JBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVsQix5QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFReEIsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUUxQywrQkFBeUIsR0FBRyxLQUFLLENBQUM7UUFFbEMsMEJBQW9CLEdBQUcsS0FBSyxDQUFDOztRQUc3QixvQkFBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLCtEQUErRDs7UUFFdkYscUJBQWUsR0FBVSxFQUFFLENBQUEsQ0FBQyxlQUFlO1FBb0QzQyxxQkFBZTs7Ozs7O1FBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDMUMsNEJBQTRCO1lBQzVCLElBQUksT0FB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LHlDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvbGF5b3V0LWRhdGEtc291cmNlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgZm9ya0pvaW4sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgdGlwcHk6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZmFjZXRJbnB1dHM6IGFueSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXI6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgbnVtT2ZJdGVtc1N0cjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcclxuXHJcbiAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHJlc3VsdHNMaW1pdCA9IC0xO1xyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IFtdO1xyXG5cclxuICBwdWJsaWMgb3V0ZXJMaW5rczogYW55O1xyXG5cclxuICBwdWJsaWMgb3V0ZXJMaW5rc1RpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBob21lQXV0b2NvbXBsZXRlUXVlcnk6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgcmVzdWx0c0xpc3RJc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgLy8gPT09PT0gQlVCQkxFIENIQVJUID09PT09XHJcbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkID0gZmFsc2U7IC8vIHRydWUgaWYgdGhpcyBBcmlhbm5hIFdlYiBwcm9qZWN0IGhhcyB0aGUgYnViYmxlIGNoYXJ0IG1vZHVsZVxyXG5cclxuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIElEc1xyXG5cclxuICAvLyBzdG9yZSBsYXN0IGJ1YmJsZSByZXNwb25zZSB0byByZWZyZXNoIHRoZSBncmFwaCB3aXRoIHRoZSBzYW1lIGRhdGFcclxuICBwdWJsaWMgbGFzdEJ1YmJsZVJlc3BvbnNlOiBhbnlcclxuXHJcbiAgLy8gc3RvcmUgdGhlIGZpcnN0IGFycmF5IG9mIGJ1YmJsZXMsIHRvIGZpbmQgdGhlbSBpbiBjYXNlIG9mIG5vIHJlc3VsdHMuXHJcbiAgcHVibGljIGZpcnN0QnViYmxlUmVzcG9uc2U6IGFueVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICBvbkluaXQoe1xyXG4gICAgY29tbXVuaWNhdGlvbiwgbWFpblN0YXRlLCBjb25maWd1cmF0aW9uLCB0aXBweSxcclxuICB9KSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgIC8vIHRoaXMuZmFjZXREYXRhID0gW107XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcclxuICAgIHRoaXMudGlwcHkgPSB0aXBweTtcclxuICAgIHRoaXMucmVzdWx0c0xpbWl0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddO1xyXG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKS5idWJibGVjaGFydCA6IGZhbHNlO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWhlcm8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsndG9wLWhlcm8nXSk7XHJcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYm90dG9tLWhlcm8nXSk7XHJcbiAgICAvLyB1cGRhdGUgc3RyZWFtc1xyXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBIb21lJyk7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hIFdlYjogSG9tZSBMYXlvdXQnKTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdob21lJyk7XHJcbiAgICAvLyBsaXN0ZW4gYXV0b2NvbXBsZXRlIGNoYW5nZXNcclxuICAgIHRoaXMuX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKTtcclxuICAgIHRoaXMub3V0ZXJMaW5rcyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ10udGVzdDtcclxuICAgIHRoaXMub3V0ZXJMaW5rc1RpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnb3V0ZXItbGlua3MnXS50aXRsZTtcclxuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHtcclxuICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWNoYXJ0LXRpcHB5JykudXBkYXRlT3B0aW9ucyh7XHJcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxyXG4gICAgICBzZWxlY3RhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1ha2VSZXF1ZXN0JChxdWVyeSwgcGFyYW1zKSB7XHJcbiAgICAvLyBtYWtlIHJlcXVlc3QgZnJvbSBFSFxyXG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChxdWVyeSwge1xyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVDb21wb25lbnQgPSAoaWQsIGRhdGEsIG9wdGlvbnM/KSA9PiB7XHJcbiAgICAvLyB1cGRhdGUgY29tcG9uZW50cyBmcm9tIEVIXHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsRmlsdGVyUmVxdWVzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcclxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpIHtcclxuICAgIHRoaXMuZmlyc3RCdWJibGVSZXNwb25zZSA9IHJlc3BvbnNlLmVudGl0aWVzRGF0YTtcclxuICAgIGNvbnN0IGZhY2V0RGF0YSA9IFtdO1xyXG4gICAgcmVzcG9uc2UudHlwZU9mRW50aXR5RGF0YS5mb3JFYWNoKCh0b2UpID0+IHtcclxuICAgICAgY29uc3QgVE9FY29uZmlnRGF0YSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbdG9lLnR5cGVdO1xyXG4gICAgICBmYWNldERhdGEucHVzaCh7XHJcbiAgICAgICAgLi4udG9lLFxyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgbG9ja2VkOiBmYWxzZSxcclxuICAgICAgICAuLi5UT0Vjb25maWdEYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoZmFjZXREYXRhKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkpIHtcclxuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgbnVtT2ZJdGVtcyA9IHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi50b3RhbENvdW50O1xyXG4gICAgaWYgKG51bU9mSXRlbXMgPiAwKSB7XHJcbiAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcclxuICAgICAgd2hpbGUgKG51bU9mSXRlbXMgPiA5OTkpIHtcclxuICAgICAgICBudW1PZkl0ZW1zIC09IDEwMDA7XHJcbiAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBudW1PZkl0ZW1zVG1wU3RyID0gYCR7bnVtT2ZJdGVtc31gO1xyXG4gICAgICBpZiAobnVtT2ZJdGVtcyA8IDEwKSBudW1PZkl0ZW1zVG1wU3RyID0gYDAwJHtudW1PZkl0ZW1zfWA7XHJcbiAgICAgIGVsc2UgaWYgKG51bU9mSXRlbXMgPCAxMDApIG51bU9mSXRlbXNUbXBTdHIgPSBgMCR7bnVtT2ZJdGVtc31gO1xyXG4gICAgICBpZiAobnVtT2ZUaG91c2FuZCA+IDApIHRoaXMubnVtT2ZJdGVtc1N0ciA9IGAke251bU9mVGhvdXNhbmR9LiR7bnVtT2ZJdGVtc1RtcFN0cn1gO1xyXG4gICAgICBlbHNlIHRoaXMubnVtT2ZJdGVtc1N0ciA9IGAke251bU9mSXRlbXN9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9ICcwJztcclxuICAgIH1cclxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBjb250ZXh0OiAnaG9tZScsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uKTtcclxuXHJcbiAgICAvLyBzY3JvbGwgY29udHJvbFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3Njcm9sbEJhY2tncm91bmRDb250cm9sKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVUYWdzKG9ubHlCdWJibGVzPzogYm9vbGVhbikge1xyXG4gICAgaWYgKCFvbmx5QnViYmxlcykge1xyXG4gICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVGYWNldFNlYXJjaENoYW5nZShjaGFuZ2UpIHtcclxuICAgIGNvbnN0IHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBjaGFuZ2U7XHJcbiAgICAvLyBzdG9yZSB0aGUgZW50ZXJlZCB0ZXh0IGluIGZhY2V0SW5wdXRzXHJcbiAgICB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtVGFncygpIHtcclxuICAgIC8qXHJcbiAgICAgICAgICBUcnkgdG8gYnVpbGQgYW4gaXRlbSB0YWcgZm9yIGVhY2ggc2VsZWN0ZWQgcXVlcnkgbG9va2luZyBhdCB0aGUgZGF0YSBmcm9tIHRoZVxyXG4gICAgICAgICAgZmlyc3QgcmVzcG9uc2UuIElmIHRoZSBuZWVkZWQgYnViYmxlIGRhdGEgY2Fubm90IGJlIGZvdW5kLCBhc2sgdGhlIGJhY2tlbmRcclxuICAgICAgICAgIGZvciB0aGF0IGJ1YmJsZSdzIGRhdGEuXHJcbiAgICAgICovXHJcbiAgICBjb25zdCBxdWVyeUxpc3QgPSBbXTsgLy8gbGlzdCBvZiBwZW5kaW5nIHF1ZXJpZXNcclxuICAgIGNvbnN0IHRhZ3NEYXRhID0gW107IC8vIGxpc3Qgb2YgdGFncyBkYXRhIGJ1aWx0IGZyb20gcXVlcnlcclxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goKGIpID0+IHsgLy8gdHJ5IHRvIGdldCB0aGUgZGF0YSBvZiBlYWNoIHNlbGVjdGVkIGJ1YmJsZVxyXG4gICAgICBjb25zdCB0aGVCdWJibGUgPSB0aGlzLmZpcnN0QnViYmxlUmVzcG9uc2UuZmluZCgoZWwpID0+IGVsLmVudGl0eS5pZCA9PT0gYik7XHJcbiAgICAgIGlmICh0aGVCdWJibGUpIHsgLy8gaWYgYSBidWJibGUgd2FzIGZvdW5kXHJcbiAgICAgICAgY29uc3QgYnViYmxlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVt0aGVCdWJibGUuZW50aXR5LnR5cGVPZkVudGl0eV07XHJcbiAgICAgICAgdGFnc0RhdGEucHVzaCh7XHJcbiAgICAgICAgICBsYWJlbDogdGhlQnViYmxlLmVudGl0eS5sYWJlbCxcclxuICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcclxuICAgICAgICAgIHBheWxvYWQ6IGIsXHJcbiAgICAgICAgICBjbGFzc2VzOiBgdGFnLSR7YnViYmxlQ29uZmlnWydjbGFzcy1uYW1lJ119YCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHsgLy8gaWYgdGhlIGJ1YmJsZSB3YXMgbm90IGZvdW5kLCBtYWtlIGEgcXVlcnlcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVudGl0eUlkOiBiLCBlbnRpdGllc0xpc3RTaXplOiAxIH07XHJcbiAgICAgICAgcXVlcnlMaXN0LnB1c2godGhpcy5tYWtlUmVxdWVzdCQoJ2dldE1pc3NpbmdCdWJibGUnLCBwYXJhbXMpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAocXVlcnlMaXN0Lmxlbmd0aCA+IDApIHsgLy8gaWYgdGhlcmUgYXJlIHBlbmRpbmcgYnViYmxlIHF1ZXJpZXNcclxuICAgICAgZm9ya0pvaW4ocXVlcnlMaXN0KS5zdWJzY3JpYmUoKGZvcmtyZXMpID0+IHtcclxuICAgICAgICBmb3JrcmVzLmZvckVhY2goKHIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJ1YmJsZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbci50eXBlT2ZFbnRpdHldO1xyXG4gICAgICAgICAgdGFnc0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiByLmxhYmVsLFxyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHIuaWQsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6IGB0YWctJHtidWJibGVDb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSGVyb0NoYW5nZSh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IGhlbHBlcnMuZXNjYXBlRG91YmxlUXVvdGVzKHZhbHVlKTtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5uZXh0KGVzY2FwZWRWYWx1ZSk7XHJcbiAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5ID0gZXNjYXBlZFZhbHVlO1xyXG4gICAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcclxuICAgICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3Blbikge1xyXG4gICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpIHtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpO1xyXG4gICAgaWYgKCFub2RlKSByZXR1cm47XHJcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KG5vZGUsICdzY3JvbGwnKTtcclxuXHJcbiAgICAvLyBoZWlnaHQgY29udHJvbFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3NldEhhc1Njcm9sbEJhY2tncm91bmQobm9kZSk7XHJcbiAgICB9LCA1MDApO1xyXG5cclxuICAgIC8vIHNjcm9sbCBsaXN0ZW5cclxuICAgIHNvdXJjZSQucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwKSxcclxuICAgICkuc3Vic2NyaWJlKCh7IHRhcmdldCB9OiB7IHRhcmdldDogYW55IH0pID0+IHtcclxuICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh0YXJnZXQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCkge1xyXG4gICAgdGhpcy5oYXNTY3JvbGxCYWNrZ3JvdW5kID0gdGFyZ2V0ID8gKFxyXG4gICAgICB0YXJnZXQuc2Nyb2xsSGVpZ2h0ID4gKHRhcmdldC5zY3JvbGxUb3AgKyB0YXJnZXQuY2xpZW50SGVpZ2h0KVxyXG4gICAgKSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpIHtcclxuICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoe1xyXG4gICAgICBrZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpLFxyXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcclxuICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSxcclxuICAgICAgcGF0aHM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyksXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxyXG4gICAgKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywge1xyXG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBpbnB1dDogdmFsdWUsXHJcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZSh7XHJcbiAgICAgICAgICByZXNwb25zZSxcclxuICAgICAgICAgIHF1ZXJ5OiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlcikge1xyXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdy1ob21lLWFkdmFuY2VkLWF1dG9jb21wbGV0ZS1wb3BvdmVyJyk7XHJcbiAgICAgIHRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBjb25zdCBbcG9wT3Zlcl0gPSB0aGlzLnRpcHB5KCcuYXctaG9tZV9fdG9wLWhlcm8gLm43LWhlcm9fX2lucHV0Jywge1xyXG4gICAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlLFxyXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxyXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIGFycm93OiBmYWxzZSxcclxuICAgICAgICBmbGlwOiBmYWxzZSxcclxuICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXHJcbiAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXInLFxyXG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBvbkhpZGRlbjogKCkgPT4geyB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gZmFsc2U7IH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIgPSBwb3BPdmVyO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5zaG93KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW47XHJcbiAgfVxyXG59XHJcbiJdfQ==