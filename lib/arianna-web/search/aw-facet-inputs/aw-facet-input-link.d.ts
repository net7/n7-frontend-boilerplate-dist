import { AwFacetInput } from './aw-facet-input';
export declare class AwFacetInputLink extends AwFacetInput {
    private facetValue;
    protected transform(): any[];
    setActive(facetValue: any): void;
    private _isActive;
    clear(): void;
}
