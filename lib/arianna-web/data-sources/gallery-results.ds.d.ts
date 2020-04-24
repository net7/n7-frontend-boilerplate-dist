import { DataSource } from '@n7-frontend/core';
export declare class AwGalleryResultsDS extends DataSource {
    private GALLERY_RESULTS_MOCK;
    private pagination;
    protected transform(data: any): {
        res: any[];
        pagination: any;
    };
    chunks(a: any, size: any): any[];
    addPagination: (page: any, totalPages: any, size: any) => void;
    makePagination: (totalPages: any, currentPage: any) => any[];
}
