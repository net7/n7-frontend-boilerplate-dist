import { __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
var MrStaticLayoutDS = /** @class */ (function (_super) {
    __extends(MrStaticLayoutDS, _super);
    function MrStaticLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.errorTitle = _t('global#layout_error_title');
        _this.errorDescription = _t('global#layout_error_description');
        return _this;
    }
    MrStaticLayoutDS.prototype.onInit = function (payload) {
        this.communication = payload.communication;
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
    };
    MrStaticLayoutDS.prototype.pageRequest$ = function (urlSegments, onError) {
        if (urlSegments.length > 1) {
            return this.communication.request$('post', {
                onError: onError,
                urlParams: urlSegments[1].path,
            });
        }
        return this.communication.request$('static', {
            onError: onError,
            urlParams: urlSegments[0].path,
        });
    };
    MrStaticLayoutDS.prototype.handleResponse = function (response) {
        this.setHtml(response);
        this.updateHeadTitle(response.title);
    };
    MrStaticLayoutDS.prototype.setHtml = function (response) {
        var content = response.content, title = response.title;
        this.title = title;
        this.content = content;
        this.one('mr-static-metadata').update(response);
    };
    MrStaticLayoutDS.prototype.updateHeadTitle = function (pageTitle) {
        var appName = this.configuration.get('name');
        this.mainState.update('headTitle', [appName, pageTitle].join(' > '));
    };
    return MrStaticLayoutDS;
}(LayoutDataSource));
export { MrStaticLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU96RDtJQUFzQyxvQ0FBZ0I7SUFBdEQ7UUFBQSxxRUFpREM7UUF0Q1EsZ0JBQVUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7SUFvQ2xFLENBQUM7SUFsQ0MsaUNBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLFdBQXlCLEVBQUUsT0FBMkI7UUFDakUsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDekMsT0FBTyxTQUFBO2dCQUNQLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTthQUMvQixDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzdDLE9BQU8sU0FBQTtZQUNQLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLFFBQWE7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLFFBQVE7UUFDTixJQUFBLDBCQUFPLEVBQUUsc0JBQUssQ0FBYztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCwwQ0FBZSxHQUFmLFVBQWdCLFNBQWlCO1FBQy9CLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBakRELENBQXNDLGdCQUFnQixHQWlEckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yU3RhdGljTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcclxuXHJcbiAgcHVibGljIGNvbnRlbnQ6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgcHVibGljIGVycm9yVGl0bGUgPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl90aXRsZScpO1xyXG5cclxuICBwdWJsaWMgZXJyb3JEZXNjcmlwdGlvbiA9IF90KCdnbG9iYWwjbGF5b3V0X2Vycm9yX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gIG9uSW5pdChwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xyXG4gIH1cclxuXHJcbiAgcGFnZVJlcXVlc3QkKHVybFNlZ21lbnRzOiBVcmxTZWdtZW50W10sIG9uRXJyb3I6IChlcnI6IGFueSkgPT4gdm9pZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBpZiAodXJsU2VnbWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdwb3N0Jywge1xyXG4gICAgICAgIG9uRXJyb3IsXHJcbiAgICAgICAgdXJsUGFyYW1zOiB1cmxTZWdtZW50c1sxXS5wYXRoLFxyXG4gICAgICB9KTtcclxuICAgIH0gcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnc3RhdGljJywge1xyXG4gICAgICBvbkVycm9yLFxyXG4gICAgICB1cmxQYXJhbXM6IHVybFNlZ21lbnRzWzBdLnBhdGgsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0SHRtbChyZXNwb25zZSk7XHJcbiAgICB0aGlzLnVwZGF0ZUhlYWRUaXRsZShyZXNwb25zZS50aXRsZSk7XHJcbiAgfVxyXG5cclxuICBzZXRIdG1sKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCB7IGNvbnRlbnQsIHRpdGxlIH0gPSByZXNwb25zZTtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB0aGlzLm9uZSgnbXItc3RhdGljLW1ldGFkYXRhJykudXBkYXRlKHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUhlYWRUaXRsZShwYWdlVGl0bGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgYXBwTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ25hbWUnKTtcclxuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgW2FwcE5hbWUsIHBhZ2VUaXRsZV0uam9pbignID4gJykpO1xyXG4gIH1cclxufVxyXG4iXX0=