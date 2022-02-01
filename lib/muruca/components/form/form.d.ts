import { OnInit, TemplateRef } from '@angular/core';
import { MrFormConfigGroup, MrFormConfigSection } from '../../interfaces/form.interface';
import { MrFormModel } from '../../models/form.model';
import * as i0 from "@angular/core";
export declare class MrFormComponent implements OnInit {
    form: MrFormModel;
    group?: MrFormConfigGroup;
    templateRef: TemplateRef<any>;
    sections: MrFormConfigSection[];
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MrFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrFormComponent, "mr-form", never, { "form": "form"; "group": "group"; }, {}, ["templateRef"], never>;
}
