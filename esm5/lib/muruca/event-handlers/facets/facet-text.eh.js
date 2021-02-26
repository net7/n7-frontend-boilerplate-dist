import { __assign, __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var FacetTextEH = /** @class */ (function (_super) {
    __extends(FacetTextEH, _super);
    function FacetTextEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacetTextEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case _this.dataSource.id + ".change":
                    if (typeof payload.value === 'string') {
                        payload.value = payload.value.trim();
                    }
                    _this.dataSource.setValue(payload.value);
                    _this.emitOuter('change', __assign(__assign({}, payload), { id: _this.dataSource.id }));
                    break;
                default:
                    break;
            }
        });
    };
    return FacetTextEH;
}(EventHandler));
export { FacetTextEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdGV4dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZXZlbnQtaGFuZGxlcnMvZmFjZXRzL2ZhY2V0LXRleHQuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUFpQywrQkFBWTtJQUE3Qzs7SUFtQkEsQ0FBQztJQWxCUSw0QkFBTSxHQUFiO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQVEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFlBQVM7b0JBQ2pDLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTt3QkFDckMsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUN0QztvQkFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSx3QkFDbEIsT0FBTyxLQUNWLEVBQUUsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFDdEIsQ0FBQztvQkFDSCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQW5CRCxDQUFpQyxZQUFZLEdBbUI1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldFRleHRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBgJHt0aGlzLmRhdGFTb3VyY2UuaWR9LmNoYW5nZWA6XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHBheWxvYWQudmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHBheWxvYWQudmFsdWUgPSBwYXlsb2FkLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRWYWx1ZShwYXlsb2FkLnZhbHVlKTtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCB7XHJcbiAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuaWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19