/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/home-item-tags-wrapper.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwHomeItemTagsWrapperEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeItemTagsWrapperEH, _super);
    function AwHomeItemTagsWrapperEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHomeItemTagsWrapperEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case "aw-home-item-tags-wrapper.click":
                    _this.emitOuter('click', event.payload);
                    break;
                default:
                    break;
            }
        }));
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    };
    return AwHomeItemTagsWrapperEH;
}(EventHandler));
export { AwHomeItemTagsWrapperEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlci5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9ob21lLWl0ZW0tdGFncy13cmFwcGVyLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUE2QyxtREFBWTtJQUF6RDs7SUFpQkEsQ0FBQzs7OztJQWZRLHdDQUFNOzs7SUFBYjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUUsVUFBQyxLQUFLO1lBQ2pDLFFBQU8sS0FBSyxDQUFDLElBQUksRUFBQztnQkFDaEIsS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNIOztjQUVNO0lBQ1IsQ0FBQztJQUVILDhCQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUE2QyxZQUFZLEdBaUJ4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hvbWVJdGVtVGFnc1dyYXBwZXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoIChldmVudCkgPT4ge1xyXG4gICAgICBzd2l0Y2goZXZlbnQudHlwZSl7XHJcbiAgICAgICAgY2FzZSBcImF3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXIuY2xpY2tcIjpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsZXZlbnQucGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLyogdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgIFxyXG4gICAgfSk7ICovXHJcbiAgfVxyXG5cclxufSJdfQ==