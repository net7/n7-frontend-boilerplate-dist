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
            inputs.forEach((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQyxNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7Ozs7OztJQUNsQyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJOztjQUM5QixJQUFJLEdBQUcsRUFBRTtRQUVmLGdCQUFnQjtRQUNoQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUMzQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUN4QixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTs7MEJBQ1AsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pFLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ1IsSUFBSSxFQUFFLEtBQUs7NEJBQ1gsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLE9BQU8sRUFBRTtnQ0FDUCxFQUFFO2dDQUNGLEtBQUs7NkJBQ047eUJBQ0YsQ0FBQyxDQUFDO29CQUNMLENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFRhZ0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFRhZ3NEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpOiBUYWdEYXRhW10ge1xuICAgIGNvbnN0IHsgc3RhdGUsIGZhY2V0c0NvbmZpZyB9ID0gZGF0YTtcbiAgICBjb25zdCB0YWdzID0gW107XG5cbiAgICAvLyBpbnB1dHMgY29uZmlnXG4gICAgZmFjZXRzQ29uZmlnLnNlY3Rpb25zLmZvckVhY2goKHsgaW5wdXRzIH0pID0+IHtcbiAgICAgIGlucHV0cy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgaWYgKHN0YXRlW2lkXSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGVbaWRdKSA/IHN0YXRlW2lkXSA6IFtzdGF0ZVtpZF1dO1xuICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgdGV4dDogdmFsdWUsXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFncztcbiAgfVxufVxuIl19