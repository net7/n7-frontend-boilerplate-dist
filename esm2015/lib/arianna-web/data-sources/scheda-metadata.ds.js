/**
 * @fileoverview added by tsickle
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
        let { labels, metadataToShow } = this.options;
        labels = labels || {};
        metadataToShow = metadataToShow || {};
        metadataToShow = metadataToShow[data.document_type] || [];
        /** @type {?} */
        const group = [];
        if (data.fields) {
            data.fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            (field) => {
                /** @type {?} */
                const items = [];
                if (field.fields && metadataToShow.indexOf(field.label) !== -1) {
                    field.fields
                        .filter((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => metadataToShow.indexOf(item.key) !== -1))
                        .forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    (item) => {
                        items.push({
                            label: helpers.prettifySnakeCase(item.key, labels[`${data.document_type}.${item.key}`]),
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
                    (a, b) => a.order - b.order));
                    group.push({
                        items,
                        title: field.label,
                        order: metadataToShow.indexOf(field.label)
                    });
                }
                else if (metadataToShow.indexOf(field.key) !== -1) {
                    items.push({
                        label: helpers.prettifySnakeCase(field.key, labels[`${data.document_type}.${field.key}`]),
                        value: field.value.replace(/(\|\|\|)/g, '\n'),
                    });
                    group.push({
                        items,
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
        (a, b) => a.order - b.order));
        return { group };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBVTs7Ozs7O0lBQ3RDLFNBQVMsQ0FBQyxJQUFJO1lBQ2xCLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQzdDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLGNBQWMsR0FBRyxjQUFjLElBQUksRUFBRSxDQUFDO1FBQ3RDLGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Y0FFcEQsS0FBSyxHQUFHLEVBQUU7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7c0JBQ3RCLEtBQUssR0FBRyxFQUFFO2dCQUNoQixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzlELEtBQUssQ0FBQyxNQUFNO3lCQUNULE1BQU07Ozs7b0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO3lCQUN6RCxPQUFPOzs7O29CQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7NEJBQ3ZGLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs0QkFDakIsS0FBSyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFDeEMsQ0FBQyxDQUFDO29CQUNMLENBQUMsRUFBQyxDQUFDO29CQUVMLHNDQUFzQztvQkFDdEMsS0FBSyxDQUFDLElBQUk7Ozs7O29CQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7b0JBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ1QsS0FBSzt3QkFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7d0JBQ2xCLEtBQUssRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7cUJBQzNDLENBQUMsQ0FBQztpQkFDSjtxQkFBTSxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUNuRCxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNULEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUN6RixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztxQkFDOUMsQ0FBQyxDQUFDO29CQUNILEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ1QsS0FBSzt3QkFDTCxLQUFLLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO3FCQUN6QyxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsc0NBQXNDO1FBQ3RDLEtBQUssQ0FBQyxJQUFJOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYU1ldGFkYXRhRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgbGV0IHsgbGFiZWxzLCBtZXRhZGF0YVRvU2hvdyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGxhYmVscyA9IGxhYmVscyB8fCB7fTtcbiAgICBtZXRhZGF0YVRvU2hvdyA9IG1ldGFkYXRhVG9TaG93IHx8IHt9O1xuICAgIG1ldGFkYXRhVG9TaG93ID0gbWV0YWRhdGFUb1Nob3dbZGF0YS5kb2N1bWVudF90eXBlXSB8fCBbXTtcblxuICAgIGNvbnN0IGdyb3VwID0gW107XG4gICAgaWYgKGRhdGEuZmllbGRzKSB7XG4gICAgICBkYXRhLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzICYmIG1ldGFkYXRhVG9TaG93LmluZGV4T2YoZmllbGQubGFiZWwpICE9PSAtMSkge1xuICAgICAgICAgIGZpZWxkLmZpZWxkc1xuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gbWV0YWRhdGFUb1Nob3cuaW5kZXhPZihpdGVtLmtleSkgIT09IC0xKVxuICAgICAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoaXRlbS5rZXksIGxhYmVsc1tgJHtkYXRhLmRvY3VtZW50X3R5cGV9LiR7aXRlbS5rZXl9YF0pLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGl0ZW0ua2V5KVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gc29ydCBieSBvcmRlciAoYnkgbWV0YWRhdGEtdG8tc2hvdylcbiAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG4gICAgICAgICAgZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgIHRpdGxlOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgIG9yZGVyOiBtZXRhZGF0YVRvU2hvdy5pbmRleE9mKGZpZWxkLmxhYmVsKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhVG9TaG93LmluZGV4T2YoZmllbGQua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGZpZWxkLmtleSwgbGFiZWxzW2Ake2RhdGEuZG9jdW1lbnRfdHlwZX0uJHtmaWVsZC5rZXl9YF0pLFxuICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLnJlcGxhY2UoLyhcXHxcXHxcXHwpL2csICdcXG4nKSwgLy8gcmVwbGFjZSByZXBlYXQgc2VxdWVuY2UgKFwifHx8XCIpIHdpdGggZW5kIG9mIGxpbmVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBncm91cC5wdXNoKHtcbiAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgICAgb3JkZXI6IG1ldGFkYXRhVG9TaG93LmluZGV4T2YoZmllbGQua2V5KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzb3J0IGJ5IG9yZGVyIChieSBtZXRhZGF0YS10by1zaG93KVxuICAgIGdyb3VwLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcbiAgICByZXR1cm4geyBncm91cCB9O1xuICB9XG59XG4iXX0=