import { LayoutDataSource } from '@n7-frontend/core';
declare type SectionStates = 'LOADING' | 'EMPTY' | 'OK' | 'KO';
export declare class MrSearchLayoutDS extends LayoutDataSource {
    private configuration;
    private communication;
    private configId;
    private inputsConfig;
    state: {
        [key: string]: string | string[] | null;
    };
    sectionState: {
        [key: string]: SectionStates;
    };
    facetsConfig: any;
    pageConfig: any;
    totalResultsText: string | null;
    onInit(payload: any): void;
    doRequest$(params?: {}): import("rxjs").Observable<{
        sort: any;
        totalCount: number;
        page: {
            current: any;
            limit: number;
        };
        headers: {};
        results: {
            image: string;
            title: string;
            text: string;
        }[];
    }>;
    handleResponse(response: any): void;
    updateActiveFilters(): void;
    private getPaginationParams;
    getState(id?: string): any;
    setState(id: string, value: any): void;
    clearState(): void;
    setSectionState(id: string, newState: SectionStates): void;
    inputIsInternal: (id?: string) => boolean;
    getInputType: (id?: string) => string;
}
export {};
