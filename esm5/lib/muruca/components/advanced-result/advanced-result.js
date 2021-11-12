import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var MrAdvancedResultComponent = /** @class */ (function () {
    function MrAdvancedResultComponent() {
        var _this = this;
        /** Returns true if there are some highlights to render */
        this.hasHighlights = function () { var _a, _b; return (_b = (_a = _this.data) === null || _a === void 0 ? void 0 : _a.highlights) === null || _b === void 0 ? void 0 : _b.some(function (d) { return d.items.length > 0; }); };
    }
    MrAdvancedResultComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
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
    return MrAdvancedResultComponent;
}());
export { MrAdvancedResultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL2FkdmFuY2VkLXJlc3VsdC9hZHZhbmNlZC1yZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0JqRDtJQUFBO1FBQUEsaUJBZUM7UUFWQywwREFBMEQ7UUFDMUQsa0JBQWEsR0FBRyw2Q0FBZSxLQUFJLENBQUMsSUFBSSwwQ0FDcEMsVUFBVSwwQ0FFVixJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQWxCLENBQWtCLElBQUMsQ0FBQztJQU10QyxDQUFDO0lBSkMsMkNBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFiUTtRQUFSLEtBQUssRUFBRTs7MkRBQTJCO0lBRTFCO1FBQVIsS0FBSyxFQUFFOzsyREFBVztJQUhSLHlCQUF5QjtRQUpyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLGl4REFBcUM7U0FDdEMsQ0FBQztPQUNXLHlCQUF5QixDQWVyQztJQUFELGdDQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtUHJldmlld0RhdGEsIE1ldGFkYXRhRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuXHJcbi8qKlxyXG4gKiBBIGh5cGVybGlua2VkIG1ldGFkYXRhIGl0ZW1cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlua2VkTWV0YWRhdGFEYXRhIGV4dGVuZHMgTWV0YWRhdGFEYXRhIHtcclxuICAvKiogaHJlZiB0byB1c2Ugb24gdGhlIGh0bWwgZWxlbWVudCAqL1xyXG4gIGhyZWY6IHN0cmluZztcclxuICAvKiogbGlzdCBvZiBoaWdobGlnaHRzICovXHJcbiAgaXRlbXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG4vKipcclxuICogRGF0YSBmb3IgTXVydWNhJ3MgQWR2YW5jZWRSZXN1bHQgY29tcG9uZW50LlxyXG4gKi9cclxuaW50ZXJmYWNlIEFkdmFuY2VkUmVzdWx0c0RhdGEgZXh0ZW5kcyBJdGVtUHJldmlld0RhdGEge1xyXG4gIGhpZ2hsaWdodHM6IExpbmtlZE1ldGFkYXRhRGF0YVtdO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLWFkdmFuY2VkLXJlc3VsdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FkdmFuY2VkLXJlc3VsdC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRSZXN1bHRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEFkdmFuY2VkUmVzdWx0c0RhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgLyoqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBhcmUgc29tZSBoaWdobGlnaHRzIHRvIHJlbmRlciAqL1xyXG4gIGhhc0hpZ2hsaWdodHMgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmRhdGFcclxuICAgID8uaGlnaGxpZ2h0c1xyXG4gICAgLy8gdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGdyb3VwIHRoYXQgaGFzIGhpZ2hsaWdodHNcclxuICAgID8uc29tZSgoZCkgPT4gZC5pdGVtcy5sZW5ndGggPiAwKTtcclxuXHJcbiAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=