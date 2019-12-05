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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2dyYXBoLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUErQixxQ0FBVTtJQUF6Qzs7SUE0RUEsQ0FBQzs7Ozs7O0lBMUVVLDZCQUFTOzs7OztJQUFuQixVQUFvQixJQUFJO1FBQ2pCLE9BQU87WUFDWixXQUFXLEVBQUUsWUFBWTtZQUN6QixVQUFVLEVBQUM7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLFFBQVEsRUFBQyxHQUFHO29CQUNaLE9BQU8sRUFBRSxJQUFJO29CQUNiLE1BQU0sRUFBQyxNQUFNO29CQUNiLFNBQVMsRUFBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUM7aUJBQ3hCO2dCQUNELFVBQVUsRUFBRSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUM7Z0JBQzdCLE1BQU0sRUFBQyxDQUFDLGtCQUFrQixDQUFDO2dCQUMzQixJQUFJLEVBQUM7b0JBQ0gsUUFBUSxFQUFDLENBQUMsU0FBUyxDQUFDO29CQUNwQixVQUFVLEVBQUMsRUFBQyxhQUFhLEVBQUMsR0FBRyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUM7aUJBQy9DO2dCQUNELE1BQU0sRUFBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUN6QyxNQUFNLEVBQUM7b0JBQ047d0JBQ0MsTUFBTSxFQUFDLGVBQWU7d0JBQ3RCLE1BQU0sRUFBQyxDQUFDLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQzs0QkFDdEQsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDOzRCQUMvQyxDQUFDLFlBQVksRUFBQyxRQUFRLENBQUMsRUFBQyxDQUFDLFlBQVksRUFBQyxRQUFRLENBQUM7NEJBQy9DLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQzs0QkFDL0MsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDOzRCQUMvQyxDQUFDLFlBQVksRUFBQyxRQUFRLENBQUMsRUFBQyxDQUFDLFlBQVksRUFBQyxRQUFRLENBQUM7NEJBQy9DLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQzs0QkFDL0MsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDOzRCQUMvQyxDQUFDLFlBQVksRUFBQyxRQUFRLENBQUMsQ0FBQztxQkFDekI7aUJBQ0Q7Z0JBQ0QsSUFBSSxFQUFDO29CQUNKLGFBQWEsRUFBQyxTQUFTO29CQUN2QixpQkFBaUIsRUFBQyxDQUFDO29CQUNuQixPQUFPLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUM7aUJBQy9CO2dCQUNELE9BQU8sRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxFQUFDO2dCQUNyQyxLQUFLLEVBQUM7b0JBQ0osWUFBWSxFQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDO29CQUM1QyxRQUFRLEVBQUMsRUFBRTtvQkFDWCxNQUFNLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxDQUFDO2lCQUNqQztnQkFDRCxLQUFLLEVBQUM7b0JBQ0w7d0JBQ0MsTUFBTSxFQUFDLElBQUk7d0JBQ1gsWUFBWSxFQUFDLEtBQUs7d0JBQ2xCLFVBQVUsRUFBQyxLQUFLO3dCQUNoQixVQUFVLEVBQUMsS0FBSzt3QkFDaEIsYUFBYSxFQUFDLEtBQUs7d0JBQ25CLGdCQUFnQixFQUFDLEtBQUs7d0JBQ3RCLFVBQVUsRUFBQyxLQUFLO3dCQUNoQixRQUFRLEVBQUU7NEJBQ1IsTUFBTSxFQUFDLElBQUk7NEJBQ1gsVUFBVSxFQUFDLENBQUM7NEJBQ1osVUFBVSxFQUFDLEdBQUc7NEJBQ2QsU0FBUyxFQUFDLENBQUM7NEJBQ1gsU0FBUyxFQUFDLENBQUM7NEJBQ1gsUUFBUSxFQUFDLENBQUM7NEJBQ1YsU0FBUyxFQUFDLEVBQUU7NEJBQ1osT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUU7eUJBQzNEO3dCQUNELFlBQVksRUFBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUM7d0JBQ3BFLFdBQVcsRUFBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQzt3QkFDOUUsT0FBTyxFQUFDLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBQzt3QkFDNUcsU0FBUyxFQUFDLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDO3dCQUN2QyxZQUFZLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQztxQkFDbEc7aUJBQ0Q7Z0JBQ0QsTUFBTSxFQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQztnQkFDcEIsT0FBTyxFQUFDLEVBQUU7Z0JBQ1YsV0FBVyxFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUM7YUFDL0M7U0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUNGLGdCQUFDO0FBQUQsQ0FBQyxBQTVFRCxDQUErQixVQUFVLEdBNEV4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEdkdyYXBoRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuXHRwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpe1xuICAgICAgICByZXR1cm4ge1xuXHRcdFx0Y29udGFpbmVySWQ6ICd0ZXN0LUNoYXJ0Jyxcblx0XHRcdGxpYk9wdGlvbnM6e1xuXHRcdFx0XHRjaGFydDoge1xuXHRcdFx0XHRcdFx0XCJoZWlnaHRcIjo1NTAsXG5cdFx0XHRcdFx0XHRcIndpZHRoXCI6IDE1MDAsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjpcImFyZWFcIixcblx0XHRcdFx0XHRcdFwidG9vbGJhclwiOntcInNob3dcIjp0cnVlfVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkYXRhTGFiZWxzOiB7XCJlbmFibGVkXCI6ZmFsc2V9LFxuXHRcdFx0XHRjb2xvcnM6W1wicmdiYSgxNSwyMDAsMjU1KVwiXSxcblx0XHRcdFx0ZmlsbDp7XG5cdFx0XHRcdFx0XHRcImNvbG9yc1wiOltcIiMwZmM4ZmZcIl0sXG5cdFx0XHRcdFx0XHRcImdyYWRpZW50XCI6e1wib3BhY2l0eUZyb21cIjowLjUsXCJvcGFjaXR5VG9cIjowLjF9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0cm9rZTp7XCJjdXJ2ZVwiOlwic3RyYWlnaHRcIixcIndpZHRoXCI6WzIsMV19LFxuXHRcdFx0XHRzZXJpZXM6W1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOlwiUmVkZGlzaCB2YWx1ZVwiLFxuXHRcdFx0XHRcdFx0XCJkYXRhXCI6W1tcIjIwMTktMDgtMDFcIixcIjc3MC4xN1wiXSxbXCIyMDE5LTA4LTAyXCIsXCI2NDUuMDNcIl0sXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMDNcIixcIjcwOS4zMlwiXSxbXCIyMDE5LTA4LTA0XCIsXCI3MDguMTFcIl0sXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMDVcIixcIjcwNi41OVwiXSxbXCIyMDE5LTA4LTA2XCIsXCI2MDcuMjhcIl0sXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMDdcIixcIjQ5NC41OVwiXSxbXCIyMDE5LTA4LTA4XCIsXCI2MzYuODFcIl0sXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMDlcIixcIjcwOS4wNFwiXSxbXCIyMDE5LTA4LTEwXCIsXCI3MTcuMzFcIl0sXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMTFcIixcIjgwNS42MVwiXSxbXCIyMDE5LTA4LTEyXCIsXCI3NTguNjBcIl0sXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMTNcIixcIjYxMi44MlwiXSxbXCIyMDE5LTA4LTE0XCIsXCI2MDguOTBcIl0sXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMTVcIixcIjczNC42OFwiXSxbXCIyMDE5LTA4LTE2XCIsXCI4MzguNTRcIl0sXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMTdcIixcIjY5Mi44OFwiXV1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRncmlkOntcblx0XHRcdFx0XHRcImJvcmRlckNvbG9yXCI6XCIjZTdlN2U3XCIsXG5cdFx0XHRcdFx0XCJzdHJva2VEYXNoQXJyYXlcIjozLFxuXHRcdFx0XHRcdFwieGF4aXNcIjp7XCJsaW5lc1wiOntcInNob3dcIjp0cnVlfX1cblx0XHRcdFx0fSxcblx0XHRcdFx0bWFya2Vyczp7XCJzaXplXCI6MyxcImhvdmVyXCI6e1wic2l6ZVwiOjZ9fSxcblx0XHRcdFx0eGF4aXM6e1xuXHRcdFx0XHRcdFx0XCJheGlzQm9yZGVyXCI6e1wic2hvd1wiOnRydWUsXCJjb2xvclwiOlwiI2Y0ZjZmY1wifSxcblx0XHRcdFx0XHRcdFwibGFiZWxzXCI6e30sXG5cdFx0XHRcdFx0XHRcInR5cGVcIjpcImRhdGV0aW1lXCIsXCJ0aWNrQW1vdW50XCI6NlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR5YXhpczpbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJzaG93XCI6dHJ1ZSxcblx0XHRcdFx0XHRcdFwic2hvd0Fsd2F5c1wiOmZhbHNlLFxuXHRcdFx0XHRcdFx0XCJvcHBvc2l0ZVwiOmZhbHNlLFxuXHRcdFx0XHRcdFx0XCJyZXZlcnNlZFwiOmZhbHNlLFxuXHRcdFx0XHRcdFx0XCJsb2dhcml0aG1pY1wiOmZhbHNlLFxuXHRcdFx0XHRcdFx0XCJmb3JjZU5pY2VTY2FsZVwiOmZhbHNlLFxuXHRcdFx0XHRcdFx0XCJmbG9hdGluZ1wiOmZhbHNlLFxuXHRcdFx0XHRcdFx0XCJsYWJlbHNcIjoge1xuXHRcdFx0XHRcdFx0XHRcdFwic2hvd1wiOnRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XCJtaW5XaWR0aFwiOjAsXG5cdFx0XHRcdFx0XHRcdFx0XCJtYXhXaWR0aFwiOjE2MCxcblx0XHRcdFx0XHRcdFx0XHRcIm9mZnNldFhcIjowLFxuXHRcdFx0XHRcdFx0XHRcdFwib2Zmc2V0WVwiOjAsXG5cdFx0XHRcdFx0XHRcdFx0XCJyb3RhdGVcIjowLFxuXHRcdFx0XHRcdFx0XHRcdFwicGFkZGluZ1wiOjIwLFxuXHRcdFx0XHRcdFx0XHRcdFwic3R5bGVcIjogeyBcImNvbG9yc1wiOltdLCBcImZvbnRTaXplXCI6XCIxMXB4XCIsIFwiY3NzQ2xhc3NcIjpcIlwiIH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcImF4aXNCb3JkZXJcIjp7XCJzaG93XCI6dHJ1ZSxcImNvbG9yXCI6XCIjZjRmNmZjXCIsXCJvZmZzZXRYXCI6MCxcIm9mZnNldFlcIjowfSxcblx0XHRcdFx0XHRcdFwiYXhpc1RpY2tzXCI6e1wic2hvd1wiOmZhbHNlLFwiY29sb3JcIjpcIiM3ODkwOUNcIixcIndpZHRoXCI6NixcIm9mZnNldFhcIjowLFwib2Zmc2V0WVwiOjB9LFxuXHRcdFx0XHRcdFx0XCJ0aXRsZVwiOntcInRleHRcIjpcIlAgVG90YWxlIMKwQ1wiLFwicm90YXRlXCI6OTAsXCJvZmZzZXRZXCI6MCxcIm9mZnNldFhcIjowLFwic3R5bGVcIjp7XCJmb250U2l6ZVwiOlwiMTFweFwiLFwiY3NzQ2xhc3NcIjpcIlwifX0sXG5cdFx0XHRcdFx0XHRcInRvb2x0aXBcIjp7XCJlbmFibGVkXCI6ZmFsc2UsXCJvZmZzZXRYXCI6MH0sXG5cdFx0XHRcdFx0XHRcImNyb3NzaGFpcnNcIjp7XCJzaG93XCI6dHJ1ZSxcInBvc2l0aW9uXCI6XCJmcm9udFwiLFwic3Ryb2tlXCI6e1wiY29sb3JcIjpcIiNiNmI2YjZcIixcIndpZHRoXCI6MSxcImRhc2hBcnJheVwiOjB9fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0bGVnZW5kOntcInNob3dcIjp0cnVlfSxcblx0XHRcdFx0dG9vbHRpcDp7fSxcblx0XHRcdFx0YW5ub3RhdGlvbnM6e1wieWF4aXNcIjpbXSxcInhheGlzXCI6W10sXCJwb2ludHNcIjpbXX1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==