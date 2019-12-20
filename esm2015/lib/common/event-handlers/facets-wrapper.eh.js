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
                        filter => {
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
        target => {
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
            key => queryParams[key] = queryParams[key] || null));
            // signal
            this.emitOuter('facetschange');
            // router signal
            this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsTUFBTSxPQUFPLGVBQWdCLFNBQVEsWUFBWTtJQUFqRDs7UUFDVSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QiwwQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNwRCwwQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQStGOUQsQ0FBQzs7OztJQTdGUSxNQUFNO1FBQ1gsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHNCQUFzQjtvQkFDekIsd0JBQXdCO29CQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7d0JBQ3RDLE9BQU87cUJBQ1I7MEJBQ0ssRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVk7OzBCQUNuRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7OzBCQUNsRCxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBRTNCLFNBQVM7b0JBQ1QsSUFBSSxDQUFDLFVBQVUs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QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUMsQ0FBQztZQUNyRixTQUFTO1lBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUUvQixnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixJQUFJLEVBQUUsRUFBRTtnQkFDUixXQUFXO2FBQ1osQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBRUY7Ozs7OztJQWpHQyx5Q0FBK0I7Ozs7O0lBQy9CLGdEQUE0RDs7Ozs7SUFDNUQsZ0RBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBfZmFjZXRzQ2hhbmdlZCA9IGZhbHNlO1xuICBwcml2YXRlIGludGVybmFsRmFjZXRzQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBleHRlcm5hbEZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICAvLyBsaXN0ZW4gdG8gaW5uZXIgKHdpZGdldCkgZXZlbnRzXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ZhY2V0cy13cmFwcGVyLmZhY2V0JzpcbiAgICAgICAgICAvLyBlbXB0eSBwYXlsb2FkIGNvbnRyb2xcbiAgICAgICAgICBpZiAoIXBheWxvYWQuZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB7IGZhY2V0SWQgfSA9IHBheWxvYWQuZXZlbnRQYXlsb2FkLmlucHV0UGF5bG9hZCxcbiAgICAgICAgICAgIGlucHV0ID0gdGhpcy5kYXRhU291cmNlLmdldElucHV0QnlGYWNldElkKGZhY2V0SWQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGlucHV0LmdldENvbnRleHQoKTtcbiAgICAgICAgICB0aGlzLl9mYWNldHNDaGFuZ2VkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIHVwZGF0ZVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkZhY2V0Q2hhbmdlKHBheWxvYWQpO1xuXG4gICAgICAgICAgLy8gaW50ZXJuYWxcbiAgICAgICAgICBpZiAoY29udGV4dCA9PT0gJ2ludGVybmFsJykge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZhY2V0c0NoYW5nZSQubmV4dChpbnB1dC5nZXRUYXJnZXQoKSk7XG4gICAgICAgICAgLy8gZXh0ZXJuYWxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5leHRlcm5hbEZhY2V0c0NoYW5nZSQubmV4dCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZhY2V0cy13cmFwcGVyLmZhY2V0aGVhZGVyJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlR3JvdXAocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGlmICh0eXBlLmluZGV4T2YoJ3F1ZXJ5cGFyYW1zY2hhbmdlJykgIT09IC0xICYmIHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbCkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhwYXlsb2FkKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0c0Zyb21GaWx0ZXJzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBsaXN0ZW4gdG8gZ2xvYmFsIGV2ZW50c1xuICAgIEV2ZW50SGFuZGxlci5nbG9iYWxFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdnbG9iYWwuc2VhcmNocmVzcG9uc2UnOlxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwgJiYgdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElkKCkgPT09IHBheWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVJbnB1dExpbmtzKCk7XG4gICAgICAgICAgICBjb25zdCBpbnRlcm5hbEZpbHRlcnMgPSB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0SW50ZXJuYWxGaWx0ZXJzKCk7XG5cbiAgICAgICAgICAgIGludGVybmFsRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKGZpbHRlci5mYWNldElkKTtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gaW5wdXQuZ2V0VGFyZ2V0KCk7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJUYXJnZXQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGludGVybmFsIGZhY2V0cyBjaGFuZ2VcbiAgICB0aGlzLmludGVybmFsRmFjZXRzQ2hhbmdlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMClcbiAgICApLnN1YnNjcmliZSh0YXJnZXQgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlclRhcmdldCh0YXJnZXQpO1xuICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCk7XG4gICAgfSk7XG5cbiAgICAvLyBpbnRlcm5hbCBmYWNldHMgY2hhbmdlXG4gICAgdGhpcy5leHRlcm5hbEZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXF1ZXN0UGFyYW1zKCksXG4gICAgICBxdWVyeVBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaChrZXkgPT4gcXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV0gfHwgbnVsbCk7XG4gICAgICAvLyBzaWduYWxcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHNjaGFuZ2UnKTtcblxuICAgICAgLy8gcm91dGVyIHNpZ25hbFxuICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgIHBhdGg6IFtdLFxuICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19