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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9kYXRhLXNvdXJjZXMvY29sbGVjdGlvbi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxNQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQWlCRixNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7SUFHbEMsU0FBUyxDQUFDLElBQXdCO1FBQzFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFdkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFL0IsY0FBYztRQUNkLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUQsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN6QixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNmLElBQUk7b0JBQ0osTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDckMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO3FCQUM5QztpQkFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU87WUFDTCxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSzt3QkFDbEIsT0FBTyxFQUFFLE1BQU07cUJBQ2hCO29CQUNELFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO3FCQUN0QixDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUNUO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3ZCO2FBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLDJDQUEyQztvQkFDM0MsSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzFDO29CQUNELG9EQUFvRDtvQkFDcEQsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDN0UsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3FCQUN0RTtpQkFDRjtnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsTUFBTSxHQUFHO3dCQUNQLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQzFDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQ25ELENBQUM7b0JBQ0YsSUFBSSxVQUFVLEVBQUU7d0JBQ2QsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7cUJBQzVCO2lCQUNGO2dCQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsTUFBTSxHQUFHO3dCQUNQLE9BQU8sRUFBRTs0QkFDUCxHQUFHLElBQUksQ0FBQyxPQUFPO3lCQUNoQjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELE9BQU87b0JBQ0wsR0FBRyxJQUFJO29CQUNQLE1BQU07b0JBQ04sT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFO2lCQUN2QixDQUFDO1lBQ0osQ0FBQyxDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xuXG5jb25zdCBJVEVNX1BSRVZJRVdfREVGQVVMVFMgPSB7XG4gIGxpbWl0OiAxMDAsXG4gIHN0cmlwdGFnczogdHJ1ZVxufTtcblxudHlwZSBjb2xsZWN0aW9uUmVzcG9uc2UgPSB7XG4gIGhlYWRlcjoge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHN1YnRpdGxlPzogc3RyaW5nO1xuICAgIGJ1dHRvbj86IGFueTtcbiAgfTtcbiAgaXRlbXM6IHtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIGxpbms/OiBzdHJpbmc7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBwYXlsb2FkPzogYW55O1xuICB9W107XG59XG5cbmV4cG9ydCBjbGFzcyBNckNvbGxlY3Rpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogY29sbGVjdGlvblJlc3BvbnNlKTogYW55IHtcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgeyBoZWFkZXIsIGl0ZW1zIH0gPSBkYXRhO1xuXG4gICAgLy8gaXRlbXMgY2hlY2tcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykgJiYgIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBjbGFzc2VzLCBpdGVtUHJldmlldywgbGlua1RhcmdldCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGl0ZW1QcmV2aWV3T3B0aW9ucyA9IG1lcmdlKElURU1fUFJFVklFV19ERUZBVUxUUywgKGl0ZW1QcmV2aWV3IHx8IHt9KSk7XG5cbiAgICBpZiAoKGhlYWRlciB8fCB7fSkuYnV0dG9uKSB7XG4gICAgICBjb25zdCB7IGxpbmssIHRleHQgfSA9IGhlYWRlci5idXR0b247XG4gICAgICBoZWFkZXIuYnV0dG9uID0gW3tcbiAgICAgICAgdGV4dCxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhsaW5rKSxcbiAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMobGluaylcbiAgICAgICAgfVxuICAgICAgfV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRlcjogaGVhZGVyID8ge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIG1haW46IHtcbiAgICAgICAgICAgIHRleHQ6IGhlYWRlci50aXRsZSxcbiAgICAgICAgICAgIGNsYXNzZXM6ICdib2xkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2Vjb25kYXJ5OiBoZWFkZXIuc3VidGl0bGUgPyB7XG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIuc3VidGl0bGUsXG4gICAgICAgICAgfSA6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgIGJ1dHRvbnM6IGhlYWRlci5idXR0b25cbiAgICAgICAgfVxuICAgICAgfSA6IG51bGwsXG4gICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBhbmNob3IgPSBudWxsO1xuICAgICAgICBpZiAoaXRlbS50ZXh0KSB7XG4gICAgICAgICAgLy8gU2FuaXRpemUgSFRNTCB0YWdzIGZyb20gdGhlIHRleHQgY29udGVudFxuICAgICAgICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMuc3RyaXB0YWdzKSB7XG4gICAgICAgICAgICBpdGVtLnRleHQgPSBoZWxwZXJzLnN0cmlwdGFncyhpdGVtLnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBMaW1pdCB0aGUgbGVuZ3RoIG9mIHRoZSBpdGVtIHByZXZpZXcgdGV4dCBjb250ZW50XG4gICAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoaXRlbS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcbiAgICAgICAgICAgIGl0ZW0udGV4dCA9IGAke2l0ZW0udGV4dC5zdWJzdHJpbmcoMCwgaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KX0uLi5gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5saW5rKSB7XG4gICAgICAgICAgYW5jaG9yID0ge1xuICAgICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhpdGVtLmxpbmspLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGl0ZW0ubGluayksXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAobGlua1RhcmdldCkge1xuICAgICAgICAgICAgYW5jaG9yLnRhcmdldCA9IGxpbmtUYXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLnBheWxvYWQpIHtcbiAgICAgICAgICBhbmNob3IgPSB7XG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIC4uLml0ZW0ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgIGFuY2hvcixcbiAgICAgICAgICBjbGFzc2VzOiBjbGFzc2VzIHx8ICcnXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH07XG4gIH1cbn1cbiJdfQ==