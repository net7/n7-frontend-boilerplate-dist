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
        _this.maxBubbleRadius = 100;
        _this.minBubbleRadius = 10;
        _this.maxBubbleTextRadiusRatio = 6;
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
            var bubbleAverage = totalCount / numOfBubbles;
            /** @type {?} */
            var bubblePercentage = (bubble.count - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            //to understand if there is a large difference of count between bubbles
            /** @type {?} */
            var coeff = maxBubbleCount / bubbleAverage;
            /* if ( coeff > 20 ) {
              if ( bubble.count - coeff >= 0 ){
                bubblePercentage = ( (bubble.count) - (minBubbleCount/3) )/( (maxBubbleCount*3) - (minBubbleCount/3) )
              } else {
              }
              bubblePercentage = ( (bubble.count - (minBubbleCount/3)) - (minBubbleCount/3) )/( ((maxBubbleCount - coeff) *3) - (minBubbleCount/3) )
            }*/
            /* In case of few bubbles */
            if (coeff > 1) {
                bubblePercentage = (bubble.count * (coeff / 3) - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            }
            /** @type {?} */
            var bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            if (bubbleRadius > _this.maxBubbleRadius) {
                bubbleRadius = _this.maxBubbleRadius;
            }
            else if (bubbleRadius < _this.minBubbleRadius) {
                bubbleRadius = _this.minBubbleRadius;
            }
            //console.log("bubble text " +  bubble.entity.label +" bubble length " +  bubble.entity.label.length + " radius: " + bubbleRadius + " limit: " + this.thresholdShowTitle  )
            /** @type {?} */
            var label = bubble.entity.label;
            /** @type {?} */
            var texts = [];
            // check if text is larger than radius
            if (bubbleRadius / bubble.entity.label.length < _this.maxBubbleTextRadiusRatio) {
                /** @type {?} */
                var index = bubbleRadius / _this.maxBubbleTextRadiusRatio;
                /** @type {?} */
                var spaceIndex = bubble.entity.label.indexOf(" ", index - 5);
                /** @type {?} */
                var label1_1 = bubble.entity.label.slice(0, spaceIndex);
                /** @type {?} */
                var label2_1 = bubble.entity.label.slice(spaceIndex, index * 2);
                //label = [bubble.entity.label.slice(0, index), "\n", bubble.entity.label.slice(index)].join('');
                texts.push({
                    id: bId + "_label0",
                    label: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { if (d.radius < _this.thresholdShowTitle)
                        return null; return label1_1; }),
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
                        return d.y - mNum - 20;
                    }),
                    "user_select": "none",
                    fontSize_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { return d.radius / 5; }),
                    color: "white",
                    "classes": ""
                }, {
                    id: bId + "_label01",
                    label: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { if (d.radius < _this.thresholdShowTitle)
                        return null; return label2_1; }),
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
                });
            }
            else {
                texts.push({
                    id: bId + "_label0",
                    label: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    function (d) { if (d.radius < _this.thresholdShowTitle)
                        return null; return label; }),
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
                });
            }
            /** @type {?} */
            var bubbleData = {
                id: bId,
                texts: tslib_1.__spread(texts, [
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
                        //fontSize_function: (d) => d.radius/3,
                        color: "white",
                        "classes": "aw-bubble-num"
                    }
                ]),
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
        if (reset === void 0) { reset = true; }
        /** @type {?} */
        var response = data.source;
        // if ( !response || !response.entitiesData ) {return; }
        this.allBubbles = [];
        if (data.selectedBubbles) {
            this.selectedBubbles = data.selectedBubbles;
        }
        if (response.entitiesData) {
            for (var i = 0; i < response.entitiesData.length; i++) {
                this.allBubbles.push(tslib_1.__assign({}, response.entitiesData[i], { color: this.options.configKeys[response.entitiesData[i].entity.typeOfEntity.replace(" ", "-")] ? this.options.configKeys[response.entitiesData[i].entity.typeOfEntity.replace(" ", "-")]['color']['hex'] : "" }));
            }
        }
        else {
            for (var i = 0; i < response.relatedEntities.length; i++) {
                /** @type {?} */
                var color = this.options.configKeys ?
                    this.options.configKeys[response.relatedEntities[i].entity.typeOfEntity.replace(" ", "-")] ? this.options.configKeys[response.relatedEntities[i].entity.typeOfEntity.replace(" ", "-")]['color']['hex'] : "" :
                    null;
                this.allBubbles.push(tslib_1.__assign({ id: this.convertEntityIdToBubbleId(response.relatedEntities[i].entity.id) }, response.relatedEntities[i], { color: color }));
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
        if (reset) {
            this.update(data);
        }
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
        var count = 0;
        /** @type {?} */
        var result = this.allBubbles.filter((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            for (var i = 0; i < _this.facetData.length; i++) {
                if (bubble.entity.typeOfEntity === _this.facetData[i].type) {
                    if (!_this.facetData[i].enabled) {
                        return false;
                    }
                }
            }
            if (count > _this.options.maxNumber) {
                return false;
            }
            count++;
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
                //check if element is visible on page
                if (container.offsetParent != null) {
                    /** @type {?} */
                    var bubblePayload = {
                        width: container.offsetWidth,
                        reset: true
                    };
                    _this.update(bubblePayload);
                }
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
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.maxBubbleRadius;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.minBubbleRadius;
    /**
     * @type {?}
     * @private
     */
    AwBubbleChartDS.prototype.maxBubbleTextRadiusRatio;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQWdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQ7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUFnWkM7UUE5WVMsd0JBQWtCLEdBQVUsRUFBRSxDQUFDO1FBQy9CLHdCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUUvQixnQkFBVSxHQUFVLElBQUksQ0FBQztRQUN6Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDN0IscUJBQWUsR0FBVSxFQUFFLENBQUM7UUFDM0IsZUFBUyxHQUFVLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFRLElBQUksQ0FBQztRQUN6Qix3QkFBa0IsR0FBUSxJQUFJLENBQUM7UUFDOUIsa0JBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsMEJBQW9CLEdBQVUsQ0FBQyxDQUFDO1FBRWhDLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHFCQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLHFCQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLDhCQUF3QixHQUFHLENBQUMsQ0FBQzs7SUErWHZDLENBQUM7Ozs7OztJQTdYVyxtQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFrTEM7UUFqTEMsSUFBSyxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFFNUIsSUFBSSxDQUFDLGNBQWMs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Z0JBQ3JDLElBQUcsU0FBUyxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7O3dCQUU3QixhQUFhLEdBQUc7d0JBQ2xCLEtBQUssRUFBRSxTQUFTLENBQUMsV0FBVzt3QkFDNUIsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLEVBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBRUgsQ0FBQztJQUVILHNCQUFDO0FBQUQsQ0FBQyxBQWhaRCxDQUFxQyxVQUFVLEdBZ1o5Qzs7Ozs7OztJQTlZQyw2Q0FBdUM7Ozs7O0lBQ3ZDLDZDQUF1Qzs7SUFDdkMsd0NBQTBCOzs7OztJQUMxQixxQ0FBaUM7Ozs7O0lBQ2pDLDRDQUFvQzs7SUFDcEMsMENBQW1DOzs7OztJQUNuQyxvQ0FBZ0M7Ozs7O0lBQ2hDLHNDQUFnQzs7SUFDaEMsNkNBQXNDOzs7OztJQUN0Qyx1Q0FBaUM7Ozs7O0lBQ2pDLCtDQUF3Qzs7Ozs7SUFDeEMsZ0NBQWM7Ozs7O0lBQ2QsMENBQWdDOzs7OztJQUNoQywwQ0FBOEI7Ozs7O0lBQzlCLDBDQUE2Qjs7Ozs7SUFDN0IsbURBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJVQkJMRUNIQVJUX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnREUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByaXZhdGUgdGhyZXNob2xkU2hvd1RpdGxlOm51bWJlciA9IDUwO1xuICBwcml2YXRlIHRocmVzaG9sZFNob3dWYWx1ZTpudW1iZXIgPSA2MDtcbiAgcHVibGljIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSBhbGxCdWJibGVzOiBhbnlbXSA9IG51bGw7XG4gIHByaXZhdGUgZW50aXR5QnViYmxlSWRNYXA6IGFueSA9IHt9O1xuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIGZhY2V0RGF0YTogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGJ1YmJsZVBvcHVwOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgY3VycmVudEhvdmVyRW50aXR5OiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9idWJibGVDaGFydDogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBtYXhCdWJibGVzU2VsZWN0YWJsZTpudW1iZXIgPSAzO1xuICBwcml2YXRlIHRpcHB5O1xuICBwcml2YXRlIHdpbmRvd1Jlc2l6ZVNldCA9IGZhbHNlO1xuICBwcml2YXRlIG1heEJ1YmJsZVJhZGl1cyA9IDEwMDtcbiAgcHJpdmF0ZSBtaW5CdWJibGVSYWRpdXMgPSAxMDtcbiAgcHJpdmF0ZSBtYXhCdWJibGVUZXh0UmFkaXVzUmF0aW8gPSA2O1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgaWYgKCAhZGF0YSApeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgdGhpcy5kZXN0cm95VG9vbHRpcCgpO1xuXG4gICAgdGhpcy5mYWNldERhdGEgPSBkYXRhLmZhY2V0RGF0YSA/IGRhdGEuZmFjZXREYXRhIDogW107XG4gICAgdGhpcy50aXBweSA9IHRpcHB5O1xuXG4gICAgZGF0YS5idWJibGVzID0gdGhpcy5maWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKTtcbiAgICBsZXQgYnViYmxlQ29pbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5jb250YWluZXJJZCk7XG4gICAgY29uc3QgY1dpZHRoID0gZGF0YS53aWR0aCA/IGRhdGEud2lkdGggOiBidWJibGVDb2ludGFpbmVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gVE9ETzogdGhpbmsgb2YgYSBnb29kIHdheSB0byBwYXNzL2NvbXB1dGUgY0hlaWdodFxuICAgIGNvbnN0IGNIZWlnaHQgPSA3MDA7IC8vIGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IGNXaWR0aCAqIGNIZWlnaHQ7XG5cbiAgICBsZXQgYnViYmxlc0RhdGEgPSB7XG4gICAgICBjb250YWluZXJJZDogdGhpcy5vcHRpb25zLmJ1YmJsZUNvbnRhaW5lcklkLFxuICAgICAgY29udGFpbmVyV2lkdGggOiBjV2lkdGgsXG4gICAgICBjb250YWluZXJIZWlnaHQgOiBjSGVpZ2h0LFxuICAgICAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiB0cnVlLFxuICAgICAgbWF4QnViYmxlc1NlbGVjdGVkOjNcbiAgICB9O1xuXG4gICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10gPSBbXTtcblxuICAgIGxldCBtYXhCdWJibGVDb3VudCA9IC0xO1xuICAgIGxldCBtaW5CdWJibGVDb3VudCA9IC0xO1xuICAgIGxldCBudW1PZkJ1YmJsZXMgPSAwO1xuICAgIGxldCB0b3RhbENvdW50ID0gMDtcbiAgICBsZXQgbnVtT2ZTZWxlY3RlZEJ1YmJsZXMgPSAwO1xuXG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBpZiAoIG1heEJ1YmJsZUNvdW50IDwgYnViYmxlLmNvdW50ICkgbWF4QnViYmxlQ291bnQgPSBidWJibGUuY291bnQ7XG4gICAgICBpZiAoIG1pbkJ1YmJsZUNvdW50IDwgMCB8fCBtaW5CdWJibGVDb3VudD5idWJibGUuY291bnQgKSBtaW5CdWJibGVDb3VudCA9IGJ1YmJsZS5jb3VudDtcbiAgICAgIG51bU9mQnViYmxlcysrO1xuICAgICAgdG90YWxDb3VudCArPSBidWJibGUuY291bnQ7XG4gICAgICBpZihidWJibGUuc2VsZWN0ZWQpIG51bU9mU2VsZWN0ZWRCdWJibGVzKys7XG4gICAgfSk7XG5cbiAgICBkYXRhLmJ1YmJsZXMuZm9yRWFjaCggYnViYmxlID0+IHtcbiAgICAgIGxldCBiSWQgPSBidWJibGUuaWQ7XG5cbiAgICAgIGxldCBidWJibGVBdmVyYWdlID0gIHRvdGFsQ291bnQgLyBudW1PZkJ1YmJsZXM7XG4gICAgICBsZXQgYnViYmxlUGVyY2VudGFnZSA9ICggYnViYmxlLmNvdW50IC0gKG1pbkJ1YmJsZUNvdW50LzMpICkvKCAobWF4QnViYmxlQ291bnQqMykgLSAobWluQnViYmxlQ291bnQvMykgKTtcblxuXG4gICAgICAvL3RvIHVuZGVyc3RhbmQgaWYgdGhlcmUgaXMgYSBsYXJnZSBkaWZmZXJlbmNlIG9mIGNvdW50IGJldHdlZW4gYnViYmxlc1xuICAgICAgbGV0IGNvZWZmID0gbWF4QnViYmxlQ291bnQgLyBidWJibGVBdmVyYWdlO1xuXG4gICAgICAvKiBpZiAoIGNvZWZmID4gMjAgKSB7XG4gICAgICAgIGlmICggYnViYmxlLmNvdW50IC0gY29lZmYgPj0gMCApe1xuICAgICAgICAgIGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIChidWJibGUuY291bnQpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICkvKCAobWF4QnViYmxlQ291bnQqMykgLSAobWluQnViYmxlQ291bnQvMykgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICB9XG4gICAgICAgIGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIChidWJibGUuY291bnQgLSAobWluQnViYmxlQ291bnQvMykpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICkvKCAoKG1heEJ1YmJsZUNvdW50IC0gY29lZmYpICozKSAtIChtaW5CdWJibGVDb3VudC8zKSApXG4gICAgICB9Ki9cblxuICAgICAgLyogSW4gY2FzZSBvZiBmZXcgYnViYmxlcyAqL1xuICAgICAgaWYoIGNvZWZmID4gMSApIHtcbiAgICAgICAgYnViYmxlUGVyY2VudGFnZSA9ICggYnViYmxlLmNvdW50ICogKGNvZWZmLzMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICkvKCAobWF4QnViYmxlQ291bnQqMykgLSAobWluQnViYmxlQ291bnQvMykgKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGJ1YmJsZVJhZGl1cyA9IChNYXRoLmxvZyhjb250YWluZXJTaXplKS8xMCkqKGJ1YmJsZVBlcmNlbnRhZ2UqMykqKDcwLU1hdGguc3FydChudW1PZkJ1YmJsZXMpKTtcbiAgICAgIGlmICggYnViYmxlUmFkaXVzID4gdGhpcy5tYXhCdWJibGVSYWRpdXMgKSB7XG4gICAgICAgIGJ1YmJsZVJhZGl1cyA9IHRoaXMubWF4QnViYmxlUmFkaXVzO1xuICAgICAgfSBlbHNlIGlmICggYnViYmxlUmFkaXVzIDwgdGhpcy5taW5CdWJibGVSYWRpdXMgKSB7XG4gICAgICAgIGJ1YmJsZVJhZGl1cyA9IHRoaXMubWluQnViYmxlUmFkaXVzO1xuICAgICAgfVxuXG4gICAgICAvL2NvbnNvbGUubG9nKFwiYnViYmxlIHRleHQgXCIgKyAgYnViYmxlLmVudGl0eS5sYWJlbCArXCIgYnViYmxlIGxlbmd0aCBcIiArICBidWJibGUuZW50aXR5LmxhYmVsLmxlbmd0aCArIFwiIHJhZGl1czogXCIgKyBidWJibGVSYWRpdXMgKyBcIiBsaW1pdDogXCIgKyB0aGlzLnRocmVzaG9sZFNob3dUaXRsZSAgKVxuICAgICAgbGV0IGxhYmVsID0gYnViYmxlLmVudGl0eS5sYWJlbDtcblxuICAgICAgbGV0IHRleHRzID0gW107XG4gICAgICAvLyBjaGVjayBpZiB0ZXh0IGlzIGxhcmdlciB0aGFuIHJhZGl1c1xuICAgICAgaWYoIGJ1YmJsZVJhZGl1cyAvIGJ1YmJsZS5lbnRpdHkubGFiZWwubGVuZ3RoIDwgdGhpcy5tYXhCdWJibGVUZXh0UmFkaXVzUmF0aW8gKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYnViYmxlUmFkaXVzIC8gdGhpcy5tYXhCdWJibGVUZXh0UmFkaXVzUmF0aW87XG4gICAgICAgIGNvbnN0IHNwYWNlSW5kZXggPSBidWJibGUuZW50aXR5LmxhYmVsLmluZGV4T2YoXCIgXCIsIGluZGV4IC0gNSlcbiAgICAgICAgY29uc3QgbGFiZWwxID0gYnViYmxlLmVudGl0eS5sYWJlbC5zbGljZSgwLCBzcGFjZUluZGV4KTtcbiAgICAgICAgY29uc3QgbGFiZWwyID0gYnViYmxlLmVudGl0eS5sYWJlbC5zbGljZShzcGFjZUluZGV4LCBpbmRleCAqMik7XG4gICAgICAgIC8vbGFiZWwgPSBbYnViYmxlLmVudGl0eS5sYWJlbC5zbGljZSgwLCBpbmRleCksIFwiXFxuXCIsIGJ1YmJsZS5lbnRpdHkubGFiZWwuc2xpY2UoaW5kZXgpXS5qb2luKCcnKTtcblxuICAgICAgICB0ZXh0cy5wdXNoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDBcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dUaXRsZSkgcmV0dXJuIG51bGw7IHJldHVybiBsYWJlbDEgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbU51bSA9IChkLnJhZGl1cy85KTtcbiAgICAgICAgICAgICAgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIG1OdW09MDtcbiAgICAgICAgICAgICAgcmV0dXJuIGQueS1tTnVtIC0yMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMDFcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dUaXRsZSkgcmV0dXJuIG51bGw7IHJldHVybiBsYWJlbDIgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbU51bSA9IChkLnJhZGl1cy85KTtcbiAgICAgICAgICAgICAgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIG1OdW09MDtcbiAgICAgICAgICAgICAgcmV0dXJuIGQueS1tTnVtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dHMucHVzaCh7XG4gICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMFwiLFxuICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dUaXRsZSkgcmV0dXJuIG51bGw7IHJldHVybiBsYWJlbCB9LFxuICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IHtcbiAgICAgICAgICAgIGxldCBtTnVtID0gKGQucmFkaXVzLzkpO1xuICAgICAgICAgICAgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIG1OdW09MDtcbiAgICAgICAgICAgIHJldHVybiBkLnktbU51bTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBsZXQgYnViYmxlRGF0YSA9IHtcbiAgICAgICAgaWQ6IGJJZCxcbiAgICAgICAgdGV4dHM6IFtcbiAgICAgICAgICAuLi50ZXh0cyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwxXCIsXG4gICAgICAgICAgICBsYWJlbDogKGQpID0+IHsgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIHJldHVybiBudWxsOyByZXR1cm4gYnViYmxlLmNvdW50IH0sXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICAvL2ZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvMyxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcImF3LWJ1YmJsZS1udW1cIlxuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHg6IGNXaWR0aC8yKzUwLFxuICAgICAgICB5OiBjSGVpZ2h0LzIrNTAsXG4gICAgICAgIFwicmFkaXVzXCI6IGJ1YmJsZVJhZGl1cyxcbiAgICAgICAgY29sb3I6YnViYmxlLmNvbG9yLFxuICAgICAgICBoYXNDbG9zZUljb246ICggYnViYmxlLnNlbGVjdGVkID8gYnViYmxlLnNlbGVjdGVkIDogZmFsc2UgKSxcbiAgICAgICAgcGF5bG9hZDp7XG4gICAgICAgICAgaWQ6IGJJZFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10ucHVzaChidWJibGVEYXRhKTtcbiAgICB9KTtcblxuXG4gICAgYnViYmxlc0RhdGFbJ2ZvcmNlU2ltdWxhdGlvbkRhdGEnXSA9IHtcbiAgICAgIHhQdWxsOiBjV2lkdGgvMixcbiAgICAgIHhQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgeVB1bGw6IGNIZWlnaHQvMixcbiAgICAgIHlQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgY29sbGlzaW9uU3RyZW5naDogMC45OSxcbiAgICAgIGNvbGxpc2lvbkl0ZXJhdGlvbnM6IDEsXG4gICAgICB2ZWxvY2l0eURlY2F5OiAwLjY1XG4gICAgfVxuXG4gICAgaWYoZGF0YS5yZXNldCkgYnViYmxlc0RhdGFbJ3Jlc2V0J10gPSBkYXRhLnJlc2V0O1xuXG4gICAgaWYoZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UpIGJ1YmJsZXNEYXRhWydzZXRVcGRhdGVSZWZlcmVuY2UnXSA9IGRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlO1xuICAgIGlmKGRhdGEuc2V0QnViYmxlQ2hhcnQpIGJ1YmJsZXNEYXRhWydzZXRCdWJibGVDaGFydCddID0gZGF0YS5zZXRCdWJibGVDaGFydDtcblxuICAgIHRoaXMuc2V0V2luZG93UmVzaXplKCk7XG5cbiAgICByZXR1cm4gYnViYmxlc0RhdGE7XG4gIH1cblxuICBzZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KCBkYXRhOiBhbnksIHJlc2V0ID0gdHJ1ZSApIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGRhdGEuc291cmNlO1xuICAgLy8gaWYgKCAhcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHtyZXR1cm47IH1cbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBbXTtcblxuICAgIGlmICggZGF0YS5zZWxlY3RlZEJ1YmJsZXMgKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IGRhdGEuc2VsZWN0ZWRCdWJibGVzO1xuICAgIH1cblxuICAgIGlmKCByZXNwb25zZS5lbnRpdGllc0RhdGEgKSB7XG5cbiAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCByZXNwb25zZS5lbnRpdGllc0RhdGEubGVuZ3RoOyBpKysgKSB7XG5cbiAgICAgICAgdGhpcy5hbGxCdWJibGVzLnB1c2goe1xuICAgICAgICAgIC4uLnJlc3BvbnNlLmVudGl0aWVzRGF0YVtpXSxcbiAgICAgICAgICBjb2xvcjogdGhpcy5vcHRpb25zLmNvbmZpZ0tleXNbcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXSA/IHRoaXMub3B0aW9ucy5jb25maWdLZXlzW3Jlc3BvbnNlLmVudGl0aWVzRGF0YVtpXS5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKV1bJ2NvbG9yJ11bJ2hleCddIDogXCJcIlxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzLmxlbmd0aDsgaSsrICl7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbmZpZ0tleXMgP1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5jb25maWdLZXlzW3Jlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKV0gPyB0aGlzLm9wdGlvbnMuY29uZmlnS2V5c1tyZXNwb25zZS5yZWxhdGVkRW50aXRpZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKFwiIFwiLCBcIi1cIildWydjb2xvciddWydoZXgnXSA6IFwiXCIgOlxuICAgICAgICAgIG51bGw7XG4gICAgICAgIHRoaXMuYWxsQnViYmxlcy5wdXNoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXS5lbnRpdHkuaWQgKSxcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXSxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW50aXR5QnViYmxlSWRNYXAgPSB7fTtcbiAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgLy8gZDMvc3ZnIGRvZXMgbm90IGFsbG93IE51bWJlciBhcyBiZWdpbm5pbmcgb2YgSUQuXG4gICAgICAvLyBkMy9zdmcgZG9lcyBub3QgYWxsb3cgJy0nIGFzIHBhcnQgb2YgSUQuXG4gICAgICBidWJibGUuaWQgPSB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoYnViYmxlLmVudGl0eS5pZCk7XG4gICAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW2J1YmJsZS5pZF0gPSBidWJibGUuZW50aXR5LmlkO1xuICAgICAgcmV0dXJuIGJ1YmJsZTtcbiAgICB9KTtcbiAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBmb3IoIHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aDsgaSsrICl7XG4gICAgICAgIGlmICggdGhpcy5zZWxlY3RlZEJ1YmJsZXNbaV0uaWQgPT09IGJ1YmJsZS5pZCApIHtcbiAgICAgICAgICBidWJibGUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihyZXNldCkge1xuICAgICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICggIWVudGl0eUlkICkgeyByZXR1cm4gbnVsbDsgfVxuICAgIHJldHVybiAoICdCXycgKyBlbnRpdHlJZC5yZXBsYWNlKC8tL2csICdfJykgKTtcbiAgfVxuXG4gIGZpbHRlckJ1YmJsZXNCYXNlZE9uRmFjZXRzRW5hYmxlZCgpIHtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmFsbEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgKGJ1YmJsZSkgPT4ge1xuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmZhY2V0RGF0YS5sZW5ndGg7IGkrKyApe1xuICAgICAgICAgIGlmICggYnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHkgPT09IHRoaXMuZmFjZXREYXRhW2ldLnR5cGUgKSB7XG4gICAgICAgICAgICBpZiAoICF0aGlzLmZhY2V0RGF0YVtpXS5lbmFibGVkICkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIGNvdW50ID4gdGhpcy5vcHRpb25zLm1heE51bWJlciApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgb25CdWJibGVNb3VzZUVudGVyKHBheWxvYWQpe1xuICAgIGlmICggIXBheWxvYWQgfHwgIXBheWxvYWQuYnViYmxlICkgcmV0dXJuO1xuICAgIGNvbnN0IGJ1YmJsZUlkID0gcGF5bG9hZC5idWJibGUuaWQ7XG4gICAgbGV0IGhvdmVyRW50aXR5SWQgPSB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW3BheWxvYWQuYnViYmxlLmlkXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7IGkrKyApe1xuICAgICAgbGV0IGJ1YmJsZSA9IHRoaXMuYWxsQnViYmxlc1tpXTtcbiAgICAgIGlmICggYnViYmxlLmVudGl0eS5pZD09PWhvdmVyRW50aXR5SWQgKXtcbiAgICAgICAgdGhpcy5jdXJyZW50SG92ZXJFbnRpdHkgPSBidWJibGUuZW50aXR5O1xuICAgICAgICB0aGlzLmN1cnJlbnRIb3ZlckVudGl0eS5jb3VudCA9IGJ1YmJsZS5jb3VudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKHRoaXMuYnViYmxlUG9wdXApe1xuICAgICAgdGhpcy5idWJibGVQb3B1cC5oaWRlKCk7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAgPSBudWxsO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1YmJsZS1wb3B1cC1tZW51XCIpO1xuICAgICAgbGV0IHRlbXBsYXRlQ2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB0ZW1wbGF0ZUNsb25lWydzdHlsZSddLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgdGhpcy5idWJibGVQb3B1cCA9IHRoaXMudGlwcHkoYCMke2J1YmJsZUlkfWAsIHtcbiAgICAgICAgY29udGVudDogdGVtcGxhdGVDbG9uZSxcbiAgICAgICAgYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgbWF4V2lkdGg6IDUwMCxcbiAgICAgICAgLy9vbkhpZGRlbjogKCkgPT4gY29uc29sZS5sb2coJ2hpZGRlbicpLFxuICAgICAgfSlbMF07XG4gICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7IGlmKHRoaXMuYnViYmxlUG9wdXApIHRoaXMuYnViYmxlUG9wdXAuc2hvdygpIH0gLCA4MDAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3lUb29sdGlwKCl7XG4gICAgaWYodGhpcy5idWJibGVQb3B1cCl7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmhpZGUoKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25CdWJibGVUb29sdGlwQ2xpY2soc291cmNlOnN0cmluZywgcGF5bG9hZCl7XG4gICAgc3dpdGNoKHNvdXJjZSl7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBpZighcGF5bG9hZCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBidWJibGVJZCA9IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZChwYXlsb2FkLmVudGl0eUlkKTtcbiAgICAgICAgaWYoIWJ1YmJsZUlkKSByZXR1cm47XG4gICAgICAgIGxldCBidWJibGUgPSBudWxsO1xuICAgICAgICBpZihwYXlsb2FkLl9idWJibGVDaGFydCl7XG4gICAgICAgICAgcGF5bG9hZC5fYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGBnYCkuZWFjaCggYiA9PiB7XG4gICAgICAgICAgICBpZihiLmlkPT09YnViYmxlSWQpIGJ1YmJsZT1iO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmKGJ1YmJsZSkgcmV0dXJuIGJ1YmJsZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZVNlbGVjdGVkKGJ1YmJsZSl7XG4gICAgaWYoYnViYmxlKXtcbiAgICAgIGlmKCF0aGlzLnNlbGVjdGVkQnViYmxlcy5pbmNsdWRlcyhidWJibGUpKXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoPHRoaXMubWF4QnViYmxlc1NlbGVjdGFibGUpe1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLnB1c2goYnViYmxlKTtcbiAgICAgICAgICAvL3JldHVybiB0aGlzLmZpbHRlclJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRCdWJibGVGcm9tSWQoaWQpe1xuICAgIGNvbnN0IGJ1YmJsZUlkID0gdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKGlkKTtcbiAgICBpZighYnViYmxlSWQpIHJldHVybjtcbiAgICBsZXQgYnViYmxlID0gbnVsbDtcbiAgICBpZih0aGlzLl9idWJibGVDaGFydCl7XG4gICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKCBiID0+IHtcbiAgICAgICAgaWYoYi5pZD09PWJ1YmJsZUlkKSBidWJibGU9YjtcbiAgICAgIH0pO1xuICAgICAgaWYoYnViYmxlKSByZXR1cm4gYnViYmxlO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkQnViYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEJ1YmJsZXM7XG4gIH1cblxuICBnZXRBbGxCdWJibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFsbEJ1YmJsZXM7XG4gIH1cblxuICBnZXRFbnRpdHlJZE1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdHlCdWJibGVJZE1hcDtcbiAgfVxuXG4gIHNldFdpbmRvd1Jlc2l6ZSgpIHtcbiAgICBpZiggIXRoaXMud2luZG93UmVzaXplU2V0KXtcbiAgICAgIGZyb21FdmVudCggd2luZG93ICwgXCJyZXNpemVcIiApLnBpcGUoZGVib3VuY2UoKCkgPT4gaW50ZXJ2YWwoMjAwKSkpLlxuICAgICAgc3Vic2NyaWJlKCAoKSA9PiB7XG4gICAgICAgIC8vIG9ubHkgcmVzZXRzIHRoZSBidWJibGVzIGlmIHRoZSB3aW5kb3cncyB3aWR0aCBoYXMgY2hhbmdlZFxuICAgICAgICAvLyAoaWYgdGhlIHJlc2l6ZSBvbmx5IGVmZmVjdHMgdGhlIHdpbmRvdydzIGhpZ2h0IHRoZW4gdGhlIGJ1YmJsZSBjaGFydFxuICAgICAgICAvLyBkb2Vzbid0IGdldCByZXNldClcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuY29udGFpbmVySWQpO1xuICAgICAgICAgIC8vY2hlY2sgaWYgZWxlbWVudCBpcyB2aXNpYmxlIG9uIHBhZ2VcbiAgICAgICAgICBpZihjb250YWluZXIub2Zmc2V0UGFyZW50ICE9IG51bGwpIHtcblxuICAgICAgICAgICAgbGV0IGJ1YmJsZVBheWxvYWQgPSB7XG4gICAgICAgICAgICAgIHdpZHRoOiBjb250YWluZXIub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgIHJlc2V0OiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoYnViYmxlUGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLndpbmRvd1Jlc2l6ZVNldCA9IHRydWU7XG4gICAgfVxuXG4gIH1cblxufVxuIl19