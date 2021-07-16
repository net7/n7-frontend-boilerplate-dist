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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQUM7QUFpQkYsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVO0lBR2xDLFNBQVMsQ0FBQyxJQUF3QjtRQUMxQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRS9CLGNBQWM7UUFDZCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDOUMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN6QixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNmLElBQUk7b0JBQ0osTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDckMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO3FCQUM5QztpQkFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU87WUFDTCxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSzt3QkFDbEIsT0FBTyxFQUFFLE1BQU07cUJBQ2hCO29CQUNELFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO3FCQUN0QixDQUFDLENBQUMsQ0FBQyxJQUFJO2lCQUNUO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3ZCO2FBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNiLDJDQUEyQztvQkFDM0MsSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzFDO29CQUNELG9EQUFvRDtvQkFDcEQsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDN0UsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3FCQUN0RTtpQkFDRjtnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsTUFBTSxHQUFHO3dCQUNQLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQzFDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQ25ELENBQUM7aUJBQ0g7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixNQUFNLEdBQUc7d0JBQ1AsT0FBTyxvQkFDRixJQUFJLENBQUMsT0FBTyxDQUNoQjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELHVDQUNLLElBQUksS0FDUCxNQUFNLEVBQ04sT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFLElBQ3RCO1lBQ0osQ0FBQyxDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xuXG5jb25zdCBJVEVNX1BSRVZJRVdfREVGQVVMVFMgPSB7XG4gIGxpbWl0OiAxMDAsXG4gIHN0cmlwdGFnczogdHJ1ZVxufTtcblxudHlwZSBjb2xsZWN0aW9uUmVzcG9uc2UgPSB7XG4gIGhlYWRlcjoge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHN1YnRpdGxlPzogc3RyaW5nO1xuICAgIGJ1dHRvbj86IGFueTtcbiAgfTtcbiAgaXRlbXM6IHtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIGxpbms/OiBzdHJpbmc7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBwYXlsb2FkPzogYW55O1xuICB9W107XG59XG5cbmV4cG9ydCBjbGFzcyBNckNvbGxlY3Rpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogY29sbGVjdGlvblJlc3BvbnNlKTogYW55IHtcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGhlYWRlciwgaXRlbXMgfSA9IGRhdGE7XG5cbiAgICAvLyBpdGVtcyBjaGVja1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiAhaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNsYXNzZXMsIGl0ZW1QcmV2aWV3IH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgaXRlbVByZXZpZXdPcHRpb25zID0gbWVyZ2UoSVRFTV9QUkVWSUVXX0RFRkFVTFRTLCAoaXRlbVByZXZpZXcgfHwge30pKTtcblxuICAgIGlmICgoaGVhZGVyIHx8IHt9KS5idXR0b24pIHtcbiAgICAgIGNvbnN0IHsgbGluaywgdGV4dCB9ID0gaGVhZGVyLmJ1dHRvbjtcbiAgICAgIGhlYWRlci5idXR0b24gPSBbe1xuICAgICAgICB0ZXh0LFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGxpbmspLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhsaW5rKVxuICAgICAgICB9XG4gICAgICB9XTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyOiBoZWFkZXIgPyB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnRpdGxlLFxuICAgICAgICAgICAgY2xhc3NlczogJ2JvbGQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWNvbmRhcnk6IGhlYWRlci5zdWJ0aXRsZSA/IHtcbiAgICAgICAgICAgIHRleHQ6IGhlYWRlci5zdWJ0aXRsZSxcbiAgICAgICAgICB9IDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgYnV0dG9uczogaGVhZGVyLmJ1dHRvblxuICAgICAgICB9XG4gICAgICB9IDogbnVsbCxcbiAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGFuY2hvciA9IG51bGw7XG4gICAgICAgIGlmIChpdGVtLnRleHQpIHtcbiAgICAgICAgICAvLyBTYW5pdGl6ZSBIVE1MIHRhZ3MgZnJvbSB0aGUgdGV4dCBjb250ZW50XG4gICAgICAgICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5zdHJpcHRhZ3MpIHtcbiAgICAgICAgICAgIGl0ZW0udGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGl0ZW0udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIExpbWl0IHRoZSBsZW5ndGggb2YgdGhlIGl0ZW0gcHJldmlldyB0ZXh0IGNvbnRlbnRcbiAgICAgICAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0ICYmIChpdGVtLnRleHQubGVuZ3RoID4gaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KSkge1xuICAgICAgICAgICAgaXRlbS50ZXh0ID0gYCR7aXRlbS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmxpbmspIHtcbiAgICAgICAgICBhbmNob3IgPSB7XG4gICAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGl0ZW0ubGluayksXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoaXRlbS5saW5rKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0ucGF5bG9hZCkge1xuICAgICAgICAgIGFuY2hvciA9IHtcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgLi4uaXRlbS5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgYW5jaG9yLFxuICAgICAgICAgIGNsYXNzZXM6IGNsYXNzZXMgfHwgJydcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxufVxuIl19