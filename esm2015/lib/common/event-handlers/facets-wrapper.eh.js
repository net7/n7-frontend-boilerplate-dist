/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsWUFBWTtJQUFqRDs7UUFDVSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QiwwQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVwRCwwQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQWlHOUQsQ0FBQzs7OztJQS9GUSxNQUFNO1FBQ1gsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHNCQUFzQjtvQkFBRTt3QkFDM0Isd0JBQXdCO3dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7NEJBQ3RDLE9BQU87eUJBQ1I7OEJBQ0ssRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVk7OzhCQUMvQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7OzhCQUNsRCxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTt3QkFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7d0JBRTNCLFNBQVM7d0JBQ1QsSUFBSSxDQUFD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QU8sQ0FBQztZQUUvRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUM1RixTQUFTO1lBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUvQixhQUFhO1lBQ2IsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFFckIsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUMxQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsV0FBVzthQUNaLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7Ozs7SUFyR0MseUNBQStCOzs7OztJQUUvQixnREFBNEQ7Ozs7O0lBRTVELGdEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEZhY2V0c1dyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgX2ZhY2V0c0NoYW5nZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGludGVybmFsRmFjZXRzQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGV4dGVybmFsRmFjZXRzQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIC8vIGxpc3RlbiB0byBpbm5lciAod2lkZ2V0KSBldmVudHNcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXQnOiB7XG4gICAgICAgICAgLy8gZW1wdHkgcGF5bG9hZCBjb250cm9sXG4gICAgICAgICAgaWYgKCFwYXlsb2FkLmV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgeyBmYWNldElkIH0gPSBwYXlsb2FkLmV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQ7XG4gICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCk7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IGlucHV0LmdldENvbnRleHQoKTtcbiAgICAgICAgICB0aGlzLl9mYWNldHNDaGFuZ2VkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIHVwZGF0ZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkZhY2V0Q2hhbmdlKHBheWxvYWQpO1xuXG4gICAgICAgICAgLy8gaW50ZXJuYWxcbiAgICAgICAgICBpZiAoY29udGV4dCA9PT0gJ2ludGVybmFsJykge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZhY2V0c0NoYW5nZSQubmV4dChpbnB1dC5nZXRUYXJnZXQoKSk7XG4gICAgICAgICAgICAvLyBleHRlcm5hbFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4dGVybmFsRmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRoZWFkZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVHcm91cChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgaWYgKHR5cGUuaW5kZXhPZigncXVlcnlwYXJhbXNjaGFuZ2UnKSAhPT0gLTEgJiYgdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHBheWxvYWQpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGxpc3RlbiB0byBnbG9iYWwgZXZlbnRzXG4gICAgRXZlbnRIYW5kbGVyLmdsb2JhbEV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2dsb2JhbC5zZWFyY2hyZXNwb25zZSc6XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbCAmJiB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0SWQoKSA9PT0gcGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0TGlua3MoKTtcbiAgICAgICAgICAgIGNvbnN0IGludGVybmFsRmlsdGVycyA9IHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRJbnRlcm5hbEZpbHRlcnMoKTtcblxuICAgICAgICAgICAgaW50ZXJuYWxGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbC5nZXRJbnB1dEJ5RmFjZXRJZChmaWx0ZXIuZmFjZXRJZCk7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGlucHV0LmdldFRhcmdldCgpO1xuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVGaWx0ZXJlZFRhcmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBpbnRlcm5hbCBmYWNldHMgY2hhbmdlXG4gICAgdGhpcy5pbnRlcm5hbEZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICkuc3Vic2NyaWJlKCh0YXJnZXQpID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJUYXJnZXQodGFyZ2V0KTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVGaWx0ZXJlZFRhcmdldCh0YXJnZXQpO1xuICAgIH0pO1xuXG4gICAgLy8gaW50ZXJuYWwgZmFjZXRzIGNoYW5nZVxuICAgIHRoaXMuZXh0ZXJuYWxGYWNldHNDaGFuZ2UkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0UGFyYW1zID0gdGhpcy5kYXRhU291cmNlLmdldFJlcXVlc3RQYXJhbXMoKTtcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKHJlcXVlc3RQYXJhbXMuZmlsdGVycyk7XG5cbiAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHsgcXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV0gfHwgbnVsbDsgfSk7XG4gICAgICAvLyBzaWduYWxcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHNjaGFuZ2UnKTtcblxuICAgICAgLy8gcmVzZXQgcGFnZVxuICAgICAgcXVlcnlQYXJhbXMucGFnZSA9IDE7XG5cbiAgICAgIC8vIHJvdXRlciBzaWduYWxcbiAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICBwYXRoOiBbXSxcbiAgICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19