/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-facets-layout/search-facets-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
/**
 * @record
 */
function ChangedSubjects() { }
var SearchFacetsLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(SearchFacetsLayoutEH, _super);
    function SearchFacetsLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changed$ = {};
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
                    _this.dataSource.onInit(payload);
                    _this.initChangedListener(payload.data);
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
            section.inputs.forEach((/**
             * @param {?} input
             * @return {?}
             */
            function (input) {
                _this.changed$[input.id] = new Subject();
                _this.changed$[input.id].pipe(debounceTime(input.delay || 1)).subscribe((/**
                 * @param {?} payload
                 * @return {?}
                 */
                function (payload) {
                    console.warn('#todo', payload);
                }));
            }));
        }));
    };
    return SearchFacetsLayoutEH;
}(EventHandler));
export { SearchFacetsLayoutEH };
if (false) {
    /** @type {?} */
    SearchFacetsLayoutEH.prototype.changed$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzlDLDhCQUVDO0FBRUQ7SUFBMEMsZ0RBQVk7SUFBdEQ7UUFBQSxxRUFzQ0M7UUFyQ0MsY0FBUSxHQUFvQixFQUFFLENBQUM7O0lBcUNqQyxDQUFDOzs7O0lBbkNRLHFDQUFNOzs7SUFBYjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLE1BQU07Z0JBRVIsS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxrREFBbUI7Ozs7SUFBbkIsVUFBb0IsSUFBd0I7UUFBNUMsaUJBV0M7UUFWQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87WUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxLQUFLO2dCQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzFCLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUMvQixDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxPQUFPO29CQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUEwQyxZQUFZLEdBc0NyRDs7OztJQXJDQyx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldHNDb25maWcgfSBmcm9tICcuL3NlYXJjaC1mYWNldHMtY29uZmlnJztcblxuaW50ZXJmYWNlIENoYW5nZWRTdWJqZWN0cyB7XG4gIFtrZXk6IHN0cmluZ106IFN1YmplY3Q8YW55Pjtcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgY2hhbmdlZCQ6IENoYW5nZWRTdWJqZWN0cyA9IHt9O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5pbml0Q2hhbmdlZExpc3RlbmVyKHBheWxvYWQuZGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgaWYgKHR5cGUuaW5kZXhPZignY2hhbmdlJykpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkJFtwYXlsb2FkLmlkXS5uZXh0KHBheWxvYWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdENoYW5nZWRMaXN0ZW5lcihkYXRhOiBTZWFyY2hGYWNldHNDb25maWcpIHtcbiAgICBkYXRhLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCRbaW5wdXQuaWRdID0gbmV3IFN1YmplY3QoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkJFtpbnB1dC5pZF0ucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoaW5wdXQuZGVsYXkgfHwgMSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKHBheWxvYWQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyN0b2RvJywgcGF5bG9hZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==