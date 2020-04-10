/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var FacetsWrapperComponent = /** @class */ (function () {
    function FacetsWrapperComponent() {
    }
    /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    FacetsWrapperComponent.prototype.headerEmit = /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    function (eventType, eventPayload) {
        if (!this.emit) {
            return;
        }
        this.emit('facetheader', { eventType: eventType, eventPayload: eventPayload });
    };
    /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    FacetsWrapperComponent.prototype.facetEmit = /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    function (eventType, eventPayload) {
        if (!this.emit) {
            return;
        }
        this.emit('facet', { eventType: eventType, eventPayload: eventPayload });
    };
    FacetsWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'n7-facets-wrapper',
                    template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\n        <n7-facet-header\n            [data]=\"group.header\"\n            [emit]=\"headerEmit.bind(this)\"\n        ></n7-facet-header>\n\n        <n7-facet\n            *ngIf=\"group.isOpen\"\n            [data]=\"group.facet\"\n            [emit]=\"facetEmit.bind(this)\"\n        ></n7-facet>\n    </div>\n</div>"
                }] }
    ];
    FacetsWrapperComponent.propDecorators = {
        data: [{ type: Input }],
        emit: [{ type: Input }]
    };
    return FacetsWrapperComponent;
}());
export { FacetsWrapperComponent };
if (false) {
    /** @type {?} */
    FacetsWrapperComponent.prototype.data;
    /** @type {?} */
    FacetsWrapperComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbXBvbmVudHMvZmFjZXRzLXdyYXBwZXIvZmFjZXRzLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpEO0lBQUE7SUFzQkEsQ0FBQzs7Ozs7O0lBYkMsMkNBQVU7Ozs7O0lBQVYsVUFBVyxTQUFTLEVBQUUsWUFBWTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsU0FBUyxXQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQUVELDBDQUFTOzs7OztJQUFULFVBQVUsU0FBUyxFQUFFLFlBQVk7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLCtmQUFvQztpQkFDckM7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBZVIsNkJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWxCWSxzQkFBc0I7OztJQUNqQyxzQ0FBbUI7O0lBRW5CLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZmFjZXRzLXdyYXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXRzLXdyYXBwZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0c1dyYXBwZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIGhlYWRlckVtaXQoZXZlbnRUeXBlLCBldmVudFBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ2ZhY2V0aGVhZGVyJywgeyBldmVudFR5cGUsIGV2ZW50UGF5bG9hZCB9KTtcbiAgfVxuXG4gIGZhY2V0RW1pdChldmVudFR5cGUsIGV2ZW50UGF5bG9hZCkge1xuICAgIGlmICghdGhpcy5lbWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnZmFjZXQnLCB7IGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkIH0pO1xuICB9XG59XG4iXX0=