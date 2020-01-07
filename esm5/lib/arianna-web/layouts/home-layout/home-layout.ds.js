/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { Subject, forkJoin, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
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
        // BUBBLE CHART DATA ↓
        _this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
        // true if this Arianna Web project has the bubble chart module
        _this.selectedBubbles = []; // array of IDs
        // store the first array of bubbles, to find them in case of zero results (entities data returned as empty array from backend)
        // BUBBLE CHART DATA ↑
        _this.homeAutocompleteIsLoading = false;
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
    /**
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onInit = /**
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
        this.one('aw-bubble-chart').updateOptions({ config: this.configuration, limit: this.configuration.get('bubble-chart').bubbleLimit });
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
            params: params
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
                entitiesListSize: this.configuration.get('home-layout')['entitiesQuerySize']
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
            var TOEconfigData = _this.configuration.get("config-keys")[toe.type.replace(" ", "-")];
            facetData.push(tslib_1.__assign({}, toe, { enabled: true, locked: false, configKey: toe.type.replace(" ", "-") }, TOEconfigData));
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
        if (!response || !response.itemsPagination) {
            return;
        }
        ;
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
            var numOfItemsTmpStr = numOfItems + '';
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
        /** @type {?} */
        var value = change.value;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
    };
    /**
     * @param {?} enter
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetSearchEnter = /**
     * @param {?} enter
     * @return {?}
     */
    function (enter) {
        /** @type {?} */
        var payload = enter.inputPayload;
        // get the text entered in this input
        /** @type {?} */
        var value = this.facetInputs[payload];
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
        var queryList = [] // list of pending queries
        ;
        // list of pending queries
        /** @type {?} */
        var tagsData = [] // list of tags data built from query
        ;
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
            function (el) { return el.entity.id == b; }));
            if (theBubble) { // if a bubble was found
                tagsData.push({
                    label: theBubble.entity.label,
                    icon: 'n7-icon-close',
                    payload: b,
                    classes: "tag-" + theBubble.entity.typeOfEntity.replace(/ /g, '-')
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
                    tagsData.push({
                        label: r.label,
                        icon: 'n7-icon-close',
                        payload: r.id,
                        classes: "tag-" + r.typeOfEntity.replace(/ /g, '-')
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
        this.autocompleteChanged$.next(value);
        this.homeAutocompleteIsLoading = true;
        this.homeAutocompleteQuery = value;
        if (!this.autocompletePopoverOpen) {
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
        var el = document.getElementById('bubble-results-list');
        /** @type {?} */
        var source$ = fromEvent(document.getElementById('bubble-results-list'), 'scroll');
        // height control
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._setHasScrollBackground(el);
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
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype._setHasScrollBackground = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
        this.hasScrollBackground = scrollHeight > (scrollTop + clientHeight);
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
            labels: this.configuration.get('labels')
        });
        this.autocompleteChanged$.pipe(debounceTime(500), takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.communication.request$('autoComplete', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return console.error(error); }),
                    params: {
                        input: value,
                        itemsPagination: { offset: 0, limit: _this.configuration.get('home-layout')['results-limit'] }
                    }
                }).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.homeAutocompleteIsLoading = false;
                    _this.one('aw-home-autocomplete').update(response);
                }));
            }
            else {
                _this._toggleAutocompletePopover();
            }
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
                function () { return _this.autocompletePopoverOpen = false; }),
            })[0];
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
    AwHomeLayoutDS.prototype.updateComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpEO0lBQW9DLDBDQUFnQjtJQUFwRDtRQUFBLHFFQW1RQztRQTlQVyxpQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUV0Qiw2QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFDekMsMEJBQW9CLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkQsbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0Isd0JBQWtCLEdBQVEsSUFBSSxDQUFDO1FBQy9CLHlCQUFtQixHQUFZLEtBQUssQ0FBQztRQUNyQyxrQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLHlCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUl4QixnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztRQUUxQyxvQkFBYyxHQUFZLEtBQUssQ0FBQyxDQUFDLCtEQUErRDs7UUFDaEcscUJBQWUsR0FBVSxFQUFFLENBQUEsQ0FBTSxlQUFlOzs7UUFJaEQsK0JBQXlCLEdBQUcsS0FBSyxDQUFDO1FBbUNsQyxxQkFBZTs7Ozs7O1FBQUcsVUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQVE7WUFDeEMsNEJBQTRCO1lBQzVCLElBQUksT0FBTyxFQUFFO2dCQUNULEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLE9B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QUNqQixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsS0FBSztnQkFDWCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLFNBQVMsRUFBRSxjQUFjO2dCQUN6QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUTs7O2dCQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxFQUFwQyxDQUFvQyxDQUFBO2FBQ3ZELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNUO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25DO2FBQU07WUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDakUsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQW5RRCxDQUFvQyxnQkFBZ0IsR0FtUW5EOzs7Ozs7O0lBbFFHLHVDQUEyQjs7Ozs7SUFDM0IsbUNBQXVCOzs7OztJQUN2QiwrQkFBbUI7Ozs7O0lBQ25CLHVDQUEyQjs7Ozs7SUFDM0IscUNBQThCOzs7OztJQUM5Qiw2Q0FBaUM7Ozs7O0lBQ2pDLGlEQUFpRDs7Ozs7SUFDakQsOENBQThEOztJQUM5RCx1Q0FBb0M7O0lBQ3BDLDRDQUFzQzs7SUFDdEMsNkNBQTRDOztJQUM1QyxzQ0FBeUI7O0lBQ3pCLDZDQUFnQzs7SUFDaEMsb0NBQXVCOztJQUN2Qix5Q0FBK0I7O0lBQy9CLCtDQUFxQzs7Ozs7SUFDckMsb0NBQWlEOztJQUVqRCx3Q0FBdUM7O0lBQ3ZDLHlDQUFrQzs7SUFDbEMsNENBQThCOztJQUM5Qiw2Q0FBK0I7O0lBRS9CLG1EQUF5Qzs7SUFtQ3pDLHlDQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGZvcmtKb2luLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcbiAgICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuICAgIHByaXZhdGUgdGlwcHk6IGFueTtcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgICBwcml2YXRlIGZhY2V0SW5wdXRzOiBhbnkgPSB7fTtcbiAgICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXI6IGFueTtcbiAgICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhdXRvY29tcGxldGVDaGFuZ2VkJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwdWJsaWMgbnVtT2ZJdGVtc1N0cjogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgY3VycmVudEhvdmVyRW50aXR5OiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBoYXNTY3JvbGxCYWNrZ3JvdW5kOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHJlc3VsdHNMaW1pdCA9IC0xO1xuICAgIHB1YmxpYyBzZWxlY3RlZEVudGl0aWVzSWRzID0gW107XG4gICAgcHVibGljIG91dGVyTGlua3M6IGFueTtcbiAgICBwdWJsaWMgb3V0ZXJMaW5rc1RpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIGhvbWVBdXRvY29tcGxldGVRdWVyeTogc3RyaW5nO1xuICAgIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICAvLyBCVUJCTEUgQ0hBUlQgREFUQSDihpNcbiAgICBwdWJsaWMgYnViYmxlc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8gdHJ1ZSBpZiB0aGlzIEFyaWFubmEgV2ViIHByb2plY3QgaGFzIHRoZSBidWJibGUgY2hhcnQgbW9kdWxlXG4gICAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXSAgICAgIC8vIGFycmF5IG9mIElEc1xuICAgIHB1YmxpYyBsYXN0QnViYmxlUmVzcG9uc2U6IGFueSAgICAgICAgICAvLyBzdG9yZSBsYXN0IGJ1YmJsZSByZXNwb25zZSB0byByZWZyZXNoIHRoZSBncmFwaCB3aXRoIHRoZSBzYW1lIGRhdGFcbiAgICBwdWJsaWMgZmlyc3RCdWJibGVSZXNwb25zZTogYW55ICAgICAgICAgLy8gc3RvcmUgdGhlIGZpcnN0IGFycmF5IG9mIGJ1YmJsZXMsIHRvIGZpbmQgdGhlbSBpbiBjYXNlIG9mIHplcm8gcmVzdWx0cyAoZW50aXRpZXMgZGF0YSByZXR1cm5lZCBhcyBlbXB0eSBhcnJheSBmcm9tIGJhY2tlbmQpXG4gICAgLy8gQlVCQkxFIENIQVJUIERBVEEg4oaRXG4gICAgcHVibGljIGhvbWVBdXRvY29tcGxldGVJc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIG9uSW5pdCh7IGNvbW11bmljYXRpb24sIG1haW5TdGF0ZSwgY29uZmlndXJhdGlvbiwgdGlwcHkgfSkge1xuICAgICAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICAvLyB0aGlzLmZhY2V0RGF0YSA9IFtdO1xuICAgICAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICAgICAgdGhpcy50aXBweSA9IHRpcHB5O1xuICAgICAgICB0aGlzLnJlc3VsdHNMaW1pdCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXVxuICAgICAgICB0aGlzLmJ1YmJsZXNFbmFibGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnZmVhdHVyZXMtZW5hYmxlZCcpWydidWJibGVjaGFydCddIDogZmFsc2U7XG4gICAgICAgIHRoaXMub25lKCdhdy1oZXJvJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3RvcC1oZXJvJ10pO1xuICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1oZXJvLXBhdHJpbW9uaW8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYm90dG9tLWhlcm8nXSk7XG4gICAgICAgIC8vIHVwZGF0ZSBzdHJlYW1zXG4gICAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gSG9tZScpO1xuICAgICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hIFdlYjogSG9tZSBMYXlvdXQnKTtcbiAgICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlQ3VzdG9tKCdjdXJyZW50TmF2JywgJ2hvbWUnKTtcbiAgICAgICAgLy8gbGlzdGVuIGF1dG9jb21wbGV0ZSBjaGFuZ2VzXG4gICAgICAgIHRoaXMuX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5vdXRlckxpbmtzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnb3V0ZXItbGlua3MnXVsndGVzdCddO1xuICAgICAgICB0aGlzLm91dGVyTGlua3NUaXRsZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ291dGVyLWxpbmtzJ11bJ3RpdGxlJ107XG4gICAgICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdCB9KVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpe1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpXG4gICAgfVxuXG4gICAgcHVibGljIG1ha2VSZXF1ZXN0JChxdWVyeSwgcGFyYW1zKSB7XG4gICAgICAgIC8vIG1ha2UgcmVxdWVzdCBmcm9tIEVIXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQocXVlcnksIHtcbiAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcbiAgICAgICAgLy8gdXBkYXRlIGNvbXBvbmVudHMgZnJvbSBFSFxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZU9wdGlvbnMob3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uZShpZCkudXBkYXRlKGRhdGEpXG4gICAgfVxuXG4gICAgaW5pdGlhbEZpbHRlclJlcXVlc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydlbnRpdGllc1F1ZXJ5U2l6ZSddXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5maXJzdEJ1YmJsZVJlc3BvbnNlID0gcmVzcG9uc2UuZW50aXRpZXNEYXRhXG4gICAgICAgIGNvbnN0IGZhY2V0RGF0YSA9IFtdXG4gICAgICAgIHJlc3BvbnNlLnR5cGVPZkVudGl0eURhdGEuZm9yRWFjaCgodG9lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBUT0Vjb25maWdEYXRhID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpW3RvZS50eXBlLnJlcGxhY2UoXCIgXCIsIFwiLVwiKV07XG4gICAgICAgICAgICBmYWNldERhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgLi4udG9lLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWdLZXk6IHRvZS50eXBlLnJlcGxhY2UoXCIgXCIsIFwiLVwiKSxcbiAgICAgICAgICAgICAgICAuLi5UT0Vjb25maWdEYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKGZhY2V0RGF0YSk7XG4gICAgfVxuXG4gICAgcmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9O1xuICAgICAgICBsZXQgbnVtT2ZJdGVtcyA9IHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi50b3RhbENvdW50O1xuICAgICAgICBpZiAobnVtT2ZJdGVtcyA+IDApIHtcbiAgICAgICAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChudW1PZkl0ZW1zID4gOTk5KSB7XG4gICAgICAgICAgICAgICAgbnVtT2ZJdGVtcyAtPSAxMDAwO1xuICAgICAgICAgICAgICAgIG51bU9mVGhvdXNhbmQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBudW1PZkl0ZW1zVG1wU3RyID0gbnVtT2ZJdGVtcyArICcnO1xuICAgICAgICAgICAgaWYgKG51bU9mSXRlbXMgPCAxMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwMCcgKyBudW1PZkl0ZW1zO1xuICAgICAgICAgICAgZWxzZSBpZiAobnVtT2ZJdGVtcyA8IDEwMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwJyArIG51bU9mSXRlbXM7XG4gICAgICAgICAgICBpZiAobnVtT2ZUaG91c2FuZCA+IDApXG4gICAgICAgICAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZUaG91c2FuZCArICcuJyArIG51bU9mSXRlbXNUbXBTdHI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZJdGVtcyArICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gJzAnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAgY29udGV4dDogJ2hvbWUnLFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZShyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVUYWdzKG9ubHlCdWJibGVzPzogYm9vbGVhbikge1xuICAgICAgICBpZiAoIW9ubHlCdWJibGVzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVGYWNldFNlYXJjaENoYW5nZShjaGFuZ2UpIHtcbiAgICAgICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgICAgIHZhciB2YWx1ZTogc3RyaW5nID0gY2hhbmdlLnZhbHVlO1xuICAgICAgICAvLyBzdG9yZSB0aGUgZW50ZXJlZCB0ZXh0IGluIGZhY2V0SW5wdXRzXG4gICAgICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBoYW5kbGVGYWNldFNlYXJjaEVudGVyKGVudGVyKSB7XG4gICAgICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBlbnRlci5pbnB1dFBheWxvYWQ7XG4gICAgICAgIC8vIGdldCB0aGUgdGV4dCBlbnRlcmVkIGluIHRoaXMgaW5wdXRcbiAgICAgICAgdmFyIHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdO1xuICAgIH1cblxuICAgIHJlbmRlckl0ZW1UYWdzKCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgVHJ5IHRvIGJ1aWxkIGFuIGl0ZW0gdGFnIGZvciBlYWNoIHNlbGVjdGVkIHF1ZXJ5IGxvb2tpbmcgYXQgdGhlIGRhdGEgZnJvbSB0aGVcbiAgICAgICAgICAgIGZpcnN0IHJlc3BvbnNlLiBJZiB0aGUgbmVlZGVkIGJ1YmJsZSBkYXRhIGNhbm5vdCBiZSBmb3VuZCwgYXNrIHRoZSBiYWNrZW5kXG4gICAgICAgICAgICBmb3IgdGhhdCBidWJibGUncyBkYXRhLlxuICAgICAgICAqL1xuICAgICAgICBsZXQgcXVlcnlMaXN0ID0gW10gLy8gbGlzdCBvZiBwZW5kaW5nIHF1ZXJpZXNcbiAgICAgICAgbGV0IHRhZ3NEYXRhID0gW10gIC8vIGxpc3Qgb2YgdGFncyBkYXRhIGJ1aWx0IGZyb20gcXVlcnlcbiAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaChiID0+IHsgLy8gdHJ5IHRvIGdldCB0aGUgZGF0YSBvZiBlYWNoIHNlbGVjdGVkIGJ1YmJsZVxuICAgICAgICAgICAgbGV0IHRoZUJ1YmJsZSA9IHRoaXMuZmlyc3RCdWJibGVSZXNwb25zZS5maW5kKGVsID0+IGVsLmVudGl0eS5pZCA9PSBiKVxuICAgICAgICAgICAgaWYgKHRoZUJ1YmJsZSkgeyAvLyBpZiBhIGJ1YmJsZSB3YXMgZm91bmRcbiAgICAgICAgICAgICAgICB0YWdzRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRoZUJ1YmJsZS5lbnRpdHkubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogYixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogYHRhZy0ke3RoZUJ1YmJsZS5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKX1gXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGlmIHRoZSBidWJibGUgd2FzIG5vdCBmb3VuZCwgbWFrZSBhIHF1ZXJ5XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHsgZW50aXR5SWQ6IGIsIGVudGl0aWVzTGlzdFNpemU6IDEgfVxuICAgICAgICAgICAgICAgIHF1ZXJ5TGlzdC5wdXNoKHRoaXMubWFrZVJlcXVlc3QkKCdnZXRNaXNzaW5nQnViYmxlJywgcGFyYW1zKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChxdWVyeUxpc3QubGVuZ3RoID4gMCkgeyAvLyBpZiB0aGVyZSBhcmUgcGVuZGluZyBidWJibGUgcXVlcmllc1xuICAgICAgICAgICAgZm9ya0pvaW4ocXVlcnlMaXN0KS5zdWJzY3JpYmUoZm9ya3JlcyA9PiB7XG4gICAgICAgICAgICAgICAgZm9ya3Jlcy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YWdzRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiByLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGB0YWctJHtyLnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJyl9YFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlcicpLnVwZGF0ZSh0YWdzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhlcm9DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5uZXh0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5ob21lQXV0b2NvbXBsZXRlSXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ob21lQXV0b2NvbXBsZXRlUXVlcnkgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLl90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpLFxuICAgICAgICAgICAgc291cmNlJCA9IGZyb21FdmVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpLCAnc2Nyb2xsJyk7XG5cbiAgICAgICAgLy8gaGVpZ2h0IGNvbnRyb2xcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKGVsKTtcbiAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAvLyBzY3JvbGwgbGlzdGVuXG4gICAgICAgIHNvdXJjZSQucGlwZShcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSg1MClcbiAgICAgICAgKS5zdWJzY3JpYmUoKHsgdGFyZ2V0IH06IHsgdGFyZ2V0OiBhbnkgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh0YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHsgc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQsIGNsaWVudEhlaWdodCB9KSB7XG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHNjcm9sbEhlaWdodCA+IChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAga2V5czogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKSxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5waXBlKFxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICAgICApLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob21lQXV0b2NvbXBsZXRlSXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F3LWhvbWUtYWR2YW5jZWQtYXV0b2NvbXBsZXRlLXBvcG92ZXInKTtcbiAgICAgICAgICAgIHRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyID0gdGhpcy50aXBweSgnLmF3LWhvbWVfX3RvcC1oZXJvIC5uNy1oZXJvX19pbnB1dCcsIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tc3RhcnQnLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb25IaWRkZW46ICgpID0+IHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSBmYWxzZSxcbiAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW47XG4gICAgfVxufVxuIl19