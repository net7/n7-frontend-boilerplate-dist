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
        template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <span class=\"ellipsis-target\">\n                    <n7-anchor-wrapper [classes]=\"item.classes\"\n                        [data]=\"item.anchor\"\n                        (clicked)=\"onClick($event)\">\n                        {{ item.label }}\n                    </n7-anchor-wrapper>\n                </span>\n            </li>\n        </ol>\n    </nav>\n</div>\n"
    })
], SmartBreadcrumbsComponent);
export { SmartBreadcrumbsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsR0FDeEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBcUQ3QixJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUF0QztRQWtCRTs7V0FFRztRQUNILGlCQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzVDLE9BQU87WUFDUCxXQUFXLEVBQUUsSUFBSTtZQUNqQixLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1NBQ3hCLENBQUMsQ0FBQztRQUVILDREQUE0RDtRQUM1RCxjQUFTLEdBQUcsQ0FBQyxNQUFrQixFQUFFLEtBQWlCLEVBQUUsRUFBRTtZQUNwRCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGVBQWU7WUFDNUQsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjO1lBQzFELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO1lBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFB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RSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7OEJBQVEsVUFBVTt3REFBQTtBQVBoRCx5QkFBeUI7SUFMckMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxtcUJBQXVDO0tBQ3hDLENBQUM7R0FFVyx5QkFBeUIsQ0FtRXJDO1NBbkVZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCUkVBRENSVU1CUy50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdDaGVja2VkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiSXRlbVwiXG4gKlxuICogQHByb3BlcnR5IGxhYmVsIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqIEBwcm9wZXJ0eSBfbWV0YSAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNtYXJ0QnJlYWRjcnVtYnNJdGVtIHtcbiAgLyoqXG4gICAqIGl0ZW0ncyBsYWJlbFxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIGFjdGlvbiBjbGljaydzIHBheWxvYWRcbiAgICovXG4gIHBheWxvYWQ6IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXG4gICAqL1xuICBfbWV0YT86IGFueTtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIEJyZWFkY3J1bWJzQ29tcG9uZW50J3MgXCJEYXRhXCJcbiAqXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbWFydEJyZWFkY3J1bWJzRGF0YSB7XG4gIC8qKlxuICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGJyZWFkY3J1bWIgbGV2ZWxcbiAgICovXG4gIGl0ZW1zOiBTbWFydEJyZWFkY3J1bWJzSXRlbVtdO1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LXNtYXJ0LWJyZWFkY3J1bWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LWJyZWFkY3J1bWJzLmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIFNtYXJ0QnJlYWRjcnVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogU21hcnRCcmVhZGNydW1ic0RhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ2Jjb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYmNvbDogRWxlbWVudFJlZlxuXG4gIEBWaWV3Q2hpbGQoJ2JjZGl2JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJjZGl2OiBFbGVtZW50UmVmXG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMudHJpZ2dlclNtYXJ0RWxsaXBzaXMoKTtcbiAgfVxuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aXBweSBkYXRhIGZvciBhIG5vZGUuXG4gICAqL1xuICB0aXBweUJ1aWxkZXIgPSAobm9kZSwgY29udGVudCkgPT4gdGlwcHkobm9kZSwge1xuICAgIGNvbnRlbnQsXG4gICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgYXJyb3c6IHRydWUsXG4gICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHNpbGVuY2UgdGlwcHkgaW50ZXJhY3RpdmUgd2FybmluZ1xuICB9KTtcblxuICAvKiogQ2FsY3VsYXRlIHRoZSB3aWR0aCBvZiBhbiBIVE1MIEVsZW1lbnQgYW5kIGl0J3MgY2hpbGQgKi9cbiAgZ2V0V2lkdGhzID0gKHBhcmVudDogRWxlbWVudFJlZiwgY2hpbGQ6IEVsZW1lbnRSZWYpID0+IHtcbiAgICBjb25zdCBwdyA9IHBhcmVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoOyAvLyBwYXJlbnQgd2lkdGhcbiAgICBjb25zdCBjdyA9IGNoaWxkLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7IC8vIGNoaWxkIHdpZHRoXG4gICAgY29uc3QgcHAgPSB0aGlzLmdldFNpZGVQYWRkaW5nKHBhcmVudC5uYXRpdmVFbGVtZW50KTsgLy8gcGFyZW50IHBhZGRpbmdcbiAgICByZXR1cm4geyBwYXJlbnRXaWR0aDogcHcgLSBwcCwgY2hpbGRXaWR0aDogY3cgfTtcbiAgfVxuXG4gIGdldFNpZGVQYWRkaW5nID0gKG5vZGUpID0+IChcbiAgICAvLyByZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBzdW0gb2YgbGVmdCBhbmQgcmlnaHQgcGFkZGluZ3NcbiAgICAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpLm1hdGNoKC9cXGQrLylbMF0pXG4gICAgKyAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKS5tYXRjaCgvXFxkKy8pWzBdKVxuICApXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc21hcnQgZWxsaXBzaXMgZnVuY3Rpb25hbGl0eSBzaG91bGQgYmUgZW5hYmxlZCxcbiAgICogaWYgdGhlIGNoaWxkcmVuIGVsZW1lbnRzIGFyZSB0b28gd2lkZSwgaXQgZW5hYmxlcyBpdC5cbiAgICovXG4gIHRyaWdnZXJTbWFydEVsbGlwc2lzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmJjZGl2ICYmIHRoaXMuYmNvbCkge1xuICAgICAgbGV0IHsgcGFyZW50V2lkdGgsIGNoaWxkV2lkdGggfSA9IHRoaXMuZ2V0V2lkdGhzKHRoaXMuYmNkaXYsIHRoaXMuYmNvbCk7XG4gICAgICBjb25zdCBsaUFycmF5ID0gdGhpcy5iY29sLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW47XG4gICAgICBpZiAocGFyZW50V2lkdGggPD0gY2hpbGRXaWR0aCkgeyAvLyBjb2xsYXBzZSBjb25kaXRpb25cbiAgICAgICAgbGV0IGkgPSAxOyAvLyBTa2lwIGVsZW1lbnQgaW4gcG9zaXRpb24gMFxuICAgICAgICB3aGlsZSAocGFyZW50V2lkdGggPD0gY2hpbGRXaWR0aCAmJiBpIDwgbGlBcnJheS5sZW5ndGggLSAxKSB7IC8vIFNraXAgbGFzdCBlbGVtZW50XG4gICAgICAgICAgY29uc3QgdGlwcHlEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTsgLy8gaW5pdGlhbGl6ZSB0aXBweSBkYXRhXG4gICAgICAgICAgdGlwcHlEYXRhLmNsYXNzTmFtZSA9ICduNy1zbWFydC1icmVhZGNydW1ic19fdGlwcHktY29udGVudCc7XG4gICAgICAgICAgdGlwcHlEYXRhLmFwcGVuZENoaWxkKGxpQXJyYXlbaV0uY2xvbmVOb2RlKHRydWUpKTsgLy8gYWRkIDxsaT4gdG8gdGlwcHkgZGF0YSAoPG9sPilcbiAgICAgICAgICBsaUFycmF5W2ldLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9ICfigKYnOyAvLyBjb252ZXJ0IHRvIGVsbGlwc2lzXG4gICAgICAgICAgbGlBcnJheVtpXS5jbGFzc05hbWUgPSAnbjctYnJlYWRjcnVtYnNfX2l0ZW0tZWxsaXBzaXMnOyAvLyBzZXQgY2xhc3MgdG8gbGlzdCBpdGVtXG4gICAgICAgICAgdGhpcy50aXBweUJ1aWxkZXIobGlBcnJheVtpXS5jaGlsZHJlblswXSwgdGlwcHlEYXRhKTsgLy8gYXBwZW5kIHRvb2x0aXAgdG8gZWxsaXBzaXNcbiAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgLy8gdXBkYXRlIHdpZHRoc1xuICAgICAgICAgICh7IHBhcmVudFdpZHRoLCBjaGlsZFdpZHRoIH0gPSB0aGlzLmdldFdpZHRocyh0aGlzLmJjZGl2LCB0aGlzLmJjb2wpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19