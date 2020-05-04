/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/gallery-layout/gallery-facets.config.ts
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
                limit: 200
            }
        ]
    },
    page: { offset: 0, limit: 12 }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1mYWNldHMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2xheW91dHMvZ2FsbGVyeS1sYXlvdXQvZ2FsbGVyeS1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZUFBZTtJQUNiLFVBQVUsRUFBRSxDQUFDO0lBQ2IsTUFBTSxFQUFFO1FBQ047WUFDRSxFQUFFLEVBQUUsT0FBTztZQUNYLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxXQUFXO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixhQUFhLEVBQUUsSUFBSTtZQUNuQixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLG1DQUFtQztpQkFDM0M7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsT0FBTztTQUNmO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsZUFBZTtZQUNuQixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM1QjtLQUNGO0lBQ0QsTUFBTSxFQUFFO1FBQ047WUFDRSxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFdBQVcsRUFBRSwrQkFBK0I7O29CQUU1QyxZQUFZLEVBQUU7d0JBQ1osS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLENBQUM7d0JBQ1gsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxjQUFjO2dDQUNuQixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxXQUFXO29CQUNwQixZQUFZLEVBQUU7d0JBQ1osUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxrQ0FBa0M7Z0NBQ3ZDLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxlQUFlO2dCQUN0QixPQUFPLEVBQUUsZUFBZTthQUN6QjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsd0JBQXdCO2dDQUM3QixRQUFRLEVBQUUsR0FBRzs2QkFDZDt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsZUFBZTtvQkFDeEIsV0FBVyxFQUFFLGNBQWM7O29CQUUzQixZQUFZLEVBQUU7d0JBQ1osS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLENBQUM7d0JBQ1gsT0FBTyxFQUFFLFVBQVU7d0JBQ25CLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLE9BQU87Z0NBQ1osUUFBUSxFQUFFLE1BQU07NkJBQ2pCO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxjQUFjO29CQUN2QixVQUFVLEVBQUU7d0JBQ1YsS0FBSyxFQUFFLGlFQUFpRTtxQkFDekU7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLEtBQUssRUFBRSxFQUFFO3dCQUNULFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsb0JBQW9CO2dDQUN6QixRQUFRLEVBQUUsR0FBRzs2QkFDZDt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPOztZQUNiLEdBQUcsRUFBRSxRQUFROztZQUNiLFNBQVMsRUFBRSxNQUFNLENBQUMsYUFBYTtTQUNoQztRQUNELE1BQU0sRUFBRTtZQUNOO2dCQUNFLEVBQUUsRUFBRSxhQUFhO2dCQUNqQixTQUFTLEVBQUUsSUFBSTtnQkFDZixLQUFLLEVBQUUsR0FBRzthQUNYO1NBQ0Y7S0FDRjtJQUNELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtDQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB0b3RhbENvdW50OiAwLFxuICBmYWNldHM6IFtcbiAgICB7XG4gICAgICBpZDogJ3F1ZXJ5JyxcbiAgICAgIHR5cGU6ICd2YWx1ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncXVlcnktYWxsJyxcbiAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICBoYXNTdGF0aWNEYXRhOiB0cnVlLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICBsYWJlbDogJ0NlcmNhIGluIHR1dHRpIGNhbXBpIGRlbGxlIHNjaGVkZSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgICAgdHlwZTogJ3ZhbHVlJyxcbiAgICAgIG9wZXJhdG9yOiAnT1InLFxuICAgICAgbGltaXQ6IDEwLFxuICAgICAgb3JkZXI6ICdjb3VudCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZW50aXR5LXNlYXJjaCcsXG4gICAgICB0eXBlOiAndmFsdWUnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2VudGl0eS1saW5rcycsXG4gICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgc2VhcmNoRGF0YTogWydlbnRpdHktdHlwZSddXG4gICAgfSxcbiAgXSxcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgaW5wdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5JyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIG5laSB0aXRvbGkgZGVsbGUgc2NoZWRlJyxcbiAgICAgICAgICAvLyBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgICAgIG1pbkNoYXJzOiAzLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsLm5ncmFtcycsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICdMSUtFJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBmYWNldElkOiAncXVlcnktYWxsJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbC5uZ3JhbXNeNSx0ZXh0XjQsZmllbGRzLipeMycsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIGxhYmVsOiAnUmVsYXppb25lIGNvbicsXG4gICAgICAgIGNsYXNzZXM6ICdyZWxhdGVkLWNsYXNzJ1xuICAgICAgfSxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LXR5cGVzJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgICAgICBjb250ZXh0OiAnaW50ZXJuYWwnLFxuICAgICAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdzZWFyY2hEYXRhLmVudGl0eS10eXBlJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1zZWFyY2gnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgZW50aXTDoCcsXG4gICAgICAgICAgLy8gaWNvbjogJ243LWljb24tc2VhcmNoJyxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgICAgICBtaW5DaGFyczogMyxcbiAgICAgICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXG4gICAgICAgICAgICB0YXJnZXQ6ICdlbnRpdHktbGlua3MnLFxuICAgICAgICAgICAgc2VhcmNoSW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ0xJS0UnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1saW5rcycsXG4gICAgICAgICAgZW1wdHlTdGF0ZToge1xuICAgICAgICAgICAgbGFiZWw6ICdMYSB0dWEgcmljZXJjYSBub24gaGEgZGF0byByaXN1bHRhdGksIHByb3ZhIGEgY2FtYmlhcmUgaSBmaWx0cmknXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgICAgICBsaW1pdDogMjAsXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAncmVsYXRlZEVudGl0aWVzLmlkJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICBdLFxuICByZXN1bHRzOiB7XG4gICAgb3JkZXI6IHtcbiAgICAgIHR5cGU6ICdzY29yZScsIC8vIHNjb3JlIHwgdGV4dCB8IGRhdGVcbiAgICAgIGtleTogJ19zY29yZScsIC8vIGRvY1BhdGgsIGVsYXN0aWMga2V5LCBlY2NcbiAgICAgIGRpcmVjdGlvbjogJ0RFU0MnIC8vIEFTQyB8IERFU0NcbiAgICB9LFxuICAgIGZpZWxkczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICBsaW1pdDogMjAwXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBwYWdlOiB7IG9mZnNldDogMCwgbGltaXQ6IDEyIH1cbn07XG4iXX0=