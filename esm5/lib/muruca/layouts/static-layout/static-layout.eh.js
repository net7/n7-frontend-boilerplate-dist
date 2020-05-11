/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrStaticLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(MrStaticLayoutEH, _super);
    function MrStaticLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    MrStaticLayoutEH.prototype.listen = /**
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
                case 'mr-static-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.fetchJson();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        }));
        /*
          this.outerEvents$.subscribe(({ type, payload }) => {
          });
        */
    };
    /**
     * @private
     * @return {?}
     */
    MrStaticLayoutEH.prototype.fetchJson = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataSource.pageRequest$()
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            var title = response.title;
            var body = response.body;
            _this.dataSource.renderHTML(title, body);
        }));
    };
    return MrStaticLayoutEH;
}(EventHandler));
export { MrStaticLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9zdGF0aWMtbGF5b3V0L3N0YXRpYy1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBc0MsNENBQVk7SUFBbEQ7O0lBNEJBLENBQUM7Ozs7SUEzQlEsaUNBQU07OztJQUFiO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQixNQUFNO2dCQUVSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0g7OztVQUdFO0lBQ0osQ0FBQzs7Ozs7SUFFTyxvQ0FBUzs7OztJQUFqQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7YUFDM0IsU0FBUzs7OztRQUFDLFVBQUMsUUFBUTtZQUNWLElBQUEsc0JBQUs7WUFDTCxJQUFBLG9CQUFJO1lBQ1osS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFzQyxZQUFZLEdBNEJqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yU3RhdGljTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zdGF0aWMtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5mZXRjaEpzb24oKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKlxuICAgICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgfSk7XG4gICAgKi9cbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hKc29uKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdlUmVxdWVzdCQoKVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSB9ID0gcmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHsgYm9keSB9ID0gcmVzcG9uc2U7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJIVE1MKHRpdGxlLCBib2R5KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=