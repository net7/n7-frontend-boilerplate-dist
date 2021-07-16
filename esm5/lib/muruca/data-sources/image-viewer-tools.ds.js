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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLXRvb2xzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQTBDLHdDQUFVO0lBQXBEOztJQXNDQSxDQUFDO0lBckNXLHdDQUFTLEdBQW5CO1FBQ0UsSUFBTSxJQUFJLEdBQUcsdUJBQXVCLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsS0FBSyxFQUFFLGdDQUFnQyxFQUFFLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUU7WUFDMUcsRUFBRSxLQUFLLEVBQUUsK0JBQStCLEVBQUUsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRTtZQUN6RyxFQUFFLEtBQUssRUFBRSwrQkFBK0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1NBQzFHLENBQUM7UUFDRixJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM3RCxJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sZ0RBQWlCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQ3pFLENBQUM7SUFFTSwyQ0FBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUN2RSxDQUFDO0lBRU0sMkNBQVksR0FBbkIsVUFBb0IsS0FBSztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLCtDQUFnQixHQUF2QixVQUF3QixPQUFPO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxnREFBaUIsR0FBeEI7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMxQixJQUFBLDJCQUFNLENBQWlCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUEwQyxVQUFVLEdBc0NuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlVmlld2VyVG9vbHNEYXRhLCBJTUFHRV9WSUVXRVJfVE9PTFNfTU9DSyB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyVG9vbHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCk6IEltYWdlVmlld2VyVG9vbHNEYXRhIHtcbiAgICBjb25zdCBkYXRhID0gSU1BR0VfVklFV0VSX1RPT0xTX01PQ0s7XG4gICAgZGF0YS5pbWFnZXMgPSBbXG4gICAgICB7IHRodW1iOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8yMDAvMTMwJywgcGF5bG9hZDogeyB0aHVtYmluZGV4OiAwIH0sIGNhcHRpb246ICdUZXN0IGNhcHRpb24gPGI+IzE8L2I+JyB9LFxuICAgICAgeyB0aHVtYjogJ2h0dHA6Ly9wbGFjZWtpdHRlbi5jb20vOTAvMTgwJywgcGF5bG9hZDogeyB0aHVtYmluZGV4OiAxIH0sIGNhcHRpb246ICdUZXN0IGNhcHRpb24gPGI+IzI8L2I+JyB9LFxuICAgICAgeyB0aHVtYjogJ2h0dHA6Ly9wbGFjZWtpdHRlbi5jb20vOTAvMTEwJywgcGF5bG9hZDogeyB0aHVtYmluZGV4OiAyIH0sIGNhcHRpb246ICdUZXN0IGNhcHRpb24gPGI+IzM8L2I+JyB9LFxuICAgIF07XG4gICAgY29uc3QgaW5pdGlhbERlc2NyaXB0aW9uID0gZGF0YS5pbWFnZXNbZGF0YS5pbml0aWFsXS5jYXB0aW9uO1xuICAgIGlmIChpbml0aWFsRGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGF0YS5kZXNjcmlwdGlvbiA9IGluaXRpYWxEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVEZXNjcmlwdGlvbigpIHtcbiAgICB0aGlzLm91dHB1dC5pc1Zpc2libGUuZGVzY3JpcHRpb24gPSAhdGhpcy5vdXRwdXQuaXNWaXNpYmxlLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVRodW1icygpIHtcbiAgICB0aGlzLm91dHB1dC5pc1Zpc2libGUudGh1bWJuYWlscyA9ICF0aGlzLm91dHB1dC5pc1Zpc2libGUudGh1bWJuYWlscztcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaHVtYnMoaW5kZXgpIHtcbiAgICB0aGlzLm91dHB1dC5pbml0aWFsID0gaW5kZXg7XG4gICAgdGhpcy51cGRhdGVEZXNjcmlwdGlvbigpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZVBhZ2VDaGFuZ2UocGF5bG9hZCkge1xuICAgIHRoaXMuaGFuZGxlVGh1bWJzKHBheWxvYWQucGFnZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm91dHB1dC5pbml0aWFsO1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLm91dHB1dDtcbiAgICB0aGlzLm91dHB1dC5kZXNjcmlwdGlvbiA9IGltYWdlc1tpbmRleF0uY2FwdGlvbjtcbiAgfVxufVxuIl19