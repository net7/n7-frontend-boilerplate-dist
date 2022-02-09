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
                        payload: {
                            ...item.payload
                        }
                    };
                }
                return {
                    ...item,
                    anchor,
                    classes: classes || ''
                };
            })
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9kYXRhLXNvdXJjZXMvY29sbGVjdGlvbi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxNQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQWlCRixNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7SUFHbEMsU0FBUyxDQUFDLElBQXdCO1FBQzFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFdkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFL0IsY0FBYztRQUNkLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUQsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN6QixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNmLElBQUk7b0JBQ0osTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDckMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO3FCQUM5QztpQkFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU87WUFDTCxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSzt3QkFDbEIsT0FBTyxFQUFFLE1BQU07cUJBQ2hCO29CQUNELFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO3FCQUN0QixDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUNUO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3ZCO2FBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLDJDQUEyQztvQkFDM0MsSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzFDO29CQUNELG9EQUFvRDtvQkFDcEQsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDN0UsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3FCQUN0RTtpQkFDRjtnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsTUFBTSxHQUFHO3dCQUNQLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQzFDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQ25ELENBQUM7b0JBQ0YsSUFBSSxVQUFVLEVBQUU7d0JBQ2QsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7cUJBQzVCO2lCQUNGO2dCQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsTUFBTSxHQUFHO3dCQUNQLE9BQU8sRUFBRTs0QkFDUCxHQUFHLElBQUksQ0FBQyxPQUFPO3lCQUNoQjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELE9BQU87b0JBQ0wsR0FBRyxJQUFJO29CQUNQLE1BQU07b0JBQ04sT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFO2lCQUN2QixDQUFDO1lBQ0osQ0FBQyxDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xyXG5cclxuY29uc3QgSVRFTV9QUkVWSUVXX0RFRkFVTFRTID0ge1xyXG4gIGxpbWl0OiAxMDAsXHJcbiAgc3RyaXB0YWdzOiB0cnVlXHJcbn07XHJcblxyXG50eXBlIGNvbGxlY3Rpb25SZXNwb25zZSA9IHtcclxuICBoZWFkZXI6IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgc3VidGl0bGU/OiBzdHJpbmc7XHJcbiAgICBidXR0b24/OiBhbnk7XHJcbiAgfTtcclxuICBpdGVtczoge1xyXG4gICAgdGV4dD86IHN0cmluZztcclxuICAgIGxpbms/OiBzdHJpbmc7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkPzogYW55O1xyXG4gIH1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1yQ29sbGVjdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBjb2xsZWN0aW9uUmVzcG9uc2UpOiBhbnkge1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCB7IGhlYWRlciwgaXRlbXMgfSA9IGRhdGE7XHJcblxyXG4gICAgLy8gaXRlbXMgY2hlY2tcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiAhaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgY2xhc3NlcywgaXRlbVByZXZpZXcsIGxpbmtUYXJnZXQgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IGl0ZW1QcmV2aWV3T3B0aW9ucyA9IG1lcmdlKElURU1fUFJFVklFV19ERUZBVUxUUywgKGl0ZW1QcmV2aWV3IHx8IHt9KSk7XHJcblxyXG4gICAgaWYgKChoZWFkZXIgfHwge30pLmJ1dHRvbikge1xyXG4gICAgICBjb25zdCB7IGxpbmssIHRleHQgfSA9IGhlYWRlci5idXR0b247XHJcbiAgICAgIGhlYWRlci5idXR0b24gPSBbe1xyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGxpbmspLFxyXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGxpbmspXHJcbiAgICAgICAgfVxyXG4gICAgICB9XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXI6IGhlYWRlciA/IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgbWFpbjoge1xyXG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIudGl0bGUsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlY29uZGFyeTogaGVhZGVyLnN1YnRpdGxlID8ge1xyXG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIuc3VidGl0bGUsXHJcbiAgICAgICAgICB9IDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgICAgYnV0dG9uczogaGVhZGVyLmJ1dHRvblxyXG4gICAgICAgIH1cclxuICAgICAgfSA6IG51bGwsXHJcbiAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBsZXQgYW5jaG9yID0gbnVsbDtcclxuICAgICAgICBpZiAoaXRlbS50ZXh0KSB7XHJcbiAgICAgICAgICAvLyBTYW5pdGl6ZSBIVE1MIHRhZ3MgZnJvbSB0aGUgdGV4dCBjb250ZW50XHJcbiAgICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLnN0cmlwdGFncykge1xyXG4gICAgICAgICAgICBpdGVtLnRleHQgPSBoZWxwZXJzLnN0cmlwdGFncyhpdGVtLnRleHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gTGltaXQgdGhlIGxlbmd0aCBvZiB0aGUgaXRlbSBwcmV2aWV3IHRleHQgY29udGVudFxyXG4gICAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoaXRlbS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcclxuICAgICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLmxpbmspIHtcclxuICAgICAgICAgIGFuY2hvciA9IHtcclxuICAgICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhpdGVtLmxpbmspLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaXRlbS5saW5rKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAobGlua1RhcmdldCkge1xyXG4gICAgICAgICAgICBhbmNob3IudGFyZ2V0ID0gbGlua1RhcmdldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0ucGF5bG9hZCkge1xyXG4gICAgICAgICAgYW5jaG9yID0ge1xyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgLi4uaXRlbS5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgYW5jaG9yLFxyXG4gICAgICAgICAgY2xhc3NlczogY2xhc3NlcyB8fCAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=