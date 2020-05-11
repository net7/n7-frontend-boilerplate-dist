declare type QueryParams = {
    [key: string]: string;
};
declare type StateObject = {
    [key: string]: string | string[];
};
declare const _default: {
    stateToQueryParams(state: StateObject): QueryParams;
    queryParamsToState(queryParams: QueryParams): StateObject;
};
export default _default;
