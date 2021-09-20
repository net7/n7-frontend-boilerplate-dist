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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBS0Usa0JBQWEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXVDL0MsQ0FBQztJQXJDVyxTQUFTLENBQUMsSUFBUztRQUMzQixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkMsT0FBTztZQUNMLE1BQU07WUFDTixNQUFNO1lBQ04sUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2pCLGNBQWMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLFVBQVUsRUFBRTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixnQ0FBZ0M7Z0JBRWhDLGtCQUFrQjtnQkFDbEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsbUJBQW1CLEVBQUUsSUFBSTtnQkFDekIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGVBQWUsRUFBRSxJQUFJO2dCQUVyQixjQUFjO2dCQUNkLFlBQVksRUFBRSxJQUFJO2dCQUNsQixrQkFBa0IsRUFBRSxLQUFLLEtBQUssSUFBSTtnQkFFbEMsdUJBQXVCLEVBQUUsV0FBVzthQUNyQztZQUNELFVBQVUsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1QixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxVQUFVLENBQUMsS0FBSztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtJQUM1RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJbWFnZVZpZXdlckRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdmlld2VyOiBhbnk7XHJcblxyXG4gIHZpZXdlckxvYWRlZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgeyBpbWFnZXMsIHRodW1icyB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHsgdG9vbHMgfSA9ICh0aGlzLm9wdGlvbnMgfHwge30pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1hZ2VzLFxyXG4gICAgICB0aHVtYnMsXHJcbiAgICAgIHZpZXdlcklkOiB0aGlzLmlkLFxyXG4gICAgICBoaWRlTmF2aWdhdGlvbjogIShkYXRhLmltYWdlcy5sZW5ndGggPiAxKSxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIC8qIFNIT1cgR1JPVVAgKi9cclxuICAgICAgICBzaG93TmF2aWdhdG9yOiBmYWxzZSwgLy8gc2hvd3MgdGhlIG1pbmktbWFwXHJcbiAgICAgICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgLy8gc2hvd05hdmlnYXRpb25Db250cm9sOiBmYWxzZSxcclxuXHJcbiAgICAgICAgLyogU0hPVyBCVVRUT05TICovXHJcbiAgICAgICAgc2hvd1JvdGF0aW9uQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgc2hvd1NlcXVlbmNlQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICBzaG93SG9tZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgc2hvd1pvb21Db250cm9sOiB0cnVlLFxyXG5cclxuICAgICAgICAvKiBTRVFVRU5DRSAqL1xyXG4gICAgICAgIHNlcXVlbmNlTW9kZTogdHJ1ZSwgLy8gYWxsb3dzIGhhdmluZyBtdWx0aXBsZSBpbWFnZXMgKGFzIGluIGFycmF5IG9mIGltYWdlcyArIHpvb21lZCBpbWFnZSlcclxuICAgICAgICBzaG93UmVmZXJlbmNlU3RyaXA6IHRvb2xzICE9PSB0cnVlLCAvLyBzaG93cyB0aGUgaW1hZ2VzIGFycmF5IChkZWZhdWx0OiBob3Jpem9udGFsbHkpXHJcblxyXG4gICAgICAgIG5hdmlnYXRpb25Db250cm9sQW5jaG9yOiAnVE9QX1JJR0hUJyxcclxuICAgICAgfSxcclxuICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xyXG4gICAgICAgIHRoaXMudmlld2VyID0gdmlld2VyO1xyXG4gICAgICAgIHRoaXMudmlld2VyTG9hZGVkJC5uZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlUGFnZShpbmRleCkge1xyXG4gICAgdGhpcy52aWV3ZXIuZ29Ub1BhZ2UoaW5kZXgpOyAvLyBjYWxsIHRvIE9wZW5TZWFkcmFnb24gQVBJc1xyXG4gIH1cclxufVxyXG4iXX0=