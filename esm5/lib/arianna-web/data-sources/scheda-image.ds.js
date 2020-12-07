import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaImageDS = /** @class */ (function (_super) {
    __extends(AwSchedaImageDS, _super);
    function AwSchedaImageDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasNavigation = false;
        return _this;
    }
    AwSchedaImageDS.prototype.transform = function (data) {
        var _this = this;
        var tileSources = this.getTileSources(data.images);
        this.hasNavigation = Array.isArray(data.images) && data.images.length > 1;
        return {
            images: [],
            viewerId: 'scheda-layout-viewer',
            libOptions: {
                tileSources: tileSources,
                sequenceMode: true,
                showReferenceStrip: true,
                autoHideControls: false,
                showNavigator: false,
            },
            _setViewer: function (viewer) {
                _this.instance = viewer;
            },
        };
    };
    AwSchedaImageDS.prototype.hasInstance = function () {
        return !!this.instance;
    };
    AwSchedaImageDS.prototype.updateImages = function (data) {
        var _this = this;
        if (!this.instance)
            return;
        // reset
        this.instance.world.removeAll();
        setTimeout(function () {
            var images = _this.getTileSources(data.images);
            _this.hasNavigation = Array.isArray(data.images) && data.images.length > 1;
            _this.instance.open(images);
        });
    };
    AwSchedaImageDS.prototype.getTileSources = function (images) {
        // FIXME: togliere replace
        return images.map(function (img) { return img.replace('FIF', 'Deepzoom').replace('.tif', '.tif.dzi'); });
    };
    return AwSchedaImageDS;
}(DataSource));
export { AwSchedaImageDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUFxQyxtQ0FBVTtJQUEvQztRQUFBLHFFQStDQztRQTVDUSxtQkFBYSxHQUFHLEtBQUssQ0FBQzs7SUE0Qy9CLENBQUM7SUExQ1csbUNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFtQkM7UUFsQkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFMUUsT0FBTztZQUNMLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxVQUFVLEVBQUU7Z0JBQ1YsV0FBVyxhQUFBO2dCQUNYLFlBQVksRUFBRSxJQUFJO2dCQUNsQixrQkFBa0IsRUFBRSxJQUFJO2dCQUN4QixnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixhQUFhLEVBQUUsS0FBSzthQUNyQjtZQUNELFVBQVUsRUFBRSxVQUFDLE1BQU07Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLHFDQUFXLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0sc0NBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFXQztRQVZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFM0IsUUFBUTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWhDLFVBQVUsQ0FBQztZQUNULElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHdDQUFjLEdBQXRCLFVBQXVCLE1BQU07UUFDM0IsMEJBQTBCO1FBQzFCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQTFELENBQTBELENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBL0NELENBQXFDLFVBQVUsR0ErQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgSW1hZ2VWaWV3ZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhSW1hZ2VEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgaW5zdGFuY2U7XHJcblxyXG4gIHB1YmxpYyBoYXNOYXZpZ2F0aW9uID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IEltYWdlVmlld2VyRGF0YSB7XHJcbiAgICBjb25zdCB0aWxlU291cmNlcyA9IHRoaXMuZ2V0VGlsZVNvdXJjZXMoZGF0YS5pbWFnZXMpO1xyXG5cclxuICAgIHRoaXMuaGFzTmF2aWdhdGlvbiA9IEFycmF5LmlzQXJyYXkoZGF0YS5pbWFnZXMpICYmIGRhdGEuaW1hZ2VzLmxlbmd0aCA+IDE7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgdmlld2VySWQ6ICdzY2hlZGEtbGF5b3V0LXZpZXdlcicsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICB0aWxlU291cmNlcyxcclxuICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsXHJcbiAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0cnVlLFxyXG4gICAgICAgIGF1dG9IaWRlQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBfc2V0Vmlld2VyOiAodmlld2VyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHZpZXdlcjtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzSW5zdGFuY2UoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUltYWdlcyhkYXRhKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHJldHVybjtcclxuXHJcbiAgICAvLyByZXNldFxyXG4gICAgdGhpcy5pbnN0YW5jZS53b3JsZC5yZW1vdmVBbGwoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5nZXRUaWxlU291cmNlcyhkYXRhLmltYWdlcyk7XHJcbiAgICAgIHRoaXMuaGFzTmF2aWdhdGlvbiA9IEFycmF5LmlzQXJyYXkoZGF0YS5pbWFnZXMpICYmIGRhdGEuaW1hZ2VzLmxlbmd0aCA+IDE7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uub3BlbihpbWFnZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRpbGVTb3VyY2VzKGltYWdlcykge1xyXG4gICAgLy8gRklYTUU6IHRvZ2xpZXJlIHJlcGxhY2VcclxuICAgIHJldHVybiBpbWFnZXMubWFwKChpbWcpID0+IGltZy5yZXBsYWNlKCdGSUYnLCAnRGVlcHpvb20nKS5yZXBsYWNlKCcudGlmJywgJy50aWYuZHppJykpO1xyXG4gIH1cclxufVxyXG4iXX0=