import { DataSource } from '@n7-frontend/core';
export class AwSchedaDropdownDS extends DataSource {
    transform(response) {
        const { digitalObjects } = response;
        const firstObject = digitalObjects[0];
        return {
            header: {
                label: firstObject.label,
                icon: {
                    id: 'n7-icon-caret-down'
                },
                payload: 'toggle',
            },
            items: digitalObjects.map(({ label, type }, index) => ({
                label,
                type,
                payload: index,
                selected: index === 0,
            }))
        };
    }
    toggle() {
        const { classes } = this.output;
        this.output.classes = classes ? null : 'is-open';
    }
    onChange(payload) {
        // link check
        if (this.output.items[payload].type !== 'external') {
            this.output.items.forEach((item) => {
                item.selected = item.payload === payload;
                if (item.selected) {
                    this.output.header.label = item.label;
                }
            });
        }
        // close
        this.toggle();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9zY2hlZGEtZHJvcGRvd24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxVQUFVO0lBQ3RDLFNBQVMsQ0FBQyxRQUFRO1FBQzFCLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFDcEMsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE9BQU87WUFDTCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLO2dCQUN4QixJQUFJLEVBQUU7b0JBQ0osRUFBRSxFQUFFLG9CQUFvQjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFLFFBQVE7YUFDbEI7WUFDRCxLQUFLLEVBQUUsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDckQsS0FBSztnQkFDTCxJQUFJO2dCQUNKLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQzthQUN0QixDQUFDLENBQUM7U0FDSixDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFFRCxRQUFRLENBQUMsT0FBTztRQUNkLGFBQWE7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUM7Z0JBQ3pDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELFFBQVE7UUFDUixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgU2NoZWRhRHJvcGRvd25EYXRhIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFEcm9wZG93bkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShyZXNwb25zZSk6IFNjaGVkYURyb3Bkb3duRGF0YSB7XHJcbiAgICBjb25zdCB7IGRpZ2l0YWxPYmplY3RzIH0gPSByZXNwb25zZTtcclxuICAgIGNvbnN0IGZpcnN0T2JqZWN0ID0gZGlnaXRhbE9iamVjdHNbMF07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICBsYWJlbDogZmlyc3RPYmplY3QubGFiZWwsXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgaWQ6ICduNy1pY29uLWNhcmV0LWRvd24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXlsb2FkOiAndG9nZ2xlJyxcclxuICAgICAgfSxcclxuICAgICAgaXRlbXM6IGRpZ2l0YWxPYmplY3RzLm1hcCgoeyBsYWJlbCwgdHlwZSB9LCBpbmRleCkgPT4gKHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHBheWxvYWQ6IGluZGV4LFxyXG4gICAgICAgIHNlbGVjdGVkOiBpbmRleCA9PT0gMCxcclxuICAgICAgfSkpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLm91dHB1dDtcclxuICAgIHRoaXMub3V0cHV0LmNsYXNzZXMgPSBjbGFzc2VzID8gbnVsbCA6ICdpcy1vcGVuJztcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHBheWxvYWQpIHtcclxuICAgIC8vIGxpbmsgY2hlY2tcclxuICAgIGlmICh0aGlzLm91dHB1dC5pdGVtc1twYXlsb2FkXS50eXBlICE9PSAnZXh0ZXJuYWwnKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0Lml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbS5wYXlsb2FkID09PSBwYXlsb2FkO1xyXG4gICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICB0aGlzLm91dHB1dC5oZWFkZXIubGFiZWwgPSBpdGVtLmxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBjbG9zZVxyXG4gICAgdGhpcy50b2dnbGUoKTtcclxuICB9XHJcbn1cclxuIl19