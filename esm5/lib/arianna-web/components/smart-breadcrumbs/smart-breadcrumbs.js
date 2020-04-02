/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsR0FDeEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7OztBQVc3QiwwQ0FpQkM7Ozs7OztJQWJDLHFDQUFjOzs7OztJQUlkLHVDQUFhOzs7OztJQUliLHVDQUFjOzs7OztJQUlkLHFDQUFZOzs7Ozs7Ozs7O0FBVWQsMENBU0M7Ozs7OztJQUxDLHFDQUE4Qjs7Ozs7SUFJOUIsdUNBQWM7O0FBR2hCO0lBQUE7UUFBQSxpQkFnRUM7Ozs7UUFyQkMsaUJBQVk7Ozs7O1FBQUcsVUFBQyxJQUFJLEVBQUUsT0FBTyxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUM1QyxPQUFPLFNBQUE7WUFDUCxXQUFXLEVBQUUsSUFBSTtZQUNqQixLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1NBQ3hCLENBQUMsRUFOZ0MsQ0FNaEMsRUFBQztRQUdILGNBQVM7Ozs7O1FBQUcsVUFBQyxNQUFrQixFQUFFLEtBQWlCOztnQkFDMUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVzs7Z0JBQ3JDLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVc7O2dCQUNwQyxFQUFFLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUs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LVxuLy8gQlJFQURDUlVNQlMudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkl0ZW1cIlxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbWFydEJyZWFkY3J1bWJzSXRlbSB7XG4gIC8qKlxuICAgKiBpdGVtJ3MgbGFiZWxcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiRGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU21hcnRCcmVhZGNydW1ic0RhdGEge1xuICAvKipcbiAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBicmVhZGNydW1iIGxldmVsXG4gICAqL1xuICBpdGVtczogU21hcnRCcmVhZGNydW1ic0l0ZW1bXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1zbWFydC1icmVhZGNydW1icycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1icmVhZGNydW1icy5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IFNtYXJ0QnJlYWRjcnVtYnNEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBAVmlld0NoaWxkKCdiY29sJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGJjb2w6IEVsZW1lbnRSZWZcblxuICBAVmlld0NoaWxkKCdiY2RpdicsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBiY2RpdjogRWxlbWVudFJlZlxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5iY2RpdiAmJiB0aGlzLmJjb2wpIHtcbiAgICAgIGxldCB7IHBhcmVudFdpZHRoLCBjaGlsZFdpZHRoIH0gPSB0aGlzLmdldFdpZHRocyh0aGlzLmJjZGl2LCB0aGlzLmJjb2wpO1xuICAgICAgY29uc3QgbGlBcnJheSA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuO1xuICAgICAgaWYgKHBhcmVudFdpZHRoID09PSBjaGlsZFdpZHRoKSB7IC8vIGNvbGxhcHNlIGNvbmRpdGlvblxuICAgICAgICBsZXQgaSA9IDE7IC8vIFNraXAgZWxlbWVudCBpbiBwb3NpdGlvbiAwXG4gICAgICAgIHdoaWxlIChwYXJlbnRXaWR0aCA9PT0gY2hpbGRXaWR0aCAmJiBpIDwgbGlBcnJheS5sZW5ndGggLSAxKSB7IC8vIFNraXAgbGFzdCBlbGVtZW50XG4gICAgICAgICAgY29uc3QgdGlwcHlEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTsgLy8gaW5pdGlhbGl6ZSB0aXBweSBkYXRhXG4gICAgICAgICAgdGlwcHlEYXRhLmNsYXNzTmFtZSA9ICduNy1zbWFydC1icmVhZGNydW1ic19fdGlwcHktY29udGVudCc7XG4gICAgICAgICAgdGlwcHlEYXRhLmFwcGVuZENoaWxkKGxpQXJyYXlbaV0uY2xvbmVOb2RlKHRydWUpKTsgLy8gYWRkIDxsaT4gdG8gdGlwcHkgZGF0YSAoPG9sPilcbiAgICAgICAgICBsaUFycmF5W2ldLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9ICfigKYnOyAvLyBjb252ZXJ0IHRvIGVsbGlwc2lzXG4gICAgICAgICAgbGlBcnJheVtpXS5jbGFzc05hbWUgPSAnbjctYnJlYWRjcnVtYnNfX2l0ZW0tZWxsaXBzaXMnOyAvLyBzZXQgY2xhc3MgdG8gbGlzdCBpdGVtXG4gICAgICAgICAgdGhpcy50aXBweUJ1aWxkZXIobGlBcnJheVtpXSwgdGlwcHlEYXRhKTsgLy8gYXBwZW5kIHRvb2x0aXAgdG8gZWxsaXBzaXNcbiAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgLy8gdXBkYXRlIHdpZHRoc1xuICAgICAgICAgICh7IHBhcmVudFdpZHRoLCBjaGlsZFdpZHRoIH0gPSB0aGlzLmdldFdpZHRocyh0aGlzLmJjZGl2LCB0aGlzLmJjb2wpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aXBweSBkYXRhIGZvciBhIG5vZGUuXG4gICAqL1xuICB0aXBweUJ1aWxkZXIgPSAobm9kZSwgY29udGVudCkgPT4gdGlwcHkobm9kZSwge1xuICAgIGNvbnRlbnQsXG4gICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgYXJyb3c6IHRydWUsXG4gICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHNpbGVuY2UgdGlwcHkgaW50ZXJhY3RpdmUgd2FybmluZ1xuICB9KTtcblxuXG4gIGdldFdpZHRocyA9IChwYXJlbnQ6IEVsZW1lbnRSZWYsIGNoaWxkOiBFbGVtZW50UmVmKSA9PiB7XG4gICAgY29uc3QgcHcgPSBwYXJlbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBjdyA9IGNoaWxkLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgcHAgPSB0aGlzLmdldFNpZGVQYWRkaW5nKHBhcmVudC5uYXRpdmVFbGVtZW50KTtcbiAgICByZXR1cm4geyBwYXJlbnRXaWR0aDogcHcgLSBwcCwgY2hpbGRXaWR0aDogY3cgfTtcbiAgfVxuXG4gIGdldFNpZGVQYWRkaW5nID0gKG5vZGUpID0+IChcbiAgICAvLyByZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBzdW0gb2YgbGVmdCBhbmQgcmlnaHQgcGFkZGluZ3NcbiAgICAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpLm1hdGNoKC9cXGQrLylbMF0pXG4gICAgKyAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKS5tYXRjaCgvXFxkKy8pWzBdKVxuICApXG59XG4iXX0=