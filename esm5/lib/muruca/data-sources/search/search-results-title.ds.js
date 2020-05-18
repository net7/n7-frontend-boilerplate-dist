/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrSearchResultsTitleDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrSearchResultsTitleDS, _super);
    function MrSearchResultsTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    MrSearchResultsTitleDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _a = this.options.config, totalResultsText = _a.totalResultsText, sort = _a.sort;
        var totalCount = data.totalCount, currentSort = data.sort;
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
                    function (_a) {
                        var label = _a.label, value = _a.value, selected = _a.selected;
                        return ({
                            value: value,
                            selected: currentSort ? value === currentSort : selected,
                            text: label
                        });
                    })),
                    payload: 'sort'
                }
            }
        };
    };
    return MrSearchResultsTitleDS;
}(DataSource));
export { MrSearchResultsTitleDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBNEMsa0RBQVU7SUFBdEQ7O0lBOEJBLENBQUM7Ozs7OztJQTdCVywwQ0FBUzs7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNoQixJQUFBLHdCQUdpQixFQUZyQixzQ0FBZ0IsRUFDaEIsY0FDcUI7UUFDZixJQUFBLDRCQUFVLEVBQUUsdUJBQWlCO1FBRXJDLE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLGdCQUFnQixDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqRDthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7b0JBQUMsVUFBQyxFQUEwQjs0QkFBeEIsZ0JBQUssRUFBRSxnQkFBSyxFQUFFLHNCQUFRO3dCQUFPLE9BQUEsQ0FBQzs0QkFDekQsS0FBSyxPQUFBOzRCQUNMLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVE7NEJBQ3hELElBQUksRUFBRSxLQUFLO3lCQUNaLENBQUM7b0JBSndELENBSXhELEVBQUM7b0JBQ0gsT0FBTyxFQUFFLE1BQU07aUJBQ2hCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUE0QyxVQUFVLEdBOEJyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFJlc3VsdHNUaXRsZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsUmVzdWx0c1RleHQsXG4gICAgICBzb3J0XG4gICAgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XG4gICAgY29uc3QgeyB0b3RhbENvdW50LCBzb3J0OiBjdXJyZW50U29ydCB9ID0gZGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgdGV4dDogdG90YWxDb3VudFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICB0ZXh0OiB0b3RhbFJlc3VsdHNUZXh0W3RvdGFsQ291bnQgPT09IDEgPyAxIDogMF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgbGFiZWw6IHNvcnQubGFiZWwsXG4gICAgICAgICAgb3B0aW9uczogc29ydC5vcHRpb25zLm1hcCgoeyBsYWJlbCwgdmFsdWUsIHNlbGVjdGVkIH0pID0+ICh7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBjdXJyZW50U29ydCA/IHZhbHVlID09PSBjdXJyZW50U29ydCA6IHNlbGVjdGVkLFxuICAgICAgICAgICAgdGV4dDogbGFiZWxcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgcGF5bG9hZDogJ3NvcnQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=