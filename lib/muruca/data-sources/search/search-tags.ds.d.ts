import { DataSource } from '@n7-frontend/core';
import { TagData } from '@n7-frontend/components';
export declare class MrSearchTagsDS extends DataSource {
    hasFilters: boolean;
    protected transform(data: any): TagData[];
}
