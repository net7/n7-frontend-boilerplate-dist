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
        if (data === undefined) {
            return null;
        }
        const { header, items } = data;
        // items check
        if (Array.isArray(items) && !items.length) {
            return null;
        }
        const { classes, itemPreview } = this.options;
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
            header: {
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
            },
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
                        queryParams: linksHelper.getQueryParams(item.link)
                    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFpQkYsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVO0lBR2xDLFNBQVMsQ0FBQyxJQUF3QjtRQUMxQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBRXhDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRS9CLGNBQWM7UUFDZCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDOUMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN6QixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNmLElBQUk7b0JBQ0osTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDckMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO3FCQUM5QztpQkFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU87WUFDTCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRTt3QkFDSixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUs7d0JBQ2xCLE9BQU8sRUFBRSxNQUFNO3FCQUNoQjtvQkFDRCxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtxQkFDdEIsQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDVDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2lCQUN2QjthQUNGO1lBQ0QsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsMkNBQTJDO29CQUMzQyxJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTt3QkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDMUM7b0JBQ0Qsb0RBQW9EO29CQUNwRCxJQUFJLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7cUJBQ3RFO2lCQUNGO2dCQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYixNQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDMUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDbkQsQ0FBQztpQkFDSDtnQkFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLE1BQU0sR0FBRzt3QkFDUCxPQUFPLG9CQUNGLElBQUksQ0FBQyxPQUFPLENBQ2hCO3FCQUNGLENBQUM7aUJBQ0g7Z0JBQ0QsdUNBQ0ssSUFBSSxLQUNQLE1BQU0sRUFDTixPQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsSUFDdEI7WUFDSixDQUFDLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XG5cbmNvbnN0IElURU1fUFJFVklFV19ERUZBVUxUUyA9IHtcbiAgbGltaXQ6IDEwMCxcbiAgc3RyaXB0YWdzOiB0cnVlXG59O1xuXG50eXBlIGNvbGxlY3Rpb25SZXNwb25zZSA9IHtcbiAgaGVhZGVyOiB7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgc3VidGl0bGU/OiBzdHJpbmc7XG4gICAgYnV0dG9uPzogYW55O1xuICB9O1xuICBpdGVtczoge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgbGluaz86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIHBheWxvYWQ/OiBhbnk7XG4gIH1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIE1yQ29sbGVjdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBjb2xsZWN0aW9uUmVzcG9uc2UpOiBhbnkge1xuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgIGNvbnN0IHsgaGVhZGVyLCBpdGVtcyB9ID0gZGF0YTtcblxuICAgIC8vIGl0ZW1zIGNoZWNrXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpICYmICFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY2xhc3NlcywgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBpdGVtUHJldmlld09wdGlvbnMgPSBtZXJnZShJVEVNX1BSRVZJRVdfREVGQVVMVFMsIChpdGVtUHJldmlldyB8fCB7fSkpO1xuXG4gICAgaWYgKChoZWFkZXIgfHwge30pLmJ1dHRvbikge1xuICAgICAgY29uc3QgeyBsaW5rLCB0ZXh0IH0gPSBoZWFkZXIuYnV0dG9uO1xuICAgICAgaGVhZGVyLmJ1dHRvbiA9IFt7XG4gICAgICAgIHRleHQsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsobGluayksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGxpbmspXG4gICAgICAgIH1cbiAgICAgIH1dO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIudGl0bGUsXG4gICAgICAgICAgICBjbGFzc2VzOiAnYm9sZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlY29uZGFyeTogaGVhZGVyLnN1YnRpdGxlID8ge1xuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnN1YnRpdGxlLFxuICAgICAgICAgIH0gOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBidXR0b25zOiBoZWFkZXIuYnV0dG9uXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBhbmNob3IgPSBudWxsO1xuICAgICAgICBpZiAoaXRlbS50ZXh0KSB7XG4gICAgICAgICAgLy8gU2FuaXRpemUgSFRNTCB0YWdzIGZyb20gdGhlIHRleHQgY29udGVudFxuICAgICAgICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMuc3RyaXB0YWdzKSB7XG4gICAgICAgICAgICBpdGVtLnRleHQgPSBoZWxwZXJzLnN0cmlwdGFncyhpdGVtLnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBMaW1pdCB0aGUgbGVuZ3RoIG9mIHRoZSBpdGVtIHByZXZpZXcgdGV4dCBjb250ZW50XG4gICAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoaXRlbS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcbiAgICAgICAgICAgIGl0ZW0udGV4dCA9IGAke2l0ZW0udGV4dC5zdWJzdHJpbmcoMCwgaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KX0uLi5gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5saW5rKSB7XG4gICAgICAgICAgYW5jaG9yID0ge1xuICAgICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhpdGVtLmxpbmspLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGl0ZW0ubGluaylcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLnBheWxvYWQpIHtcbiAgICAgICAgICBhbmNob3IgPSB7XG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIC4uLml0ZW0ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgIGFuY2hvcixcbiAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzIHx8ICcnXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH07XG4gIH1cbn1cbiJdfQ==