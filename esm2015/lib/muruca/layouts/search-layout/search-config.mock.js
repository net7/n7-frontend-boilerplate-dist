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
    text: 'Keywords',
    additionalText: null,
    iconRight: 'n7-icon-angle-down'
}, ɵ7 = {
    links: []
}, ɵ8 = {
    text: 'Data di pubblicazione',
    additionalText: null,
    iconRight: 'n7-icon-angle-down'
}, ɵ9 = {
    links: []
}, ɵ10 = {
    text: 'Luogo di pubblicazione',
    additionalText: null,
    iconRight: 'n7-icon-angle-down'
}, ɵ11 = {
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
            id: 'section-keywords',
            header: {
                id: 'header-keywords',
                data: ɵ6
            },
            inputs: [{
                    id: 'keywords',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ7
                }],
        }, {
            id: 'section-date',
            header: {
                id: 'header-date',
                data: ɵ8
            },
            inputs: [{
                    id: 'date',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ9
                }],
        }, {
            id: 'section-place',
            header: {
                id: 'header-place',
                data: ɵ10
            },
            inputs: [{
                    id: 'place',
                    type: 'link',
                    queryParam: true,
                    schema: {
                        valueType: 'string',
                        multiple: true
                    },
                    data: ɵ11
                }],
        }],
    classes: 'facets-wrapper'
};
const ɵ12 = (id) => ({
    id,
    queryParam: true,
    schema: {
        valueType: id === 'sort' ? 'string' : 'number'
    }
});
const layoutInputs = ['page', 'limit', 'sort'].map(ɵ12);
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
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWNvbmZpZy5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWNvbmZpZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJXQWFZO0lBQ0osRUFBRSxFQUFFLE9BQU87SUFDWCxXQUFXLEVBQUUsa0JBQWtCO0lBQy9CLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsT0FNSztJQUNKLElBQUksRUFBRSxVQUFVO0lBQ2hCLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLE9BU0s7SUFDSixFQUFFLEVBQUUsU0FBUztJQUNiLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsT0FTSztJQUNKLEtBQUssRUFBRSxFQUFFO0NBQ1YsT0FNSztJQUNKLElBQUksRUFBRSxZQUFZO0lBQ2xCLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLE9BVUs7SUFDSixLQUFLLEVBQUUsRUFBRTtDQUNWLE9BTUs7SUFDSixJQUFJLEVBQUUsVUFBVTtJQUNoQixjQUFjLEVBQUUsSUFBSTtJQUNwQixTQUFTLEVBQUUsb0JBQW9CO0NBQ2hDLE9BVUs7SUFDSixLQUFLLEVBQUUsRUFBRTtDQUNWLE9BTUs7SUFDSixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFNBQVMsRUFBRSxvQkFBb0I7Q0FDaEMsT0FVSztJQUNKLEtBQUssRUFBRSxFQUFFO0NBQ1YsUUFNSztJQUNKLElBQUksRUFBRSx3QkFBd0I7SUFDOUIsY0FBYyxFQUFFLElBQUk7SUFDcEIsU0FBUyxFQUFFLG9C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aUQsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUQsRUFBRTtJQUNGLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVE7S0FDL0M7Q0FDRixDQUFDO0FBTkYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FNL0MsQ0FBQztBQUVKLE1BQU0sT0FBTyxHQUFHO0lBQ2QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxFQUFFLFFBQVE7UUFDWixLQUFLLEVBQUUsR0FBRztLQUNYO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNELFFBQVEsRUFBRSxNQUFNO0lBQ2hCLEtBQUssRUFBRSxHQUFHO0NBQ1gsQ0FBQztBQUVGLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLmludGVyZmFjZSc7XG5cbmNvbnN0IGZhY2V0cyA9IHtcbiAgc2VjdGlvbnM6IFt7XG4gICAgaWQ6ICdzZWN0aW9uLXF1ZXJ5JyxcbiAgICBpbnB1dHM6IFt7XG4gICAgICBpZDogJ3F1ZXJ5JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBkZWxheTogNTAwLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZydcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiAncXVlcnknLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIG5laSB0aXRvbGknLFxuICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICBpbnB1dFBheWxvYWQ6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgICBlbnRlclBheWxvYWQ6ICdzZWFyY2gtZW50ZXInLFxuICAgICAgICBpY29uUGF5bG9hZDogJ3NlYXJjaC1pY29uJ1xuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ3NlY3Rpb24tdG9wb255bXMnLFxuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXItdG9wb255bXMnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnVG9wb25pbWknLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogbnVsbCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAndG9wb255bXMtZmlsdGVyJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGRlbGF5OiA1MDAsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmFsdWVUeXBlOiAnc3RyaW5nJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6ICd0ZXh0LTAxJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICBpbnB1dFBheWxvYWQ6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgICBlbnRlclBheWxvYWQ6ICdzZWFyY2gtZW50ZXInLFxuICAgICAgICBpY29uUGF5bG9hZDogJ3NlYXJjaC1pY29uJyxcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBpZDogJ3RvcG9ueW1zJyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmFsdWVUeXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbXVsdGlwbGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBbXVxuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ3NlY3Rpb24tY29udGluZW50cycsXG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci1jb250aW5lbnRzJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGV4dDogJ0NvbnRpbmVudGknLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogbnVsbFxuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdjb250aW5lbnRzJyxcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHF1ZXJ5UGFyYW06IHRydWUsXG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgdmFsdWVUeXBlOiAnc3RyaW5nJyxcbiAgICAgICAgbXVsdGlwbGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxpbmtzOiBbXVxuICAgICAgfVxuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ3NlY3Rpb24ta2V5d29yZHMnLFxuICAgIGhlYWRlcjoge1xuICAgICAgaWQ6ICdoZWFkZXIta2V5d29yZHMnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnS2V5d29yZHMnLFxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogbnVsbCxcbiAgICAgICAgaWNvblJpZ2h0OiAnbjctaWNvbi1hbmdsZS1kb3duJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgaWQ6ICdrZXl3b3JkcycsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZycsXG4gICAgICAgIG11bHRpcGxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XSxcbiAgfSwge1xuICAgIGlkOiAnc2VjdGlvbi1kYXRlJyxcbiAgICBoZWFkZXI6IHtcbiAgICAgIGlkOiAnaGVhZGVyLWRhdGUnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0ZXh0OiAnRGF0YSBkaSBwdWJibGljYXppb25lJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IG51bGwsXG4gICAgICAgIGljb25SaWdodDogJ243LWljb24tYW5nbGUtZG93bidcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAnZGF0ZScsXG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICBxdWVyeVBhcmFtOiB0cnVlLFxuICAgICAgc2NoZW1hOiB7XG4gICAgICAgIHZhbHVlVHlwZTogJ3N0cmluZycsXG4gICAgICAgIG11bHRpcGxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsaW5rczogW11cbiAgICAgIH1cbiAgICB9XSxcbiAgfSwge1xuICAgIGlkOiAnc2VjdGlvbi1wbGFjZScsXG4gICAgaGVhZGVyOiB7XG4gICAgICBpZDogJ2hlYWRlci1wbGFjZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6ICdMdW9nbyBkaSBwdWJibGljYXppb25lJyxcbiAgICAgICAgYWRkaXRpb25hbFRleHQ6IG51bGwsXG4gICAgICAgIGljb25SaWdodDogJ243LWljb24tYW5nbGUtZG93bidcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czogW3tcbiAgICAgIGlkOiAncGxhY2UnLFxuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgcXVlcnlQYXJhbTogdHJ1ZSxcbiAgICAgIHNjaGVtYToge1xuICAgICAgICB2YWx1ZVR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBtdWx0aXBsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGlua3M6IFtdXG4gICAgICB9XG4gICAgfV0sXG4gIH1dLFxuICBjbGFzc2VzOiAnZmFjZXRzLXdyYXBwZXInXG59O1xuXG5jb25zdCBsYXlvdXRJbnB1dHMgPSBbJ3BhZ2UnLCAnbGltaXQnLCAnc29ydCddLm1hcCgoaWQpID0+ICh7XG4gIGlkLFxuICBxdWVyeVBhcmFtOiB0cnVlLFxuICBzY2hlbWE6IHtcbiAgICB2YWx1ZVR5cGU6IGlkID09PSAnc29ydCcgPyAnc3RyaW5nJyA6ICdudW1iZXInXG4gIH1cbn0pKTtcblxuY29uc3QgcmVxdWVzdCA9IHtcbiAgcmVzdWx0czoge1xuICAgIGlkOiAnc2VhcmNoJyxcbiAgICBkZWxheTogNTAwXG4gIH0sXG4gIGZhY2V0czoge1xuICAgIGlkOiAnZmFjZXRzJyxcbiAgfSxcbiAgcHJvdmlkZXI6ICdyZXN0JyxcbiAgZGVsYXk6IDUwMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgeyByZXF1ZXN0LCBmYWNldHMsIGxheW91dElucHV0cyB9IGFzIFNlYXJjaENvbmZpZztcbiJdfQ==