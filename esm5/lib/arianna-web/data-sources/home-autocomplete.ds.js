/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/home-autocomplete.ds.ts
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
        var response = data.response, query = data.query;
        var results = response.results, totalCount = response.totalCount;
        var _a = this.options, keys = _a.keys, config = _a.config, paths = _a.paths;
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
            var groupId = entity ? entity.typeOfEntity : item.document_type;
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
                    classes: "color-" + groupConfig['class-name'],
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
                    anchor: {
                        href: paths[entity ? 'entitaBasePath' : 'schedaBasePath'] + "/" + currentItem.id + "/" + helpers.slugify(currentItem.label)
                    }
                });
            }
        }));
        /** @type {?} */
        var grouplist = Object.keys(groups).map((/**
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
        }); }));
        return {
            results: grouplist,
            actions: grouplist.length > 0 ? {
                showMore: {
                    text: "Visualizza tutti i " + totalCount + " risultati",
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query: query
                        }
                    }
                }
            } : {
                showMore: {
                    text: "Cerca in tutti i campi",
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query: query,
                            // Query string
                            'query-all': 1 // "Cerca in tutti i campi delle schede"
                        }
                    }
                }
            },
            fallback: ((config.get('home-layout') || {})['top-hero'] || {}).fallback
        };
    };
    return AwHomeAutocompleteDS;
}(DataSource));
export { AwHomeAutocompleteDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUEwQyxnREFBVTtJQUFwRDs7SUFpRkEsQ0FBQzs7Ozs7O0lBaEZXLHdDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ2QsSUFBQSx3QkFBUSxFQUFFLGtCQUFLO1FBQ2YsSUFBQSwwQkFBTyxFQUFFLGdDQUFVO1FBQ3JCLElBQUEsaUJBQXNDLEVBQXBDLGNBQUksRUFBRSxrQkFBTSxFQUFFLGdCQUFzQjs7WUFDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O1lBQ2xDLE9BQU8sR0FBRyxFQUFFOztZQUNaLE1BQU0sR0FBRyxFQUFFO1FBRWpCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFnQjtnQkFBZCxjQUFJLEVBQUUsa0JBQU07O2dCQUN2QixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYTs7Z0JBQy9ELFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztnQkFDM0IsWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7O2dCQUMzQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU07WUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDWixJQUFBLHlCQUFLLEVBQUUsdUJBQUk7Z0JBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRztvQkFDaEIs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cnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lQXV0b2NvbXBsZXRlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyByZXNwb25zZSwgcXVlcnkgfSA9IGRhdGEsXG4gICAgICAgICAgeyByZXN1bHRzLCB0b3RhbENvdW50IH0gPSByZXNwb25zZSxcbiAgICAgICAgICB7IGtleXMsIGNvbmZpZywgcGF0aHMgfSA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBsYWJlbHMgPSB0aGlzLm9wdGlvbnMubGFiZWxzIHx8IHt9LFxuICAgICAgICAgIGl0ZW1JZHMgPSBbXSxcbiAgICAgICAgICBncm91cHMgPSB7fTtcblxuICAgIHJlc3VsdHMuZm9yRWFjaCgoeyBpdGVtLCBlbnRpdHkgfSkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBJZCA9IGVudGl0eSA/IGVudGl0eS50eXBlT2ZFbnRpdHkgOiBpdGVtLmRvY3VtZW50X3R5cGUsXG4gICAgICAgIGdyb3VwQ29uZmlnID0ga2V5c1tncm91cElkXSxcbiAgICAgICAgbWFpbk1ldGFkYXRhID0gZ3JvdXBDb25maWdbJ21haW4tbWV0YWRhdGEnXSxcbiAgICAgICAgY3VycmVudEl0ZW0gPSBpdGVtIHx8IGVudGl0eTtcblxuICAgICAgaWYgKCFncm91cHNbZ3JvdXBJZF0pIHtcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgaWNvbiB9ID0gZ3JvdXBDb25maWc7XG4gICAgICAgIGdyb3Vwc1tncm91cElkXSA9IHtcbiAgICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgICAgaWNvbixcbiAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtncm91cENvbmZpZ1snY2xhc3MtbmFtZSddfWAsXG4gICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIHR5cGU6IGdyb3VwSWRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1JZHMuaW5kZXhPZihjdXJyZW50SXRlbS5pZCkgPT09IC0xKSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gW107XG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5maWVsZHMpIHtcbiAgICAgICAgICBjdXJyZW50SXRlbS5maWVsZHMuZm9yRWFjaCgoeyBrZXksIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChtYWluTWV0YWRhdGEgJiYga2V5ID09PSBtYWluTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGtleTogaGVscGVycy5wcmV0dGlmeVNuYWtlQ2FzZShrZXksIGxhYmVsc1trZXldKSwgdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBzW2dyb3VwSWRdLml0ZW1zLnB1c2goe1xuICAgICAgICAgIHRpdGxlOiBjdXJyZW50SXRlbS5sYWJlbCxcbiAgICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIGhyZWY6IGAke3BhdGhzW2VudGl0eSA/ICdlbnRpdGFCYXNlUGF0aCcgOiAnc2NoZWRhQmFzZVBhdGgnXX0vJHtjdXJyZW50SXRlbS5pZH0vJHtoZWxwZXJzLnNsdWdpZnkoY3VycmVudEl0ZW0ubGFiZWwpfWBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZ3JvdXBsaXN0ID0gT2JqZWN0LmtleXMoZ3JvdXBzKS5tYXAoa2V5ID0+ICh7XG4gICAgICBncm91cDoge1xuICAgICAgICB0aXRsZTogZ3JvdXBzW2tleV0udGl0bGUsXG4gICAgICAgIGljb246IGdyb3Vwc1trZXldLmljb24sXG4gICAgICAgIGNsYXNzZXM6IGdyb3Vwc1trZXldLmNsYXNzZXNcbiAgICAgIH0sXG4gICAgICBpdGVtczogZ3JvdXBzW2tleV0uaXRlbXNcbiAgICB9KSlcblxuICAgIHJldHVybiB7XG4gICAgICByZXN1bHRzOiBncm91cGxpc3QsXG4gICAgICBhY3Rpb25zOiBncm91cGxpc3QubGVuZ3RoID4gMCA/IHtcbiAgICAgICAgc2hvd01vcmU6IHtcbiAgICAgICAgICB0ZXh0OiBgVmlzdWFsaXp6YSB0dXR0aSBpICR7dG90YWxDb3VudH0gcmlzdWx0YXRpYCxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIGhyZWY6IHBhdGhzLnNlYXJjaEJhc2VQYXRoLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gOiB7XG4gICAgICAgIHNob3dNb3JlOiB7XG4gICAgICAgICAgdGV4dDogYENlcmNhIGluIHR1dHRpIGkgY2FtcGlgLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgaHJlZjogcGF0aHMuc2VhcmNoQmFzZVBhdGgsXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICBxdWVyeSwgLy8gUXVlcnkgc3RyaW5nXG4gICAgICAgICAgICAgICdxdWVyeS1hbGwnOiAxIC8vIFwiQ2VyY2EgaW4gdHV0dGkgaSBjYW1waSBkZWxsZSBzY2hlZGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhbGxiYWNrOiAoKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JykgfHwge30pWyd0b3AtaGVybyddIHx8IHt9KS5mYWxsYmFja1xuICAgIH07XG4gIH1cbn1cbiJdfQ==