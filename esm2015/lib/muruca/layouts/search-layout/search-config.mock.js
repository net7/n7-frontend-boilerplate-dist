const ɵ0 = {
    id: 'query',
    placeholder: 'Cerca nei titoli',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon'
}, ɵ1 = {
    text: 'Toponimi',
    additionalText: null,
}, ɵ2 = {
    id: 'text-01',
    placeholder: 'Search',
    icon: 'n7-icon-search',
    inputPayload: 'search-input',
    enterPayload: 'search-enter',
    iconPayload: 'search-icon',
}, ɵ3 = {
    links: []
}, ɵ4 = {
    text: 'Continenti',
    additionalText: null
}, ɵ5 = {
    links: []
}, ɵ6 = {
    text: 'Autori',
    additionalText: null
}, ɵ7 = {
    links: []
}, ɵ8 = {
    text: 'Keywords',
    additionalText: null,
    iconRight: 'n7-icon-angle-down'
}, ɵ9 = {
    links: []
}, ɵ10 = {
    text: 'Data di pubblicazione',
    additionalText: null,
    iconRight: 'n7-icon-angle-down'
}, ɵ11 = {
    links: []
}, ɵ12 = {
    text: 'Luogo di pubblicazione',
    additionalText: null,
    iconRight: 'n7-icon-angle-down'
}, ɵ13 = {
    links: []
};
const facets = {
    sections: [{
            id: 'section-query',
            inputs: [{
                    id: 'query',
                    type: 'text',
                    queryParam: true,
                    delay: 500,
                    schema: {
                        valueType: 'string'
                    },
                    data: ɵ0
                }]
        }, {
            id: 'section-toponyms',
            header: {
                id: 'header-toponyms',
                data: ɵ1
            },
            inputs: [{
                    id: 'toponyms-filter',
                    type: 'text',
                    delay: 500,
                    schema: {
                        valueType: 'string'
                    },
                    data: ɵ2
                }, {
                    id: 'toponyms',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ3
                }]
        }, {
            id: 'section-continents',
            header: {
                id: 'header-continents',
                data: ɵ4
            },
            inputs: [{
                    id: 'continents',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ5
                }]
        }, {
            id: 'section-authors',
            header: {
                id: 'header-authors',
                data: ɵ6
            },
            inputs: [{
                    id: 'authors',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ7
                }]
        }, {
            id: 'section-keywords',
            header: {
                id: 'header-keywords',
                data: ɵ8
            },
            inputs: [{
                    id: 'keywords',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ9
                }],
        }, {
            id: 'section-date',
            header: {
                id: 'header-date',
                data: ɵ10
            },
            inputs: [{
                    id: 'date',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ11
                }],
        }, {
            id: 'section-place',
            header: {
                id: 'header-place',
                data: ɵ12
            },
            inputs: [{
                    id: 'place',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ13
                }],
        }],
    classes: 'facets-wrapper'
};
const ɵ14 = (id) => ({
    id,
    queryParam: true,
    schema: {
        valueType: id === 'sort' ? 'string' : 'number'
    }
});
const layoutInputs = ['page', 'limit', 'sort'].map(ɵ14);
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
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbmZpZy5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWNvbmZpZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJXQWFZO0lBQ0osRUFBRSxFQUFFLE9BQU87SUFDWCxXQUFXLEVBQUUsa0JBQWtCO0lBQy9CLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsT0FNSztJQUNKLElBQUksRUFBRSxVQUFVO0lBQ2hCLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLE9BU0s7SUFDSixFQUFFLEVBQUUsU0FBUztJQUNiLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsT0FTSztJQUNKLEtBQUssRUFBRSxFQUFFO0NBQ1YsT0FNSztJQUNKLElBQUksRUFBRSxZQUFZO0lBQ2xCLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLE9BVUs7SUFDSixLQUFLLEVBQUUsRUFBRTtDQUNWLE9BTUs7SUFDSixJQUFJLEVBQUUsUUFBUTtJQUNkLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLE9BVUs7SUFDSixLQUFLLEVBQUUsRUFBRTtDQUNWLE9BTUs7SUFDSixJQUFJLEVBQUUsVUFBVTtJQUNoQixjQUFjLEVBQUUsSUFBSTtJQUNwQixTQUFTLEVBQUUsb0JBQW9CO0NBQ2hDLE9BVUs7SUFDSixLQUFLLEVBQUUsRUFBRTtDQUNWLFFBTUs7SUFDSixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7Q0FDaEMsUUFVSztJQUNKLEtBQUss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LElBQUk7cUJBQ2Y7b0JBQ0QsSUFBSSxLQUVIO2lCQUNGLENBQUM7U0FDSCxFQUFFO1lBQ0QsRUFBRSxFQUFFLGVBQWU7WUFDbkIsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxjQUFjO2dCQUNsQixJQUFJLEtBSUg7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDO29CQUNQLEVBQUUsRUFBRSxPQUFPO29CQUNYLElBQUksRUFBRSxNQUFNO29CQUNaLFVBQVUsRUFBRSxJQUFJO29CQUNoQixNQUFNLEVBQUU7d0JBQ04sU0FBUyxFQUFFLFFBQVE7d0JBQ25CLFFBQVEsRUFBRSxJQUFJO3FCQUNmO29CQUNELElBQUksS0FFSDtpQkFDRixDQUFDO1NBQ0gsQ0FBQztJQUNGLE9BQU8sRUFBRSxnQkFBZ0I7Q0FDMUIsQ0FBQztZQUVpRCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxFQUFFO0lBQ0YsVUFBVSxFQUFFLElBQUk7SUFDaEIsTUFBTSxFQUFFO1FBQ04sU0FBUyxFQUFFLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUTtLQUMvQztDQUNGLENBQUM7QUFORixNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxLQU0vQyxDQUFDO0FBRUosTUFBTSxPQUFPLEdBQUc7SUFDZCxPQUFPLEVBQUU7UUFDUCxFQUFFLEVBQUUsUUFBUTtRQUNaLEtBQUssRUFBRSxHQUFHO0tBQ1g7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEVBQUUsUUFBUTtLQUNiO0lBQ0QsUUFBUSxFQUFFLE1BQU07SUFDaEIsS0FBSyxFQUFFLEdBQUc7Q0FDWCxDQUFDO0FBRUYsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2guaW50ZXJmYWNlJztcblxuY29uc3QgZmFjZXRzID0ge1xuICBzZWN0aW9uczogW3tcbiAgICBpZDogJ3NlY3Rpb24tcXVlcnknLFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAncXVlcnknLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIGRlbGF5OiA1MDAsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmFsdWVUeXBlOiAnc3RyaW5nJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICdxdWVyeScsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgbmVpIHRpdG9saScsXG4gICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgIGlucHV0UGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICAgIGVudGVyUGF5bG9hZDogJ3NlYXJjaC1lbnRlcicsXG4gICAgICAgIGljb25QYXlsb2FkOiAnc2VhcmNoLWljb24nXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnc2VjdGlvbi10b3BvbnltcycsXG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci10b3BvbnltcycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdUb3BvbmltaScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBudWxsLFxuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICd0b3Bvbnltcy1maWx0ZXInLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZGVsYXk6IDUwMCxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogJ3RleHQtMDEnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgICAgIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgIGlucHV0UGF5bG9hZDogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICAgIGVudGVyUGF5bG9hZDogJ3NlYXJjaC1lbnRlcicsXG4gICAgICAgIGljb25QYXlsb2FkOiAnc2VhcmNoLWljb24nLFxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGlkOiAndG9wb255bXMnLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtdWx0aXBsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnc2VjdGlvbi1jb250aW5lbnRzJyxcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWNvbnRpbmVudHMnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnQ29udGluZW50aScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBudWxsXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2NvbnRpbmVudHMnLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtdWx0aXBsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnc2VjdGlvbi1hdXRob3JzJyxcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWF1dGhvcnMnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnQXV0b3JpJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnYXV0aG9ycycsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZycsXG4gICAgICAgIG11bHRpcGxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XVxuICB9LCB7XG4gICAgaWQ6ICdzZWN0aW9uLWtleXdvcmRzJyxcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWtleXdvcmRzJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0tleXdvcmRzJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IG51bGwsXG4gICAgICAgIGljb25SaWdodDogJ243LWljb24tYW5nbGUtZG93bidcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAna2V5d29yZHMnLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtdWx0aXBsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV0sXG4gIH0sIHtcbiAgICBpZDogJ3NlY3Rpb24tZGF0ZScsXG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci1kYXRlJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0RhdGEgZGkgcHViYmxpY2F6aW9uZScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBudWxsLFxuICAgICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLWRvd24nXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ2RhdGUnLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtdWx0aXBsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV0sXG4gIH0sIHtcbiAgICBpZDogJ3NlY3Rpb24tcGxhY2UnLFxuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnTHVvZ28gZGkgcHViYmxpY2F6aW9uZScsXG4gICAgICAgIGFkZGl0aW9uYWxUZXh0OiBudWxsLFxuICAgICAgICBpY29uUmlnaHQ6ICduNy1pY29uLWFuZ2xlLWRvd24nXG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ3BsYWNlJyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmFsdWVUeXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbXVsdGlwbGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBbXVxuICAgICAgfVxuICAgIH1dLFxuICB9XSxcbiAgY2xhc3NlczogJ2ZhY2V0cy13cmFwcGVyJ1xufTtcblxuY29uc3QgbGF5b3V0SW5wdXRzID0gWydwYWdlJywgJ2xpbWl0JywgJ3NvcnQnXS5tYXAoKGlkKSA9PiAoe1xuICBpZCxcbiAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgc2NoZW1hOiB7XG4gICAgdmFsdWVUeXBlOiBpZCA9PT0gJ3NvcnQnID8gJ3N0cmluZycgOiAnbnVtYmVyJ1xuICB9XG59KSk7XG5cbmNvbnN0IHJlcXVlc3QgPSB7XG4gIHJlc3VsdHM6IHtcbiAgICBpZDogJ3NlYXJjaCcsXG4gICAgZGVsYXk6IDUwMFxuICB9LFxuICBmYWNldHM6IHtcbiAgICBpZDogJ2ZhY2V0cycsXG4gIH0sXG4gIHByb3ZpZGVyOiAncmVzdCcsXG4gIGRlbGF5OiA1MDBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgcmVxdWVzdCwgZmFjZXRzLCBsYXlvdXRJbnB1dHMgfSBhcyBTZWFyY2hDb25maWc7XG4iXX0=