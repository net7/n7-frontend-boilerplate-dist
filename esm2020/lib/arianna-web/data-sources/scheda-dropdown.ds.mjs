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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWRyb3Bkb3duLmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL3NjaGVkYS1kcm9wZG93bi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFVBQVU7SUFDdEMsU0FBUyxDQUFDLFFBQVE7UUFDMUIsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUNwQyxNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTztZQUNMLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7Z0JBQ3hCLElBQUksRUFBRTtvQkFDSixFQUFFLEVBQUUsb0JBQW9CO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUUsUUFBUTthQUNsQjtZQUNELEtBQUssRUFBRSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxLQUFLO2dCQUNMLElBQUk7Z0JBQ0osT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDO2FBQ3RCLENBQUMsQ0FBQztTQUNKLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbkQsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFPO1FBQ2QsYUFBYTtRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQztnQkFDekMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDdkM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsUUFBUTtRQUNSLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTY2hlZGFEcm9wZG93bkRhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYURyb3Bkb3duRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHJlc3BvbnNlKTogU2NoZWRhRHJvcGRvd25EYXRhIHtcclxuICAgIGNvbnN0IHsgZGlnaXRhbE9iamVjdHMgfSA9IHJlc3BvbnNlO1xyXG4gICAgY29uc3QgZmlyc3RPYmplY3QgPSBkaWdpdGFsT2JqZWN0c1swXTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgIGxhYmVsOiBmaXJzdE9iamVjdC5sYWJlbCxcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICBpZDogJ243LWljb24tY2FyZXQtZG93bidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBheWxvYWQ6ICd0b2dnbGUnLFxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtczogZGlnaXRhbE9iamVjdHMubWFwKCh7IGxhYmVsLCB0eXBlIH0sIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgcGF5bG9hZDogaW5kZXgsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IGluZGV4ID09PSAwLFxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMub3V0cHV0O1xyXG4gICAgdGhpcy5vdXRwdXQuY2xhc3NlcyA9IGNsYXNzZXMgPyBudWxsIDogJ2lzLW9wZW4nO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UocGF5bG9hZCkge1xyXG4gICAgLy8gbGluayBjaGVja1xyXG4gICAgaWYgKHRoaXMub3V0cHV0Lml0ZW1zW3BheWxvYWRdLnR5cGUgIT09ICdleHRlcm5hbCcpIHtcclxuICAgICAgdGhpcy5vdXRwdXQuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBpdGVtLnBheWxvYWQgPT09IHBheWxvYWQ7XHJcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHRoaXMub3V0cHV0LmhlYWRlci5sYWJlbCA9IGl0ZW0ubGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIGNsb3NlXHJcbiAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=