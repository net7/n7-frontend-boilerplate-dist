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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEdBQ3hDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXN0IsMENBaUJDOzs7Ozs7SUFiQyxxQ0FBYzs7Ozs7SUFJZCx1Q0FBYTs7Ozs7SUFJYix1Q0FBYzs7Ozs7SUFJZCxxQ0FBWTs7Ozs7Ozs7OztBQVVkLDBDQVNDOzs7Ozs7SUFMQyxxQ0FBOEI7Ozs7O0lBSTlCLHVDQUFjOztBQVFoQixNQUFNLE9BQU8seUJBQXlCO0lBTHRDOzs7O1FBMkNFLGlCQUFZOzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUM1QyxPQUFPO1lBQ1AsV0FBVyxFQUFFLElBQUk7WUFDakIsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN4QixDQUFDLEVBQUM7UUFHSCxjQUFTOzs7OztRQUFHLENBQUMsTUFBa0IsRUFBRSxLQUFpQixFQUFFLEVBQUU7O2tCQUM5QyxFQUFFLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXOztrQkFDckMsRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVzs7a0JBQ3BDLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNsRCxDQUFDLEVBQUE7UUFFRCxtQkFBYzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUN6QixxRUFBcUU7UUFDckUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ3JGLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzRixFQUFBO0lBQ0gsQ0FBQzs7OztJQWxEQyxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3ZCLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDOztrQkFDakUsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7WUFDaEQsSUFBSSxXQUFXLEtBQUssVUFBVSxFQUFFLEVBQUUscUJBQXFCOzs7b0JBQ2pELENBQUMsR0FBRyxDQUFDO2dCQUNULE9BQU8sV0FBVyxLQUFLLFVBQVUsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxvQkFBb0I7OzswQkFDM0UsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO29CQUM5QyxTQUFTLENBQUMsU0FBUyxHQUFHLHFDQUFxQyxDQUFDO29CQUM1RCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztvQkFDbkYsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsc0JBQXNCO29CQUM5RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLCtCQUErQixDQUFDLENBQUMseUJBQXlCO29CQUNqRixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtvQkFDdkUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxnQkFBZ0I7b0JBQ2hCLENBQUMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN2RTthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDBqQkFBdUM7YUFDeEM7OzttQkFHRSxLQUFLO21CQUVMLEtBQUs7bUJBRUwsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtvQkFFckQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQU52RCx5Q0FBb0M7O0lBRXBDLHlDQUFtQjs7SUFFbkIseUNBQXdFOztJQUV4RSwwQ0FBMEU7Ozs7O0lBK0IxRSxpREFNRzs7SUFHSCw4Q0FLQzs7SUFFRCxtREFJQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCUkVBRENSVU1CUy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiSXRlbVwiXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNtYXJ0QnJlYWRjcnVtYnNJdGVtIHtcbiAgLyoqXG4gICAqIGl0ZW0ncyBsYWJlbFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJyZWFkY3J1bWJzQ29tcG9uZW50J3MgXCJEYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbWFydEJyZWFkY3J1bWJzRGF0YSB7XG4gIC8qKlxuICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGJyZWFkY3J1bWIgbGV2ZWxcbiAgICovXG4gIGl0ZW1zOiBTbWFydEJyZWFkY3J1bWJzSXRlbVtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNtYXJ0LWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LWJyZWFkY3J1bWJzLmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIFNtYXJ0QnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgZGF0YTogU21hcnRCcmVhZGNydW1ic0RhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ2Jjb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgYmNvbDogRWxlbWVudFJlZlxuXG4gIEBWaWV3Q2hpbGQoJ2JjZGl2JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGJjZGl2OiBFbGVtZW50UmVmXG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmJjZGl2ICYmIHRoaXMuYmNvbCkge1xuICAgICAgbGV0IHsgcGFyZW50V2lkdGgsIGNoaWxkV2lkdGggfSA9IHRoaXMuZ2V0V2lkdGhzKHRoaXMuYmNkaXYsIHRoaXMuYmNvbCk7XG4gICAgICBjb25zdCBsaUFycmF5ID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XG4gICAgICBpZiAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGgpIHsgLy8gY29sbGFwc2UgY29uZGl0aW9uXG4gICAgICAgIGxldCBpID0gMTsgLy8gU2tpcCBlbGVtZW50IGluIHBvc2l0aW9uIDBcbiAgICAgICAgd2hpbGUgKHBhcmVudFdpZHRoID09PSBjaGlsZFdpZHRoICYmIGkgPCBsaUFycmF5Lmxlbmd0aCAtIDEpIHsgLy8gU2tpcCBsYXN0IGVsZW1lbnRcbiAgICAgICAgICBjb25zdCB0aXBweURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpOyAvLyBpbml0aWFsaXplIHRpcHB5IGRhdGFcbiAgICAgICAgICB0aXBweURhdGEuY2xhc3NOYW1lID0gJ243LXNtYXJ0LWJyZWFkY3J1bWJzX190aXBweS1jb250ZW50JztcbiAgICAgICAgICB0aXBweURhdGEuYXBwZW5kQ2hpbGQobGlBcnJheVtpXS5jbG9uZU5vZGUodHJ1ZSkpOyAvLyBhZGQgPGxpPiB0byB0aXBweSBkYXRhICg8b2w+KVxuICAgICAgICAgIGxpQXJyYXlbaV0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJ+KApic7IC8vIGNvbnZlcnQgdG8gZWxsaXBzaXNcbiAgICAgICAgICBsaUFycmF5W2ldLmNsYXNzTmFtZSA9ICduNy1icmVhZGNydW1ic19faXRlbS1lbGxpcHNpcyc7IC8vIHNldCBjbGFzcyB0byBsaXN0IGl0ZW1cbiAgICAgICAgICB0aGlzLnRpcHB5QnVpbGRlcihsaUFycmF5W2ldLCB0aXBweURhdGEpOyAvLyBhcHBlbmQgdG9vbHRpcCB0byBlbGxpcHNpc1xuICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAvLyB1cGRhdGUgd2lkdGhzXG4gICAgICAgICAgKHsgcGFyZW50V2lkdGgsIGNoaWxkV2lkdGggfSA9IHRoaXMuZ2V0V2lkdGhzKHRoaXMuYmNkaXYsIHRoaXMuYmNvbCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIHRpcHB5IGRhdGEgZm9yIGEgbm9kZS5cbiAgICovXG4gIHRpcHB5QnVpbGRlciA9IChub2RlLCBjb250ZW50KSA9PiB0aXBweShub2RlLCB7XG4gICAgY29udGVudCxcbiAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICBhcnJvdzogdHJ1ZSxcbiAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc2lsZW5jZSB0aXBweSBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gIH0pO1xuXG5cbiAgZ2V0V2lkdGhzID0gKHBhcmVudDogRWxlbWVudFJlZiwgY2hpbGQ6IEVsZW1lbnRSZWYpID0+IHtcbiAgICBjb25zdCBwdyA9IHBhcmVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGN3ID0gY2hpbGQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBwcCA9IHRoaXMuZ2V0U2lkZVBhZGRpbmcocGFyZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHJldHVybiB7IHBhcmVudFdpZHRoOiBwdyAtIHBwLCBjaGlsZFdpZHRoOiBjdyB9O1xuICB9XG5cbiAgZ2V0U2lkZVBhZGRpbmcgPSAobm9kZSkgPT4gKFxuICAgIC8vIHJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIHN1bSBvZiBsZWZ0IGFuZCByaWdodCBwYWRkaW5nc1xuICAgICgrd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0JykubWF0Y2goL1xcZCsvKVswXSlcbiAgICArICgrd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpLm1hdGNoKC9cXGQrLylbMF0pXG4gIClcbn1cbiJdfQ==