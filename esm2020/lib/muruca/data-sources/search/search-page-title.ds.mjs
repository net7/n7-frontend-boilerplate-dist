import { DataSource, _t } from '@n7-frontend/core';
export class MrSearchPageTitleDS extends DataSource {
    transform() {
        const { title, description, searchId } = this.options.config;
        const data = {
            title: {
                main: {
                    text: _t(title)
                }
            }
        };
        if (description && description.buttonText) {
            data.actions = {
                buttons: [{
                        text: _t(description.buttonText),
                        anchor: {
                            payload: searchId
                        }
                    }]
            };
        }
        return data;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3NlYXJjaC9zZWFyY2gtcGFnZS10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxVQUFVO0lBQ3ZDLFNBQVM7UUFDakIsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0QsTUFBTSxJQUFJLEdBQW1CO1lBQzNCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNiLE9BQU8sRUFBRSxDQUFDO3dCQUNSLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQzt3QkFDaEMsTUFBTSxFQUFFOzRCQUNOLE9BQU8sRUFBRSxRQUFRO3lCQUNsQjtxQkFDRixDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lclRpdGxlRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hQYWdlVGl0bGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCk6IElubmVyVGl0bGVEYXRhIHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2VhcmNoSWQgfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XG4gICAgY29uc3QgZGF0YTogSW5uZXJUaXRsZURhdGEgPSB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgdGV4dDogX3QodGl0bGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGRlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uLmJ1dHRvblRleHQpIHtcbiAgICAgIGRhdGEuYWN0aW9ucyA9IHtcbiAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICB0ZXh0OiBfdChkZXNjcmlwdGlvbi5idXR0b25UZXh0KSxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIHBheWxvYWQ6IHNlYXJjaElkXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIl19