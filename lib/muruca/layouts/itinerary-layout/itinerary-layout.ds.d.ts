import { Observable } from 'rxjs';
import { LayoutDataSource } from '@n7-frontend/core';
export declare class MrItineraryLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private mainState;
    private configId;
    private pageConfig;
    content: string | null;
    title: string | null;
    errorTitle: string;
    errorDescription: string;
    onInit(payload: any): void;
    pageRequest$(id: any, onError: (err: any) => void): Observable<any>;
    handleResponse(response: any): void;
    private updateTitle;
    private updateContent;
    private updateMetadata;
    private initSections;
    private updateHeadTitle;
}
