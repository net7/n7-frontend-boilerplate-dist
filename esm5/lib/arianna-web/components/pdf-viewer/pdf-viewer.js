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
            template: "<div *ngIf=\"data\" class=\"aw-pdf-viewer {{ data.classes || '' }}\">\n    <div class=\"aw-pdf-viewer__loader\">\n        <n7-loader></n7-loader>\n    </div>\n    \n    <ngx-extended-pdf-viewer\n        [src]=\"data.currentUrl\"\n        [height]=\"'90vh'\"\n        [useBrowserLocale]=\"true\"\n        [textLayer]=\"true\"\n        [showHandToolButton]=\"true\"\n        (pdfLoaded)=\"onLoaded()\"\n        (pdfLoadingFailed)=\"onLoaded()\">\n    </ngx-extended-pdf-viewer>\n    \n    <div *ngIf=\"data.items.length > 1\" class=\"aw-pdf-viewer__navigation\">\n        <div class=\"aw-pdf-viewer__navigation-tools\">\n            <a class=\"aw-pdf-viewer__navigation-prev {{ !data.prev ? 'is-disabled' : '' }}\" \n            (click)=\"onClick(data.prev)\">\n                <span class=\"n7-icon-angle-left\"></span>\n            </a>\n            <div class=\"aw-pdf-viewer__navigation-select\">\n                <p class=\"aw-pdf-viewer__navigation-select-text\">Scorri i documenti PDF</p>\n                <select (change)=\"onClick(+$event.target.value)\">\n                    <option *ngFor=\"let item of data.items; let $i = index\" [value]=\"$i\"\n                    [selected]=\"item.selected\">{{ item.label }}</option>\n                </select>\n            </div>\n            <a class=\"aw-pdf-viewer__navigation-next {{ !data.next ? 'is-disabled' : '' }}\" \n            (click)=\"onClick(data.next)\">\n                <span class=\"n7-icon-angle-right\"></span>\n            </a>\n        </div>\n    </div>\n</div>"
        })
    ], PdfViewerComponent);
    return PdfViewerComponent;
}());
export { PdfViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXZpZXdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9jb21wb25lbnRzL3BkZi12aWV3ZXIvcGRmLXZpZXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsZUFBZTtBQUNmLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQWtCaEM7SUFBQTtJQWdCQSxDQUFDO0lBWEMsb0NBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFkUTtRQUFSLEtBQUssRUFBRTs7b0RBQXFCO0lBRXBCO1FBQVIsS0FBSyxFQUFFOztvREFBNkM7SUFIMUMsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLDJnREFBZ0M7U0FDakMsQ0FBQztPQUNXLGtCQUFrQixDQWdCOUI7SUFBRCx5QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBQZGZWaWV3ZXIudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTnVsbCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCB0eXBlIFBkZlZpZXdlckRhdGEgPSB7XG4gIGl0ZW1zOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgfVtdO1xuICBuZXh0OiBudW1iZXIgfCBudWxsO1xuICBwcmV2OiBudW1iZXIgfCBudWxsO1xuICBjdXJyZW50VXJsOiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXBkZi12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXZpZXdlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGRmVmlld2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogUGRmVmlld2VyRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkPzogYW55KSA9PiB2b2lkO1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0IHx8IGlzTnVsbChwYXlsb2FkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuICAgIHRoaXMuZW1pdCgnbG9hZGVkJyk7XG4gIH1cbn1cbiJdfQ==