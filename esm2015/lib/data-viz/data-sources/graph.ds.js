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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2dyYXBoLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxTQUFVLFNBQVEsVUFBVTs7Ozs7O0lBRTlCLFNBQVMsQ0FBQyxJQUFJO1FBQ2pCLE9BQU87WUFDWixXQUFXLEVBQUUsWUFBWTtZQUN6QixVQUFVLEVBQUM7Z0JBQ1YsS0FBSyxFQUFFO29CQUNMLFFBQVEsRUFBQyxHQUFHO29CQUNaLE9BQU8sRUFBRSxJQUFJO29CQUNiLE1BQU0sRUFBQyxNQUFNO29CQUNiLFNBQVMsRUFBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUM7aUJBQ3hCO2dCQUNELFVBQVUsRUFBRSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUM7Z0JBQzdCLE1BQU0sRUFBQyxDQUFDLGtCQUFrQixDQUFDO2dCQUMzQixJQUFJLEVBQUM7b0JBQ0gsUUFBUSxFQUFDLENBQUMsU0FBUyxDQUFDO29CQUNwQixVQUFVLEVBQUMsRUFBQyxhQUFhLEVBQUMsR0FBRyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUM7aUJBQy9DO2dCQUNELE1BQU0sRUFBQyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUN6QyxNQUFNLEVBQUM7b0JBQ047d0JBQ0MsTUFBTSxFQUFDLGVBQWU7d0JBQ3RCLE1BQU0sRUFBQyxDQUFDLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsWUFBWSxFQUFDLFFBQVEsQ0FBQzs0QkFDdEQsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDOzRCQUMvQyxDQUFD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Z0JBQ0QsTUFBTSxFQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQztnQkFDcEIsT0FBTyxFQUFDLEVBQUU7Z0JBQ1YsV0FBVyxFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUM7YUFDL0M7U0FDRCxDQUFBO0lBQ0YsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEdkdyYXBoRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuXHJcblx0cHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcclxuICAgICAgICByZXR1cm4ge1xyXG5cdFx0XHRjb250YWluZXJJZDogJ3Rlc3QtQ2hhcnQnLFxyXG5cdFx0XHRsaWJPcHRpb25zOntcclxuXHRcdFx0XHRjaGFydDoge1xyXG5cdFx0XHRcdFx0XHRcImhlaWdodFwiOjU1MCxcclxuXHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiAxNTAwLFxyXG5cdFx0XHRcdFx0XHRcInR5cGVcIjpcImFyZWFcIixcclxuXHRcdFx0XHRcdFx0XCJ0b29sYmFyXCI6e1wic2hvd1wiOnRydWV9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRkYXRhTGFiZWxzOiB7XCJlbmFibGVkXCI6ZmFsc2V9LFxyXG5cdFx0XHRcdGNvbG9yczpbXCJyZ2JhKDE1LDIwMCwyNTUpXCJdLFxyXG5cdFx0XHRcdGZpbGw6e1xyXG5cdFx0XHRcdFx0XHRcImNvbG9yc1wiOltcIiMwZmM4ZmZcIl0sXHJcblx0XHRcdFx0XHRcdFwiZ3JhZGllbnRcIjp7XCJvcGFjaXR5RnJvbVwiOjAuNSxcIm9wYWNpdHlUb1wiOjAuMX1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHN0cm9rZTp7XCJjdXJ2ZVwiOlwic3RyYWlnaHRcIixcIndpZHRoXCI6WzIsMV19LFxyXG5cdFx0XHRcdHNlcmllczpbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFwibmFtZVwiOlwiUmVkZGlzaCB2YWx1ZVwiLFxyXG5cdFx0XHRcdFx0XHRcImRhdGFcIjpbW1wiMjAxOS0wOC0wMVwiLFwiNzcwLjE3XCJdLFtcIjIwMTktMDgtMDJcIixcIjY0NS4wM1wiXSxcclxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTAzXCIsXCI3MDkuMzJcIl0sW1wiMjAxOS0wOC0wNFwiLFwiNzA4LjExXCJdLFxyXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMDVcIixcIjcwNi41OVwiXSxbXCIyMDE5LTA4LTA2XCIsXCI2MDcuMjhcIl0sXHJcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0wN1wiLFwiNDk0LjU5XCJdLFtcIjIwMTktMDgtMDhcIixcIjYzNi44MVwiXSxcclxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTA5XCIsXCI3MDkuMDRcIl0sW1wiMjAxOS0wOC0xMFwiLFwiNzE3LjMxXCJdLFxyXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMTFcIixcIjgwNS42MVwiXSxbXCIyMDE5LTA4LTEyXCIsXCI3NTguNjBcIl0sXHJcblx0XHRcdFx0XHRcdFx0W1wiMjAxOS0wOC0xM1wiLFwiNjEyLjgyXCJdLFtcIjIwMTktMDgtMTRcIixcIjYwOC45MFwiXSxcclxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTE1XCIsXCI3MzQuNjhcIl0sW1wiMjAxOS0wOC0xNlwiLFwiODM4LjU0XCJdLFxyXG5cdFx0XHRcdFx0XHRcdFtcIjIwMTktMDgtMTdcIixcIjY5Mi44OFwiXV1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRncmlkOntcclxuXHRcdFx0XHRcdFwiYm9yZGVyQ29sb3JcIjpcIiNlN2U3ZTdcIixcclxuXHRcdFx0XHRcdFwic3Ryb2tlRGFzaEFycmF5XCI6MyxcclxuXHRcdFx0XHRcdFwieGF4aXNcIjp7XCJsaW5lc1wiOntcInNob3dcIjp0cnVlfX1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1hcmtlcnM6e1wic2l6ZVwiOjMsXCJob3ZlclwiOntcInNpemVcIjo2fX0sXHJcblx0XHRcdFx0eGF4aXM6e1xyXG5cdFx0XHRcdFx0XHRcImF4aXNCb3JkZXJcIjp7XCJzaG93XCI6dHJ1ZSxcImNvbG9yXCI6XCIjZjRmNmZjXCJ9LFxyXG5cdFx0XHRcdFx0XHRcImxhYmVsc1wiOnt9LFxyXG5cdFx0XHRcdFx0XHRcInR5cGVcIjpcImRhdGV0aW1lXCIsXCJ0aWNrQW1vdW50XCI6NlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0eWF4aXM6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcInNob3dcIjp0cnVlLFxyXG5cdFx0XHRcdFx0XHRcInNob3dBbHdheXNcIjpmYWxzZSxcclxuXHRcdFx0XHRcdFx0XCJvcHBvc2l0ZVwiOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcInJldmVyc2VkXCI6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdFwibG9nYXJpdGhtaWNcIjpmYWxzZSxcclxuXHRcdFx0XHRcdFx0XCJmb3JjZU5pY2VTY2FsZVwiOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcImZsb2F0aW5nXCI6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdFwibGFiZWxzXCI6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFwic2hvd1wiOnRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcIm1pbldpZHRoXCI6MCxcclxuXHRcdFx0XHRcdFx0XHRcdFwibWF4V2lkdGhcIjoxNjAsXHJcblx0XHRcdFx0XHRcdFx0XHRcIm9mZnNldFhcIjowLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJvZmZzZXRZXCI6MCxcclxuXHRcdFx0XHRcdFx0XHRcdFwicm90YXRlXCI6MCxcclxuXHRcdFx0XHRcdFx0XHRcdFwicGFkZGluZ1wiOjIwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzdHlsZVwiOiB7IFwiY29sb3JzXCI6W10sIFwiZm9udFNpemVcIjpcIjExcHhcIiwgXCJjc3NDbGFzc1wiOlwiXCIgfVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcImF4aXNCb3JkZXJcIjp7XCJzaG93XCI6dHJ1ZSxcImNvbG9yXCI6XCIjZjRmNmZjXCIsXCJvZmZzZXRYXCI6MCxcIm9mZnNldFlcIjowfSxcclxuXHRcdFx0XHRcdFx0XCJheGlzVGlja3NcIjp7XCJzaG93XCI6ZmFsc2UsXCJjb2xvclwiOlwiIzc4OTA5Q1wiLFwid2lkdGhcIjo2LFwib2Zmc2V0WFwiOjAsXCJvZmZzZXRZXCI6MH0sXHJcblx0XHRcdFx0XHRcdFwidGl0bGVcIjp7XCJ0ZXh0XCI6XCJQIFRvdGFsZSDCsENcIixcInJvdGF0ZVwiOjkwLFwib2Zmc2V0WVwiOjAsXCJvZmZzZXRYXCI6MCxcInN0eWxlXCI6e1wiZm9udFNpemVcIjpcIjExcHhcIixcImNzc0NsYXNzXCI6XCJcIn19LFxyXG5cdFx0XHRcdFx0XHRcInRvb2x0aXBcIjp7XCJlbmFibGVkXCI6ZmFsc2UsXCJvZmZzZXRYXCI6MH0sXHJcblx0XHRcdFx0XHRcdFwiY3Jvc3NoYWlyc1wiOntcInNob3dcIjp0cnVlLFwicG9zaXRpb25cIjpcImZyb250XCIsXCJzdHJva2VcIjp7XCJjb2xvclwiOlwiI2I2YjZiNlwiLFwid2lkdGhcIjoxLFwiZGFzaEFycmF5XCI6MH19XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRsZWdlbmQ6e1wic2hvd1wiOnRydWV9LFxyXG5cdFx0XHRcdHRvb2x0aXA6e30sXHJcblx0XHRcdFx0YW5ub3RhdGlvbnM6e1wieWF4aXNcIjpbXSxcInhheGlzXCI6W10sXCJwb2ludHNcIjpbXX1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=