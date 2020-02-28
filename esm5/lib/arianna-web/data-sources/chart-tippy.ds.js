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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQW9DLDBDQUFVO0lBQTlDOztJQXNCQSxDQUFDOzs7Ozs7SUFyQlcsa0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7O1FBRWQsSUFBQSxzQkFBTyxFQUFFLHdCQUFRO1FBQ25CLElBQUEsaUJBQXVDO1FBQzdDLHFCQUFxQjtVQURiLHNCQUFRLEVBQUUsMEJBQTJCOzs7WUFFdkMsU0FBUyxHQUFTLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzNCLElBQUEsZUFBSyxFQUFFLGlCQUFNO1lBQ2IsSUFBQSxjQUFFLEVBQUUsb0JBQUssRUFBRSxrQ0FBWTtZQUMvQixPQUFPO2dCQUNMLEVBQUUsSUFBQTtnQkFDRixVQUFVLFlBQUE7Z0JBQ1YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLHdCQUFpQixLQUFLLHVCQUFvQjtnQkFDaEQsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEtBQUcsUUFBUSxHQUFHLEVBQUUsU0FBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRztpQkFDbkQ7YUFDRixDQUFBO1FBQ0gsQ0FBQyxFQUFDO1FBQ0YsT0FBTyxTQUFTLENBQUE7SUFDbEIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUFvQyxVQUFVLEdBc0I3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvLyA9PT09PT0gREFUQSA9PT09PT1cbiAgICBjb25zdCB7IGJ1YmJsZXMsIHNlbGVjdGVkIH0gPSBkYXRhXG4gICAgY29uc3QgeyBiYXNlUGF0aCwgc2VsZWN0YWJsZSB9ID0gdGhpcy5vcHRpb25zXG4gICAgLy8gPT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgdGVtcGxhdGVzOmFueVtdID0gYnViYmxlcy5tYXAoYiA9PiB7XG4gICAgICBjb25zdCB7IGNvdW50LCBlbnRpdHkgfSA9IGJcbiAgICAgIGNvbnN0IHsgaWQsIGxhYmVsLCB0eXBlT2ZFbnRpdHkgfSA9IGVudGl0eVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHNlbGVjdGFibGUsXG4gICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgdGV4dDogYMOIIGNvbGxlZ2F0byBhICR7Y291bnR9IG9nZ2V0dGkgY3VsdHVyYWxpYCxcbiAgICAgICAgaXNTZWxlY3RlZDogc2VsZWN0ZWQuaW5jbHVkZXMoaWQpLFxuICAgICAgICBhbmNob3JEYXRhOiB7XG4gICAgICAgICAgaHJlZjogYCR7YmFzZVBhdGh9JHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZXNcbiAgfVxufSJdfQ==