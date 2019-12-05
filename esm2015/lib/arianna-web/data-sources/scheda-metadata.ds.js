/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-metadata.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from "@n7-frontend/core";
import helpers from "../../common/helpers";
export class AwSchedaMetadataDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        let { labels } = this.options;
        labels = labels || {};
        /** @type {?} */
        let group = { group: [] };
        if (data.fields) {
            data.fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            field => {
                /** @type {?} */
                let items = [];
                if (field.fields) {
                    field.fields.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7Ozs7OztJQUN0QyxTQUFTLENBQUMsSUFBSTtZQUNsQixFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQzdCLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDOztZQUVsQixLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFOztvQkFDdEIsS0FBSyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNoQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7b0JBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDbEcsQ0FBQyxFQUFDLENBQUM7b0JBRUgsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO3dCQUNsQixLQUFLLEVBQUUsS0FBSztxQkFDYixDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNuRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDZixLQUFLLEVBQUUsS0FBSztxQkFDYixDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSBcIkBuNy1mcm9udGVuZC9jb3JlXCI7XG5pbXBvcnQgaGVscGVycyBmcm9tIFwiLi4vLi4vY29tbW9uL2hlbHBlcnNcIjtcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcbiAgICBsYWJlbHMgPSBsYWJlbHMgfHwge307XG5cbiAgICBsZXQgZ3JvdXAgPSB7IGdyb3VwOiBbXSB9O1xuICAgIGlmIChkYXRhLmZpZWxkcykge1xuICAgICAgZGF0YS5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgZmllbGQuZmllbGRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHsgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaXRlbS5rZXksIGxhYmVsc1tpdGVtLmtleV0pLCB2YWx1ZTogaXRlbS52YWx1ZSB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGdyb3VwLmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbXMucHVzaCh7IGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGZpZWxkLmtleSwgbGFiZWxzW2ZpZWxkLmtleV0pLCB2YWx1ZTogZmllbGQudmFsdWUgfSk7XG4gICAgICAgICAgZ3JvdXAuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBpdGVtczogaXRlbXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBncm91cDtcbiAgfVxufVxuIl19