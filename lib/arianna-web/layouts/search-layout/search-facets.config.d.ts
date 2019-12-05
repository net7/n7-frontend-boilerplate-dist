declare const _default: {
    totalCount: number;
    facets: ({
        id: string;
        type: string;
        data?: undefined;
        operator?: undefined;
        limit?: undefined;
        order?: undefined;
        metadata?: undefined;
    } | {
        id: string;
        type: string;
        data: {
            value: string;
            label: string;
        }[];
        operator?: undefined;
        limit?: undefined;
        order?: undefined;
        metadata?: undefined;
    } | {
        id: string;
        type: string;
        operator: string;
        limit: number;
        order: string;
        data: any[];
        metadata?: undefined;
    } | {
        id: string;
        type: string;
        metadata: string[];
        data: any[];
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
        } | {
            type: string;
            facetId: string;
            filterConfig: {
                limit: number;
                searchIn: {
                    key: string;
                    operator: string;
                }[];
                isArray?: undefined;
                context?: undefined;
                target?: undefined;
                delay?: undefined;
                minChars?: undefined;
            };
            placeholder?: undefined;
        })[];
    } | {
        header: {
            label: string;
            classes: string;
        };
        inputs: {
            type: string;
            facetId: string;
            label: string;
            filterConfig: {
                searchIn: {
                    key: string;
                    operator: string;
                }[];
            };
        }[];
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
