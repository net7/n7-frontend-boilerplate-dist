import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import { interval } from 'rxjs';
import { filter, first } from 'rxjs/operators';
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
        // container exists check
        interval(10).pipe(filter(function () { return !!document.getElementById(_this.output.viewerId); }), first()).subscribe(function () {
            // reset
            _this.instance.world.removeAll();
            setTimeout(function () {
                var images = _this.getTileSources(data.items);
                _this.instance.open(images);
            });
        });
    };
    AwSchedaImageDS.prototype.reset = function () {
        if (!this.instance)
            return;
        this.instance.world.removeAll();
    };
    AwSchedaImageDS.prototype.getTileSources = function (images) {
        var tileSources = [];
        images.forEach(function (_a) {
            var type = _a.type, url = _a.url, iiifImages = _a.iiifImages;
            if (type === 'images-simple') {
                tileSources.push({
                    url: url,
                    type: 'image'
                });
            }
            else if (type === 'images-iip') {
                // FIXME: togliere replace
                tileSources.push(url.replace('FIF', 'Deepzoom').replace('.tif', '.tif.dzi'));
            }
            else if (type === 'images-iiif') {
                iiifImages.forEach(function (iiifUrl) {
                    tileSources.push(iiifUrl);
                });
            }
        });
        return tileSources;
    };
    return AwSchedaImageDS;
}(DataSource));
export { AwSchedaImageDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0M7SUFBcUMsbUNBQVU7SUFBL0M7O0lBbUVBLENBQUM7SUFoRVcsbUNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFpQkM7UUFoQkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsT0FBTztZQUNMLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLFVBQVUsRUFBRTtnQkFDVixXQUFXLGFBQUE7Z0JBQ1gsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLGFBQWEsRUFBRSxLQUFLO2FBQ3JCO1lBQ0QsVUFBVSxFQUFFLFVBQUMsTUFBTTtnQkFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDekIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRU0scUNBQVcsR0FBbEI7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxzQ0FBWSxHQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQWVDO1FBZEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUzQix5QkFBeUI7UUFDekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDZixNQUFNLENBQUMsY0FBTSxPQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQS9DLENBQStDLENBQUMsRUFDN0QsS0FBSyxFQUFFLENBQ1IsQ0FBQyxTQUFTLENBQUM7WUFDVixRQUFRO1lBQ1IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEMsVUFBVSxDQUFDO2dCQUNULElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLCtCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTyx3Q0FBYyxHQUF0QixVQUF1QixNQUFNO1FBQzNCLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBeUI7Z0JBQXZCLGNBQUksRUFBRSxZQUFHLEVBQUUsMEJBQVU7WUFDckMsSUFBSSxJQUFJLEtBQUssZUFBZSxFQUFFO2dCQUM1QixXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNmLEdBQUcsS0FBQTtvQkFDSCxJQUFJLEVBQUUsT0FBTztpQkFDZCxDQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLElBQUksS0FBSyxZQUFZLEVBQUU7Z0JBQ2hDLDBCQUEwQjtnQkFDMUIsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDOUU7aUJBQU0sSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO2dCQUNqQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztvQkFDekIsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQW5FRCxDQUFxQyxVQUFVLEdBbUU5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVZpZXdlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhSW1hZ2VEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGluc3RhbmNlO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IEltYWdlVmlld2VyRGF0YSB7XG4gICAgY29uc3QgdGlsZVNvdXJjZXMgPSB0aGlzLmdldFRpbGVTb3VyY2VzKGRhdGEuaXRlbXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGltYWdlczogW10sXG4gICAgICB2aWV3ZXJJZDogZGF0YS5pZCxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgdGlsZVNvdXJjZXMsXG4gICAgICAgIHNlcXVlbmNlTW9kZTogdHJ1ZSxcbiAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0cnVlLFxuICAgICAgICBhdXRvSGlkZUNvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgc2hvd05hdmlnYXRvcjogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gdmlld2VyO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgaGFzSW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVJbWFnZXMoZGF0YSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkgcmV0dXJuO1xuXG4gICAgLy8gY29udGFpbmVyIGV4aXN0cyBjaGVja1xuICAgIGludGVydmFsKDEwKS5waXBlKFxuICAgICAgZmlsdGVyKCgpID0+ICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vdXRwdXQudmlld2VySWQpKSxcbiAgICAgIGZpcnN0KClcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAvLyByZXNldFxuICAgICAgdGhpcy5pbnN0YW5jZS53b3JsZC5yZW1vdmVBbGwoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmdldFRpbGVTb3VyY2VzKGRhdGEuaXRlbXMpO1xuICAgICAgICB0aGlzLmluc3RhbmNlLm9wZW4oaW1hZ2VzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkgcmV0dXJuO1xuICAgIHRoaXMuaW5zdGFuY2Uud29ybGQucmVtb3ZlQWxsKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFRpbGVTb3VyY2VzKGltYWdlcykge1xuICAgIGNvbnN0IHRpbGVTb3VyY2VzID0gW107XG4gICAgaW1hZ2VzLmZvckVhY2goKHsgdHlwZSwgdXJsLCBpaWlmSW1hZ2VzIH0pID0+IHtcbiAgICAgIGlmICh0eXBlID09PSAnaW1hZ2VzLXNpbXBsZScpIHtcbiAgICAgICAgdGlsZVNvdXJjZXMucHVzaCh7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZSdcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdpbWFnZXMtaWlwJykge1xuICAgICAgICAvLyBGSVhNRTogdG9nbGllcmUgcmVwbGFjZVxuICAgICAgICB0aWxlU291cmNlcy5wdXNoKHVybC5yZXBsYWNlKCdGSUYnLCAnRGVlcHpvb20nKS5yZXBsYWNlKCcudGlmJywgJy50aWYuZHppJykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnaW1hZ2VzLWlpaWYnKSB7XG4gICAgICAgIGlpaWZJbWFnZXMuZm9yRWFjaCgoaWlpZlVybCkgPT4ge1xuICAgICAgICAgIHRpbGVTb3VyY2VzLnB1c2goaWlpZlVybCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aWxlU291cmNlcztcbiAgfVxufVxuIl19