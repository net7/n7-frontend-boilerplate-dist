//---------------------------
// SchedaDropdown.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let SchedaDropdownComponent = class SchedaDropdownComponent {
    onClick(ev, payload) {
        if (!this.emit) {
            return;
        }
        ev.stopImmediatePropagation();
        this.emit('click', payload);
    }
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
        template: "<div *ngIf=\"data\" class=\"aw-scheda-dropdown {{ data.classes || '' }}\">\n    <div class=\"aw-scheda-dropdown__header\"\n    (click)=\"onClick($event, data.header.payload)\">\n        <!-- header label -->\n        <span class=\"aw-scheda-dropdown__header-label\">\n            {{ data.header.label }}\n        </span>\n        <!-- header icon -->\n        <span class=\"aw-scheda-dropdown__header-icon\"\n        [ngClass]=\"data.header.icon['id']\">\n        </span>\n    </div>\n    <div class=\"aw-scheda-dropdown__items\">\n        <ul>\n            <li *ngFor=\"let item of data.items\"\n            [ngClass]=\"{\n                'is-selected': item.selected \n            }\"\n            (click)=\"onClick($event, item.payload)\">\n                {{ item.label }}\n            </li>\n        </ul>\n    </div>\n</div>"
    })
], SchedaDropdownComponent);
export { SchedaDropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2NvbXBvbmVudHMvc2NoZWRhLWRyb3Bkb3duL3NjaGVkYS1kcm9wZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBQ3BCLDZCQUE2Qjs7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzQmpELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBS2xDLE9BQU8sQ0FBQyxFQUFTLEVBQUUsT0FBTztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUVELEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBYlU7SUFBUixLQUFLLEVBQUU7O3FEQUEwQjtBQUV6QjtJQUFSLEtBQUssRUFBRTs7cURBQTRDO0FBSHpDLHVCQUF1QjtJQUpuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLDAwQkFBcUM7S0FDdEMsQ0FBQztHQUNXLHVCQUF1QixDQWNuQztTQWRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTY2hlZGFEcm9wZG93bi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IHR5cGUgU2NoZWRhRHJvcGRvd25EYXRhID0ge1xuICBoZWFkZXI6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGljb246IEljb247XG4gICAgcGF5bG9hZDogYW55O1xuICB9O1xuICBpdGVtczoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICAgIHNlbGVjdGVkOiBmYWxzZTtcbiAgICB0eXBlOiBzdHJpbmc7XG4gIH1bXTtcbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctc2NoZWRhLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkYS1kcm9wZG93bi5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWRhRHJvcGRvd25Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBTY2hlZGFEcm9wZG93bkRhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZDogYW55KSA9PiB2b2lkO1xuXG4gIG9uQ2xpY2soZXY6IEV2ZW50LCBwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIl19