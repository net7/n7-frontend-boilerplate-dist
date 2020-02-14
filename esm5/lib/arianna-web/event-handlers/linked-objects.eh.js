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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXVDLDZDQUFZO0lBQW5EO1FBQUEscUVBdURDO1FBbEJRLGtCQUFZOzs7O1FBQUcsVUFBQSxNQUFNO1lBQ3BCLElBQUEscUJBQThDLEVBQTVDLDhCQUFZLEVBQUUsMEJBQThCOztnQkFDbEQsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvRSxJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUU7Z0JBQy9CLE9BQU87YUFDUjtZQUNEOzs7Y0FHRTtZQUNGLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUU7Z0JBQ3hILEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7Z0JBQzNDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO29CQUM1QixXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO2lCQUN6QyxDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsRUFBQTs7SUFDSCxDQUFDOzs7O0lBckRRLGtDQUFNOzs7SUFBYjtRQUFBLGlCQWlDQztRQS9CQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLDBCQUEwQixFQUFFLHVDQUF1QztvQkFDdEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUE7b0JBQ3hFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLGdDQUFnQztvQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO3dCQUM1QixXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO3FCQUN6QyxDQUFDLENBQUE7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLDZCQUE2Qjs7b0JBRTFCLElBQUEsaUJBQUc7b0JBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDekMsS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQzFCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDO0lBb0JILHdCQUFDO0FBQUQsQ0FBQyxBQXZERCxDQUF1QyxZQUFZLEdBdURsRDs7OztJQWxCQyx5Q0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdMaW5rZWRPYmplY3RzRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG5cclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2hhbmdlJzogLy8gY2hhbmdlZCBwYWdlIHNpemUgdmFsdWUgKHBhZ2luYXRpb24pXHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgK3BheWxvYWQudmFsdWUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGV2ZW50IHR5cGU6ICcsIHR5cGUsICcgd2l0aCBwYXlsb2FkOiAnLCBwYXlsb2FkKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudmlld21vcmUnOlxyXG4gICAgICAgICAgLy8gYXNrIGhvbWUtbGF5b3V0IGZvciBtb3JlIGRhdGFcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGVja0Zvck1vcmUoZmFsc2UpXHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZGF0YXJlcXVlc3QnLCB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kYXRhcmVzcG9uc2UnOlxyXG4gICAgICAgICAgLy8gaGFuZGxlIGluY29taW5nIGRhdGEgZnJvbSBob21lLWxheW91dFxyXG4gICAgICAgICAgbGV0IHsgcmVzIH0gPSBwYXlsb2FkXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlSW5jb21pbmdEYXRhKHJlcylcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5zY3JvbGwnOlxyXG4gICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwocGF5bG9hZClcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVTY3JvbGwgPSB0YXJnZXQgPT4ge1xyXG4gICAgY29uc3QgeyB0b3RhbE9iamVjdHMsIGxvYWRlZERhdGEgfSA9IHRoaXMuZGF0YVNvdXJjZSxcclxuICAgICAgbG9hZGVkVG90YWwgPSBBcnJheS5pc0FycmF5KGxvYWRlZERhdGEucmVzdWx0KSA/IGxvYWRlZERhdGEucmVzdWx0Lmxlbmd0aCA6IDA7XHJcblxyXG4gICAgaWYgKGxvYWRlZFRvdGFsID49IHRvdGFsT2JqZWN0cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgICBDaGVjayBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgc2Nyb2xsZWQgbmVhciB0aGUgZW5kIHdoaWxlIGRhdGEgaXMgbm90IGFscmVhZHkgbG9hZGluZy5cclxuICAgICAgSWYgdGhlIGNvbmRpdGlvbiBpcyBtZXQsIGEgcmVxdWVzdCBmb3IgbW9yZSBkYXRhIGlzIHNlbnQuXHJcbiAgICAqL1xyXG4gICAgaWYgKHRhcmdldC5zY3JvbGxUb3AgKyB0YXJnZXQuY2xpZW50SGVpZ2h0ID49IHRhcmdldC5zY3JvbGxIZWlnaHQgLSAxNTAgJiYgdGhpcy5kYXRhU291cmNlLmxvYWRlZERhdGEuaXNMb2FkaW5nID09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkZWREYXRhLmlzTG9hZGluZyA9IHRydWVcclxuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXF1ZXN0Jywge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2VcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0iXX0=