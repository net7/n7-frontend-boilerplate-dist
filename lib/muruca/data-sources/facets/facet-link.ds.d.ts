import { DataSource } from '@n7-frontend/core';
import { InputLinkData } from '@n7-frontend/components';
import { FacetDataSource } from './facet-datasource';
export declare class FacetLinkDS extends DataSource implements FacetDataSource {
    id: string;
    value: any;
    private isUpdate;
    protected transform(data: InputLinkData): InputLinkData;
    setValue(value: any, update?: boolean): void;
    toggleValue(linkValue: any): void;
    getValue: () => any;
    clear(): void;
}
