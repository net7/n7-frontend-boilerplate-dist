import { DataSource } from '@n7-frontend/core';
export class MrImageViewerToolsDS extends DataSource {
    transform(data) {
        if (!data)
            return null;
        const { thumbs } = data;
        const images = data.images.map(({ caption }, thumbindex) => ({
            caption,
            thumb: thumbs[thumbindex],
            payload: { thumbindex }
        }));
        return {
            images,
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
    }
    toggleDescription() {
        this.output.isVisible.description = !this.output.isVisible.description;
    }
    toggleThumbs() {
        this.output.isVisible.thumbnails = !this.output.isVisible.thumbnails;
    }
    handleThumbs(index) {
        this.output.initial = index;
        this.updateDescription();
    }
    handlePageChange(payload) {
        this.handleThumbs(payload.page);
    }
    updateDescription() {
        const index = this.output.initial;
        const { images } = this.output;
        this.output.description = images[index].caption;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLXRvb2xzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVcvQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsVUFBVTtJQUd4QyxTQUFTLENBQUMsSUFBeUI7UUFDM0MsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUV2QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0QsT0FBTztZQUNQLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRTtTQUN4QixDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU87WUFDTCxNQUFNO1lBQ04sUUFBUSxFQUFFO2dCQUNSLFdBQVcsRUFBRTtvQkFDWCxJQUFJLEVBQUUsZUFBZTtvQkFDckIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFO2lCQUMxQztnQkFDRCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRTtpQkFDckM7Z0JBQ0QsZ0JBQWdCLEVBQUU7b0JBQ2hCLElBQUksRUFBRSxzQkFBc0I7b0JBQzVCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRTtpQkFDekM7YUFDRjtZQUNELFNBQVMsRUFBRTtnQkFDVCxXQUFXLEVBQUUsS0FBSztnQkFDbEIsVUFBVSxFQUFFLEtBQUs7YUFDbEI7WUFDRCxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDOUIsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDO0lBQ0osQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDekUsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0lBQ3ZFLENBQUM7SUFFTSxZQUFZLENBQUMsS0FBSztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLGdCQUFnQixDQUFDLE9BQU87UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2xELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlVmlld2VyVG9vbHNEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxudHlwZSBJbWFnZVZpZXdlclJlc3BvbnNlID0ge1xyXG4gIHRodW1iczogc3RyaW5nW107XHJcbiAgaW1hZ2VzOiB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGNhcHRpb24/OiBzdHJpbmc7XHJcbiAgfVtdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW1hZ2VWaWV3ZXJUb29sc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbWFnZVZpZXdlclJlc3BvbnNlKTogSW1hZ2VWaWV3ZXJUb29sc0RhdGEge1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCB7IHRodW1icyB9ID0gZGF0YTtcclxuICAgIGNvbnN0IGltYWdlcyA9IGRhdGEuaW1hZ2VzLm1hcCgoeyBjYXB0aW9uIH0sIHRodW1iaW5kZXgpID0+ICh7XHJcbiAgICAgIGNhcHRpb24sXHJcbiAgICAgIHRodW1iOiB0aHVtYnNbdGh1bWJpbmRleF0sXHJcbiAgICAgIHBheWxvYWQ6IHsgdGh1bWJpbmRleCB9XHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbWFnZXMsXHJcbiAgICAgIGNvbnRyb2xzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgIGljb246ICduNy1pY29uLWluZm8xJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAndG9nZ2xlLWRlc2NyaXB0aW9uJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aHVtYnM6IHtcclxuICAgICAgICAgIGljb246ICduNy1pY29uLWltYWdlcycsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJ3RvZ2dsZS10aHVtYnMnIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlLWNpcmNsZScsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJ2Nsb3NlLWRlc2NyaXB0aW9uJyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpc1Zpc2libGU6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogZmFsc2UsXHJcbiAgICAgICAgdGh1bWJuYWlsczogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBpbWFnZXNbMF0uY2FwdGlvbixcclxuICAgICAgaW5pdGlhbDogMFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEZXNjcmlwdGlvbigpIHtcclxuICAgIHRoaXMub3V0cHV0LmlzVmlzaWJsZS5kZXNjcmlwdGlvbiA9ICF0aGlzLm91dHB1dC5pc1Zpc2libGUuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlVGh1bWJzKCkge1xyXG4gICAgdGhpcy5vdXRwdXQuaXNWaXNpYmxlLnRodW1ibmFpbHMgPSAhdGhpcy5vdXRwdXQuaXNWaXNpYmxlLnRodW1ibmFpbHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlVGh1bWJzKGluZGV4KSB7XHJcbiAgICB0aGlzLm91dHB1dC5pbml0aWFsID0gaW5kZXg7XHJcbiAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlUGFnZUNoYW5nZShwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmhhbmRsZVRodW1icyhwYXlsb2FkLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZURlc2NyaXB0aW9uKCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm91dHB1dC5pbml0aWFsO1xyXG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMub3V0cHV0O1xyXG4gICAgdGhpcy5vdXRwdXQuZGVzY3JpcHRpb24gPSBpbWFnZXNbaW5kZXhdLmNhcHRpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==