import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrImageViewerDS = /** @class */ (function (_super) {
    __extends(MrImageViewerDS, _super);
    function MrImageViewerDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrImageViewerDS.prototype.transform = function (data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBcUMsbUNBQVU7SUFBL0M7O0lBaUNBLENBQUM7SUE1QlcsbUNBQVMsR0FBbkIsVUFBb0IsSUFBUztRQUNuQixJQUFBLG9CQUFNLEVBQUUsb0JBQU0sQ0FBVTtRQUNoQyxPQUFPO1lBQ0wsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1lBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLFVBQVUsRUFBRTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixnQkFBZ0IsRUFBRSxLQUFLO2dCQUV2QixrQkFBa0I7Z0JBQ2xCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixlQUFlLEVBQUUsSUFBSTtnQkFFckIsY0FBYztnQkFDZCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFFeEIsdUJBQXVCLEVBQUUsV0FBVzthQUNyQztZQUNELFVBQVUsWUFBQyxNQUFNO2dCQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWpDRCxDQUFxQyxVQUFVLEdBaUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJbWFnZVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdmlld2VyOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VzLCB0aHVtYnMgfSA9IGRhdGE7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbWFnZXMsXHJcbiAgICAgIHRodW1icyxcclxuICAgICAgdmlld2VySWQ6IHRoaXMuaWQsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICAvKiBTSE9XIEdST1VQICovXHJcbiAgICAgICAgc2hvd05hdmlnYXRvcjogZmFsc2UsIC8vIHNob3dzIHRoZSBtaW5pLW1hcFxyXG4gICAgICAgIGF1dG9IaWRlQ29udHJvbHM6IGZhbHNlLFxyXG5cclxuICAgICAgICAvKiBTSE9XIEJVVFRPTlMgKi9cclxuICAgICAgICBzaG93Um90YXRpb25Db250cm9sOiBmYWxzZSxcclxuICAgICAgICBzaG93U2VxdWVuY2VDb250cm9sOiB0cnVlLFxyXG4gICAgICAgIHNob3dIb21lQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICBzaG93Wm9vbUNvbnRyb2w6IHRydWUsXHJcblxyXG4gICAgICAgIC8qIFNFUVVFTkNFICovXHJcbiAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLCAvLyBhbGxvd3MgaGF2aW5nIG11bHRpcGxlIGltYWdlcyAoYXMgaW4gYXJyYXkgb2YgaW1hZ2VzICsgem9vbWVkIGltYWdlKVxyXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSwgLy8gc2hvd3MgdGhlIGltYWdlcyBhcnJheSAoZGVmYXVsdDogaG9yaXpvbnRhbGx5KVxyXG5cclxuICAgICAgICBuYXZpZ2F0aW9uQ29udHJvbEFuY2hvcjogJ1RPUF9SSUdIVCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIF9zZXRWaWV3ZXIodmlld2VyKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==