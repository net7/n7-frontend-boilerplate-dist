/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
import facetsConfig from './search-facets.config';
import fakeSearchRequest$ from './search-mock-request';
import { withLatestFrom, tap } from 'rxjs/operators';
import { of } from 'rxjs';
/** @type {?} */
const SEARCH_MODEL_ID = 'aw-search-layout';
export class AwSearchLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.currentPage = 1; // pagination value (url param)
        // pagination value (url param)
        this.pageSize = 10; // linked objects page size
        this.orderByLabel = 'Ordina per';
        this.orderByOptions = [{
                value: 'text_DESC',
                label: 'Ordine alfabetico (DESC)'
            }, {
                value: 'text_ASC',
                label: 'Ordine alfabetico (ASC)'
            },
        ];
        this.getSearchModelId = (/**
         * @return {?}
         */
        () => SEARCH_MODEL_ID);
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, options, communication, search }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.options = options;
        this.pageTitle = this.configuration.get('search-layout').title;
        if (!this.search.model(SEARCH_MODEL_ID))
            this.search.add(SEARCH_MODEL_ID, facetsConfig);
        this.searchModel = this.search.model(SEARCH_MODEL_ID);
        this.doSearchRequest$().subscribe((/**
         * @return {?}
         */
        () => {
            this.one('facets-wrapper').update({ searchModel: this.searchModel });
        }));
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onOrderByChange(payload) {
        const [orderBy, direction] = payload.split('_');
        this.searchModel.setSearchConfigOrderBy(orderBy);
        this.searchModel.setSearchConfigDirection(direction);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onPaginationChange(payload) {
        /** @type {?} */
        const page = payload.replace('page-', '');
        return this._updateSearchPage(page);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onPaginationGoToChange(payload) {
        /** @type {?} */
        const page = payload.replace('goto-', '');
        this._updateSearchPage(page);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onResultsLimitChange(payload) {
        this.pageSize = payload;
        this.searchModel.setPageConfigLimit(payload);
        // reset page & offset
        this.currentPage = 1;
        this.searchModel.setPageConfigOffset(0);
    }
    /**
     * @return {?}
     */
    doSearchRequest$() {
        // FIXME: togliere configKeys
        // dovrebbe venire dall'API
        /** @type {?} */
        const configKeys = this.configuration.get('config-keys');
        // FIXME: mettere logica definitiva 
        // per la chiamata search
        /*
            this.communication.request$('search', {
              onError: error => console.error(error),
              params: requestParams
            })
            */
        /** @type {?} */
        const requestParams = this.searchModel.getRequestParams();
        /** @type {?} */
        const fakeResultsRequest$ = this.communication.request$('getEntityDetails', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            error => console.error(error)),
            params: { entityId: '55vf-entity-s3ar' }
        });
        return fakeResultsRequest$.pipe(withLatestFrom(fakeSearchRequest$(requestParams, configKeys)), tap((/**
         * @param {?} __0
         * @return {?}
         */
        ([resultsResponse, searchResponse]) => {
            this.totalCount = searchResponse.totalCount;
            /** @type {?} */
            let resultsTitleIndex = 0;
            // results title
            if (this.totalCount > 1) {
                resultsTitleIndex = 2;
            }
            else if (this.totalCount === 1) {
                resultsTitleIndex = 1;
            }
            this.resultsTitle = this.configuration.get('search-layout').results[resultsTitleIndex];
            this.searchModel.updateFacets(searchResponse.facets);
            this.searchModel.updateTotalCount(searchResponse.totalCount);
            this.one('aw-linked-objects').updateOptions({
                context: 'search',
                config: this.configuration,
                // todo: swap to next line after merge
                // config: this.configuration
                page: this.currentPage,
                size: this.pageSize,
            });
            this.one('aw-linked-objects').update({ items: resultsResponse.items });
        })));
    }
    /**
     * @private
     * @param {?} page
     * @return {?}
     */
    _updateSearchPage(page) {
        if (+page === this.currentPage)
            return of(false);
        this.currentPage = +page;
        /** @type {?} */
        const searchConfig = this.searchModel.getConfig();
        /** @type {?} */
        const pageConfig = searchConfig.page;
        const { limit } = pageConfig;
        /** @type {?} */
        const newOffset = (this.currentPage - 1) * limit;
        this.searchModel.setPageConfigOffset(newOffset);
        return of(true);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.search;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.searchModel;
    /** @type {?} */
    AwSearchLayoutDS.prototype.pageTitle;
    /** @type {?} */
    AwSearchLayoutDS.prototype.resultsTitle;
    /** @type {?} */
    AwSearchLayoutDS.prototype.totalCount;
    /** @type {?} */
    AwSearchLayoutDS.prototype.currentPage;
    /** @type {?} */
    AwSearchLayoutDS.prototype.pageSize;
    /** @type {?} */
    AwSearchLayoutDS.prototype.options;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByLabel;
    /** @type {?} */
    AwSearchLayoutDS.prototype.orderByOptions;
    /** @type {?} */
    AwSearchLayoutDS.prototype.getSearchModelId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxrQkFBa0IsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7O01BRWhDLGVBQWUsR0FBRyxrQkFBa0I7QUFFMUMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjtJQUF0RDs7UUFVUyxnQkFBVyxHQUFRLENBQUMsQ0FBQyxDQUFDLCtCQUErQjs7UUFDckQsYUFBUSxHQUFXLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtRQUlsRCxpQkFBWSxHQUFXLFlBQVksQ0FBQztRQUNwQyxtQkFBYyxHQUFRLENBQUM7Z0JBQzVCLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsMEJBQTBCO2FBQ2xDLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEtBQUssRUFBRSx5QkFBeUI7YUFDakM7U0FZSSxDQUFDO1FBNkNDLHFCQUFnQjs7O1FBQUcsR0FBRyxFQUFFLENBQUMsZUFBZSxFQUFDO0lBbUVsRCxDQUFDOzs7OztJQTlHQyxNQUFNLENBQUMsRUFBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FB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QVMsRUFBRTs7Y0FDL0MsVUFBVSxHQUFHLFlBQVksQ0FBQyxJQUFJO2NBQzlCLEVBQUUsS0FBSyxFQUFFLEdBQUcsVUFBVTs7Y0FDdEIsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLO1FBRTVDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztDQUNGOzs7Ozs7SUFqSkMseUNBQTJCOzs7OztJQUMzQix5Q0FBMkI7Ozs7O0lBQzNCLHFDQUF1Qjs7Ozs7SUFDdkIsa0NBQThCOzs7OztJQUM5Qix1Q0FBaUM7O0lBRWpDLHFDQUF5Qjs7SUFDekIsd0NBQTRCOztJQUM1QixzQ0FBMEI7O0lBQzFCLHVDQUE0Qjs7SUFDNUIsb0NBQTZCOztJQUU3QixtQ0FBb0I7O0lBRXBCLHdDQUEyQzs7SUFDM0MsMENBa0JNOztJQTZDTiw0Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSwgU2VhcmNoTW9kZWwgfSBmcm9tICduNy1ib2lsZXJwbGF0ZS1saWIvbGliL2NvbW1vbi9zZXJ2aWNlcyc7XG5pbXBvcnQgZmFjZXRzQ29uZmlnIGZyb20gJy4vc2VhcmNoLWZhY2V0cy5jb25maWcnO1xuaW1wb3J0IGZha2VTZWFyY2hSZXF1ZXN0JCBmcm9tICcuL3NlYXJjaC1tb2NrLXJlcXVlc3QnO1xuaW1wb3J0IHsgd2l0aExhdGVzdEZyb20sIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IFNFQVJDSF9NT0RFTF9JRCA9ICdhdy1zZWFyY2gtbGF5b3V0JztcblxuZXhwb3J0IGNsYXNzIEF3U2VhcmNoTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuICBwcml2YXRlIHNlYXJjaDogU2VhcmNoU2VydmljZTtcbiAgcHJpdmF0ZSBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWw7XG5cbiAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nO1xuICBwdWJsaWMgcmVzdWx0c1RpdGxlOiBzdHJpbmc7XG4gIHB1YmxpYyB0b3RhbENvdW50OiBudW1iZXI7XG4gIHB1YmxpYyBjdXJyZW50UGFnZTogYW55ID0gMTsgLy8gcGFnaW5hdGlvbiB2YWx1ZSAodXJsIHBhcmFtKVxuICBwdWJsaWMgcGFnZVNpemU6IG51bWJlciA9IDEwOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcblxuICBwdWJsaWMgb3B0aW9uczogYW55O1xuXG4gIHB1YmxpYyBvcmRlckJ5TGFiZWw6IHN0cmluZyA9ICdPcmRpbmEgcGVyJztcbiAgcHVibGljIG9yZGVyQnlPcHRpb25zOiBhbnkgPSBbe1xuICAgIHZhbHVlOiAndGV4dF9ERVNDJyxcbiAgICBsYWJlbDogJ09yZGluZSBhbGZhYmV0aWNvIChERVNDKSdcbiAgfSwge1xuICAgIHZhbHVlOiAndGV4dF9BU0MnLFxuICAgIGxhYmVsOiAnT3JkaW5lIGFsZmFiZXRpY28gKEFTQyknXG4gIH0sIC8qIHtcbiAgICB2YWx1ZTogJ3Njb3JlX0RFU0MnLFxuICAgIGxhYmVsOiAnT3JkaW5lIHBlciByaWxldmFuemEgKERFU0MpJ1xuICB9LCB7XG4gICAgdmFsdWU6ICdzY29yZV9BU0MnLFxuICAgIGxhYmVsOiAnT3JkaW5lIHBlciByaWxldmFuemEgKEFTQyknXG4gIH0sIHtcbiAgICB2YWx1ZTogJ2RhdGVfREVTQycsXG4gICAgbGFiZWw6ICdPcmRpbmEgcGVyIGRhdGEgKERFU0MpJ1xuICB9LCB7XG4gICAgdmFsdWU6ICdkYXRlX0FTQycsXG4gICAgbGFiZWw6ICdPcmRpbmEgcGVyIGRhdGEgKEFTQyknXG4gIH0gKi9dO1xuXG4gIG9uSW5pdCh7Y29uZmlndXJhdGlvbiwgbWFpblN0YXRlLCBvcHRpb25zLCBjb21tdW5pY2F0aW9uLCBzZWFyY2ggfSkge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgdGhpcy5wYWdlVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykudGl0bGU7XG5cbiAgICBpZighdGhpcy5zZWFyY2gubW9kZWwoU0VBUkNIX01PREVMX0lEKSkgdGhpcy5zZWFyY2guYWRkKFNFQVJDSF9NT0RFTF9JRCwgZmFjZXRzQ29uZmlnKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsID0gdGhpcy5zZWFyY2gubW9kZWwoU0VBUkNIX01PREVMX0lEKTtcblxuICAgIHRoaXMuZG9TZWFyY2hSZXF1ZXN0JCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm9uZSgnZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoeyBzZWFyY2hNb2RlbDogdGhpcy5zZWFyY2hNb2RlbCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uT3JkZXJCeUNoYW5nZShwYXlsb2FkKXtcbiAgICBjb25zdCBbb3JkZXJCeSwgZGlyZWN0aW9uXSA9IHBheWxvYWQuc3BsaXQoJ18nKTtcblxuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0U2VhcmNoQ29uZmlnT3JkZXJCeShvcmRlckJ5KTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFNlYXJjaENvbmZpZ0RpcmVjdGlvbihkaXJlY3Rpb24pO1xuICB9XG5cbiAgb25QYWdpbmF0aW9uQ2hhbmdlKHBheWxvYWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBwYWdlID0gcGF5bG9hZC5yZXBsYWNlKCdwYWdlLScsICcnKTtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlU2VhcmNoUGFnZShwYWdlKTtcbiAgfVxuXG4gIG9uUGFnaW5hdGlvbkdvVG9DaGFuZ2UocGF5bG9hZCl7XG4gICAgY29uc3QgcGFnZSA9IHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJyk7XG4gICAgdGhpcy5fdXBkYXRlU2VhcmNoUGFnZShwYWdlKTtcbiAgfVxuXG4gIG9uUmVzdWx0c0xpbWl0Q2hhbmdlKHBheWxvYWQpe1xuICAgIHRoaXMucGFnZVNpemUgPSBwYXlsb2FkO1xuICAgIHRoaXMuc2VhcmNoTW9kZWwuc2V0UGFnZUNvbmZpZ0xpbWl0KHBheWxvYWQpO1xuICAgIFxuICAgIC8vIHJlc2V0IHBhZ2UgJiBvZmZzZXRcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQoMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VhcmNoTW9kZWxJZCA9ICgpID0+IFNFQVJDSF9NT0RFTF9JRDtcblxuICBwdWJsaWMgZG9TZWFyY2hSZXF1ZXN0JCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vIEZJWE1FOiB0b2dsaWVyZSBjb25maWdLZXlzXG4gICAgLy8gZG92cmViYmUgdmVuaXJlIGRhbGwnQVBJXG4gICAgY29uc3QgY29uZmlnS2V5cyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyk7XG5cbiAgICAvLyBGSVhNRTogbWV0dGVyZSBsb2dpY2EgZGVmaW5pdGl2YSBcbiAgICAvLyBwZXIgbGEgY2hpYW1hdGEgc2VhcmNoXG4gICAgLyogXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdzZWFyY2gnLCB7XG4gICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogcmVxdWVzdFBhcmFtc1xuICAgIH0pXG4gICAgKi9cblxuICAgIGNvbnN0IHJlcXVlc3RQYXJhbXMgPSB0aGlzLnNlYXJjaE1vZGVsLmdldFJlcXVlc3RQYXJhbXMoKTtcblxuICAgIGNvbnN0IGZha2VSZXN1bHRzUmVxdWVzdCQgPSB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldEVudGl0eURldGFpbHMnLCB7XG4gICAgICBvbkVycm9yOiBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczogeyBlbnRpdHlJZDogJzU1dmYtZW50aXR5LXMzYXInIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmYWtlUmVzdWx0c1JlcXVlc3QkLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbShmYWtlU2VhcmNoUmVxdWVzdCQocmVxdWVzdFBhcmFtcywgY29uZmlnS2V5cykpLFxuICAgICAgdGFwKChbcmVzdWx0c1Jlc3BvbnNlLCBzZWFyY2hSZXNwb25zZV0pID0+IHtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gc2VhcmNoUmVzcG9uc2UudG90YWxDb3VudDtcbiAgICAgICAgbGV0IHJlc3VsdHNUaXRsZUluZGV4ID0gMDtcbiAgICAgICAgLy8gcmVzdWx0cyB0aXRsZVxuICAgICAgICBpZih0aGlzLnRvdGFsQ291bnQgPiAxKXtcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnRvdGFsQ291bnQgPT09IDEpIHtcbiAgICAgICAgICByZXN1bHRzVGl0bGVJbmRleCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdzZWFyY2gtbGF5b3V0JykucmVzdWx0c1tyZXN1bHRzVGl0bGVJbmRleF07XG4gIFxuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZUZhY2V0cyhzZWFyY2hSZXNwb25zZS5mYWNldHMpO1xuICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnVwZGF0ZVRvdGFsQ291bnQoc2VhcmNoUmVzcG9uc2UudG90YWxDb3VudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgICAgICBjb250ZXh0OiAnc2VhcmNoJyxcbiAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgICAgICAvLyB0b2RvOiBzd2FwIHRvIG5leHQgbGluZSBhZnRlciBtZXJnZVxuICAgICAgICAgIC8vIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uXG4gICAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICBzaXplOiB0aGlzLnBhZ2VTaXplLFxuICAgICAgICB9KTtcbiAgXG4gICAgICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZSh7IGl0ZW1zOiByZXN1bHRzUmVzcG9uc2UuaXRlbXMgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTZWFyY2hQYWdlKHBhZ2Upe1xuICAgIGlmKCtwYWdlID09PSB0aGlzLmN1cnJlbnRQYWdlKSByZXR1cm4gb2YoZmFsc2UpO1xuXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9ICtwYWdlO1xuXG4gICAgY29uc3Qgc2VhcmNoQ29uZmlnID0gdGhpcy5zZWFyY2hNb2RlbC5nZXRDb25maWcoKSxcbiAgICAgIHBhZ2VDb25maWcgPSBzZWFyY2hDb25maWcucGFnZSxcbiAgICAgIHsgbGltaXQgfSA9IHBhZ2VDb25maWcsXG4gICAgICBuZXdPZmZzZXQgPSAodGhpcy5jdXJyZW50UGFnZSAtIDEpICogbGltaXQ7XG5cbiAgICB0aGlzLnNlYXJjaE1vZGVsLnNldFBhZ2VDb25maWdPZmZzZXQobmV3T2Zmc2V0KTtcblxuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxufVxuIl19