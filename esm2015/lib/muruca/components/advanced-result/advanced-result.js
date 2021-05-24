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
        template: "<div *ngIf=\"data\"\n     class=\"mr-advanced-result\">\n    <n7-item-preview [data]=\"data\"></n7-item-preview>\n    <div class=\"mr-advanced-result__content\"\n         *ngFor=\"let highlightGroup of data.highlights\">\n        <div class=\"mr-advanced-result__content-group\">\n            <!-- METADATA GROUP TITLE -->\n            <!--\n            <h3 class=\"mr-advanced-result__title\"\n                *ngIf=\"highlightGroup.title\"\n                [innerHTML]=\"highlightGroup.title\">\n            </h3>\n            -->\n            <!-- METADATA ITEM -->\n            <div class=\"mr-advanced-result__item {{ item.classes || '' }}\"\n                 *ngFor=\"let item of highlightGroup.items\">\n                <!-- ICON -->\n                <span class=\"mr-advanced-result__icon {{item.icon}}\"\n                      *ngIf=\"item.icon\">\n                </span>\n                <!-- LABEL -->\n                <span class=\"mr-advanced-result__label\"\n                      *ngIf=\"item.label\"\n                      [innerHTML]=\"item.label\">\n                </span>\n                <!-- VALUE W/ HREF -->\n                <a *ngIf=\"item.href\"\n                   [href]=\"item.href\">\n                    <span class=\"mr-advanced-result__value\"\n                          *ngIf=\"item.value\"\n                          [innerHTML]=\"item.value\">\n                    </span>\n                </a>\n                <!-- VALUE W/OUT HREF -->\n                <span class=\"mr-advanced-result__value\"\n                      *ngIf=\"item.value && !item.href\"\n                      [innerHTML]=\"item.value\">\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n"
    })
], MrAdvancedResultComponent);
export { MrAdvancedResultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL2FkdmFuY2VkLXJlc3VsdC9hZHZhbmNlZC1yZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBc0JqRCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUtwQyxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUFSVTtJQUFSLEtBQUssRUFBRTs7dURBQTJCO0FBRTFCO0lBQVIsS0FBSyxFQUFFOzt1REFBVztBQUhSLHlCQUF5QjtJQUpyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLHlzREFBcUM7S0FDdEMsQ0FBQztHQUNXLHlCQUF5QixDQVNyQztTQVRZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSwgTWV0YWRhdGFEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG4vKipcbiAqIEEgaHlwZXJsaW5rZWQgbWV0YWRhdGEgaXRlbVxuICovXG5leHBvcnQgaW50ZXJmYWNlIExpbmtlZE1ldGFkYXRhRGF0YSBleHRlbmRzIE1ldGFkYXRhRGF0YSB7XG4gIC8qKiBocmVmIHRvIHVzZSBvbiB0aGUgaHRtbCBlbGVtZW50ICovXG4gIGhyZWY6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEYXRhIGZvciBNdXJ1Y2EncyBBZHZhbmNlZFJlc3VsdCBjb21wb25lbnQuXG4gKi9cbmludGVyZmFjZSBBZHZhbmNlZFJlc3VsdHNEYXRhIGV4dGVuZHMgSXRlbVByZXZpZXdEYXRhIHtcbiAgaGlnaGxpZ2h0czogTGlua2VkTWV0YWRhdGFEYXRhW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLWFkdmFuY2VkLXJlc3VsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1yZXN1bHQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRSZXN1bHRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBBZHZhbmNlZFJlc3VsdHNEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19