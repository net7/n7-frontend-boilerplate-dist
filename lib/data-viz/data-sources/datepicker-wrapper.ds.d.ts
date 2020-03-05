import { DataSource } from '@n7-frontend/core';
export declare class DvDatepickerWrapperDS extends DataSource {
    protected _datepicker: any;
    protected transform(data: any): any;
    openDatepicker(): void;
    closeDatepicker(): void;
    setLabel(payload: any): void;
    toggleDropDown(): void;
}
