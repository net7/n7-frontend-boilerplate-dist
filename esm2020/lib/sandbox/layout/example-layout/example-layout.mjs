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
SbExampleLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: SbExampleLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SbExampleLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: SbExampleLayoutComponent, selector: "sb-example-layout", usesInheritance: true, ngImport: i0, template: "<div class=\"sb-example-layout\" id=\"example-layout\">\n    <n7-tag \n    [data]=\"lb.widgets['sb-dummy'].ds.out$ | async\"\n    [emit]=\"lb.widgets['sb-dummy'].emit\"></n7-tag> \n</div>", components: [{ type: i1.TagComponent, selector: "n7-tag", inputs: ["data", "emit"] }], pipes: { "async": i2.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: SbExampleLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sb-example-layout', template: "<div class=\"sb-example-layout\" id=\"example-layout\">\n    <n7-tag \n    [data]=\"lb.widgets['sb-dummy'].ds.out$ | async\"\n    [emit]=\"lb.widgets['sb-dummy'].emit\"></n7-tag> \n</div>" }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9zYW5kYm94L2xheW91dC9leGFtcGxlLWxheW91dC9leGFtcGxlLWxheW91dC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL3NhbmRib3gvbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLElBQUksTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFNMUUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7SUFDMUQ7UUFDRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7O3FIQWZVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLGdGQ1RyQyw2TEFJTTsyRkRLTyx3QkFBd0I7a0JBSnBDLFNBQVM7K0JBQ0UsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0TGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL21vZGVscy9hYnN0cmFjdC1sYXlvdXQnO1xuaW1wb3J0IHsgU2JFeGFtcGxlTGF5b3V0Q29uZmlnIGFzIGNvbmZpZyB9IGZyb20gJy4vZXhhbXBsZS1sYXlvdXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItZXhhbXBsZS1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS1sYXlvdXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNiRXhhbXBsZUxheW91dENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0TGF5b3V0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgaW5pdFBheWxvYWQoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95KCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJzYi1leGFtcGxlLWxheW91dFwiIGlkPVwiZXhhbXBsZS1sYXlvdXRcIj5cbiAgICA8bjctdGFnIFxuICAgIFtkYXRhXT1cImxiLndpZGdldHNbJ3NiLWR1bW15J10uZHMub3V0JCB8IGFzeW5jXCJcbiAgICBbZW1pdF09XCJsYi53aWRnZXRzWydzYi1kdW1teSddLmVtaXRcIj48L243LXRhZz4gXG48L2Rpdj4iXX0=