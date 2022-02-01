import { merge } from 'lodash';
import apexHelpers from '../apex-helpers';
export default {
    run: (id, data, options) => ({
        containerId: apexHelpers.getContainerId(id),
        libOptions: merge({
            chart: {
                type: 'bar',
            },
            series: apexHelpers.getSeries(data.series),
            xaxis: {
                categories: data.categories,
            },
            metadata: {
                series: apexHelpers.getSeriesMetadata(data.series),
            },
        }, options)
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovbW9kZWxzL2FwZXgvdHJhbnNmb3JtZXJzL2Jhci1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sV0FBVyxNQUFNLGlCQUFpQixDQUFDO0FBRzFDLGVBQWU7SUFDYixHQUFHLEVBQUUsQ0FBQyxFQUFVLEVBQUUsSUFBdUIsRUFBRSxPQUFhLEVBQWEsRUFBRSxDQUFDLENBQUM7UUFDdkUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1FBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDaEIsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxLQUFLO2FBQ1o7WUFDRCxNQUFNLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzFDLEtBQUssRUFBRTtnQkFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDNUI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ25EO1NBQ0YsRUFBRSxPQUFPLENBQUM7S0FDWixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhcGV4SGVscGVycyBmcm9tICcuLi9hcGV4LWhlbHBlcnMnO1xuaW1wb3J0IHsgQ2hhcnRSZXNwb25zZURhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9yZXNwb25zZS50eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcnVuOiAoaWQ6IHN0cmluZywgZGF0YTogQ2hhcnRSZXNwb25zZURhdGEsIG9wdGlvbnM/OiBhbnkpOiBDaGFydERhdGEgPT4gKHtcbiAgICBjb250YWluZXJJZDogYXBleEhlbHBlcnMuZ2V0Q29udGFpbmVySWQoaWQpLFxuICAgIGxpYk9wdGlvbnM6IG1lcmdlKHtcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgfSxcbiAgICAgIHNlcmllczogYXBleEhlbHBlcnMuZ2V0U2VyaWVzKGRhdGEuc2VyaWVzKSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIGNhdGVnb3JpZXM6IGRhdGEuY2F0ZWdvcmllcyxcbiAgICAgIH0sXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBzZXJpZXM6IGFwZXhIZWxwZXJzLmdldFNlcmllc01ldGFkYXRhKGRhdGEuc2VyaWVzKSxcbiAgICAgIH0sXG4gICAgfSwgb3B0aW9ucylcbiAgfSlcbn07XG4iXX0=