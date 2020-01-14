import { DataSource } from '@n7-frontend/core';
export declare class AwSidebarHeaderDS extends DataSource {
    protected transform(data: any): {
        iconLeft: string;
        text: any;
        iconRight: string;
        classes: string;
        payload: string;
    };
    toggleSidebar(): void;
}
