/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/chart-tippy.ds.ts
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
                text: "\u00C8 collegato a " + count + " oggetti culturali",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUFvQywwQ0FBVTtJQUE5Qzs7SUFzQkEsQ0FBQzs7Ozs7O0lBckJXLGtDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztRQUVkLElBQUEsc0JBQU8sRUFBRSx3QkFBUTtRQUNuQixJQUFBLGlCQUF1QztRQUM3QyxxQkFBcUI7VUFEYixzQkFBUSxFQUFFLDBCQUEyQjs7O1lBRXZDLFNBQVMsR0FBUyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQztZQUMzQixJQUFBLGVBQUssRUFBRSxpQkFBTTtZQUNiLElBQUEsY0FBRSxFQUFFLG9CQUFLLEVBQUUsa0NBQVk7WUFDL0IsT0FBTztnQkFDTCxFQUFFLElBQUE7Z0JBQ0YsVUFBVSxZQUFBO2dCQUNWLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSx3QkFBaUIsS0FBSyx1QkFBb0I7Z0JBQ2hELFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxLQUFHLFFBQVEsR0FBRyxFQUFFLFNBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUc7aUJBQ25EO2FBQ0YsQ0FBQTtRQUNILENBQUMsRUFBQztRQUNGLE9BQU8sU0FBUyxDQUFBO0lBQ2xCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF0QkQsQ0FBb0MsVUFBVSxHQXNCN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdDaGFydFRpcHB5RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgLy8gPT09PT09IERBVEEgPT09PT09XG4gICAgY29uc3QgeyBidWJibGVzLCBzZWxlY3RlZCB9ID0gZGF0YVxuICAgIGNvbnN0IHsgYmFzZVBhdGgsIHNlbGVjdGFibGUgfSA9IHRoaXMub3B0aW9uc1xuICAgIC8vID09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IHRlbXBsYXRlczphbnlbXSA9IGJ1YmJsZXMubWFwKGIgPT4ge1xuICAgICAgY29uc3QgeyBjb3VudCwgZW50aXR5IH0gPSBiXG4gICAgICBjb25zdCB7IGlkLCBsYWJlbCwgdHlwZU9mRW50aXR5IH0gPSBlbnRpdHlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBzZWxlY3RhYmxlLFxuICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgIHRleHQ6IGDDiCBjb2xsZWdhdG8gYSAke2NvdW50fSBvZ2dldHRpIGN1bHR1cmFsaWAsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IHNlbGVjdGVkLmluY2x1ZGVzKGlkKSxcbiAgICAgICAgYW5jaG9yRGF0YToge1xuICAgICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGVzXG4gIH1cbn0iXX0=