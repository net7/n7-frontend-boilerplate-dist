/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/bubble-chart.ds.ts
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
                if (bubble.entity.typeOfEntity.replace(/ /g, '-') === _this.facetData[i].type.replace(/ /g, '-')) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUM7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUFnWkM7UUE5WVMsd0JBQWtCLEdBQVUsRUFBRSxDQUFDO1FBQy9CLHdCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUUvQixnQkFBVSxHQUFVLElBQUksQ0FBQztRQUN6Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDN0IscUJBQWUsR0FBVSxFQUFFLENBQUM7UUFDM0IsZUFBUyxHQUFVLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFRLElBQUksQ0FBQztRQUN6Qix3QkFBa0IsR0FBUSxJQUFJLENBQUM7UUFDOUIsa0JBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsMEJBQW9CLEdBQVUsQ0FBQyxDQUFDO1FBRWhDLHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHFCQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLHFCQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLDhCQUF3QixHQUFHLENBQUMsQ0FBQzs7SUErWHZDLENBQUM7Ozs7OztJQTdYVyxtQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFrTEM7UUFqTEMsSUFBSyxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFFNUIsSUFBSSxDQUFDLGNBQWMs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LEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztnQkFDbkUscUNBQXFDO2dCQUNyQyxJQUFHLFNBQVMsQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFOzt3QkFFN0IsYUFBYSxHQUFHO3dCQUNsQixLQUFLLEVBQUUsU0FBUyxDQUFDLFdBQVc7d0JBQzVCLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQzVCO1lBQ0gsQ0FBQyxFQUFDLENBQUE7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUMvQjtJQUVILENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUFoWkQsQ0FBcUMsVUFBVSxHQWdaOUM7Ozs7Ozs7SUE5WUMsNkNBQXVDOzs7OztJQUN2Qyw2Q0FBdUM7O0lBQ3ZDLHdDQUEwQjs7Ozs7SUFDMUIscUNBQWlDOzs7OztJQUNqQyw0Q0FBb0M7O0lBQ3BDLDBDQUFtQzs7Ozs7SUFDbkMsb0NBQWdDOzs7OztJQUNoQyxzQ0FBZ0M7O0lBQ2hDLDZDQUFzQzs7Ozs7SUFDdEMsdUNBQWlDOzs7OztJQUNqQywrQ0FBd0M7Ozs7O0lBQ3hDLGdDQUFjOzs7OztJQUNkLDBDQUFnQzs7Ozs7SUFDaEMsMENBQThCOzs7OztJQUM5QiwwQ0FBNkI7Ozs7O0lBQzdCLG1EQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcml2YXRlIHRocmVzaG9sZFNob3dUaXRsZTpudW1iZXIgPSA1MDtcbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VmFsdWU6bnVtYmVyID0gNjA7XG4gIHB1YmxpYyBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGVudGl0eUJ1YmJsZUlkTWFwOiBhbnkgPSB7fTtcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBmYWNldERhdGE6IGFueVtdID0gbnVsbDtcbiAgcHJpdmF0ZSBidWJibGVQb3B1cDogYW55ID0gbnVsbDtcbiAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfYnViYmxlQ2hhcnQ6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgbWF4QnViYmxlc1NlbGVjdGFibGU6bnVtYmVyID0gMztcbiAgcHJpdmF0ZSB0aXBweTtcbiAgcHJpdmF0ZSB3aW5kb3dSZXNpemVTZXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBtYXhCdWJibGVSYWRpdXMgPSAxMDA7XG4gIHByaXZhdGUgbWluQnViYmxlUmFkaXVzID0gMTA7XG4gIHByaXZhdGUgbWF4QnViYmxlVGV4dFJhZGl1c1JhdGlvID0gNjtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIGlmICggIWRhdGEgKXsgcmV0dXJuIG51bGw7IH1cblxuICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcblxuICAgIHRoaXMuZmFjZXREYXRhID0gZGF0YS5mYWNldERhdGEgPyBkYXRhLmZhY2V0RGF0YSA6IFtdO1xuICAgIHRoaXMudGlwcHkgPSB0aXBweTtcblxuICAgIGRhdGEuYnViYmxlcyA9IHRoaXMuZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCk7XG4gICAgbGV0IGJ1YmJsZUNvaW50YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuY29udGFpbmVySWQpO1xuICAgIGNvbnN0IGNXaWR0aCA9IGRhdGEud2lkdGggPyBkYXRhLndpZHRoIDogYnViYmxlQ29pbnRhaW5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIFRPRE86IHRoaW5rIG9mIGEgZ29vZCB3YXkgdG8gcGFzcy9jb21wdXRlIGNIZWlnaHRcbiAgICBjb25zdCBjSGVpZ2h0ID0gNzAwOyAvLyBidWJibGVDb2ludGFpbmVyLm9mZnNldEhlaWdodFxuICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBjV2lkdGggKiBjSGVpZ2h0O1xuXG4gICAgbGV0IGJ1YmJsZXNEYXRhID0ge1xuICAgICAgY29udGFpbmVySWQ6IHRoaXMub3B0aW9ucy5idWJibGVDb250YWluZXJJZCxcbiAgICAgIGNvbnRhaW5lcldpZHRoIDogY1dpZHRoLFxuICAgICAgY29udGFpbmVySGVpZ2h0IDogY0hlaWdodCxcbiAgICAgIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1heEJ1YmJsZXNTZWxlY3RlZDozXG4gICAgfTtcblxuICAgIGJ1YmJsZXNEYXRhWydidWJibGVzRGF0YSddID0gW107XG5cbiAgICBsZXQgbWF4QnViYmxlQ291bnQgPSAtMTtcbiAgICBsZXQgbWluQnViYmxlQ291bnQgPSAtMTtcbiAgICBsZXQgbnVtT2ZCdWJibGVzID0gMDtcbiAgICBsZXQgdG90YWxDb3VudCA9IDA7XG4gICAgbGV0IG51bU9mU2VsZWN0ZWRCdWJibGVzID0gMDtcblxuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgaWYgKCBtYXhCdWJibGVDb3VudCA8IGJ1YmJsZS5jb3VudCApIG1heEJ1YmJsZUNvdW50ID0gYnViYmxlLmNvdW50O1xuICAgICAgaWYgKCBtaW5CdWJibGVDb3VudCA8IDAgfHwgbWluQnViYmxlQ291bnQ+YnViYmxlLmNvdW50ICkgbWluQnViYmxlQ291bnQgPSBidWJibGUuY291bnQ7XG4gICAgICBudW1PZkJ1YmJsZXMrKztcbiAgICAgIHRvdGFsQ291bnQgKz0gYnViYmxlLmNvdW50O1xuICAgICAgaWYoYnViYmxlLnNlbGVjdGVkKSBudW1PZlNlbGVjdGVkQnViYmxlcysrO1xuICAgIH0pO1xuXG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBsZXQgYklkID0gYnViYmxlLmlkO1xuXG4gICAgICBsZXQgYnViYmxlQXZlcmFnZSA9ICB0b3RhbENvdW50IC8gbnVtT2ZCdWJibGVzO1xuICAgICAgbGV0IGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIGJ1YmJsZS5jb3VudCAtIChtaW5CdWJibGVDb3VudC8zKSApLyggKG1heEJ1YmJsZUNvdW50KjMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICk7XG5cblxuICAgICAgLy90byB1bmRlcnN0YW5kIGlmIHRoZXJlIGlzIGEgbGFyZ2UgZGlmZmVyZW5jZSBvZiBjb3VudCBiZXR3ZWVuIGJ1YmJsZXNcbiAgICAgIGxldCBjb2VmZiA9IG1heEJ1YmJsZUNvdW50IC8gYnViYmxlQXZlcmFnZTtcblxuICAgICAgLyogaWYgKCBjb2VmZiA+IDIwICkge1xuICAgICAgICBpZiAoIGJ1YmJsZS5jb3VudCAtIGNvZWZmID49IDAgKXtcbiAgICAgICAgICBidWJibGVQZXJjZW50YWdlID0gKCAoYnViYmxlLmNvdW50KSAtIChtaW5CdWJibGVDb3VudC8zKSApLyggKG1heEJ1YmJsZUNvdW50KjMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgfVxuICAgICAgICBidWJibGVQZXJjZW50YWdlID0gKCAoYnViYmxlLmNvdW50IC0gKG1pbkJ1YmJsZUNvdW50LzMpKSAtIChtaW5CdWJibGVDb3VudC8zKSApLyggKChtYXhCdWJibGVDb3VudCAtIGNvZWZmKSAqMykgLSAobWluQnViYmxlQ291bnQvMykgKVxuICAgICAgfSovXG5cbiAgICAgIC8qIEluIGNhc2Ugb2YgZmV3IGJ1YmJsZXMgKi9cbiAgICAgIGlmKCBjb2VmZiA+IDEgKSB7XG4gICAgICAgIGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIGJ1YmJsZS5jb3VudCAqIChjb2VmZi8zKSAtIChtaW5CdWJibGVDb3VudC8zKSApLyggKG1heEJ1YmJsZUNvdW50KjMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICk7XG4gICAgICB9XG5cbiAgICAgIGxldCBidWJibGVSYWRpdXMgPSAoTWF0aC5sb2coY29udGFpbmVyU2l6ZSkvMTApKihidWJibGVQZXJjZW50YWdlKjMpKig3MC1NYXRoLnNxcnQobnVtT2ZCdWJibGVzKSk7XG4gICAgICBpZiAoIGJ1YmJsZVJhZGl1cyA+IHRoaXMubWF4QnViYmxlUmFkaXVzICkge1xuICAgICAgICBidWJibGVSYWRpdXMgPSB0aGlzLm1heEJ1YmJsZVJhZGl1cztcbiAgICAgIH0gZWxzZSBpZiAoIGJ1YmJsZVJhZGl1cyA8IHRoaXMubWluQnViYmxlUmFkaXVzICkge1xuICAgICAgICBidWJibGVSYWRpdXMgPSB0aGlzLm1pbkJ1YmJsZVJhZGl1cztcbiAgICAgIH1cblxuICAgICAgLy9jb25zb2xlLmxvZyhcImJ1YmJsZSB0ZXh0IFwiICsgIGJ1YmJsZS5lbnRpdHkubGFiZWwgK1wiIGJ1YmJsZSBsZW5ndGggXCIgKyAgYnViYmxlLmVudGl0eS5sYWJlbC5sZW5ndGggKyBcIiByYWRpdXM6IFwiICsgYnViYmxlUmFkaXVzICsgXCIgbGltaXQ6IFwiICsgdGhpcy50aHJlc2hvbGRTaG93VGl0bGUgIClcbiAgICAgIGxldCBsYWJlbCA9IGJ1YmJsZS5lbnRpdHkubGFiZWw7XG5cbiAgICAgIGxldCB0ZXh0cyA9IFtdO1xuICAgICAgLy8gY2hlY2sgaWYgdGV4dCBpcyBsYXJnZXIgdGhhbiByYWRpdXNcbiAgICAgIGlmKCBidWJibGVSYWRpdXMgLyBidWJibGUuZW50aXR5LmxhYmVsLmxlbmd0aCA8IHRoaXMubWF4QnViYmxlVGV4dFJhZGl1c1JhdGlvICkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGJ1YmJsZVJhZGl1cyAvIHRoaXMubWF4QnViYmxlVGV4dFJhZGl1c1JhdGlvO1xuICAgICAgICBjb25zdCBzcGFjZUluZGV4ID0gYnViYmxlLmVudGl0eS5sYWJlbC5pbmRleE9mKFwiIFwiLCBpbmRleCAtIDUpXG4gICAgICAgIGNvbnN0IGxhYmVsMSA9IGJ1YmJsZS5lbnRpdHkubGFiZWwuc2xpY2UoMCwgc3BhY2VJbmRleCk7XG4gICAgICAgIGNvbnN0IGxhYmVsMiA9IGJ1YmJsZS5lbnRpdHkubGFiZWwuc2xpY2Uoc3BhY2VJbmRleCwgaW5kZXggKjIpO1xuICAgICAgICAvL2xhYmVsID0gW2J1YmJsZS5lbnRpdHkubGFiZWwuc2xpY2UoMCwgaW5kZXgpLCBcIlxcblwiLCBidWJibGUuZW50aXR5LmxhYmVsLnNsaWNlKGluZGV4KV0uam9pbignJyk7XG5cbiAgICAgICAgdGV4dHMucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwwXCIsXG4gICAgICAgICAgICBsYWJlbDogKGQpID0+IHsgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VGl0bGUpIHJldHVybiBudWxsOyByZXR1cm4gbGFiZWwxIH0sXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG1OdW0gPSAoZC5yYWRpdXMvOSk7XG4gICAgICAgICAgICAgIGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlKSBtTnVtPTA7XG4gICAgICAgICAgICAgIHJldHVybiBkLnktbU51bSAtMjA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDAxXCIsXG4gICAgICAgICAgICBsYWJlbDogKGQpID0+IHsgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VGl0bGUpIHJldHVybiBudWxsOyByZXR1cm4gbGFiZWwyIH0sXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG1OdW0gPSAoZC5yYWRpdXMvOSk7XG4gICAgICAgICAgICAgIGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlKSBtTnVtPTA7XG4gICAgICAgICAgICAgIHJldHVybiBkLnktbU51bTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgIH1cblxuXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRzLnB1c2goe1xuICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDBcIixcbiAgICAgICAgICBsYWJlbDogKGQpID0+IHsgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VGl0bGUpIHJldHVybiBudWxsOyByZXR1cm4gbGFiZWwgfSxcbiAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiB7XG4gICAgICAgICAgICBsZXQgbU51bSA9IChkLnJhZGl1cy85KTtcbiAgICAgICAgICAgIGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlKSBtTnVtPTA7XG4gICAgICAgICAgICByZXR1cm4gZC55LW1OdW07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbGV0IGJ1YmJsZURhdGEgPSB7XG4gICAgICAgIGlkOiBiSWQsXG4gICAgICAgIHRleHRzOiBbXG4gICAgICAgICAgLi4udGV4dHMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMVwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGJ1YmJsZS5jb3VudCB9LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgLy9mb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzMsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJhdy1idWJibGUtbnVtXCJcbiAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB4OiBjV2lkdGgvMis1MCxcbiAgICAgICAgeTogY0hlaWdodC8yKzUwLFxuICAgICAgICBcInJhZGl1c1wiOiBidWJibGVSYWRpdXMsXG4gICAgICAgIGNvbG9yOmJ1YmJsZS5jb2xvcixcbiAgICAgICAgaGFzQ2xvc2VJY29uOiAoIGJ1YmJsZS5zZWxlY3RlZCA/IGJ1YmJsZS5zZWxlY3RlZCA6IGZhbHNlICksXG4gICAgICAgIHBheWxvYWQ6e1xuICAgICAgICAgIGlkOiBiSWRcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIGJ1YmJsZXNEYXRhWydidWJibGVzRGF0YSddLnB1c2goYnViYmxlRGF0YSk7XG4gICAgfSk7XG5cblxuICAgIGJ1YmJsZXNEYXRhWydmb3JjZVNpbXVsYXRpb25EYXRhJ10gPSB7XG4gICAgICB4UHVsbDogY1dpZHRoLzIsXG4gICAgICB4UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIHlQdWxsOiBjSGVpZ2h0LzIsXG4gICAgICB5UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIGNvbGxpc2lvblN0cmVuZ2g6IDAuOTksXG4gICAgICBjb2xsaXNpb25JdGVyYXRpb25zOiAxLFxuICAgICAgdmVsb2NpdHlEZWNheTogMC42NVxuICAgIH1cblxuICAgIGlmKGRhdGEucmVzZXQpIGJ1YmJsZXNEYXRhWydyZXNldCddID0gZGF0YS5yZXNldDtcblxuICAgIGlmKGRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlKSBidWJibGVzRGF0YVsnc2V0VXBkYXRlUmVmZXJlbmNlJ10gPSBkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZTtcbiAgICBpZihkYXRhLnNldEJ1YmJsZUNoYXJ0KSBidWJibGVzRGF0YVsnc2V0QnViYmxlQ2hhcnQnXSA9IGRhdGEuc2V0QnViYmxlQ2hhcnQ7XG5cbiAgICB0aGlzLnNldFdpbmRvd1Jlc2l6ZSgpO1xuXG4gICAgcmV0dXJuIGJ1YmJsZXNEYXRhO1xuICB9XG5cbiAgc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeSggZGF0YTogYW55LCByZXNldCA9IHRydWUgKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBkYXRhLnNvdXJjZTtcbiAgIC8vIGlmICggIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5lbnRpdGllc0RhdGEgKSB7cmV0dXJuOyB9XG4gICAgdGhpcy5hbGxCdWJibGVzID0gW107XG5cbiAgICBpZiAoIGRhdGEuc2VsZWN0ZWRCdWJibGVzICkge1xuICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSBkYXRhLnNlbGVjdGVkQnViYmxlcztcbiAgICB9XG5cbiAgICBpZiggcmVzcG9uc2UuZW50aXRpZXNEYXRhICkge1xuXG4gICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgcmVzcG9uc2UuZW50aXRpZXNEYXRhLmxlbmd0aDsgaSsrICkge1xuXG4gICAgICAgIHRoaXMuYWxsQnViYmxlcy5wdXNoKHtcbiAgICAgICAgICAuLi5yZXNwb25zZS5lbnRpdGllc0RhdGFbaV0sXG4gICAgICAgICAgY29sb3I6IHRoaXMub3B0aW9ucy5jb25maWdLZXlzW3Jlc3BvbnNlLmVudGl0aWVzRGF0YVtpXS5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKV0gPyB0aGlzLm9wdGlvbnMuY29uZmlnS2V5c1tyZXNwb25zZS5lbnRpdGllc0RhdGFbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKFwiIFwiLCBcIi1cIildWydjb2xvciddWydoZXgnXSA6IFwiXCJcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllcy5sZW5ndGg7IGkrKyApe1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb25maWdLZXlzID9cbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY29uZmlnS2V5c1tyZXNwb25zZS5yZWxhdGVkRW50aXRpZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKFwiIFwiLCBcIi1cIildID8gdGhpcy5vcHRpb25zLmNvbmZpZ0tleXNbcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXVsnY29sb3InXVsnaGV4J10gOiBcIlwiIDpcbiAgICAgICAgICBudWxsO1xuICAgICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKCByZXNwb25zZS5yZWxhdGVkRW50aXRpZXNbaV0uZW50aXR5LmlkICksXG4gICAgICAgICAgICAuLi5yZXNwb25zZS5yZWxhdGVkRW50aXRpZXNbaV0sXG4gICAgICAgICAgICBjb2xvcjogY29sb3JcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwID0ge307XG4gICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgIC8vIGQzL3N2ZyBkb2VzIG5vdCBhbGxvdyBOdW1iZXIgYXMgYmVnaW5uaW5nIG9mIElELlxuICAgICAgLy8gZDMvc3ZnIGRvZXMgbm90IGFsbG93ICctJyBhcyBwYXJ0IG9mIElELlxuICAgICAgYnViYmxlLmlkID0gdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKGJ1YmJsZS5lbnRpdHkuaWQpO1xuICAgICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtidWJibGUuaWRdID0gYnViYmxlLmVudGl0eS5pZDtcbiAgICAgIHJldHVybiBidWJibGU7XG4gICAgfSk7XG4gICAgdGhpcy5hbGxCdWJibGVzLmZvckVhY2goIChidWJibGUpID0+IHtcbiAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg7IGkrKyApe1xuICAgICAgICBpZiAoIHRoaXMuc2VsZWN0ZWRCdWJibGVzW2ldLmlkID09PSBidWJibGUuaWQgKSB7XG4gICAgICAgICAgYnViYmxlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYocmVzZXQpIHtcbiAgICAgIHRoaXMudXBkYXRlKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEVudGl0eUlkVG9CdWJibGVJZChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoICFlbnRpdHlJZCApIHsgcmV0dXJuIG51bGw7IH1cbiAgICByZXR1cm4gKCAnQl8nICsgZW50aXR5SWQucmVwbGFjZSgvLS9nLCAnXycpICk7XG4gIH1cblxuICBmaWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKSB7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5hbGxCdWJibGVzLmZpbHRlcihcbiAgICAgIChidWJibGUpID0+IHtcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5mYWNldERhdGEubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgICBpZiAoYnViYmxlLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpID09PSB0aGlzLmZhY2V0RGF0YVtpXS50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuZmFjZXREYXRhW2ldLmVuYWJsZWQgKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiggY291bnQgPiB0aGlzLm9wdGlvbnMubWF4TnVtYmVyICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBvbkJ1YmJsZU1vdXNlRW50ZXIocGF5bG9hZCl7XG4gICAgaWYgKCAhcGF5bG9hZCB8fCAhcGF5bG9hZC5idWJibGUgKSByZXR1cm47XG4gICAgY29uc3QgYnViYmxlSWQgPSBwYXlsb2FkLmJ1YmJsZS5pZDtcbiAgICBsZXQgaG92ZXJFbnRpdHlJZCA9IHRoaXMuZW50aXR5QnViYmxlSWRNYXBbcGF5bG9hZC5idWJibGUuaWRdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxCdWJibGVzLmxlbmd0aDsgaSsrICl7XG4gICAgICBsZXQgYnViYmxlID0gdGhpcy5hbGxCdWJibGVzW2ldO1xuICAgICAgaWYgKCBidWJibGUuZW50aXR5LmlkPT09aG92ZXJFbnRpdHlJZCApe1xuICAgICAgICB0aGlzLmN1cnJlbnRIb3ZlckVudGl0eSA9IGJ1YmJsZS5lbnRpdHk7XG4gICAgICAgIHRoaXMuY3VycmVudEhvdmVyRW50aXR5LmNvdW50ID0gYnViYmxlLmNvdW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodGhpcy5idWJibGVQb3B1cCl7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmhpZGUoKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cCA9IG51bGw7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlLXBvcHVwLW1lbnVcIik7XG4gICAgICBsZXQgdGVtcGxhdGVDbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRlbXBsYXRlQ2xvbmVbJ3N0eWxlJ10uZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwID0gdGhpcy50aXBweShgIyR7YnViYmxlSWR9YCwge1xuICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZUNsb25lLFxuICAgICAgICBhbGxvd0hUTUw6IHRydWUsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICBtYXhXaWR0aDogNTAwLFxuICAgICAgICAvL29uSGlkZGVuOiAoKSA9PiBjb25zb2xlLmxvZygnaGlkZGVuJyksXG4gICAgICB9KVswXTtcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHsgaWYodGhpcy5idWJibGVQb3B1cCkgdGhpcy5idWJibGVQb3B1cC5zaG93KCkgfSAsIDgwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveVRvb2x0aXAoKXtcbiAgICBpZih0aGlzLmJ1YmJsZVBvcHVwKXtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuaGlkZSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvbkJ1YmJsZVRvb2x0aXBDbGljayhzb3VyY2U6c3RyaW5nLCBwYXlsb2FkKXtcbiAgICBzd2l0Y2goc291cmNlKXtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGlmKCFwYXlsb2FkKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJ1YmJsZUlkID0gdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKHBheWxvYWQuZW50aXR5SWQpO1xuICAgICAgICBpZighYnViYmxlSWQpIHJldHVybjtcbiAgICAgICAgbGV0IGJ1YmJsZSA9IG51bGw7XG4gICAgICAgIGlmKHBheWxvYWQuX2J1YmJsZUNoYXJ0KXtcbiAgICAgICAgICBwYXlsb2FkLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKCBiID0+IHtcbiAgICAgICAgICAgIGlmKGIuaWQ9PT1idWJibGVJZCkgYnViYmxlPWI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYoYnViYmxlKSByZXR1cm4gYnViYmxlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQnViYmxlU2VsZWN0ZWQoYnViYmxlKXtcbiAgICBpZihidWJibGUpe1xuICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRCdWJibGVzLmluY2x1ZGVzKGJ1YmJsZSkpe1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg8dGhpcy5tYXhCdWJibGVzU2VsZWN0YWJsZSl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMucHVzaChidWJibGUpO1xuICAgICAgICAgIC8vcmV0dXJuIHRoaXMuZmlsdGVyUmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEJ1YmJsZUZyb21JZChpZCl7XG4gICAgY29uc3QgYnViYmxlSWQgPSB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoaWQpO1xuICAgIGlmKCFidWJibGVJZCkgcmV0dXJuO1xuICAgIGxldCBidWJibGUgPSBudWxsO1xuICAgIGlmKHRoaXMuX2J1YmJsZUNoYXJ0KXtcbiAgICAgIHRoaXMuX2J1YmJsZUNoYXJ0LnNlbGVjdEFsbChgZ2ApLmVhY2goIGIgPT4ge1xuICAgICAgICBpZihiLmlkPT09YnViYmxlSWQpIGJ1YmJsZT1iO1xuICAgICAgfSk7XG4gICAgICBpZihidWJibGUpIHJldHVybiBidWJibGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRCdWJibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQnViYmxlcztcbiAgfVxuXG4gIGdldEFsbEJ1YmJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsQnViYmxlcztcbiAgfVxuXG4gIGdldEVudGl0eUlkTWFwKCkge1xuICAgIHJldHVybiB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwO1xuICB9XG5cbiAgc2V0V2luZG93UmVzaXplKCkge1xuICAgIGlmKCAhdGhpcy53aW5kb3dSZXNpemVTZXQpe1xuICAgICAgZnJvbUV2ZW50KCB3aW5kb3cgLCBcInJlc2l6ZVwiICkucGlwZShkZWJvdW5jZSgoKSA9PiBpbnRlcnZhbCgyMDApKSkuXG4gICAgICBzdWJzY3JpYmUoICgpID0+IHtcbiAgICAgICAgLy8gb25seSByZXNldHMgdGhlIGJ1YmJsZXMgaWYgdGhlIHdpbmRvdydzIHdpZHRoIGhhcyBjaGFuZ2VkXG4gICAgICAgIC8vIChpZiB0aGUgcmVzaXplIG9ubHkgZWZmZWN0cyB0aGUgd2luZG93J3MgaGlnaHQgdGhlbiB0aGUgYnViYmxlIGNoYXJ0XG4gICAgICAgIC8vIGRvZXNuJ3QgZ2V0IHJlc2V0KVxuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5jb250YWluZXJJZCk7XG4gICAgICAgICAgLy9jaGVjayBpZiBlbGVtZW50IGlzIHZpc2libGUgb24gcGFnZVxuICAgICAgICAgIGlmKGNvbnRhaW5lci5vZmZzZXRQYXJlbnQgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICBsZXQgYnViYmxlUGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgcmVzZXQ6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShidWJibGVQYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMud2luZG93UmVzaXplU2V0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=