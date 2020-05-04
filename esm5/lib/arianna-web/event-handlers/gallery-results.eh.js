/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/gallery-results.eh.ts
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
                    if (typeof payload === 'string') { // click on pagination
                        if (payload.startsWith('page')) {
                            // pagination routing is handled by the parent layout
                            _this.emitOuter('pagination', payload);
                        }
                        else if (payload.startsWith('goto')) {
                            /** @type {?} */
                            var targetPage = +payload.replace('goto-', '');
                            // kill impossible page navigations
                            if (targetPage > _this.dataSource.totalPages)
                                return;
                            if (targetPage < 1 || targetPage === _this.dataSource.currentPage)
                                return;
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
        // this.outerEvents$.subscribe(({ type, payload }) => {
        // });
    };
    return AwGalleryResultsEH;
}(EventHandler));
export { AwGalleryResultsEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2dhbGxlcnktcmVzdWx0cy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBd0MsOENBQVk7SUFBcEQ7O0lBK0JBLENBQUM7Ozs7SUE5QlEsbUNBQU07OztJQUFiO1FBQUEsaUJBNkJDO1FBNUJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssMkJBQTJCO29CQUM5QixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsTUFBTTtnQkFDUixLQUFLLDBCQUEwQjtvQkFDN0IsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUUsRUFBRSxzQkFBc0I7d0JBQ3ZELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTs0QkFDOUIscURBQXFEOzRCQUNyRCxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFDdkM7NkJBQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOztnQ0FDL0IsVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDOzRCQUNoRCxtQ0FBbUM7NEJBQ25DLElBQUksVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtnQ0FBRSxPQUFPOzRCQUNwRCxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksVUFBVSxLQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztnQ0FBRSxPQUFPOzRCQUN6RSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFDakM7cUJBQ0Y7eUJBQU0sRUFBRSwyQkFBMkI7d0JBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsaURBQWlELEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3RFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsdURBQXVEO1FBQ3ZELE1BQU07SUFDUixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBL0JELENBQXdDLFlBQVksR0ErQm5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5UmVzdWx0c0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1yZXN1bHRzLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsICtwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctZ2FsbGVyeS1yZXN1bHRzLmNsaWNrJzpcbiAgICAgICAgICBpZiAodHlwZW9mIHBheWxvYWQgPT09ICdzdHJpbmcnKSB7IC8vIGNsaWNrIG9uIHBhZ2luYXRpb25cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgICAvLyBwYWdpbmF0aW9uIHJvdXRpbmcgaXMgaGFuZGxlZCBieSB0aGUgcGFyZW50IGxheW91dFxuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncGFnaW5hdGlvbicsIHBheWxvYWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ2dvdG8nKSkge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQYWdlID0gK3BheWxvYWQucmVwbGFjZSgnZ290by0nLCAnJyk7XG4gICAgICAgICAgICAgIC8vIGtpbGwgaW1wb3NzaWJsZSBwYWdlIG5hdmlnYXRpb25zXG4gICAgICAgICAgICAgIGlmICh0YXJnZXRQYWdlID4gdGhpcy5kYXRhU291cmNlLnRvdGFsUGFnZXMpIHJldHVybjtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldFBhZ2UgPCAxIHx8IHRhcmdldFBhZ2UgPT09IHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50UGFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZ290bycsIHBheWxvYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7IC8vIGNsaWNrIG9uIGEgbGlua2VkIG9iamVjdFxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKGdhbGxlcnktcmVzdWx0cykgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgLy8gfSk7XG4gIH1cbn1cbiJdfQ==