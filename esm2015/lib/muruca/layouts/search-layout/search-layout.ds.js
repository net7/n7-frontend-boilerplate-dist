/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
export class MrSearchLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.sectionState = {};
        this.totalResultsText = null;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onInit(payload) {
        this.configuration = payload.configuration;
        this.searchService = payload.searchService;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // config
        this.all().updateOptions({ config: this.pageConfig });
        // manual updates
        this.one('mr-search-page-title').update({});
    }
    /**
     * @param {?} response
     * @return {?}
     */
    handleResponse(response) {
        this.some([
            'mr-search-results-title',
            'mr-search-results',
        ]).update(response);
        // pagination
        this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
        this.one('n7-smart-pagination').update(this.getPaginationParams(response));
    }
    /**
     * @param {?} state
     * @param {?} linksResponse
     * @return {?}
     */
    updateActiveFilters(state, linksResponse) {
        // active "tags" filters
        this.one('mr-search-tags').update({
            state,
            linksResponse,
            facetsConfig: this.searchService.getConfig().facets
        });
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    getPaginationParams(response) {
        const { totalCount, page, limit } = response;
        const { pagination: paginationConfig } = this.pageConfig;
        return {
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
            pageLimit: paginationConfig.limit,
            sizes: {
                list: paginationConfig.options,
                active: limit,
            },
        };
    }
    /**
     * @param {?} id
     * @param {?} newState
     * @return {?}
     */
    setSectionState(id, newState) {
        this.sectionState[id] = newState;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTXJELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7SUFBdEQ7O1FBT1MsaUJBQVksR0FFZixFQUFFLENBQUM7UUFNQSxxQkFBZ0IsR0FBa0IsSUFBSSxDQUFDO0lBcURoRCxDQUFDOzs7OztJQW5EQyxNQUFNLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELFNBQVM7UUFDVCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBRXRELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFFBQVE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNSLHlCQUF5QjtZQUN6QixtQkFBbUI7U0FDcEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQixhQUFhO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsS0FBSyxFQUFFLGFBQWE7UUFDdEMsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEMsS0FBSztZQUNMLGFBQWE7WUFDYixZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNO1NBQ3BELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLFFBQVE7Y0FDNUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLFFBQVE7Y0FDdEMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVTtRQUV4RCxPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN6QyxXQUFXLEVBQUUsSUFBSTtZQUNqQixTQUFTLEVBQUUsZ0JBQWdCLENBQUMsS0FBSztZQUNqQyxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLGdCQUFnQixDQUFDLE9BQU87Z0JBQzlCLE1BQU0sRUFBRSxLQUFLO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEVBQVUsRUFBRSxRQUF1QjtRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7Ozs7OztJQW5FQyx5Q0FBNEM7Ozs7O0lBRTVDLG9DQUF5Qjs7SUFFekIseUNBQXNDOztJQUV0Qyx3Q0FFTzs7SUFFUCx3Q0FBb0I7O0lBRXBCLHNDQUFrQjs7SUFFbEIsNENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbnR5cGUgU2VjdGlvblN0YXRlcyA9ICdMT0FESU5HJyB8ICdFTVBUWScgfCAnT0snIHwgJ0tPJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgcHVibGljIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcblxuICBwdWJsaWMgc2VjdGlvblN0YXRlOiB7XG4gICAgW2tleTogc3RyaW5nXTogU2VjdGlvblN0YXRlcztcbiAgfSA9IHt9O1xuXG4gIHB1YmxpYyBmYWNldHNDb25maWc7XG5cbiAgcHVibGljIHBhZ2VDb25maWc7XG5cbiAgcHVibGljIHRvdGFsUmVzdWx0c1RleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IHBheWxvYWQuc2VhcmNoU2VydmljZTtcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuXG4gICAgLy8gY29uZmlnXG4gICAgdGhpcy5hbGwoKS51cGRhdGVPcHRpb25zKHsgY29uZmlnOiB0aGlzLnBhZ2VDb25maWcgfSk7XG5cbiAgICAvLyBtYW51YWwgdXBkYXRlc1xuICAgIHRoaXMub25lKCdtci1zZWFyY2gtcGFnZS10aXRsZScpLnVwZGF0ZSh7fSk7XG4gIH1cblxuICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIHRoaXMuc29tZShbXG4gICAgICAnbXItc2VhcmNoLXJlc3VsdHMtdGl0bGUnLFxuICAgICAgJ21yLXNlYXJjaC1yZXN1bHRzJyxcbiAgICBdKS51cGRhdGUocmVzcG9uc2UpO1xuXG4gICAgLy8gcGFnaW5hdGlvblxuICAgIHRoaXMub25lKCduNy1zbWFydC1wYWdpbmF0aW9uJykudXBkYXRlT3B0aW9ucyh7IG1vZGU6ICdwYXlsb2FkJyB9KTtcbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZSh0aGlzLmdldFBhZ2luYXRpb25QYXJhbXMocmVzcG9uc2UpKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZUZpbHRlcnMoc3RhdGUsIGxpbmtzUmVzcG9uc2UpIHtcbiAgICAvLyBhY3RpdmUgXCJ0YWdzXCIgZmlsdGVyc1xuICAgIHRoaXMub25lKCdtci1zZWFyY2gtdGFncycpLnVwZGF0ZSh7XG4gICAgICBzdGF0ZSxcbiAgICAgIGxpbmtzUmVzcG9uc2UsXG4gICAgICBmYWNldHNDb25maWc6IHRoaXMuc2VhcmNoU2VydmljZS5nZXRDb25maWcoKS5mYWNldHNcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFnaW5hdGlvblBhcmFtcyhyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgdG90YWxDb3VudCwgcGFnZSwgbGltaXQgfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogcGFnaW5hdGlvbkNvbmZpZyB9ID0gdGhpcy5wYWdlQ29uZmlnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbENvdW50IC8gbGltaXQpLFxuICAgICAgY3VycmVudFBhZ2U6IHBhZ2UsXG4gICAgICBwYWdlTGltaXQ6IHBhZ2luYXRpb25Db25maWcubGltaXQsXG4gICAgICBzaXplczoge1xuICAgICAgICBsaXN0OiBwYWdpbmF0aW9uQ29uZmlnLm9wdGlvbnMsXG4gICAgICAgIGFjdGl2ZTogbGltaXQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzZXRTZWN0aW9uU3RhdGUoaWQ6IHN0cmluZywgbmV3U3RhdGU6IFNlY3Rpb25TdGF0ZXMpIHtcbiAgICB0aGlzLnNlY3Rpb25TdGF0ZVtpZF0gPSBuZXdTdGF0ZTtcbiAgfVxufVxuIl19