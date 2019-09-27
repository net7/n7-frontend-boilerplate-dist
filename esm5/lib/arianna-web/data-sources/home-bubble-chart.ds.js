/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwHomeBubbleChartDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeBubbleChartDS, _super);
    function AwHomeBubbleChartDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.thresholdShowTitle = 50;
        _this.thresholdShowValue = 60;
        return _this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeBubbleChartDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!data)
            return null;
        /** @type {?} */
        var bubbleCointainer = document.getElementById("bubble-chart-container");
        /** @type {?} */
        var cWidth = bubbleCointainer.offsetWidth;
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        var cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        var containerSize = cWidth * cHeight;
        /** @type {?} */
        var bubblesData = {
            containerId: "bubbleChartContainer",
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
        console.log({ containerSize: Math.log(containerSize), numOfBubbles: numOfBubbles, minBubbleCount: minBubbleCount, maxBubbleCount: maxBubbleCount, totalCount: totalCount, numOfSelectedBubbles: numOfSelectedBubbles });
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            /** @type {?} */
            var bId = bubble.id;
            //let bubblePercentage = ( bubble.count - (minBubbleCount/3) )/( (maxBubbleCount*3) - (minBubbleCount/3) );
            //let bubbleRadius = 2*( ((containerSize/(numOfBubbles*(totalCount/600)))*bubblePercentage)/( Math.pow(numOfSelectedBubbles+1,1.8)) );
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
        return bubblesData;
    };
    return AwHomeBubbleChartDS;
}(DataSource));
export { AwHomeBubbleChartDS };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYnViYmxlLWNoYXJ0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXlDLCtDQUFVO0lBQW5EO1FBQUEscUVBc0dDO1FBcEdTLHdCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUMvQix3QkFBa0IsR0FBVSxFQUFFLENBQUM7O0lBbUd6QyxDQUFDOzs7Ozs7SUFqR1csdUNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFBeEIsaUJBZ0dDO1FBL0ZDLElBQUcsQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7O1lBRWxCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUM7O1lBQ2xFLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXOzs7WUFFckMsT0FBTyxHQUFHLEdBQUc7OztZQUViLGFBQWEsR0FBRyxNQUFNLEdBQUMsT0FBTzs7WUFFaEMsV0FBVyxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsY0FBYyxFQUFHLE1BQU07WUFDdkIsZUFBZSxFQUFHLE9BQU87WUFDekIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5QixrQkFBa0IsRUFBQyxDQUFDO1NBQ3JCO1FBRUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7WUFFNUIsY0FBYyxHQUFDLENBQUMsQ0FBQzs7WUFDakIsY0FBYyxHQUFDLENBQUMsQ0FBQzs7WUFDakIsWUFBWSxHQUFDLENBQUM7O1lBQ2QsVUFBVSxHQUFDLENBQUM7O1lBQ1osb0JBQW9CLEdBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBRSxV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QUFLLENBQUM7UUFFakQsSUFBRyxJQUFJLENBQUMsa0JBQWtCO1lBQUUsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3hGLElBQUcsSUFBSSxDQUFDLGNBQWM7WUFBRSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzVFLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUF0R0QsQ0FBeUMsVUFBVSxHQXNHbEQ7Ozs7Ozs7SUFwR0MsaURBQXVDOzs7OztJQUN2QyxpREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQlVCQkxFQ0hBUlRfTU9DSyB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUJ1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcml2YXRlIHRocmVzaG9sZFNob3dUaXRsZTpudW1iZXIgPSA1MDtcbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VmFsdWU6bnVtYmVyID0gNjA7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBpZighZGF0YSkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgYnViYmxlQ29pbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlLWNoYXJ0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjV2lkdGggPSBidWJibGVDb2ludGFpbmVyLm9mZnNldFdpZHRoO1xuICAgIC8vIFRPRE86IHRoaW5rIG9mIGEgZ29vZCB3YXkgdG8gcGFzcy9jb21wdXRlIGNIZWlnaHRcbiAgICBjb25zdCBjSGVpZ2h0ID0gNzAwOyAvLyBidWJibGVDb2ludGFpbmVyLm9mZnNldEhlaWdodFxuXG4gICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IGNXaWR0aCpjSGVpZ2h0O1xuXG4gICAgbGV0IGJ1YmJsZXNEYXRhID0ge1xuICAgICAgY29udGFpbmVySWQ6IFwiYnViYmxlQ2hhcnRDb250YWluZXJcIixcbiAgICAgIGNvbnRhaW5lcldpZHRoIDogY1dpZHRoLFxuICAgICAgY29udGFpbmVySGVpZ2h0IDogY0hlaWdodCxcbiAgICAgIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1heEJ1YmJsZXNTZWxlY3RlZDozXG4gICAgfTtcblxuICAgIGJ1YmJsZXNEYXRhWydidWJibGVzRGF0YSddID0gW107XG5cbiAgICBsZXQgbWF4QnViYmxlQ291bnQ9LTE7XG4gICAgbGV0IG1pbkJ1YmJsZUNvdW50PS0xO1xuICAgIGxldCBudW1PZkJ1YmJsZXM9MDtcbiAgICBsZXQgdG90YWxDb3VudD0wO1xuICAgIGxldCBudW1PZlNlbGVjdGVkQnViYmxlcz0wO1xuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgaWYobWF4QnViYmxlQ291bnQ8YnViYmxlLmNvdW50KSBtYXhCdWJibGVDb3VudD1idWJibGUuY291bnQ7XG4gICAgICBpZihtaW5CdWJibGVDb3VudDwwIHx8IG1pbkJ1YmJsZUNvdW50PmJ1YmJsZS5jb3VudCkgbWluQnViYmxlQ291bnQ9YnViYmxlLmNvdW50O1xuICAgICAgbnVtT2ZCdWJibGVzKys7XG4gICAgICB0b3RhbENvdW50Kz1idWJibGUuY291bnQ7XG4gICAgICBpZihidWJibGUuc2VsZWN0ZWQpIG51bU9mU2VsZWN0ZWRCdWJibGVzKys7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coe2NvbnRhaW5lclNpemU6TWF0aC5sb2coY29udGFpbmVyU2l6ZSksbnVtT2ZCdWJibGVzLG1pbkJ1YmJsZUNvdW50LG1heEJ1YmJsZUNvdW50LHRvdGFsQ291bnQsbnVtT2ZTZWxlY3RlZEJ1YmJsZXN9KTtcbiAgICBkYXRhLmJ1YmJsZXMuZm9yRWFjaCggYnViYmxlID0+IHtcbiAgICAgIGxldCBiSWQgPSBidWJibGUuaWQ7XG4gICAgICAvL2xldCBidWJibGVQZXJjZW50YWdlID0gKCBidWJibGUuY291bnQgLSAobWluQnViYmxlQ291bnQvMykgKS8oIChtYXhCdWJibGVDb3VudCozKSAtIChtaW5CdWJibGVDb3VudC8zKSApO1xuICAgICAgLy9sZXQgYnViYmxlUmFkaXVzID0gMiooICgoY29udGFpbmVyU2l6ZS8obnVtT2ZCdWJibGVzKih0b3RhbENvdW50LzYwMCkpKSpidWJibGVQZXJjZW50YWdlKS8oIE1hdGgucG93KG51bU9mU2VsZWN0ZWRCdWJibGVzKzEsMS44KSkgKTtcbiAgICAgIGxldCBidWJibGVQZXJjZW50YWdlID0gKCBidWJibGUuY291bnQgLSAobWluQnViYmxlQ291bnQvMykgKS8oIChtYXhCdWJibGVDb3VudCozKSAtIChtaW5CdWJibGVDb3VudC8zKSApO1xuICAgICAgbGV0IGJ1YmJsZVJhZGl1cyA9IChNYXRoLmxvZyhjb250YWluZXJTaXplKS8xMCkqKGJ1YmJsZVBlcmNlbnRhZ2UqMykqKDcwLU1hdGguc3FydChudW1PZkJ1YmJsZXMpKTtcbiAgICAgIGxldCBidWJibGVEYXRhID0ge1xuICAgICAgICBpZDogYklkLFxuICAgICAgICB0ZXh0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDBcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dUaXRsZSkgcmV0dXJuIG51bGw7IHJldHVybiBidWJibGUuZW50aXR5LmxhYmVsIH0sXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG1OdW0gPSAoZC5yYWRpdXMvOSk7XG4gICAgICAgICAgICAgIGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlKSBtTnVtPTA7XG4gICAgICAgICAgICAgIHJldHVybiBkLnktbU51bTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMVwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGJ1YmJsZS5jb3VudCB9LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy82LFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB4OiBjV2lkdGgvMis1MCxcbiAgICAgICAgeTogY0hlaWdodC8yKzUwLFxuICAgICAgICBcInJhZGl1c1wiOiBidWJibGVSYWRpdXMsXG4gICAgICAgIGNvbG9yOmJ1YmJsZS5jb2xvcixcbiAgICAgICAgaGFzQ2xvc2VJY29uOiAoIGJ1YmJsZS5zZWxlY3RlZCA/IGJ1YmJsZS5zZWxlY3RlZCA6IGZhbHNlICksXG4gICAgICAgIHBheWxvYWQ6e1xuICAgICAgICAgIGlkOiBiSWRcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIGJ1YmJsZXNEYXRhWydidWJibGVzRGF0YSddLnB1c2goYnViYmxlRGF0YSk7XG4gICAgfSk7XG5cblxuICAgIGJ1YmJsZXNEYXRhWydmb3JjZVNpbXVsYXRpb25EYXRhJ10gPSB7XG4gICAgICB4UHVsbDogY1dpZHRoLzIsXG4gICAgICB4UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIHlQdWxsOiBjSGVpZ2h0LzIsXG4gICAgICB5UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIGNvbGxpc2lvblN0cmVuZ2g6IDAuOTksXG4gICAgICBjb2xsaXNpb25JdGVyYXRpb25zOiAxLFxuICAgICAgdmVsb2NpdHlEZWNheTogMC42NVxuICAgIH1cblxuICAgIGlmKGRhdGEucmVzZXQpIGJ1YmJsZXNEYXRhWydyZXNldCddID0gZGF0YS5yZXNldDtcblxuICAgIGlmKGRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlKSBidWJibGVzRGF0YVsnc2V0VXBkYXRlUmVmZXJlbmNlJ10gPSBkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZTtcbiAgICBpZihkYXRhLnNldEJ1YmJsZUNoYXJ0KSBidWJibGVzRGF0YVsnc2V0QnViYmxlQ2hhcnQnXSA9IGRhdGEuc2V0QnViYmxlQ2hhcnQ7XG4gICAgcmV0dXJuIGJ1YmJsZXNEYXRhO1xuICB9XG59Il19