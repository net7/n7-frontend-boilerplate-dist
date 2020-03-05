/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/layouts/home-layout/home-layout.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject, forkJoin } from 'rxjs';
import helpers from '../../../common/helpers';
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
            _this.dataSource.resultsListIsLoading = true;
            _this.dataSource.makeRequest$('globalFilter', {
                selectedEntitiesIds: selectedEntitiesIds,
                entitiesListSize: _this.configuration.get('bubble-chart').bubbleLimit,
            }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.dataSource.resultsListIsLoading = false;
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
                        path: payload,
                    });
                    break;
                case 'aw-home-layout.destroy':
                    _this.dataSource.onDestroy();
                    break;
                case 'aw-home-layout.bubbleresultsviewallclick':
                    {
                        /** @type {?} */
                        var entityLinks = _this.dataSource.selectedBubbles.join(',');
                        /** @type {?} */
                        var basePath = _this.configuration.get('paths').searchBasePath;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { 'entity-links': entityLinks },
                        });
                    }
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
                case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                    _this.emitOuter('d3end', payload);
                    break;
                case 'aw-chart-tippy.select':
                    _this.emitOuter('select', payload);
                    break;
                case 'aw-hero.enter':
                    {
                        /** @type {?} */
                        var query = payload.value;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [_this.configuration.get('paths').searchBasePath],
                            queryParams: { query: query },
                        });
                    }
                    break;
                case 'aw-hero.change':
                    _this.dataSource.autocompleteValue = payload.value;
                    _this.dataSource.onHeroChange(payload.value);
                    break;
                case 'aw-home-facets-wrapper.click':
                    _this.emitOuter('togglefilter', payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (!payload.value
                        || (typeof payload.value === 'string' && payload.value.trim().length === 0)) {
                        _this.emitOuter('facetswrapperclose', { facetId: payload });
                    }
                    else if (payload.value) {
                        _this.emitOuter('facetswrapperrequest', { facetId: payload });
                        // clear autocomplete results
                        _this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: null });
                        /** @type {?} */
                        var params = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                            itemsPagination: {
                                offset: 0, limit: _this.configuration.get('home-layout')['results-limit'],
                            },
                        };
                        _this.dataSource.makeRequest$('autoComplete', params).subscribe((/**
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
                                                _this.configuration.get('home-layout')['autocomplete-fallback']
                                                    ? _this.configuration.get('home-layout')['autocomplete-fallback']
                                                    : 'Nessun risultato trovato',
                                            },
                                        },
                                    ],
                                };
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                _this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: _this.configuration });
                            }
                            else {
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response })
                                _this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                                { key: payload.value, response: response }, // DATA
                                { config: _this.configuration });
                            }
                        }));
                    }
                    break;
                case 'aw-home-item-tags-wrapper.click':
                    _this.emitOuter('tagclick', payload);
                    break;
                case 'aw-linked-objects.datarequest':
                    {
                        var currentPage = payload.currentPage;
                        /** @type {?} */
                        var params = {
                            selectedEntitiesIds: _this.dataSource.selectedBubbles,
                            itemsPagination: {
                                offset: currentPage * _this.dataSource.resultsLimit,
                                limit: _this.dataSource.resultsLimit,
                            },
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
                                console.warn('Unable to fetch additional data.');
                            }
                        }));
                    }
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    _this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    {
                        var source = payload.source, payloadType = payload.type;
                        /** @type {?} */
                        var basePath = void 0;
                        if (source === 'item') {
                            if (payloadType === 'oggetto-culturale') {
                                basePath = _this.configuration.get('paths').schedaBasePath;
                            }
                            else {
                                basePath = _this.configuration.get('paths').entitaBasePath;
                            }
                            _this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath, payload.id, helpers.slugify(payload.title)],
                            });
                        }
                        else if (source === 'showMore') {
                            /** @type {?} */
                            var query = _this.dataSource.homeAutocompleteQuery;
                            basePath = _this.configuration.get('paths').searchBasePath;
                            _this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath],
                                queryParams: { query: query },
                            });
                        }
                        else if (source === 'extendsearch') { // click on <Cerca in tutti i campi> (call to action)
                            _this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [_this.configuration.get('paths').searchBasePath],
                                queryParams: {
                                    query: _this.dataSource.autocompleteValue,
                                    'query-all': 1,
                                },
                            });
                        }
                    }
                    break;
                case 'aw-bubble-chart.selection':
                    _this.handleChartSelection(payload);
                    break;
                case 'aw-bubble-chart.lockfilter':
                    _this.emitOuter('lockfilter', payload); // let aw-home-facets-wrapper handle this event
                    break;
                default:
                    // console.warn('(home) unhandled outer event of type', type)
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
    /** @type {?} */
    AwHomeLayoutEH.prototype.handleChartSelection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUM7SUFBb0MsMENBQVk7SUFBaEQ7UUFBQSxxRUFpUEM7UUFoUFMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQXFNMUMsbUNBQTZCOzs7O1FBQUcsVUFBQyxPQUFPO1lBQzdDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQTtRQU1NLDBCQUFvQjs7OztRQUFHLFVBQUMsT0FBTzs7Z0JBQzlCLG1CQUFtQixHQUFHLE9BQU87WUFDbkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQzVDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTtnQkFDM0MsbUJBQW1CLHFCQUFBO2dCQUNuQixnQkFBZ0IsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXO2FBQ3JFLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxHQUFHO2dCQUNmLEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2dCQUM3QyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0s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QUM7SUFDTCxDQUFDOzs7OztJQUVPLG9DQUFXOzs7O0lBQW5CO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsUUFBUTtZQUN4RCx5REFBeUQ7WUFDekQsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO2dCQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBTU0sdUNBQWM7Ozs7O0lBQXJCLFVBQXNCLElBQUksRUFBRSxPQUFPO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFxQ0gscUJBQUM7QUFBRCxDQUFDLEFBalBELENBQW9DLFlBQVksR0FpUC9DOzs7Ozs7O0lBaFBDLG9DQUFpRDs7Ozs7SUFFakQsdUNBQTJCOzs7OztJQUUzQiwrQkFBbUI7O0lBaU1uQix1REFFQzs7SUFNRCw4Q0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5pbml0JzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLmxvYWRGaWx0ZXJzKCk7XHJcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5vdXRlcmxpbmtjbGljayc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICAgICAgcGF0aDogcGF5bG9hZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5idWJibGVyZXN1bHRzdmlld2FsbGNsaWNrJzoge1xyXG4gICAgICAgICAgY29uc3QgZW50aXR5TGlua3MgPSB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLmpvaW4oJywnKTtcclxuICAgICAgICAgIGNvbnN0IGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aDtcclxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxyXG4gICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGhdLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnZW50aXR5LWxpbmtzJzogZW50aXR5TGlua3MgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGVhcnNlbGVjdGlvbicpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybignKGhvbWUpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlOiAnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5kM2VuZCc6IC8vIGJvdW5jZSB0aGUgZXZlbnQsIGZyb20gYnViYmxlLWNoYXJ0IHRvIGNoYXJ0LXRpcHB5XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZDNlbmQnLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWNoYXJ0LXRpcHB5LnNlbGVjdCc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0JywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1oZXJvLmVudGVyJzoge1xyXG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBwYXlsb2FkLnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcclxuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXHJcbiAgICAgICAgICAgIHBhdGg6IFt0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNlYXJjaEJhc2VQYXRoXSxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcXVlcnkgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaGVyby5jaGFuZ2UnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmF1dG9jb21wbGV0ZVZhbHVlID0gcGF5bG9hZC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkhlcm9DaGFuZ2UocGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNsaWNrJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0b2dnbGVmaWx0ZXInLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2hhbmdlJzpcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXBheWxvYWQudmFsdWVcclxuICAgICAgICAgICAgfHwgKHR5cGVvZiBwYXlsb2FkLnZhbHVlID09PSAnc3RyaW5nJyAmJiBwYXlsb2FkLnZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJjbG9zZScsIHsgZmFjZXRJZDogcGF5bG9hZCB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocGF5bG9hZC52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlcXVlc3QnLCB7IGZhY2V0SWQ6IHBheWxvYWQgfSk7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIGF1dG9jb21wbGV0ZSByZXN1bHRzXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJyxcclxuICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2U6IG51bGwgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgIGlucHV0OiBwYXlsb2FkLnZhbHVlLFxyXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eTogcGF5bG9hZC5pbnB1dFBheWxvYWQucmVwbGFjZSgvLXNlYXJjaC9nLCAnJykucmVwbGFjZSgvLS9nLCAnICcpLFxyXG4gICAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHBhcmFtcykuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHRzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrID0ge1xyXG4gICAgICAgICAgICAgICAgICB0b3RhbGNvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICByZXN1bHRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZmFsbGJhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogLy8gdXNlIGZhbGxiYWNrIHN0cmluZyBmcm9tIGNvbmZpZ3VyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydhdXRvY29tcGxldGUtZmFsbGJhY2snXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydhdXRvY29tcGxldGUtZmFsbGJhY2snXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnTmVzc3VuIHJpc3VsdGF0byB0cm92YXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZTogZmFsbGJhY2sgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsXHJcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZTogZmFsbGJhY2sgfSxcclxuICAgICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJyZXNwb25zZScsIHsgZmFjZXRJZDogcGF5bG9hZCwgcmVzcG9uc2UgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsIC8vIElEXHJcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZSB9LCAvLyBEQVRBXHJcbiAgICAgICAgICAgICAgICAgIHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSwgLy8gT1BUSU9OU1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1pdGVtLXRhZ3Mtd3JhcHBlci5jbGljayc6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndGFnY2xpY2snLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmRhdGFyZXF1ZXN0Jzoge1xyXG4gICAgICAgICAgY29uc3QgeyBjdXJyZW50UGFnZSB9ID0gcGF5bG9hZDtcclxuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcyxcclxuICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgb2Zmc2V0OiBjdXJyZW50UGFnZSAqIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXQsXHJcbiAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywgcGFyYW1zKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXNwb25zZScsIHsgcmVzIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIGZldGNoIGFkZGl0aW9uYWwgZGF0YS4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1hdXRvY29tcGxldGUtd3JhcHBlci5jbGlja3Jlc3VsdCc6XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZVNpbXBsZUF1dG9jb21wbGV0ZUNsaWNrKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1hdXRvY29tcGxldGUuY2xpY2snOiB7XHJcbiAgICAgICAgICBjb25zdCB7IHNvdXJjZSwgdHlwZTogcGF5bG9hZFR5cGUgfSA9IHBheWxvYWQ7XHJcbiAgICAgICAgICBsZXQgYmFzZVBhdGg7XHJcbiAgICAgICAgICBpZiAoc291cmNlID09PSAnaXRlbScpIHtcclxuICAgICAgICAgICAgaWYgKHBheWxvYWRUeXBlID09PSAnb2dnZXR0by1jdWx0dXJhbGUnKSB7XHJcbiAgICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xyXG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxyXG4gICAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aCwgcGF5bG9hZC5pZCwgaGVscGVycy5zbHVnaWZ5KHBheWxvYWQudGl0bGUpXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ3Nob3dNb3JlJykge1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuZGF0YVNvdXJjZS5ob21lQXV0b2NvbXBsZXRlUXVlcnk7XHJcbiAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcclxuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGhdLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5IH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdleHRlbmRzZWFyY2gnKSB7IC8vIGNsaWNrIG9uIDxDZXJjYSBpbiB0dXR0aSBpIGNhbXBpPiAoY2FsbCB0byBhY3Rpb24pXHJcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXHJcbiAgICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGhdLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5kYXRhU291cmNlLmF1dG9jb21wbGV0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ3F1ZXJ5LWFsbCc6IDEsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuc2VsZWN0aW9uJzpcclxuICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhcnRTZWxlY3Rpb24ocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubG9ja2ZpbHRlcic6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbG9ja2ZpbHRlcicsIHBheWxvYWQpOyAvLyBsZXQgYXctaG9tZS1mYWNldHMtd3JhcHBlciBoYW5kbGUgdGhpcyBldmVudFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignKGhvbWUpIHVuaGFuZGxlZCBvdXRlciBldmVudCBvZiB0eXBlJywgdHlwZSlcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZEZpbHRlcnMoKSB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuaW5pdGlhbEZpbHRlclJlcXVlc3QoKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcoaG9tZSkgQXBvbGxvIHJlc3BvbmRlZCB3aXRoOicsIHJlc3BvbnNlKVxyXG4gICAgICBpZiAoIXJlc3BvbnNlKSB7IHJldHVybjsgfVxyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFyc2VJbml0aWFsUmVxdWVzdChyZXNwb25zZSk7XHJcbiAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuYnViYmxlc0VuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCByZXNwb25zZS5lbnRpdGllc0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRjbGljaycsIHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG91dGVyTGlua0NsaWNrKHR5cGUsIHBheWxvYWQpIHtcclxuICAgIHdpbmRvdy5vcGVuKHBheWxvYWQsICdfYmxhbmsnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVDaGFydFNlbGVjdGlvbiA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEVudGl0aWVzSWRzID0gcGF5bG9hZDtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMgPSBwYXlsb2FkO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaXN0SXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcclxuICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcyxcclxuICAgICAgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYnViYmxlLWNoYXJ0JykuYnViYmxlTGltaXQsXHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpc3RJc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgaWYgKHJlcyAmJiByZXMuZW50aXRpZXNEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBpZiBzb21lIGxpbmtlZCBvYmplY3RzIGV4aXN0IGZvciB0aGUgc2VsZWN0ZWQgZW50aXRpZXM6XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxhc3RCdWJibGVSZXNwb25zZSA9IHJlcy5lbnRpdGllc0RhdGE7XHJcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgcmVzLmVudGl0aWVzRGF0YSk7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcyk7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlckl0ZW1UYWdzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIGJhY2tlbmQgcmV0dXJucyBhbiBlbXB0eSBsaXN0IG9mIHJlc3VsdHM6XHJcbiAgICAgICAgY29uc3QgcXVlcnlMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKChiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVudGl0eUlkOiBiLCBlbnRpdGllc0xpc3RTaXplOiAxIH07XHJcbiAgICAgICAgICBxdWVyeUxpc3QucHVzaCggLy8gbWFrZSBhIHF1ZXJ5IGZvciBlYWNoIHNlbGVjdGVkIGJ1YmJsZVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnZXRNaXNzaW5nQnViYmxlJywgcGFyYW1zKSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gYXdhaXQgZm9yIGV2ZXJ5IG1pc3NpbmcgYnViYmxlIGFuZCBidWlsZCBhIGN1c3RvbSByZXNwb25zZVxyXG4gICAgICAgIGZvcmtKb2luKHF1ZXJ5TGlzdCkuc3Vic2NyaWJlKChmb3JrcmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjdXN0b21CdWJibGVzID0gW107XHJcbiAgICAgICAgICBmb3JrcmVzLmZvckVhY2goKHIpID0+IHsgY3VzdG9tQnViYmxlcy5wdXNoKHsgY291bnQ6IDAsIGVudGl0eTogciB9KTsgfSk7XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBjdXN0b21CdWJibGVzKTtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXMpO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlckl0ZW1UYWdzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=