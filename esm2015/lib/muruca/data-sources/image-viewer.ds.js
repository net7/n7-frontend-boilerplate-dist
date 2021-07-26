import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class MrImageViewerDS extends DataSource {
    constructor() {
        super(...arguments);
        this.viewerLoaded$ = new Subject();
    }
    transform(data) {
        if (!data)
            return null;
        const { images, thumbs } = data;
        const { tools } = (this.options || {});
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
                showReferenceStrip: tools !== true,
                navigationControlAnchor: 'TOP_RIGHT',
            },
            _setViewer: (viewer) => {
                this.viewer = viewer;
                this.viewerLoaded$.next();
            }
        };
    }
    changePage(index) {
        this.viewer.goToPage(index); // call to OpenSeadragon APIs
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBS0Usa0JBQWEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXFDL0MsQ0FBQztJQW5DVyxTQUFTLENBQUMsSUFBUztRQUMzQixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkMsT0FBTztZQUNMLE1BQU07WUFDTixNQUFNO1lBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLFVBQVUsRUFBRTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixnQkFBZ0IsRUFBRSxLQUFLO2dCQUV2QixrQkFBa0I7Z0JBQ2xCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixlQUFlLEVBQUUsSUFBSTtnQkFFckIsY0FBYztnQkFDZCxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsa0JBQWtCLEVBQUUsS0FBSyxLQUFLLElBQUk7Z0JBRWxDLHVCQUF1QixFQUFFLFdBQVc7YUFDckM7WUFDRCxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRU0sVUFBVSxDQUFDLEtBQUs7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7SUFDNUQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW1hZ2VWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHZpZXdlcjogYW55O1xyXG5cclxuICB2aWV3ZXJMb2FkZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHsgaW1hZ2VzLCB0aHVtYnMgfSA9IGRhdGE7XHJcbiAgICBjb25zdCB7IHRvb2xzIH0gPSAodGhpcy5vcHRpb25zIHx8IHt9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltYWdlcyxcclxuICAgICAgdGh1bWJzLFxyXG4gICAgICB2aWV3ZXJJZDogdGhpcy5pZCxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIC8qIFNIT1cgR1JPVVAgKi9cclxuICAgICAgICBzaG93TmF2aWdhdG9yOiBmYWxzZSwgLy8gc2hvd3MgdGhlIG1pbmktbWFwXHJcbiAgICAgICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXHJcblxyXG4gICAgICAgIC8qIFNIT1cgQlVUVE9OUyAqL1xyXG4gICAgICAgIHNob3dSb3RhdGlvbkNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIHNob3dTZXF1ZW5jZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgc2hvd0hvbWVDb250cm9sOiB0cnVlLFxyXG4gICAgICAgIHNob3dab29tQ29udHJvbDogdHJ1ZSxcclxuXHJcbiAgICAgICAgLyogU0VRVUVOQ0UgKi9cclxuICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsIC8vIGFsbG93cyBoYXZpbmcgbXVsdGlwbGUgaW1hZ2VzIChhcyBpbiBhcnJheSBvZiBpbWFnZXMgKyB6b29tZWQgaW1hZ2UpXHJcbiAgICAgICAgc2hvd1JlZmVyZW5jZVN0cmlwOiB0b29scyAhPT0gdHJ1ZSwgLy8gc2hvd3MgdGhlIGltYWdlcyBhcnJheSAoZGVmYXVsdDogaG9yaXpvbnRhbGx5KVxyXG5cclxuICAgICAgICBuYXZpZ2F0aW9uQ29udHJvbEFuY2hvcjogJ1RPUF9SSUdIVCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIF9zZXRWaWV3ZXI6ICh2aWV3ZXIpID0+IHtcclxuICAgICAgICB0aGlzLnZpZXdlciA9IHZpZXdlcjtcclxuICAgICAgICB0aGlzLnZpZXdlckxvYWRlZCQubmV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZVBhZ2UoaW5kZXgpIHtcclxuICAgIHRoaXMudmlld2VyLmdvVG9QYWdlKGluZGV4KTsgLy8gY2FsbCB0byBPcGVuU2VhZHJhZ29uIEFQSXNcclxuICB9XHJcbn1cclxuIl19