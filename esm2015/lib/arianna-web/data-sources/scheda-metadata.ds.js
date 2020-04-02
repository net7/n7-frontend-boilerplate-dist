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
        let { labels } = this.options;
        labels = labels || {};
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
                    field.fields.forEach((/**
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
                else {
                    items.push({
                        label: helpers.prettifySnakeCase(field.key, labels[field.key]),
                        value: field.value
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLW1ldGFkYXRhLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtbWV0YWRhdGEuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBVTs7Ozs7O0lBQ3RDLFNBQVMsQ0FBQyxJQUFJO1lBQ2xCLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDN0IsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7O2NBRWhCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7c0JBQ3RCLEtBQUssR0FBRyxFQUFFO2dCQUNoQixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2hCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztvQkFBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDOzRCQUNULEtBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUM1RCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7eUJBQ2xCLENBQUMsQ0FBQztvQkFDTCxDQUFDLEVBQUMsQ0FBQztvQkFFSCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDZixLQUFLO3dCQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztxQkFDbkIsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzlELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztxQkFDbkIsQ0FBQyxDQUFDO29CQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNmLEtBQUs7cUJBQ04sQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3U2NoZWRhTWV0YWRhdGFEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IHRoaXMub3B0aW9ucztcbiAgICBsYWJlbHMgPSBsYWJlbHMgfHwge307XG5cbiAgICBjb25zdCBncm91cCA9IHsgZ3JvdXA6IFtdIH07XG4gICAgaWYgKGRhdGEuZmllbGRzKSB7XG4gICAgICBkYXRhLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICBpZiAoZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgZmllbGQuZmllbGRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShpdGVtLmtleSwgbGFiZWxzW2l0ZW0ua2V5XSksXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGdyb3VwLmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICB0aXRsZTogZmllbGQubGFiZWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShmaWVsZC5rZXksIGxhYmVsc1tmaWVsZC5rZXldKSxcbiAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdyb3VwLmdyb3VwLnB1c2goe1xuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cbn1cbiJdfQ==