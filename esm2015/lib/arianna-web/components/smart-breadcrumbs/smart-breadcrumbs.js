/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/components/smart-breadcrumbs/smart-breadcrumbs.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//---------------------------
// BREADCRUMBS.ts
//---------------------------
import { Component, Input, ViewChild, ElementRef, } from '@angular/core';
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
export function SmartBreadcrumbsItem() { }
if (false) {
    /**
     * item's label
     * @type {?}
     */
    SmartBreadcrumbsItem.prototype.label;
    /**
     * action click's payload
     * @type {?}
     */
    SmartBreadcrumbsItem.prototype.payload;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    SmartBreadcrumbsItem.prototype.classes;
    /**
     * additional info useful for the component's logic
     * @type {?|undefined}
     */
    SmartBreadcrumbsItem.prototype._meta;
}
/**
 * Interface for BreadcrumbsComponent's "Data"
 *
 * \@property items (required)
 * \@property classes (optional)
 *
 * @record
 */
export function SmartBreadcrumbsData() { }
if (false) {
    /**
     * each item renders a breadcrumb level
     * @type {?}
     */
    SmartBreadcrumbsData.prototype.items;
    /**
     * additional html classes
     * @type {?|undefined}
     */
    SmartBreadcrumbsData.prototype.classes;
}
export class SmartBreadcrumbsComponent {
    constructor() {
        /**
         * Builds tippy data for a node.
         */
        this.tippyBuilder = (/**
         * @param {?} node
         * @param {?} content
         * @return {?}
         */
        (node, content) => tippy(node, {
            content,
            interactive: true,
            arrow: true,
            theme: 'light-border no-padding',
            appendTo: document.body,
        }));
        this.getWidths = (/**
         * @param {?} parent
         * @param {?} child
         * @return {?}
         */
        (parent, child) => {
            /** @type {?} */
            const pw = parent.nativeElement.clientWidth;
            /** @type {?} */
            const cw = child.nativeElement.clientWidth;
            /** @type {?} */
            const pp = this.getSidePadding(parent.nativeElement);
            return { parentWidth: pw - pp, childWidth: cw };
        });
        this.getSidePadding = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => (
        // returns an integer representing the sum of left and right paddings
        (+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
            + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0])));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.bcdiv && this.bcol) {
            let { parentWidth, childWidth } = this.getWidths(this.bcdiv, this.bcol);
            /** @type {?} */
            const liArray = this.bcol.nativeElement.children;
            if (parentWidth === childWidth) { // collapse condition
                // collapse condition
                /** @type {?} */
                let i = 1;
                while (parentWidth === childWidth && i < liArray.length - 1) { // Skip last element
                    // Skip last element
                    /** @type {?} */
                    const tippyData = document.createElement('ol');
                    tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                    tippyData.appendChild(liArray[i].cloneNode(true)); // add <li> to tippy data (<ol>)
                    liArray[i].children[0].innerText = '…'; // convert to ellipsis
                    liArray[i].className = 'n7-breadcrumbs__item-ellipsis'; // set class to list item
                    this.tippyBuilder(liArray[i], tippyData); // append tooltip to ellipsis
                    i += 1;
                    // update widths
                    ({ parentWidth, childWidth } = this.getWidths(this.bcdiv, this.bcol));
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
                template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\r\n    <nav class=\"n7-breadcrumbs__nav\">\r\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\r\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\r\n                <n7-anchor-wrapper [classes]=\"item.classes\"\r\n                [data]=\"item.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    {{ item.label }}\r\n                </n7-anchor-wrapper>\r\n            </li>\r\n        </ol>\r\n    </nav>\r\n</div>"
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
    /**
     * Builds tippy data for a node.
     * @type {?}
     */
    SmartBreadcrumbsComponent.prototype.tippyBuilder;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.getWidths;
    /** @type {?} */
    SmartBreadcrumbsComponent.prototype.getSidePadding;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEdBQ3hDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXN0IsMENBaUJDOzs7Ozs7SUFiQyxxQ0FBYzs7Ozs7SUFJZCx1Q0FBYTs7Ozs7SUFJYix1Q0FBYzs7Ozs7SUFJZCxxQ0FBWTs7Ozs7Ozs7OztBQVVkLDBDQVNDOzs7Ozs7SUFMQyxxQ0FBOEI7Ozs7O0lBSTlCLHVDQUFjOztBQVFoQixNQUFNLE9BQU8seUJBQXlCO0lBTHRDOzs7O1FBMkNFLGlCQUFZOzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUM1QyxPQUFPO1lBQ1AsV0FBVyxFQUFFLElBQUk7WUFDakIsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN4QixDQUFDLEVBQUM7UUFHSCxjQUFTOzs7OztRQUFHLENBQUMsTUFBa0IsRUFBRSxLQUFpQixFQUFFLEVBQUU7O2tCQUM5QyxFQUFFLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXOztrQkFDckMsRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVzs7a0JBQ3BDLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLEdBQUcs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QyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEJSRUFEQ1JVTUJTLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIEJyZWFkY3J1bWJzQ29tcG9uZW50J3MgXCJJdGVtXCJcclxuICpcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNtYXJ0QnJlYWRjcnVtYnNJdGVtIHtcclxuICAvKipcclxuICAgKiBpdGVtJ3MgbGFiZWxcclxuICAgKi9cclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiRGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU21hcnRCcmVhZGNydW1ic0RhdGEge1xyXG4gIC8qKlxyXG4gICAqIGVhY2ggaXRlbSByZW5kZXJzIGEgYnJlYWRjcnVtYiBsZXZlbFxyXG4gICAqL1xyXG4gIGl0ZW1zOiBTbWFydEJyZWFkY3J1bWJzSXRlbVtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1zbWFydC1icmVhZGNydW1icycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LWJyZWFkY3J1bWJzLmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNtYXJ0QnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBTbWFydEJyZWFkY3J1bWJzRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBAVmlld0NoaWxkKCdiY29sJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGJjb2w6IEVsZW1lbnRSZWZcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmNkaXYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgYmNkaXY6IEVsZW1lbnRSZWZcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuYmNkaXYgJiYgdGhpcy5iY29sKSB7XHJcbiAgICAgIGxldCB7IHBhcmVudFdpZHRoLCBjaGlsZFdpZHRoIH0gPSB0aGlzLmdldFdpZHRocyh0aGlzLmJjZGl2LCB0aGlzLmJjb2wpO1xyXG4gICAgICBjb25zdCBsaUFycmF5ID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XHJcbiAgICAgIGlmIChwYXJlbnRXaWR0aCA9PT0gY2hpbGRXaWR0aCkgeyAvLyBjb2xsYXBzZSBjb25kaXRpb25cclxuICAgICAgICBsZXQgaSA9IDE7IC8vIFNraXAgZWxlbWVudCBpbiBwb3NpdGlvbiAwXHJcbiAgICAgICAgd2hpbGUgKHBhcmVudFdpZHRoID09PSBjaGlsZFdpZHRoICYmIGkgPCBsaUFycmF5Lmxlbmd0aCAtIDEpIHsgLy8gU2tpcCBsYXN0IGVsZW1lbnRcclxuICAgICAgICAgIGNvbnN0IHRpcHB5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7IC8vIGluaXRpYWxpemUgdGlwcHkgZGF0YVxyXG4gICAgICAgICAgdGlwcHlEYXRhLmNsYXNzTmFtZSA9ICduNy1zbWFydC1icmVhZGNydW1ic19fdGlwcHktY29udGVudCc7XHJcbiAgICAgICAgICB0aXBweURhdGEuYXBwZW5kQ2hpbGQobGlBcnJheVtpXS5jbG9uZU5vZGUodHJ1ZSkpOyAvLyBhZGQgPGxpPiB0byB0aXBweSBkYXRhICg8b2w+KVxyXG4gICAgICAgICAgbGlBcnJheVtpXS5jaGlsZHJlblswXS5pbm5lclRleHQgPSAn4oCmJzsgLy8gY29udmVydCB0byBlbGxpcHNpc1xyXG4gICAgICAgICAgbGlBcnJheVtpXS5jbGFzc05hbWUgPSAnbjctYnJlYWRjcnVtYnNfX2l0ZW0tZWxsaXBzaXMnOyAvLyBzZXQgY2xhc3MgdG8gbGlzdCBpdGVtXHJcbiAgICAgICAgICB0aGlzLnRpcHB5QnVpbGRlcihsaUFycmF5W2ldLCB0aXBweURhdGEpOyAvLyBhcHBlbmQgdG9vbHRpcCB0byBlbGxpcHNpc1xyXG4gICAgICAgICAgaSArPSAxO1xyXG4gICAgICAgICAgLy8gdXBkYXRlIHdpZHRoc1xyXG4gICAgICAgICAgKHsgcGFyZW50V2lkdGgsIGNoaWxkV2lkdGggfSA9IHRoaXMuZ2V0V2lkdGhzKHRoaXMuYmNkaXYsIHRoaXMuYmNvbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIHRpcHB5IGRhdGEgZm9yIGEgbm9kZS5cclxuICAgKi9cclxuICB0aXBweUJ1aWxkZXIgPSAobm9kZSwgY29udGVudCkgPT4gdGlwcHkobm9kZSwge1xyXG4gICAgY29udGVudCxcclxuICAgIGludGVyYWN0aXZlOiB0cnVlLFxyXG4gICAgYXJyb3c6IHRydWUsXHJcbiAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcclxuICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzaWxlbmNlIHRpcHB5IGludGVyYWN0aXZlIHdhcm5pbmdcclxuICB9KTtcclxuXHJcblxyXG4gIGdldFdpZHRocyA9IChwYXJlbnQ6IEVsZW1lbnRSZWYsIGNoaWxkOiBFbGVtZW50UmVmKSA9PiB7XHJcbiAgICBjb25zdCBwdyA9IHBhcmVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgY3cgPSBjaGlsZC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgcHAgPSB0aGlzLmdldFNpZGVQYWRkaW5nKHBhcmVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgIHJldHVybiB7IHBhcmVudFdpZHRoOiBwdyAtIHBwLCBjaGlsZFdpZHRoOiBjdyB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lkZVBhZGRpbmcgPSAobm9kZSkgPT4gKFxyXG4gICAgLy8gcmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgc3VtIG9mIGxlZnQgYW5kIHJpZ2h0IHBhZGRpbmdzXHJcbiAgICAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpLm1hdGNoKC9cXGQrLylbMF0pXHJcbiAgICArICgrd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpLm1hdGNoKC9cXGQrLylbMF0pXHJcbiAgKVxyXG59XHJcbiJdfQ==