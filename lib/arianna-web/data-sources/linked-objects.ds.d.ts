import { DataSource } from '@n7-frontend/core';
export declare class AwLinkedObjectsDS extends DataSource {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    context: string;
    protected transform(data: any): any[] | {
        pagination: {
            first: {
                payload: string;
                classes: string;
            };
            prev: {
                payload: string;
                classes: string;
            };
            next: {
                payload: string;
                classes: string;
            };
            last: {
                payload: string;
                classes: string;
            };
            links: any[];
            select: {
                label: string;
                options: {
                    text: number;
                    selected: boolean;
                }[];
                payload: string;
            };
        };
        previews: any[];
        result?: undefined;
        actions?: undefined;
    } | {
        result: any[];
        actions: {
            label: string;
        }[];
        pagination?: undefined;
        previews?: undefined;
    };
    handleShowMoreClick: (incomingData: any) => void;
    makePagination: (totalPages: any, currentPage: any) => any[];
    private unpackData;
}
