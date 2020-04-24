/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwGalleryResultsEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwGalleryResultsEH, _super);
    function AwGalleryResultsEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwGalleryResultsEH.prototype.listen = /**
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
                case 'aw-gallery-results.change':
                    _this.emitOuter('change', +payload.value);
                    break;
                case 'aw-gallery-results.click':
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
                default:
                    console.warn('(gallery-results) unhandled inner event of type', type);
                    break;
            }
        }));
        /*
            this.outerEvents$.subscribe(event => {
                
            });
        */
    };
    return AwGalleryResultsEH;
}(EventHandler));
export { AwGalleryResultsEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2dhbGxlcnktcmVzdWx0cy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUF3Qyw4Q0FBWTtJQUFwRDs7SUFtQ0EsQ0FBQzs7OztJQWpDVSxtQ0FBTTs7O0lBQWI7UUFBQSxpQkFnQ0M7UUEvQkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDeEMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1YsS0FBSywyQkFBMkI7b0JBQzVCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUN4QyxNQUFNO2dCQUNWLEtBQUssMEJBQTBCO29CQUMzQixJQUFJLE9BQU8sT0FBTyxJQUFJLFFBQVEsRUFBRSxFQUFFLHNCQUFzQjt3QkFDcEQsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUM1QixxREFBcUQ7NEJBQ3JELEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO3lCQUN4Qzs2QkFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7O2dDQUMvQixVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7NEJBQzlDLG1DQUFtQzs7NEJBQW5DLG1DQUFtQzs0QkFDbkMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO2dDQUFFLE9BQU87aUNBQy9DLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEtBQUssS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO2dDQUFFLE9BQU87O2dDQUN6RSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTt5QkFDdkM7cUJBQ0o7eUJBQU0sRUFBRSwyQkFBMkI7d0JBQ2hDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNwQztvQkFDRCxNQUFNO2dCQUNWO29CQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsaURBQWlELEVBQUUsSUFBSSxDQUFDLENBQUE7b0JBQ3JFLE1BQU07YUFDYjtRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ1A7Ozs7VUFJRTtJQUNGLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFuQ0QsQ0FBd0MsWUFBWSxHQW1DbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0dhbGxlcnlSZXN1bHRzRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gICAgcHVibGljIGxpc3RlbigpIHtcbiAgICAgICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1yZXN1bHRzLmNoYW5nZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCArcGF5bG9hZC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1yZXN1bHRzLmNsaWNrJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkID09ICdzdHJpbmcnKSB7IC8vIGNsaWNrIG9uIHBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZ2luYXRpb24gcm91dGluZyBpcyBoYW5kbGVkIGJ5IHRoZSBwYXJlbnQgbGF5b3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2luYXRpb24nLCBwYXlsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ2dvdG8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRQYWdlID0gK3BheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraWxsIGltcG9zc2libGUgcGFnZSBuYXZpZ2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRQYWdlID4gdGhpcy5kYXRhU291cmNlLnRvdGFsUGFnZXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0YXJnZXRQYWdlIDwgMSB8fCB0YXJnZXRQYWdlID09PSB0aGlzLmRhdGFTb3VyY2UuY3VycmVudFBhZ2UpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHRoaXMuZW1pdE91dGVyKCdnb3RvJywgcGF5bG9hZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gY2xpY2sgb24gYSBsaW5rZWQgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJyhnYWxsZXJ5LXJlc3VsdHMpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIC8qXG4gICAgICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgKi9cbiAgICB9XG59Il19