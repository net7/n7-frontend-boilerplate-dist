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
        template: "<div *ngIf=\"data\"\r\n     class=\"mr-advanced-result\">\r\n     <!-- RESULT MAIN CONTENT -->\r\n    <n7-item-preview [data]=\"data\"></n7-item-preview>\r\n    <!-- RESULT HIGHLIGHTS SECTION -->\r\n    <ng-container *ngIf=\"hasHighlights()\">\r\n        <div class=\"mr-advanced-result__content\"\r\n            *ngFor=\"let highlightGroup of data.highlights\">\r\n            <div class=\"mr-advanced-result__content-group\">\r\n                <!-- METADATA ITEM -->\r\n                <div class=\"mr-advanced-result__item {{ item.classes || '' }}\"\r\n                    *ngFor=\"let item of highlightGroup.items\">\r\n                    <!-- ICON -->\r\n                    <span class=\"mr-advanced-result__icon {{item.icon}}\"\r\n                        *ngIf=\"item.icon\">\r\n                    </span>\r\n                    <!-- LABEL -->\r\n                    <span class=\"mr-advanced-result__label\"\r\n                        *ngIf=\"item.label\"\r\n                        [innerHTML]=\"item.label\">\r\n                    </span>\r\n                    <!-- VALUE W/ HREF -->\r\n                    <a *ngIf=\"item.href\"\r\n                    [href]=\"item.href\">\r\n                        <span class=\"mr-advanced-result__value\"\r\n                            *ngIf=\"item.value\"\r\n                            [innerHTML]=\"item.value\">\r\n                        </span>\r\n                    </a>\r\n                    <!-- VALUE W/OUT HREF -->\r\n                    <span class=\"mr-advanced-result__value\"\r\n                        *ngIf=\"item.value && !item.href\"\r\n                        [innerHTML]=\"item.value\">\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n"
    })
], MrAdvancedResultComponent);
export { MrAdvancedResultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL2FkdmFuY2VkLXJlc3VsdC9hZHZhbmNlZC1yZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0JqRCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUF0QztRQUtFLDBEQUEwRDtRQUMxRCxrQkFBYSxHQUFHLEdBQVksRUFBRSxrQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FDcEMsVUFBVSwwQ0FFVixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBQyxDQUFDO0lBTXRDLENBQUM7SUFKQyxPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUFkVTtJQUFSLEtBQUssRUFBRTs7dURBQTJCO0FBRTFCO0lBQVIsS0FBSyxFQUFFOzt1REFBVztBQUhSLHlCQUF5QjtJQUpyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLGl4REFBcUM7S0FDdEMsQ0FBQztHQUNXLHlCQUF5QixDQWVyQztTQWZZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBNZXRhZGF0YURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcblxyXG4vKipcclxuICogQSBoeXBlcmxpbmtlZCBtZXRhZGF0YSBpdGVtXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIExpbmtlZE1ldGFkYXRhRGF0YSBleHRlbmRzIE1ldGFkYXRhRGF0YSB7XHJcbiAgLyoqIGhyZWYgdG8gdXNlIG9uIHRoZSBodG1sIGVsZW1lbnQgKi9cclxuICBocmVmOiBzdHJpbmc7XHJcbiAgLyoqIGxpc3Qgb2YgaGlnaGxpZ2h0cyAqL1xyXG4gIGl0ZW1zOiBzdHJpbmdbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGEgZm9yIE11cnVjYSdzIEFkdmFuY2VkUmVzdWx0IGNvbXBvbmVudC5cclxuICovXHJcbmludGVyZmFjZSBBZHZhbmNlZFJlc3VsdHNEYXRhIGV4dGVuZHMgSXRlbVByZXZpZXdEYXRhIHtcclxuICBoaWdobGlnaHRzOiBMaW5rZWRNZXRhZGF0YURhdGFbXTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtci1hZHZhbmNlZC1yZXN1bHQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1yZXN1bHQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkUmVzdWx0Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBBZHZhbmNlZFJlc3VsdHNEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIC8qKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgYXJlIHNvbWUgaGlnaGxpZ2h0cyB0byByZW5kZXIgKi9cclxuICBoYXNIaWdobGlnaHRzID0gKCk6IGJvb2xlYW4gPT4gdGhpcy5kYXRhXHJcbiAgICA/LmhpZ2hsaWdodHNcclxuICAgIC8vIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBncm91cCB0aGF0IGhhcyBoaWdobGlnaHRzXHJcbiAgICA/LnNvbWUoKGQpID0+IGQuaXRlbXMubGVuZ3RoID4gMCk7XHJcblxyXG4gIG9uQ2xpY2socGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcclxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19