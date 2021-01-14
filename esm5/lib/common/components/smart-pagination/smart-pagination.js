import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var SmartPaginationComponent = /** @class */ (function () {
    function SmartPaginationComponent() {
        this.handlePaginationEvent.bind(this);
    }
    SmartPaginationComponent.prototype.handlePaginationEvent = function (type, payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
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
            template: "<div class=\"n7-smart-pagination\" *ngIf=\"data\">\r\n  <n7-pagination\r\n    [data]=\"data\"\r\n    [emit]=\"emit\">\r\n  </n7-pagination>\r\n</div>"
        }),
        __metadata("design:paramtypes", [])
    ], SmartPaginationComponent);
    return SmartPaginationComponent;
}());
export { SmartPaginationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vY29tcG9uZW50cy9zbWFydC1wYWdpbmF0aW9uL3NtYXJ0LXBhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pEO0lBS0U7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3REFBcUIsR0FBckIsVUFBc0IsSUFBSSxFQUFFLE9BQU87UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBWFE7UUFBUixLQUFLLEVBQUU7OzBEQUFXO0lBRVY7UUFBUixLQUFLLEVBQUU7OzBEQUFXO0lBSFIsd0JBQXdCO1FBTHBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsaUtBQXNDO1NBQ3ZDLENBQUM7O09BRVcsd0JBQXdCLENBYXBDO0lBQUQsK0JBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ243LXNtYXJ0LXBhZ2luYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zbWFydC1wYWdpbmF0aW9uLmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNtYXJ0UGFnaW5hdGlvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5oYW5kbGVQYWdpbmF0aW9uRXZlbnQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBhZ2luYXRpb25FdmVudCh0eXBlLCBwYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xyXG4gICAgdGhpcy5lbWl0KCdjaGFuZ2UnLCBwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19