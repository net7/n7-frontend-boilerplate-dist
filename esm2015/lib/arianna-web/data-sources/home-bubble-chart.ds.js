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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYnViYmxlLWNoYXJ0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFBbkQ7O1FBRVUsdUJBQWtCLEdBQVUsRUFBRSxDQUFDO1FBQy9CLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztJQWtHekMsQ0FBQzs7Ozs7O0lBaEdXLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLElBQUcsQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7O1lBRWxCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUM7O2NBQ2xFLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXOzs7Y0FFckMsT0FBTyxHQUFHLEdBQUc7OztjQUViLGFBQWEsR0FBRyxNQUFNLEdBQUMsT0FBTzs7WUFFaEMsV0FBVyxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsY0FBYyxFQUFHLE1BQU07WUFDdkIsZUFBZSxFQUFHLE9BQU87WUFDekIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5QixrQkFBa0IsRUFBQyxDQUFDO1NBQ3JCO1FBRUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7WUFFNUIsY0FBYyxHQUFDLENBQUMsQ0FBQzs7WUFDakIsY0FBYyxHQUFDLENBQUMsQ0FBQzs7WUFDakIsWUFBWSxHQUFDLENBQUM7O1lBQ2QsVUFBVSxHQUFDLENBQUM7O1lBQ1osb0JBQW9CLEdBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBRSxNQUFNLENBQUMsRUFBRTtZQUM3QixJQUFH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QU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7Ozs7O0lBbkdDLGlEQUF1Qzs7Ozs7SUFDdkMsaURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJVQkJMRUNIQVJUX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VGl0bGU6bnVtYmVyID0gNTA7XG4gIHByaXZhdGUgdGhyZXNob2xkU2hvd1ZhbHVlOm51bWJlciA9IDYwO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgaWYoIWRhdGEpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IGJ1YmJsZUNvaW50YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1YmJsZS1jaGFydC1jb250YWluZXJcIik7XG4gICAgY29uc3QgY1dpZHRoID0gYnViYmxlQ29pbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICAvLyBUT0RPOiB0aGluayBvZiBhIGdvb2Qgd2F5IHRvIHBhc3MvY29tcHV0ZSBjSGVpZ2h0XG4gICAgY29uc3QgY0hlaWdodCA9IDcwMDsgLy8gYnViYmxlQ29pbnRhaW5lci5vZmZzZXRIZWlnaHRcblxuICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBjV2lkdGgqY0hlaWdodDtcblxuICAgIGxldCBidWJibGVzRGF0YSA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiBcImJ1YmJsZUNoYXJ0Q29udGFpbmVyXCIsXG4gICAgICBjb250YWluZXJXaWR0aCA6IGNXaWR0aCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCA6IGNIZWlnaHQsXG4gICAgICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgICBtYXhCdWJibGVzU2VsZWN0ZWQ6M1xuICAgIH07XG5cbiAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXSA9IFtdO1xuXG4gICAgbGV0IG1heEJ1YmJsZUNvdW50PS0xO1xuICAgIGxldCBtaW5CdWJibGVDb3VudD0tMTtcbiAgICBsZXQgbnVtT2ZCdWJibGVzPTA7XG4gICAgbGV0IHRvdGFsQ291bnQ9MDtcbiAgICBsZXQgbnVtT2ZTZWxlY3RlZEJ1YmJsZXM9MDtcbiAgICBkYXRhLmJ1YmJsZXMuZm9yRWFjaCggYnViYmxlID0+IHtcbiAgICAgIGlmKG1heEJ1YmJsZUNvdW50PGJ1YmJsZS5jb3VudCkgbWF4QnViYmxlQ291bnQ9YnViYmxlLmNvdW50O1xuICAgICAgaWYobWluQnViYmxlQ291bnQ8MCB8fCBtaW5CdWJibGVDb3VudD5idWJibGUuY291bnQpIG1pbkJ1YmJsZUNvdW50PWJ1YmJsZS5jb3VudDtcbiAgICAgIG51bU9mQnViYmxlcysrO1xuICAgICAgdG90YWxDb3VudCs9YnViYmxlLmNvdW50O1xuICAgICAgaWYoYnViYmxlLnNlbGVjdGVkKSBudW1PZlNlbGVjdGVkQnViYmxlcysrO1xuICAgIH0pO1xuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgbGV0IGJJZCA9IGJ1YmJsZS5pZDtcbiAgICAgIC8vbGV0IGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIGJ1YmJsZS5jb3VudCAtIChtaW5CdWJibGVDb3VudC8zKSApLyggKG1heEJ1YmJsZUNvdW50KjMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICk7XG4gICAgICAvL2xldCBidWJibGVSYWRpdXMgPSAyKiggKChjb250YWluZXJTaXplLyhudW1PZkJ1YmJsZXMqKHRvdGFsQ291bnQvNjAwKSkpKmJ1YmJsZVBlcmNlbnRhZ2UpLyggTWF0aC5wb3cobnVtT2ZTZWxlY3RlZEJ1YmJsZXMrMSwxLjgpKSApO1xuICAgICAgbGV0IGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIGJ1YmJsZS5jb3VudCAtIChtaW5CdWJibGVDb3VudC8zKSApLyggKG1heEJ1YmJsZUNvdW50KjMpIC0gKG1pbkJ1YmJsZUNvdW50LzMpICk7XG4gICAgICBsZXQgYnViYmxlUmFkaXVzID0gKE1hdGgubG9nKGNvbnRhaW5lclNpemUpLzEwKSooYnViYmxlUGVyY2VudGFnZSozKSooNzAtTWF0aC5zcXJ0KG51bU9mQnViYmxlcykpO1xuICAgICAgbGV0IGJ1YmJsZURhdGEgPSB7XG4gICAgICAgIGlkOiBiSWQsXG4gICAgICAgIHRleHRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMFwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1RpdGxlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGJ1YmJsZS5lbnRpdHkubGFiZWwgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbU51bSA9IChkLnJhZGl1cy85KTtcbiAgICAgICAgICAgICAgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIG1OdW09MDtcbiAgICAgICAgICAgICAgcmV0dXJuIGQueS1tTnVtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwxXCIsXG4gICAgICAgICAgICBsYWJlbDogKGQpID0+IHsgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIHJldHVybiBudWxsOyByZXR1cm4gYnViYmxlLmNvdW50IH0sXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzYsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHg6IGNXaWR0aC8yKzUwLFxuICAgICAgICB5OiBjSGVpZ2h0LzIrNTAsXG4gICAgICAgIFwicmFkaXVzXCI6IGJ1YmJsZVJhZGl1cyxcbiAgICAgICAgY29sb3I6YnViYmxlLmNvbG9yLFxuICAgICAgICBoYXNDbG9zZUljb246ICggYnViYmxlLnNlbGVjdGVkID8gYnViYmxlLnNlbGVjdGVkIDogZmFsc2UgKSxcbiAgICAgICAgcGF5bG9hZDp7XG4gICAgICAgICAgaWQ6IGJJZFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10ucHVzaChidWJibGVEYXRhKTtcbiAgICB9KTtcblxuXG4gICAgYnViYmxlc0RhdGFbJ2ZvcmNlU2ltdWxhdGlvbkRhdGEnXSA9IHtcbiAgICAgIHhQdWxsOiBjV2lkdGgvMixcbiAgICAgIHhQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgeVB1bGw6IGNIZWlnaHQvMixcbiAgICAgIHlQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgY29sbGlzaW9uU3RyZW5naDogMC45OSxcbiAgICAgIGNvbGxpc2lvbkl0ZXJhdGlvbnM6IDEsXG4gICAgICB2ZWxvY2l0eURlY2F5OiAwLjY1XG4gICAgfVxuXG4gICAgaWYoZGF0YS5yZXNldCkgYnViYmxlc0RhdGFbJ3Jlc2V0J10gPSBkYXRhLnJlc2V0O1xuXG4gICAgaWYoZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UpIGJ1YmJsZXNEYXRhWydzZXRVcGRhdGVSZWZlcmVuY2UnXSA9IGRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlO1xuICAgIGlmKGRhdGEuc2V0QnViYmxlQ2hhcnQpIGJ1YmJsZXNEYXRhWydzZXRCdWJibGVDaGFydCddID0gZGF0YS5zZXRCdWJibGVDaGFydDtcbiAgICByZXR1cm4gYnViYmxlc0RhdGE7XG4gIH1cbn0iXX0=