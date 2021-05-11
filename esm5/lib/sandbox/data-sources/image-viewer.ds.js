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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL3NhbmRib3gvZGF0YS1zb3VyY2VzL2ltYWdlLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBQXFDLG1DQUFVO0lBQS9DO1FBQUEscUVBd0JDO1FBdkJRLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxtQkFBYSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQXFCdEQsQ0FBQztJQW5CVyxtQ0FBUyxHQUFuQjtRQUFBLGlCQWNDO1FBYkMsSUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsa0NBQWtDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRTtZQUMvRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGdDQUFnQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUU7WUFDN0UsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxnQ0FBZ0MsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFO1NBQzlFLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQUMsTUFBTTtZQUN2QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztRQUNGLGlEQUFpRDtRQUNqRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxvQ0FBVSxHQUFqQixVQUFrQixLQUFLO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNkJBQTZCO0lBQzVELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBcUMsVUFBVSxHQXdCOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZVZpZXdlckRhdGEsIElNQUdFX1ZJRVdFUl9NT0NLIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIFNiSW1hZ2VWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgdmlld2VyID0gbnVsbDtcblxuICBwdWJsaWMgdmlld2VyTG9hZGVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpOiBJbWFnZVZpZXdlckRhdGEge1xuICAgIGNvbnN0IGRhdGEgPSBJTUFHRV9WSUVXRVJfTU9DSztcbiAgICBkYXRhLmltYWdlcyA9IFtcbiAgICAgIHsgdHlwZTogJ2ltYWdlJywgdXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8xOTIwLzEwODAnLCBidWlsZFB5cmFtaWQ6IGZhbHNlIH0sXG4gICAgICB7IHR5cGU6ICdpbWFnZScsIHVybDogJ2h0dHA6Ly9wbGFjZWtpdHRlbi5jb20vNTAwLzYwMCcsIGJ1aWxkUHlyYW1pZDogZmFsc2UgfSxcbiAgICAgIHsgdHlwZTogJ2ltYWdlJywgdXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS83MDAvNDAwJywgYnVpbGRQeXJhbWlkOiBmYWxzZSB9XG4gICAgXTtcbiAgICBkYXRhLmxpYk9wdGlvbnMuc2hvd1JlZmVyZW5jZVN0cmlwID0gZmFsc2U7XG4gICAgZGF0YS5fc2V0Vmlld2VyID0gKHZpZXdlcikgPT4ge1xuICAgICAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XG4gICAgICB0aGlzLnZpZXdlckxvYWRlZCQubmV4dCgpO1xuICAgIH07XG4gICAgLy8gZGF0YS5fcGFnZUNhbGxiYWNrID0gKGV2ZW50RGF0YSkgPT4gZXZlbnREYXRhO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhZ2UoaW5kZXgpIHtcbiAgICB0aGlzLnZpZXdlci5nb1RvUGFnZShpbmRleCk7IC8vIGNhbGwgdG8gT3BlblNlYWRyYWdvbiBBUElzXG4gIH1cbn1cbiJdfQ==