//---------------------------
// SchedaDropdown.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var SchedaDropdownComponent = /** @class */ (function () {
    function SchedaDropdownComponent() {
    }
    SchedaDropdownComponent.prototype.onClick = function (ev, payload) {
        if (!this.emit) {
            return;
        }
        ev.stopImmediatePropagation();
        this.emit('click', payload);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SchedaDropdownComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], SchedaDropdownComponent.prototype, "emit", void 0);
    SchedaDropdownComponent = __decorate([
        Component({
            selector: 'aw-scheda-dropdown',
            template: "<div *ngIf=\"data\" class=\"aw-scheda-dropdown {{ data.classes || '' }}\">\r\n    <div class=\"aw-scheda-dropdown__header\"\r\n    (click)=\"onClick($event, data.header.payload)\">\r\n        <!-- header label -->\r\n        <span class=\"aw-scheda-dropdown__header-label\">\r\n            {{ data.header.label }}\r\n        </span>\r\n        <!-- header icon -->\r\n        <span class=\"aw-scheda-dropdown__header-icon\"\r\n        [ngClass]=\"data.header.icon['id']\">\r\n        </span>\r\n    </div>\r\n    <div class=\"aw-scheda-dropdown__items\">\r\n        <ul>\r\n            <li *ngFor=\"let item of data.items\"\r\n            [ngClass]=\"{\r\n                'is-selected': item.selected \r\n            }\"\r\n            (click)=\"onClick($event, item.payload)\">\r\n                {{ item.label }}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"
        })
    ], SchedaDropdownComponent);
    return SchedaDropdownComponent;
}());
export { SchedaDropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2NvbXBvbmVudHMvc2NoZWRhLWRyb3Bkb3duL3NjaGVkYS1kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBQ3BCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzQmpEO0lBQUE7SUFjQSxDQUFDO0lBVEMseUNBQU8sR0FBUCxVQUFRLEVBQVMsRUFBRSxPQUFPO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBRUQsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVpRO1FBQVIsS0FBSyxFQUFFOzt5REFBMEI7SUFFekI7UUFBUixLQUFLLEVBQUU7O3lEQUE0QztJQUh6Qyx1QkFBdUI7UUFKbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5Qix3M0JBQXFDO1NBQ3RDLENBQUM7T0FDVyx1QkFBdUIsQ0FjbkM7SUFBRCw4QkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNjaGVkYURyb3Bkb3duLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgdHlwZSBTY2hlZGFEcm9wZG93bkRhdGEgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgaWNvbjogSWNvbjtcclxuICAgIHBheWxvYWQ6IGFueTtcclxuICB9O1xyXG4gIGl0ZW1zOiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcGF5bG9hZDogYW55O1xyXG4gICAgc2VsZWN0ZWQ6IGZhbHNlO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gIH1bXTtcclxuICBjbGFzc2VzPzogYW55O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F3LXNjaGVkYS1kcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkYS1kcm9wZG93bi5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjaGVkYURyb3Bkb3duQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBTY2hlZGFEcm9wZG93bkRhdGE7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6ICh0eXBlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSkgPT4gdm9pZDtcclxuXHJcbiAgb25DbGljayhldjogRXZlbnQsIHBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==