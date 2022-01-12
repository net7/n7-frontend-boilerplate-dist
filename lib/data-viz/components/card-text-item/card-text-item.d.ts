export declare type CardTextItemData = {
    text: string;
    payload?: any;
    classes?: any;
};
export declare class CardTextItemComponent {
    data: CardTextItemData;
    emit: (type: string, payload: any) => void;
    onClick(payload: any): void;
}
