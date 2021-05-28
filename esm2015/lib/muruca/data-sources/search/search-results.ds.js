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
            let anchor = null;
            if (item.link) {
                anchor = {
                    href: linksHelper.getRouterLink(item.link),
                    queryParams: linksHelper.getQueryParams(item.link),
                    target: '_blank'
                };
            }
            if (item.payload) {
                anchor = {
                    payload: Object.assign({}, item.payload)
                };
            }
            return Object.assign(Object.assign({}, item), { metadata,
                anchor,
                highlights, classes: itemPreviewOptions.classes });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLFdBQVcsTUFBTSw0QkFBNEIsQ0FBQztBQUVyRCxNQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQTJCRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUNyQyxTQUFTLENBQUMsSUFBc0I7UUFDeEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDNUMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ2pDLFlBQVk7Z0JBQ1osSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFDO2dCQUNE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QU8sb0JBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FDaEI7aUJBQ0YsQ0FBQzthQUNIO1lBRUQsdUNBQ0ssSUFBSSxLQUNQLFFBQVE7Z0JBQ1IsTUFBTTtnQkFDTixVQUFVLEVBQ1YsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sSUFDbkM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSwgTWV0YWRhdGFHcm91cCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlLCBjbG9uZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcclxuXHJcbmNvbnN0IElURU1fUFJFVklFV19ERUZBVUxUUyA9IHtcclxuICBsaW1pdDogMTAwLFxyXG4gIHN0cmlwdGFnczogdHJ1ZVxyXG59O1xyXG5cclxudHlwZSBNclNlYXJjaFJlc3BvbnNlID0ge1xyXG4gIGxpbWl0OiBudW1iZXI7XHJcbiAgb2Zmc2V0OiBudW1iZXI7XHJcbiAgcmVzdWx0czogTXJTZWFyY2hSZXN1bHRbXTtcclxuICBzb3J0OiBzdHJpbmc7XHJcbiAgdG90YWxfY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBIaWdobGlnaHRJdGVtID0gW3N0cmluZywgW3N0cmluZ11dIHwgeyBsaW5rPzogc3RyaW5nOyB0ZXh0Pzogc3RyaW5nOyBsYWJlbD86IHN0cmluZyB9XHJcblxyXG5pbnRlcmZhY2UgTXJTZWFyY2hSZXN1bHQgZXh0ZW5kcyBJdGVtUHJldmlld0RhdGEge1xyXG4gIC8qKiB1bmlxdWUgaWQgZm9yIHRoZSBzZWFyY2ggcmVzdWx0IGVudHJ5ICovXHJcbiAgaWQ6IG51bWJlcjtcclxuICAvKiogcmVsYXRpdmUgcGF0aCAqL1xyXG4gIGxpbms/OiBzdHJpbmc7XHJcbiAgLyoqIGl0ZW1zIHRoYXQgbWF0Y2hlZCB0aGUgc2VhcmNoIGlucHV0ICovXHJcbiAgaGlnaGxpZ2h0cz86IEhpZ2hsaWdodEl0ZW1bXTtcclxuICAvKiogcGF5bG9hZCBmb3IgaXRlbSBhbmNob3IgKi9cclxuICBwYXlsb2FkPzoge1xyXG4gICAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFJlc3VsdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogTXJTZWFyY2hSZXNwb25zZSkge1xyXG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgeyBpdGVtUHJldmlldyB9ID0gdGhpcy5vcHRpb25zLmNvbmZpZztcclxuICAgIGNvbnN0IGl0ZW1QcmV2aWV3T3B0aW9ucyA9IG1lcmdlKGNsb25lKElURU1fUFJFVklFV19ERUZBVUxUUyksIChpdGVtUHJldmlldyB8fCB7fSkpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHRzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0udGV4dCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAvLyBzdHJpcHRhZ3NcclxuICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLnN0cmlwdGFncykge1xyXG4gICAgICAgICAgaXRlbS50ZXh0ID0gaGVscGVycy5zdHJpcHRhZ3MoaXRlbS50ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGltaXRcclxuICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0ICYmIChpdGVtLnRleHQubGVuZ3RoID4gaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KSkge1xyXG4gICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIG1ldGFkYXRhXHJcbiAgICAgIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YUdyb3VwW10gPSBbXTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5tZXRhZGF0YSkpIHtcclxuICAgICAgICBpdGVtLm1ldGFkYXRhLmZvckVhY2goKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgICAgKGdyb3VwLml0ZW1zIHx8IFtdKS5mb3JFYWNoKChtZXRhZGF0YUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgLi4ubWV0YWRhdGFJdGVtLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBfdChtZXRhZGF0YUl0ZW0ubGFiZWwpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBtZXRhZGF0YS5wdXNoKHsgaXRlbXMgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qXHJcbiAgICAgICAgQWRkIHRoZSBoaWdobGlnaHRzIHRvIHRoZSBpdGVtJ3MgbWV0YWRhdGEgd2l0aCBhIGN1c3RvbSBncm91cFxyXG4gICAgICAqL1xyXG4gICAgICBjb25zdCBoaWdobGlnaHRzID0gW107XHJcbiAgICAgIGlmIChpdGVtLmhpZ2hsaWdodHMpIHtcclxuICAgICAgICBjb25zdCBoaWdobGlnaHRHcm91cCA9IHtcclxuICAgICAgICAgIHRpdGxlOiBfdCgnYWR2YW5jZWRzZWFyY2gjaGlnaGxpZ2h0c190aXRsZScpLFxyXG4gICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgY2xhc3NlczogJ243LWl0ZW0tcHJldmlld19faGlnaGxpZ2h0cydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGl0ZW0uaGlnaGxpZ2h0cy5mb3JFYWNoKChoaWdobGlnaHQ6IEhpZ2hsaWdodEl0ZW0pID0+IHtcclxuICAgICAgICAgIC8vIGlmIHRoZSBpdGVtIGlzIGFuIGFycmF5IGludGVycHJldCBpdCBhcyBbbGFiZWwsIFt2YWx1ZV1dXHJcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWdobGlnaHQpKSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEdyb3VwLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBfdChoaWdobGlnaHRbMF0pLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBfdChoaWdobGlnaHRbMV1bMF0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gaWYgaXQncyBhbiBvYmplY3QgdGhlbiBpdCBzaG91bGQgaGF2ZSBhIGN1c3RvbSBoeXBlcmxpbmtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEdyb3VwLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBoaWdobGlnaHQubGFiZWwgPyBfdChoaWdobGlnaHQubGFiZWwpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBoaWdobGlnaHQudGV4dCA/PyAnJyxcclxuICAgICAgICAgICAgICBocmVmOiBgJHtpdGVtLmxpbmt9JHtoaWdobGlnaHQubGlua31gID8/IHVuZGVmaW5lZCwgLy8gY3VzdG9tIGh5cGVybGlua1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBoaWdobGlnaHRzLnB1c2goaGlnaGxpZ2h0R3JvdXApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgYW5jaG9yID0gbnVsbDtcclxuICAgICAgaWYgKGl0ZW0ubGluaykge1xyXG4gICAgICAgIGFuY2hvciA9IHtcclxuICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsoaXRlbS5saW5rKSxcclxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhpdGVtLmxpbmspLFxyXG4gICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0ucGF5bG9hZCkge1xyXG4gICAgICAgIGFuY2hvciA9IHtcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgLi4uaXRlbS5wYXlsb2FkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgIG1ldGFkYXRhLFxyXG4gICAgICAgIGFuY2hvcixcclxuICAgICAgICBoaWdobGlnaHRzLFxyXG4gICAgICAgIGNsYXNzZXM6IGl0ZW1QcmV2aWV3T3B0aW9ucy5jbGFzc2VzLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==