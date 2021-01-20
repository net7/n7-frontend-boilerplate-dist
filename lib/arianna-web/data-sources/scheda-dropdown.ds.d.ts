import { DataSource } from '@n7-frontend/core';
import { SchedaDropdownData } from '../components';
export declare class AwSchedaDropdownDS extends DataSource {
    protected transform(response: any): SchedaDropdownData;
    toggle(): void;
    onChange(payload: any): void;
}
