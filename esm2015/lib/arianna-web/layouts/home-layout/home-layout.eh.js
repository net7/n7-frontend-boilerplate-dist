/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject, forkJoin } from 'rxjs';
export class AwHomeLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handleSimpleAutocompleteClick = (/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            this.emitOuter('facetclick', payload);
        });
        this.handleChartSelection = (/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            /** @type {?} */
            let selectedEntitiesIds = payload;
            this.dataSource.selectedBubbles = payload;
            this.dataSource.makeRequest$('globalFilter', {
                selectedEntitiesIds,
                entitiesListSize: this.configuration.get('home-layout')['entitiesQuerySize']
            }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
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
                    b => {
                        /** @type {?} */
                        let params = { entityId: b, entitiesListSize: 1 };
                        queryList.push(// make a query for each selected bubble
                        this.dataSource.makeRequest$('getMissingBubble', params));
                    }));
                    // await for every missing bubble and build a custom response
                    forkJoin(queryList).subscribe((/**
                     * @param {?} forkres
                     * @return {?}
                     */
                    forkres => {
                        /** @type {?} */
                        let customBubbles = [];
                        forkres.forEach((/**
                         * @param {?} r
                         * @return {?}
                         */
                        r => { customBubbles.push({ count: 0, entity: r }); }));
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
                        path: payload
                    });
                    break;
                case 'aw-home-layout.destroy':
                    this.dataSource.onDestroy();
                    break;
                case 'aw-home-layout.bubbleresultsviewallclick':
                    /** @type {?} */
                    const entityLinks = this.dataSource.selectedBubbles.join(',');
                    /** @type {?} */
                    const basePath = this.configuration.get('paths').searchBasePath;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [basePath],
                        queryParams: { 'entity-links': entityLinks }
                    });
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
                case 'aw-hero.enter':
                case 'aw-hero.click':
                    /** @type {?} */
                    const query = payload.value;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [this.configuration.get("paths").searchBasePath],
                        queryParams: { query }
                    });
                    break;
                case 'aw-hero.change':
                    this.dataSource.autocompleteValue = payload.value;
                    this.dataSource.onHeroChange(payload.value);
                    break;
                case 'aw-home-facets-wrapper.click':
                    this.emitOuter('togglefilter', payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (payload.value) {
                        /** @type {?} */
                        let params = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                            itemsPagination: {
                                offset: 0, limit: this.configuration.get('home-layout')['results-limit']
                            }
                        };
                        this.dataSource.makeRequest$('autoComplete', params).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        response => {
                            if (response.results.length < 1) {
                                /** @type {?} */
                                let fallback = {
                                    totalcount: 0,
                                    results: [
                                        {
                                            entity: {
                                                id: 'fallback',
                                                label: // use fallback string from configuration
                                                this.configuration.get('home-layout')['autocomplete-fallback'] ?
                                                    this.configuration.get('home-layout')['autocomplete-fallback'] :
                                                    'Nessun risultato trovato'
                                            }
                                        }
                                    ]
                                };
                                this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback });
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: this.configuration });
                            }
                            else {
                                this.emitOuter('facetswrapperresponse', { facetId: payload, response });
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                                { key: payload.value, response }, // DATA
                                { config: this.configuration } // OPTIONS
                                );
                            }
                        }));
                    }
                    break;
                case 'aw-home-facets-wrapper.enter':
                    this.dataSource.handleFacetSearchEnter(payload);
                    break;
                case 'aw-home-item-tags-wrapper.click':
                    this.emitOuter('tagclick', payload);
                    break;
                case 'aw-linked-objects.datarequest':
                    const { currentPage } = payload;
                    /** @type {?} */
                    const params = {
                        selectedEntitiesIds: this.dataSource.selectedBubbles,
                        itemsPagination: {
                            offset: currentPage * this.dataSource.resultsLimit,
                            limit: this.dataSource.resultsLimit
                        }
                    };
                    this.dataSource.makeRequest$('globalFilter', params).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    res => {
                        if (res) {
                            this.emitOuter('dataresponse', { res });
                        }
                        else {
                            console.log('Unable to fetch additional data.');
                        }
                    }));
                    break;
                case 'aw-linked-objects.click':
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [this.configuration.get("paths").schedaBasePath, payload.id]
                    });
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    const { source, type } = payload;
                    /** @type {?} */
                    let basePath;
                    if (source === "item") {
                        if (type === "oggetto-culturale") {
                            basePath = this.configuration.get("paths").schedaBasePath;
                        }
                        else {
                            basePath = this.configuration.get("paths").entitaBasePath;
                        }
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath, payload.id]
                        });
                    }
                    else if (source === "showMore") {
                        /** @type {?} */
                        const query = this.dataSource.homeAutocompleteQuery;
                        basePath = this.configuration.get("paths").searchBasePath;
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { query }
                        });
                    }
                    break;
                case 'aw-bubble-chart.selection':
                    this.handleChartSelection(payload);
                    break;
                case 'aw-bubble-chart.lockfilter':
                    this.emitOuter('lockfilter', payload); // let aw-home-facets-wrapper handle this event
                    break;
                default:
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
        window.open(payload, "_blank");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXpDLE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTtJQUFoRDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFpTDFDLGtDQUE2Qjs7OztRQUFHLE9BQU8sQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsRUFBQTtRQU1NLHlCQUFvQjs7OztRQUFHLE9BQU8sQ0FBQyxFQUFFOztnQkFDbEMsbUJBQW1CLEdBQUcsT0FBTztZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUE7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO2dCQUMzQyxtQkFBbUI7Z0JBQ25CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO2FBQzdFLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEMsMERBQTBEO29CQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUE7b0JBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMs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Q0FBQzs0QkFDaEIsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFO3lCQUN2QixDQUFDLENBQUM7cUJBQ0o7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLDJCQUEyQjtvQkFDOUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsQyxNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQSxDQUFDLCtDQUErQztvQkFDckYsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDNUQseURBQXlEO1lBQ3pELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTTthQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDL0Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQU1NLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBb0NGOzs7Ozs7SUEzTkMsb0NBQWlEOzs7OztJQUNqRCx1Q0FBMkI7Ozs7O0lBQzNCLCtCQUFtQjs7SUErS25CLHVEQUVDOztJQU1ELDhDQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0Lm91dGVybGlua2NsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBwYXlsb2FkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkRlc3Ryb3koKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5idWJibGVyZXN1bHRzdmlld2FsbGNsaWNrJzpcbiAgICAgICAgICBjb25zdCBlbnRpdHlMaW5rcyA9IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMuam9pbignLCcpO1xuICAgICAgICAgIGNvbnN0IGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aDtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGhdLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2VudGl0eS1saW5rcyc6IGVudGl0eUxpbmtzIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuY2xlYXJzZWxlY3Rpb24nOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGVhcnNlbGVjdGlvbicpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCcoaG9tZSkgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGU6ICcsIHR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaGVyby5lbnRlcic6XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2xpY2snOlxuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGF5bG9hZC52YWx1ZTtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLnNlYXJjaEJhc2VQYXRoXSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaGVyby5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5hdXRvY29tcGxldGVWYWx1ZSA9IHBheWxvYWQudmFsdWVcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25IZXJvQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndG9nZ2xlZmlsdGVyJywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgIGlmIChwYXlsb2FkLnZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbnB1dDogcGF5bG9hZC52YWx1ZSxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5OiBwYXlsb2FkLmlucHV0UGF5bG9hZC5yZXBsYWNlKC8tc2VhcmNoL2csICcnKS5yZXBsYWNlKC8tL2csICcgJyksXG4gICAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIG9mZnNldDogMCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdhdXRvQ29tcGxldGUnLCBwYXJhbXMpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmFsbGJhY2sgPSB7XG4gICAgICAgICAgICAgICAgICB0b3RhbGNvdW50OiAwLFxuICAgICAgICAgICAgICAgICAgcmVzdWx0czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2ZhbGxiYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAvLyB1c2UgZmFsbGJhY2sgc3RyaW5nIGZyb20gY29uZmlndXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydhdXRvY29tcGxldGUtZmFsbGJhY2snXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYXV0b2NvbXBsZXRlLWZhbGxiYWNrJ10gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdOZXNzdW4gcmlzdWx0YXRvIHRyb3ZhdG8nXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlOiBmYWxsYmFjayB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlOiBmYWxsYmFjayB9LFxuICAgICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsIC8vIElEXG4gICAgICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2UgfSwgLy8gREFUQVxuICAgICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9IC8vIE9QVElPTlNcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3RhZ2NsaWNrJywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuZGF0YXJlcXVlc3QnOlxuICAgICAgICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcyxcbiAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICBvZmZzZXQ6IGN1cnJlbnRQYWdlICogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdCxcbiAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHBhcmFtcykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVzcG9uc2UnLCB7IHJlcyB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBmZXRjaCBhZGRpdGlvbmFsIGRhdGEuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5zY2hlZGFCYXNlUGF0aCwgcGF5bG9hZC5pZF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXIuY2xpY2tyZXN1bHQnOlxuICAgICAgICAgIHRoaXMuaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2socGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1hdXRvY29tcGxldGUuY2xpY2snOlxuICAgICAgICAgIGNvbnN0IHsgc291cmNlLCB0eXBlIH0gPSBwYXlsb2FkO1xuICAgICAgICAgIGxldCBiYXNlUGF0aDtcbiAgICAgICAgICBpZiAoc291cmNlID09PSBcIml0ZW1cIikge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwib2dnZXR0by1jdWx0dXJhbGVcIikge1xuICAgICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5zY2hlZGFCYXNlUGF0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLmVudGl0YUJhc2VQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aCwgcGF5bG9hZC5pZF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlID09PSBcInNob3dNb3JlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5kYXRhU291cmNlLmhvbWVBdXRvY29tcGxldGVRdWVyeTtcbiAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLnNlYXJjaEJhc2VQYXRoO1xuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aF0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFydFNlbGVjdGlvbihwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubG9ja2ZpbHRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCBwYXlsb2FkKSAvLyBsZXQgYXctaG9tZS1mYWNldHMtd3JhcHBlciBoYW5kbGUgdGhpcyBldmVudFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRmlsdGVycygpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuaW5pdGlhbEZpbHRlclJlcXVlc3QoKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnKGhvbWUpIEFwb2xsbyByZXNwb25kZWQgd2l0aDonLCByZXNwb25zZSlcbiAgICAgIGlmICghcmVzcG9uc2UpIHsgcmV0dXJuIH1cbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKTtcbiAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuYnViYmxlc0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgcmVzcG9uc2UuZW50aXRpZXNEYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayA9IHBheWxvYWQgPT4ge1xuICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldGNsaWNrJywgcGF5bG9hZClcbiAgfVxuXG4gIHB1YmxpYyBvdXRlckxpbmtDbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgd2luZG93Lm9wZW4ocGF5bG9hZCwgXCJfYmxhbmtcIik7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhcnRTZWxlY3Rpb24gPSBwYXlsb2FkID0+IHtcbiAgICBsZXQgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IHBheWxvYWRcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzID0gcGF5bG9hZFxuICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydlbnRpdGllc1F1ZXJ5U2l6ZSddXG4gICAgfSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAocmVzICYmIHJlcy5lbnRpdGllc0RhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBpZiBzb21lIGxpbmtlZCBvYmplY3RzIGV4aXN0IGZvciB0aGUgc2VsZWN0ZWQgZW50aXRpZXM6XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sYXN0QnViYmxlUmVzcG9uc2UgPSByZXMuZW50aXRpZXNEYXRhXG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHJlcy5lbnRpdGllc0RhdGEpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzKVxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySXRlbVRhZ3MoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhlIGJhY2tlbmQgcmV0dXJucyBhbiBlbXB0eSBsaXN0IG9mIHJlc3VsdHM6XG4gICAgICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IFtdXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICBsZXQgcGFyYW1zID0geyBlbnRpdHlJZDogYiwgZW50aXRpZXNMaXN0U2l6ZTogMSB9XG4gICAgICAgICAgcXVlcnlMaXN0LnB1c2goIC8vIG1ha2UgYSBxdWVyeSBmb3IgZWFjaCBzZWxlY3RlZCBidWJibGVcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dldE1pc3NpbmdCdWJibGUnLCBwYXJhbXMpXG4gICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gYXdhaXQgZm9yIGV2ZXJ5IG1pc3NpbmcgYnViYmxlIGFuZCBidWlsZCBhIGN1c3RvbSByZXNwb25zZVxuICAgICAgICBmb3JrSm9pbihxdWVyeUxpc3QpLnN1YnNjcmliZShmb3JrcmVzID0+IHtcbiAgICAgICAgICBsZXQgY3VzdG9tQnViYmxlcyA9IFtdXG4gICAgICAgICAgZm9ya3Jlcy5mb3JFYWNoKHIgPT4geyBjdXN0b21CdWJibGVzLnB1c2goeyBjb3VudDogMCwgZW50aXR5OiByIH0pIH0pO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIGN1c3RvbUJ1YmJsZXMpO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXMpXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlckl0ZW1UYWdzKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cbiJdfQ==