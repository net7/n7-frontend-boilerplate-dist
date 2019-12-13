/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
var AwHomeAutocompleteDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeAutocompleteDS, _super);
    function AwHomeAutocompleteDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwHomeAutocompleteDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var results = data.results, totalCount = data.totalCount;
        var config = this.options.config;
        /** @type {?} */
        var labels = this.options.labels || {};
        /** @type {?} */
        var itemIds = [];
        /** @type {?} */
        var groups = {};
        results.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var item = _a.item, entity = _a.entity;
            /** @type {?} */
            var groupId = entity ? entity.typeOfEntity.replace(' ', '-') : 'oggetto-culturale';
            /** @type {?} */
            var groupConfig = config[groupId];
            /** @type {?} */
            var mainMetadata = groupConfig['main-metadata'];
            /** @type {?} */
            var currentItem = item || entity;
            if (!groups[groupId]) {
                var label = groupConfig.label, icon = groupConfig.icon;
                groups[groupId] = {
                    title: label,
                    icon: icon,
                    classes: "color-" + groupId,
                    items: []
                };
            }
            if (itemIds.indexOf(currentItem.id) === -1) {
                /** @type {?} */
                var metadata_1 = [];
                if (currentItem.fields) {
                    currentItem.fields.forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    function (_a) {
                        var key = _a.key, value = _a.value;
                        if (mainMetadata && key === mainMetadata) {
                            metadata_1.push({ key: helpers.prettifySnakeCase(key, labels[key]), value: value });
                        }
                    }));
                }
                groups[groupId].items.push({
                    title: currentItem.label,
                    metadata: metadata_1,
                    payload: {
                        source: 'item',
                        id: currentItem.id
                    }
                });
            }
        }));
        return {
            results: Object.keys(groups).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return ({
                group: {
                    title: groups[key].title,
                    icon: groups[key].icon,
                    classes: groups[key].classes
                },
                items: groups[key].items
            }); })),
            actions: {
                showMore: {
                    text: "Visualizza tutti i " + totalCount + " risultati",
                    payload: {
                        source: 'showMore'
                    }
                }
            },
            fallback: 'Spiacenti, non è stato trovato nessun risultato. <br> Riprova con una nuova ricerca.'
        };
    };
    return AwHomeAutocompleteDS;
}(DataSource));
export { AwHomeAutocompleteDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQTBDLGdEQUFVO0lBQXBEOztJQWlFQSxDQUFDOzs7Ozs7SUFoRVcsd0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLHNCQUFPLEVBQUUsNEJBQVU7UUFDdkIsSUFBQSw0QkFBTTs7WUFDUixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTs7WUFDbEMsT0FBTyxHQUFHLEVBQUU7O1lBQ1osTUFBTSxHQUFHLEVBQUU7UUFFYixPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsRUFBZ0I7Z0JBQWQsY0FBSSxFQUFFLGtCQUFNOztnQkFDdkIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7O2dCQUNsRixXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7Z0JBQzdCLFlBQVksR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDOztnQkFDM0MsV0FBVyxHQUFHLElBQUksSUFBSSxNQUFNO1lBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1osSUFBQSx5QkFBSyxFQUFFLHVCQUFJO2dCQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7b0JBQ2hCLEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUksTUFBQTtvQkFDSixPQUFPLEVBQUUsV0FBUyxPQUFTO29CQUMzQixLQUFLLEVBQUUsRUFBRTtpQkFDVixDQUFDO2FBQ0g7WUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztvQkFDcEMsVUFBUSxHQUFHLEVBQUU7Z0JBQ25CLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDdEIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUMsRUFBYzs0QkFBWixZQUFHLEVBQUUsZ0JBQUs7d0JBQ3RDLElBQUksWUFBWSxJQUFJLEdBQUcsS0FBSyxZQUFZLEVBQUU7NEJBQ3hDLFVBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7eUJBQzVFO29CQUNILENBQUMsRUFBQyxDQUFDO2lCQUNKO2dCQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUN6QixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7b0JBQ3hCLFFBQVEsWUFBQTtvQkFDUixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLE1BQU07d0JBQ2QsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFO3FCQUNuQjtpQkFDRixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTztZQUNMLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUM7Z0JBQ3ZDLEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7b0JBQ3hCLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTtvQkFDdEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPO2lCQUM3QjtnQkFDRCxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7YUFDekIsQ0FBQyxFQVBzQyxDQU90QyxFQUFDO1lBQ0gsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsd0JBQXNCLFVBQVUsZUFBWTtvQkFDbEQsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxVQUFVO3FCQUNuQjtpQkFDRjthQUNGO1lBQ0QsUUFBUSxFQUNOLHNGQUFzRjtTQUN6RixDQUFDO0lBQ0osQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQWpFRCxDQUEwQyxVQUFVLEdBaUVuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsQ291bnQgfSA9IGRhdGEsXG4gICAgICB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zLFxuICAgICAgbGFiZWxzID0gdGhpcy5vcHRpb25zLmxhYmVscyB8fCB7fSxcbiAgICAgIGl0ZW1JZHMgPSBbXSxcbiAgICAgIGdyb3VwcyA9IHt9O1xuXG4gICAgcmVzdWx0cy5mb3JFYWNoKCh7IGl0ZW0sIGVudGl0eSB9KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gZW50aXR5ID8gZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKCcgJywgJy0nKSA6ICdvZ2dldHRvLWN1bHR1cmFsZScsXG4gICAgICAgIGdyb3VwQ29uZmlnID0gY29uZmlnW2dyb3VwSWRdLFxuICAgICAgICBtYWluTWV0YWRhdGEgPSBncm91cENvbmZpZ1snbWFpbi1tZXRhZGF0YSddLFxuICAgICAgICBjdXJyZW50SXRlbSA9IGl0ZW0gfHwgZW50aXR5O1xuXG4gICAgICBpZiAoIWdyb3Vwc1tncm91cElkXSkge1xuICAgICAgICBjb25zdCB7IGxhYmVsLCBpY29uIH0gPSBncm91cENvbmZpZztcbiAgICAgICAgZ3JvdXBzW2dyb3VwSWRdID0ge1xuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICBpY29uLFxuICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2dyb3VwSWR9YCxcbiAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1JZHMuaW5kZXhPZihjdXJyZW50SXRlbS5pZCkgPT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gW107XG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5maWVsZHMpIHtcbiAgICAgICAgICBjdXJyZW50SXRlbS5maWVsZHMuZm9yRWFjaCgoeyBrZXksIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChtYWluTWV0YWRhdGEgJiYga2V5ID09PSBtYWluTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGtleTogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1trZXldKSwgdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBzW2dyb3VwSWRdLml0ZW1zLnB1c2goe1xuICAgICAgICAgIHRpdGxlOiBjdXJyZW50SXRlbS5sYWJlbCxcbiAgICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzb3VyY2U6ICdpdGVtJyxcbiAgICAgICAgICAgIGlkOiBjdXJyZW50SXRlbS5pZFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0czogT2JqZWN0LmtleXMoZ3JvdXBzKS5tYXAoa2V5ID0+ICh7XG4gICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgdGl0bGU6IGdyb3Vwc1trZXldLnRpdGxlLFxuICAgICAgICAgIGljb246IGdyb3Vwc1trZXldLmljb24sXG4gICAgICAgICAgY2xhc3NlczogZ3JvdXBzW2tleV0uY2xhc3Nlc1xuICAgICAgICB9LFxuICAgICAgICBpdGVtczogZ3JvdXBzW2tleV0uaXRlbXNcbiAgICAgIH0pKSxcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2hvd01vcmU6IHtcbiAgICAgICAgICB0ZXh0OiBgVmlzdWFsaXp6YSB0dXR0aSBpICR7dG90YWxDb3VudH0gcmlzdWx0YXRpYCxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzb3VyY2U6ICdzaG93TW9yZSdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxsYmFjazpcbiAgICAgICAgJ1NwaWFjZW50aSwgbm9uIMOoIHN0YXRvIHRyb3ZhdG8gbmVzc3VuIHJpc3VsdGF0by4gPGJyPiBSaXByb3ZhIGNvbiB1bmEgbnVvdmEgcmljZXJjYS4nXG4gICAgfTtcbiAgfVxufVxuIl19