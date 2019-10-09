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
        // threshold below which a bubble should not show its title
        _this.thresholdShowTitle = 50;
        // threshold below which a bubble should not show its number
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
        // now the bubblechart's height is hardcoded to 700, not sure
        // how it sould be actually set
        // TODO: think of a good way to pass/compute cHeight
        /** @type {?} */
        var cHeight = 700;
        // bubbleCointainer.offsetHeight
        /** @type {?} */
        var containerSize = cWidth * cHeight;
        // generic data of the bubble chart
        /** @type {?} */
        var bubblesData = {
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
        var maxBubbleValue = -1;
        /** @type {?} */
        var minBubbleValue = -1;
        /** @type {?} */
        var numOfBubbles = 0;
        /** @type {?} */
        var totalValues = 0;
        /** @type {?} */
        var numOfSelectedBubbles = 0;
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
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
        function (bubble) {
            /** @type {?} */
            var bId = bubble.id;
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
            var bubblePercentage = (bubble.count - (minBubbleValue / 3)) / ((maxBubbleValue * 3) - (minBubbleValue / 3));
            //let bubbleRadius = 2*( ((containerSize/(numOfBubbles*(totalCount/600)))*bubblePercentage)/( Math.pow(numOfSelectedBubbles+1,1.8)) );
            /** @type {?} */
            var bubbleRadius = (Math.log(containerSize) / 10) * (bubblePercentage * 3) * (70 - Math.sqrt(numOfBubbles));
            // creation of the bubbleData object
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYnViYmxlLWNoYXJ0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXlDLCtDQUFVO0lBQW5EO1FBQUEscUVBMEhDOztRQXZIUyx3QkFBa0IsR0FBVSxFQUFFLENBQUM7O1FBRS9CLHdCQUFrQixHQUFVLEVBQUUsQ0FBQzs7SUFxSHpDLENBQUM7Ozs7OztJQW5IVyx1Q0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFrSEM7UUFqSEMsSUFBRyxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFDbEIsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQzs7WUFDbEUsTUFBTSxHQUFHLGdCQUFnQixDQUFDLFdBQVc7Ozs7O1lBSXJDLE9BQU8sR0FBRyxHQUFHOzs7WUFFYixhQUFhLEdBQUcsTUFBTSxHQUFDLE9BQU87OztZQUdoQyxXQUFXLEdBQUc7WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxjQUFjLEVBQUcsTUFBTTtZQUN2QixlQUFlLEVBQUcsT0FBTztZQUN6Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLGtCQUFrQixFQUFDLENBQUM7U0FDckI7UUFFRCwrREFBK0Q7UUFDL0QsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7OztZQUk1QixjQUFjLEdBQUMsQ0FBQyxDQUFDOztZQUNqQixjQUFjLEdBQUMsQ0FBQyxDQUFDOztZQUNqQixZQUFZLEdBQUMsQ0FBQzs7WUFDZCxXQUFXLEdBQUMsQ0FBQzs7WUFDYixvQkFBb0IsR0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFP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SUFBRyxJQUFJLENBQUMsY0FBYztZQUFFLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFNUUsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQTFIRCxDQUF5QyxVQUFVLEdBMEhsRDs7Ozs7OztJQXZIQyxpREFBdUM7Ozs7O0lBRXZDLGlEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBCVUJCTEVDSEFSVF9NT0NLIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lQnViYmxlQ2hhcnREUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIC8vIHRocmVzaG9sZCBiZWxvdyB3aGljaCBhIGJ1YmJsZSBzaG91bGQgbm90IHNob3cgaXRzIHRpdGxlXG4gIHByaXZhdGUgdGhyZXNob2xkU2hvd1RpdGxlOm51bWJlciA9IDUwO1xuICAvLyB0aHJlc2hvbGQgYmVsb3cgd2hpY2ggYSBidWJibGUgc2hvdWxkIG5vdCBzaG93IGl0cyBudW1iZXJcbiAgcHJpdmF0ZSB0aHJlc2hvbGRTaG93VmFsdWU6bnVtYmVyID0gNjA7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBpZighZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgbGV0IGJ1YmJsZUNvaW50YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1YmJsZS1jaGFydC1jb250YWluZXJcIik7XG4gICAgY29uc3QgY1dpZHRoID0gYnViYmxlQ29pbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICAvLyBub3cgdGhlIGJ1YmJsZWNoYXJ0J3MgaGVpZ2h0IGlzIGhhcmRjb2RlZCB0byA3MDAsIG5vdCBzdXJlXG4gICAgLy8gaG93IGl0IHNvdWxkIGJlIGFjdHVhbGx5IHNldFxuICAgIC8vIFRPRE86IHRoaW5rIG9mIGEgZ29vZCB3YXkgdG8gcGFzcy9jb21wdXRlIGNIZWlnaHRcbiAgICBjb25zdCBjSGVpZ2h0ID0gNzAwOyAvLyBidWJibGVDb2ludGFpbmVyLm9mZnNldEhlaWdodFxuXG4gICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IGNXaWR0aCpjSGVpZ2h0O1xuXG4gICAgLy8gZ2VuZXJpYyBkYXRhIG9mIHRoZSBidWJibGUgY2hhcnRcbiAgICBsZXQgYnViYmxlc0RhdGEgPSB7XG4gICAgICBjb250YWluZXJJZDogXCJidWJibGVDaGFydENvbnRhaW5lclwiLFxuICAgICAgY29udGFpbmVyV2lkdGggOiBjV2lkdGgsXG4gICAgICBjb250YWluZXJIZWlnaHQgOiBjSGVpZ2h0LFxuICAgICAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiB0cnVlLFxuICAgICAgbWF4QnViYmxlc1NlbGVjdGVkOjNcbiAgICB9O1xuXG4gICAgLy8gZGF0YSBhYm91dCBlYWNoIHNpbmdsZSBidWJibGUgKHN0YXJ0cyBhcyBbXSBhbmQgZ2V0cyBmaWxsZWQpXG4gICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10gPSBbXTtcblxuICAgIC8vIGZpcnN0IGxvb3Agb3ZlciBhbGwgdGhlIGRhdGEncyBidWJibGVzIHRvIGdhdGhlciB2YXJpb3VzIG51bWJlcnMsIHN1Y2hcbiAgICAvLyBhcyB0aGUgbWF4aW11bS9taW5pbXVtIGJ1YmJsZSB2YWx1ZSBhbmQgbnVtYmVyIG9mIHNlbGVjdGVkIGJ1YmJsZXNcbiAgICBsZXQgbWF4QnViYmxlVmFsdWU9LTE7XG4gICAgbGV0IG1pbkJ1YmJsZVZhbHVlPS0xO1xuICAgIGxldCBudW1PZkJ1YmJsZXM9MDtcbiAgICBsZXQgdG90YWxWYWx1ZXM9MDtcbiAgICBsZXQgbnVtT2ZTZWxlY3RlZEJ1YmJsZXM9MDtcbiAgICBkYXRhLmJ1YmJsZXMuZm9yRWFjaCggYnViYmxlID0+IHtcbiAgICAgIGlmKG1heEJ1YmJsZVZhbHVlPGJ1YmJsZS5jb3VudCkgbWF4QnViYmxlVmFsdWU9YnViYmxlLmNvdW50O1xuICAgICAgaWYobWluQnViYmxlVmFsdWU8MCB8fCBtaW5CdWJibGVWYWx1ZT5idWJibGUuY291bnQpIG1pbkJ1YmJsZVZhbHVlPWJ1YmJsZS5jb3VudDtcbiAgICAgIG51bU9mQnViYmxlcysrO1xuICAgICAgdG90YWxWYWx1ZXMrPWJ1YmJsZS5jb3VudDtcbiAgICAgIGlmKGJ1YmJsZS5zZWxlY3RlZCkgbnVtT2ZTZWxlY3RlZEJ1YmJsZXMrKztcbiAgICB9KTtcblxuICAgIC8vIHNlY29uZCBsb29wICBvdmVyIGFsbCB0aGUgZGF0YSdzIGJ1YmJsZXMsIGZvciBlYWNoIGJ1YmJsZSBhIGNvcnJlc3BvbmRpbmcgb2JqZWN0XG4gICAgLy8gaXMgY3JlYXRlZCBhbmQgYWRkZGVkIHRvIHRoZSBidWJibGVzRGF0YSBhcnJheVxuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgbGV0IGJJZCA9IGJ1YmJsZS5pZDtcbiAgICAgIC8vIGhlcmUgSSBjb21wdXRlIHRoZSBidWJibGUncyByYWRpdXMgKGNvdWxkL3Nob3VsZCBiZSBpbXByb3ZlZCksIGZvciBpdCBJIGNvbXB1dGUgYSBwZXJjZW50YWdlIG9mIHRoZSBidWJibGUncyB2YWx1ZVxuICAgICAgLy8gY29tcGFyZWQgdG8gYWxsIHRoZSBidWJibGVzIGFuZCB1c2UgdGhhdCBwZXJjZW50YWdlIHRvIGNvbXB1dGUgdGhlIGJ1YmJsZSdzIHJhZGl1c1xuICAgICAgLy8gTm90ZSA6IEkgYWxzbyB1c2UgdGhlIGNvbnRhaW5lclNpemUgYW5kIHRoZSBudW1iZXIgb2YgYnViYmxlcywgaWRlYWxseSBhbHNvIHRoZSB0b3RWYWx1ZXMgYW5kXG4gICAgICAvLyAgICAgICAgbnVtT2ZTZWxlY3RlZEJ1YmJsZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWQgd2hlbiBjb21wdXRpbmcgdGhlIHJhZGl1c1xuICAgICAgLy8gICAgICAgIChzZWxlY3RlZCBidWJibGVzIGFyZSBpbiB0aGVvcnkgbGFyZ2VyIGJ1YmJsZXMgc28gdGFraW5nIHRoYXQgaW50byBhY2NvdW50XG4gICAgICAvLyAgICAgICAgIGNvdWxkIGhlbHAgZm9yIHRoZSByYWRpdXMgY29tcHV0YXRpb24pXG4gICAgICAvLyBOb3RlIDogdGhlIHJhZGl1cyBjb21wdXRhdGlvbiBpcyB2ZXJ5IGltcG9ydGFudCwgaWYgdGhlIGJ1YmJsZXMnIHJhZGl1c2VzIGFyZSB0b28gYmlnIHRoZW5cbiAgICAgIC8vICAgICAgICB0aGUgYnViYmxlcyB3aWxsIGdvIG9uZSBvdmVyIHRoZSBvdGhlciBhbmQgd2lsbCBub3QgYmUgYWJsZSB0byBtb3ZlIGFzIHRoZXkgc2hvdWxkLCBpZlxuICAgICAgLy8gICAgICAgIHRoZSByZWRpdXNlcyBhcmUgaW5zdGVhZCB0b28gc21hbGwgdGhlbiB0aGUgYnViYmxlcyB3aWxsIGJlIHRvIHNtYWxsIGFuZCBjb252ZXIgb25seSBhXG4gICAgICAvLyAgICAgICAgcG9ydGlvbiBvZiB0aGUgY29udGFpbmVyXG4gICAgICBsZXQgYnViYmxlUGVyY2VudGFnZSA9ICggYnViYmxlLmNvdW50IC0gKG1pbkJ1YmJsZVZhbHVlLzMpICkvKCAobWF4QnViYmxlVmFsdWUqMykgLSAobWluQnViYmxlVmFsdWUvMykgKTtcbiAgICAgIC8vbGV0IGJ1YmJsZVJhZGl1cyA9IDIqKCAoKGNvbnRhaW5lclNpemUvKG51bU9mQnViYmxlcyoodG90YWxDb3VudC82MDApKSkqYnViYmxlUGVyY2VudGFnZSkvKCBNYXRoLnBvdyhudW1PZlNlbGVjdGVkQnViYmxlcysxLDEuOCkpICk7XG4gICAgICBsZXQgYnViYmxlUmFkaXVzID0gKE1hdGgubG9nKGNvbnRhaW5lclNpemUpLzEwKSooYnViYmxlUGVyY2VudGFnZSozKSooNzAtTWF0aC5zcXJ0KG51bU9mQnViYmxlcykpO1xuXG4gICAgICAvLyBjcmVhdGlvbiBvZiB0aGUgYnViYmxlRGF0YSBvYmplY3RcbiAgICAgIGxldCBidWJibGVEYXRhID0ge1xuICAgICAgICBpZDogYklkLFxuICAgICAgICB0ZXh0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDBcIixcbiAgICAgICAgICAgIGxhYmVsOiAoZCkgPT4geyBpZihkLnJhZGl1czx0aGlzLnRocmVzaG9sZFNob3dUaXRsZSkgcmV0dXJuIG51bGw7IHJldHVybiBidWJibGUuZW50aXR5LmxhYmVsIH0sXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG1OdW0gPSAoZC5yYWRpdXMvOSk7XG4gICAgICAgICAgICAgIGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlKSBtTnVtPTA7XG4gICAgICAgICAgICAgIHJldHVybiBkLnktbU51bTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzUsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6YklkK1wiX2xhYmVsMVwiLFxuICAgICAgICAgICAgbGFiZWw6IChkKSA9PiB7IGlmKGQucmFkaXVzPHRoaXMudGhyZXNob2xkU2hvd1ZhbHVlKSByZXR1cm4gbnVsbDsgcmV0dXJuIGJ1YmJsZS5jb3VudCB9LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy82LFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB4OiBjV2lkdGgvMis1MCxcbiAgICAgICAgeTogY0hlaWdodC8yKzUwLFxuICAgICAgICBcInJhZGl1c1wiOiBidWJibGVSYWRpdXMsXG4gICAgICAgIGNvbG9yOmJ1YmJsZS5jb2xvcixcbiAgICAgICAgaGFzQ2xvc2VJY29uOiAoIGJ1YmJsZS5zZWxlY3RlZCA/IGJ1YmJsZS5zZWxlY3RlZCA6IGZhbHNlICksXG4gICAgICAgIHBheWxvYWQ6e1xuICAgICAgICAgIGlkOiBiSWRcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIGJ1YmJsZXNEYXRhWydidWJibGVzRGF0YSddLnB1c2goYnViYmxlRGF0YSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSBzaW11bGF0aW9uJ3MgcGFyYW1ldGVycyBmb3IgdGhlIGJ1YmJsZSBjaGFydFxuICAgIGJ1YmJsZXNEYXRhWydmb3JjZVNpbXVsYXRpb25EYXRhJ10gPSB7XG4gICAgICB4UHVsbDogY1dpZHRoLzIsXG4gICAgICB4UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIHlQdWxsOiBjSGVpZ2h0LzIsXG4gICAgICB5UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIGNvbGxpc2lvblN0cmVuZ2g6IDAuOTksXG4gICAgICBjb2xsaXNpb25JdGVyYXRpb25zOiAxLFxuICAgICAgdmVsb2NpdHlEZWNheTogMC42NVxuICAgIH1cblxuICAgIGlmKGRhdGEucmVzZXQpIGJ1YmJsZXNEYXRhWydyZXNldCddID0gZGF0YS5yZXNldDtcbiAgICBpZihkYXRhLnNldFVwZGF0ZVJlZmVyZW5jZSkgYnViYmxlc0RhdGFbJ3NldFVwZGF0ZVJlZmVyZW5jZSddID0gZGF0YS5zZXRVcGRhdGVSZWZlcmVuY2U7XG4gICAgaWYoZGF0YS5zZXRCdWJibGVDaGFydCkgYnViYmxlc0RhdGFbJ3NldEJ1YmJsZUNoYXJ0J10gPSBkYXRhLnNldEJ1YmJsZUNoYXJ0O1xuXG4gICAgcmV0dXJuIGJ1YmJsZXNEYXRhO1xuICB9XG59Il19