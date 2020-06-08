/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrHeroDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrHeroDS, _super);
    function MrHeroDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    MrHeroDS.prototype.transform = /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _a = this.options, classes = _a.classes, background = _a.background;
        /** @type {?} */
        var back;
        /** @type {?} */
        var image;
        if (background) {
            back = data.image;
            image = false;
        }
        else {
            image = data.image;
            back = false;
        }
        return tslib_1.__assign({}, data, { classes: classes, backgroundImage: back, image: image || '' });
    };
    return MrHeroDS;
}(DataSource));
export { MrHeroDS };
if (false) {
    /** @type {?} */
    MrHeroDS.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2hlcm8uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBOEIsb0NBQVU7SUFBeEM7O0lBZ0JBLENBQUM7Ozs7OztJQWJXLDRCQUFTOzs7OztJQUFuQixVQUFvQixJQUFTO1FBQ3JCLElBQUEsaUJBQXNDLEVBQXBDLG9CQUFPLEVBQUUsMEJBQTJCOztZQUN4QyxJQUFJOztZQUNKLEtBQUs7UUFDVCxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNsQzthQUFNO1lBQ0wsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ2xDO1FBQ0QsNEJBQ0ssSUFBSSxJQUFFLE9BQU8sU0FBQSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssSUFBSSxFQUFFLElBQzNEO0lBQ0osQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBaEJELENBQThCLFVBQVUsR0FnQnZDOzs7O0lBZkMsc0JBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJIZXJvRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyBjbGFzc2VzLCBiYWNrZ3JvdW5kIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgbGV0IGJhY2s7XG4gICAgbGV0IGltYWdlO1xuICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICBiYWNrID0gZGF0YS5pbWFnZTsgaW1hZ2UgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UgPSBkYXRhLmltYWdlOyBiYWNrID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5kYXRhLCBjbGFzc2VzLCBiYWNrZ3JvdW5kSW1hZ2U6IGJhY2ssIGltYWdlOiBpbWFnZSB8fCAnJ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==