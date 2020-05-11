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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sT0FBTyxNQUFNLHNCQUFzQixDQUFDO0FBRTNDO0lBQW9DLDBDQUFVO0lBQTlDOztJQTRCQSxDQUFDOzs7Ozs7SUEzQlcsa0NBQVM7Ozs7O0lBQW5CLFVBQW9CLElBQUk7O1FBRWQsSUFBQSxzQkFBTyxFQUFFLHdCQUFRO1FBQ25CLElBQUEsaUJBQXVDLEVBQXJDLHNCQUFRLEVBQUUsMEJBQTJCOzs7WUFFdkMsU0FBUyxHQUFVLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxDQUFDO1lBQzdCLElBQUEsZUFBSyxFQUFFLGlCQUFNO1lBRW5CLElBQUEsY0FBRSxFQUFFLG9CQUFLLEVBQUUsMEJBQVEsRUFBRSxrQ0FBWTtZQUVuQyxPQUFPO2dCQUNMLEVBQUUsSUFBQTtnQkFDRixVQUFVLFlBQUE7Z0JBQ1YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLHdCQUFpQixLQUFLLHVCQUFvQjtnQkFDaEQsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEtBQUcsUUFBUSxHQUFHLEVBQUUsU0FBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRztpQkFDbkQ7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLEdBQUcsRUFBRSxZQUFZO29CQUNqQixLQUFLLEVBQUUsUUFBUTtpQkFDaEI7YUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDO1FBQ0YsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFvQyxVQUFVLEdBNEI3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICAvLyA9PT09PT0gREFUQSA9PT09PT1cbiAgICBjb25zdCB7IGJ1YmJsZXMsIHNlbGVjdGVkIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgYmFzZVBhdGgsIHNlbGVjdGFibGUgfSA9IHRoaXMub3B0aW9ucztcbiAgICAvLyA9PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCB0ZW1wbGF0ZXM6IGFueVtdID0gYnViYmxlcy5tYXAoKGIpID0+IHtcbiAgICAgIGNvbnN0IHsgY291bnQsIGVudGl0eSB9ID0gYjtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaWQsIGxhYmVsLCByZWxhdGlvbiwgcmVsYXRpb25OYW1lXG4gICAgICB9ID0gZW50aXR5O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHNlbGVjdGFibGUsXG4gICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgdGV4dDogYMOIIGNvbGxlZ2F0byBhICR7Y291bnR9IG9nZ2V0dGkgY3VsdHVyYWxpYCxcbiAgICAgICAgaXNTZWxlY3RlZDogc2VsZWN0ZWQuaW5jbHVkZXMoaWQpLFxuICAgICAgICBhbmNob3JEYXRhOiB7XG4gICAgICAgICAgaHJlZjogYCR7YmFzZVBhdGh9JHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAga2V5OiByZWxhdGlvbk5hbWUsXG4gICAgICAgICAgdmFsdWU6IHJlbGF0aW9uLFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZXM7XG4gIH1cbn1cbiJdfQ==