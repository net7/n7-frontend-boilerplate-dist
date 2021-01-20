import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwSchedaImageDS = /** @class */ (function (_super) {
    __extends(AwSchedaImageDS, _super);
    function AwSchedaImageDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSchedaImageDS.prototype.transform = function (data) {
        var _this = this;
        var tileSources = this.getTileSources(data.items);
        return {
            images: [],
            viewerId: data.id,
            libOptions: {
                tileSources: tileSources,
                sequenceMode: true,
                showReferenceStrip: true,
                autoHideControls: false,
                showNavigator: false,
            },
            _setViewer: function (viewer) {
                _this.instance = viewer;
            }
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
            var images = _this.getTileSources(data.items);
            _this.instance.open(images);
        });
    };
    AwSchedaImageDS.prototype.getTileSources = function (images) {
        return images.map(function (_a) {
            var type = _a.type, url = _a.url;
            if (type === 'images-simple') {
                return {
                    url: url,
                    type: 'image'
                };
            }
            // FIXME: togliere replace
            return url.replace('FIF', 'Deepzoom').replace('.tif', '.tif.dzi');
        });
    };
    return AwSchedaImageDS;
}(DataSource));
export { AwSchedaImageDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQztJQUFxQyxtQ0FBVTtJQUEvQzs7SUFrREEsQ0FBQztJQS9DVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQWlCQztRQWhCQyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwRCxPQUFPO1lBQ0wsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDakIsVUFBVSxFQUFFO2dCQUNWLFdBQVcsYUFBQTtnQkFDWCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsZ0JBQWdCLEVBQUUsS0FBSztnQkFDdkIsYUFBYSxFQUFFLEtBQUs7YUFDckI7WUFDRCxVQUFVLEVBQUUsVUFBQyxNQUFNO2dCQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUN6QixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLHNDQUFZLEdBQW5CLFVBQW9CLElBQUk7UUFBeEIsaUJBVUM7UUFUQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTNCLFFBQVE7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVoQyxVQUFVLENBQUM7WUFDVCxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyx3Q0FBYyxHQUF0QixVQUF1QixNQUFNO1FBQzNCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWE7Z0JBQVgsY0FBSSxFQUFFLFlBQUc7WUFDNUIsSUFBSSxJQUFJLEtBQUssZUFBZSxFQUFFO2dCQUM1QixPQUFPO29CQUNMLEdBQUcsS0FBQTtvQkFDSCxJQUFJLEVBQUUsT0FBTztpQkFDZCxDQUFDO2FBQ0g7WUFDRCwwQkFBMEI7WUFDMUIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWxERCxDQUFxQyxVQUFVLEdBa0Q5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVZpZXdlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUltYWdlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBpbnN0YW5jZTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBJbWFnZVZpZXdlckRhdGEge1xuICAgIGNvbnN0IHRpbGVTb3VyY2VzID0gdGhpcy5nZXRUaWxlU291cmNlcyhkYXRhLml0ZW1zKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbWFnZXM6IFtdLFxuICAgICAgdmlld2VySWQ6IGRhdGEuaWQsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIHRpbGVTb3VyY2VzLFxuICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSxcbiAgICAgICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIF9zZXRWaWV3ZXI6ICh2aWV3ZXIpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHZpZXdlcjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGhhc0luc3RhbmNlKCkge1xuICAgIHJldHVybiAhIXRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSW1hZ2VzKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHJldHVybjtcblxuICAgIC8vIHJlc2V0XG4gICAgdGhpcy5pbnN0YW5jZS53b3JsZC5yZW1vdmVBbGwoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5nZXRUaWxlU291cmNlcyhkYXRhLml0ZW1zKTtcbiAgICAgIHRoaXMuaW5zdGFuY2Uub3BlbihpbWFnZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaWxlU291cmNlcyhpbWFnZXMpIHtcbiAgICByZXR1cm4gaW1hZ2VzLm1hcCgoeyB0eXBlLCB1cmwgfSkgPT4ge1xuICAgICAgaWYgKHR5cGUgPT09ICdpbWFnZXMtc2ltcGxlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBGSVhNRTogdG9nbGllcmUgcmVwbGFjZVxuICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKCdGSUYnLCAnRGVlcHpvb20nKS5yZXBsYWNlKCcudGlmJywgJy50aWYuZHppJyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==