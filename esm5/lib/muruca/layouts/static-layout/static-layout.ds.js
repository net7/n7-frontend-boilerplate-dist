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
    MrStaticLayoutDS.prototype.pageRequest$ = function (slug, onError) {
        return this.communication.request$('static', {
            onError: onError,
            urlParams: slug,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU16RDtJQUFzQyxvQ0FBZ0I7SUFBdEQ7UUFBQSxxRUE0Q0M7UUFqQ1EsZ0JBQVUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUU3QyxzQkFBZ0IsR0FBRyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7SUErQmxFLENBQUM7SUE3QkMsaUNBQU0sR0FBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLElBQVksRUFBRSxPQUEyQjtRQUNwRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUMzQyxPQUFPLFNBQUE7WUFDUCxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLFFBQWE7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLFFBQVE7UUFDTixJQUFBLDBCQUFPLEVBQUUsc0JBQUssQ0FBYztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCwwQ0FBZSxHQUFmLFVBQWdCLFNBQWlCO1FBQy9CLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBNUNELENBQXNDLGdCQUFnQixHQTRDckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpblN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9tYWluLXN0YXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJTdGF0aWNMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBtYWluU3RhdGU6IE1haW5TdGF0ZVNlcnZpY2U7XG5cbiAgcHVibGljIGNvbnRlbnQ6IHN0cmluZyB8IG51bGw7XG5cbiAgcHVibGljIHRpdGxlOiBzdHJpbmcgfCBudWxsO1xuXG4gIHB1YmxpYyBlcnJvclRpdGxlID0gX3QoJ2dsb2JhbCNsYXlvdXRfZXJyb3JfdGl0bGUnKTtcblxuICBwdWJsaWMgZXJyb3JEZXNjcmlwdGlvbiA9IF90KCdnbG9iYWwjbGF5b3V0X2Vycm9yX2Rlc2NyaXB0aW9uJyk7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gcGF5bG9hZC5tYWluU3RhdGU7XG4gIH1cblxuICBwYWdlUmVxdWVzdCQoc2x1Zzogc3RyaW5nLCBvbkVycm9yOiAoZXJyOiBhbnkpID0+IHZvaWQpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3N0YXRpYycsIHtcbiAgICAgIG9uRXJyb3IsXG4gICAgICB1cmxQYXJhbXM6IHNsdWcsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZTogYW55KSB7XG4gICAgdGhpcy5zZXRIdG1sKHJlc3BvbnNlKTtcbiAgICB0aGlzLnVwZGF0ZUhlYWRUaXRsZShyZXNwb25zZS50aXRsZSk7XG4gIH1cblxuICBzZXRIdG1sKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBjb250ZW50LCB0aXRsZSB9ID0gcmVzcG9uc2U7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5vbmUoJ21yLXN0YXRpYy1tZXRhZGF0YScpLnVwZGF0ZShyZXNwb25zZSk7XG4gIH1cblxuICB1cGRhdGVIZWFkVGl0bGUocGFnZVRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBhcHBOYW1lID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbmFtZScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgW2FwcE5hbWUsIHBhZ2VUaXRsZV0uam9pbignID4gJykpO1xuICB9XG59XG4iXX0=