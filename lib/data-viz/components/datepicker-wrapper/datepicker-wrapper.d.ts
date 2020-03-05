export interface DatepickerWrapperData {
    select: Select;
    datepicker: any;
    payload?: any;
}
interface Select {
    id: string;
    hidden: boolean;
    icon?: string;
    label: string;
    items: DropdownItems[];
    classes?: string;
}
interface DropdownItems {
    text: string;
    payload: any;
    classes?: string;
}
export declare class DatepickerWrapperComponent {
    data: DatepickerWrapperData;
    emit: any;
    onClick(payload: any): void;
    toggleDropDown(payload: any): void;
}
export {};
