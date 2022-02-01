import * as i0 from "@angular/core";
export declare type CardTextItemData = {
    text: string;
    payload?: any;
    classes?: any;
};
export declare class CardTextItemComponent {
    data: CardTextItemData;
    emit: (type: string, payload: any) => void;
    onClick(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardTextItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardTextItemComponent, "dv-card-text-item", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
