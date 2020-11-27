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
        this.getWidths = function (parent, child) {
            var pw = parent.nativeElement.clientWidth;
            var cw = child.nativeElement.clientWidth;
            var pp = _this.getSidePadding(parent.nativeElement);
            return { parentWidth: pw - pp, childWidth: cw };
        };
        this.getSidePadding = function (node) { return (
        // returns an integer representing the sum of left and right paddings
        (+window.getComputedStyle(node, null).getPropertyValue('padding-left').match(/\d+/)[0])
            + (+window.getComputedStyle(node, null).getPropertyValue('padding-right').match(/\d+/)[0])); };
    }
    SmartBreadcrumbsComponent.prototype.ngAfterViewInit = function () {
        var _a;
        if (this.bcdiv && this.bcol) {
            var _b = this.getWidths(this.bcdiv, this.bcol), parentWidth = _b.parentWidth, childWidth = _b.childWidth;
            var liArray = this.bcol.nativeElement.children;
            if (parentWidth === childWidth) { // collapse condition
                var i = 1; // Skip element in position 0
                while (parentWidth === childWidth && i < liArray.length - 1) { // Skip last element
                    var tippyData = document.createElement('ol'); // initialize tippy data
                    tippyData.className = 'n7-smart-breadcrumbs__tippy-content';
                    tippyData.appendChild(liArray[i].cloneNode(true)); // add <li> to tippy data (<ol>)
                    liArray[i].children[0].innerText = '…'; // convert to ellipsis
                    liArray[i].className = 'n7-breadcrumbs__item-ellipsis'; // set class to list item
                    this.tippyBuilder(liArray[i].children[0], tippyData); // append tooltip to ellipsis
                    i += 1;
                    // update widths
                    (_a = this.getWidths(this.bcdiv, this.bcol), parentWidth = _a.parentWidth, childWidth = _a.childWidth);
                }
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsR0FDeEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBcUQ3QjtJQUFBO1FBQUEsaUJBMERDO1FBdkJDOztXQUVHO1FBQ0gsaUJBQVksR0FBRyxVQUFDLElBQUksRUFBRSxPQUFPLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzVDLE9BQU8sU0FBQTtZQUNQLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUk7U0FDeEIsQ0FBQyxFQU5nQyxDQU1oQyxDQUFDO1FBRUgsY0FBUyxHQUFHLFVBQUMsTUFBa0IsRUFBRSxLQUFpQjtZQUNoRCxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztZQUM1QyxJQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztZQUMzQyxJQUFNLEVBQUUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2xELENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQUcsVUFBQyxJQUFJLElBQUssT0FBQTtRQUN6QixxRUFBcUU7UUFDckUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ3JGLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzRixFQUowQixDQUkxQixDQUFBO0lBQ0gsQ0FBQztJQWpEQyxtREFBZSxHQUFmOztRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUEsMENBQW1FLEVBQWpFLDRCQUFXLEVBQUUsMEJBQW9ELENBQUM7WUFDeEUsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ2pELElBQUksV0FBVyxLQUFLLFVBQVUsRUFBRSxFQUFFLHFCQUFxQjtnQkFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsNkJBQTZCO2dCQUN4QyxPQUFPLFdBQVcsS0FBSyxVQUFVLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsb0JBQW9CO29CQUNqRixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsd0JBQXdCO29CQUN4RSxTQUFTLENBQUMsU0FBUyxHQUFHLHFDQUFxQyxDQUFDO29CQUM1RCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztvQkFDbkYsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsc0JBQXNCO29CQUM5RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLCtCQUErQixDQUFDLENBQUMseUJBQXlCO29CQUNqRixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7b0JBQ25GLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsZ0JBQWdCO29CQUNoQixDQUFDLDBDQUFtRSxFQUFqRSw0QkFBVyxFQUFFLDBCQUFVLENBQTJDLENBQUM7aUJBQ3ZFO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCwyQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWhDUTtRQUFSLEtBQUssRUFBRTs7MkRBQTRCO0lBRTNCO1FBQVIsS0FBSyxFQUFFOzsyREFBVztJQUVzQjtRQUF4QyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2tDQUFPLFVBQVU7MkRBQUE7SUFFZjtRQUF6QyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2tDQUFRLFVBQVU7NERBQUE7SUFQaEQseUJBQXlCO1FBTHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsbXFCQUF1QztTQUN4QyxDQUFDO09BRVcseUJBQXlCLENBMERyQztJQUFELGdDQUFDO0NBQUEsQUExREQsSUEwREM7U0ExRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJSRUFEQ1JVTUJTLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgc2luZ2xlIEJyZWFkY3J1bWJzQ29tcG9uZW50J3MgXCJJdGVtXCJcbiAqXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IHBheWxvYWQgKHJlcXVpcmVkKVxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU21hcnRCcmVhZGNydW1ic0l0ZW0ge1xuICAvKipcbiAgICogaXRlbSdzIGxhYmVsXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxuICAgKi9cbiAgcGF5bG9hZDogYW55O1xuICAvKipcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcbiAgICovXG4gIGNsYXNzZXM/OiBhbnk7XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGluZm8gdXNlZnVsIGZvciB0aGUgY29tcG9uZW50J3MgbG9naWNcbiAgICovXG4gIF9tZXRhPzogYW55O1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkRhdGFcIlxuICpcbiAqIEBwcm9wZXJ0eSBpdGVtcyAocmVxdWlyZWQpXG4gKiBAcHJvcGVydHkgY2xhc3NlcyAob3B0aW9uYWwpXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNtYXJ0QnJlYWRjcnVtYnNEYXRhIHtcbiAgLyoqXG4gICAqIGVhY2ggaXRlbSByZW5kZXJzIGEgYnJlYWRjcnVtYiBsZXZlbFxuICAgKi9cbiAgaXRlbXM6IFNtYXJ0QnJlYWRjcnVtYnNJdGVtW107XG4gIC8qKlxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xuICAgKi9cbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctc21hcnQtYnJlYWRjcnVtYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtYnJlYWRjcnVtYnMuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBkYXRhOiBTbWFydEJyZWFkY3J1bWJzRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgQFZpZXdDaGlsZCgnYmNvbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBiY29sOiBFbGVtZW50UmVmXG5cbiAgQFZpZXdDaGlsZCgnYmNkaXYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYmNkaXY6IEVsZW1lbnRSZWZcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYmNkaXYgJiYgdGhpcy5iY29sKSB7XG4gICAgICBsZXQgeyBwYXJlbnRXaWR0aCwgY2hpbGRXaWR0aCB9ID0gdGhpcy5nZXRXaWR0aHModGhpcy5iY2RpdiwgdGhpcy5iY29sKTtcbiAgICAgIGNvbnN0IGxpQXJyYXkgPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcbiAgICAgIGlmIChwYXJlbnRXaWR0aCA9PT0gY2hpbGRXaWR0aCkgeyAvLyBjb2xsYXBzZSBjb25kaXRpb25cbiAgICAgICAgbGV0IGkgPSAxOyAvLyBTa2lwIGVsZW1lbnQgaW4gcG9zaXRpb24gMFxuICAgICAgICB3aGlsZSAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGggJiYgaSA8IGxpQXJyYXkubGVuZ3RoIC0gMSkgeyAvLyBTa2lwIGxhc3QgZWxlbWVudFxuICAgICAgICAgIGNvbnN0IHRpcHB5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7IC8vIGluaXRpYWxpemUgdGlwcHkgZGF0YVxuICAgICAgICAgIHRpcHB5RGF0YS5jbGFzc05hbWUgPSAnbjctc21hcnQtYnJlYWRjcnVtYnNfX3RpcHB5LWNvbnRlbnQnO1xuICAgICAgICAgIHRpcHB5RGF0YS5hcHBlbmRDaGlsZChsaUFycmF5W2ldLmNsb25lTm9kZSh0cnVlKSk7IC8vIGFkZCA8bGk+IHRvIHRpcHB5IGRhdGEgKDxvbD4pXG4gICAgICAgICAgbGlBcnJheVtpXS5jaGlsZHJlblswXS5pbm5lclRleHQgPSAn4oCmJzsgLy8gY29udmVydCB0byBlbGxpcHNpc1xuICAgICAgICAgIGxpQXJyYXlbaV0uY2xhc3NOYW1lID0gJ243LWJyZWFkY3J1bWJzX19pdGVtLWVsbGlwc2lzJzsgLy8gc2V0IGNsYXNzIHRvIGxpc3QgaXRlbVxuICAgICAgICAgIHRoaXMudGlwcHlCdWlsZGVyKGxpQXJyYXlbaV0uY2hpbGRyZW5bMF0sIHRpcHB5RGF0YSk7IC8vIGFwcGVuZCB0b29sdGlwIHRvIGVsbGlwc2lzXG4gICAgICAgICAgaSArPSAxO1xuICAgICAgICAgIC8vIHVwZGF0ZSB3aWR0aHNcbiAgICAgICAgICAoeyBwYXJlbnRXaWR0aCwgY2hpbGRXaWR0aCB9ID0gdGhpcy5nZXRXaWR0aHModGhpcy5iY2RpdiwgdGhpcy5iY29sKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgdGlwcHkgZGF0YSBmb3IgYSBub2RlLlxuICAgKi9cbiAgdGlwcHlCdWlsZGVyID0gKG5vZGUsIGNvbnRlbnQpID0+IHRpcHB5KG5vZGUsIHtcbiAgICBjb250ZW50LFxuICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgIGFycm93OiB0cnVlLFxuICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzaWxlbmNlIHRpcHB5IGludGVyYWN0aXZlIHdhcm5pbmdcbiAgfSk7XG5cbiAgZ2V0V2lkdGhzID0gKHBhcmVudDogRWxlbWVudFJlZiwgY2hpbGQ6IEVsZW1lbnRSZWYpID0+IHtcbiAgICBjb25zdCBwdyA9IHBhcmVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGN3ID0gY2hpbGQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBwcCA9IHRoaXMuZ2V0U2lkZVBhZGRpbmcocGFyZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHJldHVybiB7IHBhcmVudFdpZHRoOiBwdyAtIHBwLCBjaGlsZFdpZHRoOiBjdyB9O1xuICB9XG5cbiAgZ2V0U2lkZVBhZGRpbmcgPSAobm9kZSkgPT4gKFxuICAgIC8vIHJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIHN1bSBvZiBsZWZ0IGFuZCByaWdodCBwYWRkaW5nc1xuICAgICgrd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0JykubWF0Y2goL1xcZCsvKVswXSlcbiAgICArICgrd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpLm1hdGNoKC9cXGQrLylbMF0pXG4gIClcbn1cbiJdfQ==