import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import linksHelper from '../helpers/links-helper';
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
        var classes = this.options.classes;
        if ((header || {}).button) {
            var _a = header.button, link = _a.link, text = _a.text;
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
            items: items.map(function (item) { return (__assign(__assign({}, item), { anchor: {
                    href: linksHelper.getRouterLink(item.link),
                    queryParams: linksHelper.getQueryParams(item.link)
                }, classes: classes || '' })); })
        };
    };
    return MrCollectionDS;
}(DataSource));
export { MrCollectionDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQWVsRDtJQUFvQyxrQ0FBVTtJQUE5Qzs7SUE2Q0EsQ0FBQztJQTFDVyxrQ0FBUyxHQUFuQixVQUFvQixJQUF3QjtRQUMxQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBRWhDLElBQUEsb0JBQU0sRUFBRSxrQkFBSyxDQUFVO1FBQ3ZCLElBQUEsOEJBQU8sQ0FBa0I7UUFFakMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsSUFBQSxrQkFBOEIsRUFBNUIsY0FBSSxFQUFFLGNBQXNCLENBQUM7WUFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNmLElBQUksTUFBQTtvQkFDSixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO3dCQUNyQyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7cUJBQzlDO2lCQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTztZQUNMLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSzt3QkFDbEIsT0FBTyxFQUFFLE1BQU07cUJBQ2hCO29CQUNELFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO3FCQUN0QixDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUNUO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3ZCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLHVCQUN0QixJQUFJLEtBQ1AsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzFDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ25ELEVBQ0QsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFLElBQ3RCLEVBUHlCLENBT3pCLENBQUM7U0FDSixDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTdDRCxDQUFvQyxVQUFVLEdBNkM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xuXG50eXBlIGNvbGxlY3Rpb25SZXNwb25zZSA9IHtcbiAgaGVhZGVyOiB7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgc3VidGl0bGU/OiBzdHJpbmc7XG4gICAgYnV0dG9uPzogYW55O1xuICB9O1xuICBpdGVtczoge1xuICAgIGxpbms/OiBzdHJpbmc7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgfVtdO1xufVxuXG5leHBvcnQgY2xhc3MgTXJDb2xsZWN0aW9uRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGNvbGxlY3Rpb25SZXNwb25zZSk6IGFueSB7XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgY29uc3QgeyBoZWFkZXIsIGl0ZW1zIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKChoZWFkZXIgfHwge30pLmJ1dHRvbikge1xuICAgICAgY29uc3QgeyBsaW5rLCB0ZXh0IH0gPSBoZWFkZXIuYnV0dG9uO1xuICAgICAgaGVhZGVyLmJ1dHRvbiA9IFt7XG4gICAgICAgIHRleHQsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsobGluayksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGxpbmspXG4gICAgICAgIH1cbiAgICAgIH1dO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIudGl0bGUsXG4gICAgICAgICAgICBjbGFzc2VzOiAnYm9sZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlY29uZGFyeTogaGVhZGVyLnN1YnRpdGxlID8ge1xuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnN1YnRpdGxlLFxuICAgICAgICAgIH0gOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBidXR0b25zOiBoZWFkZXIuYnV0dG9uXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGl0ZW0ubGluaylcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NlczogY2xhc3NlcyB8fCAnJ1xuICAgICAgfSkpXG4gICAgfTtcbiAgfVxufVxuIl19