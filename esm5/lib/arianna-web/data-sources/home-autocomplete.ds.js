import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
var AwHomeAutocompleteDS = /** @class */ (function (_super) {
    __extends(AwHomeAutocompleteDS, _super);
    function AwHomeAutocompleteDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwHomeAutocompleteDS.prototype.transform = function (data) {
        var response = data.response, query = data.query;
        var results = response.results, totalCount = response.totalCount;
        var _a = this.options, keys = _a.keys, config = _a.config, paths = _a.paths;
        var labels = this.options.labels || {};
        var itemIds = [];
        var groups = {};
        results.forEach(function (_a) {
            var item = _a.item, entity = _a.entity;
            var groupId = entity ? entity.typeOfEntity : item.document_type;
            var groupConfig = keys[groupId];
            var mainMetadata = groupConfig['main-metadata'];
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
                var metadata_1 = [];
                if (currentItem.fields) {
                    currentItem.fields.forEach(function (_a) {
                        var key = _a.key, value = _a.value;
                        if (mainMetadata && key === mainMetadata) {
                            metadata_1.push({ key: helpers.prettifySnakeCase(key, labels[key]), value: value });
                        }
                    });
                }
                groups[groupId].items.push({
                    title: currentItem.label,
                    metadata: metadata_1,
                    anchor: {
                        href: paths[entity ? 'entitaBasePath' : 'schedaBasePath'] + "/" + currentItem.id + "/" + helpers.slugify(currentItem.label),
                    },
                });
            }
        });
        var grouplist = Object.keys(groups).map(function (key) { return ({
            group: {
                title: groups[key].title,
                icon: groups[key].icon,
                classes: groups[key].classes,
            },
            items: groups[key].items,
        }); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBMEMsd0NBQVU7SUFBcEQ7O0lBaUZBLENBQUM7SUFoRlcsd0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsd0JBQVEsRUFBRSxrQkFBSyxDQUFVO1FBQ3pCLElBQUEsMEJBQU8sRUFBRSxnQ0FBVSxDQUFjO1FBQ25DLElBQUEsaUJBQXNDLEVBQXBDLGNBQUksRUFBRSxrQkFBTSxFQUFFLGdCQUFzQixDQUFDO1FBQzdDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN6QyxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWxCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFnQjtnQkFBZCxjQUFJLEVBQUUsa0JBQU07WUFDN0IsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2xFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxJQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEQsSUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztZQUVuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNaLElB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QUFDO0FBQUQsQ0FBQyxBQWpGRCxDQUEwQyxVQUFVLEdBaUZuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3QgeyByZXNwb25zZSwgcXVlcnkgfSA9IGRhdGE7XHJcbiAgICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsQ291bnQgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgeyBrZXlzLCBjb25maWcsIHBhdGhzIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLm9wdGlvbnMubGFiZWxzIHx8IHt9O1xyXG4gICAgY29uc3QgaXRlbUlkcyA9IFtdO1xyXG4gICAgY29uc3QgZ3JvdXBzID0ge307XHJcblxyXG4gICAgcmVzdWx0cy5mb3JFYWNoKCh7IGl0ZW0sIGVudGl0eSB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBlbnRpdHkgPyBlbnRpdHkudHlwZU9mRW50aXR5IDogaXRlbS5kb2N1bWVudF90eXBlO1xyXG4gICAgICBjb25zdCBncm91cENvbmZpZyA9IGtleXNbZ3JvdXBJZF07XHJcbiAgICAgIGNvbnN0IG1haW5NZXRhZGF0YSA9IGdyb3VwQ29uZmlnWydtYWluLW1ldGFkYXRhJ107XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gaXRlbSB8fCBlbnRpdHk7XHJcblxyXG4gICAgICBpZiAoIWdyb3Vwc1tncm91cElkXSkge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGljb24gfSA9IGdyb3VwQ29uZmlnO1xyXG4gICAgICAgIGdyb3Vwc1tncm91cElkXSA9IHtcclxuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcclxuICAgICAgICAgIGljb24sXHJcbiAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtncm91cENvbmZpZ1snY2xhc3MtbmFtZSddfWAsXHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICB0eXBlOiBncm91cElkLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtSWRzLmluZGV4T2YoY3VycmVudEl0ZW0uaWQpID09PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gW107XHJcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmZpZWxkcykge1xyXG4gICAgICAgICAgY3VycmVudEl0ZW0uZmllbGRzLmZvckVhY2goKHsga2V5LCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYWluTWV0YWRhdGEgJiYga2V5ID09PSBtYWluTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsga2V5OiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2tleV0pLCB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3Vwc1tncm91cElkXS5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgIHRpdGxlOiBjdXJyZW50SXRlbS5sYWJlbCxcclxuICAgICAgICAgIG1ldGFkYXRhLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIGhyZWY6IGAke3BhdGhzW2VudGl0eSA/ICdlbnRpdGFCYXNlUGF0aCcgOiAnc2NoZWRhQmFzZVBhdGgnXX0vJHtjdXJyZW50SXRlbS5pZH0vJHtoZWxwZXJzLnNsdWdpZnkoY3VycmVudEl0ZW0ubGFiZWwpfWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBncm91cGxpc3QgPSBPYmplY3Qua2V5cyhncm91cHMpLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICBncm91cDoge1xyXG4gICAgICAgIHRpdGxlOiBncm91cHNba2V5XS50aXRsZSxcclxuICAgICAgICBpY29uOiBncm91cHNba2V5XS5pY29uLFxyXG4gICAgICAgIGNsYXNzZXM6IGdyb3Vwc1trZXldLmNsYXNzZXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1zOiBncm91cHNba2V5XS5pdGVtcyxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXN1bHRzOiBncm91cGxpc3QsXHJcbiAgICAgIGFjdGlvbnM6IGdyb3VwbGlzdC5sZW5ndGggPiAwID8ge1xyXG4gICAgICAgIHNob3dNb3JlOiB7XHJcbiAgICAgICAgICB0ZXh0OiBgVmlzdWFsaXp6YSB0dXR0aSBpICR7dG90YWxDb3VudH0gcmlzdWx0YXRpYCxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBocmVmOiBwYXRocy5zZWFyY2hCYXNlUGF0aCxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSA6IHtcclxuICAgICAgICBzaG93TW9yZToge1xyXG4gICAgICAgICAgdGV4dDogJ0NlcmNhIGluIHR1dHRpIGkgY2FtcGknLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIGhyZWY6IHBhdGhzLnNlYXJjaEJhc2VQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgIHF1ZXJ5LCAvLyBRdWVyeSBzdHJpbmdcclxuICAgICAgICAgICAgICAncXVlcnktYWxsJzogMSwgLy8gXCJDZXJjYSBpbiB0dXR0aSBpIGNhbXBpIGRlbGxlIHNjaGVkZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhbGxiYWNrOiAoKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JykgfHwge30pWyd0b3AtaGVybyddIHx8IHt9KS5mYWxsYmFjayxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==