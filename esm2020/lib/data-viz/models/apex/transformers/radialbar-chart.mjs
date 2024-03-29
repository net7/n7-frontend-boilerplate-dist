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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFsYmFyLWNoYXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvZGF0YS12aXovbW9kZWxzL2FwZXgvdHJhbnNmb3JtZXJzL3JhZGlhbGJhci1jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sV0FBVyxNQUFNLGlCQUFpQixDQUFDO0FBRzFDLGVBQWU7SUFDYixHQUFHLEVBQUUsQ0FBQyxFQUFVLEVBQUUsSUFBdUIsRUFBRSxPQUFhLEVBQWEsRUFBRSxDQUFDLENBQUM7UUFDdkUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1FBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDaEIsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxXQUFXO2FBQ2xCO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLFNBQVMsRUFBRTtvQkFDVCxVQUFVLEVBQUUsQ0FBQyxFQUFFO29CQUNmLFFBQVEsRUFBRSxFQUFFO2lCQUNiO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDdkIsUUFBUSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNuRDtTQUNGLEVBQUUsT0FBTyxDQUFDO0tBQ1osQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFydERhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGFwZXhIZWxwZXJzIGZyb20gJy4uL2FwZXgtaGVscGVycyc7XHJcbmltcG9ydCB7IENoYXJ0UmVzcG9uc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVzcG9uc2UudHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHJ1bjogKGlkOiBzdHJpbmcsIGRhdGE6IENoYXJ0UmVzcG9uc2VEYXRhLCBvcHRpb25zPzogYW55KTogQ2hhcnREYXRhID0+ICh7XHJcbiAgICBjb250YWluZXJJZDogYXBleEhlbHBlcnMuZ2V0Q29udGFpbmVySWQoaWQpLFxyXG4gICAgbGliT3B0aW9uczogbWVyZ2Uoe1xyXG4gICAgICBjaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdyYWRpYWxCYXInLFxyXG4gICAgICB9LFxyXG4gICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgIHJhZGlhbEJhcjoge1xyXG4gICAgICAgICAgc3RhcnRBbmdsZTogLTkwLFxyXG4gICAgICAgICAgZW5kQW5nbGU6IDkwLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2VyaWVzOiBhcGV4SGVscGVycy5nZXRTZXJpZXMoZGF0YS5zZXJpZXMpWzBdLmRhdGEsXHJcbiAgICAgIGxhYmVsczogZGF0YS5jYXRlZ29yaWVzLFxyXG4gICAgICBtZXRhZGF0YToge1xyXG4gICAgICAgIHNlcmllczogYXBleEhlbHBlcnMuZ2V0U2VyaWVzTWV0YWRhdGEoZGF0YS5zZXJpZXMpLFxyXG4gICAgICB9LFxyXG4gICAgfSwgb3B0aW9ucylcclxuICB9KVxyXG59O1xyXG4iXX0=