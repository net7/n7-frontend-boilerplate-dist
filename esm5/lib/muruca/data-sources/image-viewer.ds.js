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
            libOptions: {
                /* SHOW GROUP */
                showNavigator: false,
                autoHideControls: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFxQyxtQ0FBVTtJQUEvQztRQUFBLHFFQTBDQztRQXJDQyxtQkFBYSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQXFDL0MsQ0FBQztJQW5DVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQTdCLGlCQThCQztRQTdCQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2YsSUFBQSxvQkFBTSxFQUFFLG9CQUFNLENBQVU7UUFDeEIsSUFBQSxrQ0FBSyxDQUEwQjtRQUN2QyxPQUFPO1lBQ0wsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1lBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLFVBQVUsRUFBRTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixnQkFBZ0IsRUFBRSxLQUFLO2dCQUV2QixrQkFBa0I7Z0JBQ2xCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixlQUFlLEVBQUUsSUFBSTtnQkFFckIsY0FBYztnQkFDZCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsa0JBQWtCLEVBQUUsS0FBSyxLQUFLLElBQUk7Z0JBRWxDLHVCQUF1QixFQUFFLFdBQVc7YUFDckM7WUFDRCxVQUFVLEVBQUUsVUFBQyxNQUFNO2dCQUNqQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDckIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1QixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxvQ0FBVSxHQUFqQixVQUFrQixLQUFLO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNkJBQTZCO0lBQzVELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUExQ0QsQ0FBcUMsVUFBVSxHQTBDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJbWFnZVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdmlld2VyOiBhbnk7XHJcblxyXG4gIHZpZXdlckxvYWRlZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgeyBpbWFnZXMsIHRodW1icyB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHsgdG9vbHMgfSA9ICh0aGlzLm9wdGlvbnMgfHwge30pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1hZ2VzLFxyXG4gICAgICB0aHVtYnMsXHJcbiAgICAgIHZpZXdlcklkOiB0aGlzLmlkLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgLyogU0hPVyBHUk9VUCAqL1xyXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLCAvLyBzaG93cyB0aGUgbWluaS1tYXBcclxuICAgICAgICBhdXRvSGlkZUNvbnRyb2xzOiBmYWxzZSxcclxuXHJcbiAgICAgICAgLyogU0hPVyBCVVRUT05TICovXHJcbiAgICAgICAgc2hvd1JvdGF0aW9uQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2hvd1NlcXVlbmNlQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICBzaG93SG9tZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgc2hvd1pvb21Db250cm9sOiB0cnVlLFxyXG5cclxuICAgICAgICAvKiBTRVFVRU5DRSAqL1xyXG4gICAgICAgIHNlcXVlbmNlTW9kZTogdHJ1ZSwgLy8gYWxsb3dzIGhhdmluZyBtdWx0aXBsZSBpbWFnZXMgKGFzIGluIGFycmF5IG9mIGltYWdlcyArIHpvb21lZCBpbWFnZSlcclxuICAgICAgICBzaG93UmVmZXJlbmNlU3RyaXA6IHRvb2xzICE9PSB0cnVlLCAvLyBzaG93cyB0aGUgaW1hZ2VzIGFycmF5IChkZWZhdWx0OiBob3Jpem9udGFsbHkpXHJcblxyXG4gICAgICAgIG5hdmlnYXRpb25Db250cm9sQW5jaG9yOiAnVE9QX1JJR0hUJyxcclxuICAgICAgfSxcclxuICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xyXG4gICAgICAgIHRoaXMudmlld2VyID0gdmlld2VyO1xyXG4gICAgICAgIHRoaXMudmlld2VyTG9hZGVkJC5uZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlUGFnZShpbmRleCkge1xyXG4gICAgdGhpcy52aWV3ZXIuZ29Ub1BhZ2UoaW5kZXgpOyAvLyBjYWxsIHRvIE9wZW5TZWFkcmFnb24gQVBJc1xyXG4gIH1cclxufVxyXG4iXX0=