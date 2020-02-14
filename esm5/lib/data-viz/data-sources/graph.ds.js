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
     * @param {?} data
     * @return {?}
     */
    DvGraphDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return {
            containerId: 'test-Chart',
            libOptions: {
                chart: {
                    "height": 550,
                    "width": 1500,
                    "type": "area",
                    "toolbar": { "show": true }
                },
                dataLabels: { "enabled": false },
                colors: ["rgba(15,200,255)"],
                fill: {
                    "colors": ["#0fc8ff"],
                    "gradient": { "opacityFrom": 0.5, "opacityTo": 0.1 }
                },
                stroke: { "curve": "straight", "width": [2, 1] },
                series: [
                    {
                        "name": "Reddish value",
                        "data": [["2019-08-01", "770.17"], ["2019-08-02", "645.03"],
                            ["2019-08-03", "709.32"], ["2019-08-04", "708.11"],
                            ["2019-08-05", "706.59"], ["2019-08-06", "607.28"],
                            ["2019-08-07", "494.59"], ["2019-08-08", "636.81"],
                            ["2019-08-09", "709.04"], ["2019-08-10", "717.31"],
                            ["2019-08-11", "805.61"], ["2019-08-12", "758.60"],
                            ["2019-08-13", "612.82"], ["2019-08-14", "608.90"],
                            ["2019-08-15", "734.68"], ["2019-08-16", "838.54"],
                            ["2019-08-17", "692.88"]]
                    },
                ],
                grid: {
                    "borderColor": "#e7e7e7",
                    "strokeDashArray": 3,
                    "xaxis": { "lines": { "show": true } }
                },
                markers: { "size": 3, "hover": { "size": 6 } },
                xaxis: {
                    "axisBorder": { "show": true, "color": "#f4f6fc" },
                    "labels": {},
                    "type": "datetime", "tickAmount": 6
                },
                yaxis: [
                    {
                        "show": true,
                        "showAlways": false,
                        "opposite": false,
                        "reversed": false,
                        "logarithmic": false,
                        "forceNiceScale": false,
                        "floating": false,
                        "labels": {
                            "show": true,
                            "minWidth": 0,
                            "maxWidth": 160,
                            "offsetX": 0,
                            "offsetY": 0,
                            "rotate": 0,
                            "padding": 20,
                            "style": { "colors": [], "fontSize": "11px", "cssClass": "" }
                        },
                        "axisBorder": { "show": true, "color": "#f4f6fc", "offsetX": 0, "offsetY": 0 },
                        "axisTicks": { "show": false, "color": "#78909C", "width": 6, "offsetX": 0, "offsetY": 0 },
                        "title": { "text": "P Totale °C", "rotate": 90, "offsetY": 0, "offsetX": 0, "style": { "fontSize": "11px", "cssClass": "" } },
                        "tooltip": { "enabled": false, "offsetX": 0 },
                        "crosshairs": { "show": true, "position": "front", "stroke": { "color": "#b6b6b6", "width": 1, "dashArray": 0 } }
                    }
                ],
                legend: { "show": true },
                tooltip: {},
                annotations: { "yaxis": [], "xaxis": [], "points": [] }
            }
        };
    };
    return DvGraphDS;
}(DataSource));
export { DvGraphDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2dyYXBoLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUErQixxQ0FBVTtJQUF6Qzs7SUE0RUEsQ0FBQzs7Ozs7O0lBMUVVLDZCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ2pCLE9BQU87WUFDWixXQUFXLEVBQUUsWUFBWTtZQUN6QixVQUFVLEVBQUM7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLFFBQVEsRUFBQyxHQUFHO29CQUNaLE9BQU8sRUFBRSxJQUFJO29CQUNiLE1BQU0sRUFBQyxNQUFNO29CQUNiLFNBQVMsRUFBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUM7aUJBQ3hCO2dCQUNELFVBQVUsRUFBRSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUM7Z0JBQzdCLE1BQU0sRUFBQyxDQUFDLGtCQUFrQixDQUFDO2dCQUMzQixJQUFJLEVBQUM7b0JBQ0gsUUFBUSxFQUFDLENBQUMsU0FBUyxDQUFDO29CQUNwQixVQUFVLEVBQUMsRUFBQyxhQUFhLEVBQUMsR0FBRyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUM7aUJBQy9DO2dCQUNELE1BQU0sRUFBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUN6QyxNQUFNLEVBQUM7b0JBQ047d0JBQ0MsTUFBTSxFQUFDLGVBQWU7d0JBQ3RCLE1BQU0sRUFBQyxDQUFDLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQzs0QkFDdEQsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxZQUFZLEVBQUMsUUFB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RUFBQztxQkFDbEc7aUJBQ0Q7Z0JBQ0QsTUFBTSxFQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQztnQkFDcEIsT0FBTyxFQUFDLEVBQUU7Z0JBQ1YsV0FBVyxFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUM7YUFDL0M7U0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUNGLGdCQUFDO0FBQUQsQ0FBQyxBQTVFRCxDQUErQixVQUFVLEdBNEV4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHZHcmFwaERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcblxyXG5cdHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHRcdFx0Y29udGFpbmVySWQ6ICd0ZXN0LUNoYXJ0JyxcclxuXHRcdFx0bGliT3B0aW9uczp7XHJcblx0XHRcdFx0Y2hhcnQ6IHtcclxuXHRcdFx0XHRcdFx0XCJoZWlnaHRcIjo1NTAsXHJcblx0XHRcdFx0XHRcdFwid2lkdGhcIjogMTUwMCxcclxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6XCJhcmVhXCIsXHJcblx0XHRcdFx0XHRcdFwidG9vbGJhclwiOntcInNob3dcIjp0cnVlfVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZGF0YUxhYmVsczoge1wiZW5hYmxlZFwiOmZhbHNlfSxcclxuXHRcdFx0XHRjb2xvcnM6W1wicmdiYSgxNSwyMDAsMjU1KVwiXSxcclxuXHRcdFx0XHRmaWxsOntcclxuXHRcdFx0XHRcdFx0XCJjb2xvcnNcIjpbXCIjMGZjOGZmXCJdLFxyXG5cdFx0XHRcdFx0XHRcImdyYWRpZW50XCI6e1wib3BhY2l0eUZyb21cIjowLjUsXCJvcGFjaXR5VG9cIjowLjF9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzdHJva2U6e1wiY3VydmVcIjpcInN0cmFpZ2h0XCIsXCJ3aWR0aFwiOlsyLDFdfSxcclxuXHRcdFx0XHRzZXJpZXM6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcIm5hbWVcIjpcIlJlZGRpc2ggdmFsdWVcIixcclxuXHRcdFx0XHRcdFx0XCJkYXRhXCI6W1tcIjIwMTktMDgtMDFcIixcIjc3MC4xN1wiXSxbXCIyMDE5LTA4LTAyXCIsXCI2NDUuMDNcIl0sXHJcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0wM1wiLFwiNzA5LjMyXCJdLFtcIjIwMTktMDgtMDRcIixcIjcwOC4xMVwiXSxcclxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTA1XCIsXCI3MDYuNTlcIl0sW1wiMjAxOS0wOC0wNlwiLFwiNjA3LjI4XCJdLFxyXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMDdcIixcIjQ5NC41OVwiXSxbXCIyMDE5LTA4LTA4XCIsXCI2MzYuODFcIl0sXHJcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0wOVwiLFwiNzA5LjA0XCJdLFtcIjIwMTktMDgtMTBcIixcIjcxNy4zMVwiXSxcclxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTExXCIsXCI4MDUuNjFcIl0sW1wiMjAxOS0wOC0xMlwiLFwiNzU4LjYwXCJdLFxyXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMTNcIixcIjYxMi44MlwiXSxbXCIyMDE5LTA4LTE0XCIsXCI2MDguOTBcIl0sXHJcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0xNVwiLFwiNzM0LjY4XCJdLFtcIjIwMTktMDgtMTZcIixcIjgzOC41NFwiXSxcclxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTE3XCIsXCI2OTIuODhcIl1dXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Z3JpZDp7XHJcblx0XHRcdFx0XHRcImJvcmRlckNvbG9yXCI6XCIjZTdlN2U3XCIsXHJcblx0XHRcdFx0XHRcInN0cm9rZURhc2hBcnJheVwiOjMsXHJcblx0XHRcdFx0XHRcInhheGlzXCI6e1wibGluZXNcIjp7XCJzaG93XCI6dHJ1ZX19XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtYXJrZXJzOntcInNpemVcIjozLFwiaG92ZXJcIjp7XCJzaXplXCI6Nn19LFxyXG5cdFx0XHRcdHhheGlzOntcclxuXHRcdFx0XHRcdFx0XCJheGlzQm9yZGVyXCI6e1wic2hvd1wiOnRydWUsXCJjb2xvclwiOlwiI2Y0ZjZmY1wifSxcclxuXHRcdFx0XHRcdFx0XCJsYWJlbHNcIjp7fSxcclxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6XCJkYXRldGltZVwiLFwidGlja0Ftb3VudFwiOjZcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHlheGlzOltcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XCJzaG93XCI6dHJ1ZSxcclxuXHRcdFx0XHRcdFx0XCJzaG93QWx3YXlzXCI6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdFwib3Bwb3NpdGVcIjpmYWxzZSxcclxuXHRcdFx0XHRcdFx0XCJyZXZlcnNlZFwiOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcImxvZ2FyaXRobWljXCI6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdFwiZm9yY2VOaWNlU2NhbGVcIjpmYWxzZSxcclxuXHRcdFx0XHRcdFx0XCJmbG9hdGluZ1wiOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcImxhYmVsc1wiOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcInNob3dcIjp0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJtaW5XaWR0aFwiOjAsXHJcblx0XHRcdFx0XHRcdFx0XHRcIm1heFdpZHRoXCI6MTYwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJvZmZzZXRYXCI6MCxcclxuXHRcdFx0XHRcdFx0XHRcdFwib2Zmc2V0WVwiOjAsXHJcblx0XHRcdFx0XHRcdFx0XHRcInJvdGF0ZVwiOjAsXHJcblx0XHRcdFx0XHRcdFx0XHRcInBhZGRpbmdcIjoyMCxcclxuXHRcdFx0XHRcdFx0XHRcdFwic3R5bGVcIjogeyBcImNvbG9yc1wiOltdLCBcImZvbnRTaXplXCI6XCIxMXB4XCIsIFwiY3NzQ2xhc3NcIjpcIlwiIH1cclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XCJheGlzQm9yZGVyXCI6e1wic2hvd1wiOnRydWUsXCJjb2xvclwiOlwiI2Y0ZjZmY1wiLFwib2Zmc2V0WFwiOjAsXCJvZmZzZXRZXCI6MH0sXHJcblx0XHRcdFx0XHRcdFwiYXhpc1RpY2tzXCI6e1wic2hvd1wiOmZhbHNlLFwiY29sb3JcIjpcIiM3ODkwOUNcIixcIndpZHRoXCI6NixcIm9mZnNldFhcIjowLFwib2Zmc2V0WVwiOjB9LFxyXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6e1widGV4dFwiOlwiUCBUb3RhbGUgwrBDXCIsXCJyb3RhdGVcIjo5MCxcIm9mZnNldFlcIjowLFwib2Zmc2V0WFwiOjAsXCJzdHlsZVwiOntcImZvbnRTaXplXCI6XCIxMXB4XCIsXCJjc3NDbGFzc1wiOlwiXCJ9fSxcclxuXHRcdFx0XHRcdFx0XCJ0b29sdGlwXCI6e1wiZW5hYmxlZFwiOmZhbHNlLFwib2Zmc2V0WFwiOjB9LFxyXG5cdFx0XHRcdFx0XHRcImNyb3NzaGFpcnNcIjp7XCJzaG93XCI6dHJ1ZSxcInBvc2l0aW9uXCI6XCJmcm9udFwiLFwic3Ryb2tlXCI6e1wiY29sb3JcIjpcIiNiNmI2YjZcIixcIndpZHRoXCI6MSxcImRhc2hBcnJheVwiOjB9fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0bGVnZW5kOntcInNob3dcIjp0cnVlfSxcclxuXHRcdFx0XHR0b29sdGlwOnt9LFxyXG5cdFx0XHRcdGFubm90YXRpb25zOntcInlheGlzXCI6W10sXCJ4YXhpc1wiOltdLFwicG9pbnRzXCI6W119XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19