import { DataSource } from '@n7-frontend/core';
import linksHelper from '../helpers/links-helper';
export class MrInnerTitleDS extends DataSource {
    transform(data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9pbm5lci10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsTUFBTSxPQUFPLGNBQWUsU0FBUSxVQUFVO0lBQ2xDLFNBQVMsQ0FBQyxJQUFTO1FBQzNCLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUM1QyxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSztvQkFDWCxPQUFPLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxXQUFXO29CQUNqQixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7YUFDRjtZQUNELE9BQU8sRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDNUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDckQ7d0JBQ0QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO3dCQUNqQixPQUFPLEVBQUUsWUFBWTtxQkFDdEI7aUJBQ0Y7YUFDRixDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgTXJJbm5lclRpdGxlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b24gfSA9IGRhdGE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIG1haW46IHtcbiAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICBjbGFzc2VzOiAnYm9sZCdcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgdGV4dDogZGVzY3JpcHRpb24sXG4gICAgICAgICAgY2xhc3NlczogJ2l0YWxpYydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFjdGlvbnM6IGJ1dHRvbiAmJiBidXR0b24ubGluayA/IHtcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGJ1dHRvbi5saW5rKSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGJ1dHRvbi5saW5rKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRleHQ6IGJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgY2xhc3NlczogJ243LWJ0bi1jdGEnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9IDogbnVsbFxuICAgIH07XG4gIH1cbn1cbiJdfQ==