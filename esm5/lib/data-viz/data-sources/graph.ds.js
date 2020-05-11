/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var DvGraphDS = /** @class */ (function (_super) {
    tslib_1.__extends(DvGraphDS, _super);
    function DvGraphDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @return {?}
     */
    DvGraphDS.prototype.transform = /**
     * @protected
     * @return {?}
     */
    function () {
        return {
            containerId: 'test-Chart',
            libOptions: {
                chart: {
                    height: 550,
                    width: 1500,
                    type: 'area',
                    toolbar: { show: true },
                },
                dataLabels: { enabled: false },
                colors: ['rgba(15,200,255)'],
                fill: {
                    colors: ['#0fc8ff'],
                    gradient: { opacityFrom: 0.5, opacityTo: 0.1 },
                },
                stroke: { curve: 'straight', width: [2, 1] },
                series: [
                    {
                        name: 'Reddish value',
                        data: [['2019-08-01', '770.17'], ['2019-08-02', '645.03'],
                            ['2019-08-03', '709.32'], ['2019-08-04', '708.11'],
                            ['2019-08-05', '706.59'], ['2019-08-06', '607.28'],
                            ['2019-08-07', '494.59'], ['2019-08-08', '636.81'],
                            ['2019-08-09', '709.04'], ['2019-08-10', '717.31'],
                            ['2019-08-11', '805.61'], ['2019-08-12', '758.60'],
                            ['2019-08-13', '612.82'], ['2019-08-14', '608.90'],
                            ['2019-08-15', '734.68'], ['2019-08-16', '838.54'],
                            ['2019-08-17', '692.88']],
                    },
                ],
                grid: {
                    borderColor: '#e7e7e7',
                    strokeDashArray: 3,
                    xaxis: { lines: { show: true } },
                },
                markers: { size: 3, hover: { size: 6 } },
                xaxis: {
                    axisBorder: { show: true, color: '#f4f6fc' },
                    labels: {},
                    type: 'datetime',
                    tickAmount: 6,
                },
                yaxis: [
                    {
                        show: true,
                        showAlways: false,
                        opposite: false,
                        reversed: false,
                        logarithmic: false,
                        forceNiceScale: false,
                        floating: false,
                        labels: {
                            show: true,
                            minWidth: 0,
                            maxWidth: 160,
                            offsetX: 0,
                            offsetY: 0,
                            rotate: 0,
                            padding: 20,
                            style: { colors: [], fontSize: '11px', cssClass: '' },
                        },
                        axisBorder: {
                            show: true, color: '#f4f6fc', offsetX: 0, offsetY: 0,
                        },
                        axisTicks: {
                            show: false, color: '#78909C', width: 6, offsetX: 0, offsetY: 0,
                        },
                        title: {
                            text: 'P Totale °C', rotate: 90, offsetY: 0, offsetX: 0, style: { fontSize: '11px', cssClass: '' },
                        },
                        tooltip: { enabled: false, offsetX: 0 },
                        crosshairs: { show: true, position: 'front', stroke: { color: '#b6b6b6', width: 1, dashArray: 0 } },
                    },
                ],
                legend: { show: true },
                tooltip: {},
                annotations: { yaxis: [], xaxis: [], points: [] },
            },
        };
    };
    return DvGraphDS;
}(DataSource));
export { DvGraphDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2dyYXBoLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQStCLHFDQUFVO0lBQXpDOztJQWtGQSxDQUFDOzs7OztJQWpGVyw2QkFBUzs7OztJQUFuQjtRQUNFLE9BQU87WUFDTCxXQUFXLEVBQUUsWUFBWTtZQUN6QixVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLE1BQU0sRUFBRSxHQUFHO29CQUNYLEtBQUssRUFBRSxJQUFJO29CQUNYLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7aUJBQ3hCO2dCQUNELFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7Z0JBQzlCLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM1QixJQUFJLEVBQUU7b0JBQ0osTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNuQixRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUU7aUJBQy9DO2dCQUNELE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUM1QyxNQUFNLEVBQUU7b0JBQ047d0JBQ0UsSUFBSSxFQUFFLGVBQWU7d0JBQ3JCLElBQUksRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQzs0QkFDdkQsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDOzRCQUNsRCxD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Q0Y7Z0JBQ0QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtnQkFDdEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7YUFDbEQ7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWxGRCxDQUErQixVQUFVLEdBa0Z4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEdkdyYXBoRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVySWQ6ICd0ZXN0LUNoYXJ0JyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICBoZWlnaHQ6IDU1MCxcbiAgICAgICAgICB3aWR0aDogMTUwMCxcbiAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgdG9vbGJhcjogeyBzaG93OiB0cnVlIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFMYWJlbHM6IHsgZW5hYmxlZDogZmFsc2UgfSxcbiAgICAgICAgY29sb3JzOiBbJ3JnYmEoMTUsMjAwLDI1NSknXSxcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgIGNvbG9yczogWycjMGZjOGZmJ10sXG4gICAgICAgICAgZ3JhZGllbnQ6IHsgb3BhY2l0eUZyb206IDAuNSwgb3BhY2l0eVRvOiAwLjEgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3Ryb2tlOiB7IGN1cnZlOiAnc3RyYWlnaHQnLCB3aWR0aDogWzIsIDFdIH0sXG4gICAgICAgIHNlcmllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdSZWRkaXNoIHZhbHVlJyxcbiAgICAgICAgICAgIGRhdGE6IFtbJzIwMTktMDgtMDEnLCAnNzcwLjE3J10sIFsnMjAxOS0wOC0wMicsICc2NDUuMDMnXSxcbiAgICAgICAgICAgICAgWycyMDE5LTA4LTAzJywgJzcwOS4zMiddLCBbJzIwMTktMDgtMDQnLCAnNzA4LjExJ10sXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0wNScsICc3MDYuNTknXSwgWycyMDE5LTA4LTA2JywgJzYwNy4yOCddLFxuICAgICAgICAgICAgICBbJzIwMTktMDgtMDcnLCAnNDk0LjU5J10sIFsnMjAxOS0wOC0wOCcsICc2MzYuODEnXSxcbiAgICAgICAgICAgICAgWycyMDE5LTA4LTA5JywgJzcwOS4wNCddLCBbJzIwMTktMDgtMTAnLCAnNzE3LjMxJ10sXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0xMScsICc4MDUuNjEnXSwgWycyMDE5LTA4LTEyJywgJzc1OC42MCddLFxuICAgICAgICAgICAgICBbJzIwMTktMDgtMTMnLCAnNjEyLjgyJ10sIFsnMjAxOS0wOC0xNCcsICc2MDguOTAnXSxcbiAgICAgICAgICAgICAgWycyMDE5LTA4LTE1JywgJzczNC42OCddLCBbJzIwMTktMDgtMTYnLCAnODM4LjU0J10sXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0xNycsICc2OTIuODgnXV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2U3ZTdlNycsXG4gICAgICAgICAgc3Ryb2tlRGFzaEFycmF5OiAzLFxuICAgICAgICAgIHhheGlzOiB7IGxpbmVzOiB7IHNob3c6IHRydWUgfSB9LFxuICAgICAgICB9LFxuICAgICAgICBtYXJrZXJzOiB7IHNpemU6IDMsIGhvdmVyOiB7IHNpemU6IDYgfSB9LFxuICAgICAgICB4YXhpczoge1xuICAgICAgICAgIGF4aXNCb3JkZXI6IHsgc2hvdzogdHJ1ZSwgY29sb3I6ICcjZjRmNmZjJyB9LFxuICAgICAgICAgIGxhYmVsczoge30sXG4gICAgICAgICAgdHlwZTogJ2RhdGV0aW1lJyxcbiAgICAgICAgICB0aWNrQW1vdW50OiA2LFxuICAgICAgICB9LFxuICAgICAgICB5YXhpczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICBzaG93QWx3YXlzOiBmYWxzZSxcbiAgICAgICAgICAgIG9wcG9zaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHJldmVyc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxvZ2FyaXRobWljOiBmYWxzZSxcbiAgICAgICAgICAgIGZvcmNlTmljZVNjYWxlOiBmYWxzZSxcbiAgICAgICAgICAgIGZsb2F0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBtaW5XaWR0aDogMCxcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IDE2MCxcbiAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcbiAgICAgICAgICAgICAgcm90YXRlOiAwLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMCxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgY29sb3JzOiBbXSwgZm9udFNpemU6ICcxMXB4JywgY3NzQ2xhc3M6ICcnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLCBjb2xvcjogJyNmNGY2ZmMnLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF4aXNUaWNrczoge1xuICAgICAgICAgICAgICBzaG93OiBmYWxzZSwgY29sb3I6ICcjNzg5MDlDJywgd2lkdGg6IDYsIG9mZnNldFg6IDAsIG9mZnNldFk6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgdGV4dDogJ1AgVG90YWxlIMKwQycsIHJvdGF0ZTogOTAsIG9mZnNldFk6IDAsIG9mZnNldFg6IDAsIHN0eWxlOiB7IGZvbnRTaXplOiAnMTFweCcsIGNzc0NsYXNzOiAnJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHsgZW5hYmxlZDogZmFsc2UsIG9mZnNldFg6IDAgfSxcbiAgICAgICAgICAgIGNyb3NzaGFpcnM6IHsgc2hvdzogdHJ1ZSwgcG9zaXRpb246ICdmcm9udCcsIHN0cm9rZTogeyBjb2xvcjogJyNiNmI2YjYnLCB3aWR0aDogMSwgZGFzaEFycmF5OiAwIH0gfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBsZWdlbmQ6IHsgc2hvdzogdHJ1ZSB9LFxuICAgICAgICB0b29sdGlwOiB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHsgeWF4aXM6IFtdLCB4YXhpczogW10sIHBvaW50czogW10gfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl19