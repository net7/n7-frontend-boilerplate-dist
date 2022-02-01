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
                        items.push({
                            ...metadataItem,
                            label: _t(metadataItem.label)
                        });
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
                            value: highlight.text ?? '',
                            href, // custom hyperlink
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
                    payload: {
                        ...item.payload
                    }
                };
            }
            return {
                ...item,
                metadata,
                anchor,
                highlights,
                classes: itemPreviewOptions.classes,
            };
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBQzlDLE9BQU8sV0FBVyxNQUFNLDRCQUE0QixDQUFDO0FBRXJELE1BQU0scUJBQXFCLEdBQUc7SUFDNUIsS0FBSyxFQUFFLEdBQUc7SUFDVixTQUFTLEVBQUUsSUFBSTtDQUNoQixDQUFDO0FBb0NGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQ3JDLFNBQVMsQ0FBQyxJQUFzQjtRQUN4QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM1QyxNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXBGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsWUFBWTtnQkFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJ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QUFHLElBQUksQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsTUFBTSxHQUFHO29CQUNQLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzFDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ2xELE1BQU0sRUFBRSxRQUFRO2lCQUNqQixDQUFDO2FBQ0g7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU0sR0FBRztvQkFDUCxPQUFPLEVBQUU7d0JBQ1AsR0FBRyxJQUFJLENBQUMsT0FBTztxQkFDaEI7aUJBQ0YsQ0FBQzthQUNIO1lBRUQsT0FBTztnQkFDTCxHQUFHLElBQUk7Z0JBQ1AsUUFBUTtnQkFDUixNQUFNO2dCQUNOLFVBQVU7Z0JBQ1YsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE9BQU87YUFDcEMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBNZXRhZGF0YUdyb3VwIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSwgY2xvbmUgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uLy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcblxuY29uc3QgSVRFTV9QUkVWSUVXX0RFRkFVTFRTID0ge1xuICBsaW1pdDogMTAwLFxuICBzdHJpcHRhZ3M6IHRydWVcbn07XG5cbnR5cGUgTXJTZWFyY2hSZXNwb25zZSA9IHtcbiAgbGltaXQ6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHJlc3VsdHM6IE1yU2VhcmNoUmVzdWx0W107XG4gIHNvcnQ6IHN0cmluZztcbiAgdG90YWxfY291bnQ6IG51bWJlcjtcbn1cblxudHlwZSBIaWdobGlnaHRJdGVtID0gW3N0cmluZywgW3N0cmluZ11dIHwge1xuICBsaW5rPzoge1xuICAgIC8qKiBmcm9tIHRoZSBiYXNlVXJsIG9mIHRoZSBhcHBsaWNhdGlvbiAqL1xuICAgIGFic29sdXRlOiBzdHJpbmc7XG4gICAgLyoqIHBhdGggcmVsYXRpdmUgdG8gdGhlIGl0ZW0gcHJldmlldyB1cmwgKi9cbiAgICByZWxhdGl2ZTogc3RyaW5nO1xuICB9O1xuICB0ZXh0Pzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE1yU2VhcmNoUmVzdWx0IGV4dGVuZHMgSXRlbVByZXZpZXdEYXRhIHtcbiAgLyoqIHVuaXF1ZSBpZCBmb3IgdGhlIHNlYXJjaCByZXN1bHQgZW50cnkgKi9cbiAgaWQ6IG51bWJlcjtcbiAgLyoqIHJlbGF0aXZlIHBhdGggKi9cbiAgbGluaz86IHN0cmluZztcbiAgLyoqIGl0ZW1zIHRoYXQgbWF0Y2hlZCB0aGUgc2VhcmNoIGlucHV0ICovXG4gIGhpZ2hsaWdodHM/OiBIaWdobGlnaHRJdGVtW107XG4gIC8qKiBwYXlsb2FkIGZvciBpdGVtIGFuY2hvciAqL1xuICBwYXlsb2FkPzoge1xuICAgIGFjdGlvbjogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmcgfCBudW1iZXI7XG4gICAgdHlwZTogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBNclNlYXJjaFJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHsgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XG4gICAgY29uc3QgaXRlbVByZXZpZXdPcHRpb25zID0gbWVyZ2UoY2xvbmUoSVRFTV9QUkVWSUVXX0RFRkFVTFRTKSwgKGl0ZW1QcmV2aWV3IHx8IHt9KSk7XG5cbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS50ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBzdHJpcHRhZ3NcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcbiAgICAgICAgICBpdGVtLnRleHQgPSBoZWxwZXJzLnN0cmlwdGFncyhpdGVtLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxpbWl0XG4gICAgICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMubGltaXQgJiYgKGl0ZW0udGV4dC5sZW5ndGggPiBpdGVtUHJldmlld09wdGlvbnMubGltaXQpKSB7XG4gICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIG1ldGFkYXRhXG4gICAgICBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGFHcm91cFtdID0gW107XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLm1ldGFkYXRhKSkge1xuICAgICAgICBpdGVtLm1ldGFkYXRhLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcbiAgICAgICAgICAoZ3JvdXAuaXRlbXMgfHwgW10pLmZvckVhY2goKG1ldGFkYXRhSXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgIC4uLm1ldGFkYXRhSXRlbSxcbiAgICAgICAgICAgICAgbGFiZWw6IF90KG1ldGFkYXRhSXRlbS5sYWJlbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1ldGFkYXRhLnB1c2goeyBpdGVtcyB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICAgIEFkZCB0aGUgaGlnaGxpZ2h0cyB0byB0aGUgaXRlbSdzIG1ldGFkYXRhIHdpdGggYSBjdXN0b20gZ3JvdXBcbiAgICAgICovXG4gICAgICBjb25zdCBoaWdobGlnaHRzID0gW107XG4gICAgICBpZiAoaXRlbS5oaWdobGlnaHRzKSB7XG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodEdyb3VwID0ge1xuICAgICAgICAgIHRpdGxlOiBfdCgnYWR2YW5jZWRzZWFyY2gjaGlnaGxpZ2h0c190aXRsZScpLFxuICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICBjbGFzc2VzOiAnbjctaXRlbS1wcmV2aWV3X19oaWdobGlnaHRzJ1xuICAgICAgICB9O1xuICAgICAgICBpdGVtLmhpZ2hsaWdodHMuZm9yRWFjaCgoaGlnaGxpZ2h0OiBIaWdobGlnaHRJdGVtKSA9PiB7XG4gICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gaXMgYW4gYXJyYXkgaW50ZXJwcmV0IGl0IGFzIFtsYWJlbCwgW3ZhbHVlXV1cbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShoaWdobGlnaHQpKSB7XG4gICAgICAgICAgICBoaWdobGlnaHRHcm91cC5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IF90KGhpZ2hsaWdodFswXSksXG4gICAgICAgICAgICAgIHZhbHVlOiBfdChoaWdobGlnaHRbMV1bMF0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBpZiBpdCdzIGFuIG9iamVjdCB0aGVuIGl0IHNob3VsZCBoYXZlIGEgY3VzdG9tIGh5cGVybGlua1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaHJlZiA9ICcnO1xuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodC5saW5rLmFic29sdXRlKSB7XG4gICAgICAgICAgICAgIC8vIHBhdGggaXMgcmVsYXRpdmUgdG8gdGhlIGJhc2VVcmxcbiAgICAgICAgICAgICAgaHJlZiA9IGAke2hpZ2hsaWdodC5saW5rLmFic29sdXRlfWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhpZ2hsaWdodC5saW5rLnJlbGF0aXZlKSB7XG4gICAgICAgICAgICAgIC8vIHBhdGggaXMgcmVsYXRpdmUgdG8gdGhlIGl0ZW0tcHJldmlldyB1cmxcbiAgICAgICAgICAgICAgaHJlZiA9IGAke2l0ZW0ubGlua30ke2hpZ2hsaWdodC5saW5rfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoaWdobGlnaHRHcm91cC5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IGhpZ2hsaWdodC5sYWJlbCA/IF90KGhpZ2hsaWdodC5sYWJlbCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHZhbHVlOiBoaWdobGlnaHQudGV4dCA/PyAnJyxcbiAgICAgICAgICAgICAgaHJlZiwgLy8gY3VzdG9tIGh5cGVybGlua1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaGlnaGxpZ2h0cy5wdXNoKGhpZ2hsaWdodEdyb3VwKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFuY2hvciA9IG51bGw7XG4gICAgICBpZiAoaXRlbS5saW5rKSB7XG4gICAgICAgIGFuY2hvciA9IHtcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGl0ZW0ubGluayksXG4gICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0ucGF5bG9hZCkge1xuICAgICAgICBhbmNob3IgPSB7XG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgLi4uaXRlbS5wYXlsb2FkXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pdGVtLFxuICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgYW5jaG9yLFxuICAgICAgICBoaWdobGlnaHRzLFxuICAgICAgICBjbGFzc2VzOiBpdGVtUHJldmlld09wdGlvbnMuY2xhc3NlcyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==