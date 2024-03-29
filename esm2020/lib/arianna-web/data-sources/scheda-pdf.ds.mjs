import { DataSource } from '@n7-frontend/core';
import { merge } from 'lodash';
const DEFAULT_OPTIONS = {
    showToolbar: true,
    showSidebarButton: true,
    showFindButton: true,
    showPagingButtons: true,
    showZoomButtons: true,
    showPresentationModeButton: true,
    showOpenFileButton: false,
    showPrintButton: false,
    showDownloadButton: false,
    showBookmarkButton: false,
    showSecondaryToolbarButton: true,
    showRotateButton: false,
    showHandToolButton: true,
    showScrollingButton: false,
    showSpreadButton: false,
    showPropertiesButton: false
};
export class AwSchedaPdfDS extends DataSource {
    transform(data) {
        const { items } = data;
        const libOptions = merge(DEFAULT_OPTIONS, this.options.libOptions || {});
        if (!(Array.isArray(items) && items.length)) {
            return null;
        }
        this.items = items.map((item, index) => ({
            ...item,
            selected: index === 0
        }));
        console.log('libOptions----------------------------->', libOptions);
        // defaults
        return {
            libOptions,
            items: this.items,
            next: 1,
            prev: null,
            currentUrl: items[0].url,
        };
    }
    onChange(index) {
        this.output.next = index < (this.items.length - 1) ? index + 1 : null;
        this.output.prev = index > 0 ? index - 1 : null;
        this.output.currentUrl = this.items[index].url;
        this.items.forEach((item, itemIndex) => {
            item.selected = itemIndex === index;
        });
    }
    onLoaded() {
        this.output.classes = 'is-loaded';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLXBkZi5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtcGRmLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRy9CLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsY0FBYyxFQUFFLElBQUk7SUFDcEIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixlQUFlLEVBQUUsSUFBSTtJQUNyQiwwQkFBMEIsRUFBRSxJQUFJO0lBQ2hDLGtCQUFrQixFQUFFLEtBQUs7SUFDekIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsa0JBQWtCLEVBQUUsS0FBSztJQUN6QixrQkFBa0IsRUFBRSxLQUFLO0lBQ3pCLDBCQUEwQixFQUFFLElBQUk7SUFDaEMsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixvQkFBb0IsRUFBRSxLQUFLO0NBQzVCLENBQUM7QUFFRixNQUFNLE9BQU8sYUFBYyxTQUFRLFVBQVU7SUFPakMsU0FBUyxDQUFDLElBQUk7UUFDdEIsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztRQUN2QixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQ3RCLGVBQWUsRUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQzlCLENBQUM7UUFDRixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN2QyxHQUFHLElBQUk7WUFDUCxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUM7U0FDdEIsQ0FBQyxDQUFDLENBQUM7UUFFSixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXBFLFdBQVc7UUFDWCxPQUFPO1lBQ0wsVUFBVTtZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1NBQ3pCLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsS0FBSyxLQUFLLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFBkZlZpZXdlckRhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtcclxuICBzaG93VG9vbGJhcjogdHJ1ZSxcclxuICBzaG93U2lkZWJhckJ1dHRvbjogdHJ1ZSxcclxuICBzaG93RmluZEJ1dHRvbjogdHJ1ZSxcclxuICBzaG93UGFnaW5nQnV0dG9uczogdHJ1ZSxcclxuICBzaG93Wm9vbUJ1dHRvbnM6IHRydWUsXHJcbiAgc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b246IHRydWUsXHJcbiAgc2hvd09wZW5GaWxlQnV0dG9uOiBmYWxzZSxcclxuICBzaG93UHJpbnRCdXR0b246IGZhbHNlLFxyXG4gIHNob3dEb3dubG9hZEJ1dHRvbjogZmFsc2UsXHJcbiAgc2hvd0Jvb2ttYXJrQnV0dG9uOiBmYWxzZSxcclxuICBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjogdHJ1ZSxcclxuICBzaG93Um90YXRlQnV0dG9uOiBmYWxzZSxcclxuICBzaG93SGFuZFRvb2xCdXR0b246IHRydWUsXHJcbiAgc2hvd1Njcm9sbGluZ0J1dHRvbjogZmFsc2UsXHJcbiAgc2hvd1NwcmVhZEJ1dHRvbjogZmFsc2UsXHJcbiAgc2hvd1Byb3BlcnRpZXNCdXR0b246IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFQZGZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgaXRlbXM6IHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gIH1bXTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogUGRmVmlld2VyRGF0YSB7XHJcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgbGliT3B0aW9ucyA9IG1lcmdlKFxyXG4gICAgICBERUZBVUxUX09QVElPTlMsXHJcbiAgICAgIHRoaXMub3B0aW9ucy5saWJPcHRpb25zIHx8IHt9XHJcbiAgICApO1xyXG4gICAgaWYgKCEoQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLml0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKHtcclxuICAgICAgLi4uaXRlbSxcclxuICAgICAgc2VsZWN0ZWQ6IGluZGV4ID09PSAwXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2xpYk9wdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT4nLCBsaWJPcHRpb25zKTtcclxuXHJcbiAgICAvLyBkZWZhdWx0c1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbGliT3B0aW9ucyxcclxuICAgICAgaXRlbXM6IHRoaXMuaXRlbXMsXHJcbiAgICAgIG5leHQ6IDEsXHJcbiAgICAgIHByZXY6IG51bGwsXHJcbiAgICAgIGN1cnJlbnRVcmw6IGl0ZW1zWzBdLnVybCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShpbmRleCkge1xyXG4gICAgdGhpcy5vdXRwdXQubmV4dCA9IGluZGV4IDwgKHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkgPyBpbmRleCArIDEgOiBudWxsO1xyXG4gICAgdGhpcy5vdXRwdXQucHJldiA9IGluZGV4ID4gMCA/IGluZGV4IC0gMSA6IG51bGw7XHJcbiAgICB0aGlzLm91dHB1dC5jdXJyZW50VXJsID0gdGhpcy5pdGVtc1tpbmRleF0udXJsO1xyXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcclxuICAgICAgaXRlbS5zZWxlY3RlZCA9IGl0ZW1JbmRleCA9PT0gaW5kZXg7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTG9hZGVkKCkge1xyXG4gICAgdGhpcy5vdXRwdXQuY2xhc3NlcyA9ICdpcy1sb2FkZWQnO1xyXG4gIH1cclxufVxyXG4iXX0=