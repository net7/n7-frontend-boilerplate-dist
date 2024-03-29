import { merge } from 'lodash';
import apexHelpers from '../apex-helpers';
export default {
    run: (id, data, options) => ({
        containerId: apexHelpers.getContainerId(id),
        libOptions: merge({
            chart: {
                type: 'radar',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXItY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvZGF0YS12aXovbW9kZWxzL2FwZXgvdHJhbnNmb3JtZXJzL3JhZGFyLWNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxXQUFXLE1BQU0saUJBQWlCLENBQUM7QUFHMUMsZUFBZTtJQUNiLEdBQUcsRUFBRSxDQUFDLEVBQVUsRUFBRSxJQUF1QixFQUFFLE9BQWEsRUFBYSxFQUFFLENBQUMsQ0FBQztRQUN2RSxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7UUFDM0MsVUFBVSxFQUFFLEtBQUssQ0FBQztZQUNoQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNELE1BQU0sRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDMUMsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTthQUM1QjtZQUNELFFBQVEsRUFBRTtnQkFDUixNQUFNLEVBQUUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbkQ7U0FDRixFQUFFLE9BQU8sQ0FBQztLQUNaLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBhcGV4SGVscGVycyBmcm9tICcuLi9hcGV4LWhlbHBlcnMnO1xyXG5pbXBvcnQgeyBDaGFydFJlc3BvbnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3Jlc3BvbnNlLnR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBydW46IChpZDogc3RyaW5nLCBkYXRhOiBDaGFydFJlc3BvbnNlRGF0YSwgb3B0aW9ucz86IGFueSk6IENoYXJ0RGF0YSA9PiAoe1xyXG4gICAgY29udGFpbmVySWQ6IGFwZXhIZWxwZXJzLmdldENvbnRhaW5lcklkKGlkKSxcclxuICAgIGxpYk9wdGlvbnM6IG1lcmdlKHtcclxuICAgICAgY2hhcnQ6IHtcclxuICAgICAgICB0eXBlOiAncmFkYXInLFxyXG4gICAgICB9LFxyXG4gICAgICBzZXJpZXM6IGFwZXhIZWxwZXJzLmdldFNlcmllcyhkYXRhLnNlcmllcyksXHJcbiAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogZGF0YS5jYXRlZ29yaWVzLFxyXG4gICAgICB9LFxyXG4gICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgIHNlcmllczogYXBleEhlbHBlcnMuZ2V0U2VyaWVzTWV0YWRhdGEoZGF0YS5zZXJpZXMpLFxyXG4gICAgICB9LFxyXG4gICAgfSwgb3B0aW9ucylcclxuICB9KVxyXG59O1xyXG4iXX0=