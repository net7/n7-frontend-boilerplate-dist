import { __extends } from "tslib";
import { IMAGE_VIEWER_TOOLS_MOCK } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
var SbImageViewerToolsDS = /** @class */ (function (_super) {
    __extends(SbImageViewerToolsDS, _super);
    function SbImageViewerToolsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SbImageViewerToolsDS.prototype.transform = function () {
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
    SbImageViewerToolsDS.prototype.toggleDescription = function () {
        this.output.isVisible.description = !this.output.isVisible.description;
    };
    SbImageViewerToolsDS.prototype.toggleThumbs = function () {
        this.output.isVisible.thumbnails = !this.output.isVisible.thumbnails;
    };
    SbImageViewerToolsDS.prototype.handleThumbs = function (index) {
        this.output.initial = index;
        this.updateDescription();
    };
    SbImageViewerToolsDS.prototype.handlePageChange = function (payload) {
        this.handleThumbs(payload.page);
    };
    SbImageViewerToolsDS.prototype.updateDescription = function () {
        var index = this.output.initial;
        var images = this.output.images;
        this.output.description = images[index].caption;
    };
    return SbImageViewerToolsDS;
}(DataSource));
export { SbImageViewerToolsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL3NhbmRib3gvZGF0YS1zb3VyY2VzL2ltYWdlLXZpZXdlci10b29scy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUEwQyx3Q0FBVTtJQUFwRDs7SUFzQ0EsQ0FBQztJQXJDVyx3Q0FBUyxHQUFuQjtRQUNFLElBQU0sSUFBSSxHQUFHLHVCQUF1QixDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixFQUFFLEtBQUssRUFBRSxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1lBQzFHLEVBQUUsS0FBSyxFQUFFLCtCQUErQixFQUFFLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUU7WUFDekcsRUFBRSxLQUFLLEVBQUUsK0JBQStCLEVBQUUsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRTtTQUMxRyxDQUFDO1FBQ0YsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDN0QsSUFBSSxrQkFBa0IsS0FBSyxTQUFTLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLGdEQUFpQixHQUF4QjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUN6RSxDQUFDO0lBRU0sMkNBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFDdkUsQ0FBQztJQUVNLDJDQUFZLEdBQW5CLFVBQW9CLEtBQUs7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSwrQ0FBZ0IsR0FBdkIsVUFBd0IsT0FBTztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sZ0RBQWlCLEdBQXhCO1FBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDMUIsSUFBQSwyQkFBTSxDQUFpQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2xELENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUF0Q0QsQ0FBMEMsVUFBVSxHQXNDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZVZpZXdlclRvb2xzRGF0YSwgSU1BR0VfVklFV0VSX1RPT0xTX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2JJbWFnZVZpZXdlclRvb2xzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCk6IEltYWdlVmlld2VyVG9vbHNEYXRhIHtcclxuICAgIGNvbnN0IGRhdGEgPSBJTUFHRV9WSUVXRVJfVE9PTFNfTU9DSztcclxuICAgIGRhdGEuaW1hZ2VzID0gW1xyXG4gICAgICB7IHRodW1iOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8yMDAvMTMwJywgcGF5bG9hZDogeyB0aHVtYmluZGV4OiAwIH0sIGNhcHRpb246ICdUZXN0IGNhcHRpb24gPGI+IzE8L2I+JyB9LFxyXG4gICAgICB7IHRodW1iOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS85MC8xODAnLCBwYXlsb2FkOiB7IHRodW1iaW5kZXg6IDEgfSwgY2FwdGlvbjogJ1Rlc3QgY2FwdGlvbiA8Yj4jMjwvYj4nIH0sXHJcbiAgICAgIHsgdGh1bWI6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzkwLzExMCcsIHBheWxvYWQ6IHsgdGh1bWJpbmRleDogMiB9LCBjYXB0aW9uOiAnVGVzdCBjYXB0aW9uIDxiPiMzPC9iPicgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBpbml0aWFsRGVzY3JpcHRpb24gPSBkYXRhLmltYWdlc1tkYXRhLmluaXRpYWxdLmNhcHRpb247XHJcbiAgICBpZiAoaW5pdGlhbERlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGF0YS5kZXNjcmlwdGlvbiA9IGluaXRpYWxEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEZXNjcmlwdGlvbigpIHtcclxuICAgIHRoaXMub3V0cHV0LmlzVmlzaWJsZS5kZXNjcmlwdGlvbiA9ICF0aGlzLm91dHB1dC5pc1Zpc2libGUuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlVGh1bWJzKCkge1xyXG4gICAgdGhpcy5vdXRwdXQuaXNWaXNpYmxlLnRodW1ibmFpbHMgPSAhdGhpcy5vdXRwdXQuaXNWaXNpYmxlLnRodW1ibmFpbHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlVGh1bWJzKGluZGV4KSB7XHJcbiAgICB0aGlzLm91dHB1dC5pbml0aWFsID0gaW5kZXg7XHJcbiAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlUGFnZUNoYW5nZShwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmhhbmRsZVRodW1icyhwYXlsb2FkLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZURlc2NyaXB0aW9uKCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm91dHB1dC5pbml0aWFsO1xyXG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMub3V0cHV0O1xyXG4gICAgdGhpcy5vdXRwdXQuZGVzY3JpcHRpb24gPSBpbWFnZXNbaW5kZXhdLmNhcHRpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==