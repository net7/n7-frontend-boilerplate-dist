import { IMAGE_VIEWER_MOCK } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class SbImageViewerDS extends DataSource {
    constructor() {
        super(...arguments);
        this.viewer = null;
        this.viewerLoaded$ = new Subject();
    }
    transform() {
        const data = IMAGE_VIEWER_MOCK;
        data.images = [
            { type: 'image', url: 'http://placekitten.com/1920/1080', buildPyramid: false },
            { type: 'image', url: 'http://placekitten.com/500/600', buildPyramid: false },
            { type: 'image', url: 'http://placekitten.com/700/400', buildPyramid: false }
        ];
        data.libOptions.showReferenceStrip = false;
        data._setViewer = (viewer) => {
            this.viewer = viewer;
            this.viewerLoaded$.next();
        };
        // data._pageCallback = (eventData) => eventData;
        return data;
    }
    changePage(index) {
        this.viewer.goToPage(index); // call to OpenSeadragon APIs
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL3NhbmRib3gvZGF0YS1zb3VyY2VzL2ltYWdlLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW1CLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUEvQzs7UUFDUyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWQsa0JBQWEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQXFCdEQsQ0FBQztJQW5CVyxTQUFTO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGtDQUFrQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUU7WUFDL0UsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxnQ0FBZ0MsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFO1lBQzdFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsZ0NBQWdDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRTtTQUM5RSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1FBQ0YsaURBQWlEO1FBQ2pELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFLO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsNkJBQTZCO0lBQzVELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlVmlld2VyRGF0YSwgSU1BR0VfVklFV0VSX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTYkltYWdlVmlld2VyRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwdWJsaWMgdmlld2VyID0gbnVsbDtcclxuXHJcbiAgcHVibGljIHZpZXdlckxvYWRlZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCk6IEltYWdlVmlld2VyRGF0YSB7XHJcbiAgICBjb25zdCBkYXRhID0gSU1BR0VfVklFV0VSX01PQ0s7XHJcbiAgICBkYXRhLmltYWdlcyA9IFtcclxuICAgICAgeyB0eXBlOiAnaW1hZ2UnLCB1cmw6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzE5MjAvMTA4MCcsIGJ1aWxkUHlyYW1pZDogZmFsc2UgfSxcclxuICAgICAgeyB0eXBlOiAnaW1hZ2UnLCB1cmw6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzUwMC82MDAnLCBidWlsZFB5cmFtaWQ6IGZhbHNlIH0sXHJcbiAgICAgIHsgdHlwZTogJ2ltYWdlJywgdXJsOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS83MDAvNDAwJywgYnVpbGRQeXJhbWlkOiBmYWxzZSB9XHJcbiAgICBdO1xyXG4gICAgZGF0YS5saWJPcHRpb25zLnNob3dSZWZlcmVuY2VTdHJpcCA9IGZhbHNlO1xyXG4gICAgZGF0YS5fc2V0Vmlld2VyID0gKHZpZXdlcikgPT4ge1xyXG4gICAgICB0aGlzLnZpZXdlciA9IHZpZXdlcjtcclxuICAgICAgdGhpcy52aWV3ZXJMb2FkZWQkLm5leHQoKTtcclxuICAgIH07XHJcbiAgICAvLyBkYXRhLl9wYWdlQ2FsbGJhY2sgPSAoZXZlbnREYXRhKSA9PiBldmVudERhdGE7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VQYWdlKGluZGV4KSB7XHJcbiAgICB0aGlzLnZpZXdlci5nb1RvUGFnZShpbmRleCk7IC8vIGNhbGwgdG8gT3BlblNlYWRyYWdvbiBBUElzXHJcbiAgfVxyXG59XHJcbiJdfQ==