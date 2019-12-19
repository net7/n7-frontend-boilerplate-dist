/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwLinkedObjectsEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwLinkedObjectsEH, _super);
    function AwLinkedObjectsEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleScroll = (/**
         * @param {?} target
         * @return {?}
         */
        function (target) {
            var _a = _this.dataSource, totalObjects = _a.totalObjects, loadedData = _a.loadedData;
            /** @type {?} */
            var loadedTotal = Array.isArray(loadedData.result) ? loadedData.result.length : 0;
            if (loadedTotal >= totalObjects) {
                return;
            }
            /*
              Check if the target element is scrolled near the end while data is not already loading.
              If the condition is met, a request for more data is sent.
            */
            if (target.scrollTop + target.clientHeight >= target.scrollHeight - 150 && _this.dataSource.loadedData.isLoading == false) {
                _this.dataSource.loadedData.isLoading = true;
                _this.emitOuter('datarequest', {
                    currentPage: _this.dataSource.currentPage
                });
            }
        });
        return _this;
    }
    /**
     * @return {?}
     */
    AwLinkedObjectsEH.prototype.listen = /**
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
                case 'aw-linked-objects.click':
                    if (typeof payload == 'string') { // click on pagination
                        if (payload.startsWith('page')) {
                            // pagination routing is handled by the parent layout
                            _this.emitOuter('pagination', payload);
                        }
                        else if (payload.startsWith('goto')) {
                            /** @type {?} */
                            var targetPage = +payload.replace('goto-', '')
                            // kill impossible page navigations
                            ;
                            // kill impossible page navigations
                            if (targetPage > _this.dataSource.totalPages)
                                return;
                            else if (targetPage < 1 || targetPage === _this.dataSource.currentPage)
                                return;
                            else
                                _this.emitOuter('goto', payload);
                        }
                    }
                    else { // click on a linked object
                        _this.emitOuter('click', payload);
                    }
                    break;
                case 'aw-linked-objects.change': // changed page size value (pagination)
                    _this.emitOuter('change', +payload.value);
                    break;
                default:
                    console.warn('unhandled event type: ', type, ' with payload: ', payload);
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
                case 'aw-home-layout.viewmore':
                    // ask home-layout for more data
                    _this.dataSource.checkForMore(false);
                    _this.emitOuter('datarequest', {
                        currentPage: _this.dataSource.currentPage
                    });
                    break;
                case 'aw-home-layout.dataresponse':
                    // handle incoming data from home-layout
                    var res = payload.res;
                    _this.dataSource.handleIncomingData(res);
                case 'aw-home-layout.scroll':
                    _this.handleScroll(payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return AwLinkedObjectsEH;
}(EventHandler));
export { AwLinkedObjectsEH };
if (false) {
    /** @type {?} */
    AwLinkedObjectsEH.prototype.handleScroll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBdUMsNkNBQVk7SUFBbkQ7UUFBQSxxRUF1RUM7UUFsQlEsa0JBQVk7Ozs7UUFBRyxVQUFBLE1BQU07WUFDcEIsSUFBQSxxQkFBOEMsRUFBNUMsOEJBQVksRUFBRSwwQkFBOEI7O2dCQUNsRCxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRS9FLElBQUksV0FBVyxJQUFJLFlBQVksRUFBRTtnQkFDL0IsT0FBTzthQUNSO1lBQ0Q7OztjQUdFO1lBQ0YsSUFBSSxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTtnQkFDeEgsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtnQkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7b0JBQzVCLFdBQVcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7aUJBQ3pDLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7SUFyRVEsa0NBQU07OztJQUFiO1FBQUEsaUJBaURDO1FBL0NDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixJQUFJLE9BQU8sT0FBTyxJQUFJLFFBQVEsRUFBRSxFQUFFLHNCQUFzQjt3QkFDdEQsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUM5QixxREFBcUQ7NEJBQ3JELEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO3lCQUN0Qzs2QkFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7O2dDQUNqQyxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7NEJBQzlDLG1DQUFtQzs7NEJBQW5DLG1DQUFtQzs0QkFDbkMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO2dDQUFFLE9BQU87aUNBQy9DLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEtBQUssS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO2dDQUFFLE9BQU87O2dDQUN6RSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTt5QkFDckM7cUJBQ0Y7eUJBQU0sRUFBRSwyQkFBMkI7d0JBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxNQUFNO2dCQUNSLEtBQUssMEJBQTBCLEVBQUUsdUNBQXVDO29CQUN0RSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDeEMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQTtvQkFDeEUsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDbkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7d0JBQzVCLFdBQVcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7cUJBQ3pDLENBQUMsQ0FBQTtvQkFDRixNQUFNO2dCQUNSLEtBQUssNkJBQTZCOztvQkFFMUIsSUFBQSxpQkFBRztvQkFDVCxLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUN6QyxLQUFLLHVCQUF1QjtvQkFDMUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDMUIsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7SUFvQkgsd0JBQUM7QUFBRCxDQUFDLEFBdkVELENBQXVDLFlBQVksR0F1RWxEOzs7O0lBbEJDLHlDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNsaWNrJzpcbiAgICAgICAgICBpZiAodHlwZW9mIHBheWxvYWQgPT0gJ3N0cmluZycpIHsgLy8gY2xpY2sgb24gcGFnaW5hdGlvblxuICAgICAgICAgICAgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgncGFnZScpKSB7XG4gICAgICAgICAgICAgIC8vIHBhZ2luYXRpb24gcm91dGluZyBpcyBoYW5kbGVkIGJ5IHRoZSBwYXJlbnQgbGF5b3V0XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdwYWdpbmF0aW9uJywgcGF5bG9hZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF5bG9hZC5zdGFydHNXaXRoKCdnb3RvJykpIHtcbiAgICAgICAgICAgICAgbGV0IHRhcmdldFBhZ2UgPSArcGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKVxuICAgICAgICAgICAgICAvLyBraWxsIGltcG9zc2libGUgcGFnZSBuYXZpZ2F0aW9uc1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0UGFnZSA+IHRoaXMuZGF0YVNvdXJjZS50b3RhbFBhZ2VzKSByZXR1cm47XG4gICAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldFBhZ2UgPCAxIHx8IHRhcmdldFBhZ2UgPT09IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdE91dGVyKCdnb3RvJywgcGF5bG9hZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgeyAvLyBjbGljayBvbiBhIGxpbmtlZCBvYmplY3RcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2hhbmdlJzogLy8gY2hhbmdlZCBwYWdlIHNpemUgdmFsdWUgKHBhZ2luYXRpb24pXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsICtwYXlsb2FkLnZhbHVlKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IHR5cGU6ICcsIHR5cGUsICcgd2l0aCBwYXlsb2FkOiAnLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnZpZXdtb3JlJzpcbiAgICAgICAgICAvLyBhc2sgaG9tZS1sYXlvdXQgZm9yIG1vcmUgZGF0YVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGVja0Zvck1vcmUoZmFsc2UpXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXF1ZXN0Jywge1xuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRhdGFyZXNwb25zZSc6XG4gICAgICAgICAgLy8gaGFuZGxlIGluY29taW5nIGRhdGEgZnJvbSBob21lLWxheW91dFxuICAgICAgICAgIGxldCB7IHJlcyB9ID0gcGF5bG9hZFxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVJbmNvbWluZ0RhdGEocmVzKVxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5zY3JvbGwnOlxuICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTY3JvbGwgPSB0YXJnZXQgPT4ge1xuICAgIGNvbnN0IHsgdG90YWxPYmplY3RzLCBsb2FkZWREYXRhIH0gPSB0aGlzLmRhdGFTb3VyY2UsXG4gICAgICBsb2FkZWRUb3RhbCA9IEFycmF5LmlzQXJyYXkobG9hZGVkRGF0YS5yZXN1bHQpID8gbG9hZGVkRGF0YS5yZXN1bHQubGVuZ3RoIDogMDtcblxuICAgIGlmIChsb2FkZWRUb3RhbCA+PSB0b3RhbE9iamVjdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLypcbiAgICAgIENoZWNrIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBzY3JvbGxlZCBuZWFyIHRoZSBlbmQgd2hpbGUgZGF0YSBpcyBub3QgYWxyZWFkeSBsb2FkaW5nLlxuICAgICAgSWYgdGhlIGNvbmRpdGlvbiBpcyBtZXQsIGEgcmVxdWVzdCBmb3IgbW9yZSBkYXRhIGlzIHNlbnQuXG4gICAgKi9cbiAgICBpZiAodGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQgPj0gdGFyZ2V0LnNjcm9sbEhlaWdodCAtIDE1MCAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGVkRGF0YS5pc0xvYWRpbmcgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkZWREYXRhLmlzTG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVxdWVzdCcsIHtcbiAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0iXX0=