/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject, forkJoin } from 'rxjs';
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
            _this.emitOuter('facetclick', payload);
        });
        _this.handleChartSelection = (/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            /** @type {?} */
            var selectedEntitiesIds = payload;
            _this.dataSource.selectedBubbles = payload;
            _this.dataSource.makeRequest$('globalFilter', {
                selectedEntitiesIds: selectedEntitiesIds,
                entitiesListSize: _this.configuration.get('home-layout')['entitiesQuerySize']
            }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res && res.entitiesData.length > 0) {
                    // if some linked objects exist for the selected entities:
                    _this.dataSource.lastBubbleResponse = res.entitiesData;
                    _this.emitOuter('filterbubbleresponse', res.entitiesData);
                    _this.dataSource.renderPreviewsFromApolloQuery(res);
                    _this.dataSource.renderItemTags();
                }
                else {
                    // if the backend returns an empty list of results:
                    /** @type {?} */
                    var queryList_1 = [];
                    _this.dataSource.selectedBubbles.forEach((/**
                     * @param {?} b
                     * @return {?}
                     */
                    function (b) {
                        /** @type {?} */
                        var params = { entityId: b, entitiesListSize: 1 };
                        queryList_1.push(// make a query for each selected bubble
                        _this.dataSource.makeRequest$('getMissingBubble', params));
                    }));
                    // await for every missing bubble and build a custom response
                    forkJoin(queryList_1).subscribe((/**
                     * @param {?} forkres
                     * @return {?}
                     */
                    function (forkres) {
                        /** @type {?} */
                        var customBubbles = [];
                        forkres.forEach((/**
                         * @param {?} r
                         * @return {?}
                         */
                        function (r) { customBubbles.push({ count: 0, entity: r }); }));
                        _this.emitOuter('filterbubbleresponse', customBubbles);
                        _this.dataSource.renderPreviewsFromApolloQuery(res);
                        _this.dataSource.renderItemTags();
                    }));
                }
            }));
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
                    _this.dataSource.onDestroy();
                    break;
                case 'aw-home-layout.bubbleresultsviewallclick':
                    /** @type {?} */
                    var entityLinks = _this.dataSource.selectedBubbles.join(',');
                    /** @type {?} */
                    var basePath = _this.configuration.get('paths').searchBasePath;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [basePath],
                        queryParams: { 'entity-links': entityLinks }
                    });
                    break;
                case 'aw-home-layout.clearselection':
                    _this.emitOuter('clearselection');
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
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-hero.enter':
                case 'aw-hero.click':
                    /** @type {?} */
                    var query = payload.value;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [_this.configuration.get("paths").searchBasePath],
                        queryParams: { query: query }
                    });
                    break;
                case 'aw-hero.change':
                    _this.dataSource.autocompleteValue = payload.value;
                    _this.dataSource.onHeroChange(payload.value);
                    break;
                case 'aw-home-facets-wrapper.click':
                    _this.emitOuter('togglefilter', payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (payload.value) {
                        /** @type {?} */
                        var params_1 = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                            itemsPagination: {
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
                                    results: [
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
                case 'aw-home-item-tags-wrapper.click':
                    _this.emitOuter('tagclick', payload);
                    break;
                case 'aw-linked-objects.datarequest':
                    var currentPage = payload.currentPage;
                    /** @type {?} */
                    var params = {
                        selectedEntitiesIds: _this.dataSource.selectedBubbles,
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
                case 'aw-linked-objects.click':
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [_this.configuration.get("paths").schedaBasePath, payload.id]
                    });
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    _this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    var source = payload.source, type_1 = payload.type;
                    /** @type {?} */
                    var basePath = void 0;
                    if (source === "item") {
                        if (type_1 === "oggetto-culturale") {
                            basePath = _this.configuration.get("paths").schedaBasePath;
                        }
                        else {
                            basePath = _this.configuration.get("paths").entitaBasePath;
                        }
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath, payload.id]
                        });
                    }
                    else if (source === "showMore") {
                        /** @type {?} */
                        var query_1 = _this.dataSource.homeAutocompleteQuery;
                        basePath = _this.configuration.get("paths").searchBasePath;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { query: query_1 }
                        });
                    }
                    break;
                case 'aw-bubble-chart.selection':
                    _this.handleChartSelection(payload);
                    break;
                case 'aw-bubble-chart.lockfilter':
                    _this.emitOuter('lockfilter', payload); // let aw-home-facets-wrapper handle this event
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
            // console.log('(home) Apollo responded with:', response)
            if (!response) {
                return;
            }
            _this.dataSource.parseInitialRequest(response);
            if (_this.dataSource.bubblesEnabled) {
                _this.emitOuter('filterbubbleresponse', response.entitiesData);
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
        window.open(payload, "_blank");
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
    /** @type {?} */
    AwHomeLayoutEH.prototype.handleChartSelection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQUFvQywwQ0FBWTtJQUFoRDtRQUFBLHFFQTROQztRQTNOUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBaUwxQyxtQ0FBNkI7Ozs7UUFBRyxVQUFBLE9BQU87WUFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxFQUFBO1FBTU0sMEJBQW9COzs7O1FBQUcsVUFBQSxPQUFPOztnQkFDL0IsbUJBQW1CLEdBQUcsT0FBTztZQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUE7WUFDekMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO2dCQUMzQyxtQkFBbUIscUJBQUE7Z0JBQ25CLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO2FBQzdFLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxHQUFHO2dCQUNkLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEMsMERBQTBEO29CQUMxRCxLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUE7b0JBQ3JELEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVB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J0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0Lm91dGVybGlua2NsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBwYXlsb2FkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkRlc3Ryb3koKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5idWJibGVyZXN1bHRzdmlld2FsbGNsaWNrJzpcbiAgICAgICAgICBjb25zdCBlbnRpdHlMaW5rcyA9IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMuam9pbignLCcpO1xuICAgICAgICAgIGNvbnN0IGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aDtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGhdLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2VudGl0eS1saW5rcyc6IGVudGl0eUxpbmtzIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuY2xlYXJzZWxlY3Rpb24nOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGVhcnNlbGVjdGlvbicpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCcoaG9tZSkgdW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGU6ICcsIHR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaGVyby5lbnRlcic6XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2xpY2snOlxuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGF5bG9hZC52YWx1ZTtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLnNlYXJjaEJhc2VQYXRoXSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaGVyby5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5hdXRvY29tcGxldGVWYWx1ZSA9IHBheWxvYWQudmFsdWVcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25IZXJvQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndG9nZ2xlZmlsdGVyJywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgIGlmIChwYXlsb2FkLnZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbnB1dDogcGF5bG9hZC52YWx1ZSxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5OiBwYXlsb2FkLmlucHV0UGF5bG9hZC5yZXBsYWNlKC8tc2VhcmNoL2csICcnKS5yZXBsYWNlKC8tL2csICcgJyksXG4gICAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIG9mZnNldDogMCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdhdXRvQ29tcGxldGUnLCBwYXJhbXMpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmFsbGJhY2sgPSB7XG4gICAgICAgICAgICAgICAgICB0b3RhbGNvdW50OiAwLFxuICAgICAgICAgICAgICAgICAgcmVzdWx0czogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2ZhbGxiYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAvLyB1c2UgZmFsbGJhY2sgc3RyaW5nIGZyb20gY29uZmlndXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydhdXRvY29tcGxldGUtZmFsbGJhY2snXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYXV0b2NvbXBsZXRlLWZhbGxiYWNrJ10gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdOZXNzdW4gcmlzdWx0YXRvIHRyb3ZhdG8nXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlOiBmYWxsYmFjayB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlOiBmYWxsYmFjayB9LFxuICAgICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsIC8vIElEXG4gICAgICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2UgfSwgLy8gREFUQVxuICAgICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9IC8vIE9QVElPTlNcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3RhZ2NsaWNrJywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuZGF0YXJlcXVlc3QnOlxuICAgICAgICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcyxcbiAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICBvZmZzZXQ6IGN1cnJlbnRQYWdlICogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdCxcbiAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHBhcmFtcykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVzcG9uc2UnLCB7IHJlcyB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBmZXRjaCBhZGRpdGlvbmFsIGRhdGEuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5zY2hlZGFCYXNlUGF0aCwgcGF5bG9hZC5pZF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXIuY2xpY2tyZXN1bHQnOlxuICAgICAgICAgIHRoaXMuaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2socGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1hdXRvY29tcGxldGUuY2xpY2snOlxuICAgICAgICAgIGNvbnN0IHsgc291cmNlLCB0eXBlIH0gPSBwYXlsb2FkO1xuICAgICAgICAgIGxldCBiYXNlUGF0aDtcbiAgICAgICAgICBpZiAoc291cmNlID09PSBcIml0ZW1cIikge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwib2dnZXR0by1jdWx0dXJhbGVcIikge1xuICAgICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5zY2hlZGFCYXNlUGF0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLmVudGl0YUJhc2VQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aCwgcGF5bG9hZC5pZF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlID09PSBcInNob3dNb3JlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5kYXRhU291cmNlLmhvbWVBdXRvY29tcGxldGVRdWVyeTtcbiAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLnNlYXJjaEJhc2VQYXRoO1xuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aF0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFydFNlbGVjdGlvbihwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubG9ja2ZpbHRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCBwYXlsb2FkKSAvLyBsZXQgYXctaG9tZS1mYWNldHMtd3JhcHBlciBoYW5kbGUgdGhpcyBldmVudFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRmlsdGVycygpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuaW5pdGlhbEZpbHRlclJlcXVlc3QoKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnKGhvbWUpIEFwb2xsbyByZXNwb25kZWQgd2l0aDonLCByZXNwb25zZSlcbiAgICAgIGlmICghcmVzcG9uc2UpIHsgcmV0dXJuIH1cbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKTtcbiAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuYnViYmxlc0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgcmVzcG9uc2UuZW50aXRpZXNEYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayA9IHBheWxvYWQgPT4ge1xuICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldGNsaWNrJywgcGF5bG9hZClcbiAgfVxuXG4gIHB1YmxpYyBvdXRlckxpbmtDbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgd2luZG93Lm9wZW4ocGF5bG9hZCwgXCJfYmxhbmtcIik7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhcnRTZWxlY3Rpb24gPSBwYXlsb2FkID0+IHtcbiAgICBsZXQgc2VsZWN0ZWRFbnRpdGllc0lkcyA9IHBheWxvYWRcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzID0gcGF5bG9hZFxuICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydlbnRpdGllc1F1ZXJ5U2l6ZSddXG4gICAgfSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAocmVzICYmIHJlcy5lbnRpdGllc0RhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBpZiBzb21lIGxpbmtlZCBvYmplY3RzIGV4aXN0IGZvciB0aGUgc2VsZWN0ZWQgZW50aXRpZXM6XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sYXN0QnViYmxlUmVzcG9uc2UgPSByZXMuZW50aXRpZXNEYXRhXG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHJlcy5lbnRpdGllc0RhdGEpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzKVxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySXRlbVRhZ3MoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhlIGJhY2tlbmQgcmV0dXJucyBhbiBlbXB0eSBsaXN0IG9mIHJlc3VsdHM6XG4gICAgICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IFtdXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICBsZXQgcGFyYW1zID0geyBlbnRpdHlJZDogYiwgZW50aXRpZXNMaXN0U2l6ZTogMSB9XG4gICAgICAgICAgcXVlcnlMaXN0LnB1c2goIC8vIG1ha2UgYSBxdWVyeSBmb3IgZWFjaCBzZWxlY3RlZCBidWJibGVcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dldE1pc3NpbmdCdWJibGUnLCBwYXJhbXMpXG4gICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gYXdhaXQgZm9yIGV2ZXJ5IG1pc3NpbmcgYnViYmxlIGFuZCBidWlsZCBhIGN1c3RvbSByZXNwb25zZVxuICAgICAgICBmb3JrSm9pbihxdWVyeUxpc3QpLnN1YnNjcmliZShmb3JrcmVzID0+IHtcbiAgICAgICAgICBsZXQgY3VzdG9tQnViYmxlcyA9IFtdXG4gICAgICAgICAgZm9ya3Jlcy5mb3JFYWNoKHIgPT4geyBjdXN0b21CdWJibGVzLnB1c2goeyBjb3VudDogMCwgZW50aXR5OiByIH0pIH0pO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIGN1c3RvbUJ1YmJsZXMpO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXMpXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlckl0ZW1UYWdzKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbn1cbiJdfQ==