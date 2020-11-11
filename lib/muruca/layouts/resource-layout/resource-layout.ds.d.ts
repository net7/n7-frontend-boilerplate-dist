import { LayoutDataSource } from '@n7-frontend/core';
import { Observable } from 'rxjs';
export declare class MrResourceLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private mainState;
    private configId;
    private pageConfig;
    tabConfig: any;
    id: string;
    tab: string;
    slug: string;
    errorTitle: string;
    errorDescription: string;
    onInit(payload: any): void;
    /** Request the configured widgets data */
    pageRequest$(id: any, onError: (err: any) => void): Observable<any>;
    handleResponse(response: any): void;
    /** Load all the configured widgets */
    private initSections;
    private updateHeadTitle;
}
