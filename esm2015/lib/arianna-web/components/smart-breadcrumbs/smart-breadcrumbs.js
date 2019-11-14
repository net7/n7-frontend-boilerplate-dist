/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// BREADCRUMBS.ts
//---------------------------
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import tippy from 'tippy.js';
/**
 * Interface for a single BreadcrumbsComponent's "Item"
 *
 * \@property label (required)
 * \@property payload (required)
 * \@property classes (optional)
 * \@property _meta (optional)
 *
 * @record
 */
export function ISmartBreadcrumbsItem() { }
if (false) {
    /**
     * item's label
     * @type {?}
     */
    ISmartBreadcrumbsItem.prototype.label;
    /**
     * action click's payload
     * @type {?}
     */
    ISmartBreadcrumbsItem.prototype.payload;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ISmartBreadcrumbsItem.prototype.classes;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    ISmartBreadcrumbsItem.prototype._meta;
}
/**
 * Interface for BreadcrumbsComponent's "Data"
 *
 * \@property items (required)
 * \@property classes (optional)
 *
 * @record
 */
export function ISmartBreadcrumbsData() { }
if (false) {
    /**
     * each item renders a breadcrumb level
     * @type {?}
     */
    ISmartBreadcrumbsData.prototype.items;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    ISmartBreadcrumbsData.prototype.classes;
}
export class SmartBreadcrumbsComponent {
    constructor() {
        this.ngAfterViewInit = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let parentWidth = this.bcdiv.nativeElement.clientWidth;
            /** @type {?} */
            let childWidth = this.bcol.nativeElement.clientWidth;
            /** @type {?} */
            let liArray = this.bcol.nativeElement.children
            // collapse condition
            ;
            // collapse condition
            if (parentWidth === childWidth) {
                /** @type {?} */
                let tippyData = document.createElement('ol');
                /** @type {?} */
                let i = 1;
                tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                while (parentWidth === childWidth && i < liArray.length - 1) {
                    if (i > 1) {
                        tippyData.appendChild(liArray[i]);
                    }
                    else {
                        tippyData.appendChild(liArray[i]);
                        liArray[i].children[0].innerText = '…';
                    }
                    this.tippyBuilder(liArray[i], tippyData);
                    i++;
                    // update widths
                    parentWidth = this.bcdiv.nativeElement.clientWidth;
                    childWidth = this.bcol.nativeElement.clientWidth;
                }
            }
        });
        this.tippyBuilder = (/**
         * @param {?} node
         * @param {?} content
         * @return {?}
         */
        (node, content) => {
            /*
                Builds tippy data for a node.
            */
            document.body.appendChild(content);
            tippy(node, {
                content,
                // allowHTML: true,
                // trigger: 'manual',
                interactive: true,
                arrow: true,
                theme: 'light-border no-padding',
            });
        });
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
}
SmartBreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'n7-smart-breadcrumbs',
                template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <a class=\"n7-breadcrumbs__label\" (click)=\"onClick(item.payload)\">{{ item.label }}</a>\n            </li>\n        </ol>\n    </nav>\n</div>"
            }] }
];
SmartBreadcrumbsComponent.propDecorators = {
    data: [{ type: Input }],
    emit: [{ type: Input }],
    bcol: [{ type: ViewChild, args: ['bcol', { read: ElementRef, static: false },] }],
    bcdiv: [{ type: ViewChild, args: ['bcdiv', { read: ElementRef, static: false },] }]
};
if (false) {
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.data;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.emit;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.bcol;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.bcdiv;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.ngAfterViewInit;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.tippyBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztBQVc3QiwyQ0FpQkM7Ozs7OztJQWJHLHNDQUFjOzs7OztJQUlkLHdDQUFhOzs7OztJQUliLHdDQUFjOzs7OztJQUlkLHNDQUFZOzs7Ozs7Ozs7O0FBVWhCLDJDQVNDOzs7Ozs7SUFMRyxzQ0FBK0I7Ozs7O0lBSS9CLHdDQUFjOztBQU9sQixNQUFNLE9BQU8seUJBQXlCO0lBSnRDO1FBVUksb0JBQWU7OztRQUFHLEdBQUcsRUFBRTs7Z0JBRWYsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVc7O2dCQUNsRCxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzs7Z0JBQ2hELE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRO1lBRTlDLHFCQUFxQjs7WUFBckIscUJBQXFCO1lBQ3JCLElBQUksV0FBVyxLQUFLLFVBQVUsRUFBRTs7b0JBQ3hCLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzs7b0JBQ3hDLENBQUMsR0FBRyxDQUFDO2dCQUNULFNBQVMsQ0FBQyxTQUFTLEdBQUcscUNBQXFDLENBQUE7Z0JBQzNELE9BQU8sV0FBVyxLQUFLLFVBQVUsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDUCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3FCQUNwQzt5QkFBTTt3QkFDSCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7cUJBQ3pDO29CQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFBO29CQUN4QyxDQUFDLEVBQUUsQ0FBQTtvQkFDSCxnQkFBZ0I7b0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUE7b0JBQ2xELFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUE7aUJBQ25EO2FBQ0o7UUFDTCxDQUFDLEVBQUE7UUFPRCxpQkFBWTs7Ozs7UUFBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUM3Qjs7Y0FFRTtZQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2xDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ1IsT0FBTzs7O2dCQUdQLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUseUJBQXlCO2FBR25DLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQTtJQUVMLENBQUM7Ozs7O0lBdEJHLE9BQU8sQ0FBQyxPQUFPO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUF4Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGtjQUF1QzthQUMxQzs7O21CQUVJLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUNyRCxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBSHZELHlDQUFxQzs7SUFDckMseUNBQW1COztJQUNuQix5Q0FBd0U7O0lBQ3hFLDBDQUEwRTs7SUFFMUUsb0RBeUJDOztJQU9ELGlEQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJSRUFEQ1JVTUJTLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIMm1ybVyZXNvbHZlQm9keSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIEJyZWFkY3J1bWJzQ29tcG9uZW50J3MgXCJJdGVtXCJcbiAqXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNtYXJ0QnJlYWRjcnVtYnNJdGVtIHtcbiAgICAvKipcbiAgICAgKiBpdGVtJ3MgbGFiZWxcbiAgICAgKi9cbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICAgKi9cbiAgICBwYXlsb2FkOiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgICAqL1xuICAgIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTbWFydEJyZWFkY3J1bWJzRGF0YSB7XG4gICAgLyoqXG4gICAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBicmVhZGNydW1iIGxldmVsXG4gICAgICovXG4gICAgaXRlbXM6IElTbWFydEJyZWFkY3J1bWJzSXRlbVtdO1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduNy1zbWFydC1icmVhZGNydW1icycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LWJyZWFkY3J1bWJzLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNtYXJ0QnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSBkYXRhOiBJU21hcnRCcmVhZGNydW1ic0RhdGE7XG4gICAgQElucHV0KCkgZW1pdDogYW55O1xuICAgIEBWaWV3Q2hpbGQoJ2Jjb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgYmNvbDogRWxlbWVudFJlZlxuICAgIEBWaWV3Q2hpbGQoJ2JjZGl2JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGJjZGl2OiBFbGVtZW50UmVmXG5cbiAgICBuZ0FmdGVyVmlld0luaXQgPSAoKSA9PiB7XG4gICAgICAgIGxldFxuICAgICAgICAgICAgcGFyZW50V2lkdGggPSB0aGlzLmJjZGl2Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBjaGlsZFdpZHRoID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBsaUFycmF5ID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5cblxuICAgICAgICAvLyBjb2xsYXBzZSBjb25kaXRpb25cbiAgICAgICAgaWYgKHBhcmVudFdpZHRoID09PSBjaGlsZFdpZHRoKSB7XG4gICAgICAgICAgICBsZXQgdGlwcHlEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKVxuICAgICAgICAgICAgbGV0IGkgPSAxXG4gICAgICAgICAgICB0aXBweURhdGEuY2xhc3NOYW1lID0gJ243LXNtYXJ0LWJyZWFkY3J1bWJzX190aXBweS1jb250ZW50J1xuICAgICAgICAgICAgd2hpbGUgKHBhcmVudFdpZHRoID09PSBjaGlsZFdpZHRoICYmIGkgPCBsaUFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGlwcHlEYXRhLmFwcGVuZENoaWxkKGxpQXJyYXlbaV0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGlwcHlEYXRhLmFwcGVuZENoaWxkKGxpQXJyYXlbaV0pXG4gICAgICAgICAgICAgICAgICAgIGxpQXJyYXlbaV0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJ+KApidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50aXBweUJ1aWxkZXIobGlBcnJheVtpXSwgdGlwcHlEYXRhKVxuICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB3aWR0aHNcbiAgICAgICAgICAgICAgICBwYXJlbnRXaWR0aCA9IHRoaXMuYmNkaXYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICAgICAgICAgIGNoaWxkV2lkdGggPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICB0aXBweUJ1aWxkZXIgPSAobm9kZSwgY29udGVudCkgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAgICAgQnVpbGRzIHRpcHB5IGRhdGEgZm9yIGEgbm9kZS5cbiAgICAgICAgKi9cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgICAgICB0aXBweShub2RlLCB7XG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgLy8gYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgICAgICAgLy8gdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgICAgICAvLyBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgICAgLy8gbWF4V2lkdGg6IDUwMCxcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cbiJdfQ==