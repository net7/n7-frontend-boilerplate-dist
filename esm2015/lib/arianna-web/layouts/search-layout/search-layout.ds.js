/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core';
const ɵ0 = [], ɵ1 = [{
        value: '1',
        label: 'Cerca in tutti campi delle schede'
    }], ɵ2 = [], ɵ3 = [], ɵ4 = [{
        value: 'milano',
        label: 'Milano',
        count: 1,
        metadata: {
            title: 'Milano',
            'entity-type': 'places'
        }
    }, {
        value: 'roma',
        label: 'Comune di Roma',
        count: 2,
        metadata: {
            title: 'Comune di Roma',
            'entity-type': 'places'
        }
    }, {
        value: 'spazio',
        label: 'Spazio',
        count: 3,
        metadata: {
            title: 'Spazio',
            'entity-type': 'concepts'
        }
    }, {
        value: 'rodolfo-marna',
        label: 'Rodolfo Marna',
        count: 4,
        metadata: {
            title: 'Rodolfo Marna',
            'entity-type': 'people'
        }
    }, {
        value: 'alighiero-boetti',
        label: 'Alighiero Boetti',
        count: 5,
        metadata: {
            title: 'Alighiero Boetti',
            'entity-type': 'people'
        }
    }], ɵ5 = [], ɵ6 = [];
/** @type {?} */
const SEARCH_CONFIG = {
    facets: [{
            id: 'query',
            type: 'value',
            data: ɵ0
        }, {
            id: 'query-all',
            type: 'value',
            data: ɵ1
        }, {
            id: 'query-links',
            type: 'value',
            data: ɵ2
        }, {
            id: 'entity-types',
            type: 'value',
            operator: 'OR',
            limit: 10,
            order: 'count',
        }, {
            id: 'entity-search',
            type: 'value',
            data: ɵ3
        }, {
            id: 'entity-links',
            type: 'value',
            metadata: ['title', 'entity-type'],
            data: ɵ4
        }, {
            id: 'date-from',
            type: 'value',
            data: ɵ5
        }, {
            id: 'date-to',
            type: 'value',
            data: ɵ6
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
            direction: 'ASC',
        },
        fields: {
            title: {
                highlight: true,
                limit: 50,
            }
        },
    },
    page: null,
    baseUrl: ''
};
/** @type {?} */
const SEARCH_ID = 'search-facets';
export class AwSearchLayoutDS extends LayoutDataSource {
    /**
     * @param {?} __0
     * @return {?}
     */
    onInit({ configuration, mainState, options, communication, search }) {
        this.configuration = configuration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.options = options;
        // FIXME: togliere
        /** @type {?} */
        const configKeys = this.configuration.get('config-keys');
        /** @type {?} */
        const queryLinksData = Object.keys(configKeys).map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const config = configKeys[key];
            return {
                value: key,
                label: config.label,
                count: 1,
                // questi vanno aggiunti a mano lato front-end
                icon: config.icon,
                classes: `color-${key}`
            };
        }));
        /** @type {?} */
        const entityTypesData = Object.keys(configKeys).map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const config = configKeys[key];
            return {
                value: key,
                label: config.label,
            };
        }));
        SEARCH_CONFIG.facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.id === 'query-links')).forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => {
            facet.data = queryLinksData;
        }));
        SEARCH_CONFIG.facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        facet => facet.id === 'entity-types')).forEach((/**
         * @param {?} facet
         * @return {?}
         */
        facet => {
            facet.data = entityTypesData;
        }));
        if (!this.search.model(SEARCH_ID))
            this.search.add(SEARCH_ID, SEARCH_CONFIG);
        /** @type {?} */
        const searchModel = this.search.model(SEARCH_ID);
        this.one('facets-wrapper').update({ searchModel });
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwSearchLayoutDS.prototype.search;
    /** @type {?} */
    AwSearchLayoutDS.prototype.options;
}
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLG1CQUFtQixDQUFDO1dBTzFELEVBQUUsT0FJRixDQUFDO1FBQ0wsS0FBSyxFQUFFLEdBQUc7UUFDVixLQUFLLEVBQUUsbUNBQW1DO0tBQzNDLENBQUMsT0FJSSxFQUFFLE9BVUYsRUFBRSxPQUtGLENBQUM7UUFDTCxLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLENBQUM7UUFDUixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsUUFBUTtZQUNmLGFBQWEsRUFBRSxRQUFRO1NBQ3hCO0tBQ0YsRUFBRTtRQUNELEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixLQUFLLEVBQUUsQ0FBQztRQUNSLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsYUFBYSxFQUFFLFFBQVE7U0FDeEI7S0FDRixFQUFFO1FBQ0QsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxDQUFDO1FBQ1IsUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLFFBQVE7WUFDZixhQUFhLEVBQUUsVUFBVTtTQUMxQjtLQUNGLEVBQUU7UUFDRCxLQUFLLEVBQUUsZUFBZTtRQUN0QixLQUFLLEVBQUUsZUFBZTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUNSLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxlQUFlO1lBQ3RCLGFBQWEsRUFBRSxRQUFRO1NBQ3hCO0tBQ0YsRUFBRTtRQUNELEtBQUssRUFBRSxrQkFBa0I7UUFDekIsS0FB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VixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7YUFDcEIsQ0FBQztRQUNKLENBQUMsRUFBQztRQUVKLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxhQUFhLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0UsS0FBSyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssY0FBYyxFQUFDLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hGLEtBQUssQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQzs7Y0FDdEUsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0Y7Ozs7OztJQWhEQyx5Q0FBMkI7Ozs7O0lBQzNCLHlDQUEyQjs7Ozs7SUFDM0IscUNBQXVCOzs7OztJQUN2QixrQ0FBOEI7O0lBRTlCLG1DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIExheW91dEJ1aWxkZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnbjctYm9pbGVycGxhdGUtbGliL2xpYi9jb21tb24vc2VydmljZXMnO1xuXG5jb25zdCBTRUFSQ0hfQ09ORklHID0ge1xuICBmYWNldHM6IFt7XG4gICAgaWQ6ICdxdWVyeScsIFxuICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgZGF0YTogW11cbiAgfSwge1xuICAgIGlkOiAncXVlcnktYWxsJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbe1xuICAgICAgdmFsdWU6ICcxJyxcbiAgICAgIGxhYmVsOiAnQ2VyY2EgaW4gdHV0dGkgY2FtcGkgZGVsbGUgc2NoZWRlJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ3F1ZXJ5LWxpbmtzJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9LCB7XG4gICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgb3BlcmF0b3I6ICdPUicsXG4gICAgbGltaXQ6IDEwLFxuICAgIG9yZGVyOiAnY291bnQnLCAvLyBjb3VudCB8IHRleHRcbiAgfSwge1xuICAgIGlkOiAnZW50aXR5LXNlYXJjaCcsIFxuICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgZGF0YTogW11cbiAgfSwge1xuICAgIGlkOiAnZW50aXR5LWxpbmtzJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBtZXRhZGF0YTogWyd0aXRsZScsICdlbnRpdHktdHlwZSddLFxuICAgIGRhdGE6IFt7XG4gICAgICB2YWx1ZTogJ21pbGFubycsXG4gICAgICBsYWJlbDogJ01pbGFubycsXG4gICAgICBjb3VudDogMSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnTWlsYW5vJyxcbiAgICAgICAgJ2VudGl0eS10eXBlJzogJ3BsYWNlcydcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB2YWx1ZTogJ3JvbWEnLFxuICAgICAgbGFiZWw6ICdDb211bmUgZGkgUm9tYScsXG4gICAgICBjb3VudDogMixcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnQ29tdW5lIGRpIFJvbWEnLFxuICAgICAgICAnZW50aXR5LXR5cGUnOiAncGxhY2VzJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHZhbHVlOiAnc3BhemlvJyxcbiAgICAgIGxhYmVsOiAnU3BhemlvJyxcbiAgICAgIGNvdW50OiAzLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgdGl0bGU6ICdTcGF6aW8nLFxuICAgICAgICAnZW50aXR5LXR5cGUnOiAnY29uY2VwdHMnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdmFsdWU6ICdyb2RvbGZvLW1hcm5hJyxcbiAgICAgIGxhYmVsOiAnUm9kb2xmbyBNYXJuYScsXG4gICAgICBjb3VudDogNCxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnUm9kb2xmbyBNYXJuYScsXG4gICAgICAgICdlbnRpdHktdHlwZSc6ICdwZW9wbGUnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdmFsdWU6ICdhbGlnaGllcm8tYm9ldHRpJyxcbiAgICAgIGxhYmVsOiAnQWxpZ2hpZXJvIEJvZXR0aScsXG4gICAgICBjb3VudDogNSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnQWxpZ2hpZXJvIEJvZXR0aScsXG4gICAgICAgICdlbnRpdHktdHlwZSc6ICdwZW9wbGUnXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnZGF0ZS1mcm9tJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9LCB7XG4gICAgaWQ6ICdkYXRlLXRvJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9XSxcbiAgZmllbGRzOiBbe1xuICAgIGlucHV0czogW3tcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeScsXG4gICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhLi4uJyxcbiAgICAgIC8vIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgbWluQ2hhcnM6IDMsIFxuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UudGl0bGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnTElLRSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeS1hbGwnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ3F1ZXJ5LWFsbCcsXG4gICAgICAgICAgb3BlcmF0b3I6ICc9J1xuICAgICAgICB9XVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeS1saW5rcycsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgaXNBcnJheTogdHJ1ZSxcbiAgICAgICAgc2VhcmNoSW46IFt7XG4gICAgICAgICAga2V5OiAnc291cmNlLmVudGl0eVR5cGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnPSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgbGFiZWw6ICdSZWxhemlvbmUgY29uJyxcbiAgICAgIGNsYXNzZXM6ICdyZWxhdGVkLWNsYXNzJ1xuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGZhY2V0SWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXG4gICAgICAgIHRhcmdldDogJ2VudGl0eS1saW5rcycsXG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ2VudGl0eS10eXBlJyxcbiAgICAgICAgICBvcGVyYXRvcjogJz0nXG4gICAgICAgIH1dXG4gICAgICB9IFxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGZhY2V0SWQ6ICdlbnRpdHktc2VhcmNoJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgZW50aXTDoCcsXG4gICAgICAvLyBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgIG1pbkNoYXJzOiAzLCBcbiAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcbiAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgc2VhcmNoSW46IFt7XG4gICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnTElLRSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgZmFjZXRJZDogJ2VudGl0eS1saW5rcycsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgbGltaXQ6IDIwLFxuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UuaWQnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnPSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgbGFiZWw6ICdEYXRhJyxcbiAgICAgIGNsYXNzZXM6ICdkYXRlLWNsYXNzJ1xuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBmYWNldElkOiAnZGF0ZS1mcm9tJyxcbiAgICAgIGxhYmVsOiAnRGFsJyxcbiAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UuZGF0ZVN0YXJ0JyxcbiAgICAgICAgICBvcGVyYXRvcjogJz49J1xuICAgICAgICB9XVxuICAgICAgfSBcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIGZhY2V0SWQ6ICdkYXRlLXRvJyxcbiAgICAgIGxhYmVsOiAnQWwnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ3NvdXJjZS5kYXRlRW5kJyxcbiAgICAgICAgICBvcGVyYXRvcjogJzw9J1xuICAgICAgICB9XVxuICAgICAgfSBcbiAgICB9XVxuICB9XSxcbiAgcmVzdWx0czoge1xuICAgIG9yZGVyOiB7XG4gICAgICB0eXBlOiAnc2NvcmUnLCAvLyBzY29yZSB8IHRleHQgfCBkYXRlXG4gICAgICBrZXk6ICdhdXRob3InLCAvLyBkb2NQYXRoLCBlbGFzdGljIGtleSwgZWNjXG4gICAgICBkaXJlY3Rpb246ICdBU0MnLCAvLyBBU0MgfCBERVNDXG4gICAgfSwgXG4gICAgZmllbGRzOiB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgICAgIGxpbWl0OiA1MCxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBwYWdlOiBudWxsLFxuICBiYXNlVXJsOiAnJ1xufVxuXG5jb25zdCBTRUFSQ0hfSUQgPSAnc2VhcmNoLWZhY2V0cyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2U7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBvbkluaXQoe2NvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgY29tbXVuaWNhdGlvbiwgc2VhcmNoIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIC8vIEZJWE1FOiB0b2dsaWVyZVxuICAgIGNvbnN0IGNvbmZpZ0tleXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpLFxuICAgICAgcXVlcnlMaW5rc0RhdGEgPSBPYmplY3Qua2V5cyhjb25maWdLZXlzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gY29uZmlnS2V5c1trZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICAgICAgICBjb3VudDogMSxcblxuICAgICAgICAgIC8vIHF1ZXN0aSB2YW5ubyBhZ2dpdW50aSBhIG1hbm8gbGF0byBmcm9udC1lbmRcbiAgICAgICAgICBpY29uOiBjb25maWcuaWNvbixcbiAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtrZXl9YFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICBlbnRpdHlUeXBlc0RhdGEgPSBPYmplY3Qua2V5cyhjb25maWdLZXlzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gY29uZmlnS2V5c1trZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgU0VBUkNIX0NPTkZJRy5mYWNldHMuZmlsdGVyKGZhY2V0ID0+IGZhY2V0LmlkID09PSAncXVlcnktbGlua3MnKS5mb3JFYWNoKGZhY2V0ID0+IHtcbiAgICAgIGZhY2V0LmRhdGEgPSBxdWVyeUxpbmtzRGF0YTtcbiAgICB9KTtcblxuICAgIFNFQVJDSF9DT05GSUcuZmFjZXRzLmZpbHRlcihmYWNldCA9PiBmYWNldC5pZCA9PT0gJ2VudGl0eS10eXBlcycpLmZvckVhY2goZmFjZXQgPT4ge1xuICAgICAgZmFjZXQuZGF0YSA9IGVudGl0eVR5cGVzRGF0YTtcbiAgICB9KTtcblxuICAgIGlmKCF0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfSUQpKSB0aGlzLnNlYXJjaC5hZGQoU0VBUkNIX0lELCBTRUFSQ0hfQ09ORklHKTtcbiAgICBjb25zdCBzZWFyY2hNb2RlbCA9IHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9JRCk7XG4gICAgdGhpcy5vbmUoJ2ZhY2V0cy13cmFwcGVyJykudXBkYXRlKHsgc2VhcmNoTW9kZWwgfSk7XG4gIH1cbn1cbiJdfQ==