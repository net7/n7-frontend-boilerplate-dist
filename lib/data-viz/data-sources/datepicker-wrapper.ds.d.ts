import { DataSource } from '@n7-frontend/core';
export declare class DvDatepickerWrapperDS extends DataSource {
    protected _datepicker: any;
    protected transform(data: any): {
        select: {
            id: any;
            hidden: boolean;
            icon: any;
            label: any;
            items: any;
            classes: any;
        };
        datepicker: {
            hidden: boolean;
            data: {
                id: any;
                libOptions: any;
                getInstance: (datepicker: any) => any;
            };
        };
    };
    openDatepicker(): void;
    closeDatepicker(): void;
    setLabel(payload: any): void;
    toggleDropDown(): void;
}
