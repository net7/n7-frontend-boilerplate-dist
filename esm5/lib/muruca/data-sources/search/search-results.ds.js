import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrSearchResultsDS = /** @class */ (function (_super) {
    __extends(MrSearchResultsDS, _super);
    function MrSearchResultsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrSearchResultsDS.prototype.transform = function (data) {
        var results = data.results;
        var _a = this.options.config, resourcePath = _a.resourcePath, itemPreview = _a.itemPreview;
        var classes = itemPreview && itemPreview.classes ? itemPreview.classes : '';
        return results.map(function (item) { return (__assign(__assign({}, item), { classes: classes, anchor: {
                href: resourcePath + "/" + item.id,
                target: '_blank'
            } })); });
    };
    return MrSearchResultsDS;
}(DataSource));
export { MrSearchResultsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUF1QyxxQ0FBVTtJQUFqRDs7SUFlQSxDQUFDO0lBZFcscUNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsc0JBQU8sQ0FBVTtRQUNuQixJQUFBLHdCQUFtRCxFQUFqRCw4QkFBWSxFQUFFLDRCQUFtQyxDQUFDO1FBQzFELElBQU0sT0FBTyxHQUFHLFdBQVcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFOUUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsdUJBQ3hCLElBQUksS0FDUCxPQUFPLFNBQUEsRUFDUCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFLLFlBQVksU0FBSSxJQUFJLENBQUMsRUFBSTtnQkFDbEMsTUFBTSxFQUFFLFFBQVE7YUFDakIsSUFDRCxFQVAyQixDQU8zQixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBdUMsVUFBVSxHQWVoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFJlc3VsdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGRhdGE7XG4gICAgY29uc3QgeyByZXNvdXJjZVBhdGgsIGl0ZW1QcmV2aWV3IH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBpdGVtUHJldmlldyAmJiBpdGVtUHJldmlldy5jbGFzc2VzID8gaXRlbVByZXZpZXcuY2xhc3NlcyA6ICcnO1xuXG4gICAgcmV0dXJuIHJlc3VsdHMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgLi4uaXRlbSxcbiAgICAgIGNsYXNzZXMsXG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgaHJlZjogYCR7cmVzb3VyY2VQYXRofS8ke2l0ZW0uaWR9YCxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxufVxuIl19