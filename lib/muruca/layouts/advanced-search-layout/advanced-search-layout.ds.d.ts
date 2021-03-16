import { Router } from '@angular/router';
import { LayoutDataSource } from '@n7-frontend/core';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { MainStateService } from '../../../common/services/main-state.service';
import { MrFormModel } from '../../models/form.model';
export declare class MrAdvancedSearchLayoutDS extends LayoutDataSource {
    protected router: Router;
    protected configuration: ConfigurationService;
    protected mainState: MainStateService;
    protected configId: string;
    protected initialState: {};
    pageConfig: any;
    form: MrFormModel;
    onInit(payload: any): void;
    protected updateHeadTitle(): void;
    onSubmit({ state }: {
        state: any;
    }): void;
    onReset(): void;
    protected addTranslations(pageConfig: any): void;
}
