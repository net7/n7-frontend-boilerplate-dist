/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = {
    text: 'Filtra i risultati'
}, ɵ1 = {
    id: 'query',
    placeholder: 'Cerca nei titoli',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon'
}, ɵ2 = {
    text: 'Toponimi',
    additionalText: '786',
}, ɵ3 = {
    id: 'input-text-01',
    placeholder: 'Search',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon',
}, ɵ4 = {
    links: []
}, ɵ5 = {
    text: 'Glossario',
    additionalText: '96',
}, ɵ6 = {
    id: 'input-text-02',
    placeholder: 'Search',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon',
}, ɵ7 = {
    links: []
}, ɵ8 = {
    text: 'Continenti',
    additionalText: '3'
}, ɵ9 = {
    links: []
}, ɵ10 = {
    text: 'Keywords',
    additionalText: '108',
    iconRight: 'n7-icon-angle-right'
}, ɵ11 = {
    links: []
}, ɵ12 = {
    text: 'Data di pubblicazione',
    additionalText: '20',
    iconRight: 'n7-icon-angle-right'
}, ɵ13 = {
    links: []
}, ɵ14 = {
    text: 'Luogo di pubblicazione',
    additionalText: '15',
    iconRight: 'n7-icon-angle-right'
}, ɵ15 = {
    links: []
};
/** @type {?} */
var facets = {
    sections: [{
            header: {
                id: 'header-filtra',
                data: ɵ0
            },
            inputs: [{
                    id: 'query',
                    type: 'text',
                    queryParam: true,
                    delay: 500,
                    schema: {
                        valueType: 'string'
                    },
                    data: ɵ1
                }]
        }, {
            header: {
                id: 'header-toponimi',
                data: ɵ2
            },
            inputs: [{
                    id: 'input-toponimi-filter',
                    type: 'text',
                    delay: 500,
                    schema: {
                        valueType: 'string'
                    },
                    data: ɵ3
                }, {
                    id: 'input-toponimi',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                    },
                    data: ɵ4
                }]
        }, {
            header: {
                id: 'header-glossario',
                data: ɵ5
            },
            inputs: [{
                    id: 'input-glossario-filter',
                    type: 'text',
                    delay: 500,
                    schema: {
                        valueType: 'string'
                    },
                    data: ɵ6
                }, {
                    id: 'input-glossario',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ7
                }]
        }, {
            header: {
                id: 'header-continenti',
                data: ɵ8
            },
            inputs: [{
                    id: 'input-continenti',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ9
                }]
        }, {
            header: {
                id: 'header-keywords',
                data: ɵ10
            },
            inputs: [{
                    id: 'input-keywords',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ11
                }],
        }, {
            header: {
                id: 'header-data',
                data: ɵ12
            },
            inputs: [{
                    id: 'input-data',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ13
                }],
        }, {
            header: {
                id: 'header-luogo',
                data: ɵ14
            },
            inputs: [{
                    id: 'input-luogo',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ15
                }],
        }],
    classes: 'facets-wrapper'
};
var ɵ16 = /**
 * @param {?} id
 * @return {?}
 */
function (id) { return ({
    id: id,
    queryParam: true,
    schema: {
        valueType: id === 'sort' ? 'string' : 'number'
    }
}); };
/** @type {?} */
var layoutInputs = ['page', 'limit', 'sort'].map((ɵ16));
/** @type {?} */
var request = {
    results: {
        id: 'search',
        delay: 500
    },
    facets: {
        id: 'facets',
    },
    provider: 'rest',
    delay: 500
};
export default (/** @type {?} */ ({ request: request, facets: facets, layoutInputs: layoutInputs }));
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbmZpZy5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWNvbmZpZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7U0FNWTtJQUNKLElBQUksRUFBRSxvQkFBb0I7Q0FDM0IsT0FVSztJQUNKLEVBQUUsRUFBRSxPQUFPO0lBQ1gsV0FBVyxFQUFFLGtCQUFrQjtJQUMvQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFdBQVcsRUFBRSxhQUFhO0NBQzNCLE9BS0s7SUFDSixJQUFJLEVBQUUsVUFBVTtJQUNoQixjQUFjLEVBQUUsS0FBSztDQUN0QixPQVNLO0lBQ0osRUFBRSxFQUFFLGVBQWU7SUFDbkIsV0FBVyxFQUFFLFFBQVE7SUFDckIsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixZQUFZLEVBQUUsY0FBYztJQUM1QixZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtDQUMzQixPQVNLO0lBQ0osS0FBSyxFQUFFLEVBQUU7Q0FDVixPQUtLO0lBQ0osSUFBSSxFQUFFLFdBQVc7SUFDakIsY0FBYyxFQUFFLElBQUk7Q0FDckIsT0FTSztJQUNKLEVBQUUsRUFBRSxlQUFlO0lBQ25CLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsT0FTSztJQUNKLEtBQUssRUFBRSxFQUFFO0NBQ1YsT0FLSztJQUNKLElBQUksRUFBRSxZQUFZO0lBQ2xCLGNBQWMsRUFBRSxHQUFHO0NBQ3BCLE9BVUs7SUFDSixLQUFLLEVBQUUsRUFBRTtDQUNWLFFBS0s7SUFDSixJQUFJLEVBQUUsVUFBVTtJQUNoQixjQUFjLEVBQUUsS0FBSztJQUNyQixTQUFTLEVBQUUscUJBQXFCO0NBQ2pDLFFBVUs7SUFDSixLQUFLLEVBQUUsRUFBRTtDQUNWLFFBS0s7SUFDSixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFNBQVMsRUFBRSxxQkFBcUI7Q0FDakMsUUFVSztJQUNKLEtBQUssRUFBRSxFQUFFO0NBQ1YsUUFLSztJQUNKLElBQUksRUFBRSx3QkFBd0I7SUFDOUIsY0FBYyxFQUFFLElBQUk7SUFDcEIsU0FBUyxFQUFFLHFCQUFxQjtDQUNqQyxRQVVLO0lBQ0osS0FBSyxFQUFFLEVBQUU7Q0FDVjs7SUFoTEQsTUFBTSxHQUFHO0lBQ2IsUUFBUSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLGVBQWU7Z0JBQ25CLElBQUksSUFFSDthQUNGO1lBQ0QsTUFBTSxFQUFFLENBQUM7b0JBQ1AsRUFBRSxFQUFFLE9BQU87b0JBQ1gsSUFBSSxFQUFFLE1BQU07b0JBQ1osVUFBVSxFQUFFLElBQUk7b0JBQ2hCLEtBQUssRUFBRSxHQUFHO29CQUNWLE1BQU0sRUFBRTt3QkFDTixTQUFTLEVBQUUsUUFBUTtxQkFDcEI7b0JBQ0QsSUFBSSxJQU9IO2lCQUNGLENBQUM7U0FDSCxFQUFFO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxpQkFBaUI7Z0JBQ3JCLElBQUksSUFHSDthQUNGO1lBQ0QsTUFBTSxFQUFFLENBQUM7b0JBQ1AsRUFBRSxFQUFFLHVCQUF1QjtvQkFDM0IsSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLEdBQUc7b0JBQ1YsTUFBTSxFQUFFO3dCQUNOLFNBQVMsRUFBRSxRQUFRO3FCQUNwQjtvQkFDRCxJQUFJLElBT0g7aUJBQ0YsRUFBRTtvQkFDRCxFQUFFLEVBQUUsZ0JBQWdCO29CQUNwQixJQUFJLEVBQUUsTUFBTTtvQkFDWixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsTUFBTSxFQUFFO3dCQUNOLFNBQVMsRUFBRSxRQUFRO3FCQUVwQjtvQkFDRCxJQUFJLElBRUg7aUJBQ0YsQ0FBQztTQUNILEVBQUU7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLGtCQUFrQjtnQkFDdEIsSUFBSSxJQUdIO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsQ0FBQztvQkFDUCxFQUFFLEVBQUUsd0JBQXdCO29CQUM1QixJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsR0FBRztvQkFDVixNQUFNLEVBQUU7d0JBQ04sU0FBUyxFQUFFLFFBQVE7cUJBQ3BCO29CQUNELElBQUksSUFPSDtpQkFDRixFQUFFO29CQUNELEVBQUUsRUFBRSxpQkFBaUI7b0JBQ3JCLElBQUksRUFBRSxNQUFNO29CQUNaLFVBQVUsRUFBRSxJQUFJO29CQUNoQixNQUFNLEVBQUU7d0JBQ04sU0FBUyxFQUFFLFFBQVE7d0JBQ25CLFFBQVEsRUFBRSxJQUFJO3FCQUNmO29CQUNELElBQUksSUFFSDtpQkFDRixDQUFDO1NBQ0gsRUFBRTtZQUNELE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsbUJBQW1CO2dCQUN2QixJQUFJLElBR0g7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDO29CQUNQLEVBQUUsRUFBRSxrQkFBa0I7b0JBQ3RCLElBQUksRUFBRSxNQUFNO29CQUNaLFVBQVUsRUFBRSxJQUFJO29CQUNoQixNQUFNLEVBQUU7d0JBQ04sU0FBUyxFQUFFLFFBQVE7d0JBQ25CLFFBQVEsRUFBRSxJQUFJO3FCQUNmO29CQUNELElBQUksSUFFSDtpQkFDRixDQUFDO1NBQ0gsRUFBRTtZQUNELE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsaUJBQWlCO2dCQUNyQixJQUFJLEtBSUg7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDO29CQUNQLEVBQUUsRUFBRSxnQkFBZ0I7b0JBQ3BCLElBQUksRUFBRSxNQUFNO29CQUNaLFVBQVUsRUFBRSxJQUFJO29CQUNoQixNQUFNLEVBQUU7d0JBQ04sU0FBUyxFQUFFLFFBQVE7d0JBQ25CLFFBQVEsRUFBRSxJQUFJO3FCQUNmO29CQUNELElBQUksS0FFSDtpQkFDRixDQUFDO1NBQ0gsRUFBRTtZQUNELE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsYUFBYTtnQkFDakIsSUFBSSxLQUlIO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsQ0FBQztvQkFDUCxFQUFFLEVBQUUsWUFBWTtvQkFDaEIsSUFBSSxFQUFFLE1BQU07b0JBQ1osVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE1BQU0sRUFBRTt3QkFDTixTQUFTLEVBQUUsUUFBUTt3QkFDbkIsUUFBUSxFQUFFLElBQUk7cUJBQ2Y7b0JBQ0QsSUFBSSxLQUVIO2lCQUNGLENBQUM7U0FDSCxFQUFFO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixJQUFJLEtBSUg7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDO29CQUNQLEVBQUUsRUFBRSxhQUFhO29CQUNqQixJQUFJLEVBQUUsTUFBTTtvQkFDWixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsTUFBTSxFQUFFO3dCQUNOLFNBQVMsRUFBRSxRQUFRO3dCQUNuQixRQUFRLEVBQUUsSUFBSTtxQkFDZjtvQkFDRCxJQUFJLEtBRUg7aUJBQ0YsQ0FBQztTQUNILENBQUM7SUFDRixPQUFPLEVBQUUsZ0JBQWdCO0NBQzFCOzs7OztBQUVrRCxVQUFDLEVBQUUsSUFBSyxPQUFBLENBQUM7SUFDMUQsRUFBRSxJQUFBO0lBQ0YsVUFBVSxFQUFFLElBQUk7SUFDaEIsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUTtLQUMvQztDQUNGLENBQUMsRUFOeUQsQ0FNekQ7O0lBTkksWUFBWSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE9BTS9DOztJQUVHLE9BQU8sR0FBRztJQUNkLE9BQU8sRUFBRTtRQUNQLEVBQUUsRUFBRSxRQUFRO1FBQ1osS0FBSyxFQUFFLEdBQUc7S0FDWDtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxRQUFRO0tBQ2I7SUFDRCxRQUFRLEVBQUUsTUFBTTtJQUNoQixLQUFLLEVBQUUsR0FBRztDQUNYO0FBRUQsZUFBZSxtQkFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLEVBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC5pbnRlcmZhY2UnO1xuXG5jb25zdCBmYWNldHMgPSB7XG4gIHNlY3Rpb25zOiBbe1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItZmlsdHJhJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0ZpbHRyYSBpIHJpc3VsdGF0aSdcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAncXVlcnknLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIGRlbGF5OiA1MDAsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmFsdWVUeXBlOiAnc3RyaW5nJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdxdWVyeScsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgbmVpIHRpdG9saScsXG4gICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgIGlucHV0UGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICAgIGVudGVyUGF5bG9hZDogJ3NlYXJjaC1lbnRlcicsXG4gICAgICAgIGljb25QYXlsb2FkOiAnc2VhcmNoLWljb24nXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItdG9wb25pbWknLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnVG9wb25pbWknLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogJzc4NicsXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2lucHV0LXRvcG9uaW1pLWZpbHRlcicsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBkZWxheTogNTAwLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZydcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAnaW5wdXQtdGV4dC0wMScsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgaW5wdXRQYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgICAgaWNvblBheWxvYWQ6ICdzZWFyY2gtaWNvbicsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaWQ6ICdpbnB1dC10b3BvbmltaScsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZycsXG4gICAgICAgIC8vIG11bHRpcGxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XVxuICB9LCB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci1nbG9zc2FyaW8nLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnR2xvc3NhcmlvJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6ICc5NicsXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2lucHV0LWdsb3NzYXJpby1maWx0ZXInLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZGVsYXk6IDUwMCxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ2lucHV0LXRleHQtMDInLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgIGlucHV0UGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICAgIGVudGVyUGF5bG9hZDogJ3NlYXJjaC1lbnRlcicsXG4gICAgICAgIGljb25QYXlsb2FkOiAnc2VhcmNoLWljb24nLFxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGlkOiAnaW5wdXQtZ2xvc3NhcmlvJyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmFsdWVUeXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbXVsdGlwbGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBbXVxuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWNvbnRpbmVudGknLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnQ29udGluZW50aScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnMydcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtY29udGluZW50aScsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZycsXG4gICAgICAgIG11bHRpcGxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XVxuICB9LCB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci1rZXl3b3JkcycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdLZXl3b3JkcycsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnMTA4JyxcbiAgICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1yaWdodCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQta2V5d29yZHMnLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtdWx0aXBsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV0sXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWRhdGEnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnRGF0YSBkaSBwdWJibGljYXppb25lJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6ICcyMCcsXG4gICAgICAgIGljb25SaWdodDogJ243LWljb24tYW5nbGUtcmlnaHQnXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2lucHV0LWRhdGEnLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtdWx0aXBsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV0sXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWx1b2dvJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0x1b2dvIGRpIHB1YmJsaWNhemlvbmUnLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogJzE1JyxcbiAgICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1yaWdodCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtbHVvZ28nLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtdWx0aXBsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV0sXG4gIH1dLFxuICBjbGFzc2VzOiAnZmFjZXRzLXdyYXBwZXInXG59O1xuXG5jb25zdCBsYXlvdXRJbnB1dHMgPSBbJ3BhZ2UnLCAnbGltaXQnLCAnc29ydCddLm1hcCgoaWQpID0+ICh7XG4gIGlkLFxuICBxdWVyeVBhcmFtOiB0cnVlLFxuICBzY2hlbWE6IHtcbiAgICB2YWx1ZVR5cGU6IGlkID09PSAnc29ydCcgPyAnc3RyaW5nJyA6ICdudW1iZXInXG4gIH1cbn0pKTtcblxuY29uc3QgcmVxdWVzdCA9IHtcbiAgcmVzdWx0czoge1xuICAgIGlkOiAnc2VhcmNoJyxcbiAgICBkZWxheTogNTAwXG4gIH0sXG4gIGZhY2V0czoge1xuICAgIGlkOiAnZmFjZXRzJyxcbiAgfSxcbiAgcHJvdmlkZXI6ICdyZXN0JyxcbiAgZGVsYXk6IDUwMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgeyByZXF1ZXN0LCBmYWNldHMsIGxheW91dElucHV0cyB9IGFzIFNlYXJjaENvbmZpZztcbiJdfQ==