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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsYmFyLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdml6L21vZGVscy9hcGV4L3RyYW5zZm9ybWVycy9yYWRpYWxiYXItY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLFdBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUcxQyxlQUFlO0lBQ2IsR0FBRyxFQUFFLENBQUMsRUFBVSxFQUFFLElBQXVCLEVBQUUsT0FBYSxFQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1lBQ2hCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsV0FBVzthQUNsQjtZQUNELFdBQVcsRUFBRTtnQkFDWCxTQUFTLEVBQUU7b0JBQ1QsVUFBVSxFQUFFLENBQUMsRUFBRTtvQkFDZixRQUFRLEVBQUUsRUFBRTtpQkFDYjthQUNGO1lBQ0QsTUFBTSxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbEQsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3ZCLFFBQVEsRUFBRTtnQkFDUixNQUFNLEVBQUUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbkQ7U0FDRixFQUFFLE9BQU8sQ0FBQztLQUNaLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBhcGV4SGVscGVycyBmcm9tICcuLi9hcGV4LWhlbHBlcnMnO1xyXG5pbXBvcnQgeyBDaGFydFJlc3BvbnNlRGF0YSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3Jlc3BvbnNlLnR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBydW46IChpZDogc3RyaW5nLCBkYXRhOiBDaGFydFJlc3BvbnNlRGF0YSwgb3B0aW9ucz86IGFueSk6IENoYXJ0RGF0YSA9PiAoe1xyXG4gICAgY29udGFpbmVySWQ6IGFwZXhIZWxwZXJzLmdldENvbnRhaW5lcklkKGlkKSxcclxuICAgIGxpYk9wdGlvbnM6IG1lcmdlKHtcclxuICAgICAgY2hhcnQ6IHtcclxuICAgICAgICB0eXBlOiAncmFkaWFsQmFyJyxcclxuICAgICAgfSxcclxuICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICByYWRpYWxCYXI6IHtcclxuICAgICAgICAgIHN0YXJ0QW5nbGU6IC05MCxcclxuICAgICAgICAgIGVuZEFuZ2xlOiA5MCxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlcmllczogYXBleEhlbHBlcnMuZ2V0U2VyaWVzKGRhdGEuc2VyaWVzKVswXS5kYXRhLFxyXG4gICAgICBsYWJlbHM6IGRhdGEuY2F0ZWdvcmllcyxcclxuICAgICAgbWV0YWRhdGE6IHtcclxuICAgICAgICBzZXJpZXM6IGFwZXhIZWxwZXJzLmdldFNlcmllc01ldGFkYXRhKGRhdGEuc2VyaWVzKSxcclxuICAgICAgfSxcclxuICAgIH0sIG9wdGlvbnMpXHJcbiAgfSlcclxufTtcclxuIl19