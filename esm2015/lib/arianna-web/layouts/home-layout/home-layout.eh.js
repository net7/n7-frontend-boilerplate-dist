/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject, forkJoin } from 'rxjs';
import helpers from '../../../common/helpers';
export class AwHomeLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handleSimpleAutocompleteClick = (/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => {
            this.emitOuter('facetclick', payload);
        });
        this.handleChartSelection = (/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => {
            /** @type {?} */
            const selectedEntitiesIds = payload;
            this.dataSource.selectedBubbles = payload;
            this.dataSource.resultsListIsLoading = true;
            this.dataSource.makeRequest$('globalFilter', {
                selectedEntitiesIds,
                entitiesListSize: this.configuration.get('bubble-chart').bubbleLimit,
            }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.dataSource.resultsListIsLoading = false;
                if (res && res.entitiesData.length > 0) {
                    // if some linked objects exist for the selected entities:
                    this.dataSource.lastBubbleResponse = res.entitiesData;
                    this.emitOuter('filterbubbleresponse', res.entitiesData);
                    this.dataSource.renderPreviewsFromApolloQuery(res);
                    this.dataSource.renderItemTags();
                }
                else {
                    // if the backend returns an empty list of results:
                    /** @type {?} */
                    const queryList = [];
                    this.dataSource.selectedBubbles.forEach((/**
                     * @param {?} b
                     * @return {?}
                     */
                    (b) => {
                        /** @type {?} */
                        const params = { entityId: b, entitiesListSize: 1 };
                        queryList.push(// make a query for each selected bubble
                        this.dataSource.makeRequest$('getMissingBubble', params));
                    }));
                    // await for every missing bubble and build a custom response
                    forkJoin(queryList).subscribe((/**
                     * @param {?} forkres
                     * @return {?}
                     */
                    (forkres) => {
                        /** @type {?} */
                        const customBubbles = [];
                        forkres.forEach((/**
                         * @param {?} r
                         * @return {?}
                         */
                        (r) => { customBubbles.push({ count: 0, entity: r }); }));
                        this.emitOuter('filterbubbleresponse', customBubbles);
                        this.dataSource.renderPreviewsFromApolloQuery(res);
                        this.dataSource.renderItemTags();
                    }));
                }
            }));
        });
    }
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.init':
                    this.dataSource.onInit(payload);
                    this.loadFilters();
                    this.configuration = payload.configuration;
                    break;
                case 'aw-home-layout.outerlinkclick':
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: payload,
                    });
                    break;
                case 'aw-home-layout.destroy':
                    this.dataSource.onDestroy();
                    break;
                case 'aw-home-layout.bubbleresultsviewallclick':
                    {
                        /** @type {?} */
                        const entityLinks = this.dataSource.selectedBubbles.join(',');
                        /** @type {?} */
                        const basePath = this.configuration.get('paths').searchBasePath;
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { 'entity-links': entityLinks },
                        });
                    }
                    break;
                case 'aw-home-layout.clearselection':
                    this.emitOuter('clearselection');
                    break;
                default:
                    console.warn('(home) unhandled inner event of type: ', type);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                    this.emitOuter('d3end', payload);
                    break;
                case 'aw-chart-tippy.select':
                    this.emitOuter('select', payload);
                    break;
                case 'aw-hero.enter':
                    {
                        /** @type {?} */
                        const query = payload.value;
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [this.configuration.get('paths').searchBasePath],
                            queryParams: { query },
                        });
                    }
                    break;
                case 'aw-hero.change':
                    this.dataSource.autocompleteValue = payload.value;
                    this.dataSource.onHeroChange(payload.value);
                    break;
                case 'aw-home-facets-wrapper.click':
                    this.emitOuter('togglefilter', payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (!payload.value
                        || (typeof payload.value === 'string' && payload.value.trim().length === 0)) {
                        this.emitOuter('facetswrapperclose', { facetId: payload });
                    }
                    else if (payload.value) {
                        this.emitOuter('facetswrapperrequest', { facetId: payload });
                        // clear autocomplete results
                        this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: null });
                        /** @type {?} */
                        const params = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                            itemsPagination: {
                                offset: 0, limit: this.configuration.get('home-layout')['results-limit'],
                            },
                        };
                        this.dataSource.makeRequest$('autoComplete', params).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        (response) => {
                            if (response.results.length < 1) {
                                /** @type {?} */
                                const fallback = {
                                    totalcount: 0,
                                    results: [
                                        {
                                            entity: {
                                                id: 'fallback',
                                                label: // use fallback string from configuration
                                                this.configuration.get('home-layout')['autocomplete-fallback']
                                                    ? this.configuration.get('home-layout')['autocomplete-fallback']
                                                    : 'Nessun risultato trovato',
                                            },
                                        },
                                    ],
                                };
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: this.configuration });
                            }
                            else {
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response })
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                                { key: payload.value, response }, // DATA
                                { config: this.configuration });
                            }
                        }));
                    }
                    break;
                case 'aw-home-item-tags-wrapper.click':
                    this.emitOuter('tagclick', payload);
                    break;
                case 'aw-linked-objects.datarequest':
                    {
                        const { currentPage } = payload;
                        /** @type {?} */
                        const params = {
                            selectedEntitiesIds: this.dataSource.selectedBubbles,
                            itemsPagination: {
                                offset: currentPage * this.dataSource.resultsLimit,
                                limit: this.dataSource.resultsLimit,
                            },
                        };
                        this.dataSource.makeRequest$('globalFilter', params).subscribe((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            if (res) {
                                this.emitOuter('dataresponse', { res });
                            }
                            else {
                                console.warn('Unable to fetch additional data.');
                            }
                        }));
                    }
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    {
                        const { source, type: payloadType } = payload;
                        /** @type {?} */
                        let basePath;
                        if (source === 'item') {
                            if (payloadType === 'oggetto-culturale') {
                                basePath = this.configuration.get('paths').schedaBasePath;
                            }
                            else {
                                basePath = this.configuration.get('paths').entitaBasePath;
                            }
                            this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath, payload.id, helpers.slugify(payload.title)],
                            });
                        }
                        else if (source === 'showMore') {
                            /** @type {?} */
                            const query = this.dataSource.homeAutocompleteQuery;
                            basePath = this.configuration.get('paths').searchBasePath;
                            this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath],
                                queryParams: { query },
                            });
                        }
                        else if (source === 'extendsearch') { // click on <Cerca in tutti i campi> (call to action)
                            this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [this.configuration.get('paths').searchBasePath],
                                queryParams: {
                                    query: this.dataSource.autocompleteValue,
                                    'query-all': 1,
                                },
                            });
                        }
                    }
                    break;
                case 'aw-bubble-chart.selection':
                    this.handleChartSelection(payload);
                    break;
                case 'aw-bubble-chart.lockfilter':
                    this.emitOuter('lockfilter', payload); // let aw-home-facets-wrapper handle this event
                    break;
                default:
                    // console.warn('(home) unhandled outer event of type', type)
                    break;
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    loadFilters() {
        this.dataSource.initialFilterRequest().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            // console.log('(home) Apollo responded with:', response)
            if (!response) {
                return;
            }
            this.dataSource.parseInitialRequest(response);
            if (this.dataSource.bubblesEnabled) {
                this.emitOuter('filterbubbleresponse', response.entitiesData);
            }
        }));
    }
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    outerLinkClick(type, payload) {
        window.open(payload, '_blank');
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutEH.prototype.destroyed$;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutEH.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutEH.prototype.route;
    /** @type {?} */
    AwHomeLayoutEH.prototype.handleSimpleAutocompleteClick;
    /** @type {?} */
    AwHomeLayoutEH.prototype.handleChartSelection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QyxNQUFNLE9BQU8sY0FBZSxTQUFRLFlBQVk7SUFBaEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBcU0xQyxrQ0FBNkI7Ozs7UUFBRyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQTtRQU1NLHlCQUFvQjs7OztRQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7O2tCQUNsQyxtQkFBbUIsR0FBRyxPQUFPO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUU7Z0JBQzNDLG1CQUFtQjtnQkFDbkIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVzthQUNyRSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2dCQUM3QyxJQUFJLEdBQUcsSUFBSSxH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LENBQUMsK0NBQStDO29CQUN0RixNQUFNO2dCQUNSO29CQUNFLDZEQUE2RDtvQkFDN0QsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzVELHlEQUF5RDtZQUN6RCxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQy9EO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFNTSxjQUFjLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQXFDRjs7Ozs7O0lBaFBDLG9DQUFpRDs7Ozs7SUFFakQsdUNBQTJCOzs7OztJQUUzQiwrQkFBbUI7O0lBaU1uQix1REFFQzs7SUFNRCw4Q0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG5cbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5sb2FkRmlsdGVycygpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQub3V0ZXJsaW5rY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IHBheWxvYWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkRlc3Ryb3koKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuYnViYmxlcmVzdWx0c3ZpZXdhbGxjbGljayc6IHtcbiAgICAgICAgICBjb25zdCBlbnRpdHlMaW5rcyA9IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMuam9pbignLCcpO1xuICAgICAgICAgIGNvbnN0IGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aDtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGhdLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2VudGl0eS1saW5rcyc6IGVudGl0eUxpbmtzIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuY2xlYXJzZWxlY3Rpb24nOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGVhcnNlbGVjdGlvbicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKGhvbWUpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlOiAnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiAvLyBib3VuY2UgdGhlIGV2ZW50LCBmcm9tIGJ1YmJsZS1jaGFydCB0byBjaGFydC10aXBweVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkM2VuZCcsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1jaGFydC10aXBweS5zZWxlY3QnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3QnLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaGVyby5lbnRlcic6IHtcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IHBheWxvYWQudmFsdWU7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGhdLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcXVlcnkgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaGVyby5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5hdXRvY29tcGxldGVWYWx1ZSA9IHBheWxvYWQudmFsdWU7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSGVyb0NoYW5nZShwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3RvZ2dsZWZpbHRlcicsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNoYW5nZSc6XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXBheWxvYWQudmFsdWVcbiAgICAgICAgICAgIHx8ICh0eXBlb2YgcGF5bG9hZC52YWx1ZSA9PT0gJ3N0cmluZycgJiYgcGF5bG9hZC52YWx1ZS50cmltKCkubGVuZ3RoID09PSAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJjbG9zZScsIHsgZmFjZXRJZDogcGF5bG9hZCB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBheWxvYWQudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVxdWVzdCcsIHsgZmFjZXRJZDogcGF5bG9hZCB9KTtcbiAgICAgICAgICAgIC8vIGNsZWFyIGF1dG9jb21wbGV0ZSByZXN1bHRzXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLFxuICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2U6IG51bGwgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgIGlucHV0OiBwYXlsb2FkLnZhbHVlLFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHk6IHBheWxvYWQuaW5wdXRQYXlsb2FkLnJlcGxhY2UoLy1zZWFyY2gvZywgJycpLnJlcGxhY2UoLy0vZywgJyAnKSxcbiAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHBhcmFtcykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmFsbGJhY2sgPSB7XG4gICAgICAgICAgICAgICAgICB0b3RhbGNvdW50OiAwLFxuICAgICAgICAgICAgICAgICAgcmVzdWx0czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2ZhbGxiYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAvLyB1c2UgZmFsbGJhY2sgc3RyaW5nIGZyb20gY29uZmlndXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydhdXRvY29tcGxldGUtZmFsbGJhY2snXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYXV0b2NvbXBsZXRlLWZhbGxiYWNrJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdOZXNzdW4gcmlzdWx0YXRvIHRyb3ZhdG8nLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJyZXNwb25zZScsIHsgZmFjZXRJZDogcGF5bG9hZCwgcmVzcG9uc2U6IGZhbGxiYWNrIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2U6IGZhbGxiYWNrIH0sXG4gICAgICAgICAgICAgICAgICB7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0sXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLCAvLyBJRFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlIH0sIC8vIERBVEFcbiAgICAgICAgICAgICAgICAgIHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSwgLy8gT1BUSU9OU1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3RhZ2NsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmRhdGFyZXF1ZXN0Jzoge1xuICAgICAgICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcyxcbiAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICBvZmZzZXQ6IGN1cnJlbnRQYWdlICogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdCxcbiAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywgcGFyYW1zKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZGF0YXJlc3BvbnNlJywgeyByZXMgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBmZXRjaCBhZGRpdGlvbmFsIGRhdGEuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyLmNsaWNrcmVzdWx0JzpcbiAgICAgICAgICB0aGlzLmhhbmRsZVNpbXBsZUF1dG9jb21wbGV0ZUNsaWNrKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWF1dG9jb21wbGV0ZS5jbGljayc6IHtcbiAgICAgICAgICBjb25zdCB7IHNvdXJjZSwgdHlwZTogcGF5bG9hZFR5cGUgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgbGV0IGJhc2VQYXRoO1xuICAgICAgICAgIGlmIChzb3VyY2UgPT09ICdpdGVtJykge1xuICAgICAgICAgICAgaWYgKHBheWxvYWRUeXBlID09PSAnb2dnZXR0by1jdWx0dXJhbGUnKSB7XG4gICAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zY2hlZGFCYXNlUGF0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGgsIHBheWxvYWQuaWQsIGhlbHBlcnMuc2x1Z2lmeShwYXlsb2FkLnRpdGxlKV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ3Nob3dNb3JlJykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmRhdGFTb3VyY2UuaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5O1xuICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNlYXJjaEJhc2VQYXRoO1xuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aF0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2V4dGVuZHNlYXJjaCcpIHsgLy8gY2xpY2sgb24gPENlcmNhIGluIHR1dHRpIGkgY2FtcGk+IChjYWxsIHRvIGFjdGlvbilcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aF0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMuZGF0YVNvdXJjZS5hdXRvY29tcGxldGVWYWx1ZSxcbiAgICAgICAgICAgICAgICAncXVlcnktYWxsJzogMSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFydFNlbGVjdGlvbihwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmxvY2tmaWx0ZXInOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgcGF5bG9hZCk7IC8vIGxldCBhdy1ob21lLWZhY2V0cy13cmFwcGVyIGhhbmRsZSB0aGlzIGV2ZW50XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCcoaG9tZSkgdW5oYW5kbGVkIG91dGVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRmlsdGVycygpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuaW5pdGlhbEZpbHRlclJlcXVlc3QoKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnKGhvbWUpIEFwb2xsbyByZXNwb25kZWQgd2l0aDonLCByZXNwb25zZSlcbiAgICAgIGlmICghcmVzcG9uc2UpIHsgcmV0dXJuOyB9XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFyc2VJbml0aWFsUmVxdWVzdChyZXNwb25zZSk7XG4gICAgICBpZiAodGhpcy5kYXRhU291cmNlLmJ1YmJsZXNFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHJlc3BvbnNlLmVudGl0aWVzRGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2sgPSAocGF5bG9hZCkgPT4ge1xuICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldGNsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBwdWJsaWMgb3V0ZXJMaW5rQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xuICAgIHdpbmRvdy5vcGVuKHBheWxvYWQsICdfYmxhbmsnKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDaGFydFNlbGVjdGlvbiA9IChwYXlsb2FkKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IHBheWxvYWQ7XG4gICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcyA9IHBheWxvYWQ7XG4gICAgdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaXN0SXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBzZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXQsXG4gICAgfSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGlzdElzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgaWYgKHJlcyAmJiByZXMuZW50aXRpZXNEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gaWYgc29tZSBsaW5rZWQgb2JqZWN0cyBleGlzdCBmb3IgdGhlIHNlbGVjdGVkIGVudGl0aWVzOlxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGFzdEJ1YmJsZVJlc3BvbnNlID0gcmVzLmVudGl0aWVzRGF0YTtcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgcmVzLmVudGl0aWVzRGF0YSk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXMpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySXRlbVRhZ3MoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHRoZSBiYWNrZW5kIHJldHVybnMgYW4gZW1wdHkgbGlzdCBvZiByZXN1bHRzOlxuICAgICAgICBjb25zdCBxdWVyeUxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKChiKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0geyBlbnRpdHlJZDogYiwgZW50aXRpZXNMaXN0U2l6ZTogMSB9O1xuICAgICAgICAgIHF1ZXJ5TGlzdC5wdXNoKCAvLyBtYWtlIGEgcXVlcnkgZm9yIGVhY2ggc2VsZWN0ZWQgYnViYmxlXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnZXRNaXNzaW5nQnViYmxlJywgcGFyYW1zKSxcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gYXdhaXQgZm9yIGV2ZXJ5IG1pc3NpbmcgYnViYmxlIGFuZCBidWlsZCBhIGN1c3RvbSByZXNwb25zZVxuICAgICAgICBmb3JrSm9pbihxdWVyeUxpc3QpLnN1YnNjcmliZSgoZm9ya3JlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1c3RvbUJ1YmJsZXMgPSBbXTtcbiAgICAgICAgICBmb3JrcmVzLmZvckVhY2goKHIpID0+IHsgY3VzdG9tQnViYmxlcy5wdXNoKHsgY291bnQ6IDAsIGVudGl0eTogciB9KTsgfSk7XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgY3VzdG9tQnViYmxlcyk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcyk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=