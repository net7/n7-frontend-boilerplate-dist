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
        var _a = this.options, basePath = _a.basePath, selectable = _a.selectable;
        // ==================
        /** @type {?} */
        var templates = bubbles.map((/**
         * @param {?} b
         * @return {?}
         */
        function (b) {
            var count = b.count, entity = b.entity;
            var id = entity.id, label = entity.label, relation = entity.relation, relationName = entity.relationName;
            return {
                id: id,
                selectable: selectable,
                title: label,
                text: "\u00C8 collegato a " + count + " oggetti culturali",
                isSelected: selected.includes(id),
                anchorData: {
                    href: "" + basePath + id + "/" + helpers.slugify(label),
                },
                relation: {
                    key: relationName,
                    value: relation,
                }
            };
        }));
        return templates;
    };
    return AwChartTippyDS;
}(DataSource));
export { AwChartTippyDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUFvQywwQ0FBVTtJQUE5Qzs7SUE0QkEsQ0FBQzs7Ozs7O0lBM0JXLGtDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztRQUVkLElBQUEsc0JBQU8sRUFBRSx3QkFBUTtRQUNuQixJQUFBLGlCQUF1QyxFQUFyQyxzQkFBUSxFQUFFLDBCQUEyQjs7O1lBRXZDLFNBQVMsR0FBVSxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsQ0FBQztZQUM3QixJQUFBLGVBQUssRUFBRSxpQkFBTTtZQUVuQixJQUFBLGNBQUUsRUFBRSxvQkFBSyxFQUFFLDBCQUFRLEVBQUUsa0NBQVk7WUFFbkMsT0FBTztnQkFDTCxFQUFFLElBQUE7Z0JBQ0YsVUFBVSxZQUFBO2dCQUNWLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSx3QkFBaUIsS0FBSyx1QkFBb0I7Z0JBQ2hELFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsVUFBVSxFQUFFO29CQUNWLElBQUksRUFBRSxLQUFHLFFBQVEsR0FBRyxFQUFFLFNBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUc7aUJBQ25EO2dCQUNELFFBQVEsRUFBRTtvQkFDUixHQUFHLEVBQUUsWUFBWTtvQkFDakIsS0FBSyxFQUFFLFFBQVE7aUJBQ2hCO2FBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQztRQUNGLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBb0MsVUFBVSxHQTRCN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdDaGFydFRpcHB5RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgLy8gPT09PT09IERBVEEgPT09PT09XG4gICAgY29uc3QgeyBidWJibGVzLCBzZWxlY3RlZCB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGJhc2VQYXRoLCBzZWxlY3RhYmxlIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgdGVtcGxhdGVzOiBhbnlbXSA9IGJ1YmJsZXMubWFwKChiKSA9PiB7XG4gICAgICBjb25zdCB7IGNvdW50LCBlbnRpdHkgfSA9IGI7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlkLCBsYWJlbCwgcmVsYXRpb24sIHJlbGF0aW9uTmFtZVxuICAgICAgfSA9IGVudGl0eTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBzZWxlY3RhYmxlLFxuICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgIHRleHQ6IGDDiCBjb2xsZWdhdG8gYSAke2NvdW50fSBvZ2dldHRpIGN1bHR1cmFsaWAsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IHNlbGVjdGVkLmluY2x1ZGVzKGlkKSxcbiAgICAgICAgYW5jaG9yRGF0YToge1xuICAgICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgIGtleTogcmVsYXRpb25OYW1lLFxuICAgICAgICAgIHZhbHVlOiByZWxhdGlvbixcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGVzO1xuICB9XG59XG4iXX0=