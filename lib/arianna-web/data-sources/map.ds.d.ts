import { DataSource } from '@n7-frontend/core';
export declare class AwMapDS extends DataSource {
    protected transform: (data: any) => import("@n7-frontend/components").MapData;
}
