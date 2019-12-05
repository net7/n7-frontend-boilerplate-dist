/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/data-sources/graph.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class DvGraphDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2dyYXBoLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxTQUFVLFNBQVEsVUFBVTs7Ozs7O0lBRTlCLFNBQVMsQ0FBQyxJQUFJO1FBQ2pCLE9BQU87WUFDWixXQUFXLEVBQUUsWUFBWTtZQUN6QixVQUFVLEVBQUM7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLFFBQVEsRUFBQyxHQUFHO29CQUNaLE9BQU8sRUFBRSxJQUFJO29CQUNiLE1BQU0sRUFBQyxNQUFNO29CQUNiLFNBQVMsRUFBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUM7aUJBQ3hCO2dCQUNELFVBQVUsRUFBRSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUM7Z0JBQzdCLE1BQU0sRUFBQyxDQUFDLGtCQUFrQixDQUFDO2dCQUMzQixJQUFJLEVBQUM7b0JBQ0gsUUFBUSxFQUFDLENBQUMsU0FBUyxDQUFDO29CQUNwQixVQUFVLEVBQUMsRUFBQyxhQUFhLEVBQUMsR0FBRyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUM7aUJBQy9DO2dCQUNELE1BQU0sRUFBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUN6QyxNQUFNLEVBQUM7b0JBQ047d0JBQ0MsTUFBTSxFQUFDLGVBQWU7d0JBQ3RCLE1BQU0sRUFBQyxDQUFDLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQzs0QkFDdEQsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDOzRCQUMvQyxDQUFD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Z0JBQ0QsTUFBTSxFQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQztnQkFDcEIsT0FBTyxFQUFDLEVBQUU7Z0JBQ1YsV0FBVyxFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUM7YUFDL0M7U0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIER2R3JhcGhEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuXG5cdHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSl7XG4gICAgICAgIHJldHVybiB7XG5cdFx0XHRjb250YWluZXJJZDogJ3Rlc3QtQ2hhcnQnLFxuXHRcdFx0bGliT3B0aW9uczp7XG5cdFx0XHRcdGNoYXJ0OiB7XG5cdFx0XHRcdFx0XHRcImhlaWdodFwiOjU1MCxcblx0XHRcdFx0XHRcdFwid2lkdGhcIjogMTUwMCxcblx0XHRcdFx0XHRcdFwidHlwZVwiOlwiYXJlYVwiLFxuXHRcdFx0XHRcdFx0XCJ0b29sYmFyXCI6e1wic2hvd1wiOnRydWV9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRhdGFMYWJlbHM6IHtcImVuYWJsZWRcIjpmYWxzZX0sXG5cdFx0XHRcdGNvbG9yczpbXCJyZ2JhKDE1LDIwMCwyNTUpXCJdLFxuXHRcdFx0XHRmaWxsOntcblx0XHRcdFx0XHRcdFwiY29sb3JzXCI6W1wiIzBmYzhmZlwiXSxcblx0XHRcdFx0XHRcdFwiZ3JhZGllbnRcIjp7XCJvcGFjaXR5RnJvbVwiOjAuNSxcIm9wYWNpdHlUb1wiOjAuMX1cblx0XHRcdFx0fSxcblx0XHRcdFx0c3Ryb2tlOntcImN1cnZlXCI6XCJzdHJhaWdodFwiLFwid2lkdGhcIjpbMiwxXX0sXG5cdFx0XHRcdHNlcmllczpbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6XCJSZWRkaXNoIHZhbHVlXCIsXG5cdFx0XHRcdFx0XHRcImRhdGFcIjpbW1wiMjAxOS0wOC0wMVwiLFwiNzcwLjE3XCJdLFtcIjIwMTktMDgtMDJcIixcIjY0NS4wM1wiXSxcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0wM1wiLFwiNzA5LjMyXCJdLFtcIjIwMTktMDgtMDRcIixcIjcwOC4xMVwiXSxcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0wNVwiLFwiNzA2LjU5XCJdLFtcIjIwMTktMDgtMDZcIixcIjYwNy4yOFwiXSxcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0wN1wiLFwiNDk0LjU5XCJdLFtcIjIwMTktMDgtMDhcIixcIjYzNi44MVwiXSxcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0wOVwiLFwiNzA5LjA0XCJdLFtcIjIwMTktMDgtMTBcIixcIjcxNy4zMVwiXSxcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0xMVwiLFwiODA1LjYxXCJdLFtcIjIwMTktMDgtMTJcIixcIjc1OC42MFwiXSxcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0xM1wiLFwiNjEyLjgyXCJdLFtcIjIwMTktMDgtMTRcIixcIjYwOC45MFwiXSxcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0xNVwiLFwiNzM0LjY4XCJdLFtcIjIwMTktMDgtMTZcIixcIjgzOC41NFwiXSxcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0xN1wiLFwiNjkyLjg4XCJdXVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGdyaWQ6e1xuXHRcdFx0XHRcdFwiYm9yZGVyQ29sb3JcIjpcIiNlN2U3ZTdcIixcblx0XHRcdFx0XHRcInN0cm9rZURhc2hBcnJheVwiOjMsXG5cdFx0XHRcdFx0XCJ4YXhpc1wiOntcImxpbmVzXCI6e1wic2hvd1wiOnRydWV9fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtYXJrZXJzOntcInNpemVcIjozLFwiaG92ZXJcIjp7XCJzaXplXCI6Nn19LFxuXHRcdFx0XHR4YXhpczp7XG5cdFx0XHRcdFx0XHRcImF4aXNCb3JkZXJcIjp7XCJzaG93XCI6dHJ1ZSxcImNvbG9yXCI6XCIjZjRmNmZjXCJ9LFxuXHRcdFx0XHRcdFx0XCJsYWJlbHNcIjp7fSxcblx0XHRcdFx0XHRcdFwidHlwZVwiOlwiZGF0ZXRpbWVcIixcInRpY2tBbW91bnRcIjo2XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHlheGlzOltcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInNob3dcIjp0cnVlLFxuXHRcdFx0XHRcdFx0XCJzaG93QWx3YXlzXCI6ZmFsc2UsXG5cdFx0XHRcdFx0XHRcIm9wcG9zaXRlXCI6ZmFsc2UsXG5cdFx0XHRcdFx0XHRcInJldmVyc2VkXCI6ZmFsc2UsXG5cdFx0XHRcdFx0XHRcImxvZ2FyaXRobWljXCI6ZmFsc2UsXG5cdFx0XHRcdFx0XHRcImZvcmNlTmljZVNjYWxlXCI6ZmFsc2UsXG5cdFx0XHRcdFx0XHRcImZsb2F0aW5nXCI6ZmFsc2UsXG5cdFx0XHRcdFx0XHRcImxhYmVsc1wiOiB7XG5cdFx0XHRcdFx0XHRcdFx0XCJzaG93XCI6dHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcIm1pbldpZHRoXCI6MCxcblx0XHRcdFx0XHRcdFx0XHRcIm1heFdpZHRoXCI6MTYwLFxuXHRcdFx0XHRcdFx0XHRcdFwib2Zmc2V0WFwiOjAsXG5cdFx0XHRcdFx0XHRcdFx0XCJvZmZzZXRZXCI6MCxcblx0XHRcdFx0XHRcdFx0XHRcInJvdGF0ZVwiOjAsXG5cdFx0XHRcdFx0XHRcdFx0XCJwYWRkaW5nXCI6MjAsXG5cdFx0XHRcdFx0XHRcdFx0XCJzdHlsZVwiOiB7IFwiY29sb3JzXCI6W10sIFwiZm9udFNpemVcIjpcIjExcHhcIiwgXCJjc3NDbGFzc1wiOlwiXCIgfVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFwiYXhpc0JvcmRlclwiOntcInNob3dcIjp0cnVlLFwiY29sb3JcIjpcIiNmNGY2ZmNcIixcIm9mZnNldFhcIjowLFwib2Zmc2V0WVwiOjB9LFxuXHRcdFx0XHRcdFx0XCJheGlzVGlja3NcIjp7XCJzaG93XCI6ZmFsc2UsXCJjb2xvclwiOlwiIzc4OTA5Q1wiLFwid2lkdGhcIjo2LFwib2Zmc2V0WFwiOjAsXCJvZmZzZXRZXCI6MH0sXG5cdFx0XHRcdFx0XHRcInRpdGxlXCI6e1widGV4dFwiOlwiUCBUb3RhbGUgwrBDXCIsXCJyb3RhdGVcIjo5MCxcIm9mZnNldFlcIjowLFwib2Zmc2V0WFwiOjAsXCJzdHlsZVwiOntcImZvbnRTaXplXCI6XCIxMXB4XCIsXCJjc3NDbGFzc1wiOlwiXCJ9fSxcblx0XHRcdFx0XHRcdFwidG9vbHRpcFwiOntcImVuYWJsZWRcIjpmYWxzZSxcIm9mZnNldFhcIjowfSxcblx0XHRcdFx0XHRcdFwiY3Jvc3NoYWlyc1wiOntcInNob3dcIjp0cnVlLFwicG9zaXRpb25cIjpcImZyb250XCIsXCJzdHJva2VcIjp7XCJjb2xvclwiOlwiI2I2YjZiNlwiLFwid2lkdGhcIjoxLFwiZGFzaEFycmF5XCI6MH19XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRsZWdlbmQ6e1wic2hvd1wiOnRydWV9LFxuXHRcdFx0XHR0b29sdGlwOnt9LFxuXHRcdFx0XHRhbm5vdGF0aW9uczp7XCJ5YXhpc1wiOltdLFwieGF4aXNcIjpbXSxcInBvaW50c1wiOltdfVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19