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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2NoYXJ0LXRpcHB5LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBb0Msa0NBQVU7SUFBOUM7O0lBNEJBLENBQUM7SUEzQlcsa0NBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixxQkFBcUI7UUFDYixJQUFBLHNCQUFPLEVBQUUsd0JBQVEsQ0FBVTtRQUM3QixJQUFBLGlCQUF1QyxFQUFyQyxzQkFBUSxFQUFFLDBCQUEyQixDQUFDO1FBQzlDLHFCQUFxQjtRQUNyQixJQUFNLFNBQVMsR0FBVSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztZQUM3QixJQUFBLGVBQUssRUFBRSxpQkFBTSxDQUFPO1lBRTFCLElBQUEsY0FBRSxFQUFFLG9CQUFLLEVBQUUsMEJBQVEsRUFBRSxrQ0FBWSxDQUN4QjtZQUNYLE9BQU87Z0JBQ0wsRUFBRSxJQUFBO2dCQUNGLFVBQVUsWUFBQTtnQkFDVixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsd0JBQWlCLEtBQUssZUFBWTtnQkFDeEMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxVQUFVLEVBQUU7b0JBQ1YsSUFBSSxFQUFFLEtBQUcsUUFBUSxHQUFHLEVBQUUsU0FBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRztpQkFDbkQ7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLEdBQUcsRUFBRSxZQUFZO29CQUNqQixLQUFLLEVBQUUsUUFBUTtpQkFDaEI7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBNUJELENBQW9DLFVBQVUsR0E0QjdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3Q2hhcnRUaXBweURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIC8vID09PT09PSBEQVRBID09PT09PVxuICAgIGNvbnN0IHsgYnViYmxlcywgc2VsZWN0ZWQgfSA9IGRhdGE7XG4gICAgY29uc3QgeyBiYXNlUGF0aCwgc2VsZWN0YWJsZSB9ID0gdGhpcy5vcHRpb25zO1xuICAgIC8vID09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IHRlbXBsYXRlczogYW55W10gPSBidWJibGVzLm1hcCgoYikgPT4ge1xuICAgICAgY29uc3QgeyBjb3VudCwgZW50aXR5IH0gPSBiO1xuICAgICAgY29uc3Qge1xuICAgICAgICBpZCwgbGFiZWwsIHJlbGF0aW9uLCByZWxhdGlvbk5hbWVcbiAgICAgIH0gPSBlbnRpdHk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgc2VsZWN0YWJsZSxcbiAgICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgICB0ZXh0OiBgw4ggY29sbGVnYXRvIGEgJHtjb3VudH0gcmlzdWx0YXRpYCxcbiAgICAgICAgaXNTZWxlY3RlZDogc2VsZWN0ZWQuaW5jbHVkZXMoaWQpLFxuICAgICAgICBhbmNob3JEYXRhOiB7XG4gICAgICAgICAgaHJlZjogYCR7YmFzZVBhdGh9JHtpZH0vJHtoZWxwZXJzLnNsdWdpZnkobGFiZWwpfWAsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgICAga2V5OiByZWxhdGlvbk5hbWUsXG4gICAgICAgICAgdmFsdWU6IHJlbGF0aW9uLFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZXM7XG4gIH1cbn1cbiJdfQ==