import { DataSource } from '@n7-frontend/core';
export declare class AwTreeDS extends DataSource {
    static dataCache: any;
    private rootId;
    private currentId;
    private activeId;
    protected transform(tree: any): any;
    load(data: any): void;
    build(id: any): void;
    setActive(id: any): void;
    highlightActive(): void;
    private _getCachedData;
    private _normalize;
    private _getParent;
    private _getTreePath;
    private _getTree;
    private _getTreeItem;
}
