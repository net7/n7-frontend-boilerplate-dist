/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/search-layout/search-facets.config.ts
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
        // FIXME: collegare API
        // e controllare nuovo formato results.fields
        fields: [{
                id: 'title',
                highlight: true,
                limit: 50,
            }]
    },
    page: { offset: 0, limit: 10 }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L3NlYXJjaC1mYWNldHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZUFBZTtJQUNiLFVBQVUsRUFBRSxDQUFDO0lBQ2IsTUFBTSxFQUFFLENBQUM7WUFDUCxFQUFFLEVBQUUsT0FBTztZQUNYLElBQUksRUFBRSxPQUFPO1NBQ2QsRUFBRTtZQUNELEVBQUUsRUFBRSxXQUFXO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsQ0FBQztvQkFDTCxLQUFLLEVBQUUsR0FBRztvQkFDVixLQUFLLEVBQUUsbUNBQW1DO2lCQUMzQyxDQUFDO1NBQ0gsRUFBRTtZQUNELEVBQUUsRUFBRSxhQUFhO1lBQ2pCLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLEVBQUU7U0FDVCxFQUFFO1lBQ0QsRUFBRSxFQUFFLGNBQWM7WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLE9BQU87O1lBQ2QsSUFBSSxFQUFFLEVBQUU7U0FDVCxFQUFFO1lBQ0QsRUFBRSxFQUFFLGVBQWU7WUFDbkIsSUFBSSxFQUFFLE9BQU87U0FDZCxFQUFFO1lBQ0QsRUFBRSxFQUFFLGNBQWM7WUFDbEIsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO1lBQ2xDLElBQUksRUFBRSxFQUFFO1NBQ1QsRUFBRTtZQUNELEVBQUUsRUFBRSxXQUFXO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsRUFBRTtTQUNULEVBQUU7WUFDRCxFQUFFLEVBQUUsU0FBUztZQUNiLElBQUksRUFBRSxPQUFPO1lB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Q0FBQztJQUNGLE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPOztZQUNiLEdBQUcsRUFBRSxRQUFROztZQUNiLFNBQVMsRUFBRSxNQUFNO1NBQ2xCOzs7UUFJRCxNQUFNLEVBQUUsQ0FBQztnQkFDUCxFQUFFLEVBQUUsT0FBTztnQkFDWCxTQUFTLEVBQUUsSUFBSTtnQkFDZixLQUFLLEVBQUUsRUFBRTthQUNWLENBQUM7S0FDSDtJQUNELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtDQUMvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB0b3RhbENvdW50OiAwLFxuICBmYWNldHM6IFt7XG4gICAgaWQ6ICdxdWVyeScsIFxuICAgIHR5cGU6ICd2YWx1ZSdcbiAgfSwge1xuICAgIGlkOiAncXVlcnktYWxsJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbe1xuICAgICAgdmFsdWU6ICcxJyxcbiAgICAgIGxhYmVsOiAnQ2VyY2EgaW4gdHV0dGkgY2FtcGkgZGVsbGUgc2NoZWRlJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ3F1ZXJ5LWxpbmtzJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9LCB7XG4gICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgb3BlcmF0b3I6ICdPUicsXG4gICAgbGltaXQ6IDEwLFxuICAgIG9yZGVyOiAnY291bnQnLCAvLyBjb3VudCB8IHRleHRcbiAgICBkYXRhOiBbXVxuICB9LCB7XG4gICAgaWQ6ICdlbnRpdHktc2VhcmNoJywgXG4gICAgdHlwZTogJ3ZhbHVlJ1xuICB9LCB7XG4gICAgaWQ6ICdlbnRpdHktbGlua3MnLCBcbiAgICB0eXBlOiAndmFsdWUnLFxuICAgIG1ldGFkYXRhOiBbJ3RpdGxlJywgJ2VudGl0eS10eXBlJ10sXG4gICAgZGF0YTogW11cbiAgfSwge1xuICAgIGlkOiAnZGF0ZS1mcm9tJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9LCB7XG4gICAgaWQ6ICdkYXRlLXRvJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9XSxcbiAgZmllbGRzOiBbe1xuICAgIGlucHV0czogW3tcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeScsXG4gICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhLi4uJyxcbiAgICAgIC8vIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgbWluQ2hhcnM6IDMsIFxuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UudGl0bGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnTElLRSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeS1hbGwnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ3F1ZXJ5LWFsbCcsXG4gICAgICAgICAgb3BlcmF0b3I6ICc9J1xuICAgICAgICB9XVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeS1saW5rcycsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgaXNBcnJheTogdHJ1ZSxcbiAgICAgICAgc2VhcmNoSW46IFt7XG4gICAgICAgICAga2V5OiAnc291cmNlLmVudGl0eVR5cGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnPSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgbGFiZWw6ICdSZWxhemlvbmUgY29uJyxcbiAgICAgIGNsYXNzZXM6ICdyZWxhdGVkLWNsYXNzJ1xuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGZhY2V0SWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXG4gICAgICAgIHRhcmdldDogJ2VudGl0eS1saW5rcycsXG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ2VudGl0eS10eXBlJyxcbiAgICAgICAgICBvcGVyYXRvcjogJz0nXG4gICAgICAgIH1dXG4gICAgICB9IFxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGZhY2V0SWQ6ICdlbnRpdHktc2VhcmNoJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgZW50aXTDoCcsXG4gICAgICAvLyBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgIG1pbkNoYXJzOiAzLCBcbiAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcbiAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgc2VhcmNoSW46IFt7XG4gICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnTElLRSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgZmFjZXRJZDogJ2VudGl0eS1saW5rcycsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgbGltaXQ6IDIwLFxuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UuaWQnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnPSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgbGFiZWw6ICdEYXRhJyxcbiAgICAgIGNsYXNzZXM6ICdkYXRlLWNsYXNzJ1xuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBmYWNldElkOiAnZGF0ZS1mcm9tJyxcbiAgICAgIGxhYmVsOiAnRGFsJyxcbiAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UuZGF0ZVN0YXJ0JyxcbiAgICAgICAgICBvcGVyYXRvcjogJz49J1xuICAgICAgICB9XVxuICAgICAgfSBcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIGZhY2V0SWQ6ICdkYXRlLXRvJyxcbiAgICAgIGxhYmVsOiAnQWwnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ3NvdXJjZS5kYXRlRW5kJyxcbiAgICAgICAgICBvcGVyYXRvcjogJzw9J1xuICAgICAgICB9XVxuICAgICAgfSBcbiAgICB9XVxuICB9XSxcbiAgcmVzdWx0czoge1xuICAgIG9yZGVyOiB7XG4gICAgICB0eXBlOiAnc2NvcmUnLCAvLyBzY29yZSB8IHRleHQgfCBkYXRlXG4gICAgICBrZXk6ICdhdXRob3InLCAvLyBkb2NQYXRoLCBlbGFzdGljIGtleSwgZWNjXG4gICAgICBkaXJlY3Rpb246ICdERVNDJywgLy8gQVNDIHwgREVTQ1xuICAgIH0sIFxuXG4gICAgLy8gRklYTUU6IGNvbGxlZ2FyZSBBUElcbiAgICAvLyBlIGNvbnRyb2xsYXJlIG51b3ZvIGZvcm1hdG8gcmVzdWx0cy5maWVsZHNcbiAgICBmaWVsZHM6IFt7XG4gICAgICBpZDogJ3RpdGxlJyxcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcbiAgICAgIGxpbWl0OiA1MCxcbiAgICB9XVxuICB9LFxuICBwYWdlOiB7IG9mZnNldDogMCwgbGltaXQ6IDEwIH1cbn0iXX0=