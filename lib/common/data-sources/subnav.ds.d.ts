import { DataSource } from '@n7-frontend/core';
export declare class SubnavDS extends DataSource {
    protected transform(data: any): {
        classes: string;
        items: any;
    };
    setActive(id: any): void;
    getActive(): any;
}
