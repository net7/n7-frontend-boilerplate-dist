/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var HeaderEH = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderEH, _super);
    function HeaderEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    HeaderEH.prototype.listen = /**
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
                case 'header.click':
                    // navigate control
                    if (payload.source === 'navigate') {
                        _this.emitGlobal('navigate', payload);
                    }
                    // global signal
                    _this.emitGlobal(type, payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return HeaderEH;
}(EventHandler));
export { HeaderEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9ldmVudC1oYW5kbGVycy9oZWFkZXIuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBOEIsb0NBQVk7SUFBMUM7O0lBcUJBLENBQUM7Ozs7SUFuQlEseUJBQU07OztJQUFiO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssY0FBYztvQkFDakIsbUJBQW1CO29CQUNuQixJQUFHLE9BQU8sQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFDO3dCQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDdEM7b0JBRUQsZ0JBQWdCO29CQUNoQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDL0IsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCxlQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUE4QixZQUFZLEdBcUJ6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEhlYWRlckVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCl7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICBjYXNlICdoZWFkZXIuY2xpY2snOlxuICAgICAgICAgIC8vIG5hdmlnYXRlIGNvbnRyb2xcbiAgICAgICAgICBpZihwYXlsb2FkLnNvdXJjZSA9PT0gJ25hdmlnYXRlJyl7XG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywgcGF5bG9hZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZ2xvYmFsIHNpZ25hbFxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCh0eXBlLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==