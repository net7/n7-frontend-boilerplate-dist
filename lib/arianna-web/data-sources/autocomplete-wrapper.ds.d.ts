import { DataSource } from '@n7-frontend/core';
export declare class AwAutocompleteWrapperDS extends DataSource {
    protected transform(data: any): {
        suggestion: any[];
        loading: boolean;
    } | {
        suggestion: any[];
        loading?: undefined;
    };
    /**
     * Given a string, it trims it to the specified length.
     *
     * @param string an input string
     * @param limit character limit
     * @returns the resulting trimmed string
     */
    private stringTrim;
}
