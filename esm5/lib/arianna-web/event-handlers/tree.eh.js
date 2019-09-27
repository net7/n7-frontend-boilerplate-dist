/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwTreeEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwTreeEH, _super);
    function AwTreeEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwTreeEH.prototype.listen = /**
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
            if (payload && typeof payload.source != "undefined") {
                switch (payload.source) {
                    case 'toggle':
                        _this.dataSource.updateTree(null, payload.parents, payload.id);
                        break;
                    case 'ToggleMenuItem': _this.dataSource.updateTree(null, payload.parents, payload.id); //no break, I want to execute also the following instruction
                    case 'menuItem':
                        _this.dataSource.selectTreeItem(payload.id);
                        _this.emitOuter('click', payload.id);
                        break;
                }
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            if (type == 'aw-sidebar-header.click') {
                _this.dataSource.toggleSidebar();
            }
            else if (type == 'aw-scheda-layout.selectItem') {
                _this.dataSource.selectTreeItem(payload);
                _this.dataSource.updateTree(null, _this.dataSource.currentItem.payload.parents, payload);
            }
        }));
    };
    return AwTreeEH;
}(EventHandler));
export { AwTreeEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQThCLG9DQUFZO0lBQTFDOztJQTJCQSxDQUFDOzs7O0lBekJRLHlCQUFNOzs7SUFBYjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxJQUFHLE9BQU8sSUFBSSxPQUFPLE9BQU8sQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFDO2dCQUVqRCxRQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUc7b0JBQ3hCLEtBQUssUUFBUTt3QkFBVSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUM7d0JBQUMsTUFBTTtvQkFDOUYsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFDLDREQUE0RDtvQkFDcEosS0FBSyxVQUFVO3dCQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUUsQ0FBQzt3QkFDN0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNuQyxNQUFNO2lCQUMvQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUN6QyxJQUFJLElBQUksSUFBSSx5QkFBeUIsRUFBQztnQkFDbEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNqQztpQkFDSSxJQUFJLElBQUksSUFBSSw2QkFBNkIsRUFBQztnQkFDN0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUUsT0FBTyxDQUFFLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFFLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBRSxDQUFDO2FBQzFGO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUEzQkQsQ0FBOEIsWUFBWSxHQTJCekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1RyZWVFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7ICAgXG4gICAgICBpZihwYXlsb2FkICYmIHR5cGVvZiBwYXlsb2FkLnNvdXJjZSAhPSBcInVuZGVmaW5lZFwiKXtcblxuICAgICAgICBzd2l0Y2ggKCBwYXlsb2FkLnNvdXJjZSApIHtcbiAgICAgICAgICBjYXNlICd0b2dnbGUnOiAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVUcmVlKCBudWxsLCBwYXlsb2FkLnBhcmVudHMsIHBheWxvYWQuaWQgKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnVG9nZ2xlTWVudUl0ZW0nOiB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVHJlZSggbnVsbCwgcGF5bG9hZC5wYXJlbnRzLCBwYXlsb2FkLmlkICk7IC8vbm8gYnJlYWssIEkgd2FudCB0byBleGVjdXRlIGFsc28gdGhlIGZvbGxvd2luZyBpbnN0cnVjdGlvblxuICAgICAgICAgIGNhc2UgJ21lbnVJdGVtJzogICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdFRyZWVJdGVtKCBwYXlsb2FkLmlkICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkLmlkKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7ICAgXG4gICAgICAgIGlmKCB0eXBlID09ICdhdy1zaWRlYmFyLWhlYWRlci5jbGljaycpe1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVNpZGViYXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiggdHlwZSA9PSAnYXctc2NoZWRhLWxheW91dC5zZWxlY3RJdGVtJyl7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0VHJlZUl0ZW0oIHBheWxvYWQgKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVUcmVlKCBudWxsLCB0aGlzLmRhdGFTb3VyY2UuY3VycmVudEl0ZW0ucGF5bG9hZC5wYXJlbnRzLCBwYXlsb2FkICk7XG4gICAgICAgICAgfVxuICAgICAgfSk7IFxuICB9XG5cbn0iXX0=