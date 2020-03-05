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
            if (target.scrollTop + target.clientHeight >= target.scrollHeight - 150
                && _this.dataSource.loadedData.isLoading === false) {
                _this.dataSource.loadedData.isLoading = true;
                _this.emitOuter('datarequest', {
                    currentPage: _this.dataSource.currentPage,
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
                        currentPage: _this.dataSource.currentPage,
                    });
                    break;
                case 'aw-home-layout.dataresponse':
                    {
                        // handle incoming data from home-layout
                        var res = payload.res;
                        _this.dataSource.handleIncomingData(res);
                    }
                    break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXVDLDZDQUFZO0lBQW5EO1FBQUEscUVBeURDO1FBckJRLGtCQUFZOzs7O1FBQUcsVUFBQyxNQUFNO1lBQ3JCLElBQUEscUJBQThDLEVBQTVDLDhCQUFZLEVBQUUsMEJBQThCOztnQkFDOUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRixJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUU7Z0JBQy9CLE9BQU87YUFDUjtZQUNEOzs7Y0FHRTtZQUNGLElBQ0UsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRzttQkFDaEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxLQUFLLEtBQUssRUFDakQ7Z0JBQ0EsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7b0JBQzVCLFdBQVcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7aUJBQ3pDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7SUF4RFEsa0NBQU07OztJQUFiO1FBQUEsaUJBaUNDO1FBaENDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssMEJBQTBCLEVBQUUsdUNBQXVDO29CQUN0RSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDekUsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7d0JBQzVCLFdBQVcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7cUJBQ3pDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssNkJBQTZCO29CQUFFOzt3QkFFMUIsSUFBQSxpQkFBRzt3QkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN6QztvQkFBQyxNQUFNO2dCQUNSLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzQixNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQXVCSCx3QkFBQztBQUFELENBQUMsQUF6REQsQ0FBdUMsWUFBWSxHQXlEbEQ7Ozs7SUFyQkMseUNBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jaGFuZ2UnOiAvLyBjaGFuZ2VkIHBhZ2Ugc2l6ZSB2YWx1ZSAocGFnaW5hdGlvbilcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCArcGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgdHlwZTogJywgdHlwZSwgJyB3aXRoIHBheWxvYWQ6ICcsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudmlld21vcmUnOlxyXG4gICAgICAgICAgLy8gYXNrIGhvbWUtbGF5b3V0IGZvciBtb3JlIGRhdGFcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGVja0Zvck1vcmUoZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXF1ZXN0Jywge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kYXRhcmVzcG9uc2UnOiB7XHJcbiAgICAgICAgICAvLyBoYW5kbGUgaW5jb21pbmcgZGF0YSBmcm9tIGhvbWUtbGF5b3V0XHJcbiAgICAgICAgICBjb25zdCB7IHJlcyB9ID0gcGF5bG9hZDtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVJbmNvbWluZ0RhdGEocmVzKTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnNjcm9sbCc6XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlU2Nyb2xsID0gKHRhcmdldCkgPT4ge1xyXG4gICAgY29uc3QgeyB0b3RhbE9iamVjdHMsIGxvYWRlZERhdGEgfSA9IHRoaXMuZGF0YVNvdXJjZTtcclxuICAgIGNvbnN0IGxvYWRlZFRvdGFsID0gQXJyYXkuaXNBcnJheShsb2FkZWREYXRhLnJlc3VsdCkgPyBsb2FkZWREYXRhLnJlc3VsdC5sZW5ndGggOiAwO1xyXG5cclxuICAgIGlmIChsb2FkZWRUb3RhbCA+PSB0b3RhbE9iamVjdHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgICAgQ2hlY2sgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIHNjcm9sbGVkIG5lYXIgdGhlIGVuZCB3aGlsZSBkYXRhIGlzIG5vdCBhbHJlYWR5IGxvYWRpbmcuXHJcbiAgICAgIElmIHRoZSBjb25kaXRpb24gaXMgbWV0LCBhIHJlcXVlc3QgZm9yIG1vcmUgZGF0YSBpcyBzZW50LlxyXG4gICAgKi9cclxuICAgIGlmIChcclxuICAgICAgdGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQgPj0gdGFyZ2V0LnNjcm9sbEhlaWdodCAtIDE1MFxyXG4gICAgICAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGVkRGF0YS5pc0xvYWRpbmcgPT09IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRlZERhdGEuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXF1ZXN0Jywge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=