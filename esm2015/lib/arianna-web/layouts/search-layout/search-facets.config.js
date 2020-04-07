/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-facets.config.ts
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
            type: 'score',
            // score | text | date
            key: '_score',
            // docPath, elastic key, ecc
            direction: 'DESC' // ASC | DESC
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZUFBZTtJQUNiLFVBQVUsRUFBRSxDQUFDO0lBQ2IsTUFBTSxFQUFFO1FBQ047WUFDRSxFQUFFLEVBQUUsT0FBTztZQUNYLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxXQUFXO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixhQUFhLEVBQUUsSUFBSTtZQUNuQixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLG1DQUFtQztpQkFDM0M7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsYUFBYTtZQUNqQixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsT0FBTztTQUNmO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsZUFBZTtZQUNuQixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM1QjtLQVNGO0lBQ0QsTUFBTSxFQUFFO1FBQ047WUFDRSxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFdBQVcsRUFBRSwrQkFBK0I7O29CQUU1QyxZQUFZLEVBQUU7d0JBQ1osS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLENBQUM7d0JBQ1gsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxjQUFjO2dDQUNuQixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxXQUFXO29CQUNwQixZQUFZLEVBQUU7d0JBQ1osUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxrQ0FBa0M7Z0NBQ3ZDLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxhQUFhO29CQUN0QixZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxtQkFBbUI7Z0NBQ3hCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxlQUFlO2dCQUN0QixPQUFPLEVBQUUsZUFBZTthQUN6QjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsd0JBQXdCO2dDQUM3QixRQUFRLEVBQUUsR0FBRzs2QkFDZDt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsZUFBZTtvQkFDeEIsV0FBVyxFQUFFLGNBQWM7O29CQUUzQixZQUFZLEVBQUU7d0JBQ1osS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLENBQUM7d0JBQ1gsT0FBTyxFQUFFLFVBQVU7d0JBQ25CLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLE9BQU87Z0NBQ1osUUFBUSxFQUFFLE1BQU07NkJBQ2pCO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxjQUFjO29CQUN2QixVQUFVLEVBQUU7d0JBQ1YsS0FBSyxFQUFFLGlFQUFpRTtxQkFDekU7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLEtBQUssRUFBRSxFQUFFO3dCQUNULFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsb0JBQW9CO2dDQUN6QixRQUFRLEVBQUUsR0FBRzs2QkFDZDt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FtQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTzs7WUFDYixHQUFHLEVBQUUsUUFBUTs7WUFDYixTQUFTLEVBQUUsTUFBTSxDQUFDLGFBQWE7U0FDaEM7UUFDRCxNQUFNLEVBQUU7WUFDTjtnQkFDRSxFQUFFLEVBQUUsYUFBYTtnQkFDakIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLEdBQUc7YUFDWDtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Q0FDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgdG90YWxDb3VudDogMCxcbiAgZmFjZXRzOiBbXG4gICAge1xuICAgICAgaWQ6ICdxdWVyeScsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdxdWVyeS1hbGwnLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgIGhhc1N0YXRpY0RhdGE6IHRydWUsXG4gICAgICBkYXRhOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgIGxhYmVsOiAnQ2VyY2EgaW4gdHV0dGkgY2FtcGkgZGVsbGUgc2NoZWRlJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3F1ZXJ5LWxpbmtzJyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2VudGl0eS10eXBlcycsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgb3BlcmF0b3I6ICdPUicsXG4gICAgICBsaW1pdDogMTAsXG4gICAgICBvcmRlcjogJ2NvdW50JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZW50aXR5LXNlYXJjaCcsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdlbnRpdHktbGlua3MnLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgIHNlYXJjaERhdGE6IFsnZW50aXR5LXR5cGUnXSxcbiAgICB9LFxuICAgIC8qIHtcbiAgICAgIGlkOiAnZGF0ZS1mcm9tJyxcbiAgICAgIHR5cGU6ICd2YWx1ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZGF0ZS10bycsXG4gICAgICB0eXBlOiAndmFsdWUnXG4gICAgfSAqL1xuICBdLFxuICBmaWVsZHM6IFtcbiAgICB7XG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBmYWNldElkOiAncXVlcnknLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgbmVpIHRpdG9saSBkZWxsZSBzY2hlZGUnLFxuICAgICAgICAgIC8vIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBkZWxheTogNTAwLFxuICAgICAgICAgICAgbWluQ2hhcnM6IDMsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnbGFiZWwubmdyYW1zJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ0xJS0UnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBmYWNldElkOiAncXVlcnktYWxsJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbC5uZ3JhbXNeNSx0ZXh0XjQsZmllbGRzLipeMycsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICBmYWNldElkOiAncXVlcnktbGlua3MnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgaXNBcnJheTogdHJ1ZSxcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdzb3VyY2UuZW50aXR5VHlwZScsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgbGFiZWw6ICdSZWxhemlvbmUgY29uJyxcbiAgICAgICAgY2xhc3NlczogJ3JlbGF0ZWQtY2xhc3MnLFxuICAgICAgfSxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LXR5cGVzJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgICAgICBjb250ZXh0OiAnaW50ZXJuYWwnLFxuICAgICAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdzZWFyY2hEYXRhLmVudGl0eS10eXBlJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdlbnRpdHktc2VhcmNoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIGVudGl0w6AnLFxuICAgICAgICAgIC8vIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBkZWxheTogNTAwLFxuICAgICAgICAgICAgbWluQ2hhcnM6IDMsXG4gICAgICAgICAgICBjb250ZXh0OiAnaW50ZXJuYWwnLFxuICAgICAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICdMSUtFJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgICBlbXB0eVN0YXRlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0xhIHR1YSByaWNlcmNhIG5vbiBoYSBkYXRvIHJpc3VsdGF0aSwgcHJvdmEgYSBjYW1iaWFyZSBpIGZpbHRyaScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgICAgICBsaW1pdDogMjAsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAncmVsYXRlZEVudGl0aWVzLmlkJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIC8qIHtcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBsYWJlbDogJ0RhdGEnLFxuICAgICAgICBjbGFzc2VzOiAnZGF0ZS1jbGFzcydcbiAgICAgIH0sXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdkYXRlLWZyb20nLFxuICAgICAgICAgIGxhYmVsOiAnRGFsJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdzb3VyY2UuZGF0ZVN0YXJ0JyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz49J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgICAgZmFjZXRJZDogJ2RhdGUtdG8nLFxuICAgICAgICAgIGxhYmVsOiAnQWwnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3NvdXJjZS5kYXRlRW5kJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJzw9J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSAqL1xuICBdLFxuICByZXN1bHRzOiB7XG4gICAgb3JkZXI6IHtcbiAgICAgIHR5cGU6ICdzY29yZScsIC8vIHNjb3JlIHwgdGV4dCB8IGRhdGVcbiAgICAgIGtleTogJ19zY29yZScsIC8vIGRvY1BhdGgsIGVsYXN0aWMga2V5LCBlY2NcbiAgICAgIGRpcmVjdGlvbjogJ0RFU0MnIC8vIEFTQyB8IERFU0NcbiAgICB9LFxuICAgIGZpZWxkczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICBsaW1pdDogMjAwLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBwYWdlOiB7IG9mZnNldDogMCwgbGltaXQ6IDEwIH0sXG59O1xuIl19