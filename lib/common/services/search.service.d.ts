import { Subject } from 'rxjs';
import { FacetInput } from '../models';
export declare type FilterOperators = '=' | '>' | '<' | '>=' | '<=' | '<>' | 'LIKE';
export declare type FacetTypes = 'value' | 'range';
export declare type FacetOperators = 'OR' | 'AND';
export interface ISearchConfig {
    totalCount: number;
    facets: any;
    page: any;
    results: any;
    fields: any;
}
export interface IFacet {
    id: string;
    type: FacetTypes;
    operator: FacetOperators;
    hasStaticData?: boolean;
    searchData?: string[];
    data?: any;
}
export interface IFilter {
    facetId: string;
    value: number | string | (number | string)[] | null;
    searchIn: Array<{
        key: string;
        operator?: FilterOperators;
    }>;
    isArray?: boolean;
    context?: 'internal' | 'external';
    target?: string;
}
export declare class SearchModel {
    private _id;
    private _filters;
    private _facets;
    private _inputs;
    private _page;
    private _totalCount;
    private _config;
    private _results$;
    constructor(id: string, config: ISearchConfig);
    getId: () => string;
    getFilters: () => IFilter[];
    getFacets: () => IFacet[];
    getInputs: () => FacetInput[];
    getConfig: () => ISearchConfig;
    getTotalCount: () => number;
    getFields: () => any;
    getResults$: () => Subject<any[]>;
    setResults: (results: any) => void;
    updateFilter(facetId: any, value: any, remove?: boolean): void;
    clear(): void;
    updateFiltersFromQueryParams(queryParams: any, clearAll?: boolean): void;
    updateInputsFromFilters(): void;
    updateFacets(facets: any): void;
    updateTotalCount(totalCount: any): void;
    updateFacet(facetId: any, data: any): void;
    reset(): void;
    getRequestParams(): {
        facets: IFacet[];
        page: any;
        results: any;
        filters: {
            facetId: string;
            value: string | number | (string | number)[];
            searchIn: {
                key: string;
                operator?: FilterOperators;
            }[];
        }[];
    };
    getInternalFilters(): {
        facetId: string;
        value: string | number | (string | number)[];
        searchIn: {
            key: string;
            operator?: FilterOperators;
        }[];
    }[];
    filtersAsQueryParams(filters: any): any;
    getFiltersByFacetId(facetId: string): IFilter[];
    getInputByFacetId(facetId: string): FacetInput;
    setInputData(facetId: any, data: any): void;
    filterTarget(target: any): void;
    setSearchConfigOrderBy(orderBy: any): void;
    setSearchConfigDirection(direction: any): void;
    setSearchConfigType(type: any): void;
    setPageConfigOffset(offset: any): void;
    setPageConfigLimit(limit: any): void;
    private _clearInputs;
    private _filterData;
    private _filterDataEquals;
    private _filterDataGreaterThan;
    private _filterDataLessThan;
    private _filterDataGreaterOrEquals;
    private _filterDataLessOrEquals;
    private _filterDataNotEqual;
    private _filterDataLike;
    private _setFilters;
    private _setFacets;
    private _setPage;
    private _setTotalCount;
    private _setInputs;
    private _setInputsData;
    private _getRequestFacets;
}
export declare class SearchService {
    static queryParams: any;
    private _models;
    add(id: string, config: ISearchConfig): void;
    remove(id: string): void;
    model(id: string): SearchModel;
}
