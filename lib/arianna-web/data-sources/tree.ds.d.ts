import { DataSource } from '@n7-frontend/core';
export declare class AwTreeDS extends DataSource {
    currentItem: string;
    toggleNav(): void;
    protected transform(data: any): any;
    updateTree(data: any, parents: any, id: any): void;
    selectTreeItem(id: any, data: any): void;
    toggleSidebar(): void;
    private parseData;
    private parseTree;
}
