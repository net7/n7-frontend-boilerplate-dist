import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrInputCheckboxEH = /** @class */ (function (_super) {
    __extends(MrInputCheckboxEH, _super);
    function MrInputCheckboxEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrInputCheckboxEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case _this.dataSource.id + ".change": {
                    // update value
                    _this.dataSource.toggleValue(payload);
                    // emit changed signal
                    _this.changed$.next({
                        id: _this.dataSource.id,
                        state: _this.dataSource.getState()
                    });
                    break;
                }
                default:
                    break;
            }
        });
    };
    return MrInputCheckboxEH;
}(EventHandler));
export { MrInputCheckboxEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hlY2tib3guZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL2Zvcm0vaW5wdXQtY2hlY2tib3guZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUtqRDtJQUF1QyxxQ0FBWTtJQUFuRDs7SUF1QkEsQ0FBQztJQWxCUSxrQ0FBTSxHQUFiO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQVEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFlBQVMsQ0FBQyxDQUFDO29CQUNuQyxlQUFlO29CQUNmLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxzQkFBc0I7b0JBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNqQixFQUFFLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUN0QixLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7cUJBQ2xDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQXZCRCxDQUF1QyxZQUFZLEdBdUJsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1ySW5wdXRDaGVja2JveERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2Zvcm0vaW5wdXQtY2hlY2tib3guZHMnO1xuaW1wb3J0IHsgTXJJbnB1dEV2ZW50SGFuZGxlciwgTXJDaGFuZ2VkUGFyYW1zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBNcklucHV0Q2hlY2tib3hFSCBleHRlbmRzIEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIE1ySW5wdXRFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgY2hhbmdlZCQ6IFN1YmplY3Q8TXJDaGFuZ2VkUGFyYW1zPjtcblxuICBwdWJsaWMgZGF0YVNvdXJjZTogTXJJbnB1dENoZWNrYm94RFM7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNoYW5nZWA6IHtcbiAgICAgICAgICAvLyB1cGRhdGUgdmFsdWVcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlVmFsdWUocGF5bG9hZCk7XG4gICAgICAgICAgLy8gZW1pdCBjaGFuZ2VkIHNpZ25hbFxuICAgICAgICAgIHRoaXMuY2hhbmdlZCQubmV4dCh7XG4gICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHRoaXMuZGF0YVNvdXJjZS5nZXRTdGF0ZSgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19