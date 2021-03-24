import { DataSource } from '@n7-frontend/core';
export declare class AwLinkedObjectsDS extends DataSource {
    currentPage: number;
    totalPages: number;
    totalObjects: number;
    pageSize: number;
    context: string;
    loadedData: any;
    loadingData: boolean;
    paths: any;
    protected transform(data: any): any;
    checkForMore: (force?: boolean) => void;
    handleIncomingData: (incomingData: any) => void;
    /**
     * Dynamically returns the data object for each HTML component
     *  data: {
     *     previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
     *     pagination: { first, last, links, next, prev, select }
     *   }
     */
    private unpackData;
}
