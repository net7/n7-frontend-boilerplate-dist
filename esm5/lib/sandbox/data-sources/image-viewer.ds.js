import { __extends } from "tslib";
import { IMAGE_VIEWER_MOCK } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
var SbImageViewerDS = /** @class */ (function (_super) {
    __extends(SbImageViewerDS, _super);
    function SbImageViewerDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewer = null;
        _this.viewerLoaded$ = new Subject();
        return _this;
    }
    SbImageViewerDS.prototype.transform = function () {
        var _this = this;
        var data = IMAGE_VIEWER_MOCK;
        data.images = [
            { type: 'image', url: 'http://placekitten.com/1920/1080', buildPyramid: false },
            { type: 'image', url: 'http://placekitten.com/500/600', buildPyramid: false },
            { type: 'image', url: 'http://placekitten.com/700/400', buildPyramid: false }
        ];
        data.libOptions.showReferenceStrip = false;
        data._setViewer = function (viewer) {
            _this.viewer = viewer;
            _this.viewerLoaded$.next();
        };
        // data._pageCallback = (eventData) => eventData;
        return data;
    };
    SbImageViewerDS.prototype.changePage = function (index) {
        this.viewer.goToPage(index); // call to OpenSeadragon APIs
    };
    return SbImageViewerDS;
}(DataSource));
export { SbImageViewerDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL3NhbmRib3gvZGF0YS1zb3VyY2VzL2ltYWdlLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBQXFDLG1DQUFVO0lBQS9DO1FBQUEscUVBd0JDO1FBdkJRLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxtQkFBYSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQXFCdEQsQ0FBQztJQW5CVyxtQ0FBUyxHQUFuQjtRQUFBLGlCQWNDO1FBYkMsSUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsa0NBQWtDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRTtZQUMvRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGdDQUFnQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUU7WUFDN0UsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxnQ0FBZ0MsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFO1NBQzlFLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQUMsTUFBTTtZQUN2QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztRQUNGLGlEQUFpRDtRQUNqRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxvQ0FBVSxHQUFqQixVQUFrQixLQUFLO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNkJBQTZCO0lBQzVELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBcUMsVUFBVSxHQXdCOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZVZpZXdlckRhdGEsIElNQUdFX1ZJRVdFUl9NT0NLIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2JJbWFnZVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIHZpZXdlciA9IG51bGw7XHJcblxyXG4gIHB1YmxpYyB2aWV3ZXJMb2FkZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpOiBJbWFnZVZpZXdlckRhdGEge1xyXG4gICAgY29uc3QgZGF0YSA9IElNQUdFX1ZJRVdFUl9NT0NLO1xyXG4gICAgZGF0YS5pbWFnZXMgPSBbXHJcbiAgICAgIHsgdHlwZTogJ2ltYWdlJywgdXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8xOTIwLzEwODAnLCBidWlsZFB5cmFtaWQ6IGZhbHNlIH0sXHJcbiAgICAgIHsgdHlwZTogJ2ltYWdlJywgdXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS81MDAvNjAwJywgYnVpbGRQeXJhbWlkOiBmYWxzZSB9LFxyXG4gICAgICB7IHR5cGU6ICdpbWFnZScsIHVybDogJ2h0dHA6Ly9wbGFjZWtpdHRlbi5jb20vNzAwLzQwMCcsIGJ1aWxkUHlyYW1pZDogZmFsc2UgfVxyXG4gICAgXTtcclxuICAgIGRhdGEubGliT3B0aW9ucy5zaG93UmVmZXJlbmNlU3RyaXAgPSBmYWxzZTtcclxuICAgIGRhdGEuX3NldFZpZXdlciA9ICh2aWV3ZXIpID0+IHtcclxuICAgICAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XHJcbiAgICAgIHRoaXMudmlld2VyTG9hZGVkJC5uZXh0KCk7XHJcbiAgICB9O1xyXG4gICAgLy8gZGF0YS5fcGFnZUNhbGxiYWNrID0gKGV2ZW50RGF0YSkgPT4gZXZlbnREYXRhO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlUGFnZShpbmRleCkge1xyXG4gICAgdGhpcy52aWV3ZXIuZ29Ub1BhZ2UoaW5kZXgpOyAvLyBjYWxsIHRvIE9wZW5TZWFkcmFnb24gQVBJc1xyXG4gIH1cclxufVxyXG4iXX0=