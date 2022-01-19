import { merge } from 'lodash';
import apexHelpers from '../apex-helpers';
export default {
    run: function (id, data, options) { return ({
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
    }); }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLXZpei9tb2RlbHMvYXBleC90cmFuc2Zvcm1lcnMvbGluZS1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRS9CLE9BQU8sV0FBVyxNQUFNLGlCQUFpQixDQUFDO0FBRzFDLGVBQWU7SUFDYixHQUFHLEVBQUUsVUFBQyxFQUFVLEVBQUUsSUFBdUIsRUFBRSxPQUFhLElBQWdCLE9BQUEsQ0FBQztRQUN2RSxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7UUFDM0MsVUFBVSxFQUFFLEtBQUssQ0FBQztZQUNoQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNELE1BQU0sRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDMUMsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTthQUM1QjtZQUNELFFBQVEsRUFBRTtnQkFDUixNQUFNLEVBQUUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbkQ7U0FDRixFQUFFLE9BQU8sQ0FBQztLQUNaLENBQUMsRUFkc0UsQ0FjdEU7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBDaGFydERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCBhcGV4SGVscGVycyBmcm9tICcuLi9hcGV4LWhlbHBlcnMnO1xyXG5pbXBvcnQgeyBDaGFydFJlc3BvbnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3Jlc3BvbnNlLnR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBydW46IChpZDogc3RyaW5nLCBkYXRhOiBDaGFydFJlc3BvbnNlRGF0YSwgb3B0aW9ucz86IGFueSk6IENoYXJ0RGF0YSA9PiAoe1xyXG4gICAgY29udGFpbmVySWQ6IGFwZXhIZWxwZXJzLmdldENvbnRhaW5lcklkKGlkKSxcclxuICAgIGxpYk9wdGlvbnM6IG1lcmdlKHtcclxuICAgICAgY2hhcnQ6IHtcclxuICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlcmllczogYXBleEhlbHBlcnMuZ2V0U2VyaWVzKGRhdGEuc2VyaWVzKSxcclxuICAgICAgeGF4aXM6IHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBkYXRhLmNhdGVnb3JpZXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGFkYXRhOiB7XHJcbiAgICAgICAgc2VyaWVzOiBhcGV4SGVscGVycy5nZXRTZXJpZXNNZXRhZGF0YShkYXRhLnNlcmllcyksXHJcbiAgICAgIH0sXHJcbiAgICB9LCBvcHRpb25zKVxyXG4gIH0pXHJcbn07XHJcbiJdfQ==