import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var AwFacetsWrapperComponent = /** @class */ (function () {
    function AwFacetsWrapperComponent() {
    }
    AwFacetsWrapperComponent.prototype.headerEmit = function (eventType, eventPayload) {
        if (!this.emit) {
            return;
        }
        this.emit('facetheader', { eventType: eventType, eventPayload: eventPayload });
    };
    AwFacetsWrapperComponent.prototype.facetEmit = function (eventType, eventPayload) {
        if (!this.emit) {
            return;
        }
        this.emit('facet', { eventType: eventType, eventPayload: eventPayload });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AwFacetsWrapperComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AwFacetsWrapperComponent.prototype, "emit", void 0);
    AwFacetsWrapperComponent = __decorate([
        Component({
            selector: 'aw-facets-wrapper',
            template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"group.header\"\n            [emit]=\"headerEmit.bind(this)\"\n        ></n7-facet-header>\n\n        <n7-facet\n            *ngIf=\"group.isOpen\"\n            [data]=\"group.facet\"\n            [emit]=\"facetEmit.bind(this)\"\n        ></n7-facet>\n    </div>\n</div>"
        })
    ], AwFacetsWrapperComponent);
    return AwFacetsWrapperComponent;
}());
export { AwFacetsWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9hdy1mYWNldHMtd3JhcHBlci9hdy1mYWNldHMtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQ7SUFBQTtJQWtCQSxDQUFDO0lBYkMsNkNBQVUsR0FBVixVQUFXLFNBQVMsRUFBRSxZQUFZO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLFdBQUEsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDRDQUFTLEdBQVQsVUFBVSxTQUFTLEVBQUUsWUFBWTtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsU0FBUyxXQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFoQlE7UUFBUixLQUFLLEVBQUU7OzBEQUFXO0lBRVY7UUFBUixLQUFLLEVBQUU7OzBEQUFXO0lBSFIsd0JBQXdCO1FBSnBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsK2ZBQXVDO1NBQ3hDLENBQUM7T0FDVyx3QkFBd0IsQ0FrQnBDO0lBQUQsK0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LWZhY2V0cy13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F3LWZhY2V0cy13cmFwcGVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBd0ZhY2V0c1dyYXBwZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIGhlYWRlckVtaXQoZXZlbnRUeXBlLCBldmVudFBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ2ZhY2V0aGVhZGVyJywgeyBldmVudFR5cGUsIGV2ZW50UGF5bG9hZCB9KTtcbiAgfVxuXG4gIGZhY2V0RW1pdChldmVudFR5cGUsIGV2ZW50UGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnZmFjZXQnLCB7IGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkIH0pO1xuICB9XG59XG4iXX0=