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
            key: 'label',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxlQUFlO0lBQ2IsVUFBVSxFQUFFLENBQUM7SUFDYixNQUFNLEVBQUU7UUFDTjtZQUNFLEVBQUUsRUFBRSxPQUFPO1lBQ1gsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNEO1lBQ0UsRUFBRSxFQUFFLFdBQVc7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLGFBQWEsRUFBRSxJQUFJO1lBQ25CLElBQUksRUFBRTtnQkFDSjtvQkFDRSxLQUFLLEVBQUUsR0FBRztvQkFDVixLQUFLLEVBQUUsbUNBQW1DO2lCQUMzQzthQUNGO1NBQ0Y7UUFDRDtZQUNFLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxPQUFPO1NBQ2Y7UUFDRDtZQUNFLEVBQUUsRUFBRSxlQUFlO1lBQ25CLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLElBQUksRUFBRSxPQUFPO1lBQ2IsVUFBVSxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQzVCO0tBU0Y7SUFDRCxNQUFNLEVBQUU7UUFDTjtZQUNFLE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsT0FBTztvQkFDaEIsV0FBVyxFQUFFLCtCQUErQjs7b0JBRTVDLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLE9BQU87Z0NBQ1osUUFBUSxFQUFFLE1BQU07NkJBQ2pCO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsV0FBVztvQkFDcEIsWUFBWSxFQUFFO3dCQUNaLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsV0FBVztnQ0FDaEIsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLG1CQUFtQjtnQ0FDeEIsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLE9BQU8sRUFBRSxlQUFlO2FBQ3pCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsY0FBYztvQkFDdkIsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSx3QkFBd0I7Z0NBQzdCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsY0FBYzs7b0JBRTNCLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsT0FBTztnQ0FDWixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFVBQVUsRUFBRTt3QkFDVixLQUFLLEVBQUUsaUVBQWlFO3FCQUN6RTtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxvQkFBb0I7Z0NBQ3pCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQW1DRjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNOztZQUNaLEdBQUcsRUFBRSxPQUFPOztZQUNaLFNBQVMsRUFBRSxLQUFLLENBQUMsYUFBYTtTQUMvQjtRQUNELE1BQU0sRUFBRTtZQUNOO2dCQUNFLEVBQUUsRUFBRSxhQUFhO2dCQUNqQixTQUFTLEVBQUUsSUFBSTtnQkFDZixLQUFLLEVBQUUsR0FBRzthQUNYO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtDQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB0b3RhbENvdW50OiAwLFxuICBmYWNldHM6IFtcbiAgICB7XG4gICAgICBpZDogJ3F1ZXJ5JyxcbiAgICAgIHR5cGU6ICd2YWx1ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncXVlcnktYWxsJyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICBoYXNTdGF0aWNEYXRhOiB0cnVlLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICBsYWJlbDogJ0NlcmNhIGluIHR1dHRpIGNhbXBpIGRlbGxlIHNjaGVkZSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdxdWVyeS1saW5rcycsXG4gICAgICB0eXBlOiAndmFsdWUnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2VudGl0eS10eXBlcycsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgb3BlcmF0b3I6ICdPUicsXG4gICAgICBsaW1pdDogMTAsXG4gICAgICBvcmRlcjogJ2NvdW50J1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdlbnRpdHktc2VhcmNoJyxcbiAgICAgIHR5cGU6ICd2YWx1ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZW50aXR5LWxpbmtzJyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICBzZWFyY2hEYXRhOiBbJ2VudGl0eS10eXBlJ11cbiAgICB9LFxuICAgIC8qIHtcbiAgICAgIGlkOiAnZGF0ZS1mcm9tJyxcbiAgICAgIHR5cGU6ICd2YWx1ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZGF0ZS10bycsXG4gICAgICB0eXBlOiAndmFsdWUnXG4gICAgfSAqL1xuICBdLFxuICBmaWVsZHM6IFtcbiAgICB7XG4gICAgICBpbnB1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBmYWNldElkOiAncXVlcnknLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgbmVpIHRpdG9saSBkZWxsZSBzY2hlZGUnLFxuICAgICAgICAgIC8vIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBkZWxheTogNTAwLFxuICAgICAgICAgICAgbWluQ2hhcnM6IDMsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnTElLRSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5LWFsbCcsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAncXVlcnktYWxsJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5LWxpbmtzJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnc291cmNlLmVudGl0eVR5cGUnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGxhYmVsOiAnUmVsYXppb25lIGNvbicsXG4gICAgICAgIGNsYXNzZXM6ICdyZWxhdGVkLWNsYXNzJ1xuICAgICAgfSxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LXR5cGVzJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgICAgICBjb250ZXh0OiAnaW50ZXJuYWwnLFxuICAgICAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdzZWFyY2hEYXRhLmVudGl0eS10eXBlJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1zZWFyY2gnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgZW50aXTDoCcsXG4gICAgICAgICAgLy8gaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgICAgICBtaW5DaGFyczogMyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXG4gICAgICAgICAgICB0YXJnZXQ6ICdlbnRpdHktbGlua3MnLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ0xJS0UnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1saW5rcycsXG4gICAgICAgICAgZW1wdHlTdGF0ZToge1xuICAgICAgICAgICAgbGFiZWw6ICdMYSB0dWEgcmljZXJjYSBub24gaGEgZGF0byByaXN1bHRhdGksIHByb3ZhIGEgY2FtYmlhcmUgaSBmaWx0cmknXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgICAgICBsaW1pdDogMjAsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAncmVsYXRlZEVudGl0aWVzLmlkJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIC8qe1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGxhYmVsOiAnRGF0YScsXG4gICAgICAgIGNsYXNzZXM6ICdkYXRlLWNsYXNzJ1xuICAgICAgfSxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgICAgZmFjZXRJZDogJ2RhdGUtZnJvbScsXG4gICAgICAgICAgbGFiZWw6ICdEYWwnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3NvdXJjZS5kYXRlU3RhcnQnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPj0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgICBmYWNldElkOiAnZGF0ZS10bycsXG4gICAgICAgICAgbGFiZWw6ICdBbCcsXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnc291cmNlLmRhdGVFbmQnLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPD0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9Ki9cbiAgXSxcbiAgcmVzdWx0czoge1xuICAgIG9yZGVyOiB7XG4gICAgICB0eXBlOiAndGV4dCcsIC8vIHNjb3JlIHwgdGV4dCB8IGRhdGVcbiAgICAgIGtleTogJ2xhYmVsJywgLy8gZG9jUGF0aCwgZWxhc3RpYyBrZXksIGVjY1xuICAgICAgZGlyZWN0aW9uOiAnQVNDJyAvLyBBU0MgfCBERVNDXG4gICAgfSxcbiAgICBmaWVsZHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcbiAgICAgICAgbGltaXQ6IDIwMFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgcGFnZTogeyBvZmZzZXQ6IDAsIGxpbWl0OiAxMCB9XG59O1xuIl19