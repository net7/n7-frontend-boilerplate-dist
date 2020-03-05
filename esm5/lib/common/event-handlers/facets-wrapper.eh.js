/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/event-handlers/facets-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var FacetsWrapperEH = /** @class */ (function (_super) {
    tslib_1.__extends(FacetsWrapperEH, _super);
    function FacetsWrapperEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._facetsChanged = false;
        _this.internalFacetsChange$ = new Subject();
        _this.externalFacetsChange$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    FacetsWrapperEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // listen to inner (widget) events
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'facets-wrapper.facet':
                    {
                        // empty payload control
                        if (!payload.eventPayload.inputPayload) {
                            return;
                        }
                        var facetId = payload.eventPayload.inputPayload.facetId;
                        /** @type {?} */
                        var input = _this.dataSource.getInputByFacetId(facetId);
                        /** @type {?} */
                        var context = input.getContext();
                        _this._facetsChanged = true;
                        // update
                        _this.dataSource.onFacetChange(payload);
                        // internal
                        if (context === 'internal') {
                            _this.internalFacetsChange$.next(input.getTarget());
                            // external
                        }
                        else {
                            _this.externalFacetsChange$.next();
                        }
                    }
                    break;
                case 'facets-wrapper.facetheader':
                    _this.dataSource.toggleGroup(payload);
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type.indexOf('queryparamschange') !== -1 && _this.dataSource.searchModel) {
                _this.dataSource.updateFiltersFromQueryParams(payload);
                _this.dataSource.updateInputsFromFilters();
            }
        }));
        // listen to global events
        EventHandler.globalEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'global.searchresponse':
                    if (_this.dataSource.searchModel && _this.dataSource.searchModel.getId() === payload) {
                        _this.dataSource.updateInputLinks();
                        /** @type {?} */
                        var internalFilters = _this.dataSource.searchModel.getInternalFilters();
                        internalFilters.forEach((/**
                         * @param {?} filter
                         * @return {?}
                         */
                        function (filter) {
                            /** @type {?} */
                            var input = _this.dataSource.searchModel.getInputByFacetId(filter.facetId);
                            /** @type {?} */
                            var target = input.getTarget();
                            _this.dataSource.filterTarget(target);
                            _this.dataSource.updateFilteredTarget(target);
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
        function (target) {
            _this.dataSource.filterTarget(target);
            _this.dataSource.updateFilteredTarget(target);
        }));
        // internal facets change
        this.externalFacetsChange$.pipe(debounceTime(500)).subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var requestParams = _this.dataSource.getRequestParams();
            /** @type {?} */
            var queryParams = _this.dataSource.filtersAsQueryParams(requestParams.filters);
            Object.keys(queryParams).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { queryParams[key] = queryParams[key] || null; }));
            // signal
            _this.emitOuter('facetschange');
            // reset page
            queryParams.page = 1;
            // router signal
            _this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams: queryParams,
            });
        }));
    };
    return FacetsWrapperEH;
}(EventHandler));
export { FacetsWrapperEH };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQUFxQywyQ0FBWTtJQUFqRDtRQUFBLHFFQXNHQztRQXJHUyxvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QiwyQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVwRCwyQkFBcUIsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFpRzlELENBQUM7Ozs7SUEvRlEsZ0NBQU07OztJQUFiO1FBQUEsaUJBOEZDO1FBN0ZDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHNCQUFzQjtvQkFBRTt3QkFDM0Isd0JBQXdCO3dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7NEJBQ3RDLE9BQU87eUJBQ1I7d0JBQ08sSUFBQSxtREFBTzs7NEJBQ1QsS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOzs0QkFDbEQsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7d0JBQ2xDLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUUzQixTQUFTO3dCQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFD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QUMsR0FBRyxJQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDNUYsU0FBUztZQUNULEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFL0IsYUFBYTtZQUNiLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLGdCQUFnQjtZQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLElBQUksRUFBRSxFQUFFO2dCQUNSLFdBQVcsYUFBQTthQUNaLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXRHRCxDQUFxQyxZQUFZLEdBc0doRDs7Ozs7OztJQXJHQyx5Q0FBK0I7Ozs7O0lBRS9CLGdEQUE0RDs7Ozs7SUFFNUQsZ0RBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgX2ZhY2V0c0NoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBpbnRlcm5hbEZhY2V0c0NoYW5nZSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgZXh0ZXJuYWxGYWNldHNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgLy8gbGlzdGVuIHRvIGlubmVyICh3aWRnZXQpIGV2ZW50c1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdmYWNldHMtd3JhcHBlci5mYWNldCc6IHtcclxuICAgICAgICAgIC8vIGVtcHR5IHBheWxvYWQgY29udHJvbFxyXG4gICAgICAgICAgaWYgKCFwYXlsb2FkLmV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgeyBmYWNldElkIH0gPSBwYXlsb2FkLmV2ZW50UGF5bG9hZC5pbnB1dFBheWxvYWQ7XHJcbiAgICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuZGF0YVNvdXJjZS5nZXRJbnB1dEJ5RmFjZXRJZChmYWNldElkKTtcclxuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBpbnB1dC5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgICB0aGlzLl9mYWNldHNDaGFuZ2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAvLyB1cGRhdGVcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkZhY2V0Q2hhbmdlKHBheWxvYWQpO1xyXG5cclxuICAgICAgICAgIC8vIGludGVybmFsXHJcbiAgICAgICAgICBpZiAoY29udGV4dCA9PT0gJ2ludGVybmFsJykge1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsRmFjZXRzQ2hhbmdlJC5uZXh0KGlucHV0LmdldFRhcmdldCgpKTtcclxuICAgICAgICAgICAgLy8gZXh0ZXJuYWxcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZXJuYWxGYWNldHNDaGFuZ2UkLm5leHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRoZWFkZXInOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZUdyb3VwKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdxdWVyeXBhcmFtc2NoYW5nZScpICE9PSAtMSAmJiB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlRmlsdGVyc0Zyb21RdWVyeVBhcmFtcyhwYXlsb2FkKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGlzdGVuIHRvIGdsb2JhbCBldmVudHNcclxuICAgIEV2ZW50SGFuZGxlci5nbG9iYWxFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnZ2xvYmFsLnNlYXJjaHJlc3BvbnNlJzpcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwgJiYgdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElkKCkgPT09IHBheWxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0TGlua3MoKTtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJuYWxGaWx0ZXJzID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldEludGVybmFsRmlsdGVycygpO1xyXG5cclxuICAgICAgICAgICAgaW50ZXJuYWxGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsLmdldElucHV0QnlGYWNldElkKGZpbHRlci5mYWNldElkKTtcclxuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBpbnB1dC5nZXRUYXJnZXQoKTtcclxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyVGFyZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW50ZXJuYWwgZmFjZXRzIGNoYW5nZVxyXG4gICAgdGhpcy5pbnRlcm5hbEZhY2V0c0NoYW5nZSQucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICApLnN1YnNjcmliZSgodGFyZ2V0KSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJUYXJnZXQodGFyZ2V0KTtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbnRlcm5hbCBmYWNldHMgY2hhbmdlXHJcbiAgICB0aGlzLmV4dGVybmFsRmFjZXRzQ2hhbmdlJC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXF1ZXN0UGFyYW1zKCk7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcnNBc1F1ZXJ5UGFyYW1zKHJlcXVlc3RQYXJhbXMuZmlsdGVycyk7XHJcblxyXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7IHF1ZXJ5UGFyYW1zW2tleV0gPSBxdWVyeVBhcmFtc1trZXldIHx8IG51bGw7IH0pO1xyXG4gICAgICAvLyBzaWduYWxcclxuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c2NoYW5nZScpO1xyXG5cclxuICAgICAgLy8gcmVzZXQgcGFnZVxyXG4gICAgICBxdWVyeVBhcmFtcy5wYWdlID0gMTtcclxuXHJcbiAgICAgIC8vIHJvdXRlciBzaWduYWxcclxuICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcclxuICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICBwYXRoOiBbXSxcclxuICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19