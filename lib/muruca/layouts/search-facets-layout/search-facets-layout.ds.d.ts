import { LayoutDataSource } from '@n7-frontend/core';
import { SearchFacetsConfig } from './search-facets-config';
export declare class SearchFacetsLayoutDS extends LayoutDataSource {
    data: SearchFacetsConfig;
    onInit(payload: any): void;
    onDestroy(): void;
    initInputs(): void;
}
