import { LayoutDataSource } from '@n7-frontend/core';
export declare class SearchFacetsLayoutDS extends LayoutDataSource {
    private searchService;
    private inputsDS;
    searchConfig: any;
    facets: any;
    onInit(payload: any): void;
    initInputs(): void;
    updateInputValue(id: any, newValue: any): void;
    updateInputData(id: string, newData: any): void;
    clearInput(id: string): void;
    clearInputs(): void;
}
