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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBcUMsbUNBQVU7SUFBL0M7O0lBa0NBLENBQUM7SUE3QlcsbUNBQVMsR0FBbkIsVUFBb0IsSUFBUztRQUMzQixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ2YsSUFBQSxvQkFBTSxFQUFFLG9CQUFNLENBQVU7UUFDaEMsT0FBTztZQUNMLE1BQU0sUUFBQTtZQUNOLE1BQU0sUUFBQTtZQUNOLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNqQixVQUFVLEVBQUU7Z0JBQ1YsZ0JBQWdCO2dCQUNoQixhQUFhLEVBQUUsS0FBSztnQkFDcEIsZ0JBQWdCLEVBQUUsS0FBSztnQkFFdkIsa0JBQWtCO2dCQUNsQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtQkFBbUIsRUFBRSxJQUFJO2dCQUN6QixlQUFlLEVBQUUsSUFBSTtnQkFDckIsZUFBZSxFQUFFLElBQUk7Z0JBRXJCLGNBQWM7Z0JBQ2QsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGtCQUFrQixFQUFFLElBQUk7Z0JBRXhCLHVCQUF1QixFQUFFLFdBQVc7YUFDckM7WUFDRCxVQUFVLFlBQUMsTUFBTTtnQkFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN2QixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBcUMsVUFBVSxHQWtDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW1hZ2VWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHZpZXdlcjogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgeyBpbWFnZXMsIHRodW1icyB9ID0gZGF0YTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltYWdlcyxcclxuICAgICAgdGh1bWJzLFxyXG4gICAgICB2aWV3ZXJJZDogdGhpcy5pZCxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIC8qIFNIT1cgR1JPVVAgKi9cclxuICAgICAgICBzaG93TmF2aWdhdG9yOiBmYWxzZSwgLy8gc2hvd3MgdGhlIG1pbmktbWFwXHJcbiAgICAgICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXHJcblxyXG4gICAgICAgIC8qIFNIT1cgQlVUVE9OUyAqL1xyXG4gICAgICAgIHNob3dSb3RhdGlvbkNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHNob3dTZXF1ZW5jZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgc2hvd0hvbWVDb250cm9sOiB0cnVlLFxyXG4gICAgICAgIHNob3dab29tQ29udHJvbDogdHJ1ZSxcclxuXHJcbiAgICAgICAgLyogU0VRVUVOQ0UgKi9cclxuICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsIC8vIGFsbG93cyBoYXZpbmcgbXVsdGlwbGUgaW1hZ2VzIChhcyBpbiBhcnJheSBvZiBpbWFnZXMgKyB6b29tZWQgaW1hZ2UpXHJcbiAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0cnVlLCAvLyBzaG93cyB0aGUgaW1hZ2VzIGFycmF5IChkZWZhdWx0OiBob3Jpem9udGFsbHkpXHJcblxyXG4gICAgICAgIG5hdmlnYXRpb25Db250cm9sQW5jaG9yOiAnVE9QX1JJR0hUJyxcclxuICAgICAgfSxcclxuICAgICAgX3NldFZpZXdlcih2aWV3ZXIpIHtcclxuICAgICAgICB0aGlzLnZpZXdlciA9IHZpZXdlcjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19