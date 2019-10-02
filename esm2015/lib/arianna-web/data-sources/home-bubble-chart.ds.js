/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHomeBubbleChartDS extends DataSource {
    constructor() {
        super(...arguments);
        // threshold below which a bubble should not show its title
        this.thresholdShowTitle = 50;
        // threshold below which a bubble should not show its number
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
        // now the bubblechart's height is hardcoded to 700, not sure
        // how it sould be actually set
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        const cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        const containerSize = cWidth * cHeight;
        // generic data of the bubble chart
        /** @type {?} */
        let bubblesData = {
            containerId: "bubbleChartContainer",
            containerWidth: cWidth,
            containerHeight: cHeight,
            isForceSimulationEnabled: true,
            maxBubblesSelected: 3
        };
        // data about each single bubble (starts as [] and gets filled)
        bubblesData['bubblesData'] = [];
        // first loop over all the data's bubbles to gather various numbers, such
        // as the maximum/minimum bubble value and number of selected bubbles
        /** @type {?} */
        let maxBubbleValue = -1;
        /** @type {?} */
        let minBubbleValue = -1;
        /** @type {?} */
        let numOfBubbles = 0;
        /** @type {?} */
        let totalValues = 0;
        /** @type {?} */
        let numOfSelectedBubbles = 0;
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        bubble => {
            if (maxBubbleValue < bubble.count)
                maxBubbleValue = bubble.count;
            if (minBubbleValue < 0 || minBubbleValue > bubble.count)
                minBubbleValue = bubble.count;
            numOfBubbles++;
            totalValues += bubble.count;
            if (bubble.selected)
                numOfSelectedBubbles++;
        }));
        // second loop  over all the data's bubbles, for each bubble a corresponding object
        // is created and addded to the bubblesData array
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        bubble => {
            /** @type {?} */
            let bId = bubble.id;
            // here I compute the bubble's radius (could/should be improved), for it I compute a percentage of the bubble's value
            // compared to all the bubbles and use that percentage to compute the bubble's radius
            // Note : I also use the containerSize and the number of bubbles, ideally also the totValues and
            //        numOfSelectedBubbles should be considered when computing the radius
            //        (selected bubbles are in theory larger bubbles so taking that into account
            //         could help for the radius computation)
            // Note : the radius computation is very important, if the bubbles' radiuses are too big then
            //        the bubbles will go one over the other and will not be able to move as they should, if
            //        the rediuses are instead too small then the bubbles will be to small and conver only a
            //        portion of the container
            /** @type {?} */
            let bubblePercentage = (bubble.count - (minBubbleValue / 3)) / ((maxBubbleValue * 3) - (minBubbleValue / 3));
            //let bubbleRadius = 2*( ((containerSize/(numOfBubbles*(totalCount/600)))*bubblePercentage)/( Math.pow(numOfSelectedBubbles+1,1.8)) );
            /** @type {?} */
            let bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            // creation of the bubbleData object
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
        // force simulation's parameters for the bubble chart
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYnViYmxlLWNoYXJ0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFBbkQ7OztRQUdVLHVCQUFrQixHQUFVLEVBQUUsQ0FBQzs7UUFFL0IsdUJBQWtCLEdBQVUsRUFBRSxDQUFDO0lBc0h6QyxDQUFDOzs7Ozs7SUFwSFcsU0FBUyxDQUFDLElBQUk7UUFDdEIsSUFBRyxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFFbEIsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQzs7Y0FDbEUsTUFBTSxHQUFHLGdCQUFnQixDQUFDLFdBQVc7Ozs7O2NBSXJDLE9BQU8sR0FBRyxHQUFHOzs7Y0FFYixhQUFhLEdBQUcsTUFBTSxHQUFDLE9BQU87OztZQUdoQyxXQUFXLEdBQUc7WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxjQUFjLEVBQUcsTUFBTTtZQUN2QixlQUFlLEVBQUcsT0FBTztZQUN6Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLGtCQUFrQixFQUFDLENBQUM7U0FDckI7UUFFRCwrREFBK0Q7UUFDL0QsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7OztZQUk1QixjQUFjLEdBQUMsQ0FBQyxDQUFDOztZQUNqQixjQUFjLEdBQUMsQ0FBQyxDQUFDOztZQUNqQixZQUFZLEdBQUMsQ0FBQzs7WUFDZCxXQUFXLEdBQUMsQ0FBQzs7WUFDYixvQkFBb0IsR0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFFLE1BQU0s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QUFDLGNBQWM7WUFBRSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRTVFLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7Ozs7O0lBeEhDLGlEQUF1Qzs7Ozs7SUFFdkMsaURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJVQkJMRUNIQVJUX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgLy8gdGhyZXNob2xkIGJlbG93IHdoaWNoIGEgYnViYmxlIHNob3VsZCBub3Qgc2hvdyBpdHMgdGl0bGVcbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VGl0bGU6bnVtYmVyID0gNTA7XG4gIC8vIHRocmVzaG9sZCBiZWxvdyB3aGljaCBhIGJ1YmJsZSBzaG91bGQgbm90IHNob3cgaXRzIG51bWJlclxuICBwcml2YXRlIHRocmVzaG9sZFNob3dWYWx1ZTpudW1iZXIgPSA2MDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIGlmKCFkYXRhKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBidWJibGVDb2ludGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWJibGUtY2hhcnQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNXaWR0aCA9IGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgLy8gbm93IHRoZSBidWJibGVjaGFydCdzIGhlaWdodCBpcyBoYXJkY29kZWQgdG8gNzAwLCBub3Qgc3VyZVxuICAgIC8vIGhvdyBpdCBzb3VsZCBiZSBhY3R1YWxseSBzZXRcbiAgICAvLyBUT0RPOiB0aGluayBvZiBhIGdvb2Qgd2F5IHRvIHBhc3MvY29tcHV0ZSBjSGVpZ2h0XG4gICAgY29uc3QgY0hlaWdodCA9IDcwMDsgLy8gYnViYmxlQ29pbnRhaW5lci5vZmZzZXRIZWlnaHRcblxuICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSBjV2lkdGgqY0hlaWdodDtcblxuICAgIC8vIGdlbmVyaWMgZGF0YSBvZiB0aGUgYnViYmxlIGNoYXJ0XG4gICAgbGV0IGJ1YmJsZXNEYXRhID0ge1xuICAgICAgY29udGFpbmVySWQ6IFwiYnViYmxlQ2hhcnRDb250YWluZXJcIixcbiAgICAgIGNvbnRhaW5lcldpZHRoIDogY1dpZHRoLFxuICAgICAgY29udGFpbmVySGVpZ2h0IDogY0hlaWdodCxcbiAgICAgIGlzRm9yY2VTaW11bGF0aW9uRW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1heEJ1YmJsZXNTZWxlY3RlZDozXG4gICAgfTtcblxuICAgIC8vIGRhdGEgYWJvdXQgZWFjaCBzaW5nbGUgYnViYmxlIChzdGFydHMgYXMgW10gYW5kIGdldHMgZmlsbGVkKVxuICAgIGJ1YmJsZXNEYXRhWydidWJibGVzRGF0YSddID0gW107XG5cbiAgICAvLyBmaXJzdCBsb29wIG92ZXIgYWxsIHRoZSBkYXRhJ3MgYnViYmxlcyB0byBnYXRoZXIgdmFyaW91cyBudW1iZXJzLCBzdWNoXG4gICAgLy8gYXMgdGhlIG1heGltdW0vbWluaW11bSBidWJibGUgdmFsdWUgYW5kIG51bWJlciBvZiBzZWxlY3RlZCBidWJibGVzXG4gICAgbGV0IG1heEJ1YmJsZVZhbHVlPS0xO1xuICAgIGxldCBtaW5CdWJibGVWYWx1ZT0tMTtcbiAgICBsZXQgbnVtT2ZCdWJibGVzPTA7XG4gICAgbGV0IHRvdGFsVmFsdWVzPTA7XG4gICAgbGV0IG51bU9mU2VsZWN0ZWRCdWJibGVzPTA7XG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBpZihtYXhCdWJibGVWYWx1ZTxidWJibGUuY291bnQpIG1heEJ1YmJsZVZhbHVlPWJ1YmJsZS5jb3VudDtcbiAgICAgIGlmKG1pbkJ1YmJsZVZhbHVlPDAgfHwgbWluQnViYmxlVmFsdWU+YnViYmxlLmNvdW50KSBtaW5CdWJibGVWYWx1ZT1idWJibGUuY291bnQ7XG4gICAgICBudW1PZkJ1YmJsZXMrKztcbiAgICAgIHRvdGFsVmFsdWVzKz1idWJibGUuY291bnQ7XG4gICAgICBpZihidWJibGUuc2VsZWN0ZWQpIG51bU9mU2VsZWN0ZWRCdWJibGVzKys7XG4gICAgfSk7XG5cbiAgICAvLyBzZWNvbmQgbG9vcCAgb3ZlciBhbGwgdGhlIGRhdGEncyBidWJibGVzLCBmb3IgZWFjaCBidWJibGUgYSBjb3JyZXNwb25kaW5nIG9iamVjdFxuICAgIC8vIGlzIGNyZWF0ZWQgYW5kIGFkZGRlZCB0byB0aGUgYnViYmxlc0RhdGEgYXJyYXlcbiAgICBkYXRhLmJ1YmJsZXMuZm9yRWFjaCggYnViYmxlID0+IHtcbiAgICAgIGxldCBiSWQgPSBidWJibGUuaWQ7XG4gICAgICAvLyBoZXJlIEkgY29tcHV0ZSB0aGUgYnViYmxlJ3MgcmFkaXVzIChjb3VsZC9zaG91bGQgYmUgaW1wcm92ZWQpLCBmb3IgaXQgSSBjb21wdXRlIGEgcGVyY2VudGFnZSBvZiB0aGUgYnViYmxlJ3MgdmFsdWVcbiAgICAgIC8vIGNvbXBhcmVkIHRvIGFsbCB0aGUgYnViYmxlcyBhbmQgdXNlIHRoYXQgcGVyY2VudGFnZSB0byBjb21wdXRlIHRoZSBidWJibGUncyByYWRpdXNcbiAgICAgIC8vIE5vdGUgOiBJIGFsc28gdXNlIHRoZSBjb250YWluZXJTaXplIGFuZCB0aGUgbnVtYmVyIG9mIGJ1YmJsZXMsIGlkZWFsbHkgYWxzbyB0aGUgdG90VmFsdWVzIGFuZFxuICAgICAgLy8gICAgICAgIG51bU9mU2VsZWN0ZWRCdWJibGVzIHNob3VsZCBiZSBjb25zaWRlcmVkIHdoZW4gY29tcHV0aW5nIHRoZSByYWRpdXNcbiAgICAgIC8vICAgICAgICAoc2VsZWN0ZWQgYnViYmxlcyBhcmUgaW4gdGhlb3J5IGxhcmdlciBidWJibGVzIHNvIHRha2luZyB0aGF0IGludG8gYWNjb3VudFxuICAgICAgLy8gICAgICAgICBjb3VsZCBoZWxwIGZvciB0aGUgcmFkaXVzIGNvbXB1dGF0aW9uKVxuICAgICAgLy8gTm90ZSA6IHRoZSByYWRpdXMgY29tcHV0YXRpb24gaXMgdmVyeSBpbXBvcnRhbnQsIGlmIHRoZSBidWJibGVzJyByYWRpdXNlcyBhcmUgdG9vIGJpZyB0aGVuXG4gICAgICAvLyAgICAgICAgdGhlIGJ1YmJsZXMgd2lsbCBnbyBvbmUgb3ZlciB0aGUgb3RoZXIgYW5kIHdpbGwgbm90IGJlIGFibGUgdG8gbW92ZSBhcyB0aGV5IHNob3VsZCwgaWZcbiAgICAgIC8vICAgICAgICB0aGUgcmVkaXVzZXMgYXJlIGluc3RlYWQgdG9vIHNtYWxsIHRoZW4gdGhlIGJ1YmJsZXMgd2lsbCBiZSB0byBzbWFsbCBhbmQgY29udmVyIG9ubHkgYVxuICAgICAgLy8gICAgICAgIHBvcnRpb24gb2YgdGhlIGNvbnRhaW5lclxuICAgICAgbGV0IGJ1YmJsZVBlcmNlbnRhZ2UgPSAoIGJ1YmJsZS5jb3VudCAtIChtaW5CdWJibGVWYWx1ZS8zKSApLyggKG1heEJ1YmJsZVZhbHVlKjMpIC0gKG1pbkJ1YmJsZVZhbHVlLzMpICk7XG4gICAgICAvL2xldCBidWJibGVSYWRpdXMgPSAyKiggKChjb250YWluZXJTaXplLyhudW1PZkJ1YmJsZXMqKHRvdGFsQ291bnQvNjAwKSkpKmJ1YmJsZVBlcmNlbnRhZ2UpLyggTWF0aC5wb3cobnVtT2ZTZWxlY3RlZEJ1YmJsZXMrMSwxLjgpKSApO1xuICAgICAgbGV0IGJ1YmJsZVJhZGl1cyA9IChNYXRoLmxvZyhjb250YWluZXJTaXplKS8xMCkqKGJ1YmJsZVBlcmNlbnRhZ2UqMykqKDcwLU1hdGguc3FydChudW1PZkJ1YmJsZXMpKTtcblxuICAgICAgLy8gY3JlYXRpb24gb2YgdGhlIGJ1YmJsZURhdGEgb2JqZWN0XG4gICAgICBsZXQgYnViYmxlRGF0YSA9IHtcbiAgICAgICAgaWQ6IGJJZCxcbiAgICAgICAgdGV4dHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwwXCIsXG4gICAgICAgICAgICBsYWJlbDogKGQpID0+IHsgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VGl0bGUpIHJldHVybiBudWxsOyByZXR1cm4gYnViYmxlLmVudGl0eS5sYWJlbCB9LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBtTnVtID0gKGQucmFkaXVzLzkpO1xuICAgICAgICAgICAgICBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgbU51bT0wO1xuICAgICAgICAgICAgICByZXR1cm4gZC55LW1OdW07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDFcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dWYWx1ZSkgcmV0dXJuIG51bGw7IHJldHVybiBidWJibGUuY291bnQgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55KyhkLnJhZGl1cy85KSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNixcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgeDogY1dpZHRoLzIrNTAsXG4gICAgICAgIHk6IGNIZWlnaHQvMis1MCxcbiAgICAgICAgXCJyYWRpdXNcIjogYnViYmxlUmFkaXVzLFxuICAgICAgICBjb2xvcjpidWJibGUuY29sb3IsXG4gICAgICAgIGhhc0Nsb3NlSWNvbjogKCBidWJibGUuc2VsZWN0ZWQgPyBidWJibGUuc2VsZWN0ZWQgOiBmYWxzZSApLFxuICAgICAgICBwYXlsb2FkOntcbiAgICAgICAgICBpZDogYklkXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXS5wdXNoKGJ1YmJsZURhdGEpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2Ugc2ltdWxhdGlvbidzIHBhcmFtZXRlcnMgZm9yIHRoZSBidWJibGUgY2hhcnRcbiAgICBidWJibGVzRGF0YVsnZm9yY2VTaW11bGF0aW9uRGF0YSddID0ge1xuICAgICAgeFB1bGw6IGNXaWR0aC8yLFxuICAgICAgeFB1bGxTdHJlbmd0aDogLTAuMDEsXG4gICAgICB5UHVsbDogY0hlaWdodC8yLFxuICAgICAgeVB1bGxTdHJlbmd0aDogLTAuMDEsXG4gICAgICBjb2xsaXNpb25TdHJlbmdoOiAwLjk5LFxuICAgICAgY29sbGlzaW9uSXRlcmF0aW9uczogMSxcbiAgICAgIHZlbG9jaXR5RGVjYXk6IDAuNjVcbiAgICB9XG5cbiAgICBpZihkYXRhLnJlc2V0KSBidWJibGVzRGF0YVsncmVzZXQnXSA9IGRhdGEucmVzZXQ7XG4gICAgaWYoZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2UpIGJ1YmJsZXNEYXRhWydzZXRVcGRhdGVSZWZlcmVuY2UnXSA9IGRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlO1xuICAgIGlmKGRhdGEuc2V0QnViYmxlQ2hhcnQpIGJ1YmJsZXNEYXRhWydzZXRCdWJibGVDaGFydCddID0gZGF0YS5zZXRCdWJibGVDaGFydDtcblxuICAgIHJldHVybiBidWJibGVzRGF0YTtcbiAgfVxufSJdfQ==