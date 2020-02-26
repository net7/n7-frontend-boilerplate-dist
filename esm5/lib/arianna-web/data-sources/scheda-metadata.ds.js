/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-metadata.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQXdDLDhDQUFVO0lBQWxEOztJQTRCQSxDQUFDOzs7Ozs7SUEzQlcsc0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDaEIsSUFBQSw0QkFBTTtRQUNaLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDOztZQUVsQixLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsS0FBSzs7b0JBQ25CLEtBQUssR0FBRyxFQUFFO2dCQUNkLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUEsSUFBSTt3QkFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNsRyxDQUFDLEVBQUMsQ0FBQztvQkFFSCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7d0JBQ2xCLEtBQUssRUFBRSxLQUFLO3FCQUNiLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ25HLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNmLEtBQUssRUFBRSxLQUFLO3FCQUNiLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUE1QkQsQ0FBd0MsVUFBVSxHQTRCakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSBcIkBuNy1mcm9udGVuZC9jb3JlXCI7XG5pbXBvcnQgaGVscGVycyBmcm9tIFwiLi4vLi4vY29tbW9uL2hlbHBlcnNcIjtcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcbiAgICBsYWJlbHMgPSBsYWJlbHMgfHwge307XG5cbiAgICBsZXQgZ3JvdXAgPSB7IGdyb3VwOiBbXSB9O1xuICAgIGlmIChkYXRhLmZpZWxkcykge1xuICAgICAgZGF0YS5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgZmllbGQuZmllbGRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHsgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaXRlbS5rZXksIGxhYmVsc1tpdGVtLmtleV0pLCB2YWx1ZTogaXRlbS52YWx1ZSB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGdyb3VwLmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbXMucHVzaCh7IGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGZpZWxkLmtleSwgbGFiZWxzW2ZpZWxkLmtleV0pLCB2YWx1ZTogZmllbGQudmFsdWUgfSk7XG4gICAgICAgICAgZ3JvdXAuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBpdGVtczogaXRlbXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBncm91cDtcbiAgfVxufVxuIl19