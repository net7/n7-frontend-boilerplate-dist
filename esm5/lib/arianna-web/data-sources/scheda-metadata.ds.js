/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
var AwSchedaMetadataDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSchedaMetadataDS, _super);
    function AwSchedaMetadataDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwSchedaMetadataDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _a = this.options, labels = _a.labels, metadataToExclude = _a.metadataToExclude;
        labels = labels || {};
        metadataToExclude = metadataToExclude || {};
        metadataToExclude = metadataToExclude[data.document_type] || [];
        /** @type {?} */
        var group = { group: [] };
        if (data.fields) {
            data.fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var items = [];
                if (field.fields) {
                    field.fields
                        .filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return metadataToExclude.indexOf(item.key) === -1; }))
                        .forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        items.push({
                            label: helpers.prettifySnakeCase(item.key, labels[item.key]),
                            value: item.value
                        });
                    }));
                    group.group.push({
                        items: items,
                        title: field.label,
                    });
                }
                else if (metadataToExclude.indexOf(field.key) === -1) {
                    items.push({
                        label: helpers.prettifySnakeCase(field.key, labels[field.key]),
                        value: field.value.replace(/(\|\|\|)/g, '\n') // replace repeat sequence ("|||") with end of line
                    });
                    group.group.push({
                        items: items,
                    });
                }
            }));
        }
        return group;
    };
    return AwSchedaMetadataDS;
}(DataSource));
export { AwSchedaMetadataDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBd0MsOENBQVU7SUFBbEQ7O0lBc0NBLENBQUM7Ozs7OztJQXJDVyxzQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNsQixJQUFBLGlCQUE0QyxFQUExQyxrQkFBTSxFQUFFLHdDQUFrQztRQUNoRCxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixpQkFBaUIsR0FBRyxpQkFBaUIsSUFBSSxFQUFFLENBQUM7UUFDNUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFFMUQsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLEtBQUs7O29CQUNsQixLQUFLLEdBQUcsRUFBRTtnQkFDaEIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNoQixLQUFLLENBQUMsTUFBTTt5QkFDVCxNQUFNOzs7O29CQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsRUFBQzt5QkFDNUQsT0FBTzs7OztvQkFBQyxVQUFDLElBQUk7d0JBQ1osS0FBSyxDQUFDLElBQUksQ0FBQzs0QkFDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDNUQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3lCQUNsQixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxFQUFDLENBQUM7b0JBRUwsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2YsS0FBSyxPQUFBO3dCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztxQkFDbkIsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDdEQsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDOUQsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxtREFBbUQ7cUJBQ2xHLENBQUMsQ0FBQztvQkFDSCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDZixLQUFLLE9BQUE7cUJBQ04sQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUF3QyxVQUFVLEdBc0NqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYU1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgbGV0IHsgbGFiZWxzLCBtZXRhZGF0YVRvRXhjbHVkZSB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGxhYmVscyA9IGxhYmVscyB8fCB7fTtcbiAgICBtZXRhZGF0YVRvRXhjbHVkZSA9IG1ldGFkYXRhVG9FeGNsdWRlIHx8IHt9O1xuICAgIG1ldGFkYXRhVG9FeGNsdWRlID0gbWV0YWRhdGFUb0V4Y2x1ZGVbZGF0YS5kb2N1bWVudF90eXBlXSB8fCBbXTtcblxuICAgIGNvbnN0IGdyb3VwID0geyBncm91cDogW10gfTtcbiAgICBpZiAoZGF0YS5maWVsZHMpIHtcbiAgICAgIGRhdGEuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIGlmIChmaWVsZC5maWVsZHMpIHtcbiAgICAgICAgICBmaWVsZC5maWVsZHNcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IG1ldGFkYXRhVG9FeGNsdWRlLmluZGV4T2YoaXRlbS5rZXkpID09PSAtMSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGl0ZW0ua2V5LCBsYWJlbHNbaXRlbS5rZXldKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZ3JvdXAuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgIHRpdGxlOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YVRvRXhjbHVkZS5pbmRleE9mKGZpZWxkLmtleSkgPT09IC0xKSB7XG4gICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShmaWVsZC5rZXksIGxhYmVsc1tmaWVsZC5rZXldKSxcbiAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZS5yZXBsYWNlKC8oXFx8XFx8XFx8KS9nLCAnXFxuJykgLy8gcmVwbGFjZSByZXBlYXQgc2VxdWVuY2UgKFwifHx8XCIpIHdpdGggZW5kIG9mIGxpbmVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBncm91cC5ncm91cC5wdXNoKHtcbiAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG59XG4iXX0=