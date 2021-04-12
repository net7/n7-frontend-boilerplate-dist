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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBQzNDLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixDQUFDO0FBRWxELElBQU0scUJBQXFCLEdBQUc7SUFDNUIsS0FBSyxFQUFFLEdBQUc7SUFDVixTQUFTLEVBQUUsSUFBSTtDQUNoQixDQUFDO0FBaUJGO0lBQW9DLGtDQUFVO0lBQTlDOztJQTJFQSxDQUFDO0lBeEVXLGtDQUFTLEdBQW5CLFVBQW9CLElBQXdCO1FBQzFDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFFaEMsSUFBQSxvQkFBTSxFQUFFLGtCQUFLLENBQVU7UUFFL0IsY0FBYztRQUNkLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVLLElBQUEsaUJBQXVDLEVBQXJDLG9CQUFPLEVBQUUsNEJBQTRCLENBQUM7UUFDOUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNuQixJQUFBLGtCQUE4QixFQUE1QixjQUFJLEVBQUUsY0FBc0IsQ0FBQztZQUNyQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ2YsSUFBSSxNQUFBO29CQUNKLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7d0JBQ3JDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztxQkFDOUM7aUJBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPO1lBQ0wsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUU7d0JBQ0osSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLO3dCQUNsQixPQUFPLEVBQUUsTUFBTTtxQkFDaEI7b0JBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7cUJBQ3RCLENBQUMsQ0FBQyxDQUFDLElBQUk7aUJBQ1Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDdkI7YUFDRjtZQUNELEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTtnQkFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsMkNBQTJDO29CQUMzQyxJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTt3QkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDMUM7b0JBQ0Qsb0RBQW9EO29CQUNwRCxJQUFJLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsUUFBSyxDQUFDO3FCQUN0RTtpQkFDRjtnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsTUFBTSxHQUFHO3dCQUNQLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQzFDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQ25ELENBQUM7aUJBQ0g7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixNQUFNLEdBQUc7d0JBQ1AsT0FBTyxlQUNGLElBQUksQ0FBQyxPQUFPLENBQ2hCO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsNkJBQ0ssSUFBSSxLQUNQLE1BQU0sUUFBQSxFQUNOLE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRSxJQUN0QjtZQUNKLENBQUMsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBM0VELENBQW9DLFVBQVUsR0EyRTdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XHJcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XHJcblxyXG5jb25zdCBJVEVNX1BSRVZJRVdfREVGQVVMVFMgPSB7XHJcbiAgbGltaXQ6IDEwMCxcclxuICBzdHJpcHRhZ3M6IHRydWVcclxufTtcclxuXHJcbnR5cGUgY29sbGVjdGlvblJlc3BvbnNlID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBzdWJ0aXRsZT86IHN0cmluZztcclxuICAgIGJ1dHRvbj86IGFueTtcclxuICB9O1xyXG4gIGl0ZW1zOiB7XHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgbGluaz86IHN0cmluZztcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICAgIHBheWxvYWQ/OiBhbnk7XHJcbiAgfVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXJDb2xsZWN0aW9uRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGNvbGxlY3Rpb25SZXNwb25zZSk6IGFueSB7XHJcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gICAgY29uc3QgeyBoZWFkZXIsIGl0ZW1zIH0gPSBkYXRhO1xyXG5cclxuICAgIC8vIGl0ZW1zIGNoZWNrXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykgJiYgIWl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGNsYXNzZXMsIGl0ZW1QcmV2aWV3IH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCBpdGVtUHJldmlld09wdGlvbnMgPSBtZXJnZShJVEVNX1BSRVZJRVdfREVGQVVMVFMsIChpdGVtUHJldmlldyB8fCB7fSkpO1xyXG5cclxuICAgIGlmICgoaGVhZGVyIHx8IHt9KS5idXR0b24pIHtcclxuICAgICAgY29uc3QgeyBsaW5rLCB0ZXh0IH0gPSBoZWFkZXIuYnV0dG9uO1xyXG4gICAgICBoZWFkZXIuYnV0dG9uID0gW3tcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhsaW5rKSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhsaW5rKVxyXG4gICAgICAgIH1cclxuICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIG1haW46IHtcclxuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnRpdGxlLFxyXG4gICAgICAgICAgICBjbGFzc2VzOiAnYm9sZCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWNvbmRhcnk6IGhlYWRlci5zdWJ0aXRsZSA/IHtcclxuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnN1YnRpdGxlLFxyXG4gICAgICAgICAgfSA6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHtcclxuICAgICAgICAgIGJ1dHRvbnM6IGhlYWRlci5idXR0b25cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBsZXQgYW5jaG9yID0gbnVsbDtcclxuICAgICAgICBpZiAoaXRlbS50ZXh0KSB7XHJcbiAgICAgICAgICAvLyBTYW5pdGl6ZSBIVE1MIHRhZ3MgZnJvbSB0aGUgdGV4dCBjb250ZW50XHJcbiAgICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLnN0cmlwdGFncykge1xyXG4gICAgICAgICAgICBpdGVtLnRleHQgPSBoZWxwZXJzLnN0cmlwdGFncyhpdGVtLnRleHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gTGltaXQgdGhlIGxlbmd0aCBvZiB0aGUgaXRlbSBwcmV2aWV3IHRleHQgY29udGVudFxyXG4gICAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoaXRlbS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcclxuICAgICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLmxpbmspIHtcclxuICAgICAgICAgIGFuY2hvciA9IHtcclxuICAgICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhpdGVtLmxpbmspLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaXRlbS5saW5rKVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0ucGF5bG9hZCkge1xyXG4gICAgICAgICAgYW5jaG9yID0ge1xyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgLi4uaXRlbS5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgYW5jaG9yLFxyXG4gICAgICAgICAgY2xhc3NlczogY2xhc3NlcyB8fCAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=