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
AwFacetsWrapperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: AwFacetsWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AwFacetsWrapperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: AwFacetsWrapperComponent, selector: "aw-facets-wrapper", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"group.header\"\n            [emit]=\"headerEmit.bind(this)\"\n        ></n7-facet-header>\n\n        <n7-facet\n            *ngIf=\"group.isOpen\"\n            [data]=\"group.facet\"\n            [emit]=\"facetEmit.bind(this)\"\n        ></n7-facet>\n    </div>\n</div>", components: [{ type: i1.FacetHeaderComponent, selector: "n7-facet-header", inputs: ["data", "emit"] }, { type: i1.FacetComponent, selector: "n7-facet", inputs: ["data", "emit"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: AwFacetsWrapperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'aw-facets-wrapper', template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"group.header\"\n            [emit]=\"headerEmit.bind(this)\"\n        ></n7-facet-header>\n\n        <n7-facet\n            *ngIf=\"group.isOpen\"\n            [data]=\"group.facet\"\n            [emit]=\"facetEmit.bind(this)\"\n        ></n7-facet>\n    </div>\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9jb21wb25lbnRzL2F3LWZhY2V0cy13cmFwcGVyL2F3LWZhY2V0cy13cmFwcGVyLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9hdy1mYWNldHMtd3JhcHBlci9hdy1mYWNldHMtd3JhcHBlci5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTWpELE1BQU0sT0FBTyx3QkFBd0I7SUFLbkMsVUFBVSxDQUFDLFNBQVMsRUFBRSxZQUFZO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsU0FBUyxDQUFDLFNBQVMsRUFBRSxZQUFZO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOztxSEFqQlUsd0JBQXdCO3lHQUF4Qix3QkFBd0IsaUdDTnJDLHFmQWFNOzJGRFBPLHdCQUF3QjtrQkFKcEMsU0FBUzsrQkFDRSxtQkFBbUI7OEJBSXBCLElBQUk7c0JBQVosS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LWZhY2V0cy13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F3LWZhY2V0cy13cmFwcGVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBd0ZhY2V0c1dyYXBwZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIGhlYWRlckVtaXQoZXZlbnRUeXBlLCBldmVudFBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ2ZhY2V0aGVhZGVyJywgeyBldmVudFR5cGUsIGV2ZW50UGF5bG9hZCB9KTtcbiAgfVxuXG4gIGZhY2V0RW1pdChldmVudFR5cGUsIGV2ZW50UGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnZmFjZXQnLCB7IGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkIH0pO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwibjctZmFjZXRzLXdyYXBwZXIge3sgZGF0YS5jbGFzc2VzIHx8ICcnIH19XCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgZGF0YS5ncm91cHNcIiBjbGFzcz1cIm43LWZhY2V0cy13cmFwcGVyX19ncm91cCB7eyBncm91cC5jbGFzc2VzIHx8ICcnIH19XCI+XG4gICAgICAgIDxuNy1mYWNldC1oZWFkZXJcbiAgICAgICAgICAgIFtkYXRhXT1cImdyb3VwLmhlYWRlclwiXG4gICAgICAgICAgICBbZW1pdF09XCJoZWFkZXJFbWl0LmJpbmQodGhpcylcIlxuICAgICAgICA+PC9uNy1mYWNldC1oZWFkZXI+XG5cbiAgICAgICAgPG43LWZhY2V0XG4gICAgICAgICAgICAqbmdJZj1cImdyb3VwLmlzT3BlblwiXG4gICAgICAgICAgICBbZGF0YV09XCJncm91cC5mYWNldFwiXG4gICAgICAgICAgICBbZW1pdF09XCJmYWNldEVtaXQuYmluZCh0aGlzKVwiXG4gICAgICAgID48L243LWZhY2V0PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19