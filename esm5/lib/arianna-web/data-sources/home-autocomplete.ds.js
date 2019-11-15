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
        var entities = data.entities, totalCount = data.totalCount;
        var config = this.options.config;
        /** @type {?} */
        var itemIds = [];
        /** @type {?} */
        var groups = {};
        console.log(entities);
        entities.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var entity = _a.entity, count = _a.count;
            if (!groups[entity.typeOfEntity]) {
                var _b = config[entity.typeOfEntity.replace(" ", "-")], label = _b.label, icon = _b.icon;
                groups[entity.typeOfEntity.replace(" ", "-")] = {
                    title: label,
                    icon: icon,
                    classes: "color-" + entity.typeOfEntity.replace(" ", "-"),
                    items: [],
                };
            }
            if (itemIds.indexOf(entity.id) === -1) {
                /** @type {?} */
                var metaDataValue_1 = ' ';
                if (entity.fields) {
                    /** @type {?} */
                    var meta_1 = config[entity.typeOfEntity.replace(" ", "-")]['main-metadata'];
                    entity.fields.forEach((/**
                     * @param {?} infoData
                     * @return {?}
                     */
                    function (infoData) {
                        if (infoData.key === meta_1)
                            metaDataValue_1 = " - " + infoData.value;
                    }));
                }
                groups[entity.typeOfEntity.replace(" ", "-")].items.push({
                    label: entity.label,
                    value: metaDataValue_1,
                    payload: {
                        source: 'item',
                        id: entity.id
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYXV0b2NvbXBsZXRlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQTBDLGdEQUFVO0lBQXBEOztJQXVEQSxDQUFDOzs7Ozs7SUFyRFcsd0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7UUFFZCxJQUFBLHdCQUFRLEVBQUUsNEJBQVU7UUFDcEIsSUFBQSw0QkFBTTs7WUFFVixPQUFPLEdBQUcsRUFBRTs7WUFDZCxNQUFNLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsUUFBUSxDQUFDLE9BQU87Ozs7UUFDZCxVQUFDLEVBQWlCO2dCQUFmLGtCQUFNLEVBQUUsZ0JBQUs7WUFDaEIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3pCLElBQUEsa0RBQStELEVBQTdELGdCQUFLLEVBQUUsY0FBc0Q7Z0JBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRztvQkFDOUMsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxNQUFBO29CQUNKLE9BQU8sRUFBRSxXQUFTLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUc7b0JBQ3pELEtBQUssRUFBRSxFQUFFO2lCQUNWLENBQUM7YUFDSDtZQUVELElBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7O29CQUMvQixlQUFhLEdBQVcsR0FBRztnQkFDL0IsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFDOzt3QkFDVixNQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztvQkFDM0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUEsUUFBUTt3QkFDNUIsSUFBSSxRQUFRLENBQUMsR0FBRyxLQUFLLE1BQUk7NEJBQUUsZUFBYSxHQUFHLFFBQU0sUUFBUSxDQUFDLEtBQU8sQ0FBQztvQkFDcEUsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ3ZELEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztvQkFDbkIsS0FBSyxFQUFFLGVBQWE7b0JBQ3BCLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsTUFBTTt3QkFDZCxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7cUJBQ2Q7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQzs7WUFFRyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEVBQUUsS0FBSyx1QkFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQTdCLENBQTZCLEVBQUM7UUFDN0UsT0FBTztZQUNMLE9BQU8sU0FBQTtZQUNQLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLHdCQUFzQixVQUFVLGVBQVk7b0JBQ2xELE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUUsVUFBVTtxQkFDbkI7aUJBQ0Y7YUFDRjtZQUNELFFBQVEsRUFBRSxzRkFBc0Y7U0FDakcsQ0FBQztJQUNKLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUF2REQsQ0FBMEMsVUFBVSxHQXVEbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQURWQU5DRURfQVVUT0NPTVBMRVRFX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVBdXRvY29tcGxldGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG5cbiAgICBjb25zdCB7IGVudGl0aWVzLCB0b3RhbENvdW50IH0gPSBkYXRhLFxuICAgICAgICAgIHsgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgaXRlbUlkcyA9IFtdLFxuICAgICAgZ3JvdXBzID0ge307XG4gICAgY29uc29sZS5sb2coZW50aXRpZXMpO1xuICAgIGVudGl0aWVzLmZvckVhY2goXG4gICAgICAoeyBlbnRpdHksIGNvdW50IH0pID0+IHtcbiAgICAgIGlmKCFncm91cHNbZW50aXR5LnR5cGVPZkVudGl0eV0pIHtcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgaWNvbiB9ID0gY29uZmlnW2VudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXTtcbiAgICAgICAgZ3JvdXBzW2VudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZShcIiBcIiwgXCItXCIpXSA9IHtcbiAgICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgICAgaWNvbixcbiAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtlbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKX1gLFxuICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYoaXRlbUlkcy5pbmRleE9mKGVudGl0eS5pZCkgPT09IC0xKXtcbiAgICAgICAgbGV0IG1ldGFEYXRhVmFsdWU6IHN0cmluZyA9ICcgJztcbiAgICAgICAgaWYgKGVudGl0eS5maWVsZHMpe1xuICAgICAgICAgIGNvbnN0IG1ldGEgPSBjb25maWdbZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKFwiIFwiLCBcIi1cIildWydtYWluLW1ldGFkYXRhJ107XG4gICAgICAgICAgZW50aXR5LmZpZWxkcy5mb3JFYWNoKGluZm9EYXRhID0+IHtcbiAgICAgICAgICAgIGlmKCBpbmZvRGF0YS5rZXkgPT09IG1ldGEpIG1ldGFEYXRhVmFsdWUgPSBgIC0gJHtpbmZvRGF0YS52YWx1ZX1gO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdyb3Vwc1tlbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoXCIgXCIsIFwiLVwiKV0uaXRlbXMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGVudGl0eS5sYWJlbCxcbiAgICAgICAgICB2YWx1ZTogbWV0YURhdGFWYWx1ZSxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzb3VyY2U6ICdpdGVtJyxcbiAgICAgICAgICAgIGlkOiBlbnRpdHkuaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IE9iamVjdC5rZXlzKGdyb3VwcykubWFwKGtleSA9PiAoeyBncm91cDogey4uLmdyb3Vwc1trZXldfSB9KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdHMsXG4gICAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNob3dNb3JlOiB7XG4gICAgICAgICAgdGV4dDogYFZpc3VhbGl6emEgdHV0dGkgaSAke3RvdGFsQ291bnR9IHJpc3VsdGF0aWAsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgc291cmNlOiAnc2hvd01vcmUnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFsbGJhY2s6ICdTcGlhY2VudGksIG5vbiDDqCBzdGF0byB0cm92YXRvIG5lc3N1biByaXN1bHRhdG8uIDxicj4gUmlwcm92YSBjb24gdW5hIG51b3ZhIHJpY2VyY2EuJ1xuICAgIH07XG4gIH1cbn0iXX0=