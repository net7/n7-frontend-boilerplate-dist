/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
var AwChartTippyDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwChartTippyDS, _super);
    function AwChartTippyDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwChartTippyDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // ====== DATA ======
        var bubbles = data.bubbles, selected = data.selected;
        var _a = this.options
        // ==================
        , basePath = _a.basePath, selectable = _a.selectable;
        // ==================
        /** @type {?} */
        var templates = bubbles.map((/**
         * @param {?} b
         * @return {?}
         */
        function (b) {
            var count = b.count, entity = b.entity;
            var id = entity.id, label = entity.label, typeOfEntity = entity.typeOfEntity;
            return {
                id: id,
                selectable: selectable,
                title: label,
                text: "\u00C8 collegato a " + count + " entit\u00E0",
                isSelected: selected.includes(id),
                anchorData: {
                    href: "" + basePath + id + "/" + helpers.slugify(label)
                }
            };
        }));
        return templates;
    };
    return AwChartTippyDS;
}(DataSource));
export { AwChartTippyDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQW9DLDBDQUFVO0lBQTlDOztJQXNCQSxDQUFDOzs7Ozs7SUFyQlcsa0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7O1FBRWQsSUFBQSxzQkFBTyxFQUFFLHdCQUFRO1FBQ25CLElBQUEsaUJBQXVDO1FBQzdDLHFCQUFxQjtVQURiLHNCQUFRLEVBQUUsMEJBQTJCOzs7WUFFdkMsU0FBUyxHQUFTLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzNCLElBQUEsZUFBSyxFQUFFLGlCQUFNO1lBQ2IsSUFBQSxjQUFFLEVBQUUsb0JBQUssRUFBRSxrQ0FBWTtZQUMvQixPQUFPO2dCQUNMLEVBQUUsSUFBQTtnQkFDRixVQUFVLFlBQUE7Z0JBQ1YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLHdCQUFpQixLQUFLLGlCQUFTO2dCQUNyQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsS0FBRyxRQUFRLEdBQUcsRUFBRSxTQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFHO2lCQUNuRDthQUNGLENBQUE7UUFDSCxDQUFDLEVBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQTtJQUNsQixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBdEJELENBQW9DLFVBQVUsR0FzQjdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3Q2hhcnRUaXBweURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIC8vID09PT09PSBEQVRBID09PT09PVxuICAgIGNvbnN0IHsgYnViYmxlcywgc2VsZWN0ZWQgfSA9IGRhdGFcbiAgICBjb25zdCB7IGJhc2VQYXRoLCBzZWxlY3RhYmxlIH0gPSB0aGlzLm9wdGlvbnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCB0ZW1wbGF0ZXM6YW55W10gPSBidWJibGVzLm1hcChiID0+IHtcbiAgICAgIGNvbnN0IHsgY291bnQsIGVudGl0eSB9ID0gYlxuICAgICAgY29uc3QgeyBpZCwgbGFiZWwsIHR5cGVPZkVudGl0eSB9ID0gZW50aXR5XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgc2VsZWN0YWJsZSxcbiAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICB0ZXh0OiBgw4ggY29sbGVnYXRvIGEgJHtjb3VudH0gZW50aXTDoGAsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IHNlbGVjdGVkLmluY2x1ZGVzKGlkKSxcbiAgICAgICAgYW5jaG9yRGF0YToge1xuICAgICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGVzXG4gIH1cbn0iXX0=