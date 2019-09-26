import { DataSource } from '@n7-frontend/core';
import { IBreadcrumbsData } from '@n7-frontend/components';
export declare class BreadcrumbsDS extends DataSource {
    protected transform(data: any): IBreadcrumbsData | null;
}
