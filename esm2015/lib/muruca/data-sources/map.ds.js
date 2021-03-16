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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7SUFLckMsNkRBQTZEO0lBQ25ELFNBQVMsQ0FBQyxJQUFTO1FBQzNCLE9BQU87WUFDTCxZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFDOUIsQ0FBQztZQUNELFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFVBQVUsRUFBRTtnQkFDVixlQUFlLEVBQUUsS0FBSzthQUN2QjtZQUNELFVBQVUsRUFBRSxDQUFDO29CQUNYLEdBQUcsRUFBRSw4RUFBOEU7b0JBQ25GLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUM7WUFDRixXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUN2QixJQUFJLEVBQUUsRUFBRTthQUNUO1lBQ0QsT0FBTyxFQUFFO2dCQUNQO29CQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDdkIsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsS0FBSyxFQUFFLFFBQVE7aUJBQ2hCLEVBQUU7b0JBQ0QsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO29CQUN0QixRQUFRLEVBQUUscUJBQXFCO2lCQUNoQyxFQUFFO29CQUNELE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2hELFFBQVEsRUFBRSxlQUFlO2lCQUMxQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJNYXBEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIG1hcEluc3RhbmNlO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBNYXBEYXRhIHtcbiAgICByZXR1cm4ge1xuICAgICAgX3NldEluc3RhbmNlOiAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lcklkOiAnbWFwLWNhbnZhcycsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgdGlsZUxheWVyczogW3tcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jYXJ0b2RiLWJhc2VtYXBzLXtzfS5nbG9iYWwuc3NsLmZhc3RseS5uZXQvbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsXG4gICAgICAgIG9wdGlvbnM6IHt9XG4gICAgICB9XSxcbiAgICAgIGluaXRpYWxWaWV3OiB7XG4gICAgICAgIGNlbnRlcjogWzUxLjUwNSwgLTAuMDldLFxuICAgICAgICB6b29tOiAxM1xuICAgICAgfSxcbiAgICAgIG1hcmtlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvb3JkczogWzUxLjUwNSwgLTAuMDldLFxuICAgICAgICAgIHRlbXBsYXRlOiAnVGhpcyBpcyB0aGUgY2VudGVyIG9mIHRoZSBtYXAnLFxuICAgICAgICAgIHRpdGxlOiAnTG9uZG9uJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgY29vcmRzOiBbNTEuNDk1LCAtMC4xXSxcbiAgICAgICAgICB0ZW1wbGF0ZTogJ0VsZXBoYW50IGFuZCBjYXN0bGUnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgY29vcmRzOiBbNTEuNDY2ODcwODQ2NTQwMTUsIC0wLjIxMzAxNTY3NTU0NDczODhdLFxuICAgICAgICAgIHRlbXBsYXRlOiAnUHV0bmV5IGJyaWRnZScsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=