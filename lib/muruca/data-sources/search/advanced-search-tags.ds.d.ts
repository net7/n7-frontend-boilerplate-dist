import { DataSource } from '@n7-frontend/core';
import { TagData } from '@n7-frontend/components';
export declare class MrAdvancedSearchTagsDS extends DataSource {
    protected transform(data: any): TagData[];
}
