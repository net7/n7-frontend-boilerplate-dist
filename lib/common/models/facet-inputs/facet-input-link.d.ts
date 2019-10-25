import { FacetInput } from './facet-input';
export declare class FacetInputLink extends FacetInput {
    protected transform(): {
        type: string;
        id: string;
        text: string;
        counter: number;
        payload: {
            facetId: any;
            source: string;
            value: string;
        };
        classes: string;
        _meta: {
            facetId: any;
            value: string;
        };
    }[];
    setActive(facetValue: any): void;
}
