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
                    if (payload.startsWith('page')) {
                        // pagination routing is handled by the parent layout
                        _this.emitOuter('pagination', payload);
                    }
                    else if (payload.startsWith('goto')) {
                        /** @type {?} */
                        var targetPage = Number(payload.replace('goto-', ''))
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
                    else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBdUMsNkNBQVk7SUFBbkQ7UUFBQSxxRUFxRUM7UUFsQlEsa0JBQVk7Ozs7UUFBRyxVQUFBLE1BQU07WUFDcEIsSUFBQSxxQkFBOEMsRUFBNUMsOEJBQVksRUFBRSwwQkFBOEI7O2dCQUNsRCxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRS9FLElBQUksV0FBVyxJQUFJLFlBQVksRUFBRTtnQkFDL0IsT0FBTzthQUNSO1lBQ0Q7OztjQUdFO1lBQ0YsSUFBSSxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTtnQkFDeEgsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtnQkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7b0JBQzVCLFdBQVcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7aUJBQ3pDLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7SUFuRVEsa0NBQU07OztJQUFiO1FBQUEsaUJBK0NDO1FBN0NDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQzlCLHFEQUFxRDt3QkFDckQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7cUJBQ3RDO3lCQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7NEJBQ2pDLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ3JELG1DQUFtQzs7d0JBQW5DLG1DQUFtQzt3QkFDbkMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVOzRCQUFFLE9BQU87NkJBQy9DLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEtBQUssS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXOzRCQUFFLE9BQU87OzRCQUN6RSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtxQkFDckM7eUJBQU07d0JBQ0wsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELE1BQU07Z0JBQ1IsS0FBSywwQkFBMEIsRUFBRSx1Q0FBdUM7b0JBQ3RFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUN4QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFBO29CQUN4RSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixnQ0FBZ0M7b0JBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNuQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTt3QkFDNUIsV0FBVyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztxQkFDekMsQ0FBQyxDQUFBO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyw2QkFBNkI7O29CQUUxQixJQUFBLGlCQUFHO29CQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ3pDLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUMxQixNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQztJQW9CSCx3QkFBQztBQUFELENBQUMsQUFyRUQsQ0FBdUMsWUFBWSxHQXFFbEQ7Ozs7SUFsQkMseUNBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG5cbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgLy8gcGFnaW5hdGlvbiByb3V0aW5nIGlzIGhhbmRsZWQgYnkgdGhlIHBhcmVudCBsYXlvdXRcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdwYWdpbmF0aW9uJywgcGF5bG9hZClcbiAgICAgICAgICB9IGVsc2UgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgnZ290bycpKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0UGFnZSA9IE51bWJlcihwYXlsb2FkLnJlcGxhY2UoJ2dvdG8tJywgJycpKVxuICAgICAgICAgICAgLy8ga2lsbCBpbXBvc3NpYmxlIHBhZ2UgbmF2aWdhdGlvbnNcbiAgICAgICAgICAgIGlmICh0YXJnZXRQYWdlID4gdGhpcy5kYXRhU291cmNlLnRvdGFsUGFnZXMpIHJldHVybjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldFBhZ2UgPCAxIHx8IHRhcmdldFBhZ2UgPT09IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXRPdXRlcignZ290bycsIHBheWxvYWQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2hhbmdlJzogLy8gY2hhbmdlZCBwYWdlIHNpemUgdmFsdWUgKHBhZ2luYXRpb24pXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsICtwYXlsb2FkLnZhbHVlKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IHR5cGU6ICcsIHR5cGUsICcgd2l0aCBwYXlsb2FkOiAnLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnZpZXdtb3JlJzpcbiAgICAgICAgICAvLyBhc2sgaG9tZS1sYXlvdXQgZm9yIG1vcmUgZGF0YVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGVja0Zvck1vcmUoZmFsc2UpXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXF1ZXN0Jywge1xuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRhdGFyZXNwb25zZSc6XG4gICAgICAgICAgLy8gaGFuZGxlIGluY29taW5nIGRhdGEgZnJvbSBob21lLWxheW91dFxuICAgICAgICAgIGxldCB7IHJlcyB9ID0gcGF5bG9hZFxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVJbmNvbWluZ0RhdGEocmVzKVxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5zY3JvbGwnOlxuICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTY3JvbGwgPSB0YXJnZXQgPT4ge1xuICAgIGNvbnN0IHsgdG90YWxPYmplY3RzLCBsb2FkZWREYXRhIH0gPSB0aGlzLmRhdGFTb3VyY2UsXG4gICAgICBsb2FkZWRUb3RhbCA9IEFycmF5LmlzQXJyYXkobG9hZGVkRGF0YS5yZXN1bHQpID8gbG9hZGVkRGF0YS5yZXN1bHQubGVuZ3RoIDogMDtcblxuICAgIGlmIChsb2FkZWRUb3RhbCA+PSB0b3RhbE9iamVjdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLypcbiAgICAgIENoZWNrIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBzY3JvbGxlZCBuZWFyIHRoZSBlbmQgd2hpbGUgZGF0YSBpcyBub3QgYWxyZWFkeSBsb2FkaW5nLlxuICAgICAgSWYgdGhlIGNvbmRpdGlvbiBpcyBtZXQsIGEgcmVxdWVzdCBmb3IgbW9yZSBkYXRhIGlzIHNlbnQuXG4gICAgKi9cbiAgICBpZiAodGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQgPj0gdGFyZ2V0LnNjcm9sbEhlaWdodCAtIDE1MCAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGVkRGF0YS5pc0xvYWRpbmcgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkZWREYXRhLmlzTG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVxdWVzdCcsIHtcbiAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0iXX0=