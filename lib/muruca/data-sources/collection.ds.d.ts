import { DataSource } from '@n7-frontend/core';
declare type collectionResponse = {
    header: {
        title?: string;
        subtitle?: string;
        button?: any;
    };
    items: {
        text?: string;
        link?: string;
        title?: string;
        type?: string;
        payload?: any;
    }[];
};
export declare class MrCollectionDS extends DataSource {
    id: string;
    protected transform(data: collectionResponse): any;
}
export {};
