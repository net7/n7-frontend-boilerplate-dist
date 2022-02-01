//---------------------------
// BREADCRUMBS.ts
//---------------------------
import { Component, Input, ViewChild, ElementRef, } from '@angular/core';
import tippy from 'tippy.js';
import * as i0 from "@angular/core";
import * as i1 from "@n7-frontend/components";
import * as i2 from "@angular/common";
export class SmartBreadcrumbsComponent {
    constructor() {
        /**
         * Builds tippy data for a node.
         */
        this.tippyBuilder = (node, content) => tippy(node, {
            content,
            interactive: true,
            arrow: true,
            theme: 'light-border no-padding',
            appendTo: document.body, // silence tippy interactive warning
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
}
SmartBreadcrumbsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: SmartBreadcrumbsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SmartBreadcrumbsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: SmartBreadcrumbsComponent, selector: "n7-smart-breadcrumbs", inputs: { data: "data", emit: "emit" }, viewQueries: [{ propertyName: "bcol", first: true, predicate: ["bcol"], descendants: true, read: ElementRef }, { propertyName: "bcdiv", first: true, predicate: ["bcdiv"], descendants: true, read: ElementRef }], ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <span class=\"ellipsis-target\">\n                    <n7-anchor-wrapper [classes]=\"item.classes\"\n                        [data]=\"item.anchor\"\n                        (clicked)=\"onClick($event)\">\n                        {{ item.label }}\n                    </n7-anchor-wrapper>\n                </span>\n            </li>\n        </ol>\n    </nav>\n</div>\n", components: [{ type: i1.AnchorWrapperComponent, selector: "n7-anchor-wrapper", inputs: ["data", "classes"], outputs: ["clicked"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: SmartBreadcrumbsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-smart-breadcrumbs', template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\n    <nav class=\"n7-breadcrumbs__nav\">\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\n                <span class=\"ellipsis-target\">\n                    <n7-anchor-wrapper [classes]=\"item.classes\"\n                        [data]=\"item.anchor\"\n                        (clicked)=\"onClick($event)\">\n                        {{ item.label }}\n                    </n7-anchor-wrapper>\n                </span>\n            </li>\n        </ol>\n    </nav>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }], bcol: [{
                type: ViewChild,
                args: ['bcol', { read: ElementRef }]
            }], bcdiv: [{
                type: ViewChild,
                args: ['bcdiv', { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9jb21wb25lbnRzL3NtYXJ0LWJyZWFkY3J1bWJzL3NtYXJ0LWJyZWFkY3J1bWJzLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakIsNkJBQTZCO0FBRTdCLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEdBQ3hDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQzs7OztBQXFEN0IsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQXVCRTs7V0FFRztRQUNILGlCQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzVDLE9BQU87WUFDUCxXQUFXLEVBQUUsSUFBSTtZQUNqQixLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsb0NBQW9DO1NBQzlELENBQUMsQ0FBQztRQUVILDREQUE0RDtRQUM1RCxjQUFTLEdBQUcsQ0FBQyxNQUFrQixFQUFFLEtBQWlCLEVBQUUsRUFBRTtZQUNwRCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGVBQWU7WUFDNUQsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMs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LHlGQUVULFVBQVUsNkJDbkV4Qyx5cEJBZUE7MkZENkNhLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSxzQkFBc0I7OEJBS3ZCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRW1DLElBQUk7c0JBQTVDLFNBQVM7dUJBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFFRyxLQUFLO3NCQUE5QyxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQlJFQURDUlVNQlMudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3Q2hlY2tlZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkl0ZW1cIlxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbWFydEJyZWFkY3J1bWJzSXRlbSB7XG4gIC8qKlxuICAgKiBpdGVtJ3MgbGFiZWxcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiRGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU21hcnRCcmVhZGNydW1ic0RhdGEge1xuICAvKipcbiAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBicmVhZGNydW1iIGxldmVsXG4gICAqL1xuICBpdGVtczogU21hcnRCcmVhZGNydW1ic0l0ZW1bXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1zbWFydC1icmVhZGNydW1icycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1icmVhZGNydW1icy5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IFNtYXJ0QnJlYWRjcnVtYnNEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBAVmlld0NoaWxkKCdiY29sJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJjb2w6IEVsZW1lbnRSZWZcblxuICBAVmlld0NoaWxkKCdiY2RpdicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBiY2RpdjogRWxlbWVudFJlZlxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXJTbWFydEVsbGlwc2lzKCk7XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGlwcHkgZGF0YSBmb3IgYSBub2RlLlxuICAgKi9cbiAgdGlwcHlCdWlsZGVyID0gKG5vZGUsIGNvbnRlbnQpID0+IHRpcHB5KG5vZGUsIHtcbiAgICBjb250ZW50LFxuICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgIGFycm93OiB0cnVlLFxuICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzaWxlbmNlIHRpcHB5IGludGVyYWN0aXZlIHdhcm5pbmdcbiAgfSk7XG5cbiAgLyoqIENhbGN1bGF0ZSB0aGUgd2lkdGggb2YgYW4gSFRNTCBFbGVtZW50IGFuZCBpdCdzIGNoaWxkICovXG4gIGdldFdpZHRocyA9IChwYXJlbnQ6IEVsZW1lbnRSZWYsIGNoaWxkOiBFbGVtZW50UmVmKSA9PiB7XG4gICAgY29uc3QgcHcgPSBwYXJlbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDsgLy8gcGFyZW50IHdpZHRoXG4gICAgY29uc3QgY3cgPSBjaGlsZC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoOyAvLyBjaGlsZCB3aWR0aFxuICAgIGNvbnN0IHBwID0gdGhpcy5nZXRTaWRlUGFkZGluZyhwYXJlbnQubmF0aXZlRWxlbWVudCk7IC8vIHBhcmVudCBwYWRkaW5nXG4gICAgcmV0dXJuIHsgcGFyZW50V2lkdGg6IHB3IC0gcHAsIGNoaWxkV2lkdGg6IGN3IH07XG4gIH1cblxuICBnZXRTaWRlUGFkZGluZyA9IChub2RlKSA9PiAoXG4gICAgLy8gcmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgc3VtIG9mIGxlZnQgYW5kIHJpZ2h0IHBhZGRpbmdzXG4gICAgKCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKS5tYXRjaCgvXFxkKy8pWzBdKVxuICAgICsgKCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykubWF0Y2goL1xcZCsvKVswXSlcbiAgKVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNtYXJ0IGVsbGlwc2lzIGZ1bmN0aW9uYWxpdHkgc2hvdWxkIGJlIGVuYWJsZWQsXG4gICAqIGlmIHRoZSBjaGlsZHJlbiBlbGVtZW50cyBhcmUgdG9vIHdpZGUsIGl0IGVuYWJsZXMgaXQuXG4gICAqL1xuICB0cmlnZ2VyU21hcnRFbGxpcHNpcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5iY2RpdiAmJiB0aGlzLmJjb2wpIHtcbiAgICAgIGxldCB7IHBhcmVudFdpZHRoLCBjaGlsZFdpZHRoIH0gPSB0aGlzLmdldFdpZHRocyh0aGlzLmJjZGl2LCB0aGlzLmJjb2wpO1xuICAgICAgY29uc3QgbGlBcnJheSA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuO1xuICAgICAgaWYgKHBhcmVudFdpZHRoIDw9IGNoaWxkV2lkdGgpIHsgLy8gY29sbGFwc2UgY29uZGl0aW9uXG4gICAgICAgIGxldCBpID0gMTsgLy8gU2tpcCBlbGVtZW50IGluIHBvc2l0aW9uIDBcbiAgICAgICAgd2hpbGUgKHBhcmVudFdpZHRoIDw9IGNoaWxkV2lkdGggJiYgaSA8IGxpQXJyYXkubGVuZ3RoIC0gMSkgeyAvLyBTa2lwIGxhc3QgZWxlbWVudFxuICAgICAgICAgIGNvbnN0IHRpcHB5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7IC8vIGluaXRpYWxpemUgdGlwcHkgZGF0YVxuICAgICAgICAgIHRpcHB5RGF0YS5jbGFzc05hbWUgPSAnbjctc21hcnQtYnJlYWRjcnVtYnNfX3RpcHB5LWNvbnRlbnQnO1xuICAgICAgICAgIHRpcHB5RGF0YS5hcHBlbmRDaGlsZChsaUFycmF5W2ldLmNsb25lTm9kZSh0cnVlKSk7IC8vIGFkZCA8bGk+IHRvIHRpcHB5IGRhdGEgKDxvbD4pXG4gICAgICAgICAgbGlBcnJheVtpXS5jaGlsZHJlblswXS5pbm5lclRleHQgPSAn4oCmJzsgLy8gY29udmVydCB0byBlbGxpcHNpc1xuICAgICAgICAgIGxpQXJyYXlbaV0uY2xhc3NOYW1lID0gJ243LWJyZWFkY3J1bWJzX19pdGVtLWVsbGlwc2lzJzsgLy8gc2V0IGNsYXNzIHRvIGxpc3QgaXRlbVxuICAgICAgICAgIHRoaXMudGlwcHlCdWlsZGVyKGxpQXJyYXlbaV0uY2hpbGRyZW5bMF0sIHRpcHB5RGF0YSk7IC8vIGFwcGVuZCB0b29sdGlwIHRvIGVsbGlwc2lzXG4gICAgICAgICAgaSArPSAxO1xuICAgICAgICAgIC8vIHVwZGF0ZSB3aWR0aHNcbiAgICAgICAgICAoeyBwYXJlbnRXaWR0aCwgY2hpbGRXaWR0aCB9ID0gdGhpcy5nZXRXaWR0aHModGhpcy5iY2RpdiwgdGhpcy5iY29sKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJkYXRhXCIgY2xhc3M9XCJuNy1icmVhZGNydW1icyB7eyBkYXRhLmNsYXNzZXMgfHwgJycgfX1cIiAjYmNkaXY+XG4gICAgPG5hdiBjbGFzcz1cIm43LWJyZWFkY3J1bWJzX19uYXZcIj5cbiAgICAgICAgPG9sIGNsYXNzPVwibjctYnJlYWRjcnVtYnNfX2xpc3RcIiAjYmNvbD5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhLml0ZW1zXCIgY2xhc3M9XCJuNy1icmVhZGNydW1ic19faXRlbSB7eyBpdGVtLmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVsbGlwc2lzLXRhcmdldFwiPlxuICAgICAgICAgICAgICAgICAgICA8bjctYW5jaG9yLXdyYXBwZXIgW2NsYXNzZXNdPVwiaXRlbS5jbGFzc2VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIml0ZW0uYW5jaG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGlja2VkKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICA8L243LWFuY2hvci13cmFwcGVyPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgPC9uYXY+XG48L2Rpdj5cbiJdfQ==