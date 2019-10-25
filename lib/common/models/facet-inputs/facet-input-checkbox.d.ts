import { FacetInput } from './facet-input';
export declare class FacetInputCheckbox extends FacetInput {
    protected transform(): {
        type: string;
        id: string;
        label: string;
        payload: {
            facetId: any;
            source: string;
            value: string;
        };
        _meta: {
            facetId: any;
            value: string;
        };
    }[];
    setActive(facetValue: any): void;
}
