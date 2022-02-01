import { merge } from 'lodash';
import apexHelpers from '../apex-helpers';
export default {
    run: function (id, data, options) { return ({
        containerId: apexHelpers.getContainerId(id),
        libOptions: merge({
            chart: {
                type: 'pie',
            },
            series: apexHelpers.getSeries(data.series)[0].data,
            labels: data.categories,
            metadata: {
                series: apexHelpers.getSeriesMetadata(data.series),
            },
        }, options)
    }); }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L21vZGVscy9hcGV4L3RyYW5zZm9ybWVycy9waWUtY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLFdBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUcxQyxlQUFlO0lBQ2IsR0FBRyxFQUFFLFVBQUMsRUFBVSxFQUFFLElBQXVCLEVBQUUsT0FBYSxJQUFnQixPQUFBLENBQUM7UUFDdkUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1FBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDaEIsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxLQUFLO2FBQ1o7WUFDRCxNQUFNLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDdkIsUUFBUSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNuRDtTQUNGLEVBQUUsT0FBTyxDQUFDO0tBQ1osQ0FBQyxFQVpzRSxDQVl0RTtDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGFwZXhIZWxwZXJzIGZyb20gJy4uL2FwZXgtaGVscGVycyc7XHJcbmltcG9ydCB7IENoYXJ0UmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVzcG9uc2UudHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHJ1bjogKGlkOiBzdHJpbmcsIGRhdGE6IENoYXJ0UmVzcG9uc2VEYXRhLCBvcHRpb25zPzogYW55KTogQ2hhcnREYXRhID0+ICh7XHJcbiAgICBjb250YWluZXJJZDogYXBleEhlbHBlcnMuZ2V0Q29udGFpbmVySWQoaWQpLFxyXG4gICAgbGliT3B0aW9uczogbWVyZ2Uoe1xyXG4gICAgICBjaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdwaWUnLFxyXG4gICAgICB9LFxyXG4gICAgICBzZXJpZXM6IGFwZXhIZWxwZXJzLmdldFNlcmllcyhkYXRhLnNlcmllcylbMF0uZGF0YSxcclxuICAgICAgbGFiZWxzOiBkYXRhLmNhdGVnb3JpZXMsXHJcbiAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgc2VyaWVzOiBhcGV4SGVscGVycy5nZXRTZXJpZXNNZXRhZGF0YShkYXRhLnNlcmllcyksXHJcbiAgICAgIH0sXHJcbiAgICB9LCBvcHRpb25zKVxyXG4gIH0pXHJcbn07XHJcbiJdfQ==