import { MapData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
export declare class MrMapDS extends DataSource {
    id: string;
    mapInstance: any;
    protected transform(data: any): MapData;
}
