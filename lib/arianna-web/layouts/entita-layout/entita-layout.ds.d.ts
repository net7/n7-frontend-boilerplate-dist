import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwEntitaLayoutDS extends LayoutDataSource {
    protected configuration: any;
    protected mainState: any;
    protected router: any;
    protected titleService: any;
    options: any;
    pageTitle: string;
    myResponse: any;
    entityTitle: string;
    selectedTab: string;
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
    updateWidgets(data: any): void;
    loadItem(id: any, tab: any): any;
    loadContent(res: any): void;
}
