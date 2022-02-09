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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2RhdGEtc291cmNlcy9pbWFnZS12aWV3ZXIuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUEvQzs7UUFLRSxrQkFBYSxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBdUMvQyxDQUFDO0lBckNXLFNBQVMsQ0FBQyxJQUFTO1FBQzNCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDaEMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsTUFBTTtZQUNOLE1BQU07WUFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDakIsY0FBYyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDekMsVUFBVSxFQUFFO2dCQUNWLGdCQUFnQjtnQkFDaEIsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLGdDQUFnQztnQkFFaEMsa0JBQWtCO2dCQUNsQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtQkFBbUIsRUFBRSxJQUFJO2dCQUN6QixlQUFlLEVBQUUsSUFBSTtnQkFDckIsZUFBZSxFQUFFLElBQUk7Z0JBRXJCLGNBQWM7Z0JBQ2QsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLGtCQUFrQixFQUFFLEtBQUssS0FBSyxJQUFJO2dCQUVsQyx1QkFBdUIsRUFBRSxXQUFXO2FBQ3JDO1lBQ0QsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzVCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNkJBQTZCO0lBQzVELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckltYWdlVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICB2aWV3ZXI6IGFueTtcclxuXHJcbiAgdmlld2VyTG9hZGVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCB7IGltYWdlcywgdGh1bWJzIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyB0b29scyB9ID0gKHRoaXMub3B0aW9ucyB8fCB7fSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbWFnZXMsXHJcbiAgICAgIHRodW1icyxcclxuICAgICAgdmlld2VySWQ6IHRoaXMuaWQsXHJcbiAgICAgIGhpZGVOYXZpZ2F0aW9uOiAhKGRhdGEuaW1hZ2VzLmxlbmd0aCA+IDEpLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgLyogU0hPVyBHUk9VUCAqL1xyXG4gICAgICAgIHNob3dOYXZpZ2F0b3I6IGZhbHNlLCAvLyBzaG93cyB0aGUgbWluaS1tYXBcclxuICAgICAgICBhdXRvSGlkZUNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAvLyBzaG93TmF2aWdhdGlvbkNvbnRyb2w6IGZhbHNlLFxyXG5cclxuICAgICAgICAvKiBTSE9XIEJVVFRPTlMgKi9cclxuICAgICAgICBzaG93Um90YXRpb25Db250cm9sOiBmYWxzZSxcclxuICAgICAgICBzaG93U2VxdWVuY2VDb250cm9sOiB0cnVlLFxyXG4gICAgICAgIHNob3dIb21lQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICBzaG93Wm9vbUNvbnRyb2w6IHRydWUsXHJcblxyXG4gICAgICAgIC8qIFNFUVVFTkNFICovXHJcbiAgICAgICAgc2VxdWVuY2VNb2RlOiB0cnVlLCAvLyBhbGxvd3MgaGF2aW5nIG11bHRpcGxlIGltYWdlcyAoYXMgaW4gYXJyYXkgb2YgaW1hZ2VzICsgem9vbWVkIGltYWdlKVxyXG4gICAgICAgIHNob3dSZWZlcmVuY2VTdHJpcDogdG9vbHMgIT09IHRydWUsIC8vIHNob3dzIHRoZSBpbWFnZXMgYXJyYXkgKGRlZmF1bHQ6IGhvcml6b250YWxseSlcclxuXHJcbiAgICAgICAgbmF2aWdhdGlvbkNvbnRyb2xBbmNob3I6ICdUT1BfUklHSFQnLFxyXG4gICAgICB9LFxyXG4gICAgICBfc2V0Vmlld2VyOiAodmlld2VyKSA9PiB7XHJcbiAgICAgICAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XHJcbiAgICAgICAgdGhpcy52aWV3ZXJMb2FkZWQkLm5leHQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VQYWdlKGluZGV4KSB7XHJcbiAgICB0aGlzLnZpZXdlci5nb1RvUGFnZShpbmRleCk7IC8vIGNhbGwgdG8gT3BlblNlYWRyYWdvbiBBUElzXHJcbiAgfVxyXG59XHJcbiJdfQ==