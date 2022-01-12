import { TableData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
export declare class TableItemDS extends DataSource {
    protected transform(data: TableData): TableData;
}
