/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class AwHomeLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handleSimpleAutocompleteClick = (/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            /** @type {?} */
            let thebubble = this.dataSource.allBubbles.find((/**
             * @param {?} b
             * @return {?}
             */
            b => {
                /** @type {?} */
                let s = 'B_' + payload.replace(/-/g, '_');
                return b.id == s;
            }));
            if (thebubble) {
                this.dataSource.onBubbleSelected(thebubble);
            }
            if (this.dataSource.selectedEntitiesIds.indexOf(payload) < 0) {
                this.dataSource.selectedEntitiesIds.push(payload);
                this.dataSource.communication.request$('globalFilter', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    (error) => console.error(error)),
                    params: {
                        selectedEntitiesIds: this.dataSource.selectedEntitiesIds,
                        itemsPagination: {
                            offset: 0,
                            limit: this.dataSource.resultsLimit
                        }
                    },
                }).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    if (res) {
                        this.dataSource.updateBubbleFilter({
                            allBubbles: this.dataSource.allBubbles,
                            bubble: thebubble,
                            bubblePayload: { id: thebubble.id },
                            entityIdmap: this.dataSource.entityBubbleIdMap,
                            source: 'bubble'
                        });
                        this.dataSource.filterRequest().subscribe((/**
                         * @param {?} res
                         * @return {?}
                         */
                        res => {
                            if (res) {
                                this.emitOuter('filterbubbleresponse', this.dataSource.getBubblePayload(res));
                                this.dataSource.updateBubbles(res);
                            }
                        }));
                        // this.renderPreviewsFromApolloQuery(res)
                    }
                }));
            }
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
                    this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case 'aw-hero.change':
                    this.dataSource.onHeroChange(payload.value);
                    break;
                case 'aw-home-facets-wrapper.click':
                    this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (payload.value) {
                        /** @type {?} */
                        let params = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace('-search', ''),
                            itemsPagination: {
                                // offset: 0, limit: this.configuration.get('home-layout')['results-limit']
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
                                    entities: [
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
                case "aw-bubble-chart.bubble-tooltip-close-click":
                    this.dataSource.onBubbleTooltipClick('close', payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [`aw/entita/${payload.entityId}`]
                    });
                    break;
                case "aw-bubble-chart.bubble-tooltip-select-click":
                    payload._bubbleChart = this.dataSource._bubbleChart;
                    this.emitOuter('bubble-tooltip-select-click', payload);
                    break;
                case 'aw-bubble-chart.click':
                    if (payload.source === 'bubble') {
                        if (payload.bubble) {
                            console.log({ payload });
                            this.dataSource.updateBubbleFilter(payload);
                            if (this.dataSource.onBubbleSelected(payload.bubble)) {
                                this.dataSource.filterRequest().subscribe((/**
                                 * @param {?} response
                                 * @return {?}
                                 */
                                (response) => {
                                    if (response) {
                                        // console.log('filterRequest() returned: ', response)
                                        this.emitOuter('filterbubbleresponse', this.dataSource.getBubblePayload(response));
                                        this.dataSource.updateBubbles(response);
                                    }
                                }));
                            }
                        }
                    }
                    else if (payload.source === 'close') {
                        this.dataSource.updateBubbleFilter(payload);
                        this.dataSource.onBubbleDeselected({
                            bubblePayload: payload.bubblePayload,
                            bubble: payload.bubble
                        }).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        (response) => {
                            if (response) {
                                this.emitOuter('filterbubbleresponse', this.dataSource.getBubblePayload(response));
                                this.dataSource.updateBubbles(response);
                            }
                        }));
                    }
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    this.dataSource.updateBubbleFilter(payload);
                    this.dataSource.updateTags();
                    /** @type {?} */
                    const dataSource = this.dataSource;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        dataSource.loadingBubbles = false;
                    }), 500);
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-item-tags-wrapper.click':
                    this.dataSource.onTagClicked(payload).subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    (response) => {
                        this.emitOuter('filterbubbleresponse', this.dataSource.getBubblePayload(response));
                        this.dataSource.updateBubbles(response);
                        this.dataSource.renderItemTags();
                    }));
                    break;
                case 'aw-linked-objects.datarequest':
                    let { currentPage } = payload;
                    /** @type {?} */
                    let params = {
                        selectedEntitiesIds: this.dataSource.selectedEntitiesIds,
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
                    const { source } = payload;
                    /** @type {?} */
                    let basePath;
                    if (source === "item") {
                        basePath = this.configuration.get("paths").entitaBasePath;
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
            console.log('(home) Apollo responded with:', response);
            if (response) {
                this.dataSource.parseInitialRequest(response);
                if (this.dataSource.bubblesEnabled) {
                    /** @type {?} */
                    let bubblePayload = {
                        setBubbleChart: (/**
                         * @param {?} bubbleCref
                         * @return {?}
                         */
                        (bubbleCref) => this.dataSource._bubbleChart = bubbleCref),
                        source: response,
                        reset: false,
                        facetData: this.dataSource.facetData
                    };
                    this.emitOuter('filterbubbleresponse', bubblePayload);
                }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTtJQUFoRDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUE0TTFDLGtDQUE2Qjs7OztRQUFHLE9BQU8sQ0FBQyxFQUFFOztnQkFDM0MsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTs7b0JBQzlDLENBQUMsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUN6QyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ2xCLENBQUMsRUFBQztZQUNGLElBQUksU0FBUyxFQUFFO2dCQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDNUM7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7b0JBQ3JELE9BQU87Ozs7b0JBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ3hDLE1BQU0sRUFBRTt3QkFDTixtQkFBbUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQjt3QkFDeEQsZUFBZSxFQUFFOzRCQUNmLE1BQU0sRUFBRSxDQUFDOzRCQUNULEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVk7eUJBQ3BDO3FCQUNGO2lCQUNGLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNqQixJQUFJLEdBQUcsRUFBRTt3QkFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOzRCQUNqQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVOzRCQUN0QyxNQUFNLEVBQUUsU0FBUzs0QkFDakIsYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUU7NEJBQ25DLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQjs0QkFDOUMsTUFBTSxFQUFFLFFBQVE7eUJBQ2pCLENBQUMsQ0FBQTt3QkFDRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7Ozs7d0JBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQzlDLElBQUksR0FBRyxFQUFFO2dDQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dDQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTs2QkFDbkM7d0JBQ0gsQ0FBQyxFQUFDLENBQUE7d0JBQ0YsMENBQTBDO3FCQUMzQztnQkFDSCxDQUFDLEVBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxFQUFBO0lBTUgsQ0FBQzs7OztJQXBQUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsscUJBQXFCO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO3dCQUMxQixPQUFPLEVBQUUsUUFBUTt3QkFDakIsSUFBSSxFQUFFLE9BQU87cUJBQ2QsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1IsS0FBSyx3QkFBd0I7b0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxnQkFBZ0I7b0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFOzs0QkFDYixNQUFNLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLOzRCQUNwQixZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQzs0QkFDekQsZUFBZSxFQUFFOztnQ0FFZixNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUM7NkJBQ3pFO3lCQUNGO3dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O3dCQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUN4RSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7b0NBQzNCLFFBQVEsR0FBRztvQ0FDYixVQUFVLEVBQUUsQ0FBQztvQ0FDYixRQUFRLEVBQUU7d0NBQ1I7NENBQ0UsTUFBTSxFQUFFO2dEQUNOLEVBQUUsRUFBRSxVQUFVO2dEQUNkLEtBQUssRUFBRSx5Q0FBeUM7Z0RBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztvREFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO29EQUNoRSwwQkFBMEI7NkNBQy9CO3lDQUNGO3FDQUNGO2lDQUNGO2dDQUNELElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO2dDQUNqRixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FDN0IseUJBQXlCLEVBQ3pCLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUMxQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQy9CLENBQUE7NkJBQ0Y7aUNBQU07Z0NBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtnQ0FDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQzdCLHlCQUF5QixFQUFFLEtBQUs7Z0NBQ2hDLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTztnQ0FDekMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLFVBQVU7aUNBQzFDLENBQUE7NkJBQ0Y7d0JBQ0gsQ0FBQyxFQUFDLENBQUE7cUJBQ0g7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUixLQUFLLDRDQUE0QztvQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3ZELE1BQU07Z0JBQ1IsS0FBSywyQ0FBMkM7b0JBQzlDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTt3QkFBRSxPQUFPO29CQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTt3QkFDMUIsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLElBQUksRUFBRSxDQUFDLGFBQWEsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN4QyxDQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUixLQUFLLDZDQUE2QztvQkFDaEQsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztvQkFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdkQsTUFBTTtnQkFDUixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRTt3QkFDL0IsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFOzRCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTs0QkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDNUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQ0FDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O2dDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0NBQ3JELElBQUksUUFBUSxFQUFFO3dDQUNaLHNEQUFzRDt3Q0FDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0NBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FDQUN6QztnQ0FDSCxDQUFDLEVBQUMsQ0FBQzs2QkFDSjt5QkFDRjtxQkFDRjt5QkFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO3dCQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOzRCQUNqQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWE7NEJBQ3BDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt5QkFDdkIsQ0FBQyxDQUFDLFNBQVM7Ozs7d0JBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs0QkFDeEIsSUFBSSxRQUFRLEVBQUU7Z0NBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0NBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZCQUN6Qzt3QkFDSCxDQUFDLEVBQUMsQ0FBQztxQkFDSjtvQkFDRCxNQUFNO2dCQUNSLEtBQUssaUNBQWlDO29CQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDOzswQkFDdkIsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO29CQUNsQyxVQUFVOzs7b0JBQUM7d0JBQ1QsVUFBVSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7b0JBQ3BDLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztvQkFDUixNQUFNO2dCQUVSOzttQkFFRztnQkFDSCxLQUFLLGlDQUFpQztvQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO3dCQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25DLENBQUMsRUFBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7d0JBQzlCLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTzs7d0JBQ3pCLE1BQU0sR0FBRzt3QkFDWCxtQkFBbUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQjt3QkFDeEQsZUFBZSxFQUFFOzRCQUNmLE1BQU0sRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZOzRCQUNsRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO3lCQUNwQztxQkFDRjtvQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxHQUFHLENBQUMsRUFBRTt3QkFDbkUsSUFBSSxHQUFHLEVBQUU7NEJBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO3lCQUN4Qzs2QkFBTTs0QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUE7eUJBQ2hEO29CQUNILENBQUMsRUFBQyxDQUFBO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxxQ0FBcUM7b0JBQ3hDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDM0MsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjswQkFDdkIsRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPOzt3QkFDdEIsUUFBUTtvQkFDWixJQUFHLE1BQU0sS0FBSyxNQUFNLEVBQUM7d0JBQ25CLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUM7d0JBQzFELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFOzRCQUMxQixPQUFPLEVBQUUsUUFBUTs0QkFDakIsSUFBSSxFQUFFLENBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUU7eUJBQy9CLENBQUMsQ0FBQztxQkFDSjt5QkFBTSxJQUFHLE1BQU0sS0FBSyxVQUFVLEVBQUU7OzhCQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUI7d0JBQ25ELFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUM7d0JBQzFELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFOzRCQUMxQixPQUFPLEVBQUUsUUFBUTs0QkFDakIsSUFBSSxFQUFFLENBQUUsUUFBUSxDQUFFOzRCQUNsQixXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUU7eUJBQ3ZCLENBQUMsQ0FBQztxQkFDSjtvQkFDRCxNQUFNO2dCQUNWO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZELElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7O3dCQUM5QixhQUFhLEdBQUc7d0JBQ2xCLGNBQWM7Ozs7d0JBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQTt3QkFDekUsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLEtBQUssRUFBRSxLQUFLO3dCQUNaLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7cUJBQ3JDO29CQUNELElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsYUFBYSxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQTBDTSxjQUFjLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUVGOzs7Ozs7SUF4UEMsb0NBQWlEOzs7OztJQUNqRCx1Q0FBMkI7Ozs7O0lBQzNCLCtCQUFtQjs7SUEwTW5CLHVEQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5sb2FkRmlsdGVycygpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQub3V0ZXJsaW5rY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IHBheWxvYWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1oZXJvLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSGVyb0NoYW5nZShwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0SGVhZGVyQ2xpY2socGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICBpZiAocGF5bG9hZC52YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IHBheWxvYWQudmFsdWUsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eTogcGF5bG9hZC5pbnB1dFBheWxvYWQucmVwbGFjZSgnLXNlYXJjaCcsICcnKSxcbiAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgLy8gb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHBhcmFtcykuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIGxldCBmYWxsYmFjayA9IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsY291bnQ6IDAsXG4gICAgICAgICAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2ZhbGxiYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAvLyB1c2UgZmFsbGJhY2sgc3RyaW5nIGZyb20gY29uZmlndXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydhdXRvY29tcGxldGUtZmFsbGJhY2snXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYXV0b2NvbXBsZXRlLWZhbGxiYWNrJ10gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdOZXNzdW4gcmlzdWx0YXRvIHRyb3ZhdG8nXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlOiBmYWxsYmFjayB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlOiBmYWxsYmFjayB9LFxuICAgICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsIC8vIElEXG4gICAgICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2UgfSwgLy8gREFUQVxuICAgICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9IC8vIE9QVElPTlNcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1jbG9zZS1jbGlja1wiOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVRvb2x0aXBDbGljaygnY2xvc2UnLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrXCI6XG4gICAgICAgICAgaWYgKCFwYXlsb2FkIHx8ICFwYXlsb2FkLmVudGl0eUlkKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW2Bhdy9lbnRpdGEvJHtwYXlsb2FkLmVudGl0eUlkfWBdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrXCI6XG4gICAgICAgICAgcGF5bG9hZC5fYnViYmxlQ2hhcnQgPSB0aGlzLmRhdGFTb3VyY2UuX2J1YmJsZUNoYXJ0O1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdidWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2snLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmNsaWNrJzpcbiAgICAgICAgICBpZiAocGF5bG9hZC5zb3VyY2UgPT09ICdidWJibGUnKSB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5idWJibGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBwYXlsb2FkIH0pXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVGaWx0ZXIocGF5bG9hZCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVTZWxlY3RlZChwYXlsb2FkLmJ1YmJsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyUmVxdWVzdCgpIHJldHVybmVkOiAnLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZXMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnNvdXJjZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZUZpbHRlcihwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZURlc2VsZWN0ZWQoe1xuICAgICAgICAgICAgICBidWJibGVQYXlsb2FkOiBwYXlsb2FkLmJ1YmJsZVBheWxvYWQsXG4gICAgICAgICAgICAgIGJ1YmJsZTogcGF5bG9hZC5idWJibGVcbiAgICAgICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlcyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS1maWx0ZXJlZCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZUZpbHRlcihwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVGFncygpO1xuICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYXRhU291cmNlLmxvYWRpbmdCdWJibGVzID0gZmFsc2U7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGFncyAmIEl0ZW0gUHJldmlld3MgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblRhZ0NsaWNrZWQocGF5bG9hZCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJJdGVtVGFncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5kYXRhcmVxdWVzdCc6XG4gICAgICAgICAgbGV0IHsgY3VycmVudFBhZ2UgfSA9IHBheWxvYWRcbiAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBjdXJyZW50UGFnZSAqIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXQsXG4gICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHBhcmFtcykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVzcG9uc2UnLCB7IHJlcyB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBmZXRjaCBhZGRpdGlvbmFsIGRhdGEuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1hdXRvY29tcGxldGUtd3JhcHBlci5jbGlja3Jlc3VsdCc6XG4gICAgICAgICAgdGhpcy5oYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayhwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWF1dG9jb21wbGV0ZS5jbGljayc6XG4gICAgICAgICAgICBjb25zdCB7IHNvdXJjZSB9ID0gcGF5bG9hZDtcbiAgICAgICAgICAgIGxldCBiYXNlUGF0aDtcbiAgICAgICAgICAgIGlmKHNvdXJjZSA9PT0gXCJpdGVtXCIpe1xuICAgICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5lbnRpdGFCYXNlUGF0aDtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgICAgICBwYXRoOiBbIGJhc2VQYXRoLCBwYXlsb2FkLmlkIF1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoc291cmNlID09PSBcInNob3dNb3JlXCIpIHtcbiAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmRhdGFTb3VyY2UuaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5O1xuICAgICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5zZWFyY2hCYXNlUGF0aDtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgICAgICBwYXRoOiBbIGJhc2VQYXRoIF0sXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcXVlcnkgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRmlsdGVycygpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuaW5pdGlhbEZpbHRlclJlcXVlc3QoKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnKGhvbWUpIEFwb2xsbyByZXNwb25kZWQgd2l0aDonLCByZXNwb25zZSk7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpO1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmJ1YmJsZXNFbmFibGVkKSB7XG4gICAgICAgICAgbGV0IGJ1YmJsZVBheWxvYWQgPSB7XG4gICAgICAgICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuZGF0YVNvdXJjZS5fYnViYmxlQ2hhcnQgPSBidWJibGVDcmVmLFxuICAgICAgICAgICAgc291cmNlOiByZXNwb25zZSxcbiAgICAgICAgICAgIHJlc2V0OiBmYWxzZSxcbiAgICAgICAgICAgIGZhY2V0RGF0YTogdGhpcy5kYXRhU291cmNlLmZhY2V0RGF0YVxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgYnViYmxlUGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayA9IHBheWxvYWQgPT4ge1xuICAgIGxldCB0aGVidWJibGUgPSB0aGlzLmRhdGFTb3VyY2UuYWxsQnViYmxlcy5maW5kKGIgPT4ge1xuICAgICAgbGV0IHMgPSAnQl8nICsgcGF5bG9hZC5yZXBsYWNlKC8tL2csICdfJylcbiAgICAgIHJldHVybiBiLmlkID09IHNcbiAgICB9KVxuICAgIGlmICh0aGVidWJibGUpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVNlbGVjdGVkKHRoZWJ1YmJsZSlcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEVudGl0aWVzSWRzLmluZGV4T2YocGF5bG9hZCkgPCAwKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRFbnRpdGllc0lkcy5wdXNoKHBheWxvYWQpXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRFbnRpdGllc0lkcyxcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIGxpbWl0OiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlRmlsdGVyKHtcbiAgICAgICAgICAgIGFsbEJ1YmJsZXM6IHRoaXMuZGF0YVNvdXJjZS5hbGxCdWJibGVzLFxuICAgICAgICAgICAgYnViYmxlOiB0aGVidWJibGUsXG4gICAgICAgICAgICBidWJibGVQYXlsb2FkOiB7IGlkOiB0aGVidWJibGUuaWQgfSxcbiAgICAgICAgICAgIGVudGl0eUlkbWFwOiB0aGlzLmRhdGFTb3VyY2UuZW50aXR5QnViYmxlSWRNYXAsXG4gICAgICAgICAgICBzb3VyY2U6ICdidWJibGUnXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0QnViYmxlUGF5bG9hZChyZXMpKVxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlcyhyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3V0ZXJMaW5rQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xuICAgIHdpbmRvdy5vcGVuKHBheWxvYWQsIFwiX2JsYW5rXCIpO1xuICB9XG5cbn1cblxuIl19