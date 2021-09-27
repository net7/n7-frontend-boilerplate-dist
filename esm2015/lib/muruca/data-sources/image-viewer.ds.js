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
            hideNavigation: !(data.images.length > 1),
            libOptions: {
                /* SHOW GROUP */
                showNavigator: false,
                autoHideControls: false,
                // showNavigationControl: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBS0Usa0JBQWEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXVDL0MsQ0FBQztJQXJDVyxTQUFTLENBQUMsSUFBUztRQUMzQixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkMsT0FBTztZQUNMLE1BQU07WUFDTixNQUFNO1lBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLGNBQWMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLFVBQVUsRUFBRTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixnQ0FBZ0M7Z0JBRWhDLGtCQUFrQjtnQkFDbEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsbUJBQW1CLEVBQUUsSUFBSTtnQkFDekIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGVBQWUsRUFBRSxJQUFJO2dCQUVyQixjQUFjO2dCQUNkLFlBQVksRUFBRSxJQUFJO2dCQUNsQixrQkFBa0IsRUFBRSxLQUFLLEtBQUssSUFBSTtnQkFFbEMsdUJBQXVCLEVBQUUsV0FBVzthQUNyQztZQUNELFVBQVUsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1QixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxVQUFVLENBQUMsS0FBSztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtJQUM1RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgTXJJbWFnZVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgdmlld2VyOiBhbnk7XG5cbiAgdmlld2VyTG9hZGVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBpbWFnZXMsIHRodW1icyB9ID0gZGF0YTtcbiAgICBjb25zdCB7IHRvb2xzIH0gPSAodGhpcy5vcHRpb25zIHx8IHt9KTtcbiAgICByZXR1cm4ge1xuICAgICAgaW1hZ2VzLFxuICAgICAgdGh1bWJzLFxuICAgICAgdmlld2VySWQ6IHRoaXMuaWQsXG4gICAgICBoaWRlTmF2aWdhdGlvbjogIShkYXRhLmltYWdlcy5sZW5ndGggPiAxKSxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgLyogU0hPVyBHUk9VUCAqL1xuICAgICAgICBzaG93TmF2aWdhdG9yOiBmYWxzZSwgLy8gc2hvd3MgdGhlIG1pbmktbWFwXG4gICAgICAgIGF1dG9IaWRlQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICAvLyBzaG93TmF2aWdhdGlvbkNvbnRyb2w6IGZhbHNlLFxuXG4gICAgICAgIC8qIFNIT1cgQlVUVE9OUyAqL1xuICAgICAgICBzaG93Um90YXRpb25Db250cm9sOiBmYWxzZSxcbiAgICAgICAgc2hvd1NlcXVlbmNlQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgc2hvd0hvbWVDb250cm9sOiB0cnVlLFxuICAgICAgICBzaG93Wm9vbUNvbnRyb2w6IHRydWUsXG5cbiAgICAgICAgLyogU0VRVUVOQ0UgKi9cbiAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLCAvLyBhbGxvd3MgaGF2aW5nIG11bHRpcGxlIGltYWdlcyAoYXMgaW4gYXJyYXkgb2YgaW1hZ2VzICsgem9vbWVkIGltYWdlKVxuICAgICAgICBzaG93UmVmZXJlbmNlU3RyaXA6IHRvb2xzICE9PSB0cnVlLCAvLyBzaG93cyB0aGUgaW1hZ2VzIGFycmF5IChkZWZhdWx0OiBob3Jpem9udGFsbHkpXG5cbiAgICAgICAgbmF2aWdhdGlvbkNvbnRyb2xBbmNob3I6ICdUT1BfUklHSFQnLFxuICAgICAgfSxcbiAgICAgIF9zZXRWaWV3ZXI6ICh2aWV3ZXIpID0+IHtcbiAgICAgICAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XG4gICAgICAgIHRoaXMudmlld2VyTG9hZGVkJC5uZXh0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VQYWdlKGluZGV4KSB7XG4gICAgdGhpcy52aWV3ZXIuZ29Ub1BhZ2UoaW5kZXgpOyAvLyBjYWxsIHRvIE9wZW5TZWFkcmFnb24gQVBJc1xuICB9XG59XG4iXX0=