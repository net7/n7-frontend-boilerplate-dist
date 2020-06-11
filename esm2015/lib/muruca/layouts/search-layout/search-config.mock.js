const ɵ0 = {
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
const facets = {
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
const ɵ16 = (id) => ({
    id,
    queryParam: true,
    schema: {
        valueType: id === 'sort' ? 'string' : 'number'
    }
});
const layoutInputs = ['page', 'limit', 'sort'].map(ɵ16);
const request = {
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
export default { request, facets, layoutInputs };
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbmZpZy5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWNvbmZpZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJXQU1ZO0lBQ0osSUFBSSxFQUFFLG9CQUFvQjtDQUMzQixPQVVLO0lBQ0osRUFBRSxFQUFFLE9BQU87SUFDWCxXQUFXLEVBQUUsa0JBQWtCO0lBQy9CLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsT0FLSztJQUNKLElBQUksRUFBRSxVQUFVO0lBQ2hCLGNBQWMsRUFBRSxLQUFLO0NBQ3RCLE9BU0s7SUFDSixFQUFFLEVBQUUsZUFBZTtJQUNuQixXQUFXLEVBQUUsUUFBUTtJQUNyQixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFlBQVksRUFBRSxjQUFjO0lBQzVCLFdBQVcsRUFBRSxhQUFhO0NBQzNCLE9BU0s7SUFDSixLQUFLLEVBQUUsRUFBRTtDQUNWLE9BS0s7SUFDSixJQUFJLEVBQUUsV0FBVztJQUNqQixjQUFjLEVBQUUsSUFBSTtDQUNyQixPQVNLO0lBQ0osRUFBRSxFQUFFLGVBQWU7SUFDbkIsV0FBVyxFQUFFLFFBQVE7SUFDckIsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixZQUFZLEVBQUUsY0FBYztJQUM1QixZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtDQUMzQixPQVNLO0lBQ0osS0FBSyxFQUFFLEVBQUU7Q0FDVixPQUtLO0lBQ0osSUFBSSxFQUFFLFlBQVk7SUFDbEIsY0FBYyxFQUFFLEdBQUc7Q0FDcEIsT0FVSztJQUNKLEtBQUssRUFBRSxFQUFFO0NBQ1YsUUFLSztJQUNKLElBQUksRUFBRSxVQUFV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RSxFQUFFLFFBQVE7S0FDYjtJQUNELFFBQVEsRUFBRSxNQUFNO0lBQ2hCLEtBQUssRUFBRSxHQUFHO0NBQ1gsQ0FBQztBQUVGLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLmludGVyZmFjZSc7XG5cbmNvbnN0IGZhY2V0cyA9IHtcbiAgc2VjdGlvbnM6IFt7XG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci1maWx0cmEnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnRmlsdHJhIGkgcmlzdWx0YXRpJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdxdWVyeScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgZGVsYXk6IDUwMCxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ3F1ZXJ5JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdDZXJjYSBuZWkgdGl0b2xpJyxcbiAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgaW5wdXRQYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgICAgaWNvblBheWxvYWQ6ICdzZWFyY2gtaWNvbidcbiAgICAgIH1cbiAgICB9XVxuICB9LCB7XG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci10b3BvbmltaScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdUb3BvbmltaScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnNzg2JyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtdG9wb25pbWktZmlsdGVyJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGRlbGF5OiA1MDAsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmFsdWVUeXBlOiAnc3RyaW5nJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdpbnB1dC10ZXh0LTAxJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICBpbnB1dFBheWxvYWQ6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgICBlbnRlclBheWxvYWQ6ICdzZWFyY2gtZW50ZXInLFxuICAgICAgICBpY29uUGF5bG9hZDogJ3NlYXJjaC1pY29uJyxcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBpZDogJ2lucHV0LXRvcG9uaW1pJyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmFsdWVUeXBlOiAnc3RyaW5nJyxcbiAgICAgICAgLy8gbXVsdGlwbGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBbXVxuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWdsb3NzYXJpbycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdHbG9zc2FyaW8nLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogJzk2JyxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtZ2xvc3NhcmlvLWZpbHRlcicsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBkZWxheTogNTAwLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZydcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAnaW5wdXQtdGV4dC0wMicsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgICAgaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgaW5wdXRQYXlsb2FkOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgICAgZW50ZXJQYXlsb2FkOiAnc2VhcmNoLWVudGVyJyxcbiAgICAgICAgaWNvblBheWxvYWQ6ICdzZWFyY2gtaWNvbicsXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgaWQ6ICdpbnB1dC1nbG9zc2FyaW8nLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtdWx0aXBsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItY29udGluZW50aScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdDb250aW5lbnRpJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6ICczJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdpbnB1dC1jb250aW5lbnRpJyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmFsdWVUeXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbXVsdGlwbGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBbXVxuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWtleXdvcmRzJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0tleXdvcmRzJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6ICcxMDgnLFxuICAgICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLXJpZ2h0J1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdpbnB1dC1rZXl3b3JkcycsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZycsXG4gICAgICAgIG11bHRpcGxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XSxcbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItZGF0YScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdEYXRhIGRpIHB1YmJsaWNhemlvbmUnLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogJzIwJyxcbiAgICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1yaWdodCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnaW5wdXQtZGF0YScsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZycsXG4gICAgICAgIG11bHRpcGxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XSxcbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItbHVvZ28nLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnTHVvZ28gZGkgcHViYmxpY2F6aW9uZScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiAnMTUnLFxuICAgICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLXJpZ2h0J1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdpbnB1dC1sdW9nbycsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZycsXG4gICAgICAgIG11bHRpcGxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XSxcbiAgfV0sXG4gIGNsYXNzZXM6ICdmYWNldHMtd3JhcHBlcidcbn07XG5cbmNvbnN0IGxheW91dElucHV0cyA9IFsncGFnZScsICdsaW1pdCcsICdzb3J0J10ubWFwKChpZCkgPT4gKHtcbiAgaWQsXG4gIHF1ZXJ5UGFyYW06IHRydWUsXG4gIHNjaGVtYToge1xuICAgIHZhbHVlVHlwZTogaWQgPT09ICdzb3J0JyA/ICdzdHJpbmcnIDogJ251bWJlcidcbiAgfVxufSkpO1xuXG5jb25zdCByZXF1ZXN0ID0ge1xuICByZXN1bHRzOiB7XG4gICAgaWQ6ICdzZWFyY2gnLFxuICAgIGRlbGF5OiA1MDBcbiAgfSxcbiAgZmFjZXRzOiB7XG4gICAgaWQ6ICdmYWNldHMnLFxuICB9LFxuICBwcm92aWRlcjogJ3Jlc3QnLFxuICBkZWxheTogNTAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IHJlcXVlc3QsIGZhY2V0cywgbGF5b3V0SW5wdXRzIH0gYXMgU2VhcmNoQ29uZmlnO1xuIl19