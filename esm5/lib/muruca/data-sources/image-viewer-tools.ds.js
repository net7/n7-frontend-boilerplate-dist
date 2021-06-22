import { __extends } from "tslib";
import { IMAGE_VIEWER_TOOLS_MOCK } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
var MrImageViewerToolsDS = /** @class */ (function (_super) {
    __extends(MrImageViewerToolsDS, _super);
    function MrImageViewerToolsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrImageViewerToolsDS.prototype.transform = function () {
        var data = IMAGE_VIEWER_TOOLS_MOCK;
        data.images = [
            { thumb: 'http://placekitten.com/200/130', payload: { thumbindex: 0 }, caption: 'Test caption <b>#1</b>' },
            { thumb: 'http://placekitten.com/90/180', payload: { thumbindex: 1 }, caption: 'Test caption <b>#2</b>' },
            { thumb: 'http://placekitten.com/90/110', payload: { thumbindex: 2 }, caption: 'Test caption <b>#3</b>' },
        ];
        var initialDescription = data.images[data.initial].caption;
        if (initialDescription !== undefined) {
            data.description = initialDescription;
        }
        return data;
    };
    MrImageViewerToolsDS.prototype.toggleDescription = function () {
        this.output.isVisible.description = !this.output.isVisible.description;
    };
    MrImageViewerToolsDS.prototype.toggleThumbs = function () {
        this.output.isVisible.thumbnails = !this.output.isVisible.thumbnails;
    };
    MrImageViewerToolsDS.prototype.handleThumbs = function (index) {
        this.output.initial = index;
        this.updateDescription();
    };
    MrImageViewerToolsDS.prototype.handlePageChange = function (payload) {
        this.handleThumbs(payload.page);
    };
    MrImageViewerToolsDS.prototype.updateDescription = function () {
        var index = this.output.initial;
        var images = this.output.images;
        this.output.description = images[index].caption;
    };
    return MrImageViewerToolsDS;
}(DataSource));
export { MrImageViewerToolsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLXRvb2xzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTBDLHdDQUFVO0lBQXBEOztJQXNDQSxDQUFDO0lBckNXLHdDQUFTLEdBQW5CO1FBQ0UsSUFBTSxJQUFJLEdBQUcsdUJBQXVCLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsS0FBSyxFQUFFLGdDQUFnQyxFQUFFLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUU7WUFDMUcsRUFBRSxLQUFLLEVBQUUsK0JBQStCLEVBQUUsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRTtZQUN6RyxFQUFFLEtBQUssRUFBRSwrQkFBK0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1NBQzFHLENBQUM7UUFDRixJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM3RCxJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sZ0RBQWlCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQ3pFLENBQUM7SUFFTSwyQ0FBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUN2RSxDQUFDO0lBRU0sMkNBQVksR0FBbkIsVUFBb0IsS0FBSztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLCtDQUFnQixHQUF2QixVQUF3QixPQUFPO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxnREFBaUIsR0FBeEI7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMxQixJQUFBLDJCQUFNLENBQWlCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUEwQyxVQUFVLEdBc0NuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlVmlld2VyVG9vbHNEYXRhLCBJTUFHRV9WSUVXRVJfVE9PTFNfTU9DSyB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyVG9vbHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKTogSW1hZ2VWaWV3ZXJUb29sc0RhdGEge1xyXG4gICAgY29uc3QgZGF0YSA9IElNQUdFX1ZJRVdFUl9UT09MU19NT0NLO1xyXG4gICAgZGF0YS5pbWFnZXMgPSBbXHJcbiAgICAgIHsgdGh1bWI6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzIwMC8xMzAnLCBwYXlsb2FkOiB7IHRodW1iaW5kZXg6IDAgfSwgY2FwdGlvbjogJ1Rlc3QgY2FwdGlvbiA8Yj4jMTwvYj4nIH0sXHJcbiAgICAgIHsgdGh1bWI6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzkwLzE4MCcsIHBheWxvYWQ6IHsgdGh1bWJpbmRleDogMSB9LCBjYXB0aW9uOiAnVGVzdCBjYXB0aW9uIDxiPiMyPC9iPicgfSxcclxuICAgICAgeyB0aHVtYjogJ2h0dHA6Ly9wbGFjZWtpdHRlbi5jb20vOTAvMTEwJywgcGF5bG9hZDogeyB0aHVtYmluZGV4OiAyIH0sIGNhcHRpb246ICdUZXN0IGNhcHRpb24gPGI+IzM8L2I+JyB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGluaXRpYWxEZXNjcmlwdGlvbiA9IGRhdGEuaW1hZ2VzW2RhdGEuaW5pdGlhbF0uY2FwdGlvbjtcclxuICAgIGlmIChpbml0aWFsRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkYXRhLmRlc2NyaXB0aW9uID0gaW5pdGlhbERlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURlc2NyaXB0aW9uKCkge1xyXG4gICAgdGhpcy5vdXRwdXQuaXNWaXNpYmxlLmRlc2NyaXB0aW9uID0gIXRoaXMub3V0cHV0LmlzVmlzaWJsZS5kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVUaHVtYnMoKSB7XHJcbiAgICB0aGlzLm91dHB1dC5pc1Zpc2libGUudGh1bWJuYWlscyA9ICF0aGlzLm91dHB1dC5pc1Zpc2libGUudGh1bWJuYWlscztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVUaHVtYnMoaW5kZXgpIHtcclxuICAgIHRoaXMub3V0cHV0LmluaXRpYWwgPSBpbmRleDtcclxuICAgIHRoaXMudXBkYXRlRGVzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVQYWdlQ2hhbmdlKHBheWxvYWQpIHtcclxuICAgIHRoaXMuaGFuZGxlVGh1bWJzKHBheWxvYWQucGFnZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRGVzY3JpcHRpb24oKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3V0cHV0LmluaXRpYWw7XHJcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5vdXRwdXQ7XHJcbiAgICB0aGlzLm91dHB1dC5kZXNjcmlwdGlvbiA9IGltYWdlc1tpbmRleF0uY2FwdGlvbjtcclxuICB9XHJcbn1cclxuIl19