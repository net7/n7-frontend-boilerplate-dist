import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrInnerTitleDS = /** @class */ (function (_super) {
    __extends(MrInnerTitleDS, _super);
    function MrInnerTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            actions: {
                buttons: [
                    {
                        text: button.text,
                        payload: button.link,
                        classes: 'n7-btn-cta'
                    }
                ]
            }
        };
    };
    return MrInnerTitleDS;
}(DataSource));
export { MrInnerTitleDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9pbm5lci10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQW9DLGtDQUFVO0lBQTlDOztJQTBCQSxDQUFDO0lBekJDLDZEQUE2RDtJQUNuRCxrQ0FBUyxHQUFuQixVQUFvQixJQUFTO1FBQ25CLElBQUEsa0JBQUssRUFBRSx3QkFBUSxFQUFFLG9CQUFNLENBQVU7UUFDekMsT0FBTztZQUNMLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLEtBQUs7b0JBQ1gsT0FBTyxFQUFFLE1BQU07aUJBQ2hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxPQUFPLEVBQUUsUUFBUTtpQkFDbEI7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3dCQUNqQixPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUk7d0JBQ3BCLE9BQU8sRUFBRSxZQUFZO3FCQUN0QjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUExQkQsQ0FBb0MsVUFBVSxHQTBCN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJJbm5lclRpdGxlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyB0aXRsZSwgc3VidGl0bGUsIGJ1dHRvbiB9ID0gZGF0YTtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICAgIGNsYXNzZXM6ICdib2xkJ1xuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICB0ZXh0OiBzdWJ0aXRsZSxcbiAgICAgICAgICBjbGFzc2VzOiAnaXRhbGljJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYWN0aW9uczoge1xuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXG4gICAgICAgICAgICBwYXlsb2FkOiBidXR0b24ubGluayxcbiAgICAgICAgICAgIGNsYXNzZXM6ICduNy1idG4tY3RhJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==