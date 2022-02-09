export default {
    totalCount: 0,
    facets: [
        {
            id: 'query',
            type: 'value',
        },
        {
            id: 'query-all',
            type: 'value',
            hasStaticData: true,
            data: [
                {
                    value: '1',
                    label: 'Cerca in tutti i campi delle schede',
                },
            ],
        },
        {
            id: 'query-links',
            type: 'value',
        },
        {
            id: 'entity-types',
            type: 'value',
            operator: 'OR',
            limit: 10,
            order: 'count',
        },
        {
            id: 'entity-search',
            type: 'value',
        },
        {
            id: 'entity-links',
            type: 'value',
            searchData: ['entity-type'],
        },
    ],
    fields: [
        {
            inputs: [
                {
                    type: 'text',
                    facetId: 'query',
                    placeholder: 'Cerca nei titoli delle schede',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        searchIn: [
                            {
                                key: 'label.ngrams',
                                operator: 'LIKE',
                            },
                        ],
                    },
                },
                {
                    type: 'checkbox',
                    facetId: 'query-all',
                    filterConfig: {
                        searchIn: [
                            {
                                key: 'label.ngrams^5,text^4,fields.*^3',
                                operator: '=',
                            },
                        ],
                    },
                },
                {
                    type: 'link',
                    facetId: 'query-links',
                    filterConfig: {
                        isArray: true,
                        searchIn: [
                            {
                                key: 'source.entityType',
                                operator: '=',
                            },
                        ],
                    },
                },
            ],
        },
        {
            header: {
                label: 'Relazione con',
                classes: 'related-class',
            },
            inputs: [
                {
                    type: 'checkbox',
                    facetId: 'entity-types',
                    filterConfig: {
                        isArray: true,
                        context: 'internal',
                        target: 'entity-links',
                        searchIn: [
                            {
                                key: 'searchData.entity-type',
                                operator: '=',
                            },
                        ],
                    },
                },
                {
                    type: 'text',
                    facetId: 'entity-search',
                    placeholder: 'Cerca entità',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        context: 'internal',
                        target: 'entity-links',
                        searchIn: [
                            {
                                key: 'label',
                                operator: 'LIKE',
                            },
                        ],
                    },
                },
                {
                    type: 'link',
                    facetId: 'entity-links',
                    emptyState: {
                        label: 'La tua ricerca non ha dato risultati, prova a cambiare i filtri',
                    },
                    filterConfig: {
                        isArray: true,
                        limit: 20,
                        pagination: {
                            limit: 50,
                            offset: 0
                        },
                        searchIn: [
                            {
                                key: 'relatedEntities.id',
                                operator: '=',
                            },
                        ],
                    },
                },
            ],
        },
    ],
    results: {
        order: {
            type: 'text',
            key: 'label_sort',
            direction: 'ASC' // ASC | DESC
        },
        fields: [
            {
                id: 'description',
                highlight: true,
                limit: 200,
            },
        ],
    },
    page: { offset: 0, limit: 10 },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWZhY2V0cy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtJQUNiLFVBQVUsRUFBRSxDQUFDO0lBQ2IsTUFBTSxFQUFFO1FBQ047WUFDRSxFQUFFLEVBQUUsT0FBTztZQUNYLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxXQUFXO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixhQUFhLEVBQUUsSUFBSTtZQUNuQixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLHFDQUFxQztpQkFDN0M7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsYUFBYTtZQUNqQixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsT0FBTztTQUNmO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsZUFBZTtZQUNuQixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM1QjtLQUNGO0lBQ0QsTUFBTSxFQUFFO1FBQ047WUFDRSxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLGNBQWM7Z0NBQ25CLFFBQVEsRUFBRSxNQUFNOzZCQUNqQjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFlBQVksRUFBRTt3QkFDWixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLGtDQUFrQztnQ0FDdkMsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtnQ0FDeEIsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLE9BQU8sRUFBRSxlQUFlO2FBQ3pCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsY0FBYztvQkFDdkIsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSx3QkFBd0I7Z0NBQzdCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsY0FBYztvQkFDM0IsWUFBWSxFQUFFO3dCQUNaLEtBQUssRUFBRSxHQUFHO3dCQUNWLFFBQVEsRUFBRSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxPQUFPO2dDQUNaLFFBQVEsRUFBRSxNQUFNOzZCQUNqQjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsY0FBYztvQkFDdkIsVUFBVSxFQUFFO3dCQUNWLEtBQUssRUFBRSxpRUFBaUU7cUJBQ3pFO29CQUNELFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixLQUFLLEVBQUUsRUFBRTt3QkFDVCxVQUFVLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLEVBQUU7NEJBQ1QsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7d0JBQ0QsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxvQkFBb0I7Z0NBQ3pCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUUsWUFBWTtZQUNqQixTQUFTLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDL0I7UUFDRCxNQUFNLEVBQUU7WUFDTjtnQkFDRSxFQUFFLEVBQUUsYUFBYTtnQkFDakIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLEdBQUc7YUFDWDtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Q0FDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICB0b3RhbENvdW50OiAwLFxyXG4gIGZhY2V0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogJ3F1ZXJ5JyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAncXVlcnktYWxsJyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgaGFzU3RhdGljRGF0YTogdHJ1ZSxcclxuICAgICAgZGF0YTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICAgICAgICBsYWJlbDogJ0NlcmNhIGluIHR1dHRpIGkgY2FtcGkgZGVsbGUgc2NoZWRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdxdWVyeS1saW5rcycsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2VudGl0eS10eXBlcycsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgIG9wZXJhdG9yOiAnT1InLFxyXG4gICAgICBsaW1pdDogMTAsXHJcbiAgICAgIG9yZGVyOiAnY291bnQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdlbnRpdHktc2VhcmNoJyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnZW50aXR5LWxpbmtzJyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgc2VhcmNoRGF0YTogWydlbnRpdHktdHlwZSddLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGZpZWxkczogW1xyXG4gICAge1xyXG4gICAgICBpbnB1dHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICBmYWNldElkOiAncXVlcnknLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdDZXJjYSBuZWkgdGl0b2xpIGRlbGxlIHNjaGVkZScsXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDUwMCxcclxuICAgICAgICAgICAgbWluQ2hhcnM6IDMsXHJcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAnbGFiZWwubmdyYW1zJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnTElLRScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5LWFsbCcsXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgc2VhcmNoSW46IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbC5uZ3JhbXNeNSx0ZXh0XjQsZmllbGRzLipeMycsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5LWxpbmtzJyxcclxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xyXG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NvdXJjZS5lbnRpdHlUeXBlJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgIGxhYmVsOiAnUmVsYXppb25lIGNvbicsXHJcbiAgICAgICAgY2xhc3NlczogJ3JlbGF0ZWQtY2xhc3MnLFxyXG4gICAgICB9LFxyXG4gICAgICBpbnB1dHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS10eXBlcycsXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgaXNBcnJheTogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcclxuICAgICAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcclxuICAgICAgICAgICAgc2VhcmNoSW46IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZWFyY2hEYXRhLmVudGl0eS10eXBlJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LXNlYXJjaCcsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIGVudGl0w6AnLFxyXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXHJcbiAgICAgICAgICAgIG1pbkNoYXJzOiAzLFxyXG4gICAgICAgICAgICBjb250ZXh0OiAnaW50ZXJuYWwnLFxyXG4gICAgICAgICAgICB0YXJnZXQ6ICdlbnRpdHktbGlua3MnLFxyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnTElLRScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnbGluaycsXHJcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LWxpbmtzJyxcclxuICAgICAgICAgIGVtcHR5U3RhdGU6IHtcclxuICAgICAgICAgICAgbGFiZWw6ICdMYSB0dWEgcmljZXJjYSBub24gaGEgZGF0byByaXN1bHRhdGksIHByb3ZhIGEgY2FtYmlhcmUgaSBmaWx0cmknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xyXG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxyXG4gICAgICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICBsaW1pdDogNTAsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAncmVsYXRlZEVudGl0aWVzLmlkJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICByZXN1bHRzOiB7XHJcbiAgICBvcmRlcjogeyAvLyBEZWZhdWx0IFNvcnRpbmcgTWV0aG9kXHJcbiAgICAgIHR5cGU6ICd0ZXh0JywgLy8gc2NvcmUgfCB0ZXh0IHwgZGF0ZVxyXG4gICAgICBrZXk6ICdsYWJlbF9zb3J0JywgLy8gZG9jUGF0aCwgZWxhc3RpYyBrZXksIGVjY1xyXG4gICAgICBkaXJlY3Rpb246ICdBU0MnIC8vIEFTQyB8IERFU0NcclxuICAgIH0sXHJcbiAgICBmaWVsZHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICBsaW1pdDogMjAwLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHBhZ2U6IHsgb2Zmc2V0OiAwLCBsaW1pdDogMTAgfSxcclxufTtcclxuIl19