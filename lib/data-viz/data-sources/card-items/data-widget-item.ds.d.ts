import { DataWidgetData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
export declare class DataWidgetItemDS extends DataSource {
    protected transform(data: DataWidgetData): DataWidgetData;
}
