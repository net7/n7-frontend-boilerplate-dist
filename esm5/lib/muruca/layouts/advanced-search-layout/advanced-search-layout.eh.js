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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CO0lBQThDLDRDQUFZO0lBQTFEO1FBQUEscUVBbURDO1FBaERXLGNBQVEsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUFnRHBELENBQUM7SUE5Q1EseUNBQU0sR0FBYjtRQUFBLGlCQWlDQztRQWhDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGdDQUFnQztvQkFDbkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLFlBQVk7b0JBQ1osS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNkLE1BQU07Z0JBRVIsS0FBSyxtQ0FBbUM7b0JBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGtDQUFrQztvQkFDckMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBQ1IsS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzFCLE1BQU07Z0JBRVI7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDcEQsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNPLHlDQUFNLEdBQWhCO1FBQ0UsNEJBQTRCO0lBQzlCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFuREQsQ0FBOEMsWUFBWSxHQW1EekQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNckFkdmFuY2VkU2VhcmNoTGF5b3V0RFMgfSBmcm9tICcuL2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZHMnO1xuXG5leHBvcnQgY2xhc3MgTXJBZHZhbmNlZFNlYXJjaExheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgZGF0YVNvdXJjZTogTXJBZHZhbmNlZFNlYXJjaExheW91dERTO1xuXG4gIHByb3RlY3RlZCBkZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItYWR2YW5jZWQtc2VhcmNoLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIC8vIGluaXQgaG9va1xuICAgICAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbXItYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLnN1Ym1pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uU3VibWl0KHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtci1mb3JtLXdyYXBwZXItYWNjb3JkaW9uLnJlc2V0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25SZXNldCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBleGFtcGxlXG4gICAqIHByb3RlY3RlZCBvbkluaXQoKSB7XG4gICAqICAgdGhpcy5kYXRhU291cmNlLmZvcm0uY2hhbmdlZCQuc3Vic2NyaWJlKCh7IGlkLCBzdGF0ZSB9KSA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZygnY2hhbmdlZCQnLCB7IGlkLCBzdGF0ZSB9KTtcbiAgICogICB9KTtcbiAgICogfVxuICAgKi9cbiAgcHJvdGVjdGVkIG9uSW5pdCgpIHtcbiAgICAvLyB0byBiZSBleHRlbmRlZCBvbiBwcm9qZWN0XG4gIH1cbn1cbiJdfQ==