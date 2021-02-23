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
                text: "\u00C8 collegato a " + count + " risultati",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBb0Msa0NBQVU7SUFBOUM7O0lBNEJBLENBQUM7SUEzQlcsa0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixxQkFBcUI7UUFDYixJQUFBLHNCQUFPLEVBQUUsd0JBQVEsQ0FBVTtRQUM3QixJQUFBLGlCQUF1QyxFQUFyQyxzQkFBUSxFQUFFLDBCQUEyQixDQUFDO1FBQzlDLHFCQUFxQjtRQUNyQixJQUFNLFNBQVMsR0FBVSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztZQUM3QixJQUFBLGVBQUssRUFBRSxpQkFBTSxDQUFPO1lBRTFCLElBQUEsY0FBRSxFQUFFLG9CQUFLLEVBQUUsMEJBQVEsRUFBRSxrQ0FBWSxDQUN4QjtZQUNYLE9BQU87Z0JBQ0wsRUFBRSxJQUFBO2dCQUNGLFVBQVUsWUFBQTtnQkFDVixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsd0JBQWlCLEtBQUssZUFBWTtnQkFDeEMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEtBQUcsUUFBUSxHQUFHLEVBQUUsU0FBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRztpQkFDbkQ7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLEdBQUcsRUFBRSxZQUFZO29CQUNqQixLQUFLLEVBQUUsUUFBUTtpQkFDaEI7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBNUJELENBQW9DLFVBQVUsR0E0QjdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3Q2hhcnRUaXBweURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICAvLyA9PT09PT0gREFUQSA9PT09PT1cclxuICAgIGNvbnN0IHsgYnViYmxlcywgc2VsZWN0ZWQgfSA9IGRhdGE7XHJcbiAgICBjb25zdCB7IGJhc2VQYXRoLCBzZWxlY3RhYmxlIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHRlbXBsYXRlczogYW55W10gPSBidWJibGVzLm1hcCgoYikgPT4ge1xyXG4gICAgICBjb25zdCB7IGNvdW50LCBlbnRpdHkgfSA9IGI7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBpZCwgbGFiZWwsIHJlbGF0aW9uLCByZWxhdGlvbk5hbWVcclxuICAgICAgfSA9IGVudGl0eTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBzZWxlY3RhYmxlLFxyXG4gICAgICAgIHRpdGxlOiBsYWJlbCxcclxuICAgICAgICB0ZXh0OiBgw4ggY29sbGVnYXRvIGEgJHtjb3VudH0gcmlzdWx0YXRpYCxcclxuICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZC5pbmNsdWRlcyhpZCksXHJcbiAgICAgICAgYW5jaG9yRGF0YToge1xyXG4gICAgICAgICAgaHJlZjogYCR7YmFzZVBhdGh9JHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWxhdGlvbjoge1xyXG4gICAgICAgICAga2V5OiByZWxhdGlvbk5hbWUsXHJcbiAgICAgICAgICB2YWx1ZTogcmVsYXRpb24sXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGVtcGxhdGVzO1xyXG4gIH1cclxufVxyXG4iXX0=