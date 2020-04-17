import { DataSource } from '@n7-frontend/core';
import { InputTextData } from '@n7-frontend/components';
import { FacetDataSource } from './facet-datasource';
declare type FACET_VALUE = string | null;
export declare class FacetTextDS extends DataSource implements FacetDataSource {
    id: string;
    value: FACET_VALUE;
    protected transform(data: InputTextData): InputTextData;
    setValue(value: FACET_VALUE, update?: boolean): void;
    getValue: () => string;
    clear(): void;
}
export {};
