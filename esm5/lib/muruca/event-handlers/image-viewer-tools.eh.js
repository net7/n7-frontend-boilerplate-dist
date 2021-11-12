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
                case _this.dataSource.id + ".click":
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
                    if (payload === 'next') {
                        // let index = this.dataSource.retrieveIndex();
                        // this.dataSource.handleThumbsNext(index);
                        // let updatedIndex = this.dataSource.retrieveIndex();
                        // this.emitOuter('thumbclick', updatedIndex);
                        _this.dataSource.scrollRight();
                        break;
                    }
                    if (payload === 'prev') {
                        // let index = this.dataSource.retrieveIndex();
                        // this.dataSource.handleThumbsPrev(index);
                        // let updatedIndex = this.dataSource.retrieveIndex();
                        // this.emitOuter('thumbclick', updatedIndex);
                        _this.dataSource.scrollLeft();
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
            // console.log(payload);
            switch (type) {
                case 'mr-resource-layout.init':
                case 'mr-resource-layout.thumbclick':
                    // Silent
                    break;
                case 'mr-resource-layout.pagechange':
                    if (payload.targetId === _this.dataSource.id) {
                        _this.dataSource.handlePageChange(payload.eventData);
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXItdG9vbHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRDtJQUEwQyx3Q0FBWTtJQUF0RDs7SUFrRUEsQ0FBQztJQS9EUSxxQ0FBTSxHQUFiO1FBQUEsaUJBOERDO1FBN0RDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQVEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVE7b0JBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7d0JBQ3BDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDcEMsTUFBTTtxQkFDUDtvQkFDRCxJQUFJLE9BQU8sS0FBSyxtQkFBbUIsRUFBRTt3QkFDbkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUNwQyxNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLG9CQUFvQixFQUFFO3dCQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7d0JBQ3BDLE1BQU07cUJBQ1A7b0JBQ0QsSUFBSSxPQUFPLEtBQUssZUFBZSxFQUFFO3dCQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUMvQixNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTt3QkFDdEIsK0NBQStDO3dCQUMvQywyQ0FBMkM7d0JBQzNDLHNEQUFzRDt3QkFDdEQsOENBQThDO3dCQUM5QyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUM5QixNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTt3QkFDdEIsK0NBQStDO3dCQUMvQywyQ0FBMkM7d0JBQzNDLHNEQUFzRDt3QkFDdEQsOENBQThDO3dCQUM5QyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUM3QixNQUFNO3FCQUNQO29CQUNELE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLHdCQUF3QjtZQUN4QixRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QixDQUFDO2dCQUMvQixLQUFLLCtCQUErQjtvQkFDbEMsU0FBUztvQkFDVCxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUU7d0JBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUNyRDtvQkFDRCxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBbEVELENBQTBDLFlBQVksR0FrRXJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBNckltYWdlVmlld2VyVG9vbHNEUyB9IGZyb20gJy4uL2RhdGEtc291cmNlcy9pbWFnZS12aWV3ZXItdG9vbHMuZHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW1hZ2VWaWV3ZXJUb29sc0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBkYXRhU291cmNlOiBNckltYWdlVmlld2VyVG9vbHNEUztcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNsaWNrYDpcclxuICAgICAgICAgIGlmIChwYXlsb2FkLnRodW1iaW5kZXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBheWxvYWQudGh1bWJpbmRleDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVRodW1icyhpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0aHVtYmNsaWNrJywgaW5kZXgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAnY2xvc2UtZGVzY3JpcHRpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVEZXNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYXlsb2FkID09PSAndG9nZ2xlLWRlc2NyaXB0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlRGVzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ3RvZ2dsZS10aHVtYnMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVUaHVtYnMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ25leHQnKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBpbmRleCA9IHRoaXMuZGF0YVNvdXJjZS5yZXRyaWV2ZUluZGV4KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVUaHVtYnNOZXh0KGluZGV4KTtcclxuICAgICAgICAgICAgLy8gbGV0IHVwZGF0ZWRJbmRleCA9IHRoaXMuZGF0YVNvdXJjZS5yZXRyaWV2ZUluZGV4KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZW1pdE91dGVyKCd0aHVtYmNsaWNrJywgdXBkYXRlZEluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNjcm9sbFJpZ2h0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09ICdwcmV2Jykge1xyXG4gICAgICAgICAgICAvLyBsZXQgaW5kZXggPSB0aGlzLmRhdGFTb3VyY2UucmV0cmlldmVJbmRleCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlVGh1bWJzUHJldihpbmRleCk7XHJcbiAgICAgICAgICAgIC8vIGxldCB1cGRhdGVkSW5kZXggPSB0aGlzLmRhdGFTb3VyY2UucmV0cmlldmVJbmRleCgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmVtaXRPdXRlcigndGh1bWJjbGljaycsIHVwZGF0ZWRJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zY3JvbGxMZWZ0KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LnRodW1iY2xpY2snOlxyXG4gICAgICAgICAgLy8gU2lsZW50XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQucGFnZWNoYW5nZSc6XHJcbiAgICAgICAgICBpZiAocGF5bG9hZC50YXJnZXRJZCA9PT0gdGhpcy5kYXRhU291cmNlLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVQYWdlQ2hhbmdlKHBheWxvYWQuZXZlbnREYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==