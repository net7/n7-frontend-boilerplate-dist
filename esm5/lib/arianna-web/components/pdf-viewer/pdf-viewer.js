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
            template: "<div *ngIf=\"data\" class=\"aw-pdf-viewer {{ data.classes || '' }}\">\n    <div class=\"aw-pdf-viewer__loader\">\n        <n7-loader></n7-loader>\n    </div>\n    \n    <ngx-extended-pdf-viewer\n        [src]=\"data.currentUrl\"\n        [height]=\"'90vh'\"\n        [useBrowserLocale]=\"true\"\n        [textLayer]=\"true\"\n        [showToolbar]=\"data.libOptions.showToolbar\"\n        [showSidebarButton]=\"data.libOptions.showSidebarButton\"\n        [showFindButton]=\"data.libOptions.showFindButton\"\n        [showPagingButtons]=\"data.libOptions.showPagingButtons\"\n        [showZoomButtons]=\"data.libOptions.showZoomButtons\"\n        [showPresentationModeButton]=\"data.libOptions.showPresentationModeButton\"\n        [showOpenFileButton]=\"data.libOptions.showOpenFileButton\"\n        [showPrintButton]=\"data.libOptions.showPrintButton\"\n        [showDownloadButton]=\"data.libOptions.showDownloadButton\"\n        [showBookmarkButton]=\"data.libOptions.showBookmarkButton\"\n        [showSecondaryToolbarButton]=\"data.libOptions.showSecondaryToolbarButton\"\n        [showRotateButton]=\"data.libOptions.showRotateButton\"\n        [showHandToolButton]=\"data.libOptions.showHandToolButton\"\n        [showScrollingButton]=\"data.libOptions.showScrollingButton\"\n        [showSpreadButton]=\"data.libOptions.showSpreadButton\"\n        [showPropertiesButton]=\"data.libOptions.showPropertiesButton\"\n        (pdfLoaded)=\"onLoaded()\"\n        (pdfLoadingFailed)=\"onLoaded()\">\n    </ngx-extended-pdf-viewer>\n    \n    <div *ngIf=\"data.items.length > 1\" class=\"aw-pdf-viewer__navigation\">\n        <div class=\"aw-pdf-viewer__navigation-tools\">\n            <a class=\"aw-pdf-viewer__navigation-prev {{ (!data.prev && data.prev !== 0) ? 'is-disabled' : '' }}\" \n            (click)=\"onClick(data.prev)\">\n                <span class=\"n7-icon-angle-left\"></span>\n            </a>\n            <div class=\"aw-pdf-viewer__navigation-select\">\n                <p class=\"aw-pdf-viewer__navigation-select-text\">Scorri i documenti PDF</p>\n                <select (change)=\"onClick(+$event.target.value)\">\n                    <option *ngFor=\"let item of data.items; let $i = index\" [value]=\"$i\"\n                    [selected]=\"item.selected\">{{ item.label }}</option>\n                </select>\n            </div>\n            <a class=\"aw-pdf-viewer__navigation-next {{ !data.next ? 'is-disabled' : '' }}\" \n            (click)=\"onClick(data.next)\">\n                <span class=\"n7-icon-angle-right\"></span>\n            </a>\n        </div>\n    </div>\n</div>"
        })
    ], PdfViewerComponent);
    return PdfViewerComponent;
}());
export { PdfViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXZpZXdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9jb21wb25lbnRzL3BkZi12aWV3ZXIvcGRmLXZpZXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsZUFBZTtBQUNmLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQW9DaEM7SUFBQTtJQWdCQSxDQUFDO0lBWEMsb0NBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFkUTtRQUFSLEtBQUssRUFBRTs7b0RBQXFCO0lBRXBCO1FBQVIsS0FBSyxFQUFFOztvREFBNkM7SUFIMUMsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLGlrRkFBZ0M7U0FDakMsQ0FBQztPQUNXLGtCQUFrQixDQWdCOUI7SUFBRCx5QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQZGZWaWV3ZXIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTnVsbCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCB0eXBlIFBkZlZpZXdlckRhdGEgPSB7XG4gIGl0ZW1zOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgfVtdO1xuICBuZXh0OiBudW1iZXIgfCBudWxsO1xuICBwcmV2OiBudW1iZXIgfCBudWxsO1xuICBjdXJyZW50VXJsOiBzdHJpbmc7XG4gIGxpYk9wdGlvbnM6IHtcbiAgICBzaG93VG9vbGJhcjogYm9vbGVhbjtcbiAgICBzaG93U2lkZWJhckJ1dHRvbjogYm9vbGVhbjtcbiAgICBzaG93RmluZEJ1dHRvbjogYm9vbGVhbjtcbiAgICBzaG93UGFnaW5nQnV0dG9uczogYm9vbGVhbjtcbiAgICBzaG93Wm9vbUJ1dHRvbnM6IGJvb2xlYW47XG4gICAgc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b246IGJvb2xlYW47XG4gICAgc2hvd09wZW5GaWxlQnV0dG9uOiBib29sZWFuO1xuICAgIHNob3dQcmludEJ1dHRvbjogYm9vbGVhbjtcbiAgICBzaG93RG93bmxvYWRCdXR0b246IGJvb2xlYW47XG4gICAgc2hvd0Jvb2ttYXJrQnV0dG9uOiBib29sZWFuO1xuICAgIHNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uOiBib29sZWFuO1xuICAgIHNob3dSb3RhdGVCdXR0b246IGJvb2xlYW47XG4gICAgc2hvd0hhbmRUb29sQnV0dG9uOiBib29sZWFuO1xuICAgIHNob3dTY3JvbGxpbmdCdXR0b246IGJvb2xlYW47XG4gICAgc2hvd1NwcmVhZEJ1dHRvbjogYm9vbGVhbjtcbiAgICBzaG93UHJvcGVydGllc0J1dHRvbjogYm9vbGVhbjtcbiAgfTtcbiAgY2xhc3Nlcz86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctcGRmLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtdmlld2VyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZWaWV3ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBQZGZWaWV3ZXJEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6ICh0eXBlOiBzdHJpbmcsIHBheWxvYWQ/OiBhbnkpID0+IHZvaWQ7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQgfHwgaXNOdWxsKHBheWxvYWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgb25Mb2FkZWQoKSB7XG4gICAgdGhpcy5lbWl0KCdsb2FkZWQnKTtcbiAgfVxufVxuIl19