import { DataSource } from '@n7-frontend/core';
import { SearchModel } from '../services/search.service';
export declare class FacetsWrapperDS extends DataSource {
    searchModel: SearchModel;
    protected transform(data: any): {
        groups: any[];
        classes: string;
    };
    toggleGroup({ eventPayload }: {
        eventPayload: any;
    }): void;
    onFacetChange({ eventPayload }: {
        eventPayload: any;
    }): void;
    updateFilteredTarget(target: any): void;
    updateInputLinks(): void;
    getRequestParams: () => {
        facets: import("../services/search.service").IFacet[];
        page: any;
        results: any;
        filters: {
            facetId: string;
            value: string | number | (string | number)[];
            searchIn: {
                key: string;
                operator?: import("../services/search.service").FilterOperators;
            }[];
        }[];
    };
    filtersAsQueryParams: (filters: any) => any;
    updateFiltersFromQueryParams: (queryParams: any) => void;
    getInputByFacetId: (facetId: any) => import("../models").FacetInput;
    filterTarget: (target: any) => void;
    updateInputsFromFilters: () => void;
    private _getSectionClasses;
    private _headerConfig;
}
