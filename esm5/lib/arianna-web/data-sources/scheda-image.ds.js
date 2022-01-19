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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWltYWdlLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtaW1hZ2UuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0M7SUFBcUMsbUNBQVU7SUFBL0M7O0lBbUVBLENBQUM7SUFoRVcsbUNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUF4QixpQkFpQkM7UUFoQkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsT0FBTztZQUNMLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLFVBQVUsRUFBRTtnQkFDVixXQUFXLGFBQUE7Z0JBQ1gsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLGFBQWEsRUFBRSxLQUFLO2FBQ3JCO1lBQ0QsVUFBVSxFQUFFLFVBQUMsTUFBTTtnQkFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDekIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRU0scUNBQVcsR0FBbEI7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxzQ0FBWSxHQUFuQixVQUFvQixJQUFJO1FBQXhCLGlCQWVDO1FBZEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUzQix5QkFBeUI7UUFDekIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDZixNQUFNLENBQUMsY0FBTSxPQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQS9DLENBQStDLENBQUMsRUFDN0QsS0FBSyxFQUFFLENBQ1IsQ0FBQyxTQUFTLENBQUM7WUFDVixRQUFRO1lBQ1IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEMsVUFBVSxDQUFDO2dCQUNULElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLCtCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTyx3Q0FBYyxHQUF0QixVQUF1QixNQUFNO1FBQzNCLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBeUI7Z0JBQXZCLGNBQUksRUFBRSxZQUFHLEVBQUUsMEJBQVU7WUFDckMsSUFBSSxJQUFJLEtBQUssZUFBZSxFQUFFO2dCQUM1QixXQUFXLENBQUMsSUFBSSxDQUFDO29CQUNmLEdBQUcsS0FBQTtvQkFDSCxJQUFJLEVBQUUsT0FBTztpQkFDZCxDQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLElBQUksS0FBSyxZQUFZLEVBQUU7Z0JBQ2hDLDBCQUEwQjtnQkFDMUIsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDOUU7aUJBQU0sSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO2dCQUNqQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztvQkFDekIsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQW5FRCxDQUFxQyxVQUFVLEdBbUU5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlVmlld2VyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUltYWdlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcml2YXRlIGluc3RhbmNlO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBJbWFnZVZpZXdlckRhdGEge1xyXG4gICAgY29uc3QgdGlsZVNvdXJjZXMgPSB0aGlzLmdldFRpbGVTb3VyY2VzKGRhdGEuaXRlbXMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltYWdlczogW10sXHJcbiAgICAgIHZpZXdlcklkOiBkYXRhLmlkLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgdGlsZVNvdXJjZXMsXHJcbiAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLFxyXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSxcclxuICAgICAgICBhdXRvSGlkZUNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICBzaG93TmF2aWdhdG9yOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSB2aWV3ZXI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzSW5zdGFuY2UoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZUltYWdlcyhkYXRhKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHJldHVybjtcclxuXHJcbiAgICAvLyBjb250YWluZXIgZXhpc3RzIGNoZWNrXHJcbiAgICBpbnRlcnZhbCgxMCkucGlwZShcclxuICAgICAgZmlsdGVyKCgpID0+ICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vdXRwdXQudmlld2VySWQpKSxcclxuICAgICAgZmlyc3QoKVxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAvLyByZXNldFxyXG4gICAgICB0aGlzLmluc3RhbmNlLndvcmxkLnJlbW92ZUFsbCgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmdldFRpbGVTb3VyY2VzKGRhdGEuaXRlbXMpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub3BlbihpbWFnZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSByZXR1cm47XHJcbiAgICB0aGlzLmluc3RhbmNlLndvcmxkLnJlbW92ZUFsbCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUaWxlU291cmNlcyhpbWFnZXMpIHtcclxuICAgIGNvbnN0IHRpbGVTb3VyY2VzID0gW107XHJcbiAgICBpbWFnZXMuZm9yRWFjaCgoeyB0eXBlLCB1cmwsIGlpaWZJbWFnZXMgfSkgPT4ge1xyXG4gICAgICBpZiAodHlwZSA9PT0gJ2ltYWdlcy1zaW1wbGUnKSB7XHJcbiAgICAgICAgdGlsZVNvdXJjZXMucHVzaCh7XHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICB0eXBlOiAnaW1hZ2UnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2ltYWdlcy1paXAnKSB7XHJcbiAgICAgICAgLy8gRklYTUU6IHRvZ2xpZXJlIHJlcGxhY2VcclxuICAgICAgICB0aWxlU291cmNlcy5wdXNoKHVybC5yZXBsYWNlKCdGSUYnLCAnRGVlcHpvb20nKS5yZXBsYWNlKCcudGlmJywgJy50aWYuZHppJykpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdpbWFnZXMtaWlpZicpIHtcclxuICAgICAgICBpaWlmSW1hZ2VzLmZvckVhY2goKGlpaWZVcmwpID0+IHtcclxuICAgICAgICAgIHRpbGVTb3VyY2VzLnB1c2goaWlpZlVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRpbGVTb3VyY2VzO1xyXG4gIH1cclxufVxyXG4iXX0=