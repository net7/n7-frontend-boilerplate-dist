import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var MrGalleryComponent = /** @class */ (function () {
    function MrGalleryComponent() {
    }
    MrGalleryComponent.prototype.onClick = function (payload) {
        if (this.emit) {
            this.emit('click', payload);
        }
    };
    MrGalleryComponent.prototype.onClose = function () {
        if (this.emit) {
            this.emit('close');
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
            template: "<div *ngIf=\"data\" class=\"mr-gallery mr-wp-content\">\r\n    <div class=\"mr-gallery__wrapper wp-block-gallery has-zoom {{ grid ? 'columns-' + grid : '' }}\">\r\n        <ul class=\"mr-gallery__items blocks-gallery-grid\">\r\n            <li *ngFor=\"let item of data.items\" class=\"mr-gallery__item blocks-gallery-item\">\r\n                <figure>\r\n                    <a (click)=\"onClick(item.payload)\" class=\"mr-gallery__link\">\r\n                        <img [src]=\"item.thumbSrc\" [alt]=\"item.title\" class=\"mr-gallery__image\">\r\n                    </a>\r\n                </figure>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div *ngIf=\"data.selected\" class=\"mr-modal mr-gallery-modal\" (click)=\"onClose()\">\r\n        <div class=\"mr-modal__overlay\">\r\n            <div class=\"mr-modal__window mr-gallery-modal__window\">\r\n                <div class=\"mr-modal__header mr-gallery-modal__header\">\r\n                    <div class=\"mr-modal__close\">\r\n                        <a class=\"mr-modal__close-link\" (click)=\"onClose()\"><span class=\"n7-icon-close\"></span></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"mr-modal__content mr-gallery-modal__content\">\r\n                    <div class=\"mr-gallery__zoom-image-wrapper\">\r\n                        <img [src]=\"data.selected.fullSrc\" [alt]=\"data.selected.title\" class=\"mr-gallery__zoom-image\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"
        })
    ], MrGalleryComponent);
    return MrGalleryComponent;
}());
export { MrGalleryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUJqRDtJQUFBO0lBa0JBLENBQUM7SUFYQyxvQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNiLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELG9DQUFPLEdBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQWhCUTtRQUFSLEtBQUssRUFBRTs7b0RBQW1CO0lBRWxCO1FBQVIsS0FBSyxFQUFFOztvREFBNkM7SUFFNUM7UUFBUixLQUFLLEVBQUU7O29EQUFxQjtJQUxsQixrQkFBa0I7UUFKOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsdWpEQUE2QjtTQUM5QixDQUFDO09BQ1csa0JBQWtCLENBa0I5QjtJQUFELHlCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgR2FsbGVyeURhdGEgPSB7XHJcbiAgc2VsZWN0ZWQ6IG51bGwgfCBHYWxsZXJ5SXRlbTtcclxuICBpdGVtczogR2FsbGVyeUl0ZW1bXTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2FsbGVyeUl0ZW0gPSB7XHJcbiAgaWQ6IHN0cmluZyB8IG51bWJlcjtcclxuICB0aHVtYlNyYzogc3RyaW5nO1xyXG4gIGZ1bGxTcmM6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHBheWxvYWQ6IGFueTtcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItZ2FsbGVyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnkuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNckdhbGxlcnlDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IEdhbGxlcnlEYXRhO1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiAodHlwZTogc3RyaW5nLCBwYXlsb2FkPzogYW55KSA9PiB2b2lkO1xyXG5cclxuICBASW5wdXQoKSBncmlkOiBudW1iZXIgfCBudWxsO1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICh0aGlzLmVtaXQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbG9zZSgpIHtcclxuICAgIGlmICh0aGlzLmVtaXQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbG9zZScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=