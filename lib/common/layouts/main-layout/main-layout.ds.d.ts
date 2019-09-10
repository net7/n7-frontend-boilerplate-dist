import { LayoutDataSource } from '@n7-frontend/core';
export declare class MainLayoutDS extends LayoutDataSource {
    protected configuration: any;
    protected mainState: any;
    protected router: any;
    protected mainStateMap: {
        widgetId: string;
        streamKey: string;
    }[];
    options: any;
    onInit({ configuration, mainState, router, options }: {
        configuration: any;
        mainState: any;
        router: any;
        options: any;
    }): void;
    onNavigate(payload: any): void;
}
