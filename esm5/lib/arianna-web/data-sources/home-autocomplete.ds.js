/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
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
        var items = data.items, totalCount = data.totalCount;
        var config = this.options.config;
        /** @type {?} */
        var itemIds = [];
        /** @type {?} */
        var groups = {};
        items.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var item = _a.item, typeOfEntity = _a.typeOfEntity;
            if (!groups[typeOfEntity.id]) {
                var _b = config[typeOfEntity.configKey], label = _b.label, icon = _b.icon;
                groups[typeOfEntity.id] = {
                    title: label,
                    icon: icon,
                    classes: "color-" + typeOfEntity.configKey,
                    items: [],
                };
            }
            if (itemIds.indexOf(item.id) === -1) {
                /** @type {?} */
                var metaDataValue_1 = '';
                item.info.forEach((/**
                 * @param {?} infoData
                 * @return {?}
                 */
                function (infoData) {
                    if (infoData.key === 'author')
                        metaDataValue_1 = "di " + infoData.value;
                }));
                groups[typeOfEntity.id].items.push({
                    label: item.label,
                    value: metaDataValue_1,
                    payload: {
                        source: 'item',
                        id: item.id
                    }
                });
            }
        }));
        /** @type {?} */
        var results = Object.keys(groups).map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return ({ group: tslib_1.__assign({}, groups[key]) }); }));
        return {
            results: results,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQTBDLGdEQUFVO0lBQXBEOztJQW1EQSxDQUFDOzs7Ozs7SUFqRFcsd0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFFZCxJQUFBLGtCQUFLLEVBQUUsNEJBQVU7UUFDakIsSUFBQSw0QkFBTTs7WUFFVixPQUFPLEdBQUcsRUFBRTs7WUFDZCxNQUFNLEdBQUcsRUFBRTtRQUViLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxFQUFzQjtnQkFBcEIsY0FBSSxFQUFFLDhCQUFZO1lBQ2pDLElBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNyQixJQUFBLG1DQUFnRCxFQUE5QyxnQkFBSyxFQUFFLGNBQXVDO2dCQUN0RCxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxHQUFHO29CQUN4QixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLE1BQUE7b0JBQ0osT0FBTyxFQUFFLFdBQVMsWUFBWSxDQUFDLFNBQVc7b0JBQzFDLEtBQUssRUFBRSxFQUFFO2lCQUNWLENBQUM7YUFDSDtZQUVELElBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7O29CQUM3QixlQUFhLEdBQVcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUEsUUFBUTtvQkFDeEIsSUFBRyxRQUFRLENBQUMsR0FBRyxLQUFLLFFBQVE7d0JBQUUsZUFBYSxHQUFHLFFBQU0sUUFBUSxDQUFDLEtBQU8sQ0FBQztnQkFDdkUsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLEtBQUssRUFBRSxlQUFhO29CQUNwQixPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLE1BQU07d0JBQ2QsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO3FCQUNaO2lCQUNGLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7O1lBRUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxFQUFFLEtBQUssdUJBQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUE3QixDQUE2QixFQUFDO1FBQzdFLE9BQU87WUFDTCxPQUFPLFNBQUE7WUFDUCxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSx3QkFBc0IsVUFBVSxlQUFZO29CQUNsRCxPQUFPLEVBQUU7d0JBQ1AsTUFBTSxFQUFFLFVBQVU7cUJBQ25CO2lCQUNGO2FBQ0Y7WUFDRCxRQUFRLEVBQUUsc0ZBQXNGO1NBQ2pHLENBQUM7SUFDSixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBbkRELENBQTBDLFVBQVUsR0FtRG5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEFEVkFOQ0VEX0FVVE9DT01QTEVURV9NT0NLIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lQXV0b2NvbXBsZXRlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuXG4gICAgY29uc3QgeyBpdGVtcywgdG90YWxDb3VudCB9ID0gZGF0YSxcbiAgICAgICAgICB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IGl0ZW1JZHMgPSBbXSxcbiAgICAgIGdyb3VwcyA9IHt9O1xuXG4gICAgaXRlbXMuZm9yRWFjaCgoeyBpdGVtLCB0eXBlT2ZFbnRpdHkgfSkgPT4ge1xuICAgICAgaWYoIWdyb3Vwc1t0eXBlT2ZFbnRpdHkuaWRdKSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGljb24gfSA9IGNvbmZpZ1t0eXBlT2ZFbnRpdHkuY29uZmlnS2V5XTtcbiAgICAgICAgZ3JvdXBzW3R5cGVPZkVudGl0eS5pZF0gPSB7XG4gICAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICAgIGljb24sXG4gICAgICAgICAgY2xhc3NlczogYGNvbG9yLSR7dHlwZU9mRW50aXR5LmNvbmZpZ0tleX1gLFxuICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYoaXRlbUlkcy5pbmRleE9mKGl0ZW0uaWQpID09PSAtMSl7XG4gICAgICAgIGxldCBtZXRhRGF0YVZhbHVlOiBzdHJpbmcgPSAnJztcbiAgICAgICAgaXRlbS5pbmZvLmZvckVhY2goaW5mb0RhdGEgPT4ge1xuICAgICAgICAgIGlmKGluZm9EYXRhLmtleSA9PT0gJ2F1dGhvcicpIG1ldGFEYXRhVmFsdWUgPSBgZGkgJHtpbmZvRGF0YS52YWx1ZX1gO1xuICAgICAgICB9KTtcbiAgICAgICAgZ3JvdXBzW3R5cGVPZkVudGl0eS5pZF0uaXRlbXMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsIFxuICAgICAgICAgIHZhbHVlOiBtZXRhRGF0YVZhbHVlLCBcbiAgICAgICAgICBwYXlsb2FkOiB7IFxuICAgICAgICAgICAgc291cmNlOiAnaXRlbScsXG4gICAgICAgICAgICBpZDogaXRlbS5pZCBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IE9iamVjdC5rZXlzKGdyb3VwcykubWFwKGtleSA9PiAoeyBncm91cDogey4uLmdyb3Vwc1trZXldfSB9KSk7XG4gICAgcmV0dXJuIHsgXG4gICAgICByZXN1bHRzLFxuICAgICAgYWN0aW9uczoge1xuICAgICAgICBzaG93TW9yZToge1xuICAgICAgICAgIHRleHQ6IGBWaXN1YWxpenphIHR1dHRpIGkgJHt0b3RhbENvdW50fSByaXN1bHRhdGlgLFxuICAgICAgICAgIHBheWxvYWQ6IHsgXG4gICAgICAgICAgICBzb3VyY2U6ICdzaG93TW9yZScgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFsbGJhY2s6ICdTcGlhY2VudGksIG5vbiDDqCBzdGF0byB0cm92YXRvIG5lc3N1biByaXN1bHRhdG8uIDxicj4gUmlwcm92YSBjb24gdW5hIG51b3ZhIHJpY2VyY2EuJ1xuICAgIH07XG4gIH1cbn0iXX0=