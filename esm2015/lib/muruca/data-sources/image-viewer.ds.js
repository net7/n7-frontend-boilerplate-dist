import { DataSource } from '@n7-frontend/core';
export class MrImageViewerDS extends DataSource {
    transform(data) {
        if (!data)
            return null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBS25DLFNBQVMsQ0FBQyxJQUFTO1FBQzNCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDaEMsT0FBTztZQUNMLE1BQU07WUFDTixNQUFNO1lBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLFVBQVUsRUFBRTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixnQkFBZ0IsRUFBRSxLQUFLO2dCQUV2QixrQkFBa0I7Z0JBQ2xCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixlQUFlLEVBQUUsSUFBSTtnQkFFckIsY0FBYztnQkFDZCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsa0JBQWtCLEVBQUUsSUFBSTtnQkFFeEIsdUJBQXVCLEVBQUUsV0FBVzthQUNyQztZQUNELFVBQVUsQ0FBQyxNQUFNO2dCQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2aWV3ZXI6IGFueTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHsgaW1hZ2VzLCB0aHVtYnMgfSA9IGRhdGE7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbWFnZXMsXHJcbiAgICAgIHRodW1icyxcclxuICAgICAgdmlld2VySWQ6IHRoaXMuaWQsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICAvKiBTSE9XIEdST1VQICovXHJcbiAgICAgICAgc2hvd05hdmlnYXRvcjogZmFsc2UsIC8vIHNob3dzIHRoZSBtaW5pLW1hcFxyXG4gICAgICAgIGF1dG9IaWRlQ29udHJvbHM6IGZhbHNlLFxyXG5cclxuICAgICAgICAvKiBTSE9XIEJVVFRPTlMgKi9cclxuICAgICAgICBzaG93Um90YXRpb25Db250cm9sOiBmYWxzZSxcclxuICAgICAgICBzaG93U2VxdWVuY2VDb250cm9sOiB0cnVlLFxyXG4gICAgICAgIHNob3dIb21lQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICBzaG93Wm9vbUNvbnRyb2w6IHRydWUsXHJcblxyXG4gICAgICAgIC8qIFNFUVVFTkNFICovXHJcbiAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLCAvLyBhbGxvd3MgaGF2aW5nIG11bHRpcGxlIGltYWdlcyAoYXMgaW4gYXJyYXkgb2YgaW1hZ2VzICsgem9vbWVkIGltYWdlKVxyXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdHJ1ZSwgLy8gc2hvd3MgdGhlIGltYWdlcyBhcnJheSAoZGVmYXVsdDogaG9yaXpvbnRhbGx5KVxyXG5cclxuICAgICAgICBuYXZpZ2F0aW9uQ29udHJvbEFuY2hvcjogJ1RPUF9SSUdIVCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIF9zZXRWaWV3ZXIodmlld2VyKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==