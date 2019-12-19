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
                    items: [],
                    type: groupId
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
                        id: currentItem.id,
                        type: (groups[groupId] || {}).type
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQTBDLGdEQUFVO0lBQXBEOztJQWtFQSxDQUFDOzs7Ozs7SUFqRVcsd0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLHNCQUFPLEVBQUUsNEJBQVU7UUFDckIsSUFBQSxpQkFBK0IsRUFBN0IsY0FBSSxFQUFFLGtCQUF1Qjs7WUFDL0IsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O1lBQ2xDLE9BQU8sR0FBRyxFQUFFOztZQUNaLE1BQU0sR0FBRyxFQUFFO1FBRWpCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFnQjtnQkFBZCxjQUFJLEVBQUUsa0JBQU07O2dCQUN2QixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjs7Z0JBQ2xGLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztnQkFDM0IsWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7O2dCQUMzQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU07WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDWixJQUFBLHlCQUFLLEVBQUUsdUJBQUk7Z0JBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRztvQkFDaEIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxNQUFBO29CQUNKLE9BQU8sRUFBRSxXQUFTLE9BQVM7b0JBQzNCLEtBQUssRUFBRSxFQUFFO29CQUNULElBQUksRUFBRSxPQUFPO2lCQUNkLENBQUM7YUFDSDtZQUVELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O29CQUNwQyxVQUFRLEdBQUcsRUFBRTtnQkFDbkIsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO29CQUN0QixXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQyxFQUFjOzRCQUFaLFlBQUcsRUFBRSxnQkFBSzt3QkFDdEMsSUFBSSxZQUFZLElBQUksR0FBRyxLQUFLLFlBQVksRUFBRTs0QkFDeEMsVUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQzt5QkFDNUU7b0JBQ0gsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSztvQkFDeEIsUUFBUSxZQUFBO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUU7d0JBQ2xCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO3FCQUNuQztpQkFDRixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTztZQUNMLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUM7Z0JBQ3ZDLEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7b0JBQ3hCLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTtvQkFDdEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPO2lCQUM3QjtnQkFDRCxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7YUFDekIsQ0FBQyxFQVBzQyxDQU90QyxFQUFDO1lBQ0gsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsd0JBQXNCLFVBQVUsZUFBWTtvQkFDbEQsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxVQUFVO3FCQUNuQjtpQkFDRjthQUNGO1lBQ0QsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVE7U0FDekUsQ0FBQztJQUNKLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFsRUQsQ0FBMEMsVUFBVSxHQWtFbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lQXV0b2NvbXBsZXRlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyByZXN1bHRzLCB0b3RhbENvdW50IH0gPSBkYXRhLFxuICAgICAgICAgIHsga2V5cywgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgbGFiZWxzID0gdGhpcy5vcHRpb25zLmxhYmVscyB8fCB7fSxcbiAgICAgICAgICBpdGVtSWRzID0gW10sXG4gICAgICAgICAgZ3JvdXBzID0ge307XG5cbiAgICByZXN1bHRzLmZvckVhY2goKHsgaXRlbSwgZW50aXR5IH0pID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBlbnRpdHkgPyBlbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoJyAnLCAnLScpIDogJ29nZ2V0dG8tY3VsdHVyYWxlJyxcbiAgICAgICAgZ3JvdXBDb25maWcgPSBrZXlzW2dyb3VwSWRdLFxuICAgICAgICBtYWluTWV0YWRhdGEgPSBncm91cENvbmZpZ1snbWFpbi1tZXRhZGF0YSddLFxuICAgICAgICBjdXJyZW50SXRlbSA9IGl0ZW0gfHwgZW50aXR5O1xuXG4gICAgICBpZiAoIWdyb3Vwc1tncm91cElkXSkge1xuICAgICAgICBjb25zdCB7IGxhYmVsLCBpY29uIH0gPSBncm91cENvbmZpZztcbiAgICAgICAgZ3JvdXBzW2dyb3VwSWRdID0ge1xuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICBpY29uLFxuICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2dyb3VwSWR9YCxcbiAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgdHlwZTogZ3JvdXBJZFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbUlkcy5pbmRleE9mKGN1cnJlbnRJdGVtLmlkKSA9PT0gLTEpIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBbXTtcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmZpZWxkcykge1xuICAgICAgICAgIGN1cnJlbnRJdGVtLmZpZWxkcy5mb3JFYWNoKCh7IGtleSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1haW5NZXRhZGF0YSAmJiBrZXkgPT09IG1haW5NZXRhZGF0YSkge1xuICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsga2V5OiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2tleV0pLCB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBncm91cHNbZ3JvdXBJZF0uaXRlbXMucHVzaCh7XG4gICAgICAgICAgdGl0bGU6IGN1cnJlbnRJdGVtLmxhYmVsLFxuICAgICAgICAgIG1ldGFkYXRhLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHNvdXJjZTogJ2l0ZW0nLFxuICAgICAgICAgICAgaWQ6IGN1cnJlbnRJdGVtLmlkLFxuICAgICAgICAgICAgdHlwZTogKGdyb3Vwc1tncm91cElkXSB8fCB7fSkudHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0czogT2JqZWN0LmtleXMoZ3JvdXBzKS5tYXAoa2V5ID0+ICh7XG4gICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgdGl0bGU6IGdyb3Vwc1trZXldLnRpdGxlLFxuICAgICAgICAgIGljb246IGdyb3Vwc1trZXldLmljb24sXG4gICAgICAgICAgY2xhc3NlczogZ3JvdXBzW2tleV0uY2xhc3Nlc1xuICAgICAgICB9LFxuICAgICAgICBpdGVtczogZ3JvdXBzW2tleV0uaXRlbXNcbiAgICAgIH0pKSxcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2hvd01vcmU6IHtcbiAgICAgICAgICB0ZXh0OiBgVmlzdWFsaXp6YSB0dXR0aSBpICR7dG90YWxDb3VudH0gcmlzdWx0YXRpYCxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzb3VyY2U6ICdzaG93TW9yZSdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxsYmFjazogKChjb25maWcuZ2V0KCdob21lLWxheW91dCcpIHx8IHt9KVtcInRvcC1oZXJvXCJdIHx8IHt9KS5mYWxsYmFja1xuICAgIH07XG4gIH1cbn1cbiJdfQ==