/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var AwHomeLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutDS, _super);
    function AwHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetData = null;
        _this.facetInputs = {};
        _this.allBubbles = null;
        _this.selectedBubbles = [];
        _this.numOfItemsStr = null;
        _this._bubbleChart = null;
        _this.maxBubblesSelectable = 3;
        _this.entityBubbleIdMap = {};
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
        var _this = this;
        var communication = _a.communication, mainState = _a.mainState, configuration = _a.configuration;
        this.communication = communication;
        this.mainState = mainState;
        this.configuration = configuration;
        this.one('aw-hero').update({});
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.facetData = [];
            response.entitiesData.forEach((/**
             * @param {?} ent
             * @return {?}
             */
            function (ent) {
                /** @type {?} */
                var teoConfigData = _this.configuration.get("config-keys")[ent.countData.type.configKey];
                if (teoConfigData)
                    _this.facetData.push(tslib_1.__assign({}, (ent.countData), { enabled: true, icon: teoConfigData.icon, label: teoConfigData.label }));
            }));
            _this.one('aw-home-facets-wrapper').update(_this.facetData);
            _this.setAllBubblesFromApolloQuery(response);
            _this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
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
        if (!response || !response.itemsPagination)
            return;
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
            this.numOfItemsStr = null;
        }
        this.one('aw-home-item-preview-wrapper').update(response.itemsPagination.items);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleSelected = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (payload && payload.bubble) {
            if (!this.selectedBubbles.includes(payload.bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.selectedBubbles.push(payload.bubble);
                    this.updateBubblesAndItemPreviews();
                }
            }
        }
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleDeselected = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (payload && payload.bubble) {
            this.selectedBubbles = this.selectedBubbles.filter((/**
             * @param {?} b
             * @return {?}
             */
            function (b) { return b.id !== payload.bubble.id; }));
            if (payload.bubble.hasCloseIcon) {
                payload.bubble.hasCloseIcon = false;
                this.updateBubblesAndItemPreviews();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubblesAndItemPreviews = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedEntitiesIds = [];
        if (this.entityBubbleIdMap)
            this.selectedBubbles.forEach((/**
             * @param {?} sB
             * @return {?}
             */
            function (sB) {
                /** @type {?} */
                var entityId = _this.entityBubbleIdMap[sB.id];
                if (entityId)
                    selectedEntitiesIds.push(entityId);
            }));
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: {
                selectedEntitiesIds: selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: 4 }
            },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.renderPreviewsFromApolloQuery(response);
            _this.renderItemTags();
            _this.setAllBubblesFromApolloQuery(response, true);
        }));
    };
    /**
     * @param {?} response
     * @param {?=} reset
     * @return {?}
     */
    AwHomeLayoutDS.prototype.setAllBubblesFromApolloQuery = /**
     * @param {?} response
     * @param {?=} reset
     * @return {?}
     */
    function (response, reset) {
        var _this = this;
        if (!response || !response.entitiesData)
            return;
        this.allBubbles = [];
        for (var i = 0; i < response.entitiesData.length; i++) {
            /** @type {?} */
            var currentToE = response.entitiesData[i];
            for (var j = 0; j < currentToE.entitiesCountData.length; j++) {
                this.allBubbles.push(tslib_1.__assign({}, currentToE.entitiesCountData[j], { color: this.configuration.get("config-keys")[currentToE.countData.type.configKey]['color']['hex'] }));
            }
        }
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            // d3/svg does not allow Number as beginning of ID.
            // d3/svg does not allow '-' as part of ID.
            bubble.id = 'B_' + bubble.entity.id.replace(/-/g, '_');
            _this.entityBubbleIdMap[bubble.id] = bubble.entity.id;
            return bubble;
        }));
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            bubble.selected = false;
            for (var i = 0; i < _this.selectedBubbles.length; i++) {
                if (_this.selectedBubbles[i].id === bubble.id)
                    bubble.selected = true;
            }
        }));
        this.one('aw-home-bubble-chart').update({
            width: window.innerWidth / 1.8,
            bubbles: this.filterBubblesBasedOnFacetsEnabled(),
            reset: (reset ? reset : false),
            setBubbleChart: (/**
             * @param {?} bubbleCref
             * @return {?}
             */
            function (bubbleCref) { return _this._bubbleChart = bubbleCref; })
        });
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.filterBubblesBasedOnFacetsEnabled = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var result = this.allBubbles.filter((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            for (var i = 0; i < _this.facetData.length; i++) {
                if (bubble.entity.typeOfEntity.id === _this.facetData[i].type.id)
                    if (!_this.facetData[i].enabled) {
                        return false;
                    }
            }
            return true;
        }));
        return result;
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
     * @param {?} facetId
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetHeaderClick = /**
     * @param {?} facetId
     * @return {?}
     */
    function (facetId) {
        var _this = this;
        /** @type {?} */
        var updateBubbles = false;
        /** @type {?} */
        var enabledFacets = this.facetData.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.enabled; })).length;
        this.facetData.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            if (f.type.id === facetId) {
                if (f.enabled) {
                    if (enabledFacets > 1) {
                        f.enabled = false;
                        updateBubbles = true;
                    }
                }
                else {
                    f.enabled = true;
                    updateBubbles = true;
                }
            }
        }));
        this.one('aw-home-facets-wrapper').update(this.facetData);
        if (updateBubbles) {
            /** @type {?} */
            var disableFacetsIds_1 = [];
            this.facetData.forEach((/**
             * @param {?} fD
             * @return {?}
             */
            function (fD) {
                if (!fD.enabled)
                    disableFacetsIds_1.push(fD.type.id);
            }));
            if (disableFacetsIds_1) {
                /** @type {?} */
                var filteredSelectedBubbles = this.selectedBubbles.filter((/**
                 * @param {?} bubble
                 * @return {?}
                 */
                function (bubble) {
                    /** @type {?} */
                    var typeOfEntity = "";
                    for (var i = 0; i < _this.allBubbles.length; i++) {
                        if (_this.allBubbles[i].id === bubble.id) {
                            typeOfEntity = _this.allBubbles[i].entity.typeOfEntity.id;
                            break;
                        }
                    }
                    if (disableFacetsIds_1.includes(typeOfEntity))
                        return false;
                    return true;
                }));
                if (filteredSelectedBubbles.length != this.selectedBubbles.length) {
                    this.selectedBubbles = filteredSelectedBubbles;
                    this.updateBubblesAndItemPreviews();
                }
                ;
            }
            this.allBubbles.forEach((/**
             * @param {?} bubble
             * @return {?}
             */
            function (bubble) {
                bubble.selected = false;
                for (var i = 0; i < _this.selectedBubbles.length; i++) {
                    if (_this.selectedBubbles[i].id === bubble.id)
                        bubble.selected = true;
                }
            }));
            this.one('aw-home-bubble-chart').update({
                width: window.innerWidth / 1.8,
                bubbles: this.filterBubblesBasedOnFacetsEnabled(),
                setBubbleChart: (/**
                 * @param {?} bubbleCref
                 * @return {?}
                 */
                function (bubbleCref) { return _this._bubbleChart = bubbleCref; }),
                reset: true
            });
        }
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderItemTags = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var tagsData = [];
        this.selectedBubbles.forEach((/**
         * @param {?} sBubble
         * @return {?}
         */
        function (sBubble) {
            /** @type {?} */
            var label = '';
            for (var i = 0; i < _this.allBubbles.length; i++) {
                if (_this.allBubbles[i].id === sBubble.id) {
                    label = _this.allBubbles[i].entity.label;
                    break;
                }
            }
            tagsData.push({ label: label, icon: "n7-icon-close", payload: sBubble.id, classes: "tag-" + _this.allBubbles[i].entity.typeOfEntity.id });
        }));
        this.one('aw-home-item-tags-wrapper').update(tagsData);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onTagClicked = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!payload)
            return;
        /** @type {?} */
        var bubbleId = payload;
        if (this._bubbleChart) {
            this._bubbleChart.selectAll("g").each((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                if (b.id === bubbleId)
                    b.hasCloseIcon = false;
            }));
        }
        this.selectedBubbles = this.selectedBubbles.filter((/**
         * @param {?} b
         * @return {?}
         */
        function (b) { return b.id !== payload; }));
        this.updateBubblesAndItemPreviews();
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._getSubnav = /**
     * @private
     * @return {?}
     */
    function () {
        return ['home', 'results', 'single'].map((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return ({
            text: page.toUpperCase(),
            payload: {
                source: 'navigate',
                handler: 'router',
                path: ["aw/" + page],
                id: page
            },
            _meta: { id: page }
        }); }));
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._getBreadcrumbs = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            items: [{
                    label: 'Arianna Web',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: ["aw/home"]
                    }
                },
                {
                    label: 'Home Layout',
                    payload: {
                        source: 'navigate',
                        handler: 'router',
                        path: ["aw/home"]
                    }
                }]
        };
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
    AwHomeLayoutDS.prototype.configuration;
    /** @type {?} */
    AwHomeLayoutDS.prototype.test;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetData;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetInputs;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.allBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.numOfItemsStr;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype._bubbleChart;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.maxBubblesSelectable;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.entityBubbleIdMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQW9DLDBDQUFnQjtJQUFwRDtRQUFBLHFFQStSQztRQTFSUyxlQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGdCQUFVLEdBQVUsSUFBSSxDQUFDO1FBQzFCLHFCQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLG1CQUFhLEdBQVcsSUFBSSxDQUFDO1FBQzVCLGtCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLDBCQUFvQixHQUFVLENBQUMsQ0FBQztRQUNoQyx1QkFBaUIsR0FBUSxFQUFFLENBQUM7O0lBbVJ0QyxDQUFDOzs7OztJQWpSQywrQkFBTTs7OztJQUFOLFVBQU8sRUFBMkM7UUFBbEQsaUJBNEJDO1lBNUJRLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxnQ0FBYTtRQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUVuQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7WUFDMUMsT0FBTzs7OztZQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQTtTQUN6QyxDQUFDLENBQUMsU0FB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QkFDbEI7aUJBQ0YsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBL1JELENBQW9DLGdCQUFnQixHQStSbkQ7Ozs7Ozs7SUE5UkMsdUNBQTJCOzs7OztJQUMzQixtQ0FBdUI7Ozs7O0lBQ3ZCLHVDQUEyQjs7SUFDM0IsOEJBQW9COzs7OztJQUNwQixtQ0FBZ0M7Ozs7O0lBQ2hDLHFDQUE4Qjs7Ozs7SUFDOUIsb0NBQWlDOztJQUNqQyx5Q0FBbUM7O0lBQ25DLHVDQUFvQzs7Ozs7SUFDcEMsc0NBQWlDOzs7OztJQUNqQyw4Q0FBd0M7Ozs7O0lBQ3hDLDJDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbW11bmljYXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHB1YmxpYyB0ZXN0OiBzdHJpbmc7XG4gIHByaXZhdGUgZmFjZXREYXRhOiBhbnlbXSA9IG51bGw7XG4gIHByaXZhdGUgZmFjZXRJbnB1dHM6IGFueSA9IHt9O1xuICBwcml2YXRlIGFsbEJ1YmJsZXM6IGFueVtdID0gbnVsbDtcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcbiAgcHVibGljIG51bU9mSXRlbXNTdHI6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgX2J1YmJsZUNoYXJ0OiBhbnkgPSBudWxsO1xuICBwcml2YXRlIG1heEJ1YmJsZXNTZWxlY3RhYmxlOm51bWJlciA9IDM7XG4gIHByaXZhdGUgZW50aXR5QnViYmxlSWRNYXA6IGFueSA9IHt9O1xuXG4gIG9uSW5pdCh7IGNvbW11bmljYXRpb24sIG1haW5TdGF0ZSwgY29uZmlndXJhdGlvbiB9KXtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICB0aGlzLm9uZSgnYXctaGVybycpLnVwZGF0ZSh7fSk7XG5cbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5mYWNldERhdGEgPSBbXTtcbiAgICAgIHJlc3BvbnNlLmVudGl0aWVzRGF0YS5mb3JFYWNoKCAoZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlb0NvbmZpZ0RhdGEgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIilbZW50LmNvdW50RGF0YS50eXBlLmNvbmZpZ0tleV07XG4gICAgICAgIGlmKHRlb0NvbmZpZ0RhdGEpXG4gICAgICAgICAgdGhpcy5mYWNldERhdGEucHVzaCh7Li4uKGVudC5jb3VudERhdGEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogdGVvQ29uZmlnRGF0YS5pY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRlb0NvbmZpZ0RhdGEubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgfSApO1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUodGhpcy5mYWNldERhdGEpO1xuICAgICAgdGhpcy5zZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIHN0cmVhbXNcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsICdBcmlhbm5hIFdlYiA+IEhvbWUnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ3BhZ2VUaXRsZScsICdBcmlhbm5hIFdlYjogSG9tZSBMYXlvdXQnKTtcbiAgfVxuXG4gIHJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkpe1xuICAgIGlmKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uKSByZXR1cm47XG5cbiAgICBsZXQgbnVtT2ZJdGVtcyA9IHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi50b3RhbENvdW50O1xuICAgIGlmKG51bU9mSXRlbXM+MCl7XG4gICAgICBsZXQgbnVtT2ZUaG91c2FuZCA9IDA7XG4gICAgICB3aGlsZShudW1PZkl0ZW1zPjk5OSl7XG4gICAgICAgIG51bU9mSXRlbXMtPTEwMDA7XG4gICAgICAgIG51bU9mVGhvdXNhbmQgKz0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBudW1PZkl0ZW1zVG1wU3RyID0gbnVtT2ZJdGVtcyArICcnO1xuICAgICAgaWYobnVtT2ZJdGVtczwxMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwMCcrbnVtT2ZJdGVtcztcbiAgICAgIGVsc2UgaWYobnVtT2ZJdGVtczwxMDApIG51bU9mSXRlbXNUbXBTdHIgPSAnMCcrbnVtT2ZJdGVtcztcbiAgICAgIGlmKG51bU9mVGhvdXNhbmQ+MClcbiAgICAgICAgdGhpcy5udW1PZkl0ZW1zU3RyID0gbnVtT2ZUaG91c2FuZCsnLicrbnVtT2ZJdGVtc1RtcFN0cjtcbiAgICAgIGVsc2VcbiAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZkl0ZW1zKycnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tcHJldmlldy13cmFwcGVyJykudXBkYXRlKHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi5pdGVtcyk7XG4gIH1cblxuICBwdWJsaWMgb25CdWJibGVTZWxlY3RlZChwYXlsb2FkKXtcbiAgICBpZihwYXlsb2FkICYmIHBheWxvYWQuYnViYmxlKXtcbiAgICAgIGlmKCF0aGlzLnNlbGVjdGVkQnViYmxlcy5pbmNsdWRlcyhwYXlsb2FkLmJ1YmJsZSkpe1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg8dGhpcy5tYXhCdWJibGVzU2VsZWN0YWJsZSl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMucHVzaChwYXlsb2FkLmJ1YmJsZSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25CdWJibGVEZXNlbGVjdGVkKHBheWxvYWQpe1xuICAgIGlmKHBheWxvYWQgJiYgcGF5bG9hZC5idWJibGUpe1xuICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoXG4gICAgICAgIChiKSA9PiBiLmlkIT09cGF5bG9hZC5idWJibGUuaWQgKTtcbiAgICAgIGlmKHBheWxvYWQuYnViYmxlLmhhc0Nsb3NlSWNvbil7XG4gICAgICAgIHBheWxvYWQuYnViYmxlLmhhc0Nsb3NlSWNvbj1mYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCl7XG4gICAgbGV0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBbXTtcbiAgICBpZih0aGlzLmVudGl0eUJ1YmJsZUlkTWFwKVxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goIChzQikgPT4ge1xuICAgICAgbGV0IGVudGl0eUlkID0gdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtzQi5pZF07XG4gICAgICBpZihlbnRpdHlJZClcbiAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcy5wdXNoKGVudGl0eUlkKTtcbiAgICB9KTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXM6IHsgXG4gICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgIGl0ZW1zUGFnaW5hdGlvbjp7IG9mZnNldDowLGxpbWl0OjQgfVxuICAgICAgfSxcbiAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICAgIHRoaXMucmVuZGVySXRlbVRhZ3MoKTtcbiAgICAgIHRoaXMuc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSx0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSxyZXNldD86Ym9vbGVhbil7XG4gICAgaWYoICFyZXNwb25zZSB8fCAhcmVzcG9uc2UuZW50aXRpZXNEYXRhICkgcmV0dXJuO1xuICAgIHRoaXMuYWxsQnViYmxlcyA9IFtdO1xuICAgIGZvcih2YXIgaT0wO2k8cmVzcG9uc2UuZW50aXRpZXNEYXRhLmxlbmd0aDtpKyspe1xuICAgICAgbGV0IGN1cnJlbnRUb0UgPSByZXNwb25zZS5lbnRpdGllc0RhdGFbaV07XG4gICAgICBmb3IodmFyIGo9MDtqPGN1cnJlbnRUb0UuZW50aXRpZXNDb3VudERhdGEubGVuZ3RoO2orKyl7XG4gICAgICAgIHRoaXMuYWxsQnViYmxlcy5wdXNoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLmN1cnJlbnRUb0UuZW50aXRpZXNDb3VudERhdGFbal0sXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb25maWd1cmF0aW9uLmdldChcImNvbmZpZy1rZXlzXCIpW2N1cnJlbnRUb0UuY291bnREYXRhLnR5cGUuY29uZmlnS2V5XVsnY29sb3InXVsnaGV4J11cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcCA9IHt9O1xuICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICAvLyBkMy9zdmcgZG9lcyBub3QgYWxsb3cgTnVtYmVyIGFzIGJlZ2lubmluZyBvZiBJRC5cbiAgICAgIC8vIGQzL3N2ZyBkb2VzIG5vdCBhbGxvdyAnLScgYXMgcGFydCBvZiBJRC5cbiAgICAgIGJ1YmJsZS5pZCA9ICdCXycrYnViYmxlLmVudGl0eS5pZC5yZXBsYWNlKC8tL2csJ18nKTtcbiAgICAgIHRoaXMuZW50aXR5QnViYmxlSWRNYXBbYnViYmxlLmlkXT1idWJibGUuZW50aXR5LmlkO1xuICAgICAgcmV0dXJuIGJ1YmJsZTtcbiAgICB9KTtcbiAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXNbaV0uaWQ9PT1idWJibGUuaWQpIGJ1YmJsZS5zZWxlY3RlZD10cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWJ1YmJsZS1jaGFydCcpLnVwZGF0ZSh7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgvMS44LFxuICAgICAgYnViYmxlczogdGhpcy5maWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKSxcbiAgICAgIHJlc2V0OiAoIHJlc2V0PyByZXNldCA6IGZhbHNlICksXG4gICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZlxuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCl7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYWxsQnViYmxlcy5maWx0ZXIoXG4gICAgICAoYnViYmxlKSA9PiB7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuZmFjZXREYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICBpZiggYnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHkuaWQgPT09IHRoaXMuZmFjZXREYXRhW2ldLnR5cGUuaWQgKVxuICAgICAgICAgICAgaWYoICF0aGlzLmZhY2V0RGF0YVtpXS5lbmFibGVkICl7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0U2VhcmNoQ2hhbmdlKGNoYW5nZSkge1xuICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBjaGFuZ2UuaW5wdXRQYXlsb2FkO1xuICAgIHZhciB2YWx1ZTogc3RyaW5nID0gY2hhbmdlLnZhbHVlO1xuICAgIC8vIHN0b3JlIHRoZSBlbnRlcmVkIHRleHQgaW4gZmFjZXRJbnB1dHNcbiAgICB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdID0gdmFsdWU7XG4gIH1cblxuICBoYW5kbGVGYWNldFNlYXJjaEVudGVyKGVudGVyKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGVudGVyLmlucHV0UGF5bG9hZDtcbiAgICAvLyBnZXQgdGhlIHRleHQgZW50ZXJlZCBpbiB0aGlzIGlucHV0XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdO1xuICB9XG5cbiAgaGFuZGxlRmFjZXRIZWFkZXJDbGljayhmYWNldElkKXtcbiAgICBsZXQgdXBkYXRlQnViYmxlcyA9IGZhbHNlO1xuICAgIGxldCBlbmFibGVkRmFjZXRzID0gdGhpcy5mYWNldERhdGEuZmlsdGVyKCAoZikgPT4gZi5lbmFibGVkICkubGVuZ3RoO1xuICAgIHRoaXMuZmFjZXREYXRhLmZvckVhY2goIChmKSA9PiB7XG4gICAgICAgIGlmKGYudHlwZS5pZD09PWZhY2V0SWQpe1xuICAgICAgICAgIGlmKGYuZW5hYmxlZCl7XG4gICAgICAgICAgICBpZihlbmFibGVkRmFjZXRzPjEpe1xuICAgICAgICAgICAgICBmLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGYuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB1cGRhdGVCdWJibGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmZhY2V0RGF0YSk7XG4gICAgaWYodXBkYXRlQnViYmxlcyl7XG4gICAgICBsZXQgZGlzYWJsZUZhY2V0c0lkcyA9IFtdO1xuICAgICAgdGhpcy5mYWNldERhdGEuZm9yRWFjaCggKGZEKSA9PiB7XG4gICAgICAgIGlmKCFmRC5lbmFibGVkKSBkaXNhYmxlRmFjZXRzSWRzLnB1c2goZkQudHlwZS5pZCk7XG4gICAgICB9KTtcblxuICAgICAgaWYoZGlzYWJsZUZhY2V0c0lkcyl7XG4gICAgICAgIGxldCBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlciggKGJ1YmJsZSkgPT4ge1xuICAgICAgICAgIGxldCB0eXBlT2ZFbnRpdHkgPSBcIlwiO1xuICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5hbGxCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5hbGxCdWJibGVzW2ldLmlkPT09YnViYmxlLmlkKXtcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5PXRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmlkO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZGlzYWJsZUZhY2V0c0lkcy5pbmNsdWRlcyh0eXBlT2ZFbnRpdHkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcy5sZW5ndGghPXRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aCl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcztcbiAgICAgICAgICB0aGlzLnVwZGF0ZUJ1YmJsZXNBbmRJdGVtUHJldmlld3MoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlc1tpXS5pZD09PWJ1YmJsZS5pZCkgYnViYmxlLnNlbGVjdGVkPXRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLzEuOCxcbiAgICAgICAgYnViYmxlczp0aGlzLmZpbHRlckJ1YmJsZXNCYXNlZE9uRmFjZXRzRW5hYmxlZCgpLFxuICAgICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZixcbiAgICAgICAgcmVzZXQ6dHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySXRlbVRhZ3MoKXtcbiAgICBsZXQgdGFnc0RhdGEgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKCAoc0J1YmJsZSkgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gJyc7XG4gICAgICBmb3IodmFyIGk9MDtpPHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodGhpcy5hbGxCdWJibGVzW2ldLmlkPT09c0J1YmJsZS5pZCl7XG4gICAgICAgICAgbGFiZWwgPSB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YWdzRGF0YS5wdXNoKHtsYWJlbCxpY29uOlwibjctaWNvbi1jbG9zZVwiLHBheWxvYWQ6c0J1YmJsZS5pZCxjbGFzc2VzOlwidGFnLVwiK3RoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmlkfSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xuICB9XG5cbiAgb25UYWdDbGlja2VkKHBheWxvYWQpe1xuICAgIGlmKCFwYXlsb2FkKSByZXR1cm47XG4gICAgY29uc3QgYnViYmxlSWQ9cGF5bG9hZDtcbiAgICBpZih0aGlzLl9idWJibGVDaGFydCl7XG4gICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKCBiID0+IHtcbiAgICAgICAgaWYoYi5pZD09PWJ1YmJsZUlkKSBiLmhhc0Nsb3NlSWNvbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKCAoYikgPT4gYi5pZCE9PXBheWxvYWQgKTtcbiAgICB0aGlzLnVwZGF0ZUJ1YmJsZXNBbmRJdGVtUHJldmlld3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFN1Ym5hdigpe1xuICAgIHJldHVybiBbJ2hvbWUnLCAncmVzdWx0cycsICdzaW5nbGUnXS5tYXAocGFnZSA9PiAoe1xuICAgICAgdGV4dDogcGFnZS50b1VwcGVyQ2FzZSgpLCBcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc291cmNlOiAnbmF2aWdhdGUnLFxuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgcGF0aDogW2Bhdy8ke3BhZ2V9YF0sXG4gICAgICAgIGlkOiBwYWdlXG4gICAgICB9LFxuICAgICAgX21ldGE6IHsgaWQ6IHBhZ2UgfVxuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEJyZWFkY3J1bWJzKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBsYWJlbDogJ0FyaWFubmEgV2ViJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ25hdmlnYXRlJyxcbiAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICBwYXRoOiBbYGF3L2hvbWVgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0hvbWUgTGF5b3V0JyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ25hdmlnYXRlJyxcbiAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICBwYXRoOiBbYGF3L2hvbWVgXVxuICAgICAgICB9XG4gICAgICB9XSBcbiAgICB9O1xuICB9XG59Il19