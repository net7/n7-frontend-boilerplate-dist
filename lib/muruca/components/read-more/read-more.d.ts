import { AfterViewChecked, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export declare class ReadMoreComponent implements AfterViewChecked {
    data: any;
    emit: any;
    root: ElementRef;
    state: 'is-expanded' | 'is-collapsed';
    collapsed: BehaviorSubject<boolean>;
    _loaded: boolean;
    /**
     * Determine if the view is taller than the given height limit,
     * if it is, render the "Read-more" button.
     */
    ngAfterViewChecked(): void;
    toggleClass(): void;
    handleToggle(): void;
}
