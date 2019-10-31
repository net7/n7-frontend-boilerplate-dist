/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export default {
    totalCount: 0,
    facets: [{
            id: 'query',
            type: 'value'
        }, {
            id: 'query-all',
            type: 'value',
            data: [{
                    value: '1',
                    label: 'Cerca in tutti campi delle schede'
                }]
        }, {
            id: 'query-links',
            type: 'value',
            data: []
        }, {
            id: 'entity-types',
            type: 'value',
            operator: 'OR',
            limit: 10,
            order: 'count',
            // count | text
            data: []
        }, {
            id: 'entity-search',
            type: 'value'
        }, {
            id: 'entity-links',
            type: 'value',
            metadata: ['title', 'entity-type'],
            data: []
        }, {
            id: 'date-from',
            type: 'value',
            data: []
        }, {
            id: 'date-to',
            type: 'value',
            data: []
        }],
    fields: [{
            inputs: [{
                    type: 'text',
                    facetId: 'query',
                    placeholder: 'Cerca...',
                    // icon: 'n7-icon-search',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        searchIn: [{
                                key: 'source.title',
                                operator: 'LIKE'
                            }]
                    }
                }, {
                    type: 'checkbox',
                    facetId: 'query-all',
                    filterConfig: {
                        searchIn: [{
                                key: 'query-all',
                                operator: '='
                            }]
                    }
                }, {
                    type: 'link',
                    facetId: 'query-links',
                    filterConfig: {
                        isArray: true,
                        searchIn: [{
                                key: 'source.entityType',
                                operator: '='
                            }]
                    }
                }]
        }, {
            header: {
                label: 'Relazione con',
                classes: 'related-class'
            },
            inputs: [{
                    type: 'checkbox',
                    facetId: 'entity-types',
                    filterConfig: {
                        isArray: true,
                        context: 'internal',
                        target: 'entity-links',
                        searchIn: [{
                                key: 'entity-type',
                                operator: '='
                            }]
                    }
                }, {
                    type: 'text',
                    facetId: 'entity-search',
                    placeholder: 'Cerca entità',
                    // icon: 'n7-icon-search',
                    filterConfig: {
                        delay: 500,
                        minChars: 3,
                        context: 'internal',
                        target: 'entity-links',
                        searchIn: [{
                                key: 'title',
                                operator: 'LIKE'
                            }]
                    }
                }, {
                    type: 'link',
                    facetId: 'entity-links',
                    filterConfig: {
                        limit: 20,
                        searchIn: [{
                                key: 'source.id',
                                operator: '='
                            }]
                    }
                }]
        }, {
            header: {
                label: 'Data',
                classes: 'date-class'
            },
            inputs: [{
                    type: 'select',
                    facetId: 'date-from',
                    label: 'Dal',
                    filterConfig: {
                        searchIn: [{
                                key: 'source.dateStart',
                                operator: '>='
                            }]
                    }
                }, {
                    type: 'select',
                    facetId: 'date-to',
                    label: 'Al',
                    filterConfig: {
                        searchIn: [{
                                key: 'source.dateEnd',
                                operator: '<='
                            }]
                    }
                }]
        }],
    results: {
        order: {
            type: 'score',
            // score | text | date
            key: 'author',
            // docPath, elastic key, ecc
            direction: 'DESC',
        },
        fields: {
            title: {
                highlight: true,
                limit: 50,
            }
        },
        items: []
    },
    page: { offset: 0, limit: 10 }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxlQUFlO0lBQ2IsVUFBVSxFQUFFLENBQUM7SUFDYixNQUFNLEVBQUUsQ0FBQztZQUNQLEVBQUUsRUFBRSxPQUFPO1lBQ1gsSUFBSSxFQUFFLE9BQU87U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLFdBQVc7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxDQUFDO29CQUNMLEtBQUssRUFBRSxHQUFHO29CQUNWLEtBQUssRUFBRSxtQ0FBbUM7aUJBQzNDLENBQUM7U0FDSCxFQUFFO1lBQ0QsRUFBRSxFQUFFLGFBQWE7WUFDakIsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsRUFBRTtTQUNULEVBQUU7WUFDRCxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsT0FBTzs7WUFDZCxJQUFJLEVBQUUsRUFBRTtTQUNULEVBQUU7WUFDRCxFQUFFLEVBQUUsZUFBZTtZQUNuQixJQUFJLEVBQUUsT0FBTztTQUNkLEVBQUU7WUFDRCxFQUFFLEVBQUUsY0FBYztZQUNsQixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7WUFDbEMsSUFBSSxFQUFFLEVBQUU7U0FDVCxFQUFFO1lBQ0QsRUFBRSxFQUFFLFdBQVc7WUFDZixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxFQUFFO1NBQ1QsRUFBRTtZQUNELEVBQUUsRUFBRSxTQUFTO1lBQ2IsSUFBSSxFQUFFLE9BQU87WUFD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QUFDO0lBQ0YsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE9BQU87O1lBQ2IsR0FBRyxFQUFFLFFBQVE7O1lBQ2IsU0FBUyxFQUFFLE1BQU07U0FDbEI7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLEVBQUU7YUFDVjtTQUNGO1FBQ0QsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUNELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtDQUMvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB0b3RhbENvdW50OiAwLFxuICBmYWNldHM6IFt7XG4gICAgaWQ6ICdxdWVyeScsIFxuICAgIHR5cGU6ICd2YWx1ZSdcbiAgfSwge1xuICAgIGlkOiAncXVlcnktYWxsJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbe1xuICAgICAgdmFsdWU6ICcxJyxcbiAgICAgIGxhYmVsOiAnQ2VyY2EgaW4gdHV0dGkgY2FtcGkgZGVsbGUgc2NoZWRlJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ3F1ZXJ5LWxpbmtzJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9LCB7XG4gICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgb3BlcmF0b3I6ICdPUicsXG4gICAgbGltaXQ6IDEwLFxuICAgIG9yZGVyOiAnY291bnQnLCAvLyBjb3VudCB8IHRleHRcbiAgICBkYXRhOiBbXVxuICB9LCB7XG4gICAgaWQ6ICdlbnRpdHktc2VhcmNoJywgXG4gICAgdHlwZTogJ3ZhbHVlJ1xuICB9LCB7XG4gICAgaWQ6ICdlbnRpdHktbGlua3MnLCBcbiAgICB0eXBlOiAndmFsdWUnLFxuICAgIG1ldGFkYXRhOiBbJ3RpdGxlJywgJ2VudGl0eS10eXBlJ10sXG4gICAgZGF0YTogW11cbiAgfSwge1xuICAgIGlkOiAnZGF0ZS1mcm9tJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9LCB7XG4gICAgaWQ6ICdkYXRlLXRvJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9XSxcbiAgZmllbGRzOiBbe1xuICAgIGlucHV0czogW3tcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeScsXG4gICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhLi4uJyxcbiAgICAgIC8vIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgbWluQ2hhcnM6IDMsIFxuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UudGl0bGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnTElLRSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeS1hbGwnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ3F1ZXJ5LWFsbCcsXG4gICAgICAgICAgb3BlcmF0b3I6ICc9J1xuICAgICAgICB9XVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeS1saW5rcycsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgaXNBcnJheTogdHJ1ZSxcbiAgICAgICAgc2VhcmNoSW46IFt7XG4gICAgICAgICAga2V5OiAnc291cmNlLmVudGl0eVR5cGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnPSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgbGFiZWw6ICdSZWxhemlvbmUgY29uJyxcbiAgICAgIGNsYXNzZXM6ICdyZWxhdGVkLWNsYXNzJ1xuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGZhY2V0SWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXG4gICAgICAgIHRhcmdldDogJ2VudGl0eS1saW5rcycsXG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ2VudGl0eS10eXBlJyxcbiAgICAgICAgICBvcGVyYXRvcjogJz0nXG4gICAgICAgIH1dXG4gICAgICB9IFxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGZhY2V0SWQ6ICdlbnRpdHktc2VhcmNoJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgZW50aXTDoCcsXG4gICAgICAvLyBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgIG1pbkNoYXJzOiAzLCBcbiAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcbiAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgc2VhcmNoSW46IFt7XG4gICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnTElLRSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgZmFjZXRJZDogJ2VudGl0eS1saW5rcycsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgbGltaXQ6IDIwLFxuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UuaWQnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnPSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgbGFiZWw6ICdEYXRhJyxcbiAgICAgIGNsYXNzZXM6ICdkYXRlLWNsYXNzJ1xuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBmYWNldElkOiAnZGF0ZS1mcm9tJyxcbiAgICAgIGxhYmVsOiAnRGFsJyxcbiAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UuZGF0ZVN0YXJ0JyxcbiAgICAgICAgICBvcGVyYXRvcjogJz49J1xuICAgICAgICB9XVxuICAgICAgfSBcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIGZhY2V0SWQ6ICdkYXRlLXRvJyxcbiAgICAgIGxhYmVsOiAnQWwnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ3NvdXJjZS5kYXRlRW5kJyxcbiAgICAgICAgICBvcGVyYXRvcjogJzw9J1xuICAgICAgICB9XVxuICAgICAgfSBcbiAgICB9XVxuICB9XSxcbiAgcmVzdWx0czoge1xuICAgIG9yZGVyOiB7XG4gICAgICB0eXBlOiAnc2NvcmUnLCAvLyBzY29yZSB8IHRleHQgfCBkYXRlXG4gICAgICBrZXk6ICdhdXRob3InLCAvLyBkb2NQYXRoLCBlbGFzdGljIGtleSwgZWNjXG4gICAgICBkaXJlY3Rpb246ICdERVNDJywgLy8gQVNDIHwgREVTQ1xuICAgIH0sIFxuICAgIGZpZWxkczoge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICBsaW1pdDogNTAsXG4gICAgICB9XG4gICAgfSxcbiAgICBpdGVtczogW11cbiAgfSxcbiAgcGFnZTogeyBvZmZzZXQ6IDAsIGxpbWl0OiAxMCB9XG59Il19