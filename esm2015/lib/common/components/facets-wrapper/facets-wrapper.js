/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FacetsWrapperComponent {
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    headerEmit(type, payload) {
        if (!this.emit)
            return;
        this.emit('facetheader', { type, payload });
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    facetEmit(type, payload) {
        if (!this.emit)
            return;
        this.emit('facet', { type, payload });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbXBvbmVudHMvZmFjZXRzLXdyYXBwZXIvZmFjZXRzLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWpELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUlqQyxVQUFVLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDdEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNyQixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QiwrZkFBb0M7YUFDckM7OzttQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixzQ0FBbUI7O0lBQ25CLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbjctZmFjZXRzLXdyYXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXRzLXdyYXBwZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0c1dyYXBwZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBoZWFkZXJFbWl0KHR5cGUsIHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2ZhY2V0aGVhZGVyJywgeyB0eXBlLCBwYXlsb2FkIH0pO1xuICB9XG5cbiAgZmFjZXRFbWl0KHR5cGUsIHBheWxvYWQpe1xuICAgIGlmKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgICB0aGlzLmVtaXQoJ2ZhY2V0JywgeyB0eXBlLCBwYXlsb2FkIH0pO1xuICB9XG59XG4iXX0=