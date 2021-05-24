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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXVDLHFDQUFZO0lBQW5EOztJQWdCQSxDQUFDO0lBZlEsa0NBQU0sR0FBYjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx5QkFBeUIsQ0FBQyxDQUFDO29CQUN0QixJQUFBLHVCQUFNLENBQWE7b0JBQzNCLElBQUksTUFBTSxLQUFLLGdCQUFnQixFQUFFO3dCQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUM5QztvQkFDRCxNQUFNO2lCQUNQO2dCQUNEO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUF1QyxZQUFZLEdBZ0JsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUmVzdWx0c0VIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLXJlc3VsdHMuY2xpY2snOiB7XG4gICAgICAgICAgY29uc3QgeyBhY3Rpb24gfSA9IHBheWxvYWQ7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3Jlc291cmNlLW1vZGFsJykge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ29wZW5yZXNvdXJjZW1vZGFsJywgcGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==