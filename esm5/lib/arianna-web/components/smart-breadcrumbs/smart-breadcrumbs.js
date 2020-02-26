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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7QUFXN0IsMkNBaUJDOzs7Ozs7SUFiQyxzQ0FBYzs7Ozs7SUFJZCx3Q0FBYTs7Ozs7SUFJYix3Q0FBYzs7Ozs7SUFJZCxzQ0FBWTs7Ozs7Ozs7OztBQVVkLDJDQVNDOzs7Ozs7SUFMQyxzQ0FBK0I7Ozs7O0lBSS9CLHdDQUFjOztBQUdoQjtJQUFBO1FBeUNFLGlCQUFZOzs7OztRQUFHLFVBQUMsSUFBSSxFQUFFLE9BQU87WUFDM0I7O2NBRUU7WUFDRixLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNWLE9BQU8sU0FBQTtnQkFDUCxXQUFXLEVBQUUsSUFBSTtnQkFDakIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0NBQW9DO2FBQzdELENBQUMsQ0FBQTtRQUNKLENBQUMsRUFBQTtRQUVELG1CQUFjOzs7O1FBQUcsVUFBQSxJQUFJO1lBQ25CLE9BQU8sQ0FDTCxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7a0JBQ3JGLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxF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Qzs7SUFFRCxtREFLQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCUkVBRENSVU1CUy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkl0ZW1cIlxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU21hcnRCcmVhZGNydW1ic0l0ZW0ge1xuICAvKipcbiAgICogaXRlbSdzIGxhYmVsXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTbWFydEJyZWFkY3J1bWJzRGF0YSB7XG4gIC8qKlxuICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGJyZWFkY3J1bWIgbGV2ZWxcbiAgICovXG4gIGl0ZW1zOiBJU21hcnRCcmVhZGNydW1ic0l0ZW1bXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1zbWFydC1icmVhZGNydW1icycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1icmVhZGNydW1icy5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNtYXJ0QnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgZGF0YTogSVNtYXJ0QnJlYWRjcnVtYnNEYXRhO1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2Jjb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgYmNvbDogRWxlbWVudFJlZlxuICBAVmlld0NoaWxkKCdiY2RpdicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBiY2RpdjogRWxlbWVudFJlZlxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5iY2RpdiAmJiB0aGlzLmJjb2wpIHtcbiAgICAgIHZhciBwYXJlbnRXaWR0aCA9IHRoaXMuYmNkaXYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCAtIHRoaXMuZ2V0U2lkZVBhZGRpbmcodGhpcy5iY2Rpdi5uYXRpdmVFbGVtZW50KVxuICAgICAgdmFyIGNoaWxkV2lkdGggPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgdmFyIGxpQXJyYXkgPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jaGlsZHJlblxuICAgICAgY29uc29sZS5sb2coeyBwYXJlbnRXaWR0aCwgY2hpbGRXaWR0aCB9KVxuICAgICAgaWYgKHBhcmVudFdpZHRoID09PSBjaGlsZFdpZHRoKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sbGFwc2UgY29uZGl0aW9uXG4gICAgICAgIGxldCBpID0gMSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCBlbGVtZW50IGluIHBvc2l0aW9uIDBcbiAgICAgICAgd2hpbGUgKHBhcmVudFdpZHRoID09PSBjaGlsZFdpZHRoICYmIGkgPCBsaUFycmF5Lmxlbmd0aCAtIDEpIHsgICAgICAvLyBTa2lwIGxhc3QgZWxlbWVudFxuICAgICAgICAgIGxldCB0aXBweURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXplIHRpcHB5IGRhdGFcbiAgICAgICAgICB0aXBweURhdGEuY2xhc3NOYW1lID0gJ243LXNtYXJ0LWJyZWFkY3J1bWJzX190aXBweS1jb250ZW50J1xuICAgICAgICAgIHRpcHB5RGF0YS5hcHBlbmRDaGlsZChsaUFycmF5W2ldLmNsb25lTm9kZSh0cnVlKSkgICAgICAgICAgICAgICAvLyBhZGQgPGxpPiB0byB0aXBweSBkYXRhICg8b2w+KVxuICAgICAgICAgIGxpQXJyYXlbaV0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJ+KApicgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8gZWxsaXBzaXNcbiAgICAgICAgICBsaUFycmF5W2ldLmNsYXNzTmFtZSA9ICduNy1icmVhZGNydW1ic19faXRlbS1lbGxpcHNpcycgICAgICAgICAgLy8gc2V0IGNsYXNzIHRvIGxpc3QgaXRlbVxuICAgICAgICAgIHRoaXMudGlwcHlCdWlsZGVyKGxpQXJyYXlbaV0sIHRpcHB5RGF0YSkgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgdG9vbHRpcCB0byBlbGxpcHNpc1xuICAgICAgICAgIC8vIHRoaXMuZGF0YS5pdGVtc1tpXS5jbGFzc2VzID0gJ243LWJyZWFkY3J1bWJzX19sYWJlbC1lbGxpcHNpcycgICAvLyBzZXQgY2xhc3MgdG8gZWxsaXBzaXMgYW5jaG9yXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgLy8gdXBkYXRlIHdpZHRoc1xuICAgICAgICAgIHBhcmVudFdpZHRoID0gdGhpcy5iY2Rpdi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5nZXRTaWRlUGFkZGluZyh0aGlzLmJjZGl2Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgY2hpbGRXaWR0aCA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHRpcHB5QnVpbGRlciA9IChub2RlLCBjb250ZW50KSA9PiB7XG4gICAgLypcbiAgICAgICAgQnVpbGRzIHRpcHB5IGRhdGEgZm9yIGEgbm9kZS5cbiAgICAqL1xuICAgIHRpcHB5KG5vZGUsIHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgIGFycm93OiB0cnVlLFxuICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSAvLyBzaWxlbmNlIHRpcHB5IGludGVyYWN0aXZlIHdhcm5pbmdcbiAgICB9KVxuICB9XG5cbiAgZ2V0U2lkZVBhZGRpbmcgPSBub2RlID0+IHsgLy8gcmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgc3VtIG9mIGxlZnQgYW5kIHJpZ2h0IHBhZGRpbmdzXG4gICAgcmV0dXJuIChcbiAgICAgICgrd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0JykubWF0Y2goL1xcZCsvKVswXSlcbiAgICAgICsgKCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykubWF0Y2goL1xcZCsvKVswXSlcbiAgICApXG4gIH1cblxufVxuIl19