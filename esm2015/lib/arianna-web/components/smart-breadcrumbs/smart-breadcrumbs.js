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
                template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <n7-anchor-wrapper [classes]=\"'n7-breadcrumbs__label'\"\n                [data]=\"item.anchor\"\n                (clicked)=\"onClick($event)\">\n                    {{ item.label }}\n                </n7-anchor-wrapper>\n            </li>\n        </ol>\n    </nav>\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztBQVc3QiwyQ0FpQkM7Ozs7OztJQWJHLHNDQUFjOzs7OztJQUlkLHdDQUFhOzs7OztJQUliLHdDQUFjOzs7OztJQUlkLHNDQUFZOzs7Ozs7Ozs7O0FBVWhCLDJDQVNDOzs7Ozs7SUFMRyxzQ0FBK0I7Ozs7O0lBSS9CLHdDQUFjOztBQU9sQixNQUFNLE9BQU8seUJBQXlCO0lBSnRDO1FBVUksb0JBQWU7OztRQUFHLEdBQUcsRUFBRTs7Z0JBRWYsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVc7O2dCQUNsRCxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzs7Z0JBQ2hELE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRO1lBRTlDLHFCQUFxQjs7WUFBckIscUJBQXFCO1lBQ3JCLElBQUksV0FBVyxLQUFLLFVBQVUsRUFBRTs7b0JBQ3hCLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzs7b0JBQ3hDLENBQUMsR0FBRyxDQUFDO2dCQUNULFNBQVMsQ0FBQyxTQUFTLEdBQUcscUNBQXFDLENBQUE7Z0JBQzNELE9BQU8sV0FBVyxLQUFLLFVBQVUsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDUCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3FCQUNwQzt5QkFBTTt3QkFDSCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7cUJBQ3pDO29CQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFBO29CQUN4QyxDQUFDLEVBQUUsQ0FBQTtvQkFDSCxnQkFBZ0I7b0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUE7b0JBQ2xELFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUE7aUJBQ25EO2FBQ0o7UUFDTCxDQUFDLEVBQUE7UUFPRCxpQkFBWTs7Ozs7UUFBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUM3Qjs7Y0FFRTtZQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2xDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ1IsT0FBTzs7O2dCQUdQLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUseUJBQXlCO2FBR25DLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQTtJQUVMLENBQUM7Ozs7O0lBdEJHLE9BQU8sQ0FBQyxPQUFPO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUF4Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHFrQkFBdUM7YUFDMUM7OzttQkFFSSxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtvQkFDckQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUh2RCx5Q0FBcUM7O0lBQ3JDLHlDQUFtQjs7SUFDbkIseUNBQXdFOztJQUN4RSwwQ0FBMEU7O0lBRTFFLG9EQXlCQzs7SUFPRCxpREFlQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCUkVBRENSVU1CUy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkl0ZW1cIlxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU21hcnRCcmVhZGNydW1ic0l0ZW0ge1xuICAgIC8qKlxuICAgICAqIGl0ZW0ncyBsYWJlbFxuICAgICAqL1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiRGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNtYXJ0QnJlYWRjcnVtYnNEYXRhIHtcbiAgICAvKipcbiAgICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGJyZWFkY3J1bWIgbGV2ZWxcbiAgICAgKi9cbiAgICBpdGVtczogSVNtYXJ0QnJlYWRjcnVtYnNJdGVtW107XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ243LXNtYXJ0LWJyZWFkY3J1bWJzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtYnJlYWRjcnVtYnMuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIGRhdGE6IElTbWFydEJyZWFkY3J1bWJzRGF0YTtcbiAgICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gICAgQFZpZXdDaGlsZCgnYmNvbCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBiY29sOiBFbGVtZW50UmVmXG4gICAgQFZpZXdDaGlsZCgnYmNkaXYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgYmNkaXY6IEVsZW1lbnRSZWZcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCA9ICgpID0+IHtcbiAgICAgICAgbGV0XG4gICAgICAgICAgICBwYXJlbnRXaWR0aCA9IHRoaXMuYmNkaXYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIGNoaWxkV2lkdGggPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIGxpQXJyYXkgPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jaGlsZHJlblxuXG4gICAgICAgIC8vIGNvbGxhcHNlIGNvbmRpdGlvblxuICAgICAgICBpZiAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGgpIHtcbiAgICAgICAgICAgIGxldCB0aXBweURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpXG4gICAgICAgICAgICBsZXQgaSA9IDFcbiAgICAgICAgICAgIHRpcHB5RGF0YS5jbGFzc05hbWUgPSAnbjctc21hcnQtYnJlYWRjcnVtYnNfX3RpcHB5LWNvbnRlbnQnXG4gICAgICAgICAgICB3aGlsZSAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGggJiYgaSA8IGxpQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChpID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aXBweURhdGEuYXBwZW5kQ2hpbGQobGlBcnJheVtpXSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aXBweURhdGEuYXBwZW5kQ2hpbGQobGlBcnJheVtpXSlcbiAgICAgICAgICAgICAgICAgICAgbGlBcnJheVtpXS5jaGlsZHJlblswXS5pbm5lclRleHQgPSAn4oCmJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRpcHB5QnVpbGRlcihsaUFycmF5W2ldLCB0aXBweURhdGEpXG4gICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHdpZHRoc1xuICAgICAgICAgICAgICAgIHBhcmVudFdpZHRoID0gdGhpcy5iY2Rpdi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICAgICAgICAgY2hpbGRXaWR0aCA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICAgIH1cblxuICAgIHRpcHB5QnVpbGRlciA9IChub2RlLCBjb250ZW50KSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBCdWlsZHMgdGlwcHkgZGF0YSBmb3IgYSBub2RlLlxuICAgICAgICAqL1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgICAgIHRpcHB5KG5vZGUsIHtcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAvLyBhbGxvd0hUTUw6IHRydWUsXG4gICAgICAgICAgICAvLyB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAgICAgICAgIC8vIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgICAvLyBtYXhXaWR0aDogNTAwLFxuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19