import { DataSource } from '@n7-frontend/core';
export declare class AwEntitaNavDS extends DataSource {
    protected transform(param: any): {
        items: any[];
        payload: string;
    };
}
