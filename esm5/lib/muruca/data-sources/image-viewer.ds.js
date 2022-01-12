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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFxQyxtQ0FBVTtJQUEvQztRQUFBLHFFQTRDQztRQXZDQyxtQkFBYSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQXVDL0MsQ0FBQztJQXJDVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQTdCLGlCQWdDQztRQS9CQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2YsSUFBQSxvQkFBTSxFQUFFLG9CQUFNLENBQVU7UUFDeEIsSUFBQSxrQ0FBSyxDQUEwQjtRQUN2QyxPQUFPO1lBQ0wsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1lBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLGNBQWMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLFVBQVUsRUFBRTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixnQ0FBZ0M7Z0JBRWhDLGtCQUFrQjtnQkFDbEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsbUJBQW1CLEVBQUUsSUFBSTtnQkFDekIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGVBQWUsRUFBRSxJQUFJO2dCQUVyQixjQUFjO2dCQUNkLFlBQVksRUFBRSxJQUFJO2dCQUNsQixrQkFBa0IsRUFBRSxLQUFLLEtBQUssSUFBSTtnQkFFbEMsdUJBQXVCLEVBQUUsV0FBVzthQUNyQztZQUNELFVBQVUsRUFBRSxVQUFDLE1BQU07Z0JBQ2pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLG9DQUFVLEdBQWpCLFVBQWtCLEtBQUs7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7SUFDNUQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTVDRCxDQUFxQyxVQUFVLEdBNEM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2aWV3ZXI6IGFueTtcblxuICB2aWV3ZXJMb2FkZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IGltYWdlcywgdGh1bWJzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgdG9vbHMgfSA9ICh0aGlzLm9wdGlvbnMgfHwge30pO1xuICAgIHJldHVybiB7XG4gICAgICBpbWFnZXMsXG4gICAgICB0aHVtYnMsXG4gICAgICB2aWV3ZXJJZDogdGhpcy5pZCxcbiAgICAgIGhpZGVOYXZpZ2F0aW9uOiAhKGRhdGEuaW1hZ2VzLmxlbmd0aCA+IDEpLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICAvKiBTSE9XIEdST1VQICovXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLCAvLyBzaG93cyB0aGUgbWluaS1tYXBcbiAgICAgICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXG4gICAgICAgIC8vIHNob3dOYXZpZ2F0aW9uQ29udHJvbDogZmFsc2UsXG5cbiAgICAgICAgLyogU0hPVyBCVVRUT05TICovXG4gICAgICAgIHNob3dSb3RhdGlvbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICBzaG93U2VxdWVuY2VDb250cm9sOiB0cnVlLFxuICAgICAgICBzaG93SG9tZUNvbnRyb2w6IHRydWUsXG4gICAgICAgIHNob3dab29tQ29udHJvbDogdHJ1ZSxcblxuICAgICAgICAvKiBTRVFVRU5DRSAqL1xuICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsIC8vIGFsbG93cyBoYXZpbmcgbXVsdGlwbGUgaW1hZ2VzIChhcyBpbiBhcnJheSBvZiBpbWFnZXMgKyB6b29tZWQgaW1hZ2UpXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdG9vbHMgIT09IHRydWUsIC8vIHNob3dzIHRoZSBpbWFnZXMgYXJyYXkgKGRlZmF1bHQ6IGhvcml6b250YWxseSlcblxuICAgICAgICBuYXZpZ2F0aW9uQ29udHJvbEFuY2hvcjogJ1RPUF9SSUdIVCcsXG4gICAgICB9LFxuICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xuICAgICAgICB0aGlzLnZpZXdlciA9IHZpZXdlcjtcbiAgICAgICAgdGhpcy52aWV3ZXJMb2FkZWQkLm5leHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhZ2UoaW5kZXgpIHtcbiAgICB0aGlzLnZpZXdlci5nb1RvUGFnZShpbmRleCk7IC8vIGNhbGwgdG8gT3BlblNlYWRyYWdvbiBBUElzXG4gIH1cbn1cbiJdfQ==