/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/components/facets-wrapper/facets-wrapper.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbXBvbmVudHMvZmFjZXRzLXdyYXBwZXIvZmFjZXRzLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1qRCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFJakMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPO1FBQ3RCLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDckIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsK2ZBQW9DO2FBQ3JDOzs7bUJBRUUsS0FBSzttQkFDTCxLQUFLOzs7O0lBRE4sc0NBQW1COztJQUNuQixzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZhY2V0cy13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0cy13cmFwcGVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBlbWl0OiBhbnk7XG5cbiAgaGVhZGVyRW1pdCh0eXBlLCBwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdmYWNldGhlYWRlcicsIHsgdHlwZSwgcGF5bG9hZCB9KTtcbiAgfVxuXG4gIGZhY2V0RW1pdCh0eXBlLCBwYXlsb2FkKXtcbiAgICBpZighdGhpcy5lbWl0KSByZXR1cm47XG4gICAgdGhpcy5lbWl0KCdmYWNldCcsIHsgdHlwZSwgcGF5bG9hZCB9KTtcbiAgfVxufVxuIl19