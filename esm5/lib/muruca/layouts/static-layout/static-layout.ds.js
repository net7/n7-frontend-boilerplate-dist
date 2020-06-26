import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var MrStaticLayoutDS = /** @class */ (function (_super) {
    __extends(MrStaticLayoutDS, _super);
    function MrStaticLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrStaticLayoutDS.prototype.onInit = function (payload) {
        this.communication = payload.communication;
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
    };
    /**
     * Make a request to serverless based on the url slug
     * Example:
     * - base-url/static/sample-page
     * - base-url/static/another-page
     */
    MrStaticLayoutDS.prototype.pageRequest$ = function (slug) {
        return this.communication.request$('wp-page', { urlParams: slug });
    };
    MrStaticLayoutDS.prototype.handleResponse = function (response) {
        var title = response.title, body = response.body;
        this.setHtml(title, body);
        this.updateHeadTitle(title);
    };
    MrStaticLayoutDS.prototype.setHtml = function (title, body) {
        this.html = {
            title: title,
            body: body,
        };
    };
    MrStaticLayoutDS.prototype.updateHeadTitle = function (pageTitle) {
        var appName = this.configuration.get('name');
        this.mainState.update('headTitle', [appName, pageTitle].join(' > '));
    };
    return MrStaticLayoutDS;
}(LayoutDataSource));
export { MrStaticLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTXJEO0lBQXNDLG9DQUFnQjtJQUF0RDs7SUEwQ0EsQ0FBQztJQWpDQyxpQ0FBTSxHQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHVDQUFZLEdBQVosVUFBYSxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxRQUFhO1FBQ2xCLElBQUEsc0JBQUssRUFBRSxvQkFBSSxDQUFjO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxLQUFLLEVBQUUsSUFBSTtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsS0FBSyxPQUFBO1lBQ0wsSUFBSSxNQUFBO1NBQ0wsQ0FBQztJQUNKLENBQUM7SUFFRCwwQ0FBZSxHQUFmLFVBQWdCLFNBQWlCO1FBQy9CLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBMUNELENBQXNDLGdCQUFnQixHQTBDckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBNclN0YXRpY0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcblxuICBwdWJsaWMgaHRtbDogYW55O1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSByZXF1ZXN0IHRvIHNlcnZlcmxlc3MgYmFzZWQgb24gdGhlIHVybCBzbHVnXG4gICAqIEV4YW1wbGU6XG4gICAqIC0gYmFzZS11cmwvc3RhdGljL3NhbXBsZS1wYWdlXG4gICAqIC0gYmFzZS11cmwvc3RhdGljL2Fub3RoZXItcGFnZVxuICAgKi9cbiAgcGFnZVJlcXVlc3QkKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnd3AtcGFnZScsIHsgdXJsUGFyYW1zOiBzbHVnIH0pO1xuICB9XG5cbiAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2U6IGFueSkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGJvZHkgfSA9IHJlc3BvbnNlO1xuICAgIHRoaXMuc2V0SHRtbCh0aXRsZSwgYm9keSk7XG4gICAgdGhpcy51cGRhdGVIZWFkVGl0bGUodGl0bGUpO1xuICB9XG5cbiAgc2V0SHRtbCh0aXRsZSwgYm9keSkge1xuICAgIHRoaXMuaHRtbCA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgYm9keSxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlSGVhZFRpdGxlKHBhZ2VUaXRsZTogc3RyaW5nKSB7XG4gICAgY29uc3QgYXBwTmFtZSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ25hbWUnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBwYWdlVGl0bGVdLmpvaW4oJyA+ICcpKTtcbiAgfVxufVxuIl19