import { HistogramRangeData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
import { FacetDataSource } from './facet-datasource';
declare type FACET_VALUE = string;
export declare class FacetHistogramDS extends DataSource implements FacetDataSource {
    id: string;
    value: FACET_VALUE;
    isUpdate: boolean;
    protected transform({ links }: {
        links: any;
    }): HistogramRangeData;
    setValue(value: any, update?: boolean): void;
    getValue: () => string;
    clear(): void;
}
export {};
