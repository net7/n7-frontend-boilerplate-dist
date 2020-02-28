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
var SmartBreadcrumbsComponent = /** @class */ (function () {
    function SmartBreadcrumbsComponent() {
        this.tippyBuilder = (/**
         * @param {?} node
         * @param {?} content
         * @return {?}
         */
        function (node, content) {
            /*
                Builds tippy data for a node.
            */
            tippy(node, {
                content: content,
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
        function (node) {
            return ((+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
                + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0]));
        });
    }
    /**
     * @return {?}
     */
    SmartBreadcrumbsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.bcdiv && this.bcol) {
            /** @type {?} */
            var parentWidth = this.bcdiv.nativeElement.clientWidth - this.getSidePadding(this.bcdiv.nativeElement);
            /** @type {?} */
            var childWidth = this.bcol.nativeElement.clientWidth;
            /** @type {?} */
            var liArray = this.bcol.nativeElement.children;
            console.log({ parentWidth: parentWidth, childWidth: childWidth });
            if (parentWidth === childWidth) { // collapse condition
                // collapse condition
                /** @type {?} */
                var i = 1 // Skip element in position 0
                ;
                while (parentWidth === childWidth && i < liArray.length - 1) { // Skip last element
                    // Skip last element
                    /** @type {?} */
                    var tippyData = document.createElement('ol') // initialize tippy data
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
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    SmartBreadcrumbsComponent.prototype.onClick = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
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
    return SmartBreadcrumbsComponent;
}());
export { SmartBreadcrumbsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztBQVc3QiwyQ0FpQkM7Ozs7OztJQWJDLHNDQUFjOzs7OztJQUlkLHdDQUFhOzs7OztJQUliLHdDQUFjOzs7OztJQUlkLHNDQUFZOzs7Ozs7Ozs7O0FBVWQsMkNBU0M7Ozs7OztJQUxDLHNDQUErQjs7Ozs7SUFJL0Isd0NBQWM7O0FBR2hCO0lBQUE7UUF5Q0UsaUJBQVk7Ozs7O1FBQUcsVUFBQyxJQUFJLEVBQUUsT0FBTztZQUMzQjs7Y0FFRTtZQUNGLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ1YsT0FBTyxTQUFBO2dCQUNQLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxvQ0FBb0M7YUFDN0QsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUFBO1FBRUQsbUJBQWM7Ozs7UUFBRyxVQUFBLElBQUk7WUFDbkIsT0FBTyxDQUNMLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztrQkFDckYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVB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OztJQUVELG1EQUtDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJSRUFEQ1JVTUJTLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiSXRlbVwiXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTbWFydEJyZWFkY3J1bWJzSXRlbSB7XG4gIC8qKlxuICAgKiBpdGVtJ3MgbGFiZWxcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiRGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNtYXJ0QnJlYWRjcnVtYnNEYXRhIHtcbiAgLyoqXG4gICAqIGVhY2ggaXRlbSByZW5kZXJzIGEgYnJlYWRjcnVtYiBsZXZlbFxuICAgKi9cbiAgaXRlbXM6IElTbWFydEJyZWFkY3J1bWJzSXRlbVtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNtYXJ0LWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LWJyZWFkY3J1bWJzLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBkYXRhOiBJU21hcnRCcmVhZGNydW1ic0RhdGE7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgQFZpZXdDaGlsZCgnYmNvbCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBiY29sOiBFbGVtZW50UmVmXG4gIEBWaWV3Q2hpbGQoJ2JjZGl2JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGJjZGl2OiBFbGVtZW50UmVmXG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmJjZGl2ICYmIHRoaXMuYmNvbCkge1xuICAgICAgdmFyIHBhcmVudFdpZHRoID0gdGhpcy5iY2Rpdi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5nZXRTaWRlUGFkZGluZyh0aGlzLmJjZGl2Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICB2YXIgY2hpbGRXaWR0aCA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICB2YXIgbGlBcnJheSA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuXG4gICAgICBjb25zb2xlLmxvZyh7IHBhcmVudFdpZHRoLCBjaGlsZFdpZHRoIH0pXG4gICAgICBpZiAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGgpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xsYXBzZSBjb25kaXRpb25cbiAgICAgICAgbGV0IGkgPSAxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIGVsZW1lbnQgaW4gcG9zaXRpb24gMFxuICAgICAgICB3aGlsZSAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGggJiYgaSA8IGxpQXJyYXkubGVuZ3RoIC0gMSkgeyAgICAgIC8vIFNraXAgbGFzdCBlbGVtZW50XG4gICAgICAgICAgbGV0IHRpcHB5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJykgICAgICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemUgdGlwcHkgZGF0YVxuICAgICAgICAgIHRpcHB5RGF0YS5jbGFzc05hbWUgPSAnbjctc21hcnQtYnJlYWRjcnVtYnNfX3RpcHB5LWNvbnRlbnQnXG4gICAgICAgICAgdGlwcHlEYXRhLmFwcGVuZENoaWxkKGxpQXJyYXlbaV0uY2xvbmVOb2RlKHRydWUpKSAgICAgICAgICAgICAgIC8vIGFkZCA8bGk+IHRvIHRpcHB5IGRhdGEgKDxvbD4pXG4gICAgICAgICAgbGlBcnJheVtpXS5jaGlsZHJlblswXS5pbm5lclRleHQgPSAn4oCmJyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udmVydCB0byBlbGxpcHNpc1xuICAgICAgICAgIGxpQXJyYXlbaV0uY2xhc3NOYW1lID0gJ243LWJyZWFkY3J1bWJzX19pdGVtLWVsbGlwc2lzJyAgICAgICAgICAvLyBzZXQgY2xhc3MgdG8gbGlzdCBpdGVtXG4gICAgICAgICAgdGhpcy50aXBweUJ1aWxkZXIobGlBcnJheVtpXSwgdGlwcHlEYXRhKSAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCB0b29sdGlwIHRvIGVsbGlwc2lzXG4gICAgICAgICAgLy8gdGhpcy5kYXRhLml0ZW1zW2ldLmNsYXNzZXMgPSAnbjctYnJlYWRjcnVtYnNfX2xhYmVsLWVsbGlwc2lzJyAgIC8vIHNldCBjbGFzcyB0byBlbGxpcHNpcyBhbmNob3JcbiAgICAgICAgICBpKytcbiAgICAgICAgICAvLyB1cGRhdGUgd2lkdGhzXG4gICAgICAgICAgcGFyZW50V2lkdGggPSB0aGlzLmJjZGl2Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggLSB0aGlzLmdldFNpZGVQYWRkaW5nKHRoaXMuYmNkaXYubmF0aXZlRWxlbWVudClcbiAgICAgICAgICBjaGlsZFdpZHRoID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgdGlwcHlCdWlsZGVyID0gKG5vZGUsIGNvbnRlbnQpID0+IHtcbiAgICAvKlxuICAgICAgICBCdWlsZHMgdGlwcHkgZGF0YSBmb3IgYSBub2RlLlxuICAgICovXG4gICAgdGlwcHkobm9kZSwge1xuICAgICAgY29udGVudCxcbiAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgYXJyb3c6IHRydWUsXG4gICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5IC8vIHNpbGVuY2UgdGlwcHkgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgIH0pXG4gIH1cblxuICBnZXRTaWRlUGFkZGluZyA9IG5vZGUgPT4geyAvLyByZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBzdW0gb2YgbGVmdCBhbmQgcmlnaHQgcGFkZGluZ3NcbiAgICByZXR1cm4gKFxuICAgICAgKCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKS5tYXRjaCgvXFxkKy8pWzBdKVxuICAgICAgKyAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKS5tYXRjaCgvXFxkKy8pWzBdKVxuICAgIClcbiAgfVxuXG59XG4iXX0=