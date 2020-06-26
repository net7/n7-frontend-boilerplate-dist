import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
export declare class AwMapLayoutDS extends LayoutDataSource {
    protected configuration: any;
    protected mainState: any;
    protected router: any;
    protected location: any;
    protected titleService: any;
    protected route: any;
    options: any;
    pageTitle: string;
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
}
