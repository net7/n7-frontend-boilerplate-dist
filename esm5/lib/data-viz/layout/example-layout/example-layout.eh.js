/**
 * @fileoverview added by tsickle
 * Generated from: lib/data-viz/layout/example-layout/example-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* eslint-disable */
import { EventHandler } from '@n7-frontend/core';
var DvExampleLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(DvExampleLayoutEH, _super);
    function DvExampleLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    DvExampleLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            _this.dataSource.onInit();
        }));
    };
    return DvExampleLayoutEH;
}(EventHandler));
export { DvExampleLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbGF5b3V0L2V4YW1wbGUtbGF5b3V0L2V4YW1wbGUtbGF5b3V0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBdUMsNkNBQVk7SUFBbkQ7O0lBTUEsQ0FBQzs7OztJQUxRLGtDQUFNOzs7SUFBYjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFORCxDQUF1QyxZQUFZLEdBTWxEIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIER2RXhhbXBsZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==