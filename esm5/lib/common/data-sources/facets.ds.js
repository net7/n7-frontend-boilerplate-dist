/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/data-sources/facets.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var FacetsDS = /** @class */ (function (_super) {
    tslib_1.__extends(FacetsDS, _super);
    function FacetsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    FacetsDS.prototype.transform = /**
     * @protected
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var fields = _a.fields;
        var searchModel = this.options.searchModel;
        this.searchModel = searchModel;
        return fields;
    };
    return FacetsDS;
}(DataSource));
export { FacetsDS };
if (false) {
    /** @type {?} */
    FacetsDS.prototype.searchModel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9kYXRhLXNvdXJjZXMvZmFjZXRzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4QixvQ0FBVTtJQUF4Qzs7SUFTQSxDQUFDOzs7Ozs7SUFOVyw0QkFBUzs7Ozs7SUFBbkIsVUFBb0IsRUFBVTtZQUFSLGtCQUFNO1FBQ2xCLElBQUEsc0NBQVc7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBOEIsVUFBVSxHQVN2Qzs7OztJQVJDLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgc2VhcmNoTW9kZWw6IGFueTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHsgZmllbGRzIH0pIHtcbiAgICBjb25zdCB7IHNlYXJjaE1vZGVsIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9IHNlYXJjaE1vZGVsO1xuXG4gICAgcmV0dXJuIGZpZWxkcztcbiAgfVxufVxuIl19