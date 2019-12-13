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
                        _this.dataSource.updateTree(null, _this.dataSource.currentItem.payload.toggle.parents, payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9ldmVudC1oYW5kbGVycy90cmVlLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQThCLG9DQUFZO0lBQTFDOztJQWlDQSxDQUFDOzs7O0lBL0JRLHlCQUFNOzs7SUFBYjtRQUFBLGlCQTZCQztRQTVCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxJQUFHLE9BQU8sSUFBSSxPQUFPLE9BQU8sQ0FBQyxNQUFNLElBQUksV0FBVyxFQUFDO2dCQUNqRCxRQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUc7b0JBQ3hCLEtBQUssUUFBUTt3QkFBVSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFFLENBQUM7d0JBQUMsTUFBTTtvQkFDOUYsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFFLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFDLDREQUE0RDtvQkFDcEosS0FBSyxVQUFVO3dCQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUUsQ0FBQzt3QkFDN0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNuQyxNQUFNO2lCQUMvQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUN6QyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUFDLE1BQU07Z0JBQ3ZFLEtBQUssNkJBQTZCO29CQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBRSxPQUFPLENBQUUsQ0FBQztvQkFDMUMsSUFBSSxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTt3QkFDdEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBRSxDQUFDO3FCQUNqRzt5QkFBTTt3QkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUE7d0JBQ3JELDhCQUE4QjtxQkFDL0I7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLHFDQUFxQztvQkFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQUMsTUFBTTthQUMzQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUVILGVBQUM7QUFBRCxDQUFDLEFBakNELENBQThCLFlBQVksR0FpQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdUcmVlRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgaWYocGF5bG9hZCAmJiB0eXBlb2YgcGF5bG9hZC5zb3VyY2UgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBzd2l0Y2ggKCBwYXlsb2FkLnNvdXJjZSApIHtcbiAgICAgICAgICBjYXNlICd0b2dnbGUnOiAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVUcmVlKCBudWxsLCBwYXlsb2FkLnBhcmVudHMsIHBheWxvYWQuaWQgKTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnVG9nZ2xlTWVudUl0ZW0nOiB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVHJlZSggbnVsbCwgcGF5bG9hZC5wYXJlbnRzLCBwYXlsb2FkLmlkICk7IC8vbm8gYnJlYWssIEkgd2FudCB0byBleGVjdXRlIGFsc28gdGhlIGZvbGxvd2luZyBpbnN0cnVjdGlvblxuICAgICAgICAgIGNhc2UgJ21lbnVJdGVtJzogICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdFRyZWVJdGVtKCBwYXlsb2FkLmlkICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgc3dpdGNoKCB0eXBlICl7XG4gICAgICAgICAgY2FzZSAnYXctc2lkZWJhci1oZWFkZXIuY2xpY2snOiB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlU2lkZWJhcigpOyBicmVhaztcbiAgICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LnNlbGVjdEl0ZW0nOlxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdFRyZWVJdGVtKCBwYXlsb2FkICk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SXRlbSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVRyZWUoIG51bGwsIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SXRlbS5wYXlsb2FkLnRvZ2dsZS5wYXJlbnRzLCBwYXlsb2FkICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBvYmplY3QgaW4gdGhlIFVSTCBkb2VzIG5vdCBleGlzdC4nKVxuICAgICAgICAgICAgICAvLyBNYXliZSBuYXZpZ2F0ZSB0byA0MDQgaGVyZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQubmF2aWdhdGlvbnJlc3BvbnNlJzpcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYXJzZURhdGEocGF5bG9hZCk7IGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbn0iXX0=