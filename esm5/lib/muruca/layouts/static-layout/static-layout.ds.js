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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU96RDtJQUFzQyxvQ0FBZ0I7SUFBdEQ7UUFBQSxxRUFpREM7UUF0Q1EsZ0JBQVUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7SUFvQ2xFLENBQUM7SUFsQ0MsaUNBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLFdBQXlCLEVBQUUsT0FBMkI7UUFDakUsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDekMsT0FBTyxTQUFBO2dCQUNQLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTthQUMvQixDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzdDLE9BQU8sU0FBQTtZQUNQLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLFFBQWE7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLFFBQVE7UUFDTixJQUFBLDBCQUFPLEVBQUUsc0JBQUssQ0FBYztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCwwQ0FBZSxHQUFmLFVBQWdCLFNBQWlCO1FBQy9CLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBakRELENBQXNDLGdCQUFnQixHQWlEckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBNclN0YXRpY0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcblxuICBwdWJsaWMgY29udGVudDogc3RyaW5nIHwgbnVsbDtcblxuICBwdWJsaWMgdGl0bGU6IHN0cmluZyB8IG51bGw7XG5cbiAgcHVibGljIGVycm9yVGl0bGUgPSBfdCgnZ2xvYmFsI2xheW91dF9lcnJvcl90aXRsZScpO1xuXG4gIHB1YmxpYyBlcnJvckRlc2NyaXB0aW9uID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfZGVzY3JpcHRpb24nKTtcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBwYXlsb2FkLm1haW5TdGF0ZTtcbiAgfVxuXG4gIHBhZ2VSZXF1ZXN0JCh1cmxTZWdtZW50czogVXJsU2VnbWVudFtdLCBvbkVycm9yOiAoZXJyOiBhbnkpID0+IHZvaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmICh1cmxTZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdwb3N0Jywge1xuICAgICAgICBvbkVycm9yLFxuICAgICAgICB1cmxQYXJhbXM6IHVybFNlZ21lbnRzWzFdLnBhdGgsXG4gICAgICB9KTtcbiAgICB9IHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3N0YXRpYycsIHtcbiAgICAgIG9uRXJyb3IsXG4gICAgICB1cmxQYXJhbXM6IHVybFNlZ21lbnRzWzBdLnBhdGgsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZTogYW55KSB7XG4gICAgdGhpcy5zZXRIdG1sKHJlc3BvbnNlKTtcbiAgICB0aGlzLnVwZGF0ZUhlYWRUaXRsZShyZXNwb25zZS50aXRsZSk7XG4gIH1cblxuICBzZXRIdG1sKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBjb250ZW50LCB0aXRsZSB9ID0gcmVzcG9uc2U7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5vbmUoJ21yLXN0YXRpYy1tZXRhZGF0YScpLnVwZGF0ZShyZXNwb25zZSk7XG4gIH1cblxuICB1cGRhdGVIZWFkVGl0bGUocGFnZVRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgW2FwcE5hbWUsIHBhZ2VUaXRsZV0uam9pbignID4gJykpO1xuICB9XG59XG4iXX0=