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
                    type: groupId,
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
                        href: paths[entity ? 'entitaBasePath' : 'schedaBasePath'] + "/" + currentItem.id + "/" + helpers.slugify(currentItem.label),
                    },
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
                classes: groups[key].classes,
            },
            items: groups[key].items,
        }); }));
        return {
            results: grouplist,
            actions: grouplist.length > 0 ? {
                showMore: {
                    text: "Visualizza tutti i " + totalCount + " risultati",
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query: query,
                        },
                    },
                },
            } : {
                showMore: {
                    text: 'Cerca in tutti i campi',
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query: query,
                            // Query string
                            'query-all': 1,
                        },
                    },
                },
            },
            fallback: ((config.get('home-layout') || {})['top-hero'] || {}).fallback,
        };
    };
    return AwHomeAutocompleteDS;
}(DataSource));
export { AwHomeAutocompleteDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUEwQyxnREFBVTtJQUFwRDs7SUFpRkEsQ0FBQzs7Ozs7O0lBaEZXLHdDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ2QsSUFBQSx3QkFBUSxFQUFFLGtCQUFLO1FBQ2YsSUFBQSwwQkFBTyxFQUFFLGdDQUFVO1FBQ3JCLElBQUEsaUJBQXNDLEVBQXBDLGNBQUksRUFBRSxrQkFBTSxFQUFFLGdCQUFzQjs7WUFDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O1lBQ2xDLE9BQU8sR0FBRyxFQUFFOztZQUNaLE1BQU0sR0FBRyxFQUFFO1FBRWpCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFnQjtnQkFBZCxjQUFJLEVBQUUsa0JBQU07O2dCQUN2QixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYTs7Z0JBQzNELFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztnQkFDM0IsWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7O2dCQUMzQyxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU07WUFFbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDWixJQUFBLHlCQUFLLEVBQUUsdUJBQUk7Z0JBQ25CLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRztvQkFDaEIs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Y2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3QgeyByZXNwb25zZSwgcXVlcnkgfSA9IGRhdGE7XHJcbiAgICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsQ291bnQgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgeyBrZXlzLCBjb25maWcsIHBhdGhzIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLm9wdGlvbnMubGFiZWxzIHx8IHt9O1xyXG4gICAgY29uc3QgaXRlbUlkcyA9IFtdO1xyXG4gICAgY29uc3QgZ3JvdXBzID0ge307XHJcblxyXG4gICAgcmVzdWx0cy5mb3JFYWNoKCh7IGl0ZW0sIGVudGl0eSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBlbnRpdHkgPyBlbnRpdHkudHlwZU9mRW50aXR5IDogaXRlbS5kb2N1bWVudF90eXBlO1xyXG4gICAgICBjb25zdCBncm91cENvbmZpZyA9IGtleXNbZ3JvdXBJZF07XHJcbiAgICAgIGNvbnN0IG1haW5NZXRhZGF0YSA9IGdyb3VwQ29uZmlnWydtYWluLW1ldGFkYXRhJ107XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gaXRlbSB8fCBlbnRpdHk7XHJcblxyXG4gICAgICBpZiAoIWdyb3Vwc1tncm91cElkXSkge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGljb24gfSA9IGdyb3VwQ29uZmlnO1xyXG4gICAgICAgIGdyb3Vwc1tncm91cElkXSA9IHtcclxuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcclxuICAgICAgICAgIGljb24sXHJcbiAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtncm91cENvbmZpZ1snY2xhc3MtbmFtZSddfWAsXHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICB0eXBlOiBncm91cElkLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtSWRzLmluZGV4T2YoY3VycmVudEl0ZW0uaWQpID09PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gW107XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmZpZWxkcykge1xyXG4gICAgICAgICAgY3VycmVudEl0ZW0uZmllbGRzLmZvckVhY2goKHsga2V5LCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYWluTWV0YWRhdGEgJiYga2V5ID09PSBtYWluTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsga2V5OiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2tleV0pLCB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3Vwc1tncm91cElkXS5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgIHRpdGxlOiBjdXJyZW50SXRlbS5sYWJlbCxcclxuICAgICAgICAgIG1ldGFkYXRhLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIGhyZWY6IGAke3BhdGhzW2VudGl0eSA/ICdlbnRpdGFCYXNlUGF0aCcgOiAnc2NoZWRhQmFzZVBhdGgnXX0vJHtjdXJyZW50SXRlbS5pZH0vJHtoZWxwZXJzLnNsdWdpZnkoY3VycmVudEl0ZW0ubGFiZWwpfWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBncm91cGxpc3QgPSBPYmplY3Qua2V5cyhncm91cHMpLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIHRpdGxlOiBncm91cHNba2V5XS50aXRsZSxcclxuICAgICAgICBpY29uOiBncm91cHNba2V5XS5pY29uLFxyXG4gICAgICAgIGNsYXNzZXM6IGdyb3Vwc1trZXldLmNsYXNzZXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1zOiBncm91cHNba2V5XS5pdGVtcyxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN1bHRzOiBncm91cGxpc3QsXHJcbiAgICAgIGFjdGlvbnM6IGdyb3VwbGlzdC5sZW5ndGggPiAwID8ge1xyXG4gICAgICAgIHNob3dNb3JlOiB7XHJcbiAgICAgICAgICB0ZXh0OiBgVmlzdWFsaXp6YSB0dXR0aSBpICR7dG90YWxDb3VudH0gcmlzdWx0YXRpYCxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBocmVmOiBwYXRocy5zZWFyY2hCYXNlUGF0aCxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSA6IHtcclxuICAgICAgICBzaG93TW9yZToge1xyXG4gICAgICAgICAgdGV4dDogJ0NlcmNhIGluIHR1dHRpIGkgY2FtcGknLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIGhyZWY6IHBhdGhzLnNlYXJjaEJhc2VQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgIHF1ZXJ5LCAvLyBRdWVyeSBzdHJpbmdcclxuICAgICAgICAgICAgICAncXVlcnktYWxsJzogMSwgLy8gXCJDZXJjYSBpbiB0dXR0aSBpIGNhbXBpIGRlbGxlIHNjaGVkZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhbGxiYWNrOiAoKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JykgfHwge30pWyd0b3AtaGVybyddIHx8IHt9KS5mYWxsYmFjayxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==