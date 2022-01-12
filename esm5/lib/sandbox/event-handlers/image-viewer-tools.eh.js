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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL3NhbmRib3gvZXZlbnQtaGFuZGxlcnMvaW1hZ2Utdmlld2VyLXRvb2xzLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBMEMsd0NBQVk7SUFBdEQ7O0lBNkNBLENBQUM7SUE1Q1EscUNBQU0sR0FBYjtRQUFBLGlCQTJDQztRQTFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDZCQUE2QjtvQkFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTt3QkFDcEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQzt3QkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNwQyxNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLG1CQUFtQixFQUFFO3dCQUNuQyxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7d0JBQ3BDLE1BQU07cUJBQ1A7b0JBQ0QsSUFBSSxPQUFPLEtBQUssb0JBQW9CLEVBQUU7d0JBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDcEMsTUFBTTtxQkFDUDtvQkFDRCxJQUFJLE9BQU8sS0FBSyxlQUFlLEVBQUU7d0JBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQy9CLE1BQU07cUJBQ1A7b0JBQ0QsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyw2QkFBNkIsQ0FBQztnQkFDbkMsS0FBSyxtQ0FBbUM7b0JBQ3RDLFNBQVM7b0JBQ1QsTUFBTTtnQkFDUixLQUFLLG1DQUFtQztvQkFDdEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUMsTUFBTTtnQkFDUjtvQkFDRSxpREFBaUQ7b0JBQ2pELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTdDRCxDQUEwQyxZQUFZLEdBNkNyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNiSW1hZ2VWaWV3ZXJUb29sc0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2ItaW1hZ2Utdmlld2VyLXRvb2xzLmNsaWNrJzpcbiAgICAgICAgICBpZiAocGF5bG9hZC50aHVtYmluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGF5bG9hZC50aHVtYmluZGV4O1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVRodW1icyhpbmRleCk7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndGh1bWJjbGljaycsIGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ2Nsb3NlLWRlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZURlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09ICd0b2dnbGUtZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ3RvZ2dsZS10aHVtYnMnKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlVGh1bWJzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQuaW5pdCc6XG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQudGh1bWJjbGljayc6XG4gICAgICAgICAgLy8gU2lsZW50XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NiLWltYWdlLXZpZXdlci1sYXlvdXQucGFnZWNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVBhZ2VDaGFuZ2UocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=