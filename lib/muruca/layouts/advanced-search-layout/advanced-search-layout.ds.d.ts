import { LayoutDataSource } from '@n7-frontend/core';
import { MrFormModel } from '../../models/form.model';
export declare class MrAdvancedSearchLayoutDS extends LayoutDataSource {
    private configuration;
    private mainState;
    private configId;
    pageConfig: any;
    form: MrFormModel;
    onInit(payload: any): void;
    private updateHeadTitle;
    onSubmit({ state }: {
        state: any;
    }): void;
    onReset(): void;
}
