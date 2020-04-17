import { DataSource } from '@n7-frontend/core';
import { InputCheckboxData } from '@n7-frontend/components';
import { FacetDataSource } from './facet-datasource';
declare type FACET_VALUE = string[];
export declare class FacetCheckboxDS extends DataSource implements FacetDataSource {
    id: string;
    value: FACET_VALUE;
    protected transform(data: InputCheckboxData): InputCheckboxData;
    setValue(value: FACET_VALUE, update?: boolean): void;
    getValue: () => string[];
    clear(): void;
}
export {};
