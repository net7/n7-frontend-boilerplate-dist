import { DataSource } from '@n7-frontend/core';
const ICON_OPEN = 'n7-icon-angle-up';
const ICON_CLOSE = 'n7-icon-angle-down';
export class MrFormWrapperAccordionDS extends DataSource {
    transform(data) {
        const { form } = data;
        const { groups } = form.config;
        // set accordion headers
        data.form.config.groups = groups.map((group) => ({
            ...group,
            options: {
                ...group.options,
                text: group.options.label,
                payload: group.id,
                iconRight: group.options.isOpen ? ICON_OPEN : ICON_CLOSE,
                isOpen: group.options.isOpen
            }
        }));
        return data;
    }
    toggleGroup(groupId) {
        this.output.form.config.groups.forEach((group) => {
            if (group.id === groupId) {
                const { isOpen } = group.options;
                group.options.iconRight = isOpen ? ICON_CLOSE : ICON_OPEN;
                group.options.isOpen = !group.options.isOpen;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS13cmFwcGVyLWFjY29yZGlvbi5kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9kYXRhLXNvdXJjZXMvZm9ybS13cmFwcGVyLWFjY29yZGlvbi5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUM7QUFDckMsTUFBTSxVQUFVLEdBQUcsb0JBQW9CLENBQUM7QUFFeEMsTUFBTSxPQUFPLHdCQUF5QixTQUFRLFVBQVU7SUFDNUMsU0FBUyxDQUFDLElBQWdDO1FBQ2xELE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFL0Isd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLEdBQUcsS0FBSztZQUNSLE9BQU8sRUFBRTtnQkFDUCxHQUFHLEtBQUssQ0FBQyxPQUFPO2dCQUNoQixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dCQUN6QixPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVO2dCQUN4RCxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNO2FBQzdCO1NBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBTztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQy9DLElBQUksS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUU7Z0JBQ3hCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNqQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUMxRCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzlDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgTXJGb3JtV3JhcHBlckFjY29yZGlvbkRhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0td3JhcHBlci1hY2NvcmRpb24vZm9ybS13cmFwcGVyLWFjY29yZGlvbic7XG5cbmNvbnN0IElDT05fT1BFTiA9ICduNy1pY29uLWFuZ2xlLXVwJztcbmNvbnN0IElDT05fQ0xPU0UgPSAnbjctaWNvbi1hbmdsZS1kb3duJztcblxuZXhwb3J0IGNsYXNzIE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IE1yRm9ybVdyYXBwZXJBY2NvcmRpb25EYXRhKTogTXJGb3JtV3JhcHBlckFjY29yZGlvbkRhdGEge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gZGF0YTtcbiAgICBjb25zdCB7IGdyb3VwcyB9ID0gZm9ybS5jb25maWc7XG5cbiAgICAvLyBzZXQgYWNjb3JkaW9uIGhlYWRlcnNcbiAgICBkYXRhLmZvcm0uY29uZmlnLmdyb3VwcyA9IGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiAoe1xuICAgICAgLi4uZ3JvdXAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIC4uLmdyb3VwLm9wdGlvbnMsXG4gICAgICAgIHRleHQ6IGdyb3VwLm9wdGlvbnMubGFiZWwsXG4gICAgICAgIHBheWxvYWQ6IGdyb3VwLmlkLFxuICAgICAgICBpY29uUmlnaHQ6IGdyb3VwLm9wdGlvbnMuaXNPcGVuID8gSUNPTl9PUEVOIDogSUNPTl9DTE9TRSxcbiAgICAgICAgaXNPcGVuOiBncm91cC5vcHRpb25zLmlzT3BlblxuICAgICAgfVxuICAgIH0pKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHRvZ2dsZUdyb3VwKGdyb3VwSWQpIHtcbiAgICB0aGlzLm91dHB1dC5mb3JtLmNvbmZpZy5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgIGlmIChncm91cC5pZCA9PT0gZ3JvdXBJZCkge1xuICAgICAgICBjb25zdCB7IGlzT3BlbiB9ID0gZ3JvdXAub3B0aW9ucztcbiAgICAgICAgZ3JvdXAub3B0aW9ucy5pY29uUmlnaHQgPSBpc09wZW4gPyBJQ09OX0NMT1NFIDogSUNPTl9PUEVOO1xuICAgICAgICBncm91cC5vcHRpb25zLmlzT3BlbiA9ICFncm91cC5vcHRpb25zLmlzT3BlbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19