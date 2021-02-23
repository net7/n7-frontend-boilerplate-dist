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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLXRvb2xzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL3NhbmRib3gvZGF0YS1zb3VyY2VzL2ltYWdlLXZpZXdlci10b29scy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXdCLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxVQUFVO0lBQ3hDLFNBQVM7UUFDakIsTUFBTSxJQUFJLEdBQUcsdUJBQXVCLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsS0FBSyxFQUFFLGdDQUFnQyxFQUFFLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUU7WUFDMUcsRUFBRSxLQUFLLEVBQUUsK0JBQStCLEVBQUUsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRTtZQUN6RyxFQUFFLEtBQUssRUFBRSwrQkFBK0IsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFO1NBQzFHLENBQUM7UUFDRixNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM3RCxJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLGtCQUFrQixDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUN6RSxDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFDdkUsQ0FBQztJQUVNLFlBQVksQ0FBQyxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsT0FBTztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0saUJBQWlCO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2xDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VWaWV3ZXJUb29sc0RhdGEsIElNQUdFX1ZJRVdFUl9UT09MU19NT0NLIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNiSW1hZ2VWaWV3ZXJUb29sc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKTogSW1hZ2VWaWV3ZXJUb29sc0RhdGEge1xuICAgIGNvbnN0IGRhdGEgPSBJTUFHRV9WSUVXRVJfVE9PTFNfTU9DSztcbiAgICBkYXRhLmltYWdlcyA9IFtcbiAgICAgIHsgdGh1bWI6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzIwMC8xMzAnLCBwYXlsb2FkOiB7IHRodW1iaW5kZXg6IDAgfSwgY2FwdGlvbjogJ1Rlc3QgY2FwdGlvbiA8Yj4jMTwvYj4nIH0sXG4gICAgICB7IHRodW1iOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS85MC8xODAnLCBwYXlsb2FkOiB7IHRodW1iaW5kZXg6IDEgfSwgY2FwdGlvbjogJ1Rlc3QgY2FwdGlvbiA8Yj4jMjwvYj4nIH0sXG4gICAgICB7IHRodW1iOiAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS85MC8xMTAnLCBwYXlsb2FkOiB7IHRodW1iaW5kZXg6IDIgfSwgY2FwdGlvbjogJ1Rlc3QgY2FwdGlvbiA8Yj4jMzwvYj4nIH0sXG4gICAgXTtcbiAgICBjb25zdCBpbml0aWFsRGVzY3JpcHRpb24gPSBkYXRhLmltYWdlc1tkYXRhLmluaXRpYWxdLmNhcHRpb247XG4gICAgaWYgKGluaXRpYWxEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkYXRhLmRlc2NyaXB0aW9uID0gaW5pdGlhbERlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURlc2NyaXB0aW9uKCkge1xuICAgIHRoaXMub3V0cHV0LmlzVmlzaWJsZS5kZXNjcmlwdGlvbiA9ICF0aGlzLm91dHB1dC5pc1Zpc2libGUuZGVzY3JpcHRpb247XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlVGh1bWJzKCkge1xuICAgIHRoaXMub3V0cHV0LmlzVmlzaWJsZS50aHVtYm5haWxzID0gIXRoaXMub3V0cHV0LmlzVmlzaWJsZS50aHVtYm5haWxzO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZVRodW1icyhpbmRleCkge1xuICAgIHRoaXMub3V0cHV0LmluaXRpYWwgPSBpbmRleDtcbiAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUGFnZUNoYW5nZShwYXlsb2FkKSB7XG4gICAgdGhpcy5oYW5kbGVUaHVtYnMocGF5bG9hZC5wYWdlKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVEZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3V0cHV0LmluaXRpYWw7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHRoaXMub3V0cHV0O1xuICAgIHRoaXMub3V0cHV0LmRlc2NyaXB0aW9uID0gaW1hZ2VzW2luZGV4XS5jYXB0aW9uO1xuICB9XG59XG4iXX0=