import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@n7-frontend/components";
import * as i2 from "@angular/common";
export class AwFacetsWrapperComponent {
    headerEmit(eventType, eventPayload) {
        if (!this.emit) {
            return;
        }
        this.emit('facetheader', { eventType, eventPayload });
    }
    facetEmit(eventType, eventPayload) {
        if (!this.emit) {
            return;
        }
        this.emit('facet', { eventType, eventPayload });
    }
}
AwFacetsWrapperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: AwFacetsWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AwFacetsWrapperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: AwFacetsWrapperComponent, selector: "aw-facets-wrapper", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\r\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\r\n        <n7-facet-header\r\n            [data]=\"group.header\"\r\n            [emit]=\"headerEmit.bind(this)\"\r\n        ></n7-facet-header>\r\n\r\n        <n7-facet\r\n            *ngIf=\"group.isOpen\"\r\n            [data]=\"group.facet\"\r\n            [emit]=\"facetEmit.bind(this)\"\r\n        ></n7-facet>\r\n    </div>\r\n</div>", components: [{ type: i1.FacetHeaderComponent, selector: "n7-facet-header", inputs: ["data", "emit"] }, { type: i1.FacetComponent, selector: "n7-facet", inputs: ["data", "emit"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: AwFacetsWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'aw-facets-wrapper', template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\r\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\r\n        <n7-facet-header\r\n            [data]=\"group.header\"\r\n            [emit]=\"headerEmit.bind(this)\"\r\n        ></n7-facet-header>\r\n\r\n        <n7-facet\r\n            *ngIf=\"group.isOpen\"\r\n            [data]=\"group.facet\"\r\n            [emit]=\"facetEmit.bind(this)\"\r\n        ></n7-facet>\r\n    </div>\r\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9jb21wb25lbnRzL2F3LWZhY2V0cy13cmFwcGVyL2F3LWZhY2V0cy13cmFwcGVyLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9hdy1mYWNldHMtd3JhcHBlci9hdy1mYWNldHMtd3JhcHBlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTWpELE1BQU0sT0FBTyx3QkFBd0I7SUFLbkMsVUFBVSxDQUFDLFNBQVMsRUFBRSxZQUFZO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsU0FBUyxDQUFDLFNBQVMsRUFBRSxZQUFZO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOztxSEFqQlUsd0JBQXdCO3lHQUF4Qix3QkFBd0IsaUdDTnJDLCtnQkFhTTsyRkRQTyx3QkFBd0I7a0JBSnBDLFNBQVM7K0JBQ0UsbUJBQW1COzhCQUlwQixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy1mYWNldHMtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F3LWZhY2V0cy13cmFwcGVyLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXdGYWNldHNXcmFwcGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgaGVhZGVyRW1pdChldmVudFR5cGUsIGV2ZW50UGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdmYWNldGhlYWRlcicsIHsgZXZlbnRUeXBlLCBldmVudFBheWxvYWQgfSk7XHJcbiAgfVxyXG5cclxuICBmYWNldEVtaXQoZXZlbnRUeXBlLCBldmVudFBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmFjZXQnLCB7IGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctZmFjZXRzLXdyYXBwZXIge3sgZGF0YS5jbGFzc2VzIHx8ICcnIH19XCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBncm91cCBvZiBkYXRhLmdyb3Vwc1wiIGNsYXNzPVwibjctZmFjZXRzLXdyYXBwZXJfX2dyb3VwIHt7IGdyb3VwLmNsYXNzZXMgfHwgJycgfX1cIj5cclxuICAgICAgICA8bjctZmFjZXQtaGVhZGVyXHJcbiAgICAgICAgICAgIFtkYXRhXT1cImdyb3VwLmhlYWRlclwiXHJcbiAgICAgICAgICAgIFtlbWl0XT1cImhlYWRlckVtaXQuYmluZCh0aGlzKVwiXHJcbiAgICAgICAgPjwvbjctZmFjZXQtaGVhZGVyPlxyXG5cclxuICAgICAgICA8bjctZmFjZXRcclxuICAgICAgICAgICAgKm5nSWY9XCJncm91cC5pc09wZW5cIlxyXG4gICAgICAgICAgICBbZGF0YV09XCJncm91cC5mYWNldFwiXHJcbiAgICAgICAgICAgIFtlbWl0XT1cImZhY2V0RW1pdC5iaW5kKHRoaXMpXCJcclxuICAgICAgICA+PC9uNy1mYWNldD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXX0=