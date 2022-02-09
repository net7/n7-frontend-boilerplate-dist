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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1mYWNldHMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWZhY2V0cy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtJQUNiLFVBQVUsRUFBRSxDQUFDO0lBQ2IsTUFBTSxFQUFFO1FBQ047WUFDRSxFQUFFLEVBQUUsT0FBTztZQUNYLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxXQUFXO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixhQUFhLEVBQUUsSUFBSTtZQUNuQixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLHFDQUFxQztpQkFDN0M7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsT0FBTztTQUNmO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsZUFBZTtZQUNuQixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM1QjtLQUNGO0lBQ0QsTUFBTSxFQUFFO1FBQ047WUFDRSxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFlBQVksRUFBRTt3QkFDWixLQUFLLEVBQUUsR0FBRzt3QkFDVixRQUFRLEVBQUUsQ0FBQzt3QkFDWCxRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLGNBQWM7Z0NBQ25CLFFBQVEsRUFBRSxNQUFNOzZCQUNqQjt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFlBQVksRUFBRTt3QkFDWixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLGtDQUFrQztnQ0FDdkMsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLE9BQU8sRUFBRSxlQUFlO2FBQ3pCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixPQUFPLEVBQUUsY0FBYztvQkFDdkIsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixNQUFNLEVBQUUsY0FBYzt3QkFDdEIsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSx3QkFBd0I7Z0NBQzdCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxlQUFlO29CQUN4QixZQUFZLEVBQUU7d0JBQ1osS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLENBQUM7d0JBQ1gsT0FBTyxFQUFFLFVBQVU7d0JBQ25CLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLE9BQU87Z0NBQ1osUUFBUSxFQUFFLE1BQU07NkJBQ2pCO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxjQUFjO29CQUN2QixVQUFVLEVBQUU7d0JBQ1YsS0FBSyxFQUFFLGlFQUFpRTtxQkFDekU7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLEtBQUssRUFBRSxFQUFFO3dCQUNULFVBQVUsRUFBRTs0QkFDVixLQUFLLEVBQUUsRUFBRTs0QkFDVCxNQUFNLEVBQUUsQ0FBQzt5QkFDVjt3QkFDRCxRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLG9CQUFvQjtnQ0FDekIsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEdBQUcsRUFBRSxRQUFRO1lBQ2IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxhQUFhO1NBQ2hDO1FBQ0QsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsRUFBRSxFQUFFLGFBQWE7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLEtBQUssRUFBRSxHQUFHO2FBQ1g7U0FDRjtLQUNGO0lBQ0QsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0NBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgdG90YWxDb3VudDogMCxcclxuICBmYWNldHM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICdxdWVyeScsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAncXVlcnktYWxsJyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgaGFzU3RhdGljRGF0YTogdHJ1ZSxcclxuICAgICAgZGF0YTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICAgICAgICBsYWJlbDogJ0NlcmNhIGluIHR1dHRpIGkgY2FtcGkgZGVsbGUgc2NoZWRlJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxyXG4gICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgICBvcGVyYXRvcjogJ09SJyxcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBvcmRlcjogJ2NvdW50J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdlbnRpdHktc2VhcmNoJyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdlbnRpdHktbGlua3MnLFxyXG4gICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgICBzZWFyY2hEYXRhOiBbJ2VudGl0eS10eXBlJ11cclxuICAgIH0sXHJcbiAgXSxcclxuICBmaWVsZHM6IFtcclxuICAgIHtcclxuICAgICAgaW5wdXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5JyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgbmVpIHRpdG9saSBkZWxsZSBzY2hlZGUnLFxyXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiA1MDAsXHJcbiAgICAgICAgICAgIG1pbkNoYXJzOiAzLFxyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2xhYmVsLm5ncmFtcycsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ0xJS0UnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5LWFsbCcsXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgc2VhcmNoSW46IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbC5uZ3JhbXNeNSx0ZXh0XjQsZmllbGRzLipeMycsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgbGFiZWw6ICdSZWxhemlvbmUgY29uJyxcclxuICAgICAgICBjbGFzc2VzOiAncmVsYXRlZC1jbGFzcydcclxuICAgICAgfSxcclxuICAgICAgaW5wdXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgICAgIGZhY2V0SWQ6ICdlbnRpdHktdHlwZXMnLFxyXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIGlzQXJyYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXHJcbiAgICAgICAgICAgIHRhcmdldDogJ2VudGl0eS1saW5rcycsXHJcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2VhcmNoRGF0YS5lbnRpdHktdHlwZScsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LXNlYXJjaCcsXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDUwMCxcclxuICAgICAgICAgICAgbWluQ2hhcnM6IDMsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXHJcbiAgICAgICAgICAgIHRhcmdldDogJ2VudGl0eS1saW5rcycsXHJcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAnbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICdMSUtFJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1saW5rcycsXHJcbiAgICAgICAgICBlbXB0eVN0YXRlOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnTGEgdHVhIHJpY2VyY2Egbm9uIGhhIGRhdG8gcmlzdWx0YXRpLCBwcm92YSBhIGNhbWJpYXJlIGkgZmlsdHJpJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xyXG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxyXG4gICAgICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICBsaW1pdDogNTAsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAncmVsYXRlZEVudGl0aWVzLmlkJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPSdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgXSxcclxuICByZXN1bHRzOiB7XHJcbiAgICBvcmRlcjoge1xyXG4gICAgICB0eXBlOiAnc2NvcmUnLCAvLyBzY29yZSB8IHRleHQgfCBkYXRlXHJcbiAgICAgIGtleTogJ19zY29yZScsIC8vIGRvY1BhdGgsIGVsYXN0aWMga2V5LCBlY2NcclxuICAgICAgZGlyZWN0aW9uOiAnREVTQycgLy8gQVNDIHwgREVTQ1xyXG4gICAgfSxcclxuICAgIGZpZWxkczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIGxpbWl0OiAyMDBcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgcGFnZTogeyBvZmZzZXQ6IDAsIGxpbWl0OiAxMiB9XHJcbn07XHJcbiJdfQ==