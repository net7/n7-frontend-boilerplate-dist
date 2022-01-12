import { merge } from 'lodash';
import apexHelpers from '../apex-helpers';
export default {
    run: (id, data, options) => ({
        containerId: apexHelpers.getContainerId(id),
        libOptions: merge({
            chart: {
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                }
            },
            series: apexHelpers.getSeries(data.series)[0].data,
            labels: data.categories,
            metadata: {
                series: apexHelpers.getSeriesMetadata(data.series),
            },
        }, options)
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsYmFyLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L21vZGVscy9hcGV4L3RyYW5zZm9ybWVycy9yYWRpYWxiYXItY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLFdBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUcxQyxlQUFlO0lBQ2IsR0FBRyxFQUFFLENBQUMsRUFBVSxFQUFFLElBQXVCLEVBQUUsT0FBYSxFQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1lBQ2hCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsV0FBVzthQUNsQjtZQUNELFdBQVcsRUFBRTtnQkFDWCxTQUFTLEVBQUU7b0JBQ1QsVUFBVSxFQUFFLENBQUMsRUFBRTtvQkFDZixRQUFRLEVBQUUsRUFBRTtpQkFDYjthQUNGO1lBQ0QsTUFBTSxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbEQsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3ZCLFFBQVEsRUFBRTtnQkFDUixNQUFNLEVBQUUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbkQ7U0FDRixFQUFFLE9BQU8sQ0FBQztLQUNaLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGFwZXhIZWxwZXJzIGZyb20gJy4uL2FwZXgtaGVscGVycyc7XG5pbXBvcnQgeyBDaGFydFJlc3BvbnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3Jlc3BvbnNlLnR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBydW46IChpZDogc3RyaW5nLCBkYXRhOiBDaGFydFJlc3BvbnNlRGF0YSwgb3B0aW9ucz86IGFueSk6IENoYXJ0RGF0YSA9PiAoe1xuICAgIGNvbnRhaW5lcklkOiBhcGV4SGVscGVycy5nZXRDb250YWluZXJJZChpZCksXG4gICAgbGliT3B0aW9uczogbWVyZ2Uoe1xuICAgICAgY2hhcnQ6IHtcbiAgICAgICAgdHlwZTogJ3JhZGlhbEJhcicsXG4gICAgICB9LFxuICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgcmFkaWFsQmFyOiB7XG4gICAgICAgICAgc3RhcnRBbmdsZTogLTkwLFxuICAgICAgICAgIGVuZEFuZ2xlOiA5MCxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNlcmllczogYXBleEhlbHBlcnMuZ2V0U2VyaWVzKGRhdGEuc2VyaWVzKVswXS5kYXRhLFxuICAgICAgbGFiZWxzOiBkYXRhLmNhdGVnb3JpZXMsXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBzZXJpZXM6IGFwZXhIZWxwZXJzLmdldFNlcmllc01ldGFkYXRhKGRhdGEuc2VyaWVzKSxcbiAgICAgIH0sXG4gICAgfSwgb3B0aW9ucylcbiAgfSlcbn07XG4iXX0=