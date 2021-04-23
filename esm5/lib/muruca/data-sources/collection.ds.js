import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import { merge } from 'lodash';
import helpers from '../../common/helpers';
import linksHelper from '../helpers/links-helper';
var ITEM_PREVIEW_DEFAULTS = {
    limit: 100,
    striptags: true
};
var MrCollectionDS = /** @class */ (function (_super) {
    __extends(MrCollectionDS, _super);
    function MrCollectionDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrCollectionDS.prototype.transform = function (data) {
        if (data === undefined) {
            return null;
        }
        var header = data.header, items = data.items;
        // items check
        if (Array.isArray(items) && !items.length) {
            return null;
        }
        var _a = this.options, classes = _a.classes, itemPreview = _a.itemPreview;
        var itemPreviewOptions = merge(ITEM_PREVIEW_DEFAULTS, (itemPreview || {}));
        if ((header || {}).button) {
            var _b = header.button, link = _b.link, text = _b.text;
            header.button = [{
                    text: text,
                    anchor: {
                        href: linksHelper.getRouterLink(link),
                        queryParams: linksHelper.getQueryParams(link)
                    }
                }];
        }
        return {
            header: header ? {
                title: {
                    main: {
                        text: header.title,
                        classes: 'bold'
                    },
                    secondary: header.subtitle ? {
                        text: header.subtitle,
                    } : null
                },
                actions: {
                    buttons: header.button
                }
            } : null,
            items: items.map(function (item) {
                var anchor = null;
                if (item.text) {
                    // Sanitize HTML tags from the text content
                    if (itemPreviewOptions.striptags) {
                        item.text = helpers.striptags(item.text);
                    }
                    // Limit the length of the item preview text content
                    if (itemPreviewOptions.limit && (item.text.length > itemPreviewOptions.limit)) {
                        item.text = item.text.substring(0, itemPreviewOptions.limit) + "...";
                    }
                }
                if (item.link) {
                    anchor = {
                        href: linksHelper.getRouterLink(item.link),
                        queryParams: linksHelper.getQueryParams(item.link)
                    };
                }
                if (item.payload) {
                    anchor = {
                        payload: __assign({}, item.payload)
                    };
                }
                return __assign(__assign({}, item), { anchor: anchor, classes: classes || '' });
            })
        };
    };
    return MrCollectionDS;
}(DataSource));
export { MrCollectionDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixDQUFDO0FBRWxELElBQU0scUJBQXFCLEdBQUc7SUFDNUIsS0FBSyxFQUFFLEdBQUc7SUFDVixTQUFTLEVBQUUsSUFBSTtDQUNoQixDQUFDO0FBaUJGO0lBQW9DLGtDQUFVO0lBQTlDOztJQTJFQSxDQUFDO0lBeEVXLGtDQUFTLEdBQW5CLFVBQW9CLElBQXdCO1FBQzFDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFFaEMsSUFBQSxvQkFBTSxFQUFFLGtCQUFLLENBQVU7UUFFL0IsY0FBYztRQUNkLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVLLElBQUEsaUJBQXVDLEVBQXJDLG9CQUFPLEVBQUUsNEJBQTRCLENBQUM7UUFDOUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNuQixJQUFBLGtCQUE4QixFQUE1QixjQUFJLEVBQUUsY0FBc0IsQ0FBQztZQUNyQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ2YsSUFBSSxNQUFBO29CQUNKLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7d0JBQ3JDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztxQkFDOUM7aUJBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPO1lBQ0wsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRTt3QkFDSixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUs7d0JBQ2xCLE9BQU8sRUFBRSxNQUFNO3FCQUNoQjtvQkFDRCxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtxQkFDdEIsQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDVDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2lCQUN2QjthQUNGLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7Z0JBQ3BCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLDJDQUEyQztvQkFDM0MsSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzFDO29CQUNELG9EQUFvRDtvQkFDcEQsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDN0UsSUFBSSxDQUFDLElBQUksR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFFBQUssQ0FBQztxQkFDdEU7aUJBQ0Y7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLE1BQU0sR0FBRzt3QkFDUCxJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUMxQyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNuRCxDQUFDO2lCQUNIO2dCQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsTUFBTSxHQUFHO3dCQUNQLE9BQU8sZUFDRixJQUFJLENBQUMsT0FBTyxDQUNoQjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELDZCQUNLLElBQUksS0FDUCxNQUFNLFFBQUEsRUFDTixPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsSUFDdEI7WUFDSixDQUFDLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTNFRCxDQUFvQyxVQUFVLEdBMkU3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xyXG5cclxuY29uc3QgSVRFTV9QUkVWSUVXX0RFRkFVTFRTID0ge1xyXG4gIGxpbWl0OiAxMDAsXHJcbiAgc3RyaXB0YWdzOiB0cnVlXHJcbn07XHJcblxyXG50eXBlIGNvbGxlY3Rpb25SZXNwb25zZSA9IHtcclxuICBoZWFkZXI6IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgc3VidGl0bGU/OiBzdHJpbmc7XHJcbiAgICBidXR0b24/OiBhbnk7XHJcbiAgfTtcclxuICBpdGVtczoge1xyXG4gICAgdGV4dD86IHN0cmluZztcclxuICAgIGxpbms/OiBzdHJpbmc7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gIH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yQ29sbGVjdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBjb2xsZWN0aW9uUmVzcG9uc2UpOiBhbnkge1xyXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICAgIGNvbnN0IHsgaGVhZGVyLCBpdGVtcyB9ID0gZGF0YTtcclxuXHJcbiAgICAvLyBpdGVtcyBjaGVja1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpICYmICFpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjbGFzc2VzLCBpdGVtUHJldmlldyB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgaXRlbVByZXZpZXdPcHRpb25zID0gbWVyZ2UoSVRFTV9QUkVWSUVXX0RFRkFVTFRTLCAoaXRlbVByZXZpZXcgfHwge30pKTtcclxuXHJcbiAgICBpZiAoKGhlYWRlciB8fCB7fSkuYnV0dG9uKSB7XHJcbiAgICAgIGNvbnN0IHsgbGluaywgdGV4dCB9ID0gaGVhZGVyLmJ1dHRvbjtcclxuICAgICAgaGVhZGVyLmJ1dHRvbiA9IFt7XHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsobGluayksXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMobGluaylcclxuICAgICAgICB9XHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlYWRlcjogaGVhZGVyID8ge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBtYWluOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IGhlYWRlci50aXRsZSxcclxuICAgICAgICAgICAgY2xhc3NlczogJ2JvbGQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2Vjb25kYXJ5OiBoZWFkZXIuc3VidGl0bGUgPyB7XHJcbiAgICAgICAgICAgIHRleHQ6IGhlYWRlci5zdWJ0aXRsZSxcclxuICAgICAgICAgIH0gOiBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICBidXR0b25zOiBoZWFkZXIuYnV0dG9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9IDogbnVsbCxcclxuICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBhbmNob3IgPSBudWxsO1xyXG4gICAgICAgIGlmIChpdGVtLnRleHQpIHtcclxuICAgICAgICAgIC8vIFNhbml0aXplIEhUTUwgdGFncyBmcm9tIHRoZSB0ZXh0IGNvbnRlbnRcclxuICAgICAgICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMuc3RyaXB0YWdzKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBMaW1pdCB0aGUgbGVuZ3RoIG9mIHRoZSBpdGVtIHByZXZpZXcgdGV4dCBjb250ZW50XHJcbiAgICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0ICYmIChpdGVtLnRleHQubGVuZ3RoID4gaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KSkge1xyXG4gICAgICAgICAgICBpdGVtLnRleHQgPSBgJHtpdGVtLnRleHQuc3Vic3RyaW5nKDAsIGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCl9Li4uYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0ubGluaykge1xyXG4gICAgICAgICAgYW5jaG9yID0ge1xyXG4gICAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhpdGVtLmxpbmspXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5wYXlsb2FkKSB7XHJcbiAgICAgICAgICBhbmNob3IgPSB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAuLi5pdGVtLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICBhbmNob3IsXHJcbiAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzIHx8ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==