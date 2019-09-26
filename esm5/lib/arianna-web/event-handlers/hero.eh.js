/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwHeroEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwHeroEH, _super);
    function AwHeroEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHeroEH.prototype.listen = /**
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
                case 'aw-hero.click':
                    // TODO
                    break;
                case 'aw-hero.change':
                    _this.emitOuter('change', payload);
                    break;
                default:
                    break;
            }
        }));
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    };
    return AwHeroEH;
}(EventHandler));
export { AwHeroEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9oZXJvLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQThCLG9DQUFZO0lBQTFDOztJQXNCQSxDQUFDOzs7O0lBcEJRLHlCQUFNOzs7SUFBYjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGVBQWU7b0JBQ2xCLE9BQU87b0JBQ1AsTUFBTTtnQkFFUixLQUFLLGdCQUFnQjtvQkFDbkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBRVI7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSDs7Y0FFTTtJQUNSLENBQUM7SUFFSCxlQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUE4QixZQUFZLEdBc0J6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SGVyb0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1oZXJvLmNsaWNrJzpcbiAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXctaGVyby5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8qIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgXG4gICAgfSk7ICovXG4gIH1cblxufSJdfQ==