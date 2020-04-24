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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBVTs7Ozs7O0lBQ3RDLFNBQVMsQ0FBQyxJQUFJO1lBQ2xCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDaEQsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDdEIsaUJBQWlCLEdBQUcsaUJBQWlCLElBQUksRUFBRSxDQUFDO1FBQzVDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7O2NBRTFELEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7c0JBQ3RCLEtBQUssR0FBRyxFQUFFO2dCQUNoQixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2hCLEtBQUssQ0FBQyxNQUFNO3lCQUNULE1BQU07Ozs7b0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7eUJBQzVELE9BQU87Ozs7b0JBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQzs0QkFDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDNUQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3lCQUNsQixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxFQUFDLENBQUM7b0JBRUwsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2YsS0FBSzt3QkFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7cUJBQ25CLENBQUMsQ0FBQztpQkFDSjtxQkFBTSxJQUFJLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3RELEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzlELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsbURBQW1EO3FCQUNsRyxDQUFDLENBQUM7b0JBQ0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2YsS0FBSztxQkFDTixDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFNZXRhZGF0YURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGxldCB7IGxhYmVscywgbWV0YWRhdGFUb0V4Y2x1ZGUgfSA9IHRoaXMub3B0aW9ucztcbiAgICBsYWJlbHMgPSBsYWJlbHMgfHwge307XG4gICAgbWV0YWRhdGFUb0V4Y2x1ZGUgPSBtZXRhZGF0YVRvRXhjbHVkZSB8fCB7fTtcbiAgICBtZXRhZGF0YVRvRXhjbHVkZSA9IG1ldGFkYXRhVG9FeGNsdWRlW2RhdGEuZG9jdW1lbnRfdHlwZV0gfHwgW107XG5cbiAgICBjb25zdCBncm91cCA9IHsgZ3JvdXA6IFtdIH07XG4gICAgaWYgKGRhdGEuZmllbGRzKSB7XG4gICAgICBkYXRhLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgZmllbGQuZmllbGRzXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBtZXRhZGF0YVRvRXhjbHVkZS5pbmRleE9mKGl0ZW0ua2V5KSA9PT0gLTEpXG4gICAgICAgICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpdGVtLmtleSwgbGFiZWxzW2l0ZW0ua2V5XSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGdyb3VwLmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICB0aXRsZTogZmllbGQubGFiZWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGFUb0V4Y2x1ZGUuaW5kZXhPZihmaWVsZC5rZXkpID09PSAtMSkge1xuICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2UoZmllbGQua2V5LCBsYWJlbHNbZmllbGQua2V5XSksXG4gICAgICAgICAgICB2YWx1ZTogZmllbGQudmFsdWUucmVwbGFjZSgvKFxcfFxcfFxcfCkvZywgJ1xcbicpIC8vIHJlcGxhY2UgcmVwZWF0IHNlcXVlbmNlIChcInx8fFwiKSB3aXRoIGVuZCBvZiBsaW5lXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZ3JvdXAuZ3JvdXAucHVzaCh7XG4gICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBncm91cDtcbiAgfVxufVxuIl19