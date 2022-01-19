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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC10YWJzLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zZWFyY2gtbGF5b3V0LXRhYnMuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxVQUFVO0lBQXBEOztRQUNVLGFBQVEsR0FBRyxNQUFNLENBQUM7SUF1QjVCLENBQUM7SUFyQlcsU0FBUztRQUNqQixPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUM7b0JBQ04sSUFBSSxFQUFFLE9BQU87b0JBQ2IsT0FBTyxFQUFFLE1BQU07b0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQ3ZELEVBQUU7b0JBQ0QsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUN4RCxFQUFFO29CQUNELElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsVUFBVTtvQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7aUJBQzNELENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVcsQ0FBQyxLQUFLO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTZWFyY2hMYXlvdXRUYWJzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcml2YXRlIHNlbGVjdGVkID0gJ2xpc3QnO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXRlbXM6IFt7XHJcbiAgICAgICAgdGV4dDogJ0xJU1RBJyxcclxuICAgICAgICBwYXlsb2FkOiAnbGlzdCcsXHJcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ2xpc3QnID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdGV4dDogJ0dSQUZJQ08nLFxyXG4gICAgICAgIHBheWxvYWQ6ICdjaGFydCcsXHJcbiAgICAgICAgY2xhc3NlczogdGhpcy5zZWxlY3RlZCA9PT0gJ2NoYXJ0JyA/ICdpcy1zZWxlY3RlZCcgOiAnJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHRleHQ6ICdUSU1FTElORScsXHJcbiAgICAgICAgcGF5bG9hZDogJ3RpbWVsaW5lJyxcclxuICAgICAgICBjbGFzc2VzOiB0aGlzLnNlbGVjdGVkID09PSAndGltZWxpbmUnID8gJ2lzLXNlbGVjdGVkJyA6ICcnLFxyXG4gICAgICB9XSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2VsZWN0ZWQodGFiSWQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0YWJJZDtcclxuICB9XHJcbn1cclxuIl19