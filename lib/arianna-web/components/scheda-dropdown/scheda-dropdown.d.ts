import { Icon } from '@n7-frontend/components';
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
}
