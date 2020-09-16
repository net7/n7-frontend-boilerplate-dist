import { DataSource } from '@n7-frontend/core';
import { BreadcrumbsData } from '@n7-frontend/components';
export declare class MrBreadcrumbsDS extends DataSource {
    protected transform(data: any): BreadcrumbsData;
}
