import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import { apexHandler } from '../../models/apex/apex-handler';
var ApexChartItemDS = /** @class */ (function (_super) {
    __extends(ApexChartItemDS, _super);
    function ApexChartItemDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApexChartItemDS.prototype.transform = function (data) {
        return data;
    };
    ApexChartItemDS.prototype.update = function (newData) {
        var _this = this;
        var formattedData = apexHandler.transform({
            data: newData,
            id: this.id,
            type: this.type,
            options: this.options,
        });
        if (this.instance) {
            // lib api update
            this.instance.updateOptions(formattedData.libOptions);
        }
        else {
            formattedData.setChart = function (chart) {
                _this.instance = chart;
            };
            this.run(formattedData);
        }
    };
    return ApexChartItemDS;
}(DataSource));
export { ApexChartItemDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleC1jaGFydC1pdGVtLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9jYXJkLWl0ZW1zL2FwZXgtY2hhcnQtaXRlbS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc3RDtJQUFxQyxtQ0FBVTtJQUEvQzs7SUE0QkEsQ0FBQztJQXJCVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFlO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxPQUEwQjtRQUFqQyxpQkFnQkM7UUFmQyxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQzFDLElBQUksRUFBRSxPQUFPO1lBQ2IsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixpQkFBaUI7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxhQUFhLENBQUMsUUFBUSxHQUFHLFVBQUMsS0FBSztnQkFDN0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBcUMsVUFBVSxHQTRCOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGFwZXhIYW5kbGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwZXgvYXBleC1oYW5kbGVyJztcclxuaW1wb3J0IHsgQ2hhcnRSZXNwb25zZURhdGEgfSBmcm9tICcuLi8uLi90eXBlcy9yZXNwb25zZS50eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBleENoYXJ0SXRlbURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdHlwZTogc3RyaW5nO1xyXG5cclxuICBpbnN0YW5jZTogYW55O1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IENoYXJ0RGF0YSk6IENoYXJ0RGF0YSB7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShuZXdEYXRhOiBDaGFydFJlc3BvbnNlRGF0YSkge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IGFwZXhIYW5kbGVyLnRyYW5zZm9ybSh7XHJcbiAgICAgIGRhdGE6IG5ld0RhdGEsXHJcbiAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgLy8gbGliIGFwaSB1cGRhdGVcclxuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGVPcHRpb25zKGZvcm1hdHRlZERhdGEubGliT3B0aW9ucyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3JtYXR0ZWREYXRhLnNldENoYXJ0ID0gKGNoYXJ0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGNoYXJ0O1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnJ1bihmb3JtYXR0ZWREYXRhKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19