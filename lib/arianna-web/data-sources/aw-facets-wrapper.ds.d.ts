import { DataSource } from '@n7-frontend/core';
import { AwSearchModel } from '../search/aw-search.model';
export declare class AwFacetsWrapperDS extends DataSource {
    searchModel: AwSearchModel;
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
        facets: import("../search/aw-search.model").Facet[];
        page: any;
        results: any;
        filters: ({
            facetId: string;
            value: string | number | (string | number)[];
            searchIn: {
                key: string;
                operator?: import("../search/aw-search.model").FilterOperators;
            }[];
            pagination: {
                totalCount: number;
                limit: number;
                offset: number;
            };
        } | {
            facetId: string;
            value: string | number | (string | number)[];
            searchIn: {
                key: string;
                operator?: import("../search/aw-search.model").FilterOperators;
            }[];
            pagination?: undefined;
        })[];
    };
    filtersAsQueryParams: (filters: any) => any;
    updateFiltersFromQueryParams: (queryParams: any) => void;
    getInputByFacetId: (facetId: any) => import("../search/aw-facet-inputs").AwFacetInput;
    filterTarget: (target: any) => void;
    updateInputsFromFilters: () => void;
    private _getSectionClasses;
    private _headerConfig;
}
