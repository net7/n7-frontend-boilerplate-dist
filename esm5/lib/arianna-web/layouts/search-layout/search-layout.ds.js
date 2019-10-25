/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
var ɵ0 = [], ɵ1 = [{
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
var SEARCH_CONFIG = {
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
var SEARCH_ID = 'search-facets';
var AwSearchLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwSearchLayoutDS, _super);
    function AwSearchLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwSearchLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var configuration = _a.configuration, mainState = _a.mainState, options = _a.options, communication = _a.communication, search = _a.search;
        this.configuration = configuration;
        this.mainState = mainState;
        this.communication = communication;
        this.search = search;
        this.options = options;
        // FIXME: togliere
        /** @type {?} */
        var configKeys = this.configuration.get('config-keys');
        /** @type {?} */
        var queryLinksData = Object.keys(configKeys).map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var config = configKeys[key];
            return {
                value: key,
                label: config.label,
                count: 1,
                // questi vanno aggiunti a mano lato front-end
                icon: config.icon,
                classes: "color-" + key
            };
        }));
        /** @type {?} */
        var entityTypesData = Object.keys(configKeys).map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var config = configKeys[key];
            return {
                value: key,
                label: config.label,
            };
        }));
        SEARCH_CONFIG.facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.id === 'query-links'; })).forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) {
            facet.data = queryLinksData;
        }));
        SEARCH_CONFIG.facets.filter((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) { return facet.id === 'entity-types'; })).forEach((/**
         * @param {?} facet
         * @return {?}
         */
        function (facet) {
            facet.data = entityTypesData;
        }));
        if (!this.search.model(SEARCH_ID))
            this.search.add(SEARCH_ID, SEARCH_CONFIG);
        /** @type {?} */
        var searchModel = this.search.model(SEARCH_ID);
        this.one('facets-wrapper').update({ searchModel: searchModel });
    };
    return AwSearchLayoutDS;
}(LayoutDataSource));
export { AwSearchLayoutDS };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxtQkFBbUIsQ0FBQztTQU8xRCxFQUFFLE9BSUYsQ0FBQztRQUNMLEtBQUssRUFBRSxHQUFHO1FBQ1YsS0FBSyxFQUFFLG1DQUFtQztLQUMzQyxDQUFDLE9BSUksRUFBRSxPQVVGLEVBQUUsT0FLRixDQUFDO1FBQ0wsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLEtBQUssRUFBRSxDQUFDO1FBQ1IsUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLFFBQVE7WUFDZixhQUFhLEVBQUUsUUFBUTtTQUN4QjtLQUNGLEVBQUU7UUFDRCxLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsS0FBSyxFQUFFLENBQUM7UUFDUixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLGFBQWEsRUFBRSxRQUFRO1NBQ3hCO0tBQ0YsRUFBRTtRQUNELEtBQUssRUFBRSxRQUFRO1FBQ2YsS0FBSyxFQUFFLFFBQVE7UUFDZixLQUFLLEVBQUUsQ0FBQztRQUNSLFFBQVEsRUFBRTtZQUNSLEtBQUssRUFBRSxRQUFRO1lBQ2YsYUFBYSxFQUFFLFVBQVU7U0FDMUI7S0FDRixFQUFFO1FBQ0QsS0FBSyxFQUFFLGVBQWU7UUFDdEIsS0FBSyxFQUFFLGVBQWU7UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsZUFBZTtZQUN0QixhQUFhLEVBQUUsUUFBUTtTQUN4QjtLQUNGLEVBQUU7UUFDRCxLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCLEtB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Z0JBQ1YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2FBQ3BCLENBQUM7UUFDSixDQUFDLEVBQUM7UUFFSixhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxFQUFFLEtBQUssYUFBYSxFQUExQixDQUEwQixFQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsS0FBSztZQUM1RSxLQUFLLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUM5QixDQUFDLEVBQUMsQ0FBQztRQUVILGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEVBQUUsS0FBSyxjQUFjLEVBQTNCLENBQTJCLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxLQUFLO1lBQzdFLEtBQUssQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQzs7WUFDdEUsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFqREQsQ0FBc0MsZ0JBQWdCLEdBaURyRDs7Ozs7OztJQWhEQyx5Q0FBMkI7Ozs7O0lBQzNCLHlDQUEyQjs7Ozs7SUFDM0IscUNBQXVCOzs7OztJQUN2QixrQ0FBOEI7O0lBRTlCLG1DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIExheW91dEJ1aWxkZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnbjctYm9pbGVycGxhdGUtbGliL2xpYi9jb21tb24vc2VydmljZXMnO1xuXG5jb25zdCBTRUFSQ0hfQ09ORklHID0ge1xuICBmYWNldHM6IFt7XG4gICAgaWQ6ICdxdWVyeScsIFxuICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgZGF0YTogW11cbiAgfSwge1xuICAgIGlkOiAncXVlcnktYWxsJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbe1xuICAgICAgdmFsdWU6ICcxJyxcbiAgICAgIGxhYmVsOiAnQ2VyY2EgaW4gdHV0dGkgY2FtcGkgZGVsbGUgc2NoZWRlJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ3F1ZXJ5LWxpbmtzJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9LCB7XG4gICAgaWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgb3BlcmF0b3I6ICdPUicsXG4gICAgbGltaXQ6IDEwLFxuICAgIG9yZGVyOiAnY291bnQnLCAvLyBjb3VudCB8IHRleHRcbiAgfSwge1xuICAgIGlkOiAnZW50aXR5LXNlYXJjaCcsIFxuICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgZGF0YTogW11cbiAgfSwge1xuICAgIGlkOiAnZW50aXR5LWxpbmtzJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBtZXRhZGF0YTogWyd0aXRsZScsICdlbnRpdHktdHlwZSddLFxuICAgIGRhdGE6IFt7XG4gICAgICB2YWx1ZTogJ21pbGFubycsXG4gICAgICBsYWJlbDogJ01pbGFubycsXG4gICAgICBjb3VudDogMSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnTWlsYW5vJyxcbiAgICAgICAgJ2VudGl0eS10eXBlJzogJ3BsYWNlcydcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICB2YWx1ZTogJ3JvbWEnLFxuICAgICAgbGFiZWw6ICdDb211bmUgZGkgUm9tYScsXG4gICAgICBjb3VudDogMixcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnQ29tdW5lIGRpIFJvbWEnLFxuICAgICAgICAnZW50aXR5LXR5cGUnOiAncGxhY2VzJ1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHZhbHVlOiAnc3BhemlvJyxcbiAgICAgIGxhYmVsOiAnU3BhemlvJyxcbiAgICAgIGNvdW50OiAzLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgdGl0bGU6ICdTcGF6aW8nLFxuICAgICAgICAnZW50aXR5LXR5cGUnOiAnY29uY2VwdHMnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdmFsdWU6ICdyb2RvbGZvLW1hcm5hJyxcbiAgICAgIGxhYmVsOiAnUm9kb2xmbyBNYXJuYScsXG4gICAgICBjb3VudDogNCxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnUm9kb2xmbyBNYXJuYScsXG4gICAgICAgICdlbnRpdHktdHlwZSc6ICdwZW9wbGUnXG4gICAgICB9XG4gICAgfSwge1xuICAgICAgdmFsdWU6ICdhbGlnaGllcm8tYm9ldHRpJyxcbiAgICAgIGxhYmVsOiAnQWxpZ2hpZXJvIEJvZXR0aScsXG4gICAgICBjb3VudDogNSxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnQWxpZ2hpZXJvIEJvZXR0aScsXG4gICAgICAgICdlbnRpdHktdHlwZSc6ICdwZW9wbGUnXG4gICAgICB9XG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnZGF0ZS1mcm9tJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9LCB7XG4gICAgaWQ6ICdkYXRlLXRvJywgXG4gICAgdHlwZTogJ3ZhbHVlJyxcbiAgICBkYXRhOiBbXVxuICB9XSxcbiAgZmllbGRzOiBbe1xuICAgIGlucHV0czogW3tcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeScsXG4gICAgICBwbGFjZWhvbGRlcjogJ0NlcmNhLi4uJyxcbiAgICAgIC8vIGljb246ICduNy1pY29uLXNlYXJjaCcsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgZGVsYXk6IDUwMCxcbiAgICAgICAgbWluQ2hhcnM6IDMsIFxuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UudGl0bGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnTElLRSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeS1hbGwnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ3F1ZXJ5LWFsbCcsXG4gICAgICAgICAgb3BlcmF0b3I6ICc9J1xuICAgICAgICB9XVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIGZhY2V0SWQ6ICdxdWVyeS1saW5rcycsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgaXNBcnJheTogdHJ1ZSxcbiAgICAgICAgc2VhcmNoSW46IFt7XG4gICAgICAgICAga2V5OiAnc291cmNlLmVudGl0eVR5cGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnPSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgbGFiZWw6ICdSZWxhemlvbmUgY29uJyxcbiAgICAgIGNsYXNzZXM6ICdyZWxhdGVkLWNsYXNzJ1xuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGZhY2V0SWQ6ICdlbnRpdHktdHlwZXMnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIGlzQXJyYXk6IHRydWUsXG4gICAgICAgIGNvbnRleHQ6ICdpbnRlcm5hbCcsXG4gICAgICAgIHRhcmdldDogJ2VudGl0eS1saW5rcycsXG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ2VudGl0eS10eXBlJyxcbiAgICAgICAgICBvcGVyYXRvcjogJz0nXG4gICAgICAgIH1dXG4gICAgICB9IFxuICAgIH0sIHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGZhY2V0SWQ6ICdlbnRpdHktc2VhcmNoJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ2VyY2EgZW50aXTDoCcsXG4gICAgICAvLyBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIGRlbGF5OiA1MDAsXG4gICAgICAgIG1pbkNoYXJzOiAzLCBcbiAgICAgICAgY29udGV4dDogJ2ludGVybmFsJyxcbiAgICAgICAgdGFyZ2V0OiAnZW50aXR5LWxpbmtzJyxcbiAgICAgICAgc2VhcmNoSW46IFt7XG4gICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnTElLRSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgZmFjZXRJZDogJ2VudGl0eS1saW5rcycsXG4gICAgICBmaWx0ZXJDb25maWc6IHtcbiAgICAgICAgbGltaXQ6IDIwLFxuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UuaWQnLFxuICAgICAgICAgIG9wZXJhdG9yOiAnPSdcbiAgICAgICAgfV1cbiAgICAgIH0gXG4gICAgfV1cbiAgfSwge1xuICAgIGhlYWRlcjoge1xuICAgICAgbGFiZWw6ICdEYXRhJyxcbiAgICAgIGNsYXNzZXM6ICdkYXRlLWNsYXNzJ1xuICAgIH0sXG4gICAgaW5wdXRzOiBbe1xuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBmYWNldElkOiAnZGF0ZS1mcm9tJyxcbiAgICAgIGxhYmVsOiAnRGFsJyxcbiAgICAgIGZpbHRlckNvbmZpZzoge1xuICAgICAgICBzZWFyY2hJbjogW3tcbiAgICAgICAgICBrZXk6ICdzb3VyY2UuZGF0ZVN0YXJ0JyxcbiAgICAgICAgICBvcGVyYXRvcjogJz49J1xuICAgICAgICB9XVxuICAgICAgfSBcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgIGZhY2V0SWQ6ICdkYXRlLXRvJyxcbiAgICAgIGxhYmVsOiAnQWwnLFxuICAgICAgZmlsdGVyQ29uZmlnOiB7XG4gICAgICAgIHNlYXJjaEluOiBbe1xuICAgICAgICAgIGtleTogJ3NvdXJjZS5kYXRlRW5kJyxcbiAgICAgICAgICBvcGVyYXRvcjogJzw9J1xuICAgICAgICB9XVxuICAgICAgfSBcbiAgICB9XVxuICB9XSxcbiAgcmVzdWx0czoge1xuICAgIG9yZGVyOiB7XG4gICAgICB0eXBlOiAnc2NvcmUnLCAvLyBzY29yZSB8IHRleHQgfCBkYXRlXG4gICAgICBrZXk6ICdhdXRob3InLCAvLyBkb2NQYXRoLCBlbGFzdGljIGtleSwgZWNjXG4gICAgICBkaXJlY3Rpb246ICdBU0MnLCAvLyBBU0MgfCBERVNDXG4gICAgfSwgXG4gICAgZmllbGRzOiB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBoaWdobGlnaHQ6IHRydWUsXG4gICAgICAgIGxpbWl0OiA1MCxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBwYWdlOiBudWxsLFxuICBiYXNlVXJsOiAnJ1xufVxuXG5jb25zdCBTRUFSQ0hfSUQgPSAnc2VhcmNoLWZhY2V0cyc7XG5cbmV4cG9ydCBjbGFzcyBBd1NlYXJjaExheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYWluU3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBzZWFyY2g6IFNlYXJjaFNlcnZpY2U7XG5cbiAgcHVibGljIG9wdGlvbnM6IGFueTtcblxuICBvbkluaXQoe2NvbmZpZ3VyYXRpb24sIG1haW5TdGF0ZSwgb3B0aW9ucywgY29tbXVuaWNhdGlvbiwgc2VhcmNoIH0pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMubWFpblN0YXRlID0gbWFpblN0YXRlO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIC8vIEZJWE1FOiB0b2dsaWVyZVxuICAgIGNvbnN0IGNvbmZpZ0tleXMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpLFxuICAgICAgcXVlcnlMaW5rc0RhdGEgPSBPYmplY3Qua2V5cyhjb25maWdLZXlzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gY29uZmlnS2V5c1trZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICAgICAgICBjb3VudDogMSxcblxuICAgICAgICAgIC8vIHF1ZXN0aSB2YW5ubyBhZ2dpdW50aSBhIG1hbm8gbGF0byBmcm9udC1lbmRcbiAgICAgICAgICBpY29uOiBjb25maWcuaWNvbixcbiAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtrZXl9YFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICBlbnRpdHlUeXBlc0RhdGEgPSBPYmplY3Qua2V5cyhjb25maWdLZXlzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gY29uZmlnS2V5c1trZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgU0VBUkNIX0NPTkZJRy5mYWNldHMuZmlsdGVyKGZhY2V0ID0+IGZhY2V0LmlkID09PSAncXVlcnktbGlua3MnKS5mb3JFYWNoKGZhY2V0ID0+IHtcbiAgICAgIGZhY2V0LmRhdGEgPSBxdWVyeUxpbmtzRGF0YTtcbiAgICB9KTtcblxuICAgIFNFQVJDSF9DT05GSUcuZmFjZXRzLmZpbHRlcihmYWNldCA9PiBmYWNldC5pZCA9PT0gJ2VudGl0eS10eXBlcycpLmZvckVhY2goZmFjZXQgPT4ge1xuICAgICAgZmFjZXQuZGF0YSA9IGVudGl0eVR5cGVzRGF0YTtcbiAgICB9KTtcblxuICAgIGlmKCF0aGlzLnNlYXJjaC5tb2RlbChTRUFSQ0hfSUQpKSB0aGlzLnNlYXJjaC5hZGQoU0VBUkNIX0lELCBTRUFSQ0hfQ09ORklHKTtcbiAgICBjb25zdCBzZWFyY2hNb2RlbCA9IHRoaXMuc2VhcmNoLm1vZGVsKFNFQVJDSF9JRCk7XG4gICAgdGhpcy5vbmUoJ2ZhY2V0cy13cmFwcGVyJykudXBkYXRlKHsgc2VhcmNoTW9kZWwgfSk7XG4gIH1cbn1cbiJdfQ==