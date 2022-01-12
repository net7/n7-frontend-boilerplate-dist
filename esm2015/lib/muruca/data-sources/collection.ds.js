import { DataSource } from '@n7-frontend/core';
import { merge } from 'lodash';
import helpers from '../../common/helpers';
import linksHelper from '../helpers/links-helper';
const ITEM_PREVIEW_DEFAULTS = {
    limit: 100,
    striptags: true
};
export class MrCollectionDS extends DataSource {
    transform(data) {
        if (!data)
            return null;
        const { header, items } = data;
        // items check
        if (Array.isArray(items) && !items.length) {
            return null;
        }
        const { classes, itemPreview, linkTarget } = this.options;
        const itemPreviewOptions = merge(ITEM_PREVIEW_DEFAULTS, (itemPreview || {}));
        if ((header || {}).button) {
            const { link, text } = header.button;
            header.button = [{
                    text,
                    anchor: {
                        href: linksHelper.getRouterLink(link),
                        queryParams: linksHelper.getQueryParams(link)
                    }
                }];
        }
        return {
            header: header ? {
                title: {
                    main: {
                        text: header.title,
                        classes: 'bold'
                    },
                    secondary: header.subtitle ? {
                        text: header.subtitle,
                    } : null
                },
                actions: {
                    buttons: header.button
                }
            } : null,
            items: items.map((item) => {
                let anchor = null;
                if (item.text) {
                    // Sanitize HTML tags from the text content
                    if (itemPreviewOptions.striptags) {
                        item.text = helpers.striptags(item.text);
                    }
                    // Limit the length of the item preview text content
                    if (itemPreviewOptions.limit && (item.text.length > itemPreviewOptions.limit)) {
                        item.text = `${item.text.substring(0, itemPreviewOptions.limit)}...`;
                    }
                }
                if (item.link) {
                    anchor = {
                        href: linksHelper.getRouterLink(item.link),
                        queryParams: linksHelper.getQueryParams(item.link),
                    };
                    if (linkTarget) {
                        anchor.target = linkTarget;
                    }
                }
                if (item.payload) {
                    anchor = {
                        payload: Object.assign({}, item.payload)
                    };
                }
                return Object.assign(Object.assign({}, item), { anchor, classes: classes || '' });
            })
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFpQkYsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVO0lBR2xDLFNBQVMsQ0FBQyxJQUF3QjtRQUMxQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRXZCLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRS9CLGNBQWM7UUFDZCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzFELE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDekIsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDZixJQUFJO29CQUNKLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7d0JBQ3JDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztxQkFDOUM7aUJBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPO1lBQ0wsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRTt3QkFDSixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUs7d0JBQ2xCLE9BQU8sRUFBRSxNQUFNO3FCQUNoQjtvQkFDRCxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtxQkFDdEIsQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDVDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2lCQUN2QjthQUNGLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDUixLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN4QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYiwyQ0FBMkM7b0JBQzNDLElBQUksa0JBQWtCLENBQUMsU0FBUyxFQUFFO3dCQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMxQztvQkFDRCxvREFBb0Q7b0JBQ3BELElBQUksa0JBQWtCLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQzdFLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztxQkFDdEU7aUJBQ0Y7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLE1BQU0sR0FBRzt3QkFDUCxJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUMxQyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3FCQUNuRCxDQUFDO29CQUNGLElBQUksVUFBVSxFQUFFO3dCQUNkLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO3FCQUM1QjtpQkFDRjtnQkFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLE1BQU0sR0FBRzt3QkFDUCxPQUFPLG9CQUNGLElBQUksQ0FBQyxPQUFPLENBQ2hCO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsdUNBQ0ssSUFBSSxLQUNQLE1BQU0sRUFDTixPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsSUFDdEI7WUFDSixDQUFDLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XG5cbmNvbnN0IElURU1fUFJFVklFV19ERUZBVUxUUyA9IHtcbiAgbGltaXQ6IDEwMCxcbiAgc3RyaXB0YWdzOiB0cnVlXG59O1xuXG50eXBlIGNvbGxlY3Rpb25SZXNwb25zZSA9IHtcbiAgaGVhZGVyOiB7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgc3VidGl0bGU/OiBzdHJpbmc7XG4gICAgYnV0dG9uPzogYW55O1xuICB9O1xuICBpdGVtczoge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgbGluaz86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gIH1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIE1yQ29sbGVjdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBjb2xsZWN0aW9uUmVzcG9uc2UpOiBhbnkge1xuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCB7IGhlYWRlciwgaXRlbXMgfSA9IGRhdGE7XG5cbiAgICAvLyBpdGVtcyBjaGVja1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiAhaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNsYXNzZXMsIGl0ZW1QcmV2aWV3LCBsaW5rVGFyZ2V0IH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgaXRlbVByZXZpZXdPcHRpb25zID0gbWVyZ2UoSVRFTV9QUkVWSUVXX0RFRkFVTFRTLCAoaXRlbVByZXZpZXcgfHwge30pKTtcblxuICAgIGlmICgoaGVhZGVyIHx8IHt9KS5idXR0b24pIHtcbiAgICAgIGNvbnN0IHsgbGluaywgdGV4dCB9ID0gaGVhZGVyLmJ1dHRvbjtcbiAgICAgIGhlYWRlci5idXR0b24gPSBbe1xuICAgICAgICB0ZXh0LFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGxpbmspLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhsaW5rKVxuICAgICAgICB9XG4gICAgICB9XTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyOiBoZWFkZXIgPyB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnRpdGxlLFxuICAgICAgICAgICAgY2xhc3NlczogJ2JvbGQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWNvbmRhcnk6IGhlYWRlci5zdWJ0aXRsZSA/IHtcbiAgICAgICAgICAgIHRleHQ6IGhlYWRlci5zdWJ0aXRsZSxcbiAgICAgICAgICB9IDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgYnV0dG9uczogaGVhZGVyLmJ1dHRvblxuICAgICAgICB9XG4gICAgICB9IDogbnVsbCxcbiAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGFuY2hvciA9IG51bGw7XG4gICAgICAgIGlmIChpdGVtLnRleHQpIHtcbiAgICAgICAgICAvLyBTYW5pdGl6ZSBIVE1MIHRhZ3MgZnJvbSB0aGUgdGV4dCBjb250ZW50XG4gICAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcbiAgICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIExpbWl0IHRoZSBsZW5ndGggb2YgdGhlIGl0ZW0gcHJldmlldyB0ZXh0IGNvbnRlbnRcbiAgICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0ICYmIChpdGVtLnRleHQubGVuZ3RoID4gaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KSkge1xuICAgICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmxpbmspIHtcbiAgICAgICAgICBhbmNob3IgPSB7XG4gICAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaXRlbS5saW5rKSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChsaW5rVGFyZ2V0KSB7XG4gICAgICAgICAgICBhbmNob3IudGFyZ2V0ID0gbGlua1RhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0ucGF5bG9hZCkge1xuICAgICAgICAgIGFuY2hvciA9IHtcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgLi4uaXRlbS5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgIGNsYXNzZXM6IGNsYXNzZXMgfHwgJydcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxufVxuIl19