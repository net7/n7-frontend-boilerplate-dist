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
var SmartBreadcrumbsComponent = /** @class */ (function () {
    function SmartBreadcrumbsComponent() {
        var _this = this;
        /**
         * Builds tippy data for a node.
         */
        this.tippyBuilder = (/**
         * @param {?} node
         * @param {?} content
         * @return {?}
         */
        function (node, content) { return tippy(node, {
            content: content,
            interactive: true,
            arrow: true,
            theme: 'light-border no-padding',
            appendTo: document.body,
        }); });
        this.getWidths = (/**
         * @param {?} parent
         * @param {?} child
         * @return {?}
         */
        function (parent, child) {
            /** @type {?} */
            var pw = parent.nativeElement.clientWidth;
            /** @type {?} */
            var cw = child.nativeElement.clientWidth;
            /** @type {?} */
            var pp = _this.getSidePadding(parent.nativeElement);
            return { parentWidth: pw - pp, childWidth: cw };
        });
        this.getSidePadding = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return (
        // returns an integer representing the sum of left and right paddings
        (+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
            + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0])); });
    }
    /**
     * @return {?}
     */
    SmartBreadcrumbsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _a;
        if (this.bcdiv && this.bcol) {
            var _b = this.getWidths(this.bcdiv, this.bcol), parentWidth = _b.parentWidth, childWidth = _b.childWidth;
            /** @type {?} */
            var liArray = this.bcol.nativeElement.children;
            if (parentWidth === childWidth) { // collapse condition
                // collapse condition
                /** @type {?} */
                var i = 1;
                while (parentWidth === childWidth && i < liArray.length - 1) { // Skip last element
                    // Skip last element
                    /** @type {?} */
                    var tippyData = document.createElement('ol');
                    tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                    tippyData.appendChild(liArray[i].cloneNode(true)); // add <li> to tippy data (<ol>)
                    liArray[i].children[0].innerText = '…'; // convert to ellipsis
                    liArray[i].className = 'n7-breadcrumbs__item-ellipsis'; // set class to list item
                    this.tippyBuilder(liArray[i], tippyData); // append tooltip to ellipsis
                    i += 1;
                    // update widths
                    (_a = this.getWidths(this.bcdiv, this.bcol), parentWidth = _a.parentWidth, childWidth = _a.childWidth);
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
                    template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\r\n    <nav class=\"n7-breadcrumbs__nav\">\r\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\r\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\r\n                <n7-anchor-wrapper [classes]=\"item.classes\"\r\n                [data]=\"item.anchor\"\r\n                (clicked)=\"onClick($event)\">\r\n                    {{ item.label }}\r\n                </n7-anchor-wrapper>\r\n            </li>\r\n        </ol>\r\n    </nav>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEdBQ3hDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXN0IsMENBaUJDOzs7Ozs7SUFiQyxxQ0FBYzs7Ozs7SUFJZCx1Q0FBYTs7Ozs7SUFJYix1Q0FBYzs7Ozs7SUFJZCxxQ0FBWTs7Ozs7Ozs7OztBQVVkLDBDQVNDOzs7Ozs7SUFMQyxxQ0FBOEI7Ozs7O0lBSTlCLHVDQUFjOztBQUdoQjtJQUFBO1FBQUEsaUJBZ0VDOzs7O1FBckJDLGlCQUFZOzs7OztRQUFHLFVBQUMsSUFBSSxFQUFFLE9BQU8sSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDNUMsT0FBTyxTQUFBO1lBQ1AsV0FBVyxFQUFFLElBQUk7WUFDakIsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN4QixDQUFDLEVBTmdDLENBTWhDLEVBQUM7UUFHSCxjQUFTOzs7OztRQUFHLFVBQUMsTUFBa0IsRUFBRSxLQUFpQjs7Z0JBQzFDLEVBQUUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVc7O2dCQUNyQyxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXOztnQkFDcEMsRUFBRSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFF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LS1cclxuLy8gQlJFQURDUlVNQlMudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkl0ZW1cIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU21hcnRCcmVhZGNydW1ic0l0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIGl0ZW0ncyBsYWJlbFxyXG4gICAqL1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEJyZWFkY3J1bWJzQ29tcG9uZW50J3MgXCJEYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTbWFydEJyZWFkY3J1bWJzRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBicmVhZGNydW1iIGxldmVsXHJcbiAgICovXHJcbiAgaXRlbXM6IFNtYXJ0QnJlYWRjcnVtYnNJdGVtW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXNtYXJ0LWJyZWFkY3J1bWJzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtYnJlYWRjcnVtYnMuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IFNtYXJ0QnJlYWRjcnVtYnNEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Jjb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgYmNvbDogRWxlbWVudFJlZlxyXG5cclxuICBAVmlld0NoaWxkKCdiY2RpdicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBiY2RpdjogRWxlbWVudFJlZlxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5iY2RpdiAmJiB0aGlzLmJjb2wpIHtcclxuICAgICAgbGV0IHsgcGFyZW50V2lkdGgsIGNoaWxkV2lkdGggfSA9IHRoaXMuZ2V0V2lkdGhzKHRoaXMuYmNkaXYsIHRoaXMuYmNvbCk7XHJcbiAgICAgIGNvbnN0IGxpQXJyYXkgPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcclxuICAgICAgaWYgKHBhcmVudFdpZHRoID09PSBjaGlsZFdpZHRoKSB7IC8vIGNvbGxhcHNlIGNvbmRpdGlvblxyXG4gICAgICAgIGxldCBpID0gMTsgLy8gU2tpcCBlbGVtZW50IGluIHBvc2l0aW9uIDBcclxuICAgICAgICB3aGlsZSAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGggJiYgaSA8IGxpQXJyYXkubGVuZ3RoIC0gMSkgeyAvLyBTa2lwIGxhc3QgZWxlbWVudFxyXG4gICAgICAgICAgY29uc3QgdGlwcHlEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTsgLy8gaW5pdGlhbGl6ZSB0aXBweSBkYXRhXHJcbiAgICAgICAgICB0aXBweURhdGEuY2xhc3NOYW1lID0gJ243LXNtYXJ0LWJyZWFkY3J1bWJzX190aXBweS1jb250ZW50JztcclxuICAgICAgICAgIHRpcHB5RGF0YS5hcHBlbmRDaGlsZChsaUFycmF5W2ldLmNsb25lTm9kZSh0cnVlKSk7IC8vIGFkZCA8bGk+IHRvIHRpcHB5IGRhdGEgKDxvbD4pXHJcbiAgICAgICAgICBsaUFycmF5W2ldLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9ICfigKYnOyAvLyBjb252ZXJ0IHRvIGVsbGlwc2lzXHJcbiAgICAgICAgICBsaUFycmF5W2ldLmNsYXNzTmFtZSA9ICduNy1icmVhZGNydW1ic19faXRlbS1lbGxpcHNpcyc7IC8vIHNldCBjbGFzcyB0byBsaXN0IGl0ZW1cclxuICAgICAgICAgIHRoaXMudGlwcHlCdWlsZGVyKGxpQXJyYXlbaV0sIHRpcHB5RGF0YSk7IC8vIGFwcGVuZCB0b29sdGlwIHRvIGVsbGlwc2lzXHJcbiAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgICAvLyB1cGRhdGUgd2lkdGhzXHJcbiAgICAgICAgICAoeyBwYXJlbnRXaWR0aCwgY2hpbGRXaWR0aCB9ID0gdGhpcy5nZXRXaWR0aHModGhpcy5iY2RpdiwgdGhpcy5iY29sKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZHMgdGlwcHkgZGF0YSBmb3IgYSBub2RlLlxyXG4gICAqL1xyXG4gIHRpcHB5QnVpbGRlciA9IChub2RlLCBjb250ZW50KSA9PiB0aXBweShub2RlLCB7XHJcbiAgICBjb250ZW50LFxyXG4gICAgaW50ZXJhY3RpdmU6IHRydWUsXHJcbiAgICBhcnJvdzogdHJ1ZSxcclxuICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxyXG4gICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHNpbGVuY2UgdGlwcHkgaW50ZXJhY3RpdmUgd2FybmluZ1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgZ2V0V2lkdGhzID0gKHBhcmVudDogRWxlbWVudFJlZiwgY2hpbGQ6IEVsZW1lbnRSZWYpID0+IHtcclxuICAgIGNvbnN0IHB3ID0gcGFyZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCBjdyA9IGNoaWxkLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCBwcCA9IHRoaXMuZ2V0U2lkZVBhZGRpbmcocGFyZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHsgcGFyZW50V2lkdGg6IHB3IC0gcHAsIGNoaWxkV2lkdGg6IGN3IH07XHJcbiAgfVxyXG5cclxuICBnZXRTaWRlUGFkZGluZyA9IChub2RlKSA9PiAoXHJcbiAgICAvLyByZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBzdW0gb2YgbGVmdCBhbmQgcmlnaHQgcGFkZGluZ3NcclxuICAgICgrd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0JykubWF0Y2goL1xcZCsvKVswXSlcclxuICAgICsgKCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykubWF0Y2goL1xcZCsvKVswXSlcclxuICApXHJcbn1cclxuIl19