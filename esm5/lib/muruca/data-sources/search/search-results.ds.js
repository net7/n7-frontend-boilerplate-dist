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
            if (item.highlights) {
                var highlightGroup_1 = {
                    title: _t('advancedsearch#highlights_title'),
                    items: [],
                    classes: 'n7-item-preview__highlights'
                };
                item.highlights.forEach(function (highlight) {
                    var _a, _b;
                    // if the item is an array interpret it as [label, [value]]
                    if (Array.isArray(highlight)) {
                        highlightGroup_1.items.push({
                            label: _t(highlight[0]),
                            value: _t(highlight[1][0])
                        });
                        // if it's an object then it should have a custom hyperlink
                    }
                    else {
                        highlightGroup_1.items.push({
                            label: highlight.label ? _t(highlight.label) : undefined,
                            value: (_a = highlight.text) !== null && _a !== void 0 ? _a : '',
                            href: (_b = "" + item.link + highlight.link) !== null && _b !== void 0 ? _b : undefined,
                        });
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUM7QUFFckQsSUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFxQkY7SUFBdUMscUNBQVU7SUFBakQ7O0lBd0VBLENBQUM7SUF2RVcscUNBQVMsR0FBbkIsVUFBb0IsSUFBc0I7UUFDaEMsSUFBQSxzQkFBTyxDQUFVO1FBQ2pCLElBQUEsNkNBQVcsQ0FBeUI7UUFDNUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ3RCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsWUFBWTtnQkFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Z0JBQ0QsUUFBUTtnQkFDUixJQUFJLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJ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YWRhdGFHcm91cCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIGNsb25lIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi8uLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XG5cbmNvbnN0IElURU1fUFJFVklFV19ERUZBVUxUUyA9IHtcbiAgbGltaXQ6IDEwMCxcbiAgc3RyaXB0YWdzOiB0cnVlXG59O1xuXG50eXBlIE1yU2VhcmNoUmVzcG9uc2UgPSB7XG4gIGxpbWl0OiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xuICByZXN1bHRzOiBNclNlYXJjaFJlc3VsdFtdO1xuICBzb3J0OiBzdHJpbmc7XG4gIHRvdGFsX2NvdW50OiBudW1iZXI7XG59XG5cbnR5cGUgSGlnaGxpZ2h0SXRlbSA9IFtzdHJpbmcsIFtzdHJpbmddXSB8IHsgbGluaz86IHN0cmluZzsgdGV4dD86IHN0cmluZzsgbGFiZWw/OiBzdHJpbmcgfVxuXG5pbnRlcmZhY2UgTXJTZWFyY2hSZXN1bHQgZXh0ZW5kcyBJdGVtUHJldmlld0RhdGEge1xuICAvKiogcmVsYXRpdmUgcGF0aCAqL1xuICBsaW5rOiBzdHJpbmc7XG4gIC8qKiBpdGVtcyB0aGF0IG1hdGNoZWQgdGhlIHNlYXJjaCBpbnB1dCAqL1xuICBoaWdobGlnaHRzPzogSGlnaGxpZ2h0SXRlbVtdO1xuICAvKiogdW5pcXVlIGlkIGZvciB0aGUgc2VhcmNoIHJlc3VsdCBlbnRyeSAqL1xuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBNclNlYXJjaFJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XG4gICAgY29uc3QgaXRlbVByZXZpZXdPcHRpb25zID0gbWVyZ2UoY2xvbmUoSVRFTV9QUkVWSUVXX0RFRkFVTFRTKSwgKGl0ZW1QcmV2aWV3IHx8IHt9KSk7XG5cbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS50ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBzdHJpcHRhZ3NcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcbiAgICAgICAgICBpdGVtLnRleHQgPSBoZWxwZXJzLnN0cmlwdGFncyhpdGVtLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxpbWl0XG4gICAgICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMubGltaXQgJiYgKGl0ZW0udGV4dC5sZW5ndGggPiBpdGVtUHJldmlld09wdGlvbnMubGltaXQpKSB7XG4gICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIG1ldGFkYXRhXG4gICAgICBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGFHcm91cFtdID0gW107XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLm1ldGFkYXRhKSkge1xuICAgICAgICBpdGVtLm1ldGFkYXRhLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgICAoZ3JvdXAuaXRlbXMgfHwgW10pLmZvckVhY2goKG1ldGFkYXRhSXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgIC4uLm1ldGFkYXRhSXRlbSxcbiAgICAgICAgICAgICAgbGFiZWw6IF90KG1ldGFkYXRhSXRlbS5sYWJlbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1ldGFkYXRhLnB1c2goeyBpdGVtcyB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgIEFkZCB0aGUgaGlnaGxpZ2h0cyB0byB0aGUgaXRlbSdzIG1ldGFkYXRhIHdpdGggYSBjdXN0b20gZ3JvdXBcbiAgICAgICovXG4gICAgICBpZiAoaXRlbS5oaWdobGlnaHRzKSB7XG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodEdyb3VwID0ge1xuICAgICAgICAgIHRpdGxlOiBfdCgnYWR2YW5jZWRzZWFyY2gjaGlnaGxpZ2h0c190aXRsZScpLFxuICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICBjbGFzc2VzOiAnbjctaXRlbS1wcmV2aWV3X19oaWdobGlnaHRzJ1xuICAgICAgICB9O1xuICAgICAgICBpdGVtLmhpZ2hsaWdodHMuZm9yRWFjaCgoaGlnaGxpZ2h0OiBIaWdobGlnaHRJdGVtKSA9PiB7XG4gICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gaXMgYW4gYXJyYXkgaW50ZXJwcmV0IGl0IGFzIFtsYWJlbCwgW3ZhbHVlXV1cbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWdobGlnaHQpKSB7XG4gICAgICAgICAgICBoaWdobGlnaHRHcm91cC5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IF90KGhpZ2hsaWdodFswXSksXG4gICAgICAgICAgICAgIHZhbHVlOiBfdChoaWdobGlnaHRbMV1bMF0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBpZiBpdCdzIGFuIG9iamVjdCB0aGVuIGl0IHNob3VsZCBoYXZlIGEgY3VzdG9tIGh5cGVybGlua1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaWdobGlnaHRHcm91cC5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IGhpZ2hsaWdodC5sYWJlbCA/IF90KGhpZ2hsaWdodC5sYWJlbCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHZhbHVlOiBoaWdobGlnaHQudGV4dCA/PyAnJyxcbiAgICAgICAgICAgICAgaHJlZjogYCR7aXRlbS5saW5rfSR7aGlnaGxpZ2h0Lmxpbmt9YCA/PyB1bmRlZmluZWQsIC8vIGN1c3RvbSBoeXBlcmxpbmtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1ldGFkYXRhLnB1c2goaGlnaGxpZ2h0R3JvdXApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgY2xhc3NlczogaXRlbVByZXZpZXdPcHRpb25zLmNsYXNzZXMsXG4gICAgICAgIGFuY2hvcjogaXRlbS5saW5rID8ge1xuICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsoaXRlbS5saW5rKSxcbiAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaXRlbS5saW5rKSxcbiAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICAgIH0gOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==