import { DataSource } from '@n7-frontend/core';
import { IHeaderData } from '@n7-frontend/components';
export declare class HeaderDS extends DataSource {
    protected transform(data: any): IHeaderData;
    onCurrentNavChange(payload: any): void;
}
