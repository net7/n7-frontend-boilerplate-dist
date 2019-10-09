/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwSchedaBubbleChartDS extends DataSource {
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
        let bubbleCointainer = document.getElementById(data.containerId);
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
        bubble => {
            /** @type {?} */
            let bId = bubble.id;
            /** @type {?} */
            let bubblePercentage = (bubble.count - (minBubbleCount / 3)) / ((maxBubbleCount * 3) - (minBubbleCount / 3));
            /** @type {?} */
            let bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            /** @type {?} */
            let bubbleData = {
                id: bId,
                texts: [
                    {
                        id: bId + '_label0',
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => bubble.entity.label),
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
                            if (d.radius < this.thresholdShowValue) {
                                mNum = 0;
                            }
                            return d.y - mNum;
                        }),
                        'user_select': 'none',
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.radius / 5),
                        color: 'white',
                        'classes': ''
                    },
                    {
                        id: bId + '_label1',
                        label: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => { if (d.radius < this.thresholdShowValue) {
                            return null;
                        } return bubble.count; }),
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
                        'user_select': 'none',
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.radius / 6),
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJ1YmJsZS1jaGFydC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvc2NoZWRhLWJ1YmJsZS1jaGFydC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxVQUFVO0lBQXJEOztRQUVVLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUMvQix1QkFBa0IsR0FBVSxFQUFFLENBQUM7SUFrR3pDLENBQUM7Ozs7OztJQWhHVyxTQUFTLENBQUMsSUFBSTtRQUN0QixJQUFHLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDOztZQUVsQixnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O2NBQzFELE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXOzs7Y0FFckMsT0FBTyxHQUFHLEdBQUc7OztjQUViLGFBQWEsR0FBRyxNQUFNLEdBQUcsT0FBTzs7WUFFbEMsV0FBVyxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsY0FBYyxFQUFHLE1BQU07WUFDdkIsZUFBZSxFQUFHLE9BQU87WUFDekIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5QixrQkFBa0IsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7WUFFNUIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7WUFDbkIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7WUFDbkIsWUFBWSxHQUFHLENBQUM7O1lBQ2hCLFVBQVUsR0FBRyxDQUFDOztZQUNkLG9CQUFvQixHQUFHLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUUsTUFBTSxDQUFDLEVB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O1FBQy9FLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7Ozs7O0lBbkdDLG1EQUF1Qzs7Ozs7SUFDdkMsbURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJVQkJMRUNIQVJUX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUJ1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcml2YXRlIHRocmVzaG9sZFNob3dUaXRsZTpudW1iZXIgPSA1MDtcbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VmFsdWU6bnVtYmVyID0gNjA7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBpZighZGF0YSkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgYnViYmxlQ29pbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEuY29udGFpbmVySWQpO1xuICAgIGNvbnN0IGNXaWR0aCA9IGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgLy8gVE9ETzogdGhpbmsgb2YgYSBnb29kIHdheSB0byBwYXNzL2NvbXB1dGUgY0hlaWdodFxuICAgIGNvbnN0IGNIZWlnaHQgPSA3MDA7IC8vIGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0SGVpZ2h0XG5cbiAgICBjb25zdCBjb250YWluZXJTaXplID0gY1dpZHRoICogY0hlaWdodDtcblxuICAgIGxldCBidWJibGVzRGF0YSA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiBcImJ1YmJsZUNoYXJ0Q29udGFpbmVyXCIsXG4gICAgICBjb250YWluZXJXaWR0aCA6IGNXaWR0aCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCA6IGNIZWlnaHQsXG4gICAgICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgICBtYXhCdWJibGVzU2VsZWN0ZWQ6IDNcbiAgICB9O1xuXG4gICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10gPSBbXTtcblxuICAgIGxldCBtYXhCdWJibGVDb3VudCA9IC0xO1xuICAgIGxldCBtaW5CdWJibGVDb3VudCA9IC0xO1xuICAgIGxldCBudW1PZkJ1YmJsZXMgPSAwO1xuICAgIGxldCB0b3RhbENvdW50ID0gMDtcbiAgICBsZXQgbnVtT2ZTZWxlY3RlZEJ1YmJsZXMgPSAwO1xuXG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBpZiAoIG1heEJ1YmJsZUNvdW50IDwgYnViYmxlLmNvdW50ICkgeyBtYXhCdWJibGVDb3VudCA9IGJ1YmJsZS5jb3VudDsgfVxuICAgICAgaWYgKCBtaW5CdWJibGVDb3VudCA8IDAgfHwgbWluQnViYmxlQ291bnQgPiBidWJibGUuY291bnQgKSB7IG1pbkJ1YmJsZUNvdW50ID0gYnViYmxlLmNvdW50OyB9XG4gICAgICBudW1PZkJ1YmJsZXMrKztcbiAgICAgIHRvdGFsQ291bnQgKz0gYnViYmxlLmNvdW50O1xuICAgICAgaWYgKCBidWJibGUuc2VsZWN0ZWQgKSB7IG51bU9mU2VsZWN0ZWRCdWJibGVzKys7IH1cbiAgICB9KTtcblxuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgbGV0IGJJZCA9IGJ1YmJsZS5pZDtcbiAgICAgIGxldCBidWJibGVQZXJjZW50YWdlID0gKCBidWJibGUuY291bnQgLSAobWluQnViYmxlQ291bnQvMykgKS8oIChtYXhCdWJibGVDb3VudCozKSAtIChtaW5CdWJibGVDb3VudC8zKSApO1xuICAgICAgbGV0IGJ1YmJsZVJhZGl1cyA9IChNYXRoLmxvZyhjb250YWluZXJTaXplKSAvIDEwICkgKiAoYnViYmxlUGVyY2VudGFnZSAqIDMgKSAqICggNzAgLSBNYXRoLnNxcnQobnVtT2ZCdWJibGVzKSk7XG4gICAgICBsZXQgYnViYmxlRGF0YSA9IHtcbiAgICAgICAgaWQ6IGJJZCxcbiAgICAgICAgdGV4dHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogYklkICsgJ19sYWJlbDAnLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiAgYnViYmxlLmVudGl0eS5sYWJlbCxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbU51bSA9IChkLnJhZGl1cyAvIDkgKTtcbiAgICAgICAgICAgICAgaWYgKCBkLnJhZGl1cyA8IHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlICkgeyBtTnVtID0gMDsgfVxuICAgICAgICAgICAgICByZXR1cm4gZC55IC0gbU51bTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndXNlcl9zZWxlY3QnOidub25lJyxcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMgLyA1LFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAnY2xhc3Nlcyc6JydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkIDogYklkICsgJ19sYWJlbDEnLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmICggZC5yYWRpdXMgPCB0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSApIHsgcmV0dXJuIG51bGw7IH0gcmV0dXJuIGJ1YmJsZS5jb3VudDsgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55ICsgKCBkLnJhZGl1cyAvIDkgKSxcbiAgICAgICAgICAgICd1c2VyX3NlbGVjdCc6ICdub25lJyxcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMgLyA2LFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAnY2xhc3NlcycgOiAnJ1xuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHg6IGNXaWR0aCAvIDIgKyA1MCxcbiAgICAgICAgeTogY0hlaWdodCAvIDIgKyA1MCxcbiAgICAgICAgJ3JhZGl1cyc6IGJ1YmJsZVJhZGl1cyxcbiAgICAgICAgY29sb3IgOiBidWJibGUuY29sb3IsXG4gICAgICAgIGhhc0Nsb3NlSWNvbjogKCBidWJibGUuc2VsZWN0ZWQgPyBidWJibGUuc2VsZWN0ZWQgOiBmYWxzZSApLFxuICAgICAgICBwYXlsb2FkOntcbiAgICAgICAgICBpZDogYklkXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXS5wdXNoKGJ1YmJsZURhdGEpO1xuICAgIH0pO1xuXG5cbiAgICBidWJibGVzRGF0YVsnZm9yY2VTaW11bGF0aW9uRGF0YSddID0ge1xuICAgICAgeFB1bGw6IGNXaWR0aCAvIDIsXG4gICAgICB4UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIHlQdWxsOiBjSGVpZ2h0IC8gMixcbiAgICAgIHlQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgY29sbGlzaW9uU3RyZW5naDogMC45OSxcbiAgICAgIGNvbGxpc2lvbkl0ZXJhdGlvbnM6IDEsXG4gICAgICB2ZWxvY2l0eURlY2F5OiAwLjY1XG4gICAgfVxuXG4gICAgaWYgKCBkYXRhLnJlc2V0ICl7IGJ1YmJsZXNEYXRhWydyZXNldCddID0gZGF0YS5yZXNldDsgfVxuXG4gICAgaWYgKCBkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSApeyBidWJibGVzRGF0YVsnc2V0VXBkYXRlUmVmZXJlbmNlJ10gPSBkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZTsgfVxuICAgIGlmKGRhdGEuc2V0QnViYmxlQ2hhcnQpeyBidWJibGVzRGF0YVsnc2V0QnViYmxlQ2hhcnQnXSA9IGRhdGEuc2V0QnViYmxlQ2hhcnQ7IH1cbiAgICByZXR1cm4gYnViYmxlc0RhdGE7XG4gIH1cbn0iXX0=