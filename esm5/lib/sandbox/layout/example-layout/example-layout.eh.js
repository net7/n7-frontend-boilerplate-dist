import { __extends } from "tslib";
/* eslint-disable */
import { EventHandler } from '@n7-frontend/core';
var SbExampleLayoutEH = /** @class */ (function (_super) {
    __extends(SbExampleLayoutEH, _super);
    function SbExampleLayoutEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SbExampleLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            _this.dataSource.onInit();
        });
    };
    return SbExampleLayoutEH;
}(EventHandler));
export { SbExampleLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvc2FuZGJveC9sYXlvdXQvZXhhbXBsZS1sYXlvdXQvZXhhbXBsZS1sYXlvdXQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBdUMscUNBQVk7SUFBbkQ7O0lBTUEsQ0FBQztJQUxRLGtDQUFNLEdBQWI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBdUMsWUFBWSxHQU1sRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTYkV4YW1wbGVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==