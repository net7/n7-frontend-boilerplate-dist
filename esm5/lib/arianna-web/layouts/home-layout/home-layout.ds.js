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
        //public _updateBubbles: any = null;
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
            _this.facetData = [];
            response.entitiesData.forEach((/**
             * @param {?} ent
             * @return {?}
             */
            function (ent) {
                _this.facetData.push(tslib_1.__assign({}, (ent.countData), { enabled: true }));
            }));
            _this.one('aw-home-facets-wrapper').update(_this.facetData);
            _this.setAllBubblesFromApolloQuery(response);
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
                    //payload.bubble.hasCloseIcon=true;
                    //if(this._updateBubbles) this._updateBubbles();
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
                //if(this._updateBubbles) this._updateBubbles();
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
            function (error) { return console.log(error); }),
            params: { selectedEntitiesIds: selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: 4 } },
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
                this.allBubbles.push(tslib_1.__assign({}, currentToE.entitiesCountData[j], { color: currentToE.countData.type.color }));
            }
        }
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            // d3/svg doesn't allow '-' as part of the ids
            // or strings starting with a number as ids
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
            //setUpdateReference: (ref) => this._updateBubbles = ref,
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
        console.log({ filterBubbles: result });
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
        //if(this._updateBubbles) this._updateBubbles();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXJEO0lBQW9DLDBDQUFnQjtJQUFwRDtRQUFBLHFFQXFTQztRQWpTUyxlQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ3hCLGlCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGdCQUFVLEdBQVUsSUFBSSxDQUFDO1FBQzFCLHFCQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLG1CQUFhLEdBQVcsSUFBSSxDQUFDOztRQUU1QixrQkFBWSxHQUFRLElBQUksQ0FBQztRQUN6QiwwQkFBb0IsR0FBVSxDQUFDLENBQUM7UUFDaEMsdUJBQWlCLEdBQVEsRUFBRSxDQUFDOztJQXlSdEMsQ0FBQzs7Ozs7SUF2UkMsK0JBQU07Ozs7SUFBTixVQUFPLEVBQTRCO1FBQW5DLGlCQXVCQztZQXZCUSxnQ0FBYSxFQUFFLHdCQUFTO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUMxQyxPQUFPOzs7O1lBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFBO1NBQ3ZDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxRQUFRO1lBQ3BCLEtBQUksQ0FBQyxTQUFTLEdBQUcs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Q0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBclNELENBQW9DLGdCQUFnQixHQXFTbkQ7Ozs7Ozs7SUFwU0MsdUNBQTJCOzs7OztJQUMzQixtQ0FBdUI7O0lBQ3ZCLDhCQUFvQjs7Ozs7SUFDcEIsbUNBQWdDOzs7OztJQUNoQyxxQ0FBOEI7Ozs7O0lBQzlCLG9DQUFpQzs7SUFDakMseUNBQW1DOztJQUNuQyx1Q0FBb0M7Ozs7O0lBRXBDLHNDQUFpQzs7Ozs7SUFDakMsOENBQXdDOzs7OztJQUN4QywyQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG4gIHB1YmxpYyB0ZXN0OiBzdHJpbmc7XG4gIHByaXZhdGUgZmFjZXREYXRhOiBhbnlbXSA9IG51bGw7XG4gIHByaXZhdGUgZmFjZXRJbnB1dHM6IGFueSA9IHt9O1xuICBwcml2YXRlIGFsbEJ1YmJsZXM6IGFueVtdID0gbnVsbDtcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcbiAgcHVibGljIG51bU9mSXRlbXNTdHI6IHN0cmluZyA9IG51bGw7XG4gIC8vcHVibGljIF91cGRhdGVCdWJibGVzOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9idWJibGVDaGFydDogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBtYXhCdWJibGVzU2VsZWN0YWJsZTpudW1iZXIgPSAzO1xuICBwcml2YXRlIGVudGl0eUJ1YmJsZUlkTWFwOiBhbnkgPSB7fTtcblxuICBvbkluaXQoeyBjb21tdW5pY2F0aW9uLCBtYWluU3RhdGUgfSl7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcblxuICAgIHRoaXMub25lKCdhdy1oZXJvJykudXBkYXRlKHt9KTtcblxuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvciksXG4gICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5mYWNldERhdGEgPSBbXTtcbiAgICAgIHJlc3BvbnNlLmVudGl0aWVzRGF0YS5mb3JFYWNoKCAoZW50KSA9PiB7XG4gICAgICAgIHRoaXMuZmFjZXREYXRhLnB1c2goey4uLihlbnQuY291bnREYXRhKSwgZW5hYmxlZDp0cnVlfSk7XG4gICAgICB9ICk7XG4gICAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh0aGlzLmZhY2V0RGF0YSk7XG4gICAgICB0aGlzLnNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgICAgdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgc3RyZWFtc1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gSG9tZScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBIb21lIExheW91dCcpO1xuICAgIC8vIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnc3VibmF2JywgdGhpcy5fZ2V0U3VibmF2KCkpO1xuICAgIC8vIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnYnJlYWRjcnVtYnMnLCB0aGlzLl9nZXRCcmVhZGNydW1icygpKTtcbiAgfVxuXG5cbiAgcmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2U6IGFueSl7XG4gICAgaWYoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5pdGVtc1BhZ2luYXRpb24pIHJldHVybjtcblxuICAgIGxldCBudW1PZkl0ZW1zID0gcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLnRvdGFsQ291bnQ7XG4gICAgaWYobnVtT2ZJdGVtcz4wKXtcbiAgICAgIGxldCBudW1PZlRob3VzYW5kID0gMDtcbiAgICAgIHdoaWxlKG51bU9mSXRlbXM+OTk5KXtcbiAgICAgICAgbnVtT2ZJdGVtcy09MTAwMDtcbiAgICAgICAgbnVtT2ZUaG91c2FuZCArPSAxO1xuICAgICAgfVxuICAgICAgbGV0IG51bU9mSXRlbXNUbXBTdHIgPSBudW1PZkl0ZW1zICsgJyc7XG4gICAgICBpZihudW1PZkl0ZW1zPDEwKSBudW1PZkl0ZW1zVG1wU3RyID0gJzAwJytudW1PZkl0ZW1zO1xuICAgICAgZWxzZSBpZihudW1PZkl0ZW1zPDEwMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwJytudW1PZkl0ZW1zO1xuICAgICAgaWYobnVtT2ZUaG91c2FuZD4wKVxuICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZlRob3VzYW5kKycuJytudW1PZkl0ZW1zVG1wU3RyO1xuICAgICAgZWxzZVxuICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mSXRlbXMrJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS1wcmV2aWV3LXdyYXBwZXInKS51cGRhdGUocmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLml0ZW1zKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZVNlbGVjdGVkKHBheWxvYWQpe1xuICAgIGlmKHBheWxvYWQgJiYgcGF5bG9hZC5idWJibGUpe1xuICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRCdWJibGVzLmluY2x1ZGVzKHBheWxvYWQuYnViYmxlKSl7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aDx0aGlzLm1heEJ1YmJsZXNTZWxlY3RhYmxlKXtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5wdXNoKHBheWxvYWQuYnViYmxlKTtcbiAgICAgICAgICAvL3BheWxvYWQuYnViYmxlLmhhc0Nsb3NlSWNvbj10cnVlO1xuICAgICAgICAgIC8vaWYodGhpcy5fdXBkYXRlQnViYmxlcykgdGhpcy5fdXBkYXRlQnViYmxlcygpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBwdWJsaWMgb25CdWJibGVEZXNlbGVjdGVkKHBheWxvYWQpe1xuICAgIGlmKHBheWxvYWQgJiYgcGF5bG9hZC5idWJibGUpe1xuICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoXG4gICAgICAgIChiKSA9PiBiLmlkIT09cGF5bG9hZC5idWJibGUuaWQgKTtcbiAgICAgIGlmKHBheWxvYWQuYnViYmxlLmhhc0Nsb3NlSWNvbil7XG4gICAgICAgIHBheWxvYWQuYnViYmxlLmhhc0Nsb3NlSWNvbj1mYWxzZTtcbiAgICAgICAgLy9pZih0aGlzLl91cGRhdGVCdWJibGVzKSB0aGlzLl91cGRhdGVCdWJibGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQnViYmxlc0FuZEl0ZW1QcmV2aWV3cygpe1xuICAgIGxldCBzZWxlY3RlZEVudGl0aWVzSWRzID0gW107XG4gICAgaWYodGhpcy5lbnRpdHlCdWJibGVJZE1hcClcbiAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKCAoc0IpID0+IHtcbiAgICAgIGxldCBlbnRpdHlJZCA9IHRoaXMuZW50aXR5QnViYmxlSWRNYXBbc0IuaWRdO1xuICAgICAgaWYoZW50aXR5SWQpXG4gICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMucHVzaChlbnRpdHlJZCk7XG4gICAgfSk7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyBzZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjp7IG9mZnNldDowLGxpbWl0OjQgfSB9LFxuICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzcG9uc2UpO1xuICAgICAgdGhpcy5yZW5kZXJJdGVtVGFncygpO1xuICAgICAgdGhpcy5zZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlLHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55LHJlc2V0Pzpib29sZWFuKXtcbiAgICBpZiggIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5lbnRpdGllc0RhdGEgKSByZXR1cm47XG4gICAgdGhpcy5hbGxCdWJibGVzID0gW107XG4gICAgZm9yKHZhciBpPTA7aTxyZXNwb25zZS5lbnRpdGllc0RhdGEubGVuZ3RoO2krKyl7XG4gICAgICBsZXQgY3VycmVudFRvRSA9IHJlc3BvbnNlLmVudGl0aWVzRGF0YVtpXTtcbiAgICAgIGZvcih2YXIgaj0wO2o8Y3VycmVudFRvRS5lbnRpdGllc0NvdW50RGF0YS5sZW5ndGg7aisrKXtcbiAgICAgICAgdGhpcy5hbGxCdWJibGVzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4uY3VycmVudFRvRS5lbnRpdGllc0NvdW50RGF0YVtqXSxcbiAgICAgICAgICAgIGNvbG9yOmN1cnJlbnRUb0UuY291bnREYXRhLnR5cGUuY29sb3JcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcCA9IHt9O1xuICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICAvLyBkMy9zdmcgZG9lc24ndCBhbGxvdyAnLScgYXMgcGFydCBvZiB0aGUgaWRzXG4gICAgICAvLyBvciBzdHJpbmdzIHN0YXJ0aW5nIHdpdGggYSBudW1iZXIgYXMgaWRzXG4gICAgICBidWJibGUuaWQgPSAnQl8nK2J1YmJsZS5lbnRpdHkuaWQucmVwbGFjZSgvLS9nLCdfJyk7XG4gICAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW2J1YmJsZS5pZF09YnViYmxlLmVudGl0eS5pZDtcbiAgICAgIHJldHVybiBidWJibGU7XG4gICAgfSk7XG4gICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRCdWJibGVzW2ldLmlkPT09YnViYmxlLmlkKSBidWJibGUuc2VsZWN0ZWQ9dHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1idWJibGUtY2hhcnQnKS51cGRhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLzEuOCxcbiAgICAgIGJ1YmJsZXM6IHRoaXMuZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCksXG4gICAgICByZXNldDogKCByZXNldD8gcmVzZXQgOiBmYWxzZSApLFxuICAgICAgLy9zZXRVcGRhdGVSZWZlcmVuY2U6IChyZWYpID0+IHRoaXMuX3VwZGF0ZUJ1YmJsZXMgPSByZWYsXG4gICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZlxuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCl7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYWxsQnViYmxlcy5maWx0ZXIoXG4gICAgICAoYnViYmxlKSA9PiB7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuZmFjZXREYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICBpZiggYnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHkuaWQgPT09IHRoaXMuZmFjZXREYXRhW2ldLnR5cGUuaWQgKVxuICAgICAgICAgICAgaWYoICF0aGlzLmZhY2V0RGF0YVtpXS5lbmFibGVkICl7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICk7XG4gICAgY29uc29sZS5sb2coe2ZpbHRlckJ1YmJsZXM6cmVzdWx0fSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hDaGFuZ2UoY2hhbmdlKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSBjaGFuZ2UudmFsdWU7XG4gICAgLy8gc3RvcmUgdGhlIGVudGVyZWQgdGV4dCBpbiBmYWNldElucHV0c1xuICAgIHRoaXMuZmFjZXRJbnB1dHNbcGF5bG9hZF0gPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlZDogJysgcGF5bG9hZCArICcgd2l0aCB2YWx1ZTogJyArIHZhbHVlKVxuICB9XG5cbiAgaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihlbnRlcikge1xuICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBlbnRlci5pbnB1dFBheWxvYWQ7XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdO1xuICAgIC8vIGdldCB0aGUgdGV4dCBlbnRlcmVkIGluIHRoaXMgaW5wdXRcbiAgICBjb25zb2xlLmxvZygnZW50ZXJlZDogJyArIHBheWxvYWQgKyAnIHdpdGggdmFsdWU6ICcgKyB2YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZUZhY2V0SGVhZGVyQ2xpY2soZmFjZXRJZCl7XG4gICAgbGV0IHVwZGF0ZUJ1YmJsZXMgPSBmYWxzZTtcbiAgICBsZXQgZW5hYmxlZEZhY2V0cyA9IHRoaXMuZmFjZXREYXRhLmZpbHRlciggKGYpID0+IGYuZW5hYmxlZCApLmxlbmd0aDtcbiAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKCAoZikgPT4ge1xuICAgICAgICBpZihmLnR5cGUuaWQ9PT1mYWNldElkKXtcbiAgICAgICAgICBpZihmLmVuYWJsZWQpe1xuICAgICAgICAgICAgaWYoZW5hYmxlZEZhY2V0cz4xKXtcbiAgICAgICAgICAgICAgZi5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHVwZGF0ZUJ1YmJsZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUodGhpcy5mYWNldERhdGEpO1xuICAgIGlmKHVwZGF0ZUJ1YmJsZXMpe1xuICAgICAgbGV0IGRpc2FibGVGYWNldHNJZHMgPSBbXTtcbiAgICAgIHRoaXMuZmFjZXREYXRhLmZvckVhY2goIChmRCkgPT4ge1xuICAgICAgICBpZighZkQuZW5hYmxlZCkgZGlzYWJsZUZhY2V0c0lkcy5wdXNoKGZELnR5cGUuaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKGRpc2FibGVGYWNldHNJZHMpe1xuICAgICAgICBsZXQgZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXMgPSB0aGlzLnNlbGVjdGVkQnViYmxlcy5maWx0ZXIoIChidWJibGUpID0+IHtcbiAgICAgICAgICBsZXQgdHlwZU9mRW50aXR5ID0gXCJcIjtcbiAgICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuYWxsQnViYmxlc1tpXS5pZD09PWJ1YmJsZS5pZCl7XG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eT10aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGRpc2FibGVGYWNldHNJZHMuaW5jbHVkZXModHlwZU9mRW50aXR5KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXMubGVuZ3RoIT10aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGgpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gZmlsdGVyZWRTZWxlY3RlZEJ1YmJsZXM7XG4gICAgICAgICAgdGhpcy51cGRhdGVCdWJibGVzQW5kSXRlbVByZXZpZXdzKCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgICBidWJibGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXNbaV0uaWQ9PT1idWJibGUuaWQpIGJ1YmJsZS5zZWxlY3RlZD10cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWJ1YmJsZS1jaGFydCcpLnVwZGF0ZSh7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aC8xLjgsXG4gICAgICAgIGJ1YmJsZXM6dGhpcy5maWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKSxcbiAgICAgICAgc2V0QnViYmxlQ2hhcnQ6IChidWJibGVDcmVmKSA9PiB0aGlzLl9idWJibGVDaGFydCA9IGJ1YmJsZUNyZWYsXG4gICAgICAgIHJlc2V0OnRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckl0ZW1UYWdzKCl7XG4gICAgbGV0IHRhZ3NEYXRhID0gW107XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaCggKHNCdWJibGUpID0+IHtcbiAgICAgIGxldCBsYWJlbCA9ICcnO1xuICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKHRoaXMuYWxsQnViYmxlc1tpXS5pZD09PXNCdWJibGUuaWQpe1xuICAgICAgICAgIGxhYmVsID0gdGhpcy5hbGxCdWJibGVzW2ldLmVudGl0eS5sYWJlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGFnc0RhdGEucHVzaCh7bGFiZWwsaWNvbjpcIm43LWljb24tY2xvc2VcIixwYXlsb2FkOnNCdWJibGUuaWQsY2xhc3NlczpcInRhZy1cIit0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZH0pO1xuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgfVxuXG5cbiAgb25UYWdDbGlja2VkKHBheWxvYWQpe1xuICAgIGlmKCFwYXlsb2FkKSByZXR1cm47XG4gICAgY29uc3QgYnViYmxlSWQ9cGF5bG9hZDtcbiAgICBpZih0aGlzLl9idWJibGVDaGFydCl7XG4gICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKCBiID0+IHtcbiAgICAgICAgaWYoYi5pZD09PWJ1YmJsZUlkKSBiLmhhc0Nsb3NlSWNvbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKCAoYikgPT4gYi5pZCE9PXBheWxvYWQgKTtcbiAgICAvL2lmKHRoaXMuX3VwZGF0ZUJ1YmJsZXMpIHRoaXMuX3VwZGF0ZUJ1YmJsZXMoKTtcbiAgICB0aGlzLnVwZGF0ZUJ1YmJsZXNBbmRJdGVtUHJldmlld3MoKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfZ2V0U3VibmF2KCl7XG4gICAgcmV0dXJuIFsnaG9tZScsICdyZXN1bHRzJywgJ3NpbmdsZSddLm1hcChwYWdlID0+ICh7XG4gICAgICB0ZXh0OiBwYWdlLnRvVXBwZXJDYXNlKCksIFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzb3VyY2U6ICduYXZpZ2F0ZScsXG4gICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICBwYXRoOiBbYGF3LyR7cGFnZX1gXSxcbiAgICAgICAgaWQ6IHBhZ2VcbiAgICAgIH0sXG4gICAgICBfbWV0YTogeyBpZDogcGFnZSB9XG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0QnJlYWRjcnVtYnMoKXtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IFt7XG4gICAgICAgIGxhYmVsOiAnQXJpYW5uYSBXZWInLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAnbmF2aWdhdGUnLFxuICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgIHBhdGg6IFtgYXcvaG9tZWBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnSG9tZSBMYXlvdXQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgc291cmNlOiAnbmF2aWdhdGUnLFxuICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgIHBhdGg6IFtgYXcvaG9tZWBdXG4gICAgICAgIH1cbiAgICAgIH1dIFxuICAgIH07XG4gIH1cbn0iXX0=