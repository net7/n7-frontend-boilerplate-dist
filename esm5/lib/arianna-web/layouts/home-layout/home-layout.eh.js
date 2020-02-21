/**
 * @fileoverview added by tsickle
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
                entitiesListSize: _this.configuration.get('bubble-chart')['bubbleLimit']
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
                case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                    _this.emitOuter('d3end', payload);
                    break;
                case 'aw-chart-tippy.select':
                    _this.emitOuter('select', payload);
                    break;
                case 'aw-hero.enter':
                    /** @type {?} */
                    var query = payload.value;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: [_this.configuration.get('paths').searchBasePath],
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
                    if (!payload.value ||
                        (typeof payload.value === 'string' && payload.value.trim().length === 0)) {
                        _this.emitOuter('facetswrapperclose', { facetId: payload });
                    }
                    else if (payload.value) {
                        _this.emitOuter('facetswrapperrequest', { facetId: payload });
                        // clear autocomplete results
                        _this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: null });
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
                                }
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                ;
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                _this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: _this.configuration });
                            }
                            else {
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response })
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
                            path: [basePath, payload.id, helpers.slugify(payload.title)]
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
                    else if (source === "extendsearch") { // click on <Cerca in tutti i campi> (call to action)
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [_this.configuration.get('paths').searchBasePath],
                            queryParams: {
                                query: _this.dataSource.autocompleteValue,
                                "query-all": 1
                            }
                        });
                    }
                    break;
                case 'aw-bubble-chart.selection':
                    _this.handleChartSelection(payload);
                    break;
                case 'aw-bubble-chart.lockfilter':
                    _this.emitOuter('lockfilter', payload); // let aw-home-facets-wrapper handle this event
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QztJQUFvQywwQ0FBWTtJQUFoRDtRQUFBLHFFQTRQQztRQTNQUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBK00xQyxtQ0FBNkI7Ozs7UUFBRyxVQUFBLE9BQU87WUFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxFQUFBO1FBTU0sMEJBQW9COzs7O1FBQUcsVUFBQSxPQUFPOztnQkFDN0IsbUJBQW1CLEdBQUcsT0FBTztZQUNuQyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFDMUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7WUFDNUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO2dCQUMzQyxtQkFBbUIscUJBQUE7Z0JBQ25CLGdCQUFnQixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsQ0FBQzthQUN4RSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsR0FBRztnQkFDZCxLQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztnQkFDN0MsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxN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b0JBQ3JGLE1BQU07Z0JBQ1Isb0RBQW9EO2dCQUNwRCxrQ0FBa0M7Z0JBQ2xDLHlCQUF5QjtnQkFDekIsY0FBYztnQkFDZCx3REFBd0Q7Z0JBQ3hELG9CQUFvQjtnQkFDcEIsdUNBQXVDO2dCQUN2QyxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsV0FBVztnQkFDWDtvQkFDRSw2REFBNkQ7b0JBQzdELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxvQ0FBVzs7OztJQUFuQjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQVE7WUFDeEQseURBQXlEO1lBQ3pELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTTthQUFFO1lBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDL0Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQU1NLHVDQUFjOzs7OztJQUFyQixVQUFzQixJQUFJLEVBQUUsT0FBTztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBc0NILHFCQUFDO0FBQUQsQ0FBQyxBQTVQRCxDQUFvQyxZQUFZLEdBNFAvQzs7Ozs7OztJQTNQQyxvQ0FBaUQ7Ozs7O0lBQ2pELHVDQUEyQjs7Ozs7SUFDM0IsK0JBQW1COztJQTZNbkIsdURBRUM7O0lBTUQsOENBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5sb2FkRmlsdGVycygpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQub3V0ZXJsaW5rY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IHBheWxvYWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmJ1YmJsZXJlc3VsdHN2aWV3YWxsY2xpY2snOlxuICAgICAgICAgIGNvbnN0IGVudGl0eUxpbmtzID0gdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcy5qb2luKCcsJyk7XG4gICAgICAgICAgY29uc3QgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNlYXJjaEJhc2VQYXRoO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aF0sXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnZW50aXR5LWxpbmtzJzogZW50aXR5TGlua3MgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5jbGVhcnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsZWFyc2VsZWN0aW9uJylcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyhob21lKSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZTogJywgdHlwZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiAvLyBib3VuY2UgdGhlIGV2ZW50LCBmcm9tIGJ1YmJsZS1jaGFydCB0byBjaGFydC10aXBweVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkM2VuZCcsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWNoYXJ0LXRpcHB5LnNlbGVjdCc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdCcsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uZW50ZXInOlxuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGF5bG9hZC52YWx1ZTtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aF0sXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyBxdWVyeSB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYXV0b2NvbXBsZXRlVmFsdWUgPSBwYXlsb2FkLnZhbHVlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkhlcm9DaGFuZ2UocGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0b2dnbGVmaWx0ZXInLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNoYW5nZSc6XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXBheWxvYWQudmFsdWUgfHxcbiAgICAgICAgICAgICh0eXBlb2YgcGF5bG9hZC52YWx1ZSA9PT0gJ3N0cmluZycgJiYgcGF5bG9hZC52YWx1ZS50cmltKCkubGVuZ3RoID09PSAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJjbG9zZScsIHsgZmFjZXRJZDogcGF5bG9hZCB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBheWxvYWQudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVxdWVzdCcsIHsgZmFjZXRJZDogcGF5bG9hZCB9KTtcbiAgICAgICAgICAgIC8vIGNsZWFyIGF1dG9jb21wbGV0ZSByZXN1bHRzXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLFxuICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2U6IG51bGwgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IHBheWxvYWQudmFsdWUsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eTogcGF5bG9hZC5pbnB1dFBheWxvYWQucmVwbGFjZSgvLXNlYXJjaC9nLCAnJykucmVwbGFjZSgvLS9nLCAnICcpLFxuICAgICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywgcGFyYW1zKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZhbGxiYWNrID0ge1xuICAgICAgICAgICAgICAgICAgdG90YWxjb3VudDogMCxcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGVudGl0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdmYWxsYmFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogLy8gdXNlIGZhbGxiYWNrIHN0cmluZyBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYXV0b2NvbXBsZXRlLWZhbGxiYWNrJ10gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2F1dG9jb21wbGV0ZS1mYWxsYmFjayddIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTmVzc3VuIHJpc3VsdGF0byB0cm92YXRvJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZTogZmFsbGJhY2sgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJyxcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZTogZmFsbGJhY2sgfSxcbiAgICAgICAgICAgICAgICAgIHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLCAvLyBJRFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlIH0sIC8vIERBVEFcbiAgICAgICAgICAgICAgICAgIHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSAvLyBPUFRJT05TXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5lbnRlcic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0U2VhcmNoRW50ZXIocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0YWdjbGljaycsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWxpbmtlZC1vYmplY3RzLmRhdGFyZXF1ZXN0JzpcbiAgICAgICAgICBjb25zdCB7IGN1cnJlbnRQYWdlIH0gPSBwYXlsb2FkO1xuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHM6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMsXG4gICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBjdXJyZW50UGFnZSAqIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXQsXG4gICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCBwYXJhbXMpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZGF0YXJlc3BvbnNlJywgeyByZXMgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gZmV0Y2ggYWRkaXRpb25hbCBkYXRhLicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXIuY2xpY2tyZXN1bHQnOlxuICAgICAgICAgIHRoaXMuaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2socGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1hdXRvY29tcGxldGUuY2xpY2snOlxuICAgICAgICAgIGNvbnN0IHsgc291cmNlLCB0eXBlIH0gPSBwYXlsb2FkO1xuICAgICAgICAgIGxldCBiYXNlUGF0aDtcbiAgICAgICAgICBpZiAoc291cmNlID09PSBcIml0ZW1cIikge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwib2dnZXR0by1jdWx0dXJhbGVcIikge1xuICAgICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5zY2hlZGFCYXNlUGF0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldChcInBhdGhzXCIpLmVudGl0YUJhc2VQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aCwgcGF5bG9hZC5pZCwgaGVscGVycy5zbHVnaWZ5KHBheWxvYWQudGl0bGUpXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgPT09IFwic2hvd01vcmVcIikge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmRhdGFTb3VyY2UuaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5O1xuICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwicGF0aHNcIikuc2VhcmNoQmFzZVBhdGg7XG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgICAgcGF0aDogW2Jhc2VQYXRoXSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcXVlcnkgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgPT09IFwiZXh0ZW5kc2VhcmNoXCIpIHsgLy8gY2xpY2sgb24gPENlcmNhIGluIHR1dHRpIGkgY2FtcGk+IChjYWxsIHRvIGFjdGlvbilcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aF0sXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMuZGF0YVNvdXJjZS5hdXRvY29tcGxldGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBcInF1ZXJ5LWFsbFwiOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFydFNlbGVjdGlvbihwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubG9ja2ZpbHRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCBwYXlsb2FkKSAvLyBsZXQgYXctaG9tZS1mYWNldHMtd3JhcHBlciBoYW5kbGUgdGhpcyBldmVudFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlICdhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGljayc6XG4gICAgICAgIC8vICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgLy8gICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAvLyAgICAgcGF0aDogW1xuICAgICAgICAvLyAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgICAgICAvLyAgICAgICBwYXlsb2FkLmlkLFxuICAgICAgICAvLyAgICAgICBoZWxwZXJzLnNsdWdpZnkocGF5bG9hZC5sYWJlbClcbiAgICAgICAgLy8gICAgIF1cbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJyhob21lKSB1bmhhbmRsZWQgb3V0ZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRGaWx0ZXJzKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5pbml0aWFsRmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcoaG9tZSkgQXBvbGxvIHJlc3BvbmRlZCB3aXRoOicsIHJlc3BvbnNlKVxuICAgICAgaWYgKCFyZXNwb25zZSkgeyByZXR1cm4gfVxuICAgICAgdGhpcy5kYXRhU291cmNlLnBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpO1xuICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5idWJibGVzRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCByZXNwb25zZS5lbnRpdGllc0RhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZVNpbXBsZUF1dG9jb21wbGV0ZUNsaWNrID0gcGF5bG9hZCA9PiB7XG4gICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0Y2xpY2snLCBwYXlsb2FkKVxuICB9XG5cbiAgcHVibGljIG91dGVyTGlua0NsaWNrKHR5cGUsIHBheWxvYWQpIHtcbiAgICB3aW5kb3cub3BlbihwYXlsb2FkLCBcIl9ibGFua1wiKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDaGFydFNlbGVjdGlvbiA9IHBheWxvYWQgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBwYXlsb2FkO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMgPSBwYXlsb2FkO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGlzdElzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcyxcbiAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpWydidWJibGVMaW1pdCddXG4gICAgfSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpc3RJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGlmIChyZXMgJiYgcmVzLmVudGl0aWVzRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGlmIHNvbWUgbGlua2VkIG9iamVjdHMgZXhpc3QgZm9yIHRoZSBzZWxlY3RlZCBlbnRpdGllczpcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxhc3RCdWJibGVSZXNwb25zZSA9IHJlcy5lbnRpdGllc0RhdGFcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgcmVzLmVudGl0aWVzRGF0YSk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXMpXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJJdGVtVGFncygpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGUgYmFja2VuZCByZXR1cm5zIGFuIGVtcHR5IGxpc3Qgb2YgcmVzdWx0czpcbiAgICAgICAgY29uc3QgcXVlcnlMaXN0ID0gW11cbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICAgIGxldCBwYXJhbXMgPSB7IGVudGl0eUlkOiBiLCBlbnRpdGllc0xpc3RTaXplOiAxIH1cbiAgICAgICAgICBxdWVyeUxpc3QucHVzaCggLy8gbWFrZSBhIHF1ZXJ5IGZvciBlYWNoIHNlbGVjdGVkIGJ1YmJsZVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2V0TWlzc2luZ0J1YmJsZScsIHBhcmFtcylcbiAgICAgICAgICApXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhd2FpdCBmb3IgZXZlcnkgbWlzc2luZyBidWJibGUgYW5kIGJ1aWxkIGEgY3VzdG9tIHJlc3BvbnNlXG4gICAgICAgIGZvcmtKb2luKHF1ZXJ5TGlzdCkuc3Vic2NyaWJlKGZvcmtyZXMgPT4ge1xuICAgICAgICAgIGxldCBjdXN0b21CdWJibGVzID0gW11cbiAgICAgICAgICBmb3JrcmVzLmZvckVhY2gociA9PiB7IGN1c3RvbUJ1YmJsZXMucHVzaCh7IGNvdW50OiAwLCBlbnRpdHk6IHIgfSkgfSk7XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgY3VzdG9tQnViYmxlcyk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcylcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySXRlbVRhZ3MoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufVxuIl19