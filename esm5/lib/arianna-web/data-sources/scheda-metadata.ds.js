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
        var _a = this.options, labels = _a.labels, metadataToShow = _a.metadataToShow;
        labels = labels || {};
        metadataToShow = metadataToShow || {};
        metadataToShow = metadataToShow[data.document_type] || [];
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
                    function (item) { return metadataToShow.indexOf(item.key) !== -1; }))
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
                else if (metadataToShow.indexOf(field.key) !== -1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBd0MsOENBQVU7SUFBbEQ7O0lBc0NBLENBQUM7Ozs7OztJQXJDVyxzQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNsQixJQUFBLGlCQUF5QyxFQUF2QyxrQkFBTSxFQUFFLGtDQUErQjtRQUM3QyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixjQUFjLEdBQUcsY0FBYyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBRXBELEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxLQUFLOztvQkFDbEIsS0FBSyxHQUFHLEVBQUU7Z0JBQ2hCLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsS0FBSyxDQUFDLE1BQU07eUJBQ1QsTUFBTTs7OztvQkFBQyxVQUFDLElBQUksSUFBSyxPQUFBLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF2QyxDQUF1QyxFQUFDO3lCQUN6RCxPQUFPOzs7O29CQUFDLFVBQUMsSUFBSTt3QkFDWixLQUFLLENBQUMsSUFBSSxDQUFDOzRCQUNULEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUM1RCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7eUJBQ2xCLENBQUMsQ0FBQztvQkFDTCxDQUFDLEVBQUMsQ0FBQztvQkFFTCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDZixLQUFLLE9BQUE7d0JBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO3FCQUNuQixDQUFDLENBQUM7aUJBQ0o7cUJBQU0sSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDbkQsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDOUQsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxtREFBbUQ7cUJBQ2xHLENBQUMsQ0FBQztvQkFDSCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDZixLQUFLLE9BQUE7cUJBQ04sQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXRDRCxDQUF3QyxVQUFVLEdBc0NqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYU1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgbGV0IHsgbGFiZWxzLCBtZXRhZGF0YVRvU2hvdyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGxhYmVscyA9IGxhYmVscyB8fCB7fTtcbiAgICBtZXRhZGF0YVRvU2hvdyA9IG1ldGFkYXRhVG9TaG93IHx8IHt9O1xuICAgIG1ldGFkYXRhVG9TaG93ID0gbWV0YWRhdGFUb1Nob3dbZGF0YS5kb2N1bWVudF90eXBlXSB8fCBbXTtcblxuICAgIGNvbnN0IGdyb3VwID0geyBncm91cDogW10gfTtcbiAgICBpZiAoZGF0YS5maWVsZHMpIHtcbiAgICAgIGRhdGEuZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIGlmIChmaWVsZC5maWVsZHMpIHtcbiAgICAgICAgICBmaWVsZC5maWVsZHNcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IG1ldGFkYXRhVG9TaG93LmluZGV4T2YoaXRlbS5rZXkpICE9PSAtMSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGl0ZW0ua2V5LCBsYWJlbHNbaXRlbS5rZXldKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZ3JvdXAuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgIHRpdGxlOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGZpZWxkLmtleSkgIT09IC0xKSB7XG4gICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShmaWVsZC5rZXksIGxhYmVsc1tmaWVsZC5rZXldKSxcbiAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZS5yZXBsYWNlKC8oXFx8XFx8XFx8KS9nLCAnXFxuJykgLy8gcmVwbGFjZSByZXBlYXQgc2VxdWVuY2UgKFwifHx8XCIpIHdpdGggZW5kIG9mIGxpbmVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBncm91cC5ncm91cC5wdXNoKHtcbiAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG59XG4iXX0=