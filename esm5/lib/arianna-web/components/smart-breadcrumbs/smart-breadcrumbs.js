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
            template: "<div *ngIf=\"data\" class=\"n7-breadcrumbs {{ data.classes || '' }}\" #bcdiv>\r\n    <nav class=\"n7-breadcrumbs__nav\">\r\n        <ol class=\"n7-breadcrumbs__list\" #bcol>\r\n            <li *ngFor=\"let item of data.items\" class=\"n7-breadcrumbs__item {{ item.classes || '' }}\">\r\n                <span class=\"ellipsis-target\">\r\n                    <n7-anchor-wrapper [classes]=\"item.classes\"\r\n                        [data]=\"item.anchor\"\r\n                        (clicked)=\"onClick($event)\">\r\n                        {{ item.label }}\r\n                    </n7-anchor-wrapper>\r\n                </span>\r\n            </li>\r\n        </ol>\r\n    </nav>\r\n</div>\r\n"
        })
    ], SmartBreadcrumbsComponent);
    return SmartBreadcrumbsComponent;
}());
export { SmartBreadcrumbsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtYnJlYWRjcnVtYnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zbWFydC1icmVhZGNydW1icy9zbWFydC1icmVhZGNydW1icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsR0FDeEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBcUQ3QjtJQUFBO1FBQUEsaUJBMERDO1FBdkJDOztXQUVHO1FBQ0gsaUJBQVksR0FBRyxVQUFDLElBQUksRUFBRSxPQUFPLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzVDLE9BQU8sU0FBQTtZQUNQLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUk7U0FDeEIsQ0FBQyxFQU5nQyxDQU1oQyxDQUFDO1FBRUgsY0FBUyxHQUFHLFVBQUMsTUFBa0IsRUFBRSxLQUFpQjtZQUNoRCxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztZQUM1QyxJQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztZQUMzQyxJQUFNLEVBQUUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2xELENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQUcsVUFBQyxJQUFJLElBQUssT0FBQTtRQUN6QixxRUFBcUU7UUFDckUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ3JGLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzRixFQUowQixDQUkxQixDQUFBO0lBQ0gsQ0FBQztJQWpEQyxtREFBZSxHQUFmOztRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUEsMENBQW1FLEVBQWpFLDRCQUFXLEVBQUUsMEJBQW9ELENBQUM7WUFDeEUsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ2pELElBQUksV0FBVyxLQUFLLFVBQVUsRUFBRSxFQUFFLHFCQUFxQjtnQkFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsNkJBQTZCO2dCQUN4QyxPQUFPLFdBQVcsS0FBSyxVQUFVLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsb0JBQW9CO29CQUNqRixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsd0JBQXdCO29CQUN4RSxTQUFTLENBQUMsU0FBUyxHQUFHLHFDQUFxQyxDQUFDO29CQUM1RCxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztvQkFDbkYsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsc0JBQXNCO29CQUM5RCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLCtCQUErQixDQUFDLENBQUMseUJBQXlCO29CQUNqRixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7b0JBQ25GLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsZ0JBQWdCO29CQUNoQixDQUFDLDBDQUFtRSxFQUFqRSw0QkFBVyxFQUFFLDBCQUFVLENBQTJDLENBQUM7aUJBQ3ZFO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCwyQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWhDUTtRQUFSLEtBQUssRUFBRTs7MkRBQTRCO0lBRTNCO1FBQVIsS0FBSyxFQUFFOzsyREFBVztJQUVzQjtRQUF4QyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2tDQUFPLFVBQVU7MkRBQUE7SUFFZjtRQUF6QyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2tDQUFRLFVBQVU7NERBQUE7SUFQaEQseUJBQXlCO1FBTHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsaXNCQUF1QztTQUN4QyxDQUFDO09BRVcseUJBQXlCLENBMERyQztJQUFELGdDQUFDO0NBQUEsQUExREQsSUEwREM7U0ExRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQlJFQURDUlVNQlMudHNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgYSBzaW5nbGUgQnJlYWRjcnVtYnNDb21wb25lbnQncyBcIkl0ZW1cIlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgbGFiZWwgKHJlcXVpcmVkKVxyXG4gKiBAcHJvcGVydHkgcGF5bG9hZCAocmVxdWlyZWQpXHJcbiAqIEBwcm9wZXJ0eSBjbGFzc2VzIChvcHRpb25hbClcclxuICogQHByb3BlcnR5IF9tZXRhIChvcHRpb25hbClcclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU21hcnRCcmVhZGNydW1ic0l0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIGl0ZW0ncyBsYWJlbFxyXG4gICAqL1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWN0aW9uIGNsaWNrJ3MgcGF5bG9hZFxyXG4gICAqL1xyXG4gIHBheWxvYWQ6IGFueTtcclxuICAvKipcclxuICAgKiBhZGRpdGlvbmFsIGh0bWwgY2xhc3Nlc1xyXG4gICAqL1xyXG4gIGNsYXNzZXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBpbmZvIHVzZWZ1bCBmb3IgdGhlIGNvbXBvbmVudCdzIGxvZ2ljXHJcbiAgICovXHJcbiAgX21ldGE/OiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIEJyZWFkY3J1bWJzQ29tcG9uZW50J3MgXCJEYXRhXCJcclxuICpcclxuICogQHByb3BlcnR5IGl0ZW1zIChyZXF1aXJlZClcclxuICogQHByb3BlcnR5IGNsYXNzZXMgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTbWFydEJyZWFkY3J1bWJzRGF0YSB7XHJcbiAgLyoqXHJcbiAgICogZWFjaCBpdGVtIHJlbmRlcnMgYSBicmVhZGNydW1iIGxldmVsXHJcbiAgICovXHJcbiAgaXRlbXM6IFNtYXJ0QnJlYWRjcnVtYnNJdGVtW107XHJcbiAgLyoqXHJcbiAgICogYWRkaXRpb25hbCBodG1sIGNsYXNzZXNcclxuICAgKi9cclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXNtYXJ0LWJyZWFkY3J1bWJzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc21hcnQtYnJlYWRjcnVtYnMuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU21hcnRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IFNtYXJ0QnJlYWRjcnVtYnNEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Jjb2wnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYmNvbDogRWxlbWVudFJlZlxyXG5cclxuICBAVmlld0NoaWxkKCdiY2RpdicsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBiY2RpdjogRWxlbWVudFJlZlxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5iY2RpdiAmJiB0aGlzLmJjb2wpIHtcclxuICAgICAgbGV0IHsgcGFyZW50V2lkdGgsIGNoaWxkV2lkdGggfSA9IHRoaXMuZ2V0V2lkdGhzKHRoaXMuYmNkaXYsIHRoaXMuYmNvbCk7XHJcbiAgICAgIGNvbnN0IGxpQXJyYXkgPSB0aGlzLmJjb2wubmF0aXZlRWxlbWVudC5jaGlsZHJlbjtcclxuICAgICAgaWYgKHBhcmVudFdpZHRoID09PSBjaGlsZFdpZHRoKSB7IC8vIGNvbGxhcHNlIGNvbmRpdGlvblxyXG4gICAgICAgIGxldCBpID0gMTsgLy8gU2tpcCBlbGVtZW50IGluIHBvc2l0aW9uIDBcclxuICAgICAgICB3aGlsZSAocGFyZW50V2lkdGggPT09IGNoaWxkV2lkdGggJiYgaSA8IGxpQXJyYXkubGVuZ3RoIC0gMSkgeyAvLyBTa2lwIGxhc3QgZWxlbWVudFxyXG4gICAgICAgICAgY29uc3QgdGlwcHlEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTsgLy8gaW5pdGlhbGl6ZSB0aXBweSBkYXRhXHJcbiAgICAgICAgICB0aXBweURhdGEuY2xhc3NOYW1lID0gJ243LXNtYXJ0LWJyZWFkY3J1bWJzX190aXBweS1jb250ZW50JztcclxuICAgICAgICAgIHRpcHB5RGF0YS5hcHBlbmRDaGlsZChsaUFycmF5W2ldLmNsb25lTm9kZSh0cnVlKSk7IC8vIGFkZCA8bGk+IHRvIHRpcHB5IGRhdGEgKDxvbD4pXHJcbiAgICAgICAgICBsaUFycmF5W2ldLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9ICfigKYnOyAvLyBjb252ZXJ0IHRvIGVsbGlwc2lzXHJcbiAgICAgICAgICBsaUFycmF5W2ldLmNsYXNzTmFtZSA9ICduNy1icmVhZGNydW1ic19faXRlbS1lbGxpcHNpcyc7IC8vIHNldCBjbGFzcyB0byBsaXN0IGl0ZW1cclxuICAgICAgICAgIHRoaXMudGlwcHlCdWlsZGVyKGxpQXJyYXlbaV0uY2hpbGRyZW5bMF0sIHRpcHB5RGF0YSk7IC8vIGFwcGVuZCB0b29sdGlwIHRvIGVsbGlwc2lzXHJcbiAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgICAvLyB1cGRhdGUgd2lkdGhzXHJcbiAgICAgICAgICAoeyBwYXJlbnRXaWR0aCwgY2hpbGRXaWR0aCB9ID0gdGhpcy5nZXRXaWR0aHModGhpcy5iY2RpdiwgdGhpcy5iY29sKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZHMgdGlwcHkgZGF0YSBmb3IgYSBub2RlLlxyXG4gICAqL1xyXG4gIHRpcHB5QnVpbGRlciA9IChub2RlLCBjb250ZW50KSA9PiB0aXBweShub2RlLCB7XHJcbiAgICBjb250ZW50LFxyXG4gICAgaW50ZXJhY3RpdmU6IHRydWUsXHJcbiAgICBhcnJvdzogdHJ1ZSxcclxuICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxyXG4gICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHNpbGVuY2UgdGlwcHkgaW50ZXJhY3RpdmUgd2FybmluZ1xyXG4gIH0pO1xyXG5cclxuICBnZXRXaWR0aHMgPSAocGFyZW50OiBFbGVtZW50UmVmLCBjaGlsZDogRWxlbWVudFJlZikgPT4ge1xyXG4gICAgY29uc3QgcHcgPSBwYXJlbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGNvbnN0IGN3ID0gY2hpbGQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGNvbnN0IHBwID0gdGhpcy5nZXRTaWRlUGFkZGluZyhwYXJlbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICByZXR1cm4geyBwYXJlbnRXaWR0aDogcHcgLSBwcCwgY2hpbGRXaWR0aDogY3cgfTtcclxuICB9XHJcblxyXG4gIGdldFNpZGVQYWRkaW5nID0gKG5vZGUpID0+IChcclxuICAgIC8vIHJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIHN1bSBvZiBsZWZ0IGFuZCByaWdodCBwYWRkaW5nc1xyXG4gICAgKCt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKS5tYXRjaCgvXFxkKy8pWzBdKVxyXG4gICAgKyAoK3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKS5tYXRjaCgvXFxkKy8pWzBdKVxyXG4gIClcclxufVxyXG4iXX0=