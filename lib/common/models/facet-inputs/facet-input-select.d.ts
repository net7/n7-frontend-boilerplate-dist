import { FacetInput } from './facet-input';
export declare class FacetInputSelect extends FacetInput {
    protected transform(): {
        type: string;
        id: string;
        label: any;
        disabled: any;
        options: {
            value: string;
            label: string;
        }[];
        payload: {
            facetId: any;
            source: string;
        };
        _meta: {
            facetId: any;
        };
    };
    setActive(facetValue: any): void;
}
