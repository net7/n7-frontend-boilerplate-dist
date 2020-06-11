import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaImageDS = /** @class */ (function (_super) {
    __extends(AwSchedaImageDS, _super);
    function AwSchedaImageDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSchedaImageDS.prototype.transform = function (data) {
        var _this = this;
        var tileSources = this.getTileSources(data.images);
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
            console.warn('images', images.length, images);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUFxQyxtQ0FBVTtJQUEvQzs7SUEyQ0EsQ0FBQztJQXhDVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQWlCQztRQWhCQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxPQUFPO1lBQ0wsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFVBQVUsRUFBRTtnQkFDVixXQUFXLGFBQUE7Z0JBQ1gsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLGFBQWEsRUFBRSxLQUFLO2FBQ3JCO1lBQ0QsVUFBVSxFQUFFLFVBQUMsTUFBTTtnQkFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDekIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRU0scUNBQVcsR0FBbEI7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxzQ0FBWSxHQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQVdDO1FBVkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUzQixRQUFRO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFaEMsVUFBVSxDQUFDO1lBQ1QsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyx3Q0FBYyxHQUF0QixVQUF1QixNQUFNO1FBQzNCLDBCQUEwQjtRQUMxQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUExRCxDQUEwRCxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTNDRCxDQUFxQyxVQUFVLEdBMkM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVZpZXdlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUltYWdlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBpbnN0YW5jZTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBJbWFnZVZpZXdlckRhdGEge1xuICAgIGNvbnN0IHRpbGVTb3VyY2VzID0gdGhpcy5nZXRUaWxlU291cmNlcyhkYXRhLmltYWdlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgIHZpZXdlcklkOiAnc2NoZWRhLWxheW91dC12aWV3ZXInLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICB0aWxlU291cmNlcyxcbiAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLFxuICAgICAgICBzaG93UmVmZXJlbmNlU3RyaXA6IHRydWUsXG4gICAgICAgIGF1dG9IaWRlQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBzaG93TmF2aWdhdG9yOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfc2V0Vmlld2VyOiAodmlld2VyKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSB2aWV3ZXI7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgaGFzSW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbWFnZXMoZGF0YSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkgcmV0dXJuO1xuXG4gICAgLy8gcmVzZXRcbiAgICB0aGlzLmluc3RhbmNlLndvcmxkLnJlbW92ZUFsbCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmdldFRpbGVTb3VyY2VzKGRhdGEuaW1hZ2VzKTtcbiAgICAgIGNvbnNvbGUud2FybignaW1hZ2VzJywgaW1hZ2VzLmxlbmd0aCwgaW1hZ2VzKTtcbiAgICAgIHRoaXMuaW5zdGFuY2Uub3BlbihpbWFnZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaWxlU291cmNlcyhpbWFnZXMpIHtcbiAgICAvLyBGSVhNRTogdG9nbGllcmUgcmVwbGFjZVxuICAgIHJldHVybiBpbWFnZXMubWFwKChpbWcpID0+IGltZy5yZXBsYWNlKCdGSUYnLCAnRGVlcHpvb20nKS5yZXBsYWNlKCcudGlmJywgJy50aWYuZHppJykpO1xuICB9XG59XG4iXX0=