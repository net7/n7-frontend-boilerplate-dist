import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { first } from 'rxjs/operators';
var SbImageViewerEH = /** @class */ (function (_super) {
    __extends(SbImageViewerEH, _super);
    function SbImageViewerEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SbImageViewerEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'sb-image-viewer.click':
                    _this.emitOuter('click', payload);
                    break;
                case 'sb-image-viewer.pagechange':
                    _this.emitOuter('pagechange', payload);
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
                    _this.listenToViewer();
                    break;
                case 'sb-image-viewer-layout.thumbclick':
                    _this.dataSource.changePage(payload);
                    break;
                case 'sb-image-viewer-layout.pagechange':
                    // Silent
                    break;
                default:
                    // console.warn('unhandled event of type', type);
                    break;
            }
        });
    };
    SbImageViewerEH.prototype.listenToViewer = function () {
        var _this = this;
        this.dataSource.viewerLoaded$.pipe(first()).subscribe(function () {
            var viewer = _this.dataSource.viewer;
            viewer.addHandler('page', function (eventData) {
                _this.emitOuter('pagechange', eventData);
            });
        });
    };
    return SbImageViewerEH;
}(EventHandler));
export { SbImageViewerEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL3NhbmRib3gvZXZlbnQtaGFuZGxlcnMvaW1hZ2Utdmlld2VyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDO0lBQXFDLG1DQUFZO0lBQWpEOztJQTRDQSxDQUFDO0lBM0NRLGdDQUFNLEdBQWI7UUFBQSxpQkErQkM7UUE5QkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNqQyxNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw2QkFBNkI7b0JBQ2hDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDUixLQUFLLG1DQUFtQztvQkFDdEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1IsS0FBSyxtQ0FBbUM7b0JBQ3RDLFNBQVM7b0JBQ1QsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDaEMsS0FBSyxFQUFFLENBQ1IsQ0FBQyxTQUFTLENBQUM7WUFDRixJQUFBLGdDQUFNLENBQXFCO1lBQ25DLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQUMsU0FBUztnQkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUE1Q0QsQ0FBcUMsWUFBWSxHQTRDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNiSW1hZ2VWaWV3ZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLmNsaWNrJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLnBhZ2VjaGFuZ2UnOlxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2VjaGFuZ2UnLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdzYi1pbWFnZS12aWV3ZXItbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub1ZpZXdlcigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLWxheW91dC50aHVtYmNsaWNrJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGFuZ2VQYWdlKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLWxheW91dC5wYWdlY2hhbmdlJzpcclxuICAgICAgICAgIC8vIFNpbGVudFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxpc3RlblRvVmlld2VyKCkge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnZpZXdlckxvYWRlZCQucGlwZShcclxuICAgICAgZmlyc3QoKVxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IHZpZXdlciB9ID0gdGhpcy5kYXRhU291cmNlO1xyXG4gICAgICB2aWV3ZXIuYWRkSGFuZGxlcigncGFnZScsIChldmVudERhdGEpID0+IHtcclxuICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnZWNoYW5nZScsIGV2ZW50RGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==