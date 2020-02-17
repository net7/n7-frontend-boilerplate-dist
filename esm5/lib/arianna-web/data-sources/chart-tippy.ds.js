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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQztJQUFvQywwQ0FBVTtJQUE5Qzs7SUFzQkEsQ0FBQzs7Ozs7O0lBckJXLGtDQUFTOzs7OztJQUFuQixVQUFvQixJQUFJOztRQUVkLElBQUEsc0JBQU8sRUFBRSx3QkFBUTtRQUNuQixJQUFBLGlCQUF1QztRQUM3QyxxQkFBcUI7VUFEYixzQkFBUSxFQUFFLDBCQUEyQjs7O1lBRXZDLFNBQVMsR0FBUyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQztZQUMzQixJQUFBLGVBQUssRUFBRSxpQkFBTTtZQUNiLElBQUEsY0FBRSxFQUFFLG9CQUFLLEVBQUUsa0NBQVk7WUFDL0IsT0FBTztnQkFDTCxFQUFFLElBQUE7Z0JBQ0YsVUFBVSxZQUFBO2dCQUNWLEtBQUssRUFBRSxLQUFLO2dCQUNaLElBQUksRUFBRSx3QkFBaUIsS0FBSyxpQkFBUztnQkFDckMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEtBQUcsUUFBUSxHQUFHLEVBQUUsU0FBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRztpQkFDbkQ7YUFDRixDQUFBO1FBQ0gsQ0FBQyxFQUFDO1FBQ0YsT0FBTyxTQUFTLENBQUE7SUFDbEIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUFvQyxVQUFVLEdBc0I3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvLyA9PT09PT0gREFUQSA9PT09PT1cbiAgICBjb25zdCB7IGJ1YmJsZXMsIHNlbGVjdGVkIH0gPSBkYXRhXG4gICAgY29uc3QgeyBiYXNlUGF0aCwgc2VsZWN0YWJsZSB9ID0gdGhpcy5vcHRpb25zXG4gICAgLy8gPT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgdGVtcGxhdGVzOmFueVtdID0gYnViYmxlcy5tYXAoYiA9PiB7XG4gICAgICBjb25zdCB7IGNvdW50LCBlbnRpdHkgfSA9IGJcbiAgICAgIGNvbnN0IHsgaWQsIGxhYmVsLCB0eXBlT2ZFbnRpdHkgfSA9IGVudGl0eVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHNlbGVjdGFibGUsXG4gICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgdGV4dDogYMOIIGNvbGxlZ2F0byBhICR7Y291bnR9IGVudGl0w6BgLFxuICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZC5pbmNsdWRlcyhpZCksXG4gICAgICAgIGFuY2hvckRhdGE6IHtcbiAgICAgICAgICBocmVmOiBgJHtiYXNlUGF0aH0ke2lkfS8ke2hlbHBlcnMuc2x1Z2lmeShsYWJlbCl9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlc1xuICB9XG59Il19