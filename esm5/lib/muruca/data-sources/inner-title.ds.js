import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import linksHelper from '../helpers/links-helper';
var MrInnerTitleDS = /** @class */ (function (_super) {
    __extends(MrInnerTitleDS, _super);
    function MrInnerTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrInnerTitleDS.prototype.transform = function (data) {
        var title = data.title, description = data.description, button = data.button;
        return {
            title: {
                main: {
                    text: title,
                    classes: 'bold'
                },
                secondary: {
                    text: description,
                    classes: 'italic'
                }
            },
            actions: button && button.link ? {
                buttons: [
                    {
                        anchor: {
                            href: linksHelper.getRouterLink(button.link),
                            queryParams: linksHelper.getQueryParams(button.link)
                        },
                        text: button.text,
                        classes: 'n7-btn-cta'
                    }
                ]
            } : null
        };
    };
    return MrInnerTitleDS;
}(DataSource));
export { MrInnerTitleDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9pbm5lci10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixDQUFDO0FBRWxEO0lBQW9DLGtDQUFVO0lBQTlDOztJQTRCQSxDQUFDO0lBM0JXLGtDQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDbkIsSUFBQSxrQkFBSyxFQUFFLDhCQUFXLEVBQUUsb0JBQU0sQ0FBVTtRQUM1QyxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSztvQkFDWCxPQUFPLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxXQUFXO29CQUNqQixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7YUFDRjtZQUNELE9BQU8sRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDNUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDckQ7d0JBQ0QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3dCQUNqQixPQUFPLEVBQUUsWUFBWTtxQkFDdEI7aUJBQ0Y7YUFDRixDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBb0MsVUFBVSxHQTRCN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW5uZXJUaXRsZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGJ1dHRvbiB9ID0gZGF0YTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgbWFpbjoge1xyXG4gICAgICAgICAgdGV4dDogdGl0bGUsXHJcbiAgICAgICAgICBjbGFzc2VzOiAnYm9sZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgICAgdGV4dDogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjbGFzc2VzOiAnaXRhbGljJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYWN0aW9uczogYnV0dG9uICYmIGJ1dHRvbi5saW5rID8ge1xyXG4gICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhidXR0b24ubGluayksXHJcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGJ1dHRvbi5saW5rKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcclxuICAgICAgICAgICAgY2xhc3NlczogJ243LWJ0bi1jdGEnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9IDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19