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
            /*
              Add the highlights to the item's metadata with a custom group
            */
            var highlights = [];
            if (item.highlights) {
                var highlightGroup_1 = {
                    title: _t('advancedsearch#highlights_title'),
                    items: [],
                    classes: 'n7-item-preview__highlights'
                };
                item.highlights.forEach(function (highlight) {
                    var _a;
                    // if the item is an array interpret it as [label, [value]]
                    if (Array.isArray(highlight)) {
                        highlightGroup_1.items.push({
                            label: _t(highlight[0]),
                            value: _t(highlight[1][0])
                        });
                        // if it's an object then it should have a custom hyperlink
                    }
                    else {
                        var href = '';
                        if (highlight.link.absolute) {
                            // path is relative to the baseUrl
                            href = "" + highlight.link.absolute;
                        }
                        else if (highlight.link.relative) {
                            // path is relative to the item-preview url
                            href = "" + item.link + highlight.link;
                        }
                        highlightGroup_1.items.push({
                            label: highlight.label ? _t(highlight.label) : undefined,
                            value: (_a = highlight.text) !== null && _a !== void 0 ? _a : '',
                            href: href,
                        });
                    }
                });
                highlights.push(highlightGroup_1);
            }
            var anchor = null;
            if (item.link) {
                anchor = {
                    href: linksHelper.getRouterLink(item.link),
                    queryParams: linksHelper.getQueryParams(item.link),
                    target: '_blank'
                };
            }
            if (item.payload) {
                anchor = {
                    payload: __assign({}, item.payload)
                };
            }
            return __assign(__assign({}, item), { metadata: metadata,
                anchor: anchor,
                highlights: highlights, classes: itemPreviewOptions.classes });
        });
    };
    return MrSearchResultsDS;
}(DataSource));
export { MrSearchResultsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUM7QUFFckQsSUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFvQ0Y7SUFBdUMscUNBQVU7SUFBakQ7O0lBOEZBLENBQUM7SUE3RlcscUNBQVMsR0FBbkIsVUFBb0IsSUFBc0I7UUFDaEMsSUFBQSxzQkFBTyxDQUFVO1FBQ2pCLElBQUEsNkNBQVcsQ0FBeUI7UUFDNUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ3RCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsWUFBWTtnQkFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Z0JBQ0QsUUFBUTtnQkFDUixJQUFJLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJ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VyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNsRCxNQUFNLEVBQUUsUUFBUTtpQkFDakIsQ0FBQzthQUNIO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixNQUFNLEdBQUc7b0JBQ1AsT0FBTyxlQUNGLElBQUksQ0FBQyxPQUFPLENBQ2hCO2lCQUNGLENBQUM7YUFDSDtZQUVELDZCQUNLLElBQUksS0FDUCxRQUFRLFVBQUE7Z0JBQ1IsTUFBTSxRQUFBO2dCQUNOLFVBQVUsWUFBQSxFQUNWLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLElBQ25DO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBOUZELENBQXVDLFVBQVUsR0E4RmhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBNZXRhZGF0YUdyb3VwIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgY2xvbmUgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcblxuY29uc3QgSVRFTV9QUkVWSUVXX0RFRkFVTFRTID0ge1xuICBsaW1pdDogMTAwLFxuICBzdHJpcHRhZ3M6IHRydWVcbn07XG5cbnR5cGUgTXJTZWFyY2hSZXNwb25zZSA9IHtcbiAgbGltaXQ6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHJlc3VsdHM6IE1yU2VhcmNoUmVzdWx0W107XG4gIHNvcnQ6IHN0cmluZztcbiAgdG90YWxfY291bnQ6IG51bWJlcjtcbn1cblxudHlwZSBIaWdobGlnaHRJdGVtID0gW3N0cmluZywgW3N0cmluZ11dIHwge1xuICBsaW5rPzoge1xuICAgIC8qKiBmcm9tIHRoZSBiYXNlVXJsIG9mIHRoZSBhcHBsaWNhdGlvbiAqL1xuICAgIGFic29sdXRlOiBzdHJpbmc7XG4gICAgLyoqIHBhdGggcmVsYXRpdmUgdG8gdGhlIGl0ZW0gcHJldmlldyB1cmwgKi9cbiAgICByZWxhdGl2ZTogc3RyaW5nO1xuICB9O1xuICB0ZXh0Pzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE1yU2VhcmNoUmVzdWx0IGV4dGVuZHMgSXRlbVByZXZpZXdEYXRhIHtcbiAgLyoqIHVuaXF1ZSBpZCBmb3IgdGhlIHNlYXJjaCByZXN1bHQgZW50cnkgKi9cbiAgaWQ6IG51bWJlcjtcbiAgLyoqIHJlbGF0aXZlIHBhdGggKi9cbiAgbGluaz86IHN0cmluZztcbiAgLyoqIGl0ZW1zIHRoYXQgbWF0Y2hlZCB0aGUgc2VhcmNoIGlucHV0ICovXG4gIGhpZ2hsaWdodHM/OiBIaWdobGlnaHRJdGVtW107XG4gIC8qKiBwYXlsb2FkIGZvciBpdGVtIGFuY2hvciAqL1xuICBwYXlsb2FkPzoge1xuICAgIGFjdGlvbjogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmcgfCBudW1iZXI7XG4gICAgdHlwZTogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBNclNlYXJjaFJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XG4gICAgY29uc3QgaXRlbVByZXZpZXdPcHRpb25zID0gbWVyZ2UoY2xvbmUoSVRFTV9QUkVWSUVXX0RFRkFVTFRTKSwgKGl0ZW1QcmV2aWV3IHx8IHt9KSk7XG5cbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS50ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBzdHJpcHRhZ3NcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcbiAgICAgICAgICBpdGVtLnRleHQgPSBoZWxwZXJzLnN0cmlwdGFncyhpdGVtLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxpbWl0XG4gICAgICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMubGltaXQgJiYgKGl0ZW0udGV4dC5sZW5ndGggPiBpdGVtUHJldmlld09wdGlvbnMubGltaXQpKSB7XG4gICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIG1ldGFkYXRhXG4gICAgICBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGFHcm91cFtdID0gW107XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLm1ldGFkYXRhKSkge1xuICAgICAgICBpdGVtLm1ldGFkYXRhLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgICAoZ3JvdXAuaXRlbXMgfHwgW10pLmZvckVhY2goKG1ldGFkYXRhSXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgIC4uLm1ldGFkYXRhSXRlbSxcbiAgICAgICAgICAgICAgbGFiZWw6IF90KG1ldGFkYXRhSXRlbS5sYWJlbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1ldGFkYXRhLnB1c2goeyBpdGVtcyB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgIEFkZCB0aGUgaGlnaGxpZ2h0cyB0byB0aGUgaXRlbSdzIG1ldGFkYXRhIHdpdGggYSBjdXN0b20gZ3JvdXBcbiAgICAgICovXG4gICAgICBjb25zdCBoaWdobGlnaHRzID0gW107XG4gICAgICBpZiAoaXRlbS5oaWdobGlnaHRzKSB7XG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodEdyb3VwID0ge1xuICAgICAgICAgIHRpdGxlOiBfdCgnYWR2YW5jZWRzZWFyY2gjaGlnaGxpZ2h0c190aXRsZScpLFxuICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICBjbGFzc2VzOiAnbjctaXRlbS1wcmV2aWV3X19oaWdobGlnaHRzJ1xuICAgICAgICB9O1xuICAgICAgICBpdGVtLmhpZ2hsaWdodHMuZm9yRWFjaCgoaGlnaGxpZ2h0OiBIaWdobGlnaHRJdGVtKSA9PiB7XG4gICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gaXMgYW4gYXJyYXkgaW50ZXJwcmV0IGl0IGFzIFtsYWJlbCwgW3ZhbHVlXV1cbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWdobGlnaHQpKSB7XG4gICAgICAgICAgICBoaWdobGlnaHRHcm91cC5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IF90KGhpZ2hsaWdodFswXSksXG4gICAgICAgICAgICAgIHZhbHVlOiBfdChoaWdobGlnaHRbMV1bMF0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBpZiBpdCdzIGFuIG9iamVjdCB0aGVuIGl0IHNob3VsZCBoYXZlIGEgY3VzdG9tIGh5cGVybGlua1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaHJlZiA9ICcnO1xuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodC5saW5rLmFic29sdXRlKSB7XG4gICAgICAgICAgICAgIC8vIHBhdGggaXMgcmVsYXRpdmUgdG8gdGhlIGJhc2VVcmxcbiAgICAgICAgICAgICAgaHJlZiA9IGAke2hpZ2hsaWdodC5saW5rLmFic29sdXRlfWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhpZ2hsaWdodC5saW5rLnJlbGF0aXZlKSB7XG4gICAgICAgICAgICAgIC8vIHBhdGggaXMgcmVsYXRpdmUgdG8gdGhlIGl0ZW0tcHJldmlldyB1cmxcbiAgICAgICAgICAgICAgaHJlZiA9IGAke2l0ZW0ubGlua30ke2hpZ2hsaWdodC5saW5rfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoaWdobGlnaHRHcm91cC5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IGhpZ2hsaWdodC5sYWJlbCA/IF90KGhpZ2hsaWdodC5sYWJlbCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHZhbHVlOiBoaWdobGlnaHQudGV4dCA/PyAnJyxcbiAgICAgICAgICAgICAgaHJlZiwgLy8gY3VzdG9tIGh5cGVybGlua1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaGlnaGxpZ2h0cy5wdXNoKGhpZ2hsaWdodEdyb3VwKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFuY2hvciA9IG51bGw7XG4gICAgICBpZiAoaXRlbS5saW5rKSB7XG4gICAgICAgIGFuY2hvciA9IHtcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGl0ZW0ubGluayksXG4gICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0ucGF5bG9hZCkge1xuICAgICAgICBhbmNob3IgPSB7XG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgLi4uaXRlbS5wYXlsb2FkXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgYW5jaG9yLFxuICAgICAgICBoaWdobGlnaHRzLFxuICAgICAgICBjbGFzc2VzOiBpdGVtUHJldmlld09wdGlvbnMuY2xhc3NlcyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==