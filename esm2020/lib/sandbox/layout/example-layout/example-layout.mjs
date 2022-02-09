/* eslint-disable */
import { Component } from '@angular/core';
import { AbstractLayout } from '../../../common/models/abstract-layout';
import { SbExampleLayoutConfig as config } from './example-layout.config';
import * as i0 from "@angular/core";
import * as i1 from "@n7-frontend/components";
import * as i2 from "@angular/common";
export class SbExampleLayoutComponent extends AbstractLayout {
    constructor() {
        super(config);
    }
    initPayload() {
        return {};
    }
    ngOnInit() {
        this.onInit();
    }
    ngOnDestroy() {
        this.onDestroy();
    }
}
SbExampleLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SbExampleLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SbExampleLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: SbExampleLayoutComponent, selector: "sb-example-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"sb-example-layout\" id=\"example-layout\">\r\n    <n7-tag \r\n    [data]=\"lb.widgets['sb-dummy'].ds.out$ | async\"\r\n    [emit]=\"lb.widgets['sb-dummy'].emit\"></n7-tag> \r\n</div>", components: [{ type: i1.TagComponent, selector: "n7-tag", inputs: ["data", "emit"] }], pipes: { "async": i2.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: SbExampleLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sb-example-layout', template: "<div class=\"sb-example-layout\" id=\"example-layout\">\r\n    <n7-tag \r\n    [data]=\"lb.widgets['sb-dummy'].ds.out$ | async\"\r\n    [emit]=\"lb.widgets['sb-dummy'].emit\"></n7-tag> \r\n</div>" }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9zYW5kYm94L2xheW91dC9leGFtcGxlLWxheW91dC9leGFtcGxlLWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL3NhbmRib3gvbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLElBQUksTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFNMUUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7SUFDMUQ7UUFDRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O3FIQWZVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLGdGQ1RyQyxxTUFJTTsyRkRLTyx3QkFBd0I7a0JBSnBDLFNBQVM7K0JBQ0UsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9tb2RlbHMvYWJzdHJhY3QtbGF5b3V0JztcclxuaW1wb3J0IHsgU2JFeGFtcGxlTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vZXhhbXBsZS1sYXlvdXQuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2ItZXhhbXBsZS1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leGFtcGxlLWxheW91dC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNiRXhhbXBsZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGluaXRQYXlsb2FkKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9uSW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLm9uRGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwic2ItZXhhbXBsZS1sYXlvdXRcIiBpZD1cImV4YW1wbGUtbGF5b3V0XCI+XHJcbiAgICA8bjctdGFnIFxyXG4gICAgW2RhdGFdPVwibGIud2lkZ2V0c1snc2ItZHVtbXknXS5kcy5vdXQkIHwgYXN5bmNcIlxyXG4gICAgW2VtaXRdPVwibGIud2lkZ2V0c1snc2ItZHVtbXknXS5lbWl0XCI+PC9uNy10YWc+IFxyXG48L2Rpdj4iXX0=