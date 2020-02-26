/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/hero.eh.ts
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
                    if (payload === 'cerca' && _this.dataSource.currentInputValue) {
                        _this.emitOuter('enter', _this.dataSource.currentInputValue);
                    }
                    break;
                case 'aw-hero.change':
                    _this.dataSource.currentInputValue = payload;
                    _this.emitOuter('change', payload);
                    break;
                case 'aw-hero.enter':
                    _this.emitOuter('enter', payload);
                    break;
                default:
                    console.log('(hero) unhandled event of type', type);
                    break;
            }
        }));
    };
    return AwHeroEH;
}(EventHandler));
export { AwHeroEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy9oZXJvLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUE4QixvQ0FBWTtJQUExQzs7SUF5QkEsQ0FBQzs7OztJQXZCUSx5QkFBTTs7O0lBQWI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxlQUFlO29CQUNsQixJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTt3QkFDNUQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3FCQUM1RDtvQkFDRCxNQUFNO2dCQUNSLEtBQUssZ0JBQWdCO29CQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztvQkFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBQ1IsS0FBSyxlQUFlO29CQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDakMsTUFBTTtnQkFFUjtvQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUNuRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCxlQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUE4QixZQUFZLEdBeUJ6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SGVyb0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1oZXJvLmNsaWNrJzpcbiAgICAgICAgICBpZiAocGF5bG9hZCA9PT0gJ2NlcmNhJyAmJiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudElucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdlbnRlcicsIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SW5wdXRWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1oZXJvLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJbnB1dFZhbHVlID0gcGF5bG9hZDtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uZW50ZXInOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdlbnRlcicsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5sb2coJyhoZXJvKSB1bmhhbmRsZWQgZXZlbnQgb2YgdHlwZScsIHR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufSJdfQ==