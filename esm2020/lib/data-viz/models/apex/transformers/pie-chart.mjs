import { merge } from 'lodash';
import apexHelpers from '../apex-helpers';
export default {
    run: (id, data, options) => ({
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
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovbW9kZWxzL2FwZXgvdHJhbnNmb3JtZXJzL3BpZS1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sV0FBVyxNQUFNLGlCQUFpQixDQUFDO0FBRzFDLGVBQWU7SUFDYixHQUFHLEVBQUUsQ0FBQyxFQUFVLEVBQUUsSUFBdUIsRUFBRSxPQUFhLEVBQWEsRUFBRSxDQUFDLENBQUM7UUFDdkUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1FBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDaEIsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxLQUFLO2FBQ1o7WUFDRCxNQUFNLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDdkIsUUFBUSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNuRDtTQUNGLEVBQUUsT0FBTyxDQUFDO0tBQ1osQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYXBleEhlbHBlcnMgZnJvbSAnLi4vYXBleC1oZWxwZXJzJztcbmltcG9ydCB7IENoYXJ0UmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVzcG9uc2UudHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bjogKGlkOiBzdHJpbmcsIGRhdGE6IENoYXJ0UmVzcG9uc2VEYXRhLCBvcHRpb25zPzogYW55KTogQ2hhcnREYXRhID0+ICh7XG4gICAgY29udGFpbmVySWQ6IGFwZXhIZWxwZXJzLmdldENvbnRhaW5lcklkKGlkKSxcbiAgICBsaWJPcHRpb25zOiBtZXJnZSh7XG4gICAgICBjaGFydDoge1xuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgIH0sXG4gICAgICBzZXJpZXM6IGFwZXhIZWxwZXJzLmdldFNlcmllcyhkYXRhLnNlcmllcylbMF0uZGF0YSxcbiAgICAgIGxhYmVsczogZGF0YS5jYXRlZ29yaWVzLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgc2VyaWVzOiBhcGV4SGVscGVycy5nZXRTZXJpZXNNZXRhZGF0YShkYXRhLnNlcmllcyksXG4gICAgICB9LFxuICAgIH0sIG9wdGlvbnMpXG4gIH0pXG59O1xuIl19