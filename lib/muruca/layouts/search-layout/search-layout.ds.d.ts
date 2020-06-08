import { LayoutDataSource } from '@n7-frontend/core';
import { MrSearchService } from '../../services/search.service';
declare type SectionStates = 'LOADING' | 'EMPTY' | 'OK' | 'KO';
export declare class MrSearchLayoutDS extends LayoutDataSource {
    private configuration;
    private configId;
    searchService: MrSearchService;
    sectionState: {
        [key: string]: SectionStates;
    };
    facetsConfig: any;
    pageConfig: any;
    totalResultsText: string | null;
    onInit(payload: any): void;
    handleResponse(response: any): void;
    updateActiveFilters(state: any, linksResponse: any): void;
    private getPaginationParams;
    setSectionState(id: string, newState: SectionStates): void;
}
export {};
