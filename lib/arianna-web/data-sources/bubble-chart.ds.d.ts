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
        data: any;
        setDraw: (draw: any) => any;
    };
    updateChart: (res: any) => void;
    handleBubbleClick: (payload: any) => void;
    tippyMaker: (bubbles: any) => void;
}
