/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import homeMock from './home-layout-mock';
var MrHomeLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrHomeLayoutDS, _super);
    function MrHomeLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    MrHomeLayoutDS.prototype.onInit = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        this.doRequest();
    };
    /**
     * @return {?}
     */
    MrHomeLayoutDS.prototype.doRequest = /**
     * @return {?}
     */
    function () {
        var sections = this.pageConfig.sections;
        if (sections) {
            // FIXME: collegare API
            // this.communication.request$('sections', {
            //   method: 'POST',
            //   params: sections.map(({ id }) => id)
            // }).subscribe((response) => {
            //   this.initSections(response);
            // });
            this.initSections(homeMock);
        }
    };
    /**
     * @param {?} response
     * @return {?}
     */
    MrHomeLayoutDS.prototype.initSections = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        var sections = this.pageConfig.sections;
        if (sections) {
            sections.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var id = _a.id;
                /** @type {?} */
                var widgetDataSource = _this.getWidgetDataSource(id);
                /** @type {?} */
                var responseData = response[id];
                // set id
                widgetDataSource.id = id;
                // update data
                if (responseData) {
                    _this.one(id).update(responseData);
                }
            }));
        }
    };
    return MrHomeLayoutDS;
}(LayoutDataSource));
export { MrHomeLayoutDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutDS.prototype.configId;
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutDS.prototype.pageConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUc3RSxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUUxQztJQUFvQywwQ0FBZ0I7SUFBcEQ7O0lBa0RBLENBQUM7Ozs7O0lBekNDLCtCQUFNOzs7O0lBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsa0NBQVM7OztJQUFUO1FBQ1UsSUFBQSxtQ0FBUTtRQUVoQixJQUFJLFFBQVEsRUFBRTtZQUNaLHVCQUF1QjtZQUN2Qiw0Q0FBNEM7WUFDNUMsb0JBQW9CO1lBQ3BCLHlDQUF5QztZQUN6QywrQkFBK0I7WUFDL0IsaUNBQWlDO1lBQ2pDLE1BQU07WUFFTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQ0FBWTs7OztJQUFaLFVBQWEsUUFBUTtRQUFyQixpQkFlQztRQWRTLElBQUEsbUNBQVE7UUFFaEIsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsRUFBTTtvQkFBSixVQUFFOztvQkFDZCxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDOztvQkFDL0MsWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFNBQVM7Z0JBQ1QsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsY0FBYztnQkFDZCxJQUFJLFlBQVksRUFBRTtvQkFDaEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ25DO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFsREQsQ0FBb0MsZ0JBQWdCLEdBa0RuRDs7Ozs7OztJQWpEQyx1Q0FBNEM7Ozs7O0lBRTVDLHVDQUE0Qzs7Ozs7SUFFNUMsa0NBQXlCOzs7OztJQUV6QixvQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUvZGlzdC9sYXlvdXQtZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgaG9tZU1vY2sgZnJvbSAnLi9ob21lLWxheW91dC1tb2NrJztcblxuZXhwb3J0IGNsYXNzIE1ySG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBwYWdlQ29uZmlnO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpIHx8IHt9O1xuXG4gICAgdGhpcy5kb1JlcXVlc3QoKTtcbiAgfVxuXG4gIGRvUmVxdWVzdCgpIHtcbiAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLnBhZ2VDb25maWc7XG5cbiAgICBpZiAoc2VjdGlvbnMpIHtcbiAgICAgIC8vIEZJWE1FOiBjb2xsZWdhcmUgQVBJXG4gICAgICAvLyB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3NlY3Rpb25zJywge1xuICAgICAgLy8gICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIC8vICAgcGFyYW1zOiBzZWN0aW9ucy5tYXAoKHsgaWQgfSkgPT4gaWQpXG4gICAgICAvLyB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyAgIHRoaXMuaW5pdFNlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgIC8vIH0pO1xuXG4gICAgICB0aGlzLmluaXRTZWN0aW9ucyhob21lTW9jayk7XG4gICAgfVxuICB9XG5cbiAgaW5pdFNlY3Rpb25zKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBzZWN0aW9ucyB9ID0gdGhpcy5wYWdlQ29uZmlnO1xuXG4gICAgaWYgKHNlY3Rpb25zKSB7XG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgY29uc3Qgd2lkZ2V0RGF0YVNvdXJjZSA9IHRoaXMuZ2V0V2lkZ2V0RGF0YVNvdXJjZShpZCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlW2lkXTtcbiAgICAgICAgLy8gc2V0IGlkXG4gICAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpZDtcbiAgICAgICAgLy8gdXBkYXRlIGRhdGFcbiAgICAgICAgaWYgKHJlc3BvbnNlRGF0YSkge1xuICAgICAgICAgIHRoaXMub25lKGlkKS51cGRhdGUocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=