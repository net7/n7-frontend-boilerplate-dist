import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject, forkJoin } from 'rxjs';
import helpers from '../../../common/helpers';
var AwHomeLayoutEH = /** @class */ (function (_super) {
    __extends(AwHomeLayoutEH, _super);
    function AwHomeLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
        _this.handleSimpleAutocompleteClick = function (payload) {
            _this.emitOuter('facetclick', payload);
        };
        _this.handleChartSelection = function (payload) {
            var selectedEntitiesIds = payload;
            _this.dataSource.selectedBubbles = payload;
            _this.dataSource.resultsListIsLoading = true;
            _this.dataSource.makeRequest$('globalFilter', {
                selectedEntitiesIds: selectedEntitiesIds,
                entitiesListSize: _this.configuration.get('bubble-chart').bubbleLimit,
            }).subscribe(function (res) {
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
                    var queryList_1 = [];
                    _this.dataSource.selectedBubbles.forEach(function (b) {
                        var params = { entityId: b, entitiesListSize: 1 };
                        queryList_1.push(// make a query for each selected bubble
                        _this.dataSource.makeRequest$('getMissingBubble', params));
                    });
                    // await for every missing bubble and build a custom response
                    forkJoin(queryList_1).subscribe(function (forkres) {
                        var customBubbles = [];
                        forkres.forEach(function (r) { customBubbles.push({ count: 0, entity: r }); });
                        _this.emitOuter('filterbubbleresponse', customBubbles);
                        _this.dataSource.renderPreviewsFromApolloQuery(res);
                        _this.dataSource.renderItemTags();
                    });
                }
            });
        };
        return _this;
    }
    AwHomeLayoutEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-home-layout.init':
                    _this.dataSource.onInit(payload);
                    _this.loadFilters();
                    _this.configuration = payload.configuration;
                    // scroll top
                    window.scrollTo(0, 0);
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
                        var entityLinks = _this.dataSource.selectedBubbles.join(',');
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
        });
        this.outerEvents$.subscribe(function (_a) {
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
                        var query = helpers.escapeQuotes(payload.value);
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
                        var params = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                            itemsPagination: {
                                offset: 0, limit: _this.configuration.get('home-layout')['results-limit'],
                            },
                        };
                        _this.dataSource.makeRequest$('autoComplete', params).subscribe(function (response) {
                            if (response.results.length < 1) {
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
                        });
                    }
                    break;
                case 'aw-home-item-tags-wrapper.click':
                    _this.emitOuter('tagclick', payload);
                    break;
                case 'aw-linked-objects.datarequest':
                    {
                        var currentPage = payload.currentPage;
                        var params = {
                            selectedEntitiesIds: _this.dataSource.selectedBubbles,
                            itemsPagination: {
                                offset: currentPage * _this.dataSource.resultsLimit,
                                limit: _this.dataSource.resultsLimit,
                            },
                        };
                        _this.dataSource.makeRequest$('globalFilter', params).subscribe(function (res) {
                            if (res) {
                                _this.emitOuter('dataresponse', { res: res });
                            }
                            else {
                                console.warn('Unable to fetch additional data.');
                            }
                        });
                    }
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    _this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    {
                        var source = payload.source, payloadType = payload.type;
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
        });
    };
    AwHomeLayoutEH.prototype.loadFilters = function () {
        var _this = this;
        this.dataSource.initialFilterRequest().subscribe(function (response) {
            // console.log('(home) Apollo responded with:', response)
            if (!response) {
                return;
            }
            _this.dataSource.parseInitialRequest(response);
            if (_this.dataSource.bubblesEnabled) {
                _this.emitOuter('filterbubbleresponse', response.entitiesData);
            }
        });
    };
    AwHomeLayoutEH.prototype.outerLinkClick = function (type, payload) {
        window.open(payload, '_blank');
    };
    return AwHomeLayoutEH;
}(EventHandler));
export { AwHomeLayoutEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDO0lBQW9DLGtDQUFZO0lBQWhEO1FBQUEscUVBbVBDO1FBbFBTLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUF1TTFDLG1DQUE2QixHQUFHLFVBQUMsT0FBTztZQUM3QyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUE7UUFNTSwwQkFBb0IsR0FBRyxVQUFDLE9BQU87WUFDcEMsSUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUM7WUFDcEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQzVDLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTtnQkFDM0MsbUJBQW1CLHFCQUFBO2dCQUNuQixnQkFBZ0IsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXO2FBQ3JFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO2dCQUNmLEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2dCQUM3QyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RDLDBEQUEwRDtvQkFDMUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO29CQUN0RCxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDekQsS0FBSSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDbEM7cUJBQU07b0JBQ0wsbURBQW1EO29CQUNuRCxJQUFNLFdBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7d0JBQ3hDLElBQU0sTUFBTSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsQ0FBQzt3QkFDcEQsV0FBUyxDQUFDLElBQUksQ0FBRSx3Q0FBd0M7d0JBQ3RELEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUN6RCxDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDO29CQUNILDZEQUE2RDtvQkFDN0QsUUFBUSxDQUFDLFdBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQU87d0JBQ3BDLElBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQzt3QkFDekIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsSUFBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6RSxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLGFBQWEsQ0FBQyxDQUFDO3dCQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuRCxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQyxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBOztJQUNILENBQUM7SUE1T1EsK0JBQU0sR0FBYjtRQUFBLGlCQW9MQztRQW5MQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHFCQUFxQjtvQkFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUMzQyxhQUFhO29CQUNiLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN0QixNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTt3QkFDMUIsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLElBQUksRUFBRSxPQUFPO3FCQUNkLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssd0JBQXdCO29CQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUM1QixNQUFNO2dCQUNSLEtBQUssMENBQTBDO29CQUFFO3dCQUMvQyxJQUFNLFdBQVcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzlELElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQzt3QkFDaEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7NEJBQzFCLE9BQU8sRUFBRSxRQUFROzRCQUNqQixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBQ2hCLFdBQVcsRUFBRSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUU7eUJBQzdDLENBQUMsQ0FBQztxQkFDSjtvQkFDQyxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2pDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0QsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QixFQUFFLHFEQUFxRDtvQkFDakYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2pDLE1BQU07Z0JBQ1IsS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2dCQUNSLEtBQUssZUFBZTtvQkFBRTt3QkFDcEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2xELEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFOzRCQUMxQixPQUFPLEVBQUUsUUFBUTs0QkFDakIsSUFBSSxFQUFFLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDOzRCQUN0RCxXQUFXLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRTt5QkFDdkIsQ0FBQyxDQUFDO3FCQUNKO29CQUFDLE1BQU07Z0JBQ1IsS0FBSyxnQkFBZ0I7b0JBQ25CLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDbEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QyxNQUFNO2dCQUNSLEtBQUssOEJBQThCO29CQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDeEMsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsSUFDRSxDQUFDLE9BQU8sQ0FBQyxLQUFLOzJCQUNYLENBQUMsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFDM0U7d0JBQ0EsS0FBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO3FCQUM1RDt5QkFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7d0JBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzt3QkFDN0QsNkJBQTZCO3dCQUM3QixLQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FDN0IseUJBQXlCLEVBQ3pCLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUN2QyxDQUFDO3dCQUNGLElBQU0sTUFBTSxHQUFHOzRCQUNiLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSzs0QkFDcEIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzs0QkFDN0UsZUFBZSxFQUFFO2dDQUNmLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQzs2QkFDekU7eUJBQ0YsQ0FBQzt3QkFDRixLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTs0QkFDdEUsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0NBQy9CLElBQU0sUUFBUSxHQUFHO29DQUNmLFVBQVUsRUFBRSxDQUFDO29DQUNiLE9BQU8sRUFBRTt3Q0FDUDs0Q0FDRSxNQUFNLEVBQUU7Z0RBQ04sRUFBRSxFQUFFLFVBQVU7Z0RBQ2QsS0FBSyxFQUFFLHlDQUF5QztnREFDOUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsdUJBQXVCLENBQUM7b0RBQzVELENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztvREFDaEUsQ0FBQyxDQUFDLDBCQUEwQjs2Q0FDakM7eUNBQ0Y7cUNBQ0Y7aUNBQ0YsQ0FBQztnQ0FDRixvRkFBb0Y7Z0NBQ3BGLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUM3Qix5QkFBeUIsRUFDekIsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQzFDLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FDL0IsQ0FBQzs2QkFDSDtpQ0FBTTtnQ0FDTCwwRUFBMEU7Z0NBQzFFLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUM3Qix5QkFBeUIsRUFBRSxLQUFLO2dDQUNoQyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsVUFBQSxFQUFFLEVBQUUsT0FBTztnQ0FDekMsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUMvQixDQUFDOzZCQUNIO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO29CQUNELE1BQU07Z0JBQ1IsS0FBSyxpQ0FBaUM7b0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUFFO3dCQUM1QixJQUFBLGlDQUFXLENBQWE7d0JBQ2hDLElBQU0sTUFBTSxHQUFHOzRCQUNiLG1CQUFtQixFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZTs0QkFDcEQsZUFBZSxFQUFFO2dDQUNmLE1BQU0sRUFBRSxXQUFXLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO2dDQUNsRCxLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZOzZCQUNwQzt5QkFDRixDQUFDO3dCQUNGLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHOzRCQUNqRSxJQUFJLEdBQUcsRUFBRTtnQ0FDUCxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQzs2QkFDekM7aUNBQU07Z0NBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDOzZCQUNsRDt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjtvQkFBQyxNQUFNO2dCQUNSLEtBQUsscUNBQXFDO29CQUN4QyxLQUFJLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1IsS0FBSyw0QkFBNEI7b0JBQUU7d0JBQ3pCLElBQUEsdUJBQU0sRUFBRSwwQkFBaUIsQ0FBYTt3QkFDOUMsSUFBSSxRQUFRLFNBQUEsQ0FBQzt3QkFDYixJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7NEJBQ3JCLElBQUksV0FBVyxLQUFLLG1CQUFtQixFQUFFO2dDQUN2QyxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDOzZCQUMzRDtpQ0FBTTtnQ0FDTCxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDOzZCQUMzRDs0QkFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQ0FDMUIsT0FBTyxFQUFFLFFBQVE7Z0NBQ2pCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUM3RCxDQUFDLENBQUM7eUJBQ0o7NkJBQU0sSUFBSSxNQUFNLEtBQUssVUFBVSxFQUFFOzRCQUNoQyxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDOzRCQUNwRCxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDOzRCQUMxRCxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtnQ0FDMUIsT0FBTyxFQUFFLFFBQVE7Z0NBQ2pCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztnQ0FDaEIsV0FBVyxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUU7NkJBQ3ZCLENBQUMsQ0FBQzt5QkFDSjs2QkFBTSxJQUFJLE1BQU0sS0FBSyxjQUFjLEVBQUUsRUFBRSxxREFBcUQ7NEJBQzNGLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dDQUMxQixPQUFPLEVBQUUsUUFBUTtnQ0FDakIsSUFBSSxFQUFFLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDO2dDQUN0RCxXQUFXLEVBQUU7b0NBQ1gsS0FBSyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCO29DQUN4QyxXQUFXLEVBQUUsQ0FBQztpQ0FDZjs2QkFDRixDQUFDLENBQUM7eUJBQ0o7cUJBQ0Y7b0JBQUMsTUFBTTtnQkFDUixLQUFLLDJCQUEyQjtvQkFDOUIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuQyxNQUFNO2dCQUNSLEtBQUssNEJBQTRCO29CQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLCtDQUErQztvQkFDdEYsTUFBTTtnQkFDUjtvQkFDRSw2REFBNkQ7b0JBQzdELE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9DQUFXLEdBQW5CO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUN4RCx5REFBeUQ7WUFDekQsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDMUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO2dCQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1NLHVDQUFjLEdBQXJCLFVBQXNCLElBQUksRUFBRSxPQUFPO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFxQ0gscUJBQUM7QUFBRCxDQUFDLEFBblBELENBQW9DLFlBQVksR0FtUC9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgLy8gc2Nyb2xsIHRvcFxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQub3V0ZXJsaW5rY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IHBheWxvYWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkRlc3Ryb3koKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuYnViYmxlcmVzdWx0c3ZpZXdhbGxjbGljayc6IHtcbiAgICAgICAgICBjb25zdCBlbnRpdHlMaW5rcyA9IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMuam9pbignLCcpO1xuICAgICAgICAgIGNvbnN0IGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aDtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGhdLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2VudGl0eS1saW5rcyc6IGVudGl0eUxpbmtzIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuY2xlYXJzZWxlY3Rpb24nOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGVhcnNlbGVjdGlvbicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKGhvbWUpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlOiAnLCB0eXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiAvLyBib3VuY2UgdGhlIGV2ZW50LCBmcm9tIGJ1YmJsZS1jaGFydCB0byBjaGFydC10aXBweVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkM2VuZCcsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1jaGFydC10aXBweS5zZWxlY3QnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3QnLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaGVyby5lbnRlcic6IHtcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IGhlbHBlcnMuZXNjYXBlUXVvdGVzKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFt0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNlYXJjaEJhc2VQYXRoXSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHF1ZXJ5IH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYXV0b2NvbXBsZXRlVmFsdWUgPSBwYXlsb2FkLnZhbHVlO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkhlcm9DaGFuZ2UocGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0b2dnbGVmaWx0ZXInLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFwYXlsb2FkLnZhbHVlXG4gICAgICAgICAgICB8fCAodHlwZW9mIHBheWxvYWQudmFsdWUgPT09ICdzdHJpbmcnICYmIHBheWxvYWQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVyY2xvc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlcXVlc3QnLCB7IGZhY2V0SWQ6IHBheWxvYWQgfSk7XG4gICAgICAgICAgICAvLyBjbGVhciBhdXRvY29tcGxldGUgcmVzdWx0c1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJyxcbiAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlOiBudWxsIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbnB1dDogcGF5bG9hZC52YWx1ZSxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5OiBwYXlsb2FkLmlucHV0UGF5bG9hZC5yZXBsYWNlKC8tc2VhcmNoL2csICcnKS5yZXBsYWNlKC8tL2csICcgJyksXG4gICAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIG9mZnNldDogMCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdhdXRvQ29tcGxldGUnLCBwYXJhbXMpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrID0ge1xuICAgICAgICAgICAgICAgICAgdG90YWxjb3VudDogMCxcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGVudGl0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdmYWxsYmFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogLy8gdXNlIGZhbGxiYWNrIHN0cmluZyBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsnYXV0b2NvbXBsZXRlLWZhbGxiYWNrJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2F1dG9jb21wbGV0ZS1mYWxsYmFjayddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnTmVzc3VuIHJpc3VsdGF0byB0cm92YXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlOiBmYWxsYmFjayB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlOiBmYWxsYmFjayB9LFxuICAgICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9LFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJyZXNwb25zZScsIHsgZmFjZXRJZDogcGF5bG9hZCwgcmVzcG9uc2UgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJywgLy8gSURcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZSB9LCAvLyBEQVRBXG4gICAgICAgICAgICAgICAgICB7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0sIC8vIE9QVElPTlNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0YWdjbGljaycsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5kYXRhcmVxdWVzdCc6IHtcbiAgICAgICAgICBjb25zdCB7IGN1cnJlbnRQYWdlIH0gPSBwYXlsb2FkO1xuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHM6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMsXG4gICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBjdXJyZW50UGFnZSAqIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXQsXG4gICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHBhcmFtcykuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXNwb25zZScsIHsgcmVzIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gZmV0Y2ggYWRkaXRpb25hbCBkYXRhLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1hdXRvY29tcGxldGUtd3JhcHBlci5jbGlja3Jlc3VsdCc6XG4gICAgICAgICAgdGhpcy5oYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayhwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1hdXRvY29tcGxldGUuY2xpY2snOiB7XG4gICAgICAgICAgY29uc3QgeyBzb3VyY2UsIHR5cGU6IHBheWxvYWRUeXBlIH0gPSBwYXlsb2FkO1xuICAgICAgICAgIGxldCBiYXNlUGF0aDtcbiAgICAgICAgICBpZiAoc291cmNlID09PSAnaXRlbScpIHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkVHlwZSA9PT0gJ29nZ2V0dG8tY3VsdHVyYWxlJykge1xuICAgICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgICAgcGF0aDogW2Jhc2VQYXRoLCBwYXlsb2FkLmlkLCBoZWxwZXJzLnNsdWdpZnkocGF5bG9hZC50aXRsZSldLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdzaG93TW9yZScpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5kYXRhU291cmNlLmhvbWVBdXRvY29tcGxldGVRdWVyeTtcbiAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aDtcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgICBwYXRoOiBbYmFzZVBhdGhdLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBxdWVyeSB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdleHRlbmRzZWFyY2gnKSB7IC8vIGNsaWNrIG9uIDxDZXJjYSBpbiB0dXR0aSBpIGNhbXBpPiAoY2FsbCB0byBhY3Rpb24pXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGhdLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLmRhdGFTb3VyY2UuYXV0b2NvbXBsZXRlVmFsdWUsXG4gICAgICAgICAgICAgICAgJ3F1ZXJ5LWFsbCc6IDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5zZWxlY3Rpb24nOlxuICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhcnRTZWxlY3Rpb24ocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5sb2NrZmlsdGVyJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbG9ja2ZpbHRlcicsIHBheWxvYWQpOyAvLyBsZXQgYXctaG9tZS1mYWNldHMtd3JhcHBlciBoYW5kbGUgdGhpcyBldmVudFxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignKGhvbWUpIHVuaGFuZGxlZCBvdXRlciBldmVudCBvZiB0eXBlJywgdHlwZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEZpbHRlcnMoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmluaXRpYWxGaWx0ZXJSZXF1ZXN0KCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJyhob21lKSBBcG9sbG8gcmVzcG9uZGVkIHdpdGg6JywgcmVzcG9uc2UpXG4gICAgICBpZiAoIXJlc3BvbnNlKSB7IHJldHVybjsgfVxuICAgICAgdGhpcy5kYXRhU291cmNlLnBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpO1xuICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5idWJibGVzRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCByZXNwb25zZS5lbnRpdGllc0RhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZVNpbXBsZUF1dG9jb21wbGV0ZUNsaWNrID0gKHBheWxvYWQpID0+IHtcbiAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRjbGljaycsIHBheWxvYWQpO1xuICB9XG5cbiAgcHVibGljIG91dGVyTGlua0NsaWNrKHR5cGUsIHBheWxvYWQpIHtcbiAgICB3aW5kb3cub3BlbihwYXlsb2FkLCAnX2JsYW5rJyk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhcnRTZWxlY3Rpb24gPSAocGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBwYXlsb2FkO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMgPSBwYXlsb2FkO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGlzdElzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkcyxcbiAgICAgIGVudGl0aWVzTGlzdFNpemU6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2J1YmJsZS1jaGFydCcpLmJ1YmJsZUxpbWl0LFxuICAgIH0pLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpc3RJc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGlmIChyZXMgJiYgcmVzLmVudGl0aWVzRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGlmIHNvbWUgbGlua2VkIG9iamVjdHMgZXhpc3QgZm9yIHRoZSBzZWxlY3RlZCBlbnRpdGllczpcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmxhc3RCdWJibGVSZXNwb25zZSA9IHJlcy5lbnRpdGllc0RhdGE7XG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHJlcy5lbnRpdGllc0RhdGEpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGUgYmFja2VuZCByZXR1cm5zIGFuIGVtcHR5IGxpc3Qgb2YgcmVzdWx0czpcbiAgICAgICAgY29uc3QgcXVlcnlMaXN0ID0gW107XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaCgoYikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZW50aXR5SWQ6IGIsIGVudGl0aWVzTGlzdFNpemU6IDEgfTtcbiAgICAgICAgICBxdWVyeUxpc3QucHVzaCggLy8gbWFrZSBhIHF1ZXJ5IGZvciBlYWNoIHNlbGVjdGVkIGJ1YmJsZVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2V0TWlzc2luZ0J1YmJsZScsIHBhcmFtcyksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGF3YWl0IGZvciBldmVyeSBtaXNzaW5nIGJ1YmJsZSBhbmQgYnVpbGQgYSBjdXN0b20gcmVzcG9uc2VcbiAgICAgICAgZm9ya0pvaW4ocXVlcnlMaXN0KS5zdWJzY3JpYmUoKGZvcmtyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBjdXN0b21CdWJibGVzID0gW107XG4gICAgICAgICAgZm9ya3Jlcy5mb3JFYWNoKChyKSA9PiB7IGN1c3RvbUJ1YmJsZXMucHVzaCh7IGNvdW50OiAwLCBlbnRpdHk6IHIgfSk7IH0pO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIGN1c3RvbUJ1YmJsZXMpO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXMpO1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJJdGVtVGFncygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19