import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwPatrimonioLayoutDS extends LayoutDataSource {
    /**
    * If you are not using these variables (from your-layout.ts),
    * remove them from here too.
    */
    protected configuration: any;
    protected mainState: any;
    protected router: any;
    protected titleService: any;
    options: any;
    pageTitle: string;
    /**
    * If you are not using these variables (from your-layout.ts),
    * remove them from onInit() parameters and inside the function.
    */
    onInit({ configuration, mainState, router, options, titleService }: {
        configuration: any;
        mainState: any;
        router: any;
        options: any;
        titleService: any;
    }): void;
}
