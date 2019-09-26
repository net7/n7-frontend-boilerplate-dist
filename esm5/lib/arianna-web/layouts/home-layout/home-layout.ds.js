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
        _this.selectedBubbleIds = [];
        _this.numOfItemsStr = null;
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
        var communication = _a.communication, mainState = _a.mainState;
        this.communication = communication;
        this.mainState = mainState;
        this.one('aw-hero').update({});
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.log(error); }),
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            console.log('apollo-response', { response: response });
            _this.facetData = [];
            response.entitiesData.forEach((/**
             * @param {?} ent
             * @return {?}
             */
            function (ent) {
                _this.facetData.push(tslib_1.__assign({}, (ent.countData), { enabled: true }));
            }));
            _this.one('aw-home-facets-wrapper').update(_this.facetData);
            _this.renderBubblesFromApolloQuery(response);
            _this.renderPreviewsFromApolloQuery(response);
        }));
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        // this.mainState.update('subnav', this._getSubnav());
        // this.mainState.update('breadcrumbs', this._getBreadcrumbs());
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
            if (numOfThousand > 0)
                this.numOfItemsStr = numOfThousand + '.' + numOfItems;
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
        if (payload && payload.id) {
            if (!this.selectedBubbleIds.includes(payload.id))
                this.selectedBubbleIds.push(payload.id);
        }
        this.updateItemPreviews();
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
        if (payload && payload.id)
            this.selectedBubbleIds = this.selectedBubbleIds.filter((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                return (b !== payload.id);
            }));
        this.updateItemPreviews();
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateItemPreviews = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.log(error); }),
            params: { selectedEntitiesIds: this.selectedBubbleIds,
                itemsPagination: { offset: 0, limit: 4 } },
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            // the facets should be handled by the layout
            // (otherwise they would always return as enabled)
            //this.facetData = [];
            //response.entitiesData.forEach( (ent) => {
            //  this.facetData.push({...(ent.countData), enabled:true});
            //});
            _this.renderPreviewsFromApolloQuery(response);
            _this.renderItemTags();
        }));
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderBubblesFromApolloQuery = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (!response || !response.entitiesData)
            return;
        this.allBubbles = [];
        for (var i = 0; i < response.entitiesData.length; i++) {
            /** @type {?} */
            var currentToE = response.entitiesData[i];
            for (var j = 0; j < currentToE.entitiesCountData.length; j++) {
                this.allBubbles.push(tslib_1.__assign({}, currentToE.entitiesCountData[j], { color: currentToE.countData.type.color }));
            }
        }
        this.allBubbles.map((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            // d3/svg doesn't allow '-' or strings starting with a number as ids
            bubble.entity.id = 'B_' + bubble.entity.id.replace(/-/g, '_');
            return bubble;
        }));
        this.one('aw-home-bubble-chart').update({
            width: window.innerWidth / 1.8,
            bubbles: this.allBubbles
        });
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
        console.log('changed: ' + payload + ' with value: ' + value);
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
        /** @type {?} */
        var value = this.facetInputs[payload];
        // get the text entered in this input
        console.log('entered: ' + payload + ' with value: ' + value);
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
                var filteredSelectedBubbleIds = this.selectedBubbleIds.filter((/**
                 * @param {?} bId
                 * @return {?}
                 */
                function (bId) {
                    /** @type {?} */
                    var typeOfEntity = "";
                    for (var i = 0; i < _this.allBubbles.length; i++) {
                        if (_this.allBubbles[i].entity.id === bId) {
                            typeOfEntity = _this.allBubbles[i].entity.typeOfEntity.id;
                            break;
                        }
                    }
                    if (disableFacetsIds_1.includes(typeOfEntity))
                        return false;
                    return true;
                }));
                if (filteredSelectedBubbleIds.length != this.selectedBubbleIds.length) {
                    this.selectedBubbleIds = filteredSelectedBubbleIds;
                    this.updateItemPreviews();
                }
                ;
            }
            /** @type {?} */
            var currentBubbles = this.allBubbles.filter((/**
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
            currentBubbles.forEach((/**
             * @param {?} bubble
             * @return {?}
             */
            function (bubble) {
                bubble.selected = false;
                if (_this.selectedBubbleIds.includes(bubble.entity.id)) {
                    bubble.selected = true;
                }
            }));
            this.one('aw-home-bubble-chart').update({
                width: window.innerWidth / 1.8,
                bubbles: currentBubbles,
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
        this.selectedBubbleIds.forEach((/**
         * @param {?} sBid
         * @return {?}
         */
        function (sBid) {
            /** @type {?} */
            var label = '';
            for (var i = 0; i < _this.allBubbles.length; i++) {
                if (_this.allBubbles[i].entity.id === sBid) {
                    label = _this.allBubbles[i].entity.label;
                    break;
                }
            }
            tagsData.push({ label: label });
        }));
        this.one('aw-home-item-tags-wrapper').update(tagsData);
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
    AwHomeLayoutDS.prototype.selectedBubbleIds;
    /** @type {?} */
    AwHomeLayoutDS.prototype.numOfItemsStr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQW9DLDBDQUFnQjtJQUFwRDtRQUFBLHFFQW1QQztRQS9PUyxlQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGdCQUFVLEdBQVUsSUFBSSxDQUFDO1FBQzFCLHVCQUFpQixHQUFVLEVBQUUsQ0FBQztRQUM5QixtQkFBYSxHQUFXLElBQUksQ0FBQzs7SUEyT3RDLENBQUM7Ozs7O0lBek9DLCtCQUFNOzs7O0lBQU4sVUFBTyxFQUE0QjtRQUFuQyxpQkF3QkM7WUF4QlEsZ0NBQWEsRUFBRSx3QkFBUztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7WUFDMUMsT0FBTzs7OztZQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQTtTQUN2QyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsUUFBUTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEVBQUMsUUFBUSxVQUFBLEVBQUMsQ0FBQyxDQUFBO1lBQzFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BC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Q0FBQztZQUNoRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixJQUFJLEVBQUUsQ0FBQyxRQUFNLElBQU0sQ0FBQztnQkFDcEIsRUFBRSxFQUFFLElBQUk7YUFDVDtZQUNELEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7U0FDcEIsQ0FBQyxFQVQrQyxDQVMvQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVPLHdDQUFlOzs7O0lBQXZCO1FBQ0UsT0FBTztZQUNMLEtBQUssRUFBRSxDQUFDO29CQUNOLEtBQUssRUFBRSxhQUFhO29CQUNwQixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLFVBQVU7d0JBQ2xCLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBQ2xCO2lCQUNGO2dCQUNEO29CQUNFLEtBQUssRUFBRSxhQUFhO29CQUNwQixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLFVBQVU7d0JBQ2xCLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBQ2xCO2lCQUNGLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQW5QRCxDQUFvQyxnQkFBZ0IsR0FtUG5EOzs7Ozs7O0lBbFBDLHVDQUEyQjs7Ozs7SUFDM0IsbUNBQXVCOztJQUN2Qiw4QkFBb0I7Ozs7O0lBQ3BCLG1DQUFnQzs7Ozs7SUFDaEMscUNBQThCOzs7OztJQUM5QixvQ0FBaUM7O0lBQ2pDLDJDQUFxQzs7SUFDckMsdUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuICBwdWJsaWMgdGVzdDogc3RyaW5nO1xuICBwcml2YXRlIGZhY2V0RGF0YTogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGZhY2V0SW5wdXRzOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBhbGxCdWJibGVzOiBhbnlbXSA9IG51bGw7XG4gIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZUlkczogYW55W10gPSBbXTtcbiAgcHVibGljIG51bU9mSXRlbXNTdHI6IHN0cmluZyA9IG51bGw7XG5cbiAgb25Jbml0KHsgY29tbXVuaWNhdGlvbiwgbWFpblN0YXRlIH0pe1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG5cbiAgICB0aGlzLm9uZSgnYXctaGVybycpLnVwZGF0ZSh7fSk7XG5cbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdhcG9sbG8tcmVzcG9uc2UnLCB7cmVzcG9uc2V9KVxuICAgICAgdGhpcy5mYWNldERhdGEgPSBbXTtcbiAgICAgIHJlc3BvbnNlLmVudGl0aWVzRGF0YS5mb3JFYWNoKCAoZW50KSA9PiB7XG4gICAgICAgIHRoaXMuZmFjZXREYXRhLnB1c2goey4uLihlbnQuY291bnREYXRhKSwgZW5hYmxlZDp0cnVlfSk7XG4gICAgICB9ICk7XG4gICAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmZhY2V0RGF0YSk7XG4gICAgICB0aGlzLnJlbmRlckJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgICAgdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgc3RyZWFtc1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gSG9tZScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBIb21lIExheW91dCcpO1xuICAgIC8vIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnc3VibmF2JywgdGhpcy5fZ2V0U3VibmF2KCkpO1xuICAgIC8vIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnYnJlYWRjcnVtYnMnLCB0aGlzLl9nZXRCcmVhZGNydW1icygpKTtcbiAgfVxuXG5cbiAgcmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSl7XG4gICAgaWYoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHJldHVybjtcblxuICAgIGxldCBudW1PZkl0ZW1zID0gcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLnRvdGFsQ291bnQ7XG4gICAgaWYobnVtT2ZJdGVtcz4wKXtcbiAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcbiAgICAgIHdoaWxlKG51bU9mSXRlbXM+OTk5KXtcbiAgICAgICAgbnVtT2ZJdGVtcy09MTAwMDtcbiAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xuICAgICAgfVxuICAgICAgaWYobnVtT2ZUaG91c2FuZD4wKVxuICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZlRob3VzYW5kKycuJytudW1PZkl0ZW1zO1xuICAgICAgZWxzZVxuICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mSXRlbXMrJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS1wcmV2aWV3LXdyYXBwZXInKS51cGRhdGUocmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLml0ZW1zKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZVNlbGVjdGVkKHBheWxvYWQpe1xuICAgIGlmKHBheWxvYWQgJiYgcGF5bG9hZC5pZCl7XG4gICAgICBpZiggIXRoaXMuc2VsZWN0ZWRCdWJibGVJZHMuaW5jbHVkZXMocGF5bG9hZC5pZCkpXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVJZHMucHVzaChwYXlsb2FkLmlkKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJdGVtUHJldmlld3MoKTtcbiAgfVxuXG5cbiAgcHVibGljIG9uQnViYmxlRGVzZWxlY3RlZChwYXlsb2FkKXtcbiAgICBpZihwYXlsb2FkICYmIHBheWxvYWQuaWQpXG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlSWRzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZUlkcy5maWx0ZXIoXG4gICAgICAgIChiKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChiIT09cGF5bG9hZC5pZCk7IH1cbiAgICAgICk7XG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1QcmV2aWV3cygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJdGVtUHJldmlld3MoKXtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgcGFyYW1zOiB7IHNlbGVjdGVkRW50aXRpZXNJZHM6IHRoaXMuc2VsZWN0ZWRCdWJibGVJZHMsXG4gICAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOnsgb2Zmc2V0OjAsbGltaXQ6NCB9IH0sXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gdGhlIGZhY2V0cyBzaG91bGQgYmUgaGFuZGxlZCBieSB0aGUgbGF5b3V0XG4gICAgICAvLyAob3RoZXJ3aXNlIHRoZXkgd291bGQgYWx3YXlzIHJldHVybiBhcyBlbmFibGVkKVxuICAgICAgLy90aGlzLmZhY2V0RGF0YSA9IFtdO1xuICAgICAgLy9yZXNwb25zZS5lbnRpdGllc0RhdGEuZm9yRWFjaCggKGVudCkgPT4ge1xuICAgICAgLy8gIHRoaXMuZmFjZXREYXRhLnB1c2goey4uLihlbnQuY291bnREYXRhKSwgZW5hYmxlZDp0cnVlfSk7XG4gICAgICAvL30pO1xuICAgICAgdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlOiBhbnkpe1xuICAgIGlmKCAhcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHJldHVybjtcbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBbXTtcbiAgICBmb3IodmFyIGk9MDtpPHJlc3BvbnNlLmVudGl0aWVzRGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgIGxldCBjdXJyZW50VG9FID0gcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldO1xuICAgICAgZm9yKHZhciBqPTA7ajxjdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhLmxlbmd0aDtqKyspe1xuICAgICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5jdXJyZW50VG9FLmVudGl0aWVzQ291bnREYXRhW2pdLFxuICAgICAgICAgICAgY29sb3I6Y3VycmVudFRvRS5jb3VudERhdGEudHlwZS5jb2xvclxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFsbEJ1YmJsZXMubWFwKCAoYnViYmxlKSA9PiB7XG4gICAgICAvLyBkMy9zdmcgZG9lc24ndCBhbGxvdyAnLScgb3Igc3RyaW5ncyBzdGFydGluZyB3aXRoIGEgbnVtYmVyIGFzIGlkc1xuICAgICAgYnViYmxlLmVudGl0eS5pZCA9ICdCXycrYnViYmxlLmVudGl0eS5pZC5yZXBsYWNlKC8tL2csJ18nKTtcbiAgICAgIHJldHVybiBidWJibGU7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aC8xLjgsXG4gICAgICBidWJibGVzOnRoaXMuYWxsQnViYmxlc1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSBjaGFuZ2UudmFsdWU7XG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlZDogJysgcGF5bG9hZCArICcgd2l0aCB2YWx1ZTogJyArIHZhbHVlKVxuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihlbnRlcikge1xuICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBlbnRlci5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdO1xuICAgIC8vIGdldCB0aGUgdGV4dCBlbnRlcmVkIGluIHRoaXMgaW5wdXRcbiAgICBjb25zb2xlLmxvZygnZW50ZXJlZDogJyArIHBheWxvYWQgKyAnIHdpdGggdmFsdWU6ICcgKyB2YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZUZhY2V0SGVhZGVyQ2xpY2soZmFjZXRJZCl7XG4gICAgbGV0IHVwZGF0ZUJ1YmJsZXMgPSBmYWxzZTtcbiAgICBsZXQgZW5hYmxlZEZhY2V0cyA9IHRoaXMuZmFjZXREYXRhLmZpbHRlciggKGYpID0+IGYuZW5hYmxlZCApLmxlbmd0aDtcbiAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKCAoZikgPT4ge1xuICAgICAgICBpZihmLnR5cGUuaWQ9PT1mYWNldElkKXtcbiAgICAgICAgICBpZihmLmVuYWJsZWQpe1xuICAgICAgICAgICAgaWYoZW5hYmxlZEZhY2V0cz4xKXtcbiAgICAgICAgICAgICAgZi5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHVwZGF0ZUJ1YmJsZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUodGhpcy5mYWNldERhdGEpO1xuICAgIGlmKHVwZGF0ZUJ1YmJsZXMpe1xuICAgICAgbGV0IGRpc2FibGVGYWNldHNJZHMgPSBbXTtcbiAgICAgIHRoaXMuZmFjZXREYXRhLmZvckVhY2goIChmRCkgPT4ge1xuICAgICAgICBpZighZkQuZW5hYmxlZCkgZGlzYWJsZUZhY2V0c0lkcy5wdXNoKGZELnR5cGUuaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKGRpc2FibGVGYWNldHNJZHMpe1xuICAgICAgICBsZXQgZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZUlkcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVJZHMuZmlsdGVyKCAoYklkKSA9PiB7XG4gICAgICAgICAgbGV0IHR5cGVPZkVudGl0eSA9IFwiXCI7XG4gICAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmlkPT09YklkKXtcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5PXRoaXMuYWxsQnViYmxlc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LmlkO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZGlzYWJsZUZhY2V0c0lkcy5pbmNsdWRlcyh0eXBlT2ZFbnRpdHkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihmaWx0ZXJlZFNlbGVjdGVkQnViYmxlSWRzLmxlbmd0aCE9dGhpcy5zZWxlY3RlZEJ1YmJsZUlkcy5sZW5ndGgpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVJZHMgPSBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlSWRzO1xuICAgICAgICAgIHRoaXMudXBkYXRlSXRlbVByZXZpZXdzKCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBsZXQgY3VycmVudEJ1YmJsZXMgPSB0aGlzLmFsbEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgICAoYnViYmxlKSA9PiB7XG4gICAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5mYWNldERhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoIGJ1YmJsZS5lbnRpdHkudHlwZU9mRW50aXR5LmlkID09PSB0aGlzLmZhY2V0RGF0YVtpXS50eXBlLmlkIClcbiAgICAgICAgICAgICAgaWYoICF0aGlzLmZhY2V0RGF0YVtpXS5lbmFibGVkICl7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRCdWJibGVJZHMuaW5jbHVkZXMoYnViYmxlLmVudGl0eS5pZCkpe1xuICAgICAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtYnViYmxlLWNoYXJ0JykudXBkYXRlKHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLzEuOCxcbiAgICAgICAgYnViYmxlczpjdXJyZW50QnViYmxlcyxcbiAgICAgICAgcmVzZXQ6dHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySXRlbVRhZ3MoKXtcbiAgICBsZXQgdGFnc0RhdGEgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlSWRzLmZvckVhY2goIChzQmlkKSA9PiB7XG4gICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5hbGxCdWJibGVzLmxlbmd0aDtpKyspe1xuICAgICAgICBpZih0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmlkPT09c0JpZCl7XG4gICAgICAgICAgbGFiZWwgPSB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmxhYmVsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0YWdzRGF0YS5wdXNoKHtsYWJlbH0pO1xuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFN1Ym5hdigpe1xuICAgIHJldHVybiBbJ2hvbWUnLCAncmVzdWx0cycsICdzaW5nbGUnXS5tYXAocGFnZSA9PiAoe1xuICAgICAgdGV4dDogcGFnZS50b1VwcGVyQ2FzZSgpLCBcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc291cmNlOiAnbmF2aWdhdGUnLFxuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgcGF0aDogW2Bhdy8ke3BhZ2V9YF0sXG4gICAgICAgIGlkOiBwYWdlXG4gICAgICB9LFxuICAgICAgX21ldGE6IHsgaWQ6IHBhZ2UgfVxuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEJyZWFkY3J1bWJzKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBbe1xuICAgICAgICBsYWJlbDogJ0FyaWFubmEgV2ViJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ25hdmlnYXRlJyxcbiAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICBwYXRoOiBbYGF3L2hvbWVgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0hvbWUgTGF5b3V0JyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHNvdXJjZTogJ25hdmlnYXRlJyxcbiAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICBwYXRoOiBbYGF3L2hvbWVgXVxuICAgICAgICB9XG4gICAgICB9XSBcbiAgICB9O1xuICB9XG59Il19