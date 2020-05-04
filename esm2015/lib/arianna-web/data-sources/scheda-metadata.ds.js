/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/scheda-metadata.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
export class AwSchedaMetadataDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        let { labels, metadataToExclude } = this.options;
        labels = labels || {};
        metadataToExclude = metadataToExclude || {};
        metadataToExclude = metadataToExclude[data.document_type] || [];
        /** @type {?} */
        const group = { group: [] };
        if (data.fields) {
            data.fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            (field) => {
                /** @type {?} */
                const items = [];
                if (field.fields) {
                    field.fields
                        .filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => metadataToExclude.indexOf(item.key) === -1))
                        .forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        items.push({
                            label: helpers.prettifySnakeCase(item.key, labels[item.key]),
                            value: item.value
                        });
                    }));
                    group.group.push({
                        items,
                        title: field.label,
                    });
                }
                else if (metadataToExclude.indexOf(field.key) === -1) {
                    items.push({
                        label: helpers.prettifySnakeCase(field.key, labels[field.key]),
                        value: field.value.replace(/(\|\|\|)/g, '\n') // replace repeat sequence ("|||") with end of line
                    });
                    group.group.push({
                        items,
                    });
                }
            }));
        }
        return group;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7Ozs7OztJQUN0QyxTQUFTLENBQUMsSUFBSTtZQUNsQixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQ2hELE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLGlCQUFpQixHQUFHLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztRQUM1QyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDOztjQUUxRCxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7O3NCQUN0QixLQUFLLEdBQUcsRUFBRTtnQkFDaEIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNoQixLQUFLLENBQUMsTUFBTTt5QkFDVCxNQUFNOzs7O29CQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO3lCQUM1RCxPQUFPOzs7O29CQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQzVELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzt5QkFDbEIsQ0FBQyxDQUFDO29CQUNMLENBQUMsRUFBQyxDQUFDO29CQUVMLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNmLEtBQUs7d0JBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO3FCQUNuQixDQUFDLENBQUM7aUJBQ0o7cUJBQU0sSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUN0RCxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNULEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM5RCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLG1EQUFtRDtxQkFDbEcsQ0FBQyxDQUFDO29CQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNmLEtBQUs7cUJBQ04sQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBsZXQgeyBsYWJlbHMsIG1ldGFkYXRhVG9FeGNsdWRlIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgbGFiZWxzID0gbGFiZWxzIHx8IHt9O1xuICAgIG1ldGFkYXRhVG9FeGNsdWRlID0gbWV0YWRhdGFUb0V4Y2x1ZGUgfHwge307XG4gICAgbWV0YWRhdGFUb0V4Y2x1ZGUgPSBtZXRhZGF0YVRvRXhjbHVkZVtkYXRhLmRvY3VtZW50X3R5cGVdIHx8IFtdO1xuXG4gICAgY29uc3QgZ3JvdXAgPSB7IGdyb3VwOiBbXSB9O1xuICAgIGlmIChkYXRhLmZpZWxkcykge1xuICAgICAgZGF0YS5maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkcykge1xuICAgICAgICAgIGZpZWxkLmZpZWxkc1xuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gbWV0YWRhdGFUb0V4Y2x1ZGUuaW5kZXhPZihpdGVtLmtleSkgPT09IC0xKVxuICAgICAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaXRlbS5rZXksIGxhYmVsc1tpdGVtLmtleV0pLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBncm91cC5ncm91cC5wdXNoKHtcbiAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgICAgdGl0bGU6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhVG9FeGNsdWRlLmluZGV4T2YoZmllbGQua2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGZpZWxkLmtleSwgbGFiZWxzW2ZpZWxkLmtleV0pLFxuICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLnJlcGxhY2UoLyhcXHxcXHxcXHwpL2csICdcXG4nKSAvLyByZXBsYWNlIHJlcGVhdCBzZXF1ZW5jZSAoXCJ8fHxcIikgd2l0aCBlbmQgb2YgbGluZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdyb3VwLmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cbn1cbiJdfQ==