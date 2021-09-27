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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9pbWFnZS12aWV3ZXItdG9vbHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRDtJQUEwQyx3Q0FBWTtJQUF0RDs7SUFrRUEsQ0FBQztJQS9EUSxxQ0FBTSxHQUFiO1FBQUEsaUJBOERDO1FBN0RDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQVEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVE7b0JBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7d0JBQ3BDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDcEMsTUFBTTtxQkFDUDtvQkFDRCxJQUFJLE9BQU8sS0FBSyxtQkFBbUIsRUFBRTt3QkFDbkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUNwQyxNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLG9CQUFvQixFQUFFO3dCQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7d0JBQ3BDLE1BQU07cUJBQ1A7b0JBQ0QsSUFBSSxPQUFPLEtBQUssZUFBZSxFQUFFO3dCQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUMvQixNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTt3QkFDdEIsK0NBQStDO3dCQUMvQywyQ0FBMkM7d0JBQzNDLHNEQUFzRDt3QkFDdEQsOENBQThDO3dCQUM5QyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUM5QixNQUFNO3FCQUNQO29CQUNELElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTt3QkFDdEIsK0NBQStDO3dCQUMvQywyQ0FBMkM7d0JBQzNDLHNEQUFzRDt3QkFDdEQsOENBQThDO3dCQUM5QyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUM3QixNQUFNO3FCQUNQO29CQUNELE1BQU07Z0JBQ1I7b0JBQ0UsaURBQWlEO29CQUNqRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLHdCQUF3QjtZQUN4QixRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QixDQUFDO2dCQUMvQixLQUFLLCtCQUErQjtvQkFDbEMsU0FBUztvQkFDVCxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUU7d0JBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUNyRDtvQkFDRCxNQUFNO2dCQUNSO29CQUNFLGlEQUFpRDtvQkFDakQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBbEVELENBQTBDLFlBQVksR0FrRXJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgTXJJbWFnZVZpZXdlclRvb2xzRFMgfSBmcm9tICcuLi9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLXRvb2xzLmRzJztcblxuZXhwb3J0IGNsYXNzIE1ySW1hZ2VWaWV3ZXJUb29sc0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgZGF0YVNvdXJjZTogTXJJbWFnZVZpZXdlclRvb2xzRFM7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNsaWNrYDpcbiAgICAgICAgICBpZiAocGF5bG9hZC50aHVtYmluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGF5bG9hZC50aHVtYmluZGV4O1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZVRodW1icyhpbmRleCk7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndGh1bWJjbGljaycsIGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ2Nsb3NlLWRlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZURlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09ICd0b2dnbGUtZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ3RvZ2dsZS10aHVtYnMnKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlVGh1bWJzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09ICduZXh0Jykge1xuICAgICAgICAgICAgLy8gbGV0IGluZGV4ID0gdGhpcy5kYXRhU291cmNlLnJldHJpZXZlSW5kZXgoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVUaHVtYnNOZXh0KGluZGV4KTtcbiAgICAgICAgICAgIC8vIGxldCB1cGRhdGVkSW5kZXggPSB0aGlzLmRhdGFTb3VyY2UucmV0cmlldmVJbmRleCgpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbWl0T3V0ZXIoJ3RodW1iY2xpY2snLCB1cGRhdGVkSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNjcm9sbFJpZ2h0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBheWxvYWQgPT09ICdwcmV2Jykge1xuICAgICAgICAgICAgLy8gbGV0IGluZGV4ID0gdGhpcy5kYXRhU291cmNlLnJldHJpZXZlSW5kZXgoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVUaHVtYnNQcmV2KGluZGV4KTtcbiAgICAgICAgICAgIC8vIGxldCB1cGRhdGVkSW5kZXggPSB0aGlzLmRhdGFTb3VyY2UucmV0cmlldmVJbmRleCgpO1xuICAgICAgICAgICAgLy8gdGhpcy5lbWl0T3V0ZXIoJ3RodW1iY2xpY2snLCB1cGRhdGVkSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNjcm9sbExlZnQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhwYXlsb2FkKTtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1yZXNvdXJjZS1sYXlvdXQuaW5pdCc6XG4gICAgICAgIGNhc2UgJ21yLXJlc291cmNlLWxheW91dC50aHVtYmNsaWNrJzpcbiAgICAgICAgICAvLyBTaWxlbnRcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbXItcmVzb3VyY2UtbGF5b3V0LnBhZ2VjaGFuZ2UnOlxuICAgICAgICAgIGlmIChwYXlsb2FkLnRhcmdldElkID09PSB0aGlzLmRhdGFTb3VyY2UuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVQYWdlQ2hhbmdlKHBheWxvYWQuZXZlbnREYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=