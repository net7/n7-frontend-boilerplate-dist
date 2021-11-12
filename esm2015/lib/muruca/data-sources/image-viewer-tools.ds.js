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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLXRvb2xzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVcvQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsVUFBVTtJQUd4QyxTQUFTLENBQUMsSUFBeUI7UUFDM0MsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUV2QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0QsT0FBTztZQUNQLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRTtTQUN4QixDQUFDLENBQUMsQ0FBQztRQUVKLE9BQU87WUFDTCxNQUFNO1lBQ04sT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxNQUFNO29CQUNmLE9BQU8sRUFBRSwyQ0FBMkM7aUJBQ3JEO2dCQUNELElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsNENBQTRDO2lCQUN0RDthQUNGLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDUixRQUFRLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29C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Q3JCLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRTthQUMxQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZVZpZXdlclRvb2xzRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbnR5cGUgSW1hZ2VWaWV3ZXJSZXNwb25zZSA9IHtcclxuICB0aHVtYnM6IHN0cmluZ1tdO1xyXG4gIGltYWdlczoge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBjYXB0aW9uPzogc3RyaW5nO1xyXG4gIH1bXTtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyVG9vbHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW1hZ2VWaWV3ZXJSZXNwb25zZSk6IEltYWdlVmlld2VyVG9vbHNEYXRhIHtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3QgeyB0aHVtYnMgfSA9IGRhdGE7XHJcbiAgICBjb25zdCBpbWFnZXMgPSBkYXRhLmltYWdlcy5tYXAoKHsgY2FwdGlvbiB9LCB0aHVtYmluZGV4KSA9PiAoe1xyXG4gICAgICBjYXB0aW9uLFxyXG4gICAgICB0aHVtYjogdGh1bWJzW3RodW1iaW5kZXhdLFxyXG4gICAgICBwYXlsb2FkOiB7IHRodW1iaW5kZXggfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltYWdlcyxcclxuICAgICAgY2xhc3NlczogJycsXHJcbiAgICAgIG5hdmlnYXRpb246IGRhdGEuaW1hZ2VzLmxlbmd0aCA+IDcgPyB7XHJcbiAgICAgICAgcHJldjoge1xyXG4gICAgICAgICAgcGF5bG9hZDogJ3ByZXYnLFxyXG4gICAgICAgICAgY2xhc3NlczogJ243LWltYWdlLXZpZXdlci10b29sc19fdGh1bWJzLXNjcm9sbC1sZWZ0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dDoge1xyXG4gICAgICAgICAgcGF5bG9hZDogJ25leHQnLCAvLyAnbmV4dCdcclxuICAgICAgICAgIGNsYXNzZXM6ICduNy1pbWFnZS12aWV3ZXItdG9vbHNfX3RodW1icy1zY3JvbGwtcmlnaHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgfSA6IG51bGwsXHJcbiAgICAgIGNvbnRyb2xzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IGltYWdlc1swXS5jYXB0aW9uID8ge1xyXG4gICAgICAgICAgaWNvbjogJ243LWljb24taW5mbzEnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICd0b2dnbGUtZGVzY3JpcHRpb24nIH0sXHJcbiAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgfSA6IG51bGwsXHJcbiAgICAgICAgdGh1bWJzOiB7XHJcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1pbWFnZXMnLFxyXG4gICAgICAgICAgYW5jaG9yOiB7IHBheWxvYWQ6ICd0b2dnbGUtdGh1bWJzJyB9LFxyXG4gICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UtY2lyY2xlJyxcclxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnY2xvc2UtZGVzY3JpcHRpb24nIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBpc1Zpc2libGU6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogZmFsc2UsXHJcbiAgICAgICAgdGh1bWJuYWlsczogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBpbWFnZXNbMF0uY2FwdGlvbixcclxuICAgICAgaW5pdGlhbDogMFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEZXNjcmlwdGlvbigpIHtcclxuICAgIHRoaXMub3V0cHV0LmlzVmlzaWJsZS5kZXNjcmlwdGlvbiA9ICF0aGlzLm91dHB1dC5pc1Zpc2libGUuZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLm91dHB1dC5pc1Zpc2libGUudGh1bWJuYWlscyA9IGZhbHNlO1xyXG4gICAgdGhpcy5vdXRwdXQuY29udHJvbHMuZGVzY3JpcHRpb24uaXNBY3RpdmUgPSAhdGhpcy5vdXRwdXQuY29udHJvbHMuZGVzY3JpcHRpb24uaXNBY3RpdmU7XHJcbiAgICB0aGlzLm91dHB1dC5jb250cm9scy50aHVtYnMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVUaHVtYnMoKSB7XHJcbiAgICB0aGlzLm91dHB1dC5pc1Zpc2libGUudGh1bWJuYWlscyA9ICF0aGlzLm91dHB1dC5pc1Zpc2libGUudGh1bWJuYWlscztcclxuICAgIHRoaXMub3V0cHV0LmlzVmlzaWJsZS5kZXNjcmlwdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5vdXRwdXQuY29udHJvbHMudGh1bWJzLmlzQWN0aXZlID0gIXRoaXMub3V0cHV0LmNvbnRyb2xzLnRodW1icy5pc0FjdGl2ZTtcclxuICAgIGlmICh0aGlzLm91dHB1dC5jb250cm9scy5kZXNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLm91dHB1dC5jb250cm9scy5kZXNjcmlwdGlvbi5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZVRodW1icyhpbmRleCkge1xyXG4gICAgdGhpcy5vdXRwdXQuaW5pdGlhbCA9IGluZGV4O1xyXG4gICAgdGhpcy51cGRhdGVEZXNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuXHJcbiAgcHVibGljIHNjcm9sbFJpZ2h0KCkge1xyXG4gICAgY29uc3QgdGh1bWJzU3RyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignZGl2Lm43LWltYWdlLXZpZXdlci10b29sc19fdGh1bWJzLXN0cmlwJylbMF07XHJcbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oYGRpdi4ke3RoaXMub3V0cHV0Lm5hdmlnYXRpb24ubmV4dC5jbGFzc2VzfWApWzBdO1xyXG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oYGRpdi4ke3RoaXMub3V0cHV0Lm5hdmlnYXRpb24ucHJldi5jbGFzc2VzfWApWzBdO1xyXG4gICAgY29uc3QgbWF4U3RyaXAgPSB0aHVtYnNTdHJpcC5zY3JvbGxXaWR0aCAtIHRodW1ic1N0cmlwLmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgeyBzY3JvbGxMZWZ0IH0gPSB0aHVtYnNTdHJpcDtcclxuXHJcbiAgICBpZiAoKHNjcm9sbExlZnQgKyA0MDApID49IG1heFN0cmlwKSB7IC8vIG1ldHRlcmUgdmFsdWUgZGEgY29uZmlnIGUuZy4gc2Nyb2xsU3RyZW5ndGhcclxuICAgICAgdGh1bWJzU3RyaXAuc2Nyb2xsQnkoe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBsZWZ0OiArNDAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICB9KTtcclxuICAgICAgcmlnaHRBcnJvdy5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHVtYnNTdHJpcC5zY3JvbGxCeSh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGxlZnQ6ICs0MDAsXHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgoKHNjcm9sbExlZnQgKyA0MDApID4gMCkpIHtcclxuICAgICAgbGVmdEFycm93LnN0eWxlLm9wYWNpdHkgPSAnMS4wJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY3JvbGxMZWZ0KCkge1xyXG4gICAgY29uc3QgdGh1bWJzU3RyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignZGl2Lm43LWltYWdlLXZpZXdlci10b29sc19fdGh1bWJzLXN0cmlwJylbMF07XHJcbiAgICBjb25zdCByaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oYGRpdi4ke3RoaXMub3V0cHV0Lm5hdmlnYXRpb24ubmV4dC5jbGFzc2VzfWApWzBdO1xyXG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oYGRpdi4ke3RoaXMub3V0cHV0Lm5hdmlnYXRpb24ucHJldi5jbGFzc2VzfWApWzBdO1xyXG4gICAgY29uc3QgbWF4U3RyaXAgPSB0aHVtYnNTdHJpcC5zY3JvbGxXaWR0aCAtIHRodW1ic1N0cmlwLmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgeyBzY3JvbGxMZWZ0IH0gPSB0aHVtYnNTdHJpcDtcclxuXHJcbiAgICBpZiAoKHNjcm9sbExlZnQgLSA0MDApIDw9IDApIHsgLy8gbWV0dGVyZSB2YWx1ZSBkYSBjb25maWcgZS5nLiBzY3JvbGxTdHJlbmd0aFxyXG4gICAgICB0aHVtYnNTdHJpcC5zY3JvbGxCeSh7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGxlZnQ6IC00MDAsXHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZWZ0QXJyb3cuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGh1bWJzU3RyaXAuc2Nyb2xsQnkoe1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBsZWZ0OiAtNDAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKChzY3JvbGxMZWZ0IC0gNDAwKSA8IG1heFN0cmlwKSkge1xyXG4gICAgICByaWdodEFycm93LnN0eWxlLm9wYWNpdHkgPSAnMS4wJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVQYWdlQ2hhbmdlKHBheWxvYWQpIHtcclxuICAgIHRoaXMuaGFuZGxlVGh1bWJzKHBheWxvYWQucGFnZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRGVzY3JpcHRpb24oKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3V0cHV0LmluaXRpYWw7XHJcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5vdXRwdXQ7XHJcbiAgICB0aGlzLm91dHB1dC5kZXNjcmlwdGlvbiA9IGltYWdlc1tpbmRleF0uY2FwdGlvbjtcclxuICAgIGlmICghdGhpcy5vdXRwdXQuZGVzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5vdXRwdXQuY29udHJvbHMuZGVzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vdXRwdXQuY29udHJvbHMuZGVzY3JpcHRpb24gPSB7XHJcbiAgICAgICAgaWNvbjogJ243LWljb24taW5mbzEnLFxyXG4gICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAndG9nZ2xlLWRlc2NyaXB0aW9uJyB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==