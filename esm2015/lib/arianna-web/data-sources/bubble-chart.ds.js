/**
 * @fileoverview added by tsickle
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
                if (bubble.entity.typeOfEntity === this.facetData[i].type) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQS9DOztRQUVVLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUMvQix1QkFBa0IsR0FBVSxFQUFFLENBQUM7UUFFL0IsZUFBVSxHQUFVLElBQUksQ0FBQztRQUN6QixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDN0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFVLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFRLElBQUksQ0FBQztRQUN6Qix1QkFBa0IsR0FBUSxJQUFJLENBQUM7UUFDOUIsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIseUJBQW9CLEdBQVUsQ0FBQyxDQUFDO1FBRWhDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLDZCQUF3QixHQUFHLENBQUMsQ0FBQztJQStYdkMsQ0FBQzs7Ozs7O0lBN1hXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLElBQUssQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBRTVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMs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QUFDLFdBQVc7d0JBQzVCLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQzVCO1lBQ0gsQ0FBQyxFQUFDLENBQUE7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUMvQjtJQUVILENBQUM7Q0FFRjs7Ozs7O0lBOVlDLDZDQUF1Qzs7Ozs7SUFDdkMsNkNBQXVDOztJQUN2Qyx3Q0FBMEI7Ozs7O0lBQzFCLHFDQUFpQzs7Ozs7SUFDakMsNENBQW9DOztJQUNwQywwQ0FBbUM7Ozs7O0lBQ25DLG9DQUFnQzs7Ozs7SUFDaEMsc0NBQWdDOztJQUNoQyw2Q0FBc0M7Ozs7O0lBQ3RDLHVDQUFpQzs7Ozs7SUFDakMsK0NBQXdDOzs7OztJQUN4QyxnQ0FBYzs7Ozs7SUFDZCwwQ0FBZ0M7Ozs7O0lBQ2hDLDBDQUE4Qjs7Ozs7SUFDOUIsMENBQTZCOzs7OztJQUM3QixtREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQlVCQkxFQ0hBUlRfTU9DSyB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VGl0bGU6bnVtYmVyID0gNTA7XG4gIHByaXZhdGUgdGhyZXNob2xkU2hvd1ZhbHVlOm51bWJlciA9IDYwO1xuICBwdWJsaWMgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIGFsbEJ1YmJsZXM6IGFueVtdID0gbnVsbDtcbiAgcHJpdmF0ZSBlbnRpdHlCdWJibGVJZE1hcDogYW55ID0ge307XG4gIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZXM6IGFueVtdID0gW107XG4gIHByaXZhdGUgZmFjZXREYXRhOiBhbnlbXSA9IG51bGw7XG4gIHByaXZhdGUgYnViYmxlUG9wdXA6IGFueSA9IG51bGw7XG4gIHB1YmxpYyBjdXJyZW50SG92ZXJFbnRpdHk6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2J1YmJsZUNoYXJ0OiBhbnkgPSBudWxsO1xuICBwcml2YXRlIG1heEJ1YmJsZXNTZWxlY3RhYmxlOm51bWJlciA9IDM7XG4gIHByaXZhdGUgdGlwcHk7XG4gIHByaXZhdGUgd2luZG93UmVzaXplU2V0ID0gZmFsc2U7XG4gIHByaXZhdGUgbWF4QnViYmxlUmFkaXVzID0gMTAwO1xuICBwcml2YXRlIG1pbkJ1YmJsZVJhZGl1cyA9IDEwO1xuICBwcml2YXRlIG1heEJ1YmJsZVRleHRSYWRpdXNSYXRpbyA9IDY7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBpZiAoICFkYXRhICl7IHJldHVybiBudWxsOyB9XG5cbiAgICB0aGlzLmRlc3Ryb3lUb29sdGlwKCk7XG5cbiAgICB0aGlzLmZhY2V0RGF0YSA9IGRhdGEuZmFjZXREYXRhID8gZGF0YS5mYWNldERhdGEgOiBbXTtcbiAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XG5cbiAgICBkYXRhLmJ1YmJsZXMgPSB0aGlzLmZpbHRlckJ1YmJsZXNCYXNlZE9uRmFjZXRzRW5hYmxlZCgpO1xuICAgIGxldCBidWJibGVDb2ludGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLmNvbnRhaW5lcklkKTtcbiAgICBjb25zdCBjV2lkdGggPSBkYXRhLndpZHRoID8gZGF0YS53aWR0aCA6IGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAvLyBUT0RPOiB0aGluayBvZiBhIGdvb2Qgd2F5IHRvIHBhc3MvY29tcHV0ZSBjSGVpZ2h0XG4gICAgY29uc3QgY0hlaWdodCA9IDcwMDsgLy8gYnViYmxlQ29pbnRhaW5lci5vZmZzZXRIZWlnaHRcbiAgICBjb25zdCBjb250YWluZXJTaXplID0gY1dpZHRoICogY0hlaWdodDtcblxuICAgIGxldCBidWJibGVzRGF0YSA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiB0aGlzLm9wdGlvbnMuYnViYmxlQ29udGFpbmVySWQsXG4gICAgICBjb250YWluZXJXaWR0aCA6IGNXaWR0aCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCA6IGNIZWlnaHQsXG4gICAgICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgICBtYXhCdWJibGVzU2VsZWN0ZWQ6M1xuICAgIH07XG5cbiAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXSA9IFtdO1xuXG4gICAgbGV0IG1heEJ1YmJsZUNvdW50ID0gLTE7XG4gICAgbGV0IG1pbkJ1YmJsZUNvdW50ID0gLTE7XG4gICAgbGV0IG51bU9mQnViYmxlcyA9IDA7XG4gICAgbGV0IHRvdGFsQ291bnQgPSAwO1xuICAgIGxldCBudW1PZlNlbGVjdGVkQnViYmxlcyA9IDA7XG5cbiAgICBkYXRhLmJ1YmJsZXMuZm9yRWFjaCggYnViYmxlID0+IHtcbiAgICAgIGlmICggbWF4QnViYmxlQ291bnQgPCBidWJibGUuY291bnQgKSBtYXhCdWJibGVDb3VudCA9IGJ1YmJsZS5jb3VudDtcbiAgICAgIGlmICggbWluQnViYmxlQ291bnQgPCAwIHx8IG1pbkJ1YmJsZUNvdW50PmJ1YmJsZS5jb3VudCApIG1pbkJ1YmJsZUNvdW50ID0gYnViYmxlLmNvdW50O1xuICAgICAgbnVtT2ZCdWJibGVzKys7XG4gICAgICB0b3RhbENvdW50ICs9IGJ1YmJsZS5jb3VudDtcbiAgICAgIGlmKGJ1YmJsZS5zZWxlY3RlZCkgbnVtT2ZTZWxlY3RlZEJ1YmJsZXMrKztcbiAgICB9KTtcblxuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgbGV0IGJJZCA9IGJ1YmJsZS5pZDtcblxuICAgICAgbGV0IGJ1YmJsZUF2ZXJhZ2UgPSAgdG90YWxDb3VudCAvIG51bU9mQnViYmxlcztcbiAgICAgIGxldCBidWJibGVQZXJjZW50YWdlID0gKCBidWJibGUuY291bnQgLSAobWluQnViYmxlQ291bnQvMykgKS8oIChtYXhCdWJibGVDb3VudCozKSAtIChtaW5CdWJibGVDb3VudC8zKSApO1xuXG5cbiAgICAgIC8vdG8gdW5kZXJzdGFuZCBpZiB0aGVyZSBpcyBhIGxhcmdlIGRpZmZlcmVuY2Ugb2YgY291bnQgYmV0d2VlbiBidWJibGVzXG4gICAgICBsZXQgY29lZmYgPSBtYXhCdWJibGVDb3VudCAvIGJ1YmJsZUF2ZXJhZ2U7XG5cbiAgICAgIC8qIGlmICggY29lZmYgPiAyMCApIHtcbiAgICAgICAgaWYgKCBidWJibGUuY291bnQgLSBjb2VmZiA+PSAwICl7XG4gICAgICAgICAgYnViYmxlUGVyY2VudGFnZSA9ICggKGJ1YmJsZS5jb3VudCkgLSAobWluQnViYmxlQ291bnQvMykgKS8oIChtYXhCdWJibGVDb3VudCozKSAtIChtaW5CdWJibGVDb3VudC8zKSApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIH1cbiAgICAgICAgYnViYmxlUGVyY2VudGFnZSA9ICggKGJ1YmJsZS5jb3VudCAtIChtaW5CdWJibGVDb3VudC8zKSkgLSAobWluQnViYmxlQ291bnQvMykgKS8oICgobWF4QnViYmxlQ291bnQgLSBjb2VmZikgKjMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpIClcbiAgICAgIH0qL1xuXG4gICAgICAvKiBJbiBjYXNlIG9mIGZldyBidWJibGVzICovXG4gICAgICBpZiggY29lZmYgPiAxICkge1xuICAgICAgICBidWJibGVQZXJjZW50YWdlID0gKCBidWJibGUuY291bnQgKiAoY29lZmYvMykgLSAobWluQnViYmxlQ291bnQvMykgKS8oIChtYXhCdWJibGVDb3VudCozKSAtIChtaW5CdWJibGVDb3VudC8zKSApO1xuICAgICAgfVxuXG4gICAgICBsZXQgYnViYmxlUmFkaXVzID0gKE1hdGgubG9nKGNvbnRhaW5lclNpemUpLzEwKSooYnViYmxlUGVyY2VudGFnZSozKSooNzAtTWF0aC5zcXJ0KG51bU9mQnViYmxlcykpO1xuICAgICAgaWYgKCBidWJibGVSYWRpdXMgPiB0aGlzLm1heEJ1YmJsZVJhZGl1cyApIHtcbiAgICAgICAgYnViYmxlUmFkaXVzID0gdGhpcy5tYXhCdWJibGVSYWRpdXM7XG4gICAgICB9IGVsc2UgaWYgKCBidWJibGVSYWRpdXMgPCB0aGlzLm1pbkJ1YmJsZVJhZGl1cyApIHtcbiAgICAgICAgYnViYmxlUmFkaXVzID0gdGhpcy5taW5CdWJibGVSYWRpdXM7XG4gICAgICB9XG5cbiAgICAgIC8vY29uc29sZS5sb2coXCJidWJibGUgdGV4dCBcIiArICBidWJibGUuZW50aXR5LmxhYmVsICtcIiBidWJibGUgbGVuZ3RoIFwiICsgIGJ1YmJsZS5lbnRpdHkubGFiZWwubGVuZ3RoICsgXCIgcmFkaXVzOiBcIiArIGJ1YmJsZVJhZGl1cyArIFwiIGxpbWl0OiBcIiArIHRoaXMudGhyZXNob2xkU2hvd1RpdGxlICApXG4gICAgICBsZXQgbGFiZWwgPSBidWJibGUuZW50aXR5LmxhYmVsO1xuXG4gICAgICBsZXQgdGV4dHMgPSBbXTtcbiAgICAgIC8vIGNoZWNrIGlmIHRleHQgaXMgbGFyZ2VyIHRoYW4gcmFkaXVzXG4gICAgICBpZiggYnViYmxlUmFkaXVzIC8gYnViYmxlLmVudGl0eS5sYWJlbC5sZW5ndGggPCB0aGlzLm1heEJ1YmJsZVRleHRSYWRpdXNSYXRpbyApIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBidWJibGVSYWRpdXMgLyB0aGlzLm1heEJ1YmJsZVRleHRSYWRpdXNSYXRpbztcbiAgICAgICAgY29uc3Qgc3BhY2VJbmRleCA9IGJ1YmJsZS5lbnRpdHkubGFiZWwuaW5kZXhPZihcIiBcIiwgaW5kZXggLSA1KVxuICAgICAgICBjb25zdCBsYWJlbDEgPSBidWJibGUuZW50aXR5LmxhYmVsLnNsaWNlKDAsIHNwYWNlSW5kZXgpO1xuICAgICAgICBjb25zdCBsYWJlbDIgPSBidWJibGUuZW50aXR5LmxhYmVsLnNsaWNlKHNwYWNlSW5kZXgsIGluZGV4ICoyKTtcbiAgICAgICAgLy9sYWJlbCA9IFtidWJibGUuZW50aXR5LmxhYmVsLnNsaWNlKDAsIGluZGV4KSwgXCJcXG5cIiwgYnViYmxlLmVudGl0eS5sYWJlbC5zbGljZShpbmRleCldLmpvaW4oJycpO1xuXG4gICAgICAgIHRleHRzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMFwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1RpdGxlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGxhYmVsMSB9LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBtTnVtID0gKGQucmFkaXVzLzkpO1xuICAgICAgICAgICAgICBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgbU51bT0wO1xuICAgICAgICAgICAgICByZXR1cm4gZC55LW1OdW0gLTIwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwwMVwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1RpdGxlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGxhYmVsMiB9LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBtTnVtID0gKGQucmFkaXVzLzkpO1xuICAgICAgICAgICAgICBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgbU51bT0wO1xuICAgICAgICAgICAgICByZXR1cm4gZC55LW1OdW07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICB9XG5cblxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0cy5wdXNoKHtcbiAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwwXCIsXG4gICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1RpdGxlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGxhYmVsIH0sXG4gICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1OdW0gPSAoZC5yYWRpdXMvOSk7XG4gICAgICAgICAgICBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgbU51bT0wO1xuICAgICAgICAgICAgcmV0dXJuIGQueS1tTnVtO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBidWJibGVEYXRhID0ge1xuICAgICAgICBpZDogYklkLFxuICAgICAgICB0ZXh0czogW1xuICAgICAgICAgIC4uLnRleHRzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDFcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgcmV0dXJuIG51bGw7IHJldHVybiBidWJibGUuY291bnQgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIC8vZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy8zLFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiYXctYnViYmxlLW51bVwiXG4gICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgeDogY1dpZHRoLzIrNTAsXG4gICAgICAgIHk6IGNIZWlnaHQvMis1MCxcbiAgICAgICAgXCJyYWRpdXNcIjogYnViYmxlUmFkaXVzLFxuICAgICAgICBjb2xvcjpidWJibGUuY29sb3IsXG4gICAgICAgIGhhc0Nsb3NlSWNvbjogKCBidWJibGUuc2VsZWN0ZWQgPyBidWJibGUuc2VsZWN0ZWQgOiBmYWxzZSApLFxuICAgICAgICBwYXlsb2FkOntcbiAgICAgICAgICBpZDogYklkXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXS5wdXNoKGJ1YmJsZURhdGEpO1xuICAgIH0pO1xuXG5cbiAgICBidWJibGVzRGF0YVsnZm9yY2VTaW11bGF0aW9uRGF0YSddID0ge1xuICAgICAgeFB1bGw6IGNXaWR0aC8yLFxuICAgICAgeFB1bGxTdHJlbmd0aDogLTAuMDEsXG4gICAgICB5UHVsbDogY0hlaWdodC8yLFxuICAgICAgeVB1bGxTdHJlbmd0aDogLTAuMDEsXG4gICAgICBjb2xsaXNpb25TdHJlbmdoOiAwLjk5LFxuICAgICAgY29sbGlzaW9uSXRlcmF0aW9uczogMSxcbiAgICAgIHZlbG9jaXR5RGVjYXk6IDAuNjVcbiAgICB9XG5cbiAgICBpZihkYXRhLnJlc2V0KSBidWJibGVzRGF0YVsncmVzZXQnXSA9IGRhdGEucmVzZXQ7XG5cbiAgICBpZihkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSkgYnViYmxlc0RhdGFbJ3NldFVwZGF0ZVJlZmVyZW5jZSddID0gZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2U7XG4gICAgaWYoZGF0YS5zZXRCdWJibGVDaGFydCkgYnViYmxlc0RhdGFbJ3NldEJ1YmJsZUNoYXJ0J10gPSBkYXRhLnNldEJ1YmJsZUNoYXJ0O1xuXG4gICAgdGhpcy5zZXRXaW5kb3dSZXNpemUoKTtcblxuICAgIHJldHVybiBidWJibGVzRGF0YTtcbiAgfVxuXG4gIHNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkoIGRhdGE6IGFueSwgcmVzZXQgPSB0cnVlICkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gZGF0YS5zb3VyY2U7XG4gICAvLyBpZiAoICFyZXNwb25zZSB8fCAhcmVzcG9uc2UuZW50aXRpZXNEYXRhICkge3JldHVybjsgfVxuICAgIHRoaXMuYWxsQnViYmxlcyA9IFtdO1xuXG4gICAgaWYgKCBkYXRhLnNlbGVjdGVkQnViYmxlcyApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gZGF0YS5zZWxlY3RlZEJ1YmJsZXM7XG4gICAgfVxuXG4gICAgaWYoIHJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHtcblxuICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IHJlc3BvbnNlLmVudGl0aWVzRGF0YS5sZW5ndGg7IGkrKyApIHtcblxuICAgICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaCh7XG4gICAgICAgICAgLi4ucmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLm9wdGlvbnMuY29uZmlnS2V5c1tyZXNwb25zZS5lbnRpdGllc0RhdGFbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKFwiIFwiLCBcIi1cIildID8gdGhpcy5vcHRpb25zLmNvbmZpZ0tleXNbcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXVsnY29sb3InXVsnaGV4J10gOiBcIlwiXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29uZmlnS2V5cyA/XG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNvbmZpZ0tleXNbcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXSA/IHRoaXMub3B0aW9ucy5jb25maWdLZXlzW3Jlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKV1bJ2NvbG9yJ11bJ2hleCddIDogXCJcIiA6XG4gICAgICAgICAgbnVsbDtcbiAgICAgICAgdGhpcy5hbGxCdWJibGVzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZCggcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzW2ldLmVudGl0eS5pZCApLFxuICAgICAgICAgICAgLi4ucmVzcG9uc2UucmVsYXRlZEVudGl0aWVzW2ldLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcCA9IHt9O1xuICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICAvLyBkMy9zdmcgZG9lcyBub3QgYWxsb3cgTnVtYmVyIGFzIGJlZ2lubmluZyBvZiBJRC5cbiAgICAgIC8vIGQzL3N2ZyBkb2VzIG5vdCBhbGxvdyAnLScgYXMgcGFydCBvZiBJRC5cbiAgICAgIGJ1YmJsZS5pZCA9IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZChidWJibGUuZW50aXR5LmlkKTtcbiAgICAgIHRoaXMuZW50aXR5QnViYmxlSWRNYXBbYnViYmxlLmlkXSA9IGJ1YmJsZS5lbnRpdHkuaWQ7XG4gICAgICByZXR1cm4gYnViYmxlO1xuICAgIH0pO1xuICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICBidWJibGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgaWYgKCB0aGlzLnNlbGVjdGVkQnViYmxlc1tpXS5pZCA9PT0gYnViYmxlLmlkICkge1xuICAgICAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKHJlc2V0KSB7XG4gICAgICB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCAhZW50aXR5SWQgKSB7IHJldHVybiBudWxsOyB9XG4gICAgcmV0dXJuICggJ0JfJyArIGVudGl0eUlkLnJlcGxhY2UoLy0vZywgJ18nKSApO1xuICB9XG5cbiAgZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYWxsQnViYmxlcy5maWx0ZXIoXG4gICAgICAoYnViYmxlKSA9PiB7XG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuZmFjZXREYXRhLmxlbmd0aDsgaSsrICl7XG4gICAgICAgICAgaWYgKCBidWJibGUuZW50aXR5LnR5cGVPZkVudGl0eSA9PT0gdGhpcy5mYWNldERhdGFbaV0udHlwZSApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuZmFjZXREYXRhW2ldLmVuYWJsZWQgKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiggY291bnQgPiB0aGlzLm9wdGlvbnMubWF4TnVtYmVyICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBvbkJ1YmJsZU1vdXNlRW50ZXIocGF5bG9hZCl7XG4gICAgaWYgKCAhcGF5bG9hZCB8fCAhcGF5bG9hZC5idWJibGUgKSByZXR1cm47XG4gICAgY29uc3QgYnViYmxlSWQgPSBwYXlsb2FkLmJ1YmJsZS5pZDtcbiAgICBsZXQgaG92ZXJFbnRpdHlJZCA9IHRoaXMuZW50aXR5QnViYmxlSWRNYXBbcGF5bG9hZC5idWJibGUuaWRdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxCdWJibGVzLmxlbmd0aDsgaSsrICl7XG4gICAgICBsZXQgYnViYmxlID0gdGhpcy5hbGxCdWJibGVzW2ldO1xuICAgICAgaWYgKCBidWJibGUuZW50aXR5LmlkPT09aG92ZXJFbnRpdHlJZCApe1xuICAgICAgICB0aGlzLmN1cnJlbnRIb3ZlckVudGl0eSA9IGJ1YmJsZS5lbnRpdHk7XG4gICAgICAgIHRoaXMuY3VycmVudEhvdmVyRW50aXR5LmNvdW50ID0gYnViYmxlLmNvdW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodGhpcy5idWJibGVQb3B1cCl7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmhpZGUoKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cCA9IG51bGw7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlLXBvcHVwLW1lbnVcIik7XG4gICAgICBsZXQgdGVtcGxhdGVDbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRlbXBsYXRlQ2xvbmVbJ3N0eWxlJ10uZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwID0gdGhpcy50aXBweShgIyR7YnViYmxlSWR9YCwge1xuICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZUNsb25lLFxuICAgICAgICBhbGxvd0hUTUw6IHRydWUsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICBtYXhXaWR0aDogNTAwLFxuICAgICAgICAvL29uSGlkZGVuOiAoKSA9PiBjb25zb2xlLmxvZygnaGlkZGVuJyksXG4gICAgICB9KVswXTtcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHsgaWYodGhpcy5idWJibGVQb3B1cCkgdGhpcy5idWJibGVQb3B1cC5zaG93KCkgfSAsIDgwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveVRvb2x0aXAoKXtcbiAgICBpZih0aGlzLmJ1YmJsZVBvcHVwKXtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuaGlkZSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvbkJ1YmJsZVRvb2x0aXBDbGljayhzb3VyY2U6c3RyaW5nLCBwYXlsb2FkKXtcbiAgICBzd2l0Y2goc291cmNlKXtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGlmKCFwYXlsb2FkKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJ1YmJsZUlkID0gdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKHBheWxvYWQuZW50aXR5SWQpO1xuICAgICAgICBpZighYnViYmxlSWQpIHJldHVybjtcbiAgICAgICAgbGV0IGJ1YmJsZSA9IG51bGw7XG4gICAgICAgIGlmKHBheWxvYWQuX2J1YmJsZUNoYXJ0KXtcbiAgICAgICAgICBwYXlsb2FkLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKCBiID0+IHtcbiAgICAgICAgICAgIGlmKGIuaWQ9PT1idWJibGVJZCkgYnViYmxlPWI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYoYnViYmxlKSByZXR1cm4gYnViYmxlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQnViYmxlU2VsZWN0ZWQoYnViYmxlKXtcbiAgICBpZihidWJibGUpe1xuICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRCdWJibGVzLmluY2x1ZGVzKGJ1YmJsZSkpe1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg8dGhpcy5tYXhCdWJibGVzU2VsZWN0YWJsZSl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMucHVzaChidWJibGUpO1xuICAgICAgICAgIC8vcmV0dXJuIHRoaXMuZmlsdGVyUmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEJ1YmJsZUZyb21JZChpZCl7XG4gICAgY29uc3QgYnViYmxlSWQgPSB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoaWQpO1xuICAgIGlmKCFidWJibGVJZCkgcmV0dXJuO1xuICAgIGxldCBidWJibGUgPSBudWxsO1xuICAgIGlmKHRoaXMuX2J1YmJsZUNoYXJ0KXtcbiAgICAgIHRoaXMuX2J1YmJsZUNoYXJ0LnNlbGVjdEFsbChgZ2ApLmVhY2goIGIgPT4ge1xuICAgICAgICBpZihiLmlkPT09YnViYmxlSWQpIGJ1YmJsZT1iO1xuICAgICAgfSk7XG4gICAgICBpZihidWJibGUpIHJldHVybiBidWJibGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRCdWJibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQnViYmxlcztcbiAgfVxuXG4gIGdldEFsbEJ1YmJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsQnViYmxlcztcbiAgfVxuXG4gIGdldEVudGl0eUlkTWFwKCkge1xuICAgIHJldHVybiB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwO1xuICB9XG5cbiAgc2V0V2luZG93UmVzaXplKCkge1xuICAgIGlmKCAhdGhpcy53aW5kb3dSZXNpemVTZXQpe1xuICAgICAgZnJvbUV2ZW50KCB3aW5kb3cgLCBcInJlc2l6ZVwiICkucGlwZShkZWJvdW5jZSgoKSA9PiBpbnRlcnZhbCgyMDApKSkuXG4gICAgICBzdWJzY3JpYmUoICgpID0+IHtcbiAgICAgICAgLy8gb25seSByZXNldHMgdGhlIGJ1YmJsZXMgaWYgdGhlIHdpbmRvdydzIHdpZHRoIGhhcyBjaGFuZ2VkXG4gICAgICAgIC8vIChpZiB0aGUgcmVzaXplIG9ubHkgZWZmZWN0cyB0aGUgd2luZG93J3MgaGlnaHQgdGhlbiB0aGUgYnViYmxlIGNoYXJ0XG4gICAgICAgIC8vIGRvZXNuJ3QgZ2V0IHJlc2V0KVxuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5jb250YWluZXJJZCk7XG4gICAgICAgICAgLy9jaGVjayBpZiBlbGVtZW50IGlzIHZpc2libGUgb24gcGFnZVxuICAgICAgICAgIGlmKGNvbnRhaW5lci5vZmZzZXRQYXJlbnQgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICBsZXQgYnViYmxlUGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgcmVzZXQ6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShidWJibGVQYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMud2luZG93UmVzaXplU2V0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=