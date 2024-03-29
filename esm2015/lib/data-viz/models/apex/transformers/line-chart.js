import { merge } from 'lodash';
import apexHelpers from '../apex-helpers';
export default {
    run: (id, data, options) => ({
        containerId: apexHelpers.getContainerId(id),
        libOptions: merge({
            chart: {
                type: 'line',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9tb2RlbHMvYXBleC90cmFuc2Zvcm1lcnMvbGluZS1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRS9CLE9BQU8sV0FBVyxNQUFNLGlCQUFpQixDQUFDO0FBRzFDLGVBQWU7SUFDYixHQUFHLEVBQUUsQ0FBQyxFQUFVLEVBQUUsSUFBdUIsRUFBRSxPQUFhLEVBQWEsRUFBRSxDQUFDLENBQUM7UUFDdkUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1FBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDaEIsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRCxNQUFNLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzFDLEtBQUssRUFBRTtnQkFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDNUI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ25EO1NBQ0YsRUFBRSxPQUFPLENBQUM7S0FDWixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgYXBleEhlbHBlcnMgZnJvbSAnLi4vYXBleC1oZWxwZXJzJztcclxuaW1wb3J0IHsgQ2hhcnRSZXNwb25zZURhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9yZXNwb25zZS50eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcnVuOiAoaWQ6IHN0cmluZywgZGF0YTogQ2hhcnRSZXNwb25zZURhdGEsIG9wdGlvbnM/OiBhbnkpOiBDaGFydERhdGEgPT4gKHtcclxuICAgIGNvbnRhaW5lcklkOiBhcGV4SGVscGVycy5nZXRDb250YWluZXJJZChpZCksXHJcbiAgICBsaWJPcHRpb25zOiBtZXJnZSh7XHJcbiAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZXJpZXM6IGFwZXhIZWxwZXJzLmdldFNlcmllcyhkYXRhLnNlcmllcyksXHJcbiAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogZGF0YS5jYXRlZ29yaWVzLFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgIHNlcmllczogYXBleEhlbHBlcnMuZ2V0U2VyaWVzTWV0YWRhdGEoZGF0YS5zZXJpZXMpLFxyXG4gICAgICB9LFxyXG4gICAgfSwgb3B0aW9ucylcclxuICB9KVxyXG59O1xyXG4iXX0=