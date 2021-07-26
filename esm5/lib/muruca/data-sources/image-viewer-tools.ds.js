import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrImageViewerToolsDS = /** @class */ (function (_super) {
    __extends(MrImageViewerToolsDS, _super);
    function MrImageViewerToolsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrImageViewerToolsDS.prototype.transform = function (data) {
        if (!data)
            return null;
        var thumbs = data.thumbs;
        var images = data.images.map(function (_a, thumbindex) {
            var caption = _a.caption;
            return ({
                caption: caption,
                thumb: thumbs[thumbindex],
                payload: { thumbindex: thumbindex }
            });
        });
        return {
            images: images,
            controls: {
                description: {
                    icon: 'n7-icon-info1',
                    anchor: { payload: 'toggle-description' }
                },
                thumbs: {
                    icon: 'n7-icon-images',
                    anchor: { payload: 'toggle-thumbs' }
                },
                closedescription: {
                    icon: 'n7-icon-close-circle',
                    anchor: { payload: 'close-description' }
                }
            },
            isVisible: {
                description: false,
                thumbnails: false,
            },
            description: images[0].caption,
            initial: 0
        };
    };
    MrImageViewerToolsDS.prototype.toggleDescription = function () {
        this.output.isVisible.description = !this.output.isVisible.description;
    };
    MrImageViewerToolsDS.prototype.toggleThumbs = function () {
        this.output.isVisible.thumbnails = !this.output.isVisible.thumbnails;
    };
    MrImageViewerToolsDS.prototype.handleThumbs = function (index) {
        this.output.initial = index;
        this.updateDescription();
    };
    MrImageViewerToolsDS.prototype.handlePageChange = function (payload) {
        this.handleThumbs(payload.page);
    };
    MrImageViewerToolsDS.prototype.updateDescription = function () {
        var index = this.output.initial;
        var images = this.output.images;
        this.output.description = images[index].caption;
    };
    return MrImageViewerToolsDS;
}(DataSource));
export { MrImageViewerToolsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLXRvb2xzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFXL0M7SUFBMEMsd0NBQVU7SUFBcEQ7O0lBMkRBLENBQUM7SUF4RFcsd0NBQVMsR0FBbkIsVUFBb0IsSUFBeUI7UUFDM0MsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVmLElBQUEsb0JBQU0sQ0FBVTtRQUN4QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVcsRUFBRSxVQUFVO2dCQUFyQixvQkFBTztZQUFtQixPQUFBLENBQUM7Z0JBQzNELE9BQU8sU0FBQTtnQkFDUCxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDekIsT0FBTyxFQUFFLEVBQUUsVUFBVSxZQUFBLEVBQUU7YUFDeEIsQ0FBQztRQUowRCxDQUkxRCxDQUFDLENBQUM7UUFDSixPQUFPO1lBQ0wsTUFBTSxRQUFBO1lBQ04sUUFBUSxFQUFFO2dCQUNSLFdBQVcsRUFBRTtvQkFDWCxJQUFJLEVBQUUsZUFBZTtvQkFDckIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFO2lCQUMxQztnQkFDRCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRTtpQkFDckM7Z0JBQ0QsZ0JBQWdCLEVBQUU7b0JBQ2hCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRTtpQkFDekM7YUFDRjtZQUNELFNBQVMsRUFBRTtnQkFDVCxXQUFXLEVBQUUsS0FBSztnQkFDbEIsVUFBVSxFQUFFLEtBQUs7YUFDbEI7WUFDRCxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDOUIsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDO0lBQ0osQ0FBQztJQUVNLGdEQUFpQixHQUF4QjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUN6RSxDQUFDO0lBRU0sMkNBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFDdkUsQ0FBQztJQUVNLDJDQUFZLEdBQW5CLFVBQW9CLEtBQUs7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSwrQ0FBZ0IsR0FBdkIsVUFBd0IsT0FBTztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sZ0RBQWlCLEdBQXhCO1FBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDMUIsSUFBQSwyQkFBTSxDQUFpQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2xELENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUEzREQsQ0FBMEMsVUFBVSxHQTJEbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZVZpZXdlclRvb2xzRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbnR5cGUgSW1hZ2VWaWV3ZXJSZXNwb25zZSA9IHtcclxuICB0aHVtYnM6IHN0cmluZ1tdO1xyXG4gIGltYWdlczoge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBjYXB0aW9uPzogc3RyaW5nO1xyXG4gIH1bXTtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyVG9vbHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW1hZ2VWaWV3ZXJSZXNwb25zZSk6IEltYWdlVmlld2VyVG9vbHNEYXRhIHtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgeyB0aHVtYnMgfSA9IGRhdGE7XHJcbiAgICBjb25zdCBpbWFnZXMgPSBkYXRhLmltYWdlcy5tYXAoKHsgY2FwdGlvbiB9LCB0aHVtYmluZGV4KSA9PiAoe1xyXG4gICAgICBjYXB0aW9uLFxyXG4gICAgICB0aHVtYjogdGh1bWJzW3RodW1iaW5kZXhdLFxyXG4gICAgICBwYXlsb2FkOiB7IHRodW1iaW5kZXggfVxyXG4gICAgfSkpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1hZ2VzLFxyXG4gICAgICBjb250cm9sczoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1pbmZvMScsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJ3RvZ2dsZS1kZXNjcmlwdGlvbicgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGh1bWJzOiB7XHJcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1pbWFnZXMnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICd0b2dnbGUtdGh1bWJzJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZWRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZS1jaXJjbGUnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICdjbG9zZS1kZXNjcmlwdGlvbicgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaXNWaXNpYmxlOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IGZhbHNlLFxyXG4gICAgICAgIHRodW1ibmFpbHM6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICBkZXNjcmlwdGlvbjogaW1hZ2VzWzBdLmNhcHRpb24sXHJcbiAgICAgIGluaXRpYWw6IDBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRGVzY3JpcHRpb24oKSB7XHJcbiAgICB0aGlzLm91dHB1dC5pc1Zpc2libGUuZGVzY3JpcHRpb24gPSAhdGhpcy5vdXRwdXQuaXNWaXNpYmxlLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVRodW1icygpIHtcclxuICAgIHRoaXMub3V0cHV0LmlzVmlzaWJsZS50aHVtYm5haWxzID0gIXRoaXMub3V0cHV0LmlzVmlzaWJsZS50aHVtYm5haWxzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZVRodW1icyhpbmRleCkge1xyXG4gICAgdGhpcy5vdXRwdXQuaW5pdGlhbCA9IGluZGV4O1xyXG4gICAgdGhpcy51cGRhdGVEZXNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZVBhZ2VDaGFuZ2UocGF5bG9hZCkge1xyXG4gICAgdGhpcy5oYW5kbGVUaHVtYnMocGF5bG9hZC5wYWdlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVEZXNjcmlwdGlvbigpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vdXRwdXQuaW5pdGlhbDtcclxuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLm91dHB1dDtcclxuICAgIHRoaXMub3V0cHV0LmRlc2NyaXB0aW9uID0gaW1hZ2VzW2luZGV4XS5jYXB0aW9uO1xyXG4gIH1cclxufVxyXG4iXX0=