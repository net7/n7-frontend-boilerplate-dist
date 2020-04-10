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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBdUMsNkNBQVk7SUFBbkQ7UUFBQSxxRUF5REM7UUFyQlEsa0JBQVk7Ozs7UUFBRyxVQUFDLE1BQU07WUFDckIsSUFBQSxxQkFBOEMsRUFBNUMsOEJBQVksRUFBRSwwQkFBOEI7O2dCQUM5QyxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRW5GLElBQUksV0FBVyxJQUFJLFlBQVksRUFBRTtnQkFDL0IsT0FBTzthQUNSO1lBQ0Q7OztjQUdFO1lBQ0YsSUFDRSxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHO21CQUNoRSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUNqRDtnQkFDQSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUM1QyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtvQkFDNUIsV0FBVyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztpQkFDekMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUE7O0lBQ0gsQ0FBQzs7OztJQXhEUSxrQ0FBTTs7O0lBQWI7UUFBQSxpQkFpQ0M7UUFoQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywwQkFBMEIsRUFBRSx1Q0FBdUM7b0JBQ3RFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN6RSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixnQ0FBZ0M7b0JBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTt3QkFDNUIsV0FBVyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztxQkFDekMsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1IsS0FBSyw2QkFBNkI7b0JBQUU7O3dCQUUxQixJQUFBLGlCQUFHO3dCQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3pDO29CQUFDLE1BQU07Z0JBQ1IsS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBdUJILHdCQUFDO0FBQUQsQ0FBQyxBQXpERCxDQUF1QyxZQUFZLEdBeURsRDs7OztJQXJCQyx5Q0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6IC8vIGNoYW5nZWQgcGFnZSBzaXplIHZhbHVlIChwYWdpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCArcGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgZXZlbnQgdHlwZTogJywgdHlwZSwgJyB3aXRoIHBheWxvYWQ6ICcsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnZpZXdtb3JlJzpcbiAgICAgICAgICAvLyBhc2sgaG9tZS1sYXlvdXQgZm9yIG1vcmUgZGF0YVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGVja0Zvck1vcmUoZmFsc2UpO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVxdWVzdCcsIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRhdGFyZXNwb25zZSc6IHtcbiAgICAgICAgICAvLyBoYW5kbGUgaW5jb21pbmcgZGF0YSBmcm9tIGhvbWUtbGF5b3V0XG4gICAgICAgICAgY29uc3QgeyByZXMgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUluY29taW5nRGF0YShyZXMpO1xuICAgICAgICB9IGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5zY3JvbGwnOlxuICAgICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZVNjcm9sbCA9ICh0YXJnZXQpID0+IHtcbiAgICBjb25zdCB7IHRvdGFsT2JqZWN0cywgbG9hZGVkRGF0YSB9ID0gdGhpcy5kYXRhU291cmNlO1xuICAgIGNvbnN0IGxvYWRlZFRvdGFsID0gQXJyYXkuaXNBcnJheShsb2FkZWREYXRhLnJlc3VsdCkgPyBsb2FkZWREYXRhLnJlc3VsdC5sZW5ndGggOiAwO1xuXG4gICAgaWYgKGxvYWRlZFRvdGFsID49IHRvdGFsT2JqZWN0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKlxuICAgICAgQ2hlY2sgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIHNjcm9sbGVkIG5lYXIgdGhlIGVuZCB3aGlsZSBkYXRhIGlzIG5vdCBhbHJlYWR5IGxvYWRpbmcuXG4gICAgICBJZiB0aGUgY29uZGl0aW9uIGlzIG1ldCwgYSByZXF1ZXN0IGZvciBtb3JlIGRhdGEgaXMgc2VudC5cbiAgICAqL1xuICAgIGlmIChcbiAgICAgIHRhcmdldC5zY3JvbGxUb3AgKyB0YXJnZXQuY2xpZW50SGVpZ2h0ID49IHRhcmdldC5zY3JvbGxIZWlnaHQgLSAxNTBcbiAgICAgICYmIHRoaXMuZGF0YVNvdXJjZS5sb2FkZWREYXRhLmlzTG9hZGluZyA9PT0gZmFsc2VcbiAgICApIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkZWREYXRhLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmVtaXRPdXRlcignZGF0YXJlcXVlc3QnLCB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==