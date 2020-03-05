import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { Observable } from 'rxjs';
export declare class AwEntitaLayoutDS extends LayoutDataSource {
    protected configuration: any;
    protected mainState: any;
    protected router: any;
    protected location: any;
    protected titleService: any;
    protected route: any;
    options: any;
    pageTitle: string;
    showFields: boolean;
    myResponse: any;
    selectedTab: string;
    navHeader: any;
    currentId: string;
    currentSlug: string;
    currentPage: any;
    pageSize: number;
    bubblesSize: number;
    bubblesEnabled: boolean;
    private communication;
    onInit({ configuration, mainState, router, route, location, options, titleService, communication, }: {
        configuration: any;
        mainState: any;
        router: any;
        route: any;
        location: any;
        options: any;
        titleService: any;
        communication: any;
    }): void;
    updateComponent: (id: any, data: any, options?: any) => void;
    getNavigation(id: any): any;
    drawPagination: () => void;
    handlePageNavigation: () => void;
    handleNavUpdate: (tab: any) => void;
    updateWidgets(data: any): void;
    updateBubbes(data: any): void;
    loadItem(id: any, slug: any, tab: any): Observable<any>;
    loadContent(res: any): void;
    private _getPaginationParams;
    getNavBasePath(): string;
}
