import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let SmartPaginationComponent = class SmartPaginationComponent {
    constructor() {
        this.handlePaginationEvent.bind(this);
    }
    handlePaginationEvent(type, payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SmartPaginationComponent.prototype, "data", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SmartPaginationComponent.prototype, "emit", void 0);
SmartPaginationComponent = __decorate([
    Component({
        selector: 'n7-smart-pagination',
        template: "<div class=\"n7-smart-pagination\" *ngIf=\"data\">\n  <n7-pagination\n    [data]=\"data\"\n    [emit]=\"emit\">\n  </n7-pagination>\n</div>"
    }),
    __metadata("design:paramtypes", [])
], SmartPaginationComponent);
export { SmartPaginationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vY29tcG9uZW50cy9zbWFydC1wYWdpbmF0aW9uL3NtYXJ0LXBhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBS25DO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQscUJBQXFCLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0YsQ0FBQTtBQVpVO0lBQVIsS0FBSyxFQUFFOztzREFBVztBQUVWO0lBQVIsS0FBSyxFQUFFOztzREFBVztBQUhSLHdCQUF3QjtJQUxwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLHVKQUFzQztLQUN2QyxDQUFDOztHQUVXLHdCQUF3QixDQWFwQztTQWJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctc21hcnQtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1wYWdpbmF0aW9uLmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIFNtYXJ0UGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVQYWdpbmF0aW9uRXZlbnQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVBhZ2luYXRpb25FdmVudCh0eXBlLCBwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHBheWxvYWQpO1xuICB9XG59XG4iXX0=