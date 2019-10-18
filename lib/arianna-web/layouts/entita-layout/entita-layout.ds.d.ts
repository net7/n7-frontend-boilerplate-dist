import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwEntitaLayoutDS extends LayoutDataSource {
    protected configuration: any;
    protected mainState: any;
    protected router: any;
    protected titleService: any;
    options: any;
    pageTitle: string;
    myResponse: any;
    selectedTab: string;
    navHeader: any;
    currentId: string;
    currentPage: any;
    pageSize: number;
    private communication;
    onInit({ configuration, mainState, router, options, titleService, communication }: {
        configuration: any;
        mainState: any;
        router: any;
        options: any;
        titleService: any;
        communication: any;
    }): void;
    getNavigation(id: any): any;
    handleNavUpdate: (tab: any) => void;
    updateWidgets(data: any): void;
    loadItem(id: any, tab: any): any;
    loadContent(res: any): void;
}
