import { LayoutDataSource } from '@n7-frontend/core';
import { Observable } from 'rxjs';
export declare class MrStaticLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private mainState;
    content: string | null;
    title: string | null;
    errorTitle: any;
    errorDescription: any;
    onInit(payload: any): void;
    pageRequest$(slug: string, onError: (err: any) => void): Observable<any>;
    handleResponse(response: any): void;
    setHtml(response: any): void;
    updateHeadTitle(pageTitle: string): void;
}
