import { DataSource } from '@n7-frontend/core';
import { InputSelectData } from '@n7-frontend/components';
import { FacetDataSource } from './facet-datasource';
declare type FACET_VALUE = string | null;
export declare class FacetSelectDS extends DataSource implements FacetDataSource {
    id: string;
    value: FACET_VALUE;
    protected transform(data: InputSelectData): InputSelectData;
    setValue(value: FACET_VALUE, update?: boolean): void;
    getValue: () => FACET_VALUE;
    clear(): void;
}
export {};
