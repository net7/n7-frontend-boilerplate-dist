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
            containerId: string;
            setDraw: (draw: any) => any;
            colorMatch: {
                domain: any[];
                range: any[];
            };
            selected: string[];
            sizeRange: number[];
            fontRendering: any;
            height: number;
            width: number;
            transition: any;
            shuffle: any;
        };
        containerId: string;
        setDraw: (draw: any) => any;
        colorMatch: {
            domain: any[];
            range: any[];
        };
        selected: string[];
        sizeRange: number[];
        fontRendering: any;
        height: number;
        width: number;
        transition: any;
        shuffle: any;
    };
    updateChart: (res: any) => void;
    smartSlice: (d: any, length?: any) => any;
    handleBubbleClick: (payload: any) => void;
    tippyMaker: (bubbles: any) => void;
}
