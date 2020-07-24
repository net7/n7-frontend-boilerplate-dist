import { LayoutDataSource } from '@n7-frontend/core';
import { Observable } from 'rxjs';
export declare class MrStaticLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private mainState;
    html: any;
    onInit(payload: any): void;
    /**
     * Make a request to serverless based on the url slug
     * Example:
     * - base-url/static/sample-page
     * - base-url/static/another-page
     */
    pageRequest$(slug: string, onError: (err: any) => void): Observable<any>;
    handleResponse(response: any): void;
    setHtml(title: any, body: any): void;
    updateHeadTitle(pageTitle: string): void;
}
