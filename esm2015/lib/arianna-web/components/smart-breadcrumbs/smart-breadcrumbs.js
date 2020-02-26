/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/components/smart-breadcrumbs/smart-breadcrumbs.ts
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
        this.tippyBuilder = (/**
         * @param {?} node
         * @param {?} content
         * @return {?}
         */
        (node, content) => {
            /*
                Builds tippy data for a node.
            */
            tippy(node, {
                content,
                interactive: true,
                arrow: true,
                theme: 'light-border no-padding',
                appendTo: document.body // silence tippy interactive warning
            });
        });
        this.getSidePadding = (/**
         * @param {?} node
         * @return {?}
         */
        node => {
            return ((+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
                + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0]));
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.bcdiv && this.bcol) {
            /** @type {?} */
            var parentWidth = this.bcdiv.nativeElement.clientWidth - this.getSidePadding(this.bcdiv.nativeElement);
            /** @type {?} */
            var childWidth = this.bcol.nativeElement.clientWidth;
            /** @type {?} */
            var liArray = this.bcol.nativeElement.children;
            console.log({ parentWidth, childWidth });
            if (parentWidth === childWidth) { // collapse condition
                // collapse condition
                /** @type {?} */
                let i = 1 // Skip element in position 0
                ;
                while (parentWidth === childWidth && i < liArray.length - 1) { // Skip last element
                    // Skip last element
                    /** @type {?} */
                    let tippyData = document.createElement('ol') // initialize tippy data
                    ;
                    tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                    tippyData.appendChild(liArray[i].cloneNode(true)); // add <li> to tippy data (<ol>)
                    liArray[i].children[0].innerText = '…'; // convert to ellipsis
                    liArray[i].className = 'n7-breadcrumbs__item-ellipsis'; // set class to list item
                    this.tippyBuilder(liArray[i], tippyData); // append tooltip to ellipsis
                    // this.data.items[i].classes = 'n7-breadcrumbs__label-ellipsis'   // set class to ellipsis anchor
                    i++;
                    // update widths
                    parentWidth = this.bcdiv.nativeElement.clientWidth - this.getSidePadding(this.bcdiv.nativeElement);
                    childWidth = this.bcol.nativeElement.clientWidth;
                }
            }
        }
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
                template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <n7-anchor-wrapper [classes]=\"item.classes\"\n                [data]=\"item.anchor\"\n                (clicked)=\"onClick($event)\">\n                    {{ item.label }}\n                </n7-anchor-wrapper>\n            </li>\n        </ol>\n    </nav>\n</div>"
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
    SmartBreadcrumbsComponent.prototype.tippyBuilder;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.getSidePadding;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXN0IsMkNBaUJDOzs7Ozs7SUFiQyxzQ0FBYzs7Ozs7SUFJZCx3Q0FBYTs7Ozs7SUFJYix3Q0FBYzs7Ozs7SUFJZCxzQ0FBWTs7Ozs7Ozs7OztBQVVkLDJDQVNDOzs7Ozs7SUFMQyxzQ0FBK0I7Ozs7O0lBSS9CLHdDQUFjOztBQVFoQixNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBeUNFLGlCQUFZOzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQy9COztjQUVFO1lBQ0YsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDVixPQUFPO2dCQUNQLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxvQ0FBb0M7YUFDN0QsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUFBO1FBRUQsbUJBQWM7Ozs7UUFBRyxJQUFJLENBQUMsRUFBRTtZQUN0QixPQUFPLENBQ0wsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2tCQUNyRixDQUFDLENBQUMs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LS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJSRUFEQ1JVTUJTLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiSXRlbVwiXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTbWFydEJyZWFkY3J1bWJzSXRlbSB7XG4gIC8qKlxuICAgKiBpdGVtJ3MgbGFiZWxcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiRGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNtYXJ0QnJlYWRjcnVtYnNEYXRhIHtcbiAgLyoqXG4gICAqIGVhY2ggaXRlbSByZW5kZXJzIGEgYnJlYWRjcnVtYiBsZXZlbFxuICAgKi9cbiAgaXRlbXM6IElTbWFydEJyZWFkY3J1bWJzSXRlbVtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNtYXJ0LWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LWJyZWFkY3J1bWJzLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBkYXRhOiBJU21hcnRCcmVhZGNydW1ic0RhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgQFZpZXdDaGlsZCgnYmNvbCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBiY29sOiBFbGVtZW50UmVmXG4gIEBWaWV3Q2hpbGQoJ2JjZGl2JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGJjZGl2OiBFbGVtZW50UmVmXG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmJjZGl2ICYmIHRoaXMuYmNvbCkge1xuICAgICAgdmFyIHBhcmVudFdpZHRoID0gdGhpcy5iY2Rpdi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5nZXRTaWRlUGFkZGluZyh0aGlzLmJjZGl2Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICB2YXIgY2hpbGRXaWR0aCA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICB2YXIgbGlBcnJheSA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuXG4gICAgICBjb25zb2xlLmxvZyh7IHBhcmVudFdpZHRoLCBjaGlsZFdpZHRoIH0pXG4gICAgICBpZiAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGgpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xsYXBzZSBjb25kaXRpb25cbiAgICAgICAgbGV0IGkgPSAxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIGVsZW1lbnQgaW4gcG9zaXRpb24gMFxuICAgICAgICB3aGlsZSAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGggJiYgaSA8IGxpQXJyYXkubGVuZ3RoIC0gMSkgeyAgICAgIC8vIFNraXAgbGFzdCBlbGVtZW50XG4gICAgICAgICAgbGV0IHRpcHB5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJykgICAgICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemUgdGlwcHkgZGF0YVxuICAgICAgICAgIHRpcHB5RGF0YS5jbGFzc05hbWUgPSAnbjctc21hcnQtYnJlYWRjcnVtYnNfX3RpcHB5LWNvbnRlbnQnXG4gICAgICAgICAgdGlwcHlEYXRhLmFwcGVuZENoaWxkKGxpQXJyYXlbaV0uY2xvbmVOb2RlKHRydWUpKSAgICAgICAgICAgICAgIC8vIGFkZCA8bGk+IHRvIHRpcHB5IGRhdGEgKDxvbD4pXG4gICAgICAgICAgbGlBcnJheVtpXS5jaGlsZHJlblswXS5pbm5lclRleHQgPSAn4oCmJyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udmVydCB0byBlbGxpcHNpc1xuICAgICAgICAgIGxpQXJyYXlbaV0uY2xhc3NOYW1lID0gJ243LWJyZWFkY3J1bWJzX19pdGVtLWVsbGlwc2lzJyAgICAgICAgICAvLyBzZXQgY2xhc3MgdG8gbGlzdCBpdGVtXG4gICAgICAgICAgdGhpcy50aXBweUJ1aWxkZXIobGlBcnJheVtpXSwgdGlwcHlEYXRhKSAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCB0b29sdGlwIHRvIGVsbGlwc2lzXG4gICAgICAgICAgLy8gdGhpcy5kYXRhLml0ZW1zW2ldLmNsYXNzZXMgPSAnbjctYnJlYWRjcnVtYnNfX2xhYmVsLWVsbGlwc2lzJyAgIC8vIHNldCBjbGFzcyB0byBlbGxpcHNpcyBhbmNob3JcbiAgICAgICAgICBpKytcbiAgICAgICAgICAvLyB1cGRhdGUgd2lkdGhzXG4gICAgICAgICAgcGFyZW50V2lkdGggPSB0aGlzLmJjZGl2Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggLSB0aGlzLmdldFNpZGVQYWRkaW5nKHRoaXMuYmNkaXYubmF0aXZlRWxlbWVudClcbiAgICAgICAgICBjaGlsZFdpZHRoID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgdGlwcHlCdWlsZGVyID0gKG5vZGUsIGNvbnRlbnQpID0+IHtcbiAgICAvKlxuICAgICAgICBCdWlsZHMgdGlwcHkgZGF0YSBmb3IgYSBub2RlLlxuICAgICovXG4gICAgdGlwcHkobm9kZSwge1xuICAgICAgY29udGVudCxcbiAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgYXJyb3c6IHRydWUsXG4gICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5IC8vIHNpbGVuY2UgdGlwcHkgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgIH0pXG4gIH1cblxuICBnZXRTaWRlUGFkZGluZyA9IG5vZGUgPT4geyAvLyByZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBzdW0gb2YgbGVmdCBhbmQgcmlnaHQgcGFkZGluZ3NcbiAgICByZXR1cm4gKFxuICAgICAgKCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKS5tYXRjaCgvXFxkKy8pWzBdKVxuICAgICAgKyAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKS5tYXRjaCgvXFxkKy8pWzBdKVxuICAgIClcbiAgfVxuXG59XG4iXX0=