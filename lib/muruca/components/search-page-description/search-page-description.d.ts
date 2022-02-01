import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<MrSearchPageDescriptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MrSearchPageDescriptionComponent, "mr-search-page-description", never, { "data": "data"; "emit": "emit"; }, {}, never, never>;
}
