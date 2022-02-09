import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@n7-frontend/components";
import * as i2 from "../form/form";
import * as i3 from "@angular/common";
export class MrFormWrapperAccordionComponent {
    constructor() {
        this.fakeEmit = (type, payload) => {
            if (!this.emit) {
                return;
            }
            this.emit(type, payload);
        };
    }
    ngOnInit() {
        this.fakeEmit('init');
    }
    ngOnDestroy() {
        this.fakeEmit('destroy');
    }
    onReset() {
        this.fakeEmit('reset');
    }
    onSubmit() {
        this.fakeEmit('submit');
    }
}
MrFormWrapperAccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrFormWrapperAccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MrFormWrapperAccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: MrFormWrapperAccordionComponent, selector: "mr-form-wrapper-accordion", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"mr-form-wrapper-accordion\">\r\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\r\n        <div *ngIf=\"group.options && (group.options.showHeader !== false)\" \r\n            class=\"mr-form-wrapper-accordion__header\">\r\n            <n7-facet-header\r\n                [data]=\"group.options\"\r\n                [emit]=\"fakeEmit\"\r\n            ></n7-facet-header>\r\n        </div>\r\n\r\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper-accordion__content\" [attr.id]=\"group.id\">\r\n            <mr-form [form]=\"data.form\" [group]=\"group\">\r\n                <!-- CUSTOM INPUTS -->\r\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\r\n                    <ng-container [ngSwitch]=\"type\">\r\n                        \r\n                        <n7-tag *ngSwitchCase=\"'tag'\" \r\n                            [data]=\"input.ds.out$ | async\"\r\n                            [emit]=\"input.emit\"></n7-tag>\r\n    \r\n                    </ng-container>\r\n                </ng-template> -->\r\n            </mr-form>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <div class=\"mr-form-wrapper-accordion__actions\">\r\n        <a *ngIf=\"data.form.config.resetButton\" \r\n            class=\"n7-btn n7-btn-xl n7-btn-danger\" \r\n            (click)=\"onReset()\">{{ data.form.config.resetButton.label }}</a>\r\n        <a *ngIf=\"data.form.config.submitButton\" \r\n            class=\"n7-btn n7-btn-cta n7-btn-xl n7-btn-info\" \r\n            (click)=\"onSubmit()\">{{ data.form.config.submitButton.label }}</a>\r\n    </div>\r\n</div>", components: [{ type: i1.FacetHeaderComponent, selector: "n7-facet-header", inputs: ["data", "emit"] }, { type: i2.MrFormComponent, selector: "mr-form", inputs: ["form", "group"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: MrFormWrapperAccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-form-wrapper-accordion', template: "<div *ngIf=\"data\" class=\"mr-form-wrapper-accordion\">\r\n    <ng-container *ngFor=\"let group of data.form.config.groups; index as $i\">\r\n        <div *ngIf=\"group.options && (group.options.showHeader !== false)\" \r\n            class=\"mr-form-wrapper-accordion__header\">\r\n            <n7-facet-header\r\n                [data]=\"group.options\"\r\n                [emit]=\"fakeEmit\"\r\n            ></n7-facet-header>\r\n        </div>\r\n\r\n        <div *ngIf=\"group.options.isOpen\" class=\"mr-form-wrapper-accordion__content\" [attr.id]=\"group.id\">\r\n            <mr-form [form]=\"data.form\" [group]=\"group\">\r\n                <!-- CUSTOM INPUTS -->\r\n                <!-- <ng-template let-type=\"type\" let-input=\"input\">\r\n                    <ng-container [ngSwitch]=\"type\">\r\n                        \r\n                        <n7-tag *ngSwitchCase=\"'tag'\" \r\n                            [data]=\"input.ds.out$ | async\"\r\n                            [emit]=\"input.emit\"></n7-tag>\r\n    \r\n                    </ng-container>\r\n                </ng-template> -->\r\n            </mr-form>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <div class=\"mr-form-wrapper-accordion__actions\">\r\n        <a *ngIf=\"data.form.config.resetButton\" \r\n            class=\"n7-btn n7-btn-xl n7-btn-danger\" \r\n            (click)=\"onReset()\">{{ data.form.config.resetButton.label }}</a>\r\n        <a *ngIf=\"data.form.config.submitButton\" \r\n            class=\"n7-btn n7-btn-cta n7-btn-xl n7-btn-info\" \r\n            (click)=\"onSubmit()\">{{ data.form.config.submitButton.label }}</a>\r\n    </div>\r\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9jb21wb25lbnRzL2Zvcm0td3JhcHBlci1hY2NvcmRpb24vZm9ybS13cmFwcGVyLWFjY29yZGlvbi50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9jb21wb25lbnRzL2Zvcm0td3JhcHBlci1hY2NvcmRpb24vZm9ybS13cmFwcGVyLWFjY29yZGlvbi5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUNqQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFXdkIsTUFBTSxPQUFPLCtCQUErQjtJQUo1QztRQWlCRSxhQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBUSxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFBO0tBU0Y7SUF0QkMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFTRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7NEhBMUJVLCtCQUErQjtnSEFBL0IsK0JBQStCLHlHQ2I1Qyxpb0RBa0NNOzJGRHJCTywrQkFBK0I7a0JBSjNDLFNBQVM7K0JBQ0UsMkJBQTJCOzhCQUk1QixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNckZvcm1Nb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9mb3JtLm1vZGVsJztcclxuXHJcbmV4cG9ydCB0eXBlIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EYXRhID0ge1xyXG4gIGZvcm06IE1yRm9ybU1vZGVsO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21yLWZvcm0td3JhcHBlci1hY2NvcmRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLXdyYXBwZXItYWNjb3JkaW9uLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXJGb3JtV3JhcHBlckFjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBkYXRhOiBNckZvcm1XcmFwcGVyQWNjb3JkaW9uRGF0YTtcclxuXHJcbiAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZD86IGFueSkgPT4gdm9pZDtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZha2VFbWl0KCdpbml0Jyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZmFrZUVtaXQoJ2Rlc3Ryb3knKTtcclxuICB9XHJcblxyXG4gIGZha2VFbWl0ID0gKHR5cGUsIHBheWxvYWQ/KSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQodHlwZSwgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBvblJlc2V0KCkge1xyXG4gICAgdGhpcy5mYWtlRW1pdCgncmVzZXQnKTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgdGhpcy5mYWtlRW1pdCgnc3VibWl0Jyk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgKm5nSWY9XCJkYXRhXCIgY2xhc3M9XCJtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBncm91cCBvZiBkYXRhLmZvcm0uY29uZmlnLmdyb3VwczsgaW5kZXggYXMgJGlcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZ3JvdXAub3B0aW9ucyAmJiAoZ3JvdXAub3B0aW9ucy5zaG93SGVhZGVyICE9PSBmYWxzZSlcIiBcclxuICAgICAgICAgICAgY2xhc3M9XCJtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgPG43LWZhY2V0LWhlYWRlclxyXG4gICAgICAgICAgICAgICAgW2RhdGFdPVwiZ3JvdXAub3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICBbZW1pdF09XCJmYWtlRW1pdFwiXHJcbiAgICAgICAgICAgID48L243LWZhY2V0LWhlYWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImdyb3VwLm9wdGlvbnMuaXNPcGVuXCIgY2xhc3M9XCJtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uX19jb250ZW50XCIgW2F0dHIuaWRdPVwiZ3JvdXAuaWRcIj5cclxuICAgICAgICAgICAgPG1yLWZvcm0gW2Zvcm1dPVwiZGF0YS5mb3JtXCIgW2dyb3VwXT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIENVU1RPTSBJTlBVVFMgLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxuZy10ZW1wbGF0ZSBsZXQtdHlwZT1cInR5cGVcIiBsZXQtaW5wdXQ9XCJpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuNy10YWcgKm5nU3dpdGNoQ2FzZT1cIid0YWcnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YV09XCJpbnB1dC5kcy5vdXQkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VtaXRdPVwiaW5wdXQuZW1pdFwiPjwvbjctdGFnPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPiAtLT5cclxuICAgICAgICAgICAgPC9tci1mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uX19hY3Rpb25zXCI+XHJcbiAgICAgICAgPGEgKm5nSWY9XCJkYXRhLmZvcm0uY29uZmlnLnJlc2V0QnV0dG9uXCIgXHJcbiAgICAgICAgICAgIGNsYXNzPVwibjctYnRuIG43LWJ0bi14bCBuNy1idG4tZGFuZ2VyXCIgXHJcbiAgICAgICAgICAgIChjbGljayk9XCJvblJlc2V0KClcIj57eyBkYXRhLmZvcm0uY29uZmlnLnJlc2V0QnV0dG9uLmxhYmVsIH19PC9hPlxyXG4gICAgICAgIDxhICpuZ0lmPVwiZGF0YS5mb3JtLmNvbmZpZy5zdWJtaXRCdXR0b25cIiBcclxuICAgICAgICAgICAgY2xhc3M9XCJuNy1idG4gbjctYnRuLWN0YSBuNy1idG4teGwgbjctYnRuLWluZm9cIiBcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uU3VibWl0KClcIj57eyBkYXRhLmZvcm0uY29uZmlnLnN1Ym1pdEJ1dHRvbi5sYWJlbCB9fTwvYT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4iXX0=