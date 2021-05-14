import { DataSource, _t } from '@n7-frontend/core';
import { merge, clone } from 'lodash';
import helpers from '../../../common/helpers';
import linksHelper from '../../helpers/links-helper';
const ITEM_PREVIEW_DEFAULTS = {
    limit: 100,
    striptags: true
};
export class MrSearchResultsDS extends DataSource {
    transform(data) {
        const { results } = data;
        const { itemPreview } = this.options.config;
        const itemPreviewOptions = merge(clone(ITEM_PREVIEW_DEFAULTS), (itemPreview || {}));
        return results.map((item) => {
            if (typeof item.text === 'string') {
                // striptags
                if (itemPreviewOptions.striptags) {
                    item.text = helpers.striptags(item.text);
                }
                // limit
                if (itemPreviewOptions.limit && (item.text.length > itemPreviewOptions.limit)) {
                    item.text = `${item.text.substring(0, itemPreviewOptions.limit)}...`;
                }
            }
            // metadata
            const metadata = [];
            if (Array.isArray(item.metadata)) {
                item.metadata.forEach((group) => {
                    const items = [];
                    (group.items || []).forEach((metadataItem) => {
                        items.push(Object.assign(Object.assign({}, metadataItem), { label: _t(metadataItem.label) }));
                    });
                    metadata.push({ items });
                });
            }
            /*
              Add the highlights to the item's metadata with a custom group
            */
            const highlights = [];
            if (item.highlights) {
                const highlightGroup = {
                    title: _t('advancedsearch#highlights_title'),
                    items: [],
                    classes: 'n7-item-preview__highlights'
                };
                item.highlights.forEach((highlight) => {
                    var _a, _b;
                    // if the item is an array interpret it as [label, [value]]
                    if (Array.isArray(highlight)) {
                        highlightGroup.items.push({
                            label: _t(highlight[0]),
                            value: _t(highlight[1][0])
                        });
                        // if it's an object then it should have a custom hyperlink
                    }
                    else {
                        highlightGroup.items.push({
                            label: highlight.label ? _t(highlight.label) : undefined,
                            value: (_a = highlight.text) !== null && _a !== void 0 ? _a : '',
                            href: (_b = `${item.link}${highlight.link}`) !== null && _b !== void 0 ? _b : undefined,
                        });
                    }
                });
                highlights.push(highlightGroup);
            }
            return Object.assign(Object.assign({}, item), { metadata,
                highlights, classes: itemPreviewOptions.classes, anchor: item.link ? {
                    href: linksHelper.getRouterLink(item.link),
                    queryParams: linksHelper.getQueryParams(item.link),
                    target: '_blank'
                } : undefined });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLFdBQVcsTUFBTSw0QkFBNEIsQ0FBQztBQUVyRCxNQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQXFCRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUNyQyxTQUFTLENBQUMsSUFBc0I7UUFDeEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDNUMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ2pDLFlBQVk7Z0JBQ1osSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFDO2dCQUNE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QUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBNZXRhZGF0YUdyb3VwIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UsIGNsb25lIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xyXG5cclxuY29uc3QgSVRFTV9QUkVWSUVXX0RFRkFVTFRTID0ge1xyXG4gIGxpbWl0OiAxMDAsXHJcbiAgc3RyaXB0YWdzOiB0cnVlXHJcbn07XHJcblxyXG50eXBlIE1yU2VhcmNoUmVzcG9uc2UgPSB7XHJcbiAgbGltaXQ6IG51bWJlcjtcclxuICBvZmZzZXQ6IG51bWJlcjtcclxuICByZXN1bHRzOiBNclNlYXJjaFJlc3VsdFtdO1xyXG4gIHNvcnQ6IHN0cmluZztcclxuICB0b3RhbF9jb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIEhpZ2hsaWdodEl0ZW0gPSBbc3RyaW5nLCBbc3RyaW5nXV0gfCB7IGxpbms/OiBzdHJpbmc7IHRleHQ/OiBzdHJpbmc7IGxhYmVsPzogc3RyaW5nIH1cclxuXHJcbmludGVyZmFjZSBNclNlYXJjaFJlc3VsdCBleHRlbmRzIEl0ZW1QcmV2aWV3RGF0YSB7XHJcbiAgLyoqIHJlbGF0aXZlIHBhdGggKi9cclxuICBsaW5rOiBzdHJpbmc7XHJcbiAgLyoqIGl0ZW1zIHRoYXQgbWF0Y2hlZCB0aGUgc2VhcmNoIGlucHV0ICovXHJcbiAgaGlnaGxpZ2h0cz86IEhpZ2hsaWdodEl0ZW1bXTtcclxuICAvKiogdW5pcXVlIGlkIGZvciB0aGUgc2VhcmNoIHJlc3VsdCBlbnRyeSAqL1xyXG4gIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFJlc3VsdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogTXJTZWFyY2hSZXNwb25zZSkge1xyXG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyBpdGVtUHJldmlldyB9ID0gdGhpcy5vcHRpb25zLmNvbmZpZztcclxuICAgIGNvbnN0IGl0ZW1QcmV2aWV3T3B0aW9ucyA9IG1lcmdlKGNsb25lKElURU1fUFJFVklFV19ERUZBVUxUUyksIChpdGVtUHJldmlldyB8fCB7fSkpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHRzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0udGV4dCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBzdHJpcHRhZ3NcclxuICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLnN0cmlwdGFncykge1xyXG4gICAgICAgICAgaXRlbS50ZXh0ID0gaGVscGVycy5zdHJpcHRhZ3MoaXRlbS50ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGltaXRcclxuICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0ICYmIChpdGVtLnRleHQubGVuZ3RoID4gaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KSkge1xyXG4gICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIG1ldGFkYXRhXHJcbiAgICAgIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YUdyb3VwW10gPSBbXTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5tZXRhZGF0YSkpIHtcclxuICAgICAgICBpdGVtLm1ldGFkYXRhLmZvckVhY2goKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgICAgKGdyb3VwLml0ZW1zIHx8IFtdKS5mb3JFYWNoKChtZXRhZGF0YUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgLi4ubWV0YWRhdGFJdGVtLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBfdChtZXRhZGF0YUl0ZW0ubGFiZWwpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsgaXRlbXMgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qXHJcbiAgICAgICAgQWRkIHRoZSBoaWdobGlnaHRzIHRvIHRoZSBpdGVtJ3MgbWV0YWRhdGEgd2l0aCBhIGN1c3RvbSBncm91cFxyXG4gICAgICAqL1xyXG4gICAgICBjb25zdCBoaWdobGlnaHRzID0gW107XHJcbiAgICAgIGlmIChpdGVtLmhpZ2hsaWdodHMpIHtcclxuICAgICAgICBjb25zdCBoaWdobGlnaHRHcm91cCA9IHtcclxuICAgICAgICAgIHRpdGxlOiBfdCgnYWR2YW5jZWRzZWFyY2gjaGlnaGxpZ2h0c190aXRsZScpLFxyXG4gICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgY2xhc3NlczogJ243LWl0ZW0tcHJldmlld19faGlnaGxpZ2h0cydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGl0ZW0uaGlnaGxpZ2h0cy5mb3JFYWNoKChoaWdobGlnaHQ6IEhpZ2hsaWdodEl0ZW0pID0+IHtcclxuICAgICAgICAgIC8vIGlmIHRoZSBpdGVtIGlzIGFuIGFycmF5IGludGVycHJldCBpdCBhcyBbbGFiZWwsIFt2YWx1ZV1dXHJcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWdobGlnaHQpKSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEdyb3VwLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBfdChoaWdobGlnaHRbMF0pLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBfdChoaWdobGlnaHRbMV1bMF0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gaWYgaXQncyBhbiBvYmplY3QgdGhlbiBpdCBzaG91bGQgaGF2ZSBhIGN1c3RvbSBoeXBlcmxpbmtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEdyb3VwLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBoaWdobGlnaHQubGFiZWwgPyBfdChoaWdobGlnaHQubGFiZWwpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBoaWdobGlnaHQudGV4dCA/PyAnJyxcclxuICAgICAgICAgICAgICBocmVmOiBgJHtpdGVtLmxpbmt9JHtoaWdobGlnaHQubGlua31gID8/IHVuZGVmaW5lZCwgLy8gY3VzdG9tIGh5cGVybGlua1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBoaWdobGlnaHRzLnB1c2goaGlnaGxpZ2h0R3JvdXApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgbWV0YWRhdGEsXHJcbiAgICAgICAgaGlnaGxpZ2h0cyxcclxuICAgICAgICBjbGFzc2VzOiBpdGVtUHJldmlld09wdGlvbnMuY2xhc3NlcyxcclxuICAgICAgICBhbmNob3I6IGl0ZW0ubGluayA/IHtcclxuICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsoaXRlbS5saW5rKSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhpdGVtLmxpbmspLFxyXG4gICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICAgIH0gOiB1bmRlZmluZWRcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=