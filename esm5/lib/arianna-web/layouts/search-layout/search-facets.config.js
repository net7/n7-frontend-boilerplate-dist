/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export default {
    totalCount: 0,
    facets: [
        {
            id: 'query',
            type: 'value'
        },
        {
            id: 'query-all',
            type: 'value',
            hasStaticData: true,
            data: [
                {
                    value: '1',
                    label: 'Cerca in tutti campi delle schede'
                }
            ]
        },
        {
            id: 'query-links',
            type: 'value'
        },
        {
            id: 'entity-types',
            type: 'value',
            operator: 'OR',
            limit: 10,
            order: 'count'
        },
        {
            id: 'entity-search',
            type: 'value'
        },
        {
            id: 'entity-links',
            type: 'value',
            searchData: ['entity-type']
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
                                key: 'label',
                                operator: 'LIKE'
                            }
                        ]
                    }
                },
                {
                    type: 'checkbox',
                    facetId: 'query-all',
                    filterConfig: {
                        searchIn: [
                            {
                                key: 'query-all',
                                operator: '='
                            }
                        ]
                    }
                },
                {
                    type: 'link',
                    facetId: 'query-links',
                    filterConfig: {
                        isArray: true,
                        searchIn: [
                            {
                                key: 'source.entityType',
                                operator: '='
                            }
                        ]
                    }
                }
            ]
        },
        {
            header: {
                label: 'Relazione con',
                classes: 'related-class'
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
                                operator: '='
                            }
                        ]
                    }
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
                                operator: 'LIKE'
                            }
                        ]
                    }
                },
                {
                    type: 'link',
                    facetId: 'entity-links',
                    emptyState: {
                        label: 'La tua ricerca non ha dato risultati, prova a cambiare i filtri'
                    },
                    filterConfig: {
                        isArray: true,
                        limit: 20,
                        searchIn: [
                            {
                                key: 'relatedEntities.id',
                                operator: '='
                            }
                        ]
                    }
                }
            ]
        },
    ],
    results: {
        order: {
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
                limit: 200
            }
        ]
    },
    page: { offset: 0, limit: 10 }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxlQUFlO0lBQ2IsVUFBVSxFQUFFLENBQUM7SUFDYixNQUFNLEVBQUU7UUFDTjtZQUNFLEVBQUUsRUFBRSxPQUFPO1lBQ1gsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNEO1lBQ0UsRUFBRSxFQUFFLFdBQVc7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLGFBQWEsRUFBRSxJQUFJO1lBQ25CLElBQUksRUFBRTtnQkFDSjtvQkFDRSxLQUFLLEVBQUUsR0FBRztvQkFDVixLQUFLLEVBQUUsbUNBQW1DO2lCQUMzQzthQUNGO1NBQ0Y7UUFDRDtZQUNFLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxPQUFPO1NBQ2Y7UUFDRDtZQUNFLEVBQUUsRUFBRSxlQUFlO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQzVCO0tBU0Y7SUFDRCxNQUFNLEVBQUU7UUFDTjtZQUNFLE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsT0FBTztvQkFDaEIsV0FBVyxFQUFFLCtCQUErQjs7b0JBRTVDLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLE9BQU87Z0NBQ1osUUFBUSxFQUFFLE1BQU07NkJBQ2pCO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsV0FBVztvQkFDcEIsWUFBWSxFQUFFO3dCQUNaLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsV0FBVztnQ0FDaEIsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtnQ0FDeEIsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLE9BQU8sRUFBRSxlQUFlO2FBQ3pCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsY0FBYztvQkFDdkIsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSx3QkFBd0I7Z0NBQzdCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsY0FBYzs7b0JBRTNCLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsT0FBTztnQ0FDWixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFVBQVUsRUFBRTt3QkFDVixLQUFLLEVBQUUsaUVBQWlFO3FCQUN6RTtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxvQkFBb0I7Z0NBQ3pCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQW1DRjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNOztZQUNaLEdBQUcsRUFBRSxZQUFZOztZQUNqQixTQUFTLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDL0I7UUFDRCxNQUFNLEVBQUU7WUFDTjtnQkFDRSxFQUFFLEVBQUUsYUFBYTtnQkFDakIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLEdBQUc7YUFDWDtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Q0FDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgdG90YWxDb3VudDogMCxcbiAgZmFjZXRzOiBbXG4gICAge1xuICAgICAgaWQ6ICdxdWVyeScsXG4gICAgICB0eXBlOiAndmFsdWUnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3F1ZXJ5LWFsbCcsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgaGFzU3RhdGljRGF0YTogdHJ1ZSxcbiAgICAgIGRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiAnMScsXG4gICAgICAgICAgbGFiZWw6ICdDZXJjYSBpbiB0dXR0aSBjYW1waSBkZWxsZSBzY2hlZGUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncXVlcnktbGlua3MnLFxuICAgICAgdHlwZTogJ3ZhbHVlJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgIG9wZXJhdG9yOiAnT1InLFxuICAgICAgbGltaXQ6IDEwLFxuICAgICAgb3JkZXI6ICdjb3VudCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZW50aXR5LXNlYXJjaCcsXG4gICAgICB0eXBlOiAndmFsdWUnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2VudGl0eS1saW5rcycsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgc2VhcmNoRGF0YTogWydlbnRpdHktdHlwZSddXG4gICAgfSxcbiAgICAvKiB7XG4gICAgICBpZDogJ2RhdGUtZnJvbScsXG4gICAgICB0eXBlOiAndmFsdWUnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2RhdGUtdG8nLFxuICAgICAgdHlwZTogJ3ZhbHVlJ1xuICAgIH0gKi9cbiAgXSxcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5JyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIG5laSB0aXRvbGkgZGVsbGUgc2NoZWRlJyxcbiAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgICAgIG1pbkNoYXJzOiAzLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ0xJS0UnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeS1hbGwnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3F1ZXJ5LWFsbCcsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeS1saW5rcycsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3NvdXJjZS5lbnRpdHlUeXBlJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBsYWJlbDogJ1JlbGF6aW9uZSBjb24nLFxuICAgICAgICBjbGFzc2VzOiAncmVsYXRlZC1jbGFzcydcbiAgICAgIH0sXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS10eXBlcycsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxuICAgICAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcbiAgICAgICAgICAgIHRhcmdldDogJ2VudGl0eS1saW5rcycsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnc2VhcmNoRGF0YS5lbnRpdHktdHlwZScsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdlbnRpdHktc2VhcmNoJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIGVudGl0w6AnLFxuICAgICAgICAgIC8vIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBkZWxheTogNTAwLFxuICAgICAgICAgICAgbWluQ2hhcnM6IDMsXG4gICAgICAgICAgICBjb250ZXh0OiAnaW50ZXJuYWwnLFxuICAgICAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICdMSUtFJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdlbnRpdHktbGlua3MnLFxuICAgICAgICAgIGVtcHR5U3RhdGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTGEgdHVhIHJpY2VyY2Egbm9uIGhhIGRhdG8gcmlzdWx0YXRpLCBwcm92YSBhIGNhbWJpYXJlIGkgZmlsdHJpJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxuICAgICAgICAgICAgbGltaXQ6IDIwLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3JlbGF0ZWRFbnRpdGllcy5pZCcsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICAvKntcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBsYWJlbDogJ0RhdGEnLFxuICAgICAgICBjbGFzc2VzOiAnZGF0ZS1jbGFzcydcbiAgICAgIH0sXG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdkYXRlLWZyb20nLFxuICAgICAgICAgIGxhYmVsOiAnRGFsJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdzb3VyY2UuZGF0ZVN0YXJ0JyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz49J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgICAgZmFjZXRJZDogJ2RhdGUtdG8nLFxuICAgICAgICAgIGxhYmVsOiAnQWwnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3NvdXJjZS5kYXRlRW5kJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJzw9J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSovXG4gIF0sXG4gIHJlc3VsdHM6IHtcbiAgICBvcmRlcjoge1xuICAgICAgdHlwZTogJ3RleHQnLCAvLyBzY29yZSB8IHRleHQgfCBkYXRlXG4gICAgICBrZXk6ICdsYWJlbF9zb3J0JywgLy8gZG9jUGF0aCwgZWxhc3RpYyBrZXksIGVjY1xuICAgICAgZGlyZWN0aW9uOiAnQVNDJyAvLyBBU0MgfCBERVNDXG4gICAgfSxcbiAgICBmaWVsZHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcbiAgICAgICAgbGltaXQ6IDIwMFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgcGFnZTogeyBvZmZzZXQ6IDAsIGxpbWl0OiAxMCB9XG59O1xuIl19