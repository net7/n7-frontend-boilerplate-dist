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
                    anchor: {
                        href: paths.searchBasePath,
                        queryParams: {
                            query: query
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQTBDLGdEQUFVO0lBQXBEOztJQW9FQSxDQUFDOzs7Ozs7SUFuRVcsd0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLHdCQUFRLEVBQUUsa0JBQUs7UUFDZixJQUFBLDBCQUFPLEVBQUUsZ0NBQVU7UUFDckIsSUFBQSxpQkFBc0MsRUFBcEMsY0FBSSxFQUFFLGtCQUFNLEVBQUUsZ0JBQXNCOztZQUN0QyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRTs7WUFDbEMsT0FBTyxHQUFHLEVBQUU7O1lBQ1osTUFBTSxHQUFHLEVBQUU7UUFFakIsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEVBQWdCO2dCQUFkLGNBQUksRUFBRSxrQkFBTTs7Z0JBQ3ZCLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhOztnQkFDL0QsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7O2dCQUMzQixZQUFZLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQzs7Z0JBQzNDLFdBQVcsR0FBRyxJQUFJLElBQUksTUFBTTtZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNaLElBQUEseUJBQUssRUFBRSx1QkFBSTtnQkFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHO29CQUNoQixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLE1BQUE7b0JBQ0osT0FBTyxFQUFFLFdBQVMsV0FBVyxDQUFDLFlBQVksQ0FBRztvQkFDN0MsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLE9BQU87aUJBQ2QsQ0FBQzthQUNIO1lBRUQsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7b0JBQ3BDLFVBQVEsR0FBRyxFQUFFO2dCQUNuQixJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQ3RCLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztvQkFBQyxVQUFDLEVBQWM7NEJBQVosWUFBRyxFQUFFLGdCQUFLO3dCQUN0QyxJQUFJLFlBQVksSUFBSSxHQUFHLEtBQUssWUFBWSxFQUFFOzRCQUN4QyxVQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO3lCQUM1RTtvQkFDSCxDQUFDLEVBQUMsQ0FBQztpQkFDSjtnQkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDekIsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLO29CQUN4QixRQUFRLFlBQUE7b0JBQ1IsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsU0FBSSxXQUFXLENBQUMsRUFBRSxTQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBRztxQkFDdkg7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDO2dCQUN2QyxLQUFLLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLO29CQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUk7b0JBQ3RCLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTztpQkFDN0I7Z0JBQ0QsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLO2FBQ3pCLENBQUMsRUFQc0MsQ0FPdEMsRUFBQztZQUNILE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLHdCQUFzQixVQUFVLGVBQVk7b0JBQ2xELE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsS0FBSyxDQUFDLGNBQWM7d0JBQzFCLFdBQVcsRUFBRTs0QkFDWCxLQUFLLE9BQUE7eUJBQ047cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRO1NBQ3pFLENBQUM7SUFDSixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBcEVELENBQTBDLFVBQVUsR0FvRW5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUF1dG9jb21wbGV0ZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgcmVzcG9uc2UsIHF1ZXJ5IH0gPSBkYXRhLFxuICAgICAgICAgIHsgcmVzdWx0cywgdG90YWxDb3VudCB9ID0gcmVzcG9uc2UsXG4gICAgICAgICAgeyBrZXlzLCBjb25maWcsIHBhdGhzIH0gPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgbGFiZWxzID0gdGhpcy5vcHRpb25zLmxhYmVscyB8fCB7fSxcbiAgICAgICAgICBpdGVtSWRzID0gW10sXG4gICAgICAgICAgZ3JvdXBzID0ge307XG5cbiAgICByZXN1bHRzLmZvckVhY2goKHsgaXRlbSwgZW50aXR5IH0pID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwSWQgPSBlbnRpdHkgPyBlbnRpdHkudHlwZU9mRW50aXR5IDogaXRlbS5kb2N1bWVudF90eXBlLFxuICAgICAgICBncm91cENvbmZpZyA9IGtleXNbZ3JvdXBJZF0sXG4gICAgICAgIG1haW5NZXRhZGF0YSA9IGdyb3VwQ29uZmlnWydtYWluLW1ldGFkYXRhJ10sXG4gICAgICAgIGN1cnJlbnRJdGVtID0gaXRlbSB8fCBlbnRpdHk7XG5cbiAgICAgIGlmICghZ3JvdXBzW2dyb3VwSWRdKSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGljb24gfSA9IGdyb3VwQ29uZmlnO1xuICAgICAgICBncm91cHNbZ3JvdXBJZF0gPSB7XG4gICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgIGljb24sXG4gICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7Z3JvdXBDb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxuICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB0eXBlOiBncm91cElkXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtSWRzLmluZGV4T2YoY3VycmVudEl0ZW0uaWQpID09PSAtMSkge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IFtdO1xuICAgICAgICBpZiAoY3VycmVudEl0ZW0uZmllbGRzKSB7XG4gICAgICAgICAgY3VycmVudEl0ZW0uZmllbGRzLmZvckVhY2goKHsga2V5LCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAobWFpbk1ldGFkYXRhICYmIGtleSA9PT0gbWFpbk1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgIG1ldGFkYXRhLnB1c2goeyBrZXk6IGhlbHBlcnMucHJldHRpZnlTbmFrZUNhc2Uoa2V5LCBsYWJlbHNba2V5XSksIHZhbHVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdyb3Vwc1tncm91cElkXS5pdGVtcy5wdXNoKHtcbiAgICAgICAgICB0aXRsZTogY3VycmVudEl0ZW0ubGFiZWwsXG4gICAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBocmVmOiBgJHtwYXRoc1tlbnRpdHkgPyAnZW50aXRhQmFzZVBhdGgnIDogJ3NjaGVkYUJhc2VQYXRoJ119LyR7Y3VycmVudEl0ZW0uaWR9LyR7aGVscGVycy5zbHVnaWZ5KGN1cnJlbnRJdGVtLmxhYmVsKX1gXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN1bHRzOiBPYmplY3Qua2V5cyhncm91cHMpLm1hcChrZXkgPT4gKHtcbiAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICB0aXRsZTogZ3JvdXBzW2tleV0udGl0bGUsXG4gICAgICAgICAgaWNvbjogZ3JvdXBzW2tleV0uaWNvbixcbiAgICAgICAgICBjbGFzc2VzOiBncm91cHNba2V5XS5jbGFzc2VzXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1zOiBncm91cHNba2V5XS5pdGVtc1xuICAgICAgfSkpLFxuICAgICAgYWN0aW9uczoge1xuICAgICAgICBzaG93TW9yZToge1xuICAgICAgICAgIHRleHQ6IGBWaXN1YWxpenphIHR1dHRpIGkgJHt0b3RhbENvdW50fSByaXN1bHRhdGlgLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgaHJlZjogcGF0aHMuc2VhcmNoQmFzZVBhdGgsXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhbGxiYWNrOiAoKGNvbmZpZy5nZXQoJ2hvbWUtbGF5b3V0JykgfHwge30pWyd0b3AtaGVybyddIHx8IHt9KS5mYWxsYmFja1xuICAgIH07XG4gIH1cbn1cbiJdfQ==