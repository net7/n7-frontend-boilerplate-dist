import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let MrAdvancedResultComponent = class MrAdvancedResultComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrAdvancedResultComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrAdvancedResultComponent.prototype, "emit", void 0);
MrAdvancedResultComponent = __decorate([
    Component({
        selector: 'mr-advanced-result',
        template: "<div *ngIf=\"data\"\r\n     class=\"mr-advanced-result\">\r\n    <n7-item-preview [data]=\"data\"></n7-item-preview>\r\n    <div class=\"mr-advanced-result__content\"\r\n         *ngFor=\"let highlightGroup of data.highlights\">\r\n        <div class=\"mr-advanced-result__content-group\">\r\n            <!-- METADATA GROUP TITLE -->\r\n            <!--\r\n            <h3 class=\"mr-advanced-result__title\"\r\n                *ngIf=\"highlightGroup.title\"\r\n                [innerHTML]=\"highlightGroup.title\">\r\n            </h3>\r\n            -->\r\n            <!-- METADATA ITEM -->\r\n            <div class=\"mr-advanced-result__item {{ item.classes || '' }}\"\r\n                 *ngFor=\"let item of highlightGroup.items\">\r\n                <!-- ICON -->\r\n                <span class=\"mr-advanced-result__icon {{item.icon}}\"\r\n                      *ngIf=\"item.icon\">\r\n                </span>\r\n                <!-- LABEL -->\r\n                <span class=\"mr-advanced-result__label\"\r\n                      *ngIf=\"item.label\"\r\n                      [innerHTML]=\"item.label\">\r\n                </span>\r\n                <!-- VALUE W/ HREF -->\r\n                <a *ngIf=\"item.href\"\r\n                   [href]=\"item.href\">\r\n                    <span class=\"mr-advanced-result__value\"\r\n                          *ngIf=\"item.value\"\r\n                          [innerHTML]=\"item.value\">\r\n                    </span>\r\n                </a>\r\n                <!-- VALUE W/OUT HREF -->\r\n                <span class=\"mr-advanced-result__value\"\r\n                      *ngIf=\"item.value && !item.href\"\r\n                      [innerHTML]=\"item.value\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"
    })
], MrAdvancedResultComponent);
export { MrAdvancedResultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL2FkdmFuY2VkLXJlc3VsdC9hZHZhbmNlZC1yZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBc0JqRCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUtwQyxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUFSVTtJQUFSLEtBQUssRUFBRTs7dURBQTJCO0FBRTFCO0lBQVIsS0FBSyxFQUFFOzt1REFBVztBQUhSLHlCQUF5QjtJQUpyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLDZ4REFBcUM7S0FDdEMsQ0FBQztHQUNXLHlCQUF5QixDQVNyQztTQVRZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBNZXRhZGF0YURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcblxyXG4vKipcclxuICogQSBoeXBlcmxpbmtlZCBtZXRhZGF0YSBpdGVtXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpbmtlZE1ldGFkYXRhRGF0YSBleHRlbmRzIE1ldGFkYXRhRGF0YSB7XHJcbiAgLyoqIGhyZWYgdG8gdXNlIG9uIHRoZSBodG1sIGVsZW1lbnQgKi9cclxuICBocmVmOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEYXRhIGZvciBNdXJ1Y2EncyBBZHZhbmNlZFJlc3VsdCBjb21wb25lbnQuXHJcbiAqL1xyXG5pbnRlcmZhY2UgQWR2YW5jZWRSZXN1bHRzRGF0YSBleHRlbmRzIEl0ZW1QcmV2aWV3RGF0YSB7XHJcbiAgaGlnaGxpZ2h0czogTGlua2VkTWV0YWRhdGFEYXRhW107XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItYWR2YW5jZWQtcmVzdWx0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWR2YW5jZWQtcmVzdWx0Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJBZHZhbmNlZFJlc3VsdENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogQWR2YW5jZWRSZXN1bHRzRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogYW55O1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==