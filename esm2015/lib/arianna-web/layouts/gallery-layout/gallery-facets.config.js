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
                    label: 'Cerca in tutti i campi delle schede'
                }
            ]
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
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        searchIn: [
                            {
                                key: 'label.ngrams',
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
                                key: 'label.ngrams^5,text^4,fields.*^3',
                                operator: '='
                            }
                        ]
                    }
                },
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
                        pagination: {
                            limit: 50,
                            offset: 0
                        },
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
            type: 'score',
            key: '_score',
            direction: 'DESC' // ASC | DESC
        },
        fields: [
            {
                id: 'description',
                highlight: true,
                limit: 200
            }
        ]
    },
    page: { offset: 0, limit: 12 }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1mYWNldHMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvZ2FsbGVyeS1sYXlvdXQvZ2FsbGVyeS1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7SUFDYixVQUFVLEVBQUUsQ0FBQztJQUNiLE1BQU0sRUFBRTtRQUNOO1lBQ0UsRUFBRSxFQUFFLE9BQU87WUFDWCxJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsV0FBVztZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsYUFBYSxFQUFFLElBQUk7WUFDbkIsSUFBSSxFQUFFO2dCQUNKO29CQUNFLEtBQUssRUFBRSxHQUFHO29CQUNWLEtBQUssRUFBRSxxQ0FBcUM7aUJBQzdDO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsRUFBRSxFQUFFLGNBQWM7WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLE9BQU87U0FDZjtRQUNEO1lBQ0UsRUFBRSxFQUFFLGVBQWU7WUFDbkIsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUNEO1lBQ0UsRUFBRSxFQUFFLGNBQWM7WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7U0FDNUI7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOO1lBQ0UsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxPQUFPO29CQUNoQixXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxZQUFZLEVBQUU7d0JBQ1osS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLENBQUM7d0JBQ1gsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxjQUFjO2dDQUNuQixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxXQUFXO29CQUNwQixZQUFZLEVBQUU7d0JBQ1osUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxrQ0FBa0M7Z0NBQ3ZDLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxlQUFlO2dCQUN0QixPQUFPLEVBQUUsZUFBZTthQUN6QjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsd0JBQXdCO2dDQUM3QixRQUFRLEVBQUUsR0FBRzs2QkFDZDt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsZUFBZTtvQkFDeEIsWUFBWSxFQUFFO3dCQUNaLEtBQUssRUFBRSxHQUFHO3dCQUNWLFFBQVEsRUFBRSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxPQUFPO2dDQUNaLFFBQVEsRUFBRSxNQUFNOzZCQUNqQjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsY0FBYztvQkFDdkIsVUFBVSxFQUFFO3dCQUNWLEtBQUssRUFBRSxpRUFBaUU7cUJBQ3pFO29CQUNELFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixLQUFLLEVBQUUsRUFBRTt3QkFDVCxVQUFVLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLEVBQUU7NEJBQ1QsTUFBTSxFQUFFLENBQUM7eUJBQ1Y7d0JBQ0QsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxvQkFBb0I7Z0NBQ3pCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE9BQU87WUFDYixHQUFHLEVBQUUsUUFBUTtZQUNiLFNBQVMsRUFBRSxNQUFNLENBQUMsYUFBYTtTQUNoQztRQUNELE1BQU0sRUFBRTtZQUNOO2dCQUNFLEVBQUUsRUFBRSxhQUFhO2dCQUNqQixTQUFTLEVBQUUsSUFBSTtnQkFDZixLQUFLLEVBQUUsR0FBRzthQUNYO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtDQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHRvdGFsQ291bnQ6IDAsXHJcbiAgZmFjZXRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAncXVlcnknLFxyXG4gICAgICB0eXBlOiAndmFsdWUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ3F1ZXJ5LWFsbCcsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgIGhhc1N0YXRpY0RhdGE6IHRydWUsXHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgICAgICAgbGFiZWw6ICdDZXJjYSBpbiB0dXR0aSBpIGNhbXBpIGRlbGxlIHNjaGVkZSdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnZW50aXR5LXR5cGVzJyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgb3BlcmF0b3I6ICdPUicsXHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgb3JkZXI6ICdjb3VudCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnZW50aXR5LXNlYXJjaCcsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnZW50aXR5LWxpbmtzJyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgc2VhcmNoRGF0YTogWydlbnRpdHktdHlwZSddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgZmllbGRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlucHV0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeScsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIG5laSB0aXRvbGkgZGVsbGUgc2NoZWRlJyxcclxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xyXG4gICAgICAgICAgICBkZWxheTogNTAwLFxyXG4gICAgICAgICAgICBtaW5DaGFyczogMyxcclxuICAgICAgICAgICAgc2VhcmNoSW46IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbC5uZ3JhbXMnLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICdMSUtFJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeS1hbGwnLFxyXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAnbGFiZWwubmdyYW1zXjUsdGV4dF40LGZpZWxkcy4qXjMnLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgIGxhYmVsOiAnUmVsYXppb25lIGNvbicsXHJcbiAgICAgICAgY2xhc3NlczogJ3JlbGF0ZWQtY2xhc3MnXHJcbiAgICAgIH0sXHJcbiAgICAgIGlucHV0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LXR5cGVzJyxcclxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xyXG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxyXG4gICAgICAgICAgICBjb250ZXh0OiAnaW50ZXJuYWwnLFxyXG4gICAgICAgICAgICB0YXJnZXQ6ICdlbnRpdHktbGlua3MnLFxyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NlYXJjaERhdGEuZW50aXR5LXR5cGUnLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1zZWFyY2gnLFxyXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXHJcbiAgICAgICAgICAgIG1pbkNoYXJzOiAzLFxyXG4gICAgICAgICAgICBjb250ZXh0OiAnaW50ZXJuYWwnLFxyXG4gICAgICAgICAgICB0YXJnZXQ6ICdlbnRpdHktbGlua3MnLFxyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnTElLRSdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICdsaW5rJyxcclxuICAgICAgICAgIGZhY2V0SWQ6ICdlbnRpdHktbGlua3MnLFxyXG4gICAgICAgICAgZW1wdHlTdGF0ZToge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0xhIHR1YSByaWNlcmNhIG5vbiBoYSBkYXRvIHJpc3VsdGF0aSwgcHJvdmEgYSBjYW1iaWFyZSBpIGZpbHRyaSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgaXNBcnJheTogdHJ1ZSxcclxuICAgICAgICAgICAgbGltaXQ6IDIwLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbGltaXQ6IDUwLFxyXG4gICAgICAgICAgICAgIG9mZnNldDogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3JlbGF0ZWRFbnRpdGllcy5pZCcsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgcmVzdWx0czoge1xyXG4gICAgb3JkZXI6IHtcclxuICAgICAgdHlwZTogJ3Njb3JlJywgLy8gc2NvcmUgfCB0ZXh0IHwgZGF0ZVxyXG4gICAgICBrZXk6ICdfc2NvcmUnLCAvLyBkb2NQYXRoLCBlbGFzdGljIGtleSwgZWNjXHJcbiAgICAgIGRpcmVjdGlvbjogJ0RFU0MnIC8vIEFTQyB8IERFU0NcclxuICAgIH0sXHJcbiAgICBmaWVsZHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICBsaW1pdDogMjAwXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHBhZ2U6IHsgb2Zmc2V0OiAwLCBsaW1pdDogMTIgfVxyXG59O1xyXG4iXX0=