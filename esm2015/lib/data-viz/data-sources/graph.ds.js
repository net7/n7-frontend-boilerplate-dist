/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovZGF0YS1zb3VyY2VzL2dyYXBoLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLFNBQVUsU0FBUSxVQUFVOzs7Ozs7SUFFOUIsU0FBUyxDQUFDLElBQUk7UUFDakIsT0FBTztZQUNaLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBQztnQkFDVixLQUFLLEVBQUU7b0JBQ0wsUUFBUSxFQUFDLEdBQUc7b0JBQ1osT0FBTyxFQUFFLElBQUk7b0JBQ2IsTUFBTSxFQUFDLE1BQU07b0JBQ2IsU0FBUyxFQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQztpQkFDeEI7Z0JBQ0QsVUFBVSxFQUFFLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQztnQkFDN0IsTUFBTSxFQUFDLENBQUMsa0JBQWtCLENBQUM7Z0JBQzNCLElBQUksRUFBQztvQkFDSCxRQUFRLEVBQUMsQ0FBQyxTQUFTLENBQUM7b0JBQ3BCLFVBQVUsRUFBQyxFQUFDLGFBQWEsRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLEdBQUcsRUFBQztpQkFDL0M7Z0JBQ0QsTUFBTSxFQUFDLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUM7Z0JBQ3pDLE1BQU0sRUFBQztvQkFDTjt3QkFDQyxNQUFNLEVBQUMsZUFBZTt3QkFDdEIsTUFBTSxFQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxZQUFZLEVBQUMsUUFBUSxDQUFDOzRCQUN0RCxDQUFDLFlBQVksRUFBQyxRQUFRLENBQUMsRUFBQyxDQUFDLFlBQVksRUFBQyxRQUFRLENBQUM7NEJBQy9DLENBQUMs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QkFDRCxNQUFNLEVBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDO2dCQUNwQixPQUFPLEVBQUMsRUFBRTtnQkFDVixXQUFXLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQzthQUMvQztTQUNELENBQUE7SUFDRixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHZHcmFwaERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cblx0cHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICAgICAgcmV0dXJuIHtcblx0XHRcdGNvbnRhaW5lcklkOiAndGVzdC1DaGFydCcsXG5cdFx0XHRsaWJPcHRpb25zOntcblx0XHRcdFx0Y2hhcnQ6IHtcblx0XHRcdFx0XHRcdFwiaGVpZ2h0XCI6NTUwLFxuXHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiAxNTAwLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6XCJhcmVhXCIsXG5cdFx0XHRcdFx0XHRcInRvb2xiYXJcIjp7XCJzaG93XCI6dHJ1ZX1cblx0XHRcdFx0fSxcblx0XHRcdFx0ZGF0YUxhYmVsczoge1wiZW5hYmxlZFwiOmZhbHNlfSxcblx0XHRcdFx0Y29sb3JzOltcInJnYmEoMTUsMjAwLDI1NSlcIl0sXG5cdFx0XHRcdGZpbGw6e1xuXHRcdFx0XHRcdFx0XCJjb2xvcnNcIjpbXCIjMGZjOGZmXCJdLFxuXHRcdFx0XHRcdFx0XCJncmFkaWVudFwiOntcIm9wYWNpdHlGcm9tXCI6MC41LFwib3BhY2l0eVRvXCI6MC4xfVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdHJva2U6e1wiY3VydmVcIjpcInN0cmFpZ2h0XCIsXCJ3aWR0aFwiOlsyLDFdfSxcblx0XHRcdFx0c2VyaWVzOltcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjpcIlJlZGRpc2ggdmFsdWVcIixcblx0XHRcdFx0XHRcdFwiZGF0YVwiOltbXCIyMDE5LTA4LTAxXCIsXCI3NzAuMTdcIl0sW1wiMjAxOS0wOC0wMlwiLFwiNjQ1LjAzXCJdLFxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTAzXCIsXCI3MDkuMzJcIl0sW1wiMjAxOS0wOC0wNFwiLFwiNzA4LjExXCJdLFxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTA1XCIsXCI3MDYuNTlcIl0sW1wiMjAxOS0wOC0wNlwiLFwiNjA3LjI4XCJdLFxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTA3XCIsXCI0OTQuNTlcIl0sW1wiMjAxOS0wOC0wOFwiLFwiNjM2LjgxXCJdLFxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTA5XCIsXCI3MDkuMDRcIl0sW1wiMjAxOS0wOC0xMFwiLFwiNzE3LjMxXCJdLFxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTExXCIsXCI4MDUuNjFcIl0sW1wiMjAxOS0wOC0xMlwiLFwiNzU4LjYwXCJdLFxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTEzXCIsXCI2MTIuODJcIl0sW1wiMjAxOS0wOC0xNFwiLFwiNjA4LjkwXCJdLFxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTE1XCIsXCI3MzQuNjhcIl0sW1wiMjAxOS0wOC0xNlwiLFwiODM4LjU0XCJdLFxuXHRcdFx0XHRcdFx0XHRbXCIyMDE5LTA4LTE3XCIsXCI2OTIuODhcIl1dXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSxcblx0XHRcdFx0Z3JpZDp7XG5cdFx0XHRcdFx0XCJib3JkZXJDb2xvclwiOlwiI2U3ZTdlN1wiLFxuXHRcdFx0XHRcdFwic3Ryb2tlRGFzaEFycmF5XCI6Myxcblx0XHRcdFx0XHRcInhheGlzXCI6e1wibGluZXNcIjp7XCJzaG93XCI6dHJ1ZX19XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1hcmtlcnM6e1wic2l6ZVwiOjMsXCJob3ZlclwiOntcInNpemVcIjo2fX0sXG5cdFx0XHRcdHhheGlzOntcblx0XHRcdFx0XHRcdFwiYXhpc0JvcmRlclwiOntcInNob3dcIjp0cnVlLFwiY29sb3JcIjpcIiNmNGY2ZmNcIn0sXG5cdFx0XHRcdFx0XHRcImxhYmVsc1wiOnt9LFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6XCJkYXRldGltZVwiLFwidGlja0Ftb3VudFwiOjZcblx0XHRcdFx0fSxcblx0XHRcdFx0eWF4aXM6W1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwic2hvd1wiOnRydWUsXG5cdFx0XHRcdFx0XHRcInNob3dBbHdheXNcIjpmYWxzZSxcblx0XHRcdFx0XHRcdFwib3Bwb3NpdGVcIjpmYWxzZSxcblx0XHRcdFx0XHRcdFwicmV2ZXJzZWRcIjpmYWxzZSxcblx0XHRcdFx0XHRcdFwibG9nYXJpdGhtaWNcIjpmYWxzZSxcblx0XHRcdFx0XHRcdFwiZm9yY2VOaWNlU2NhbGVcIjpmYWxzZSxcblx0XHRcdFx0XHRcdFwiZmxvYXRpbmdcIjpmYWxzZSxcblx0XHRcdFx0XHRcdFwibGFiZWxzXCI6IHtcblx0XHRcdFx0XHRcdFx0XHRcInNob3dcIjp0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFwibWluV2lkdGhcIjowLFxuXHRcdFx0XHRcdFx0XHRcdFwibWF4V2lkdGhcIjoxNjAsXG5cdFx0XHRcdFx0XHRcdFx0XCJvZmZzZXRYXCI6MCxcblx0XHRcdFx0XHRcdFx0XHRcIm9mZnNldFlcIjowLFxuXHRcdFx0XHRcdFx0XHRcdFwicm90YXRlXCI6MCxcblx0XHRcdFx0XHRcdFx0XHRcInBhZGRpbmdcIjoyMCxcblx0XHRcdFx0XHRcdFx0XHRcInN0eWxlXCI6IHsgXCJjb2xvcnNcIjpbXSwgXCJmb250U2l6ZVwiOlwiMTFweFwiLCBcImNzc0NsYXNzXCI6XCJcIiB9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XCJheGlzQm9yZGVyXCI6e1wic2hvd1wiOnRydWUsXCJjb2xvclwiOlwiI2Y0ZjZmY1wiLFwib2Zmc2V0WFwiOjAsXCJvZmZzZXRZXCI6MH0sXG5cdFx0XHRcdFx0XHRcImF4aXNUaWNrc1wiOntcInNob3dcIjpmYWxzZSxcImNvbG9yXCI6XCIjNzg5MDlDXCIsXCJ3aWR0aFwiOjYsXCJvZmZzZXRYXCI6MCxcIm9mZnNldFlcIjowfSxcblx0XHRcdFx0XHRcdFwidGl0bGVcIjp7XCJ0ZXh0XCI6XCJQIFRvdGFsZSDCsENcIixcInJvdGF0ZVwiOjkwLFwib2Zmc2V0WVwiOjAsXCJvZmZzZXRYXCI6MCxcInN0eWxlXCI6e1wiZm9udFNpemVcIjpcIjExcHhcIixcImNzc0NsYXNzXCI6XCJcIn19LFxuXHRcdFx0XHRcdFx0XCJ0b29sdGlwXCI6e1wiZW5hYmxlZFwiOmZhbHNlLFwib2Zmc2V0WFwiOjB9LFxuXHRcdFx0XHRcdFx0XCJjcm9zc2hhaXJzXCI6e1wic2hvd1wiOnRydWUsXCJwb3NpdGlvblwiOlwiZnJvbnRcIixcInN0cm9rZVwiOntcImNvbG9yXCI6XCIjYjZiNmI2XCIsXCJ3aWR0aFwiOjEsXCJkYXNoQXJyYXlcIjowfX1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHRcdGxlZ2VuZDp7XCJzaG93XCI6dHJ1ZX0sXG5cdFx0XHRcdHRvb2x0aXA6e30sXG5cdFx0XHRcdGFubm90YXRpb25zOntcInlheGlzXCI6W10sXCJ4YXhpc1wiOltdLFwicG9pbnRzXCI6W119XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=