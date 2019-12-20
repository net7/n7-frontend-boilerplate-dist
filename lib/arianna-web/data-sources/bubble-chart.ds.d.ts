import { DataSource } from '@n7-frontend/core';
export declare class AwBubbleChartDS extends DataSource {
    chartData: any;
    draw: any;
    selected: string[];
    filters: any[];
    closedEyes: any[];
    tippyList: any[];
    focusedBubble: string;
    protected transform(data: any): {
        data: any;
        smallView: {
            data: any;
            fontRendering: any;
            containerId: string;
            width: number;
            height: number;
            shuffle: any;
            transition: any;
            sizeRange: number[];
            selected: string[];
            colorMatch: {
                domain: any[];
                range: any[];
            };
        };
        setDraw: (draw: any) => any;
        fontRendering: any;
        containerId: string;
        width: number;
        height: number;
        shuffle: any;
        transition: any;
        sizeRange: number[];
        selected: string[];
        colorMatch: {
            domain: any[];
            range: any[];
        };
    };
    updateChart: (res: any) => void;
    smartSlice: (d: any, length?: any) => any;
    handleBubbleClick: (payload: any) => void;
    tippyMaker: (bubbles: any) => void;
}
