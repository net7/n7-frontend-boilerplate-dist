import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let MrGalleryComponent = class MrGalleryComponent {
    onClick(payload) {
        if (this.emit) {
            this.emit('click', payload);
        }
    }
    onClose() {
        if (this.emit) {
            this.emit('close');
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrGalleryComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MrGalleryComponent.prototype, "emit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MrGalleryComponent.prototype, "grid", void 0);
MrGalleryComponent = __decorate([
    Component({
        selector: 'mr-gallery',
        template: "<div *ngIf=\"data\" class=\"mr-gallery mr-wp-content\">\n    <div class=\"mr-gallery__wrapper wp-block-gallery has-zoom {{ grid ? 'columns-' + grid : '' }}\">\n        <ul class=\"mr-gallery__items blocks-gallery-grid\">\n            <li *ngFor=\"let item of data.items\" class=\"mr-gallery__item blocks-gallery-item\">\n                <figure>\n                    <a (click)=\"onClick(item.payload)\" class=\"mr-gallery__link\">\n                        <img [src]=\"item.thumbSrc\" [alt]=\"item.title\" class=\"mr-gallery__image\">\n                    </a>\n                </figure>\n            </li>\n        </ul>\n    </div>\n    <div *ngIf=\"data.selected\" class=\"mr-modal mr-gallery-modal\" (click)=\"onClose()\">\n        <div class=\"mr-modal__overlay\">\n            <div class=\"mr-modal__window mr-gallery-modal__window\">\n                <div class=\"mr-modal__header mr-gallery-modal__header\">\n                    <div class=\"mr-modal__close\">\n                        <a class=\"mr-modal__close-link\" (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\n                    </div>\n                </div>\n                <div class=\"mr-modal__content mr-gallery-modal__content\">\n                    <div class=\"mr-gallery__zoom-image-wrapper\">\n                        <img [src]=\"data.selected.fullSrc\" [alt]=\"data.selected.title\" class=\"mr-gallery__zoom-image\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"
    })
], MrGalleryComponent);
export { MrGalleryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUJqRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQU83QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFqQlU7SUFBUixLQUFLLEVBQUU7O2dEQUFtQjtBQUVsQjtJQUFSLEtBQUssRUFBRTs7Z0RBQTZDO0FBRTVDO0lBQVIsS0FBSyxFQUFFOztnREFBcUI7QUFMbEIsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLCsvQ0FBNkI7S0FDOUIsQ0FBQztHQUNXLGtCQUFrQixDQWtCOUI7U0FsQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBHYWxsZXJ5RGF0YSA9IHtcbiAgc2VsZWN0ZWQ6IG51bGwgfCBHYWxsZXJ5SXRlbTtcbiAgaXRlbXM6IEdhbGxlcnlJdGVtW107XG59XG5cbmV4cG9ydCB0eXBlIEdhbGxlcnlJdGVtID0ge1xuICBpZDogc3RyaW5nIHwgbnVtYmVyO1xuICB0aHVtYlNyYzogc3RyaW5nO1xuICBmdWxsU3JjOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHBheWxvYWQ6IGFueTtcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21yLWdhbGxlcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTXJHYWxsZXJ5Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogR2FsbGVyeURhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZD86IGFueSkgPT4gdm9pZDtcblxuICBASW5wdXQoKSBncmlkOiBudW1iZXIgfCBudWxsO1xuXG4gIG9uQ2xpY2socGF5bG9hZCkge1xuICAgIGlmICh0aGlzLmVtaXQpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIGlmICh0aGlzLmVtaXQpIHtcbiAgICAgIHRoaXMuZW1pdCgnY2xvc2UnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==