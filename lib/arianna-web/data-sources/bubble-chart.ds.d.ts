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
        containerId: string;
        width: number;
        height: number;
        transition: number;
        sizeRange: number[];
        selected: string[];
        colorMatch: {
            domain: string[];
            range: string[];
        };
        data: any;
        setDraw: (draw: any) => any;
    };
    updateChart: (res: any) => void;
    handleBubbleClick: (payload: any) => void;
    tippyMaker: (bubbles: any) => void;
}
