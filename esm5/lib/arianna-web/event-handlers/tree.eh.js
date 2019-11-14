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
                    if (typeof _this.dataSource.currentItem !== 'undefined') {
                        _this.dataSource.updateTree(null, _this.dataSource.currentItem.payload.parents, payload);
                    }
                    else {
                        console.warn('The object in the URL does not exist.');
                        // Maybe navigate to 404 here.
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQThCLG9DQUFZO0lBQTFDOztJQWlDQSxDQUFDOzs7O0lBL0JRLHlCQUFNOzs7SUFBYjtRQUFBLGlCQTZCQztRQTVCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxJQUFHLE9BQU8sSUFBSSxPQUFPLE9BQU8sQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFDO2dCQUNqRCxRQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUc7b0JBQ3hCLEtBQUssUUFBUTt3QkFBVSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUM7d0JBQUMsTUFBTTtvQkFDOUYsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFDLDREQUE0RDtvQkFDcEosS0FBSyxVQUFVO3dCQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUUsQ0FBQzt3QkFDN0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNuQyxNQUFNO2lCQUMvQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUN6QyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUFDLE1BQU07Z0JBQ3ZFLEtBQUssNkJBQTZCO29CQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBRSxPQUFPLENBQUUsQ0FBQztvQkFDMUMsSUFBSSxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTt3QkFDdEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFFLENBQUM7cUJBQzFGO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQTt3QkFDckQsOEJBQThCO3FCQUMvQjtvQkFDRCxNQUFNO2dCQUNSLEtBQUsscUNBQXFDO29CQUN4QyxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFBQyxNQUFNO2FBQzNDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBRUgsZUFBQztBQUFELENBQUMsQUFqQ0QsQ0FBOEIsWUFBWSxHQWlDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd1RyZWVFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBpZihwYXlsb2FkICYmIHR5cGVvZiBwYXlsb2FkLnNvdXJjZSAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgIHN3aXRjaCAoIHBheWxvYWQuc291cmNlICkge1xuICAgICAgICAgIGNhc2UgJ3RvZ2dsZSc6ICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVRyZWUoIG51bGwsIHBheWxvYWQucGFyZW50cywgcGF5bG9hZC5pZCApOyBicmVhaztcbiAgICAgICAgICBjYXNlICdUb2dnbGVNZW51SXRlbSc6IHRoaXMuZGF0YVNvdXJjZS51cGRhdGVUcmVlKCBudWxsLCBwYXlsb2FkLnBhcmVudHMsIHBheWxvYWQuaWQgKTsgLy9ubyBicmVhaywgSSB3YW50IHRvIGV4ZWN1dGUgYWxzbyB0aGUgZm9sbG93aW5nIGluc3RydWN0aW9uXG4gICAgICAgICAgY2FzZSAnbWVudUl0ZW0nOiAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0VHJlZUl0ZW0oIHBheWxvYWQuaWQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBzd2l0Y2goIHR5cGUgKXtcbiAgICAgICAgICBjYXNlICdhdy1zaWRlYmFyLWhlYWRlci5jbGljayc6IHRoaXMuZGF0YVNvdXJjZS50b2dnbGVTaWRlYmFyKCk7IGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuc2VsZWN0SXRlbSc6XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0VHJlZUl0ZW0oIHBheWxvYWQgKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJdGVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVHJlZSggbnVsbCwgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJdGVtLnBheWxvYWQucGFyZW50cywgcGF5bG9hZCApOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIG9iamVjdCBpbiB0aGUgVVJMIGRvZXMgbm90IGV4aXN0LicpXG4gICAgICAgICAgICAgIC8vIE1heWJlIG5hdmlnYXRlIHRvIDQwNCBoZXJlLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5uYXZpZ2F0aW9ucmVzcG9uc2UnOlxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhcnNlRGF0YShwYXlsb2FkKTsgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufSJdfQ==