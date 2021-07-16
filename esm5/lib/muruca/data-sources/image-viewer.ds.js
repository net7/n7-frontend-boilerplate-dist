import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrImageViewerDS = /** @class */ (function (_super) {
    __extends(MrImageViewerDS, _super);
    function MrImageViewerDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrImageViewerDS.prototype.transform = function (data) {
        if (!data)
            return null;
        var images = data.images, thumbs = data.thumbs;
        return {
            images: images,
            thumbs: thumbs,
            viewerId: this.id,
            libOptions: {
                /* SHOW GROUP */
                showNavigator: false,
                autoHideControls: false,
                /* SHOW BUTTONS */
                showRotationControl: false,
                showSequenceControl: true,
                showHomeControl: true,
                showZoomControl: true,
                /* SEQUENCE */
                sequenceMode: true,
                showReferenceStrip: true,
                navigationControlAnchor: 'TOP_RIGHT',
            },
            _setViewer: function (viewer) {
                this.viewer = viewer;
            }
        };
    };
    return MrImageViewerDS;
}(DataSource));
export { MrImageViewerDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBcUMsbUNBQVU7SUFBL0M7O0lBa0NBLENBQUM7SUE3QlcsbUNBQVMsR0FBbkIsVUFBb0IsSUFBUztRQUMzQixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2YsSUFBQSxvQkFBTSxFQUFFLG9CQUFNLENBQVU7UUFDaEMsT0FBTztZQUNMLE1BQU0sUUFBQTtZQUNOLE1BQU0sUUFBQTtZQUNOLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNqQixVQUFVLEVBQUU7Z0JBQ1YsZ0JBQWdCO2dCQUNoQixhQUFhLEVBQUUsS0FBSztnQkFDcEIsZ0JBQWdCLEVBQUUsS0FBSztnQkFFdkIsa0JBQWtCO2dCQUNsQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtQkFBbUIsRUFBRSxJQUFJO2dCQUN6QixlQUFlLEVBQUUsSUFBSTtnQkFDckIsZUFBZSxFQUFFLElBQUk7Z0JBRXJCLGNBQWM7Z0JBQ2QsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGtCQUFrQixFQUFFLElBQUk7Z0JBRXhCLHVCQUF1QixFQUFFLFdBQVc7YUFDckM7WUFDRCxVQUFVLFlBQUMsTUFBTTtnQkFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN2QixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBcUMsVUFBVSxHQWtDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJJbWFnZVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmlld2VyOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBpbWFnZXMsIHRodW1icyB9ID0gZGF0YTtcbiAgICByZXR1cm4ge1xuICAgICAgaW1hZ2VzLFxuICAgICAgdGh1bWJzLFxuICAgICAgdmlld2VySWQ6IHRoaXMuaWQsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIC8qIFNIT1cgR1JPVVAgKi9cbiAgICAgICAgc2hvd05hdmlnYXRvcjogZmFsc2UsIC8vIHNob3dzIHRoZSBtaW5pLW1hcFxuICAgICAgICBhdXRvSGlkZUNvbnRyb2xzOiBmYWxzZSxcblxuICAgICAgICAvKiBTSE9XIEJVVFRPTlMgKi9cbiAgICAgICAgc2hvd1JvdGF0aW9uQ29udHJvbDogZmFsc2UsXG4gICAgICAgIHNob3dTZXF1ZW5jZUNvbnRyb2w6IHRydWUsXG4gICAgICAgIHNob3dIb21lQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgc2hvd1pvb21Db250cm9sOiB0cnVlLFxuXG4gICAgICAgIC8qIFNFUVVFTkNFICovXG4gICAgICAgIHNlcXVlbmNlTW9kZTogdHJ1ZSwgLy8gYWxsb3dzIGhhdmluZyBtdWx0aXBsZSBpbWFnZXMgKGFzIGluIGFycmF5IG9mIGltYWdlcyArIHpvb21lZCBpbWFnZSlcbiAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0cnVlLCAvLyBzaG93cyB0aGUgaW1hZ2VzIGFycmF5IChkZWZhdWx0OiBob3Jpem9udGFsbHkpXG5cbiAgICAgICAgbmF2aWdhdGlvbkNvbnRyb2xBbmNob3I6ICdUT1BfUklHSFQnLFxuICAgICAgfSxcbiAgICAgIF9zZXRWaWV3ZXIodmlld2VyKSB7XG4gICAgICAgIHRoaXMudmlld2VyID0gdmlld2VyO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==