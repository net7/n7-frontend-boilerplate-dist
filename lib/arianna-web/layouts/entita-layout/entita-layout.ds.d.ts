import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwEntitaLayoutDS extends LayoutDataSource {
    protected configuration: any;
    protected mainState: any;
    protected router: any;
    protected location: any;
    protected titleService: any;
    options: any;
    pageTitle: string;
    myResponse: any;
    selectedTab: string;
    navHeader: any;
    currentId: string;
    currentPage: any;
    pageSize: number;
    bubblesSize: number;
    bubblesEnabled: boolean;
    bubbleLoaded: boolean;
    private communication;
    onInit({ configuration, mainState, router, location, options, titleService, communication }: {
        configuration: any;
        mainState: any;
        router: any;
        location: any;
        options: any;
        titleService: any;
        communication: any;
    }): void;
    getNavigation(id: any): any;
    handlePageNavigation: () => void;
    handleNavUpdate: (tab: any) => void;
    updateWidgets(data: any): void;
    updateBubbes(data: any): void;
    loadItem(id: any, tab: any): any;
    loadContent(res: any): void;
}
