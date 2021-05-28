//---------------------------
// PdfViewer.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { isNull } from 'lodash';
var PdfViewerComponent = /** @class */ (function () {
    function PdfViewerComponent() {
    }
    PdfViewerComponent.prototype.onClick = function (payload) {
        if (!this.emit || isNull(payload)) {
            return;
        }
        this.emit('click', payload);
    };
    PdfViewerComponent.prototype.onLoaded = function () {
        this.emit('loaded');
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PdfViewerComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], PdfViewerComponent.prototype, "emit", void 0);
    PdfViewerComponent = __decorate([
        Component({
            selector: 'aw-pdf-viewer',
            template: "<div *ngIf=\"data\" class=\"aw-pdf-viewer {{ data.classes || '' }}\">\r\n    <div class=\"aw-pdf-viewer__loader\">\r\n        <n7-loader></n7-loader>\r\n    </div>\r\n    \r\n    <ngx-extended-pdf-viewer\r\n        [src]=\"data.currentUrl\"\r\n        [height]=\"'90vh'\"\r\n        [useBrowserLocale]=\"true\"\r\n        [textLayer]=\"true\"\r\n        [showToolbar]=\"data.libOptions.showToolbar\"\r\n        [showSidebarButton]=\"data.libOptions.showSidebarButton\"\r\n        [showFindButton]=\"data.libOptions.showFindButton\"\r\n        [showPagingButtons]=\"data.libOptions.showPagingButtons\"\r\n        [showZoomButtons]=\"data.libOptions.showZoomButtons\"\r\n        [showPresentationModeButton]=\"data.libOptions.showPresentationModeButton\"\r\n        [showOpenFileButton]=\"data.libOptions.showOpenFileButton\"\r\n        [showPrintButton]=\"data.libOptions.showPrintButton\"\r\n        [showDownloadButton]=\"data.libOptions.showDownloadButton\"\r\n        [showBookmarkButton]=\"data.libOptions.showBookmarkButton\"\r\n        [showSecondaryToolbarButton]=\"data.libOptions.showSecondaryToolbarButton\"\r\n        [showRotateButton]=\"data.libOptions.showRotateButton\"\r\n        [showHandToolButton]=\"data.libOptions.showHandToolButton\"\r\n        [showScrollingButton]=\"data.libOptions.showScrollingButton\"\r\n        [showSpreadButton]=\"data.libOptions.showSpreadButton\"\r\n        [showPropertiesButton]=\"data.libOptions.showPropertiesButton\"\r\n        (pdfLoaded)=\"onLoaded()\"\r\n        (pdfLoadingFailed)=\"onLoaded()\">\r\n    </ngx-extended-pdf-viewer>\r\n    \r\n    <div *ngIf=\"data.items.length > 1\" class=\"aw-pdf-viewer__navigation\">\r\n        <div class=\"aw-pdf-viewer__navigation-tools\">\r\n            <a class=\"aw-pdf-viewer__navigation-prev {{ (!data.prev && data.prev !== 0) ? 'is-disabled' : '' }}\" \r\n            (click)=\"onClick(data.prev)\">\r\n                <span class=\"n7-icon-angle-left\"></span>\r\n            </a>\r\n            <div class=\"aw-pdf-viewer__navigation-select\">\r\n                <p class=\"aw-pdf-viewer__navigation-select-text\">Scorri i documenti PDF</p>\r\n                <select (change)=\"onClick(+$event.target.value)\">\r\n                    <option *ngFor=\"let item of data.items; let $i = index\" [value]=\"$i\"\r\n                    [selected]=\"item.selected\">{{ item.label }}</option>\r\n                </select>\r\n            </div>\r\n            <a class=\"aw-pdf-viewer__navigation-next {{ !data.next ? 'is-disabled' : '' }}\" \r\n            (click)=\"onClick(data.next)\">\r\n                <span class=\"n7-icon-angle-right\"></span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"
        })
    ], PdfViewerComponent);
    return PdfViewerComponent;
}());
export { PdfViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXZpZXdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9jb21wb25lbnRzL3BkZi12aWV3ZXIvcGRmLXZpZXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsZUFBZTtBQUNmLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQW9DaEM7SUFBQTtJQWdCQSxDQUFDO0lBWEMsb0NBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFkUTtRQUFSLEtBQUssRUFBRTs7b0RBQXFCO0lBRXBCO1FBQVIsS0FBSyxFQUFFOztvREFBNkM7SUFIMUMsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLG1xRkFBZ0M7U0FDakMsQ0FBQztPQUNXLGtCQUFrQixDQWdCOUI7SUFBRCx5QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFBkZlZpZXdlci50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bGwgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IHR5cGUgUGRmVmlld2VyRGF0YSA9IHtcclxuICBpdGVtczoge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgfVtdO1xyXG4gIG5leHQ6IG51bWJlciB8IG51bGw7XHJcbiAgcHJldjogbnVtYmVyIHwgbnVsbDtcclxuICBjdXJyZW50VXJsOiBzdHJpbmc7XHJcbiAgbGliT3B0aW9uczoge1xyXG4gICAgc2hvd1Rvb2xiYXI6IGJvb2xlYW47XHJcbiAgICBzaG93U2lkZWJhckJ1dHRvbjogYm9vbGVhbjtcclxuICAgIHNob3dGaW5kQnV0dG9uOiBib29sZWFuO1xyXG4gICAgc2hvd1BhZ2luZ0J1dHRvbnM6IGJvb2xlYW47XHJcbiAgICBzaG93Wm9vbUJ1dHRvbnM6IGJvb2xlYW47XHJcbiAgICBzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbjogYm9vbGVhbjtcclxuICAgIHNob3dPcGVuRmlsZUJ1dHRvbjogYm9vbGVhbjtcclxuICAgIHNob3dQcmludEJ1dHRvbjogYm9vbGVhbjtcclxuICAgIHNob3dEb3dubG9hZEJ1dHRvbjogYm9vbGVhbjtcclxuICAgIHNob3dCb29rbWFya0J1dHRvbjogYm9vbGVhbjtcclxuICAgIHNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uOiBib29sZWFuO1xyXG4gICAgc2hvd1JvdGF0ZUJ1dHRvbjogYm9vbGVhbjtcclxuICAgIHNob3dIYW5kVG9vbEJ1dHRvbjogYm9vbGVhbjtcclxuICAgIHNob3dTY3JvbGxpbmdCdXR0b246IGJvb2xlYW47XHJcbiAgICBzaG93U3ByZWFkQnV0dG9uOiBib29sZWFuO1xyXG4gICAgc2hvd1Byb3BlcnRpZXNCdXR0b246IGJvb2xlYW47XHJcbiAgfTtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F3LXBkZi12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtdmlld2VyLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmVmlld2VyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBQZGZWaWV3ZXJEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkPzogYW55KSA9PiB2b2lkO1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0IHx8IGlzTnVsbChwYXlsb2FkKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkZWQoKSB7XHJcbiAgICB0aGlzLmVtaXQoJ2xvYWRlZCcpO1xyXG4gIH1cclxufVxyXG4iXX0=