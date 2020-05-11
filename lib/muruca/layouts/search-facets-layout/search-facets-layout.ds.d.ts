import { LayoutDataSource } from '@n7-frontend/core';
import { SearchFacetsConfig } from './search-facets-config';
export declare class SearchFacetsLayoutDS extends LayoutDataSource {
    data: SearchFacetsConfig;
    private state;
    onInit(payload: any): void;
    onDestroy(): void;
    initInputs(): void;
    updateInputValue(id: any, newValue: any): void;
    updateInputData(id: any, newData: any): void;
    getState(id?: any): any;
    setState({ value, id }: {
        value: any;
        id: any;
    }): void;
}
