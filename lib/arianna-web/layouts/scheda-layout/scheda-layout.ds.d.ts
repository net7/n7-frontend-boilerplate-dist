import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwSchedaLayoutDS extends LayoutDataSource {
    static tree: any;
    private destroyed$;
    private stickyControlTrigger$;
    private communication;
    protected configuration: any;
    protected mainState: any;
    protected router: any;
    protected titleService: any;
    options: any;
    pageTitle: string;
    hasBreadcrumb: boolean;
    contentParts: any;
    tree: any;
    sidebarCollapsed: boolean;
    relatedEntitiesHeader: string;
    similarItemsSectionTitle: string;
    metadataSectionTitle: string;
    hasMetadata: boolean;
    hasRelatedEntities: boolean;
    hasSimilarItems: boolean;
    hasDigitalObjects: boolean;
    digitalObjects: any;
    currentDigitalObject: any;
    currentDigitalObjectIndex: number;
    imageViewerIstance: any;
    sidebarIsSticky: boolean;
    treeMaxHeight: string;
    contentIsLoading: boolean;
    currentId: string | null;
    emptyLabel: string;
    /** Switch loaded-content and loaded-empty states */
    hasContent: boolean;
    /** String to render in the loaded-empty state */
    emptyStateString: string;
    externalUrlText: string;
    hasContextMenu: () => boolean;
    /** Name of query that should be used (chosen in config) */
    private getTreeQuery;
    onInit({ configuration, mainState, router, options, titleService, communication, }: {
        configuration: any;
        mainState: any;
        router: any;
        options: any;
        titleService: any;
        communication: any;
    }): void;
    onDestroy(): void;
    getMetadataSectionTitle(): any;
    getNavigation(id: any): any;
    setTree(tree: any): void;
    getTree: () => any;
    updateNavigation(text: any): void;
    loadItem(id: any): any;
    loadContent(response: any): void;
    collapseSidebar(): void;
    private _sidebarStickyControl;
    getFields(response: any): {
        key: any;
        value: any;
        order: any;
        label: string;
    }[];
    changeDigitalObject(payload: any): void;
    private normalizeDigitalObjects;
}
