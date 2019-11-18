import { DataSource } from '@n7-frontend/core';
export declare class AwTreeDS extends DataSource {
    currentItem: any;
    icons: any;
    protected transform(data: any): any;
    updateTree(data: any, parents: any, id: any): void;
    private updateTreeData;
    selectTreeItem(id: any, data: any): void;
    toggleSidebar(): void;
    parseData(response: any): void;
    private parseTree;
}
