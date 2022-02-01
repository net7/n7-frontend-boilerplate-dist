import { AfterViewChecked, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare type ReadMoreData = {
    height: number;
    labels: {
        more: string;
        less: string;
    };
};
export declare class ReadMoreComponent implements AfterViewChecked {
    data: ReadMoreData;
    root: ElementRef;
    collapsed: boolean;
    hasReadmore: boolean;
    wrapperHeight: number;
    clientHeight: number;
    _loaded: boolean;
    /**
     * Determine if the view is taller than the given height limit,
     * if it is, render the "Read-more" button.
     */
    ngAfterViewChecked(): void;
    handleToggle(): void;
    updateWrapperHeight(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReadMoreComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReadMoreComponent, "mr-read-more", never, { "data": "data"; }, {}, never, ["*"]>;
}
