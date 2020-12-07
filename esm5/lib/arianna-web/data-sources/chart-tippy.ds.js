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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBb0Msa0NBQVU7SUFBOUM7O0lBNEJBLENBQUM7SUEzQlcsa0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixxQkFBcUI7UUFDYixJQUFBLHNCQUFPLEVBQUUsd0JBQVEsQ0FBVTtRQUM3QixJQUFBLGlCQUF1QyxFQUFyQyxzQkFBUSxFQUFFLDBCQUEyQixDQUFDO1FBQzlDLHFCQUFxQjtRQUNyQixJQUFNLFNBQVMsR0FBVSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztZQUM3QixJQUFBLGVBQUssRUFBRSxpQkFBTSxDQUFPO1lBRTFCLElBQUEsY0FBRSxFQUFFLG9CQUFLLEVBQUUsMEJBQVEsRUFBRSxrQ0FBWSxDQUN4QjtZQUNYLE9BQU87Z0JBQ0wsRUFBRSxJQUFBO2dCQUNGLFVBQVUsWUFBQTtnQkFDVixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsd0JBQWlCLEtBQUssdUJBQW9CO2dCQUNoRCxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFVBQVUsRUFBRTtvQkFDVixJQUFJLEVBQUUsS0FBRyxRQUFRLEdBQUcsRUFBRSxTQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFHO2lCQUNuRDtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLFlBQVk7b0JBQ2pCLEtBQUssRUFBRSxRQUFRO2lCQUNoQjthQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBb0MsVUFBVSxHQTRCN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdDaGFydFRpcHB5RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgLy8gPT09PT09IERBVEEgPT09PT09XG4gICAgY29uc3QgeyBidWJibGVzLCBzZWxlY3RlZCB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGJhc2VQYXRoLCBzZWxlY3RhYmxlIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgdGVtcGxhdGVzOiBhbnlbXSA9IGJ1YmJsZXMubWFwKChiKSA9PiB7XG4gICAgICBjb25zdCB7IGNvdW50LCBlbnRpdHkgfSA9IGI7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlkLCBsYWJlbCwgcmVsYXRpb24sIHJlbGF0aW9uTmFtZVxuICAgICAgfSA9IGVudGl0eTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBzZWxlY3RhYmxlLFxuICAgICAgICB0aXRsZTogbGFiZWwsXG4gICAgICAgIHRleHQ6IGDDiCBjb2xsZWdhdG8gYSAke2NvdW50fSBvZ2dldHRpIGN1bHR1cmFsaWAsXG4gICAgICAgIGlzU2VsZWN0ZWQ6IHNlbGVjdGVkLmluY2x1ZGVzKGlkKSxcbiAgICAgICAgYW5jaG9yRGF0YToge1xuICAgICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7aWR9LyR7aGVscGVycy5zbHVnaWZ5KGxhYmVsKX1gLFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGlvbjoge1xuICAgICAgICAgIGtleTogcmVsYXRpb25OYW1lLFxuICAgICAgICAgIHZhbHVlOiByZWxhdGlvbixcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGVzO1xuICB9XG59XG4iXX0=