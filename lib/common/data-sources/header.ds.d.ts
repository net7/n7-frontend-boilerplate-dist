import { DataSource } from '@n7-frontend/core';
import { HeaderData } from '@n7-frontend/components';
export declare class HeaderDS extends DataSource {
    protected transform(data: any): HeaderData;
    onCurrentNavChange(payload: any): void;
    onRouterChange(): void;
    onClick(payload: any): void;
}
