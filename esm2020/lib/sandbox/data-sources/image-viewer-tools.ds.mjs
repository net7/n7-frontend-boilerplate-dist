import { IMAGE_VIEWER_TOOLS_MOCK } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
export class SbImageViewerToolsDS extends DataSource {
    transform() {
        const data = IMAGE_VIEWER_TOOLS_MOCK;
        data.images = [
            { thumb: 'http://placekitten.com/200/130', payload: { thumbindex: 0 }, caption: 'Test caption <b>#1</b>' },
            { thumb: 'http://placekitten.com/90/180', payload: { thumbindex: 1 }, caption: 'Test caption <b>#2</b>' },
            { thumb: 'http://placekitten.com/90/110', payload: { thumbindex: 2 }, caption: 'Test caption <b>#3</b>' },
        ];
        const initialDescription = data.images[data.initial].caption;
        if (initialDescription !== undefined) {
            data.description = initialDescription;
        }
        return data;
    }
    toggleDescription() {
        this.output.isVisible.description = !this.output.isVisible.description;
    }
    toggleThumbs() {
        this.output.isVisible.thumbnails = !this.output.isVisible.thumbnails;
    }
    handleThumbs(index) {
        this.output.initial = index;
        this.updateDescription();
    }
    handlePageChange(payload) {
        this.handleThumbs(payload.page);
    }
    updateDescription() {
        const index = this.output.initial;
        const { images } = this.output;
        this.output.description = images[index].caption;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvc2FuZGJveC9kYXRhLXNvdXJjZXMvaW1hZ2Utdmlld2VyLXRvb2xzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBd0IsdUJBQXVCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7SUFDeEMsU0FBUztRQUNqQixNQUFNLElBQUksR0FBRyx1QkFBdUIsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUUsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRTtZQUMxRyxFQUFFLEtBQUssRUFBRSwrQkFBK0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1lBQ3pHLEVBQUUsS0FBSyxFQUFFLCtCQUErQixFQUFFLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUU7U0FDMUcsQ0FBQztRQUNGLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzdELElBQUksa0JBQWtCLEtBQUssU0FBUyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7U0FDdkM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQ3pFLENBQUM7SUFFTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztJQUN2RSxDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxPQUFPO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxpQkFBaUI7UUFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNsRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZVZpZXdlclRvb2xzRGF0YSwgSU1BR0VfVklFV0VSX1RPT0xTX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2JJbWFnZVZpZXdlclRvb2xzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCk6IEltYWdlVmlld2VyVG9vbHNEYXRhIHtcclxuICAgIGNvbnN0IGRhdGEgPSBJTUFHRV9WSUVXRVJfVE9PTFNfTU9DSztcclxuICAgIGRhdGEuaW1hZ2VzID0gW1xyXG4gICAgICB7IHRodW1iOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8yMDAvMTMwJywgcGF5bG9hZDogeyB0aHVtYmluZGV4OiAwIH0sIGNhcHRpb246ICdUZXN0IGNhcHRpb24gPGI+IzE8L2I+JyB9LFxyXG4gICAgICB7IHRodW1iOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS85MC8xODAnLCBwYXlsb2FkOiB7IHRodW1iaW5kZXg6IDEgfSwgY2FwdGlvbjogJ1Rlc3QgY2FwdGlvbiA8Yj4jMjwvYj4nIH0sXHJcbiAgICAgIHsgdGh1bWI6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzkwLzExMCcsIHBheWxvYWQ6IHsgdGh1bWJpbmRleDogMiB9LCBjYXB0aW9uOiAnVGVzdCBjYXB0aW9uIDxiPiMzPC9iPicgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBpbml0aWFsRGVzY3JpcHRpb24gPSBkYXRhLmltYWdlc1tkYXRhLmluaXRpYWxdLmNhcHRpb247XHJcbiAgICBpZiAoaW5pdGlhbERlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGF0YS5kZXNjcmlwdGlvbiA9IGluaXRpYWxEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEZXNjcmlwdGlvbigpIHtcclxuICAgIHRoaXMub3V0cHV0LmlzVmlzaWJsZS5kZXNjcmlwdGlvbiA9ICF0aGlzLm91dHB1dC5pc1Zpc2libGUuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlVGh1bWJzKCkge1xyXG4gICAgdGhpcy5vdXRwdXQuaXNWaXNpYmxlLnRodW1ibmFpbHMgPSAhdGhpcy5vdXRwdXQuaXNWaXNpYmxlLnRodW1ibmFpbHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlVGh1bWJzKGluZGV4KSB7XHJcbiAgICB0aGlzLm91dHB1dC5pbml0aWFsID0gaW5kZXg7XHJcbiAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlUGFnZUNoYW5nZShwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmhhbmRsZVRodW1icyhwYXlsb2FkLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZURlc2NyaXB0aW9uKCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm91dHB1dC5pbml0aWFsO1xyXG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMub3V0cHV0O1xyXG4gICAgdGhpcy5vdXRwdXQuZGVzY3JpcHRpb24gPSBpbWFnZXNbaW5kZXhdLmNhcHRpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==