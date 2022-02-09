import { DataSource } from '@n7-frontend/core';
import linksHelper from '../helpers/links-helper';
export class MrInnerTitleDS extends DataSource {
    transform(data) {
        if (!data)
            return null;
        const { title, description, button } = data;
        return {
            title: {
                main: {
                    text: title,
                    classes: 'bold'
                },
                secondary: {
                    text: description,
                    classes: 'italic'
                }
            },
            actions: button && button.link ? {
                buttons: [
                    {
                        anchor: {
                            href: linksHelper.getRouterLink(button.link),
                            queryParams: linksHelper.getQueryParams(button.link)
                        },
                        text: button.text,
                        classes: 'n7-btn-cta'
                    }
                ]
            } : null
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2lubmVyLXRpdGxlLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7SUFDbEMsU0FBUyxDQUFDLElBQVM7UUFDM0IsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN2QixNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDNUMsT0FBTztZQUNMLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLEtBQUs7b0JBQ1gsT0FBTyxFQUFFLE1BQU07aUJBQ2hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxJQUFJLEVBQUUsV0FBVztvQkFDakIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLEVBQUU7b0JBQ1A7d0JBQ0UsTUFBTSxFQUFFOzRCQUNOLElBQUksRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQzVDLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7eUJBQ3JEO3dCQUNELElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTt3QkFDakIsT0FBTyxFQUFFLFlBQVk7cUJBQ3RCO2lCQUNGO2FBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUNULENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySW5uZXJUaXRsZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b24gfSA9IGRhdGE7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIG1haW46IHtcclxuICAgICAgICAgIHRleHQ6IHRpdGxlLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2JvbGQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICAgIHRleHQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgY2xhc3NlczogJ2l0YWxpYydcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFjdGlvbnM6IGJ1dHRvbiAmJiBidXR0b24ubGluayA/IHtcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsoYnV0dG9uLmxpbmspLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhidXR0b24ubGluaylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGV4dDogYnV0dG9uLnRleHQsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6ICduNy1idG4tY3RhJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSA6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==