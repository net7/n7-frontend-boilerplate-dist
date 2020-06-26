import { DataSource } from '@n7-frontend/core';
export class MrCollectionDS extends DataSource {
    transform(data) {
        if (data === undefined) {
            return null;
        }
        const { header, items } = data;
        const { classes } = this.options;
        if ((header || {}).button) {
            header.button = [{
                    text: header.button.text,
                    anchor: {
                        href: header.button.anchor
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
                    } : false,
                    actions: header.button ? {
                        buttons: [
                            {
                                text: header.button.text,
                                payload: header.button.link,
                                classes: 'n7-btn-cta'
                            }
                        ]
                    } : false
                },
                actions: {
                    buttons: header.button
                }
            },
            items: items.map((item) => (Object.assign(Object.assign({}, item), { anchor: {
                    href: item.anchor
                }, classes: classes || '' })))
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2NvbGxlY3Rpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTtJQUdsQyxTQUFTLENBQUMsSUFBUztRQUMzQixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBRXhDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQy9CLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWpDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFDZixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO29CQUN4QixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTtxQkFDM0I7aUJBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPO1lBQ0wsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUU7d0JBQ0osSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLO3dCQUNsQixPQUFPLEVBQUUsTUFBTTtxQkFDaEI7b0JBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7cUJBQ3RCLENBQUMsQ0FBQyxDQUFDLEtBQUs7b0JBQ1QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixPQUFPLEVBQUU7NEJBQ1A7Z0NBQ0UsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTtnQ0FDeEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSTtnQ0FDM0IsT0FBTyxFQUFFLFlBQVk7NkJBQ3RCO3lCQUNGO3FCQUNGLENBQUMsQ0FBQyxDQUFDLEtBQUs7aUJBQ1Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDdkI7YUFDRjtZQUNELEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQ0FDdEIsSUFBSSxLQUNQLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07aUJBQ2xCLEVBQ0QsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFLElBQ3RCLENBQUM7U0FDSixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yQ29sbGVjdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgIGNvbnN0IHsgaGVhZGVyLCBpdGVtcyB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmICgoaGVhZGVyIHx8IHt9KS5idXR0b24pIHtcbiAgICAgIGhlYWRlci5idXR0b24gPSBbe1xuICAgICAgICB0ZXh0OiBoZWFkZXIuYnV0dG9uLnRleHQsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IGhlYWRlci5idXR0b24uYW5jaG9yXG4gICAgICAgIH1cbiAgICAgIH1dO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICB0ZXh0OiBoZWFkZXIudGl0bGUsXG4gICAgICAgICAgICBjbGFzc2VzOiAnYm9sZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlY29uZGFyeTogaGVhZGVyLnN1YnRpdGxlID8ge1xuICAgICAgICAgICAgdGV4dDogaGVhZGVyLnN1YnRpdGxlLFxuICAgICAgICAgIH0gOiBmYWxzZSxcbiAgICAgICAgICBhY3Rpb25zOiBoZWFkZXIuYnV0dG9uID8ge1xuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogaGVhZGVyLmJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGhlYWRlci5idXR0b24ubGluayxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0gOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgYnV0dG9uczogaGVhZGVyLmJ1dHRvblxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogaXRlbS5hbmNob3JcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NlczogY2xhc3NlcyB8fCAnJ1xuICAgICAgfSkpXG4gICAgfTtcbiAgfVxufVxuIl19