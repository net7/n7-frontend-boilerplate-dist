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
            /*
              Check if the target element is scrolled near the end while data is not already loading.
              If the condition is met, a request for more data is sent.
            */
            if (target.scrollTop > target.scrollTopMax - 150 && _this.dataSource.loadedData.isLoading == false) {
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
                        // navigate to the patrimonio page of this item
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: ["aw/patrimonio/" + payload]
                        });
                    }
                    break;
                case 'aw-linked-objects.change':
                    _this.emitOuter('change', Number(payload.value));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBdUMsNkNBQVk7SUFBbkQ7UUFBQSxxRUFtRUM7UUFaUSxrQkFBWTs7OztRQUFHLFVBQUEsTUFBTTtZQUMxQjs7O2NBR0U7WUFDRixJQUFJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBRTtnQkFDakcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtnQkFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7b0JBQzVCLFdBQVcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7aUJBQ3pDLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7SUFqRVEsa0NBQU07OztJQUFiO1FBQUEsaUJBbURDO1FBakRDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsseUJBQXlCO29CQUM1QixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQzlCLHFEQUFxRDt3QkFDckQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7cUJBQ3RDO3lCQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs7NEJBQ2pDLFVBQVUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ3JELG1DQUFtQzs7d0JBQW5DLG1DQUFtQzt3QkFDbkMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVOzRCQUFFLE9BQU87NkJBQy9DLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEtBQUssS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXOzRCQUFFLE9BQU87OzRCQUN6RSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtxQkFDckM7eUJBQU07d0JBQ0wsK0NBQStDO3dCQUMvQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTs0QkFDMUIsT0FBTyxFQUFFLFFBQVE7NEJBQ2pCLElBQUksRUFBRSxDQUFDLG1CQUFpQixPQUFTLENBQUM7eUJBQ25DLENBQUMsQ0FBQztxQkFDSjtvQkFDRCxNQUFNO2dCQUNSLEtBQUssMEJBQTBCO29CQUM3QixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7b0JBQy9DLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUE7b0JBQ3hFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLGdDQUFnQztvQkFDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO3dCQUM1QixXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO3FCQUN6QyxDQUFDLENBQUE7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLDZCQUE2Qjs7b0JBRTFCLElBQUEsaUJBQUc7b0JBQ1QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDekMsS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQzFCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDO0lBY0gsd0JBQUM7QUFBRCxDQUFDLEFBbkVELENBQXVDLFlBQVksR0FtRWxEOzs7O0lBWkMseUNBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcblxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgncGFnZScpKSB7XG4gICAgICAgICAgICAvLyBwYWdpbmF0aW9uIHJvdXRpbmcgaXMgaGFuZGxlZCBieSB0aGUgcGFyZW50IGxheW91dFxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2luYXRpb24nLCBwYXlsb2FkKVxuICAgICAgICAgIH0gZWxzZSBpZiAocGF5bG9hZC5zdGFydHNXaXRoKCdnb3RvJykpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRQYWdlID0gTnVtYmVyKHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJykpXG4gICAgICAgICAgICAvLyBraWxsIGltcG9zc2libGUgcGFnZSBuYXZpZ2F0aW9uc1xuICAgICAgICAgICAgaWYgKHRhcmdldFBhZ2UgPiB0aGlzLmRhdGFTb3VyY2UudG90YWxQYWdlcykgcmV0dXJuO1xuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0UGFnZSA8IDEgfHwgdGFyZ2V0UGFnZSA9PT0gdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlKSByZXR1cm47XG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdE91dGVyKCdnb3RvJywgcGF5bG9hZClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbmF2aWdhdGUgdG8gdGhlIHBhdHJpbW9uaW8gcGFnZSBvZiB0aGlzIGl0ZW1cbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYGF3L3BhdHJpbW9uaW8vJHtwYXlsb2FkfWBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIE51bWJlcihwYXlsb2FkLnZhbHVlKSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCB0eXBlOiAnLCB0eXBlLCAnIHdpdGggcGF5bG9hZDogJywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC52aWV3bW9yZSc6XG4gICAgICAgICAgLy8gYXNrIGhvbWUtbGF5b3V0IGZvciBtb3JlIGRhdGFcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2hlY2tGb3JNb3JlKGZhbHNlKVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVxdWVzdCcsIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kYXRhcmVzcG9uc2UnOlxuICAgICAgICAgIC8vIGhhbmRsZSBpbmNvbWluZyBkYXRhIGZyb20gaG9tZS1sYXlvdXRcbiAgICAgICAgICBsZXQgeyByZXMgfSA9IHBheWxvYWRcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlSW5jb21pbmdEYXRhKHJlcylcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuc2Nyb2xsJzpcbiAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2Nyb2xsID0gdGFyZ2V0ID0+IHtcbiAgICAvKlxuICAgICAgQ2hlY2sgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIHNjcm9sbGVkIG5lYXIgdGhlIGVuZCB3aGlsZSBkYXRhIGlzIG5vdCBhbHJlYWR5IGxvYWRpbmcuXG4gICAgICBJZiB0aGUgY29uZGl0aW9uIGlzIG1ldCwgYSByZXF1ZXN0IGZvciBtb3JlIGRhdGEgaXMgc2VudC5cbiAgICAqL1xuICAgIGlmICh0YXJnZXQuc2Nyb2xsVG9wID4gdGFyZ2V0LnNjcm9sbFRvcE1heCAtIDE1MCAmJiB0aGlzLmRhdGFTb3VyY2UubG9hZGVkRGF0YS5pc0xvYWRpbmcgPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkZWREYXRhLmlzTG9hZGluZyA9IHRydWVcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVxdWVzdCcsIHtcbiAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0iXX0=