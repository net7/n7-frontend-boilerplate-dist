/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
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
                    _this.hostEmit$ = payload.hostEmit$;
                    _this.guestEmit$ = payload.guestEmit$;
                    // listeners
                    _this.listenFacetsReady();
                    _this.listenToHost();
                    _this.initChangedListener(payload.data);
                    // init
                    _this.dataSource.onInit(payload);
                    break;
                case 'mr-search-facets-layout.destroy':
                    _this.dataSource.onDestroy();
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
     * @param {?} data
     * @return {?}
     */
    SearchFacetsLayoutEH.prototype.initChangedListener = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        data.sections.forEach((/**
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
                 * @param {?} payload
                 * @return {?}
                 */
                function (payload) {
                    _this.guestEmit$.next({
                        payload: payload,
                        type: 'change'
                    });
                }));
            }));
        }));
    };
    /**
     * @return {?}
     */
    SearchFacetsLayoutEH.prototype.listenFacetsReady = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataSource.ready$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.guestEmit$.next({
                type: 'facetsready'
            });
        }));
    };
    /**
     * @return {?}
     */
    SearchFacetsLayoutEH.prototype.listenToHost = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hostEmit$.pipe(takeUntil(this.destroyed$)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'updateinputvalue':
                    _this.dataSource.updateInputValue(payload.id, payload.value);
                    break;
                case 'updateinputdata':
                    _this.dataSource.updateInputData(payload.id, payload.data);
                    break;
                case 'clearinput':
                    _this.dataSource.clearInput(payload.id);
                    break;
                case 'clearinputs':
                    _this.dataSource.clearInputs();
                    break;
                default:
                    break;
            }
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
    SearchFacetsLayoutEH.prototype.hostEmit$;
    /**
     * @type {?}
     * @private
     */
    SearchFacetsLayoutEH.prototype.guestEmit$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBR3pELDhCQUVDO0FBRUQ7SUFBMEMsZ0RBQVk7SUFBdEQ7UUFBQSxxRUFxR0M7UUFwR0MsY0FBUSxHQUFvQixFQUFFLENBQUM7UUFFdkIsZ0JBQVUsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFrR3ZELENBQUM7Ozs7SUE1RlEscUNBQU07OztJQUFiO1FBQUEsaUJBNEJDO1FBM0JDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssOEJBQThCO29CQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztvQkFDckMsWUFBWTtvQkFDWixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNwQixLQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QyxPQUFPO29CQUNQLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFD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LFlBQVk7b0JBQ2YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN2QyxNQUFNO2dCQUVSLEtBQUssYUFBYTtvQkFDaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDOUIsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFyR0QsQ0FBMEMsWUFBWSxHQXFHckQ7Ozs7SUFwR0Msd0NBQStCOzs7OztJQUUvQiwwQ0FBcUQ7Ozs7O0lBRXJELHlDQUFnQzs7Ozs7SUFFaEMsMENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNDb25maWcgfSBmcm9tICcuL3NlYXJjaC1mYWNldHMtY29uZmlnJztcblxuaW50ZXJmYWNlIENoYW5nZWRTdWJqZWN0cyB7XG4gIFtrZXk6IHN0cmluZ106IFN1YmplY3Q8YW55Pjtcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgY2hhbmdlZCQ6IENoYW5nZWRTdWJqZWN0cyA9IHt9O1xuXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBob3N0RW1pdCQ6IFN1YmplY3Q8YW55PjtcblxuICBwcml2YXRlIGd1ZXN0RW1pdCQ6IFN1YmplY3Q8YW55PjtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zZWFyY2gtZmFjZXRzLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmhvc3RFbWl0JCA9IHBheWxvYWQuaG9zdEVtaXQkO1xuICAgICAgICAgIHRoaXMuZ3Vlc3RFbWl0JCA9IHBheWxvYWQuZ3Vlc3RFbWl0JDtcbiAgICAgICAgICAvLyBsaXN0ZW5lcnNcbiAgICAgICAgICB0aGlzLmxpc3RlbkZhY2V0c1JlYWR5KCk7XG4gICAgICAgICAgdGhpcy5saXN0ZW5Ub0hvc3QoKTtcbiAgICAgICAgICB0aGlzLmluaXRDaGFuZ2VkTGlzdGVuZXIocGF5bG9hZC5kYXRhKTtcbiAgICAgICAgICAvLyBpbml0XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtci1zZWFyY2gtZmFjZXRzLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGlmICh0eXBlLmluZGV4T2YoJ2NoYW5nZScpKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCRbcGF5bG9hZC5pZF0ubmV4dChwYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRDaGFuZ2VkTGlzdGVuZXIoZGF0YTogU2VhcmNoRmFjZXRzQ29uZmlnKSB7XG4gICAgZGF0YS5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VzOiB7XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgIGRlbGF5OiBudW1iZXI7XG4gICAgICB9W10gPSBbXTtcblxuICAgICAgaWYgKHNlY3Rpb24uaGVhZGVyKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIGRlbGF5IH0gPSBzZWN0aW9uLmhlYWRlcjtcbiAgICAgICAgc291cmNlcy5wdXNoKHsgaWQsIGRlbGF5IH0pO1xuICAgICAgfVxuICAgICAgc2VjdGlvbi5pbnB1dHMuZm9yRWFjaCgoeyBpZCwgZGVsYXkgfSkgPT4ge1xuICAgICAgICBzb3VyY2VzLnB1c2goeyBpZCwgZGVsYXkgfSk7XG4gICAgICB9KTtcbiAgICAgIHNvdXJjZXMuZm9yRWFjaCgoc291cmNlKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCRbc291cmNlLmlkXSA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZCRbc291cmNlLmlkXS5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZShzb3VyY2UuZGVsYXkgfHwgMSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKHBheWxvYWQpID0+IHtcbiAgICAgICAgICB0aGlzLmd1ZXN0RW1pdCQubmV4dCh7XG4gICAgICAgICAgICBwYXlsb2FkLFxuICAgICAgICAgICAgdHlwZTogJ2NoYW5nZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGxpc3RlbkZhY2V0c1JlYWR5KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5yZWFkeSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZ3Vlc3RFbWl0JC5uZXh0KHtcbiAgICAgICAgdHlwZTogJ2ZhY2V0c3JlYWR5J1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW5Ub0hvc3QoKSB7XG4gICAgdGhpcy5ob3N0RW1pdCQucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpXG4gICAgKS5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndXBkYXRlaW5wdXR2YWx1ZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUlucHV0VmFsdWUocGF5bG9hZC5pZCwgcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAndXBkYXRlaW5wdXRkYXRhJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlSW5wdXREYXRhKHBheWxvYWQuaWQsIHBheWxvYWQuZGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnY2xlYXJpbnB1dCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNsZWFySW5wdXQocGF5bG9hZC5pZCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnY2xlYXJpbnB1dHMnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jbGVhcklucHV0cygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==