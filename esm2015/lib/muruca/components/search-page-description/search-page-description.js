import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let MrSearchPageDescriptionComponent = class MrSearchPageDescriptionComponent {
    onClick(payload) {
        if (this.emit) {
            this.emit('click', payload);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], MrSearchPageDescriptionComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MrSearchPageDescriptionComponent.prototype, "emit", void 0);
MrSearchPageDescriptionComponent = __decorate([
    Component({
        selector: 'mr-search-page-description',
        template: "<div *ngIf=\"data\" class=\"mr-search-page-description\">\r\n    <div class=\"mr-search-page-description__text\" [innerHTML]=\"data.text\"></div>\r\n    <a class=\"mr-search-page-description__link\" (click)=\"onClick(data.link.payload)\">{{ data.link.text }}</a>\r\n</div>"
    })
], MrSearchPageDescriptionComponent);
export { MrSearchPageDescriptionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2NvbXBvbmVudHMvc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24vc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBY2pELElBQWEsZ0NBQWdDLEdBQTdDLE1BQWEsZ0NBQWdDO0lBSzNDLE9BQU8sQ0FBQyxPQUFPO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQVRVO0lBQVIsS0FBSyxFQUFFOzs4REFBaUM7QUFFaEM7SUFBUixLQUFLLEVBQUU7OzhEQUE0QztBQUh6QyxnQ0FBZ0M7SUFKNUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRCQUE0QjtRQUN0Qyw0UkFBNkM7S0FDOUMsQ0FBQztHQUNXLGdDQUFnQyxDQVU1QztTQVZZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIFNlYXJjaFBhZ2VEZXNjcmlwdGlvbkRhdGEgPSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGxpbms6IHtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIHBheWxvYWQ6IGFueTtcclxuICB9O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLXNlYXJjaC1wYWdlLWRlc2NyaXB0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24uaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFBhZ2VEZXNjcmlwdGlvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogU2VhcmNoUGFnZURlc2NyaXB0aW9uRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZDogYW55KSA9PiB2b2lkO1xyXG5cclxuICBvbkNsaWNrKHBheWxvYWQpIHtcclxuICAgIGlmICh0aGlzLmVtaXQpIHtcclxuICAgICAgdGhpcy5lbWl0KCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=