import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var MrSearchResultsEH = /** @class */ (function (_super) {
    __extends(MrSearchResultsEH, _super);
    function MrSearchResultsEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrSearchResultsEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'mr-search-results.click': {
                    var action = payload.action;
                    if (action === 'resource-modal') {
                        _this.emitOuter('openresourcemodal', payload);
                    }
                    break;
                }
                default:
                    break;
            }
        });
    };
    return MrSearchResultsEH;
}(EventHandler));
export { MrSearchResultsEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXVDLHFDQUFZO0lBQW5EOztJQWdCQSxDQUFDO0lBZlEsa0NBQU0sR0FBYjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUIsQ0FBQyxDQUFDO29CQUN0QixJQUFBLHVCQUFNLENBQWE7b0JBQzNCLElBQUksTUFBTSxLQUFLLGdCQUFnQixFQUFFO3dCQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUM5QztvQkFDRCxNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUF1QyxZQUFZLEdBZ0JsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFJlc3VsdHNFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLXJlc3VsdHMuY2xpY2snOiB7XHJcbiAgICAgICAgICBjb25zdCB7IGFjdGlvbiB9ID0gcGF5bG9hZDtcclxuICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdyZXNvdXJjZS1tb2RhbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ29wZW5yZXNvdXJjZW1vZGFsJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19