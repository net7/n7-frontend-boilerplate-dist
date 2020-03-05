import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
export declare class MainLayoutDS extends LayoutDataSource {
    protected configuration: any;
    protected mainState: any;
    protected router: any;
    protected route: any;
    protected titleService: any;
    options: any;
    pageTitle: string;
    onInit({ configuration, mainState, router, options, titleService, route, }: {
        configuration: any;
        mainState: any;
        router: any;
        options: any;
        titleService: any;
        route: any;
    }): void;
    onNavigate(payload: any): void;
    onRouterChanged(): void;
    private _onRouterNavigate;
}
