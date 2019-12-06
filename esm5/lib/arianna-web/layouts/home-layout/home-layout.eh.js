/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
var AwHomeLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutEH, _super);
    function AwHomeLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.handleSimpleAutocompleteClick = (/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            /** @type {?} */
            var thebubble = _this.dataSource.allBubbles.find((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                /** @type {?} */
                var s = 'B_' + payload.replace(/-/g, '_');
                return b.id === s;
            }));
            if (thebubble) {
                _this.dataSource.onBubbleSelected(thebubble);
            }
            if (_this.dataSource.selectedEntitiesIds.indexOf(payload) < 0) {
                _this.dataSource.selectedEntitiesIds.push(payload);
                _this.dataSource.communication.request$('globalFilter', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return console.error(error); }),
                    params: {
                        selectedEntitiesIds: _this.dataSource.selectedEntitiesIds,
                        itemsPagination: {
                            offset: 0,
                            limit: _this.dataSource.resultsLimit
                        }
                    },
                }).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if (res) {
                        _this.dataSource.updateBubbleFilter({
                            allBubbles: _this.dataSource.allBubbles,
                            bubble: thebubble,
                            bubblePayload: { id: thebubble.id },
                            entityIdmap: _this.dataSource.entityBubbleIdMap,
                            source: 'bubble'
                        });
                        _this.dataSource.filterRequest().subscribe((/**
                         * @param {?} res
                         * @return {?}
                         */
                        function (res) {
                            if (res) {
                                _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(res));
                                _this.dataSource.updateBubbles(res);
                            }
                        }));
                        // this.renderPreviewsFromApolloQuery(res)
                    }
                }));
            }
        });
        return _this;
    }
    /**
     * @return {?}
     */
    AwHomeLayoutEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-home-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.loadFilters();
                    _this.configuration = payload.configuration;
                    break;
                case 'aw-home-layout.outerlinkclick':
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: payload
                    });
                    break;
                case 'aw-home-layout.destroy':
                    _this.destroyed$.next();
                    break;
                default:
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-hero.change':
                    _this.dataSource.onHeroChange(payload.value);
                    break;
                case 'aw-home-facets-wrapper.click':
                    _this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (payload.value) {
                        /** @type {?} */
                        var params_1 = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace('-search', ''),
                            itemsPagination: {
                                // offset: 0, limit: this.configuration.get('home-layout')['results-limit']
                                offset: 0, limit: _this.configuration.get('home-layout')['results-limit']
                            }
                        };
                        _this.dataSource.makeRequest$('autoComplete', params_1).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            if (response.results.length < 1) {
                                /** @type {?} */
                                var fallback = {
                                    totalcount: 0,
                                    entities: [
                                        {
                                            entity: {
                                                id: 'fallback',
                                                label: // use fallback string from configuration
                                                _this.configuration.get('home-layout')['autocomplete-fallback'] ?
                                                    _this.configuration.get('home-layout')['autocomplete-fallback'] :
                                                    'Nessun risultato trovato'
                                            }
                                        }
                                    ]
                                };
                                _this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback });
                                _this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: _this.configuration });
                            }
                            else {
                                _this.emitOuter('facetswrapperresponse', { facetId: payload, response: response });
                                _this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                                { key: payload.value, response: response }, // DATA
                                { config: _this.configuration } // OPTIONS
                                );
                            }
                        }));
                    }
                    break;
                case 'aw-home-facets-wrapper.enter':
                    _this.dataSource.handleFacetSearchEnter(payload);
                    break;
                case 'aw-bubble-chart.bubble-tooltip-close-click':
                    _this.dataSource.onBubbleTooltipClick('close', payload);
                    break;
                case 'aw-bubble-chart.bubble-tooltip-goto-click':
                    if (!payload || !payload.entityId) {
                        return;
                    }
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + payload.entityId]
                    });
                    break;
                case 'aw-bubble-chart.bubble-tooltip-select-click':
                    payload._bubbleChart = _this.dataSource._bubbleChart;
                    _this.emitOuter('bubble-tooltip-select-click', payload);
                    break;
                case 'aw-bubble-chart.click':
                    if (payload.source === 'bubble') {
                        if (payload.bubble) {
                            console.log({ payload: payload });
                            _this.dataSource.updateBubbleFilter(payload);
                            if (_this.dataSource.onBubbleSelected(payload.bubble)) {
                                _this.dataSource.filterRequest().subscribe((/**
                                 * @param {?} response
                                 * @return {?}
                                 */
                                function (response) {
                                    if (response) {
                                        // console.log('filterRequest() returned: ', response)
                                        _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(response));
                                        _this.dataSource.updateBubbles(response);
                                    }
                                }));
                            }
                        }
                    }
                    else if (payload.source === 'close') {
                        _this.dataSource.updateBubbleFilter(payload);
                        _this.dataSource.onBubbleDeselected({
                            bubblePayload: payload.bubblePayload,
                            bubble: payload.bubble
                        }).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            if (response) {
                                _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(response));
                                _this.dataSource.updateBubbles(response);
                            }
                        }));
                    }
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    _this.dataSource.updateBubbleFilter(payload);
                    _this.dataSource.updateTags();
                    /** @type {?} */
                    var dataSource_1 = _this.dataSource;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        dataSource_1.loadingBubbles = false;
                    }), 500);
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-item-tags-wrapper.click':
                    _this.dataSource.onTagClicked(payload).subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(response));
                        _this.dataSource.updateBubbles(response);
                        _this.dataSource.renderItemTags();
                    }));
                    break;
                case 'aw-linked-objects.datarequest':
                    var currentPage = payload.currentPage;
                    /** @type {?} */
                    var params = {
                        selectedEntitiesIds: _this.dataSource.selectedEntitiesIds,
                        itemsPagination: {
                            offset: currentPage * _this.dataSource.resultsLimit,
                            limit: _this.dataSource.resultsLimit
                        }
                    };
                    _this.dataSource.makeRequest$('globalFilter', params).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        if (res) {
                            _this.emitOuter('dataresponse', { res: res });
                        }
                        else {
                            console.log('Unable to fetch additional data.');
                        }
                    }));
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    _this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    var source = payload.source;
                    /** @type {?} */
                    var basePath = void 0;
                    if (source === 'item') {
                        basePath = _this.configuration.get('paths').entitaBasePath;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath, payload.id]
                        });
                    }
                    else if (source === 'showMore') {
                        /** @type {?} */
                        var query = _this.dataSource.homeAutocompleteQuery;
                        basePath = _this.configuration.get('paths').searchBasePath;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { query: query }
                        });
                    }
                    break;
                case 'aw-linked-objects.click':
                    /** @type {?} */
                    var paths = _this.configuration.get('paths');
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [paths.schedaBasePath, payload]
                    });
                    break;
                default:
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutEH.prototype.loadFilters = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataSource.initialFilterRequest().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            console.log('(home) Apollo responded with:', response);
            if (response) {
                _this.dataSource.parseInitialRequest(response);
                if (_this.dataSource.bubblesEnabled) {
                    /** @type {?} */
                    var bubblePayload = {
                        setBubbleChart: (/**
                         * @param {?} bubbleCref
                         * @return {?}
                         */
                        function (bubbleCref) { return _this.dataSource._bubbleChart = bubbleCref; }),
                        source: response,
                        reset: false,
                        facetData: _this.dataSource.facetData
                    };
                    _this.emitOuter('filterbubbleresponse', bubblePayload);
                }
            }
        }));
    };
    /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutEH.prototype.outerLinkClick = /**
     * @param {?} type
     * @param {?} payload
     * @return {?}
     */
    function (type, payload) {
        window.open(payload, '_blank');
    };
    return AwHomeLayoutEH;
}(EventHandler));
export { AwHomeLayoutEH };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFvQywwQ0FBWTtJQUFoRDtRQUFBLHFFQWdRQztRQS9QUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBbU4xQyxtQ0FBNkI7Ozs7UUFBRyxVQUFBLE9BQU87O2dCQUN0QyxTQUFTLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsQ0FBQzs7b0JBQzNDLENBQUMsR0FBRyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLENBQUMsRUFBQztZQUNGLElBQUksU0FBUyxFQUFFO2dCQUNiLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDN0M7WUFDRCxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xELEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7b0JBQ3JELE9BQU87Ozs7b0JBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFBO29CQUN4QyxNQUFNLEVBQUU7d0JBQ04sbUJBQW1CLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUI7d0JBQ3hELGVBQWUsRUFBRTs0QkFDZixNQUFNLEVBQUUsQ0FBQzs0QkFDVCxLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO3lCQUNwQztxQkFDRjtpQkFDRixDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFBLEdBQUc7b0JBQ2QsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzs0QkFDakMsVUFBVSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTs0QkFDdEMsTUFBTSxFQUFFLFNBQVM7NEJBQ2pCLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFOzRCQUNuQyxXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7NEJBQzlDLE1BQU0sRUFBRSxRQUFRO3lCQUNqQixDQUFDLENBQUM7d0JBQ0gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O3dCQUFDLFVBQUEsR0FBRzs0QkFDM0MsSUFBSSxHQUFHLEVBQUU7Z0NBQ1AsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQzlFLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzZCQUNwQzt3QkFDSCxDQUFDLEVBQUMsQ0FBQzt3QkFDSCwwQ0FBMEM7cUJBQzNDO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUE7O0lBTUgsQ0FBQzs7OztJQTNQUSwrQkFBTTs7O0lBQWI7UUFBQSxpQkEyTEM7UUExTEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxxQkFBcUI7b0JBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7d0JBQzFCLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixJQUFJLEVBQUUsT0FBTztxQkFDZCxDQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUixLQUFLLHdCQUF3QjtvQkFDM0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssZ0JBQWdCO29CQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1IsS0FBSyw4QkFBOEI7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hELE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTs7NEJBQ1gsUUFBTSxHQUFHOzRCQUNiLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSzs0QkFDcEIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7NEJBQ3pELGVBQWUsRUFBRTs7Z0NBRWYsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDOzZCQUN6RTt5QkFDRjt3QkFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsUUFBTSxDQUFDLENBQUMsU0FBUzs7Ozt3QkFBQyxVQUFBLFFBQVE7NEJBQ3JFLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztvQ0FDekIsUUFBUSxHQUFHO29DQUNmLFVBQVUsRUFBRSxDQUFDO29DQUNiLFFBQVEsRUFBRTt3Q0FDUjs0Q0FDRSxNQUFNLEVBQUU7Z0RBQ04sRUFBRSxFQUFFLFVBQVU7Z0RBQ2QsS0FBSyxFQUFFLHlDQUF5QztnREFDOUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO29EQUM5RCxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7b0RBQ2hFLDBCQUEwQjs2Q0FDL0I7eUNBQ0Y7cUNBQ0Y7aUNBQ0Y7Z0NBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0NBQ2xGLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUM3Qix5QkFBeUIsRUFDekIsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQzFDLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FDL0IsQ0FBQzs2QkFDSDtpQ0FBTTtnQ0FDTCxLQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7Z0NBQ3hFLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUM3Qix5QkFBeUIsRUFBRSxLQUFLO2dDQUNoQyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsVUFBQSxFQUFFLEVBQUUsT0FBTztnQ0FDekMsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLFVBQVU7aUNBQzFDLENBQUM7NkJBQ0g7d0JBQ0gsQ0FBQyxFQUFDLENBQUM7cUJBQ0o7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEQsTUFBTTtnQkFDUixLQUFLLDRDQUE0QztvQkFDL0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3ZELE1BQU07Z0JBQ1IsS0FBSywyQ0FBMkM7b0JBQzlDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO3dCQUFFLE9BQU87cUJBQUU7b0JBQzlDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO3dCQUMxQixPQUFPLEVBQUUsUUFBUTt3QkFDakIsSUFBSSxFQUFFLENBQUMsZUFBYSxPQUFPLENBQUMsUUFBVSxDQUFDO3FCQUN4QyxDQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUixLQUFLLDZDQUE2QztvQkFDaEQsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztvQkFDcEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdkQsTUFBTTtnQkFDUixLQUFLLHVCQUF1QjtvQkFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRTt3QkFDL0IsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFOzRCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDOzRCQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUM1QyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dDQUNwRCxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7Ozs7Z0NBQUMsVUFBQyxRQUFRO29DQUNqRCxJQUFJLFFBQVEsRUFBRTt3Q0FDWixzREFBc0Q7d0NBQ3RELEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dDQUNuRixLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQ0FDekM7Z0NBQ0gsQ0FBQyxFQUFDLENBQUM7NkJBQ0o7eUJBQ0Y7cUJBQ0Y7eUJBQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTt3QkFDckMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzs0QkFDakMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhOzRCQUNwQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07eUJBQ3ZCLENBQUMsQ0FBQyxTQUFTOzs7O3dCQUFDLFVBQUMsUUFBUTs0QkFDcEIsSUFBSSxRQUFRLEVBQUU7Z0NBQ1osS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0NBQ25GLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZCQUN6Qzt3QkFDSCxDQUFDLEVBQUMsQ0FBQztxQkFDSjtvQkFDRCxNQUFNO2dCQUNSLEtBQUssaUNBQWlDO29CQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDOzt3QkFDdkIsWUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVO29CQUNsQyxVQUFVOzs7b0JBQUM7d0JBQ1QsWUFBVSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7b0JBQ3BDLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztvQkFDUixNQUFNO2dCQUVSOzttQkFFRztnQkFDSCxLQUFLLGlDQUFpQztvQkFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxVQUFDLFFBQVE7d0JBQ3ZELEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNuRixLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDbkMsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDMUIsSUFBQSxpQ0FBVzs7d0JBQ2IsTUFBTSxHQUFHO3dCQUNiLG1CQUFtQixFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CO3dCQUN4RCxlQUFlLEVBQUU7NEJBQ2YsTUFBTSxFQUFFLFdBQVcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVk7NEJBQ2xELEtBQUssRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVk7eUJBQ3BDO3FCQUNGO29CQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O29CQUFDLFVBQUEsR0FBRzt3QkFDaEUsSUFBSSxHQUFHLEVBQUU7NEJBQ1AsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUM7eUJBQ3pDOzZCQUFNOzRCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQzt5QkFDakQ7b0JBQ0gsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUixLQUFLLHFDQUFxQztvQkFDeEMsS0FBSSxDQUFDLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUN2QixJQUFBLHVCQUFNOzt3QkFDVixRQUFRLFNBQUE7b0JBQ1osSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO3dCQUNyQixRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDO3dCQUMxRCxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTs0QkFDMUIsT0FBTyxFQUFFLFFBQVE7NEJBQ2pCLElBQUksRUFBRSxDQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFFO3lCQUMvQixDQUFDLENBQUM7cUJBQ0o7eUJBQU0sSUFBSSxNQUFNLEtBQUssVUFBVSxFQUFFOzs0QkFDMUIsS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCO3dCQUNuRCxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDO3dCQUMxRCxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTs0QkFDMUIsT0FBTyxFQUFFLFFBQVE7NEJBQ2pCLElBQUksRUFBRSxDQUFFLFFBQVEsQ0FBRTs0QkFDbEIsV0FBVyxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUU7eUJBQ3ZCLENBQUMsQ0FBQztxQkFDSjtvQkFDRCxNQUFNO2dCQUNSLEtBQUsseUJBQXlCOzt3QkFDdEIsS0FBSyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztvQkFDN0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7d0JBQzFCLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQztxQkFDdEMsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLG9DQUFXOzs7O0lBQW5CO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQVE7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN2RCxJQUFJLFFBQVEsRUFBRTtnQkFDWixLQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFOzt3QkFDNUIsYUFBYSxHQUFHO3dCQUNwQixjQUFjOzs7O3dCQUFFLFVBQUMsVUFBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsVUFBVSxFQUF6QyxDQUF5QyxDQUFBO3dCQUN6RSxNQUFNLEVBQUUsUUFBUTt3QkFDaEIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osU0FBUyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztxQkFDckM7b0JBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxhQUFhLENBQUMsQ0FBQztpQkFDdkQ7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBMENNLHVDQUFjOzs7OztJQUFyQixVQUFzQixJQUFJLEVBQUUsT0FBTztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUgscUJBQUM7QUFBRCxDQUFDLEFBaFFELENBQW9DLFlBQVksR0FnUS9DOzs7Ozs7O0lBL1BDLG9DQUFpRDs7Ozs7SUFDakQsdUNBQTJCOzs7OztJQUMzQiwrQkFBbUI7O0lBaU5uQix1REFzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0Lm91dGVybGlua2NsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBwYXlsb2FkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaGVyby5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkhlcm9DaGFuZ2UocGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVGYWNldEhlYWRlckNsaWNrKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNoYW5nZSc6XG4gICAgICAgICAgaWYgKHBheWxvYWQudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IHBheWxvYWQudmFsdWUsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eTogcGF5bG9hZC5pbnB1dFBheWxvYWQucmVwbGFjZSgnLXNlYXJjaCcsICcnKSxcbiAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgLy8gb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdhdXRvQ29tcGxldGUnLCBwYXJhbXMpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFjayA9IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsY291bnQ6IDAsXG4gICAgICAgICAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2ZhbGxiYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAvLyB1c2UgZmFsbGJhY2sgc3RyaW5nIGZyb20gY29uZmlndXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydhdXRvY29tcGxldGUtZmFsbGJhY2snXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYXV0b2NvbXBsZXRlLWZhbGxiYWNrJ10gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdOZXNzdW4gcmlzdWx0YXRvIHRyb3ZhdG8nXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZTogZmFsbGJhY2sgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2U6IGZhbGxiYWNrIH0sXG4gICAgICAgICAgICAgICAgICB7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLCAvLyBJRFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlIH0sIC8vIERBVEFcbiAgICAgICAgICAgICAgICAgIHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSAvLyBPUFRJT05TXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWNsb3NlLWNsaWNrJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVUb29sdGlwQ2xpY2soJ2Nsb3NlJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrJzpcbiAgICAgICAgICBpZiAoIXBheWxvYWQgfHwgIXBheWxvYWQuZW50aXR5SWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW2Bhdy9lbnRpdGEvJHtwYXlsb2FkLmVudGl0eUlkfWBdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2snOlxuICAgICAgICAgIHBheWxvYWQuX2J1YmJsZUNoYXJ0ID0gdGhpcy5kYXRhU291cmNlLl9idWJibGVDaGFydDtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQuc291cmNlID09PSAnYnViYmxlJykge1xuICAgICAgICAgICAgaWYgKHBheWxvYWQuYnViYmxlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgcGF5bG9hZCB9KTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZUZpbHRlcihwYXlsb2FkKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVNlbGVjdGVkKHBheWxvYWQuYnViYmxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJSZXF1ZXN0KCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJSZXF1ZXN0KCkgcmV0dXJuZWQ6ICcsIHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0QnViYmxlUGF5bG9hZChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlcyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHBheWxvYWQuc291cmNlID09PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlRmlsdGVyKHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uQnViYmxlRGVzZWxlY3RlZCh7XG4gICAgICAgICAgICAgIGJ1YmJsZVBheWxvYWQ6IHBheWxvYWQuYnViYmxlUGF5bG9hZCxcbiAgICAgICAgICAgICAgYnViYmxlOiBwYXlsb2FkLmJ1YmJsZVxuICAgICAgICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0QnViYmxlUGF5bG9hZChyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuYnViYmxlLWZpbHRlcmVkJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlRmlsdGVyKHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVUYWdzKCk7XG4gICAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRhdGFTb3VyY2UubG9hZGluZ0J1YmJsZXMgPSBmYWxzZTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYWdzICYgSXRlbSBQcmV2aWV3cyBFdmVudCBIYW5kbGVyc1xuICAgICAgICAgKi9cbiAgICAgICAgY2FzZSAnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uVGFnQ2xpY2tlZChwYXlsb2FkKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0QnViYmxlUGF5bG9hZChyZXNwb25zZSkpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZXMocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmRhdGFyZXF1ZXN0JzpcbiAgICAgICAgICBjb25zdCB7IGN1cnJlbnRQYWdlIH0gPSBwYXlsb2FkO1xuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHM6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgIG9mZnNldDogY3VycmVudFBhZ2UgKiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0LFxuICAgICAgICAgICAgICBsaW1pdDogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywgcGFyYW1zKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXNwb25zZScsIHsgcmVzIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBmZXRjaCBhZGRpdGlvbmFsIGRhdGEuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyLmNsaWNrcmVzdWx0JzpcbiAgICAgICAgICB0aGlzLmhhbmRsZVNpbXBsZUF1dG9jb21wbGV0ZUNsaWNrKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWF1dG9jb21wbGV0ZS5jbGljayc6XG4gICAgICAgICAgY29uc3QgeyBzb3VyY2UgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgbGV0IGJhc2VQYXRoO1xuICAgICAgICAgIGlmIChzb3VyY2UgPT09ICdpdGVtJykge1xuICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoO1xuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFsgYmFzZVBhdGgsIHBheWxvYWQuaWQgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdzaG93TW9yZScpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5kYXRhU291cmNlLmhvbWVBdXRvY29tcGxldGVRdWVyeTtcbiAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aDtcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbIGJhc2VQYXRoIF0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuY2xpY2snOlxuICAgICAgICAgIGNvbnN0IHBhdGhzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKTtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbcGF0aHMuc2NoZWRhQmFzZVBhdGgsIHBheWxvYWRdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRGaWx0ZXJzKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5pbml0aWFsRmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCcoaG9tZSkgQXBvbGxvIHJlc3BvbmRlZCB3aXRoOicsIHJlc3BvbnNlKTtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFyc2VJbml0aWFsUmVxdWVzdChyZXNwb25zZSk7XG4gICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuYnViYmxlc0VuYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBidWJibGVQYXlsb2FkID0ge1xuICAgICAgICAgICAgc2V0QnViYmxlQ2hhcnQ6IChidWJibGVDcmVmKSA9PiB0aGlzLmRhdGFTb3VyY2UuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZixcbiAgICAgICAgICAgIHNvdXJjZTogcmVzcG9uc2UsXG4gICAgICAgICAgICByZXNldDogZmFsc2UsXG4gICAgICAgICAgICBmYWNldERhdGE6IHRoaXMuZGF0YVNvdXJjZS5mYWNldERhdGFcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIGJ1YmJsZVBheWxvYWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2sgPSBwYXlsb2FkID0+IHtcbiAgICBjb25zdCB0aGVidWJibGUgPSB0aGlzLmRhdGFTb3VyY2UuYWxsQnViYmxlcy5maW5kKGIgPT4ge1xuICAgICAgY29uc3QgcyA9ICdCXycgKyBwYXlsb2FkLnJlcGxhY2UoLy0vZywgJ18nKTtcbiAgICAgIHJldHVybiBiLmlkID09PSBzO1xuICAgIH0pO1xuICAgIGlmICh0aGVidWJibGUpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVNlbGVjdGVkKHRoZWJ1YmJsZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRFbnRpdGllc0lkcy5pbmRleE9mKHBheWxvYWQpIDwgMCkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkRW50aXRpZXNJZHMucHVzaChwYXlsb2FkKTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHM6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgbGltaXQ6IHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVGaWx0ZXIoe1xuICAgICAgICAgICAgYWxsQnViYmxlczogdGhpcy5kYXRhU291cmNlLmFsbEJ1YmJsZXMsXG4gICAgICAgICAgICBidWJibGU6IHRoZWJ1YmJsZSxcbiAgICAgICAgICAgIGJ1YmJsZVBheWxvYWQ6IHsgaWQ6IHRoZWJ1YmJsZS5pZCB9LFxuICAgICAgICAgICAgZW50aXR5SWRtYXA6IHRoaXMuZGF0YVNvdXJjZS5lbnRpdHlCdWJibGVJZE1hcCxcbiAgICAgICAgICAgIHNvdXJjZTogJ2J1YmJsZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0QnViYmxlUGF5bG9hZChyZXMpKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZXMocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcylcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG91dGVyTGlua0NsaWNrKHR5cGUsIHBheWxvYWQpIHtcbiAgICB3aW5kb3cub3BlbihwYXlsb2FkLCAnX2JsYW5rJyk7XG4gIH1cblxufVxuXG4iXX0=