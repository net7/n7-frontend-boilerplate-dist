/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var MrSearchLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchLayoutDS, _super);
    function MrSearchLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sectionState = {};
        _this.totalResultsText = null;
        return _this;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    MrSearchLayoutDS.prototype.onInit = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.configuration = payload.configuration;
        this.searchService = payload.searchService;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // config
        this.all().updateOptions({ config: this.pageConfig });
        // manual updates
        this.one('mr-search-page-title').update({});
    };
    /**
     * @param {?} response
     * @return {?}
     */
    MrSearchLayoutDS.prototype.handleResponse = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        this.some([
            'mr-search-results-title',
            'mr-search-results',
        ]).update(response);
        // pagination
        this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
        this.one('n7-smart-pagination').update(this.getPaginationParams(response));
    };
    /**
     * @param {?} state
     * @return {?}
     */
    MrSearchLayoutDS.prototype.updateActiveFilters = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        // active "tags" filters
        this.one('mr-search-tags').update({
            state: state,
            facetsConfig: this.searchService.getConfig().facets
        });
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    MrSearchLayoutDS.prototype.getPaginationParams = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var totalCount = response.totalCount, page = response.page;
        var paginationConfig = this.pageConfig.pagination;
        return {
            totalPages: Math.ceil(totalCount / page.limit),
            currentPage: page.current,
            pageLimit: paginationConfig.limit,
            sizes: {
                list: paginationConfig.options,
                active: page.limit,
            },
        };
    };
    /**
     * @param {?} id
     * @param {?} newState
     * @return {?}
     */
    MrSearchLayoutDS.prototype.setSectionState = /**
     * @param {?} id
     * @param {?} newState
     * @return {?}
     */
    function (id, newState) {
        this.sectionState[id] = newState;
    };
    return MrSearchLayoutDS;
}(LayoutDataSource));
export { MrSearchLayoutDS };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutDS.prototype.configId;
    /** @type {?} */
    MrSearchLayoutDS.prototype.searchService;
    /** @type {?} */
    MrSearchLayoutDS.prototype.sectionState;
    /** @type {?} */
    MrSearchLayoutDS.prototype.facetsConfig;
    /** @type {?} */
    MrSearchLayoutDS.prototype.pageConfig;
    /** @type {?} */
    MrSearchLayoutDS.prototype.totalResultsText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1yRDtJQUFzQyw0Q0FBZ0I7SUFBdEQ7UUFBQSxxRUFtRUM7UUE1RFEsa0JBQVksR0FFZixFQUFFLENBQUM7UUFNQSxzQkFBZ0IsR0FBa0IsSUFBSSxDQUFDOztJQW9EaEQsQ0FBQzs7Ozs7SUFsREMsaUNBQU07Ozs7SUFBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxTQUFTO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUV0RCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELHlDQUFjOzs7O0lBQWQsVUFBZSxRQUFRO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUix5QkFBeUI7WUFDekIsbUJBQW1CO1NBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEIsYUFBYTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRUQsOENBQW1COzs7O0lBQW5CLFVBQW9CLEtBQUs7UUFDdkIsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEMsS0FBSyxPQUFBO1lBQ0wsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTTtTQUNwRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyw4Q0FBbUI7Ozs7O0lBQTNCLFVBQTRCLFFBQVE7UUFDMUIsSUFBQSxnQ0FBVSxFQUFFLG9CQUFJO1FBQ2hCLElBQUEsNkNBQTRCO1FBRXBDLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDekIsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUs7WUFDakMsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO2dCQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDbkI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsMENBQWU7Ozs7O0lBQWYsVUFBZ0IsRUFBVSxFQUFFLFFBQXVCO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFuRUQsQ0FBc0MsZ0JBQWdCLEdBbUVyRDs7Ozs7OztJQWxFQyx5Q0FBNEM7Ozs7O0lBRTVDLG9DQUF5Qjs7SUFFekIseUNBQXNDOztJQUV0Qyx3Q0FFTzs7SUFFUCx3Q0FBb0I7O0lBRXBCLHNDQUFrQjs7SUFFbEIsNENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbnR5cGUgU2VjdGlvblN0YXRlcyA9ICdMT0FESU5HJyB8ICdFTVBUWScgfCAnT0snIHwgJ0tPJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgcHVibGljIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcblxuICBwdWJsaWMgc2VjdGlvblN0YXRlOiB7XG4gICAgW2tleTogc3RyaW5nXTogU2VjdGlvblN0YXRlcztcbiAgfSA9IHt9O1xuXG4gIHB1YmxpYyBmYWNldHNDb25maWc7XG5cbiAgcHVibGljIHBhZ2VDb25maWc7XG5cbiAgcHVibGljIHRvdGFsUmVzdWx0c1RleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IHBheWxvYWQuc2VhcmNoU2VydmljZTtcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuXG4gICAgLy8gY29uZmlnXG4gICAgdGhpcy5hbGwoKS51cGRhdGVPcHRpb25zKHsgY29uZmlnOiB0aGlzLnBhZ2VDb25maWcgfSk7XG5cbiAgICAvLyBtYW51YWwgdXBkYXRlc1xuICAgIHRoaXMub25lKCdtci1zZWFyY2gtcGFnZS10aXRsZScpLnVwZGF0ZSh7fSk7XG4gIH1cblxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIHRoaXMuc29tZShbXG4gICAgICAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUnLFxuICAgICAgJ21yLXNlYXJjaC1yZXN1bHRzJyxcbiAgICBdKS51cGRhdGUocmVzcG9uc2UpO1xuXG4gICAgLy8gcGFnaW5hdGlvblxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7IG1vZGU6ICdwYXlsb2FkJyB9KTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh0aGlzLmdldFBhZ2luYXRpb25QYXJhbXMocmVzcG9uc2UpKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZUZpbHRlcnMoc3RhdGUpIHtcbiAgICAvLyBhY3RpdmUgXCJ0YWdzXCIgZmlsdGVyc1xuICAgIHRoaXMub25lKCdtci1zZWFyY2gtdGFncycpLnVwZGF0ZSh7XG4gICAgICBzdGF0ZSxcbiAgICAgIGZhY2V0c0NvbmZpZzogdGhpcy5zZWFyY2hTZXJ2aWNlLmdldENvbmZpZygpLmZhY2V0c1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdpbmF0aW9uUGFyYW1zKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyB0b3RhbENvdW50LCBwYWdlIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCB7IHBhZ2luYXRpb246IHBhZ2luYXRpb25Db25maWcgfSA9IHRoaXMucGFnZUNvbmZpZztcblxuICAgIHJldHVybiB7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodG90YWxDb3VudCAvIHBhZ2UubGltaXQpLFxuICAgICAgY3VycmVudFBhZ2U6IHBhZ2UuY3VycmVudCxcbiAgICAgIHBhZ2VMaW1pdDogcGFnaW5hdGlvbkNvbmZpZy5saW1pdCxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIGxpc3Q6IHBhZ2luYXRpb25Db25maWcub3B0aW9ucyxcbiAgICAgICAgYWN0aXZlOiBwYWdlLmxpbWl0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc2V0U2VjdGlvblN0YXRlKGlkOiBzdHJpbmcsIG5ld1N0YXRlOiBTZWN0aW9uU3RhdGVzKSB7XG4gICAgdGhpcy5zZWN0aW9uU3RhdGVbaWRdID0gbmV3U3RhdGU7XG4gIH1cbn1cbiJdfQ==