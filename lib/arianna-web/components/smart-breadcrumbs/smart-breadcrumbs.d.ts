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
export interface SmartBreadcrumbsItem {
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
export interface SmartBreadcrumbsData {
    /**
     * each item renders a breadcrumb level
     */
    items: SmartBreadcrumbsItem[];
    /**
     * additional html classes
     */
    classes?: any;
}
export declare class SmartBreadcrumbsComponent implements AfterViewInit {
    data: SmartBreadcrumbsData;
    emit: any;
    bcol: ElementRef;
    bcdiv: ElementRef;
    ngAfterViewInit(): void;
    onClick(payload: any): void;
    /**
     * Builds tippy data for a node.
     */
    tippyBuilder: (node: any, content: any) => import("tippy.js").Instance<import("tippy.js").Props>[];
    getWidths: (parent: ElementRef<any>, child: ElementRef<any>) => {
        parentWidth: number;
        childWidth: any;
    };
    getSidePadding: (node: any) => number;
}
