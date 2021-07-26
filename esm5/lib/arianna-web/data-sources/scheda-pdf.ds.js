import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import { merge } from 'lodash';
var DEFAULT_OPTIONS = {
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
var AwSchedaPdfDS = /** @class */ (function (_super) {
    __extends(AwSchedaPdfDS, _super);
    function AwSchedaPdfDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwSchedaPdfDS.prototype.transform = function (data) {
        var items = data.items;
        var libOptions = merge(DEFAULT_OPTIONS, this.options.libOptions || {});
        if (!(Array.isArray(items) && items.length)) {
            return null;
        }
        this.items = items.map(function (item, index) { return (__assign(__assign({}, item), { selected: index === 0 })); });
        console.log('libOptions----------------------------->', libOptions);
        // defaults
        return {
            libOptions: libOptions,
            items: this.items,
            next: 1,
            prev: null,
            currentUrl: items[0].url,
        };
    };
    AwSchedaPdfDS.prototype.onChange = function (index) {
        this.output.next = index < (this.items.length - 1) ? index + 1 : null;
        this.output.prev = index > 0 ? index - 1 : null;
        this.output.currentUrl = this.items[index].url;
        this.items.forEach(function (item, itemIndex) {
            item.selected = itemIndex === index;
        });
    };
    AwSchedaPdfDS.prototype.onLoaded = function () {
        this.output.classes = 'is-loaded';
    };
    return AwSchedaPdfDS;
}(DataSource));
export { AwSchedaPdfDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLXBkZi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvc2NoZWRhLXBkZi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHL0IsSUFBTSxlQUFlLEdBQUc7SUFDdEIsV0FBVyxFQUFFLElBQUk7SUFDakIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixjQUFjLEVBQUUsSUFBSTtJQUNwQixpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLDBCQUEwQixFQUFFLElBQUk7SUFDaEMsa0JBQWtCLEVBQUUsS0FBSztJQUN6QixlQUFlLEVBQUUsS0FBSztJQUN0QixrQkFBa0IsRUFBRSxLQUFLO0lBQ3pCLGtCQUFrQixFQUFFLEtBQUs7SUFDekIsMEJBQTBCLEVBQUUsSUFBSTtJQUNoQyxnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLG9CQUFvQixFQUFFLEtBQUs7Q0FDNUIsQ0FBQztBQUVGO0lBQW1DLGlDQUFVO0lBQTdDOztJQThDQSxDQUFDO0lBdkNXLGlDQUFTLEdBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLGtCQUFLLENBQVU7UUFDdkIsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUN0QixlQUFlLEVBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUM5QixDQUFDO1FBQ0YsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0MsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSx1QkFDbkMsSUFBSSxLQUNQLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQyxJQUNyQixFQUhzQyxDQUd0QyxDQUFDLENBQUM7UUFFSixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXBFLFdBQVc7UUFDWCxPQUFPO1lBQ0wsVUFBVSxZQUFBO1lBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7U0FDekIsQ0FBQztJQUNKLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLFNBQVM7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEtBQUssS0FBSyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7SUFDcEMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTlDRCxDQUFtQyxVQUFVLEdBOEM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUGRmVmlld2VyRGF0YSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xyXG4gIHNob3dUb29sYmFyOiB0cnVlLFxyXG4gIHNob3dTaWRlYmFyQnV0dG9uOiB0cnVlLFxyXG4gIHNob3dGaW5kQnV0dG9uOiB0cnVlLFxyXG4gIHNob3dQYWdpbmdCdXR0b25zOiB0cnVlLFxyXG4gIHNob3dab29tQnV0dG9uczogdHJ1ZSxcclxuICBzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbjogdHJ1ZSxcclxuICBzaG93T3BlbkZpbGVCdXR0b246IGZhbHNlLFxyXG4gIHNob3dQcmludEJ1dHRvbjogZmFsc2UsXHJcbiAgc2hvd0Rvd25sb2FkQnV0dG9uOiBmYWxzZSxcclxuICBzaG93Qm9va21hcmtCdXR0b246IGZhbHNlLFxyXG4gIHNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uOiB0cnVlLFxyXG4gIHNob3dSb3RhdGVCdXR0b246IGZhbHNlLFxyXG4gIHNob3dIYW5kVG9vbEJ1dHRvbjogdHJ1ZSxcclxuICBzaG93U2Nyb2xsaW5nQnV0dG9uOiBmYWxzZSxcclxuICBzaG93U3ByZWFkQnV0dG9uOiBmYWxzZSxcclxuICBzaG93UHJvcGVydGllc0J1dHRvbjogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYVBkZkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBpdGVtczoge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgfVtdO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBQZGZWaWV3ZXJEYXRhIHtcclxuICAgIGNvbnN0IHsgaXRlbXMgfSA9IGRhdGE7XHJcbiAgICBjb25zdCBsaWJPcHRpb25zID0gbWVyZ2UoXHJcbiAgICAgIERFRkFVTFRfT1BUSU9OUyxcclxuICAgICAgdGhpcy5vcHRpb25zLmxpYk9wdGlvbnMgfHwge31cclxuICAgICk7XHJcbiAgICBpZiAoIShBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGgpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xyXG4gICAgICAuLi5pdGVtLFxyXG4gICAgICBzZWxlY3RlZDogaW5kZXggPT09IDBcclxuICAgIH0pKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnbGliT3B0aW9ucy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPicsIGxpYk9wdGlvbnMpO1xyXG5cclxuICAgIC8vIGRlZmF1bHRzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsaWJPcHRpb25zLFxyXG4gICAgICBpdGVtczogdGhpcy5pdGVtcyxcclxuICAgICAgbmV4dDogMSxcclxuICAgICAgcHJldjogbnVsbCxcclxuICAgICAgY3VycmVudFVybDogaXRlbXNbMF0udXJsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGluZGV4KSB7XHJcbiAgICB0aGlzLm91dHB1dC5uZXh0ID0gaW5kZXggPCAodGhpcy5pdGVtcy5sZW5ndGggLSAxKSA/IGluZGV4ICsgMSA6IG51bGw7XHJcbiAgICB0aGlzLm91dHB1dC5wcmV2ID0gaW5kZXggPiAwID8gaW5kZXggLSAxIDogbnVsbDtcclxuICAgIHRoaXMub3V0cHV0LmN1cnJlbnRVcmwgPSB0aGlzLml0ZW1zW2luZGV4XS51cmw7XHJcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xyXG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbUluZGV4ID09PSBpbmRleDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkZWQoKSB7XHJcbiAgICB0aGlzLm91dHB1dC5jbGFzc2VzID0gJ2lzLWxvYWRlZCc7XHJcbiAgfVxyXG59XHJcbiJdfQ==