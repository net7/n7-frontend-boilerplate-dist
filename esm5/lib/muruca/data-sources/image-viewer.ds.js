import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
var MrImageViewerDS = /** @class */ (function (_super) {
    __extends(MrImageViewerDS, _super);
    function MrImageViewerDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewerLoaded$ = new Subject();
        return _this;
    }
    MrImageViewerDS.prototype.transform = function (data) {
        var _this = this;
        if (!data)
            return null;
        var images = data.images, thumbs = data.thumbs;
        var tools = (this.options || {}).tools;
        return {
            images: images,
            thumbs: thumbs,
            viewerId: this.id,
            hideNavigation: !(data.images.length > 1),
            libOptions: {
                /* SHOW GROUP */
                showNavigator: false,
                autoHideControls: false,
                // showNavigationControl: false,
                /* SHOW BUTTONS */
                showRotationControl: false,
                showSequenceControl: true,
                showHomeControl: true,
                showZoomControl: true,
                /* SEQUENCE */
                sequenceMode: true,
                showReferenceStrip: tools !== true,
                navigationControlAnchor: 'TOP_RIGHT',
            },
            _setViewer: function (viewer) {
                _this.viewer = viewer;
                _this.viewerLoaded$.next();
            }
        };
    };
    MrImageViewerDS.prototype.changePage = function (index) {
        this.viewer.goToPage(index); // call to OpenSeadragon APIs
    };
    return MrImageViewerDS;
}(DataSource));
export { MrImageViewerDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFxQyxtQ0FBVTtJQUEvQztRQUFBLHFFQTRDQztRQXZDQyxtQkFBYSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQXVDL0MsQ0FBQztJQXJDVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQTdCLGlCQWdDQztRQS9CQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2YsSUFBQSxvQkFBTSxFQUFFLG9CQUFNLENBQVU7UUFDeEIsSUFBQSxrQ0FBSyxDQUEwQjtRQUN2QyxPQUFPO1lBQ0wsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1lBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLGNBQWMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLFVBQVUsRUFBRTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixnQ0FBZ0M7Z0JBRWhDLGtCQUFrQjtnQkFDbEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsbUJBQW1CLEVBQUUsSUFBSTtnQkFDekIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGVBQWUsRUFBRSxJQUFJO2dCQUVyQixjQUFjO2dCQUNkLFlBQVksRUFBRSxJQUFJO2dCQUNsQixrQkFBa0IsRUFBRSxLQUFLLEtBQUssSUFBSTtnQkFFbEMsdUJBQXVCLEVBQUUsV0FBVzthQUNyQztZQUNELFVBQVUsRUFBRSxVQUFDLE1BQU07Z0JBQ2pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLG9DQUFVLEdBQWpCLFVBQWtCLEtBQUs7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7SUFDNUQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTVDRCxDQUFxQyxVQUFVLEdBNEM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2aWV3ZXI6IGFueTtcclxuXHJcbiAgdmlld2VyTG9hZGVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCB7IGltYWdlcywgdGh1bWJzIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyB0b29scyB9ID0gKHRoaXMub3B0aW9ucyB8fCB7fSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbWFnZXMsXHJcbiAgICAgIHRodW1icyxcclxuICAgICAgdmlld2VySWQ6IHRoaXMuaWQsXHJcbiAgICAgIGhpZGVOYXZpZ2F0aW9uOiAhKGRhdGEuaW1hZ2VzLmxlbmd0aCA+IDEpLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgLyogU0hPVyBHUk9VUCAqL1xyXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLCAvLyBzaG93cyB0aGUgbWluaS1tYXBcclxuICAgICAgICBhdXRvSGlkZUNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAvLyBzaG93TmF2aWdhdGlvbkNvbnRyb2w6IGZhbHNlLFxyXG5cclxuICAgICAgICAvKiBTSE9XIEJVVFRPTlMgKi9cclxuICAgICAgICBzaG93Um90YXRpb25Db250cm9sOiBmYWxzZSxcclxuICAgICAgICBzaG93U2VxdWVuY2VDb250cm9sOiB0cnVlLFxyXG4gICAgICAgIHNob3dIb21lQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICBzaG93Wm9vbUNvbnRyb2w6IHRydWUsXHJcblxyXG4gICAgICAgIC8qIFNFUVVFTkNFICovXHJcbiAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLCAvLyBhbGxvd3MgaGF2aW5nIG11bHRpcGxlIGltYWdlcyAoYXMgaW4gYXJyYXkgb2YgaW1hZ2VzICsgem9vbWVkIGltYWdlKVxyXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdG9vbHMgIT09IHRydWUsIC8vIHNob3dzIHRoZSBpbWFnZXMgYXJyYXkgKGRlZmF1bHQ6IGhvcml6b250YWxseSlcclxuXHJcbiAgICAgICAgbmF2aWdhdGlvbkNvbnRyb2xBbmNob3I6ICdUT1BfUklHSFQnLFxyXG4gICAgICB9LFxyXG4gICAgICBfc2V0Vmlld2VyOiAodmlld2VyKSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XHJcbiAgICAgICAgdGhpcy52aWV3ZXJMb2FkZWQkLm5leHQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VQYWdlKGluZGV4KSB7XHJcbiAgICB0aGlzLnZpZXdlci5nb1RvUGFnZShpbmRleCk7IC8vIGNhbGwgdG8gT3BlblNlYWRyYWdvbiBBUElzXHJcbiAgfVxyXG59XHJcbiJdfQ==