import { AfterViewChecked, ElementRef } from '@angular/core';
export declare class ReadMoreComponent implements AfterViewChecked {
    data: any;
    emit: any;
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
}
