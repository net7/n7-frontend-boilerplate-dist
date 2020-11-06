import { MrFormModel } from '../../models/form.model';
export declare type MrFormWrapperAccordionData = {
    form: MrFormModel;
};
export declare class MrFormWrapperAccordionComponent {
    data: MrFormWrapperAccordionData;
    emit: (type: string, payload?: any) => void;
    fakeEmit: (type: any, payload?: any) => void;
    onReset(): void;
    onSubmit(): void;
}
