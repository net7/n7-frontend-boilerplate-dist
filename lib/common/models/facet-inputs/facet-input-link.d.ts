import { FacetInput } from './facet-input';
export declare class FacetInputLink extends FacetInput {
    private facetValue;
    protected transform(): any[];
    setActive(facetValue: any): void;
    private _isActive;
    clear(): void;
}
