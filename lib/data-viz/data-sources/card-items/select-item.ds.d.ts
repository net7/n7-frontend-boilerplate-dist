import { InputSelectData } from '@n7-frontend/components';
import { DataSource } from '@n7-frontend/core';
export declare class SelectItemDS extends DataSource {
    protected transform(data: InputSelectData): InputSelectData;
}
