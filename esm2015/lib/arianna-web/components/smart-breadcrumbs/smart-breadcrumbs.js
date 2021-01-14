//---------------------------
// BREADCRUMBS.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, ElementRef, } from '@angular/core';
import tippy from 'tippy.js';
let SmartBreadcrumbsComponent = class SmartBreadcrumbsComponent {
    constructor() {
        /**
         * Builds tippy data for a node.
         */
        this.tippyBuilder = (node, content) => tippy(node, {
            content,
            interactive: true,
            arrow: true,
            theme: 'light-border no-padding',
            appendTo: document.body,
        });
        this.getWidths = (parent, child) => {
            const pw = parent.nativeElement.clientWidth;
            const cw = child.nativeElement.clientWidth;
            const pp = this.getSidePadding(parent.nativeElement);
            return { parentWidth: pw - pp, childWidth: cw };
        };
        this.getSidePadding = (node) => (
        // returns an integer representing the sum of left and right paddings
        (+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
            + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0]));
    }
    ngAfterViewInit() {
        if (this.bcdiv && this.bcol) {
            let { parentWidth, childWidth } = this.getWidths(this.bcdiv, this.bcol);
            const liArray = this.bcol.nativeElement.children;
            if (parentWidth === childWidth) { // collapse condition
                let i = 1; // Skip element in position 0
                while (parentWidth === childWidth && i < liArray.length - 1) { // Skip last element
                    const tippyData = document.createElement('ol'); // initialize tippy data
                    tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                    tippyData.appendChild(liArray[i].cloneNode(true)); // add <li> to tippy data (<ol>)
                    liArray[i].children[0].innerText = '…'; // convert to ellipsis
                    liArray[i].className = 'n7-breadcrumbs__item-ellipsis'; // set class to list item
                    this.tippyBuilder(liArray[i].children[0], tippyData); // append tooltip to ellipsis
                    i += 1;
                    // update widths
                    ({ parentWidth, childWidth } = this.getWidths(this.bcdiv, this.bcol));
                }
            }
        }
    }
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SmartBreadcrumbsComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SmartBreadcrumbsComponent.prototype, "emit", void 0);
__decorate([
    ViewChild('bcol', { read: ElementRef }),
    __metadata("design:type", ElementRef)
], SmartBreadcrumbsComponent.prototype, "bcol", void 0);
__decorate([
    ViewChild('bcdiv', { read: ElementRef }),
    __metadata("design:type", ElementRef)
], SmartBreadcrumbsComponent.prototype, "bcdiv", void 0);
SmartBreadcrumbsComponent = __decorate([
    Component({
        selector: 'n7-smart-breadcrumbs',
        template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\r\n    <nav class=\"n7-breadcrumbs__nav\">\r\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\r\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\r\n                <span class=\"ellipsis-target\">\r\n                    <n7-anchor-wrapper [classes]=\"item.classes\"\r\n                        [data]=\"item.anchor\"\r\n                        (clicked)=\"onClick($event)\">\r\n                        {{ item.label }}\r\n                    </n7-anchor-wrapper>\r\n                </span>\r\n            </li>\r\n        </ol>\r\n    </nav>\r\n</div>\r\n"
    })
], SmartBreadcrumbsComponent);
export { SmartBreadcrumbsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsR0FDeEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBcUQ3QixJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUF0QztRQW1DRTs7V0FFRztRQUNILGlCQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzVDLE9BQU87WUFDUCxXQUFXLEVBQUUsSUFBSTtZQUNqQixLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1NBQ3hCLENBQUMsQ0FBQztRQUVILGNBQVMsR0FBRyxDQUFDLE1BQWtCLEVBQUUsS0FBaUIsRUFBRSxFQUFFO1lBQ3BELE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBQzVDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBQzNDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDbEQsQ0FBQyxDQUFBO1FBRUQsbUJBQWMsR0FBRyxD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QTFEWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBCUkVBRENSVU1CUy50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiSXRlbVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTbWFydEJyZWFkY3J1bWJzSXRlbSB7XHJcbiAgLyoqXHJcbiAgICogaXRlbSdzIGxhYmVsXHJcbiAgICovXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNtYXJ0QnJlYWRjcnVtYnNEYXRhIHtcclxuICAvKipcclxuICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGJyZWFkY3J1bWIgbGV2ZWxcclxuICAgKi9cclxuICBpdGVtczogU21hcnRCcmVhZGNydW1ic0l0ZW1bXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctc21hcnQtYnJlYWRjcnVtYnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1icmVhZGNydW1icy5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgZGF0YTogU21hcnRCcmVhZGNydW1ic0RhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmNvbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBiY29sOiBFbGVtZW50UmVmXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2JjZGl2JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJjZGl2OiBFbGVtZW50UmVmXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmJjZGl2ICYmIHRoaXMuYmNvbCkge1xyXG4gICAgICBsZXQgeyBwYXJlbnRXaWR0aCwgY2hpbGRXaWR0aCB9ID0gdGhpcy5nZXRXaWR0aHModGhpcy5iY2RpdiwgdGhpcy5iY29sKTtcclxuICAgICAgY29uc3QgbGlBcnJheSA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgICBpZiAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGgpIHsgLy8gY29sbGFwc2UgY29uZGl0aW9uXHJcbiAgICAgICAgbGV0IGkgPSAxOyAvLyBTa2lwIGVsZW1lbnQgaW4gcG9zaXRpb24gMFxyXG4gICAgICAgIHdoaWxlIChwYXJlbnRXaWR0aCA9PT0gY2hpbGRXaWR0aCAmJiBpIDwgbGlBcnJheS5sZW5ndGggLSAxKSB7IC8vIFNraXAgbGFzdCBlbGVtZW50XHJcbiAgICAgICAgICBjb25zdCB0aXBweURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpOyAvLyBpbml0aWFsaXplIHRpcHB5IGRhdGFcclxuICAgICAgICAgIHRpcHB5RGF0YS5jbGFzc05hbWUgPSAnbjctc21hcnQtYnJlYWRjcnVtYnNfX3RpcHB5LWNvbnRlbnQnO1xyXG4gICAgICAgICAgdGlwcHlEYXRhLmFwcGVuZENoaWxkKGxpQXJyYXlbaV0uY2xvbmVOb2RlKHRydWUpKTsgLy8gYWRkIDxsaT4gdG8gdGlwcHkgZGF0YSAoPG9sPilcclxuICAgICAgICAgIGxpQXJyYXlbaV0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJ+KApic7IC8vIGNvbnZlcnQgdG8gZWxsaXBzaXNcclxuICAgICAgICAgIGxpQXJyYXlbaV0uY2xhc3NOYW1lID0gJ243LWJyZWFkY3J1bWJzX19pdGVtLWVsbGlwc2lzJzsgLy8gc2V0IGNsYXNzIHRvIGxpc3QgaXRlbVxyXG4gICAgICAgICAgdGhpcy50aXBweUJ1aWxkZXIobGlBcnJheVtpXS5jaGlsZHJlblswXSwgdGlwcHlEYXRhKTsgLy8gYXBwZW5kIHRvb2x0aXAgdG8gZWxsaXBzaXNcclxuICAgICAgICAgIGkgKz0gMTtcclxuICAgICAgICAgIC8vIHVwZGF0ZSB3aWR0aHNcclxuICAgICAgICAgICh7IHBhcmVudFdpZHRoLCBjaGlsZFdpZHRoIH0gPSB0aGlzLmdldFdpZHRocyh0aGlzLmJjZGl2LCB0aGlzLmJjb2wpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyB0aXBweSBkYXRhIGZvciBhIG5vZGUuXHJcbiAgICovXHJcbiAgdGlwcHlCdWlsZGVyID0gKG5vZGUsIGNvbnRlbnQpID0+IHRpcHB5KG5vZGUsIHtcclxuICAgIGNvbnRlbnQsXHJcbiAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgIGFycm93OiB0cnVlLFxyXG4gICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXHJcbiAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc2lsZW5jZSB0aXBweSBpbnRlcmFjdGl2ZSB3YXJuaW5nXHJcbiAgfSk7XHJcblxyXG4gIGdldFdpZHRocyA9IChwYXJlbnQ6IEVsZW1lbnRSZWYsIGNoaWxkOiBFbGVtZW50UmVmKSA9PiB7XHJcbiAgICBjb25zdCBwdyA9IHBhcmVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgY3cgPSBjaGlsZC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgcHAgPSB0aGlzLmdldFNpZGVQYWRkaW5nKHBhcmVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgIHJldHVybiB7IHBhcmVudFdpZHRoOiBwdyAtIHBwLCBjaGlsZFdpZHRoOiBjdyB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lkZVBhZGRpbmcgPSAobm9kZSkgPT4gKFxyXG4gICAgLy8gcmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgc3VtIG9mIGxlZnQgYW5kIHJpZ2h0IHBhZGRpbmdzXHJcbiAgICAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpLm1hdGNoKC9cXGQrLylbMF0pXHJcbiAgICArICgrd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpLm1hdGNoKC9cXGQrLylbMF0pXHJcbiAgKVxyXG59XHJcbiJdfQ==