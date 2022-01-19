import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
var MrAdvancedSearchLayoutEH = /** @class */ (function (_super) {
    __extends(MrAdvancedSearchLayoutEH, _super);
    function MrAdvancedSearchLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroy$ = new Subject();
        return _this;
    }
    MrAdvancedSearchLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-advanced-search-layout.init':
                    _this.dataSource.onInit(payload);
                    // init hook
                    _this.onInit();
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                case 'mr-advanced-search-layout.destroy':
                    _this.destroy$.next();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-form-wrapper-accordion.submit':
                    _this.dataSource.onSubmit(payload);
                    break;
                case 'mr-form-wrapper-accordion.reset':
                    _this.dataSource.onReset();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
    };
    /**
     * @example
     * protected onInit() {
     *   this.dataSource.form.changed$.subscribe(({ id, state }) => {
     *     console.log('changed$', { id, state });
     *   });
     * }
     */
    MrAdvancedSearchLayoutEH.prototype.onInit = function () {
        // to be extended on project
    };
    return MrAdvancedSearchLayoutEH;
}(EventHandler));
export { MrAdvancedSearchLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CO0lBQThDLDRDQUFZO0lBQTFEO1FBQUEscUVBcURDO1FBbERXLGNBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFrRHBELENBQUM7SUFoRFEseUNBQU0sR0FBYjtRQUFBLGlCQW1DQztRQWxDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGdDQUFnQztvQkFDbkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLFlBQVk7b0JBQ1osS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNkLGFBQWE7b0JBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLE1BQU07Z0JBRVIsS0FBSyxtQ0FBbUM7b0JBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGtDQUFrQztvQkFDckMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBQ1IsS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzFCLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNPLHlDQUFNLEdBQWhCO1FBQ0UsNEJBQTRCO0lBQzlCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFyREQsQ0FBOEMsWUFBWSxHQXFEekQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTXJBZHZhbmNlZFNlYXJjaExheW91dERTIH0gZnJvbSAnLi9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0LmRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIGRhdGFTb3VyY2U6IE1yQWR2YW5jZWRTZWFyY2hMYXlvdXREUztcclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItYWR2YW5jZWQtc2VhcmNoLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICAvLyBpbml0IGhvb2tcclxuICAgICAgICAgIHRoaXMub25Jbml0KCk7XHJcbiAgICAgICAgICAvLyBzY3JvbGwgdG9wXHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbXItYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLnN1Ym1pdCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25TdWJtaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLnJlc2V0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblJlc2V0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBleGFtcGxlXHJcbiAgICogcHJvdGVjdGVkIG9uSW5pdCgpIHtcclxuICAgKiAgIHRoaXMuZGF0YVNvdXJjZS5mb3JtLmNoYW5nZWQkLnN1YnNjcmliZSgoeyBpZCwgc3RhdGUgfSkgPT4ge1xyXG4gICAqICAgICBjb25zb2xlLmxvZygnY2hhbmdlZCQnLCB7IGlkLCBzdGF0ZSB9KTtcclxuICAgKiAgIH0pO1xyXG4gICAqIH1cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgb25Jbml0KCkge1xyXG4gICAgLy8gdG8gYmUgZXh0ZW5kZWQgb24gcHJvamVjdFxyXG4gIH1cclxufVxyXG4iXX0=