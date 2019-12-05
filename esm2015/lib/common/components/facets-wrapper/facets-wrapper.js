/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/components/facets-wrapper/facets-wrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FacetsWrapperComponent {
    /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    headerEmit(eventType, eventPayload) {
        if (!this.emit)
            return;
        this.emit('facetheader', { eventType, eventPayload });
    }
    /**
     * @param {?} eventType
     * @param {?} eventPayload
     * @return {?}
     */
    facetEmit(eventType, eventPayload) {
        if (!this.emit)
            return;
        this.emit('facet', { eventType, eventPayload });
    }
}
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
if (false) {
    /** @type {?} */
    FacetsWrapperComponent.prototype.data;
    /** @type {?} */
    FacetsWrapperComponent.prototype.emit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbXBvbmVudHMvZmFjZXRzLXdyYXBwZXIvZmFjZXRzLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1qRCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFJakMsVUFBVSxDQUFDLFNBQVMsRUFBRSxZQUFZO1FBQ2hDLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsU0FBUyxFQUFFLFlBQVk7UUFDL0IsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsK2ZBQW9DO2FBQ3JDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sc0NBQW1COztJQUNuQixzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZhY2V0cy13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0cy13cmFwcGVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgaGVhZGVyRW1pdChldmVudFR5cGUsIGV2ZW50UGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuXG4gICAgdGhpcy5lbWl0KCdmYWNldGhlYWRlcicsIHsgZXZlbnRUeXBlLCBldmVudFBheWxvYWQgfSk7XG4gIH1cblxuICBmYWNldEVtaXQoZXZlbnRUeXBlLCBldmVudFBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcblxuICAgIHRoaXMuZW1pdCgnZmFjZXQnLCB7IGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkIH0pO1xuICB9XG59XG4iXX0=