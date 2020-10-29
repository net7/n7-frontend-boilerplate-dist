import { DataSource } from '@n7-frontend/core';
export declare class MrSearchPageTitleDS extends DataSource {
    protected transform(): {
        title: {
            main: {
                text: any;
            };
        };
    };
}
