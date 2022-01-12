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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleC1jaGFydC1pdGVtLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L2RhdGEtc291cmNlcy9jYXJkLWl0ZW1zL2FwZXgtY2hhcnQtaXRlbS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc3RDtJQUFxQyxtQ0FBVTtJQUEvQzs7SUE0QkEsQ0FBQztJQXJCVyxtQ0FBUyxHQUFuQixVQUFvQixJQUFlO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxPQUEwQjtRQUFqQyxpQkFnQkM7UUFmQyxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBQzFDLElBQUksRUFBRSxPQUFPO1lBQ2IsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixpQkFBaUI7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxhQUFhLENBQUMsUUFBUSxHQUFHLFVBQUMsS0FBSztnQkFDN0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBcUMsVUFBVSxHQTRCOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgYXBleEhhbmRsZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBleC9hcGV4LWhhbmRsZXInO1xuaW1wb3J0IHsgQ2hhcnRSZXNwb25zZURhdGEgfSBmcm9tICcuLi8uLi90eXBlcy9yZXNwb25zZS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBBcGV4Q2hhcnRJdGVtRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB0eXBlOiBzdHJpbmc7XG5cbiAgaW5zdGFuY2U6IGFueTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IENoYXJ0RGF0YSk6IENoYXJ0RGF0YSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB1cGRhdGUobmV3RGF0YTogQ2hhcnRSZXNwb25zZURhdGEpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gYXBleEhhbmRsZXIudHJhbnNmb3JtKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgLy8gbGliIGFwaSB1cGRhdGVcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlT3B0aW9ucyhmb3JtYXR0ZWREYXRhLmxpYk9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXR0ZWREYXRhLnNldENoYXJ0ID0gKGNoYXJ0KSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBjaGFydDtcbiAgICAgIH07XG4gICAgICB0aGlzLnJ1bihmb3JtYXR0ZWREYXRhKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==