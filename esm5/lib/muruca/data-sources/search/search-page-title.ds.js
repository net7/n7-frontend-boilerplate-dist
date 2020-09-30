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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXBhZ2UtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBeUMsdUNBQVU7SUFBbkQ7O0lBWUEsQ0FBQztJQVhXLHVDQUFTLEdBQW5CO1FBQ1UsSUFBQSxpQ0FBSyxDQUF5QjtRQUV0QyxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztpQkFDaEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBeUMsVUFBVSxHQVlsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hQYWdlVGl0bGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgIHRleHQ6IF90KHRpdGxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19