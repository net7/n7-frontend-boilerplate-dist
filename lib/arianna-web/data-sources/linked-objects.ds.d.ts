import { DataSource } from '@n7-frontend/core';
export declare class AwLinkedObjectsDS extends DataSource {
    currentPage: number;
    totalPages: number;
    totalObjects: number;
    pageSize: number;
    context: string;
    loadedData: any;
    loadingData: boolean;
    protected transform(data: any): any;
    checkForMore: (force?: boolean) => void;
    handleIncomingData: (incomingData: any) => void;
    makePagination: (totalPages: any, currentPage: any) => any[];
    private unpackData;
}
