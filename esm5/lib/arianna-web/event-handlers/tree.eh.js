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
            var payload = _a.payload;
            switch (payload.source) {
                case 'toggle':
                    _this.dataSource.build(payload.id);
                    break;
                default:
                    break;
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
                    _this.dataSource.build(payload);
                    break;
                case 'aw-scheda-layout.navigationresponse':
                    {
                        if (payload.currentItem) {
                            _this.dataSource.setActive(payload.currentItem);
                        }
                        /** @type {?} */
                        var currentId = payload.currentItem || payload.tree.id;
                        _this.dataSource.load(payload);
                        _this.dataSource.build(currentId);
                    }
                    break;
                case 'aw-scheda-layout.routechanged':
                    // has output (not first load)
                    if (_this.dataSource.output) {
                        _this.dataSource.setActive(payload);
                        _this.dataSource.highlightActive();
                    }
                    break;
                default:
                    break;
            }
        }));
    };
    return AwTreeEH;
}(EventHandler));
export { AwTreeEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQThCLG9DQUFZO0lBQTFDOztJQXdDQSxDQUFDOzs7O0lBdkNRLHlCQUFNOzs7SUFBYjtRQUFBLGlCQXNDQztRQXJDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQVc7Z0JBQVQsb0JBQU87WUFDcEMsUUFBUSxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUN0QixLQUFLLFFBQVE7b0JBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1IsS0FBSyw2QkFBNkI7b0JBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQixNQUFNO2dCQUNSLEtBQUsscUNBQXFDO29CQUFFO3dCQUMxQyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ3ZCLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzt5QkFDaEQ7OzRCQUNLLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDeEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUNsQztvQkFBQyxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyw4QkFBOEI7b0JBQzlCLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7d0JBQzFCLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNuQyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO3FCQUNuQztvQkFDRCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBeENELENBQThCLFlBQVksR0F3Q3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAocGF5bG9hZC5zb3VyY2UpIHtcbiAgICAgICAgY2FzZSAndG9nZ2xlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYnVpbGQocGF5bG9hZC5pZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctc2lkZWJhci1oZWFkZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVTaWRlYmFyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuc2VsZWN0SXRlbSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0Lm5hdmlnYXRpb25yZXNwb25zZSc6IHtcbiAgICAgICAgICBpZiAocGF5bG9hZC5jdXJyZW50SXRlbSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGl2ZShwYXlsb2FkLmN1cnJlbnRJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY3VycmVudElkID0gcGF5bG9hZC5jdXJyZW50SXRlbSB8fCBwYXlsb2FkLnRyZWUuaWQ7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmJ1aWxkKGN1cnJlbnRJZCk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQucm91dGVjaGFuZ2VkJzpcbiAgICAgICAgICAvLyBoYXMgb3V0cHV0IChub3QgZmlyc3QgbG9hZClcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm91dHB1dCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFjdGl2ZShwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oaWdobGlnaHRBY3RpdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==