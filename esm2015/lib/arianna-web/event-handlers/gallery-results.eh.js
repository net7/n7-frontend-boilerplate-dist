/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/gallery-results.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwGalleryResultsEH extends EventHandler {
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
                case 'aw-gallery-results.change':
                    this.emitOuter('change', +payload.value);
                    break;
                case 'aw-gallery-results.click':
                    if (typeof payload === 'string') { // click on pagination
                        if (payload.startsWith('page')) {
                            // pagination routing is handled by the parent layout
                            this.emitOuter('pagination', payload);
                        }
                        else if (payload.startsWith('goto')) {
                            /** @type {?} */
                            const targetPage = +payload.replace('goto-', '');
                            // kill impossible page navigations
                            if (targetPage > this.dataSource.totalPages)
                                return;
                            if (targetPage < 1 || targetPage === this.dataSource.currentPage)
                                return;
                            this.emitOuter('goto', payload);
                        }
                    }
                    else { // click on a linked object
                        this.emitOuter('click', payload);
                    }
                    break;
                default:
                    console.warn('(gallery-results) unhandled inner event of type', type);
                    break;
            }
        }));
        // this.outerEvents$.subscribe(({ type, payload }) => {
        // });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2dhbGxlcnktcmVzdWx0cy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsWUFBWTs7OztJQUMzQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssMkJBQTJCO29CQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsTUFBTTtnQkFDUixLQUFLLDBCQUEwQjtvQkFDN0IsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUUsRUFBRSxzQkFBc0I7d0JBQ3ZELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs0QkFDOUIscURBQXFEOzRCQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFDdkM7NkJBQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOztrQ0FDL0IsVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDOzRCQUNoRCxtQ0FBbUM7NEJBQ25DLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtnQ0FBRSxPQUFPOzRCQUNwRCxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztnQ0FBRSxPQUFPOzRCQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFDakM7cUJBQ0Y7eUJBQU0sRUFBRSwyQkFBMkI7d0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsaURBQWlELEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3RFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsdURBQXVEO1FBQ3ZELE1BQU07SUFDUixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0dhbGxlcnlSZXN1bHRzRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1nYWxsZXJ5LXJlc3VsdHMuY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywgK3BheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1nYWxsZXJ5LXJlc3VsdHMuY2xpY2snOlxuICAgICAgICAgIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gJ3N0cmluZycpIHsgLy8gY2xpY2sgb24gcGFnaW5hdGlvblxuICAgICAgICAgICAgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgncGFnZScpKSB7XG4gICAgICAgICAgICAgIC8vIHBhZ2luYXRpb24gcm91dGluZyBpcyBoYW5kbGVkIGJ5IHRoZSBwYXJlbnQgbGF5b3V0XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdwYWdpbmF0aW9uJywgcGF5bG9hZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBheWxvYWQuc3RhcnRzV2l0aCgnZ290bycpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBhZ2UgPSArcGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKTtcbiAgICAgICAgICAgICAgLy8ga2lsbCBpbXBvc3NpYmxlIHBhZ2UgbmF2aWdhdGlvbnNcbiAgICAgICAgICAgICAgaWYgKHRhcmdldFBhZ2UgPiB0aGlzLmRhdGFTb3VyY2UudG90YWxQYWdlcykgcmV0dXJuO1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0UGFnZSA8IDEgfHwgdGFyZ2V0UGFnZSA9PT0gdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlKSByZXR1cm47XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdnb3RvJywgcGF5bG9hZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHsgLy8gY2xpY2sgb24gYSBsaW5rZWQgb2JqZWN0XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCcoZ2FsbGVyeS1yZXN1bHRzKSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAvLyB9KTtcbiAgfVxufVxuIl19