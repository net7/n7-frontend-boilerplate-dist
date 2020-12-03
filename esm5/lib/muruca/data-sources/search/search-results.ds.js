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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUM7QUFFckQsSUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFFRjtJQUF1QyxxQ0FBVTtJQUFqRDs7SUEyQ0EsQ0FBQztJQTFDVyxxQ0FBUyxHQUFuQixVQUFvQixJQUFJO1FBQ2QsSUFBQSxzQkFBTyxDQUFVO1FBQ2pCLElBQUEsNkNBQVcsQ0FBeUI7UUFDNUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ3RCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsWUFBWTtnQkFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Z0JBQ0QsUUFBUTtnQkFDUixJQUFJLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsUUFBSyxDQUFDO2lCQUN0RTthQUNGO1lBQ0QsV0FBVztZQUNYLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7b0JBQzFCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFlBQVk7d0JBQ3ZDLEtBQUssQ0FBQyxJQUFJLHVCQUNMLFlBQVksS0FDZixLQUFLLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFDN0IsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQzthQUNKO1lBQ0QsNkJBQ0ssSUFBSSxLQUNQLFFBQVEsVUFBQSxFQUNSLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLEVBQ25DLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUMxQyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNsRCxNQUFNLEVBQUUsUUFBUTtpQkFDakIsSUFDRDtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTNDRCxDQUF1QyxVQUFVLEdBMkNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgY2xvbmUgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XHJcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi8uLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XHJcblxyXG5jb25zdCBJVEVNX1BSRVZJRVdfREVGQVVMVFMgPSB7XHJcbiAgbGltaXQ6IDEwMCxcclxuICBzdHJpcHRhZ3M6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFJlc3VsdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyBpdGVtUHJldmlldyB9ID0gdGhpcy5vcHRpb25zLmNvbmZpZztcclxuICAgIGNvbnN0IGl0ZW1QcmV2aWV3T3B0aW9ucyA9IG1lcmdlKGNsb25lKElURU1fUFJFVklFV19ERUZBVUxUUyksIChpdGVtUHJldmlldyB8fCB7fSkpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHRzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0udGV4dCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBzdHJpcHRhZ3NcclxuICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLnN0cmlwdGFncykge1xyXG4gICAgICAgICAgaXRlbS50ZXh0ID0gaGVscGVycy5zdHJpcHRhZ3MoaXRlbS50ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGltaXRcclxuICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0ICYmIChpdGVtLnRleHQubGVuZ3RoID4gaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KSkge1xyXG4gICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIG1ldGFkYXRhXHJcbiAgICAgIGNvbnN0IG1ldGFkYXRhID0gW107XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0ubWV0YWRhdGEpKSB7XHJcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgICAgICAgIChncm91cC5pdGVtcyB8fCBbXSkuZm9yRWFjaCgobWV0YWRhdGFJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIC4uLm1ldGFkYXRhSXRlbSxcclxuICAgICAgICAgICAgICBsYWJlbDogX3QobWV0YWRhdGFJdGVtLmxhYmVsKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGl0ZW1zIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICBtZXRhZGF0YSxcclxuICAgICAgICBjbGFzc2VzOiBpdGVtUHJldmlld09wdGlvbnMuY2xhc3NlcyxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsoaXRlbS5saW5rKSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhpdGVtLmxpbmspLFxyXG4gICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=