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
            classes: '',
            navigation: data.images.length > 7 ? {
                prev: {
                    payload: 'prev',
                    classes: 'n7-image-viewer-tools__thumbs-scroll-left'
                },
                next: {
                    payload: 'next',
                    classes: 'n7-image-viewer-tools__thumbs-scroll-right'
                },
            } : null,
            controls: {
                description: images[0].caption ? {
                    icon: 'n7-icon-info1',
                    anchor: { payload: 'toggle-description' },
                    isActive: false,
                } : null,
                thumbs: {
                    icon: 'n7-icon-images',
                    anchor: { payload: 'toggle-thumbs' },
                    isActive: false,
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
        this.output.isVisible.thumbnails = false;
        this.output.controls.description.isActive = !this.output.controls.description.isActive;
        this.output.controls.thumbs.isActive = false;
    }
    toggleThumbs() {
        this.output.isVisible.thumbnails = !this.output.isVisible.thumbnails;
        this.output.isVisible.description = false;
        this.output.controls.thumbs.isActive = !this.output.controls.thumbs.isActive;
        if (this.output.controls.description) {
            this.output.controls.description.isActive = false;
        }
    }
    handleThumbs(index) {
        this.output.initial = index;
        this.updateDescription();
    }
    //
    scrollRight() {
        const thumbsStrip = document.querySelectorAll('div.n7-image-viewer-tools__thumbs-strip')[0];
        const rightArrow = document.querySelectorAll(`div.${this.output.navigation.next.classes}`)[0];
        const leftArrow = document.querySelectorAll(`div.${this.output.navigation.prev.classes}`)[0];
        const maxStrip = thumbsStrip.scrollWidth - thumbsStrip.clientWidth;
        const { scrollLeft } = thumbsStrip;
        if ((scrollLeft + 400) >= maxStrip) { // mettere value da config e.g. scrollStrength
            thumbsStrip.scrollBy({
                top: 0,
                left: +400,
                behavior: 'smooth'
            });
            rightArrow.style.opacity = '0.5';
        }
        else {
            thumbsStrip.scrollBy({
                top: 0,
                left: +400,
                behavior: 'smooth'
            });
        }
        if (((scrollLeft + 400) > 0)) {
            leftArrow.style.opacity = '1.0';
        }
    }
    scrollLeft() {
        const thumbsStrip = document.querySelectorAll('div.n7-image-viewer-tools__thumbs-strip')[0];
        const rightArrow = document.querySelectorAll(`div.${this.output.navigation.next.classes}`)[0];
        const leftArrow = document.querySelectorAll(`div.${this.output.navigation.prev.classes}`)[0];
        const maxStrip = thumbsStrip.scrollWidth - thumbsStrip.clientWidth;
        const { scrollLeft } = thumbsStrip;
        if ((scrollLeft - 400) <= 0) { // mettere value da config e.g. scrollStrength
            thumbsStrip.scrollBy({
                top: 0,
                left: -400,
                behavior: 'smooth'
            });
            leftArrow.style.opacity = '0.5';
        }
        else {
            thumbsStrip.scrollBy({
                top: 0,
                left: -400,
                behavior: 'smooth'
            });
        }
        if (((scrollLeft - 400) < maxStrip)) {
            rightArrow.style.opacity = '1.0';
        }
    }
    //
    handlePageChange(payload) {
        this.handleThumbs(payload.page);
    }
    updateDescription() {
        const index = this.output.initial;
        const { images } = this.output;
        this.output.description = images[index].caption;
        if (!this.output.description) {
            this.output.controls.description = null;
        }
        else {
            this.output.controls.description = {
                icon: 'n7-icon-info1',
                anchor: { payload: 'toggle-description' }
            };
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2RhdGEtc291cmNlcy9pbWFnZS12aWV3ZXItdG9vbHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVy9DLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxVQUFVO0lBR3hDLFNBQVMsQ0FBQyxJQUF5QjtRQUMzQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRXZCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRCxPQUFPO1lBQ1AsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDekIsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFO1NBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUosT0FBTztZQUNMLE1BQU07WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLE1BQU07b0JBQ2YsT0FBTyxFQUFFLDJDQUEyQztpQkFDckQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxNQUFNO29CQUNmLE9BQU8sRUFBRSw0Q0FBNEM7aUJBQ3REO2FBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNSLFFBQVEsRUFBRTtnQkFDUixXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9B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QyxJQUFJLEVBQUUsZUFBZTtnQkFDckIsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFO2FBQzFDLENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlVmlld2VyVG9vbHNEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxudHlwZSBJbWFnZVZpZXdlclJlc3BvbnNlID0ge1xyXG4gIHRodW1iczogc3RyaW5nW107XHJcbiAgaW1hZ2VzOiB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGNhcHRpb24/OiBzdHJpbmc7XHJcbiAgfVtdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW1hZ2VWaWV3ZXJUb29sc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBJbWFnZVZpZXdlclJlc3BvbnNlKTogSW1hZ2VWaWV3ZXJUb29sc0RhdGEge1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCB7IHRodW1icyB9ID0gZGF0YTtcclxuICAgIGNvbnN0IGltYWdlcyA9IGRhdGEuaW1hZ2VzLm1hcCgoeyBjYXB0aW9uIH0sIHRodW1iaW5kZXgpID0+ICh7XHJcbiAgICAgIGNhcHRpb24sXHJcbiAgICAgIHRodW1iOiB0aHVtYnNbdGh1bWJpbmRleF0sXHJcbiAgICAgIHBheWxvYWQ6IHsgdGh1bWJpbmRleCB9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1hZ2VzLFxyXG4gICAgICBjbGFzc2VzOiAnJyxcclxuICAgICAgbmF2aWdhdGlvbjogZGF0YS5pbWFnZXMubGVuZ3RoID4gNyA/IHtcclxuICAgICAgICBwcmV2OiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAncHJldicsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnbjctaW1hZ2Utdmlld2VyLXRvb2xzX190aHVtYnMtc2Nyb2xsLWxlZnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXh0OiB7XHJcbiAgICAgICAgICBwYXlsb2FkOiAnbmV4dCcsIC8vICduZXh0J1xyXG4gICAgICAgICAgY2xhc3NlczogJ243LWltYWdlLXZpZXdlci10b29sc19fdGh1bWJzLXNjcm9sbC1yaWdodCdcclxuICAgICAgICB9LFxyXG4gICAgICB9IDogbnVsbCxcclxuICAgICAgY29udHJvbHM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogaW1hZ2VzWzBdLmNhcHRpb24gPyB7XHJcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1pbmZvMScsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJ3RvZ2dsZS1kZXNjcmlwdGlvbicgfSxcclxuICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICB9IDogbnVsbCxcclxuICAgICAgICB0aHVtYnM6IHtcclxuICAgICAgICAgIGljb246ICduNy1pY29uLWltYWdlcycsXHJcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJ3RvZ2dsZS10aHVtYnMnIH0sXHJcbiAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZWRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZS1jaXJjbGUnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICdjbG9zZS1kZXNjcmlwdGlvbicgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICAgIGlzVmlzaWJsZToge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBmYWxzZSxcclxuICAgICAgICB0aHVtYm5haWxzOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgZGVzY3JpcHRpb246IGltYWdlc1swXS5jYXB0aW9uLFxyXG4gICAgICBpbml0aWFsOiAwXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZURlc2NyaXB0aW9uKCkge1xyXG4gICAgdGhpcy5vdXRwdXQuaXNWaXNpYmxlLmRlc2NyaXB0aW9uID0gIXRoaXMub3V0cHV0LmlzVmlzaWJsZS5kZXNjcmlwdGlvbjtcclxuICAgIHRoaXMub3V0cHV0LmlzVmlzaWJsZS50aHVtYm5haWxzID0gZmFsc2U7XHJcbiAgICB0aGlzLm91dHB1dC5jb250cm9scy5kZXNjcmlwdGlvbi5pc0FjdGl2ZSA9ICF0aGlzLm91dHB1dC5jb250cm9scy5kZXNjcmlwdGlvbi5pc0FjdGl2ZTtcclxuICAgIHRoaXMub3V0cHV0LmNvbnRyb2xzLnRodW1icy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVRodW1icygpIHtcclxuICAgIHRoaXMub3V0cHV0LmlzVmlzaWJsZS50aHVtYm5haWxzID0gIXRoaXMub3V0cHV0LmlzVmlzaWJsZS50aHVtYm5haWxzO1xyXG4gICAgdGhpcy5vdXRwdXQuaXNWaXNpYmxlLmRlc2NyaXB0aW9uID0gZmFsc2U7XHJcbiAgICB0aGlzLm91dHB1dC5jb250cm9scy50aHVtYnMuaXNBY3RpdmUgPSAhdGhpcy5vdXRwdXQuY29udHJvbHMudGh1bWJzLmlzQWN0aXZlO1xyXG4gICAgaWYgKHRoaXMub3V0cHV0LmNvbnRyb2xzLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0LmNvbnRyb2xzLmRlc2NyaXB0aW9uLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlVGh1bWJzKGluZGV4KSB7XHJcbiAgICB0aGlzLm91dHB1dC5pbml0aWFsID0gaW5kZXg7XHJcbiAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG5cclxuICBwdWJsaWMgc2Nyb2xsUmlnaHQoKSB7XHJcbiAgICBjb25zdCB0aHVtYnNTdHJpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdkaXYubjctaW1hZ2Utdmlld2VyLXRvb2xzX190aHVtYnMtc3RyaXAnKVswXTtcclxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihgZGl2LiR7dGhpcy5vdXRwdXQubmF2aWdhdGlvbi5uZXh0LmNsYXNzZXN9YClbMF07XHJcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihgZGl2LiR7dGhpcy5vdXRwdXQubmF2aWdhdGlvbi5wcmV2LmNsYXNzZXN9YClbMF07XHJcbiAgICBjb25zdCBtYXhTdHJpcCA9IHRodW1ic1N0cmlwLnNjcm9sbFdpZHRoIC0gdGh1bWJzU3RyaXAuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCB7IHNjcm9sbExlZnQgfSA9IHRodW1ic1N0cmlwO1xyXG5cclxuICAgIGlmICgoc2Nyb2xsTGVmdCArIDQwMCkgPj0gbWF4U3RyaXApIHsgLy8gbWV0dGVyZSB2YWx1ZSBkYSBjb25maWcgZS5nLiBzY3JvbGxTdHJlbmd0aFxyXG4gICAgICB0aHVtYnNTdHJpcC5zY3JvbGxCeSh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGxlZnQ6ICs0MDAsXHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgIH0pO1xyXG4gICAgICByaWdodEFycm93LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRodW1ic1N0cmlwLnNjcm9sbEJ5KHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbGVmdDogKzQwMCxcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCgoc2Nyb2xsTGVmdCArIDQwMCkgPiAwKSkge1xyXG4gICAgICBsZWZ0QXJyb3cuc3R5bGUub3BhY2l0eSA9ICcxLjAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjcm9sbExlZnQoKSB7XHJcbiAgICBjb25zdCB0aHVtYnNTdHJpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdkaXYubjctaW1hZ2Utdmlld2VyLXRvb2xzX190aHVtYnMtc3RyaXAnKVswXTtcclxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihgZGl2LiR7dGhpcy5vdXRwdXQubmF2aWdhdGlvbi5uZXh0LmNsYXNzZXN9YClbMF07XHJcbiAgICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihgZGl2LiR7dGhpcy5vdXRwdXQubmF2aWdhdGlvbi5wcmV2LmNsYXNzZXN9YClbMF07XHJcbiAgICBjb25zdCBtYXhTdHJpcCA9IHRodW1ic1N0cmlwLnNjcm9sbFdpZHRoIC0gdGh1bWJzU3RyaXAuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCB7IHNjcm9sbExlZnQgfSA9IHRodW1ic1N0cmlwO1xyXG5cclxuICAgIGlmICgoc2Nyb2xsTGVmdCAtIDQwMCkgPD0gMCkgeyAvLyBtZXR0ZXJlIHZhbHVlIGRhIGNvbmZpZyBlLmcuIHNjcm9sbFN0cmVuZ3RoXHJcbiAgICAgIHRodW1ic1N0cmlwLnNjcm9sbEJ5KHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbGVmdDogLTQwMCxcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgfSk7XHJcbiAgICAgIGxlZnRBcnJvdy5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHVtYnNTdHJpcC5zY3JvbGxCeSh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGxlZnQ6IC00MDAsXHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgoKHNjcm9sbExlZnQgLSA0MDApIDwgbWF4U3RyaXApKSB7XHJcbiAgICAgIHJpZ2h0QXJyb3cuc3R5bGUub3BhY2l0eSA9ICcxLjAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9cclxuXHJcbiAgcHVibGljIGhhbmRsZVBhZ2VDaGFuZ2UocGF5bG9hZCkge1xyXG4gICAgdGhpcy5oYW5kbGVUaHVtYnMocGF5bG9hZC5wYWdlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVEZXNjcmlwdGlvbigpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vdXRwdXQuaW5pdGlhbDtcclxuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLm91dHB1dDtcclxuICAgIHRoaXMub3V0cHV0LmRlc2NyaXB0aW9uID0gaW1hZ2VzW2luZGV4XS5jYXB0aW9uO1xyXG4gICAgaWYgKCF0aGlzLm91dHB1dC5kZXNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm91dHB1dC5jb250cm9scy5kZXNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm91dHB1dC5jb250cm9scy5kZXNjcmlwdGlvbiA9IHtcclxuICAgICAgICBpY29uOiAnbjctaWNvbi1pbmZvMScsXHJcbiAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICd0b2dnbGUtZGVzY3JpcHRpb24nIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19