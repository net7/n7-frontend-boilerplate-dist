import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwSchedaLayoutDS extends LayoutDataSource {
    /**
    * If you are not using these variables (from your-layout.ts),
    * remove them from here too.
    */
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
    /**
    * If you are not using these variables (from your-layout.ts),
    * remove them from onInit() parameters and inside the function.
    */
    onInit({ configuration, mainState, router, options, titleService, communication }: {
        configuration: any;
        mainState: any;
        router: any;
        options: any;
        titleService: any;
        communication: any;
    }): void;
    getNavigation(id: any): any;
    updateNavigation(data: any): void;
    loadItem(id: any): any;
    loadContent(response: any): void;
    private parseTree;
    collapseSidebar(): void;
}
