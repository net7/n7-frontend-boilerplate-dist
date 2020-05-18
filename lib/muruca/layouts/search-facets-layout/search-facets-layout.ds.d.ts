import { Subject } from 'rxjs';
import { LayoutDataSource } from '@n7-frontend/core';
import { SearchFacetsConfig } from './search-facets-config';
export declare class SearchFacetsLayoutDS extends LayoutDataSource {
    data: SearchFacetsConfig;
    ready$: Subject<void>;
    onInit(payload: any): void;
    onDestroy(): void;
    initInputs(): void;
    updateInputValue(id: any, newValue: any): void;
    updateInputData(id: any, newData: any): void;
    clearInput(id: any): void;
    clearInputs(): void;
}
