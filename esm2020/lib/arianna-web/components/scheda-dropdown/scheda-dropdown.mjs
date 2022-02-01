//---------------------------
// SchedaDropdown.ts
//---------------------------
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SchedaDropdownComponent {
    onClick(ev, payload) {
        if (!this.emit) {
            return;
        }
        ev.stopImmediatePropagation();
        this.emit('click', payload);
    }
}
SchedaDropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: SchedaDropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SchedaDropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: SchedaDropdownComponent, selector: "aw-scheda-dropdown", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"aw-scheda-dropdown {{ data.classes || '' }}\">\n    <div class=\"aw-scheda-dropdown__header\"\n    (click)=\"onClick($event, data.header.payload)\">\n        <!-- header label -->\n        <span class=\"aw-scheda-dropdown__header-label\">\n            {{ data.header.label }}\n        </span>\n        <!-- header icon -->\n        <span class=\"aw-scheda-dropdown__header-icon\"\n        [ngClass]=\"data.header.icon['id']\">\n        </span>\n    </div>\n    <div class=\"aw-scheda-dropdown__items\">\n        <ul>\n            <li *ngFor=\"let item of data.items\"\n            [ngClass]=\"{\n                'is-selected': item.selected \n            }\"\n            (click)=\"onClick($event, item.payload)\">\n                {{ item.label }}\n            </li>\n        </ul>\n    </div>\n</div>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: SchedaDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'aw-scheda-dropdown', template: "<div *ngIf=\"data\" class=\"aw-scheda-dropdown {{ data.classes || '' }}\">\n    <div class=\"aw-scheda-dropdown__header\"\n    (click)=\"onClick($event, data.header.payload)\">\n        <!-- header label -->\n        <span class=\"aw-scheda-dropdown__header-label\">\n            {{ data.header.label }}\n        </span>\n        <!-- header icon -->\n        <span class=\"aw-scheda-dropdown__header-icon\"\n        [ngClass]=\"data.header.icon['id']\">\n        </span>\n    </div>\n    <div class=\"aw-scheda-dropdown__items\">\n        <ul>\n            <li *ngFor=\"let item of data.items\"\n            [ngClass]=\"{\n                'is-selected': item.selected \n            }\"\n            (click)=\"onClick($event, item.payload)\">\n                {{ item.label }}\n            </li>\n        </ul>\n    </div>\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zY2hlZGEtZHJvcGRvd24vc2NoZWRhLWRyb3Bkb3duLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9zY2hlZGEtZHJvcGRvd24vc2NoZWRhLWRyb3Bkb3duLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLG9CQUFvQjtBQUNwQiw2QkFBNkI7QUFFN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQXNCakQsTUFBTSxPQUFPLHVCQUF1QjtJQUtsQyxPQUFPLENBQUMsRUFBUyxFQUFFLE9BQU87UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFFRCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztvSEFiVSx1QkFBdUI7d0dBQXZCLHVCQUF1QixrR0MxQnBDLGcwQkF1Qk07MkZER08sdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNFLG9CQUFvQjs4QkFJckIsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTY2hlZGFEcm9wZG93bi50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IHR5cGUgU2NoZWRhRHJvcGRvd25EYXRhID0ge1xuICBoZWFkZXI6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGljb246IEljb247XG4gICAgcGF5bG9hZDogYW55O1xuICB9O1xuICBpdGVtczoge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgcGF5bG9hZDogYW55O1xuICAgIHNlbGVjdGVkOiBmYWxzZTtcbiAgICB0eXBlOiBzdHJpbmc7XG4gIH1bXTtcbiAgY2xhc3Nlcz86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctc2NoZWRhLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NjaGVkYS1kcm9wZG93bi5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWRhRHJvcGRvd25Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBTY2hlZGFEcm9wZG93bkRhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZDogYW55KSA9PiB2b2lkO1xuXG4gIG9uQ2xpY2soZXY6IEV2ZW50LCBwYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZW1pdCgnY2xpY2snLCBwYXlsb2FkKTtcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cImRhdGFcIiBjbGFzcz1cImF3LXNjaGVkYS1kcm9wZG93biB7eyBkYXRhLmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYXctc2NoZWRhLWRyb3Bkb3duX19oZWFkZXJcIlxuICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudCwgZGF0YS5oZWFkZXIucGF5bG9hZClcIj5cbiAgICAgICAgPCEtLSBoZWFkZXIgbGFiZWwgLS0+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXctc2NoZWRhLWRyb3Bkb3duX19oZWFkZXItbGFiZWxcIj5cbiAgICAgICAgICAgIHt7IGRhdGEuaGVhZGVyLmxhYmVsIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPCEtLSBoZWFkZXIgaWNvbiAtLT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdy1zY2hlZGEtZHJvcGRvd25fX2hlYWRlci1pY29uXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiZGF0YS5oZWFkZXIuaWNvblsnaWQnXVwiPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImF3LXNjaGVkYS1kcm9wZG93bl9faXRlbXNcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGEuaXRlbXNcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICdpcy1zZWxlY3RlZCc6IGl0ZW0uc2VsZWN0ZWQgXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudCwgaXRlbS5wYXlsb2FkKVwiPlxuICAgICAgICAgICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=