import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrSearchResultsDS = /** @class */ (function (_super) {
    __extends(MrSearchResultsDS, _super);
    function MrSearchResultsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrSearchResultsDS.prototype.transform = function (data) {
        var results = data.results;
        var resourcePath = this.options.config.resourcePath;
        return results.map(function (item) { return (__assign(__assign({}, item), { anchor: {
                href: resourcePath + "/" + item.id,
                target: '_blank'
            } })); });
    };
    return MrSearchResultsDS;
}(DataSource));
export { MrSearchResultsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUF1QyxxQ0FBVTtJQUFqRDs7SUFhQSxDQUFDO0lBWlcscUNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsc0JBQU8sQ0FBVTtRQUNqQixJQUFBLCtDQUFZLENBQXlCO1FBRTdDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLHVCQUN4QixJQUFJLEtBQ1AsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBSyxZQUFZLFNBQUksSUFBSSxDQUFDLEVBQUk7Z0JBQ2xDLE1BQU0sRUFBRSxRQUFRO2FBQ2pCLElBQ0QsRUFOMkIsQ0FNM0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWJELENBQXVDLFVBQVUsR0FhaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgcmVzb3VyY2VQYXRoIH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xuXG4gICAgcmV0dXJuIHJlc3VsdHMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgLi4uaXRlbSxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBocmVmOiBgJHtyZXNvdXJjZVBhdGh9LyR7aXRlbS5pZH1gLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICB9XG4gICAgfSkpO1xuICB9XG59XG4iXX0=