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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7SUFDYixVQUFVLEVBQUUsQ0FBQztJQUNiLE1BQU0sRUFBRTtRQUNOO1lBQ0UsRUFBRSxFQUFFLE9BQU87WUFDWCxJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsV0FBVztZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsYUFBYSxFQUFFLElBQUk7WUFDbkIsSUFBSSxFQUFFO2dCQUNKO29CQUNFLEtBQUssRUFBRSxHQUFHO29CQUNWLEtBQUssRUFBRSxxQ0FBcUM7aUJBQzdDO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsRUFBRSxFQUFFLGFBQWE7WUFDakIsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNEO1lBQ0UsRUFBRSxFQUFFLGNBQWM7WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLE9BQU87U0FDZjtRQUNEO1lBQ0UsRUFBRSxFQUFFLGVBQWU7WUFDbkIsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNEO1lBQ0UsRUFBRSxFQUFFLGNBQWM7WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7U0FDNUI7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOO1lBQ0UsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxPQUFPO29CQUNoQixXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxZQUFZLEVBQUU7d0JBQ1osS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLENBQUM7d0JBQ1gsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxjQUFjO2dDQUNuQixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxXQUFXO29CQUNwQixZQUFZLEVBQUU7d0JBQ1osUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxrQ0FBa0M7Z0NBQ3ZDLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxhQUFhO29CQUN0QixZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxtQkFBbUI7Z0NBQ3hCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxlQUFlO2dCQUN0QixPQUFPLEVBQUUsZUFBZTthQUN6QjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsd0JBQXdCO2dDQUM3QixRQUFRLEVBQUUsR0FBRzs2QkFDZDt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsZUFBZTtvQkFDeEIsV0FBVyxFQUFFLGNBQWM7b0JBQzNCLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsT0FBTztnQ0FDWixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFVBQVUsRUFBRTt3QkFDVixLQUFLLEVBQUUsaUVBQWlFO3FCQUN6RTtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsVUFBVSxFQUFFOzRCQUNWLEtBQUssRUFBRSxFQUFFOzRCQUNULE1BQU0sRUFBRSxDQUFDO3lCQUNWO3dCQUNELFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsb0JBQW9CO2dDQUN6QixRQUFRLEVBQUUsR0FBRzs2QkFDZDt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNO1lBQ1osR0FBRyxFQUFFLFlBQVk7WUFDakIsU0FBUyxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQy9CO1FBQ0QsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLEtBQUssRUFBRSxHQUFHO2FBQ1g7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0NBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdG90YWxDb3VudDogMCxcclxuICBmYWNldHM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICdxdWVyeScsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3F1ZXJ5LWFsbCcsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgIGhhc1N0YXRpY0RhdGE6IHRydWUsXHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgICAgICAgbGFiZWw6ICdDZXJjYSBpbiB0dXR0aSBpIGNhbXBpIGRlbGxlIHNjaGVkZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAncXVlcnktbGlua3MnLFxyXG4gICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxyXG4gICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgICBvcGVyYXRvcjogJ09SJyxcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBvcmRlcjogJ2NvdW50JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnZW50aXR5LXNlYXJjaCcsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2VudGl0eS1saW5rcycsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgIHNlYXJjaERhdGE6IFsnZW50aXR5LXR5cGUnXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBmaWVsZHM6IFtcclxuICAgIHtcclxuICAgICAgaW5wdXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5JyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgbmVpIHRpdG9saSBkZWxsZSBzY2hlZGUnLFxyXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXHJcbiAgICAgICAgICAgIG1pbkNoYXJzOiAzLFxyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsLm5ncmFtcycsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ0xJS0UnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeS1hbGwnLFxyXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAnbGFiZWwubmdyYW1zXjUsdGV4dF40LGZpZWxkcy4qXjMnLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeS1saW5rcycsXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgaXNBcnJheTogdHJ1ZSxcclxuICAgICAgICAgICAgc2VhcmNoSW46IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzb3VyY2UuZW50aXR5VHlwZScsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICBsYWJlbDogJ1JlbGF6aW9uZSBjb24nLFxyXG4gICAgICAgIGNsYXNzZXM6ICdyZWxhdGVkLWNsYXNzJyxcclxuICAgICAgfSxcclxuICAgICAgaW5wdXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgICAgIGZhY2V0SWQ6ICdlbnRpdHktdHlwZXMnLFxyXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXHJcbiAgICAgICAgICAgIHRhcmdldDogJ2VudGl0eS1saW5rcycsXHJcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2VhcmNoRGF0YS5lbnRpdHktdHlwZScsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1zZWFyY2gnLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdDZXJjYSBlbnRpdMOgJyxcclxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xyXG4gICAgICAgICAgICBkZWxheTogNTAwLFxyXG4gICAgICAgICAgICBtaW5DaGFyczogMyxcclxuICAgICAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcclxuICAgICAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcclxuICAgICAgICAgICAgc2VhcmNoSW46IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbCcsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ0xJS0UnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1saW5rcycsXHJcbiAgICAgICAgICBlbXB0eVN0YXRlOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnTGEgdHVhIHJpY2VyY2Egbm9uIGhhIGRhdG8gcmlzdWx0YXRpLCBwcm92YSBhIGNhbWJpYXJlIGkgZmlsdHJpJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgaXNBcnJheTogdHJ1ZSxcclxuICAgICAgICAgICAgbGltaXQ6IDIwLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbGltaXQ6IDUwLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3JlbGF0ZWRFbnRpdGllcy5pZCcsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgcmVzdWx0czoge1xyXG4gICAgb3JkZXI6IHsgLy8gRGVmYXVsdCBTb3J0aW5nIE1ldGhvZFxyXG4gICAgICB0eXBlOiAndGV4dCcsIC8vIHNjb3JlIHwgdGV4dCB8IGRhdGVcclxuICAgICAga2V5OiAnbGFiZWxfc29ydCcsIC8vIGRvY1BhdGgsIGVsYXN0aWMga2V5LCBlY2NcclxuICAgICAgZGlyZWN0aW9uOiAnQVNDJyAvLyBBU0MgfCBERVNDXHJcbiAgICB9LFxyXG4gICAgZmllbGRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICBoaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgbGltaXQ6IDIwMCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICBwYWdlOiB7IG9mZnNldDogMCwgbGltaXQ6IDEwIH0sXHJcbn07XHJcbiJdfQ==