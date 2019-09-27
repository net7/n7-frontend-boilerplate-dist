/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHomeBubbleChartDS extends DataSource {
    constructor() {
        super(...arguments);
        this.thresholdShowTitle = 50;
        this.thresholdShowValue = 60;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!data)
            return null;
        /** @type {?} */
        let bubbleCointainer = document.getElementById("bubble-chart-container");
        /** @type {?} */
        const cWidth = bubbleCointainer.offsetWidth;
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        const cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        const containerSize = cWidth * cHeight;
        /** @type {?} */
        let bubblesData = {
            containerId: "bubbleChartContainer",
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
        console.log({ containerSize: Math.log(containerSize), numOfBubbles, minBubbleCount, maxBubbleCount, totalCount, numOfSelectedBubbles });
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        bubble => {
            /** @type {?} */
            let bId = bubble.id;
            //let bubblePercentage = ( bubble.count - (minBubbleCount/3) )/( (maxBubbleCount*3) - (minBubbleCount/3) );
            //let bubbleRadius = 2*( ((containerSize/(numOfBubbles*(totalCount/600)))*bubblePercentage)/( Math.pow(numOfSelectedBubbles+1,1.8)) );
            /** @type {?} */
            let bubblePercentage = (bubble.count - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            /** @type {?} */
            let bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            /** @type {?} */
            let bubbleData = {
                id: bId,
                texts: [
                    {
                        id: bId + "_label0",
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => { if (d.radius < this.thresholdShowTitle)
                            return null; return bubble.entity.label; }),
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
                    },
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
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.radius / 6),
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
        return bubblesData;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeBubbleChartDS.prototype.thresholdShowTitle;
    /**
     * @type {?}
     * @private
     */
    AwHomeBubbleChartDS.prototype.thresholdShowValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYnViYmxlLWNoYXJ0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFBbkQ7O1FBRVUsdUJBQWtCLEdBQVUsRUFBRSxDQUFDO1FBQy9CLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztJQW1HekMsQ0FBQzs7Ozs7O0lBakdXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLElBQUcsQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7O1lBRWxCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUM7O2NBQ2xFLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXOzs7Y0FFckMsT0FBTyxHQUFHLEdBQUc7OztjQUViLGFBQWEsR0FBRyxNQUFNLEdBQUMsT0FBTzs7WUFFaEMsV0FBVyxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsY0FBYyxFQUFHLE1BQU07WUFDdkIsZUFBZSxFQUFHLE9BQU87WUFDekIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5QixrQkFBa0IsRUFBQyxDQUFDO1NBQ3JCO1FBRUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7WUFFNUIsY0FBYyxHQUFDLENBQUMsQ0FBQzs7WUFDakIsY0FBYyxHQUFDLENBQUMsQ0FBQzs7WUFDakIsWUFBWSxHQUFDLENBQUM7O1lBQ2QsVUFBVSxHQUFDLENBQUM7O1lBQ1osb0JBQW9CLEdBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBRSxNQUFNLENBQUMsRUFBRTtZQUM3QixJQUFH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QUUsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3hGLElBQUcsSUFBSSxDQUFDLGNBQWM7WUFBRSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVFLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7Ozs7O0lBcEdDLGlEQUF1Qzs7Ozs7SUFDdkMsaURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJVQkJMRUNIQVJUX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VGl0bGU6bnVtYmVyID0gNTA7XG4gIHByaXZhdGUgdGhyZXNob2xkU2hvd1ZhbHVlOm51bWJlciA9IDYwO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgaWYoIWRhdGEpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IGJ1YmJsZUNvaW50YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1YmJsZS1jaGFydC1jb250YWluZXJcIik7XG4gICAgY29uc3QgY1dpZHRoID0gYnViYmxlQ29pbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICAvLyBUT0RPOiB0aGluayBvZiBhIGdvb2Qgd2F5IHRvIHBhc3MvY29tcHV0ZSBjSGVpZ2h0XG4gICAgY29uc3QgY0hlaWdodCA9IDcwMDsgLy8gYnViYmxlQ29pbnRhaW5lci5vZmZzZXRIZWlnaHRcblxuICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBjV2lkdGgqY0hlaWdodDtcblxuICAgIGxldCBidWJibGVzRGF0YSA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiBcImJ1YmJsZUNoYXJ0Q29udGFpbmVyXCIsXG4gICAgICBjb250YWluZXJXaWR0aCA6IGNXaWR0aCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCA6IGNIZWlnaHQsXG4gICAgICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgICBtYXhCdWJibGVzU2VsZWN0ZWQ6M1xuICAgIH07XG5cbiAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXSA9IFtdO1xuXG4gICAgbGV0IG1heEJ1YmJsZUNvdW50PS0xO1xuICAgIGxldCBtaW5CdWJibGVDb3VudD0tMTtcbiAgICBsZXQgbnVtT2ZCdWJibGVzPTA7XG4gICAgbGV0IHRvdGFsQ291bnQ9MDtcbiAgICBsZXQgbnVtT2ZTZWxlY3RlZEJ1YmJsZXM9MDtcbiAgICBkYXRhLmJ1YmJsZXMuZm9yRWFjaCggYnViYmxlID0+IHtcbiAgICAgIGlmKG1heEJ1YmJsZUNvdW50PGJ1YmJsZS5jb3VudCkgbWF4QnViYmxlQ291bnQ9YnViYmxlLmNvdW50O1xuICAgICAgaWYobWluQnViYmxlQ291bnQ8MCB8fCBtaW5CdWJibGVDb3VudD5idWJibGUuY291bnQpIG1pbkJ1YmJsZUNvdW50PWJ1YmJsZS5jb3VudDtcbiAgICAgIG51bU9mQnViYmxlcysrO1xuICAgICAgdG90YWxDb3VudCs9YnViYmxlLmNvdW50O1xuICAgICAgaWYoYnViYmxlLnNlbGVjdGVkKSBudW1PZlNlbGVjdGVkQnViYmxlcysrO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHtjb250YWluZXJTaXplOk1hdGgubG9nKGNvbnRhaW5lclNpemUpLG51bU9mQnViYmxlcyxtaW5CdWJibGVDb3VudCxtYXhCdWJibGVDb3VudCx0b3RhbENvdW50LG51bU9mU2VsZWN0ZWRCdWJibGVzfSk7XG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBsZXQgYklkID0gYnViYmxlLmlkO1xuICAgICAgLy9sZXQgYnViYmxlUGVyY2VudGFnZSA9ICggYnViYmxlLmNvdW50IC0gKG1pbkJ1YmJsZUNvdW50LzMpICkvKCAobWF4QnViYmxlQ291bnQqMykgLSAobWluQnViYmxlQ291bnQvMykgKTtcbiAgICAgIC8vbGV0IGJ1YmJsZVJhZGl1cyA9IDIqKCAoKGNvbnRhaW5lclNpemUvKG51bU9mQnViYmxlcyoodG90YWxDb3VudC82MDApKSkqYnViYmxlUGVyY2VudGFnZSkvKCBNYXRoLnBvdyhudW1PZlNlbGVjdGVkQnViYmxlcysxLDEuOCkpICk7XG4gICAgICBsZXQgYnViYmxlUGVyY2VudGFnZSA9ICggYnViYmxlLmNvdW50IC0gKG1pbkJ1YmJsZUNvdW50LzMpICkvKCAobWF4QnViYmxlQ291bnQqMykgLSAobWluQnViYmxlQ291bnQvMykgKTtcbiAgICAgIGxldCBidWJibGVSYWRpdXMgPSAoTWF0aC5sb2coY29udGFpbmVyU2l6ZSkvMTApKihidWJibGVQZXJjZW50YWdlKjMpKig3MC1NYXRoLnNxcnQobnVtT2ZCdWJibGVzKSk7XG4gICAgICBsZXQgYnViYmxlRGF0YSA9IHtcbiAgICAgICAgaWQ6IGJJZCxcbiAgICAgICAgdGV4dHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwwXCIsXG4gICAgICAgICAgICBsYWJlbDogKGQpID0+IHsgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VGl0bGUpIHJldHVybiBudWxsOyByZXR1cm4gYnViYmxlLmVudGl0eS5sYWJlbCB9LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBtTnVtID0gKGQucmFkaXVzLzkpO1xuICAgICAgICAgICAgICBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgbU51bT0wO1xuICAgICAgICAgICAgICByZXR1cm4gZC55LW1OdW07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDFcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgcmV0dXJuIG51bGw7IHJldHVybiBidWJibGUuY291bnQgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNixcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgeDogY1dpZHRoLzIrNTAsXG4gICAgICAgIHk6IGNIZWlnaHQvMis1MCxcbiAgICAgICAgXCJyYWRpdXNcIjogYnViYmxlUmFkaXVzLFxuICAgICAgICBjb2xvcjpidWJibGUuY29sb3IsXG4gICAgICAgIGhhc0Nsb3NlSWNvbjogKCBidWJibGUuc2VsZWN0ZWQgPyBidWJibGUuc2VsZWN0ZWQgOiBmYWxzZSApLFxuICAgICAgICBwYXlsb2FkOntcbiAgICAgICAgICBpZDogYklkXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXS5wdXNoKGJ1YmJsZURhdGEpO1xuICAgIH0pO1xuXG5cbiAgICBidWJibGVzRGF0YVsnZm9yY2VTaW11bGF0aW9uRGF0YSddID0ge1xuICAgICAgeFB1bGw6IGNXaWR0aC8yLFxuICAgICAgeFB1bGxTdHJlbmd0aDogLTAuMDEsXG4gICAgICB5UHVsbDogY0hlaWdodC8yLFxuICAgICAgeVB1bGxTdHJlbmd0aDogLTAuMDEsXG4gICAgICBjb2xsaXNpb25TdHJlbmdoOiAwLjk5LFxuICAgICAgY29sbGlzaW9uSXRlcmF0aW9uczogMSxcbiAgICAgIHZlbG9jaXR5RGVjYXk6IDAuNjVcbiAgICB9XG5cbiAgICBpZihkYXRhLnJlc2V0KSBidWJibGVzRGF0YVsncmVzZXQnXSA9IGRhdGEucmVzZXQ7XG5cbiAgICBpZihkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSkgYnViYmxlc0RhdGFbJ3NldFVwZGF0ZVJlZmVyZW5jZSddID0gZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2U7XG4gICAgaWYoZGF0YS5zZXRCdWJibGVDaGFydCkgYnViYmxlc0RhdGFbJ3NldEJ1YmJsZUNoYXJ0J10gPSBkYXRhLnNldEJ1YmJsZUNoYXJ0O1xuICAgIHJldHVybiBidWJibGVzRGF0YTtcbiAgfVxufSJdfQ==