/**
 * @fileoverview added by tsickle
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
        payload => {
            this.emitOuter('facetclick', payload);
        });
        this.handleChartSelection = (/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            /** @type {?} */
            const selectedEntitiesIds = payload;
            this.dataSource.selectedBubbles = payload;
            this.dataSource.resultsListIsLoading = true;
            this.dataSource.makeRequest$('globalFilter', {
                selectedEntitiesIds,
                entitiesListSize: this.configuration.get('bubble-chart')['bubbleLimit']
            }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
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
                case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                    this.emitOuter('d3end', payload);
                    break;
                case 'aw-chart-tippy.select':
                    this.emitOuter('select', payload);
                    break;
                case 'aw-hero.enter':
                    /** @type {?} */
                    const query = payload.value;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [this.configuration.get('paths').searchBasePath],
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
                    if (!payload.value ||
                        (typeof payload.value === 'string' && payload.value.trim().length === 0)) {
                        this.emitOuter('facetswrapperclose', { facetId: payload });
                    }
                    else if (payload.value) {
                        this.emitOuter('facetswrapperrequest', { facetId: payload });
                        // clear autocomplete results
                        this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: null });
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
                                }
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                ;
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: this.configuration });
                            }
                            else {
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response })
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
                            path: [basePath, payload.id, helpers.slugify(payload.title)]
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
                // case 'aw-bubble-chart.bubble-tooltip-goto-click':
                //   this.emitGlobal('navigate', {
                //     handler: 'router',
                //     path: [
                //       this.configuration.get('paths').entitaBasePath,
                //       payload.id,
                //       helpers.slugify(payload.label)
                //     ]
                //   });
                //   break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTtJQUFoRDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFzTTFDLGtDQUE2Qjs7OztRQUFHLE9BQU8sQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsRUFBQTtRQU1NLHlCQUFvQjs7OztRQUFHLE9BQU8sQ0FBQyxFQUFFOztrQkFDaEMsbUJBQW1CLEdBQUcsT0FBTztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7WUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO2dCQUMzQyxtQkFBbUI7Z0JBQ25CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsQ0FBQzthQUN4RSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztnQkFDN0MsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFlB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QUMsU0FBUzs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDNUQseURBQXlEO1lBQ3pELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTTthQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDL0Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQU1NLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBc0NGOzs7Ozs7SUFsUEMsb0NBQWlEOzs7OztJQUNqRCx1Q0FBMkI7Ozs7O0lBQzNCLCtCQUFtQjs7SUFvTW5CLHVEQUVDOztJQU1ELDhDQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0Lm91dGVybGlua2NsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBwYXlsb2FkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkRlc3Ryb3koKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5idWJibGVyZXN1bHRzdmlld2FsbGNsaWNrJzpcbiAgICAgICAgICBjb25zdCBlbnRpdHlMaW5rcyA9IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMuam9pbignLCcpO1xuICAgICAgICAgIGNvbnN0IGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aDtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGhdLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2VudGl0eS1saW5rcyc6IGVudGl0eUxpbmtzIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuY2xlYXJzZWxlY3Rpb24nOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGVhcnNlbGVjdGlvbicpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCcoaG9tZSkgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGU6ICcsIHR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmQzZW5kJzogLy8gYm91bmNlIHRoZSBldmVudCwgZnJvbSBidWJibGUtY2hhcnQgdG8gY2hhcnQtdGlwcHlcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZDNlbmQnLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1jaGFydC10aXBweS5zZWxlY3QnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3QnLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1oZXJvLmVudGVyJzpcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IHBheWxvYWQudmFsdWU7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGhdLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcXVlcnkgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1oZXJvLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmF1dG9jb21wbGV0ZVZhbHVlID0gcGF5bG9hZC52YWx1ZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25IZXJvQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndG9nZ2xlZmlsdGVyJywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFwYXlsb2FkLnZhbHVlIHx8XG4gICAgICAgICAgICAodHlwZW9mIHBheWxvYWQudmFsdWUgPT09ICdzdHJpbmcnICYmIHBheWxvYWQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVyY2xvc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlcXVlc3QnLCB7IGZhY2V0SWQ6IHBheWxvYWQgfSk7XG4gICAgICAgICAgICAvLyBjbGVhciBhdXRvY29tcGxldGUgcmVzdWx0c1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJyxcbiAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlOiBudWxsIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgIGlucHV0OiBwYXlsb2FkLnZhbHVlLFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHk6IHBheWxvYWQuaW5wdXRQYXlsb2FkLnJlcGxhY2UoLy1zZWFyY2gvZywgJycpLnJlcGxhY2UoLy0vZywgJyAnKSxcbiAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHBhcmFtcykuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIGxldCBmYWxsYmFjayA9IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsY291bnQ6IDAsXG4gICAgICAgICAgICAgICAgICByZXN1bHRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZmFsbGJhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IC8vIHVzZSBmYWxsYmFjayBzdHJpbmcgZnJvbSBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2F1dG9jb21wbGV0ZS1mYWxsYmFjayddID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydhdXRvY29tcGxldGUtZmFsbGJhY2snXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05lc3N1biByaXN1bHRhdG8gdHJvdmF0bydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJyZXNwb25zZScsIHsgZmFjZXRJZDogcGF5bG9hZCwgcmVzcG9uc2U6IGZhbGxiYWNrIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2U6IGZhbGxiYWNrIH0sXG4gICAgICAgICAgICAgICAgICB7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJyZXNwb25zZScsIHsgZmFjZXRJZDogcGF5bG9hZCwgcmVzcG9uc2UgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJywgLy8gSURcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZSB9LCAvLyBEQVRBXG4gICAgICAgICAgICAgICAgICB7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0gLy8gT1BUSU9OU1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuZW50ZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVGYWNldFNlYXJjaEVudGVyKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndGFnY2xpY2snLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5kYXRhcmVxdWVzdCc6XG4gICAgICAgICAgY29uc3QgeyBjdXJyZW50UGFnZSB9ID0gcGF5bG9hZDtcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLFxuICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgIG9mZnNldDogY3VycmVudFBhZ2UgKiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0LFxuICAgICAgICAgICAgICBsaW1pdDogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywgcGFyYW1zKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXNwb25zZScsIHsgcmVzIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIGZldGNoIGFkZGl0aW9uYWwgZGF0YS4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyLmNsaWNrcmVzdWx0JzpcbiAgICAgICAgICB0aGlzLmhhbmRsZVNpbXBsZUF1dG9jb21wbGV0ZUNsaWNrKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYXV0b2NvbXBsZXRlLmNsaWNrJzpcbiAgICAgICAgICBjb25zdCB7IHNvdXJjZSwgdHlwZSB9ID0gcGF5bG9hZDtcbiAgICAgICAgICBsZXQgYmFzZVBhdGg7XG4gICAgICAgICAgaWYgKHNvdXJjZSA9PT0gXCJpdGVtXCIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcIm9nZ2V0dG8tY3VsdHVyYWxlXCIpIHtcbiAgICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwicGF0aHNcIikuc2NoZWRhQmFzZVBhdGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5lbnRpdGFCYXNlUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGgsIHBheWxvYWQuaWQsIGhlbHBlcnMuc2x1Z2lmeShwYXlsb2FkLnRpdGxlKV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlID09PSBcInNob3dNb3JlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5kYXRhU291cmNlLmhvbWVBdXRvY29tcGxldGVRdWVyeTtcbiAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLnNlYXJjaEJhc2VQYXRoO1xuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aF0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFydFNlbGVjdGlvbihwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubG9ja2ZpbHRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCBwYXlsb2FkKSAvLyBsZXQgYXctaG9tZS1mYWNldHMtd3JhcHBlciBoYW5kbGUgdGhpcyBldmVudFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlICdhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGljayc6XG4gICAgICAgIC8vICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgLy8gICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAvLyAgICAgcGF0aDogW1xuICAgICAgICAvLyAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgICAgICAvLyAgICAgICBwYXlsb2FkLmlkLFxuICAgICAgICAvLyAgICAgICBoZWxwZXJzLnNsdWdpZnkocGF5bG9hZC5sYWJlbClcbiAgICAgICAgLy8gICAgIF1cbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJyhob21lKSB1bmhhbmRsZWQgb3V0ZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRGaWx0ZXJzKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5pbml0aWFsRmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcoaG9tZSkgQXBvbGxvIHJlc3BvbmRlZCB3aXRoOicsIHJlc3BvbnNlKVxuICAgICAgaWYgKCFyZXNwb25zZSkgeyByZXR1cm4gfVxuICAgICAgdGhpcy5kYXRhU291cmNlLnBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpO1xuICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5idWJibGVzRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCByZXNwb25zZS5lbnRpdGllc0RhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZVNpbXBsZUF1dG9jb21wbGV0ZUNsaWNrID0gcGF5bG9hZCA9PiB7XG4gICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0Y2xpY2snLCBwYXlsb2FkKVxuICB9XG5cbiAgcHVibGljIG91dGVyTGlua0NsaWNrKHR5cGUsIHBheWxvYWQpIHtcbiAgICB3aW5kb3cub3BlbihwYXlsb2FkLCBcIl9ibGFua1wiKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDaGFydFNlbGVjdGlvbiA9IHBheWxvYWQgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBwYXlsb2FkO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMgPSBwYXlsb2FkO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGlzdElzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcyxcbiAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpWydidWJibGVMaW1pdCddXG4gICAgfSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpc3RJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGlmIChyZXMgJiYgcmVzLmVudGl0aWVzRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGlmIHNvbWUgbGlua2VkIG9iamVjdHMgZXhpc3QgZm9yIHRoZSBzZWxlY3RlZCBlbnRpdGllczpcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxhc3RCdWJibGVSZXNwb25zZSA9IHJlcy5lbnRpdGllc0RhdGFcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgcmVzLmVudGl0aWVzRGF0YSk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXMpXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJJdGVtVGFncygpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGUgYmFja2VuZCByZXR1cm5zIGFuIGVtcHR5IGxpc3Qgb2YgcmVzdWx0czpcbiAgICAgICAgY29uc3QgcXVlcnlMaXN0ID0gW11cbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICAgIGxldCBwYXJhbXMgPSB7IGVudGl0eUlkOiBiLCBlbnRpdGllc0xpc3RTaXplOiAxIH1cbiAgICAgICAgICBxdWVyeUxpc3QucHVzaCggLy8gbWFrZSBhIHF1ZXJ5IGZvciBlYWNoIHNlbGVjdGVkIGJ1YmJsZVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2V0TWlzc2luZ0J1YmJsZScsIHBhcmFtcylcbiAgICAgICAgICApXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhd2FpdCBmb3IgZXZlcnkgbWlzc2luZyBidWJibGUgYW5kIGJ1aWxkIGEgY3VzdG9tIHJlc3BvbnNlXG4gICAgICAgIGZvcmtKb2luKHF1ZXJ5TGlzdCkuc3Vic2NyaWJlKGZvcmtyZXMgPT4ge1xuICAgICAgICAgIGxldCBjdXN0b21CdWJibGVzID0gW11cbiAgICAgICAgICBmb3JrcmVzLmZvckVhY2gociA9PiB7IGN1c3RvbUJ1YmJsZXMucHVzaCh7IGNvdW50OiAwLCBlbnRpdHk6IHIgfSkgfSk7XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgY3VzdG9tQnViYmxlcyk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcylcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySXRlbVRhZ3MoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuIl19