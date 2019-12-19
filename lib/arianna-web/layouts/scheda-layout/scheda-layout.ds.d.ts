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
    bubbleChartSectionTitle: string;
    similarItemsSectionTitle: string;
    metadataSectionTitle: string;
    hasMetadata: boolean;
    hasBubbles: boolean;
    bubblesEnabled: boolean;
    hasSimilarItems: boolean;
    imageViewerIstance: any;
    sidebarIsSticky: boolean;
    treeMaxHeight: string;
    onInit({ configuration, mainState, router, options, titleService, communication }: {
        configuration: any;
        mainState: any;
        router: any;
        options: any;
        titleService: any;
        communication: any;
    }): void;
    onDestroy(): void;
    getNavigation(id: any): any;
    setTree(tree: any): void;
    getTree: () => any;
    updateNavigation(data: any): void;
    loadItem(id: any): any;
    loadContent(response: any): void;
    collapseSidebar(): void;
    private _sidebarStickyControl;
}
