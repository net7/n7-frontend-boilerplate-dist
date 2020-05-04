/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/components/facets-wrapper/facets-wrapper.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbXBvbmVudHMvZmFjZXRzLXdyYXBwZXIvZmFjZXRzLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRDtJQUFBO0lBc0JBLENBQUM7Ozs7OztJQWJDLDJDQUFVOzs7OztJQUFWLFVBQVcsU0FBUyxFQUFFLFlBQVk7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCwwQ0FBUzs7Ozs7SUFBVCxVQUFVLFNBQVMsRUFBRSxZQUFZO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxTQUFTLFdBQUEsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QiwrZkFBb0M7aUJBQ3JDOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQWVSLDZCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FsQlksc0JBQXNCOzs7SUFDakMsc0NBQW1COztJQUVuQixzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ243LWZhY2V0cy13cmFwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0cy13cmFwcGVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGYWNldHNXcmFwcGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICBoZWFkZXJFbWl0KGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkKSB7XG4gICAgaWYgKCF0aGlzLmVtaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCdmYWNldGhlYWRlcicsIHsgZXZlbnRUeXBlLCBldmVudFBheWxvYWQgfSk7XG4gIH1cblxuICBmYWNldEVtaXQoZXZlbnRUeXBlLCBldmVudFBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ2ZhY2V0JywgeyBldmVudFR5cGUsIGV2ZW50UGF5bG9hZCB9KTtcbiAgfVxufVxuIl19