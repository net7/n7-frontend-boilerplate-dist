/**
 * @fileoverview added by tsickle
 * Generated from: lib/common/layouts/page404-layout/page404-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
var Page404LayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(Page404LayoutEH, _super);
    function Page404LayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    Page404LayoutEH.prototype.listen = /**
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
                case 'n7-page404-layout.init':
                    _this.dataSource.onInit(payload);
                    break;
                case 'n7-page404-layout.destroy':
                    _this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        // listen to global events
        /* EventHandler.globalEvents$.pipe(
          takeUntil(this.destroyed$)
        ).subscribe(({type, payload}) => {
          switch(type){
            case 'global.navigate':
              this.dataSource.onNavigate(payload);
              break;
    
            default:
              break;
          }
        }); */
    };
    return Page404LayoutEH;
}(EventHandler));
export { Page404LayoutEH };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Page404LayoutEH.prototype.destroyed$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTQwNC1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2xheW91dHMvcGFnZTQwNC1sYXlvdXQvcGFnZTQwNC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFBcUMsMkNBQVk7SUFBakQ7UUFBQSxxRUFpQ0M7UUFoQ1MsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFnQ25ELENBQUM7Ozs7SUE5QlEsZ0NBQU07OztJQUFiO1FBQUEsaUJBNkJDO1FBNUJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssd0JBQXdCO29CQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtnQkFFUixLQUFLLDJCQUEyQjtvQkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFFUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILDBCQUEwQjtRQUMxQjs7Ozs7Ozs7Ozs7Y0FXTTtJQUNSLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFqQ0QsQ0FBcUMsWUFBWSxHQWlDaEQ7Ozs7Ozs7SUFoQ0MscUNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZTQwNExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ243LXBhZ2U0MDQtbGF5b3V0LmluaXQnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICduNy1wYWdlNDA0LWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsaXN0ZW4gdG8gZ2xvYmFsIGV2ZW50c1xyXG4gICAgLyogRXZlbnRIYW5kbGVyLmdsb2JhbEV2ZW50cyQucGlwZShcclxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJClcclxuICAgICkuc3Vic2NyaWJlKCh7dHlwZSwgcGF5bG9hZH0pID0+IHtcclxuICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ2dsb2JhbC5uYXZpZ2F0ZSc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25OYXZpZ2F0ZShwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pOyAqL1xyXG4gIH1cclxufVxyXG4iXX0=