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
            var groupId = entity ? entity.typeOfEntity.replace(' ', '-') : item.document_type;
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
                        type: (groups[groupId] || {}).type,
                        title: currentItem.label
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQTBDLGdEQUFVO0lBQXBEOztJQW1FQSxDQUFDOzs7Ozs7SUFsRVcsd0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLHNCQUFPLEVBQUUsNEJBQVU7UUFDckIsSUFBQSxpQkFBK0IsRUFBN0IsY0FBSSxFQUFFLGtCQUF1Qjs7WUFDL0IsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUU7O1lBQ2xDLE9BQU8sR0FBRyxFQUFFOztZQUNaLE1BQU0sR0FBRyxFQUFFO1FBRWpCLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFnQjtnQkFBZCxjQUFJLEVBQUUsa0JBQU07O2dCQUN2QixPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhOztnQkFDakYsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7O2dCQUMzQixZQUFZLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQzs7Z0JBQzNDLFdBQVcsR0FBRyxJQUFJLElBQUksTUFBTTtZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNaLElBQUEseUJBQUssRUFBRSx1QkFBSTtnQkFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHO29CQUNoQixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLE1BQUE7b0JBQ0osT0FBTyxFQUFFLFdBQVMsT0FBUztvQkFDM0IsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLE9BQU87aUJBQ2QsQ0FBQzthQUNIO1lBRUQsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7b0JBQ3BDLFVBQVEsR0FBRyxFQUFFO2dCQUNuQixJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQ3RCLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztvQkFBQyxVQUFDLEVBQWM7NEJBQVosWUFBRyxFQUFFLGdCQUFLO3dCQUN0QyxJQUFJLFlBQVksSUFBSSxHQUFHLEtBQUssWUFBWSxFQUFFOzRCQUN4QyxVQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO3lCQUM1RTtvQkFDSCxDQUFDLEVBQUMsQ0FBQztpQkFDSjtnQkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDekIsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLO29CQUN4QixRQUFRLFlBQUE7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLE1BQU0sRUFBRSxNQUFNO3dCQUNkLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTt3QkFDbEIsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7d0JBQ2xDLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSztxQkFDekI7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDO2dCQUN2QyxLQUFLLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLO29CQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUk7b0JBQ3RCLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTztpQkFDN0I7Z0JBQ0QsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLO2FBQ3pCLENBQUMsRUFQc0MsQ0FPdEMsRUFBQztZQUNILE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLHdCQUFzQixVQUFVLGVBQVk7b0JBQ2xELE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsVUFBVTtxQkFDbkI7aUJBQ0Y7YUFDRjtZQUNELFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRO1NBQ3pFLENBQUM7SUFDSixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBbkVELENBQTBDLFVBQVUsR0FtRW5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUF1dG9jb21wbGV0ZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgcmVzdWx0cywgdG90YWxDb3VudCB9ID0gZGF0YSxcbiAgICAgICAgICB7IGtleXMsIGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGxhYmVscyA9IHRoaXMub3B0aW9ucy5sYWJlbHMgfHwge30sXG4gICAgICAgICAgaXRlbUlkcyA9IFtdLFxuICAgICAgICAgIGdyb3VwcyA9IHt9O1xuXG4gICAgcmVzdWx0cy5mb3JFYWNoKCh7IGl0ZW0sIGVudGl0eSB9KSA9PiB7XG4gICAgICBjb25zdCBncm91cElkID0gZW50aXR5ID8gZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKCcgJywgJy0nKSA6IGl0ZW0uZG9jdW1lbnRfdHlwZSxcbiAgICAgICAgZ3JvdXBDb25maWcgPSBrZXlzW2dyb3VwSWRdLFxuICAgICAgICBtYWluTWV0YWRhdGEgPSBncm91cENvbmZpZ1snbWFpbi1tZXRhZGF0YSddLFxuICAgICAgICBjdXJyZW50SXRlbSA9IGl0ZW0gfHwgZW50aXR5O1xuXG4gICAgICBpZiAoIWdyb3Vwc1tncm91cElkXSkge1xuICAgICAgICBjb25zdCB7IGxhYmVsLCBpY29uIH0gPSBncm91cENvbmZpZztcbiAgICAgICAgZ3JvdXBzW2dyb3VwSWRdID0ge1xuICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICBpY29uLFxuICAgICAgICAgIGNsYXNzZXM6IGBjb2xvci0ke2dyb3VwSWR9YCxcbiAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgdHlwZTogZ3JvdXBJZFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbUlkcy5pbmRleE9mKGN1cnJlbnRJdGVtLmlkKSA9PT0gLTEpIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBbXTtcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmZpZWxkcykge1xuICAgICAgICAgIGN1cnJlbnRJdGVtLmZpZWxkcy5mb3JFYWNoKCh7IGtleSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1haW5NZXRhZGF0YSAmJiBrZXkgPT09IG1haW5NZXRhZGF0YSkge1xuICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsga2V5OiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGtleSwgbGFiZWxzW2tleV0pLCB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBncm91cHNbZ3JvdXBJZF0uaXRlbXMucHVzaCh7XG4gICAgICAgICAgdGl0bGU6IGN1cnJlbnRJdGVtLmxhYmVsLFxuICAgICAgICAgIG1ldGFkYXRhLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHNvdXJjZTogJ2l0ZW0nLFxuICAgICAgICAgICAgaWQ6IGN1cnJlbnRJdGVtLmlkLFxuICAgICAgICAgICAgdHlwZTogKGdyb3Vwc1tncm91cElkXSB8fCB7fSkudHlwZSxcbiAgICAgICAgICAgIHRpdGxlOiBjdXJyZW50SXRlbS5sYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0czogT2JqZWN0LmtleXMoZ3JvdXBzKS5tYXAoa2V5ID0+ICh7XG4gICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgdGl0bGU6IGdyb3Vwc1trZXldLnRpdGxlLFxuICAgICAgICAgIGljb246IGdyb3Vwc1trZXldLmljb24sXG4gICAgICAgICAgY2xhc3NlczogZ3JvdXBzW2tleV0uY2xhc3Nlc1xuICAgICAgICB9LFxuICAgICAgICBpdGVtczogZ3JvdXBzW2tleV0uaXRlbXNcbiAgICAgIH0pKSxcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2hvd01vcmU6IHtcbiAgICAgICAgICB0ZXh0OiBgVmlzdWFsaXp6YSB0dXR0aSBpICR7dG90YWxDb3VudH0gcmlzdWx0YXRpYCxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzb3VyY2U6ICdzaG93TW9yZSdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxsYmFjazogKChjb25maWcuZ2V0KCdob21lLWxheW91dCcpIHx8IHt9KVtcInRvcC1oZXJvXCJdIHx8IHt9KS5mYWxsYmFja1xuICAgIH07XG4gIH1cbn1cbiJdfQ==