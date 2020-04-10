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
        var labels = this.options.labels;
        labels = labels || {};
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
                    field.fields.forEach((/**
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
                else {
                    items.push({
                        label: helpers.prettifySnakeCase(field.key, labels[field.key]),
                        value: field.value
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBd0MsOENBQVU7SUFBbEQ7O0lBa0NBLENBQUM7Ozs7OztJQWpDVyxzQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNoQixJQUFBLDRCQUFNO1FBQ1osTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7O1lBRWhCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxLQUFLOztvQkFDbEIsS0FBSyxHQUFHLEVBQUU7Z0JBQ2hCLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUMsSUFBSTt3QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQzs0QkFDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDNUQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3lCQUNsQixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxFQUFDLENBQUM7b0JBRUgsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2YsS0FBSyxPQUFBO3dCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztxQkFDbkIsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzlELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztxQkFDbkIsQ0FBQyxDQUFDO29CQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNmLEtBQUssT0FBQTtxQkFDTixDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBbENELENBQXdDLFVBQVUsR0FrQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcbiAgICBsYWJlbHMgPSBsYWJlbHMgfHwge307XG5cbiAgICBjb25zdCBncm91cCA9IHsgZ3JvdXA6IFtdIH07XG4gICAgaWYgKGRhdGEuZmllbGRzKSB7XG4gICAgICBkYXRhLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgZmllbGQuZmllbGRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpdGVtLmtleSwgbGFiZWxzW2l0ZW0ua2V5XSksXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGdyb3VwLmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICB0aXRsZTogZmllbGQubGFiZWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShmaWVsZC5rZXksIGxhYmVsc1tmaWVsZC5rZXldKSxcbiAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdyb3VwLmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cbn1cbiJdfQ==