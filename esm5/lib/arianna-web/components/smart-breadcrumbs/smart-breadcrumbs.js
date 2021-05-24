//---------------------------
// BREADCRUMBS.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, ElementRef, } from '@angular/core';
import tippy from 'tippy.js';
var SmartBreadcrumbsComponent = /** @class */ (function () {
    function SmartBreadcrumbsComponent() {
        var _this = this;
        /**
         * Builds tippy data for a node.
         */
        this.tippyBuilder = function (node, content) { return tippy(node, {
            content: content,
            interactive: true,
            arrow: true,
            theme: 'light-border no-padding',
            appendTo: document.body,
        }); };
        /** Calculate the width of an HTML Element and it's child */
        this.getWidths = function (parent, child) {
            var pw = parent.nativeElement.clientWidth; // parent width
            var cw = child.nativeElement.clientWidth; // child width
            var pp = _this.getSidePadding(parent.nativeElement); // parent padding
            return { parentWidth: pw - pp, childWidth: cw };
        };
        this.getSidePadding = function (node) { return (
        // returns an integer representing the sum of left and right paddings
        (+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
            + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0])); };
        /**
         * Checks if the smart ellipsis functionality should be enabled,
         * if the children elements are too wide, it enables it.
         */
        this.triggerSmartEllipsis = function () {
            var _a;
            if (_this.bcdiv && _this.bcol) {
                var _b = _this.getWidths(_this.bcdiv, _this.bcol), parentWidth = _b.parentWidth, childWidth = _b.childWidth;
                var liArray = _this.bcol.nativeElement.children;
                if (parentWidth <= childWidth) { // collapse condition
                    var i = 1; // Skip element in position 0
                    while (parentWidth <= childWidth && i < liArray.length - 1) { // Skip last element
                        var tippyData = document.createElement('ol'); // initialize tippy data
                        tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                        tippyData.appendChild(liArray[i].cloneNode(true)); // add <li> to tippy data (<ol>)
                        liArray[i].children[0].innerText = '…'; // convert to ellipsis
                        liArray[i].className = 'n7-breadcrumbs__item-ellipsis'; // set class to list item
                        _this.tippyBuilder(liArray[i].children[0], tippyData); // append tooltip to ellipsis
                        i += 1;
                        // update widths
                        (_a = _this.getWidths(_this.bcdiv, _this.bcol), parentWidth = _a.parentWidth, childWidth = _a.childWidth);
                    }
                }
            }
        };
    }
    SmartBreadcrumbsComponent.prototype.ngAfterViewChecked = function () {
        this.triggerSmartEllipsis();
    };
    SmartBreadcrumbsComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
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
    return SmartBreadcrumbsComponent;
}());
export { SmartBreadcrumbsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsR0FDeEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBcUQ3QjtJQUFBO1FBQUEsaUJBbUVDO1FBakRDOztXQUVHO1FBQ0gsaUJBQVksR0FBRyxVQUFDLElBQUksRUFBRSxPQUFPLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzVDLE9BQU8sU0FBQTtZQUNQLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUk7U0FDeEIsQ0FBQyxFQU5nQyxDQU1oQyxDQUFDO1FBRUgsNERBQTREO1FBQzVELGNBQVMsR0FBRyxVQUFDLE1BQWtCLEVBQUUsS0FBaUI7WUFDaEQsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxlQUFlO1lBQzVELElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsY0FBYztZQUMxRCxJQUFNLEVBQUUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtZQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2xE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O0lBQUQsZ0NBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQW5FWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQlJFQURDUlVNQlMudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3Q2hlY2tlZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkl0ZW1cIlxuICpcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTbWFydEJyZWFkY3J1bWJzSXRlbSB7XG4gIC8qKlxuICAgKiBpdGVtJ3MgbGFiZWxcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXG4gICAqL1xuICBwYXlsb2FkOiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaW5mbyB1c2VmdWwgZm9yIHRoZSBjb21wb25lbnQncyBsb2dpY1xuICAgKi9cbiAgX21ldGE/OiBhbnk7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiRGF0YVwiXG4gKlxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU21hcnRCcmVhZGNydW1ic0RhdGEge1xuICAvKipcbiAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBicmVhZGNydW1iIGxldmVsXG4gICAqL1xuICBpdGVtczogU21hcnRCcmVhZGNydW1ic0l0ZW1bXTtcbiAgLyoqXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXG4gICAqL1xuICBjbGFzc2VzPzogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1zbWFydC1icmVhZGNydW1icycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1icmVhZGNydW1icy5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGE6IFNtYXJ0QnJlYWRjcnVtYnNEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBAVmlld0NoaWxkKCdiY29sJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJjb2w6IEVsZW1lbnRSZWZcblxuICBAVmlld0NoaWxkKCdiY2RpdicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBiY2RpdjogRWxlbWVudFJlZlxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXJTbWFydEVsbGlwc2lzKCk7XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGlwcHkgZGF0YSBmb3IgYSBub2RlLlxuICAgKi9cbiAgdGlwcHlCdWlsZGVyID0gKG5vZGUsIGNvbnRlbnQpID0+IHRpcHB5KG5vZGUsIHtcbiAgICBjb250ZW50LFxuICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgIGFycm93OiB0cnVlLFxuICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzaWxlbmNlIHRpcHB5IGludGVyYWN0aXZlIHdhcm5pbmdcbiAgfSk7XG5cbiAgLyoqIENhbGN1bGF0ZSB0aGUgd2lkdGggb2YgYW4gSFRNTCBFbGVtZW50IGFuZCBpdCdzIGNoaWxkICovXG4gIGdldFdpZHRocyA9IChwYXJlbnQ6IEVsZW1lbnRSZWYsIGNoaWxkOiBFbGVtZW50UmVmKSA9PiB7XG4gICAgY29uc3QgcHcgPSBwYXJlbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDsgLy8gcGFyZW50IHdpZHRoXG4gICAgY29uc3QgY3cgPSBjaGlsZC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoOyAvLyBjaGlsZCB3aWR0aFxuICAgIGNvbnN0IHBwID0gdGhpcy5nZXRTaWRlUGFkZGluZyhwYXJlbnQubmF0aXZlRWxlbWVudCk7IC8vIHBhcmVudCBwYWRkaW5nXG4gICAgcmV0dXJuIHsgcGFyZW50V2lkdGg6IHB3IC0gcHAsIGNoaWxkV2lkdGg6IGN3IH07XG4gIH1cblxuICBnZXRTaWRlUGFkZGluZyA9IChub2RlKSA9PiAoXG4gICAgLy8gcmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgc3VtIG9mIGxlZnQgYW5kIHJpZ2h0IHBhZGRpbmdzXG4gICAgKCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKS5tYXRjaCgvXFxkKy8pWzBdKVxuICAgICsgKCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykubWF0Y2goL1xcZCsvKVswXSlcbiAgKVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHNtYXJ0IGVsbGlwc2lzIGZ1bmN0aW9uYWxpdHkgc2hvdWxkIGJlIGVuYWJsZWQsXG4gICAqIGlmIHRoZSBjaGlsZHJlbiBlbGVtZW50cyBhcmUgdG9vIHdpZGUsIGl0IGVuYWJsZXMgaXQuXG4gICAqL1xuICB0cmlnZ2VyU21hcnRFbGxpcHNpcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5iY2RpdiAmJiB0aGlzLmJjb2wpIHtcbiAgICAgIGxldCB7IHBhcmVudFdpZHRoLCBjaGlsZFdpZHRoIH0gPSB0aGlzLmdldFdpZHRocyh0aGlzLmJjZGl2LCB0aGlzLmJjb2wpO1xuICAgICAgY29uc3QgbGlBcnJheSA9IHRoaXMuYmNvbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuO1xuICAgICAgaWYgKHBhcmVudFdpZHRoIDw9IGNoaWxkV2lkdGgpIHsgLy8gY29sbGFwc2UgY29uZGl0aW9uXG4gICAgICAgIGxldCBpID0gMTsgLy8gU2tpcCBlbGVtZW50IGluIHBvc2l0aW9uIDBcbiAgICAgICAgd2hpbGUgKHBhcmVudFdpZHRoIDw9IGNoaWxkV2lkdGggJiYgaSA8IGxpQXJyYXkubGVuZ3RoIC0gMSkgeyAvLyBTa2lwIGxhc3QgZWxlbWVudFxuICAgICAgICAgIGNvbnN0IHRpcHB5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7IC8vIGluaXRpYWxpemUgdGlwcHkgZGF0YVxuICAgICAgICAgIHRpcHB5RGF0YS5jbGFzc05hbWUgPSAnbjctc21hcnQtYnJlYWRjcnVtYnNfX3RpcHB5LWNvbnRlbnQnO1xuICAgICAgICAgIHRpcHB5RGF0YS5hcHBlbmRDaGlsZChsaUFycmF5W2ldLmNsb25lTm9kZSh0cnVlKSk7IC8vIGFkZCA8bGk+IHRvIHRpcHB5IGRhdGEgKDxvbD4pXG4gICAgICAgICAgbGlBcnJheVtpXS5jaGlsZHJlblswXS5pbm5lclRleHQgPSAn4oCmJzsgLy8gY29udmVydCB0byBlbGxpcHNpc1xuICAgICAgICAgIGxpQXJyYXlbaV0uY2xhc3NOYW1lID0gJ243LWJyZWFkY3J1bWJzX19pdGVtLWVsbGlwc2lzJzsgLy8gc2V0IGNsYXNzIHRvIGxpc3QgaXRlbVxuICAgICAgICAgIHRoaXMudGlwcHlCdWlsZGVyKGxpQXJyYXlbaV0uY2hpbGRyZW5bMF0sIHRpcHB5RGF0YSk7IC8vIGFwcGVuZCB0b29sdGlwIHRvIGVsbGlwc2lzXG4gICAgICAgICAgaSArPSAxO1xuICAgICAgICAgIC8vIHVwZGF0ZSB3aWR0aHNcbiAgICAgICAgICAoeyBwYXJlbnRXaWR0aCwgY2hpbGRXaWR0aCB9ID0gdGhpcy5nZXRXaWR0aHModGhpcy5iY2RpdiwgdGhpcy5iY29sKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==