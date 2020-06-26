import { LayoutDataSource } from '@n7-frontend/core';
import { MrSearchService } from '../../services/search.service';
export declare class MrSearchLayoutDS extends LayoutDataSource {
    private configuration;
    private mainState;
    private configId;
    searchService: MrSearchService;
    facetsConfig: any;
    pageConfig: any;
    totalResultsText: string | null;
    onInit(payload: any): void;
    handleResponse(response: any): void;
    updateActiveFilters(state: any, linksResponse: any): void;
    private getPaginationParams;
    private updateHeadTitle;
}
