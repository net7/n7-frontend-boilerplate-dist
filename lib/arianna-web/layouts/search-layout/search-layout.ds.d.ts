import { LayoutDataSource } from '@n7-frontend/core';
export declare class AwSearchLayoutDS extends LayoutDataSource {
    private communication;
    private configuration;
    private mainState;
    private search;
    options: any;
    onInit({ configuration, mainState, options, communication, search }: {
        configuration: any;
        mainState: any;
        options: any;
        communication: any;
        search: any;
    }): void;
}
