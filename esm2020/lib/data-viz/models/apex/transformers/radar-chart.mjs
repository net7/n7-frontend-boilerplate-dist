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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXItY2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9kYXRhLXZpei9tb2RlbHMvYXBleC90cmFuc2Zvcm1lcnMvcmFkYXItY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLFdBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUcxQyxlQUFlO0lBQ2IsR0FBRyxFQUFFLENBQUMsRUFBVSxFQUFFLElBQXVCLEVBQUUsT0FBYSxFQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLFdBQVcsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1lBQ2hCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0QsTUFBTSxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQyxLQUFLLEVBQUU7Z0JBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQzVCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNuRDtTQUNGLEVBQUUsT0FBTyxDQUFDO0tBQ1osQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYXBleEhlbHBlcnMgZnJvbSAnLi4vYXBleC1oZWxwZXJzJztcbmltcG9ydCB7IENoYXJ0UmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVzcG9uc2UudHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJ1bjogKGlkOiBzdHJpbmcsIGRhdGE6IENoYXJ0UmVzcG9uc2VEYXRhLCBvcHRpb25zPzogYW55KTogQ2hhcnREYXRhID0+ICh7XG4gICAgY29udGFpbmVySWQ6IGFwZXhIZWxwZXJzLmdldENvbnRhaW5lcklkKGlkKSxcbiAgICBsaWJPcHRpb25zOiBtZXJnZSh7XG4gICAgICBjaGFydDoge1xuICAgICAgICB0eXBlOiAncmFkYXInLFxuICAgICAgfSxcbiAgICAgIHNlcmllczogYXBleEhlbHBlcnMuZ2V0U2VyaWVzKGRhdGEuc2VyaWVzKSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIGNhdGVnb3JpZXM6IGRhdGEuY2F0ZWdvcmllcyxcbiAgICAgIH0sXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBzZXJpZXM6IGFwZXhIZWxwZXJzLmdldFNlcmllc01ldGFkYXRhKGRhdGEuc2VyaWVzKSxcbiAgICAgIH0sXG4gICAgfSwgb3B0aW9ucylcbiAgfSlcbn07XG4iXX0=