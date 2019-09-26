import { DataSource } from '@n7-frontend/core';
export declare class AwHomeBubbleChartDS extends DataSource {
    protected transform(data: any): {
        containerId: string;
        containerWidth: any;
        containerHeight: number;
        isForceSimulationEnabled: boolean;
        maxBubblesSelected: number;
    };
}
