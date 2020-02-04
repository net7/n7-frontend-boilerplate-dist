/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var FacetsWrapperComponent = /** @class */ (function () {
    function FacetsWrapperComponent() {
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    FacetsWrapperComponent.prototype.headerEmit = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        if (!this.emit)
            return;
        this.emit('facetheader', { type: type, payload: payload });
    };
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    FacetsWrapperComponent.prototype.facetEmit = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        if (!this.emit)
            return;
        this.emit('facet', { type: type, payload: payload });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbXBvbmVudHMvZmFjZXRzLXdyYXBwZXIvZmFjZXRzLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpEO0lBQUE7SUFpQkEsQ0FBQzs7Ozs7O0lBVEMsMkNBQVU7Ozs7O0lBQVYsVUFBVyxJQUFJLEVBQUUsT0FBTztRQUN0QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVELDBDQUFTOzs7OztJQUFULFVBQVUsSUFBSSxFQUFFLE9BQU87UUFDckIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLCtmQUFvQztpQkFDckM7Ozt1QkFFRSxLQUFLO3VCQUNMLEtBQUs7O0lBV1IsNkJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWJZLHNCQUFzQjs7O0lBQ2pDLHNDQUFtQjs7SUFDbkIsc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduNy1mYWNldHMtd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldHMtd3JhcHBlci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIGhlYWRlckVtaXQodHlwZSwgcGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnZmFjZXRoZWFkZXInLCB7IHR5cGUsIHBheWxvYWQgfSk7XG4gIH1cblxuICBmYWNldEVtaXQodHlwZSwgcGF5bG9hZCl7XG4gICAgaWYoIXRoaXMuZW1pdCkgcmV0dXJuO1xuICAgIHRoaXMuZW1pdCgnZmFjZXQnLCB7IHR5cGUsIHBheWxvYWQgfSk7XG4gIH1cbn1cbiJdfQ==