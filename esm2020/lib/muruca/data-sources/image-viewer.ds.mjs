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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2RhdGEtc291cmNlcy9pbWFnZS12aWV3ZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUEvQzs7UUFLRSxrQkFBYSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBdUMvQyxDQUFDO0lBckNXLFNBQVMsQ0FBQyxJQUFTO1FBQzNCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDaEMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsTUFBTTtZQUNOLE1BQU07WUFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDakIsY0FBYyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDekMsVUFBVSxFQUFFO2dCQUNWLGdCQUFnQjtnQkFDaEIsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLGdDQUFnQztnQkFFaEMsa0JBQWtCO2dCQUNsQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtQkFBbUIsRUFBRSxJQUFJO2dCQUN6QixlQUFlLEVBQUUsSUFBSTtnQkFDckIsZUFBZSxFQUFFLElBQUk7Z0JBRXJCLGNBQWM7Z0JBQ2QsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGtCQUFrQixFQUFFLEtBQUssS0FBSyxJQUFJO2dCQUVsQyx1QkFBdUIsRUFBRSxXQUFXO2FBQ3JDO1lBQ0QsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNkJBQTZCO0lBQzVELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2aWV3ZXI6IGFueTtcblxuICB2aWV3ZXJMb2FkZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IGltYWdlcywgdGh1bWJzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgdG9vbHMgfSA9ICh0aGlzLm9wdGlvbnMgfHwge30pO1xuICAgIHJldHVybiB7XG4gICAgICBpbWFnZXMsXG4gICAgICB0aHVtYnMsXG4gICAgICB2aWV3ZXJJZDogdGhpcy5pZCxcbiAgICAgIGhpZGVOYXZpZ2F0aW9uOiAhKGRhdGEuaW1hZ2VzLmxlbmd0aCA+IDEpLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICAvKiBTSE9XIEdST1VQICovXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLCAvLyBzaG93cyB0aGUgbWluaS1tYXBcbiAgICAgICAgYXV0b0hpZGVDb250cm9sczogZmFsc2UsXG4gICAgICAgIC8vIHNob3dOYXZpZ2F0aW9uQ29udHJvbDogZmFsc2UsXG5cbiAgICAgICAgLyogU0hPVyBCVVRUT05TICovXG4gICAgICAgIHNob3dSb3RhdGlvbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICBzaG93U2VxdWVuY2VDb250cm9sOiB0cnVlLFxuICAgICAgICBzaG93SG9tZUNvbnRyb2w6IHRydWUsXG4gICAgICAgIHNob3dab29tQ29udHJvbDogdHJ1ZSxcblxuICAgICAgICAvKiBTRVFVRU5DRSAqL1xuICAgICAgICBzZXF1ZW5jZU1vZGU6IHRydWUsIC8vIGFsbG93cyBoYXZpbmcgbXVsdGlwbGUgaW1hZ2VzIChhcyBpbiBhcnJheSBvZiBpbWFnZXMgKyB6b29tZWQgaW1hZ2UpXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdG9vbHMgIT09IHRydWUsIC8vIHNob3dzIHRoZSBpbWFnZXMgYXJyYXkgKGRlZmF1bHQ6IGhvcml6b250YWxseSlcblxuICAgICAgICBuYXZpZ2F0aW9uQ29udHJvbEFuY2hvcjogJ1RPUF9SSUdIVCcsXG4gICAgICB9LFxuICAgICAgX3NldFZpZXdlcjogKHZpZXdlcikgPT4ge1xuICAgICAgICB0aGlzLnZpZXdlciA9IHZpZXdlcjtcbiAgICAgICAgdGhpcy52aWV3ZXJMb2FkZWQkLm5leHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNoYW5nZVBhZ2UoaW5kZXgpIHtcbiAgICB0aGlzLnZpZXdlci5nb1RvUGFnZShpbmRleCk7IC8vIGNhbGwgdG8gT3BlblNlYWRyYWdvbiBBUElzXG4gIH1cbn1cbiJdfQ==