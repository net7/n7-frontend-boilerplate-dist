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
            template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\r\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\r\n        <n7-facet-header\r\n            [data]=\"group.header\"\r\n            [emit]=\"headerEmit.bind(this)\"\r\n        ></n7-facet-header>\r\n\r\n        <n7-facet\r\n            *ngIf=\"group.isOpen\"\r\n            [data]=\"group.facet\"\r\n            [emit]=\"facetEmit.bind(this)\"\r\n        ></n7-facet>\r\n    </div>\r\n</div>"
        })
    ], AwFacetsWrapperComponent);
    return AwFacetsWrapperComponent;
}());
export { AwFacetsWrapperComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9hdy1mYWNldHMtd3JhcHBlci9hdy1mYWNldHMtd3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNakQ7SUFBQTtJQWtCQSxDQUFDO0lBYkMsNkNBQVUsR0FBVixVQUFXLFNBQVMsRUFBRSxZQUFZO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLFdBQUEsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDRDQUFTLEdBQVQsVUFBVSxTQUFTLEVBQUUsWUFBWTtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsU0FBUyxXQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFoQlE7UUFBUixLQUFLLEVBQUU7OzBEQUFXO0lBRVY7UUFBUixLQUFLLEVBQUU7OzBEQUFXO0lBSFIsd0JBQXdCO1FBSnBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IseWhCQUF1QztTQUN4QyxDQUFDO09BQ1csd0JBQXdCLENBa0JwQztJQUFELCtCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy1mYWNldHMtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F3LWZhY2V0cy13cmFwcGVyLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXdGYWNldHNXcmFwcGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcclxuXHJcbiAgaGVhZGVyRW1pdChldmVudFR5cGUsIGV2ZW50UGF5bG9hZCkge1xyXG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdmYWNldGhlYWRlcicsIHsgZXZlbnRUeXBlLCBldmVudFBheWxvYWQgfSk7XHJcbiAgfVxyXG5cclxuICBmYWNldEVtaXQoZXZlbnRUeXBlLCBldmVudFBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmFjZXQnLCB7IGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=