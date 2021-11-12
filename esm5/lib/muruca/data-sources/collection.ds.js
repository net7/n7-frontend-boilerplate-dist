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
        if (!data)
            return null;
        var header = data.header, items = data.items;
        // items check
        if (Array.isArray(items) && !items.length) {
            return null;
        }
        var _a = this.options, classes = _a.classes, itemPreview = _a.itemPreview, linkTarget = _a.linkTarget;
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
                        queryParams: linksHelper.getQueryParams(item.link),
                    };
                    if (linkTarget) {
                        anchor.target = linkTarget;
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixDQUFDO0FBRWxELElBQU0scUJBQXFCLEdBQUc7SUFDNUIsS0FBSyxFQUFFLEdBQUc7SUFDVixTQUFTLEVBQUUsSUFBSTtDQUNoQixDQUFDO0FBaUJGO0lBQW9DLGtDQUFVO0lBQTlDOztJQThFQSxDQUFDO0lBM0VXLGtDQUFTLEdBQW5CLFVBQW9CLElBQXdCO1FBQzFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFZixJQUFBLG9CQUFNLEVBQUUsa0JBQUssQ0FBVTtRQUUvQixjQUFjO1FBQ2QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUssSUFBQSxpQkFBbUQsRUFBakQsb0JBQU8sRUFBRSw0QkFBVyxFQUFFLDBCQUEyQixDQUFDO1FBQzFELElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsSUFBQSxrQkFBOEIsRUFBNUIsY0FBSSxFQUFFLGNBQXNCLENBQUM7WUFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNmLElBQUksTUFBQTtvQkFDSixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO3dCQUNyQyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7cUJBQzlDO2lCQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTztZQUNMLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUU7d0JBQ0osSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLO3dCQUNsQixPQUFPLEVBQUUsTUFBTTtxQkFDaEI7b0JBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7cUJBQ3RCLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQ1Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDdkI7YUFDRixDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ1IsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO2dCQUNwQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYiwyQ0FBMkM7b0JBQzNDLElBQUksa0JBQWtCLENBQUMsU0FBUyxFQUFFO3dCQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMxQztvQkFDRCxvREFBb0Q7b0JBQ3BELElBQUksa0JBQWtCLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQzdFLElBQUksQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxRQUFLLENBQUM7cUJBQ3RFO2lCQUNGO2dCQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYixNQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDMUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDbkQsQ0FBQztvQkFDRixJQUFJLFVBQVUsRUFBRTt3QkFDZCxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztxQkFDNUI7aUJBQ0Y7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixNQUFNLEdBQUc7d0JBQ1AsT0FBTyxlQUNGLElBQUksQ0FBQyxPQUFPLENBQ2hCO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsNkJBQ0ssSUFBSSxLQUNQLE1BQU0sUUFBQSxFQUNOLE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRSxJQUN0QjtZQUNKLENBQUMsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBOUVELENBQW9DLFVBQVUsR0E4RTdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XHJcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XHJcblxyXG5jb25zdCBJVEVNX1BSRVZJRVdfREVGQVVMVFMgPSB7XHJcbiAgbGltaXQ6IDEwMCxcclxuICBzdHJpcHRhZ3M6IHRydWVcclxufTtcclxuXHJcbnR5cGUgY29sbGVjdGlvblJlc3BvbnNlID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBzdWJ0aXRsZT86IHN0cmluZztcclxuICAgIGJ1dHRvbj86IGFueTtcclxuICB9O1xyXG4gIGl0ZW1zOiB7XHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgbGluaz86IHN0cmluZztcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgfVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXJDb2xsZWN0aW9uRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGNvbGxlY3Rpb25SZXNwb25zZSk6IGFueSB7XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHsgaGVhZGVyLCBpdGVtcyB9ID0gZGF0YTtcclxuXHJcbiAgICAvLyBpdGVtcyBjaGVja1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpICYmICFpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjbGFzc2VzLCBpdGVtUHJldmlldywgbGlua1RhcmdldCB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgaXRlbVByZXZpZXdPcHRpb25zID0gbWVyZ2UoSVRFTV9QUkVWSUVXX0RFRkFVTFRTLCAoaXRlbVByZXZpZXcgfHwge30pKTtcclxuXHJcbiAgICBpZiAoKGhlYWRlciB8fCB7fSkuYnV0dG9uKSB7XHJcbiAgICAgIGNvbnN0IHsgbGluaywgdGV4dCB9ID0gaGVhZGVyLmJ1dHRvbjtcclxuICAgICAgaGVhZGVyLmJ1dHRvbiA9IFt7XHJcbiAgICAgICAgdGV4dCxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsobGluayksXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMobGluaylcclxuICAgICAgICB9XHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlYWRlcjogaGVhZGVyID8ge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBtYWluOiB7XHJcbiAgICAgICAgICAgIHRleHQ6IGhlYWRlci50aXRsZSxcclxuICAgICAgICAgICAgY2xhc3NlczogJ2JvbGQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2Vjb25kYXJ5OiBoZWFkZXIuc3VidGl0bGUgPyB7XHJcbiAgICAgICAgICAgIHRleHQ6IGhlYWRlci5zdWJ0aXRsZSxcclxuICAgICAgICAgIH0gOiBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICBidXR0b25zOiBoZWFkZXIuYnV0dG9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9IDogbnVsbCxcclxuICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBhbmNob3IgPSBudWxsO1xyXG4gICAgICAgIGlmIChpdGVtLnRleHQpIHtcclxuICAgICAgICAgIC8vIFNhbml0aXplIEhUTUwgdGFncyBmcm9tIHRoZSB0ZXh0IGNvbnRlbnRcclxuICAgICAgICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMuc3RyaXB0YWdzKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBMaW1pdCB0aGUgbGVuZ3RoIG9mIHRoZSBpdGVtIHByZXZpZXcgdGV4dCBjb250ZW50XHJcbiAgICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0ICYmIChpdGVtLnRleHQubGVuZ3RoID4gaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KSkge1xyXG4gICAgICAgICAgICBpdGVtLnRleHQgPSBgJHtpdGVtLnRleHQuc3Vic3RyaW5nKDAsIGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCl9Li4uYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0ubGluaykge1xyXG4gICAgICAgICAgYW5jaG9yID0ge1xyXG4gICAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhpdGVtLmxpbmspLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmIChsaW5rVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGFuY2hvci50YXJnZXQgPSBsaW5rVGFyZ2V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5wYXlsb2FkKSB7XHJcbiAgICAgICAgICBhbmNob3IgPSB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAuLi5pdGVtLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICBhbmNob3IsXHJcbiAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzIHx8ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==