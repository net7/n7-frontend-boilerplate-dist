/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/bubble-chart.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
import { fromEvent, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
export class AwBubbleChartDS extends DataSource {
    constructor() {
        super(...arguments);
        this.thresholdShowTitle = 50;
        this.thresholdShowValue = 60;
        this.allBubbles = null;
        this.entityBubbleIdMap = {};
        this.selectedBubbles = [];
        this.facetData = null;
        this.bubblePopup = null;
        this.currentHoverEntity = null;
        this._bubbleChart = null;
        this.maxBubblesSelectable = 3;
        this.windowResizeSet = false;
        this.maxBubbleRadius = 100;
        this.minBubbleRadius = 10;
        this.maxBubbleTextRadiusRatio = 6;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!data) {
            return null;
        }
        this.destroyTooltip();
        this.facetData = data.facetData ? data.facetData : [];
        this.tippy = tippy;
        data.bubbles = this.filterBubblesBasedOnFacetsEnabled();
        /** @type {?} */
        let bubbleCointainer = document.getElementById(this.options.containerId);
        /** @type {?} */
        const cWidth = data.width ? data.width : bubbleCointainer.offsetWidth;
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        const cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        const containerSize = cWidth * cHeight;
        /** @type {?} */
        let bubblesData = {
            containerId: this.options.bubbleContainerId,
            containerWidth: cWidth,
            containerHeight: cHeight,
            isForceSimulationEnabled: true,
            maxBubblesSelected: 3
        };
        bubblesData['bubblesData'] = [];
        /** @type {?} */
        let maxBubbleCount = -1;
        /** @type {?} */
        let minBubbleCount = -1;
        /** @type {?} */
        let numOfBubbles = 0;
        /** @type {?} */
        let totalCount = 0;
        /** @type {?} */
        let numOfSelectedBubbles = 0;
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        bubble => {
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
        bubble => {
            /** @type {?} */
            let bId = bubble.id;
            /** @type {?} */
            let bubbleAverage = totalCount / numOfBubbles;
            /** @type {?} */
            let bubblePercentage = (bubble.count - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            //to understand if there is a large difference of count between bubbles
            /** @type {?} */
            let coeff = maxBubbleCount / bubbleAverage;
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
            let bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            if (bubbleRadius > this.maxBubbleRadius) {
                bubbleRadius = this.maxBubbleRadius;
            }
            else if (bubbleRadius < this.minBubbleRadius) {
                bubbleRadius = this.minBubbleRadius;
            }
            //console.log("bubble text " +  bubble.entity.label +" bubble length " +  bubble.entity.label.length + " radius: " + bubbleRadius + " limit: " + this.thresholdShowTitle  )
            /** @type {?} */
            let label = bubble.entity.label;
            /** @type {?} */
            let texts = [];
            // check if text is larger than radius
            if (bubbleRadius / bubble.entity.label.length < this.maxBubbleTextRadiusRatio) {
                /** @type {?} */
                const index = bubbleRadius / this.maxBubbleTextRadiusRatio;
                /** @type {?} */
                const spaceIndex = bubble.entity.label.indexOf(" ", index - 5);
                /** @type {?} */
                const label1 = bubble.entity.label.slice(0, spaceIndex);
                /** @type {?} */
                const label2 = bubble.entity.label.slice(spaceIndex, index * 2);
                //label = [bubble.entity.label.slice(0, index), "\n", bubble.entity.label.slice(index)].join('');
                texts.push({
                    id: bId + "_label0",
                    label: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => { if (d.radius < this.thresholdShowTitle)
                        return null; return label1; }),
                    x_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => d.x),
                    y_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => {
                        /** @type {?} */
                        let mNum = (d.radius / 9);
                        if (d.radius < this.thresholdShowValue)
                            mNum = 0;
                        return d.y - mNum - 20;
                    }),
                    "user_select": "none",
                    fontSize_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => d.radius / 5),
                    color: "white",
                    "classes": ""
                }, {
                    id: bId + "_label01",
                    label: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => { if (d.radius < this.thresholdShowTitle)
                        return null; return label2; }),
                    x_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => d.x),
                    y_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => {
                        /** @type {?} */
                        let mNum = (d.radius / 9);
                        if (d.radius < this.thresholdShowValue)
                            mNum = 0;
                        return d.y - mNum;
                    }),
                    "user_select": "none",
                    fontSize_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => d.radius / 5),
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
                    (d) => { if (d.radius < this.thresholdShowTitle)
                        return null; return label; }),
                    x_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => d.x),
                    y_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => {
                        /** @type {?} */
                        let mNum = (d.radius / 9);
                        if (d.radius < this.thresholdShowValue)
                            mNum = 0;
                        return d.y - mNum;
                    }),
                    "user_select": "none",
                    fontSize_function: (/**
                     * @param {?} d
                     * @return {?}
                     */
                    (d) => d.radius / 5),
                    color: "white",
                    "classes": ""
                });
            }
            /** @type {?} */
            let bubbleData = {
                id: bId,
                texts: [
                    ...texts,
                    {
                        id: bId + "_label1",
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => { if (d.radius < this.thresholdShowValue)
                            return null; return bubble.count; }),
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.x),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.y + (d.radius / 9)),
                        "user_select": "none",
                        //fontSize_function: (d) => d.radius/3,
                        color: "white",
                        "classes": "aw-bubble-num"
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
    }
    /**
     * @param {?} data
     * @param {?=} reset
     * @return {?}
     */
    setAllBubblesFromApolloQuery(data, reset = true) {
        /** @type {?} */
        const response = data.source;
        // if ( !response || !response.entitiesData ) {return; }
        this.allBubbles = [];
        if (data.selectedBubbles) {
            this.selectedBubbles = data.selectedBubbles;
        }
        if (response.entitiesData) {
            for (let i = 0; i < response.entitiesData.length; i++) {
                this.allBubbles.push(Object.assign({}, response.entitiesData[i], { color: this.options.configKeys[response.entitiesData[i].entity.typeOfEntity.replace(" ", "-")] ? this.options.configKeys[response.entitiesData[i].entity.typeOfEntity.replace(" ", "-")]['color']['hex'] : "" }));
            }
        }
        else {
            for (let i = 0; i < response.relatedEntities.length; i++) {
                /** @type {?} */
                const color = this.options.configKeys ?
                    this.options.configKeys[response.relatedEntities[i].entity.typeOfEntity.replace(" ", "-")] ? this.options.configKeys[response.relatedEntities[i].entity.typeOfEntity.replace(" ", "-")]['color']['hex'] : "" :
                    null;
                this.allBubbles.push(Object.assign({ id: this.convertEntityIdToBubbleId(response.relatedEntities[i].entity.id) }, response.relatedEntities[i], { color: color }));
            }
        }
        this.entityBubbleIdMap = {};
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        (bubble) => {
            // d3/svg does not allow Number as beginning of ID.
            // d3/svg does not allow '-' as part of ID.
            bubble.id = this.convertEntityIdToBubbleId(bubble.entity.id);
            this.entityBubbleIdMap[bubble.id] = bubble.entity.id;
            return bubble;
        }));
        this.allBubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        (bubble) => {
            bubble.selected = false;
            for (var i = 0; i < this.selectedBubbles.length; i++) {
                if (this.selectedBubbles[i].id === bubble.id) {
                    bubble.selected = true;
                }
            }
        }));
        if (reset) {
            this.update(data);
        }
    }
    /**
     * @private
     * @param {?} entityId
     * @return {?}
     */
    convertEntityIdToBubbleId(entityId) {
        if (!entityId) {
            return null;
        }
        return ('B_' + entityId.replace(/-/g, '_'));
    }
    /**
     * @return {?}
     */
    filterBubblesBasedOnFacetsEnabled() {
        /** @type {?} */
        var count = 0;
        /** @type {?} */
        let result = this.allBubbles.filter((/**
         * @param {?} bubble
         * @return {?}
         */
        (bubble) => {
            for (var i = 0; i < this.facetData.length; i++) {
                if (bubble.entity.typeOfEntity.replace(/ /g, '-') === this.facetData[i].type.replace(/ /g, '-')) {
                    if (!this.facetData[i].enabled) {
                        return false;
                    }
                }
            }
            if (count > this.options.maxNumber) {
                return false;
            }
            count++;
            return true;
        }));
        return result;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onBubbleMouseEnter(payload) {
        if (!payload || !payload.bubble)
            return;
        /** @type {?} */
        const bubbleId = payload.bubble.id;
        /** @type {?} */
        let hoverEntityId = this.entityBubbleIdMap[payload.bubble.id];
        for (var i = 0; i < this.allBubbles.length; i++) {
            /** @type {?} */
            let bubble = this.allBubbles[i];
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
        () => {
            /** @type {?} */
            let template = document.getElementById("bubble-popup-menu");
            /** @type {?} */
            let templateClone = template.cloneNode(true);
            templateClone['style'].display = "inline-block";
            this.bubblePopup = this.tippy(`#${bubbleId}`, {
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
            () => { if (this.bubblePopup)
                this.bubblePopup.show(); }), 800);
        }));
    }
    /**
     * @return {?}
     */
    destroyTooltip() {
        if (this.bubblePopup) {
            this.bubblePopup.hide();
            this.bubblePopup.destroy();
            this.bubblePopup = null;
        }
    }
    /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    onBubbleTooltipClick(source, payload) {
        switch (source) {
            case 'select':
                if (!payload)
                    return;
                /** @type {?} */
                const bubbleId = this.convertEntityIdToBubbleId(payload.entityId);
                if (!bubbleId)
                    return;
                /** @type {?} */
                let bubble = null;
                if (payload._bubbleChart) {
                    payload._bubbleChart.selectAll(`g`).each((/**
                     * @param {?} b
                     * @return {?}
                     */
                    b => {
                        if (b.id === bubbleId)
                            bubble = b;
                    }));
                    if (bubble)
                        return bubble;
                }
                break;
            default:
                break;
        }
    }
    /**
     * @param {?} bubble
     * @return {?}
     */
    onBubbleSelected(bubble) {
        if (bubble) {
            if (!this.selectedBubbles.includes(bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.selectedBubbles.push(bubble);
                    //return this.filterRequest();
                }
            }
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getBubbleFromId(id) {
        /** @type {?} */
        const bubbleId = this.convertEntityIdToBubbleId(id);
        if (!bubbleId)
            return;
        /** @type {?} */
        let bubble = null;
        if (this._bubbleChart) {
            this._bubbleChart.selectAll(`g`).each((/**
             * @param {?} b
             * @return {?}
             */
            b => {
                if (b.id === bubbleId)
                    bubble = b;
            }));
            if (bubble)
                return bubble;
        }
    }
    /**
     * @return {?}
     */
    getSelectedBubbles() {
        return this.selectedBubbles;
    }
    /**
     * @return {?}
     */
    getAllBubbles() {
        return this.allBubbles;
    }
    /**
     * @return {?}
     */
    getEntityIdMap() {
        return this.entityBubbleIdMap;
    }
    /**
     * @return {?}
     */
    setWindowResize() {
        if (!this.windowResizeSet) {
            fromEvent(window, "resize").pipe(debounce((/**
             * @return {?}
             */
            () => interval(200)))).
                subscribe((/**
             * @return {?}
             */
            () => {
                // only resets the bubbles if the window's width has changed
                // (if the resize only effects the window's hight then the bubble chart
                // doesn't get reset)
                /** @type {?} */
                const container = document.getElementById(this.options.containerId);
                //check if element is visible on page
                if (container.offsetParent != null) {
                    /** @type {?} */
                    let bubblePayload = {
                        width: container.offsetWidth,
                        reset: true
                    };
                    this.update(bubblePayload);
                }
            }));
            this.windowResizeSet = true;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQS9DOztRQUVVLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUMvQix1QkFBa0IsR0FBVSxFQUFFLENBQUM7UUFFL0IsZUFBVSxHQUFVLElBQUksQ0FBQztRQUN6QixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDN0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFVLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFRLElBQUksQ0FBQztRQUN6Qix1QkFBa0IsR0FBUSxJQUFJLENBQUM7UUFDOUIsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIseUJBQW9CLEdBQVUsQ0FBQyxDQUFDO1FBRWhDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLDZCQUF3QixHQUFHLENBQUMsQ0FBQztJQStYdkMsQ0FBQzs7Ozs7O0lBN1hXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLElBQUssQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBRTVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMs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QUFTLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTs7d0JBRTdCLGFBQWEsR0FBRzt3QkFDbEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxXQUFXO3dCQUM1QixLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUM1QjtZQUNILENBQUMsRUFBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDL0I7SUFFSCxDQUFDO0NBRUY7Ozs7OztJQTlZQyw2Q0FBdUM7Ozs7O0lBQ3ZDLDZDQUF1Qzs7SUFDdkMsd0NBQTBCOzs7OztJQUMxQixxQ0FBaUM7Ozs7O0lBQ2pDLDRDQUFvQzs7SUFDcEMsMENBQW1DOzs7OztJQUNuQyxvQ0FBZ0M7Ozs7O0lBQ2hDLHNDQUFnQzs7SUFDaEMsNkNBQXNDOzs7OztJQUN0Qyx1Q0FBaUM7Ozs7O0lBQ2pDLCtDQUF3Qzs7Ozs7SUFDeEMsZ0NBQWM7Ozs7O0lBQ2QsMENBQWdDOzs7OztJQUNoQywwQ0FBOEI7Ozs7O0lBQzlCLDBDQUE2Qjs7Ozs7SUFDN0IsbURBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnREUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByaXZhdGUgdGhyZXNob2xkU2hvd1RpdGxlOm51bWJlciA9IDUwO1xuICBwcml2YXRlIHRocmVzaG9sZFNob3dWYWx1ZTpudW1iZXIgPSA2MDtcbiAgcHVibGljIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSBhbGxCdWJibGVzOiBhbnlbXSA9IG51bGw7XG4gIHByaXZhdGUgZW50aXR5QnViYmxlSWRNYXA6IGFueSA9IHt9O1xuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIGZhY2V0RGF0YTogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGJ1YmJsZVBvcHVwOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgY3VycmVudEhvdmVyRW50aXR5OiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9idWJibGVDaGFydDogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBtYXhCdWJibGVzU2VsZWN0YWJsZTpudW1iZXIgPSAzO1xuICBwcml2YXRlIHRpcHB5O1xuICBwcml2YXRlIHdpbmRvd1Jlc2l6ZVNldCA9IGZhbHNlO1xuICBwcml2YXRlIG1heEJ1YmJsZVJhZGl1cyA9IDEwMDtcbiAgcHJpdmF0ZSBtaW5CdWJibGVSYWRpdXMgPSAxMDtcbiAgcHJpdmF0ZSBtYXhCdWJibGVUZXh0UmFkaXVzUmF0aW8gPSA2O1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgaWYgKCAhZGF0YSApeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgdGhpcy5kZXN0cm95VG9vbHRpcCgpO1xuXG4gICAgdGhpcy5mYWNldERhdGEgPSBkYXRhLmZhY2V0RGF0YSA/IGRhdGEuZmFjZXREYXRhIDogW107XG4gICAgdGhpcy50aXBweSA9IHRpcHB5O1xuXG4gICAgZGF0YS5idWJibGVzID0gdGhpcy5maWx0ZXJCdWJibGVzQmFzZWRPbkZhY2V0c0VuYWJsZWQoKTtcbiAgICBsZXQgYnViYmxlQ29pbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5jb250YWluZXJJZCk7XG4gICAgY29uc3QgY1dpZHRoID0gZGF0YS53aWR0aCA/IGRhdGEud2lkdGggOiBidWJibGVDb2ludGFpbmVyLm9mZnNldFdpZHRoO1xuXG4gICAgLy8gVE9ETzogdGhpbmsgb2YgYSBnb29kIHdheSB0byBwYXNzL2NvbXB1dGUgY0hlaWdodFxuICAgIGNvbnN0IGNIZWlnaHQgPSA3MDA7IC8vIGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IGNXaWR0aCAqIGNIZWlnaHQ7XG5cbiAgICBsZXQgYnViYmxlc0RhdGEgPSB7XG4gICAgICBjb250YWluZXJJZDogdGhpcy5vcHRpb25zLmJ1YmJsZUNvbnRhaW5lcklkLFxuICAgICAgY29udGFpbmVyV2lkdGggOiBjV2lkdGgsXG4gICAgICBjb250YWluZXJIZWlnaHQgOiBjSGVpZ2h0LFxuICAgICAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiB0cnVlLFxuICAgICAgbWF4QnViYmxlc1NlbGVjdGVkOjNcbiAgICB9O1xuXG4gICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10gPSBbXTtcblxuICAgIGxldCBtYXhCdWJibGVDb3VudCA9IC0xO1xuICAgIGxldCBtaW5CdWJibGVDb3VudCA9IC0xO1xuICAgIGxldCBudW1PZkJ1YmJsZXMgPSAwO1xuICAgIGxldCB0b3RhbENvdW50ID0gMDtcbiAgICBsZXQgbnVtT2ZTZWxlY3RlZEJ1YmJsZXMgPSAwO1xuXG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBpZiAoIG1heEJ1YmJsZUNvdW50IDwgYnViYmxlLmNvdW50ICkgbWF4QnViYmxlQ291bnQgPSBidWJibGUuY291bnQ7XG4gICAgICBpZiAoIG1pbkJ1YmJsZUNvdW50IDwgMCB8fCBtaW5CdWJibGVDb3VudD5idWJibGUuY291bnQgKSBtaW5CdWJibGVDb3VudCA9IGJ1YmJsZS5jb3VudDtcbiAgICAgIG51bU9mQnViYmxlcysrO1xuICAgICAgdG90YWxDb3VudCArPSBidWJibGUuY291bnQ7XG4gICAgICBpZihidWJibGUuc2VsZWN0ZWQpIG51bU9mU2VsZWN0ZWRCdWJibGVzKys7XG4gICAgfSk7XG5cbiAgICBkYXRhLmJ1YmJsZXMuZm9yRWFjaCggYnViYmxlID0+IHtcbiAgICAgIGxldCBiSWQgPSBidWJibGUuaWQ7XG5cbiAgICAgIGxldCBidWJibGVBdmVyYWdlID0gIHRvdGFsQ291bnQgLyBudW1PZkJ1YmJsZXM7XG4gICAgICBsZXQgYnViYmxlUGVyY2VudGFnZSA9ICggYnViYmxlLmNvdW50IC0gKG1pbkJ1YmJsZUNvdW50LzMpICkvKCAobWF4QnViYmxlQ291bnQqMykgLSAobWluQnViYmxlQ291bnQvMykgKTtcblxuXG4gICAgICAvL3RvIHVuZGVyc3RhbmQgaWYgdGhlcmUgaXMgYSBsYXJnZSBkaWZmZXJlbmNlIG9mIGNvdW50IGJldHdlZW4gYnViYmxlc1xuICAgICAgbGV0IGNvZWZmID0gbWF4QnViYmxlQ291bnQgLyBidWJibGVBdmVyYWdlO1xuXG4gICAgICAvKiBpZiAoIGNvZWZmID4gMjAgKSB7XG4gICAgICAgIGlmICggYnViYmxlLmNvdW50IC0gY29lZmYgPj0gMCApe1xuICAgICAgICAgIGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIChidWJibGUuY291bnQpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICkvKCAobWF4QnViYmxlQ291bnQqMykgLSAobWluQnViYmxlQ291bnQvMykgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICB9XG4gICAgICAgIGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIChidWJibGUuY291bnQgLSAobWluQnViYmxlQ291bnQvMykpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICkvKCAoKG1heEJ1YmJsZUNvdW50IC0gY29lZmYpICozKSAtIChtaW5CdWJibGVDb3VudC8zKSApXG4gICAgICB9Ki9cblxuICAgICAgLyogSW4gY2FzZSBvZiBmZXcgYnViYmxlcyAqL1xuICAgICAgaWYoIGNvZWZmID4gMSApIHtcbiAgICAgICAgYnViYmxlUGVyY2VudGFnZSA9ICggYnViYmxlLmNvdW50ICogKGNvZWZmLzMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICkvKCAobWF4QnViYmxlQ291bnQqMykgLSAobWluQnViYmxlQ291bnQvMykgKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGJ1YmJsZVJhZGl1cyA9IChNYXRoLmxvZyhjb250YWluZXJTaXplKS8xMCkqKGJ1YmJsZVBlcmNlbnRhZ2UqMykqKDcwLU1hdGguc3FydChudW1PZkJ1YmJsZXMpKTtcbiAgICAgIGlmICggYnViYmxlUmFkaXVzID4gdGhpcy5tYXhCdWJibGVSYWRpdXMgKSB7XG4gICAgICAgIGJ1YmJsZVJhZGl1cyA9IHRoaXMubWF4QnViYmxlUmFkaXVzO1xuICAgICAgfSBlbHNlIGlmICggYnViYmxlUmFkaXVzIDwgdGhpcy5taW5CdWJibGVSYWRpdXMgKSB7XG4gICAgICAgIGJ1YmJsZVJhZGl1cyA9IHRoaXMubWluQnViYmxlUmFkaXVzO1xuICAgICAgfVxuXG4gICAgICAvL2NvbnNvbGUubG9nKFwiYnViYmxlIHRleHQgXCIgKyAgYnViYmxlLmVudGl0eS5sYWJlbCArXCIgYnViYmxlIGxlbmd0aCBcIiArICBidWJibGUuZW50aXR5LmxhYmVsLmxlbmd0aCArIFwiIHJhZGl1czogXCIgKyBidWJibGVSYWRpdXMgKyBcIiBsaW1pdDogXCIgKyB0aGlzLnRocmVzaG9sZFNob3dUaXRsZSAgKVxuICAgICAgbGV0IGxhYmVsID0gYnViYmxlLmVudGl0eS5sYWJlbDtcblxuICAgICAgbGV0IHRleHRzID0gW107XG4gICAgICAvLyBjaGVjayBpZiB0ZXh0IGlzIGxhcmdlciB0aGFuIHJhZGl1c1xuICAgICAgaWYoIGJ1YmJsZVJhZGl1cyAvIGJ1YmJsZS5lbnRpdHkubGFiZWwubGVuZ3RoIDwgdGhpcy5tYXhCdWJibGVUZXh0UmFkaXVzUmF0aW8gKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYnViYmxlUmFkaXVzIC8gdGhpcy5tYXhCdWJibGVUZXh0UmFkaXVzUmF0aW87XG4gICAgICAgIGNvbnN0IHNwYWNlSW5kZXggPSBidWJibGUuZW50aXR5LmxhYmVsLmluZGV4T2YoXCIgXCIsIGluZGV4IC0gNSlcbiAgICAgICAgY29uc3QgbGFiZWwxID0gYnViYmxlLmVudGl0eS5sYWJlbC5zbGljZSgwLCBzcGFjZUluZGV4KTtcbiAgICAgICAgY29uc3QgbGFiZWwyID0gYnViYmxlLmVudGl0eS5sYWJlbC5zbGljZShzcGFjZUluZGV4LCBpbmRleCAqMik7XG4gICAgICAgIC8vbGFiZWwgPSBbYnViYmxlLmVudGl0eS5sYWJlbC5zbGljZSgwLCBpbmRleCksIFwiXFxuXCIsIGJ1YmJsZS5lbnRpdHkubGFiZWwuc2xpY2UoaW5kZXgpXS5qb2luKCcnKTtcblxuICAgICAgICB0ZXh0cy5wdXNoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDBcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dUaXRsZSkgcmV0dXJuIG51bGw7IHJldHVybiBsYWJlbDEgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbU51bSA9IChkLnJhZGl1cy85KTtcbiAgICAgICAgICAgICAgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIG1OdW09MDtcbiAgICAgICAgICAgICAgcmV0dXJuIGQueS1tTnVtIC0yMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMDFcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dUaXRsZSkgcmV0dXJuIG51bGw7IHJldHVybiBsYWJlbDIgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbU51bSA9IChkLnJhZGl1cy85KTtcbiAgICAgICAgICAgICAgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIG1OdW09MDtcbiAgICAgICAgICAgICAgcmV0dXJuIGQueS1tTnVtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dHMucHVzaCh7XG4gICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMFwiLFxuICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dUaXRsZSkgcmV0dXJuIG51bGw7IHJldHVybiBsYWJlbCB9LFxuICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IHtcbiAgICAgICAgICAgIGxldCBtTnVtID0gKGQucmFkaXVzLzkpO1xuICAgICAgICAgICAgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIG1OdW09MDtcbiAgICAgICAgICAgIHJldHVybiBkLnktbU51bTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBsZXQgYnViYmxlRGF0YSA9IHtcbiAgICAgICAgaWQ6IGJJZCxcbiAgICAgICAgdGV4dHM6IFtcbiAgICAgICAgICAuLi50ZXh0cyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwxXCIsXG4gICAgICAgICAgICBsYWJlbDogKGQpID0+IHsgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIHJldHVybiBudWxsOyByZXR1cm4gYnViYmxlLmNvdW50IH0sXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICAvL2ZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvMyxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcImF3LWJ1YmJsZS1udW1cIlxuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHg6IGNXaWR0aC8yKzUwLFxuICAgICAgICB5OiBjSGVpZ2h0LzIrNTAsXG4gICAgICAgIFwicmFkaXVzXCI6IGJ1YmJsZVJhZGl1cyxcbiAgICAgICAgY29sb3I6YnViYmxlLmNvbG9yLFxuICAgICAgICBoYXNDbG9zZUljb246ICggYnViYmxlLnNlbGVjdGVkID8gYnViYmxlLnNlbGVjdGVkIDogZmFsc2UgKSxcbiAgICAgICAgcGF5bG9hZDp7XG4gICAgICAgICAgaWQ6IGJJZFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10ucHVzaChidWJibGVEYXRhKTtcbiAgICB9KTtcblxuXG4gICAgYnViYmxlc0RhdGFbJ2ZvcmNlU2ltdWxhdGlvbkRhdGEnXSA9IHtcbiAgICAgIHhQdWxsOiBjV2lkdGgvMixcbiAgICAgIHhQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgeVB1bGw6IGNIZWlnaHQvMixcbiAgICAgIHlQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgY29sbGlzaW9uU3RyZW5naDogMC45OSxcbiAgICAgIGNvbGxpc2lvbkl0ZXJhdGlvbnM6IDEsXG4gICAgICB2ZWxvY2l0eURlY2F5OiAwLjY1XG4gICAgfVxuXG4gICAgaWYoZGF0YS5yZXNldCkgYnViYmxlc0RhdGFbJ3Jlc2V0J10gPSBkYXRhLnJlc2V0O1xuXG4gICAgaWYoZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UpIGJ1YmJsZXNEYXRhWydzZXRVcGRhdGVSZWZlcmVuY2UnXSA9IGRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlO1xuICAgIGlmKGRhdGEuc2V0QnViYmxlQ2hhcnQpIGJ1YmJsZXNEYXRhWydzZXRCdWJibGVDaGFydCddID0gZGF0YS5zZXRCdWJibGVDaGFydDtcblxuICAgIHRoaXMuc2V0V2luZG93UmVzaXplKCk7XG5cbiAgICByZXR1cm4gYnViYmxlc0RhdGE7XG4gIH1cblxuICBzZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KCBkYXRhOiBhbnksIHJlc2V0ID0gdHJ1ZSApIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGRhdGEuc291cmNlO1xuICAgLy8gaWYgKCAhcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHtyZXR1cm47IH1cbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBbXTtcblxuICAgIGlmICggZGF0YS5zZWxlY3RlZEJ1YmJsZXMgKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IGRhdGEuc2VsZWN0ZWRCdWJibGVzO1xuICAgIH1cblxuICAgIGlmKCByZXNwb25zZS5lbnRpdGllc0RhdGEgKSB7XG5cbiAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCByZXNwb25zZS5lbnRpdGllc0RhdGEubGVuZ3RoOyBpKysgKSB7XG5cbiAgICAgICAgdGhpcy5hbGxCdWJibGVzLnB1c2goe1xuICAgICAgICAgIC4uLnJlc3BvbnNlLmVudGl0aWVzRGF0YVtpXSxcbiAgICAgICAgICBjb2xvcjogdGhpcy5vcHRpb25zLmNvbmZpZ0tleXNbcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXSA/IHRoaXMub3B0aW9ucy5jb25maWdLZXlzW3Jlc3BvbnNlLmVudGl0aWVzRGF0YVtpXS5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKV1bJ2NvbG9yJ11bJ2hleCddIDogXCJcIlxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzLmxlbmd0aDsgaSsrICl7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbmZpZ0tleXMgP1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5jb25maWdLZXlzW3Jlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKV0gPyB0aGlzLm9wdGlvbnMuY29uZmlnS2V5c1tyZXNwb25zZS5yZWxhdGVkRW50aXRpZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKFwiIFwiLCBcIi1cIildWydjb2xvciddWydoZXgnXSA6IFwiXCIgOlxuICAgICAgICAgIG51bGw7XG4gICAgICAgIHRoaXMuYWxsQnViYmxlcy5wdXNoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoIHJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXS5lbnRpdHkuaWQgKSxcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXSxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW50aXR5QnViYmxlSWRNYXAgPSB7fTtcbiAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgLy8gZDMvc3ZnIGRvZXMgbm90IGFsbG93IE51bWJlciBhcyBiZWdpbm5pbmcgb2YgSUQuXG4gICAgICAvLyBkMy9zdmcgZG9lcyBub3QgYWxsb3cgJy0nIGFzIHBhcnQgb2YgSUQuXG4gICAgICBidWJibGUuaWQgPSB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoYnViYmxlLmVudGl0eS5pZCk7XG4gICAgICB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW2J1YmJsZS5pZF0gPSBidWJibGUuZW50aXR5LmlkO1xuICAgICAgcmV0dXJuIGJ1YmJsZTtcbiAgICB9KTtcbiAgICB0aGlzLmFsbEJ1YmJsZXMuZm9yRWFjaCggKGJ1YmJsZSkgPT4ge1xuICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICBmb3IoIHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aDsgaSsrICl7XG4gICAgICAgIGlmICggdGhpcy5zZWxlY3RlZEJ1YmJsZXNbaV0uaWQgPT09IGJ1YmJsZS5pZCApIHtcbiAgICAgICAgICBidWJibGUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZihyZXNldCkge1xuICAgICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICggIWVudGl0eUlkICkgeyByZXR1cm4gbnVsbDsgfVxuICAgIHJldHVybiAoICdCXycgKyBlbnRpdHlJZC5yZXBsYWNlKC8tL2csICdfJykgKTtcbiAgfVxuXG4gIGZpbHRlckJ1YmJsZXNCYXNlZE9uRmFjZXRzRW5hYmxlZCgpIHtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmFsbEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgKGJ1YmJsZSkgPT4ge1xuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmZhY2V0RGF0YS5sZW5ndGg7IGkrKyApe1xuICAgICAgICAgIGlmIChidWJibGUuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykgPT09IHRoaXMuZmFjZXREYXRhW2ldLnR5cGUucmVwbGFjZSgvIC9nLCAnLScpICkge1xuICAgICAgICAgICAgaWYgKCAhdGhpcy5mYWNldERhdGFbaV0uZW5hYmxlZCApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKCBjb3VudCA+IHRoaXMub3B0aW9ucy5tYXhOdW1iZXIgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG9uQnViYmxlTW91c2VFbnRlcihwYXlsb2FkKXtcbiAgICBpZiAoICFwYXlsb2FkIHx8ICFwYXlsb2FkLmJ1YmJsZSApIHJldHVybjtcbiAgICBjb25zdCBidWJibGVJZCA9IHBheWxvYWQuYnViYmxlLmlkO1xuICAgIGxldCBob3ZlckVudGl0eUlkID0gdGhpcy5lbnRpdHlCdWJibGVJZE1hcFtwYXlsb2FkLmJ1YmJsZS5pZF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoOyBpKysgKXtcbiAgICAgIGxldCBidWJibGUgPSB0aGlzLmFsbEJ1YmJsZXNbaV07XG4gICAgICBpZiAoIGJ1YmJsZS5lbnRpdHkuaWQ9PT1ob3ZlckVudGl0eUlkICl7XG4gICAgICAgIHRoaXMuY3VycmVudEhvdmVyRW50aXR5ID0gYnViYmxlLmVudGl0eTtcbiAgICAgICAgdGhpcy5jdXJyZW50SG92ZXJFbnRpdHkuY291bnQgPSBidWJibGUuY291bnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZih0aGlzLmJ1YmJsZVBvcHVwKXtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuaGlkZSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwID0gbnVsbDtcbiAgICB9XG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWJibGUtcG9wdXAtbWVudVwiKTtcbiAgICAgIGxldCB0ZW1wbGF0ZUNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdGVtcGxhdGVDbG9uZVsnc3R5bGUnXS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAgPSB0aGlzLnRpcHB5KGAjJHtidWJibGVJZH1gLCB7XG4gICAgICAgIGNvbnRlbnQ6IHRlbXBsYXRlQ2xvbmUsXG4gICAgICAgIGFsbG93SFRNTDogdHJ1ZSxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgIG1heFdpZHRoOiA1MDAsXG4gICAgICAgIC8vb25IaWRkZW46ICgpID0+IGNvbnNvbGUubG9nKCdoaWRkZW4nKSxcbiAgICAgIH0pWzBdO1xuICAgICAgc2V0VGltZW91dCggKCkgPT4geyBpZih0aGlzLmJ1YmJsZVBvcHVwKSB0aGlzLmJ1YmJsZVBvcHVwLnNob3coKSB9ICwgODAwICk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95VG9vbHRpcCgpe1xuICAgIGlmKHRoaXMuYnViYmxlUG9wdXApe1xuICAgICAgdGhpcy5idWJibGVQb3B1cC5oaWRlKCk7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uQnViYmxlVG9vbHRpcENsaWNrKHNvdXJjZTpzdHJpbmcsIHBheWxvYWQpe1xuICAgIHN3aXRjaChzb3VyY2Upe1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgaWYoIXBheWxvYWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgYnViYmxlSWQgPSB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQocGF5bG9hZC5lbnRpdHlJZCk7XG4gICAgICAgIGlmKCFidWJibGVJZCkgcmV0dXJuO1xuICAgICAgICBsZXQgYnViYmxlID0gbnVsbDtcbiAgICAgICAgaWYocGF5bG9hZC5fYnViYmxlQ2hhcnQpe1xuICAgICAgICAgIHBheWxvYWQuX2J1YmJsZUNoYXJ0LnNlbGVjdEFsbChgZ2ApLmVhY2goIGIgPT4ge1xuICAgICAgICAgICAgaWYoYi5pZD09PWJ1YmJsZUlkKSBidWJibGU9YjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZihidWJibGUpIHJldHVybiBidWJibGU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25CdWJibGVTZWxlY3RlZChidWJibGUpe1xuICAgIGlmKGJ1YmJsZSl7XG4gICAgICBpZighdGhpcy5zZWxlY3RlZEJ1YmJsZXMuaW5jbHVkZXMoYnViYmxlKSl7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aDx0aGlzLm1heEJ1YmJsZXNTZWxlY3RhYmxlKXtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcy5wdXNoKGJ1YmJsZSk7XG4gICAgICAgICAgLy9yZXR1cm4gdGhpcy5maWx0ZXJSZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QnViYmxlRnJvbUlkKGlkKXtcbiAgICBjb25zdCBidWJibGVJZCA9IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZChpZCk7XG4gICAgaWYoIWJ1YmJsZUlkKSByZXR1cm47XG4gICAgbGV0IGJ1YmJsZSA9IG51bGw7XG4gICAgaWYodGhpcy5fYnViYmxlQ2hhcnQpe1xuICAgICAgdGhpcy5fYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGBnYCkuZWFjaCggYiA9PiB7XG4gICAgICAgIGlmKGIuaWQ9PT1idWJibGVJZCkgYnViYmxlPWI7XG4gICAgICB9KTtcbiAgICAgIGlmKGJ1YmJsZSkgcmV0dXJuIGJ1YmJsZTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZEJ1YmJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRCdWJibGVzO1xuICB9XG5cbiAgZ2V0QWxsQnViYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxCdWJibGVzO1xuICB9XG5cbiAgZ2V0RW50aXR5SWRNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50aXR5QnViYmxlSWRNYXA7XG4gIH1cblxuICBzZXRXaW5kb3dSZXNpemUoKSB7XG4gICAgaWYoICF0aGlzLndpbmRvd1Jlc2l6ZVNldCl7XG4gICAgICBmcm9tRXZlbnQoIHdpbmRvdyAsIFwicmVzaXplXCIgKS5waXBlKGRlYm91bmNlKCgpID0+IGludGVydmFsKDIwMCkpKS5cbiAgICAgIHN1YnNjcmliZSggKCkgPT4ge1xuICAgICAgICAvLyBvbmx5IHJlc2V0cyB0aGUgYnViYmxlcyBpZiB0aGUgd2luZG93J3Mgd2lkdGggaGFzIGNoYW5nZWRcbiAgICAgICAgLy8gKGlmIHRoZSByZXNpemUgb25seSBlZmZlY3RzIHRoZSB3aW5kb3cncyBoaWdodCB0aGVuIHRoZSBidWJibGUgY2hhcnRcbiAgICAgICAgLy8gZG9lc24ndCBnZXQgcmVzZXQpXG4gICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLmNvbnRhaW5lcklkKTtcbiAgICAgICAgICAvL2NoZWNrIGlmIGVsZW1lbnQgaXMgdmlzaWJsZSBvbiBwYWdlXG4gICAgICAgICAgaWYoY29udGFpbmVyLm9mZnNldFBhcmVudCAhPSBudWxsKSB7XG5cbiAgICAgICAgICAgIGxldCBidWJibGVQYXlsb2FkID0ge1xuICAgICAgICAgICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgICByZXNldDogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGJ1YmJsZVBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy53aW5kb3dSZXNpemVTZXQgPSB0cnVlO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==