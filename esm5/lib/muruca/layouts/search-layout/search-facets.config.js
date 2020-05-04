/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/search-layout/search-facets.config.ts
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
            // score | text | date
            key: 'label_sort',
            // docPath, elastic key, ecc
            direction: 'ASC',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWxheW91dC9zZWFyY2gtZmFjZXRzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGVBQWU7SUFDYixVQUFVLEVBQUUsQ0FBQztJQUNiLE1BQU0sRUFBRTtRQUNOO1lBQ0UsRUFBRSxFQUFFLE9BQU87WUFDWCxJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsV0FBVztZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsYUFBYSxFQUFFLElBQUk7WUFDbkIsSUFBSSxFQUFFO2dCQUNKO29CQUNFLEtBQUssRUFBRSxHQUFHO29CQUNWLEtBQUssRUFBRSxtQ0FBbUM7aUJBQzNDO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsRUFBRSxFQUFFLGFBQWE7WUFDakIsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNEO1lBQ0UsRUFBRSxFQUFFLGNBQWM7WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLE9BQU87U0FDZjtRQUNEO1lBQ0UsRUFBRSxFQUFFLGVBQWU7WUFDbkIsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNEO1lBQ0UsRUFBRSxFQUFFLGNBQWM7WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7U0FDNUI7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOO1lBQ0UsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxPQUFPO29CQUNoQixXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxZQUFZLEVBQUU7d0JBQ1osS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLENBQUM7d0JBQ1gsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxjQUFjO2dDQUNuQixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxXQUFXO29CQUNwQixZQUFZLEVBQUU7d0JBQ1osUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxrQ0FBa0M7Z0NBQ3ZDLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxhQUFhO29CQUN0QixZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxtQkFBbUI7Z0NBQ3hCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxlQUFlO2dCQUN0QixPQUFPLEVBQUUsZUFBZTthQUN6QjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsd0JBQXdCO2dDQUM3QixRQUFRLEVBQUUsR0FBRzs2QkFDZDt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsZUFBZTtvQkFDeEIsV0FBVyxFQUFFLGNBQWM7b0JBQzNCLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsT0FBTztnQ0FDWixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFVBQVUsRUFBRTt3QkFDVixLQUFLLEVBQUUsaUVBQWlFO3FCQUN6RTtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxvQkFBb0I7Z0NBQ3pCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07O1lBQ1osR0FBRyxFQUFFLFlBQVk7O1lBQ2pCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLEtBQUssRUFBRSxHQUFHO2FBQ1g7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0NBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHRvdGFsQ291bnQ6IDAsXG4gIGZhY2V0czogW1xuICAgIHtcbiAgICAgIGlkOiAncXVlcnknLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncXVlcnktYWxsJyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICBoYXNTdGF0aWNEYXRhOiB0cnVlLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICBsYWJlbDogJ0NlcmNhIGluIHR1dHRpIGNhbXBpIGRlbGxlIHNjaGVkZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdxdWVyeS1saW5rcycsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgIG9wZXJhdG9yOiAnT1InLFxuICAgICAgbGltaXQ6IDEwLFxuICAgICAgb3JkZXI6ICdjb3VudCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2VudGl0eS1zZWFyY2gnLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZW50aXR5LWxpbmtzJyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICBzZWFyY2hEYXRhOiBbJ2VudGl0eS10eXBlJ10sXG4gICAgfSxcbiAgXSxcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5JyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIG5laSB0aXRvbGkgZGVsbGUgc2NoZWRlJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgICAgICBtaW5DaGFyczogMyxcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbC5uZ3JhbXMnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnTElLRScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeS1hbGwnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsLm5ncmFtc141LHRleHReNCxmaWVsZHMuKl4zJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeS1saW5rcycsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3NvdXJjZS5lbnRpdHlUeXBlJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBsYWJlbDogJ1JlbGF6aW9uZSBjb24nLFxuICAgICAgICBjbGFzc2VzOiAncmVsYXRlZC1jbGFzcycsXG4gICAgICB9LFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgaXNBcnJheTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXG4gICAgICAgICAgICB0YXJnZXQ6ICdlbnRpdHktbGlua3MnLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3NlYXJjaERhdGEuZW50aXR5LXR5cGUnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1zZWFyY2gnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgZW50aXTDoCcsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBkZWxheTogNTAwLFxuICAgICAgICAgICAgbWluQ2hhcnM6IDMsXG4gICAgICAgICAgICBjb250ZXh0OiAnaW50ZXJuYWwnLFxuICAgICAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICdMSUtFJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgICBlbXB0eVN0YXRlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0xhIHR1YSByaWNlcmNhIG5vbiBoYSBkYXRvIHJpc3VsdGF0aSwgcHJvdmEgYSBjYW1iaWFyZSBpIGZpbHRyaScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgICAgICBsaW1pdDogMjAsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAncmVsYXRlZEVudGl0aWVzLmlkJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICByZXN1bHRzOiB7XG4gICAgb3JkZXI6IHtcbiAgICAgIHR5cGU6ICd0ZXh0JywgLy8gc2NvcmUgfCB0ZXh0IHwgZGF0ZVxuICAgICAga2V5OiAnbGFiZWxfc29ydCcsIC8vIGRvY1BhdGgsIGVsYXN0aWMga2V5LCBlY2NcbiAgICAgIGRpcmVjdGlvbjogJ0FTQycsIC8vIEFTQyB8IERFU0NcbiAgICB9LFxuICAgIGZpZWxkczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICBsaW1pdDogMjAwLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBwYWdlOiB7IG9mZnNldDogMCwgbGltaXQ6IDEwIH0sXG59O1xuIl19