import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let CardTextItemComponent = class CardTextItemComponent {
    onClick(payload) {
        if (!this.emit)
            return;
        this.emit('click', payload);
    }
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
        template: "<div *ngIf=\"data\" class=\"dv-card-text-item {{ data.classes || '' }}\">\r\n    <span [innerHTML]=\"data.text\" (click)=\"onClick(data.payload)\"></span>\r\n</div>"
    })
], CardTextItemComponent);
export { CardTextItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10ZXh0LWl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovY29tcG9uZW50cy9jYXJkLXRleHQtaXRlbS9jYXJkLXRleHQtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFZakQsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFLOUIsT0FBTyxDQUFDLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSixDQUFBO0FBVFk7SUFBUixLQUFLLEVBQUU7O21EQUF3QjtBQUV2QjtJQUFSLEtBQUssRUFBRTs7bURBQTRDO0FBSDNDLHFCQUFxQjtJQUpqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLGdMQUFvQztLQUNyQyxDQUFDO0dBQ1cscUJBQXFCLENBVWpDO1NBVlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2FyZFRleHRJdGVtRGF0YSA9IHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgcGF5bG9hZD86IGFueTtcclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2R2LWNhcmQtdGV4dC1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC10ZXh0LWl0ZW0uaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkVGV4dEl0ZW1Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgZGF0YTogQ2FyZFRleHRJdGVtRGF0YTtcclxuXHJcbiAgICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkpID0+IHZvaWQ7XHJcblxyXG4gICAgb25DbGljayhwYXlsb2FkKSB7XHJcbiAgICAgIGlmICghdGhpcy5lbWl0KSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgICB9XHJcbn1cclxuIl19