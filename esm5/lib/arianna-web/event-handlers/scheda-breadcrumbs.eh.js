/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwSchedaSidebarEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwSchedaSidebarEH, _super);
    function AwSchedaSidebarEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwSchedaSidebarEH.prototype.listen = /**
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
            if (type == 'aw-sidebar-header.click') {
                _this.dataSource.toggleSidebar();
                _this.emitOuter(type, payload);
            }
        }));
        /* this.outerEvents$.subscribe(event => {
        
        }); */
    };
    return AwSchedaSidebarEH;
}(EventHandler));
export { AwSchedaSidebarEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWJyZWFkY3J1bWJzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL3NjaGVkYS1icmVhZGNydW1icy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUF1Qyw2Q0FBWTtJQUFuRDs7SUFlQSxDQUFDOzs7O0lBYlEsa0NBQU07OztJQUFiO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxJQUFJLElBQUksSUFBSSx5QkFBeUIsRUFBQztnQkFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVIOztjQUVNO0lBQ1IsQ0FBQztJQUVILHdCQUFDO0FBQUQsQ0FBQyxBQWZELENBQXVDLFlBQVksR0FlbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1NjaGVkYVNpZGViYXJFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7ICAgXG4gICAgICBpZiggdHlwZSA9PSAnYXctc2lkZWJhci1oZWFkZXIuY2xpY2snKXtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVNpZGViYXIoKTtcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIodHlwZSwgcGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKiB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgIFxuICAgIH0pOyAqL1xuICB9XG5cbn0iXX0=