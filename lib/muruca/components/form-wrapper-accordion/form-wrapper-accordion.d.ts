import { OnInit, OnDestroy } from '@angular/core';
import { MrFormModel } from '../../models/form.model';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<MrFormWrapperAccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrFormWrapperAccordionComponent, "mr-form-wrapper-accordion", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
