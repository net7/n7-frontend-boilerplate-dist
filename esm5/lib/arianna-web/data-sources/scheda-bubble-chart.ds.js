/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaBubbleChartDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSchedaBubbleChartDS, _super);
    function AwSchedaBubbleChartDS() {
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
    AwSchedaBubbleChartDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!data)
            return null;
        /** @type {?} */
        var bubbleCointainer = document.getElementById(data.containerId);
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
            if (maxBubbleCount < bubble.count) {
                maxBubbleCount = bubble.count;
            }
            if (minBubbleCount < 0 || minBubbleCount > bubble.count) {
                minBubbleCount = bubble.count;
            }
            numOfBubbles++;
            totalCount += bubble.count;
            if (bubble.selected) {
                numOfSelectedBubbles++;
            }
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
                        id: bId + '_label0',
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return bubble.entity.label; }),
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
                            if (d.radius < _this.thresholdShowValue) {
                                mNum = 0;
                            }
                            return d.y - mNum;
                        }),
                        'user_select': 'none',
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.radius / 5; }),
                        color: 'white',
                        'classes': ''
                    },
                    {
                        id: bId + '_label1',
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { if (d.radius < _this.thresholdShowValue) {
                            return null;
                        } return bubble.count; }),
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
                        'user_select': 'none',
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.radius / 6; }),
                        color: 'white',
                        'classes': ''
                    }
                ],
                x: cWidth / 2 + 50,
                y: cHeight / 2 + 50,
                'radius': bubbleRadius,
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
        if (data.reset) {
            bubblesData['reset'] = data.reset;
        }
        if (data.setUpdateReference) {
            bubblesData['setUpdateReference'] = data.setUpdateReference;
        }
        if (data.setBubbleChart) {
            bubblesData['setBubbleChart'] = data.setBubbleChart;
        }
        return bubblesData;
    };
    return AwSchedaBubbleChartDS;
}(DataSource));
export { AwSchedaBubbleChartDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSchedaBubbleChartDS.prototype.thresholdShowTitle;
    /**
     * @type {?}
     * @private
     */
    AwSchedaBubbleChartDS.prototype.thresholdShowValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJ1YmJsZS1jaGFydC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvc2NoZWRhLWJ1YmJsZS1jaGFydC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUEyQyxpREFBVTtJQUFyRDtRQUFBLHFFQXFHQztRQW5HUyx3QkFBa0IsR0FBVSxFQUFFLENBQUM7UUFDL0Isd0JBQWtCLEdBQVUsRUFBRSxDQUFDOztJQWtHekMsQ0FBQzs7Ozs7O0lBaEdXLHlDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQStGQztRQTlGQyxJQUFHLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDOztZQUVsQixnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O1lBQzFELE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXOzs7WUFFckMsT0FBTyxHQUFHLEdBQUc7OztZQUViLGFBQWEsR0FBRyxNQUFNLEdBQUcsT0FBTzs7WUFFbEMsV0FBVyxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsY0FBYyxFQUFHLE1BQU07WUFDdkIsZUFBZSxFQUFHLE9BQU87WUFDekIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5QixrQkFBa0IsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7WUFFNUIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7WUFDbkIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7WUFDbkIsWUFBWSxHQUFHLENBQUM7O1lBQ2hCLFVBQVUsR0FBRyxDQUFDOztZQUNkLG9CQUFvQixHQUFHLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxP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QUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FBRTtRQUMvRSxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBckdELENBQTJDLFVBQVUsR0FxR3BEOzs7Ozs7O0lBbkdDLG1EQUF1Qzs7Ozs7SUFDdkMsbURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJVQkJMRUNIQVJUX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUJ1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcml2YXRlIHRocmVzaG9sZFNob3dUaXRsZTpudW1iZXIgPSA1MDtcbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VmFsdWU6bnVtYmVyID0gNjA7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBpZighZGF0YSkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgYnViYmxlQ29pbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEuY29udGFpbmVySWQpO1xuICAgIGNvbnN0IGNXaWR0aCA9IGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgLy8gVE9ETzogdGhpbmsgb2YgYSBnb29kIHdheSB0byBwYXNzL2NvbXB1dGUgY0hlaWdodFxuICAgIGNvbnN0IGNIZWlnaHQgPSA3MDA7IC8vIGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0SGVpZ2h0XG5cbiAgICBjb25zdCBjb250YWluZXJTaXplID0gY1dpZHRoICogY0hlaWdodDtcblxuICAgIGxldCBidWJibGVzRGF0YSA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiBcImJ1YmJsZUNoYXJ0Q29udGFpbmVyXCIsXG4gICAgICBjb250YWluZXJXaWR0aCA6IGNXaWR0aCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCA6IGNIZWlnaHQsXG4gICAgICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgICBtYXhCdWJibGVzU2VsZWN0ZWQ6IDNcbiAgICB9O1xuXG4gICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10gPSBbXTtcblxuICAgIGxldCBtYXhCdWJibGVDb3VudCA9IC0xO1xuICAgIGxldCBtaW5CdWJibGVDb3VudCA9IC0xO1xuICAgIGxldCBudW1PZkJ1YmJsZXMgPSAwO1xuICAgIGxldCB0b3RhbENvdW50ID0gMDtcbiAgICBsZXQgbnVtT2ZTZWxlY3RlZEJ1YmJsZXMgPSAwO1xuXG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBpZiAoIG1heEJ1YmJsZUNvdW50IDwgYnViYmxlLmNvdW50ICkgeyBtYXhCdWJibGVDb3VudCA9IGJ1YmJsZS5jb3VudDsgfVxuICAgICAgaWYgKCBtaW5CdWJibGVDb3VudCA8IDAgfHwgbWluQnViYmxlQ291bnQgPiBidWJibGUuY291bnQgKSB7IG1pbkJ1YmJsZUNvdW50ID0gYnViYmxlLmNvdW50OyB9XG4gICAgICBudW1PZkJ1YmJsZXMrKztcbiAgICAgIHRvdGFsQ291bnQgKz0gYnViYmxlLmNvdW50O1xuICAgICAgaWYgKCBidWJibGUuc2VsZWN0ZWQgKSB7IG51bU9mU2VsZWN0ZWRCdWJibGVzKys7IH1cbiAgICB9KTtcblxuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgbGV0IGJJZCA9IGJ1YmJsZS5pZDtcbiAgICAgIGxldCBidWJibGVQZXJjZW50YWdlID0gKCBidWJibGUuY291bnQgLSAobWluQnViYmxlQ291bnQvMykgKS8oIChtYXhCdWJibGVDb3VudCozKSAtIChtaW5CdWJibGVDb3VudC8zKSApO1xuICAgICAgbGV0IGJ1YmJsZVJhZGl1cyA9IChNYXRoLmxvZyhjb250YWluZXJTaXplKSAvIDEwICkgKiAoYnViYmxlUGVyY2VudGFnZSAqIDMgKSAqICggNzAgLSBNYXRoLnNxcnQobnVtT2ZCdWJibGVzKSk7XG4gICAgICBsZXQgYnViYmxlRGF0YSA9IHtcbiAgICAgICAgaWQ6IGJJZCxcbiAgICAgICAgdGV4dHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogYklkICsgJ19sYWJlbDAnLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiAgYnViYmxlLmVudGl0eS5sYWJlbCxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbU51bSA9IChkLnJhZGl1cyAvIDkgKTtcbiAgICAgICAgICAgICAgaWYgKCBkLnJhZGl1cyA8IHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlICkgeyBtTnVtID0gMDsgfVxuICAgICAgICAgICAgICByZXR1cm4gZC55IC0gbU51bTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndXNlcl9zZWxlY3QnOidub25lJyxcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMgLyA1LFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAnY2xhc3Nlcyc6JydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkIDogYklkICsgJ19sYWJlbDEnLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmICggZC5yYWRpdXMgPCB0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSApIHsgcmV0dXJuIG51bGw7IH0gcmV0dXJuIGJ1YmJsZS5jb3VudDsgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55ICsgKCBkLnJhZGl1cyAvIDkgKSxcbiAgICAgICAgICAgICd1c2VyX3NlbGVjdCc6ICdub25lJyxcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMgLyA2LFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAnY2xhc3NlcycgOiAnJ1xuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHg6IGNXaWR0aCAvIDIgKyA1MCxcbiAgICAgICAgeTogY0hlaWdodCAvIDIgKyA1MCxcbiAgICAgICAgJ3JhZGl1cyc6IGJ1YmJsZVJhZGl1cyxcbiAgICAgICAgY29sb3IgOiBidWJibGUuY29sb3IsXG4gICAgICAgIGhhc0Nsb3NlSWNvbjogKCBidWJibGUuc2VsZWN0ZWQgPyBidWJibGUuc2VsZWN0ZWQgOiBmYWxzZSApLFxuICAgICAgICBwYXlsb2FkOntcbiAgICAgICAgICBpZDogYklkXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXS5wdXNoKGJ1YmJsZURhdGEpO1xuICAgIH0pO1xuXG5cbiAgICBidWJibGVzRGF0YVsnZm9yY2VTaW11bGF0aW9uRGF0YSddID0ge1xuICAgICAgeFB1bGw6IGNXaWR0aCAvIDIsXG4gICAgICB4UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIHlQdWxsOiBjSGVpZ2h0IC8gMixcbiAgICAgIHlQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgY29sbGlzaW9uU3RyZW5naDogMC45OSxcbiAgICAgIGNvbGxpc2lvbkl0ZXJhdGlvbnM6IDEsXG4gICAgICB2ZWxvY2l0eURlY2F5OiAwLjY1XG4gICAgfVxuXG4gICAgaWYgKCBkYXRhLnJlc2V0ICl7IGJ1YmJsZXNEYXRhWydyZXNldCddID0gZGF0YS5yZXNldDsgfVxuXG4gICAgaWYgKCBkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSApeyBidWJibGVzRGF0YVsnc2V0VXBkYXRlUmVmZXJlbmNlJ10gPSBkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZTsgfVxuICAgIGlmKGRhdGEuc2V0QnViYmxlQ2hhcnQpeyBidWJibGVzRGF0YVsnc2V0QnViYmxlQ2hhcnQnXSA9IGRhdGEuc2V0QnViYmxlQ2hhcnQ7IH1cbiAgICByZXR1cm4gYnViYmxlc0RhdGE7XG4gIH1cbn0iXX0=