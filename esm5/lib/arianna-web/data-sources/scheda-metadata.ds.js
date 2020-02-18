/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from "@n7-frontend/core";
import helpers from "../../common/helpers";
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
                        items.push({ label: helpers.prettifySnakeCase(item.key, labels[item.key]), value: item.value });
                    }));
                    group.group.push({
                        title: field.label,
                        items: items
                    });
                }
                else {
                    items.push({ label: helpers.prettifySnakeCase(field.key, labels[field.key]), value: field.value });
                    group.group.push({
                        items: items
                    });
                }
            }));
        }
        return group;
    };
    return AwSchedaMetadataDS;
}(DataSource));
export { AwSchedaMetadataDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBd0MsOENBQVU7SUFBbEQ7O0lBNEJBLENBQUM7Ozs7OztJQTNCVyxzQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNoQixJQUFBLDRCQUFNO1FBQ1osTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7O1lBRWxCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxLQUFLOztvQkFDbkIsS0FBSyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNoQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQSxJQUFJO3dCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ2xHLENBQUMsRUFBQyxDQUFDO29CQUVILEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSzt3QkFDbEIsS0FBSyxFQUFFLEtBQUs7cUJBQ2IsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDbkcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2YsS0FBSyxFQUFFLEtBQUs7cUJBQ2IsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUF3QyxVQUFVLEdBNEJqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tIFwiQG43LWZyb250ZW5kL2NvcmVcIjtcbmltcG9ydCBoZWxwZXJzIGZyb20gXCIuLi8uLi9jb21tb24vaGVscGVyc1wiO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFNZXRhZGF0YURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGxldCB7IGxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGxhYmVscyA9IGxhYmVscyB8fCB7fTtcblxuICAgIGxldCBncm91cCA9IHsgZ3JvdXA6IFtdIH07XG4gICAgaWYgKGRhdGEuZmllbGRzKSB7XG4gICAgICBkYXRhLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgbGV0IGl0ZW1zID0gW107XG4gICAgICAgIGlmIChmaWVsZC5maWVsZHMpIHtcbiAgICAgICAgICBmaWVsZC5maWVsZHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goeyBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpdGVtLmtleSwgbGFiZWxzW2l0ZW0ua2V5XSksIHZhbHVlOiBpdGVtLnZhbHVlIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZ3JvdXAuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogZmllbGQubGFiZWwsXG4gICAgICAgICAgICBpdGVtczogaXRlbXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtcy5wdXNoKHsgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoZmllbGQua2V5LCBsYWJlbHNbZmllbGQua2V5XSksIHZhbHVlOiBmaWVsZC52YWx1ZSB9KTtcbiAgICAgICAgICBncm91cC5ncm91cC5wdXNoKHtcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG59XG4iXX0=