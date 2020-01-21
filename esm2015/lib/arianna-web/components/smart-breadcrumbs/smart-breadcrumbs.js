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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztBQVc3QiwyQ0FpQkM7Ozs7OztJQWJHLHNDQUFjOzs7OztJQUlkLHdDQUFhOzs7OztJQUliLHdDQUFjOzs7OztJQUlkLHNDQUFZOzs7Ozs7Ozs7O0FBVWhCLDJDQVNDOzs7Ozs7SUFMRyxzQ0FBK0I7Ozs7O0lBSS9CLHdDQUFjOztBQU9sQixNQUFNLE9BQU8seUJBQXlCO0lBSnRDO1FBVUksb0JBQWU7OztRQUFHLEdBQUcsRUFBRTs7Z0JBRWYsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVc7O2dCQUNsRCxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzs7Z0JBQ2hELE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRO1lBRTlDLHFCQUFxQjs7WUFBckIscUJBQXFCO1lBQ3JCLElBQUksV0FBVyxLQUFLLFVBQVUsRUFBRTs7b0JBQ3hCLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzs7b0JBQ3hDLENBQUMsR0FBRyxDQUFDO2dCQUNULFNBQVMsQ0FBQyxTQUFTLEdBQUcscUNBQXFDLENBQUE7Z0JBQzNELE9BQU8sV0FBVyxLQUFLLFVBQVUsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDUCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3FCQUNwQzt5QkFBTTt3QkFDSCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7cUJBQ3pDO29CQUNELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFBO29CQUN4QyxDQUFDLEVBQUUsQ0FBQTtvQkFDSCxnQkFBZ0I7b0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUE7b0JBQ2xELFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUE7aUJBQ25EO2FBQ0o7UUFDTCxDQUFDLEVBQUE7UUFPRCxpQkFBWTs7Ozs7UUFBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUM3Qjs7Y0FFRTtZQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2xDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ1IsT0FBTzs7O2dCQUdQLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUseUJBQXlCO2FBR25DLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBQTtJQUVMLENBQUM7Ozs7O0lBdEJHLE9BQU8sQ0FBQyxPQUFPO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUF4Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGtjQUF1QzthQUMxQzs7O21CQUVJLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUNyRCxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBSHZELHlDQUFxQzs7SUFDckMseUNBQW1COztJQUNuQix5Q0FBd0U7O0lBQ3hFLDBDQUEwRTs7SUFFMUUsb0RBeUJDOztJQU9ELGlEQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJSRUFEQ1JVTUJTLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiSXRlbVwiXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElTbWFydEJyZWFkY3J1bWJzSXRlbSB7XG4gICAgLyoqXG4gICAgICogaXRlbSdzIGxhYmVsXG4gICAgICovXG4gICAgbGFiZWw6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAgICovXG4gICAgcGF5bG9hZDogYW55O1xuICAgIC8qKlxuICAgICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAgICovXG4gICAgY2xhc3Nlcz86IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICAgKi9cbiAgICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJyZWFkY3J1bWJzQ29tcG9uZW50J3MgXCJEYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU21hcnRCcmVhZGNydW1ic0RhdGEge1xuICAgIC8qKlxuICAgICAqIGVhY2ggaXRlbSByZW5kZXJzIGEgYnJlYWRjcnVtYiBsZXZlbFxuICAgICAqL1xuICAgIGl0ZW1zOiBJU21hcnRCcmVhZGNydW1ic0l0ZW1bXTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbjctc21hcnQtYnJlYWRjcnVtYnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1icmVhZGNydW1icy5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgZGF0YTogSVNtYXJ0QnJlYWRjcnVtYnNEYXRhO1xuICAgIEBJbnB1dCgpIGVtaXQ6IGFueTtcbiAgICBAVmlld0NoaWxkKCdiY29sJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGJjb2w6IEVsZW1lbnRSZWZcbiAgICBAVmlld0NoaWxkKCdiY2RpdicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBiY2RpdjogRWxlbWVudFJlZlxuXG4gICAgbmdBZnRlclZpZXdJbml0ID0gKCkgPT4ge1xuICAgICAgICBsZXRcbiAgICAgICAgICAgIHBhcmVudFdpZHRoID0gdGhpcy5iY2Rpdi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgY2hpbGRXaWR0aCA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgbGlBcnJheSA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuXG5cbiAgICAgICAgLy8gY29sbGFwc2UgY29uZGl0aW9uXG4gICAgICAgIGlmIChwYXJlbnRXaWR0aCA9PT0gY2hpbGRXaWR0aCkge1xuICAgICAgICAgICAgbGV0IHRpcHB5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJylcbiAgICAgICAgICAgIGxldCBpID0gMVxuICAgICAgICAgICAgdGlwcHlEYXRhLmNsYXNzTmFtZSA9ICduNy1zbWFydC1icmVhZGNydW1ic19fdGlwcHktY29udGVudCdcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnRXaWR0aCA9PT0gY2hpbGRXaWR0aCAmJiBpIDwgbGlBcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpcHB5RGF0YS5hcHBlbmRDaGlsZChsaUFycmF5W2ldKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpcHB5RGF0YS5hcHBlbmRDaGlsZChsaUFycmF5W2ldKVxuICAgICAgICAgICAgICAgICAgICBsaUFycmF5W2ldLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9ICfigKYnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGlwcHlCdWlsZGVyKGxpQXJyYXlbaV0sIHRpcHB5RGF0YSlcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgd2lkdGhzXG4gICAgICAgICAgICAgICAgcGFyZW50V2lkdGggPSB0aGlzLmJjZGl2Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgICAgICAgICBjaGlsZFdpZHRoID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2socGF5bG9hZCkge1xuICAgICAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgfVxuXG4gICAgdGlwcHlCdWlsZGVyID0gKG5vZGUsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIEJ1aWxkcyB0aXBweSBkYXRhIGZvciBhIG5vZGUuXG4gICAgICAgICovXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudClcbiAgICAgICAgdGlwcHkobm9kZSwge1xuICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgIC8vIGFsbG93SFRNTDogdHJ1ZSxcbiAgICAgICAgICAgIC8vIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICAgICAgLy8gcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICAgIC8vIG1heFdpZHRoOiA1MDAsXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG4iXX0=