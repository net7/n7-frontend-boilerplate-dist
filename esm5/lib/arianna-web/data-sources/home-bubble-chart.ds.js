/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwHomeBubbleChartDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeBubbleChartDS, _super);
    function AwHomeBubbleChartDS() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        if (!data)
            return null;
        /** @type {?} */
        var cWidth = (data.width ? data.width : 1000);
        /** @type {?} */
        var cHeight = 700;
        /** @type {?} */
        var bubblesData = {
            containerId: "bubbleChartContainer",
            containerWidth: cWidth,
            containerHeight: cHeight,
            isForceSimulationEnabled: true,
            maxBubblesSelected: 3
        };
        bubblesData['bubblesData'] = [];
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            /** @type {?} */
            var bId = bubble.entity.id;
            /** @type {?} */
            var bubbleData = {
                id: bubble.entity.id,
                texts: [
                    {
                        id: bId + "_label0",
                        label: bubble.entity.label,
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.x; }),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        function (d) { return d.y - (d.radius / 9); }),
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
                        label: bubble.count,
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
                "radius": bubble.count / 55,
                color: bubble.color,
                hasCloseIcon: false,
                payload: {
                    id: bId
                },
                selectable: true,
                selected: (bubble.selected ? bubble.selected : false)
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
        return bubblesData;
    };
    return AwHomeBubbleChartDS;
}(DataSource));
export { AwHomeBubbleChartDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYnViYmxlLWNoYXJ0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXlDLCtDQUFVO0lBQW5EOztJQXlFQSxDQUFDOzs7Ozs7SUF2RVcsdUNBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDdEIsSUFBRyxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFDaEIsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztZQUN6QyxPQUFPLEdBQUcsR0FBRzs7WUFFZixXQUFXLEdBQUc7WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxjQUFjLEVBQUcsTUFBTTtZQUN2QixlQUFlLEVBQUcsT0FBTztZQUN6Qix3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLGtCQUFrQixFQUFDLENBQUM7U0FDckI7UUFFRCxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFFLFVBQUEsTUFBTTs7Z0JBQ3RCLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7O2dCQUN0QixVQUFVLEdBQUc7Z0JBQ2YsRUFBRSxFQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbkIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLEVBQUUsRUFBQyxHQUFHLEdBQUMsU0FBUzt3QkFDaEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSzt3QkFDMUIsVUFBVTs7Ozt3QkFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxDQUFBO3dCQUN0QixVQUFVOzs7O3dCQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCLENBQUE7d0JBQ25DLGFBQWEsRUFBQyxNQUFNO3dCQUNwQixpQkFBaUI7Ozs7d0JBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBVixDQUFVLENBQUE7d0JBQ3BDLEtBQUssRUFBRSxPQUFPO3dCQUNkLFNBQVMsRUFBQyxFQUFFO3FCQUNiO29CQUNEO3dCQUNFLEVBQUUsRUFBQyxHQUFHLEdBQUMsU0FBUzt3QkFDaEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO3dCQUNuQixVQUFVOzs7O3dCQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsRUFBSCxDQUFHLENBQUE7d0JBQ3RCLFVBQVU7Ozs7d0JBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQTt3QkFDbkMsYUFBYSxFQUFDLE1BQU07d0JBQ3BCLGlCQUFpQjs7Ozt3QkFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFWLENBQVUsQ0FBQTt3QkFDcEMsS0FBSyxFQUFFLE9BQU87d0JBQ2QsU0FBUyxFQUFDLEVBQUU7cUJBQ2Y7aUJBQ0E7Z0JBQ0QsQ0FBQyxFQUFFLE1BQU0sR0FBQyxDQUFDLEdBQUMsRUFBRTtnQkFDZCxDQUFDLEVBQUUsT0FBTyxHQUFDLENBQUMsR0FBQyxFQUFFO2dCQUNmLFFBQVEsRUFBQyxNQUFNLENBQUMsS0FBSyxHQUFDLEVBQUU7Z0JBQ3hCLEtBQUssRUFBQyxNQUFNLENBQUMsS0FBSztnQkFDbEIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBQztvQkFDTixFQUFFLEVBQUUsR0FBRztpQkFDUjtnQkFDRCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLENBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFO2FBQ3hEO1lBRUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztRQUdILFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHO1lBQ25DLEtBQUssRUFBRSxNQUFNLEdBQUMsQ0FBQztZQUNmLGFBQWEsRUFBRSxDQUFDLElBQUk7WUFDcEIsS0FBSyxFQUFFLE9BQU8sR0FBQyxDQUFDO1lBQ2hCLGFBQWEsRUFBRSxDQUFDLElBQUk7WUFDcEIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixtQkFBbUIsRUFBRSxDQUFDO1lBQ3RCLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUE7UUFFRCxJQUFHLElBQUksQ0FBQyxLQUFLO1lBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFakQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQXpFRCxDQUF5QyxVQUFVLEdBeUVsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBCVUJCTEVDSEFSVF9NT0NLIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lQnViYmxlQ2hhcnREUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgaWYoIWRhdGEpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGNXaWR0aCA9IChkYXRhLndpZHRoID8gZGF0YS53aWR0aCA6IDEwMDApO1xuICAgIGNvbnN0IGNIZWlnaHQgPSA3MDA7XG5cbiAgICBsZXQgYnViYmxlc0RhdGEgPSB7XG4gICAgICBjb250YWluZXJJZDogXCJidWJibGVDaGFydENvbnRhaW5lclwiLFxuICAgICAgY29udGFpbmVyV2lkdGggOiBjV2lkdGgsXG4gICAgICBjb250YWluZXJIZWlnaHQgOiBjSGVpZ2h0LFxuICAgICAgaXNGb3JjZVNpbXVsYXRpb25FbmFibGVkOiB0cnVlLFxuICAgICAgbWF4QnViYmxlc1NlbGVjdGVkOjNcbiAgICB9O1xuXG4gICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10gPSBbXTtcblxuICAgIGRhdGEuYnViYmxlcy5mb3JFYWNoKCBidWJibGUgPT4ge1xuICAgICAgbGV0IGJJZCA9IGJ1YmJsZS5lbnRpdHkuaWQ7XG4gICAgICBsZXQgYnViYmxlRGF0YSA9IHtcbiAgICAgICAgaWQ6YnViYmxlLmVudGl0eS5pZCxcbiAgICAgICAgdGV4dHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwwXCIsXG4gICAgICAgICAgICBsYWJlbDogYnViYmxlLmVudGl0eS5sYWJlbCxcbiAgICAgICAgICAgIHhfZnVuY3Rpb246IChkKSA9PiBkLngsXG4gICAgICAgICAgICB5X2Z1bmN0aW9uOiAoZCkgPT4gZC55LShkLnJhZGl1cy85KSxcbiAgICAgICAgICAgIFwidXNlcl9zZWxlY3RcIjpcIm5vbmVcIixcbiAgICAgICAgICAgIGZvbnRTaXplX2Z1bmN0aW9uOiAoZCkgPT4gZC5yYWRpdXMvNSxcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzZXNcIjpcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDpiSWQrXCJfbGFiZWwxXCIsXG4gICAgICAgICAgICBsYWJlbDogYnViYmxlLmNvdW50LFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnkrKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy82LFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB4OiBjV2lkdGgvMis1MCxcbiAgICAgICAgeTogY0hlaWdodC8yKzUwLFxuICAgICAgICBcInJhZGl1c1wiOmJ1YmJsZS5jb3VudC81NSxcbiAgICAgICAgY29sb3I6YnViYmxlLmNvbG9yLFxuICAgICAgICBoYXNDbG9zZUljb246IGZhbHNlLFxuICAgICAgICBwYXlsb2FkOntcbiAgICAgICAgICBpZDogYklkXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICAgIHNlbGVjdGVkOiAoIGJ1YmJsZS5zZWxlY3RlZCA/IGJ1YmJsZS5zZWxlY3RlZCA6IGZhbHNlIClcbiAgICAgIH07XG5cbiAgICAgIGJ1YmJsZXNEYXRhWydidWJibGVzRGF0YSddLnB1c2goYnViYmxlRGF0YSk7XG4gICAgfSk7XG5cblxuICAgIGJ1YmJsZXNEYXRhWydmb3JjZVNpbXVsYXRpb25EYXRhJ10gPSB7XG4gICAgICB4UHVsbDogY1dpZHRoLzIsXG4gICAgICB4UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIHlQdWxsOiBjSGVpZ2h0LzIsXG4gICAgICB5UHVsbFN0cmVuZ3RoOiAtMC4wMSxcbiAgICAgIGNvbGxpc2lvblN0cmVuZ2g6IDAuOTksXG4gICAgICBjb2xsaXNpb25JdGVyYXRpb25zOiAxLFxuICAgICAgdmVsb2NpdHlEZWNheTogMC42NVxuICAgIH1cblxuICAgIGlmKGRhdGEucmVzZXQpIGJ1YmJsZXNEYXRhWydyZXNldCddID0gZGF0YS5yZXNldDtcblxuICAgIHJldHVybiBidWJibGVzRGF0YTtcbiAgfVxufSJdfQ==