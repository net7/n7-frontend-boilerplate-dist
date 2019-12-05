import { DataSource } from '@n7-frontend/core';
export declare class DvGraphDS extends DataSource {
    protected transform(data: any): {
        containerId: string;
        libOptions: {
            chart: {
                "height": number;
                "width": number;
                "type": string;
                "toolbar": {
                    "show": boolean;
                };
            };
            dataLabels: {
                "enabled": boolean;
            };
            colors: string[];
            fill: {
                "colors": string[];
                "gradient": {
                    "opacityFrom": number;
                    "opacityTo": number;
                };
            };
            stroke: {
                "curve": string;
                "width": number[];
            };
            series: {
                "name": string;
                "data": string[][];
            }[];
            grid: {
                "borderColor": string;
                "strokeDashArray": number;
                "xaxis": {
                    "lines": {
                        "show": boolean;
                    };
                };
            };
            markers: {
                "size": number;
                "hover": {
                    "size": number;
                };
            };
            xaxis: {
                "axisBorder": {
                    "show": boolean;
                    "color": string;
                };
                "labels": {};
                "type": string;
                "tickAmount": number;
            };
            yaxis: {
                "show": boolean;
                "showAlways": boolean;
                "opposite": boolean;
                "reversed": boolean;
                "logarithmic": boolean;
                "forceNiceScale": boolean;
                "floating": boolean;
                "labels": {
                    "show": boolean;
                    "minWidth": number;
                    "maxWidth": number;
                    "offsetX": number;
                    "offsetY": number;
                    "rotate": number;
                    "padding": number;
                    "style": {
                        "colors": any[];
                        "fontSize": string;
                        "cssClass": string;
                    };
                };
                "axisBorder": {
                    "show": boolean;
                    "color": string;
                    "offsetX": number;
                    "offsetY": number;
                };
                "axisTicks": {
                    "show": boolean;
                    "color": string;
                    "width": number;
                    "offsetX": number;
                    "offsetY": number;
                };
                "title": {
                    "text": string;
                    "rotate": number;
                    "offsetY": number;
                    "offsetX": number;
                    "style": {
                        "fontSize": string;
                        "cssClass": string;
                    };
                };
                "tooltip": {
                    "enabled": boolean;
                    "offsetX": number;
                };
                "crosshairs": {
                    "show": boolean;
                    "position": string;
                    "stroke": {
                        "color": string;
                        "width": number;
                        "dashArray": number;
                    };
                };
            }[];
            legend: {
                "show": boolean;
            };
            tooltip: {};
            annotations: {
                "yaxis": any[];
                "xaxis": any[];
                "points": any[];
            };
        };
    };
}
