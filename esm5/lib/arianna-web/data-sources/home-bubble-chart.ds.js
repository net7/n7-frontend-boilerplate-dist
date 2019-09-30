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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYnViYmxlLWNoYXJ0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXlDLCtDQUFVO0lBQW5EO1FBQUEscUVBcUdDO1FBbkdTLHdCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUMvQix3QkFBa0IsR0FBVSxFQUFFLENBQUM7O0lBa0d6QyxDQUFDOzs7Ozs7SUFoR1csdUNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFBeEIsaUJBK0ZDO1FBOUZDLElBQUcsQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7O1lBRWxCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUM7O1lBQ2xFLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXOzs7WUFFckMsT0FBTyxHQUFHLEdBQUc7OztZQUViLGFBQWEsR0FBRyxNQUFNLEdBQUMsT0FBTzs7WUFFaEMsV0FBVyxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsY0FBYyxFQUFHLE1BQU07WUFDdkIsZUFBZSxFQUFHLE9BQU87WUFDekIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5QixrQkFBa0IsRUFBQyxDQUFDO1NBQ3JCO1FBRUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7WUFFNUIsY0FBYyxHQUFDLENBQUMsQ0FBQzs7WUFDakIsY0FBYyxHQUFDLENBQUMsQ0FBQzs7WUFDakIsWUFBWSxHQUFDLENBQUM7O1lBQ2QsVUFBVSxHQUFDLENBQUM7O1lBQ1osb0JBQW9CLEdBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBRSxV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QUM7UUFDNUUsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQXJHRCxDQUF5QyxVQUFVLEdBcUdsRDs7Ozs7OztJQW5HQyxpREFBdUM7Ozs7O0lBQ3ZDLGlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBCVUJCTEVDSEFSVF9NT0NLIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lQnViYmxlQ2hhcnREUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByaXZhdGUgdGhyZXNob2xkU2hvd1RpdGxlOm51bWJlciA9IDUwO1xuICBwcml2YXRlIHRocmVzaG9sZFNob3dWYWx1ZTpudW1iZXIgPSA2MDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIGlmKCFkYXRhKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBidWJibGVDb2ludGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWJibGUtY2hhcnQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNXaWR0aCA9IGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgLy8gVE9ETzogdGhpbmsgb2YgYSBnb29kIHdheSB0byBwYXNzL2NvbXB1dGUgY0hlaWdodFxuICAgIGNvbnN0IGNIZWlnaHQgPSA3MDA7IC8vIGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0SGVpZ2h0XG5cbiAgICBjb25zdCBjb250YWluZXJTaXplID0gY1dpZHRoKmNIZWlnaHQ7XG5cbiAgICBsZXQgYnViYmxlc0RhdGEgPSB7XG4gICAgICBjb250YWluZXJJZDogXCJidWJibGVDaGFydENvbnRhaW5lclwiLFxuICAgICAgY29udGFpbmVyV2lkdGggOiBjV2lkdGgsXG4gICAgICBjb250YWluZXJIZWlnaHQgOiBjSGVpZ2h0LFxuICAgICAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiB0cnVlLFxuICAgICAgbWF4QnViYmxlc1NlbGVjdGVkOjNcbiAgICB9O1xuXG4gICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10gPSBbXTtcblxuICAgIGxldCBtYXhCdWJibGVDb3VudD0tMTtcbiAgICBsZXQgbWluQnViYmxlQ291bnQ9LTE7XG4gICAgbGV0IG51bU9mQnViYmxlcz0wO1xuICAgIGxldCB0b3RhbENvdW50PTA7XG4gICAgbGV0IG51bU9mU2VsZWN0ZWRCdWJibGVzPTA7XG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBpZihtYXhCdWJibGVDb3VudDxidWJibGUuY291bnQpIG1heEJ1YmJsZUNvdW50PWJ1YmJsZS5jb3VudDtcbiAgICAgIGlmKG1pbkJ1YmJsZUNvdW50PDAgfHwgbWluQnViYmxlQ291bnQ+YnViYmxlLmNvdW50KSBtaW5CdWJibGVDb3VudD1idWJibGUuY291bnQ7XG4gICAgICBudW1PZkJ1YmJsZXMrKztcbiAgICAgIHRvdGFsQ291bnQrPWJ1YmJsZS5jb3VudDtcbiAgICAgIGlmKGJ1YmJsZS5zZWxlY3RlZCkgbnVtT2ZTZWxlY3RlZEJ1YmJsZXMrKztcbiAgICB9KTtcbiAgICBkYXRhLmJ1YmJsZXMuZm9yRWFjaCggYnViYmxlID0+IHtcbiAgICAgIGxldCBiSWQgPSBidWJibGUuaWQ7XG4gICAgICAvL2xldCBidWJibGVQZXJjZW50YWdlID0gKCBidWJibGUuY291bnQgLSAobWluQnViYmxlQ291bnQvMykgKS8oIChtYXhCdWJibGVDb3VudCozKSAtIChtaW5CdWJibGVDb3VudC8zKSApO1xuICAgICAgLy9sZXQgYnViYmxlUmFkaXVzID0gMiooICgoY29udGFpbmVyU2l6ZS8obnVtT2ZCdWJibGVzKih0b3RhbENvdW50LzYwMCkpKSpidWJibGVQZXJjZW50YWdlKS8oIE1hdGgucG93KG51bU9mU2VsZWN0ZWRCdWJibGVzKzEsMS44KSkgKTtcbiAgICAgIGxldCBidWJibGVQZXJjZW50YWdlID0gKCBidWJibGUuY291bnQgLSAobWluQnViYmxlQ291bnQvMykgKS8oIChtYXhCdWJibGVDb3VudCozKSAtIChtaW5CdWJibGVDb3VudC8zKSApO1xuICAgICAgbGV0IGJ1YmJsZVJhZGl1cyA9IChNYXRoLmxvZyhjb250YWluZXJTaXplKS8xMCkqKGJ1YmJsZVBlcmNlbnRhZ2UqMykqKDcwLU1hdGguc3FydChudW1PZkJ1YmJsZXMpKTtcbiAgICAgIGxldCBidWJibGVEYXRhID0ge1xuICAgICAgICBpZDogYklkLFxuICAgICAgICB0ZXh0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDBcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dUaXRsZSkgcmV0dXJuIG51bGw7IHJldHVybiBidWJibGUuZW50aXR5LmxhYmVsIH0sXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG1OdW0gPSAoZC5yYWRpdXMvOSk7XG4gICAgICAgICAgICAgIGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlKSBtTnVtPTA7XG4gICAgICAgICAgICAgIHJldHVybiBkLnktbU51bTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMVwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGJ1YmJsZS5jb3VudCB9LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy82LFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB4OiBjV2lkdGgvMis1MCxcbiAgICAgICAgeTogY0hlaWdodC8yKzUwLFxuICAgICAgICBcInJhZGl1c1wiOiBidWJibGVSYWRpdXMsXG4gICAgICAgIGNvbG9yOmJ1YmJsZS5jb2xvcixcbiAgICAgICAgaGFzQ2xvc2VJY29uOiAoIGJ1YmJsZS5zZWxlY3RlZCA/IGJ1YmJsZS5zZWxlY3RlZCA6IGZhbHNlICksXG4gICAgICAgIHBheWxvYWQ6e1xuICAgICAgICAgIGlkOiBiSWRcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIGJ1YmJsZXNEYXRhWydidWJibGVzRGF0YSddLnB1c2goYnViYmxlRGF0YSk7XG4gICAgfSk7XG5cblxuICAgIGJ1YmJsZXNEYXRhWydmb3JjZVNpbXVsYXRpb25EYXRhJ10gPSB7XG4gICAgICB4UHVsbDogY1dpZHRoLzIsXG4gICAgICB4UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIHlQdWxsOiBjSGVpZ2h0LzIsXG4gICAgICB5UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIGNvbGxpc2lvblN0cmVuZ2g6IDAuOTksXG4gICAgICBjb2xsaXNpb25JdGVyYXRpb25zOiAxLFxuICAgICAgdmVsb2NpdHlEZWNheTogMC42NVxuICAgIH1cblxuICAgIGlmKGRhdGEucmVzZXQpIGJ1YmJsZXNEYXRhWydyZXNldCddID0gZGF0YS5yZXNldDtcblxuICAgIGlmKGRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlKSBidWJibGVzRGF0YVsnc2V0VXBkYXRlUmVmZXJlbmNlJ10gPSBkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZTtcbiAgICBpZihkYXRhLnNldEJ1YmJsZUNoYXJ0KSBidWJibGVzRGF0YVsnc2V0QnViYmxlQ2hhcnQnXSA9IGRhdGEuc2V0QnViYmxlQ2hhcnQ7XG4gICAgcmV0dXJuIGJ1YmJsZXNEYXRhO1xuICB9XG59Il19