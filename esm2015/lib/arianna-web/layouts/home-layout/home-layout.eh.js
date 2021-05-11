import { EventHandler } from '@n7-frontend/core';
import { Subject, forkJoin } from 'rxjs';
import helpers from '../../../common/helpers';
export class AwHomeLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handleSimpleAutocompleteClick = (payload) => {
            this.emitOuter('facetclick', payload);
        };
        this.handleChartSelection = (payload) => {
            const selectedEntitiesIds = payload;
            this.dataSource.selectedBubbles = payload;
            this.dataSource.resultsListIsLoading = true;
            this.dataSource.makeRequest$('globalFilter', {
                selectedEntitiesIds,
                entitiesListSize: this.configuration.get('bubble-chart').bubbleLimit,
            }).subscribe((res) => {
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
                    const queryList = [];
                    this.dataSource.selectedBubbles.forEach((b) => {
                        const params = { entityId: b, entitiesListSize: 1 };
                        queryList.push(// make a query for each selected bubble
                        this.dataSource.makeRequest$('getMissingBubble', params));
                    });
                    // await for every missing bubble and build a custom response
                    forkJoin(queryList).subscribe((forkres) => {
                        const customBubbles = [];
                        forkres.forEach((r) => { customBubbles.push({ count: 0, entity: r }); });
                        this.emitOuter('filterbubbleresponse', customBubbles);
                        this.dataSource.renderPreviewsFromApolloQuery(res);
                        this.dataSource.renderItemTags();
                    });
                }
            });
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.init':
                    this.dataSource.onInit(payload);
                    this.loadFilters();
                    this.configuration = payload.configuration;
                    // scroll top
                    window.scrollTo(0, 0);
                    break;
                case 'aw-home-layout.outerlinkclick':
                    this.emitGlobal('navigate', {
                        handler: 'router',
                        path: payload,
                    });
                    break;
                case 'aw-home-layout.destroy':
                    this.dataSource.onDestroy();
                    break;
                case 'aw-home-layout.bubbleresultsviewallclick':
                    {
                        const entityLinks = this.dataSource.selectedBubbles.join(',');
                        const basePath = this.configuration.get('paths').searchBasePath;
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [basePath],
                            queryParams: { 'entity-links': entityLinks },
                        });
                    }
                    break;
                case 'aw-home-layout.clearselection':
                    this.emitOuter('clearselection');
                    break;
                default:
                    console.warn('(home) unhandled inner event of type: ', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-bubble-chart.d3end': // bounce the event, from bubble-chart to chart-tippy
                    this.emitOuter('d3end', payload);
                    break;
                case 'aw-chart-tippy.select':
                    this.emitOuter('select', payload);
                    break;
                case 'aw-hero.enter':
                    {
                        const query = helpers.escapeQuotes(payload.value);
                        this.emitGlobal('navigate', {
                            handler: 'router',
                            path: [this.configuration.get('paths').searchBasePath],
                            queryParams: { query },
                        });
                    }
                    break;
                case 'aw-hero.change':
                    this.dataSource.autocompleteValue = payload.value;
                    this.dataSource.onHeroChange(payload.value);
                    break;
                case 'aw-home-facets-wrapper.click':
                    this.emitOuter('togglefilter', payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (!payload.value
                        || (typeof payload.value === 'string' && payload.value.trim().length === 0)) {
                        this.emitOuter('facetswrapperclose', { facetId: payload });
                    }
                    else if (payload.value) {
                        this.emitOuter('facetswrapperrequest', { facetId: payload });
                        // clear autocomplete results
                        this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: null });
                        const params = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace(/-search/g, '').replace(/-/g, ' '),
                            itemsPagination: {
                                offset: 0, limit: this.configuration.get('home-layout')['results-limit'],
                            },
                        };
                        this.dataSource.makeRequest$('autoComplete', params).subscribe((response) => {
                            if (response.results.length < 1) {
                                const fallback = {
                                    totalcount: 0,
                                    results: [
                                        {
                                            entity: {
                                                id: 'fallback',
                                                label: // use fallback string from configuration
                                                this.configuration.get('home-layout')['autocomplete-fallback']
                                                    ? this.configuration.get('home-layout')['autocomplete-fallback']
                                                    : 'Nessun risultato trovato',
                                            },
                                        },
                                    ],
                                };
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response: fallback })
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', { key: payload.value, response: fallback }, { config: this.configuration });
                            }
                            else {
                                // this.emitOuter('facetswrapperresponse', { facetId: payload, response })
                                this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                                { key: payload.value, response }, // DATA
                                { config: this.configuration });
                            }
                        });
                    }
                    break;
                case 'aw-home-item-tags-wrapper.click':
                    this.emitOuter('tagclick', payload);
                    break;
                case 'aw-linked-objects.datarequest':
                    {
                        const { currentPage } = payload;
                        const params = {
                            selectedEntitiesIds: this.dataSource.selectedBubbles,
                            itemsPagination: {
                                offset: currentPage * this.dataSource.resultsLimit,
                                limit: this.dataSource.resultsLimit,
                            },
                        };
                        this.dataSource.makeRequest$('globalFilter', params).subscribe((res) => {
                            if (res) {
                                this.emitOuter('dataresponse', { res });
                            }
                            else {
                                console.warn('Unable to fetch additional data.');
                            }
                        });
                    }
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    this.handleSimpleAutocompleteClick(payload);
                    break;
                case 'aw-home-autocomplete.click':
                    {
                        const { source, type: payloadType } = payload;
                        let basePath;
                        if (source === 'item') {
                            if (payloadType === 'oggetto-culturale') {
                                basePath = this.configuration.get('paths').schedaBasePath;
                            }
                            else {
                                basePath = this.configuration.get('paths').entitaBasePath;
                            }
                            this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath, payload.id, helpers.slugify(payload.title)],
                            });
                        }
                        else if (source === 'showMore') {
                            const query = this.dataSource.homeAutocompleteQuery;
                            basePath = this.configuration.get('paths').searchBasePath;
                            this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [basePath],
                                queryParams: { query },
                            });
                        }
                        else if (source === 'extendsearch') { // click on <Cerca in tutti i campi> (call to action)
                            this.emitGlobal('navigate', {
                                handler: 'router',
                                path: [this.configuration.get('paths').searchBasePath],
                                queryParams: {
                                    query: this.dataSource.autocompleteValue,
                                    'query-all': 1,
                                },
                            });
                        }
                    }
                    break;
                case 'aw-bubble-chart.selection':
                    this.handleChartSelection(payload);
                    break;
                case 'aw-bubble-chart.lockfilter':
                    this.emitOuter('lockfilter', payload); // let aw-home-facets-wrapper handle this event
                    break;
                default:
                    // console.warn('(home) unhandled outer event of type', type)
                    break;
            }
        });
    }
    loadFilters() {
        this.dataSource.initialFilterRequest().subscribe((response) => {
            // console.log('(home) Apollo responded with:', response)
            if (!response) {
                return;
            }
            this.dataSource.parseInitialRequest(response);
            if (this.dataSource.bubblesEnabled) {
                this.emitOuter('filterbubbleresponse', response.entitiesData);
            }
        });
    }
    outerLinkClick(type, payload) {
        window.open(payload, '_blank');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsTUFBTSxPQUFPLGNBQWUsU0FBUSxZQUFZO0lBQWhEOztRQUNVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQXVNMUMsa0NBQTZCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUE7UUFNTSx5QkFBb0IsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hDLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUU7Z0JBQzNDLG1CQUFtQjtnQkFDbkIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVzthQUNyRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2dCQUM3QyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RDLDBEQUEwRDtvQkFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO29CQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDbEM7cUJBQU07b0JBQ0wsbURBQW1EO29CQUNuRCxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUM1QyxNQUFNLE1BQU0sR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ3BELFNBQVMsQ0FBQyxJQUFJLENBQUUsd0NBQXdDO3dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FDekQsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztvQkFDSCw2REFBNkQ7b0JBQzdELFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTt3QkFDeEMsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO3dCQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLGFBQWEsQ0FBQyxDQUFDO3dCQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQyxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQTVPUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsscUJBQXFCO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLGFBQWE7b0JBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO3dCQUMxQixPQUFPLEVBQUUsUUFBUTt3QkFDakIsSUFBSSxFQUFFLE9BQU87cUJBQ2QsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1IsS0FBSyx3QkFBd0I7b0JBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1IsS0FBSywwQ0FBMEM7b0JBQUU7d0JBQy9DLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDOUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDO3dCQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTs0QkFDMUIsT0FBTyxFQUFFLFFBQVE7NEJBQ2pCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFDaEIsV0FBVyxFQUFFLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRTt5QkFDN0MsQ0FBQyxDQUFDO3FCQUNKO29CQUNDLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDakMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM3RCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QixFQUFFLHFEQUFxRDtvQkFDakYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2pDLE1BQU07Z0JBQ1IsS0FBSyx1QkFBdUI7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxNQUFNO2dCQUNSLEtBQUssZUFBZTtvQkFBRTt3QkFDcEIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFOzRCQUMxQixPQUFPLEVBQUUsUUFBUTs0QkFDakIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDOzRCQUN0RCxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUU7eUJBQ3ZCLENBQUMsQ0FBQztxQkFDSjtvQkFBQyxNQUFNO2dCQUNSLEtBQUssZ0JBQWdCO29CQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLDhCQUE4QjtvQkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3hDLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQ0UsQ0FBQyxPQUFPLENBQUMsS0FBSzsyQkFDWCxDQUFDLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQzNFO3dCQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztxQkFDNUQ7eUJBQU0sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO3dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7d0JBQzdELDZCQUE2Qjt3QkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQzdCLHlCQUF5QixFQUN6QixFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDdkMsQ0FBQzt3QkFDRixNQUFNLE1BQU0sR0FBRzs0QkFDYixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7NEJBQ3BCLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7NEJBQzdFLGVBQWUsRUFBRTtnQ0FDZixNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUM7NkJBQ3pFO3lCQUNGLENBQUM7d0JBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOzRCQUMxRSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQ0FDL0IsTUFBTSxRQUFRLEdBQUc7b0NBQ2YsVUFBVSxFQUFFLENBQUM7b0NBQ2IsT0FBTyxFQUFFO3dDQUNQOzRDQUNFLE1BQU0sRUFBRTtnREFDTixFQUFFLEVBQUUsVUFBVTtnREFDZCxLQUFLLEVBQUUseUNBQXlDO2dEQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztvREFDNUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO29EQUNoRSxDQUFDLENBQUMsMEJBQTBCOzZDQUNqQzt5Q0FDRjtxQ0FDRjtpQ0FDRixDQUFDO2dDQUNGLG9GQUFvRjtnQ0FDcEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQzdCLHlCQUF5QixFQUN6QixFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFDMUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUMvQixDQUFDOzZCQUNIO2lDQUFNO2dDQUNMLDBFQUEwRTtnQ0FDMUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQzdCLHlCQUF5QixFQUFFLEtBQUs7Z0NBQ2hDLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTztnQ0FDekMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUMvQixDQUFDOzZCQUNIO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO29CQUNELE1BQU07Z0JBQ1IsS0FBSyxpQ0FBaUM7b0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUFFO3dCQUNwQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxDQUFDO3dCQUNoQyxNQUFNLE1BQU0sR0FBRzs0QkFDYixtQkFBbUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWU7NEJBQ3BELGVBQWUsRUFBRTtnQ0FDZixNQUFNLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTtnQ0FDbEQsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTs2QkFDcEM7eUJBQ0YsQ0FBQzt3QkFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7NEJBQ3JFLElBQUksR0FBRyxFQUFFO2dDQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs2QkFDekM7aUNBQU07Z0NBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDOzZCQUNsRDt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjtvQkFBQyxNQUFNO2dCQUNSLEtBQUsscUNBQXFDO29CQUN4QyxJQUFJLENBQUMsNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVDLE1BQU07Z0JBQ1IsS0FBSyw0QkFBNEI7b0JBQUU7d0JBQ2pDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQzt3QkFDOUMsSUFBSSxRQUFRLENBQUM7d0JBQ2IsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFOzRCQUNyQixJQUFJLFdBQVcsS0FBSyxtQkFBbUIsRUFBRTtnQ0FDdkMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQzs2QkFDM0Q7aUNBQU07Z0NBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQzs2QkFDM0Q7NEJBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0NBQzFCLE9BQU8sRUFBRSxRQUFRO2dDQUNqQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDN0QsQ0FBQyxDQUFDO3lCQUNKOzZCQUFNLElBQUksTUFBTSxLQUFLLFVBQVUsRUFBRTs0QkFDaEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzs0QkFDcEQsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQzs0QkFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0NBQzFCLE9BQU8sRUFBRSxRQUFRO2dDQUNqQixJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0NBQ2hCLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRTs2QkFDdkIsQ0FBQyxDQUFDO3lCQUNKOzZCQUFNLElBQUksTUFBTSxLQUFLLGNBQWMsRUFBRSxFQUFFLHFEQUFxRDs0QkFDM0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0NBQzFCLE9BQU8sRUFBRSxRQUFRO2dDQUNqQixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUM7Z0NBQ3RELFdBQVcsRUFBRTtvQ0FDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7b0NBQ3hDLFdBQVcsRUFBRSxDQUFDO2lDQUNmOzZCQUNGLENBQUMsQ0FBQzt5QkFDSjtxQkFDRjtvQkFBQyxNQUFNO2dCQUNSLEtBQUssMkJBQTJCO29CQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25DLE1BQU07Z0JBQ1IsS0FBSyw0QkFBNEI7b0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsK0NBQStDO29CQUN0RixNQUFNO2dCQUNSO29CQUNFLDZEQUE2RDtvQkFDN0QsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDNUQseURBQXlEO1lBQ3pELElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDL0Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFNTSxjQUFjLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQXFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcblxuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmxvYWRGaWx0ZXJzKCk7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIC8vIHNjcm9sbCB0b3BcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0Lm91dGVybGlua2NsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBwYXlsb2FkLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmJ1YmJsZXJlc3VsdHN2aWV3YWxsY2xpY2snOiB7XG4gICAgICAgICAgY29uc3QgZW50aXR5TGlua3MgPSB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLmpvaW4oJywnKTtcbiAgICAgICAgICBjb25zdCBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGg7XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW2Jhc2VQYXRoXSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdlbnRpdHktbGlua3MnOiBlbnRpdHlMaW5rcyB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xlYXJzZWxlY3Rpb24nKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyhob21lKSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZTogJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmQzZW5kJzogLy8gYm91bmNlIHRoZSBldmVudCwgZnJvbSBidWJibGUtY2hhcnQgdG8gY2hhcnQtdGlwcHlcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZDNlbmQnLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctY2hhcnQtdGlwcHkuc2VsZWN0JzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0JywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uZW50ZXInOiB7XG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBoZWxwZXJzLmVzY2FwZVF1b3RlcyhwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aF0sXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyBxdWVyeSB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1oZXJvLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmF1dG9jb21wbGV0ZVZhbHVlID0gcGF5bG9hZC52YWx1ZTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25IZXJvQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndG9nZ2xlZmlsdGVyJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhcGF5bG9hZC52YWx1ZVxuICAgICAgICAgICAgfHwgKHR5cGVvZiBwYXlsb2FkLnZhbHVlID09PSAnc3RyaW5nJyAmJiBwYXlsb2FkLnZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcmNsb3NlJywgeyBmYWNldElkOiBwYXlsb2FkIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGF5bG9hZC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJyZXF1ZXN0JywgeyBmYWNldElkOiBwYXlsb2FkIH0pO1xuICAgICAgICAgICAgLy8gY2xlYXIgYXV0b2NvbXBsZXRlIHJlc3VsdHNcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsXG4gICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZTogbnVsbCB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IHBheWxvYWQudmFsdWUsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eTogcGF5bG9hZC5pbnB1dFBheWxvYWQucmVwbGFjZSgvLXNlYXJjaC9nLCAnJykucmVwbGFjZSgvLS9nLCAnICcpLFxuICAgICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywgcGFyYW1zKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFjayA9IHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsY291bnQ6IDAsXG4gICAgICAgICAgICAgICAgICByZXN1bHRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZmFsbGJhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IC8vIHVzZSBmYWxsYmFjayBzdHJpbmcgZnJvbSBjb25maWd1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2F1dG9jb21wbGV0ZS1mYWxsYmFjayddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydhdXRvY29tcGxldGUtZmFsbGJhY2snXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ05lc3N1biByaXN1bHRhdG8gdHJvdmF0bycsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZTogZmFsbGJhY2sgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJyxcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZTogZmFsbGJhY2sgfSxcbiAgICAgICAgICAgICAgICAgIHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsIC8vIElEXG4gICAgICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2UgfSwgLy8gREFUQVxuICAgICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9LCAvLyBPUFRJT05TXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigndGFnY2xpY2snLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuZGF0YXJlcXVlc3QnOiB7XG4gICAgICAgICAgY29uc3QgeyBjdXJyZW50UGFnZSB9ID0gcGF5bG9hZDtcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLFxuICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgIG9mZnNldDogY3VycmVudFBhZ2UgKiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0LFxuICAgICAgICAgICAgICBsaW1pdDogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCBwYXJhbXMpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVzcG9uc2UnLCB7IHJlcyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIGZldGNoIGFkZGl0aW9uYWwgZGF0YS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXIuY2xpY2tyZXN1bHQnOlxuICAgICAgICAgIHRoaXMuaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2socGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtYXV0b2NvbXBsZXRlLmNsaWNrJzoge1xuICAgICAgICAgIGNvbnN0IHsgc291cmNlLCB0eXBlOiBwYXlsb2FkVHlwZSB9ID0gcGF5bG9hZDtcbiAgICAgICAgICBsZXQgYmFzZVBhdGg7XG4gICAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ2l0ZW0nKSB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZFR5cGUgPT09ICdvZ2dldHRvLWN1bHR1cmFsZScpIHtcbiAgICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aCwgcGF5bG9hZC5pZCwgaGVscGVycy5zbHVnaWZ5KHBheWxvYWQudGl0bGUpXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlID09PSAnc2hvd01vcmUnKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuZGF0YVNvdXJjZS5ob21lQXV0b2NvbXBsZXRlUXVlcnk7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGg7XG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgICAgcGF0aDogW2Jhc2VQYXRoXSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcXVlcnkgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlID09PSAnZXh0ZW5kc2VhcmNoJykgeyAvLyBjbGljayBvbiA8Q2VyY2EgaW4gdHV0dGkgaSBjYW1waT4gKGNhbGwgdG8gYWN0aW9uKVxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICAgIHBhdGg6IFt0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNlYXJjaEJhc2VQYXRoXSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5kYXRhU291cmNlLmF1dG9jb21wbGV0ZVZhbHVlLFxuICAgICAgICAgICAgICAgICdxdWVyeS1hbGwnOiAxLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuc2VsZWN0aW9uJzpcbiAgICAgICAgICB0aGlzLmhhbmRsZUNoYXJ0U2VsZWN0aW9uKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubG9ja2ZpbHRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCBwYXlsb2FkKTsgLy8gbGV0IGF3LWhvbWUtZmFjZXRzLXdyYXBwZXIgaGFuZGxlIHRoaXMgZXZlbnRcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJyhob21lKSB1bmhhbmRsZWQgb3V0ZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRGaWx0ZXJzKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5pbml0aWFsRmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcoaG9tZSkgQXBvbGxvIHJlc3BvbmRlZCB3aXRoOicsIHJlc3BvbnNlKVxuICAgICAgaWYgKCFyZXNwb25zZSkgeyByZXR1cm47IH1cbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKTtcbiAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuYnViYmxlc0VuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgcmVzcG9uc2UuZW50aXRpZXNEYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayA9IChwYXlsb2FkKSA9PiB7XG4gICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0Y2xpY2snLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHB1YmxpYyBvdXRlckxpbmtDbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gICAgd2luZG93Lm9wZW4ocGF5bG9hZCwgJ19ibGFuaycpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUNoYXJ0U2VsZWN0aW9uID0gKHBheWxvYWQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEVudGl0aWVzSWRzID0gcGF5bG9hZDtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzID0gcGF5bG9hZDtcbiAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpc3RJc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdCxcbiAgICB9KS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaXN0SXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBpZiAocmVzICYmIHJlcy5lbnRpdGllc0RhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBpZiBzb21lIGxpbmtlZCBvYmplY3RzIGV4aXN0IGZvciB0aGUgc2VsZWN0ZWQgZW50aXRpZXM6XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sYXN0QnViYmxlUmVzcG9uc2UgPSByZXMuZW50aXRpZXNEYXRhO1xuICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCByZXMuZW50aXRpZXNEYXRhKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcyk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJJdGVtVGFncygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhlIGJhY2tlbmQgcmV0dXJucyBhbiBlbXB0eSBsaXN0IG9mIHJlc3VsdHM6XG4gICAgICAgIGNvbnN0IHF1ZXJ5TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goKGIpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGVudGl0eUlkOiBiLCBlbnRpdGllc0xpc3RTaXplOiAxIH07XG4gICAgICAgICAgcXVlcnlMaXN0LnB1c2goIC8vIG1ha2UgYSBxdWVyeSBmb3IgZWFjaCBzZWxlY3RlZCBidWJibGVcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dldE1pc3NpbmdCdWJibGUnLCBwYXJhbXMpLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBhd2FpdCBmb3IgZXZlcnkgbWlzc2luZyBidWJibGUgYW5kIGJ1aWxkIGEgY3VzdG9tIHJlc3BvbnNlXG4gICAgICAgIGZvcmtKb2luKHF1ZXJ5TGlzdCkuc3Vic2NyaWJlKChmb3JrcmVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgY3VzdG9tQnViYmxlcyA9IFtdO1xuICAgICAgICAgIGZvcmtyZXMuZm9yRWFjaCgocikgPT4geyBjdXN0b21CdWJibGVzLnB1c2goeyBjb3VudDogMCwgZW50aXR5OiByIH0pOyB9KTtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBjdXN0b21CdWJibGVzKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySXRlbVRhZ3MoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==