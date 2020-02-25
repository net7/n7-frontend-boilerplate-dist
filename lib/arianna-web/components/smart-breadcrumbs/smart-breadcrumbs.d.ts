import { ElementRef, AfterViewInit } from '@angular/core';
/**
 * Interface for a single BreadcrumbsComponent's "Item"
 *
 * @property label (required)
 * @property payload (required)
 * @property classes (optional)
 * @property _meta (optional)
 *
 */
export interface ISmartBreadcrumbsItem {
    /**
     * item's label
     */
    label: string;
    /**
     * action click's payload
     */
    payload: any;
    /**
     * additional html classes
     */
    classes?: any;
    /**
     * additional info useful for the component's logic
     */
    _meta?: any;
}
/**
 * Interface for BreadcrumbsComponent's "Data"
 *
 * @property items (required)
 * @property classes (optional)
 *
 */
export interface ISmartBreadcrumbsData {
    /**
     * each item renders a breadcrumb level
     */
    items: ISmartBreadcrumbsItem[];
    /**
     * additional html classes
     */
    classes?: any;
}
export declare class SmartBreadcrumbsComponent implements AfterViewInit {
    data: ISmartBreadcrumbsData;
    emit: any;
    bcol: ElementRef;
    bcdiv: ElementRef;
    ngAfterViewInit(): void;
    onClick(payload: any): void;
    tippyBuilder: (node: any, content: any) => void;
    getSidePadding: (node: any) => number;
}
