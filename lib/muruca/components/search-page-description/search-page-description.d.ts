export declare type SearchPageDescriptionData = {
    text: string;
    link: {
        text: string;
        payload: any;
    };
};
export declare class MrSearchPageDescriptionComponent {
    data: SearchPageDescriptionData;
    emit: (type: string, payload: any) => void;
    onClick(payload: any): void;
}
