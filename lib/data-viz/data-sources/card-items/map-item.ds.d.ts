import { ChartData, MapData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
export declare class MapItemDS extends DataSource {
    id: string;
    type: string;
    instance: any;
    protected transform(data: ChartData): ChartData;
    update(newData: Partial<MapData>): void;
}
