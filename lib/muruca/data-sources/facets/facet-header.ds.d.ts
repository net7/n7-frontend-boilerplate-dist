import { DataSource } from '@n7-frontend/core';
import { FacetHeaderData } from '@n7-frontend/components';
import { FacetDataSource } from './facet-datasource';
declare type FACET_VALUE = string | null;
export declare class FacetHeaderDS extends DataSource implements FacetDataSource {
    id: string;
    value: FACET_VALUE;
    protected transform(data: FacetHeaderData): FacetHeaderData;
    setValue(value: FACET_VALUE, update?: boolean): void;
    getValue: () => string;
    toggle(): void;
    isOpen(): boolean;
    clear(): void;
}
export {};
