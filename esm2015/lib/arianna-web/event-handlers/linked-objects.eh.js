/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwLinkedObjectsEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.handleScroll = (/**
         * @param {?} target
         * @return {?}
         */
        target => {
            /*
              Check if the target element is scrolled near the end while data is not already loading.
              If the condition is met, a request for more data is sent.
            */
            if (target.scrollTop + target.clientHeight >= target.scrollHeight - 150 && this.dataSource.loadedData.isLoading == false) {
                this.dataSource.loadedData.isLoading = true;
                this.emitOuter('datarequest', {
                    currentPage: this.dataSource.currentPage
                });
            }
        });
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-linked-objects.click':
                    if (payload.startsWith('page')) {
                        // pagination routing is handled by the parent layout
                        this.emitOuter('pagination', payload);
                    }
                    else if (payload.startsWith('goto')) {
                        /** @type {?} */
                        let targetPage = Number(payload.replace('goto-', ''))
                        // kill impossible page navigations
                        ;
                        // kill impossible page navigations
                        if (targetPage > this.dataSource.totalPages)
                            return;
                        else if (targetPage < 1 || targetPage === this.dataSource.currentPage)
                            return;
                        else
                            this.emitOuter('goto', payload);
                    }
                    else {
                        // navigate to the patrimonio page of this item
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [`aw/patrimonio/${payload}`]
                        });
                    }
                    break;
                case 'aw-linked-objects.change':
                    this.emitOuter('change', Number(payload.value));
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
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.viewmore':
                    // ask home-layout for more data
                    this.dataSource.checkForMore(false);
                    this.emitOuter('datarequest', {
                        currentPage: this.dataSource.currentPage
                    });
                    break;
                case 'aw-home-layout.dataresponse':
                    // handle incoming data from home-layout
                    let { res } = payload;
                    this.dataSource.handleIncomingData(res);
                case 'aw-home-layout.scroll':
                    this.handleScroll(payload);
                    break;
                default:
                    break;
            }
        }));
    }
}
if (false) {
    /** @type {?} */
    AwLinkedObjectsEH.prototype.handleScroll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsWUFBWTtJQUFuRDs7UUF1RFMsaUJBQVk7Ozs7UUFBRyxNQUFNLENBQUMsRUFBRTtZQUM3Qjs7O2NBR0U7WUFDRixJQUFJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsWUFBWSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksS0FBSyxFQUFFO2dCQUN4SCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtvQkFDNUIsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztpQkFDekMsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDLEVBQUE7SUFDSCxDQUFDOzs7O0lBakVRLE1BQU07UUFFWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUI7b0JBQzVCLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDOUIscURBQXFEO3dCQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQTtxQkFDdEM7eUJBQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzs0QkFDakMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDckQsbUNBQW1DOzt3QkFBbkMsbUNBQW1DO3dCQUNuQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7NEJBQUUsT0FBTzs2QkFDL0MsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7NEJBQUUsT0FBTzs7NEJBQ3pFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO3FCQUNyQzt5QkFBTTt3QkFDTCwrQ0FBK0M7d0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFOzRCQUMxQixPQUFPLEVBQUUsUUFBUTs0QkFDakIsSUFBSSxFQUFFLENBQUMsaUJBQWlCLE9BQU8sRUFBRSxDQUFDO3lCQUNuQyxDQUFDLENBQUM7cUJBQ0o7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLDBCQUEwQjtvQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO29CQUMvQyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFBO29CQUN4RSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7d0JBQzVCLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7cUJBQ3pDLENBQUMsQ0FBQTtvQkFDRixNQUFNO2dCQUNSLEtBQUssNkJBQTZCOzt3QkFFNUIsRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPO29CQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUN6QyxLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDMUIsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7Q0FjRjs7O0lBWkMseUNBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcblxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgncGFnZScpKSB7XG4gICAgICAgICAgICAvLyBwYWdpbmF0aW9uIHJvdXRpbmcgaXMgaGFuZGxlZCBieSB0aGUgcGFyZW50IGxheW91dFxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2luYXRpb24nLCBwYXlsb2FkKVxuICAgICAgICAgIH0gZWxzZSBpZiAocGF5bG9hZC5zdGFydHNXaXRoKCdnb3RvJykpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRQYWdlID0gTnVtYmVyKHBheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJykpXG4gICAgICAgICAgICAvLyBraWxsIGltcG9zc2libGUgcGFnZSBuYXZpZ2F0aW9uc1xuICAgICAgICAgICAgaWYgKHRhcmdldFBhZ2UgPiB0aGlzLmRhdGFTb3VyY2UudG90YWxQYWdlcykgcmV0dXJuO1xuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0UGFnZSA8IDEgfHwgdGFyZ2V0UGFnZSA9PT0gdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlKSByZXR1cm47XG4gICAgICAgICAgICBlbHNlIHRoaXMuZW1pdE91dGVyKCdnb3RvJywgcGF5bG9hZClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbmF2aWdhdGUgdG8gdGhlIHBhdHJpbW9uaW8gcGFnZSBvZiB0aGlzIGl0ZW1cbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYGF3L3BhdHJpbW9uaW8vJHtwYXlsb2FkfWBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIE51bWJlcihwYXlsb2FkLnZhbHVlKSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCB0eXBlOiAnLCB0eXBlLCAnIHdpdGggcGF5bG9hZDogJywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC52aWV3bW9yZSc6XG4gICAgICAgICAgLy8gYXNrIGhvbWUtbGF5b3V0IGZvciBtb3JlIGRhdGFcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2hlY2tGb3JNb3JlKGZhbHNlKVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVxdWVzdCcsIHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kYXRhcmVzcG9uc2UnOlxuICAgICAgICAgIC8vIGhhbmRsZSBpbmNvbWluZyBkYXRhIGZyb20gaG9tZS1sYXlvdXRcbiAgICAgICAgICBsZXQgeyByZXMgfSA9IHBheWxvYWRcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlSW5jb21pbmdEYXRhKHJlcylcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuc2Nyb2xsJzpcbiAgICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbChwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2Nyb2xsID0gdGFyZ2V0ID0+IHtcbiAgICAvKlxuICAgICAgQ2hlY2sgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIHNjcm9sbGVkIG5lYXIgdGhlIGVuZCB3aGlsZSBkYXRhIGlzIG5vdCBhbHJlYWR5IGxvYWRpbmcuXG4gICAgICBJZiB0aGUgY29uZGl0aW9uIGlzIG1ldCwgYSByZXF1ZXN0IGZvciBtb3JlIGRhdGEgaXMgc2VudC5cbiAgICAqL1xuICAgIGlmICh0YXJnZXQuc2Nyb2xsVG9wICsgdGFyZ2V0LmNsaWVudEhlaWdodCA+PSB0YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gMTUwICYmIHRoaXMuZGF0YVNvdXJjZS5sb2FkZWREYXRhLmlzTG9hZGluZyA9PSBmYWxzZSkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRlZERhdGEuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXF1ZXN0Jywge1xuICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSJdfQ==