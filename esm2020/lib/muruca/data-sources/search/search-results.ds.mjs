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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3NlYXJjaC9zZWFyY2gtcmVzdWx0cy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBQzlDLE9BQU8sV0FBVyxNQUFNLDRCQUE0QixDQUFDO0FBRXJELE1BQU0scUJBQXFCLEdBQUc7SUFDNUIsS0FBSyxFQUFFLEdBQUc7SUFDVixTQUFTLEVBQUUsSUFBSTtDQUNoQixDQUFDO0FBb0NGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0lBQ3JDLFNBQVMsQ0FBQyxJQUFzQjtRQUN4QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM1QyxNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXBGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDakMsWUFBWTtnQkFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Z0JBQ0QsUUFBUTtnQkFDUixJQUFJLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ3RFO2FBQ0Y7WUFDRCxXQUFXO1lBQ1gsTUFBTSxRQUFRLEdBQW9CLEVBQUUsQ0FBQztZQUNyQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUM5QixNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2pCLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTt3QkFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQzs0QkFDVCxHQUFHLFlBQVk7NEJBQ2YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3lCQUM5QixDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFFRDs7Y0FFRTtZQUNGLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLE1BQU0sY0FBYyxHQUFHO29CQUNyQixLQUFLLEVBQUUsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO29CQUM1QyxLQUFLLEVBQUUsRUFBRTtvQkFDVCxPQUFPLEVBQUUsNkJBQTZCO2lCQUN2QyxDQUFDO2dCQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBd0IsRUFBRSxFQUFFO29CQUNuRCwyREFBMkQ7b0JBQzNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDNUIsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ3hCLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN2QixLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDM0IsQ0FBQyxDQUFDO3dCQUNMLDJEQUEyRDtxQkFDMUQ7eUJBQU07d0JBQ0wsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO3dCQUNkLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7NEJBQzNCLGtDQUFrQzs0QkFDbEMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt5QkFDckM7NkJBQU0sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs0QkFDbEMsMkNBQTJDOzRCQUMzQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt5QkFDeEM7d0JBQ0QsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ3hCLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzRCQUN4RCxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFOzRCQUMzQixJQUFJLEVBQUUsbUJBQW1CO3lCQUMxQixDQUFDLENBQUM7cUJBQ0o7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNqQztZQUVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsTUFBTSxHQUFHO29CQUNQLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQzFDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ2xELE1BQU0sRUFBRSxRQUFRO2lCQUNqQixDQUFDO2FBQ0g7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU0sR0FBRztvQkFDUCxPQUFPLEVBQUU7d0JBQ1AsR0FBRyxJQUFJLENBQUMsT0FBTztxQkFDaEI7aUJBQ0YsQ0FBQzthQUNIO1lBRUQsT0FBTztnQkFDTCxHQUFHLElBQUk7Z0JBQ1AsUUFBUTtnQkFDUixNQUFNO2dCQUNOLFVBQVU7Z0JBQ1YsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE9BQU87YUFDcEMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhLCBNZXRhZGF0YUdyb3VwIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UsIGNsb25lIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xyXG5cclxuY29uc3QgSVRFTV9QUkVWSUVXX0RFRkFVTFRTID0ge1xyXG4gIGxpbWl0OiAxMDAsXHJcbiAgc3RyaXB0YWdzOiB0cnVlXHJcbn07XHJcblxyXG50eXBlIE1yU2VhcmNoUmVzcG9uc2UgPSB7XHJcbiAgbGltaXQ6IG51bWJlcjtcclxuICBvZmZzZXQ6IG51bWJlcjtcclxuICByZXN1bHRzOiBNclNlYXJjaFJlc3VsdFtdO1xyXG4gIHNvcnQ6IHN0cmluZztcclxuICB0b3RhbF9jb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIEhpZ2hsaWdodEl0ZW0gPSBbc3RyaW5nLCBbc3RyaW5nXV0gfCB7XHJcbiAgbGluaz86IHtcclxuICAgIC8qKiBmcm9tIHRoZSBiYXNlVXJsIG9mIHRoZSBhcHBsaWNhdGlvbiAqL1xyXG4gICAgYWJzb2x1dGU6IHN0cmluZztcclxuICAgIC8qKiBwYXRoIHJlbGF0aXZlIHRvIHRoZSBpdGVtIHByZXZpZXcgdXJsICovXHJcbiAgICByZWxhdGl2ZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgdGV4dD86IHN0cmluZztcclxuICBsYWJlbD86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE1yU2VhcmNoUmVzdWx0IGV4dGVuZHMgSXRlbVByZXZpZXdEYXRhIHtcclxuICAvKiogdW5pcXVlIGlkIGZvciB0aGUgc2VhcmNoIHJlc3VsdCBlbnRyeSAqL1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgLyoqIHJlbGF0aXZlIHBhdGggKi9cclxuICBsaW5rPzogc3RyaW5nO1xyXG4gIC8qKiBpdGVtcyB0aGF0IG1hdGNoZWQgdGhlIHNlYXJjaCBpbnB1dCAqL1xyXG4gIGhpZ2hsaWdodHM/OiBIaWdobGlnaHRJdGVtW107XHJcbiAgLyoqIHBheWxvYWQgZm9yIGl0ZW0gYW5jaG9yICovXHJcbiAgcGF5bG9hZD86IHtcclxuICAgIGFjdGlvbjogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcjtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hSZXN1bHRzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IE1yU2VhcmNoUmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHsgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XHJcbiAgICBjb25zdCBpdGVtUHJldmlld09wdGlvbnMgPSBtZXJnZShjbG9uZShJVEVNX1BSRVZJRVdfREVGQVVMVFMpLCAoaXRlbVByZXZpZXcgfHwge30pKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBpdGVtLnRleHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy8gc3RyaXB0YWdzXHJcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcclxuICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxpbWl0XHJcbiAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoaXRlbS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcclxuICAgICAgICAgIGl0ZW0udGV4dCA9IGAke2l0ZW0udGV4dC5zdWJzdHJpbmcoMCwgaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KX0uLi5gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBtZXRhZGF0YVxyXG4gICAgICBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGFHcm91cFtdID0gW107XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0ubWV0YWRhdGEpKSB7XHJcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgICAgICAgIChncm91cC5pdGVtcyB8fCBbXSkuZm9yRWFjaCgobWV0YWRhdGFJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIC4uLm1ldGFkYXRhSXRlbSxcclxuICAgICAgICAgICAgICBsYWJlbDogX3QobWV0YWRhdGFJdGVtLmxhYmVsKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbWV0YWRhdGEucHVzaCh7IGl0ZW1zIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgIEFkZCB0aGUgaGlnaGxpZ2h0cyB0byB0aGUgaXRlbSdzIG1ldGFkYXRhIHdpdGggYSBjdXN0b20gZ3JvdXBcclxuICAgICAgKi9cclxuICAgICAgY29uc3QgaGlnaGxpZ2h0cyA9IFtdO1xyXG4gICAgICBpZiAoaXRlbS5oaWdobGlnaHRzKSB7XHJcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0R3JvdXAgPSB7XHJcbiAgICAgICAgICB0aXRsZTogX3QoJ2FkdmFuY2Vkc2VhcmNoI2hpZ2hsaWdodHNfdGl0bGUnKSxcclxuICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICAgIGNsYXNzZXM6ICduNy1pdGVtLXByZXZpZXdfX2hpZ2hsaWdodHMnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpdGVtLmhpZ2hsaWdodHMuZm9yRWFjaCgoaGlnaGxpZ2h0OiBIaWdobGlnaHRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAvLyBpZiB0aGUgaXRlbSBpcyBhbiBhcnJheSBpbnRlcnByZXQgaXQgYXMgW2xhYmVsLCBbdmFsdWVdXVxyXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGlnaGxpZ2h0KSkge1xyXG4gICAgICAgICAgICBoaWdobGlnaHRHcm91cC5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICBsYWJlbDogX3QoaGlnaGxpZ2h0WzBdKSxcclxuICAgICAgICAgICAgICB2YWx1ZTogX3QoaGlnaGxpZ2h0WzFdWzBdKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIGlmIGl0J3MgYW4gb2JqZWN0IHRoZW4gaXQgc2hvdWxkIGhhdmUgYSBjdXN0b20gaHlwZXJsaW5rXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaHJlZiA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0LmxpbmsuYWJzb2x1dGUpIHtcclxuICAgICAgICAgICAgICAvLyBwYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSBiYXNlVXJsXHJcbiAgICAgICAgICAgICAgaHJlZiA9IGAke2hpZ2hsaWdodC5saW5rLmFic29sdXRlfWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGlnaGxpZ2h0LmxpbmsucmVsYXRpdmUpIHtcclxuICAgICAgICAgICAgICAvLyBwYXRoIGlzIHJlbGF0aXZlIHRvIHRoZSBpdGVtLXByZXZpZXcgdXJsXHJcbiAgICAgICAgICAgICAgaHJlZiA9IGAke2l0ZW0ubGlua30ke2hpZ2hsaWdodC5saW5rfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGlnaGxpZ2h0R3JvdXAuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IGhpZ2hsaWdodC5sYWJlbCA/IF90KGhpZ2hsaWdodC5sYWJlbCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGhpZ2hsaWdodC50ZXh0ID8/ICcnLFxyXG4gICAgICAgICAgICAgIGhyZWYsIC8vIGN1c3RvbSBoeXBlcmxpbmtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGlnaGxpZ2h0cy5wdXNoKGhpZ2hsaWdodEdyb3VwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGFuY2hvciA9IG51bGw7XHJcbiAgICAgIGlmIChpdGVtLmxpbmspIHtcclxuICAgICAgICBhbmNob3IgPSB7XHJcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaXRlbS5saW5rKSxcclxuICAgICAgICAgIHRhcmdldDogJ19ibGFuaydcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLnBheWxvYWQpIHtcclxuICAgICAgICBhbmNob3IgPSB7XHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIC4uLml0ZW0ucGF5bG9hZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICBtZXRhZGF0YSxcclxuICAgICAgICBhbmNob3IsXHJcbiAgICAgICAgaGlnaGxpZ2h0cyxcclxuICAgICAgICBjbGFzc2VzOiBpdGVtUHJldmlld09wdGlvbnMuY2xhc3NlcyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=