import { DataSource } from '@n7-frontend/core';
import { MrFormWrapperAccordionData } from '../components/form-wrapper-accordion/form-wrapper-accordion';
export declare class MrFormWrapperAccordionDS extends DataSource {
    protected transform(data: MrFormWrapperAccordionData): MrFormWrapperAccordionData;
    onReset(): void;
    toggleGroup(groupId: any): void;
}
