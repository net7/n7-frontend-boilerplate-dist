import { DataSource } from '@n7-frontend/core';
import { InputLinkData } from '@n7-frontend/components';
import { FacetDataSource } from './facet-datasource';
declare type FACET_VALUE = string[];
export declare class FacetLinkDS extends DataSource implements FacetDataSource {
    id: string;
    value: FACET_VALUE;
    protected transform(data: InputLinkData): InputLinkData;
    setValue(value: FACET_VALUE, update?: boolean): void;
    getValue: () => string[];
    clear(): void;
}
export {};
