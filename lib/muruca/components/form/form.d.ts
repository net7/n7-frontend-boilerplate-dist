import { OnInit, TemplateRef } from '@angular/core';
import { MrFormConfigGroup, MrFormConfigSection } from '../../interfaces/form.interface';
import { MrFormModel } from '../../models/form.model';
export declare class MrFormComponent implements OnInit {
    form: MrFormModel;
    group?: MrFormConfigGroup;
    templateRef: TemplateRef<any>;
    sections: MrFormConfigSection[];
    ngOnInit(): void;
}
