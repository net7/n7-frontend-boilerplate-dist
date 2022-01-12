import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let MrAdvancedResultComponent = class MrAdvancedResultComponent {
    constructor() {
        /** Returns true if there are some highlights to render */
        this.hasHighlights = () => { var _a, _b; return (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.highlights) === null || _b === void 0 ? void 0 : _b.some((d) => d.items.length > 0); };
    }
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
        template: "<div *ngIf=\"data\"\n     class=\"mr-advanced-result\">\n     <!-- RESULT MAIN CONTENT -->\n    <n7-item-preview [data]=\"data\"></n7-item-preview>\n    <!-- RESULT HIGHLIGHTS SECTION -->\n    <ng-container *ngIf=\"hasHighlights()\">\n        <div class=\"mr-advanced-result__content\"\n            *ngFor=\"let highlightGroup of data.highlights\">\n            <div class=\"mr-advanced-result__content-group\">\n                <!-- METADATA ITEM -->\n                <div class=\"mr-advanced-result__item {{ item.classes || '' }}\"\n                    *ngFor=\"let item of highlightGroup.items\">\n                    <!-- ICON -->\n                    <span class=\"mr-advanced-result__icon {{item.icon}}\"\n                        *ngIf=\"item.icon\">\n                    </span>\n                    <!-- LABEL -->\n                    <span class=\"mr-advanced-result__label\"\n                        *ngIf=\"item.label\"\n                        [innerHTML]=\"item.label\">\n                    </span>\n                    <!-- VALUE W/ HREF -->\n                    <a *ngIf=\"item.href\"\n                    [href]=\"item.href\">\n                        <span class=\"mr-advanced-result__value\"\n                            *ngIf=\"item.value\"\n                            [innerHTML]=\"item.value\">\n                        </span>\n                    </a>\n                    <!-- VALUE W/OUT HREF -->\n                    <span class=\"mr-advanced-result__value\"\n                        *ngIf=\"item.value && !item.href\"\n                        [innerHTML]=\"item.value\">\n                    </span>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>\n"
    })
], MrAdvancedResultComponent);
export { MrAdvancedResultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL2FkdmFuY2VkLXJlc3VsdC9hZHZhbmNlZC1yZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0JqRCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUF0QztRQUtFLDBEQUEwRDtRQUMxRCxrQkFBYSxHQUFHLEdBQVksRUFBRSxrQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FDcEMsVUFBVSwwQ0FFVixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBQyxDQUFDO0lBTXRDLENBQUM7SUFKQyxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUFkVTtJQUFSLEtBQUssRUFBRTs7dURBQTJCO0FBRTFCO0lBQVIsS0FBSyxFQUFFOzt1REFBVztBQUhSLHlCQUF5QjtJQUpyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLG1zREFBcUM7S0FDdEMsQ0FBQztHQUNXLHlCQUF5QixDQWVyQztTQWZZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSwgTWV0YWRhdGFEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG4vKipcbiAqIEEgaHlwZXJsaW5rZWQgbWV0YWRhdGEgaXRlbVxuICovXG5leHBvcnQgaW50ZXJmYWNlIExpbmtlZE1ldGFkYXRhRGF0YSBleHRlbmRzIE1ldGFkYXRhRGF0YSB7XG4gIC8qKiBocmVmIHRvIHVzZSBvbiB0aGUgaHRtbCBlbGVtZW50ICovXG4gIGhyZWY6IHN0cmluZztcbiAgLyoqIGxpc3Qgb2YgaGlnaGxpZ2h0cyAqL1xuICBpdGVtczogc3RyaW5nW107XG59XG5cbi8qKlxuICogRGF0YSBmb3IgTXVydWNhJ3MgQWR2YW5jZWRSZXN1bHQgY29tcG9uZW50LlxuICovXG5pbnRlcmZhY2UgQWR2YW5jZWRSZXN1bHRzRGF0YSBleHRlbmRzIEl0ZW1QcmV2aWV3RGF0YSB7XG4gIGhpZ2hsaWdodHM6IExpbmtlZE1ldGFkYXRhRGF0YVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1hZHZhbmNlZC1yZXN1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWR2YW5jZWQtcmVzdWx0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkUmVzdWx0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogQWR2YW5jZWRSZXN1bHRzRGF0YTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBhcmUgc29tZSBoaWdobGlnaHRzIHRvIHJlbmRlciAqL1xuICBoYXNIaWdobGlnaHRzID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5kYXRhXG4gICAgPy5oaWdobGlnaHRzXG4gICAgLy8gdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGdyb3VwIHRoYXQgaGFzIGhpZ2hsaWdodHNcbiAgICA/LnNvbWUoKGQpID0+IGQuaXRlbXMubGVuZ3RoID4gMCk7XG5cbiAgb25DbGljayhwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==