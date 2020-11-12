import { __assign, __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
import { merge, clone } from 'lodash';
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
        var itemPreviewOptions = merge(clone(ITEM_PREVIEW_DEFAULTS), (itemPreview || {}));
        return results.map(function (item) {
            if (typeof item.text === 'string') {
                // striptags
                if (itemPreviewOptions.striptags) {
                    item.text = helpers.striptags(item.text);
                }
                // limit
                if (itemPreviewOptions.limit && (item.text.length > itemPreviewOptions.limit)) {
                    item.text = item.text.substring(0, itemPreviewOptions.limit) + "...";
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUM7QUFFckQsSUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFFRjtJQUF1QyxxQ0FBVTtJQUFqRDs7SUEyQ0EsQ0FBQztJQTFDVyxxQ0FBUyxHQUFuQixVQUFvQixJQUFJO1FBQ2QsSUFBQSxzQkFBTyxDQUFVO1FBQ2pCLElBQUEsNkNBQVcsQ0FBeUI7UUFDNUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ3RCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsWUFBWTtnQkFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Z0JBQ0QsUUFBUTtnQkFDUixJQUFJLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsUUFBSyxDQUFDO2lCQUN0RTthQUNGO1lBQ0QsV0FBVztZQUNYLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7b0JBQzFCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFlBQVk7d0JBQ3ZDLEtBQUssQ0FBQyxJQUFJLHVCQUNMLFlBQVksS0FDZixLQUFLLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFDN0IsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsNkJBQ0ssSUFBSSxLQUNQLFFBQVEsVUFBQSxFQUNSLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLEVBQ25DLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUMxQyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNsRCxNQUFNLEVBQUUsUUFBUTtpQkFDakIsSUFDRDtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTNDRCxDQUF1QyxVQUFVLEdBMkNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIGNsb25lIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi8uLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XG5cbmNvbnN0IElURU1fUFJFVklFV19ERUZBVUxUUyA9IHtcbiAgbGltaXQ6IDEwMCxcbiAgc3RyaXB0YWdzOiB0cnVlXG59O1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XG4gICAgY29uc3QgaXRlbVByZXZpZXdPcHRpb25zID0gbWVyZ2UoY2xvbmUoSVRFTV9QUkVWSUVXX0RFRkFVTFRTKSwgKGl0ZW1QcmV2aWV3IHx8IHt9KSk7XG5cbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS50ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBzdHJpcHRhZ3NcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcbiAgICAgICAgICBpdGVtLnRleHQgPSBoZWxwZXJzLnN0cmlwdGFncyhpdGVtLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxpbWl0XG4gICAgICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMubGltaXQgJiYgKGl0ZW0udGV4dC5sZW5ndGggPiBpdGVtUHJldmlld09wdGlvbnMubGltaXQpKSB7XG4gICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIG1ldGFkYXRhXG4gICAgICBjb25zdCBtZXRhZGF0YSA9IFtdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5tZXRhZGF0YSkpIHtcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgICAgKGdyb3VwLml0ZW1zIHx8IFtdKS5mb3JFYWNoKChtZXRhZGF0YUl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAuLi5tZXRhZGF0YUl0ZW0sXG4gICAgICAgICAgICAgIGxhYmVsOiBfdChtZXRhZGF0YUl0ZW0ubGFiZWwpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsgaXRlbXMgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgIGNsYXNzZXM6IGl0ZW1QcmV2aWV3T3B0aW9ucy5jbGFzc2VzLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGl0ZW0ubGluayksXG4gICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iXX0=