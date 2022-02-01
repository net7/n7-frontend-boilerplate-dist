import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@n7-frontend/components";
import * as i2 from "@angular/common";
export class SmartPaginationComponent {
    constructor() {
        this.handlePaginationEvent.bind(this);
    }
    handlePaginationEvent(type, payload) {
        if (!this.emit)
            return;
        this.emit('change', payload);
    }
}
SmartPaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: SmartPaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SmartPaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: SmartPaginationComponent, selector: "n7-smart-pagination", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div class=\"n7-smart-pagination\" *ngIf=\"data\">\n  <n7-pagination\n    [data]=\"data\"\n    [emit]=\"emit\">\n  </n7-pagination>\n</div>", components: [{ type: i1.PaginationComponent, selector: "n7-pagination", inputs: ["data", "emit"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: SmartPaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'n7-smart-pagination', template: "<div class=\"n7-smart-pagination\" *ngIf=\"data\">\n  <n7-pagination\n    [data]=\"data\"\n    [emit]=\"emit\">\n  </n7-pagination>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtcGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NtYXJ0LXBhZ2luYXRpb24vc21hcnQtcGFnaW5hdGlvbi50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2NvbW1vbi9jb21wb25lbnRzL3NtYXJ0LXBhZ2luYXRpb24vc21hcnQtcGFnaW5hdGlvbi5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pELE1BQU0sT0FBTyx3QkFBd0I7SUFLbkM7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7O3FIQVpVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLG1HQ1ByQyw2SUFLTTsyRkRFTyx3QkFBd0I7a0JBTHBDLFNBQVM7K0JBQ0UscUJBQXFCOzBFQUt0QixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1zbWFydC1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NtYXJ0LXBhZ2luYXRpb24uaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgU21hcnRQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZVBhZ2luYXRpb25FdmVudC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlUGFnaW5hdGlvbkV2ZW50KHR5cGUsIHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgcGF5bG9hZCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJuNy1zbWFydC1wYWdpbmF0aW9uXCIgKm5nSWY9XCJkYXRhXCI+XG4gIDxuNy1wYWdpbmF0aW9uXG4gICAgW2RhdGFdPVwiZGF0YVwiXG4gICAgW2VtaXRdPVwiZW1pdFwiPlxuICA8L243LXBhZ2luYXRpb24+XG48L2Rpdj4iXX0=