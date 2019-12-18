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
        var _a = this.options, keys = _a.keys, config = _a.config;
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
            var groupConfig = keys[groupId];
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
            fallback: ((config.get('home-layout') || {})["top-hero"] || {}).fallback
        };
    };
    return AwHomeAutocompleteDS;
}(DataSource));
export { AwHomeAutocompleteDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQTBDLGdEQUFVO0lBQXBEOztJQWdFQSxDQUFDOzs7Ozs7SUEvRFcsd0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLHNCQUFPLEVBQUUsNEJBQVU7UUFDckIsSUFBQSxpQkFBK0IsRUFBN0IsY0FBSSxFQUFFLGtCQUF1Qjs7WUFDL0IsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O1lBQ2xDLE9BQU8sR0FBRyxFQUFFOztZQUNaLE1BQU0sR0FBRyxFQUFFO1FBRWpCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFnQjtnQkFBZCxjQUFJLEVBQUUsa0JBQU07O2dCQUN2QixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjs7Z0JBQ2xGLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztnQkFDM0IsWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7O2dCQUMzQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU07WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDWixJQUFBLHlCQUFLLEVBQUUsdUJBQUk7Z0JBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRztvQkFDaEIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxNQUFBO29CQUNKLE9BQU8sRUFBRSxXQUFTLE9BQVM7b0JBQzNCLEtBQUssRUFBRSxFQUFFO2lCQUNWLENBQUM7YUFDSDtZQUVELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O29CQUNwQyxVQUFRLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO29CQUN0QixXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQyxFQUFjOzRCQUFaLFlBQUcsRUFBRSxnQkFBSzt3QkFDdEMsSUFBSSxZQUFZLElBQUksR0FBRyxLQUFLLFlBQVksRUFBRTs0QkFDeEMsVUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQzt5QkFDNUU7b0JBQ0gsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSztvQkFDeEIsUUFBUSxZQUFBO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUU7cUJBQ25CO2lCQUNGLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQztnQkFDdkMsS0FBSyxFQUFFO29CQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSztvQkFDeEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJO29CQUN0QixPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU87aUJBQzdCO2dCQUNELEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSzthQUN6QixDQUFDLEVBUHNDLENBT3RDLEVBQUM7WUFDSCxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSx3QkFBc0IsVUFBVSxlQUFZO29CQUNsRCxPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLFVBQVU7cUJBQ25CO2lCQUNGO2FBQ0Y7WUFDRCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUTtTQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQWhFRCxDQUEwQyxVQUFVLEdBZ0VuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsQ291bnQgfSA9IGRhdGEsXG4gICAgICAgICAgeyBrZXlzLCBjb25maWcgfSA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBsYWJlbHMgPSB0aGlzLm9wdGlvbnMubGFiZWxzIHx8IHt9LFxuICAgICAgICAgIGl0ZW1JZHMgPSBbXSxcbiAgICAgICAgICBncm91cHMgPSB7fTtcblxuICAgIHJlc3VsdHMuZm9yRWFjaCgoeyBpdGVtLCBlbnRpdHkgfSkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBJZCA9IGVudGl0eSA/IGVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgnICcsICctJykgOiAnb2dnZXR0by1jdWx0dXJhbGUnLFxuICAgICAgICBncm91cENvbmZpZyA9IGtleXNbZ3JvdXBJZF0sXG4gICAgICAgIG1haW5NZXRhZGF0YSA9IGdyb3VwQ29uZmlnWydtYWluLW1ldGFkYXRhJ10sXG4gICAgICAgIGN1cnJlbnRJdGVtID0gaXRlbSB8fCBlbnRpdHk7XG5cbiAgICAgIGlmICghZ3JvdXBzW2dyb3VwSWRdKSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGljb24gfSA9IGdyb3VwQ29uZmlnO1xuICAgICAgICBncm91cHNbZ3JvdXBJZF0gPSB7XG4gICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgIGljb24sXG4gICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7Z3JvdXBJZH1gLFxuICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbUlkcy5pbmRleE9mKGN1cnJlbnRJdGVtLmlkKSA9PT0gLTEpIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBbXTtcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmZpZWxkcykge1xuICAgICAgICAgIGN1cnJlbnRJdGVtLmZpZWxkcy5mb3JFYWNoKCh7IGtleSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1haW5NZXRhZGF0YSAmJiBrZXkgPT09IG1haW5NZXRhZGF0YSkge1xuICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsga2V5OiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2tleV0pLCB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBncm91cHNbZ3JvdXBJZF0uaXRlbXMucHVzaCh7XG4gICAgICAgICAgdGl0bGU6IGN1cnJlbnRJdGVtLmxhYmVsLFxuICAgICAgICAgIG1ldGFkYXRhLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHNvdXJjZTogJ2l0ZW0nLFxuICAgICAgICAgICAgaWQ6IGN1cnJlbnRJdGVtLmlkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN1bHRzOiBPYmplY3Qua2V5cyhncm91cHMpLm1hcChrZXkgPT4gKHtcbiAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICB0aXRsZTogZ3JvdXBzW2tleV0udGl0bGUsXG4gICAgICAgICAgaWNvbjogZ3JvdXBzW2tleV0uaWNvbixcbiAgICAgICAgICBjbGFzc2VzOiBncm91cHNba2V5XS5jbGFzc2VzXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1zOiBncm91cHNba2V5XS5pdGVtc1xuICAgICAgfSkpLFxuICAgICAgYWN0aW9uczoge1xuICAgICAgICBzaG93TW9yZToge1xuICAgICAgICAgIHRleHQ6IGBWaXN1YWxpenphIHR1dHRpIGkgJHt0b3RhbENvdW50fSByaXN1bHRhdGlgLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHNvdXJjZTogJ3Nob3dNb3JlJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhbGxiYWNrOiAoKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JykgfHwge30pW1widG9wLWhlcm9cIl0gfHwge30pLmZhbGxiYWNrXG4gICAgfTtcbiAgfVxufVxuIl19