/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class MrSearchTagsDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { state, facetsConfig } = data;
        /** @type {?} */
        const tags = [];
        // inputs config
        facetsConfig.sections.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ inputs }) => {
            inputs
                .filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ queryParam }) => queryParam))
                .forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ id }) => {
                if (state[id]) {
                    /** @type {?} */
                    const values = Array.isArray(state[id]) ? state[id] : [state[id]];
                    values.forEach((/**
                     * @param {?} value
                     * @return {?}
                     */
                    (value) => {
                        tags.push({
                            text: value,
                            icon: 'n7-icon-close',
                            payload: {
                                id,
                                value
                            }
                        });
                    }));
                }
            }));
        }));
        return tags;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQyxNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7Ozs7OztJQUNsQyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJOztjQUM5QixJQUFJLEdBQUcsRUFBRTtRQUVmLGdCQUFnQjtRQUNoQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUMzQyxNQUFNO2lCQUNILE1BQU07Ozs7WUFBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBQztpQkFDdEMsT0FBTzs7OztZQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUNsQixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTs7MEJBQ1AsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pFLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ1IsSUFBSSxFQUFFLEtBQUs7NEJBQ1gsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLE9BQU8sRUFBRTtnQ0FDUCxFQUFFO2dDQUNGLEtBQUs7NkJBQ047eUJBQ0YsQ0FBQyxDQUFDO29CQUNMLENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFRhZ0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFRhZ3NEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBUYWdEYXRhW10ge1xuICAgIGNvbnN0IHsgc3RhdGUsIGZhY2V0c0NvbmZpZyB9ID0gZGF0YTtcbiAgICBjb25zdCB0YWdzID0gW107XG5cbiAgICAvLyBpbnB1dHMgY29uZmlnXG4gICAgZmFjZXRzQ29uZmlnLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgIGlucHV0c1xuICAgICAgICAuZmlsdGVyKCh7IHF1ZXJ5UGFyYW0gfSkgPT4gcXVlcnlQYXJhbSlcbiAgICAgICAgLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICAgIGlmIChzdGF0ZVtpZF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGVbaWRdKSA/IHN0YXRlW2lkXSA6IFtzdGF0ZVtpZF1dO1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIHRhZ3MucHVzaCh7XG4gICAgICAgICAgICAgICAgdGV4dDogdmFsdWUsXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFncztcbiAgfVxufVxuIl19