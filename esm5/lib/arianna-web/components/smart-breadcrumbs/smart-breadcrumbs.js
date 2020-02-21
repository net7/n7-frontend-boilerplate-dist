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
            var parentWidth = this.bcdiv.nativeElement.clientWidth;
            /** @type {?} */
            var childWidth = this.bcol.nativeElement.clientWidth;
            /** @type {?} */
            var liArray = this.bcol.nativeElement.children;
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
                    this.tippyBuilder(liArray[i], tippyData); // append tooltip to ellipsis
                    i++;
                    // update widths
                    parentWidth = this.bcdiv.nativeElement.clientWidth;
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
                    template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <n7-anchor-wrapper [classes]=\"'n7-breadcrumbs__label'\"\n                [data]=\"item.anchor\"\n                (clicked)=\"onClick($event)\">\n                    {{ item.label }}\n                </n7-anchor-wrapper>\n            </li>\n        </ol>\n    </nav>\n</div>"
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztBQVc3QiwyQ0FpQkM7Ozs7OztJQWJHLHNDQUFjOzs7OztJQUlkLHdDQUFhOzs7OztJQUliLHdDQUFjOzs7OztJQUlkLHNDQUFZOzs7Ozs7Ozs7O0FBVWhCLDJDQVNDOzs7Ozs7SUFMRyxzQ0FBK0I7Ozs7O0lBSS9CLHdDQUFjOztBQUdsQjtJQUFBO1FBcUNJLGlCQUFZOzs7OztRQUFHLFVBQUMsSUFBSSxFQUFFLE9BQU87WUFDekI7O2NBRUU7WUFDRixLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNSLE9BQU8sU0FBQTtnQkFDUCxXQUFXLEVBQUUsSUFBSTtnQkFDakIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0NBQW9DO2FBQy9ELENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQTtJQUVMLENBQUM7Ozs7SUF4Q0csbURBQWU7OztJQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7O2dCQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVzs7Z0JBQ2xELFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXOztnQkFDaEQsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7WUFDOUMsSUFBSSxXQUFXLEtBQUssVUFBVSxFQUFFLEVBQUUscUJBQXFCOzs7b0JBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsNkJBQTZCOztnQkFDdkMsT0FBTyxXQUFXLEtBQUssVUFBVSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLG9CQUFvQjs7O3dCQUMzRSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0I7O29CQUNyRSxTQUFTLENBQUMsU0FBUyxHQUFHLHFDQUFxQyxDQUFBO29CQUMzRCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDLGdDQUFnQztvQkFDbEYsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBLENBQUMsc0JBQXNCO29CQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQSxDQUFDLDZCQUE2QjtvQkFDdEUsQ0FBQyxFQUFFLENBQUE7b0JBQ0gsZ0JBQWdCO29CQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBO29CQUNsRCxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBO2lCQUNuRDthQUNKO1NBQ0o7SUFDTCxDQUFDOzs7OztJQUVELDJDQUFPOzs7O0lBQVAsVUFBUSxPQUFPO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkFuQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLHFrQkFBdUM7aUJBQzFDOzs7dUJBRUksS0FBSzt1QkFDTCxLQUFLO3VCQUNMLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBQ3JELFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBMEMzRCxnQ0FBQztDQUFBLEFBbERELElBa0RDO1NBOUNZLHlCQUF5Qjs7O0lBQ2xDLHlDQUFxQzs7SUFDckMseUNBQW1COztJQUNuQix5Q0FBd0U7O0lBQ3hFLDBDQUEwRTs7SUE2QjFFLGlEQVdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJSRUFEQ1JVTUJTLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiSXRlbVwiXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTbWFydEJyZWFkY3J1bWJzSXRlbSB7XG4gICAgLyoqXG4gICAgICogaXRlbSdzIGxhYmVsXG4gICAgICovXG4gICAgbGFiZWw6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZDogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJyZWFkY3J1bWJzQ29tcG9uZW50J3MgXCJEYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU21hcnRCcmVhZGNydW1ic0RhdGEge1xuICAgIC8qKlxuICAgICAqIGVhY2ggaXRlbSByZW5kZXJzIGEgYnJlYWRjcnVtYiBsZXZlbFxuICAgICAqL1xuICAgIGl0ZW1zOiBJU21hcnRCcmVhZGNydW1ic0l0ZW1bXTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbjctc21hcnQtYnJlYWRjcnVtYnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1icmVhZGNydW1icy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgZGF0YTogSVNtYXJ0QnJlYWRjcnVtYnNEYXRhO1xuICAgIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgICBAVmlld0NoaWxkKCdiY29sJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGJjb2w6IEVsZW1lbnRSZWZcbiAgICBAVmlld0NoaWxkKCdiY2RpdicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBiY2RpdjogRWxlbWVudFJlZlxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5iY2RpdiAmJiB0aGlzLmJjb2wpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRXaWR0aCA9IHRoaXMuYmNkaXYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICAgICAgdmFyIGNoaWxkV2lkdGggPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICAgICAgdmFyIGxpQXJyYXkgPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jaGlsZHJlblxuICAgICAgICAgICAgaWYgKHBhcmVudFdpZHRoID09PSBjaGlsZFdpZHRoKSB7IC8vIGNvbGxhcHNlIGNvbmRpdGlvblxuICAgICAgICAgICAgICAgIGxldCBpID0gMSAvLyBTa2lwIGVsZW1lbnQgaW4gcG9zaXRpb24gMFxuICAgICAgICAgICAgICAgIHdoaWxlIChwYXJlbnRXaWR0aCA9PT0gY2hpbGRXaWR0aCAmJiBpIDwgbGlBcnJheS5sZW5ndGggLSAxKSB7IC8vIFNraXAgbGFzdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aXBweURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpIC8vIGluaXRpYWxpemUgdGlwcHkgZGF0YVxuICAgICAgICAgICAgICAgICAgICB0aXBweURhdGEuY2xhc3NOYW1lID0gJ243LXNtYXJ0LWJyZWFkY3J1bWJzX190aXBweS1jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICB0aXBweURhdGEuYXBwZW5kQ2hpbGQobGlBcnJheVtpXS5jbG9uZU5vZGUodHJ1ZSkpIC8vIGFkZCA8bGk+IHRvIHRpcHB5IGRhdGEgKDxvbD4pXG4gICAgICAgICAgICAgICAgICAgIGxpQXJyYXlbaV0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJ+KApicgLy8gY29udmVydCB0byBlbGxpcHNpc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHB5QnVpbGRlcihsaUFycmF5W2ldLCB0aXBweURhdGEpIC8vIGFwcGVuZCB0b29sdGlwIHRvIGVsbGlwc2lzXG4gICAgICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgd2lkdGhzXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFdpZHRoID0gdGhpcy5iY2Rpdi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkV2lkdGggPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2socGF5bG9hZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgdGlwcHlCdWlsZGVyID0gKG5vZGUsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIEJ1aWxkcyB0aXBweSBkYXRhIGZvciBhIG5vZGUuXG4gICAgICAgICovXG4gICAgICAgIHRpcHB5KG5vZGUsIHtcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSAvLyBzaWxlbmNlIHRpcHB5IGludGVyYWN0aXZlIHdhcm5pbmdcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cbiJdfQ==