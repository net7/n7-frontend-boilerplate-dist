/**
 * @fileoverview added by tsickle
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
            function (key) { return queryParams[key] = queryParams[key] || null; }));
            // signal
            _this.emitOuter('facetschange');
            // router signal
            _this.emitGlobal('navigate', {
                handler: 'router',
                path: [],
                queryParams: queryParams
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDO0lBQXFDLDJDQUFZO0lBQWpEO1FBQUEscUVBc0ZDO1FBckZTLG9CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLDJCQUFxQixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3BELDJCQUFxQixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDOztJQW1GOUQsQ0FBQzs7OztJQWpGUSxnQ0FBTTs7O0lBQWI7UUFBQSxpQkErRUM7UUE5RUMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssc0JBQXNCO29CQUNqQixJQUFBLG1EQUFPOzt3QkFDYixLQUFLLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7O3dCQUNsRCxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDOUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7b0JBRTNCLFNBQVM7b0JBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXZDLFdBQVc7b0JBQ1gsSUFBSSxPQUFPLEtBQUssVUFBVSxFQUFFO3dCQUMxQixLQUFJLENBQUMscUJBQXFCLENB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ZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIF9mYWNldHNDaGFuZ2VkID0gZmFsc2U7XG4gIHByaXZhdGUgaW50ZXJuYWxGYWNldHNDaGFuZ2UkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGV4dGVybmFsRmFjZXRzQ2hhbmdlJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIC8vIGxpc3RlbiB0byBpbm5lciAod2lkZ2V0KSBldmVudHNcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXQnOlxuICAgICAgICAgIGNvbnN0IHsgZmFjZXRJZCB9ID0gcGF5bG9hZC5ldmVudFBheWxvYWQuaW5wdXRQYXlsb2FkLFxuICAgICAgICAgICAgaW5wdXQgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0SW5wdXRCeUZhY2V0SWQoZmFjZXRJZCksXG4gICAgICAgICAgICBjb250ZXh0ID0gaW5wdXQuZ2V0Q29udGV4dCgpO1xuICAgICAgICAgIHRoaXMuX2ZhY2V0c0NoYW5nZWQgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gdXBkYXRlXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRmFjZXRDaGFuZ2UocGF5bG9hZCk7XG5cbiAgICAgICAgICAvLyBpbnRlcm5hbFxuICAgICAgICAgIGlmIChjb250ZXh0ID09PSAnaW50ZXJuYWwnKSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRmFjZXRzQ2hhbmdlJC5uZXh0KGlucHV0LmdldFRhcmdldCgpKTtcbiAgICAgICAgICAvLyBleHRlcm5hbFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4dGVybmFsRmFjZXRzQ2hhbmdlJC5uZXh0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmFjZXRzLXdyYXBwZXIuZmFjZXRoZWFkZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVHcm91cChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgaWYgKHR5cGUuaW5kZXhPZigncXVlcnlwYXJhbXNjaGFuZ2UnKSAhPT0gLTEgJiYgdGhpcy5kYXRhU291cmNlLnNlYXJjaE1vZGVsKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVGaWx0ZXJzRnJvbVF1ZXJ5UGFyYW1zKHBheWxvYWQpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRzRnJvbUZpbHRlcnMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGxpc3RlbiB0byBnbG9iYWwgZXZlbnRzXG4gICAgRXZlbnRIYW5kbGVyLmdsb2JhbEV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2dsb2JhbC5zZWFyY2hyZXNwb25zZSc6XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5zZWFyY2hNb2RlbCAmJiB0aGlzLmRhdGFTb3VyY2Uuc2VhcmNoTW9kZWwuZ2V0SWQoKSA9PT0gcGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0TGlua3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGludGVybmFsIGZhY2V0cyBjaGFuZ2VcbiAgICB0aGlzLmludGVybmFsRmFjZXRzQ2hhbmdlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwMClcbiAgICApLnN1YnNjcmliZSh0YXJnZXQgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlclRhcmdldCh0YXJnZXQpO1xuICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUZpbHRlcmVkVGFyZ2V0KHRhcmdldCk7XG4gICAgfSk7XG5cbiAgICAvLyBpbnRlcm5hbCBmYWNldHMgY2hhbmdlXG4gICAgdGhpcy5leHRlcm5hbEZhY2V0c0NoYW5nZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdFBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXF1ZXN0UGFyYW1zKCksXG4gICAgICBxdWVyeVBhcmFtcyA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzQXNRdWVyeVBhcmFtcyhyZXF1ZXN0UGFyYW1zLmZpbHRlcnMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcykuZm9yRWFjaChrZXkgPT4gcXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV0gfHwgbnVsbCk7XG4gICAgICAvLyBzaWduYWxcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHNjaGFuZ2UnKTtcblxuICAgICAgLy8gcm91dGVyIHNpZ25hbFxuICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgIHBhdGg6IFtdLFxuICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19