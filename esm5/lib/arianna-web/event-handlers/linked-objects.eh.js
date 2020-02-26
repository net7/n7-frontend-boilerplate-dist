/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/linked-objects.eh.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXVDLDZDQUFZO0lBQW5EO1FBQUEscUVBdURDO1FBbEJRLGtCQUFZOzs7O1FBQUcsVUFBQSxNQUFNO1lBQ3BCLElBQUEscUJBQThDLEVBQTVDLDhCQUFZLEVBQUUsMEJBQThCOztnQkFDbEQsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvRSxJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUU7Z0JBQy9CLE9BQU87YUFDUjtZQUNEOzs7Y0FHRTtZQUNGLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUU7Z0JBQ3hILEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7Z0JBQzNDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO29CQUM1QixXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO2lCQUN6QyxDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsRUFBQTs7SUFDSCxDQUFDOzs7O0lBckRRLGtDQUFNOzs7SUFBYjtRQUFBLGlCQWlDQztRQS9CQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDBCQUEwQixFQUFFLHVDQUF1QztvQkFDdEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUE7b0JBQ3hFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLGdDQUFnQztvQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO3dCQUM1QixXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO3FCQUN6QyxDQUFDLENBQUE7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLDZCQUE2Qjs7b0JBRTFCLElBQUEsaUJBQUc7b0JBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDekMsS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQzFCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDO0lBb0JILHdCQUFDO0FBQUQsQ0FBQyxBQXZERCxDQUF1QyxZQUFZLEdBdURsRDs7OztJQWxCQyx5Q0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcblxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jaGFuZ2UnOiAvLyBjaGFuZ2VkIHBhZ2Ugc2l6ZSB2YWx1ZSAocGFnaW5hdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgK3BheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IHR5cGU6ICcsIHR5cGUsICcgd2l0aCBwYXlsb2FkOiAnLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnZpZXdtb3JlJzpcbiAgICAgICAgICAvLyBhc2sgaG9tZS1sYXlvdXQgZm9yIG1vcmUgZGF0YVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGVja0Zvck1vcmUoZmFsc2UpXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXF1ZXN0Jywge1xuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRhdGFyZXNwb25zZSc6XG4gICAgICAgICAgLy8gaGFuZGxlIGluY29taW5nIGRhdGEgZnJvbSBob21lLWxheW91dFxuICAgICAgICAgIGxldCB7IHJlcyB9ID0gcGF5bG9hZFxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVJbmNvbWluZ0RhdGEocmVzKVxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5zY3JvbGwnOlxuICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTY3JvbGwgPSB0YXJnZXQgPT4ge1xuICAgIGNvbnN0IHsgdG90YWxPYmplY3RzLCBsb2FkZWREYXRhIH0gPSB0aGlzLmRhdGFTb3VyY2UsXG4gICAgICBsb2FkZWRUb3RhbCA9IEFycmF5LmlzQXJyYXkobG9hZGVkRGF0YS5yZXN1bHQpID8gbG9hZGVkRGF0YS5yZXN1bHQubGVuZ3RoIDogMDtcblxuICAgIGlmIChsb2FkZWRUb3RhbCA+PSB0b3RhbE9iamVjdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLypcbiAgICAgIENoZWNrIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBzY3JvbGxlZCBuZWFyIHRoZSBlbmQgd2hpbGUgZGF0YSBpcyBub3QgYWxyZWFkeSBsb2FkaW5nLlxuICAgICAgSWYgdGhlIGNvbmRpdGlvbiBpcyBtZXQsIGEgcmVxdWVzdCBmb3IgbW9yZSBkYXRhIGlzIHNlbnQuXG4gICAgKi9cbiAgICBpZiAodGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQgPj0gdGFyZ2V0LnNjcm9sbEhlaWdodCAtIDE1MCAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGVkRGF0YS5pc0xvYWRpbmcgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkZWREYXRhLmlzTG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVxdWVzdCcsIHtcbiAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0iXX0=