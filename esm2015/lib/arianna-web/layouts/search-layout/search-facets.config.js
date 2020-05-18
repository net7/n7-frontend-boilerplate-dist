/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                    label: 'Cerca in tutti campi delle schede',
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
                    // icon: 'n7-icon-search',
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
                    // icon: 'n7-icon-search',
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
            // Default Sorting Method
            type: 'text',
            // score | text | date
            key: 'label_sort',
            // docPath, elastic key, ecc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxlQUFlO0lBQ2IsVUFBVSxFQUFFLENBQUM7SUFDYixNQUFNLEVBQUU7UUFDTjtZQUNFLEVBQUUsRUFBRSxPQUFPO1lBQ1gsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNEO1lBQ0UsRUFBRSxFQUFFLFdBQVc7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLGFBQWEsRUFBRSxJQUFJO1lBQ25CLElBQUksRUFBRTtnQkFDSjtvQkFDRSxLQUFLLEVBQUUsR0FBRztvQkFDVixLQUFLLEVBQUUsbUNBQW1DO2lCQUMzQzthQUNGO1NBQ0Y7UUFDRDtZQUNFLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxPQUFPO1NBQ2Y7UUFDRDtZQUNFLEVBQUUsRUFBRSxlQUFlO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQzVCO0tBU0Y7SUFDRCxNQUFNLEVBQUU7UUFDTjtZQUNFLE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsT0FBTztvQkFDaEIsV0FBVyxFQUFFLCtCQUErQjs7b0JBRTVDLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLGNBQWM7Z0NBQ25CLFFBQVEsRUFBRSxNQUFNOzZCQUNqQjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFlBQVksRUFBRTt3QkFDWixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLGtDQUFrQztnQ0FDdkMsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtnQ0FDeEIsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLE9BQU8sRUFBRSxlQUFlO2FBQ3pCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsY0FBYztvQkFDdkIsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSx3QkFBd0I7Z0NBQzdCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsY0FBYzs7b0JBRTNCLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsT0FBTztnQ0FDWixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFVBQVUsRUFBRTt3QkFDVixLQUFLLEVBQUUsaUVBQWlFO3FCQUN6RTtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxvQkFBb0I7Z0NBQ3pCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQW1DRjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRTs7WUFDTCxJQUFJLEVBQUUsTUFBTTs7WUFDWixHQUFHLEVBQUUsWUFBWTs7WUFDakIsU0FBUyxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQy9CO1FBQ0QsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLEtBQUssRUFBRSxHQUFHO2FBQ1g7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0NBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHRvdGFsQ291bnQ6IDAsXG4gIGZhY2V0czogW1xuICAgIHtcbiAgICAgIGlkOiAncXVlcnknLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncXVlcnktYWxsJyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICBoYXNTdGF0aWNEYXRhOiB0cnVlLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICBsYWJlbDogJ0NlcmNhIGluIHR1dHRpIGNhbXBpIGRlbGxlIHNjaGVkZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdxdWVyeS1saW5rcycsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgIG9wZXJhdG9yOiAnT1InLFxuICAgICAgbGltaXQ6IDEwLFxuICAgICAgb3JkZXI6ICdjb3VudCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2VudGl0eS1zZWFyY2gnLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZW50aXR5LWxpbmtzJyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICBzZWFyY2hEYXRhOiBbJ2VudGl0eS10eXBlJ10sXG4gICAgfSxcbiAgICAvKiB7XG4gICAgICBpZDogJ2RhdGUtZnJvbScsXG4gICAgICB0eXBlOiAndmFsdWUnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2RhdGUtdG8nLFxuICAgICAgdHlwZTogJ3ZhbHVlJ1xuICAgIH0gKi9cbiAgXSxcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5JyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIG5laSB0aXRvbGkgZGVsbGUgc2NoZWRlJyxcbiAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgICAgIG1pbkNoYXJzOiAzLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsLm5ncmFtcycsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICdMSUtFJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5LWFsbCcsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnbGFiZWwubmdyYW1zXjUsdGV4dF40LGZpZWxkcy4qXjMnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5LWxpbmtzJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnc291cmNlLmVudGl0eVR5cGUnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGxhYmVsOiAnUmVsYXppb25lIGNvbicsXG4gICAgICAgIGNsYXNzZXM6ICdyZWxhdGVkLWNsYXNzJyxcbiAgICAgIH0sXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS10eXBlcycsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxuICAgICAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcbiAgICAgICAgICAgIHRhcmdldDogJ2VudGl0eS1saW5rcycsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnc2VhcmNoRGF0YS5lbnRpdHktdHlwZScsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LXNlYXJjaCcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdDZXJjYSBlbnRpdMOgJyxcbiAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgICAgIG1pbkNoYXJzOiAzLFxuICAgICAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcbiAgICAgICAgICAgIHRhcmdldDogJ2VudGl0eS1saW5rcycsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnTElLRScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1saW5rcycsXG4gICAgICAgICAgZW1wdHlTdGF0ZToge1xuICAgICAgICAgICAgbGFiZWw6ICdMYSB0dWEgcmljZXJjYSBub24gaGEgZGF0byByaXN1bHRhdGksIHByb3ZhIGEgY2FtYmlhcmUgaSBmaWx0cmknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxuICAgICAgICAgICAgbGltaXQ6IDIwLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3JlbGF0ZWRFbnRpdGllcy5pZCcsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICAvKiB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgbGFiZWw6ICdEYXRhJyxcbiAgICAgICAgY2xhc3NlczogJ2RhdGUtY2xhc3MnXG4gICAgICB9LFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgICBmYWNldElkOiAnZGF0ZS1mcm9tJyxcbiAgICAgICAgICBsYWJlbDogJ0RhbCcsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnc291cmNlLmRhdGVTdGFydCcsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc+PSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdkYXRlLXRvJyxcbiAgICAgICAgICBsYWJlbDogJ0FsJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdzb3VyY2UuZGF0ZUVuZCcsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc8PSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0gKi9cbiAgXSxcbiAgcmVzdWx0czoge1xuICAgIG9yZGVyOiB7IC8vIERlZmF1bHQgU29ydGluZyBNZXRob2RcbiAgICAgIHR5cGU6ICd0ZXh0JywgLy8gc2NvcmUgfCB0ZXh0IHwgZGF0ZVxuICAgICAga2V5OiAnbGFiZWxfc29ydCcsIC8vIGRvY1BhdGgsIGVsYXN0aWMga2V5LCBlY2NcbiAgICAgIGRpcmVjdGlvbjogJ0FTQycgLy8gQVNDIHwgREVTQ1xuICAgIH0sXG4gICAgZmllbGRzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgICAgIGxpbWl0OiAyMDAsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHBhZ2U6IHsgb2Zmc2V0OiAwLCBsaW1pdDogMTAgfSxcbn07XG4iXX0=