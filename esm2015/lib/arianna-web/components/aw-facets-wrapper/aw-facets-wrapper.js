import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let AwFacetsWrapperComponent = class AwFacetsWrapperComponent {
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
        template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\r\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\r\n        <n7-facet-header\r\n            [data]=\"group.header\"\r\n            [emit]=\"headerEmit.bind(this)\"\r\n        ></n7-facet-header>\r\n\r\n        <n7-facet\r\n            *ngIf=\"group.isOpen\"\r\n            [data]=\"group.facet\"\r\n            [emit]=\"facetEmit.bind(this)\"\r\n        ></n7-facet>\r\n    </div>\r\n</div>"
    })
], AwFacetsWrapperComponent);
export { AwFacetsWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9hdy1mYWNldHMtd3JhcHBlci9hdy1mYWNldHMtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFLbkMsVUFBVSxDQUFDLFNBQVMsRUFBRSxZQUFZO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsU0FBUyxDQUFDLFNBQVMsRUFBRSxZQUFZO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0YsQ0FBQTtBQWpCVTtJQUFSLEtBQUssRUFBRTs7c0RBQVc7QUFFVjtJQUFSLEtBQUssRUFBRTs7c0RBQVc7QUFIUix3QkFBd0I7SUFKcEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qix5aEJBQXVDO0tBQ3hDLENBQUM7R0FDVyx3QkFBd0IsQ0FrQnBDO1NBbEJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXctZmFjZXRzLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdy1mYWNldHMtd3JhcHBlci5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF3RmFjZXRzV3JhcHBlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIGhlYWRlckVtaXQoZXZlbnRUeXBlLCBldmVudFBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmFjZXRoZWFkZXInLCB7IGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkIH0pO1xyXG4gIH1cclxuXHJcbiAgZmFjZXRFbWl0KGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ2ZhY2V0JywgeyBldmVudFR5cGUsIGV2ZW50UGF5bG9hZCB9KTtcclxuICB9XHJcbn1cclxuIl19