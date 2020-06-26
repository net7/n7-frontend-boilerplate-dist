import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrInnerTitleDS = /** @class */ (function (_super) {
    __extends(MrInnerTitleDS, _super);
    function MrInnerTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrInnerTitleDS.prototype.transform = function (data) {
        var title = data.title, subtitle = data.subtitle, button = data.button;
        return {
            title: {
                main: {
                    text: title,
                    classes: 'bold'
                },
                secondary: {
                    text: subtitle,
                    classes: 'italic'
                }
            },
            actions: button ? {
                buttons: [
                    {
                        anchor: {
                            href: button.link,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9pbm5lci10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQW9DLGtDQUFVO0lBQTlDOztJQTJCQSxDQUFDO0lBMUJXLGtDQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDbkIsSUFBQSxrQkFBSyxFQUFFLHdCQUFRLEVBQUUsb0JBQU0sQ0FBVTtRQUN6QyxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSztvQkFDWCxPQUFPLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjthQUNGO1lBQ0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3lCQUNsQjt3QkFDRCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7d0JBQ2pCLE9BQU8sRUFBRSxZQUFZO3FCQUN0QjtpQkFDRjthQUNGLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUFvQyxVQUFVLEdBMkI3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNcklubmVyVGl0bGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyB0aXRsZSwgc3VidGl0bGUsIGJ1dHRvbiB9ID0gZGF0YTtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJ1xuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICB0ZXh0OiBzdWJ0aXRsZSxcbiAgICAgICAgICBjbGFzc2VzOiAnaXRhbGljJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWN0aW9uczogYnV0dG9uID8ge1xuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgIGhyZWY6IGJ1dHRvbi5saW5rLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHQ6IGJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgY2xhc3NlczogJ243LWJ0bi1jdGEnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9IDogbnVsbFxuICAgIH07XG4gIH1cbn1cbiJdfQ==