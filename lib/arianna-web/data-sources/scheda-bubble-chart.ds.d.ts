import { DataSource } from '@n7-frontend/core';
export declare class AwSchedaBubbleChartDS extends DataSource {
    private thresholdShowTitle;
    private thresholdShowValue;
    protected transform(data: any): {
        containerId: string;
        containerWidth: number;
        containerHeight: number;
        isForceSimulationEnabled: boolean;
        maxBubblesSelected: number;
    };
}
