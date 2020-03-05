import { DataSource } from '@n7-frontend/core';
export declare class DvInnerTitleDS extends DataSource {
    protected transform(): {
        title: {
            main: {
                text: string;
                classes: string;
            };
            secondary: {
                text: string;
                classes: string;
            };
        };
    };
}
