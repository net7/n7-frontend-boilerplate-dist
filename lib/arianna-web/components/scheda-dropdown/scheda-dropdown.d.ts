import { Icon } from '@n7-frontend/components';
import * as i0 from "@angular/core";
export declare type SchedaDropdownData = {
    header: {
        label: string;
        icon: Icon;
        payload: any;
    };
    items: {
        label: string;
        payload: any;
        selected: false;
        type: string;
    }[];
    classes?: any;
};
export declare class SchedaDropdownComponent {
    data: SchedaDropdownData;
    emit: (type: string, payload: any) => void;
    onClick(ev: Event, payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedaDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedaDropdownComponent, "aw-scheda-dropdown", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
