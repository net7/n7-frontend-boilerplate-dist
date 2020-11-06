import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
import { merge } from 'lodash';
import helpers from '../../../common/helpers';
import linksHelper from '../../helpers/links-helper';
var ITEM_PREVIEW_DEFAULTS = {
    limit: 100,
    striptags: true
};
var MrSearchResultsDS = /** @class */ (function (_super) {
    __extends(MrSearchResultsDS, _super);
    function MrSearchResultsDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrSearchResultsDS.prototype.transform = function (data) {
        var results = data.results;
        var itemPreview = this.options.config.itemPreview;
        var itemPreviewOptions = merge(ITEM_PREVIEW_DEFAULTS, (itemPreview || {}));
        return results.map(function (item) {
            // striptags
            if (itemPreviewOptions.striptags) {
                item.text = helpers.striptags(item.text);
            }
            // limit
            if (itemPreviewOptions.limit && (item.text.length > itemPreviewOptions.limit)) {
                item.text = item.text.substring(0, itemPreviewOptions.limit) + "...";
            }
            // metadata
            var metadata = [];
            if (Array.isArray(item.metadata)) {
                item.metadata.forEach(function (group) {
                    var items = [];
                    (group.items || []).forEach(function (metadataItem) {
                        items.push(__assign(__assign({}, metadataItem), { label: _t(metadataItem.label) }));
                    });
                    metadata.push({ items: items });
                });
            }
            return __assign(__assign({}, item), { metadata: metadata, classes: itemPreviewOptions.classes, anchor: {
                    href: linksHelper.getRouterLink(item.link),
                    queryParams: linksHelper.getQueryParams(item.link),
                    target: '_blank'
                } });
        });
    };
    return MrSearchResultsDS;
}(DataSource));
export { MrSearchResultsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLFdBQVcsTUFBTSw0QkFBNEIsQ0FBQztBQUVyRCxJQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQUVGO0lBQXVDLHFDQUFVO0lBQWpEOztJQXlDQSxDQUFDO0lBeENXLHFDQUFTLEdBQW5CLFVBQW9CLElBQUk7UUFDZCxJQUFBLHNCQUFPLENBQVU7UUFDakIsSUFBQSw2Q0FBVyxDQUF5QjtRQUM1QyxJQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7WUFDdEIsWUFBWTtZQUNaLElBQUksa0JBQWtCLENBQUMsU0FBUyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFDO1lBQ0QsUUFBUTtZQUNSLElBQUksa0JBQWtCLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdFLElBQUksQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxRQUFLLENBQUM7YUFDdEU7WUFDRCxXQUFXO1lBQ1gsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztvQkFDMUIsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNqQixDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsWUFBWTt3QkFDdkMsS0FBSyxDQUFDLElBQUksdUJBQ0wsWUFBWSxLQUNmLEtBQUssRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUM3QixDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCw2QkFDSyxJQUFJLEtBQ1AsUUFBUSxVQUFBLEVBQ1IsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sRUFDbkMsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzFDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ2xELE1BQU0sRUFBRSxRQUFRO2lCQUNqQixJQUNEO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBekNELENBQXVDLFVBQVUsR0F5Q2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xuXG5jb25zdCBJVEVNX1BSRVZJRVdfREVGQVVMVFMgPSB7XG4gIGxpbWl0OiAxMDAsXG4gIHN0cmlwdGFnczogdHJ1ZVxufTtcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUmVzdWx0c0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGl0ZW1QcmV2aWV3IH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xuICAgIGNvbnN0IGl0ZW1QcmV2aWV3T3B0aW9ucyA9IG1lcmdlKElURU1fUFJFVklFV19ERUZBVUxUUywgKGl0ZW1QcmV2aWV3IHx8IHt9KSk7XG5cbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIC8vIHN0cmlwdGFnc1xuICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcbiAgICAgICAgaXRlbS50ZXh0ID0gaGVscGVycy5zdHJpcHRhZ3MoaXRlbS50ZXh0KTtcbiAgICAgIH1cbiAgICAgIC8vIGxpbWl0XG4gICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0ICYmIChpdGVtLnRleHQubGVuZ3RoID4gaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KSkge1xuICAgICAgICBpdGVtLnRleHQgPSBgJHtpdGVtLnRleHQuc3Vic3RyaW5nKDAsIGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCl9Li4uYDtcbiAgICAgIH1cbiAgICAgIC8vIG1ldGFkYXRhXG4gICAgICBjb25zdCBtZXRhZGF0YSA9IFtdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5tZXRhZGF0YSkpIHtcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgICAgKGdyb3VwLml0ZW1zIHx8IFtdKS5mb3JFYWNoKChtZXRhZGF0YUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAuLi5tZXRhZGF0YUl0ZW0sXG4gICAgICAgICAgICAgIGxhYmVsOiBfdChtZXRhZGF0YUl0ZW0ubGFiZWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsgaXRlbXMgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgIGNsYXNzZXM6IGl0ZW1QcmV2aWV3T3B0aW9ucy5jbGFzc2VzLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGl0ZW0ubGluayksXG4gICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iXX0=