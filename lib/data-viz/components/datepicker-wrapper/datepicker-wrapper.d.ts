export interface IDatepickerWrapperData {
    select: ISelect;
    datepicker: any;
    payload?: any;
}
interface ISelect {
    id: string;
    hidden: boolean;
    icon?: string;
    label: string;
    items: IDropdownItems[];
    classes?: string;
}
interface IDropdownItems {
    text: string;
    payload: any;
    classes?: string;
}
export declare class DatepickerWrapperComponent {
    data: IDatepickerWrapperData;
    emit: any;
    onClick(payload: any): void;
    toggleDropDown(payload: any): void;
}
export {};
