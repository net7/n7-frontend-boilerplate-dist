import { InputCheckboxData, InputLinkData, InputTextData, InputSelectData, FacetHeaderData } from '@n7-frontend/components';
interface SearchFacetsInput {
    id: string;
    type: 'text' | 'checkbox' | 'select' | 'link';
    data: InputCheckboxData | InputLinkData | InputSelectData | InputTextData;
    delay?: number;
    value?: string | string[] | boolean | null;
}
interface SearchFacetsSection {
    header: FacetHeaderData;
    inputs: SearchFacetsInput[];
    classes?: string;
}
export interface SearchFacetsConfig {
    sections: SearchFacetsSection[];
    classes?: string;
}
export {};