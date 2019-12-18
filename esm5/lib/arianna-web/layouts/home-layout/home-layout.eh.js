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
                entitiesListSize: _this.configuration.get('home-layout')['max-bubble-num']
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
                case 'aw-linked-objects.click':
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [_this.configuration.get("paths").schedaBasePath, payload]
                    });
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    _this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    var source = payload.source;
                    /** @type {?} */
                    var basePath = void 0;
                    if (source === "item") {
                        basePath = _this.configuration.get("paths").entitaBasePath;
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
                _this.emitOuter('filterbubbleresponse', {
                    response: response,
                    facetData: _this.dataSource.facetData
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQUFvQywwQ0FBWTtJQUFoRDtRQUFBLHFFQTJOQztRQTFOUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBZ0wxQyxtQ0FBNkI7Ozs7UUFBRyxVQUFBLE9BQU87WUFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxFQUFBO1FBTU0sMEJBQW9COzs7O1FBQUcsVUFBQSxPQUFPOztnQkFDL0IsbUJBQW1CLEdBQUcsT0FBTztZQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUE7WUFDekMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO2dCQUMzQyxtQkFBbUIscUJBQUE7Z0JBQ25CLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO2FBQzFFLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxHQUFHO2dCQUNkLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEMsMERBQTBEO29CQUMxRCxLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUE7b0JBQ3JELEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVB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QixLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQSxDQUFDLCtDQUErQztvQkFDckYsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sb0NBQVc7Ozs7SUFBbkI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxRQUFRO1lBQ3hELHlEQUF5RDtZQUN6RCxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUFFLE9BQU07YUFBRTtZQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7Z0JBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUU7b0JBQ3JDLFFBQVEsVUFBQTtvQkFDUixTQUFTLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO2lCQUNyQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBTU0sdUNBQWM7Ozs7O0lBQXJCLFVBQXNCLElBQUksRUFBRSxPQUFPO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFvQ0gscUJBQUM7QUFBRCxDQUFDLEFBM05ELENBQW9DLFlBQVksR0EyTi9DOzs7Ozs7O0lBMU5DLG9DQUFpRDs7Ozs7SUFDakQsdUNBQTJCOzs7OztJQUMzQiwrQkFBbUI7O0lBOEtuQix1REFFQzs7SUFNRCw4Q0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmxvYWRGaWx0ZXJzKCk7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5vdXRlcmxpbmtjbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogcGF5bG9hZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuYnViYmxlcmVzdWx0c3ZpZXdhbGxjbGljayc6XG4gICAgICAgICAgY29uc3QgZW50aXR5TGlua3MgPSB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLmpvaW4oJywnKTtcbiAgICAgICAgICBjb25zdCBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGg7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW2Jhc2VQYXRoXSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdlbnRpdHktbGlua3MnOiBlbnRpdHlMaW5rcyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xlYXJzZWxlY3Rpb24nKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKGhvbWUpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlOiAnLCB0eXBlKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uZW50ZXInOlxuICAgICAgICBjYXNlICdhdy1oZXJvLmNsaWNrJzpcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IHBheWxvYWQudmFsdWU7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5zZWFyY2hCYXNlUGF0aF0sXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyBxdWVyeSB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYXV0b2NvbXBsZXRlVmFsdWUgPSBwYXlsb2FkLnZhbHVlXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSGVyb0NoYW5nZShwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3RvZ2dsZWZpbHRlcicsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICBpZiAocGF5bG9hZC52YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IHBheWxvYWQudmFsdWUsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eTogcGF5bG9hZC5pbnB1dFBheWxvYWQucmVwbGFjZSgvLXNlYXJjaC9nLCAnJykucmVwbGFjZSgvLS9nLCAnICcpLFxuICAgICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywgcGFyYW1zKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZhbGxiYWNrID0ge1xuICAgICAgICAgICAgICAgICAgdG90YWxjb3VudDogMCxcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGVudGl0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdmYWxsYmFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogLy8gdXNlIGZhbGxiYWNrIHN0cmluZyBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYXV0b2NvbXBsZXRlLWZhbGxiYWNrJ10gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2F1dG9jb21wbGV0ZS1mYWxsYmFjayddIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTmVzc3VuIHJpc3VsdGF0byB0cm92YXRvJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZTogZmFsbGJhY2sgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJyxcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZTogZmFsbGJhY2sgfSxcbiAgICAgICAgICAgICAgICAgIHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLCAvLyBJRFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlIH0sIC8vIERBVEFcbiAgICAgICAgICAgICAgICAgIHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSAvLyBPUFRJT05TXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5lbnRlcic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0U2VhcmNoRW50ZXIocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0YWdjbGljaycsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmRhdGFyZXF1ZXN0JzpcbiAgICAgICAgICBsZXQgeyBjdXJyZW50UGFnZSB9ID0gcGF5bG9hZFxuICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRFbnRpdGllc0lkcyxcbiAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICBvZmZzZXQ6IGN1cnJlbnRQYWdlICogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdCxcbiAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywgcGFyYW1zKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXNwb25zZScsIHsgcmVzIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIGZldGNoIGFkZGl0aW9uYWwgZGF0YS4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLnNjaGVkYUJhc2VQYXRoLCBwYXlsb2FkXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1hdXRvY29tcGxldGUtd3JhcHBlci5jbGlja3Jlc3VsdCc6XG4gICAgICAgICAgdGhpcy5oYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayhwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWF1dG9jb21wbGV0ZS5jbGljayc6XG4gICAgICAgICAgY29uc3QgeyBzb3VyY2UgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgbGV0IGJhc2VQYXRoO1xuICAgICAgICAgIGlmIChzb3VyY2UgPT09IFwiaXRlbVwiKSB7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5lbnRpdGFCYXNlUGF0aDtcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGgsIHBheWxvYWQuaWRdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gXCJzaG93TW9yZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuZGF0YVNvdXJjZS5ob21lQXV0b2NvbXBsZXRlUXVlcnk7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5zZWFyY2hCYXNlUGF0aDtcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGhdLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBxdWVyeSB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5zZWxlY3Rpb24nOlxuICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhcnRTZWxlY3Rpb24ocGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmxvY2tmaWx0ZXInOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgcGF5bG9hZCkgLy8gbGV0IGF3LWhvbWUtZmFjZXRzLXdyYXBwZXIgaGFuZGxlIHRoaXMgZXZlbnRcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEZpbHRlcnMoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmluaXRpYWxGaWx0ZXJSZXF1ZXN0KCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJyhob21lKSBBcG9sbG8gcmVzcG9uZGVkIHdpdGg6JywgcmVzcG9uc2UpXG4gICAgICBpZiAoIXJlc3BvbnNlKSB7IHJldHVybiB9XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFyc2VJbml0aWFsUmVxdWVzdChyZXNwb25zZSk7XG4gICAgICBpZiAodGhpcy5kYXRhU291cmNlLmJ1YmJsZXNFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHtcbiAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICBmYWNldERhdGE6IHRoaXMuZGF0YVNvdXJjZS5mYWNldERhdGFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2sgPSBwYXlsb2FkID0+IHtcbiAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRjbGljaycsIHBheWxvYWQpXG4gIH1cblxuICBwdWJsaWMgb3V0ZXJMaW5rQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xuICAgIHdpbmRvdy5vcGVuKHBheWxvYWQsIFwiX2JsYW5rXCIpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUNoYXJ0U2VsZWN0aW9uID0gcGF5bG9hZCA9PiB7XG4gICAgbGV0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBwYXlsb2FkXG4gICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcyA9IHBheWxvYWRcbiAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBzZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgZW50aXRpZXNMaXN0U2l6ZTogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnbWF4LWJ1YmJsZS1udW0nXVxuICAgIH0pLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgaWYgKHJlcyAmJiByZXMuZW50aXRpZXNEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gaWYgc29tZSBsaW5rZWQgb2JqZWN0cyBleGlzdCBmb3IgdGhlIHNlbGVjdGVkIGVudGl0aWVzOlxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGFzdEJ1YmJsZVJlc3BvbnNlID0gcmVzLmVudGl0aWVzRGF0YVxuICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCByZXMuZW50aXRpZXNEYXRhKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcylcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlckl0ZW1UYWdzKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHRoZSBiYWNrZW5kIHJldHVybnMgYW4gZW1wdHkgbGlzdCBvZiByZXN1bHRzOlxuICAgICAgICBjb25zdCBxdWVyeUxpc3QgPSBbXVxuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHsgZW50aXR5SWQ6IGIsIGVudGl0aWVzTGlzdFNpemU6IDEgfVxuICAgICAgICAgIHF1ZXJ5TGlzdC5wdXNoKCAvLyBtYWtlIGEgcXVlcnkgZm9yIGVhY2ggc2VsZWN0ZWQgYnViYmxlXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnZXRNaXNzaW5nQnViYmxlJywgcGFyYW1zKVxuICAgICAgICAgIClcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGF3YWl0IGZvciBldmVyeSBtaXNzaW5nIGJ1YmJsZSBhbmQgYnVpbGQgYSBjdXN0b20gcmVzcG9uc2VcbiAgICAgICAgZm9ya0pvaW4ocXVlcnlMaXN0KS5zdWJzY3JpYmUoZm9ya3JlcyA9PiB7XG4gICAgICAgICAgbGV0IGN1c3RvbUJ1YmJsZXMgPSBbXVxuICAgICAgICAgIGZvcmtyZXMuZm9yRWFjaChyID0+IHsgY3VzdG9tQnViYmxlcy5wdXNoKHsgY291bnQ6IDAsIGVudGl0eTogciB9KSB9KTtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBjdXN0b21CdWJibGVzKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzKVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJJdGVtVGFncygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59XG4iXX0=