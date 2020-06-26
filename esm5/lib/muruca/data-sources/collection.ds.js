import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
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
            header.button = [{
                    text: header.button.text,
                    anchor: {
                        href: header.button.anchor
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
                    } : false,
                    actions: header.button ? {
                        buttons: [
                            {
                                text: header.button.text,
                                payload: header.button.link,
                                classes: 'n7-btn-cta'
                            }
                        ]
                    } : false
                },
                actions: {
                    buttons: header.button
                }
            },
            items: items.map(function (item) { return (__assign(__assign({}, item), { anchor: {
                    href: item.anchor
                }, classes: classes || '' })); })
        };
    };
    return MrCollectionDS;
}(DataSource));
export { MrCollectionDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUFvQyxrQ0FBVTtJQUE5Qzs7SUFtREEsQ0FBQztJQWhEVyxrQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQzNCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFFaEMsSUFBQSxvQkFBTSxFQUFFLGtCQUFLLENBQVU7UUFDdkIsSUFBQSw4QkFBTyxDQUFrQjtRQUVqQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ2YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTtvQkFDeEIsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU07cUJBQzNCO2lCQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTztZQUNMLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSzt3QkFDbEIsT0FBTyxFQUFFLE1BQU07cUJBQ2hCO29CQUNELFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO3FCQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLO29CQUNULE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsT0FBTyxFQUFFOzRCQUNQO2dDQUNFLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7Z0NBQ3hCLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUk7Z0NBQzNCLE9BQU8sRUFBRSxZQUFZOzZCQUN0Qjt5QkFDRjtxQkFDRixDQUFDLENBQUMsQ0FBQyxLQUFLO2lCQUNWO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3ZCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLHVCQUN0QixJQUFJLEtBQ1AsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDbEIsRUFDRCxPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsSUFDdEIsRUFOeUIsQ0FNekIsQ0FBQztTQUNKLENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBbkRELENBQW9DLFVBQVUsR0FtRDdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yQ29sbGVjdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgIGNvbnN0IHsgaGVhZGVyLCBpdGVtcyB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmICgoaGVhZGVyIHx8IHt9KS5idXR0b24pIHtcbiAgICAgIGhlYWRlci5idXR0b24gPSBbe1xuICAgICAgICB0ZXh0OiBoZWFkZXIuYnV0dG9uLnRleHQsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IGhlYWRlci5idXR0b24uYW5jaG9yXG4gICAgICAgIH1cbiAgICAgIH1dO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIudGl0bGUsXG4gICAgICAgICAgICBjbGFzc2VzOiAnYm9sZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlY29uZGFyeTogaGVhZGVyLnN1YnRpdGxlID8ge1xuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnN1YnRpdGxlLFxuICAgICAgICAgIH0gOiBmYWxzZSxcbiAgICAgICAgICBhY3Rpb25zOiBoZWFkZXIuYnV0dG9uID8ge1xuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogaGVhZGVyLmJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGhlYWRlci5idXR0b24ubGluayxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0gOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgYnV0dG9uczogaGVhZGVyLmJ1dHRvblxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogaXRlbS5hbmNob3JcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NlczogY2xhc3NlcyB8fCAnJ1xuICAgICAgfSkpXG4gICAgfTtcbiAgfVxufVxuIl19