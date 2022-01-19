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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUM7QUFFckQsSUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFvQ0Y7SUFBdUMscUNBQVU7SUFBakQ7O0lBOEZBLENBQUM7SUE3RlcscUNBQVMsR0FBbkIsVUFBb0IsSUFBc0I7UUFDaEMsSUFBQSxzQkFBTyxDQUFVO1FBQ2pCLElBQUEsNkNBQVcsQ0FBeUI7UUFDNUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ3RCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsWUFBWTtnQkFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Z0JBQ0QsUUFBUTtnQkFDUixJQUFJLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJ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VyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNsRCxNQUFNLEVBQUUsUUFBUTtpQkFDakIsQ0FBQzthQUNIO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixNQUFNLEdBQUc7b0JBQ1AsT0FBTyxlQUNGLElBQUksQ0FBQyxPQUFPLENBQ2hCO2lCQUNGLENBQUM7YUFDSDtZQUVELDZCQUNLLElBQUksS0FDUCxRQUFRLFVBQUE7Z0JBQ1IsTUFBTSxRQUFBO2dCQUNOLFVBQVUsWUFBQSxFQUNWLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLElBQ25DO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBOUZELENBQXVDLFVBQVUsR0E4RmhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBNZXRhZGF0YUdyb3VwIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UsIGNsb25lIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xyXG5cclxuY29uc3QgSVRFTV9QUkVWSUVXX0RFRkFVTFRTID0ge1xyXG4gIGxpbWl0OiAxMDAsXHJcbiAgc3RyaXB0YWdzOiB0cnVlXHJcbn07XHJcblxyXG50eXBlIE1yU2VhcmNoUmVzcG9uc2UgPSB7XHJcbiAgbGltaXQ6IG51bWJlcjtcclxuICBvZmZzZXQ6IG51bWJlcjtcclxuICByZXN1bHRzOiBNclNlYXJjaFJlc3VsdFtdO1xyXG4gIHNvcnQ6IHN0cmluZztcclxuICB0b3RhbF9jb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIEhpZ2hsaWdodEl0ZW0gPSBbc3RyaW5nLCBbc3RyaW5nXV0gfCB7XHJcbiAgbGluaz86IHtcclxuICAgIC8qKiBmcm9tIHRoZSBiYXNlVXJsIG9mIHRoZSBhcHBsaWNhdGlvbiAqL1xyXG4gICAgYWJzb2x1dGU6IHN0cmluZztcclxuICAgIC8qKiBwYXRoIHJlbGF0aXZlIHRvIHRoZSBpdGVtIHByZXZpZXcgdXJsICovXHJcbiAgICByZWxhdGl2ZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgdGV4dD86IHN0cmluZztcclxuICBsYWJlbD86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE1yU2VhcmNoUmVzdWx0IGV4dGVuZHMgSXRlbVByZXZpZXdEYXRhIHtcclxuICAvKiogdW5pcXVlIGlkIGZvciB0aGUgc2VhcmNoIHJlc3VsdCBlbnRyeSAqL1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgLyoqIHJlbGF0aXZlIHBhdGggKi9cclxuICBsaW5rPzogc3RyaW5nO1xyXG4gIC8qKiBpdGVtcyB0aGF0IG1hdGNoZWQgdGhlIHNlYXJjaCBpbnB1dCAqL1xyXG4gIGhpZ2hsaWdodHM/OiBIaWdobGlnaHRJdGVtW107XHJcbiAgLyoqIHBheWxvYWQgZm9yIGl0ZW0gYW5jaG9yICovXHJcbiAgcGF5bG9hZD86IHtcclxuICAgIGFjdGlvbjogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcjtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IE1yU2VhcmNoUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHsgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XHJcbiAgICBjb25zdCBpdGVtUHJldmlld09wdGlvbnMgPSBtZXJnZShjbG9uZShJVEVNX1BSRVZJRVdfREVGQVVMVFMpLCAoaXRlbVByZXZpZXcgfHwge30pKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBpdGVtLnRleHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8gc3RyaXB0YWdzXHJcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcclxuICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxpbWl0XHJcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoaXRlbS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcclxuICAgICAgICAgIGl0ZW0udGV4dCA9IGAke2l0ZW0udGV4dC5zdWJzdHJpbmcoMCwgaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KX0uLi5gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBtZXRhZGF0YVxyXG4gICAgICBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGFHcm91cFtdID0gW107XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0ubWV0YWRhdGEpKSB7XHJcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgICAgICAgIChncm91cC5pdGVtcyB8fCBbXSkuZm9yRWFjaCgobWV0YWRhdGFJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIC4uLm1ldGFkYXRhSXRlbSxcclxuICAgICAgICAgICAgICBsYWJlbDogX3QobWV0YWRhdGFJdGVtLmxhYmVsKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGl0ZW1zIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgIEFkZCB0aGUgaGlnaGxpZ2h0cyB0byB0aGUgaXRlbSdzIG1ldGFkYXRhIHdpdGggYSBjdXN0b20gZ3JvdXBcclxuICAgICAgKi9cclxuICAgICAgY29uc3QgaGlnaGxpZ2h0cyA9IFtdO1xyXG4gICAgICBpZiAoaXRlbS5oaWdobGlnaHRzKSB7XHJcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0R3JvdXAgPSB7XHJcbiAgICAgICAgICB0aXRsZTogX3QoJ2FkdmFuY2Vkc2VhcmNoI2hpZ2hsaWdodHNfdGl0bGUnKSxcclxuICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICAgIGNsYXNzZXM6ICduNy1pdGVtLXByZXZpZXdfX2hpZ2hsaWdodHMnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpdGVtLmhpZ2hsaWdodHMuZm9yRWFjaCgoaGlnaGxpZ2h0OiBIaWdobGlnaHRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAvLyBpZiB0aGUgaXRlbSBpcyBhbiBhcnJheSBpbnRlcnByZXQgaXQgYXMgW2xhYmVsLCBbdmFsdWVdXVxyXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGlnaGxpZ2h0KSkge1xyXG4gICAgICAgICAgICBoaWdobGlnaHRHcm91cC5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICBsYWJlbDogX3QoaGlnaGxpZ2h0WzBdKSxcclxuICAgICAgICAgICAgICB2YWx1ZTogX3QoaGlnaGxpZ2h0WzFdWzBdKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIGlmIGl0J3MgYW4gb2JqZWN0IHRoZW4gaXQgc2hvdWxkIGhhdmUgYSBjdXN0b20gaHlwZXJsaW5rXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaHJlZiA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0LmxpbmsuYWJzb2x1dGUpIHtcclxuICAgICAgICAgICAgICAvLyBwYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSBiYXNlVXJsXHJcbiAgICAgICAgICAgICAgaHJlZiA9IGAke2hpZ2hsaWdodC5saW5rLmFic29sdXRlfWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGlnaGxpZ2h0LmxpbmsucmVsYXRpdmUpIHtcclxuICAgICAgICAgICAgICAvLyBwYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSBpdGVtLXByZXZpZXcgdXJsXHJcbiAgICAgICAgICAgICAgaHJlZiA9IGAke2l0ZW0ubGlua30ke2hpZ2hsaWdodC5saW5rfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGlnaGxpZ2h0R3JvdXAuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IGhpZ2hsaWdodC5sYWJlbCA/IF90KGhpZ2hsaWdodC5sYWJlbCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGhpZ2hsaWdodC50ZXh0ID8/ICcnLFxyXG4gICAgICAgICAgICAgIGhyZWYsIC8vIGN1c3RvbSBoeXBlcmxpbmtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGlnaGxpZ2h0cy5wdXNoKGhpZ2hsaWdodEdyb3VwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGFuY2hvciA9IG51bGw7XHJcbiAgICAgIGlmIChpdGVtLmxpbmspIHtcclxuICAgICAgICBhbmNob3IgPSB7XHJcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaXRlbS5saW5rKSxcclxuICAgICAgICAgIHRhcmdldDogJ19ibGFuaydcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLnBheWxvYWQpIHtcclxuICAgICAgICBhbmNob3IgPSB7XHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIC4uLml0ZW0ucGF5bG9hZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICBtZXRhZGF0YSxcclxuICAgICAgICBhbmNob3IsXHJcbiAgICAgICAgaGlnaGxpZ2h0cyxcclxuICAgICAgICBjbGFzc2VzOiBpdGVtUHJldmlld09wdGlvbnMuY2xhc3NlcyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=