/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { Subject, forkJoin, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import helpers from 'n7-boilerplate-lib/lib/common/helpers';
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
    // store the first array of bubbles, to find them in case of zero results (entities data returned as empty array from backend)
    // ========================
    /**
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onInit = 
    // store the first array of bubbles, to find them in case of zero results (entities data returned as empty array from backend)
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
                entitiesListSize: this.configuration.get('bubble-chart')['bubbleLimit']
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
                    classes: "tag-" + bubbleConfig['class-name']
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
                        classes: "tag-" + bubbleConfig['class-name']
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
            paths: this.configuration.get('paths')
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
                    itemsPagination: { offset: 0, limit: _this.configuration.get('home-layout')['results-limit'] }
                }
            }).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.homeAutocompleteIsLoading = false;
                _this.one('aw-home-autocomplete').update({
                    response: response,
                    query: value
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sT0FBTyxNQUFNLHVDQUF1QyxDQUFDO0FBRTVEO0lBQW9DLDBDQUFnQjtJQUFwRDtRQUFBLHFFQTBSQztRQXJSVyxpQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUV0Qiw2QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsMEJBQW9CLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkQsbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0Isd0JBQWtCLEdBQVEsSUFBSSxDQUFDO1FBQy9CLHlCQUFtQixHQUFHLEtBQUssQ0FBQztRQUM1QixrQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLHlCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUl4QixnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzFDLCtCQUF5QixHQUFHLEtBQUssQ0FBQztRQUNsQywwQkFBb0IsR0FBRyxLQUFLLENBQUM7O1FBRTdCLG9CQUFjLEdBQUcsS0FBSyxDQUFDLENBQUssK0RBQStEOztRQUMzRixxQkFBZSxHQUFVLEVBQUUsQ0FBQSxDQUFDLGVBQWU7UUE4QzNDLHFCQUFlOzs7Ozs7UUFBRyxVQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBUTtZQUN4Qyw0QkFBNEI7WUFDNUIsSUFBSSxPQUFP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LENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDakUsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTFSRCxDQUFvQyxnQkFBZ0IsR0EwUm5EOzs7Ozs7O0lBelJHLHVDQUEyQjs7Ozs7SUFDM0IsbUNBQXVCOzs7OztJQUN2QiwrQkFBbUI7Ozs7O0lBQ25CLHVDQUEyQjs7Ozs7SUFDM0IscUNBQThCOzs7OztJQUM5Qiw2Q0FBaUM7Ozs7O0lBQ2pDLGlEQUF3Qzs7Ozs7SUFDeEMsOENBQThEOztJQUM5RCx1Q0FBb0M7O0lBQ3BDLDRDQUFzQzs7SUFDdEMsNkNBQW1DOztJQUNuQyxzQ0FBeUI7O0lBQ3pCLDZDQUFnQzs7SUFDaEMsb0NBQXVCOztJQUN2Qix5Q0FBK0I7O0lBQy9CLCtDQUFxQzs7Ozs7SUFDckMsb0NBQWlEOztJQUNqRCxtREFBeUM7O0lBQ3pDLDhDQUFvQzs7SUFFcEMsd0NBQThCOztJQUM5Qix5Q0FBa0M7O0lBQ2xDLDRDQUE4Qjs7SUFDOUIsNkNBQStCOztJQTRDL0IseUNBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZm9ya0pvaW4sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgaGVscGVycyBmcm9tICduNy1ib2lsZXJwbGF0ZS1saWIvbGliL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gICAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gICAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgICBwcml2YXRlIHRpcHB5OiBhbnk7XG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gICAgcHJpdmF0ZSBmYWNldElucHV0czogYW55ID0ge307XG4gICAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyOiBhbnk7XG4gICAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYXV0b2NvbXBsZXRlQ2hhbmdlZCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHVibGljIG51bU9mSXRlbXNTdHI6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgaGFzU2Nyb2xsQmFja2dyb3VuZCA9IGZhbHNlO1xuICAgIHB1YmxpYyByZXN1bHRzTGltaXQgPSAtMTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IFtdO1xuICAgIHB1YmxpYyBvdXRlckxpbmtzOiBhbnk7XG4gICAgcHVibGljIG91dGVyTGlua3NUaXRsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBob21lQXV0b2NvbXBsZXRlUXVlcnk6IHN0cmluZztcbiAgICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHVibGljIGhvbWVBdXRvY29tcGxldGVJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBwdWJsaWMgcmVzdWx0c0xpc3RJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyA9PT09PSBCVUJCTEUgQ0hBUlQgPT09PT1cbiAgICBwdWJsaWMgYnViYmxlc0VuYWJsZWQgPSBmYWxzZTsgICAgIC8vIHRydWUgaWYgdGhpcyBBcmlhbm5hIFdlYiBwcm9qZWN0IGhhcyB0aGUgYnViYmxlIGNoYXJ0IG1vZHVsZVxuICAgIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZXM6IGFueVtdID0gW10gLy8gYXJyYXkgb2YgSURzXG4gICAgcHVibGljIGxhc3RCdWJibGVSZXNwb25zZTogYW55ICAgICAvLyBzdG9yZSBsYXN0IGJ1YmJsZSByZXNwb25zZSB0byByZWZyZXNoIHRoZSBncmFwaCB3aXRoIHRoZSBzYW1lIGRhdGFcbiAgICBwdWJsaWMgZmlyc3RCdWJibGVSZXNwb25zZTogYW55ICAgIC8vIHN0b3JlIHRoZSBmaXJzdCBhcnJheSBvZiBidWJibGVzLCB0byBmaW5kIHRoZW0gaW4gY2FzZSBvZiB6ZXJvIHJlc3VsdHMgKGVudGl0aWVzIGRhdGEgcmV0dXJuZWQgYXMgZW1wdHkgYXJyYXkgZnJvbSBiYWNrZW5kKVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgb25Jbml0KHsgY29tbXVuaWNhdGlvbiwgbWFpblN0YXRlLCBjb25maWd1cmF0aW9uLCB0aXBweSB9KSB7XG4gICAgICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgICAgIC8vIHRoaXMuZmFjZXREYXRhID0gW107XG4gICAgICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgICAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XG4gICAgICAgIHRoaXMucmVzdWx0c0xpbWl0ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG4gICAgICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJylbJ2J1YmJsZWNoYXJ0J10gOiBmYWxzZTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWhlcm8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsndG9wLWhlcm8nXSk7XG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWhlcm8tcGF0cmltb25pbycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydib3R0b20taGVybyddKTtcbiAgICAgICAgLy8gdXBkYXRlIHN0cmVhbXNcbiAgICAgICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBIb21lJyk7XG4gICAgICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBIb21lIExheW91dCcpO1xuICAgICAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnaG9tZScpO1xuICAgICAgICAvLyBsaXN0ZW4gYXV0b2NvbXBsZXRlIGNoYW5nZXNcbiAgICAgICAgdGhpcy5fbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpO1xuICAgICAgICB0aGlzLm91dGVyTGlua3MgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydvdXRlci1saW5rcyddWyd0ZXN0J107XG4gICAgICAgIHRoaXMub3V0ZXJMaW5rc1RpdGxlID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnb3V0ZXItbGlua3MnXVsndGl0bGUnXTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWJ1YmJsZS1jaGFydCcpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpLmJ1YmJsZUxpbWl0XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMub25lKCdhdy1jaGFydC10aXBweScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAgYmFzZVBhdGg6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJylbJ2VudGl0YUJhc2VQYXRoJ10sXG4gICAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25EZXN0cm95KCl7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbWFrZVJlcXVlc3QkKHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICAgICAgLy8gbWFrZSByZXF1ZXN0IGZyb20gRUhcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChxdWVyeSwge1xuICAgICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQ29tcG9uZW50ID0gKGlkLCBkYXRhLCBvcHRpb25zPykgPT4ge1xuICAgICAgICAvLyB1cGRhdGUgY29tcG9uZW50cyBmcm9tIEVIXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub25lKGlkKS51cGRhdGUoZGF0YSlcbiAgICB9XG5cbiAgICBpbml0aWFsRmlsdGVyUmVxdWVzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpWydidWJibGVMaW1pdCddXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5maXJzdEJ1YmJsZVJlc3BvbnNlID0gcmVzcG9uc2UuZW50aXRpZXNEYXRhO1xuICAgICAgICBjb25zdCBmYWNldERhdGEgPSBbXTtcbiAgICAgICAgcmVzcG9uc2UudHlwZU9mRW50aXR5RGF0YS5mb3JFYWNoKCh0b2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFRPRWNvbmZpZ0RhdGEgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3RvZS50eXBlXTtcbiAgICAgICAgICAgIGZhY2V0RGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAuLi50b2UsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsb2NrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC4uLlRPRWNvbmZpZ0RhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoZmFjZXREYXRhKTtcbiAgICB9XG5cbiAgICByZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55KSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH07XG4gICAgICAgIGxldCBudW1PZkl0ZW1zID0gcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLnRvdGFsQ291bnQ7XG4gICAgICAgIGlmIChudW1PZkl0ZW1zID4gMCkge1xuICAgICAgICAgICAgbGV0IG51bU9mVGhvdXNhbmQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKG51bU9mSXRlbXMgPiA5OTkpIHtcbiAgICAgICAgICAgICAgICBudW1PZkl0ZW1zIC09IDEwMDA7XG4gICAgICAgICAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG51bU9mSXRlbXNUbXBTdHIgPSBudW1PZkl0ZW1zICsgJyc7XG4gICAgICAgICAgICBpZiAobnVtT2ZJdGVtcyA8IDEwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAwJyArIG51bU9mSXRlbXM7XG4gICAgICAgICAgICBlbHNlIGlmIChudW1PZkl0ZW1zIDwgMTAwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAnICsgbnVtT2ZJdGVtcztcbiAgICAgICAgICAgIGlmIChudW1PZlRob3VzYW5kID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZlRob3VzYW5kICsgJy4nICsgbnVtT2ZJdGVtc1RtcFN0cjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZkl0ZW1zICsgJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgICBjb250ZXh0OiAnaG9tZScsXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbik7XG5cbiAgICAgICAgLy8gc2Nyb2xsIGNvbnRyb2xcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVGFncyhvbmx5QnViYmxlcz86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFvbmx5QnViYmxlcykge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJJdGVtVGFncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBjaGFuZ2UuaW5wdXRQYXlsb2FkO1xuICAgICAgICB2YXIgdmFsdWU6IHN0cmluZyA9IGNoYW5nZS52YWx1ZTtcbiAgICAgICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgICAgICB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihlbnRlcikge1xuICAgICAgICB2YXIgcGF5bG9hZDogc3RyaW5nID0gZW50ZXIuaW5wdXRQYXlsb2FkO1xuICAgICAgICAvLyBnZXQgdGhlIHRleHQgZW50ZXJlZCBpbiB0aGlzIGlucHV0XG4gICAgICAgIHZhciB2YWx1ZTogc3RyaW5nID0gdGhpcy5mYWNldElucHV0c1twYXlsb2FkXTtcbiAgICB9XG5cbiAgICByZW5kZXJJdGVtVGFncygpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIFRyeSB0byBidWlsZCBhbiBpdGVtIHRhZyBmb3IgZWFjaCBzZWxlY3RlZCBxdWVyeSBsb29raW5nIGF0IHRoZSBkYXRhIGZyb20gdGhlXG4gICAgICAgICAgICBmaXJzdCByZXNwb25zZS4gSWYgdGhlIG5lZWRlZCBidWJibGUgZGF0YSBjYW5ub3QgYmUgZm91bmQsIGFzayB0aGUgYmFja2VuZFxuICAgICAgICAgICAgZm9yIHRoYXQgYnViYmxlJ3MgZGF0YS5cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcXVlcnlMaXN0ID0gW107IC8vIGxpc3Qgb2YgcGVuZGluZyBxdWVyaWVzXG4gICAgICAgIGNvbnN0IHRhZ3NEYXRhID0gW107ICAvLyBsaXN0IG9mIHRhZ3MgZGF0YSBidWlsdCBmcm9tIHF1ZXJ5XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goYiA9PiB7IC8vIHRyeSB0byBnZXQgdGhlIGRhdGEgb2YgZWFjaCBzZWxlY3RlZCBidWJibGVcbiAgICAgICAgICAgIGNvbnN0IHRoZUJ1YmJsZSA9IHRoaXMuZmlyc3RCdWJibGVSZXNwb25zZS5maW5kKGVsID0+IGVsLmVudGl0eS5pZCA9PT0gYik7XG4gICAgICAgICAgICBpZiAodGhlQnViYmxlKSB7IC8vIGlmIGEgYnViYmxlIHdhcyBmb3VuZFxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbdGhlQnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHldO1xuICAgICAgICAgICAgICAgIHRhZ3NEYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGhlQnViYmxlLmVudGl0eS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBgdGFnLSR7YnViYmxlQ29uZmlnWydjbGFzcy1uYW1lJ119YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBpZiB0aGUgYnViYmxlIHdhcyBub3QgZm91bmQsIG1ha2UgYSBxdWVyeVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZW50aXR5SWQ6IGIsIGVudGl0aWVzTGlzdFNpemU6IDEgfTtcbiAgICAgICAgICAgICAgICBxdWVyeUxpc3QucHVzaCh0aGlzLm1ha2VSZXF1ZXN0JCgnZ2V0TWlzc2luZ0J1YmJsZScsIHBhcmFtcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHF1ZXJ5TGlzdC5sZW5ndGggPiAwKSB7IC8vIGlmIHRoZXJlIGFyZSBwZW5kaW5nIGJ1YmJsZSBxdWVyaWVzXG4gICAgICAgICAgICBmb3JrSm9pbihxdWVyeUxpc3QpLnN1YnNjcmliZShmb3JrcmVzID0+IHtcbiAgICAgICAgICAgICAgICBmb3JrcmVzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJylbci50eXBlT2ZFbnRpdHldO1xuICAgICAgICAgICAgICAgICAgICB0YWdzRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiByLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGB0YWctJHtidWJibGVDb25maWdbJ2NsYXNzLW5hbWUnXX1gXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGVyb0NoYW5nZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gaGVscGVycy5lc2NhcGVEb3VibGVRdW90ZXModmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGFuZ2VkJC5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhvbWVBdXRvY29tcGxldGVRdWVyeSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3Njcm9sbEJhY2tncm91bmRDb250cm9sKCkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZS1yZXN1bHRzLWxpc3QnKVxuICAgICAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICAgICAgY29uc3Qgc291cmNlJCA9IGZyb21FdmVudChub2RlLCAnc2Nyb2xsJyk7XG5cbiAgICAgICAgLy8gaGVpZ2h0IGNvbnRyb2xcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKG5vZGUpO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgIC8vIHNjcm9sbCBsaXN0ZW5cbiAgICAgICAgc291cmNlJC5waXBlKFxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDUwKVxuICAgICAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IGFueSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEhhc1Njcm9sbEJhY2tncm91bmQodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHRhcmdldCA/IChcbiAgICAgICAgICAgIHRhcmdldC5zY3JvbGxIZWlnaHQgPiAodGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQpXG4gICAgICAgICkgOiBmYWxzZVxuICAgIH1cblxuICAgIHByaXZhdGUgX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAga2V5czogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKSxcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgbGFiZWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdsYWJlbHMnKSxcbiAgICAgICAgICAgIHBhdGhzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUNoYW5nZWQkLnBpcGUoXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXG4gICAgICAgICkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywge1xuICAgICAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7IG9mZnNldDogMCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMub25lKCdhdy1ob21lLWF1dG9jb21wbGV0ZScpLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogdmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90b2dnbGVBdXRvY29tcGxldGVQb3BvdmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlcikge1xuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXctaG9tZS1hZHZhbmNlZC1hdXRvY29tcGxldGUtcG9wb3ZlcicpO1xuICAgICAgICAgICAgdGVtcGxhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIgPSB0aGlzLnRpcHB5KCcuYXctaG9tZV9fdG9wLWhlcm8gLm43LWhlcm9fX2lucHV0Jywge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXInLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvbkhpZGRlbjogKCkgPT4gdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9IGZhbHNlLFxuICAgICAgICAgICAgfSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSAhdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbjtcbiAgICB9XG59XG4iXX0=