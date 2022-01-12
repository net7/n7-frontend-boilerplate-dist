import { ChartData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import { ChartResponseData } from '../../types/response.types';
export declare class ApexChartItemDS extends DataSource {
    id: string;
    type: string;
    instance: any;
    protected transform(data: ChartData): ChartData;
    update(newData: ChartResponseData): void;
}
