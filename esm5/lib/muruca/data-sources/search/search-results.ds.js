import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import linksHelper from '../../helpers/links-helper';
var MrSearchResultsDS = /** @class */ (function (_super) {
    __extends(MrSearchResultsDS, _super);
    function MrSearchResultsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrSearchResultsDS.prototype.transform = function (data) {
        var results = data.results;
        var itemPreview = this.options.config.itemPreview;
        var classes = itemPreview && itemPreview.classes ? itemPreview.classes : '';
        return results.map(function (item) { return (__assign(__assign({}, item), { classes: classes, anchor: {
                href: linksHelper.getRouterLink(item.link),
                queryParams: linksHelper.getQueryParams(item.link),
                target: '_blank'
            } })); });
    };
    return MrSearchResultsDS;
}(DataSource));
export { MrSearchResultsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLFdBQVcsTUFBTSw0QkFBNEIsQ0FBQztBQUVyRDtJQUF1QyxxQ0FBVTtJQUFqRDs7SUFnQkEsQ0FBQztJQWZXLHFDQUFTLEdBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLHNCQUFPLENBQVU7UUFDakIsSUFBQSw2Q0FBVyxDQUF5QjtRQUM1QyxJQUFNLE9BQU8sR0FBRyxXQUFXLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTlFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLHVCQUN4QixJQUFJLEtBQ1AsT0FBTyxTQUFBLEVBQ1AsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2xELE1BQU0sRUFBRSxRQUFRO2FBQ2pCLElBQ0QsRUFSMkIsQ0FRM0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUF1QyxVQUFVLEdBZ0JoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XG4gICAgY29uc3QgY2xhc3NlcyA9IGl0ZW1QcmV2aWV3ICYmIGl0ZW1QcmV2aWV3LmNsYXNzZXMgPyBpdGVtUHJldmlldy5jbGFzc2VzIDogJyc7XG5cbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAuLi5pdGVtLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhpdGVtLmxpbmspLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICB9XG4gICAgfSkpO1xuICB9XG59XG4iXX0=