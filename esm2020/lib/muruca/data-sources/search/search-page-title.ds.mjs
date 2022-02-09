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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL3NlYXJjaC9zZWFyY2gtcGFnZS10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxVQUFVO0lBQ3ZDLFNBQVM7UUFDakIsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0QsTUFBTSxJQUFJLEdBQW1CO1lBQzNCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNiLE9BQU8sRUFBRSxDQUFDO3dCQUNSLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQzt3QkFDaEMsTUFBTSxFQUFFOzRCQUNOLE9BQU8sRUFBRSxRQUFRO3lCQUNsQjtxQkFDRixDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lclRpdGxlRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJTZWFyY2hQYWdlVGl0bGVEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKTogSW5uZXJUaXRsZURhdGEge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHNlYXJjaElkIH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xyXG4gICAgY29uc3QgZGF0YTogSW5uZXJUaXRsZURhdGEgPSB7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgbWFpbjoge1xyXG4gICAgICAgICAgdGV4dDogX3QodGl0bGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbi5idXR0b25UZXh0KSB7XHJcbiAgICAgIGRhdGEuYWN0aW9ucyA9IHtcclxuICAgICAgICBidXR0b25zOiBbe1xyXG4gICAgICAgICAgdGV4dDogX3QoZGVzY3JpcHRpb24uYnV0dG9uVGV4dCksXHJcbiAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgcGF5bG9hZDogc2VhcmNoSWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=