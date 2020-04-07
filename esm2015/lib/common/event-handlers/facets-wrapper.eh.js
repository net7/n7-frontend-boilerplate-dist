/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/facets-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class FacetsWrapperEH extends EventHandler {
    constructor() {
        super(...arguments);
        this._facetsChanged = false;
        this.internalFacetsChange$ = new Subject();
        this.externalFacetsChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    listen() {
        // listen to inner (widget) events
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'facets-wrapper.facet':
                    {
                        // empty payload control
                        if (!payload.eventPayload.inputPayload) {
                            return;
                        }
                        const { facetId } = payload.eventPayload.inputPayload;
                        /** @type {?} */
                        const input = this.dataSource.getInputByFacetId(facetId);
                        /** @type {?} */
                        const context = input.getContext();
                        this._facetsChanged = true;
                        // update
                        this.dataSource.onFacetChange(payload);
                        // internal
                        if (context === 'internal') {
                            this.internalFacetsChange$.next(input.getTarget());
                            // external
                        }
                        else {
                            this.externalFacetsChange$.next();
                        }
                    }
                    break;
                case 'facets-wrapper.facetheader':
                    this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            if (type.indexOf('queryparamschange') !== -1 && this.dataSource.searchModel) {
                this.dataSource.updateFiltersFromQueryParams(payload);
                this.dataSource.updateInputsFromFilters();
            }
        }));
        // listen to global events
        EventHandler.globalEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'global.searchresponse':
                    if (this.dataSource.searchModel && this.dataSource.searchModel.getId() === payload) {
                        this.dataSource.updateInputLinks();
                        /** @type {?} */
                        const internalFilters = this.dataSource.searchModel.getInternalFilters();
                        internalFilters.forEach((/**
                         * @param {?} filter
                         * @return {?}
                         */
                        (filter) => {
                            /** @type {?} */
                            const input = this.dataSource.searchModel.getInputByFacetId(filter.facetId);
                            /** @type {?} */
                            const target = input.getTarget();
                            this.dataSource.filterTarget(target);
                            this.dataSource.updateFilteredTarget(target);
                        }));
                    }
                    break;
                default:
                    break;
            }
        }));
        // internal facets change
        this.internalFacetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} target
         * @return {?}
         */
        (target) => {
            this.dataSource.filterTarget(target);
            this.dataSource.updateFilteredTarget(target);
        }));
        // internal facets change
        this.externalFacetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const requestParams = this.dataSource.getRequestParams();
            /** @type {?} */
            const queryParams = this.dataSource.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => { queryParams[key] = queryParams[key] || null; }));
            // signal
            this.emitOuter('facetschange');
            // reset page
            queryParams.page = 1;
            // router signal
            this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams,
            });
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacetsWrapperEH.prototype._facetsChanged;
    /**
     * @type {?}
     * @private
     */
    FacetsWrapperEH.prototype.internalFacetsChange$;
    /**
     * @type {?}
     * @private
     */
    FacetsWrapperEH.prototype.externalFacetsChange$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE1BQU0sT0FBTyxlQUFnQixTQUFRLFlBQVk7SUFBakQ7O1FBQ1UsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIsMEJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFcEQsMEJBQXFCLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUFpRzlELENBQUM7Ozs7SUEvRlEsTUFBTTtRQUNYLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxzQkFBc0I7b0JBQUU7d0JBQzNCLHdCQUF3Qjt3QkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFOzRCQUN0QyxPQUFPO3lCQUNSOzhCQUNLLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZOzs4QkFDL0MsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOzs4QkFDbEQsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7d0JBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUUzQixTQUFTO3dCQUNULElBQUksQ0FB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QUFPLENBQUM7WUFFL0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDNUYsU0FBUztZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFL0IsYUFBYTtZQUNiLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLGdCQUFnQjtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLElBQUksRUFBRSxFQUFFO2dCQUNSLFdBQVc7YUFDWixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7Ozs7O0lBckdDLHlDQUErQjs7Ozs7SUFFL0IsZ0RBQTREOzs7OztJQUU1RCxnREFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIF9mYWNldHNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpbnRlcm5hbEZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBleHRlcm5hbEZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICAvLyBsaXN0ZW4gdG8gaW5uZXIgKHdpZGdldCkgZXZlbnRzXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ZhY2V0cy13cmFwcGVyLmZhY2V0Jzoge1xuICAgICAgICAgIC8vIGVtcHR5IHBheWxvYWQgY29udHJvbFxuICAgICAgICAgIGlmICghcGF5bG9hZC5ldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHsgZmFjZXRJZCB9ID0gcGF5bG9hZC5ldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkO1xuICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5kYXRhU291cmNlLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpO1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBpbnB1dC5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgdGhpcy5fZmFjZXRzQ2hhbmdlZCA9IHRydWU7XG5cbiAgICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25GYWNldENoYW5nZShwYXlsb2FkKTtcblxuICAgICAgICAgIC8vIGludGVybmFsXG4gICAgICAgICAgaWYgKGNvbnRleHQgPT09ICdpbnRlcm5hbCcpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGYWNldHNDaGFuZ2UkLm5leHQoaW5wdXQuZ2V0VGFyZ2V0KCkpO1xuICAgICAgICAgICAgLy8gZXh0ZXJuYWxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRlcm5hbEZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZhY2V0cy13cmFwcGVyLmZhY2V0aGVhZGVyJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlR3JvdXAocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGlmICh0eXBlLmluZGV4T2YoJ3F1ZXJ5cGFyYW1zY2hhbmdlJykgIT09IC0xICYmIHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbCkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhwYXlsb2FkKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBsaXN0ZW4gdG8gZ2xvYmFsIGV2ZW50c1xuICAgIEV2ZW50SGFuZGxlci5nbG9iYWxFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdnbG9iYWwuc2VhcmNocmVzcG9uc2UnOlxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwgJiYgdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElkKCkgPT09IHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVJbnB1dExpbmtzKCk7XG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbEZpbHRlcnMgPSB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0SW50ZXJuYWxGaWx0ZXJzKCk7XG5cbiAgICAgICAgICAgIGludGVybmFsRmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0SW5wdXRCeUZhY2V0SWQoZmlsdGVyLmZhY2V0SWQpO1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBpbnB1dC5nZXRUYXJnZXQoKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlclRhcmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlRmlsdGVyZWRUYXJnZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gaW50ZXJuYWwgZmFjZXRzIGNoYW5nZVxuICAgIHRoaXMuaW50ZXJuYWxGYWNldHNDaGFuZ2UkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICApLnN1YnNjcmliZSgodGFyZ2V0KSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlRmlsdGVyZWRUYXJnZXQodGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIC8vIGludGVybmFsIGZhY2V0cyBjaGFuZ2VcbiAgICB0aGlzLmV4dGVybmFsRmFjZXRzQ2hhbmdlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXF1ZXN0UGFyYW1zKCk7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xuICAgICAgLy8gc2lnbmFsXG4gICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzY2hhbmdlJyk7XG5cbiAgICAgIC8vIHJlc2V0IHBhZ2VcbiAgICAgIHF1ZXJ5UGFyYW1zLnBhZ2UgPSAxO1xuXG4gICAgICAvLyByb3V0ZXIgc2lnbmFsXG4gICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgcGF0aDogW10sXG4gICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==