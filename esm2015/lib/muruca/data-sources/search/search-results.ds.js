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
                metadata.push(highlightGroup);
            }
            return Object.assign(Object.assign({}, item), { metadata, classes: itemPreviewOptions.classes, anchor: item.link ? {
                    href: linksHelper.getRouterLink(item.link),
                    queryParams: linksHelper.getQueryParams(item.link),
                    target: '_blank'
                } : undefined });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLFdBQVcsTUFBTSw0QkFBNEIsQ0FBQztBQUVyRCxNQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQXFCRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUNyQyxTQUFTLENBQUMsSUFBc0I7UUFDeEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDNUMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ2pDLFlBQVk7Z0JBQ1osSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFDO2dCQUNE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c0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBNZXRhZGF0YUdyb3VwIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgY2xvbmUgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcblxuY29uc3QgSVRFTV9QUkVWSUVXX0RFRkFVTFRTID0ge1xuICBsaW1pdDogMTAwLFxuICBzdHJpcHRhZ3M6IHRydWVcbn07XG5cbnR5cGUgTXJTZWFyY2hSZXNwb25zZSA9IHtcbiAgbGltaXQ6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHJlc3VsdHM6IE1yU2VhcmNoUmVzdWx0W107XG4gIHNvcnQ6IHN0cmluZztcbiAgdG90YWxfY291bnQ6IG51bWJlcjtcbn1cblxudHlwZSBIaWdobGlnaHRJdGVtID0gW3N0cmluZywgW3N0cmluZ11dIHwgeyBsaW5rPzogc3RyaW5nOyB0ZXh0Pzogc3RyaW5nOyBsYWJlbD86IHN0cmluZyB9XG5cbmludGVyZmFjZSBNclNlYXJjaFJlc3VsdCBleHRlbmRzIEl0ZW1QcmV2aWV3RGF0YSB7XG4gIC8qKiByZWxhdGl2ZSBwYXRoICovXG4gIGxpbms6IHN0cmluZztcbiAgLyoqIGl0ZW1zIHRoYXQgbWF0Y2hlZCB0aGUgc2VhcmNoIGlucHV0ICovXG4gIGhpZ2hsaWdodHM/OiBIaWdobGlnaHRJdGVtW107XG4gIC8qKiB1bmlxdWUgaWQgZm9yIHRoZSBzZWFyY2ggcmVzdWx0IGVudHJ5ICovXG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFJlc3VsdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IE1yU2VhcmNoUmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGRhdGE7XG4gICAgY29uc3QgeyBpdGVtUHJldmlldyB9ID0gdGhpcy5vcHRpb25zLmNvbmZpZztcbiAgICBjb25zdCBpdGVtUHJldmlld09wdGlvbnMgPSBtZXJnZShjbG9uZShJVEVNX1BSRVZJRVdfREVGQVVMVFMpLCAoaXRlbVByZXZpZXcgfHwge30pKTtcblxuICAgIHJldHVybiByZXN1bHRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLnRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIHN0cmlwdGFnc1xuICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLnN0cmlwdGFncykge1xuICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGltaXRcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoaXRlbS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcbiAgICAgICAgICBpdGVtLnRleHQgPSBgJHtpdGVtLnRleHQuc3Vic3RyaW5nKDAsIGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCl9Li4uYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbWV0YWRhdGFcbiAgICAgIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YUdyb3VwW10gPSBbXTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0ubWV0YWRhdGEpKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICAgIChncm91cC5pdGVtcyB8fCBbXSkuZm9yRWFjaCgobWV0YWRhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgLi4ubWV0YWRhdGFJdGVtLFxuICAgICAgICAgICAgICBsYWJlbDogX3QobWV0YWRhdGFJdGVtLmxhYmVsKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGl0ZW1zIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICAgQWRkIHRoZSBoaWdobGlnaHRzIHRvIHRoZSBpdGVtJ3MgbWV0YWRhdGEgd2l0aCBhIGN1c3RvbSBncm91cFxuICAgICAgKi9cbiAgICAgIGlmIChpdGVtLmhpZ2hsaWdodHMpIHtcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0R3JvdXAgPSB7XG4gICAgICAgICAgdGl0bGU6IF90KCdhZHZhbmNlZHNlYXJjaCNoaWdobGlnaHRzX3RpdGxlJyksXG4gICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIGNsYXNzZXM6ICduNy1pdGVtLXByZXZpZXdfX2hpZ2hsaWdodHMnXG4gICAgICAgIH07XG4gICAgICAgIGl0ZW0uaGlnaGxpZ2h0cy5mb3JFYWNoKChoaWdobGlnaHQ6IEhpZ2hsaWdodEl0ZW0pID0+IHtcbiAgICAgICAgICAvLyBpZiB0aGUgaXRlbSBpcyBhbiBhcnJheSBpbnRlcnByZXQgaXQgYXMgW2xhYmVsLCBbdmFsdWVdXVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhpZ2hsaWdodCkpIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodEdyb3VwLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogX3QoaGlnaGxpZ2h0WzBdKSxcbiAgICAgICAgICAgICAgdmFsdWU6IF90KGhpZ2hsaWdodFsxXVswXSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIGlmIGl0J3MgYW4gb2JqZWN0IHRoZW4gaXQgc2hvdWxkIGhhdmUgYSBjdXN0b20gaHlwZXJsaW5rXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodEdyb3VwLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogaGlnaGxpZ2h0LmxhYmVsID8gX3QoaGlnaGxpZ2h0LmxhYmVsKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgdmFsdWU6IGhpZ2hsaWdodC50ZXh0ID8/ICcnLFxuICAgICAgICAgICAgICBocmVmOiBgJHtpdGVtLmxpbmt9JHtoaWdobGlnaHQubGlua31gID8/IHVuZGVmaW5lZCwgLy8gY3VzdG9tIGh5cGVybGlua1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbWV0YWRhdGEucHVzaChoaWdobGlnaHRHcm91cCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLml0ZW0sXG4gICAgICAgIG1ldGFkYXRhLFxuICAgICAgICBjbGFzc2VzOiBpdGVtUHJldmlld09wdGlvbnMuY2xhc3NlcyxcbiAgICAgICAgYW5jaG9yOiBpdGVtLmxpbmsgPyB7XG4gICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhpdGVtLmxpbmspLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhpdGVtLmxpbmspLFxuICAgICAgICAgIHRhcmdldDogJ19ibGFuaydcbiAgICAgICAgfSA6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19