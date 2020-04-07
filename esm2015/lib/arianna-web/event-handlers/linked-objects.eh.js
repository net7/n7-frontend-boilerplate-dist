/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/linked-objects.eh.ts
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
        (target) => {
            const { totalObjects, loadedData } = this.dataSource;
            /** @type {?} */
            const loadedTotal = Array.isArray(loadedData.result) ? loadedData.result.length : 0;
            if (loadedTotal >= totalObjects) {
                return;
            }
            /*
              Check if the target element is scrolled near the end while data is not already loading.
              If the condition is met, a request for more data is sent.
            */
            if (target.scrollTop + target.clientHeight >= target.scrollHeight - 150
                && this.dataSource.loadedData.isLoading === false) {
                this.dataSource.loadedData.isLoading = true;
                this.emitOuter('datarequest', {
                    currentPage: this.dataSource.currentPage,
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
                case 'aw-linked-objects.change': // changed page size value (pagination)
                    this.emitOuter('change', +payload.value);
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
                        currentPage: this.dataSource.currentPage,
                    });
                    break;
                case 'aw-home-layout.dataresponse':
                    {
                        // handle incoming data from home-layout
                        const { res } = payload;
                        this.dataSource.handleIncomingData(res);
                    }
                    break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvbGlua2VkLW9iamVjdHMuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFlBQVk7SUFBbkQ7O1FBb0NTLGlCQUFZOzs7O1FBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtrQkFDekIsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVU7O2tCQUM5QyxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRW5GLElBQUksV0FBVyxJQUFJLFlBQVksRUFBRTtnQkFDL0IsT0FBTzthQUNSO1lBQ0Q7OztjQUdFO1lBQ0YsSUFDRSxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHO21CQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUNqRDtnQkFDQSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtvQkFDNUIsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztpQkFDekMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUE7SUFDSCxDQUFDOzs7O0lBeERRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywwQkFBMEIsRUFBRSx1Q0FBdUM7b0JBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN6RSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7d0JBQzVCLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7cUJBQ3pDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssNkJBQTZCO29CQUFFOzs4QkFFNUIsRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPO3dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN6QztvQkFBQyxNQUFNO2dCQUNSLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzQixNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQXVCRjs7O0lBckJDLHlDQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3TGlua2VkT2JqZWN0c0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2hhbmdlJzogLy8gY2hhbmdlZCBwYWdlIHNpemUgdmFsdWUgKHBhZ2luYXRpb24pXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsICtwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBldmVudCB0eXBlOiAnLCB0eXBlLCAnIHdpdGggcGF5bG9hZDogJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudmlld21vcmUnOlxuICAgICAgICAgIC8vIGFzayBob21lLWxheW91dCBmb3IgbW9yZSBkYXRhXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNoZWNrRm9yTW9yZShmYWxzZSk7XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXF1ZXN0Jywge1xuICAgICAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZGF0YXJlc3BvbnNlJzoge1xuICAgICAgICAgIC8vIGhhbmRsZSBpbmNvbWluZyBkYXRhIGZyb20gaG9tZS1sYXlvdXRcbiAgICAgICAgICBjb25zdCB7IHJlcyB9ID0gcGF5bG9hZDtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlSW5jb21pbmdEYXRhKHJlcyk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnNjcm9sbCc6XG4gICAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2Nyb2xsID0gKHRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHsgdG90YWxPYmplY3RzLCBsb2FkZWREYXRhIH0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgY29uc3QgbG9hZGVkVG90YWwgPSBBcnJheS5pc0FycmF5KGxvYWRlZERhdGEucmVzdWx0KSA/IGxvYWRlZERhdGEucmVzdWx0Lmxlbmd0aCA6IDA7XG5cbiAgICBpZiAobG9hZGVkVG90YWwgPj0gdG90YWxPYmplY3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qXG4gICAgICBDaGVjayBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgc2Nyb2xsZWQgbmVhciB0aGUgZW5kIHdoaWxlIGRhdGEgaXMgbm90IGFscmVhZHkgbG9hZGluZy5cbiAgICAgIElmIHRoZSBjb25kaXRpb24gaXMgbWV0LCBhIHJlcXVlc3QgZm9yIG1vcmUgZGF0YSBpcyBzZW50LlxuICAgICovXG4gICAgaWYgKFxuICAgICAgdGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQgPj0gdGFyZ2V0LnNjcm9sbEhlaWdodCAtIDE1MFxuICAgICAgJiYgdGhpcy5kYXRhU291cmNlLmxvYWRlZERhdGEuaXNMb2FkaW5nID09PSBmYWxzZVxuICAgICkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmxvYWRlZERhdGEuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVxdWVzdCcsIHtcbiAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19