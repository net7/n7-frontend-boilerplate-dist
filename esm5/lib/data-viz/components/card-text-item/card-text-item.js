import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var CardTextItemComponent = /** @class */ (function () {
    function CardTextItemComponent() {
    }
    CardTextItemComponent.prototype.onClick = function (payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CardTextItemComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], CardTextItemComponent.prototype, "emit", void 0);
    CardTextItemComponent = __decorate([
        Component({
            selector: 'dv-card-text-item',
            template: "<div *ngIf=\"data\" class=\"dv-card-text-item {{ data.classes || '' }}\">\n    <span [innerHTML]=\"data.text\" (click)=\"onClick(data.payload)\"></span>\n</div>"
        })
    ], CardTextItemComponent);
    return CardTextItemComponent;
}());
export { CardTextItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10ZXh0LWl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovY29tcG9uZW50cy9jYXJkLXRleHQtaXRlbS9jYXJkLXRleHQtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFZakQ7SUFBQTtJQVVBLENBQUM7SUFMRyx1Q0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVJRO1FBQVIsS0FBSyxFQUFFOzt1REFBd0I7SUFFdkI7UUFBUixLQUFLLEVBQUU7O3VEQUE0QztJQUgzQyxxQkFBcUI7UUFKakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qiw0S0FBb0M7U0FDckMsQ0FBQztPQUNXLHFCQUFxQixDQVVqQztJQUFELDRCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBDYXJkVGV4dEl0ZW1EYXRhID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBheWxvYWQ/OiBhbnk7XG4gIGNsYXNzZXM/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R2LWNhcmQtdGV4dC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtdGV4dC1pdGVtLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkVGV4dEl0ZW1Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGRhdGE6IENhcmRUZXh0SXRlbURhdGE7XG5cbiAgICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkpID0+IHZvaWQ7XG5cbiAgICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XG5cbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgICB9XG59XG4iXX0=