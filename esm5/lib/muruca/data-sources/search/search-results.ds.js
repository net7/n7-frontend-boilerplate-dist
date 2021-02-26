import { __assign, __extends, __read } from "tslib";
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
            // add the highlights to the item's metadata
            if (item.highlights) {
                var highlightGroup_1 = {
                    items: [],
                    classes: 'n7-item-preview__highlights'
                };
                Object.entries(item.highlights).forEach(function (_a) {
                    var _b = __read(_a, 2), label = _b[0], value = _b[1];
                    value.forEach(function (_, i) {
                        highlightGroup_1.items.push({
                            // add a label only to the first entry
                            label: i === 0 ? label : undefined,
                            value: value[i],
                        });
                    });
                });
                metadata.push(highlightGroup_1);
            }
            return __assign(__assign({}, item), { metadata: metadata, classes: itemPreviewOptions.classes, anchor: item.link ? {
                    href: linksHelper.getRouterLink(item.link),
                    queryParams: linksHelper.getQueryParams(item.link),
                    target: '_blank'
                } : undefined });
        });
    };
    return MrSearchResultsDS;
}(DataSource));
export { MrSearchResultsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUM7QUFFckQsSUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFxQkY7SUFBdUMscUNBQVU7SUFBakQ7O0lBZ0VBLENBQUM7SUEvRFcscUNBQVMsR0FBbkIsVUFBb0IsSUFBc0I7UUFDaEMsSUFBQSxzQkFBTyxDQUFVO1FBQ2pCLElBQUEsNkNBQVcsQ0FBeUI7UUFDNUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ3RCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsWUFBWTtnQkFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Z0JBQ0QsUUFBUTtnQkFDUixJQUFJLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsUUFBSyxDQUFDO2lCQUN0RTthQUNGO1lBQ0QsV0FBVztZQUNYLElBQU0sUUFBUSxHQUFvQixFQUFFLENBQUM7WUFDckMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO29CQUMxQixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2pCLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFZO3dCQUN2QyxLQUFLLENBQUMsSUFBSSx1QkFDTCxZQUFZLEtBQ2YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQzdCLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUVELDRDQUE0QztZQUM1QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQU0sZ0JBQWMsR0FBa0I7b0JBQ3BDLEtBQUssRUFBRSxFQUFFO29CQUNULE9BQU8sRUFBRSw2QkFBNkI7aUJBQ3ZDLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBYzt3QkFBZCxrQkFBYyxFQUFiLGFBQUssRUFBRSxhQUFLO29CQUNwRCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ2pCLGdCQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDdkI7NEJBQ0Usc0NBQXNDOzRCQUN0QyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTOzRCQUNsQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzt5QkFDaEIsQ0FDRixDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWMsQ0FBQyxDQUFDO2FBQy9CO1lBRUQsNkJBQ0ssSUFBSSxLQUNQLFFBQVEsVUFBQSxFQUNSLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLEVBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDMUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDbEQsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFDYjtRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWhFRCxDQUF1QyxVQUFVLEdBZ0VoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSwgTWV0YWRhdGFHcm91cCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlLCBjbG9uZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcclxuXHJcbmNvbnN0IElURU1fUFJFVklFV19ERUZBVUxUUyA9IHtcclxuICBsaW1pdDogMTAwLFxyXG4gIHN0cmlwdGFnczogdHJ1ZVxyXG59O1xyXG5cclxudHlwZSBNclNlYXJjaFJlc3BvbnNlID0ge1xyXG4gIGxpbWl0OiBudW1iZXI7XHJcbiAgb2Zmc2V0OiBudW1iZXI7XHJcbiAgcmVzdWx0czogTXJTZWFyY2hSZXN1bHRbXTtcclxuICBzb3J0OiBzdHJpbmc7XHJcbiAgdG90YWxfY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIE1yU2VhcmNoUmVzdWx0IGV4dGVuZHMgSXRlbVByZXZpZXdEYXRhIHtcclxuICAvKiogcmVsYXRpdmUgcGF0aCAqL1xyXG4gIGxpbms6IHN0cmluZztcclxuICAvKiogaXRlbXMgdGhhdCBtYXRjaGVkIHRoZSBzZWFyY2ggaW5wdXQgKi9cclxuICBoaWdobGlnaHRzPzoge1xyXG4gICAgW3g6IHN0cmluZ106IFtzdHJpbmddO1xyXG4gIH07XHJcbiAgLyoqIHVuaXF1ZSBpZCBmb3IgdGhlIHNlYXJjaCByZXN1bHQgZW50cnkgKi9cclxuICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IE1yU2VhcmNoUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHsgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XHJcbiAgICBjb25zdCBpdGVtUHJldmlld09wdGlvbnMgPSBtZXJnZShjbG9uZShJVEVNX1BSRVZJRVdfREVGQVVMVFMpLCAoaXRlbVByZXZpZXcgfHwge30pKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBpdGVtLnRleHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8gc3RyaXB0YWdzXHJcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcclxuICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxpbWl0XHJcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoaXRlbS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcclxuICAgICAgICAgIGl0ZW0udGV4dCA9IGAke2l0ZW0udGV4dC5zdWJzdHJpbmcoMCwgaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KX0uLi5gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBtZXRhZGF0YVxyXG4gICAgICBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGFHcm91cFtdID0gW107XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0ubWV0YWRhdGEpKSB7XHJcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgICAgICAgIChncm91cC5pdGVtcyB8fCBbXSkuZm9yRWFjaCgobWV0YWRhdGFJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIC4uLm1ldGFkYXRhSXRlbSxcclxuICAgICAgICAgICAgICBsYWJlbDogX3QobWV0YWRhdGFJdGVtLmxhYmVsKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGl0ZW1zIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhZGQgdGhlIGhpZ2hsaWdodHMgdG8gdGhlIGl0ZW0ncyBtZXRhZGF0YVxyXG4gICAgICBpZiAoaXRlbS5oaWdobGlnaHRzKSB7XHJcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0R3JvdXA6IE1ldGFkYXRhR3JvdXAgPSB7XHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICBjbGFzc2VzOiAnbjctaXRlbS1wcmV2aWV3X19oaWdobGlnaHRzJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoaXRlbS5oaWdobGlnaHRzKS5mb3JFYWNoKChbbGFiZWwsIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgdmFsdWUuZm9yRWFjaCgoXywgaSkgPT4ge1xyXG4gICAgICAgICAgICBoaWdobGlnaHRHcm91cC5pdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGFkZCBhIGxhYmVsIG9ubHkgdG8gdGhlIGZpcnN0IGVudHJ5XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogaSA9PT0gMCA/IGxhYmVsIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlW2ldLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtZXRhZGF0YS5wdXNoKGhpZ2hsaWdodEdyb3VwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgIG1ldGFkYXRhLFxyXG4gICAgICAgIGNsYXNzZXM6IGl0ZW1QcmV2aWV3T3B0aW9ucy5jbGFzc2VzLFxyXG4gICAgICAgIGFuY2hvcjogaXRlbS5saW5rID8ge1xyXG4gICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhpdGVtLmxpbmspLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGl0ZW0ubGluayksXHJcbiAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXHJcbiAgICAgICAgfSA6IHVuZGVmaW5lZFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==