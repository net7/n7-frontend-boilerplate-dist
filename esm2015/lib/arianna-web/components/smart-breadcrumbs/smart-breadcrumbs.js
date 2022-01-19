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
        /** Calculate the width of an HTML Element and it's child */
        this.getWidths = (parent, child) => {
            const pw = parent.nativeElement.clientWidth; // parent width
            const cw = child.nativeElement.clientWidth; // child width
            const pp = this.getSidePadding(parent.nativeElement); // parent padding
            return { parentWidth: pw - pp, childWidth: cw };
        };
        this.getSidePadding = (node) => (
        // returns an integer representing the sum of left and right paddings
        (+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
            + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0]));
        /**
         * Checks if the smart ellipsis functionality should be enabled,
         * if the children elements are too wide, it enables it.
         */
        this.triggerSmartEllipsis = () => {
            if (this.bcdiv && this.bcol) {
                let { parentWidth, childWidth } = this.getWidths(this.bcdiv, this.bcol);
                const liArray = this.bcol.nativeElement.children;
                if (parentWidth <= childWidth) { // collapse condition
                    let i = 1; // Skip element in position 0
                    while (parentWidth <= childWidth && i < liArray.length - 1) { // Skip last element
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
        };
    }
    ngAfterViewChecked() {
        this.triggerSmartEllipsis();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsR0FDeEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBcUQ3QixJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUF0QztRQWtCRTs7V0FFRztRQUNILGlCQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzVDLE9BQU87WUFDUCxXQUFXLEVBQUUsSUFBSTtZQUNqQixLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1NBQ3hCLENBQUMsQ0FBQztRQUVILDREQUE0RDtRQUM1RCxjQUFTLEdBQUcsQ0FBQyxNQUFrQixFQUFFLEtBQWlCLEVBQUUsRUFBRTtZQUNwRCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGVBQWU7WUFDNUQsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjO1lBQzFELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO1lBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFB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RSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7OEJBQVEsVUFBVTt3REFBQTtBQVBoRCx5QkFBeUI7SUFMckMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxpc0JBQXVDO0tBQ3hDLENBQUM7R0FFVyx5QkFBeUIsQ0FtRXJDO1NBbkVZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEJSRUFEQ1JVTUJTLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIEJyZWFkY3J1bWJzQ29tcG9uZW50J3MgXCJJdGVtXCJcclxuICpcclxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNtYXJ0QnJlYWRjcnVtYnNJdGVtIHtcclxuICAvKipcclxuICAgKiBpdGVtJ3MgbGFiZWxcclxuICAgKi9cclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcclxuICAgKi9cclxuICBwYXlsb2FkOiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xyXG4gICAqL1xyXG4gIF9tZXRhPzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiRGF0YVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU21hcnRCcmVhZGNydW1ic0RhdGEge1xyXG4gIC8qKlxyXG4gICAqIGVhY2ggaXRlbSByZW5kZXJzIGEgYnJlYWRjcnVtYiBsZXZlbFxyXG4gICAqL1xyXG4gIGl0ZW1zOiBTbWFydEJyZWFkY3J1bWJzSXRlbVtdO1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1zbWFydC1icmVhZGNydW1icycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LWJyZWFkY3J1bWJzLmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNtYXJ0QnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBTbWFydEJyZWFkY3J1bWJzRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBAVmlld0NoaWxkKCdiY29sJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJjb2w6IEVsZW1lbnRSZWZcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmNkaXYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYmNkaXY6IEVsZW1lbnRSZWZcclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyU21hcnRFbGxpcHNpcygpO1xyXG4gIH1cclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIHRpcHB5IGRhdGEgZm9yIGEgbm9kZS5cclxuICAgKi9cclxuICB0aXBweUJ1aWxkZXIgPSAobm9kZSwgY29udGVudCkgPT4gdGlwcHkobm9kZSwge1xyXG4gICAgY29udGVudCxcclxuICAgIGludGVyYWN0aXZlOiB0cnVlLFxyXG4gICAgYXJyb3c6IHRydWUsXHJcbiAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcclxuICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzaWxlbmNlIHRpcHB5IGludGVyYWN0aXZlIHdhcm5pbmdcclxuICB9KTtcclxuXHJcbiAgLyoqIENhbGN1bGF0ZSB0aGUgd2lkdGggb2YgYW4gSFRNTCBFbGVtZW50IGFuZCBpdCdzIGNoaWxkICovXHJcbiAgZ2V0V2lkdGhzID0gKHBhcmVudDogRWxlbWVudFJlZiwgY2hpbGQ6IEVsZW1lbnRSZWYpID0+IHtcclxuICAgIGNvbnN0IHB3ID0gcGFyZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7IC8vIHBhcmVudCB3aWR0aFxyXG4gICAgY29uc3QgY3cgPSBjaGlsZC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoOyAvLyBjaGlsZCB3aWR0aFxyXG4gICAgY29uc3QgcHAgPSB0aGlzLmdldFNpZGVQYWRkaW5nKHBhcmVudC5uYXRpdmVFbGVtZW50KTsgLy8gcGFyZW50IHBhZGRpbmdcclxuICAgIHJldHVybiB7IHBhcmVudFdpZHRoOiBwdyAtIHBwLCBjaGlsZFdpZHRoOiBjdyB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lkZVBhZGRpbmcgPSAobm9kZSkgPT4gKFxyXG4gICAgLy8gcmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgc3VtIG9mIGxlZnQgYW5kIHJpZ2h0IHBhZGRpbmdzXHJcbiAgICAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpLm1hdGNoKC9cXGQrLylbMF0pXHJcbiAgICArICgrd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpLm1hdGNoKC9cXGQrLylbMF0pXHJcbiAgKVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHNtYXJ0IGVsbGlwc2lzIGZ1bmN0aW9uYWxpdHkgc2hvdWxkIGJlIGVuYWJsZWQsXHJcbiAgICogaWYgdGhlIGNoaWxkcmVuIGVsZW1lbnRzIGFyZSB0b28gd2lkZSwgaXQgZW5hYmxlcyBpdC5cclxuICAgKi9cclxuICB0cmlnZ2VyU21hcnRFbGxpcHNpcyA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmJjZGl2ICYmIHRoaXMuYmNvbCkge1xyXG4gICAgICBsZXQgeyBwYXJlbnRXaWR0aCwgY2hpbGRXaWR0aCB9ID0gdGhpcy5nZXRXaWR0aHModGhpcy5iY2RpdiwgdGhpcy5iY29sKTtcclxuICAgICAgY29uc3QgbGlBcnJheSA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgICBpZiAocGFyZW50V2lkdGggPD0gY2hpbGRXaWR0aCkgeyAvLyBjb2xsYXBzZSBjb25kaXRpb25cclxuICAgICAgICBsZXQgaSA9IDE7IC8vIFNraXAgZWxlbWVudCBpbiBwb3NpdGlvbiAwXHJcbiAgICAgICAgd2hpbGUgKHBhcmVudFdpZHRoIDw9IGNoaWxkV2lkdGggJiYgaSA8IGxpQXJyYXkubGVuZ3RoIC0gMSkgeyAvLyBTa2lwIGxhc3QgZWxlbWVudFxyXG4gICAgICAgICAgY29uc3QgdGlwcHlEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTsgLy8gaW5pdGlhbGl6ZSB0aXBweSBkYXRhXHJcbiAgICAgICAgICB0aXBweURhdGEuY2xhc3NOYW1lID0gJ243LXNtYXJ0LWJyZWFkY3J1bWJzX190aXBweS1jb250ZW50JztcclxuICAgICAgICAgIHRpcHB5RGF0YS5hcHBlbmRDaGlsZChsaUFycmF5W2ldLmNsb25lTm9kZSh0cnVlKSk7IC8vIGFkZCA8bGk+IHRvIHRpcHB5IGRhdGEgKDxvbD4pXHJcbiAgICAgICAgICBsaUFycmF5W2ldLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9ICfigKYnOyAvLyBjb252ZXJ0IHRvIGVsbGlwc2lzXHJcbiAgICAgICAgICBsaUFycmF5W2ldLmNsYXNzTmFtZSA9ICduNy1icmVhZGNydW1ic19faXRlbS1lbGxpcHNpcyc7IC8vIHNldCBjbGFzcyB0byBsaXN0IGl0ZW1cclxuICAgICAgICAgIHRoaXMudGlwcHlCdWlsZGVyKGxpQXJyYXlbaV0uY2hpbGRyZW5bMF0sIHRpcHB5RGF0YSk7IC8vIGFwcGVuZCB0b29sdGlwIHRvIGVsbGlwc2lzXHJcbiAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgICAvLyB1cGRhdGUgd2lkdGhzXHJcbiAgICAgICAgICAoeyBwYXJlbnRXaWR0aCwgY2hpbGRXaWR0aCB9ID0gdGhpcy5nZXRXaWR0aHModGhpcy5iY2RpdiwgdGhpcy5iY29sKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==