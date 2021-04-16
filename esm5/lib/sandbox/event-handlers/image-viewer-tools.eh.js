import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var SbImageViewerToolsEH = /** @class */ (function (_super) {
    __extends(SbImageViewerToolsEH, _super);
    function SbImageViewerToolsEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SbImageViewerToolsEH.prototype.listen = function () {
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
    return SbImageViewerToolsEH;
}(EventHandler));
export { SbImageViewerToolsEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL3NhbmRib3gvZXZlbnQtaGFuZGxlcnMvaW1hZ2Utdmlld2VyLXRvb2xzLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBMEMsd0NBQVk7SUFBdEQ7O0lBNkNBLENBQUM7SUE1Q1EscUNBQU0sR0FBYjtRQUFBLGlCQTJDQztRQTFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDZCQUE2QjtvQkFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTt3QkFDcEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQzt3QkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNwQyxNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLG1CQUFtQixFQUFFO3dCQUNuQyxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7d0JBQ3BDLE1BQU07cUJBQ1A7b0JBQ0QsSUFBSSxPQUFPLEtBQUssb0JBQW9CLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDcEMsTUFBTTtxQkFDUDtvQkFDRCxJQUFJLE9BQU8sS0FBSyxlQUFlLEVBQUU7d0JBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQy9CLE1BQU07cUJBQ1A7b0JBQ0QsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw2QkFBNkIsQ0FBQztnQkFDbkMsS0FBSyxtQ0FBbUM7b0JBQ3RDLFNBQVM7b0JBQ1QsTUFBTTtnQkFDUixLQUFLLG1DQUFtQztvQkFDdEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTdDRCxDQUEwQyxZQUFZLEdBNkNyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTYkltYWdlVmlld2VyVG9vbHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLXRvb2xzLmNsaWNrJzpcclxuICAgICAgICAgIGlmIChwYXlsb2FkLnRodW1iaW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBheWxvYWQudGh1bWJpbmRleDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVRodW1icyhpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0aHVtYmNsaWNrJywgaW5kZXgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAnY2xvc2UtZGVzY3JpcHRpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVEZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAndG9nZ2xlLWRlc2NyaXB0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlRGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ3RvZ2dsZS10aHVtYnMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVUaHVtYnMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLWxheW91dC5pbml0JzpcclxuICAgICAgICBjYXNlICdzYi1pbWFnZS12aWV3ZXItbGF5b3V0LnRodW1iY2xpY2snOlxyXG4gICAgICAgICAgLy8gU2lsZW50XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzYi1pbWFnZS12aWV3ZXItbGF5b3V0LnBhZ2VjaGFuZ2UnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVBhZ2VDaGFuZ2UocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=