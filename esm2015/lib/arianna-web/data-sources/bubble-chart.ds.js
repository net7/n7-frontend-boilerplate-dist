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
            bubblePercentage = (bubble.count * (coeff / 3) - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxPQUFPLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQS9DOztRQUVVLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUMvQix1QkFBa0IsR0FBVSxFQUFFLENBQUM7UUFFL0IsZUFBVSxHQUFVLElBQUksQ0FBQztRQUN6QixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDN0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFVLElBQUksQ0FBQztRQUN4QixnQkFBVyxHQUFRLElBQUksQ0FBQztRQUN6Qix1QkFBa0IsR0FBUSxJQUFJLENBQUM7UUFDOUIsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIseUJBQW9CLEdBQVUsQ0FBQyxDQUFDO1FBRWhDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLDZCQUF3QixHQUFHLENBQUMsQ0FBQztJQTJYdkMsQ0FBQzs7Ozs7O0lBelhXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLElBQUssQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBRTVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMs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QUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLEVBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBRUgsQ0FBQztDQUVGOzs7Ozs7SUExWUMsNkNBQXVDOzs7OztJQUN2Qyw2Q0FBdUM7O0lBQ3ZDLHdDQUEwQjs7Ozs7SUFDMUIscUNBQWlDOzs7OztJQUNqQyw0Q0FBb0M7O0lBQ3BDLDBDQUFtQzs7Ozs7SUFDbkMsb0NBQWdDOzs7OztJQUNoQyxzQ0FBZ0M7O0lBQ2hDLDZDQUFzQzs7Ozs7SUFDdEMsdUNBQWlDOzs7OztJQUNqQywrQ0FBd0M7Ozs7O0lBQ3hDLGdDQUFjOzs7OztJQUNkLDBDQUFnQzs7Ozs7SUFDaEMsMENBQThCOzs7OztJQUM5QiwwQ0FBNkI7Ozs7O0lBQzdCLG1EQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBCVUJCTEVDSEFSVF9NT0NLIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcbmltcG9ydCB7IGZyb21FdmVudCwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcml2YXRlIHRocmVzaG9sZFNob3dUaXRsZTpudW1iZXIgPSA1MDtcbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VmFsdWU6bnVtYmVyID0gNjA7XG4gIHB1YmxpYyBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGVudGl0eUJ1YmJsZUlkTWFwOiBhbnkgPSB7fTtcbiAgcHVibGljIHNlbGVjdGVkQnViYmxlczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBmYWNldERhdGE6IGFueVtdID0gbnVsbDtcbiAgcHJpdmF0ZSBidWJibGVQb3B1cDogYW55ID0gbnVsbDtcbiAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSBfYnViYmxlQ2hhcnQ6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgbWF4QnViYmxlc1NlbGVjdGFibGU6bnVtYmVyID0gMztcbiAgcHJpdmF0ZSB0aXBweTtcbiAgcHJpdmF0ZSB3aW5kb3dSZXNpemVTZXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBtYXhCdWJibGVSYWRpdXMgPSAxMDA7XG4gIHByaXZhdGUgbWluQnViYmxlUmFkaXVzID0gMTA7XG4gIHByaXZhdGUgbWF4QnViYmxlVGV4dFJhZGl1c1JhdGlvID0gNjtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIGlmICggIWRhdGEgKXsgcmV0dXJuIG51bGw7IH1cblxuICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcblxuICAgIHRoaXMuZmFjZXREYXRhID0gZGF0YS5mYWNldERhdGEgPyBkYXRhLmZhY2V0RGF0YSA6IFtdO1xuICAgIHRoaXMudGlwcHkgPSB0aXBweTtcblxuICAgIGRhdGEuYnViYmxlcyA9IHRoaXMuZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCk7XG4gICAgbGV0IGJ1YmJsZUNvaW50YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuY29udGFpbmVySWQpO1xuICAgIGNvbnN0IGNXaWR0aCA9IGRhdGEud2lkdGggPyBkYXRhLndpZHRoIDogYnViYmxlQ29pbnRhaW5lci5vZmZzZXRXaWR0aDtcblxuICAgIC8vIFRPRE86IHRoaW5rIG9mIGEgZ29vZCB3YXkgdG8gcGFzcy9jb21wdXRlIGNIZWlnaHRcbiAgICBjb25zdCBjSGVpZ2h0ID0gNzAwOyAvLyBidWJibGVDb2ludGFpbmVyLm9mZnNldEhlaWdodFxuICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBjV2lkdGggKiBjSGVpZ2h0O1xuXG4gICAgbGV0IGJ1YmJsZXNEYXRhID0ge1xuICAgICAgY29udGFpbmVySWQ6IHRoaXMub3B0aW9ucy5idWJibGVDb250YWluZXJJZCxcbiAgICAgIGNvbnRhaW5lcldpZHRoIDogY1dpZHRoLFxuICAgICAgY29udGFpbmVySGVpZ2h0IDogY0hlaWdodCxcbiAgICAgIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1heEJ1YmJsZXNTZWxlY3RlZDozXG4gICAgfTtcblxuICAgIGJ1YmJsZXNEYXRhWydidWJibGVzRGF0YSddID0gW107XG5cbiAgICBsZXQgbWF4QnViYmxlQ291bnQgPSAtMTtcbiAgICBsZXQgbWluQnViYmxlQ291bnQgPSAtMTtcbiAgICBsZXQgbnVtT2ZCdWJibGVzID0gMDtcbiAgICBsZXQgdG90YWxDb3VudCA9IDA7XG4gICAgbGV0IG51bU9mU2VsZWN0ZWRCdWJibGVzID0gMDtcblxuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgaWYgKCBtYXhCdWJibGVDb3VudCA8IGJ1YmJsZS5jb3VudCApIG1heEJ1YmJsZUNvdW50ID0gYnViYmxlLmNvdW50O1xuICAgICAgaWYgKCBtaW5CdWJibGVDb3VudCA8IDAgfHwgbWluQnViYmxlQ291bnQ+YnViYmxlLmNvdW50ICkgbWluQnViYmxlQ291bnQgPSBidWJibGUuY291bnQ7XG4gICAgICBudW1PZkJ1YmJsZXMrKztcbiAgICAgIHRvdGFsQ291bnQgKz0gYnViYmxlLmNvdW50O1xuICAgICAgaWYoYnViYmxlLnNlbGVjdGVkKSBudW1PZlNlbGVjdGVkQnViYmxlcysrO1xuICAgIH0pO1xuXG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBsZXQgYklkID0gYnViYmxlLmlkO1xuXG4gICAgICBsZXQgYnViYmxlQXZlcmFnZSA9ICB0b3RhbENvdW50IC8gbnVtT2ZCdWJibGVzO1xuICAgICAgbGV0IGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIGJ1YmJsZS5jb3VudCAtIChtaW5CdWJibGVDb3VudC8zKSApLyggKG1heEJ1YmJsZUNvdW50KjMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICk7XG5cblxuICAgICAgLy90byB1bmRlcnN0YW5kIGlmIHRoZXJlIGlzIGEgbGFyZ2UgZGlmZmVyZW5jZSBvZiBjb3VudCBiZXR3ZWVuIGJ1YmJsZXNcbiAgICAgIGxldCBjb2VmZiA9IG1heEJ1YmJsZUNvdW50IC8gYnViYmxlQXZlcmFnZTtcblxuICAgICAgLyogaWYgKCBjb2VmZiA+IDIwICkge1xuICAgICAgICBpZiAoIGJ1YmJsZS5jb3VudCAtIGNvZWZmID49IDAgKXtcbiAgICAgICAgICBidWJibGVQZXJjZW50YWdlID0gKCAoYnViYmxlLmNvdW50KSAtIChtaW5CdWJibGVDb3VudC8zKSApLyggKG1heEJ1YmJsZUNvdW50KjMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgfVxuICAgICAgICBidWJibGVQZXJjZW50YWdlID0gKCAoYnViYmxlLmNvdW50IC0gKG1pbkJ1YmJsZUNvdW50LzMpKSAtIChtaW5CdWJibGVDb3VudC8zKSApLyggKChtYXhCdWJibGVDb3VudCAtIGNvZWZmKSAqMykgLSAobWluQnViYmxlQ291bnQvMykgKVxuICAgICAgfSovXG4gICAgICBidWJibGVQZXJjZW50YWdlID0gKCBidWJibGUuY291bnQgKiAoY29lZmYvMykgLSAobWluQnViYmxlQ291bnQvMykgKS8oIChtYXhCdWJibGVDb3VudCozKSAtIChtaW5CdWJibGVDb3VudC8zKSApO1xuXG4gICAgICBsZXQgYnViYmxlUmFkaXVzID0gKE1hdGgubG9nKGNvbnRhaW5lclNpemUpLzEwKSooYnViYmxlUGVyY2VudGFnZSozKSooNzAtTWF0aC5zcXJ0KG51bU9mQnViYmxlcykpO1xuICAgICAgaWYgKCBidWJibGVSYWRpdXMgPiB0aGlzLm1heEJ1YmJsZVJhZGl1cyApIHtcbiAgICAgICAgYnViYmxlUmFkaXVzID0gdGhpcy5tYXhCdWJibGVSYWRpdXM7XG4gICAgICB9IGVsc2UgaWYgKCBidWJibGVSYWRpdXMgPCB0aGlzLm1pbkJ1YmJsZVJhZGl1cyApIHtcbiAgICAgICAgYnViYmxlUmFkaXVzID0gdGhpcy5taW5CdWJibGVSYWRpdXM7XG4gICAgICB9XG5cbiAgICAgIC8vY29uc29sZS5sb2coXCJidWJibGUgdGV4dCBcIiArICBidWJibGUuZW50aXR5LmxhYmVsICtcIiBidWJibGUgbGVuZ3RoIFwiICsgIGJ1YmJsZS5lbnRpdHkubGFiZWwubGVuZ3RoICsgXCIgcmFkaXVzOiBcIiArIGJ1YmJsZVJhZGl1cyArIFwiIGxpbWl0OiBcIiArIHRoaXMudGhyZXNob2xkU2hvd1RpdGxlICApXG4gICAgICBsZXQgbGFiZWwgPSBidWJibGUuZW50aXR5LmxhYmVsO1xuXG4gICAgICBsZXQgdGV4dHMgPSBbXTtcbiAgICAgIC8vIGNoZWNrIGlmIHRleHQgaXMgbGFyZ2VyIHRoYW4gcmFkaXVzXG4gICAgICBpZiggYnViYmxlUmFkaXVzIC8gYnViYmxlLmVudGl0eS5sYWJlbC5sZW5ndGggPCB0aGlzLm1heEJ1YmJsZVRleHRSYWRpdXNSYXRpbyApIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBidWJibGVSYWRpdXMgLyB0aGlzLm1heEJ1YmJsZVRleHRSYWRpdXNSYXRpbztcbiAgICAgICAgY29uc3Qgc3BhY2VJbmRleCA9IGJ1YmJsZS5lbnRpdHkubGFiZWwuaW5kZXhPZihcIiBcIiwgaW5kZXggLSA1KVxuICAgICAgICBjb25zdCBsYWJlbDEgPSBidWJibGUuZW50aXR5LmxhYmVsLnNsaWNlKDAsIHNwYWNlSW5kZXgpO1xuICAgICAgICBjb25zdCBsYWJlbDIgPSBidWJibGUuZW50aXR5LmxhYmVsLnNsaWNlKHNwYWNlSW5kZXgsIGluZGV4ICoyKTtcbiAgICAgICAgLy9sYWJlbCA9IFtidWJibGUuZW50aXR5LmxhYmVsLnNsaWNlKDAsIGluZGV4KSwgXCJcXG5cIiwgYnViYmxlLmVudGl0eS5sYWJlbC5zbGljZShpbmRleCldLmpvaW4oJycpO1xuXG4gICAgICAgIHRleHRzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMFwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1RpdGxlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGxhYmVsMSB9LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBtTnVtID0gKGQucmFkaXVzLzkpO1xuICAgICAgICAgICAgICBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgbU51bT0wO1xuICAgICAgICAgICAgICByZXR1cm4gZC55LW1OdW0gLTIwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwwMVwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1RpdGxlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGxhYmVsMiB9LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBtTnVtID0gKGQucmFkaXVzLzkpO1xuICAgICAgICAgICAgICBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgbU51bT0wO1xuICAgICAgICAgICAgICByZXR1cm4gZC55LW1OdW07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICB9XG5cblxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0cy5wdXNoKHtcbiAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwwXCIsXG4gICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1RpdGxlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGxhYmVsIH0sXG4gICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1OdW0gPSAoZC5yYWRpdXMvOSk7XG4gICAgICAgICAgICBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgbU51bT0wO1xuICAgICAgICAgICAgcmV0dXJuIGQueS1tTnVtO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBidWJibGVEYXRhID0ge1xuICAgICAgICBpZDogYklkLFxuICAgICAgICB0ZXh0czogW1xuICAgICAgICAgIC4uLnRleHRzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDFcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgcmV0dXJuIG51bGw7IHJldHVybiBidWJibGUuY291bnQgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIC8vZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy8zLFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiYXctYnViYmxlLW51bVwiXG4gICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgeDogY1dpZHRoLzIrNTAsXG4gICAgICAgIHk6IGNIZWlnaHQvMis1MCxcbiAgICAgICAgXCJyYWRpdXNcIjogYnViYmxlUmFkaXVzLFxuICAgICAgICBjb2xvcjpidWJibGUuY29sb3IsXG4gICAgICAgIGhhc0Nsb3NlSWNvbjogKCBidWJibGUuc2VsZWN0ZWQgPyBidWJibGUuc2VsZWN0ZWQgOiBmYWxzZSApLFxuICAgICAgICBwYXlsb2FkOntcbiAgICAgICAgICBpZDogYklkXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXS5wdXNoKGJ1YmJsZURhdGEpO1xuICAgIH0pO1xuXG5cbiAgICBidWJibGVzRGF0YVsnZm9yY2VTaW11bGF0aW9uRGF0YSddID0ge1xuICAgICAgeFB1bGw6IGNXaWR0aC8yLFxuICAgICAgeFB1bGxTdHJlbmd0aDogLTAuMDEsXG4gICAgICB5UHVsbDogY0hlaWdodC8yLFxuICAgICAgeVB1bGxTdHJlbmd0aDogLTAuMDEsXG4gICAgICBjb2xsaXNpb25TdHJlbmdoOiAwLjk5LFxuICAgICAgY29sbGlzaW9uSXRlcmF0aW9uczogMSxcbiAgICAgIHZlbG9jaXR5RGVjYXk6IDAuNjVcbiAgICB9XG5cbiAgICBpZihkYXRhLnJlc2V0KSBidWJibGVzRGF0YVsncmVzZXQnXSA9IGRhdGEucmVzZXQ7XG5cbiAgICBpZihkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSkgYnViYmxlc0RhdGFbJ3NldFVwZGF0ZVJlZmVyZW5jZSddID0gZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2U7XG4gICAgaWYoZGF0YS5zZXRCdWJibGVDaGFydCkgYnViYmxlc0RhdGFbJ3NldEJ1YmJsZUNoYXJ0J10gPSBkYXRhLnNldEJ1YmJsZUNoYXJ0O1xuXG4gICAgdGhpcy5zZXRXaW5kb3dSZXNpemUoKTtcblxuICAgIHJldHVybiBidWJibGVzRGF0YTtcbiAgfVxuXG4gIHNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkoIGRhdGE6IGFueSwgcmVzZXQgPSB0cnVlICkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gZGF0YS5zb3VyY2U7XG4gICAvLyBpZiAoICFyZXNwb25zZSB8fCAhcmVzcG9uc2UuZW50aXRpZXNEYXRhICkge3JldHVybjsgfVxuICAgIHRoaXMuYWxsQnViYmxlcyA9IFtdO1xuXG4gICAgaWYgKCBkYXRhLnNlbGVjdGVkQnViYmxlcyApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gZGF0YS5zZWxlY3RlZEJ1YmJsZXM7XG4gICAgfVxuXG4gICAgaWYoIHJlc3BvbnNlLmVudGl0aWVzRGF0YSApIHtcblxuICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IHJlc3BvbnNlLmVudGl0aWVzRGF0YS5sZW5ndGg7IGkrKyApIHtcblxuICAgICAgICB0aGlzLmFsbEJ1YmJsZXMucHVzaCh7XG4gICAgICAgICAgLi4ucmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldLFxuICAgICAgICAgIGNvbG9yOiB0aGlzLm9wdGlvbnMuY29uZmlnS2V5c1tyZXNwb25zZS5lbnRpdGllc0RhdGFbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKFwiIFwiLCBcIi1cIildID8gdGhpcy5vcHRpb25zLmNvbmZpZ0tleXNbcmVzcG9uc2UuZW50aXRpZXNEYXRhW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXVsnY29sb3InXVsnaGV4J10gOiBcIlwiXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5yZWxhdGVkRW50aXRpZXMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29uZmlnS2V5cyA/XG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNvbmZpZ0tleXNbcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXSA/IHRoaXMub3B0aW9ucy5jb25maWdLZXlzW3Jlc3BvbnNlLnJlbGF0ZWRFbnRpdGllc1tpXS5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKV1bJ2NvbG9yJ11bJ2hleCddIDogXCJcIiA6XG4gICAgICAgICAgbnVsbDtcbiAgICAgICAgdGhpcy5hbGxCdWJibGVzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZCggcmVzcG9uc2UucmVsYXRlZEVudGl0aWVzW2ldLmVudGl0eS5pZCApLFxuICAgICAgICAgICAgLi4ucmVzcG9uc2UucmVsYXRlZEVudGl0aWVzW2ldLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9yXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcCA9IHt9O1xuICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICAvLyBkMy9zdmcgZG9lcyBub3QgYWxsb3cgTnVtYmVyIGFzIGJlZ2lubmluZyBvZiBJRC5cbiAgICAgIC8vIGQzL3N2ZyBkb2VzIG5vdCBhbGxvdyAnLScgYXMgcGFydCBvZiBJRC5cbiAgICAgIGJ1YmJsZS5pZCA9IHRoaXMuY29udmVydEVudGl0eUlkVG9CdWJibGVJZChidWJibGUuZW50aXR5LmlkKTtcbiAgICAgIHRoaXMuZW50aXR5QnViYmxlSWRNYXBbYnViYmxlLmlkXSA9IGJ1YmJsZS5lbnRpdHkuaWQ7XG4gICAgICByZXR1cm4gYnViYmxlO1xuICAgIH0pO1xuICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKCAoYnViYmxlKSA9PiB7XG4gICAgICBidWJibGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgaWYgKCB0aGlzLnNlbGVjdGVkQnViYmxlc1tpXS5pZCA9PT0gYnViYmxlLmlkICkge1xuICAgICAgICAgIGJ1YmJsZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKHJlc2V0KSB7XG4gICAgICB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCAhZW50aXR5SWQgKSB7IHJldHVybiBudWxsOyB9XG4gICAgcmV0dXJuICggJ0JfJyArIGVudGl0eUlkLnJlcGxhY2UoLy0vZywgJ18nKSApO1xuICB9XG5cbiAgZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYWxsQnViYmxlcy5maWx0ZXIoXG4gICAgICAoYnViYmxlKSA9PiB7XG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuZmFjZXREYXRhLmxlbmd0aDsgaSsrICl7XG4gICAgICAgICAgaWYgKCBidWJibGUuZW50aXR5LnR5cGVPZkVudGl0eSA9PT0gdGhpcy5mYWNldERhdGFbaV0udHlwZSApIHtcbiAgICAgICAgICAgIGlmICggIXRoaXMuZmFjZXREYXRhW2ldLmVuYWJsZWQgKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiggY291bnQgPiB0aGlzLm9wdGlvbnMubWF4TnVtYmVyICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBvbkJ1YmJsZU1vdXNlRW50ZXIocGF5bG9hZCl7XG4gICAgaWYgKCAhcGF5bG9hZCB8fCAhcGF5bG9hZC5idWJibGUgKSByZXR1cm47XG4gICAgY29uc3QgYnViYmxlSWQgPSBwYXlsb2FkLmJ1YmJsZS5pZDtcbiAgICBsZXQgaG92ZXJFbnRpdHlJZCA9IHRoaXMuZW50aXR5QnViYmxlSWRNYXBbcGF5bG9hZC5idWJibGUuaWRdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxCdWJibGVzLmxlbmd0aDsgaSsrICl7XG4gICAgICBsZXQgYnViYmxlID0gdGhpcy5hbGxCdWJibGVzW2ldO1xuICAgICAgaWYgKCBidWJibGUuZW50aXR5LmlkPT09aG92ZXJFbnRpdHlJZCApe1xuICAgICAgICB0aGlzLmN1cnJlbnRIb3ZlckVudGl0eSA9IGJ1YmJsZS5lbnRpdHk7XG4gICAgICAgIHRoaXMuY3VycmVudEhvdmVyRW50aXR5LmNvdW50ID0gYnViYmxlLmNvdW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodGhpcy5idWJibGVQb3B1cCl7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwLmhpZGUoKTtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cCA9IG51bGw7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlLXBvcHVwLW1lbnVcIik7XG4gICAgICBsZXQgdGVtcGxhdGVDbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRlbXBsYXRlQ2xvbmVbJ3N0eWxlJ10uZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwID0gdGhpcy50aXBweShgIyR7YnViYmxlSWR9YCwge1xuICAgICAgICBjb250ZW50OiB0ZW1wbGF0ZUNsb25lLFxuICAgICAgICBhbGxvd0hUTUw6IHRydWUsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICBtYXhXaWR0aDogNTAwLFxuICAgICAgICAvL29uSGlkZGVuOiAoKSA9PiBjb25zb2xlLmxvZygnaGlkZGVuJyksXG4gICAgICB9KVswXTtcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHsgaWYodGhpcy5idWJibGVQb3B1cCkgdGhpcy5idWJibGVQb3B1cC5zaG93KCkgfSAsIDgwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveVRvb2x0aXAoKXtcbiAgICBpZih0aGlzLmJ1YmJsZVBvcHVwKXtcbiAgICAgIHRoaXMuYnViYmxlUG9wdXAuaGlkZSgpO1xuICAgICAgdGhpcy5idWJibGVQb3B1cC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmJ1YmJsZVBvcHVwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvbkJ1YmJsZVRvb2x0aXBDbGljayhzb3VyY2U6c3RyaW5nLCBwYXlsb2FkKXtcbiAgICBzd2l0Y2goc291cmNlKXtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIGlmKCFwYXlsb2FkKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJ1YmJsZUlkID0gdGhpcy5jb252ZXJ0RW50aXR5SWRUb0J1YmJsZUlkKHBheWxvYWQuZW50aXR5SWQpO1xuICAgICAgICBpZighYnViYmxlSWQpIHJldHVybjtcbiAgICAgICAgbGV0IGJ1YmJsZSA9IG51bGw7XG4gICAgICAgIGlmKHBheWxvYWQuX2J1YmJsZUNoYXJ0KXtcbiAgICAgICAgICBwYXlsb2FkLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKCBiID0+IHtcbiAgICAgICAgICAgIGlmKGIuaWQ9PT1idWJibGVJZCkgYnViYmxlPWI7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYoYnViYmxlKSByZXR1cm4gYnViYmxlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQnViYmxlU2VsZWN0ZWQoYnViYmxlKXtcbiAgICBpZihidWJibGUpe1xuICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRCdWJibGVzLmluY2x1ZGVzKGJ1YmJsZSkpe1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGg8dGhpcy5tYXhCdWJibGVzU2VsZWN0YWJsZSl7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMucHVzaChidWJibGUpO1xuICAgICAgICAgIC8vcmV0dXJuIHRoaXMuZmlsdGVyUmVxdWVzdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEJ1YmJsZUZyb21JZChpZCl7XG4gICAgY29uc3QgYnViYmxlSWQgPSB0aGlzLmNvbnZlcnRFbnRpdHlJZFRvQnViYmxlSWQoaWQpO1xuICAgIGlmKCFidWJibGVJZCkgcmV0dXJuO1xuICAgIGxldCBidWJibGUgPSBudWxsO1xuICAgIGlmKHRoaXMuX2J1YmJsZUNoYXJ0KXtcbiAgICAgIHRoaXMuX2J1YmJsZUNoYXJ0LnNlbGVjdEFsbChgZ2ApLmVhY2goIGIgPT4ge1xuICAgICAgICBpZihiLmlkPT09YnViYmxlSWQpIGJ1YmJsZT1iO1xuICAgICAgfSk7XG4gICAgICBpZihidWJibGUpIHJldHVybiBidWJibGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRCdWJibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQnViYmxlcztcbiAgfVxuXG4gIGdldEFsbEJ1YmJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsQnViYmxlcztcbiAgfVxuXG4gIGdldEVudGl0eUlkTWFwKCkge1xuICAgIHJldHVybiB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwO1xuICB9XG5cbiAgc2V0V2luZG93UmVzaXplKCkge1xuICAgIGlmKCAhdGhpcy53aW5kb3dSZXNpemVTZXQpe1xuICAgICAgZnJvbUV2ZW50KCB3aW5kb3cgLCBcInJlc2l6ZVwiICkucGlwZShkZWJvdW5jZSgoKSA9PiBpbnRlcnZhbCgyMDApKSkuXG4gICAgICBzdWJzY3JpYmUoICgpID0+IHtcbiAgICAgICAgLy8gb25seSByZXNldHMgdGhlIGJ1YmJsZXMgaWYgdGhlIHdpbmRvdydzIHdpZHRoIGhhcyBjaGFuZ2VkXG4gICAgICAgIC8vIChpZiB0aGUgcmVzaXplIG9ubHkgZWZmZWN0cyB0aGUgd2luZG93J3MgaGlnaHQgdGhlbiB0aGUgYnViYmxlIGNoYXJ0XG4gICAgICAgIC8vIGRvZXNuJ3QgZ2V0IHJlc2V0KVxuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5jb250YWluZXJJZCk7XG4gICAgICAgICAgLy9jaGVjayBpZiBlbGVtZW50IGlzIHZpc2libGUgb24gcGFnZVxuICAgICAgICAgIGlmKGNvbnRhaW5lci5vZmZzZXRQYXJlbnQgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICBsZXQgYnViYmxlUGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgcmVzZXQ6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShidWJibGVQYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMud2luZG93UmVzaXplU2V0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=