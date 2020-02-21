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
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
                    this.tippyBuilder(liArray[i], tippyData); // append tooltip to ellipsis
                    i++;
                    // update widths
                    parentWidth = this.bcdiv.nativeElement.clientWidth;
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
    SmartBreadcrumbsComponent.prototype.tippyBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztBQVc3QiwyQ0FpQkM7Ozs7OztJQWJHLHNDQUFjOzs7OztJQUlkLHdDQUFhOzs7OztJQUliLHdDQUFjOzs7OztJQUlkLHNDQUFZOzs7Ozs7Ozs7O0FBVWhCLDJDQVNDOzs7Ozs7SUFMRyxzQ0FBK0I7Ozs7O0lBSS9CLHdDQUFjOztBQU9sQixNQUFNLE9BQU8seUJBQXlCO0lBSnRDO1FBcUNJLGlCQUFZOzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQzdCOztjQUVFO1lBQ0YsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDUixPQUFPO2dCQUNQLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxvQ0FBb0M7YUFDL0QsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxFQUFBO0lBRUwsQ0FBQzs7OztJQXhDRyxlQUFlO1FBQ1gsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7O2dCQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVzs7Z0JBQ2xELFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXOztnQkFDaEQsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7WUFDOUMsSUFBSSxXQUFXLEtBQUssVUFBVSxFQUFFLEVBQUUscUJBQXFCOzs7b0JBQy9DLENBQUMsR0FBRyxDQUFDLENBQUMsNkJBQTZCOztnQkFDdkMsT0FBTyxXQUFXLEtBQUssVUFBVSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLG9CQUFvQjs7O3dCQUMzRSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0I7O29CQUNyRSxTQUFTLENBQUMsU0FBUyxHQUFHLHFDQUFxQyxDQUFBO29CQUMzRCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDLGdDQUFnQztvQkFDbEYsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBLENBQUMsc0JBQXNCO29CQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQSxDQUFDLDZCQUE2QjtvQkFDdEUsQ0FBQyxFQUFFLENBQUE7b0JBQ0gsZ0JBQWdCO29CQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBO29CQUNsRCxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBO2lCQUNuRDthQUNKO1NBQ0o7SUFDTCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFPO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFuQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHFrQkFBdUM7YUFDMUM7OzttQkFFSSxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtvQkFDckQsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUh2RCx5Q0FBcUM7O0lBQ3JDLHlDQUFtQjs7SUFDbkIseUNBQXdFOztJQUN4RSwwQ0FBMEU7O0lBNkIxRSxpREFXQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCUkVBRENSVU1CUy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkl0ZW1cIlxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJU21hcnRCcmVhZGNydW1ic0l0ZW0ge1xuICAgIC8qKlxuICAgICAqIGl0ZW0ncyBsYWJlbFxuICAgICAqL1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgICAqL1xuICAgIHBheWxvYWQ6IGFueTtcbiAgICAvKipcbiAgICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNsYXNzZXM/OiBhbnk7XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAgICovXG4gICAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiRGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVNtYXJ0QnJlYWRjcnVtYnNEYXRhIHtcbiAgICAvKipcbiAgICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGJyZWFkY3J1bWIgbGV2ZWxcbiAgICAgKi9cbiAgICBpdGVtczogSVNtYXJ0QnJlYWRjcnVtYnNJdGVtW107XG4gICAgLyoqXG4gICAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICAgKi9cbiAgICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ243LXNtYXJ0LWJyZWFkY3J1bWJzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtYnJlYWRjcnVtYnMuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIGRhdGE6IElTbWFydEJyZWFkY3J1bWJzRGF0YTtcbiAgICBASW5wdXQoKSBlbWl0OiBhbnk7XG4gICAgQFZpZXdDaGlsZCgnYmNvbCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBiY29sOiBFbGVtZW50UmVmXG4gICAgQFZpZXdDaGlsZCgnYmNkaXYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgYmNkaXY6IEVsZW1lbnRSZWZcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYmNkaXYgJiYgdGhpcy5iY29sKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50V2lkdGggPSB0aGlzLmJjZGl2Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgICAgIHZhciBjaGlsZFdpZHRoID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgICAgIHZhciBsaUFycmF5ID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5cbiAgICAgICAgICAgIGlmIChwYXJlbnRXaWR0aCA9PT0gY2hpbGRXaWR0aCkgeyAvLyBjb2xsYXBzZSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICBsZXQgaSA9IDEgLy8gU2tpcCBlbGVtZW50IGluIHBvc2l0aW9uIDBcbiAgICAgICAgICAgICAgICB3aGlsZSAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGggJiYgaSA8IGxpQXJyYXkubGVuZ3RoIC0gMSkgeyAvLyBTa2lwIGxhc3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBsZXQgdGlwcHlEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKSAvLyBpbml0aWFsaXplIHRpcHB5IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgdGlwcHlEYXRhLmNsYXNzTmFtZSA9ICduNy1zbWFydC1icmVhZGNydW1ic19fdGlwcHktY29udGVudCdcbiAgICAgICAgICAgICAgICAgICAgdGlwcHlEYXRhLmFwcGVuZENoaWxkKGxpQXJyYXlbaV0uY2xvbmVOb2RlKHRydWUpKSAvLyBhZGQgPGxpPiB0byB0aXBweSBkYXRhICg8b2w+KVxuICAgICAgICAgICAgICAgICAgICBsaUFycmF5W2ldLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9ICfigKYnIC8vIGNvbnZlcnQgdG8gZWxsaXBzaXNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXBweUJ1aWxkZXIobGlBcnJheVtpXSwgdGlwcHlEYXRhKSAvLyBhcHBlbmQgdG9vbHRpcCB0byBlbGxpcHNpc1xuICAgICAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHdpZHRoc1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRXaWR0aCA9IHRoaXMuYmNkaXYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFdpZHRoID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICAgIH1cblxuICAgIHRpcHB5QnVpbGRlciA9IChub2RlLCBjb250ZW50KSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBCdWlsZHMgdGlwcHkgZGF0YSBmb3IgYSBub2RlLlxuICAgICAgICAqL1xuICAgICAgICB0aXBweShub2RlLCB7XG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICAgICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHkgLy8gc2lsZW5jZSB0aXBweSBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG4iXX0=