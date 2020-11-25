import { __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrSearchPageTitleDS = /** @class */ (function (_super) {
    __extends(MrSearchPageTitleDS, _super);
    function MrSearchPageTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrSearchPageTitleDS.prototype.transform = function () {
        var title = this.options.config.title;
        return {
            title: {
                main: {
                    text: _t(title)
                }
            }
        };
    };
    return MrSearchPageTitleDS;
}(DataSource));
export { MrSearchPageTitleDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXBhZ2UtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBeUMsdUNBQVU7SUFBbkQ7O0lBWUEsQ0FBQztJQVhXLHVDQUFTLEdBQW5CO1FBQ1UsSUFBQSxpQ0FBSyxDQUF5QjtRQUV0QyxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztpQkFDaEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBeUMsVUFBVSxHQVlsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUGFnZVRpdGxlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xyXG4gICAgY29uc3QgeyB0aXRsZSB9ID0gdGhpcy5vcHRpb25zLmNvbmZpZztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIG1haW46IHtcclxuICAgICAgICAgIHRleHQ6IF90KHRpdGxlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19