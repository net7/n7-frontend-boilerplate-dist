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
            if (payload && typeof payload.source != 'undefined') {
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
            switch (type) {
                case 'aw-sidebar-header.click':
                    _this.dataSource.toggleSidebar();
                    break;
                case 'aw-scheda-layout.selectItem':
                    _this.dataSource.selectTreeItem(payload);
                    _this.dataSource.updateTree(null, _this.dataSource.currentItem.payload.parents, payload);
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    _this.dataSource.parseData(payload);
                    break;
            }
        }));
    };
    return AwTreeEH;
}(EventHandler));
export { AwTreeEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQThCLG9DQUFZO0lBQTFDOztJQTJCQSxDQUFDOzs7O0lBekJRLHlCQUFNOzs7SUFBYjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxJQUFHLE9BQU8sSUFBSSxPQUFPLE9BQU8sQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFDO2dCQUNqRCxRQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUc7b0JBQ3hCLEtBQUssUUFBUTt3QkFBVSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUM7d0JBQUMsTUFBTTtvQkFDOUYsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFDLDREQUE0RDtvQkFDcEosS0FBSyxVQUFVO3dCQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUUsQ0FBQzt3QkFDN0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNuQyxNQUFNO2lCQUMvQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUN6QyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUFDLE1BQU07Z0JBQ3ZFLEtBQUssNkJBQTZCO29CQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBRSxPQUFPLENBQUUsQ0FBQztvQkFDMUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFFLENBQUM7b0JBQUMsTUFBTTtnQkFDbEcsS0FBSyxxQ0FBcUM7b0JBQ3hDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUFDLE1BQU07YUFDM0M7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFSCxlQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUE4QixZQUFZLEdBMkJ6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGlmKHBheWxvYWQgJiYgdHlwZW9mIHBheWxvYWQuc291cmNlICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgc3dpdGNoICggcGF5bG9hZC5zb3VyY2UgKSB7XG4gICAgICAgICAgY2FzZSAndG9nZ2xlJzogICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVHJlZSggbnVsbCwgcGF5bG9hZC5wYXJlbnRzLCBwYXlsb2FkLmlkICk7IGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1RvZ2dsZU1lbnVJdGVtJzogdGhpcy5kYXRhU291cmNlLnVwZGF0ZVRyZWUoIG51bGwsIHBheWxvYWQucGFyZW50cywgcGF5bG9hZC5pZCApOyAvL25vIGJyZWFrLCBJIHdhbnQgdG8gZXhlY3V0ZSBhbHNvIHRoZSBmb2xsb3dpbmcgaW5zdHJ1Y3Rpb25cbiAgICAgICAgICBjYXNlICdtZW51SXRlbSc6ICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RUcmVlSXRlbSggcGF5bG9hZC5pZCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIHN3aXRjaCggdHlwZSApe1xuICAgICAgICAgIGNhc2UgJ2F3LXNpZGViYXItaGVhZGVyLmNsaWNrJzogdGhpcy5kYXRhU291cmNlLnRvZ2dsZVNpZGViYXIoKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5zZWxlY3RJdGVtJzpcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RUcmVlSXRlbSggcGF5bG9hZCApO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVRyZWUoIG51bGwsIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SXRlbS5wYXlsb2FkLnBhcmVudHMsIHBheWxvYWQgKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5uYXZpZ2F0aW9ucmVzcG9uc2UnOlxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhcnNlRGF0YShwYXlsb2FkKTsgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufSJdfQ==