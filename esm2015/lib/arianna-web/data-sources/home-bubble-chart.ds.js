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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYnViYmxlLWNoYXJ0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFBbkQ7OztRQUdVLHVCQUFrQixHQUFVLEVBQUUsQ0FBQzs7UUFFL0IsdUJBQWtCLEdBQVUsRUFBRSxDQUFDO0lBcUh6QyxDQUFDOzs7Ozs7SUFuSFcsU0FBUyxDQUFDLElBQUk7UUFDdEIsSUFBRyxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFDbEIsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQzs7Y0FDbEUsTUFBTSxHQUFHLGdCQUFnQixDQUFDLFdBQVc7Ozs7O2NBSXJDLE9BQU8sR0FBRyxHQUFHOzs7Y0FFYixhQUFhLEdBQUcsTUFBTSxHQUFDLE9BQU87OztZQUdoQyxXQUFXLEdBQUc7WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxjQUFjLEVBQUcsTUFBTTtZQUN2QixlQUFlLEVBQUcsT0FBTztZQUN6Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLGtCQUFrQixFQUFDLENBQUM7U0FDckI7UUFFRCwrREFBK0Q7UUFDL0QsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7OztZQUk1QixjQUFjLEdBQUMsQ0FBQyxDQUFDOztZQUNqQixjQUFjLEdBQUMsQ0FBQyxDQUFDOztZQUNqQixZQUFZLEdBQUMsQ0FBQzs7WUFDZCxXQUFXLEdBQUMsQ0FBQzs7WUFDYixvQkFBb0IsR0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFFLE1BQU0s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QUFDLGNBQWM7WUFBRSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRTVFLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7Ozs7O0lBdkhDLGlEQUF1Qzs7Ozs7SUFFdkMsaURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJVQkJMRUNIQVJUX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgLy8gdGhyZXNob2xkIGJlbG93IHdoaWNoIGEgYnViYmxlIHNob3VsZCBub3Qgc2hvdyBpdHMgdGl0bGVcbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VGl0bGU6bnVtYmVyID0gNTA7XG4gIC8vIHRocmVzaG9sZCBiZWxvdyB3aGljaCBhIGJ1YmJsZSBzaG91bGQgbm90IHNob3cgaXRzIG51bWJlclxuICBwcml2YXRlIHRocmVzaG9sZFNob3dWYWx1ZTpudW1iZXIgPSA2MDtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgIGlmKCFkYXRhKSByZXR1cm4gbnVsbDtcbiAgICBsZXQgYnViYmxlQ29pbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlLWNoYXJ0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjV2lkdGggPSBidWJibGVDb2ludGFpbmVyLm9mZnNldFdpZHRoO1xuICAgIC8vIG5vdyB0aGUgYnViYmxlY2hhcnQncyBoZWlnaHQgaXMgaGFyZGNvZGVkIHRvIDcwMCwgbm90IHN1cmVcbiAgICAvLyBob3cgaXQgc291bGQgYmUgYWN0dWFsbHkgc2V0XG4gICAgLy8gVE9ETzogdGhpbmsgb2YgYSBnb29kIHdheSB0byBwYXNzL2NvbXB1dGUgY0hlaWdodFxuICAgIGNvbnN0IGNIZWlnaHQgPSA3MDA7IC8vIGJ1YmJsZUNvaW50YWluZXIub2Zmc2V0SGVpZ2h0XG5cbiAgICBjb25zdCBjb250YWluZXJTaXplID0gY1dpZHRoKmNIZWlnaHQ7XG5cbiAgICAvLyBnZW5lcmljIGRhdGEgb2YgdGhlIGJ1YmJsZSBjaGFydFxuICAgIGxldCBidWJibGVzRGF0YSA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiBcImJ1YmJsZUNoYXJ0Q29udGFpbmVyXCIsXG4gICAgICBjb250YWluZXJXaWR0aCA6IGNXaWR0aCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCA6IGNIZWlnaHQsXG4gICAgICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgICBtYXhCdWJibGVzU2VsZWN0ZWQ6M1xuICAgIH07XG5cbiAgICAvLyBkYXRhIGFib3V0IGVhY2ggc2luZ2xlIGJ1YmJsZSAoc3RhcnRzIGFzIFtdIGFuZCBnZXRzIGZpbGxlZClcbiAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXSA9IFtdO1xuXG4gICAgLy8gZmlyc3QgbG9vcCBvdmVyIGFsbCB0aGUgZGF0YSdzIGJ1YmJsZXMgdG8gZ2F0aGVyIHZhcmlvdXMgbnVtYmVycywgc3VjaFxuICAgIC8vIGFzIHRoZSBtYXhpbXVtL21pbmltdW0gYnViYmxlIHZhbHVlIGFuZCBudW1iZXIgb2Ygc2VsZWN0ZWQgYnViYmxlc1xuICAgIGxldCBtYXhCdWJibGVWYWx1ZT0tMTtcbiAgICBsZXQgbWluQnViYmxlVmFsdWU9LTE7XG4gICAgbGV0IG51bU9mQnViYmxlcz0wO1xuICAgIGxldCB0b3RhbFZhbHVlcz0wO1xuICAgIGxldCBudW1PZlNlbGVjdGVkQnViYmxlcz0wO1xuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgaWYobWF4QnViYmxlVmFsdWU8YnViYmxlLmNvdW50KSBtYXhCdWJibGVWYWx1ZT1idWJibGUuY291bnQ7XG4gICAgICBpZihtaW5CdWJibGVWYWx1ZTwwIHx8IG1pbkJ1YmJsZVZhbHVlPmJ1YmJsZS5jb3VudCkgbWluQnViYmxlVmFsdWU9YnViYmxlLmNvdW50O1xuICAgICAgbnVtT2ZCdWJibGVzKys7XG4gICAgICB0b3RhbFZhbHVlcys9YnViYmxlLmNvdW50O1xuICAgICAgaWYoYnViYmxlLnNlbGVjdGVkKSBudW1PZlNlbGVjdGVkQnViYmxlcysrO1xuICAgIH0pO1xuXG4gICAgLy8gc2Vjb25kIGxvb3AgIG92ZXIgYWxsIHRoZSBkYXRhJ3MgYnViYmxlcywgZm9yIGVhY2ggYnViYmxlIGEgY29ycmVzcG9uZGluZyBvYmplY3RcbiAgICAvLyBpcyBjcmVhdGVkIGFuZCBhZGRkZWQgdG8gdGhlIGJ1YmJsZXNEYXRhIGFycmF5XG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBsZXQgYklkID0gYnViYmxlLmlkO1xuICAgICAgLy8gaGVyZSBJIGNvbXB1dGUgdGhlIGJ1YmJsZSdzIHJhZGl1cyAoY291bGQvc2hvdWxkIGJlIGltcHJvdmVkKSwgZm9yIGl0IEkgY29tcHV0ZSBhIHBlcmNlbnRhZ2Ugb2YgdGhlIGJ1YmJsZSdzIHZhbHVlXG4gICAgICAvLyBjb21wYXJlZCB0byBhbGwgdGhlIGJ1YmJsZXMgYW5kIHVzZSB0aGF0IHBlcmNlbnRhZ2UgdG8gY29tcHV0ZSB0aGUgYnViYmxlJ3MgcmFkaXVzXG4gICAgICAvLyBOb3RlIDogSSBhbHNvIHVzZSB0aGUgY29udGFpbmVyU2l6ZSBhbmQgdGhlIG51bWJlciBvZiBidWJibGVzLCBpZGVhbGx5IGFsc28gdGhlIHRvdFZhbHVlcyBhbmRcbiAgICAgIC8vICAgICAgICBudW1PZlNlbGVjdGVkQnViYmxlcyBzaG91bGQgYmUgY29uc2lkZXJlZCB3aGVuIGNvbXB1dGluZyB0aGUgcmFkaXVzXG4gICAgICAvLyAgICAgICAgKHNlbGVjdGVkIGJ1YmJsZXMgYXJlIGluIHRoZW9yeSBsYXJnZXIgYnViYmxlcyBzbyB0YWtpbmcgdGhhdCBpbnRvIGFjY291bnRcbiAgICAgIC8vICAgICAgICAgY291bGQgaGVscCBmb3IgdGhlIHJhZGl1cyBjb21wdXRhdGlvbilcbiAgICAgIC8vIE5vdGUgOiB0aGUgcmFkaXVzIGNvbXB1dGF0aW9uIGlzIHZlcnkgaW1wb3J0YW50LCBpZiB0aGUgYnViYmxlcycgcmFkaXVzZXMgYXJlIHRvbyBiaWcgdGhlblxuICAgICAgLy8gICAgICAgIHRoZSBidWJibGVzIHdpbGwgZ28gb25lIG92ZXIgdGhlIG90aGVyIGFuZCB3aWxsIG5vdCBiZSBhYmxlIHRvIG1vdmUgYXMgdGhleSBzaG91bGQsIGlmXG4gICAgICAvLyAgICAgICAgdGhlIHJlZGl1c2VzIGFyZSBpbnN0ZWFkIHRvbyBzbWFsbCB0aGVuIHRoZSBidWJibGVzIHdpbGwgYmUgdG8gc21hbGwgYW5kIGNvbnZlciBvbmx5IGFcbiAgICAgIC8vICAgICAgICBwb3J0aW9uIG9mIHRoZSBjb250YWluZXJcbiAgICAgIGxldCBidWJibGVQZXJjZW50YWdlID0gKCBidWJibGUuY291bnQgLSAobWluQnViYmxlVmFsdWUvMykgKS8oIChtYXhCdWJibGVWYWx1ZSozKSAtIChtaW5CdWJibGVWYWx1ZS8zKSApO1xuICAgICAgLy9sZXQgYnViYmxlUmFkaXVzID0gMiooICgoY29udGFpbmVyU2l6ZS8obnVtT2ZCdWJibGVzKih0b3RhbENvdW50LzYwMCkpKSpidWJibGVQZXJjZW50YWdlKS8oIE1hdGgucG93KG51bU9mU2VsZWN0ZWRCdWJibGVzKzEsMS44KSkgKTtcbiAgICAgIGxldCBidWJibGVSYWRpdXMgPSAoTWF0aC5sb2coY29udGFpbmVyU2l6ZSkvMTApKihidWJibGVQZXJjZW50YWdlKjMpKig3MC1NYXRoLnNxcnQobnVtT2ZCdWJibGVzKSk7XG5cbiAgICAgIC8vIGNyZWF0aW9uIG9mIHRoZSBidWJibGVEYXRhIG9iamVjdFxuICAgICAgbGV0IGJ1YmJsZURhdGEgPSB7XG4gICAgICAgIGlkOiBiSWQsXG4gICAgICAgIHRleHRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMFwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1RpdGxlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGJ1YmJsZS5lbnRpdHkubGFiZWwgfSxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbU51bSA9IChkLnJhZGl1cy85KTtcbiAgICAgICAgICAgICAgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIG1OdW09MDtcbiAgICAgICAgICAgICAgcmV0dXJuIGQueS1tTnVtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwxXCIsXG4gICAgICAgICAgICBsYWJlbDogKGQpID0+IHsgaWYoZC5yYWRpdXM8dGhpcy50aHJlc2hvbGRTaG93VmFsdWUpIHJldHVybiBudWxsOyByZXR1cm4gYnViYmxlLmNvdW50IH0sXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzYsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHg6IGNXaWR0aC8yKzUwLFxuICAgICAgICB5OiBjSGVpZ2h0LzIrNTAsXG4gICAgICAgIFwicmFkaXVzXCI6IGJ1YmJsZVJhZGl1cyxcbiAgICAgICAgY29sb3I6YnViYmxlLmNvbG9yLFxuICAgICAgICBoYXNDbG9zZUljb246ICggYnViYmxlLnNlbGVjdGVkID8gYnViYmxlLnNlbGVjdGVkIDogZmFsc2UgKSxcbiAgICAgICAgcGF5bG9hZDp7XG4gICAgICAgICAgaWQ6IGJJZFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10ucHVzaChidWJibGVEYXRhKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHNpbXVsYXRpb24ncyBwYXJhbWV0ZXJzIGZvciB0aGUgYnViYmxlIGNoYXJ0XG4gICAgYnViYmxlc0RhdGFbJ2ZvcmNlU2ltdWxhdGlvbkRhdGEnXSA9IHtcbiAgICAgIHhQdWxsOiBjV2lkdGgvMixcbiAgICAgIHhQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgeVB1bGw6IGNIZWlnaHQvMixcbiAgICAgIHlQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgY29sbGlzaW9uU3RyZW5naDogMC45OSxcbiAgICAgIGNvbGxpc2lvbkl0ZXJhdGlvbnM6IDEsXG4gICAgICB2ZWxvY2l0eURlY2F5OiAwLjY1XG4gICAgfVxuXG4gICAgaWYoZGF0YS5yZXNldCkgYnViYmxlc0RhdGFbJ3Jlc2V0J10gPSBkYXRhLnJlc2V0O1xuICAgIGlmKGRhdGEuc2V0VXBkYXRlUmVmZXJlbmNlKSBidWJibGVzRGF0YVsnc2V0VXBkYXRlUmVmZXJlbmNlJ10gPSBkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZTtcbiAgICBpZihkYXRhLnNldEJ1YmJsZUNoYXJ0KSBidWJibGVzRGF0YVsnc2V0QnViYmxlQ2hhcnQnXSA9IGRhdGEuc2V0QnViYmxlQ2hhcnQ7XG5cbiAgICByZXR1cm4gYnViYmxlc0RhdGE7XG4gIH1cbn0iXX0=