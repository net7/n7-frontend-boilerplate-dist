import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { Observable } from 'rxjs';
export declare class MrResourceLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private mainState;
    private configId;
    private pageConfig;
    onInit(payload: any): void;
    /** Request the configured widgets data */
    pageRequest$(slug: any): Observable<any>;
    handleResponse(response: any): void;
    /** Load all the configured widgets */
    private initSections;
    private updateHeadTitle;
}
