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
            template: "<div *ngIf=\"data\"\n     class=\"mr-advanced-result\">\n     <!-- RESULT MAIN CONTENT -->\n    <n7-item-preview [data]=\"data\"></n7-item-preview>\n    <!-- RESULT HIGHLIGHTS SECTION -->\n    <ng-container *ngIf=\"hasHighlights()\">\n        <div class=\"mr-advanced-result__content\"\n            *ngFor=\"let highlightGroup of data.highlights\">\n            <div class=\"mr-advanced-result__content-group\">\n                <!-- METADATA ITEM -->\n                <div class=\"mr-advanced-result__item {{ item.classes || '' }}\"\n                    *ngFor=\"let item of highlightGroup.items\">\n                    <!-- ICON -->\n                    <span class=\"mr-advanced-result__icon {{item.icon}}\"\n                        *ngIf=\"item.icon\">\n                    </span>\n                    <!-- LABEL -->\n                    <span class=\"mr-advanced-result__label\"\n                        *ngIf=\"item.label\"\n                        [innerHTML]=\"item.label\">\n                    </span>\n                    <!-- VALUE W/ HREF -->\n                    <a *ngIf=\"item.href\"\n                    [href]=\"item.href\">\n                        <span class=\"mr-advanced-result__value\"\n                            *ngIf=\"item.value\"\n                            [innerHTML]=\"item.value\">\n                        </span>\n                    </a>\n                    <!-- VALUE W/OUT HREF -->\n                    <span class=\"mr-advanced-result__value\"\n                        *ngIf=\"item.value && !item.href\"\n                        [innerHTML]=\"item.value\">\n                    </span>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>\n"
        })
    ], MrAdvancedResultComponent);
    return MrAdvancedResultComponent;
}());
export { MrAdvancedResultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtcmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL2FkdmFuY2VkLXJlc3VsdC9hZHZhbmNlZC1yZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0JqRDtJQUFBO1FBQUEsaUJBZUM7UUFWQywwREFBMEQ7UUFDMUQsa0JBQWEsR0FBRyw2Q0FBZSxLQUFJLENBQUMsSUFBSSwwQ0FDcEMsVUFBVSwwQ0FFVixJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQWxCLENBQWtCLElBQUMsQ0FBQztJQU10QyxDQUFDO0lBSkMsMkNBQU8sR0FBUCxVQUFRLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFiUTtRQUFSLEtBQUssRUFBRTs7MkRBQTJCO0lBRTFCO1FBQVIsS0FBSyxFQUFFOzsyREFBVztJQUhSLHlCQUF5QjtRQUpyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLG1zREFBcUM7U0FDdEMsQ0FBQztPQUNXLHlCQUF5QixDQWVyQztJQUFELGdDQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBNZXRhZGF0YURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbi8qKlxuICogQSBoeXBlcmxpbmtlZCBtZXRhZGF0YSBpdGVtXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGlua2VkTWV0YWRhdGFEYXRhIGV4dGVuZHMgTWV0YWRhdGFEYXRhIHtcbiAgLyoqIGhyZWYgdG8gdXNlIG9uIHRoZSBodG1sIGVsZW1lbnQgKi9cbiAgaHJlZjogc3RyaW5nO1xuICAvKiogbGlzdCBvZiBoaWdobGlnaHRzICovXG4gIGl0ZW1zOiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBEYXRhIGZvciBNdXJ1Y2EncyBBZHZhbmNlZFJlc3VsdCBjb21wb25lbnQuXG4gKi9cbmludGVyZmFjZSBBZHZhbmNlZFJlc3VsdHNEYXRhIGV4dGVuZHMgSXRlbVByZXZpZXdEYXRhIHtcbiAgaGlnaGxpZ2h0czogTGlua2VkTWV0YWRhdGFEYXRhW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLWFkdmFuY2VkLXJlc3VsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1yZXN1bHQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRSZXN1bHRDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBBZHZhbmNlZFJlc3VsdHNEYXRhO1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGFyZSBzb21lIGhpZ2hsaWdodHMgdG8gcmVuZGVyICovXG4gIGhhc0hpZ2hsaWdodHMgPSAoKTogYm9vbGVhbiA9PiB0aGlzLmRhdGFcbiAgICA/LmhpZ2hsaWdodHNcbiAgICAvLyB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZ3JvdXAgdGhhdCBoYXMgaGlnaGxpZ2h0c1xuICAgID8uc29tZSgoZCkgPT4gZC5pdGVtcy5sZW5ndGggPiAwKTtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19