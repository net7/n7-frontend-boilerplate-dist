/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, filter } from 'rxjs/operators';
import { INPUT_STATE_CONTEXT, FACET_STATE_CONTEXT, RESULTS_STATE_CONTEXT } from '../../services/search.service';
/**
 * @record
 */
function ChangedSubjects() { }
var SearchFacetsLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(SearchFacetsLayoutEH, _super);
    function SearchFacetsLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changed$ = {};
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    SearchFacetsLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-search-facets-layout.init':
                    _this.searchService = payload.searchService;
                    // listeners
                    _this.initChangedListener(_this.searchService.getConfig());
                    _this.initStateListener();
                    // init
                    _this.dataSource.onInit(payload);
                    break;
                case 'mr-search-facets-layout.destroy':
                    _this.destroyed$.next();
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
            if (type.indexOf('change')) {
                _this.changed$[payload.id].next(payload);
            }
        }));
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    SearchFacetsLayoutEH.prototype.initChangedListener = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var facets = _a.facets;
        facets.sections.forEach((/**
         * @param {?} section
         * @return {?}
         */
        function (section) {
            /** @type {?} */
            var sources = [];
            if (section.header) {
                var _a = section.header, id = _a.id, delay = _a.delay;
                sources.push({ id: id, delay: delay });
            }
            section.inputs.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var id = _a.id, delay = _a.delay;
                sources.push({ id: id, delay: delay });
            }));
            sources.forEach((/**
             * @param {?} source
             * @return {?}
             */
            function (source) {
                _this.changed$[source.id] = new Subject();
                _this.changed$[source.id].pipe(debounceTime(source.delay || 1)).subscribe((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var id = _a.id, value = _a.value;
                    _this.searchService.setState('input', id, value);
                }));
            }));
        }));
    };
    /**
     * @return {?}
     */
    SearchFacetsLayoutEH.prototype.initStateListener = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // listener for input updates
        this.searchService.getState$(INPUT_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var lastUpdated = _a.lastUpdated;
            return _this.dataSource.inputsDS[lastUpdated];
        }))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var lastUpdated = _a.lastUpdated, state = _a.state;
            /** @type {?} */
            var newValue = state[lastUpdated];
            if (newValue === null) {
                _this.dataSource.clearInput(lastUpdated);
            }
            else {
                _this.dataSource.updateInputValue(lastUpdated, newValue);
            }
        }));
        // listener for facet updates
        this.searchService.getState$(FACET_STATE_CONTEXT)
            .pipe(takeUntil(this.destroyed$), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var lastUpdated = _a.lastUpdated;
            return _this.dataSource.inputsDS[lastUpdated];
        }))).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var lastUpdated = _a.lastUpdated, state = _a.state;
            /** @type {?} */
            var newData = state[lastUpdated];
            _this.dataSource.updateInputData(lastUpdated, newData);
        }));
        // listener for facet header updates
        this.searchService.getState$(RESULTS_STATE_CONTEXT, 'success')
            .pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var headers = _a.headers;
            Object.keys(headers).forEach((/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                _this.dataSource.updateInputValue(id, headers[id]);
            }));
        }));
    };
    return SearchFacetsLayoutEH;
}(EventHandler));
export { SearchFacetsLayoutEH };
if (false) {
    /** @type {?} */
    SearchFacetsLayoutEH.prototype.changed$;
    /**
     * @type {?}
     * @private
     */
    SearchFacetsLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    SearchFacetsLayoutEH.prototype.searchService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBRUwsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixxQkFBcUIsRUFDdEIsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUV2Qyw4QkFFQztBQUVEO0lBQTBDLGdEQUFZO0lBQXREO1FBQUEscUVBK0ZDO1FBOUZDLGNBQVEsR0FBb0IsRUFBRSxDQUFDO1FBRXZCLGdCQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBNEZ2RCxDQUFDOzs7O0lBeEZRLHFDQUFNOzs7SUFBYjtRQUFBLGlCQTBCQztRQXpCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxZQUFZO29CQUNaLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7b0JBQ3pELEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QixPQUFPO29CQUNQLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxD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QUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQzthQUM5QyxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDMUIsTUFBTTs7OztRQUFDLFVBQUMsRUFBZTtnQkFBYiw0QkFBVztZQUFPLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQXJDLENBQXFDLEVBQUMsQ0FDbkUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFzQjtnQkFBcEIsNEJBQVcsRUFBRSxnQkFBSzs7Z0JBQ3pCLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQztRQUVMLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUM7YUFDM0QsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBVztnQkFBVCxvQkFBTztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBL0ZELENBQTBDLFlBQVksR0ErRnJEOzs7O0lBOUZDLHdDQUErQjs7Ozs7SUFFL0IsMENBQXFEOzs7OztJQUVyRCw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgTXJTZWFyY2hTZXJ2aWNlLFxuICBJTlBVVF9TVEFURV9DT05URVhULFxuICBGQUNFVF9TVEFURV9DT05URVhULFxuICBSRVNVTFRTX1NUQVRFX0NPTlRFWFRcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgQ2hhbmdlZFN1YmplY3RzIHtcbiAgW2tleTogc3RyaW5nXTogU3ViamVjdDxhbnk+O1xufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFjZXRzTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBjaGFuZ2VkJDogQ2hhbmdlZFN1YmplY3RzID0ge307XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zZWFyY2gtZmFjZXRzLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XG4gICAgICAgICAgLy8gbGlzdGVuZXJzXG4gICAgICAgICAgdGhpcy5pbml0Q2hhbmdlZExpc3RlbmVyKHRoaXMuc2VhcmNoU2VydmljZS5nZXRDb25maWcoKSk7XG4gICAgICAgICAgdGhpcy5pbml0U3RhdGVMaXN0ZW5lcigpO1xuICAgICAgICAgIC8vIGluaXRcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGlmICh0eXBlLmluZGV4T2YoJ2NoYW5nZScpKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCRbcGF5bG9hZC5pZF0ubmV4dChwYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRDaGFuZ2VkTGlzdGVuZXIoeyBmYWNldHMgfSkge1xuICAgIGZhY2V0cy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VzOiB7XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgIGRlbGF5OiBudW1iZXI7XG4gICAgICB9W10gPSBbXTtcblxuICAgICAgaWYgKHNlY3Rpb24uaGVhZGVyKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIGRlbGF5IH0gPSBzZWN0aW9uLmhlYWRlcjtcbiAgICAgICAgc291cmNlcy5wdXNoKHsgaWQsIGRlbGF5IH0pO1xuICAgICAgfVxuICAgICAgc2VjdGlvbi5pbnB1dHMuZm9yRWFjaCgoeyBpZCwgZGVsYXkgfSkgPT4ge1xuICAgICAgICBzb3VyY2VzLnB1c2goeyBpZCwgZGVsYXkgfSk7XG4gICAgICB9KTtcbiAgICAgIHNvdXJjZXMuZm9yRWFjaCgoc291cmNlKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCRbc291cmNlLmlkXSA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZCRbc291cmNlLmlkXS5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZShzb3VyY2UuZGVsYXkgfHwgMSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKHsgaWQsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2V0U3RhdGUoJ2lucHV0JywgaWQsIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRTdGF0ZUxpc3RlbmVyKCkge1xuICAgIC8vIGxpc3RlbmVyIGZvciBpbnB1dCB1cGRhdGVzXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChJTlBVVF9TVEFURV9DT05URVhUKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICAgICBmaWx0ZXIoKHsgbGFzdFVwZGF0ZWQgfSkgPT4gdGhpcy5kYXRhU291cmNlLmlucHV0c0RTW2xhc3RVcGRhdGVkXSlcbiAgICAgICkuc3Vic2NyaWJlKCh7IGxhc3RVcGRhdGVkLCBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gc3RhdGVbbGFzdFVwZGF0ZWRdO1xuICAgICAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2xlYXJJbnB1dChsYXN0VXBkYXRlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0VmFsdWUobGFzdFVwZGF0ZWQsIG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyBsaXN0ZW5lciBmb3IgZmFjZXQgdXBkYXRlc1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoRkFDRVRfU1RBVEVfQ09OVEVYVClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMuZGF0YVNvdXJjZS5pbnB1dHNEU1tsYXN0VXBkYXRlZF0pXG4gICAgICApLnN1YnNjcmliZSgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gc3RhdGVbbGFzdFVwZGF0ZWRdO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXREYXRhKGxhc3RVcGRhdGVkLCBuZXdEYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuZXIgZm9yIGZhY2V0IGhlYWRlciB1cGRhdGVzXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLmdldFN0YXRlJChSRVNVTFRTX1NUQVRFX0NPTlRFWFQsICdzdWNjZXNzJylcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKVxuICAgICAgKS5zdWJzY3JpYmUoKHsgaGVhZGVycyB9KSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0VmFsdWUoaWQsIGhlYWRlcnNbaWRdKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxufVxuIl19