import { DataSource } from '@n7-frontend/core';
export class AwSearchLayoutTabsDS extends DataSource {
    constructor() {
        super(...arguments);
        this.selected = 'list';
    }
    transform() {
        return {
            items: [{
                    text: 'LISTA',
                    payload: 'list',
                    classes: this.selected === 'list' ? 'is-selected' : '',
                }, {
                    text: 'GRAFICO',
                    payload: 'chart',
                    classes: this.selected === 'chart' ? 'is-selected' : '',
                }, {
                    text: 'TIMELINE',
                    payload: 'timeline',
                    classes: this.selected === 'timeline' ? 'is-selected' : '',
                }],
        };
    }
    setSelected(tabId) {
        this.selected = tabId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NlYXJjaC1sYXlvdXQtdGFicy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFVBQVU7SUFBcEQ7O1FBQ1UsYUFBUSxHQUFHLE1BQU0sQ0FBQztJQXVCNUIsQ0FBQztJQXJCVyxTQUFTO1FBQ2pCLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztvQkFDTixJQUFJLEVBQUUsT0FBTztvQkFDYixPQUFPLEVBQUUsTUFBTTtvQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDdkQsRUFBRTtvQkFDRCxJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3hELEVBQUU7b0JBQ0QsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDM0QsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQUs7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dFRhYnNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgc2VsZWN0ZWQgPSAnbGlzdCc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpdGVtczogW3tcclxuICAgICAgICB0ZXh0OiAnTElTVEEnLFxyXG4gICAgICAgIHBheWxvYWQ6ICdsaXN0JyxcclxuICAgICAgICBjbGFzc2VzOiB0aGlzLnNlbGVjdGVkID09PSAnbGlzdCcgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0ZXh0OiAnR1JBRklDTycsXHJcbiAgICAgICAgcGF5bG9hZDogJ2NoYXJ0JyxcclxuICAgICAgICBjbGFzc2VzOiB0aGlzLnNlbGVjdGVkID09PSAnY2hhcnQnID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdGV4dDogJ1RJTUVMSU5FJyxcclxuICAgICAgICBwYXlsb2FkOiAndGltZWxpbmUnLFxyXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuc2VsZWN0ZWQgPT09ICd0aW1lbGluZScgPyAnaXMtc2VsZWN0ZWQnIDogJycsXHJcbiAgICAgIH1dLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTZWxlY3RlZCh0YWJJZCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRhYklkO1xyXG4gIH1cclxufVxyXG4iXX0=