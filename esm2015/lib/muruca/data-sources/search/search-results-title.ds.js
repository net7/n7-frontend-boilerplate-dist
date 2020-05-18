/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class MrSearchResultsTitleDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { totalResultsText, sort } = this.options.config;
        const { totalCount, sort: currentSort } = data;
        return {
            title: {
                main: {
                    text: totalCount
                },
                secondary: {
                    text: totalResultsText[totalCount === 1 ? 1 : 0]
                }
            },
            actions: {
                select: {
                    label: sort.label,
                    options: sort.options.map((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ label, value, selected }) => ({
                        value,
                        selected: currentSort ? value === currentSort : selected,
                        text: label
                    }))),
                    payload: 'sort'
                }
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsVUFBVTs7Ozs7O0lBQzFDLFNBQVMsQ0FBQyxJQUFJO2NBQ2hCLEVBQ0osZ0JBQWdCLEVBQ2hCLElBQUksRUFDTCxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtjQUNqQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSTtRQUU5QyxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDakI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakQ7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O29CQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN6RCxLQUFLO3dCQUNMLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVE7d0JBQ3hELElBQUksRUFBRSxLQUFLO3FCQUNaLENBQUMsRUFBQztvQkFDSCxPQUFPLEVBQUUsTUFBTTtpQkFDaEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzVGl0bGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbFJlc3VsdHNUZXh0LFxuICAgICAgc29ydFxuICAgIH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xuICAgIGNvbnN0IHsgdG90YWxDb3VudCwgc29ydDogY3VycmVudFNvcnQgfSA9IGRhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgIHRleHQ6IHRvdGFsQ291bnRcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgdGV4dDogdG90YWxSZXN1bHRzVGV4dFt0b3RhbENvdW50ID09PSAxID8gMSA6IDBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIGxhYmVsOiBzb3J0LmxhYmVsLFxuICAgICAgICAgIG9wdGlvbnM6IHNvcnQub3B0aW9ucy5tYXAoKHsgbGFiZWwsIHZhbHVlLCBzZWxlY3RlZCB9KSA9PiAoe1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBzZWxlY3RlZDogY3VycmVudFNvcnQgPyB2YWx1ZSA9PT0gY3VycmVudFNvcnQgOiBzZWxlY3RlZCxcbiAgICAgICAgICAgIHRleHQ6IGxhYmVsXG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIHBheWxvYWQ6ICdzb3J0J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19