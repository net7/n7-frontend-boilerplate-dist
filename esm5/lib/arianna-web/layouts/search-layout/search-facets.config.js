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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZUFBZTtJQUNiLFVBQVUsRUFBRSxDQUFDO0lBQ2IsTUFBTSxFQUFFO1FBQ047WUFDRSxFQUFFLEVBQUUsT0FBTztZQUNYLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxXQUFXO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixhQUFhLEVBQUUsSUFBSTtZQUNuQixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLG1DQUFtQztpQkFDM0M7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsYUFBYTtZQUNqQixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsT0FBTztTQUNmO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsZUFBZTtZQUNuQixJQUFJLEVBQUUsT0FBTztTQUNkO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFVBQVUsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM1QjtLQVNGO0lBQ0QsTUFBTSxFQUFFO1FBQ047WUFDRSxNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFdBQVcsRUFBRSwrQkFBK0I7O29CQUU1QyxZQUFZLEVBQUU7d0JBQ1osS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLENBQUM7d0JBQ1gsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxjQUFjO2dDQUNuQixRQUFRLEVBQUUsTUFBTTs2QkFDakI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLE9BQU8sRUFBRSxXQUFXO29CQUNwQixZQUFZLEVBQUU7d0JBQ1osUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxrQ0FBa0M7Z0NBQ3ZDLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxhQUFhO29CQUN0QixZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEdBQUcsRUFBRSxtQkFBbUI7Z0NBQ3hCLFFBQVEsRUFBRSxHQUFHOzZCQUNkO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxlQUFlO2dCQUN0QixPQUFPLEVBQUUsZUFBZTthQUN6QjtZQUNELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixPQUFPLEVBQUUsVUFBVTt3QkFDbkIsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsd0JBQXdCO2dDQUM3QixRQUFRLEVBQUUsR0FBRzs2QkFDZDt5QkFDRjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsZUFBZTtvQkFDeEIsV0FBVyxFQUFFLGNBQWM7O29CQUUzQixZQUFZLEVBQUU7d0JBQ1osS0FBSyxFQUFFLEdBQUc7d0JBQ1YsUUFBUSxFQUFFLENBQUM7d0JBQ1gsT0FBTyxFQUFFLFVBQVU7d0JBQ25CLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsR0FBRyxFQUFFLE9BQU87Z0NBQ1osUUFBUSxFQUFFLE1BQU07NkJBQ2pCO3lCQUNGO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxjQUFjO29CQUN2QixVQUFVLEVBQUU7d0JBQ1YsS0FBSyxFQUFFLGlFQUFpRTtxQkFDekU7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLEtBQUssRUFBRSxFQUFFO3dCQUNULFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxHQUFHLEVBQUUsb0JBQW9CO2dDQUN6QixRQUFRLEVBQUUsR0FBRzs2QkFDZDt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FtQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTs7WUFDWixHQUFHLEVBQUUsWUFBWTs7WUFDakIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxNQUFNLEVBQUU7WUFDTjtnQkFDRSxFQUFFLEVBQUUsYUFBYTtnQkFDakIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLEdBQUc7YUFDWDtTQUNGO0tBQ0Y7SUFDRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Q0FDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICB0b3RhbENvdW50OiAwLFxyXG4gIGZhY2V0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogJ3F1ZXJ5JyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAncXVlcnktYWxsJyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgaGFzU3RhdGljRGF0YTogdHJ1ZSxcclxuICAgICAgZGF0YTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICAgICAgICBsYWJlbDogJ0NlcmNhIGluIHR1dHRpIGNhbXBpIGRlbGxlIHNjaGVkZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAncXVlcnktbGlua3MnLFxyXG4gICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxyXG4gICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgICBvcGVyYXRvcjogJ09SJyxcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBvcmRlcjogJ2NvdW50JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnZW50aXR5LXNlYXJjaCcsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ2VudGl0eS1saW5rcycsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgIHNlYXJjaERhdGE6IFsnZW50aXR5LXR5cGUnXSxcclxuICAgIH0sXHJcbiAgICAvKiB7XHJcbiAgICAgIGlkOiAnZGF0ZS1mcm9tJyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdkYXRlLXRvJyxcclxuICAgICAgdHlwZTogJ3ZhbHVlJ1xyXG4gICAgfSAqL1xyXG4gIF0sXHJcbiAgZmllbGRzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlucHV0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgIGZhY2V0SWQ6ICdxdWVyeScsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIG5laSB0aXRvbGkgZGVsbGUgc2NoZWRlJyxcclxuICAgICAgICAgIC8vIGljb246ICduNy1pY29uLXNlYXJjaCcsXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDUwMCxcclxuICAgICAgICAgICAgbWluQ2hhcnM6IDMsXHJcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAnbGFiZWwubmdyYW1zJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnTElLRScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5LWFsbCcsXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgc2VhcmNoSW46IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbC5uZ3JhbXNeNSx0ZXh0XjQsZmllbGRzLipeMycsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ3F1ZXJ5LWxpbmtzJyxcclxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xyXG4gICAgICAgICAgICBpc0FycmF5OiB0cnVlLFxyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NvdXJjZS5lbnRpdHlUeXBlJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgIGxhYmVsOiAnUmVsYXppb25lIGNvbicsXHJcbiAgICAgICAgY2xhc3NlczogJ3JlbGF0ZWQtY2xhc3MnLFxyXG4gICAgICB9LFxyXG4gICAgICBpbnB1dHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS10eXBlcycsXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgaXNBcnJheTogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcclxuICAgICAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcclxuICAgICAgICAgICAgc2VhcmNoSW46IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZWFyY2hEYXRhLmVudGl0eS10eXBlJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICBmYWNldElkOiAnZW50aXR5LXNlYXJjaCcsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhIGVudGl0w6AnLFxyXG4gICAgICAgICAgLy8gaWNvbjogJ243LWljb24tc2VhcmNoJyxcclxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xyXG4gICAgICAgICAgICBkZWxheTogNTAwLFxyXG4gICAgICAgICAgICBtaW5DaGFyczogMyxcclxuICAgICAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcclxuICAgICAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcclxuICAgICAgICAgICAgc2VhcmNoSW46IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdsYWJlbCcsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ0xJS0UnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmsnLFxyXG4gICAgICAgICAgZmFjZXRJZDogJ2VudGl0eS1saW5rcycsXHJcbiAgICAgICAgICBlbXB0eVN0YXRlOiB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnTGEgdHVhIHJpY2VyY2Egbm9uIGhhIGRhdG8gcmlzdWx0YXRpLCBwcm92YSBhIGNhbWJpYXJlIGkgZmlsdHJpJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmaWx0ZXJDb25maWc6IHtcclxuICAgICAgICAgICAgaXNBcnJheTogdHJ1ZSxcclxuICAgICAgICAgICAgbGltaXQ6IDIwLFxyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3JlbGF0ZWRFbnRpdGllcy5pZCcsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgLyoge1xyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICBsYWJlbDogJ0RhdGEnLFxyXG4gICAgICAgIGNsYXNzZXM6ICdkYXRlLWNsYXNzJ1xyXG4gICAgICB9LFxyXG4gICAgICBpbnB1dHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcclxuICAgICAgICAgIGZhY2V0SWQ6ICdkYXRlLWZyb20nLFxyXG4gICAgICAgICAgbGFiZWw6ICdEYWwnLFxyXG4gICAgICAgICAgZmlsdGVyQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEluOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc291cmNlLmRhdGVTdGFydCcsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz49J1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogJ3NlbGVjdCcsXHJcbiAgICAgICAgICBmYWNldElkOiAnZGF0ZS10bycsXHJcbiAgICAgICAgICBsYWJlbDogJ0FsJyxcclxuICAgICAgICAgIGZpbHRlckNvbmZpZzoge1xyXG4gICAgICAgICAgICBzZWFyY2hJbjogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NvdXJjZS5kYXRlRW5kJyxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPD0nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9ICovXHJcbiAgXSxcclxuICByZXN1bHRzOiB7XHJcbiAgICBvcmRlcjoge1xyXG4gICAgICB0eXBlOiAndGV4dCcsIC8vIHNjb3JlIHwgdGV4dCB8IGRhdGVcclxuICAgICAga2V5OiAnbGFiZWxfc29ydCcsIC8vIGRvY1BhdGgsIGVsYXN0aWMga2V5LCBlY2NcclxuICAgICAgZGlyZWN0aW9uOiAnQVNDJywgLy8gQVNDIHwgREVTQ1xyXG4gICAgfSxcclxuICAgIGZpZWxkczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIGxpbWl0OiAyMDAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgcGFnZTogeyBvZmZzZXQ6IDAsIGxpbWl0OiAxMCB9LFxyXG59O1xyXG4iXX0=