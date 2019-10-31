/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
import { fromEvent, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
var AwBubbleChartDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwBubbleChartDS, _super);
    function AwBubbleChartDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.thresholdShowTitle = 50;
        _this.thresholdShowValue = 60;
        _this.allBubbles = null;
        _this.entityBubbleIdMap = {};
        _this.selectedBubbles = [];
        _this.facetData = null;
        _this.bubblePopup = null;
        _this.currentHoverEntity = null;
        _this._bubbleChart = null;
        _this.maxBubblesSelectable = 3;
        _this.windowResizeSet = false;
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwBubbleChartDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!data) {
            return null;
        }
        this.destroyTooltip();
        this.facetData = data.facetData ? data.facetData : [];
        this.tippy = tippy;
        data.bubbles = this.filterBubblesBasedOnFacetsEnabled();
        /** @type {?} */
        var bubbleCointainer = document.getElementById(this.options.containerId);
        /** @type {?} */
        var cWidth = data.width ? data.width : bubbleCointainer.offsetWidth;
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        var cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        var containerSize = cWidth * cHeight;
        /** @type {?} */
        var bubblesData = {
            containerId: this.options.bubbleContainerId,
            containerWidth: cWidth,
            containerHeight: cHeight,
            isForceSimulationEnabled: true,
            maxBubblesSelected: 3
        };
        bubblesData['bubblesData'] = [];
        /** @type {?} */
        var maxBubbleCount = -1;
        /** @type {?} */
        var minBubbleCount = -1;
        /** @type {?} */
        var numOfBubbles = 0;
        /** @type {?} */
        var totalCount = 0;
        /** @type {?} */
        var numOfSelectedBubbles = 0;
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            if (maxBubbleCount < bubble.count)
                maxBubbleCount = bubble.count;
            if (minBubbleCount < 0 || minBubbleCount > bubble.count)
                minBubbleCount = bubble.count;
            numOfBubbles++;
            totalCount += bubble.count;
            if (bubble.selected)
                numOfSelectedBubbles++;
        }));
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            /** @type {?} */
            var bId = bubble.id;
            /** @type {?} */
            var bubblePercentage = (bubble.count - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            /** @type {?} */
            var bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            /** @type {?} */
            var bubbleData = {
                id: bId,
                texts: [
                    {
                        id: bId + "_label0",
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { if (d.radius < _this.thresholdShowTitle)
                            return null; return bubble.entity.label; }),
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.x; }),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) {
                            /** @type {?} */
                            var mNum = (d.radius / 9);
                            if (d.radius < _this.thresholdShowValue)
                                mNum = 0;
                            return d.y - mNum;
                        }),
                        "user_select": "none",
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.radius / 5; }),
                        color: "white",
                        "classes": ""
                    },
                    {
                        id: bId + "_label1",
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { if (d.radius < _this.thresholdShowValue)
                            return null; return bubble.count; }),
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.x; }),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.y + (d.radius / 9); }),
                        "user_select": "none",
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.radius / 6; }),
                        color: "white",
                        "classes": ""
                    }
                ],
                x: cWidth / 2 + 50,
                y: cHeight / 2 + 50,
                "radius": bubbleRadius,
                color: bubble.color,
                hasCloseIcon: (bubble.selected ? bubble.selected : false),
                payload: {
                    id: bId
                },
            };
            bubblesData['bubblesData'].push(bubbleData);
        }));
        bubblesData['forceSimulationData'] = {
            xPull: cWidth / 2,
            xPullStrength: -0.01,
            yPull: cHeight / 2,
            yPullStrength: -0.01,
            collisionStrengh: 0.99,
            collisionIterations: 1,
            velocityDecay: 0.65
        };
        if (data.reset)
            bubblesData['reset'] = data.reset;
        if (data.setUpdateReference)
            bubblesData['setUpdateReference'] = data.setUpdateReference;
        if (data.setBubbleChart)
            bubblesData['setBubbleChart'] = data.setBubbleChart;
        this.setWindowResize();
        return bubblesData;
    };
    /**
     * @param {?} data
     * @param {?=} reset
     * @return {?}
     */
    AwBubbleChartDS.prototype.setAllBubblesFromApolloQuery = /**
     * @param {?} data
     * @param {?=} reset
     * @return {?}
     */
    function (data, reset) {
        var _this = this;
        /** @type {?} */
        var response = data.source;
        // if ( !response || !response.entitiesData ) {return; }
        this.allBubbles = [];
        if (data.selectedBubbles) {
            this.selectedBubbles = data.selectedBubbles;
        }
        if (response.entitiesData) {
            for (var i = 0; i < response.entitiesData.length; i++) {
                /** @type {?} */
                var currentToE = response.entitiesData[i];
                for (var j = 0; j < currentToE.entitiesCountData.length; j++) {
                    this.allBubbles.push(tslib_1.__assign({}, currentToE.entitiesCountData[j], { color: this.options.configKeys[currentToE.countData.type.configKey]['color']['hex'] }));
                }
            }
        }
        else {
            for (var i = 0; i < response.connectedEntities.length; i++) {
                /** @type {?} */
                var color = this.options.configKeys ?
                    this.options.configKeys[response.connectedEntities[i].entity.typeOfEntity.configKey] ? this.options.configKeys[response.connectedEntities[i].entity.typeOfEntity.configKey]['color']['hex'] : "" :
                    null;
                this.allBubbles.push(tslib_1.__assign({ id: this.convertEntityIdToBubbleId(response.connectedEntities[i].entity.id) }, response.connectedEntities[i], { color: color }));
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
            bubble.id = _this.convertEntityIdToBubbleId(bubble.entity.id);
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
                if (_this.selectedBubbles[i].id === bubble.id) {
                    bubble.selected = true;
                }
            }
        }));
        this.update(data);
    };
    /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    AwBubbleChartDS.prototype.convertEntityIdToBubbleId = /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    function (entityId) {
        if (!entityId) {
            return null;
        }
        return ('B_' + entityId.replace(/-/g, '_'));
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.filterBubblesBasedOnFacetsEnabled = /**
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
                if (bubble.entity.typeOfEntity.id === _this.facetData[i].type.id) {
                    if (!_this.facetData[i].enabled) {
                        return false;
                    }
                }
            }
            return true;
        }));
        return result;
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwBubbleChartDS.prototype.onBubbleMouseEnter = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        var _this = this;
        if (!payload || !payload.bubble)
            return;
        /** @type {?} */
        var bubbleId = payload.bubble.id;
        /** @type {?} */
        var hoverEntityId = this.entityBubbleIdMap[payload.bubble.id];
        for (var i = 0; i < this.allBubbles.length; i++) {
            /** @type {?} */
            var bubble = this.allBubbles[i];
            if (bubble.entity.id === hoverEntityId) {
                this.currentHoverEntity = bubble.entity;
                this.currentHoverEntity.count = bubble.count;
                break;
            }
        }
        if (this.bubblePopup) {
            this.bubblePopup.hide();
            this.bubblePopup.destroy();
            this.bubblePopup = null;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var template = document.getElementById("bubble-popup-menu");
            /** @type {?} */
            var templateClone = template.cloneNode(true);
            templateClone['style'].display = "inline-block";
            _this.bubblePopup = _this.tippy("#" + bubbleId, {
                content: templateClone,
                allowHTML: true,
                trigger: 'manual',
                interactive: true,
                arrow: true,
                theme: 'light-border no-padding',
                placement: 'top',
                maxWidth: 500,
            })[0];
            setTimeout((/**
             * @return {?}
             */
            function () { if (_this.bubblePopup)
                _this.bubblePopup.show(); }), 800);
        }));
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.destroyTooltip = /**
     * @return {?}
     */
    function () {
        if (this.bubblePopup) {
            this.bubblePopup.hide();
            this.bubblePopup.destroy();
            this.bubblePopup = null;
        }
    };
    /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    AwBubbleChartDS.prototype.onBubbleTooltipClick = /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    function (source, payload) {
        switch (source) {
            case 'select':
                if (!payload)
                    return;
                /** @type {?} */
                var bubbleId_1 = this.convertEntityIdToBubbleId(payload.entityId);
                if (!bubbleId_1)
                    return;
                /** @type {?} */
                var bubble_1 = null;
                if (payload._bubbleChart) {
                    payload._bubbleChart.selectAll("g").each((/**
                     * @param {?} b
                     * @return {?}
                     */
                    function (b) {
                        if (b.id === bubbleId_1)
                            bubble_1 = b;
                    }));
                    if (bubble_1)
                        return bubble_1;
                }
                break;
            default:
                break;
        }
    };
    /**
     * @param {?} bubble
     * @return {?}
     */
    AwBubbleChartDS.prototype.onBubbleSelected = /**
     * @param {?} bubble
     * @return {?}
     */
    function (bubble) {
        if (bubble) {
            if (!this.selectedBubbles.includes(bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.selectedBubbles.push(bubble);
                    //return this.filterRequest();
                }
            }
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    AwBubbleChartDS.prototype.getBubbleFromId = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var bubbleId = this.convertEntityIdToBubbleId(id);
        if (!bubbleId)
            return;
        /** @type {?} */
        var bubble = null;
        if (this._bubbleChart) {
            this._bubbleChart.selectAll("g").each((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                if (b.id === bubbleId)
                    bubble = b;
            }));
            if (bubble)
                return bubble;
        }
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.getSelectedBubbles = /**
     * @return {?}
     */
    function () {
        return this.selectedBubbles;
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.getAllBubbles = /**
     * @return {?}
     */
    function () {
        return this.allBubbles;
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.getEntityIdMap = /**
     * @return {?}
     */
    function () {
        return this.entityBubbleIdMap;
    };
    /**
     * @return {?}
     */
    AwBubbleChartDS.prototype.setWindowResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.windowResizeSet) {
            fromEvent(window, "resize").pipe(debounce((/**
             * @return {?}
             */
            function () { return interval(200); }))).
                subscribe((/**
             * @return {?}
             */
            function () {
                // only resets the bubbles if the window's width has changed
                // (if the resize only effects the window's hight then the bubble chart
                // doesn't get reset)
                /** @type {?} */
                var container = document.getElementById(_this.options.containerId);
                /** @type {?} */
                var bubblePayload = {
                    width: container.offsetWidth,
                    reset: true
                };
                _this.update(bubblePayload);
            }));
            this.windowResizeSet = true;
        }
    };
    return AwBubbleChartDS;
}(DataSource));
export { AwBubbleChartDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.thresholdShowTitle;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.thresholdShowValue;
    /** @type {?} */
    AwBubbleChartDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.allBubbles;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.entityBubbleIdMap;
    /** @type {?} */
    AwBubbleChartDS.prototype.selectedBubbles;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.facetData;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.bubblePopup;
    /** @type {?} */
    AwBubbleChartDS.prototype.currentHoverEntity;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype._bubbleChart;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.maxBubblesSelectable;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.tippy;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.windowResizeSet;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQWdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQ7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUEyVEM7UUF6VFMsd0JBQWtCLEdBQVUsRUFBRSxDQUFDO1FBQy9CLHdCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUUvQixnQkFBVSxHQUFVLElBQUksQ0FBQztRQUN6Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDN0IscUJBQWUsR0FBVSxFQUFFLENBQUM7UUFDM0IsZUFBUyxHQUFVLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFRLElBQUksQ0FBQztRQUN6Qix3QkFBa0IsR0FBUSxJQUFJLENBQUM7UUFDOUIsa0JBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsMEJBQW9CLEdBQVUsQ0FBQyxDQUFDO1FBRWhDLHFCQUFlLEdBQUcsS0FBSyxDQUFDOztJQTZTbEMsQ0FBQzs7Ozs7O0lBM1NXLG1DQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQXdHQztRQXZHQyxJQUFLLENBQUMsSUFBSSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTtRQUU1QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxD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U0FBUyxDQUFFLE1BQU0sRUFBRyxRQUFRLENBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUTs7O1lBQUMsY0FBTSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBYixDQUFhLEVBQUMsQ0FBQztnQkFDbEUsU0FBUzs7O1lBQUU7Ozs7O29CQUlELFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOztvQkFDL0QsYUFBYSxHQUFHO29CQUNsQixLQUFLLEVBQUUsU0FBUyxDQUFDLFdBQVc7b0JBQzVCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxFQUFDLENBQUE7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUMvQjtJQUVILENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUEzVEQsQ0FBcUMsVUFBVSxHQTJUOUM7Ozs7Ozs7SUF6VEMsNkNBQXVDOzs7OztJQUN2Qyw2Q0FBdUM7O0lBQ3ZDLHdDQUEwQjs7Ozs7SUFDMUIscUNBQWlDOzs7OztJQUNqQyw0Q0FBb0M7O0lBQ3BDLDBDQUFtQzs7Ozs7SUFDbkMsb0NBQWdDOzs7OztJQUNoQyxzQ0FBZ0M7O0lBQ2hDLDZDQUFzQzs7Ozs7SUFDdEMsdUNBQWlDOzs7OztJQUNqQywrQ0FBd0M7Ozs7O0lBQ3hDLGdDQUFjOzs7OztJQUNkLDBDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBCVUJCTEVDSEFSVF9NT0NLIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcbmltcG9ydCB7IGZyb21FdmVudCwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcml2YXRlIHRocmVzaG9sZFNob3dUaXRsZTpudW1iZXIgPSA1MDtcbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VmFsdWU6bnVtYmVyID0gNjA7XG4gIHB1YmxpYyBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGVudGl0eUJ1YmJsZUlkTWFwOiBhbnkgPSB7fTtcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBmYWNldERhdGE6IGFueVtdID0gbnVsbDtcbiAgcHJpdmF0ZSBidWJibGVQb3B1cDogYW55ID0gbnVsbDtcbiAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfYnViYmxlQ2hhcnQ6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgbWF4QnViYmxlc1NlbGVjdGFibGU6bnVtYmVyID0gMztcbiAgcHJpdmF0ZSB0aXBweTtcbiAgcHJpdmF0ZSB3aW5kb3dSZXNpemVTZXQgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIGlmICggIWRhdGEgKXsgcmV0dXJuIG51bGw7IH1cblxuICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcblxuICAgIHRoaXMuZmFjZXREYXRhID0gZGF0YS5mYWNldERhdGEgPyBkYXRhLmZhY2V0RGF0YSA6IFtdO1xuICAgIHRoaXMudGlwcHkgPSB0aXBweTtcblxuICAgIGRhdGEuYnViYmxlcyA9IHRoaXMuZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCk7XG4gICAgbGV0IGJ1YmJsZUNvaW50YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuY29udGFpbmVySWQpO1xuICAgIGNvbnN0IGNXaWR0aCA9IGRhdGEud2lkdGggPyBkYXRhLndpZHRoIDogYnViYmxlQ29pbnRhaW5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIFRPRE86IHRoaW5rIG9mIGEgZ29vZCB3YXkgdG8gcGFzcy9jb21wdXRlIGNIZWlnaHRcbiAgICBjb25zdCBjSGVpZ2h0ID0gNzAwOyAvLyBidWJibGVDb2ludGFpbmVyLm9mZnNldEhlaWdodFxuICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBjV2lkdGggKiBjSGVpZ2h0O1xuXG4gICAgbGV0IGJ1YmJsZXNEYXRhID0ge1xuICAgICAgY29udGFpbmVySWQ6IHRoaXMub3B0aW9ucy5idWJibGVDb250YWluZXJJZCxcbiAgICAgIGNvbnRhaW5lcldpZHRoIDogY1dpZHRoLFxuICAgICAgY29udGFpbmVySGVpZ2h0IDogY0hlaWdodCxcbiAgICAgIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1heEJ1YmJsZXNTZWxlY3RlZDozXG4gICAgfTtcblxuICAgIGJ1YmJsZXNEYXRhWydidWJibGVzRGF0YSddID0gW107XG5cbiAgICBsZXQgbWF4QnViYmxlQ291bnQgPSAtMTtcbiAgICBsZXQgbWluQnViYmxlQ291bnQgPSAtMTtcbiAgICBsZXQgbnVtT2ZCdWJibGVzID0gMDtcbiAgICBsZXQgdG90YWxDb3VudCA9IDA7XG4gICAgbGV0IG51bU9mU2VsZWN0ZWRCdWJibGVzID0gMDtcblxuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgaWYgKCBtYXhCdWJibGVDb3VudCA8IGJ1YmJsZS5jb3VudCApIG1heEJ1YmJsZUNvdW50ID0gYnViYmxlLmNvdW50O1xuICAgICAgaWYgKCBtaW5CdWJibGVDb3VudCA8IDAgfHwgbWluQnViYmxlQ291bnQ+YnViYmxlLmNvdW50ICkgbWluQnViYmxlQ291bnQgPSBidWJibGUuY291bnQ7XG4gICAgICBudW1PZkJ1YmJsZXMrKztcbiAgICAgIHRvdGFsQ291bnQgKz0gYnViYmxlLmNvdW50O1xuICAgICAgaWYoYnViYmxlLnNlbGVjdGVkKSBudW1PZlNlbGVjdGVkQnViYmxlcysrO1xuICAgIH0pO1xuXG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBsZXQgYklkID0gYnViYmxlLmlkO1xuICAgICAgbGV0IGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIGJ1YmJsZS5jb3VudCAtIChtaW5CdWJibGVDb3VudC8zKSApLyggKG1heEJ1YmJsZUNvdW50KjMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICk7XG4gICAgICBsZXQgYnViYmxlUmFkaXVzID0gKE1hdGgubG9nKGNvbnRhaW5lclNpemUpLzEwKSooYnViYmxlUGVyY2VudGFnZSozKSooNzAtTWF0aC5zcXJ0KG51bU9mQnViYmxlcykpO1xuICAgICAgbGV0IGJ1YmJsZURhdGEgPSB7XG4gICAgICAgIGlkOiBiSWQsXG4gICAgICAgIHRleHRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMFwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1RpdGxlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGJ1YmJsZS5lbnRpdHkubGFiZWwgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbU51bSA9IChkLnJhZGl1cy85KTtcbiAgICAgICAgICAgICAgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIG1OdW09MDtcbiAgICAgICAgICAgICAgcmV0dXJuIGQueS1tTnVtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwxXCIsXG4gICAgICAgICAgICBsYWJlbDogKGQpID0+IHsgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIHJldHVybiBudWxsOyByZXR1cm4gYnViYmxlLmNvdW50IH0sXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzYsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHg6IGNXaWR0aC8yKzUwLFxuICAgICAgICB5OiBjSGVpZ2h0LzIrNTAsXG4gICAgICAgIFwicmFkaXVzXCI6IGJ1YmJsZVJhZGl1cyxcbiAgICAgICAgY29sb3I6YnViYmxlLmNvbG9yLFxuICAgICAgICBoYXNDbG9zZUljb246ICggYnViYmxlLnNlbGVjdGVkID8gYnViYmxlLnNlbGVjdGVkIDogZmFsc2UgKSxcbiAgICAgICAgcGF5bG9hZDp7XG4gICAgICAgICAgaWQ6IGJJZFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10ucHVzaChidWJibGVEYXRhKTtcbiAgICB9KTtcblxuXG4gICAgYnViYmxlc0RhdGFbJ2ZvcmNlU2ltdWxhdGlvbkRhdGEnXSA9IHtcbiAgICAgIHhQdWxsOiBjV2lkdGgvMixcbiAgICAgIHhQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgeVB1bGw6IGNIZWlnaHQvMixcbiAgICAgIHlQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgY29sbGlzaW9uU3RyZW5naDogMC45OSxcbiAgICAgIGNvbGxpc2lvbkl0ZXJhdGlvbnM6IDEsXG4gICAgICB2ZWxvY2l0eURlY2F5OiAwLjY1XG4gICAgfVxuXG4gICAgaWYoZGF0YS5yZXNldCkgYnViYmxlc0RhdGFbJ3Jlc2V0J10gPSBkYXRhLnJlc2V0O1xuXG4gICAgaWYoZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UpIGJ1YmJsZXNEYXRhWydzZXRVcGRhdGVSZWZlcmVuY2UnXSA9IGRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlO1xuICAgIGlmKGRhdGEuc2V0QnViYmxlQ2hhcnQpIGJ1YmJsZXNEYXRhWydzZXRCdWJibGVDaGFydCddID0gZGF0YS5zZXRCdWJibGVDaGFydDtcblxuICAgIHRoaXMuc2V0V2luZG93UmVzaXplKCk7XG5cbiAgICByZXR1cm4gYnViYmxlc0RhdGE7XG4gIH1cblxuICBzZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KGRhdGE6IGFueSwgcmVzZXQ/OiBib29sZWFuICkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gZGF0YS5zb3VyY2U7XG4gICAvLyBpZiAoICFyZXNwb25zZSB8fCAhcmVzcG9uc2UuZW50aXRpZXNEYXRhICkge3JldHVybjsgfVxuICAgIHRoaXMuYWxsQnViYmxlcyA9IFtdO1xuXG4gICAgaWYgKCBkYXRhLnNlbGVjdGVkQnViYmxlcyApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gZGF0YS5zZWxlY3RlZEJ1YmJsZXM7XG4gICAgfVxuXG4gICAgaWYoIHJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHJlc3BvbnNlLmVudGl0aWVzRGF0YS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGxldCBjdXJyZW50VG9FID0gcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldO1xuXG4gICAgICAgIGZvciAoIHZhciBqID0gMDsgaiA8IGN1cnJlbnRUb0UuZW50aXRpZXNDb3VudERhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4uY3VycmVudFRvRS5lbnRpdGllc0NvdW50RGF0YVtqXSxcbiAgICAgICAgICAgICAgY29sb3I6IHRoaXMub3B0aW9ucy5jb25maWdLZXlzW2N1cnJlbnRUb0UuY291bnREYXRhLnR5cGUuY29uZmlnS2V5XVsnY29sb3InXVsnaGV4J11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuY29ubmVjdGVkRW50aXRpZXMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29uZmlnS2V5cyA/XG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNvbmZpZ0tleXNbcmVzcG9uc2UuY29ubmVjdGVkRW50aXRpZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5jb25maWdLZXldID8gdGhpcy5vcHRpb25zLmNvbmZpZ0tleXNbcmVzcG9uc2UuY29ubmVjdGVkRW50aXRpZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5jb25maWdLZXldWydjb2xvciddWydoZXgnXSA6IFwiXCIgOlxuICAgICAgICAgIG51bGw7XG4gICAgICAgIHRoaXMuYWxsQnViYmxlcy5wdXNoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoIHJlc3BvbnNlLmNvbm5lY3RlZEVudGl0aWVzW2ldLmVudGl0eS5pZCApLFxuICAgICAgICAgICAgLi4ucmVzcG9uc2UuY29ubmVjdGVkRW50aXRpZXNbaV0sXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwID0ge307XG4gICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgIC8vIGQzL3N2ZyBkb2VzIG5vdCBhbGxvdyBOdW1iZXIgYXMgYmVnaW5uaW5nIG9mIElELlxuICAgICAgLy8gZDMvc3ZnIGRvZXMgbm90IGFsbG93ICctJyBhcyBwYXJ0IG9mIElELlxuICAgICAgYnViYmxlLmlkID0gdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKGJ1YmJsZS5lbnRpdHkuaWQpO1xuICAgICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtidWJibGUuaWRdID0gYnViYmxlLmVudGl0eS5pZDtcbiAgICAgIHJldHVybiBidWJibGU7XG4gICAgfSk7XG4gICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7IGkrKyApe1xuICAgICAgICBpZiAoIHRoaXMuc2VsZWN0ZWRCdWJibGVzW2ldLmlkID09PSBidWJibGUuaWQgKSB7XG4gICAgICAgICAgYnViYmxlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCAhZW50aXR5SWQgKSB7IHJldHVybiBudWxsOyB9XG4gICAgcmV0dXJuICggJ0JfJyArIGVudGl0eUlkLnJlcGxhY2UoLy0vZywgJ18nKSApO1xuICB9XG5cbiAgZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCkge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmFsbEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgKGJ1YmJsZSkgPT4ge1xuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmZhY2V0RGF0YS5sZW5ndGg7IGkrKyApe1xuICAgICAgICAgIGlmICggYnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHkuaWQgPT09IHRoaXMuZmFjZXREYXRhW2ldLnR5cGUuaWQgKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLmZhY2V0RGF0YVtpXS5lbmFibGVkICkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgb25CdWJibGVNb3VzZUVudGVyKHBheWxvYWQpe1xuICAgIGlmICggIXBheWxvYWQgfHwgIXBheWxvYWQuYnViYmxlICkgcmV0dXJuO1xuICAgIGNvbnN0IGJ1YmJsZUlkID0gcGF5bG9hZC5idWJibGUuaWQ7XG4gICAgbGV0IGhvdmVyRW50aXR5SWQgPSB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW3BheWxvYWQuYnViYmxlLmlkXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7IGkrKyApe1xuICAgICAgbGV0IGJ1YmJsZSA9IHRoaXMuYWxsQnViYmxlc1tpXTtcbiAgICAgIGlmICggYnViYmxlLmVudGl0eS5pZD09PWhvdmVyRW50aXR5SWQgKXtcbiAgICAgICAgdGhpcy5jdXJyZW50SG92ZXJFbnRpdHkgPSBidWJibGUuZW50aXR5O1xuICAgICAgICB0aGlzLmN1cnJlbnRIb3ZlckVudGl0eS5jb3VudCA9IGJ1YmJsZS5jb3VudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKHRoaXMuYnViYmxlUG9wdXApe1xuICAgICAgdGhpcy5idWJibGVQb3B1cC5oaWRlKCk7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAgPSBudWxsO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1YmJsZS1wb3B1cC1tZW51XCIpO1xuICAgICAgbGV0IHRlbXBsYXRlQ2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB0ZW1wbGF0ZUNsb25lWydzdHlsZSddLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgdGhpcy5idWJibGVQb3B1cCA9IHRoaXMudGlwcHkoYCMke2J1YmJsZUlkfWAsIHtcbiAgICAgICAgY29udGVudDogdGVtcGxhdGVDbG9uZSxcbiAgICAgICAgYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgbWF4V2lkdGg6IDUwMCxcbiAgICAgICAgLy9vbkhpZGRlbjogKCkgPT4gY29uc29sZS5sb2coJ2hpZGRlbicpLFxuICAgICAgfSlbMF07XG4gICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7IGlmKHRoaXMuYnViYmxlUG9wdXApIHRoaXMuYnViYmxlUG9wdXAuc2hvdygpIH0gLCA4MDAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3lUb29sdGlwKCl7XG4gICAgaWYodGhpcy5idWJibGVQb3B1cCl7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmhpZGUoKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25CdWJibGVUb29sdGlwQ2xpY2soc291cmNlOnN0cmluZywgcGF5bG9hZCl7XG4gICAgc3dpdGNoKHNvdXJjZSl7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBpZighcGF5bG9hZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBidWJibGVJZCA9IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZChwYXlsb2FkLmVudGl0eUlkKTtcbiAgICAgICAgaWYoIWJ1YmJsZUlkKSByZXR1cm47XG4gICAgICAgIGxldCBidWJibGUgPSBudWxsO1xuICAgICAgICBpZihwYXlsb2FkLl9idWJibGVDaGFydCl7XG4gICAgICAgICAgcGF5bG9hZC5fYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGBnYCkuZWFjaCggYiA9PiB7XG4gICAgICAgICAgICBpZihiLmlkPT09YnViYmxlSWQpIGJ1YmJsZT1iO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmKGJ1YmJsZSkgcmV0dXJuIGJ1YmJsZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZVNlbGVjdGVkKGJ1YmJsZSl7XG4gICAgaWYoYnViYmxlKXtcbiAgICAgIGlmKCF0aGlzLnNlbGVjdGVkQnViYmxlcy5pbmNsdWRlcyhidWJibGUpKXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoPHRoaXMubWF4QnViYmxlc1NlbGVjdGFibGUpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLnB1c2goYnViYmxlKTtcbiAgICAgICAgICAvL3JldHVybiB0aGlzLmZpbHRlclJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRCdWJibGVGcm9tSWQoaWQpe1xuICAgIGNvbnN0IGJ1YmJsZUlkID0gdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKGlkKTtcbiAgICBpZighYnViYmxlSWQpIHJldHVybjtcbiAgICBsZXQgYnViYmxlID0gbnVsbDtcbiAgICBpZih0aGlzLl9idWJibGVDaGFydCl7XG4gICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKCBiID0+IHtcbiAgICAgICAgaWYoYi5pZD09PWJ1YmJsZUlkKSBidWJibGU9YjtcbiAgICAgIH0pO1xuICAgICAgaWYoYnViYmxlKSByZXR1cm4gYnViYmxlO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkQnViYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEJ1YmJsZXM7XG4gIH1cblxuICBnZXRBbGxCdWJibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFsbEJ1YmJsZXM7XG4gIH1cblxuICBnZXRFbnRpdHlJZE1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdHlCdWJibGVJZE1hcDtcbiAgfVxuXG4gIHNldFdpbmRvd1Jlc2l6ZSgpIHtcbiAgICBpZiggIXRoaXMud2luZG93UmVzaXplU2V0KXtcbiAgICAgIGZyb21FdmVudCggd2luZG93ICwgXCJyZXNpemVcIiApLnBpcGUoZGVib3VuY2UoKCkgPT4gaW50ZXJ2YWwoMjAwKSkpLlxuICAgICAgc3Vic2NyaWJlKCAoKSA9PiB7XG4gICAgICAgIC8vIG9ubHkgcmVzZXRzIHRoZSBidWJibGVzIGlmIHRoZSB3aW5kb3cncyB3aWR0aCBoYXMgY2hhbmdlZFxuICAgICAgICAvLyAoaWYgdGhlIHJlc2l6ZSBvbmx5IGVmZmVjdHMgdGhlIHdpbmRvdydzIGhpZ2h0IHRoZW4gdGhlIGJ1YmJsZSBjaGFydFxuICAgICAgICAvLyBkb2Vzbid0IGdldCByZXNldClcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuY29udGFpbmVySWQpO1xuICAgICAgICAgIGxldCBidWJibGVQYXlsb2FkID0ge1xuICAgICAgICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIHJlc2V0OiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZShidWJibGVQYXlsb2FkKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy53aW5kb3dSZXNpemVTZXQgPSB0cnVlO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==