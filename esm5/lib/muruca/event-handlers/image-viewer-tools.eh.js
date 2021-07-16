import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrImageViewerToolsEH = /** @class */ (function (_super) {
    __extends(MrImageViewerToolsEH, _super);
    function MrImageViewerToolsEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrImageViewerToolsEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'sb-image-viewer-tools.click':
                    if (payload.thumbindex !== undefined) {
                        var index = payload.thumbindex;
                        _this.dataSource.handleThumbs(index);
                        _this.emitOuter('thumbclick', index);
                        break;
                    }
                    if (payload === 'close-description') {
                        _this.dataSource.toggleDescription();
                        break;
                    }
                    if (payload === 'toggle-description') {
                        _this.dataSource.toggleDescription();
                        break;
                    }
                    if (payload === 'toggle-thumbs') {
                        _this.dataSource.toggleThumbs();
                        break;
                    }
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'sb-image-viewer-layout.init':
                case 'sb-image-viewer-layout.thumbclick':
                    // Silent
                    break;
                case 'sb-image-viewer-layout.pagechange':
                    _this.dataSource.handlePageChange(payload);
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
    };
    return MrImageViewerToolsEH;
}(EventHandler));
export { MrImageViewerToolsEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXItdG9vbHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUEwQyx3Q0FBWTtJQUF0RDs7SUE2Q0EsQ0FBQztJQTVDUSxxQ0FBTSxHQUFiO1FBQUEsaUJBMkNDO1FBMUNDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssNkJBQTZCO29CQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO3dCQUNwQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO3dCQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3BDLE1BQU07cUJBQ1A7b0JBQ0QsSUFBSSxPQUFPLEtBQUssbUJBQW1CLEVBQUU7d0JBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDcEMsTUFBTTtxQkFDUDtvQkFDRCxJQUFJLE9BQU8sS0FBSyxvQkFBb0IsRUFBRTt3QkFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUNwQyxNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLGVBQWUsRUFBRTt3QkFDL0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDL0IsTUFBTTtxQkFDUDtvQkFDRCxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDZCQUE2QixDQUFDO2dCQUNuQyxLQUFLLG1DQUFtQztvQkFDdEMsU0FBUztvQkFDVCxNQUFNO2dCQUNSLEtBQUssbUNBQW1DO29CQUN0QyxLQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMxQyxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBN0NELENBQTBDLFlBQVksR0E2Q3JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJJbWFnZVZpZXdlclRvb2xzRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdzYi1pbWFnZS12aWV3ZXItdG9vbHMuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkLnRodW1iaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXlsb2FkLnRodW1iaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlVGh1bWJzKGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0aHVtYmNsaWNrJywgaW5kZXgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAnY2xvc2UtZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ3RvZ2dsZS1kZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVEZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAndG9nZ2xlLXRodW1icycpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVUaHVtYnMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLWxheW91dC5pbml0JzpcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLWxheW91dC50aHVtYmNsaWNrJzpcbiAgICAgICAgICAvLyBTaWxlbnRcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLWxheW91dC5wYWdlY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlUGFnZUNoYW5nZShwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==