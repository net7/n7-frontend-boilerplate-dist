import { LayoutDataSource } from '@n7-frontend/core';
export declare class MainLayoutDS extends LayoutDataSource {
    protected configuration: any;
    protected mainState: any;
    protected router: any;
    protected titleService: any;
    options: any;
    pageTitle: string;
    onInit({ configuration, mainState, router, options, titleService }: {
        configuration: any;
        mainState: any;
        router: any;
        options: any;
        titleService: any;
    }): void;
    onNavigate(payload: any): void;
    private _onRouterNavigate;
}
