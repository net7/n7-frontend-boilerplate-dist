import { DataSource } from '@n7-frontend/core';
export declare class AwHomeAutocompleteDS extends DataSource {
    protected transform(data: any): {
        results: {
            group: {
                title: any;
                icon: any;
                classes: any;
            };
            items: any;
        }[];
        actions: {
            showMore: {
                text: string;
                payload: {
                    source: string;
                };
            };
        };
        fallback: string;
    };
}
