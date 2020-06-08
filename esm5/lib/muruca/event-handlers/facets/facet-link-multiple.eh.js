/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var FacetLinkMultipleEH = /** @class */ (function (_super) {
    tslib_1.__extends(FacetLinkMultipleEH, _super);
    function FacetLinkMultipleEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    FacetLinkMultipleEH.prototype.listen = /**
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
            switch (type) {
                case _this.dataSource.id + ".change":
                    _this.dataSource.toggleValue(payload);
                    _this.emitOuter('change', {
                        value: _this.dataSource.getValue(),
                        id: _this.dataSource.id
                    });
                    break;
                default:
                    break;
            }
        }));
    };
    return FacetLinkMultipleEH;
}(EventHandler));
export { FacetLinkMultipleEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGluay1tdWx0aXBsZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LWxpbmstbXVsdGlwbGUuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBeUMsK0NBQVk7SUFBckQ7O0lBZ0JBLENBQUM7Ozs7SUFmUSxvQ0FBTTs7O0lBQWI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQVEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFlBQVM7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTt3QkFDdkIsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO3dCQUNqQyxFQUFFLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3FCQUN2QixDQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFoQkQsQ0FBeUMsWUFBWSxHQWdCcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNldExpbmtNdWx0aXBsZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNoYW5nZWA6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVZhbHVlKHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5kYXRhU291cmNlLmdldFZhbHVlKCksXG4gICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==