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
                    template: "<div *ngIf=\"data\" class=\"n7-facets-wrapper {{ data.classes || '' }}\">\r\n    <div *ngFor=\"let group of data.groups\" class=\"n7-facets-wrapper__group {{ group.classes || '' }}\">\r\n        <n7-facet-header\r\n            [data]=\"group.header\"\r\n            [emit]=\"headerEmit.bind(this)\"\r\n        ></n7-facet-header>\r\n\r\n        <n7-facet\r\n            *ngIf=\"group.isOpen\"\r\n            [data]=\"group.facet\"\r\n            [emit]=\"facetEmit.bind(this)\"\r\n        ></n7-facet>\r\n    </div>\r\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLXdyYXBwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2NvbXBvbmVudHMvZmFjZXRzLXdyYXBwZXIvZmFjZXRzLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRDtJQUFBO0lBc0JBLENBQUM7Ozs7OztJQWJDLDJDQUFVOzs7OztJQUFWLFVBQVcsU0FBUyxFQUFFLFlBQVk7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCwwQ0FBUzs7Ozs7SUFBVCxVQUFVLFNBQVMsRUFBRSxZQUFZO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxTQUFTLFdBQUEsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qix5aEJBQW9DO2lCQUNyQzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUFlUiw2QkFBQztDQUFBLEFBdEJELElBc0JDO1NBbEJZLHNCQUFzQjs7O0lBQ2pDLHNDQUFtQjs7SUFFbkIsc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduNy1mYWNldHMtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0cy13cmFwcGVyLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZXRzV3JhcHBlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG5cclxuICBASW5wdXQoKSBlbWl0OiBhbnk7XHJcblxyXG4gIGhlYWRlckVtaXQoZXZlbnRUeXBlLCBldmVudFBheWxvYWQpIHtcclxuICAgIGlmICghdGhpcy5lbWl0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnZmFjZXRoZWFkZXInLCB7IGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkIH0pO1xyXG4gIH1cclxuXHJcbiAgZmFjZXRFbWl0KGV2ZW50VHlwZSwgZXZlbnRQYXlsb2FkKSB7XHJcbiAgICBpZiAoIXRoaXMuZW1pdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ2ZhY2V0JywgeyBldmVudFR5cGUsIGV2ZW50UGF5bG9hZCB9KTtcclxuICB9XHJcbn1cclxuIl19