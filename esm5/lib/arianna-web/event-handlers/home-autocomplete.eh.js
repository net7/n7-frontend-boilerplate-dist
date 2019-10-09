/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwHomeAutocompleteEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeAutocompleteEH, _super);
    function AwHomeAutocompleteEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwHomeAutocompleteEH.prototype.listen = /**
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
                case "aw-home-autocomplete.click":
                    if (payload && payload.source === 'item')
                        _this.emitOuter('click', payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return AwHomeAutocompleteEH;
}(EventHandler));
export { AwHomeAutocompleteEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1hdXRvY29tcGxldGUuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvaG9tZS1hdXRvY29tcGxldGUuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBMEMsZ0RBQVk7SUFBdEQ7O0lBZUEsQ0FBQzs7OztJQWJRLHFDQUFNOzs7SUFBYjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBTyxJQUFJLEVBQUM7Z0JBQ1YsS0FBSyw0QkFBNEI7b0JBQy9CLElBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTTt3QkFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDMUUsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCwyQkFBQztBQUFELENBQUMsQUFmRCxDQUEwQyxZQUFZLEdBZXJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lQXV0b2NvbXBsZXRlRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICBjYXNlIFwiYXctaG9tZS1hdXRvY29tcGxldGUuY2xpY2tcIjpcbiAgICAgICAgICBpZihwYXlsb2FkICYmIHBheWxvYWQuc291cmNlID09PSAnaXRlbScpIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn0iXX0=