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
    };
    MrImageViewerToolsDS.prototype.toggleDescription = function () {
        this.output.isVisible.description = !this.output.isVisible.description;
        this.output.isVisible.thumbnails = false;
        this.output.controls.description.isActive = !this.output.controls.description.isActive;
        this.output.controls.thumbs.isActive = false;
    };
    MrImageViewerToolsDS.prototype.toggleThumbs = function () {
        this.output.isVisible.thumbnails = !this.output.isVisible.thumbnails;
        this.output.isVisible.description = false;
        this.output.controls.thumbs.isActive = !this.output.controls.thumbs.isActive;
        if (this.output.controls.description) {
            this.output.controls.description.isActive = false;
        }
    };
    MrImageViewerToolsDS.prototype.handleThumbs = function (index) {
        this.output.initial = index;
        this.updateDescription();
    };
    //
    MrImageViewerToolsDS.prototype.scrollRight = function () {
        var thumbsStrip = document.querySelectorAll('div.n7-image-viewer-tools__thumbs-strip')[0];
        var rightArrow = document.querySelectorAll("div." + this.output.navigation.next.classes)[0];
        var leftArrow = document.querySelectorAll("div." + this.output.navigation.prev.classes)[0];
        var maxStrip = thumbsStrip.scrollWidth - thumbsStrip.clientWidth;
        var scrollLeft = thumbsStrip.scrollLeft;
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
    };
    MrImageViewerToolsDS.prototype.scrollLeft = function () {
        var thumbsStrip = document.querySelectorAll('div.n7-image-viewer-tools__thumbs-strip')[0];
        var rightArrow = document.querySelectorAll("div." + this.output.navigation.next.classes)[0];
        var leftArrow = document.querySelectorAll("div." + this.output.navigation.prev.classes)[0];
        var maxStrip = thumbsStrip.scrollWidth - thumbsStrip.clientWidth;
        var scrollLeft = thumbsStrip.scrollLeft;
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
    };
    //
    MrImageViewerToolsDS.prototype.handlePageChange = function (payload) {
        this.handleThumbs(payload.page);
    };
    MrImageViewerToolsDS.prototype.updateDescription = function () {
        var index = this.output.initial;
        var images = this.output.images;
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
    };
    return MrImageViewerToolsDS;
}(DataSource));
export { MrImageViewerToolsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLXRvb2xzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFXL0M7SUFBMEMsd0NBQVU7SUFBcEQ7O0lBb0pBLENBQUM7SUFqSlcsd0NBQVMsR0FBbkIsVUFBb0IsSUFBeUI7UUFDM0MsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVmLElBQUEsb0JBQU0sQ0FBVTtRQUN4QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVcsRUFBRSxVQUFVO2dCQUFyQixvQkFBTztZQUFtQixPQUFBLENBQUM7Z0JBQzNELE9BQU8sU0FBQTtnQkFDUCxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDekIsT0FBTyxFQUFFLEVBQUUsVUFBVSxZQUFBLEVBQUU7YUFDeEIsQ0FBQztRQUowRCxDQUkxRCxDQUFDLENBQUM7UUFFSixPQUFPO1lBQ0wsTUFBTSxRQUFBO1lBQ04sT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxNQUFNO29CQUNmLE9BQU8sRUFBRSwyQ0FBMkM7aUJBQ3JEO2dCQUNELElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsNENBQTRDO2lCQUN0RDthQUNGLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDUixRQUFRLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxP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T0FBTyxFQUFFLG9CQUFvQixFQUFFO2FBQzFDLENBQUM7U0FDSDtJQUNILENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFwSkQsQ0FBMEMsVUFBVSxHQW9KbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZVZpZXdlclRvb2xzRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbnR5cGUgSW1hZ2VWaWV3ZXJSZXNwb25zZSA9IHtcbiAgdGh1bWJzOiBzdHJpbmdbXTtcbiAgaW1hZ2VzOiB7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGNhcHRpb24/OiBzdHJpbmc7XG4gIH1bXTtcbn07XG5cbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyVG9vbHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogSW1hZ2VWaWV3ZXJSZXNwb25zZSk6IEltYWdlVmlld2VyVG9vbHNEYXRhIHtcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgeyB0aHVtYnMgfSA9IGRhdGE7XG4gICAgY29uc3QgaW1hZ2VzID0gZGF0YS5pbWFnZXMubWFwKCh7IGNhcHRpb24gfSwgdGh1bWJpbmRleCkgPT4gKHtcbiAgICAgIGNhcHRpb24sXG4gICAgICB0aHVtYjogdGh1bWJzW3RodW1iaW5kZXhdLFxuICAgICAgcGF5bG9hZDogeyB0aHVtYmluZGV4IH1cbiAgICB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaW1hZ2VzLFxuICAgICAgY2xhc3NlczogJycsXG4gICAgICBuYXZpZ2F0aW9uOiBkYXRhLmltYWdlcy5sZW5ndGggPiA3ID8ge1xuICAgICAgICBwcmV2OiB7XG4gICAgICAgICAgcGF5bG9hZDogJ3ByZXYnLFxuICAgICAgICAgIGNsYXNzZXM6ICduNy1pbWFnZS12aWV3ZXItdG9vbHNfX3RodW1icy1zY3JvbGwtbGVmdCdcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dDoge1xuICAgICAgICAgIHBheWxvYWQ6ICduZXh0JywgLy8gJ25leHQnXG4gICAgICAgICAgY2xhc3NlczogJ243LWltYWdlLXZpZXdlci10b29sc19fdGh1bWJzLXNjcm9sbC1yaWdodCdcbiAgICAgICAgfSxcbiAgICAgIH0gOiBudWxsLFxuICAgICAgY29udHJvbHM6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGltYWdlc1swXS5jYXB0aW9uID8ge1xuICAgICAgICAgIGljb246ICduNy1pY29uLWluZm8xJyxcbiAgICAgICAgICBhbmNob3I6IHsgcGF5bG9hZDogJ3RvZ2dsZS1kZXNjcmlwdGlvbicgfSxcbiAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0gOiBudWxsLFxuICAgICAgICB0aHVtYnM6IHtcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1pbWFnZXMnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAndG9nZ2xlLXRodW1icycgfSxcbiAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlZGVzY3JpcHRpb246IHtcbiAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZS1jaXJjbGUnLFxuICAgICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAnY2xvc2UtZGVzY3JpcHRpb24nIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgaXNWaXNpYmxlOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBmYWxzZSxcbiAgICAgICAgdGh1bWJuYWlsczogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246IGltYWdlc1swXS5jYXB0aW9uLFxuICAgICAgaW5pdGlhbDogMFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRGVzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5vdXRwdXQuaXNWaXNpYmxlLmRlc2NyaXB0aW9uID0gIXRoaXMub3V0cHV0LmlzVmlzaWJsZS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLm91dHB1dC5pc1Zpc2libGUudGh1bWJuYWlscyA9IGZhbHNlO1xuICAgIHRoaXMub3V0cHV0LmNvbnRyb2xzLmRlc2NyaXB0aW9uLmlzQWN0aXZlID0gIXRoaXMub3V0cHV0LmNvbnRyb2xzLmRlc2NyaXB0aW9uLmlzQWN0aXZlO1xuICAgIHRoaXMub3V0cHV0LmNvbnRyb2xzLnRodW1icy5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVRodW1icygpIHtcbiAgICB0aGlzLm91dHB1dC5pc1Zpc2libGUudGh1bWJuYWlscyA9ICF0aGlzLm91dHB1dC5pc1Zpc2libGUudGh1bWJuYWlscztcbiAgICB0aGlzLm91dHB1dC5pc1Zpc2libGUuZGVzY3JpcHRpb24gPSBmYWxzZTtcbiAgICB0aGlzLm91dHB1dC5jb250cm9scy50aHVtYnMuaXNBY3RpdmUgPSAhdGhpcy5vdXRwdXQuY29udHJvbHMudGh1bWJzLmlzQWN0aXZlO1xuICAgIGlmICh0aGlzLm91dHB1dC5jb250cm9scy5kZXNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vdXRwdXQuY29udHJvbHMuZGVzY3JpcHRpb24uaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVGh1bWJzKGluZGV4KSB7XG4gICAgdGhpcy5vdXRwdXQuaW5pdGlhbCA9IGluZGV4O1xuICAgIHRoaXMudXBkYXRlRGVzY3JpcHRpb24oKTtcbiAgfVxuXG4gIC8vXG5cbiAgcHVibGljIHNjcm9sbFJpZ2h0KCkge1xuICAgIGNvbnN0IHRodW1ic1N0cmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2Rpdi5uNy1pbWFnZS12aWV3ZXItdG9vbHNfX3RodW1icy1zdHJpcCcpWzBdO1xuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihgZGl2LiR7dGhpcy5vdXRwdXQubmF2aWdhdGlvbi5uZXh0LmNsYXNzZXN9YClbMF07XG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oYGRpdi4ke3RoaXMub3V0cHV0Lm5hdmlnYXRpb24ucHJldi5jbGFzc2VzfWApWzBdO1xuICAgIGNvbnN0IG1heFN0cmlwID0gdGh1bWJzU3RyaXAuc2Nyb2xsV2lkdGggLSB0aHVtYnNTdHJpcC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCB7IHNjcm9sbExlZnQgfSA9IHRodW1ic1N0cmlwO1xuXG4gICAgaWYgKChzY3JvbGxMZWZ0ICsgNDAwKSA+PSBtYXhTdHJpcCkgeyAvLyBtZXR0ZXJlIHZhbHVlIGRhIGNvbmZpZyBlLmcuIHNjcm9sbFN0cmVuZ3RoXG4gICAgICB0aHVtYnNTdHJpcC5zY3JvbGxCeSh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogKzQwMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICAgIHJpZ2h0QXJyb3cuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHVtYnNTdHJpcC5zY3JvbGxCeSh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogKzQwMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoKChzY3JvbGxMZWZ0ICsgNDAwKSA+IDApKSB7XG4gICAgICBsZWZ0QXJyb3cuc3R5bGUub3BhY2l0eSA9ICcxLjAnO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IHRodW1ic1N0cmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2Rpdi5uNy1pbWFnZS12aWV3ZXItdG9vbHNfX3RodW1icy1zdHJpcCcpWzBdO1xuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihgZGl2LiR7dGhpcy5vdXRwdXQubmF2aWdhdGlvbi5uZXh0LmNsYXNzZXN9YClbMF07XG4gICAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oYGRpdi4ke3RoaXMub3V0cHV0Lm5hdmlnYXRpb24ucHJldi5jbGFzc2VzfWApWzBdO1xuICAgIGNvbnN0IG1heFN0cmlwID0gdGh1bWJzU3RyaXAuc2Nyb2xsV2lkdGggLSB0aHVtYnNTdHJpcC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCB7IHNjcm9sbExlZnQgfSA9IHRodW1ic1N0cmlwO1xuXG4gICAgaWYgKChzY3JvbGxMZWZ0IC0gNDAwKSA8PSAwKSB7IC8vIG1ldHRlcmUgdmFsdWUgZGEgY29uZmlnIGUuZy4gc2Nyb2xsU3RyZW5ndGhcbiAgICAgIHRodW1ic1N0cmlwLnNjcm9sbEJ5KHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAtNDAwLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgICAgbGVmdEFycm93LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGh1bWJzU3RyaXAuc2Nyb2xsQnkoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IC00MDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCgoc2Nyb2xsTGVmdCAtIDQwMCkgPCBtYXhTdHJpcCkpIHtcbiAgICAgIHJpZ2h0QXJyb3cuc3R5bGUub3BhY2l0eSA9ICcxLjAnO1xuICAgIH1cbiAgfVxuXG4gIC8vXG5cbiAgcHVibGljIGhhbmRsZVBhZ2VDaGFuZ2UocGF5bG9hZCkge1xuICAgIHRoaXMuaGFuZGxlVGh1bWJzKHBheWxvYWQucGFnZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlRGVzY3JpcHRpb24oKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm91dHB1dC5pbml0aWFsO1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLm91dHB1dDtcbiAgICB0aGlzLm91dHB1dC5kZXNjcmlwdGlvbiA9IGltYWdlc1tpbmRleF0uY2FwdGlvbjtcbiAgICBpZiAoIXRoaXMub3V0cHV0LmRlc2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm91dHB1dC5jb250cm9scy5kZXNjcmlwdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0cHV0LmNvbnRyb2xzLmRlc2NyaXB0aW9uID0ge1xuICAgICAgICBpY29uOiAnbjctaWNvbi1pbmZvMScsXG4gICAgICAgIGFuY2hvcjogeyBwYXlsb2FkOiAndG9nZ2xlLWRlc2NyaXB0aW9uJyB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIl19