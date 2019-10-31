import { DataSource } from '@n7-frontend/core';
export declare class AwSearchLayoutTabsDS extends DataSource {
    private selected;
    protected transform(data: any): {
        items: {
            text: string;
            payload: string;
            classes: string;
        }[];
    };
    setSelected(tabId: any): void;
}
