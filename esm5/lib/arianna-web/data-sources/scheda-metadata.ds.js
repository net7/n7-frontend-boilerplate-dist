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
        var group = [];
        if (data.fields) {
            data.fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                /** @type {?} */
                var items = [];
                if (field.fields && metadataToShow.indexOf(field.label) !== -1) {
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
                            label: helpers.prettifySnakeCase(item.key, labels[data.document_type + "." + item.key]),
                            value: item.value,
                            order: metadataToShow.indexOf(item.key)
                        });
                    }));
                    // sort by order (by metadata-to-show)
                    items.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) { return a.order - b.order; }));
                    group.push({
                        items: items,
                        title: field.label,
                        order: metadataToShow.indexOf(field.label)
                    });
                }
                else if (metadataToShow.indexOf(field.key) !== -1) {
                    items.push({
                        label: helpers.prettifySnakeCase(field.key, labels[data.document_type + "." + field.key]),
                        value: field.value.replace(/(\|\|\|)/g, '\n'),
                    });
                    group.push({
                        items: items,
                        order: metadataToShow.indexOf(field.key)
                    });
                }
            }));
        }
        // sort by order (by metadata-to-show)
        group.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order - b.order; }));
        return { group: group };
    };
    return AwSchedaMetadataDS;
}(DataSource));
export { AwSchedaMetadataDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBd0MsOENBQVU7SUFBbEQ7O0lBOENBLENBQUM7Ozs7OztJQTdDVyxzQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNsQixJQUFBLGlCQUF5QyxFQUF2QyxrQkFBTSxFQUFFLGtDQUErQjtRQUM3QyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixjQUFjLEdBQUcsY0FBYyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBRXBELEtBQUssR0FBRyxFQUFFO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsS0FBSzs7b0JBQ2xCLEtBQUssR0FBRyxFQUFFO2dCQUNoQixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzlELEtBQUssQ0FBQyxNQUFNO3lCQUNULE1BQU07Ozs7b0JBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsRUFBQzt5QkFDekQsT0FBTzs7OztvQkFBQyxVQUFDLElBQUk7d0JBQ1osS0FBSyxDQUFDLElBQUksQ0FBQzs0QkFDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFJLElBQUksQ0FBQyxhQUFhLFNBQUksSUFBSSxDQUFDLEdBQUssQ0FBQyxDQUFDOzRCQUN2RixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7NEJBQ2pCLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7eUJBQ3hDLENBQUMsQ0FBQztvQkFDTCxDQUFDLEVBQUMsQ0FBQztvQkFFTCxzQ0FBc0M7b0JBQ3RDLEtBQUssQ0FBQyxJQUFJOzs7OztvQkFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWpCLENBQWlCLEVBQUMsQ0FBQztvQkFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDVCxLQUFLLE9BQUE7d0JBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO3dCQUNsQixLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3FCQUMzQyxDQUFDLENBQUM7aUJBQ0o7cUJBQU0sSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDbkQsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFJLElBQUksQ0FBQyxhQUFhLFNBQUksS0FBSyxDQUFDLEdBQUssQ0FBQyxDQUFDO3dCQUN6RixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztxQkFDOUMsQ0FBQyxDQUFDO29CQUNILEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ1QsS0FBSyxPQUFBO3dCQUNMLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7cUJBQ3pDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxzQ0FBc0M7UUFDdEMsS0FBSyxDQUFDLElBQUk7Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFqQixDQUFpQixFQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTlDRCxDQUF3QyxVQUFVLEdBOENqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYU1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgbGV0IHsgbGFiZWxzLCBtZXRhZGF0YVRvU2hvdyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGxhYmVscyA9IGxhYmVscyB8fCB7fTtcbiAgICBtZXRhZGF0YVRvU2hvdyA9IG1ldGFkYXRhVG9TaG93IHx8IHt9O1xuICAgIG1ldGFkYXRhVG9TaG93ID0gbWV0YWRhdGFUb1Nob3dbZGF0YS5kb2N1bWVudF90eXBlXSB8fCBbXTtcblxuICAgIGNvbnN0IGdyb3VwID0gW107XG4gICAgaWYgKGRhdGEuZmllbGRzKSB7XG4gICAgICBkYXRhLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzICYmIG1ldGFkYXRhVG9TaG93LmluZGV4T2YoZmllbGQubGFiZWwpICE9PSAtMSkge1xuICAgICAgICAgIGZpZWxkLmZpZWxkc1xuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gbWV0YWRhdGFUb1Nob3cuaW5kZXhPZihpdGVtLmtleSkgIT09IC0xKVxuICAgICAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaXRlbS5rZXksIGxhYmVsc1tgJHtkYXRhLmRvY3VtZW50X3R5cGV9LiR7aXRlbS5rZXl9YF0pLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGl0ZW0ua2V5KVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gc29ydCBieSBvcmRlciAoYnkgbWV0YWRhdGEtdG8tc2hvdylcbiAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG4gICAgICAgICAgZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgIHRpdGxlOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGZpZWxkLmxhYmVsKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhVG9TaG93LmluZGV4T2YoZmllbGQua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGZpZWxkLmtleSwgbGFiZWxzW2Ake2RhdGEuZG9jdW1lbnRfdHlwZX0uJHtmaWVsZC5rZXl9YF0pLFxuICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLnJlcGxhY2UoLyhcXHxcXHxcXHwpL2csICdcXG4nKSwgLy8gcmVwbGFjZSByZXBlYXQgc2VxdWVuY2UgKFwifHx8XCIpIHdpdGggZW5kIG9mIGxpbmVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBncm91cC5wdXNoKHtcbiAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgICAgb3JkZXI6IG1ldGFkYXRhVG9TaG93LmluZGV4T2YoZmllbGQua2V5KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzb3J0IGJ5IG9yZGVyIChieSBtZXRhZGF0YS10by1zaG93KVxuICAgIGdyb3VwLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcbiAgICByZXR1cm4geyBncm91cCB9O1xuICB9XG59XG4iXX0=