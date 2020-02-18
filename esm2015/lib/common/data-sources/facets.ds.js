/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class FacetsDS extends DataSource {
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    transform({ fields }) {
        const { searchModel } = this.options;
        this.searchModel = searchModel;
        return fields;
    }
}
if (false) {
    /** @type {?} */
    FacetsDS.prototype.searchModel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvZmFjZXRzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVOzs7Ozs7SUFHNUIsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFO2NBRXRCLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGOzs7SUFUQywrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIHNlYXJjaE1vZGVsOiBhbnk7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSh7IGZpZWxkcyB9KSB7XG5cbiAgICBjb25zdCB7IHNlYXJjaE1vZGVsIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9IHNlYXJjaE1vZGVsO1xuXG4gICAgcmV0dXJuIGZpZWxkcztcbiAgfVxufVxuIl19