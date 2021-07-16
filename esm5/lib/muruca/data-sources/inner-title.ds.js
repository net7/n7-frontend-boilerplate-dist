import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import linksHelper from '../helpers/links-helper';
var MrInnerTitleDS = /** @class */ (function (_super) {
    __extends(MrInnerTitleDS, _super);
    function MrInnerTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrInnerTitleDS.prototype.transform = function (data) {
        if (!data)
            return null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9pbm5lci10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sV0FBVyxNQUFNLHlCQUF5QixDQUFDO0FBRWxEO0lBQW9DLGtDQUFVO0lBQTlDOztJQTZCQSxDQUFDO0lBNUJXLGtDQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDM0IsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNmLElBQUEsa0JBQUssRUFBRSw4QkFBVyxFQUFFLG9CQUFNLENBQVU7UUFDNUMsT0FBTztZQUNMLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLEtBQUs7b0JBQ1gsT0FBTyxFQUFFLE1BQU07aUJBQ2hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxJQUFJLEVBQUUsV0FBVztvQkFDakIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsTUFBTSxFQUFFOzRCQUNOLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQzVDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ3JEO3dCQUNELElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTt3QkFDakIsT0FBTyxFQUFFLFlBQVk7cUJBQ3RCO2lCQUNGO2FBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUNULENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBN0JELENBQW9DLFVBQVUsR0E2QjdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBNcklubmVyVGl0bGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9uIH0gPSBkYXRhO1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgIHRleHQ6IGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGNsYXNzZXM6ICdpdGFsaWMnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhY3Rpb25zOiBidXR0b24gJiYgYnV0dG9uLmxpbmsgPyB7XG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhidXR0b24ubGluayksXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhidXR0b24ubGluaylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiBidXR0b24udGV4dCxcbiAgICAgICAgICAgIGNsYXNzZXM6ICduNy1idG4tY3RhJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSA6IG51bGxcbiAgICB9O1xuICB9XG59XG4iXX0=