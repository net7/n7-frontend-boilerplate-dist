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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxlQUFlO0lBQ2IsVUFBVSxFQUFFLENBQUM7SUFDYixNQUFNLEVBQUU7UUFDTjtZQUNFLEVBQUUsRUFBRSxPQUFPO1lBQ1gsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNEO1lBQ0UsRUFBRSxFQUFFLFdBQVc7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLGFBQWEsRUFBRSxJQUFJO1lBQ25CLElBQUksRUFBRTtnQkFDSjtvQkFDRSxLQUFLLEVBQUUsR0FBRztvQkFDVixLQUFLLEVBQUUsbUNBQW1DO2lCQUMzQzthQUNGO1NBQ0Y7UUFDRDtZQUNFLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxPQUFPO1NBQ2Y7UUFDRDtZQUNFLEVBQUUsRUFBRSxlQUFlO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQzVCO0tBU0Y7SUFDRCxNQUFNLEVBQUU7UUFDTjtZQUNFLE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsT0FBTztvQkFDaEIsV0FBVyxFQUFFLCtCQUErQjs7b0JBRTVDLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLGNBQWM7Z0NBQ25CLFFBQVEsRUFBRSxNQUFNOzZCQUNqQjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFlBQVksRUFBRTt3QkFDWixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLGtDQUFrQztnQ0FDdkMsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtnQ0FDeEIsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLE9BQU8sRUFBRSxlQUFlO2FBQ3pCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsY0FBYztvQkFDdkIsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSx3QkFBd0I7Z0NBQzdCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsY0FBYzs7b0JBRTNCLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsT0FBTztnQ0FDWixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFVBQVUsRUFBRTt3QkFDVixLQUFLLEVBQUUsaUVBQWlFO3FCQUN6RTtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxvQkFBb0I7Z0NBQ3pCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQW1DRjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPOztZQUNiLEdBQUcsRUFBRSxRQUFROztZQUNiLFNBQVMsRUFBRSxNQUFNLENBQUMsYUFBYTtTQUNoQztRQUNELE1BQU0sRUFBRTtZQUNOO2dCQUNFLEVBQUUsRUFBRSxhQUFhO2dCQUNqQixTQUFTLEVBQUUsSUFBSTtnQkFDZixLQUFLLEVBQUUsR0FBRzthQUNYO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtDQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB0b3RhbENvdW50OiAwLFxuICBmYWNldHM6IFtcbiAgICB7XG4gICAgICBpZDogJ3F1ZXJ5JyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3F1ZXJ5LWFsbCcsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgaGFzU3RhdGljRGF0YTogdHJ1ZSxcbiAgICAgIGRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiAnMScsXG4gICAgICAgICAgbGFiZWw6ICdDZXJjYSBpbiB0dXR0aSBjYW1waSBkZWxsZSBzY2hlZGUnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncXVlcnktbGlua3MnLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZW50aXR5LXR5cGVzJyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICBvcGVyYXRvcjogJ09SJyxcbiAgICAgIGxpbWl0OiAxMCxcbiAgICAgIG9yZGVyOiAnY291bnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdlbnRpdHktc2VhcmNoJyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2VudGl0eS1saW5rcycsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgc2VhcmNoRGF0YTogWydlbnRpdHktdHlwZSddLFxuICAgIH0sXG4gICAgLyoge1xuICAgICAgaWQ6ICdkYXRlLWZyb20nLFxuICAgICAgdHlwZTogJ3ZhbHVlJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdkYXRlLXRvJyxcbiAgICAgIHR5cGU6ICd2YWx1ZSdcbiAgICB9ICovXG4gIF0sXG4gIGZpZWxkczogW1xuICAgIHtcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeScsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdDZXJjYSBuZWkgdGl0b2xpIGRlbGxlIHNjaGVkZScsXG4gICAgICAgICAgLy8gaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgICAgICBtaW5DaGFyczogMyxcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbC5uZ3JhbXMnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnTElLRScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeS1hbGwnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsLm5ncmFtc141LHRleHReNCxmaWVsZHMuKl4zJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeS1saW5rcycsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3NvdXJjZS5lbnRpdHlUeXBlJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBsYWJlbDogJ1JlbGF6aW9uZSBjb24nLFxuICAgICAgICBjbGFzc2VzOiAncmVsYXRlZC1jbGFzcycsXG4gICAgICB9LFxuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgaXNBcnJheTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXG4gICAgICAgICAgICB0YXJnZXQ6ICdlbnRpdHktbGlua3MnLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3NlYXJjaERhdGEuZW50aXR5LXR5cGUnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1zZWFyY2gnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgZW50aXTDoCcsXG4gICAgICAgICAgLy8gaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgICAgICBtaW5DaGFyczogMyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXG4gICAgICAgICAgICB0YXJnZXQ6ICdlbnRpdHktbGlua3MnLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ0xJS0UnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICAgIGZhY2V0SWQ6ICdlbnRpdHktbGlua3MnLFxuICAgICAgICAgIGVtcHR5U3RhdGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTGEgdHVhIHJpY2VyY2Egbm9uIGhhIGRhdG8gcmlzdWx0YXRpLCBwcm92YSBhIGNhbWJpYXJlIGkgZmlsdHJpJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgaXNBcnJheTogdHJ1ZSxcbiAgICAgICAgICAgIGxpbWl0OiAyMCxcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdyZWxhdGVkRW50aXRpZXMuaWQnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgLyoge1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGxhYmVsOiAnRGF0YScsXG4gICAgICAgIGNsYXNzZXM6ICdkYXRlLWNsYXNzJ1xuICAgICAgfSxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgICAgZmFjZXRJZDogJ2RhdGUtZnJvbScsXG4gICAgICAgICAgbGFiZWw6ICdEYWwnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3NvdXJjZS5kYXRlU3RhcnQnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPj0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgICBmYWNldElkOiAnZGF0ZS10bycsXG4gICAgICAgICAgbGFiZWw6ICdBbCcsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnc291cmNlLmRhdGVFbmQnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPD0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9ICovXG4gIF0sXG4gIHJlc3VsdHM6IHtcbiAgICBvcmRlcjoge1xuICAgICAgdHlwZTogJ3Njb3JlJywgLy8gc2NvcmUgfCB0ZXh0IHwgZGF0ZVxuICAgICAga2V5OiAnX3Njb3JlJywgLy8gZG9jUGF0aCwgZWxhc3RpYyBrZXksIGVjY1xuICAgICAgZGlyZWN0aW9uOiAnREVTQycgLy8gQVNDIHwgREVTQ1xuICAgIH0sXG4gICAgZmllbGRzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgICAgIGxpbWl0OiAyMDAsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHBhZ2U6IHsgb2Zmc2V0OiAwLCBsaW1pdDogMTAgfSxcbn07XG4iXX0=