import { OnInit, OnDestroy } from '@angular/core';
import { MrFormModel } from '../../models/form.model';
export declare type MrFormWrapperAccordionData = {
    form: MrFormModel;
};
export declare class MrFormWrapperAccordionComponent implements OnInit, OnDestroy {
    data: MrFormWrapperAccordionData;
    emit: (type: string, payload?: any) => void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    fakeEmit: (type: any, payload?: any) => void;
    onReset(): void;
    onSubmit(): void;
}
