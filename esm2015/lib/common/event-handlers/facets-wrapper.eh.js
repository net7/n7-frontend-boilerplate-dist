/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class FacetsWrapperEH extends EventHandler {
    constructor() {
        super(...arguments);
        this._facetsChanged = false;
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
                        this.dataSource.filterTarget(input.getTarget());
                        this.dataSource.updateFilteredTarget(input.getTarget());
                        // external
                    }
                    else {
                        /** @type {?} */
                        const requestParams = this.dataSource.getRequestParams();
                        /** @type {?} */
                        const queryParams = this.dataSource.filtersAsQueryParams(requestParams.filters);
                        Object.keys(queryParams).forEach((/**
                         * @param {?} key
                         * @return {?}
                         */
                        key => queryParams[key] = queryParams[key] || null));
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [],
                            queryParams
                        });
                    }
                    break;
                case 'facets-wrapper.facetheader':
                    this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        }));
        // listen to outer events
        EventHandler.globalEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'global.queryparams':
                    if (!this._facetsChanged) {
                        this.dataSource.updateFiltersFromQueryParams(payload);
                        this.dataSource.updateInputsFromFilters();
                    }
                    break;
                default:
                    break;
            }
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FacetsWrapperEH.prototype._facetsChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsWUFBWTtJQUFqRDs7UUFDVSxtQkFBYyxHQUFZLEtBQUssQ0FBQztJQTREMUMsQ0FBQzs7OztJQTFEUSxNQUFNO1FBQ1gsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLHNCQUFzQjswQkFDbkIsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVk7OzBCQUNuRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7OzBCQUNsRCxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBRTNCLFNBQVM7b0JBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXZDLFdBQVc7b0JBQ1gsSUFBRyxPQUFPLEtBQUssVUFBVSxFQUFDO3dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzt3QkFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzt3QkFFeEQsV0FBVztxQkFDWjt5QkFBTTs7OEJBQ0MsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7OzhCQUN0RCxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO3dCQUUzRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU87Ozs7d0JBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBQyxDQUFDO3dCQUVyRixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTs0QkFDMUIsT0FBTyxFQUFFLFFBQVE7NEJBQ2pCLElBQUksRUFBRSxFQUFFOzRCQUNSLFdBQVc7eUJBQ1osQ0FBQyxDQUFDO3FCQUNKO29CQUVELE1BQU07Z0JBRVIsS0FBSyw0QkFBNEI7b0JBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUVSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgseUJBQXlCO1FBQ3pCLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUN6RCxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLG9CQUFvQjtvQkFDdkIsSUFBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUM7d0JBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztxQkFDM0M7b0JBQ0QsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7Ozs7O0lBNURDLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEZhY2V0c1dyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgX2ZhY2V0c0NoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIC8vIGxpc3RlbiB0byBpbm5lciAod2lkZ2V0KSBldmVudHNcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2ZhY2V0cy13cmFwcGVyLmZhY2V0JzpcbiAgICAgICAgICBjb25zdCB7IGZhY2V0SWQgfSA9IHBheWxvYWQuZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZCxcbiAgICAgICAgICAgIGlucHV0ID0gdGhpcy5kYXRhU291cmNlLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGlucHV0LmdldENvbnRleHQoKTtcbiAgICAgICAgICB0aGlzLl9mYWNldHNDaGFuZ2VkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIHVwZGF0ZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkZhY2V0Q2hhbmdlKHBheWxvYWQpO1xuXG4gICAgICAgICAgLy8gaW50ZXJuYWxcbiAgICAgICAgICBpZihjb250ZXh0ID09PSAnaW50ZXJuYWwnKXtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJUYXJnZXQoaW5wdXQuZ2V0VGFyZ2V0KCkpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KGlucHV0LmdldFRhcmdldCgpKTtcblxuICAgICAgICAgICAgLy8gZXh0ZXJuYWxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXF1ZXN0UGFyYW1zKCksXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKHJlcXVlc3RQYXJhbXMuZmlsdGVycyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKGtleSA9PiBxdWVyeVBhcmFtc1trZXldID0gcXVlcnlQYXJhbXNba2V5XSB8fCBudWxsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtdLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRoZWFkZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVHcm91cChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGxpc3RlbiB0byBvdXRlciBldmVudHNcbiAgICBFdmVudEhhbmRsZXIuZ2xvYmFsRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgJ2dsb2JhbC5xdWVyeXBhcmFtcyc6XG4gICAgICAgICAgaWYoIXRoaXMuX2ZhY2V0c0NoYW5nZWQpe1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcnNGcm9tUXVlcnlQYXJhbXMocGF5bG9hZCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=