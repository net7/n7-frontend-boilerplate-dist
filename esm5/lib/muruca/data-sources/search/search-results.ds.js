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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDdEMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxXQUFXLE1BQU0sNEJBQTRCLENBQUM7QUFFckQsSUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFxQkY7SUFBdUMscUNBQVU7SUFBakQ7O0lBd0VBLENBQUM7SUF2RVcscUNBQVMsR0FBbkIsVUFBb0IsSUFBc0I7UUFDaEMsSUFBQSxzQkFBTyxDQUFVO1FBQ2pCLElBQUEsNkNBQVcsQ0FBeUI7UUFDNUMsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO1lBQ3RCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsWUFBWTtnQkFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Z0JBQ0QsUUFBUTtnQkFDUixJQUFJLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJ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YWRhdGFHcm91cCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlLCBjbG9uZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcclxuXHJcbmNvbnN0IElURU1fUFJFVklFV19ERUZBVUxUUyA9IHtcclxuICBsaW1pdDogMTAwLFxyXG4gIHN0cmlwdGFnczogdHJ1ZVxyXG59O1xyXG5cclxudHlwZSBNclNlYXJjaFJlc3BvbnNlID0ge1xyXG4gIGxpbWl0OiBudW1iZXI7XHJcbiAgb2Zmc2V0OiBudW1iZXI7XHJcbiAgcmVzdWx0czogTXJTZWFyY2hSZXN1bHRbXTtcclxuICBzb3J0OiBzdHJpbmc7XHJcbiAgdG90YWxfY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBIaWdobGlnaHRJdGVtID0gW3N0cmluZywgW3N0cmluZ11dIHwgeyBsaW5rPzogc3RyaW5nOyB0ZXh0Pzogc3RyaW5nOyBsYWJlbD86IHN0cmluZyB9XHJcblxyXG5pbnRlcmZhY2UgTXJTZWFyY2hSZXN1bHQgZXh0ZW5kcyBJdGVtUHJldmlld0RhdGEge1xyXG4gIC8qKiByZWxhdGl2ZSBwYXRoICovXHJcbiAgbGluazogc3RyaW5nO1xyXG4gIC8qKiBpdGVtcyB0aGF0IG1hdGNoZWQgdGhlIHNlYXJjaCBpbnB1dCAqL1xyXG4gIGhpZ2hsaWdodHM/OiBIaWdobGlnaHRJdGVtW107XHJcbiAgLyoqIHVuaXF1ZSBpZCBmb3IgdGhlIHNlYXJjaCByZXN1bHQgZW50cnkgKi9cclxuICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IE1yU2VhcmNoUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHsgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XHJcbiAgICBjb25zdCBpdGVtUHJldmlld09wdGlvbnMgPSBtZXJnZShjbG9uZShJVEVNX1BSRVZJRVdfREVGQVVMVFMpLCAoaXRlbVByZXZpZXcgfHwge30pKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBpdGVtLnRleHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8gc3RyaXB0YWdzXHJcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcclxuICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxpbWl0XHJcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoaXRlbS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcclxuICAgICAgICAgIGl0ZW0udGV4dCA9IGAke2l0ZW0udGV4dC5zdWJzdHJpbmcoMCwgaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KX0uLi5gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBtZXRhZGF0YVxyXG4gICAgICBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGFHcm91cFtdID0gW107XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0ubWV0YWRhdGEpKSB7XHJcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgICAgICAgIChncm91cC5pdGVtcyB8fCBbXSkuZm9yRWFjaCgobWV0YWRhdGFJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIC4uLm1ldGFkYXRhSXRlbSxcclxuICAgICAgICAgICAgICBsYWJlbDogX3QobWV0YWRhdGFJdGVtLmxhYmVsKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGl0ZW1zIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgIEFkZCB0aGUgaGlnaGxpZ2h0cyB0byB0aGUgaXRlbSdzIG1ldGFkYXRhIHdpdGggYSBjdXN0b20gZ3JvdXBcclxuICAgICAgKi9cclxuICAgICAgaWYgKGl0ZW0uaGlnaGxpZ2h0cykge1xyXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodEdyb3VwID0ge1xyXG4gICAgICAgICAgdGl0bGU6IF90KCdhZHZhbmNlZHNlYXJjaCNoaWdobGlnaHRzX3RpdGxlJyksXHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICBjbGFzc2VzOiAnbjctaXRlbS1wcmV2aWV3X19oaWdobGlnaHRzJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXRlbS5oaWdobGlnaHRzLmZvckVhY2goKGhpZ2hsaWdodDogSGlnaGxpZ2h0SXRlbSkgPT4ge1xyXG4gICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gaXMgYW4gYXJyYXkgaW50ZXJwcmV0IGl0IGFzIFtsYWJlbCwgW3ZhbHVlXV1cclxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhpZ2hsaWdodCkpIHtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0R3JvdXAuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IF90KGhpZ2hsaWdodFswXSksXHJcbiAgICAgICAgICAgICAgdmFsdWU6IF90KGhpZ2hsaWdodFsxXVswXSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyBpZiBpdCdzIGFuIG9iamVjdCB0aGVuIGl0IHNob3VsZCBoYXZlIGEgY3VzdG9tIGh5cGVybGlua1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0R3JvdXAuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IGhpZ2hsaWdodC5sYWJlbCA/IF90KGhpZ2hsaWdodC5sYWJlbCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGhpZ2hsaWdodC50ZXh0ID8/ICcnLFxyXG4gICAgICAgICAgICAgIGhyZWY6IGAke2l0ZW0ubGlua30ke2hpZ2hsaWdodC5saW5rfWAgPz8gdW5kZWZpbmVkLCAvLyBjdXN0b20gaHlwZXJsaW5rXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1ldGFkYXRhLnB1c2goaGlnaGxpZ2h0R3JvdXApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgbWV0YWRhdGEsXHJcbiAgICAgICAgY2xhc3NlczogaXRlbVByZXZpZXdPcHRpb25zLmNsYXNzZXMsXHJcbiAgICAgICAgYW5jaG9yOiBpdGVtLmxpbmsgPyB7XHJcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaXRlbS5saW5rKSxcclxuICAgICAgICAgIHRhcmdldDogJ19ibGFuaydcclxuICAgICAgICB9IDogdW5kZWZpbmVkXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19