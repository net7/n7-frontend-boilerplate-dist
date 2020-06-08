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
        const { state, linksResponse, facetsConfig } = data;
        const { inputs: linkInputs } = linksResponse;
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
                        /** @type {?} */
                        let text = value;
                        if (linkInputs[id]) {
                            text = linkInputs[id].find((/**
                             * @param {?} __0
                             * @return {?}
                             */
                            ({ payload }) => payload === value)).text;
                        }
                        tags.push({
                            text,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXRhZ3MuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXRhZ3MuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUcvQyxNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7Ozs7OztJQUNsQyxTQUFTLENBQUMsSUFBSTtjQUNoQixFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSTtjQUM3QyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxhQUFhOztjQUN0QyxJQUFJLEdBQUcsRUFBRTtRQUVmLGdCQUFnQjtRQUNoQixZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUMzQyxNQUFNO2lCQUNILE1BQU07Ozs7WUFBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBQztpQkFDdEMsT0FBTzs7OztZQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUNsQixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTs7MEJBQ1AsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pFLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7OzRCQUNuQixJQUFJLEdBQUcsS0FBSzt3QkFDaEIsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7NEJBQ2xCLElBQUksR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSTs7Ozs0QkFBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUMsQ0FBQyxJQUFJLENBQUM7eUJBQ3JFO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ1IsSUFBSTs0QkFDSixJQUFJLEVBQUUsZUFBZTs0QkFDckIsT0FBTyxFQUFFO2dDQUNQLEVBQUU7Z0NBQ0YsS0FBSzs2QkFDTjt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgVGFnRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoVGFnc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IFRhZ0RhdGFbXSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgbGlua3NSZXNwb25zZSwgZmFjZXRzQ29uZmlnIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgaW5wdXRzOiBsaW5rSW5wdXRzIH0gPSBsaW5rc1Jlc3BvbnNlO1xuICAgIGNvbnN0IHRhZ3MgPSBbXTtcblxuICAgIC8vIGlucHV0cyBjb25maWdcbiAgICBmYWNldHNDb25maWcuc2VjdGlvbnMuZm9yRWFjaCgoeyBpbnB1dHMgfSkgPT4ge1xuICAgICAgaW5wdXRzXG4gICAgICAgIC5maWx0ZXIoKHsgcXVlcnlQYXJhbSB9KSA9PiBxdWVyeVBhcmFtKVxuICAgICAgICAuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlW2lkXSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gQXJyYXkuaXNBcnJheShzdGF0ZVtpZF0pID8gc3RhdGVbaWRdIDogW3N0YXRlW2lkXV07XG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHRleHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGxpbmtJbnB1dHNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IGxpbmtJbnB1dHNbaWRdLmZpbmQoKHsgcGF5bG9hZCB9KSA9PiBwYXlsb2FkID09PSB2YWx1ZSkudGV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0YWdzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFncztcbiAgfVxufVxuIl19