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
                    _this.emitOuter('togglefilter', payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (payload.value) {
                        /** @type {?} */
                        var params_1 = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace('-search', ''),
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
                        var query = _this.dataSource.homeAutocompleteQuery;
                        basePath = _this.configuration.get("paths").searchBasePath;
                        _this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { query: query }
                        });
                    }
                    break;
                case 'aw-bubble-chart.selection':
                    /** @type {?} */
                    var selectedEntitiesIds = payload;
                    _this.dataSource.selectedBubbles = payload;
                    _this.dataSource.makeRequest$('globalFilter', {
                        selectedEntitiesIds: selectedEntitiesIds,
                        entitiesListSize: 500
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQUFvQywwQ0FBWTtJQUFoRDtRQUFBLHFFQW1NQztRQWxNUyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBMEwxQyxtQ0FBNkI7Ozs7UUFBRyxVQUFBLE9BQU87WUFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxFQUFBOztJQU1ILENBQUM7Ozs7SUE5TFEsK0JBQU07OztJQUFiO1FBQUEsaUJBc0tDO1FBcktDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsscUJBQXFCO29CQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO3dCQUMxQixPQUFPLEVBQUUsUUFBUTt3QkFDakIsSUFBSSxFQUFFLE9BQU87cUJBQ2QsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1IsS0FBSyx3QkFBd0I7b0JBQzNCLEtB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QyxDQUFDLEVBQUMsQ0FBQTt5QkFDSDtvQkFDSCxDQUFDLEVBQUMsQ0FBQTtvQkFDRixNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQSxDQUFDLCtDQUErQztvQkFDckYsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sb0NBQVc7Ozs7SUFBbkI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxRQUFRO1lBQ3hELHlEQUF5RDtZQUN6RCxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUFFLE9BQU07YUFBRTtZQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7Z0JBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUU7b0JBQ3JDLFFBQVEsVUFBQTtvQkFDUixTQUFTLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO2lCQUNyQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBTU0sdUNBQWM7Ozs7O0lBQXJCLFVBQXNCLElBQUksRUFBRSxPQUFPO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFSCxxQkFBQztBQUFELENBQUMsQUFuTUQsQ0FBb0MsWUFBWSxHQW1NL0M7Ozs7Ozs7SUFsTUMsb0NBQWlEOzs7OztJQUNqRCx1Q0FBMkI7Ozs7O0lBQzNCLCtCQUFtQjs7SUF3TG5CLHVEQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5sb2FkRmlsdGVycygpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQub3V0ZXJsaW5rY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IHBheWxvYWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuYnViYmxlcmVzdWx0c3ZpZXdhbGxjbGljayc6XG4gICAgICAgICAgY29uc3QgZW50aXR5TGlua3MgPSB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLmpvaW4oJywnKTtcbiAgICAgICAgICBjb25zdCBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGg7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogWyBiYXNlUGF0aCBdLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2VudGl0eS1saW5rcyc6IGVudGl0eUxpbmtzIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1oZXJvLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSGVyb0NoYW5nZShwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3RvZ2dsZWZpbHRlcicsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICBpZiAocGF5bG9hZC52YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IHBheWxvYWQudmFsdWUsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eTogcGF5bG9hZC5pbnB1dFBheWxvYWQucmVwbGFjZSgnLXNlYXJjaCcsICcnKSxcbiAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHBhcmFtcykuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIGxldCBmYWxsYmFjayA9IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsY291bnQ6IDAsXG4gICAgICAgICAgICAgICAgICByZXN1bHRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZmFsbGJhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IC8vIHVzZSBmYWxsYmFjayBzdHJpbmcgZnJvbSBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2F1dG9jb21wbGV0ZS1mYWxsYmFjayddID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydhdXRvY29tcGxldGUtZmFsbGJhY2snXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05lc3N1biByaXN1bHRhdG8gdHJvdmF0bydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJyZXNwb25zZScsIHsgZmFjZXRJZDogcGF5bG9hZCwgcmVzcG9uc2U6IGZhbGxiYWNrIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2U6IGZhbGxiYWNrIH0sXG4gICAgICAgICAgICAgICAgICB7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJyZXNwb25zZScsIHsgZmFjZXRJZDogcGF5bG9hZCwgcmVzcG9uc2UgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJywgLy8gSURcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZSB9LCAvLyBEQVRBXG4gICAgICAgICAgICAgICAgICB7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0gLy8gT1BUSU9OU1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuZW50ZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVGYWNldFNlYXJjaEVudGVyKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndGFnY2xpY2snLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5kYXRhcmVxdWVzdCc6XG4gICAgICAgICAgbGV0IHsgY3VycmVudFBhZ2UgfSA9IHBheWxvYWRcbiAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBjdXJyZW50UGFnZSAqIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXQsXG4gICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHBhcmFtcykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVzcG9uc2UnLCB7IHJlcyB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBmZXRjaCBhZGRpdGlvbmFsIGRhdGEuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1hdXRvY29tcGxldGUtd3JhcHBlci5jbGlja3Jlc3VsdCc6XG4gICAgICAgICAgdGhpcy5oYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayhwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWF1dG9jb21wbGV0ZS5jbGljayc6XG4gICAgICAgICAgY29uc3QgeyBzb3VyY2UgfSA9IHBheWxvYWQ7XG4gICAgICAgICAgbGV0IGJhc2VQYXRoO1xuICAgICAgICAgIGlmIChzb3VyY2UgPT09IFwiaXRlbVwiKSB7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5lbnRpdGFCYXNlUGF0aDtcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGgsIHBheWxvYWQuaWRdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gXCJzaG93TW9yZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuZGF0YVNvdXJjZS5ob21lQXV0b2NvbXBsZXRlUXVlcnk7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJwYXRoc1wiKS5zZWFyY2hCYXNlUGF0aDtcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGhdLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBxdWVyeSB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5zZWxlY3Rpb24nOlxuICAgICAgICAgIGxldCBzZWxlY3RlZEVudGl0aWVzSWRzID0gcGF5bG9hZFxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMgPSBwYXlsb2FkXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcyxcbiAgICAgICAgICAgIGVudGl0aWVzTGlzdFNpemU6IDUwMFxuICAgICAgICAgIH0pLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuZW50aXRpZXNEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gaWYgc29tZSBsaW5rZWQgb2JqZWN0cyBleGlzdCBmb3IgdGhlIHNlbGVjdGVkIGVudGl0aWVzOlxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGFzdEJ1YmJsZVJlc3BvbnNlID0gcmVzLmVudGl0aWVzRGF0YVxuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCByZXMuZW50aXRpZXNEYXRhKTtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcylcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlckl0ZW1UYWdzKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGlmIHRoZSBiYWNrZW5kIHJldHVybnMgYW4gZW1wdHkgbGlzdCBvZiByZXN1bHRzOlxuICAgICAgICAgICAgICBjb25zdCBxdWVyeUxpc3QgPSBbXVxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHsgZW50aXR5SWQ6IGIsIGVudGl0aWVzTGlzdFNpemU6IDEgfVxuICAgICAgICAgICAgICAgIHF1ZXJ5TGlzdC5wdXNoKCAvLyBtYWtlIGEgcXVlcnkgZm9yIGVhY2ggc2VsZWN0ZWQgYnViYmxlXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnZXRNaXNzaW5nQnViYmxlJywgcGFyYW1zKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIC8vIGF3YWl0IGZvciBldmVyeSBtaXNzaW5nIGJ1YmJsZSBhbmQgYnVpbGQgYSBjdXN0b20gcmVzcG9uc2VcbiAgICAgICAgICAgICAgZm9ya0pvaW4ocXVlcnlMaXN0KS5zdWJzY3JpYmUoZm9ya3JlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGN1c3RvbUJ1YmJsZXMgPSBbXVxuICAgICAgICAgICAgICAgIGZvcmtyZXMuZm9yRWFjaChyID0+IHsgY3VzdG9tQnViYmxlcy5wdXNoKHsgY291bnQ6IDAsIGVudGl0eTogciB9KSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBjdXN0b21CdWJibGVzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJJdGVtVGFncygpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmxvY2tmaWx0ZXInOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgcGF5bG9hZCkgLy8gbGV0IGF3LWhvbWUtZmFjZXRzLXdyYXBwZXIgaGFuZGxlIHRoaXMgZXZlbnRcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEZpbHRlcnMoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmluaXRpYWxGaWx0ZXJSZXF1ZXN0KCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJyhob21lKSBBcG9sbG8gcmVzcG9uZGVkIHdpdGg6JywgcmVzcG9uc2UpXG4gICAgICBpZiAoIXJlc3BvbnNlKSB7IHJldHVybiB9XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFyc2VJbml0aWFsUmVxdWVzdChyZXNwb25zZSk7XG4gICAgICBpZiAodGhpcy5kYXRhU291cmNlLmJ1YmJsZXNFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHtcbiAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICBmYWNldERhdGE6IHRoaXMuZGF0YVNvdXJjZS5mYWNldERhdGFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2sgPSBwYXlsb2FkID0+IHtcbiAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRjbGljaycsIHBheWxvYWQpXG4gIH1cblxuICBwdWJsaWMgb3V0ZXJMaW5rQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xuICAgIHdpbmRvdy5vcGVuKHBheWxvYWQsIFwiX2JsYW5rXCIpO1xuICB9XG5cbn1cbiJdfQ==