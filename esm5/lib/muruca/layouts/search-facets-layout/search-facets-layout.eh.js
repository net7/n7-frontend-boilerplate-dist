/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, filter } from 'rxjs/operators';
import { INPUT_STATE_CONTEXT, FACET_STATE_CONTEXT, FACETS_REQUEST_STATE_CONTEXT } from '../../services/search.service';
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
        this.searchService.getState$(FACETS_REQUEST_STATE_CONTEXT, 'success')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBRUwsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQiw0QkFBNEIsRUFDN0IsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUV2Qyw4QkFFQztBQUVEO0lBQTBDLGdEQUFZO0lBQXREO1FBQUEscUVBK0ZDO1FBOUZDLGNBQVEsR0FBb0IsRUFBRSxDQUFDO1FBRXZCLGdCQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7O0lBNEZ2RCxDQUFDOzs7O0lBeEZRLHFDQUFNOzs7SUFBYjtRQUFBLGlCQTBCQztRQXpCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxZQUFZO29CQUNaLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7b0JBQ3pELEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QixPQUFPO29CQUNQLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxD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QUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQzthQUM5QyxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFDMUIsTUFBTTs7OztRQUFDLFVBQUMsRUFBZTtnQkFBYiw0QkFBVztZQUFPLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQXJDLENBQXFDLEVBQUMsQ0FDbkUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFzQjtnQkFBcEIsNEJBQVcsRUFBRSxnQkFBSzs7Z0JBQ3pCLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQztRQUVMLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsRUFBRSxTQUFTLENBQUM7YUFDbEUsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBVztnQkFBVCxvQkFBTztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBL0ZELENBQTBDLFlBQVksR0ErRnJEOzs7O0lBOUZDLHdDQUErQjs7Ozs7SUFFL0IsMENBQXFEOzs7OztJQUVyRCw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgTXJTZWFyY2hTZXJ2aWNlLFxuICBJTlBVVF9TVEFURV9DT05URVhULFxuICBGQUNFVF9TVEFURV9DT05URVhULFxuICBGQUNFVFNfUkVRVUVTVF9TVEFURV9DT05URVhUXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlYXJjaC5zZXJ2aWNlJztcblxuaW50ZXJmYWNlIENoYW5nZWRTdWJqZWN0cyB7XG4gIFtrZXk6IHN0cmluZ106IFN1YmplY3Q8YW55Pjtcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgY2hhbmdlZCQ6IENoYW5nZWRTdWJqZWN0cyA9IHt9O1xuXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlID0gcGF5bG9hZC5zZWFyY2hTZXJ2aWNlO1xuICAgICAgICAgIC8vIGxpc3RlbmVyc1xuICAgICAgICAgIHRoaXMuaW5pdENoYW5nZWRMaXN0ZW5lcih0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0Q29uZmlnKCkpO1xuICAgICAgICAgIHRoaXMuaW5pdFN0YXRlTGlzdGVuZXIoKTtcbiAgICAgICAgICAvLyBpbml0XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtZmFjZXRzLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBpZiAodHlwZS5pbmRleE9mKCdjaGFuZ2UnKSkge1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3BheWxvYWQuaWRdLm5leHQocGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0Q2hhbmdlZExpc3RlbmVyKHsgZmFjZXRzIH0pIHtcbiAgICBmYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc291cmNlczoge1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICBkZWxheTogbnVtYmVyO1xuICAgICAgfVtdID0gW107XG5cbiAgICAgIGlmIChzZWN0aW9uLmhlYWRlcikge1xuICAgICAgICBjb25zdCB7IGlkLCBkZWxheSB9ID0gc2VjdGlvbi5oZWFkZXI7XG4gICAgICAgIHNvdXJjZXMucHVzaCh7IGlkLCBkZWxheSB9KTtcbiAgICAgIH1cbiAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKHsgaWQsIGRlbGF5IH0pID0+IHtcbiAgICAgICAgc291cmNlcy5wdXNoKHsgaWQsIGRlbGF5IH0pO1xuICAgICAgfSk7XG4gICAgICBzb3VyY2VzLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3NvdXJjZS5pZF0gPSBuZXcgU3ViamVjdCgpO1xuICAgICAgICB0aGlzLmNoYW5nZWQkW3NvdXJjZS5pZF0ucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoc291cmNlLmRlbGF5IHx8IDEpXG4gICAgICAgICkuc3Vic2NyaWJlKCh7IGlkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNldFN0YXRlKCdpbnB1dCcsIGlkLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0U3RhdGVMaXN0ZW5lcigpIHtcbiAgICAvLyBsaXN0ZW5lciBmb3IgaW5wdXQgdXBkYXRlc1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoSU5QVVRfU1RBVEVfQ09OVEVYVClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSxcbiAgICAgICAgZmlsdGVyKCh7IGxhc3RVcGRhdGVkIH0pID0+IHRoaXMuZGF0YVNvdXJjZS5pbnB1dHNEU1tsYXN0VXBkYXRlZF0pXG4gICAgICApLnN1YnNjcmliZSgoeyBsYXN0VXBkYXRlZCwgc3RhdGUgfSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHN0YXRlW2xhc3RVcGRhdGVkXTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsZWFySW5wdXQobGFzdFVwZGF0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVJbnB1dFZhbHVlKGxhc3RVcGRhdGVkLCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gbGlzdGVuZXIgZm9yIGZhY2V0IHVwZGF0ZXNcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZ2V0U3RhdGUkKEZBQ0VUX1NUQVRFX0NPTlRFWFQpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCksXG4gICAgICAgIGZpbHRlcigoeyBsYXN0VXBkYXRlZCB9KSA9PiB0aGlzLmRhdGFTb3VyY2UuaW5wdXRzRFNbbGFzdFVwZGF0ZWRdKVxuICAgICAgKS5zdWJzY3JpYmUoKHsgbGFzdFVwZGF0ZWQsIHN0YXRlIH0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHN0YXRlW2xhc3RVcGRhdGVkXTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0RGF0YShsYXN0VXBkYXRlZCwgbmV3RGF0YSk7XG4gICAgICB9KTtcblxuICAgIC8vIGxpc3RlbmVyIGZvciBmYWNldCBoZWFkZXIgdXBkYXRlc1xuICAgIHRoaXMuc2VhcmNoU2VydmljZS5nZXRTdGF0ZSQoRkFDRVRTX1JFUVVFU1RfU1RBVEVfQ09OVEVYVCwgJ3N1Y2Nlc3MnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXG4gICAgICApLnN1YnNjcmliZSgoeyBoZWFkZXJzIH0pID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXRWYWx1ZShpZCwgaGVhZGVyc1tpZF0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=