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
            header: {
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
            },
            items: items.map(function (item) {
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
                return __assign(__assign({}, item), { anchor: {
                        href: linksHelper.getRouterLink(item.link),
                        queryParams: linksHelper.getQueryParams(item.link)
                    }, classes: classes || '' });
            })
        };
    };
    return MrCollectionDS;
}(DataSource));
export { MrCollectionDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixDQUFDO0FBRWxELElBQU0scUJBQXFCLEdBQUc7SUFDNUIsS0FBSyxFQUFFLEdBQUc7SUFDVixTQUFTLEVBQUUsSUFBSTtDQUNoQixDQUFDO0FBZ0JGO0lBQW9DLGtDQUFVO0lBQTlDOztJQWdFQSxDQUFDO0lBN0RXLGtDQUFTLEdBQW5CLFVBQW9CLElBQXdCO1FBQzFDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFFaEMsSUFBQSxvQkFBTSxFQUFFLGtCQUFLLENBQVU7UUFFL0IsY0FBYztRQUNkLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVLLElBQUEsaUJBQXVDLEVBQXJDLG9CQUFPLEVBQUUsNEJBQTRCLENBQUM7UUFDOUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNuQixJQUFBLGtCQUE4QixFQUE1QixjQUFJLEVBQUUsY0FBc0IsQ0FBQztZQUNyQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ2YsSUFBSSxNQUFBO29CQUNKLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7d0JBQ3JDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztxQkFDOUM7aUJBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPO1lBQ0wsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUU7d0JBQ0osSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLO3dCQUNsQixPQUFPLEVBQUUsTUFBTTtxQkFDaEI7b0JBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7cUJBQ3RCLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQ1Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDdkI7YUFDRjtZQUNELEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTtnQkFDcEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLDJDQUEyQztvQkFDM0MsSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzFDO29CQUNELG9EQUFvRDtvQkFDcEQsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDN0UsSUFBSSxDQUFDLElBQUksR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFFBQUssQ0FBQztxQkFDdEU7aUJBQ0Y7Z0JBQ0QsNkJBQ0ssSUFBSSxLQUNQLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUMxQyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNuRCxFQUNELE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRSxJQUN0QjtZQUNKLENBQUMsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBaEVELENBQW9DLFVBQVUsR0FnRTdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XHJcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XHJcblxyXG5jb25zdCBJVEVNX1BSRVZJRVdfREVGQVVMVFMgPSB7XHJcbiAgbGltaXQ6IDEwMCxcclxuICBzdHJpcHRhZ3M6IHRydWVcclxufTtcclxuXHJcbnR5cGUgY29sbGVjdGlvblJlc3BvbnNlID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBzdWJ0aXRsZT86IHN0cmluZztcclxuICAgIGJ1dHRvbj86IGFueTtcclxuICB9O1xyXG4gIGl0ZW1zOiB7XHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgbGluaz86IHN0cmluZztcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICB9W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNckNvbGxlY3Rpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogY29sbGVjdGlvblJlc3BvbnNlKTogYW55IHtcclxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgICBjb25zdCB7IGhlYWRlciwgaXRlbXMgfSA9IGRhdGE7XHJcblxyXG4gICAgLy8gaXRlbXMgY2hlY2tcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiAhaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgY2xhc3NlcywgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IGl0ZW1QcmV2aWV3T3B0aW9ucyA9IG1lcmdlKElURU1fUFJFVklFV19ERUZBVUxUUywgKGl0ZW1QcmV2aWV3IHx8IHt9KSk7XHJcblxyXG4gICAgaWYgKChoZWFkZXIgfHwge30pLmJ1dHRvbikge1xyXG4gICAgICBjb25zdCB7IGxpbmssIHRleHQgfSA9IGhlYWRlci5idXR0b247XHJcbiAgICAgIGhlYWRlci5idXR0b24gPSBbe1xyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGxpbmspLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGxpbmspXHJcbiAgICAgICAgfVxyXG4gICAgICB9XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgbWFpbjoge1xyXG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIudGl0bGUsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlY29uZGFyeTogaGVhZGVyLnN1YnRpdGxlID8ge1xyXG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIuc3VidGl0bGUsXHJcbiAgICAgICAgICB9IDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgICAgYnV0dG9uczogaGVhZGVyLmJ1dHRvblxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnRleHQpIHtcclxuICAgICAgICAgIC8vIFNhbml0aXplIEhUTUwgdGFncyBmcm9tIHRoZSB0ZXh0IGNvbnRlbnRcclxuICAgICAgICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMuc3RyaXB0YWdzKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBMaW1pdCB0aGUgbGVuZ3RoIG9mIHRoZSBpdGVtIHByZXZpZXcgdGV4dCBjb250ZW50XHJcbiAgICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0ICYmIChpdGVtLnRleHQubGVuZ3RoID4gaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KSkge1xyXG4gICAgICAgICAgICBpdGVtLnRleHQgPSBgJHtpdGVtLnRleHQuc3Vic3RyaW5nKDAsIGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCl9Li4uYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhpdGVtLmxpbmspLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaXRlbS5saW5rKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNsYXNzZXM6IGNsYXNzZXMgfHwgJydcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19