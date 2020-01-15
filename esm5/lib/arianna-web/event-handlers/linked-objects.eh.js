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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXVDLDZDQUFZO0lBQW5EO1FBQUEscUVBdUVDO1FBbEJRLGtCQUFZOzs7O1FBQUcsVUFBQSxNQUFNO1lBQ3BCLElBQUEscUJBQThDLEVBQTVDLDhCQUFZLEVBQUUsMEJBQThCOztnQkFDbEQsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvRSxJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUU7Z0JBQy9CLE9BQU87YUFDUjtZQUNEOzs7Y0FHRTtZQUNGLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUU7Z0JBQ3hILEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7Z0JBQzNDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO29CQUM1QixXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO2lCQUN6QyxDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsRUFBQTs7SUFDSCxDQUFDOzs7O0lBckVRLGtDQUFNOzs7SUFBYjtRQUFBLGlCQWlEQztRQS9DQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsSUFBSSxPQUFPLE9BQU8sSUFBSSxRQUFRLEVBQUUsRUFBRSxzQkFBc0I7d0JBQ3RELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs0QkFDOUIscURBQXFEOzRCQUNyRCxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQTt5QkFDdEM7NkJBQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOztnQ0FDakMsVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDOzRCQUM5QyxtQ0FBbUM7OzRCQUFuQyxtQ0FBbUM7NEJBQ25DLElBQUksVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtnQ0FBRSxPQUFPO2lDQUMvQyxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksVUFBVSxLQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztnQ0FBRSxPQUFPOztnQ0FDekUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7eUJBQ3JDO3FCQUNGO3lCQUFNLEVBQUUsMkJBQTJCO3dCQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDbEM7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLDBCQUEwQixFQUFFLHVDQUF1QztvQkFDdEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ3hDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUE7b0JBQ3hFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLGdDQUFnQztvQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO3dCQUM1QixXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO3FCQUN6QyxDQUFDLENBQUE7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLDZCQUE2Qjs7b0JBRTFCLElBQUEsaUJBQUc7b0JBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDekMsS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQzFCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDO0lBb0JILHdCQUFDO0FBQUQsQ0FBQyxBQXZFRCxDQUF1QyxZQUFZLEdBdUVsRDs7OztJQWxCQyx5Q0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcblxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jbGljayc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkID09ICdzdHJpbmcnKSB7IC8vIGNsaWNrIG9uIHBhZ2luYXRpb25cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgICAvLyBwYWdpbmF0aW9uIHJvdXRpbmcgaXMgaGFuZGxlZCBieSB0aGUgcGFyZW50IGxheW91dFxuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnaW5hdGlvbicsIHBheWxvYWQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgnZ290bycpKSB7XG4gICAgICAgICAgICAgIGxldCB0YXJnZXRQYWdlID0gK3BheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJylcbiAgICAgICAgICAgICAgLy8ga2lsbCBpbXBvc3NpYmxlIHBhZ2UgbmF2aWdhdGlvbnNcbiAgICAgICAgICAgICAgaWYgKHRhcmdldFBhZ2UgPiB0aGlzLmRhdGFTb3VyY2UudG90YWxQYWdlcykgcmV0dXJuO1xuICAgICAgICAgICAgICBlbHNlIGlmICh0YXJnZXRQYWdlIDwgMSB8fCB0YXJnZXRQYWdlID09PSB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UpIHJldHVybjtcbiAgICAgICAgICAgICAgZWxzZSB0aGlzLmVtaXRPdXRlcignZ290bycsIHBheWxvYWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHsgLy8gY2xpY2sgb24gYSBsaW5rZWQgb2JqZWN0XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6IC8vIGNoYW5nZWQgcGFnZSBzaXplIHZhbHVlIChwYWdpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCArcGF5bG9hZC52YWx1ZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCB0eXBlOiAnLCB0eXBlLCAnIHdpdGggcGF5bG9hZDogJywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC52aWV3bW9yZSc6XG4gICAgICAgICAgLy8gYXNrIGhvbWUtbGF5b3V0IGZvciBtb3JlIGRhdGFcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2hlY2tGb3JNb3JlKGZhbHNlKVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVxdWVzdCcsIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kYXRhcmVzcG9uc2UnOlxuICAgICAgICAgIC8vIGhhbmRsZSBpbmNvbWluZyBkYXRhIGZyb20gaG9tZS1sYXlvdXRcbiAgICAgICAgICBsZXQgeyByZXMgfSA9IHBheWxvYWRcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlSW5jb21pbmdEYXRhKHJlcylcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuc2Nyb2xsJzpcbiAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2Nyb2xsID0gdGFyZ2V0ID0+IHtcbiAgICBjb25zdCB7IHRvdGFsT2JqZWN0cywgbG9hZGVkRGF0YSB9ID0gdGhpcy5kYXRhU291cmNlLFxuICAgICAgbG9hZGVkVG90YWwgPSBBcnJheS5pc0FycmF5KGxvYWRlZERhdGEucmVzdWx0KSA/IGxvYWRlZERhdGEucmVzdWx0Lmxlbmd0aCA6IDA7XG5cbiAgICBpZiAobG9hZGVkVG90YWwgPj0gdG90YWxPYmplY3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qXG4gICAgICBDaGVjayBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgc2Nyb2xsZWQgbmVhciB0aGUgZW5kIHdoaWxlIGRhdGEgaXMgbm90IGFscmVhZHkgbG9hZGluZy5cbiAgICAgIElmIHRoZSBjb25kaXRpb24gaXMgbWV0LCBhIHJlcXVlc3QgZm9yIG1vcmUgZGF0YSBpcyBzZW50LlxuICAgICovXG4gICAgaWYgKHRhcmdldC5zY3JvbGxUb3AgKyB0YXJnZXQuY2xpZW50SGVpZ2h0ID49IHRhcmdldC5zY3JvbGxIZWlnaHQgLSAxNTAgJiYgdGhpcy5kYXRhU291cmNlLmxvYWRlZERhdGEuaXNMb2FkaW5nID09IGZhbHNlKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZGVkRGF0YS5pc0xvYWRpbmcgPSB0cnVlXG4gICAgICB0aGlzLmVtaXRPdXRlcignZGF0YXJlcXVlc3QnLCB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG59Il19