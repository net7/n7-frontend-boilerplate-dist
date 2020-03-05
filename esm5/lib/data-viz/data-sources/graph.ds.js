/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/data-sources/graph.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2dyYXBoLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUErQixxQ0FBVTtJQUF6Qzs7SUFrRkEsQ0FBQzs7Ozs7SUFqRlcsNkJBQVM7Ozs7SUFBbkI7UUFDRSxPQUFPO1lBQ0wsV0FBVyxFQUFFLFlBQVk7WUFDekIsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUUsR0FBRztvQkFDWCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO2lCQUN4QjtnQkFDRCxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2dCQUM5QixNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDNUIsSUFBSSxFQUFFO29CQUNKLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDbkIsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFO2lCQUMvQztnQkFDRCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDNUMsTUFBTSxFQUFFO29CQUNOO3dCQUNFLElBQUksRUFBRSxlQUFlO3dCQUNyQixJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUM7NEJBQ3ZELENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQzs0QkFDbEQs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QUNGO2dCQUNELE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Z0JBQ3RCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO2FBQ2xEO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFsRkQsQ0FBK0IsVUFBVSxHQWtGeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIER2R3JhcGhEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb250YWluZXJJZDogJ3Rlc3QtQ2hhcnQnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgIGhlaWdodDogNTUwLFxyXG4gICAgICAgICAgd2lkdGg6IDE1MDAsXHJcbiAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICB0b29sYmFyOiB7IHNob3c6IHRydWUgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGFMYWJlbHM6IHsgZW5hYmxlZDogZmFsc2UgfSxcclxuICAgICAgICBjb2xvcnM6IFsncmdiYSgxNSwyMDAsMjU1KSddLFxyXG4gICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgIGNvbG9yczogWycjMGZjOGZmJ10sXHJcbiAgICAgICAgICBncmFkaWVudDogeyBvcGFjaXR5RnJvbTogMC41LCBvcGFjaXR5VG86IDAuMSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3Ryb2tlOiB7IGN1cnZlOiAnc3RyYWlnaHQnLCB3aWR0aDogWzIsIDFdIH0sXHJcbiAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdSZWRkaXNoIHZhbHVlJyxcclxuICAgICAgICAgICAgZGF0YTogW1snMjAxOS0wOC0wMScsICc3NzAuMTcnXSwgWycyMDE5LTA4LTAyJywgJzY0NS4wMyddLFxyXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0wMycsICc3MDkuMzInXSwgWycyMDE5LTA4LTA0JywgJzcwOC4xMSddLFxyXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0wNScsICc3MDYuNTknXSwgWycyMDE5LTA4LTA2JywgJzYwNy4yOCddLFxyXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0wNycsICc0OTQuNTknXSwgWycyMDE5LTA4LTA4JywgJzYzNi44MSddLFxyXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0wOScsICc3MDkuMDQnXSwgWycyMDE5LTA4LTEwJywgJzcxNy4zMSddLFxyXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0xMScsICc4MDUuNjEnXSwgWycyMDE5LTA4LTEyJywgJzc1OC42MCddLFxyXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0xMycsICc2MTIuODInXSwgWycyMDE5LTA4LTE0JywgJzYwOC45MCddLFxyXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0xNScsICc3MzQuNjgnXSwgWycyMDE5LTA4LTE2JywgJzgzOC41NCddLFxyXG4gICAgICAgICAgICAgIFsnMjAxOS0wOC0xNycsICc2OTIuODgnXV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZTdlN2U3JyxcclxuICAgICAgICAgIHN0cm9rZURhc2hBcnJheTogMyxcclxuICAgICAgICAgIHhheGlzOiB7IGxpbmVzOiB7IHNob3c6IHRydWUgfSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFya2VyczogeyBzaXplOiAzLCBob3ZlcjogeyBzaXplOiA2IH0gfSxcclxuICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgYXhpc0JvcmRlcjogeyBzaG93OiB0cnVlLCBjb2xvcjogJyNmNGY2ZmMnIH0sXHJcbiAgICAgICAgICBsYWJlbHM6IHt9LFxyXG4gICAgICAgICAgdHlwZTogJ2RhdGV0aW1lJyxcclxuICAgICAgICAgIHRpY2tBbW91bnQ6IDYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5YXhpczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93QWx3YXlzOiBmYWxzZSxcclxuICAgICAgICAgICAgb3Bwb3NpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXZlcnNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvZ2FyaXRobWljOiBmYWxzZSxcclxuICAgICAgICAgICAgZm9yY2VOaWNlU2NhbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmbG9hdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWluV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IDE2MCxcclxuICAgICAgICAgICAgICBvZmZzZXRYOiAwLFxyXG4gICAgICAgICAgICAgIG9mZnNldFk6IDAsXHJcbiAgICAgICAgICAgICAgcm90YXRlOiAwLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yczogW10sIGZvbnRTaXplOiAnMTFweCcsIGNzc0NsYXNzOiAnJyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSwgY29sb3I6ICcjZjRmNmZjJywgb2Zmc2V0WDogMCwgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXhpc1RpY2tzOiB7XHJcbiAgICAgICAgICAgICAgc2hvdzogZmFsc2UsIGNvbG9yOiAnIzc4OTA5QycsIHdpZHRoOiA2LCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdQIFRvdGFsZSDCsEMnLCByb3RhdGU6IDkwLCBvZmZzZXRZOiAwLCBvZmZzZXRYOiAwLCBzdHlsZTogeyBmb250U2l6ZTogJzExcHgnLCBjc3NDbGFzczogJycgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDogeyBlbmFibGVkOiBmYWxzZSwgb2Zmc2V0WDogMCB9LFxyXG4gICAgICAgICAgICBjcm9zc2hhaXJzOiB7IHNob3c6IHRydWUsIHBvc2l0aW9uOiAnZnJvbnQnLCBzdHJva2U6IHsgY29sb3I6ICcjYjZiNmI2Jywgd2lkdGg6IDEsIGRhc2hBcnJheTogMCB9IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGVnZW5kOiB7IHNob3c6IHRydWUgfSxcclxuICAgICAgICB0b29sdGlwOiB7fSxcclxuICAgICAgICBhbm5vdGF0aW9uczogeyB5YXhpczogW10sIHhheGlzOiBbXSwgcG9pbnRzOiBbXSB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19