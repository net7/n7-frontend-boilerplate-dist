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
     * @param {?} linksResponse
     * @return {?}
     */
    MrSearchLayoutDS.prototype.updateActiveFilters = /**
     * @param {?} state
     * @param {?} linksResponse
     * @return {?}
     */
    function (state, linksResponse) {
        // active "tags" filters
        this.one('mr-search-tags').update({
            state: state,
            linksResponse: linksResponse,
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
        var totalCount = response.totalCount, page = response.page, limit = response.limit;
        var paginationConfig = this.pageConfig.pagination;
        return {
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
            pageLimit: paginationConfig.limit,
            sizes: {
                list: paginationConfig.options,
                active: limit,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1yRDtJQUFzQyw0Q0FBZ0I7SUFBdEQ7UUFBQSxxRUFvRUM7UUE3RFEsa0JBQVksR0FFZixFQUFFLENBQUM7UUFNQSxzQkFBZ0IsR0FBa0IsSUFBSSxDQUFDOztJQXFEaEQsQ0FBQzs7Ozs7SUFuREMsaUNBQU07Ozs7SUFBTixVQUFPLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxTQUFTO1FBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUV0RCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELHlDQUFjOzs7O0lBQWQsVUFBZSxRQUFRO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUix5QkFBeUI7WUFDekIsbUJBQW1CO1NBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEIsYUFBYTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7OztJQUVELDhDQUFtQjs7Ozs7SUFBbkIsVUFBb0IsS0FBSyxFQUFFLGFBQWE7UUFDdEMsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEMsS0FBSyxPQUFBO1lBQ0wsYUFBYSxlQUFBO1lBQ2IsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTTtTQUNwRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyw4Q0FBbUI7Ozs7O0lBQTNCLFVBQTRCLFFBQVE7UUFDMUIsSUFBQSxnQ0FBVSxFQUFFLG9CQUFJLEVBQUUsc0JBQUs7UUFDdkIsSUFBQSw2Q0FBNEI7UUFFcEMsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDekMsV0FBVyxFQUFFLElBQUk7WUFDakIsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUs7WUFDakMsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO2dCQUM5QixNQUFNLEVBQUUsS0FBSzthQUNkO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELDBDQUFlOzs7OztJQUFmLFVBQWdCLEVBQVUsRUFBRSxRQUF1QjtRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBcEVELENBQXNDLGdCQUFnQixHQW9FckQ7Ozs7Ozs7SUFuRUMseUNBQTRDOzs7OztJQUU1QyxvQ0FBeUI7O0lBRXpCLHlDQUFzQzs7SUFFdEMsd0NBRU87O0lBRVAsd0NBQW9COztJQUVwQixzQ0FBa0I7O0lBRWxCLDRDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG50eXBlIFNlY3Rpb25TdGF0ZXMgPSAnTE9BRElORycgfCAnRU1QVFknIHwgJ09LJyB8ICdLTyc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb25maWdJZDogc3RyaW5nO1xuXG4gIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgcHVibGljIHNlY3Rpb25TdGF0ZToge1xuICAgIFtrZXk6IHN0cmluZ106IFNlY3Rpb25TdGF0ZXM7XG4gIH0gPSB7fTtcblxuICBwdWJsaWMgZmFjZXRzQ29uZmlnO1xuXG4gIHB1YmxpYyBwYWdlQ29uZmlnO1xuXG4gIHB1YmxpYyB0b3RhbFJlc3VsdHNUZXh0OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XG4gICAgdGhpcy5wYWdlQ29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCh0aGlzLmNvbmZpZ0lkKTtcblxuICAgIC8vIGNvbmZpZ1xuICAgIHRoaXMuYWxsKCkudXBkYXRlT3B0aW9ucyh7IGNvbmZpZzogdGhpcy5wYWdlQ29uZmlnIH0pO1xuXG4gICAgLy8gbWFudWFsIHVwZGF0ZXNcbiAgICB0aGlzLm9uZSgnbXItc2VhcmNoLXBhZ2UtdGl0bGUnKS51cGRhdGUoe30pO1xuICB9XG5cbiAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICB0aGlzLnNvbWUoW1xuICAgICAgJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlJyxcbiAgICAgICdtci1zZWFyY2gtcmVzdWx0cycsXG4gICAgXSkudXBkYXRlKHJlc3BvbnNlKTtcblxuICAgIC8vIHBhZ2luYXRpb25cbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoeyBtb2RlOiAncGF5bG9hZCcgfSk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUodGhpcy5nZXRQYWdpbmF0aW9uUGFyYW1zKHJlc3BvbnNlKSk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVGaWx0ZXJzKHN0YXRlLCBsaW5rc1Jlc3BvbnNlKSB7XG4gICAgLy8gYWN0aXZlIFwidGFnc1wiIGZpbHRlcnNcbiAgICB0aGlzLm9uZSgnbXItc2VhcmNoLXRhZ3MnKS51cGRhdGUoe1xuICAgICAgc3RhdGUsXG4gICAgICBsaW5rc1Jlc3BvbnNlLFxuICAgICAgZmFjZXRzQ29uZmlnOiB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCkuZmFjZXRzXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2luYXRpb25QYXJhbXMocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IHRvdGFsQ291bnQsIHBhZ2UsIGxpbWl0IH0gPSByZXNwb25zZTtcbiAgICBjb25zdCB7IHBhZ2luYXRpb246IHBhZ2luYXRpb25Db25maWcgfSA9IHRoaXMucGFnZUNvbmZpZztcblxuICAgIHJldHVybiB7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodG90YWxDb3VudCAvIGxpbWl0KSxcbiAgICAgIGN1cnJlbnRQYWdlOiBwYWdlLFxuICAgICAgcGFnZUxpbWl0OiBwYWdpbmF0aW9uQ29uZmlnLmxpbWl0LFxuICAgICAgc2l6ZXM6IHtcbiAgICAgICAgbGlzdDogcGFnaW5hdGlvbkNvbmZpZy5vcHRpb25zLFxuICAgICAgICBhY3RpdmU6IGxpbWl0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc2V0U2VjdGlvblN0YXRlKGlkOiBzdHJpbmcsIG5ld1N0YXRlOiBTZWN0aW9uU3RhdGVzKSB7XG4gICAgdGhpcy5zZWN0aW9uU3RhdGVbaWRdID0gbmV3U3RhdGU7XG4gIH1cbn1cbiJdfQ==