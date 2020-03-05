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
            var id = entity.id, label = entity.label;
            return {
                id: id,
                selectable: selectable,
                title: label,
                text: "\u00C8 collegato a " + count + " oggetti culturali",
                isSelected: selected.includes(id),
                anchorData: {
                    href: "" + basePath + id + "/" + helpers.slugify(label),
                },
            };
        }));
        return templates;
    };
    return AwChartTippyDS;
}(DataSource));
export { AwChartTippyDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUFvQywwQ0FBVTtJQUE5Qzs7SUFzQkEsQ0FBQzs7Ozs7O0lBckJXLGtDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztRQUVkLElBQUEsc0JBQU8sRUFBRSx3QkFBUTtRQUNuQixJQUFBLGlCQUF1QyxFQUFyQyxzQkFBUSxFQUFFLDBCQUEyQjs7O1lBRXZDLFNBQVMsR0FBVSxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsQ0FBQztZQUM3QixJQUFBLGVBQUssRUFBRSxpQkFBTTtZQUNiLElBQUEsY0FBRSxFQUFFLG9CQUFLO1lBQ2pCLE9BQU87Z0JBQ0wsRUFBRSxJQUFBO2dCQUNGLFVBQVUsWUFBQTtnQkFDVixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsd0JBQWlCLEtBQUssdUJBQW9CO2dCQUNoRCxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsS0FBRyxRQUFRLEdBQUcsRUFBRSxTQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFHO2lCQUNuRDthQUNGLENBQUM7UUFDSixDQUFDLEVBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBdEJELENBQW9DLFVBQVUsR0FzQjdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3Q2hhcnRUaXBweURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICAvLyA9PT09PT0gREFUQSA9PT09PT1cclxuICAgIGNvbnN0IHsgYnViYmxlcywgc2VsZWN0ZWQgfSA9IGRhdGE7XHJcbiAgICBjb25zdCB7IGJhc2VQYXRoLCBzZWxlY3RhYmxlIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHRlbXBsYXRlczogYW55W10gPSBidWJibGVzLm1hcCgoYikgPT4ge1xyXG4gICAgICBjb25zdCB7IGNvdW50LCBlbnRpdHkgfSA9IGI7XHJcbiAgICAgIGNvbnN0IHsgaWQsIGxhYmVsIH0gPSBlbnRpdHk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgc2VsZWN0YWJsZSxcclxuICAgICAgICB0aXRsZTogbGFiZWwsXHJcbiAgICAgICAgdGV4dDogYMOIIGNvbGxlZ2F0byBhICR7Y291bnR9IG9nZ2V0dGkgY3VsdHVyYWxpYCxcclxuICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZC5pbmNsdWRlcyhpZCksXHJcbiAgICAgICAgYW5jaG9yRGF0YToge1xyXG4gICAgICAgICAgaHJlZjogYCR7YmFzZVBhdGh9JHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlcztcclxuICB9XHJcbn1cclxuIl19