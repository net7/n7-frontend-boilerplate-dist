import { AwFacetInput } from './aw-facet-input';
export declare class AwFacetInputText extends AwFacetInput {
    protected transform(): {
        type: string;
        id: string;
        label: any;
        disabled: any;
        placeholder: any;
        icon: any;
        inputPayload: {
            trigger: string;
            facetId: any;
            source: string;
        };
        enterPayload: {
            trigger: string;
            facetId: any;
            source: string;
        };
        iconPayload: {
            trigger: string;
            facetId: any;
            source: string;
        };
        _meta: {
            facetId: any;
        };
    };
    setActive(facetValue: any): void;
}
