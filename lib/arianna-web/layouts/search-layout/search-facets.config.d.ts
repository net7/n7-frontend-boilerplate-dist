declare const _default: {
    totalCount: number;
    facets: ({
        id: string;
        type: string;
        hasStaticData?: undefined;
        data?: undefined;
        operator?: undefined;
        limit?: undefined;
        order?: undefined;
        searchData?: undefined;
    } | {
        id: string;
        type: string;
        hasStaticData: boolean;
        data: {
            value: string;
            label: string;
        }[];
        operator?: undefined;
        limit?: undefined;
        order?: undefined;
        searchData?: undefined;
    } | {
        id: string;
        type: string;
        operator: string;
        limit: number;
        order: string;
        hasStaticData?: undefined;
        data?: undefined;
        searchData?: undefined;
    } | {
        id: string;
        type: string;
        searchData: string[];
        hasStaticData?: undefined;
        data?: undefined;
        operator?: undefined;
        limit?: undefined;
        order?: undefined;
    })[];
    fields: ({
        inputs: ({
            type: string;
            facetId: string;
            placeholder: string;
            filterConfig: {
                delay: number;
                minChars: number;
                searchIn: {
                    key: string;
                    operator: string;
                }[];
                isArray?: undefined;
            };
        } | {
            type: string;
            facetId: string;
            filterConfig: {
                searchIn: {
                    key: string;
                    operator: string;
                }[];
                delay?: undefined;
                minChars?: undefined;
                isArray?: undefined;
            };
            placeholder?: undefined;
        } | {
            type: string;
            facetId: string;
            filterConfig: {
                isArray: boolean;
                searchIn: {
                    key: string;
                    operator: string;
                }[];
                delay?: undefined;
                minChars?: undefined;
            };
            placeholder?: undefined;
        })[];
        header?: undefined;
    } | {
        header: {
            label: string;
            classes: string;
        };
        inputs: ({
            type: string;
            facetId: string;
            filterConfig: {
                isArray: boolean;
                context: string;
                target: string;
                searchIn: {
                    key: string;
                    operator: string;
                }[];
                delay?: undefined;
                minChars?: undefined;
                limit?: undefined;
            };
            placeholder?: undefined;
            emptyState?: undefined;
        } | {
            type: string;
            facetId: string;
            placeholder: string;
            filterConfig: {
                delay: number;
                minChars: number;
                context: string;
                target: string;
                searchIn: {
                    key: string;
                    operator: string;
                }[];
                isArray?: undefined;
                limit?: undefined;
            };
            emptyState?: undefined;
        } | {
            type: string;
            facetId: string;
            emptyState: {
                label: string;
            };
            filterConfig: {
                isArray: boolean;
                limit: number;
                searchIn: {
                    key: string;
                    operator: string;
                }[];
                context?: undefined;
                target?: undefined;
                delay?: undefined;
                minChars?: undefined;
            };
            placeholder?: undefined;
        })[];
    })[];
    results: {
        order: {
            type: string;
            key: string;
            direction: string;
        };
        fields: {
            id: string;
            highlight: boolean;
            limit: number;
        }[];
    };
    page: {
        offset: number;
        limit: number;
    };
};
export default _default;
