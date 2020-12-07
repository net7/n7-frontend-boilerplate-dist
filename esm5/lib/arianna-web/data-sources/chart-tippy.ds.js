import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import helpers from '../../common/helpers';
var AwChartTippyDS = /** @class */ (function (_super) {
    __extends(AwChartTippyDS, _super);
    function AwChartTippyDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwChartTippyDS.prototype.transform = function (data) {
        // ====== DATA ======
        var bubbles = data.bubbles, selected = data.selected;
        var _a = this.options, basePath = _a.basePath, selectable = _a.selectable;
        // ==================
        var templates = bubbles.map(function (b) {
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
        });
        return templates;
    };
    return AwChartTippyDS;
}(DataSource));
export { AwChartTippyDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBb0Msa0NBQVU7SUFBOUM7O0lBNEJBLENBQUM7SUEzQlcsa0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixxQkFBcUI7UUFDYixJQUFBLHNCQUFPLEVBQUUsd0JBQVEsQ0FBVTtRQUM3QixJQUFBLGlCQUF1QyxFQUFyQyxzQkFBUSxFQUFFLDBCQUEyQixDQUFDO1FBQzlDLHFCQUFxQjtRQUNyQixJQUFNLFNBQVMsR0FBVSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztZQUM3QixJQUFBLGVBQUssRUFBRSxpQkFBTSxDQUFPO1lBRTFCLElBQUEsY0FBRSxFQUFFLG9CQUFLLEVBQUUsMEJBQVEsRUFBRSxrQ0FBWSxDQUN4QjtZQUNYLE9BQU87Z0JBQ0wsRUFBRSxJQUFBO2dCQUNGLFVBQVUsWUFBQTtnQkFDVixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsd0JBQWlCLEtBQUssdUJBQW9CO2dCQUNoRCxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsS0FBRyxRQUFRLEdBQUcsRUFBRSxTQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFHO2lCQUNuRDtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLFlBQVk7b0JBQ2pCLEtBQUssRUFBRSxRQUFRO2lCQUNoQjthQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBb0MsVUFBVSxHQTRCN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdDaGFydFRpcHB5RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIC8vID09PT09PSBEQVRBID09PT09PVxyXG4gICAgY29uc3QgeyBidWJibGVzLCBzZWxlY3RlZCB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHsgYmFzZVBhdGgsIHNlbGVjdGFibGUgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIC8vID09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgdGVtcGxhdGVzOiBhbnlbXSA9IGJ1YmJsZXMubWFwKChiKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgY291bnQsIGVudGl0eSB9ID0gYjtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGlkLCBsYWJlbCwgcmVsYXRpb24sIHJlbGF0aW9uTmFtZVxyXG4gICAgICB9ID0gZW50aXR5O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHNlbGVjdGFibGUsXHJcbiAgICAgICAgdGl0bGU6IGxhYmVsLFxyXG4gICAgICAgIHRleHQ6IGDDiCBjb2xsZWdhdG8gYSAke2NvdW50fSBvZ2dldHRpIGN1bHR1cmFsaWAsXHJcbiAgICAgICAgaXNTZWxlY3RlZDogc2VsZWN0ZWQuaW5jbHVkZXMoaWQpLFxyXG4gICAgICAgIGFuY2hvckRhdGE6IHtcclxuICAgICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVsYXRpb246IHtcclxuICAgICAgICAgIGtleTogcmVsYXRpb25OYW1lLFxyXG4gICAgICAgICAgdmFsdWU6IHJlbGF0aW9uLFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlcztcclxuICB9XHJcbn1cclxuIl19