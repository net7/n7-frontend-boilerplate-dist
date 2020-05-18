/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { isEmpty } from 'lodash';
import { LayoutDataSource } from '@n7-frontend/core';
import facetsConfig from './search-facets.config';
import resultsMock from './search-layout.mock';
export class MrSearchLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.inputsConfig = {};
        this.state = {};
        this.sectionState = {};
        this.totalResultsText = null;
        this.inputIsInternal = (/**
         * @param {?=} id
         * @return {?}
         */
        (id) => this.inputsConfig[id].internal);
        this.getInputType = (/**
         * @param {?=} id
         * @return {?}
         */
        (id) => this.inputsConfig[id].type);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.facetsConfig = facetsConfig;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // inputs config
        this.facetsConfig.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ inputs }) => {
            inputs.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ id, type, internal }) => {
                this.inputsConfig[id] = {
                    type,
                    internal: !!internal
                };
            }));
        }));
        // config
        this.all().updateOptions({ config: this.pageConfig });
        // manual updates
        this.one('mr-search-page-title').update({});
    }
    /**
     * @param {?=} params
     * @return {?}
     */
    doRequest$(params = {}) {
        console.warn('#TODO: doRequest', params);
        // FIXME: togliere commento
        /* return this.communication.request$('search', {
              params,
              onError: (error) => {
                this.setSectionState('results', 'KO');
                console.warn('SEARCH ERROR', error);
              }
            }); */
        /** @type {?} */
        const page = this.getState('page') || 1;
        /** @type {?} */
        const sort = this.getState('sort') || '_score_DESC';
        return of(resultsMock(page, sort)).pipe(delay(Math.round(Math.random() * 5000)));
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
        this.setSectionState('results', isEmpty(response.results) ? 'EMPTY' : 'OK');
        // pagination
        this.one('n7-smart-pagination').updateOptions({ mode: 'payload' });
        this.one('n7-smart-pagination').update(this.getPaginationParams(response));
    }
    /**
     * @return {?}
     */
    updateActiveFilters() {
        // active "tags" filters
        this.one('mr-search-tags').update({
            state: this.state,
            facetsConfig: this.facetsConfig
        });
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    getPaginationParams(response) {
        const { totalCount, page } = response;
        const { pagination: paginationConfig } = this.pageConfig;
        return {
            totalPages: Math.ceil(totalCount / page.limit),
            currentPage: page.current,
            pageLimit: paginationConfig.limit,
            sizes: {
                list: paginationConfig.options,
                active: page.limit,
            },
        };
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    getState(id) {
        return id ? this.state[id] : this.state;
    }
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */
    setState(id, value) {
        this.state[id] = value;
    }
    /**
     * @return {?}
     */
    clearState() {
        this.state = {};
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
    MrSearchLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutDS.prototype.configId;
    /**
     * @type {?}
     * @private
     */
    MrSearchLayoutDS.prototype.inputsConfig;
    /** @type {?} */
    MrSearchLayoutDS.prototype.state;
    /** @type {?} */
    MrSearchLayoutDS.prototype.sectionState;
    /** @type {?} */
    MrSearchLayoutDS.prototype.facetsConfig;
    /** @type {?} */
    MrSearchLayoutDS.prototype.pageConfig;
    /** @type {?} */
    MrSearchLayoutDS.prototype.totalResultsText;
    /** @type {?} */
    MrSearchLayoutDS.prototype.inputIsInternal;
    /** @type {?} */
    MrSearchLayoutDS.prototype.getInputType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFHbEQsT0FBTyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFJL0MsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFPVSxpQkFBWSxHQUtoQixFQUFFLENBQUM7UUFFQSxVQUFLLEdBRVIsRUFBRSxDQUFDO1FBRUEsaUJBQVksR0FFZixFQUFFLENBQUM7UUFNQSxxQkFBZ0IsR0FBa0IsSUFBSSxDQUFDO1FBZ0c5QyxvQkFBZTs7OztRQUFHLENBQUMsRUFBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBQztRQUVsRSxpQkFBWTs7OztRQUFHLENBQUMsRUFBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBQztJQUM3RCxDQUFDOzs7OztJQWpHQyxNQUFNLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxZ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Q0FBQztZQUM5QyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDekIsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUs7WUFDakMsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO2dCQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDbkI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsRUFBVztRQUNsQixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsRUFBVSxFQUFFLEtBQVU7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsRUFBVSxFQUFFLFFBQXVCO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7Q0FLRjs7Ozs7O0lBNUhDLHlDQUE0Qzs7Ozs7SUFFNUMseUNBQTRDOzs7OztJQUU1QyxvQ0FBeUI7Ozs7O0lBRXpCLHdDQUtPOztJQUVQLGlDQUVPOztJQUVQLHdDQUVPOztJQUVQLHdDQUFvQjs7SUFFcEIsc0NBQWtCOztJQUVsQiw0Q0FBOEM7O0lBZ0c5QywyQ0FBa0U7O0lBRWxFLHdDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBmYWNldHNDb25maWcgZnJvbSAnLi9zZWFyY2gtZmFjZXRzLmNvbmZpZyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCByZXN1bHRzTW9jayBmcm9tICcuL3NlYXJjaC1sYXlvdXQubW9jayc7XG5cbnR5cGUgU2VjdGlvblN0YXRlcyA9ICdMT0FESU5HJyB8ICdFTVBUWScgfCAnT0snIHwgJ0tPJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBwcml2YXRlIGlucHV0c0NvbmZpZzoge1xuICAgIFtrZXk6IHN0cmluZ106IHtcbiAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgIGludGVybmFsOiBib29sZWFuO1xuICAgIH07XG4gIH0gPSB7fTtcblxuICBwdWJsaWMgc3RhdGU6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGw7XG4gIH0gPSB7fTtcblxuICBwdWJsaWMgc2VjdGlvblN0YXRlOiB7XG4gICAgW2tleTogc3RyaW5nXTogU2VjdGlvblN0YXRlcztcbiAgfSA9IHt9O1xuXG4gIHB1YmxpYyBmYWNldHNDb25maWc7XG5cbiAgcHVibGljIHBhZ2VDb25maWc7XG5cbiAgcHVibGljIHRvdGFsUmVzdWx0c1RleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLmZhY2V0c0NvbmZpZyA9IGZhY2V0c0NvbmZpZztcbiAgICB0aGlzLmNvbmZpZ0lkID0gcGF5bG9hZC5jb25maWdJZDtcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xuXG4gICAgLy8gaW5wdXRzIGNvbmZpZ1xuICAgIHRoaXMuZmFjZXRzQ29uZmlnLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgIGlucHV0cy5mb3JFYWNoKCh7IGlkLCB0eXBlLCBpbnRlcm5hbCB9KSA9PiB7XG4gICAgICAgIHRoaXMuaW5wdXRzQ29uZmlnW2lkXSA9IHtcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIGludGVybmFsOiAhIWludGVybmFsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGNvbmZpZ1xuICAgIHRoaXMuYWxsKCkudXBkYXRlT3B0aW9ucyh7IGNvbmZpZzogdGhpcy5wYWdlQ29uZmlnIH0pO1xuXG4gICAgLy8gbWFudWFsIHVwZGF0ZXNcbiAgICB0aGlzLm9uZSgnbXItc2VhcmNoLXBhZ2UtdGl0bGUnKS51cGRhdGUoe30pO1xuICB9XG5cbiAgZG9SZXF1ZXN0JChwYXJhbXMgPSB7fSkge1xuICAgIGNvbnNvbGUud2FybignI1RPRE86IGRvUmVxdWVzdCcsIHBhcmFtcyk7XG4gICAgLy8gRklYTUU6IHRvZ2xpZXJlIGNvbW1lbnRvXG4gICAgLyogcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnc2VhcmNoJywge1xuICAgICAgcGFyYW1zLFxuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U2VjdGlvblN0YXRlKCdyZXN1bHRzJywgJ0tPJyk7XG4gICAgICAgIGNvbnNvbGUud2FybignU0VBUkNIIEVSUk9SJywgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pOyAqL1xuXG4gICAgY29uc3QgcGFnZSA9IHRoaXMuZ2V0U3RhdGUoJ3BhZ2UnKSB8fCAxO1xuICAgIGNvbnN0IHNvcnQgPSB0aGlzLmdldFN0YXRlKCdzb3J0JykgfHwgJ19zY29yZV9ERVNDJztcbiAgICByZXR1cm4gb2YocmVzdWx0c01vY2socGFnZSwgc29ydCkpLnBpcGUoXG4gICAgICBkZWxheShNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1MDAwKSlcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICB0aGlzLnNvbWUoW1xuICAgICAgJ21yLXNlYXJjaC1yZXN1bHRzLXRpdGxlJyxcbiAgICAgICdtci1zZWFyY2gtcmVzdWx0cycsXG4gICAgXSkudXBkYXRlKHJlc3BvbnNlKTtcblxuICAgIHRoaXMuc2V0U2VjdGlvblN0YXRlKCdyZXN1bHRzJywgaXNFbXB0eShyZXNwb25zZS5yZXN1bHRzKSA/ICdFTVBUWScgOiAnT0snKTtcblxuICAgIC8vIHBhZ2luYXRpb25cbiAgICB0aGlzLm9uZSgnbjctc21hcnQtcGFnaW5hdGlvbicpLnVwZGF0ZU9wdGlvbnMoeyBtb2RlOiAncGF5bG9hZCcgfSk7XG4gICAgdGhpcy5vbmUoJ243LXNtYXJ0LXBhZ2luYXRpb24nKS51cGRhdGUodGhpcy5nZXRQYWdpbmF0aW9uUGFyYW1zKHJlc3BvbnNlKSk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVGaWx0ZXJzKCkge1xuICAgIC8vIGFjdGl2ZSBcInRhZ3NcIiBmaWx0ZXJzXG4gICAgdGhpcy5vbmUoJ21yLXNlYXJjaC10YWdzJykudXBkYXRlKHtcbiAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgZmFjZXRzQ29uZmlnOiB0aGlzLmZhY2V0c0NvbmZpZ1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdpbmF0aW9uUGFyYW1zKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyB0b3RhbENvdW50LCBwYWdlIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCB7IHBhZ2luYXRpb246IHBhZ2luYXRpb25Db25maWcgfSA9IHRoaXMucGFnZUNvbmZpZztcblxuICAgIHJldHVybiB7XG4gICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwodG90YWxDb3VudCAvIHBhZ2UubGltaXQpLFxuICAgICAgY3VycmVudFBhZ2U6IHBhZ2UuY3VycmVudCxcbiAgICAgIHBhZ2VMaW1pdDogcGFnaW5hdGlvbkNvbmZpZy5saW1pdCxcbiAgICAgIHNpemVzOiB7XG4gICAgICAgIGxpc3Q6IHBhZ2luYXRpb25Db25maWcub3B0aW9ucyxcbiAgICAgICAgYWN0aXZlOiBwYWdlLmxpbWl0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0U3RhdGUoaWQ/OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBpZCA/IHRoaXMuc3RhdGVbaWRdIDogdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKGlkOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnN0YXRlW2lkXSA9IHZhbHVlO1xuICB9XG5cbiAgY2xlYXJTdGF0ZSgpIHtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICBzZXRTZWN0aW9uU3RhdGUoaWQ6IHN0cmluZywgbmV3U3RhdGU6IFNlY3Rpb25TdGF0ZXMpIHtcbiAgICB0aGlzLnNlY3Rpb25TdGF0ZVtpZF0gPSBuZXdTdGF0ZTtcbiAgfVxuXG4gIGlucHV0SXNJbnRlcm5hbCA9IChpZD86IHN0cmluZykgPT4gdGhpcy5pbnB1dHNDb25maWdbaWRdLmludGVybmFsO1xuXG4gIGdldElucHV0VHlwZSA9IChpZD86IHN0cmluZykgPT4gdGhpcy5pbnB1dHNDb25maWdbaWRdLnR5cGU7XG59XG4iXX0=