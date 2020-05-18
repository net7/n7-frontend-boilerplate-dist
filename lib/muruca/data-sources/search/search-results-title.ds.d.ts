import { DataSource } from '@n7-frontend/core';
export declare class MrSearchResultsTitleDS extends DataSource {
    protected transform(data: any): {
        title: {
            main: {
                text: any;
            };
            secondary: {
                text: any;
            };
        };
        actions: {
            select: {
                label: any;
                options: any;
                payload: string;
            };
        };
    };
}
