import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwGalleryResultsEH = /** @class */ (function (_super) {
    __extends(AwGalleryResultsEH, _super);
    function AwGalleryResultsEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwGalleryResultsEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
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
        });
        // this.outerEvents$.subscribe(({ type, payload }) => {
        // });
    };
    return AwGalleryResultsEH;
}(EventHandler));
export { AwGalleryResultsEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZXN1bHRzLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2dhbGxlcnktcmVzdWx0cy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXdDLHNDQUFZO0lBQXBEOztJQStCQSxDQUFDO0lBOUJRLG1DQUFNLEdBQWI7UUFBQSxpQkE2QkM7UUE1QkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSywyQkFBMkI7b0JBQzlCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxNQUFNO2dCQUNSLEtBQUssMEJBQTBCO29CQUM3QixJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRSxFQUFFLHNCQUFzQjt3QkFDdkQsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFOzRCQUM5QixxREFBcUQ7NEJBQ3JELEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3lCQUN2Qzs2QkFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7NEJBQ3JDLElBQU0sVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ2pELG1DQUFtQzs0QkFDbkMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVO2dDQUFFLE9BQU87NEJBQ3BELElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEtBQUssS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO2dDQUFFLE9BQU87NEJBQ3pFLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3lCQUNqQztxQkFDRjt5QkFBTSxFQUFFLDJCQUEyQjt3QkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxpREFBaUQsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDdEUsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCx1REFBdUQ7UUFDdkQsTUFBTTtJQUNSLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUEvQkQsQ0FBd0MsWUFBWSxHQStCbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5UmVzdWx0c0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1nYWxsZXJ5LXJlc3VsdHMuY2hhbmdlJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCArcGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1nYWxsZXJ5LXJlc3VsdHMuY2xpY2snOlxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkID09PSAnc3RyaW5nJykgeyAvLyBjbGljayBvbiBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ3BhZ2UnKSkge1xyXG4gICAgICAgICAgICAgIC8vIHBhZ2luYXRpb24gcm91dGluZyBpcyBoYW5kbGVkIGJ5IHRoZSBwYXJlbnQgbGF5b3V0XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3BhZ2luYXRpb24nLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnN0YXJ0c1dpdGgoJ2dvdG8nKSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBhZ2UgPSArcGF5bG9hZC5yZXBsYWNlKCdnb3RvLScsICcnKTtcclxuICAgICAgICAgICAgICAvLyBraWxsIGltcG9zc2libGUgcGFnZSBuYXZpZ2F0aW9uc1xyXG4gICAgICAgICAgICAgIGlmICh0YXJnZXRQYWdlID4gdGhpcy5kYXRhU291cmNlLnRvdGFsUGFnZXMpIHJldHVybjtcclxuICAgICAgICAgICAgICBpZiAodGFyZ2V0UGFnZSA8IDEgfHwgdGFyZ2V0UGFnZSA9PT0gdGhpcy5kYXRhU291cmNlLmN1cnJlbnRQYWdlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2dvdG8nLCBwYXlsb2FkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHsgLy8gY2xpY2sgb24gYSBsaW5rZWQgb2JqZWN0XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybignKGdhbGxlcnktcmVzdWx0cykgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=