import { merge } from 'lodash';
import apexHelpers from '../apex-helpers';
export default {
    run: function (id, data, options) { return ({
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
    }); }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsYmFyLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L21vZGVscy9hcGV4L3RyYW5zZm9ybWVycy9yYWRpYWxiYXItY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLFdBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUcxQyxlQUFlO0lBQ2IsR0FBRyxFQUFFLFVBQUMsRUFBVSxFQUFFLElBQXVCLEVBQUUsT0FBYSxJQUFnQixPQUFBLENBQUM7UUFDdkUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1FBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDaEIsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxXQUFXO2FBQ2xCO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLFNBQVMsRUFBRTtvQkFDVCxVQUFVLEVBQUUsQ0FBQyxFQUFFO29CQUNmLFFBQVEsRUFBRSxFQUFFO2lCQUNiO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDdkIsUUFBUSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNuRDtTQUNGLEVBQUUsT0FBTyxDQUFDO0tBQ1osQ0FBQyxFQWxCc0UsQ0FrQnRFO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJ0RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgYXBleEhlbHBlcnMgZnJvbSAnLi4vYXBleC1oZWxwZXJzJztcclxuaW1wb3J0IHsgQ2hhcnRSZXNwb25zZURhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9yZXNwb25zZS50eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcnVuOiAoaWQ6IHN0cmluZywgZGF0YTogQ2hhcnRSZXNwb25zZURhdGEsIG9wdGlvbnM/OiBhbnkpOiBDaGFydERhdGEgPT4gKHtcclxuICAgIGNvbnRhaW5lcklkOiBhcGV4SGVscGVycy5nZXRDb250YWluZXJJZChpZCksXHJcbiAgICBsaWJPcHRpb25zOiBtZXJnZSh7XHJcbiAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgdHlwZTogJ3JhZGlhbEJhcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgcmFkaWFsQmFyOiB7XHJcbiAgICAgICAgICBzdGFydEFuZ2xlOiAtOTAsXHJcbiAgICAgICAgICBlbmRBbmdsZTogOTAsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzZXJpZXM6IGFwZXhIZWxwZXJzLmdldFNlcmllcyhkYXRhLnNlcmllcylbMF0uZGF0YSxcclxuICAgICAgbGFiZWxzOiBkYXRhLmNhdGVnb3JpZXMsXHJcbiAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgc2VyaWVzOiBhcGV4SGVscGVycy5nZXRTZXJpZXNNZXRhZGF0YShkYXRhLnNlcmllcyksXHJcbiAgICAgIH0sXHJcbiAgICB9LCBvcHRpb25zKVxyXG4gIH0pXHJcbn07XHJcbiJdfQ==