import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var FacetsWrapperComponent = /** @class */ (function () {
    function FacetsWrapperComponent() {
    }
    FacetsWrapperComponent.prototype.headerEmit = function (eventType, eventPayload) {
        if (!this.emit) {
            return;
        }
        this.emit('facetheader', { eventType: eventType, eventPayload: eventPayload });
    };
    FacetsWrapperComponent.prototype.facetEmit = function (eventType, eventPayload) {
        if (!this.emit) {
            return;
        }
        this.emit('facet', { eventType: eventType, eventPayload: eventPayload });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FacetsWrapperComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FacetsWrapperComponent.prototype, "emit", void 0);
    FacetsWrapperComponent = __decorate([
        Component({
            selector: 'n7-facets-wrapper',
            template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"group.header\"\n            [emit]=\"headerEmit.bind(this)\"\n        ></n7-facet-header>\n\n        <n7-facet\n            *ngIf=\"group.isOpen\"\n            [data]=\"group.facet\"\n            [emit]=\"facetEmit.bind(this)\"\n        ></n7-facet>\n    </div>\n</div>"
        })
    ], FacetsWrapperComponent);
    return FacetsWrapperComponent;
}());
export { FacetsWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbXBvbmVudHMvZmFjZXRzLXdyYXBwZXIvZmFjZXRzLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWpEO0lBQUE7SUFrQkEsQ0FBQztJQWJDLDJDQUFVLEdBQVYsVUFBVyxTQUFTLEVBQUUsWUFBWTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsU0FBUyxXQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCwwQ0FBUyxHQUFULFVBQVUsU0FBUyxFQUFFLFlBQVk7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBaEJRO1FBQVIsS0FBSyxFQUFFOzt3REFBVztJQUVWO1FBQVIsS0FBSyxFQUFFOzt3REFBVztJQUhSLHNCQUFzQjtRQUpsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLCtmQUFvQztTQUNyQyxDQUFDO09BQ1csc0JBQXNCLENBa0JsQztJQUFELDZCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1mYWNldHMtd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldHMtd3JhcHBlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcblxuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgaGVhZGVyRW1pdChldmVudFR5cGUsIGV2ZW50UGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnZmFjZXRoZWFkZXInLCB7IGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkIH0pO1xuICB9XG5cbiAgZmFjZXRFbWl0KGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCdmYWNldCcsIHsgZXZlbnRUeXBlLCBldmVudFBheWxvYWQgfSk7XG4gIH1cbn1cbiJdfQ==