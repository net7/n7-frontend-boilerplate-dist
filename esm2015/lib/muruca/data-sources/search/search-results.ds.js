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
                    var _a;
                    // if the item is an array interpret it as [label, [value]]
                    if (Array.isArray(highlight)) {
                        highlightGroup.items.push({
                            label: _t(highlight[0]),
                            value: _t(highlight[1][0])
                        });
                        // if it's an object then it should have a custom hyperlink
                    }
                    else {
                        let href = '';
                        if (highlight.link.absolute) {
                            // path is relative to the baseUrl
                            href = `${highlight.link.absolute}`;
                        }
                        else if (highlight.link.relative) {
                            // path is relative to the item-preview url
                            href = `${item.link}${highlight.link}`;
                        }
                        highlightGroup.items.push({
                            label: highlight.label ? _t(highlight.label) : undefined,
                            value: (_a = highlight.text) !== null && _a !== void 0 ? _a : '',
                            href,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXJlc3VsdHMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLFdBQVcsTUFBTSw0QkFBNEIsQ0FBQztBQUVyRCxNQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQW9DRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsVUFBVTtJQUNyQyxTQUFTLENBQUMsSUFBc0I7UUFDeEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN6QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDNUMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ2pDLFlBQVk7Z0JBQ1osSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFDO2dCQUNE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TUFBTSxHQUFHO29CQUNQLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzFDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ2xELE1BQU0sRUFBRSxRQUFRO2lCQUNqQixDQUFDO2FBQ0g7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU0sR0FBRztvQkFDUCxPQUFPLG9CQUNGLElBQUksQ0FBQyxPQUFPLENBQ2hCO2lCQUNGLENBQUM7YUFDSDtZQUVELHVDQUNLLElBQUksS0FDUCxRQUFRO2dCQUNSLE1BQU07Z0JBQ04sVUFBVSxFQUNWLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLElBQ25DO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtUHJldmlld0RhdGEsIE1ldGFkYXRhR3JvdXAgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IG1lcmdlLCBjbG9uZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xuXG5jb25zdCBJVEVNX1BSRVZJRVdfREVGQVVMVFMgPSB7XG4gIGxpbWl0OiAxMDAsXG4gIHN0cmlwdGFnczogdHJ1ZVxufTtcblxudHlwZSBNclNlYXJjaFJlc3BvbnNlID0ge1xuICBsaW1pdDogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgcmVzdWx0czogTXJTZWFyY2hSZXN1bHRbXTtcbiAgc29ydDogc3RyaW5nO1xuICB0b3RhbF9jb3VudDogbnVtYmVyO1xufVxuXG50eXBlIEhpZ2hsaWdodEl0ZW0gPSBbc3RyaW5nLCBbc3RyaW5nXV0gfCB7XG4gIGxpbms/OiB7XG4gICAgLyoqIGZyb20gdGhlIGJhc2VVcmwgb2YgdGhlIGFwcGxpY2F0aW9uICovXG4gICAgYWJzb2x1dGU6IHN0cmluZztcbiAgICAvKiogcGF0aCByZWxhdGl2ZSB0byB0aGUgaXRlbSBwcmV2aWV3IHVybCAqL1xuICAgIHJlbGF0aXZlOiBzdHJpbmc7XG4gIH07XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgTXJTZWFyY2hSZXN1bHQgZXh0ZW5kcyBJdGVtUHJldmlld0RhdGEge1xuICAvKiogdW5pcXVlIGlkIGZvciB0aGUgc2VhcmNoIHJlc3VsdCBlbnRyeSAqL1xuICBpZDogbnVtYmVyO1xuICAvKiogcmVsYXRpdmUgcGF0aCAqL1xuICBsaW5rPzogc3RyaW5nO1xuICAvKiogaXRlbXMgdGhhdCBtYXRjaGVkIHRoZSBzZWFyY2ggaW5wdXQgKi9cbiAgaGlnaGxpZ2h0cz86IEhpZ2hsaWdodEl0ZW1bXTtcbiAgLyoqIHBheWxvYWQgZm9yIGl0ZW0gYW5jaG9yICovXG4gIHBheWxvYWQ/OiB7XG4gICAgYWN0aW9uOiBzdHJpbmc7XG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcjtcbiAgICB0eXBlOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFJlc3VsdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IE1yU2VhcmNoUmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGRhdGE7XG4gICAgY29uc3QgeyBpdGVtUHJldmlldyB9ID0gdGhpcy5vcHRpb25zLmNvbmZpZztcbiAgICBjb25zdCBpdGVtUHJldmlld09wdGlvbnMgPSBtZXJnZShjbG9uZShJVEVNX1BSRVZJRVdfREVGQVVMVFMpLCAoaXRlbVByZXZpZXcgfHwge30pKTtcblxuICAgIHJldHVybiByZXN1bHRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLnRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIHN0cmlwdGFnc1xuICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLnN0cmlwdGFncykge1xuICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGltaXRcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoaXRlbS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcbiAgICAgICAgICBpdGVtLnRleHQgPSBgJHtpdGVtLnRleHQuc3Vic3RyaW5nKDAsIGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCl9Li4uYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbWV0YWRhdGFcbiAgICAgIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YUdyb3VwW10gPSBbXTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0ubWV0YWRhdGEpKSB7XG4gICAgICAgIGl0ZW0ubWV0YWRhdGEuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuICAgICAgICAgIChncm91cC5pdGVtcyB8fCBbXSkuZm9yRWFjaCgobWV0YWRhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgLi4ubWV0YWRhdGFJdGVtLFxuICAgICAgICAgICAgICBsYWJlbDogX3QobWV0YWRhdGFJdGVtLmxhYmVsKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGl0ZW1zIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICAgQWRkIHRoZSBoaWdobGlnaHRzIHRvIHRoZSBpdGVtJ3MgbWV0YWRhdGEgd2l0aCBhIGN1c3RvbSBncm91cFxuICAgICAgKi9cbiAgICAgIGNvbnN0IGhpZ2hsaWdodHMgPSBbXTtcbiAgICAgIGlmIChpdGVtLmhpZ2hsaWdodHMpIHtcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0R3JvdXAgPSB7XG4gICAgICAgICAgdGl0bGU6IF90KCdhZHZhbmNlZHNlYXJjaCNoaWdobGlnaHRzX3RpdGxlJyksXG4gICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIGNsYXNzZXM6ICduNy1pdGVtLXByZXZpZXdfX2hpZ2hsaWdodHMnXG4gICAgICAgIH07XG4gICAgICAgIGl0ZW0uaGlnaGxpZ2h0cy5mb3JFYWNoKChoaWdobGlnaHQ6IEhpZ2hsaWdodEl0ZW0pID0+IHtcbiAgICAgICAgICAvLyBpZiB0aGUgaXRlbSBpcyBhbiBhcnJheSBpbnRlcnByZXQgaXQgYXMgW2xhYmVsLCBbdmFsdWVdXVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhpZ2hsaWdodCkpIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodEdyb3VwLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogX3QoaGlnaGxpZ2h0WzBdKSxcbiAgICAgICAgICAgICAgdmFsdWU6IF90KGhpZ2hsaWdodFsxXVswXSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIGlmIGl0J3MgYW4gb2JqZWN0IHRoZW4gaXQgc2hvdWxkIGhhdmUgYSBjdXN0b20gaHlwZXJsaW5rXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBocmVmID0gJyc7XG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0LmxpbmsuYWJzb2x1dGUpIHtcbiAgICAgICAgICAgICAgLy8gcGF0aCBpcyByZWxhdGl2ZSB0byB0aGUgYmFzZVVybFxuICAgICAgICAgICAgICBocmVmID0gYCR7aGlnaGxpZ2h0LmxpbmsuYWJzb2x1dGV9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGlnaGxpZ2h0LmxpbmsucmVsYXRpdmUpIHtcbiAgICAgICAgICAgICAgLy8gcGF0aCBpcyByZWxhdGl2ZSB0byB0aGUgaXRlbS1wcmV2aWV3IHVybFxuICAgICAgICAgICAgICBocmVmID0gYCR7aXRlbS5saW5rfSR7aGlnaGxpZ2h0Lmxpbmt9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhpZ2hsaWdodEdyb3VwLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogaGlnaGxpZ2h0LmxhYmVsID8gX3QoaGlnaGxpZ2h0LmxhYmVsKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgdmFsdWU6IGhpZ2hsaWdodC50ZXh0ID8/ICcnLFxuICAgICAgICAgICAgICBocmVmLCAvLyBjdXN0b20gaHlwZXJsaW5rXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBoaWdobGlnaHRzLnB1c2goaGlnaGxpZ2h0R3JvdXApO1xuICAgICAgfVxuXG4gICAgICBsZXQgYW5jaG9yID0gbnVsbDtcbiAgICAgIGlmIChpdGVtLmxpbmspIHtcbiAgICAgICAgYW5jaG9yID0ge1xuICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsoaXRlbS5saW5rKSxcbiAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaXRlbS5saW5rKSxcbiAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5wYXlsb2FkKSB7XG4gICAgICAgIGFuY2hvciA9IHtcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAuLi5pdGVtLnBheWxvYWRcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLml0ZW0sXG4gICAgICAgIG1ldGFkYXRhLFxuICAgICAgICBhbmNob3IsXG4gICAgICAgIGhpZ2hsaWdodHMsXG4gICAgICAgIGNsYXNzZXM6IGl0ZW1QcmV2aWV3T3B0aW9ucy5jbGFzc2VzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19