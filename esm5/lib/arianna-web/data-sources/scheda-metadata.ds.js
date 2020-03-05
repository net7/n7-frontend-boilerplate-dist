/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-metadata.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQXdDLDhDQUFVO0lBQWxEOztJQWtDQSxDQUFDOzs7Ozs7SUFqQ1csc0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDaEIsSUFBQSw0QkFBTTtRQUNaLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDOztZQUVoQixLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsS0FBSzs7b0JBQ2xCLEtBQUssR0FBRyxFQUFFO2dCQUNoQixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2hCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztvQkFBQyxVQUFDLElBQUk7d0JBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQzVELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzt5QkFDbEIsQ0FBQyxDQUFDO29CQUNMLENBQUMsRUFBQyxDQUFDO29CQUVILEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNmLEtBQUssT0FBQTt3QkFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7cUJBQ25CLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNULEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM5RCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7cUJBQ25CLENBQUMsQ0FBQztvQkFDSCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDZixLQUFLLE9BQUE7cUJBQ04sQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWxDRCxDQUF3QyxVQUFVLEdBa0NqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYU1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIGxldCB7IGxhYmVscyB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgbGFiZWxzID0gbGFiZWxzIHx8IHt9O1xyXG5cclxuICAgIGNvbnN0IGdyb3VwID0geyBncm91cDogW10gfTtcclxuICAgIGlmIChkYXRhLmZpZWxkcykge1xyXG4gICAgICBkYXRhLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkcykge1xyXG4gICAgICAgICAgZmllbGQuZmllbGRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaXRlbS5rZXksIGxhYmVsc1tpdGVtLmtleV0pLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgZ3JvdXAuZ3JvdXAucHVzaCh7XHJcbiAgICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgICB0aXRsZTogZmllbGQubGFiZWwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGZpZWxkLmtleSwgbGFiZWxzW2ZpZWxkLmtleV0pLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmllbGQudmFsdWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZ3JvdXAuZ3JvdXAucHVzaCh7XHJcbiAgICAgICAgICAgIGl0ZW1zLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBncm91cDtcclxuICB9XHJcbn1cclxuIl19