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
            template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\r\n    <nav class=\"n7-breadcrumbs__nav\">\r\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\r\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\r\n                <span class=\"ellipsis-target\">\r\n                    <n7-anchor-wrapper [classes]=\"item.classes\"\r\n                        [data]=\"item.anchor\"\r\n                        (clicked)=\"onClick($event)\">\r\n                        {{ item.label }}\r\n                    </n7-anchor-wrapper>\r\n                </span>\r\n            </li>\r\n        </ol>\r\n    </nav>\r\n</div>\r\n"
        })
    ], SmartBreadcrumbsComponent);
    return SmartBreadcrumbsComponent;
}());
export { SmartBreadcrumbsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsR0FDeEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBcUQ3QjtJQUFBO1FBQUEsaUJBbUVDO1FBakRDOztXQUVHO1FBQ0gsaUJBQVksR0FBRyxVQUFDLElBQUksRUFBRSxPQUFPLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzVDLE9BQU8sU0FBQTtZQUNQLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUk7U0FDeEIsQ0FBQyxFQU5nQyxDQU1oQyxDQUFDO1FBRUgsNERBQTREO1FBQzVELGNBQVMsR0FBRyxVQUFDLE1BQWtCLEVBQUUsS0FBaUI7WUFDaEQsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxlQUFlO1lBQzVELElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsY0FBYztZQUMxRCxJQUFNLEVBQUUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtZQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2xE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O0lBQUQsZ0NBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQW5FWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBCUkVBRENSVU1CUy50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0NoZWNrZWQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGZvciBhIHNpbmdsZSBCcmVhZGNydW1ic0NvbXBvbmVudCdzIFwiSXRlbVwiXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBsYWJlbCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBwYXlsb2FkIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKiBAcHJvcGVydHkgX21ldGEgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTbWFydEJyZWFkY3J1bWJzSXRlbSB7XHJcbiAgLyoqXHJcbiAgICogaXRlbSdzIGxhYmVsXHJcbiAgICovXHJcbiAgbGFiZWw6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhY3Rpb24gY2xpY2sncyBwYXlsb2FkXHJcbiAgICovXHJcbiAgcGF5bG9hZDogYW55O1xyXG4gIC8qKlxyXG4gICAqIGFkZGl0aW9uYWwgaHRtbCBjbGFzc2VzXHJcbiAgICovXHJcbiAgY2xhc3Nlcz86IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcclxuICAgKi9cclxuICBfbWV0YT86IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkRhdGFcIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgaXRlbXMgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNtYXJ0QnJlYWRjcnVtYnNEYXRhIHtcclxuICAvKipcclxuICAgKiBlYWNoIGl0ZW0gcmVuZGVycyBhIGJyZWFkY3J1bWIgbGV2ZWxcclxuICAgKi9cclxuICBpdGVtczogU21hcnRCcmVhZGNydW1ic0l0ZW1bXTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbjctc21hcnQtYnJlYWRjcnVtYnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1icmVhZGNydW1icy5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTbWFydEJyZWFkY3J1bWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcbiAgQElucHV0KCkgZGF0YTogU21hcnRCcmVhZGNydW1ic0RhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYmNvbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBiY29sOiBFbGVtZW50UmVmXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2JjZGl2JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGJjZGl2OiBFbGVtZW50UmVmXHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlclNtYXJ0RWxsaXBzaXMoKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyB0aXBweSBkYXRhIGZvciBhIG5vZGUuXHJcbiAgICovXHJcbiAgdGlwcHlCdWlsZGVyID0gKG5vZGUsIGNvbnRlbnQpID0+IHRpcHB5KG5vZGUsIHtcclxuICAgIGNvbnRlbnQsXHJcbiAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcclxuICAgIGFycm93OiB0cnVlLFxyXG4gICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXHJcbiAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc2lsZW5jZSB0aXBweSBpbnRlcmFjdGl2ZSB3YXJuaW5nXHJcbiAgfSk7XHJcblxyXG4gIC8qKiBDYWxjdWxhdGUgdGhlIHdpZHRoIG9mIGFuIEhUTUwgRWxlbWVudCBhbmQgaXQncyBjaGlsZCAqL1xyXG4gIGdldFdpZHRocyA9IChwYXJlbnQ6IEVsZW1lbnRSZWYsIGNoaWxkOiBFbGVtZW50UmVmKSA9PiB7XHJcbiAgICBjb25zdCBwdyA9IHBhcmVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoOyAvLyBwYXJlbnQgd2lkdGhcclxuICAgIGNvbnN0IGN3ID0gY2hpbGQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDsgLy8gY2hpbGQgd2lkdGhcclxuICAgIGNvbnN0IHBwID0gdGhpcy5nZXRTaWRlUGFkZGluZyhwYXJlbnQubmF0aXZlRWxlbWVudCk7IC8vIHBhcmVudCBwYWRkaW5nXHJcbiAgICByZXR1cm4geyBwYXJlbnRXaWR0aDogcHcgLSBwcCwgY2hpbGRXaWR0aDogY3cgfTtcclxuICB9XHJcblxyXG4gIGdldFNpZGVQYWRkaW5nID0gKG5vZGUpID0+IChcclxuICAgIC8vIHJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIHN1bSBvZiBsZWZ0IGFuZCByaWdodCBwYWRkaW5nc1xyXG4gICAgKCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKS5tYXRjaCgvXFxkKy8pWzBdKVxyXG4gICAgKyAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKS5tYXRjaCgvXFxkKy8pWzBdKVxyXG4gIClcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBzbWFydCBlbGxpcHNpcyBmdW5jdGlvbmFsaXR5IHNob3VsZCBiZSBlbmFibGVkLFxyXG4gICAqIGlmIHRoZSBjaGlsZHJlbiBlbGVtZW50cyBhcmUgdG9vIHdpZGUsIGl0IGVuYWJsZXMgaXQuXHJcbiAgICovXHJcbiAgdHJpZ2dlclNtYXJ0RWxsaXBzaXMgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5iY2RpdiAmJiB0aGlzLmJjb2wpIHtcclxuICAgICAgbGV0IHsgcGFyZW50V2lkdGgsIGNoaWxkV2lkdGggfSA9IHRoaXMuZ2V0V2lkdGhzKHRoaXMuYmNkaXYsIHRoaXMuYmNvbCk7XHJcbiAgICAgIGNvbnN0IGxpQXJyYXkgPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcclxuICAgICAgaWYgKHBhcmVudFdpZHRoIDw9IGNoaWxkV2lkdGgpIHsgLy8gY29sbGFwc2UgY29uZGl0aW9uXHJcbiAgICAgICAgbGV0IGkgPSAxOyAvLyBTa2lwIGVsZW1lbnQgaW4gcG9zaXRpb24gMFxyXG4gICAgICAgIHdoaWxlIChwYXJlbnRXaWR0aCA8PSBjaGlsZFdpZHRoICYmIGkgPCBsaUFycmF5Lmxlbmd0aCAtIDEpIHsgLy8gU2tpcCBsYXN0IGVsZW1lbnRcclxuICAgICAgICAgIGNvbnN0IHRpcHB5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7IC8vIGluaXRpYWxpemUgdGlwcHkgZGF0YVxyXG4gICAgICAgICAgdGlwcHlEYXRhLmNsYXNzTmFtZSA9ICduNy1zbWFydC1icmVhZGNydW1ic19fdGlwcHktY29udGVudCc7XHJcbiAgICAgICAgICB0aXBweURhdGEuYXBwZW5kQ2hpbGQobGlBcnJheVtpXS5jbG9uZU5vZGUodHJ1ZSkpOyAvLyBhZGQgPGxpPiB0byB0aXBweSBkYXRhICg8b2w+KVxyXG4gICAgICAgICAgbGlBcnJheVtpXS5jaGlsZHJlblswXS5pbm5lclRleHQgPSAn4oCmJzsgLy8gY29udmVydCB0byBlbGxpcHNpc1xyXG4gICAgICAgICAgbGlBcnJheVtpXS5jbGFzc05hbWUgPSAnbjctYnJlYWRjcnVtYnNfX2l0ZW0tZWxsaXBzaXMnOyAvLyBzZXQgY2xhc3MgdG8gbGlzdCBpdGVtXHJcbiAgICAgICAgICB0aGlzLnRpcHB5QnVpbGRlcihsaUFycmF5W2ldLmNoaWxkcmVuWzBdLCB0aXBweURhdGEpOyAvLyBhcHBlbmQgdG9vbHRpcCB0byBlbGxpcHNpc1xyXG4gICAgICAgICAgaSArPSAxO1xyXG4gICAgICAgICAgLy8gdXBkYXRlIHdpZHRoc1xyXG4gICAgICAgICAgKHsgcGFyZW50V2lkdGgsIGNoaWxkV2lkdGggfSA9IHRoaXMuZ2V0V2lkdGhzKHRoaXMuYmNkaXYsIHRoaXMuYmNvbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=