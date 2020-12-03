import { DataSource } from '@n7-frontend/core';
export class MrMapDS extends DataSource {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transform(data) {
        return {
            _setInstance: (instance) => {
                this.mapInstance = instance;
            },
            containerId: 'map-canvas',
            libOptions: {
                scrollWheelZoom: false,
            },
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {}
                }],
            initialView: {
                center: [51.505, -0.09],
                zoom: 13
            },
            markers: [
                {
                    coords: [51.505, -0.09],
                    template: 'This is the center of the map',
                    title: 'London'
                }, {
                    coords: [51.495, -0.1],
                    template: 'Elephant and castle',
                }, {
                    coords: [51.46687084654015, -0.2130156755447388],
                    template: 'Putney bridge',
                }
            ]
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7SUFLckMsNkRBQTZEO0lBQ25ELFNBQVMsQ0FBQyxJQUFTO1FBQzNCLE9BQU87WUFDTCxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFDOUIsQ0FBQztZQUNELFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRTtnQkFDVixlQUFlLEVBQUUsS0FBSzthQUN2QjtZQUNELFVBQVUsRUFBRSxDQUFDO29CQUNYLEdBQUcsRUFBRSw4RUFBOEU7b0JBQ25GLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUM7WUFDRixXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUN2QixJQUFJLEVBQUUsRUFBRTthQUNUO1lBQ0QsT0FBTyxFQUFFO2dCQUNQO29CQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDdkIsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsS0FBSyxFQUFFLFFBQVE7aUJBQ2hCLEVBQUU7b0JBQ0QsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO29CQUN0QixRQUFRLEVBQUUscUJBQXFCO2lCQUNoQyxFQUFFO29CQUNELE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2hELFFBQVEsRUFBRSxlQUFlO2lCQUMxQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJNYXBEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIG1hcEluc3RhbmNlO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBNYXBEYXRhIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9zZXRJbnN0YW5jZTogKGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgdGlsZUxheWVyczogW3tcclxuICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcclxuICAgICAgICBvcHRpb25zOiB7fVxyXG4gICAgICB9XSxcclxuICAgICAgaW5pdGlhbFZpZXc6IHtcclxuICAgICAgICBjZW50ZXI6IFs1MS41MDUsIC0wLjA5XSxcclxuICAgICAgICB6b29tOiAxM1xyXG4gICAgICB9LFxyXG4gICAgICBtYXJrZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29vcmRzOiBbNTEuNTA1LCAtMC4wOV0sXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogJ1RoaXMgaXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwJyxcclxuICAgICAgICAgIHRpdGxlOiAnTG9uZG9uJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNvb3JkczogWzUxLjQ5NSwgLTAuMV0sXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogJ0VsZXBoYW50IGFuZCBjYXN0bGUnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNvb3JkczogWzUxLjQ2Njg3MDg0NjU0MDE1LCAtMC4yMTMwMTU2NzU1NDQ3Mzg4XSxcclxuICAgICAgICAgIHRlbXBsYXRlOiAnUHV0bmV5IGJyaWRnZScsXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=