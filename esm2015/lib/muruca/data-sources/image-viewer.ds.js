import { DataSource } from '@n7-frontend/core';
export class MrImageViewerDS extends DataSource {
    transform(data) {
        const { images, thumbs } = data;
        return {
            images,
            thumbs,
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
            _setViewer(viewer) {
                this.viewer = viewer;
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBS25DLFNBQVMsQ0FBQyxJQUFTO1FBQzNCLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLE9BQU87WUFDTCxNQUFNO1lBQ04sTUFBTTtZQUNOLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNqQixVQUFVLEVBQUU7Z0JBQ1YsZ0JBQWdCO2dCQUNoQixhQUFhLEVBQUUsS0FBSztnQkFDcEIsZ0JBQWdCLEVBQUUsS0FBSztnQkFFdkIsa0JBQWtCO2dCQUNsQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtQkFBbUIsRUFBRSxJQUFJO2dCQUN6QixlQUFlLEVBQUUsSUFBSTtnQkFDckIsZUFBZSxFQUFFLElBQUk7Z0JBRXJCLGNBQWM7Z0JBQ2QsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGtCQUFrQixFQUFFLElBQUk7Z0JBRXhCLHVCQUF1QixFQUFFLFdBQVc7YUFDckM7WUFDRCxVQUFVLENBQUMsTUFBTTtnQkFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN2QixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJbWFnZVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdmlld2VyOiBhbnk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VzLCB0aHVtYnMgfSA9IGRhdGE7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbWFnZXMsXHJcbiAgICAgIHRodW1icyxcclxuICAgICAgdmlld2VySWQ6IHRoaXMuaWQsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICAvKiBTSE9XIEdST1VQICovXHJcbiAgICAgICAgc2hvd05hdmlnYXRvcjogZmFsc2UsIC8vIHNob3dzIHRoZSBtaW5pLW1hcFxyXG4gICAgICAgIGF1dG9IaWRlQ29udHJvbHM6IGZhbHNlLFxyXG5cclxuICAgICAgICAvKiBTSE9XIEJVVFRPTlMgKi9cclxuICAgICAgICBzaG93Um90YXRpb25Db250cm9sOiBmYWxzZSxcclxuICAgICAgICBzaG93U2VxdWVuY2VDb250cm9sOiB0cnVlLFxyXG4gICAgICAgIHNob3dIb21lQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICBzaG93Wm9vbUNvbnRyb2w6IHRydWUsXHJcblxyXG4gICAgICAgIC8qIFNFUVVFTkNFICovXHJcbiAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLCAvLyBhbGxvd3MgaGF2aW5nIG11bHRpcGxlIGltYWdlcyAoYXMgaW4gYXJyYXkgb2YgaW1hZ2VzICsgem9vbWVkIGltYWdlKVxyXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSwgLy8gc2hvd3MgdGhlIGltYWdlcyBhcnJheSAoZGVmYXVsdDogaG9yaXpvbnRhbGx5KVxyXG5cclxuICAgICAgICBuYXZpZ2F0aW9uQ29udHJvbEFuY2hvcjogJ1RPUF9SSUdIVCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIF9zZXRWaWV3ZXIodmlld2VyKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==