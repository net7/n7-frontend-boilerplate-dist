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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2hvbWUtbGF5b3V0L2hvbWUtbGF5b3V0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLE9BQU8sTUFBTSx5QkFBeUIsQ0FBQztBQUU5QyxNQUFNLE9BQU8sY0FBZSxTQUFRLFlBQVk7SUFBaEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBdU0xQyxrQ0FBNkIsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQTtRQU1NLHlCQUFvQixHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDeEMsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTtnQkFDM0MsbUJBQW1CO2dCQUNuQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXO2FBQ3JFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7Z0JBQzdD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Q0FDeEMsV0FBVyxFQUFFLENBQUM7aUNBQ2Y7NkJBQ0YsQ0FBQyxDQUFDO3lCQUNKO3FCQUNGO29CQUFDLE1BQU07Z0JBQ1IsS0FBSywyQkFBMkI7b0JBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkMsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQywrQ0FBK0M7b0JBQ3RGLE1BQU07Z0JBQ1I7b0JBQ0UsNkRBQTZEO29CQUM3RCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM1RCx5REFBeUQ7WUFDekQsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU1NLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBcUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi8uLi9jb21tb24vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgcm91dGU6IGFueTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuaW5pdCc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xyXG4gICAgICAgICAgdGhpcy5sb2FkRmlsdGVycygpO1xyXG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgICAgICAgLy8gc2Nyb2xsIHRvcFxyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQub3V0ZXJsaW5rY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcclxuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXHJcbiAgICAgICAgICAgIHBhdGg6IHBheWxvYWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRlc3Ryb3knOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuYnViYmxlcmVzdWx0c3ZpZXdhbGxjbGljayc6IHtcclxuICAgICAgICAgIGNvbnN0IGVudGl0eUxpbmtzID0gdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcy5qb2luKCcsJyk7XHJcbiAgICAgICAgICBjb25zdCBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGg7XHJcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICAgICAgcGF0aDogW2Jhc2VQYXRoXSxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2VudGl0eS1saW5rcyc6IGVudGl0eUxpbmtzIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5jbGVhcnNlbGVjdGlvbic6XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xlYXJzZWxlY3Rpb24nKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJyhob21lKSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZTogJywgdHlwZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiAvLyBib3VuY2UgdGhlIGV2ZW50LCBmcm9tIGJ1YmJsZS1jaGFydCB0byBjaGFydC10aXBweVxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2QzZW5kJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1jaGFydC10aXBweS5zZWxlY3QnOlxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdCcsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaGVyby5lbnRlcic6IHtcclxuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gaGVscGVycy5lc2NhcGVRdW90ZXMocGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICAgICAgcGF0aDogW3RoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2VhcmNoQmFzZVBhdGhdLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyBxdWVyeSB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1oZXJvLmNoYW5nZSc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuYXV0b2NvbXBsZXRlVmFsdWUgPSBwYXlsb2FkLnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSGVyb0NoYW5nZShwYXlsb2FkLnZhbHVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3RvZ2dsZWZpbHRlcicsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhcGF5bG9hZC52YWx1ZVxyXG4gICAgICAgICAgICB8fCAodHlwZW9mIHBheWxvYWQudmFsdWUgPT09ICdzdHJpbmcnICYmIHBheWxvYWQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcmNsb3NlJywgeyBmYWNldElkOiBwYXlsb2FkIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVxdWVzdCcsIHsgZmFjZXRJZDogcGF5bG9hZCB9KTtcclxuICAgICAgICAgICAgLy8gY2xlYXIgYXV0b2NvbXBsZXRlIHJlc3VsdHNcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcclxuICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLFxyXG4gICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZTogbnVsbCB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgaW5wdXQ6IHBheWxvYWQudmFsdWUsXHJcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5OiBwYXlsb2FkLmlucHV0UGF5bG9hZC5yZXBsYWNlKC8tc2VhcmNoL2csICcnKS5yZXBsYWNlKC8tL2csICcgJyksXHJcbiAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J10sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywgcGFyYW1zKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFsbGJhY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdmYWxsYmFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAvLyB1c2UgZmFsbGJhY2sgc3RyaW5nIGZyb20gY29uZmlndXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2F1dG9jb21wbGV0ZS1mYWxsYmFjayddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2F1dG9jb21wbGV0ZS1mYWxsYmFjayddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdOZXNzdW4gcmlzdWx0YXRvIHRyb3ZhdG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlOiBmYWxsYmFjayB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcclxuICAgICAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJyxcclxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlOiBmYWxsYmFjayB9LFxyXG4gICAgICAgICAgICAgICAgICB7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0sXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZSB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcclxuICAgICAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJywgLy8gSURcclxuICAgICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlIH0sIC8vIERBVEFcclxuICAgICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9LCAvLyBPUFRJT05TXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyLmNsaWNrJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd0YWdjbGljaycsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuZGF0YXJlcXVlc3QnOiB7XHJcbiAgICAgICAgICBjb25zdCB7IGN1cnJlbnRQYWdlIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLFxyXG4gICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICBvZmZzZXQ6IGN1cnJlbnRQYWdlICogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdCxcclxuICAgICAgICAgICAgICBsaW1pdDogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCBwYXJhbXMpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZGF0YXJlc3BvbnNlJywgeyByZXMgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gZmV0Y2ggYWRkaXRpb25hbCBkYXRhLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyLmNsaWNrcmVzdWx0JzpcclxuICAgICAgICAgIHRoaXMuaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2socGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWF1dG9jb21wbGV0ZS5jbGljayc6IHtcclxuICAgICAgICAgIGNvbnN0IHsgc291cmNlLCB0eXBlOiBwYXlsb2FkVHlwZSB9ID0gcGF5bG9hZDtcclxuICAgICAgICAgIGxldCBiYXNlUGF0aDtcclxuICAgICAgICAgIGlmIChzb3VyY2UgPT09ICdpdGVtJykge1xyXG4gICAgICAgICAgICBpZiAocGF5bG9hZFR5cGUgPT09ICdvZ2dldHRvLWN1bHR1cmFsZScpIHtcclxuICAgICAgICAgICAgICBiYXNlUGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJykuc2NoZWRhQmFzZVBhdGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XHJcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXHJcbiAgICAgICAgICAgICAgcGF0aDogW2Jhc2VQYXRoLCBwYXlsb2FkLmlkLCBoZWxwZXJzLnNsdWdpZnkocGF5bG9hZC50aXRsZSldLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc291cmNlID09PSAnc2hvd01vcmUnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5kYXRhU291cmNlLmhvbWVBdXRvY29tcGxldGVRdWVyeTtcclxuICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNlYXJjaEJhc2VQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xyXG4gICAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxyXG4gICAgICAgICAgICAgIHBhdGg6IFtiYXNlUGF0aF0sXHJcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgcXVlcnkgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2V4dGVuZHNlYXJjaCcpIHsgLy8gY2xpY2sgb24gPENlcmNhIGluIHR1dHRpIGkgY2FtcGk+IChjYWxsIHRvIGFjdGlvbilcclxuICAgICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcclxuICAgICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcclxuICAgICAgICAgICAgICBwYXRoOiBbdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zZWFyY2hCYXNlUGF0aF0sXHJcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB0aGlzLmRhdGFTb3VyY2UuYXV0b2NvbXBsZXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAncXVlcnktYWxsJzogMSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5zZWxlY3Rpb24nOlxyXG4gICAgICAgICAgdGhpcy5oYW5kbGVDaGFydFNlbGVjdGlvbihwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5sb2NrZmlsdGVyJzpcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgcGF5bG9hZCk7IC8vIGxldCBhdy1ob21lLWZhY2V0cy13cmFwcGVyIGhhbmRsZSB0aGlzIGV2ZW50XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gY29uc29sZS53YXJuKCcoaG9tZSkgdW5oYW5kbGVkIG91dGVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkRmlsdGVycygpIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS5pbml0aWFsRmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJyhob21lKSBBcG9sbG8gcmVzcG9uZGVkIHdpdGg6JywgcmVzcG9uc2UpXHJcbiAgICAgIGlmICghcmVzcG9uc2UpIHsgcmV0dXJuOyB9XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKTtcclxuICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5idWJibGVzRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHJlc3BvbnNlLmVudGl0aWVzRGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZVNpbXBsZUF1dG9jb21wbGV0ZUNsaWNrID0gKHBheWxvYWQpID0+IHtcclxuICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldGNsaWNrJywgcGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3V0ZXJMaW5rQ2xpY2sodHlwZSwgcGF5bG9hZCkge1xyXG4gICAgd2luZG93Lm9wZW4ocGF5bG9hZCwgJ19ibGFuaycpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZUNoYXJ0U2VsZWN0aW9uID0gKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBwYXlsb2FkO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkQnViYmxlcyA9IHBheWxvYWQ7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpc3RJc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xyXG4gICAgICBzZWxlY3RlZEVudGl0aWVzSWRzLFxyXG4gICAgICBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdCxcclxuICAgIH0pLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGlzdElzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBpZiAocmVzICYmIHJlcy5lbnRpdGllc0RhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIGlmIHNvbWUgbGlua2VkIG9iamVjdHMgZXhpc3QgZm9yIHRoZSBzZWxlY3RlZCBlbnRpdGllczpcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGFzdEJ1YmJsZVJlc3BvbnNlID0gcmVzLmVudGl0aWVzRGF0YTtcclxuICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCByZXMuZW50aXRpZXNEYXRhKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVyUHJldmlld3NGcm9tQXBvbGxvUXVlcnkocmVzKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySXRlbVRhZ3MoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBpZiB0aGUgYmFja2VuZCByZXR1cm5zIGFuIGVtcHR5IGxpc3Qgb2YgcmVzdWx0czpcclxuICAgICAgICBjb25zdCBxdWVyeUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goKGIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZW50aXR5SWQ6IGIsIGVudGl0aWVzTGlzdFNpemU6IDEgfTtcclxuICAgICAgICAgIHF1ZXJ5TGlzdC5wdXNoKCAvLyBtYWtlIGEgcXVlcnkgZm9yIGVhY2ggc2VsZWN0ZWQgYnViYmxlXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dldE1pc3NpbmdCdWJibGUnLCBwYXJhbXMpLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBhd2FpdCBmb3IgZXZlcnkgbWlzc2luZyBidWJibGUgYW5kIGJ1aWxkIGEgY3VzdG9tIHJlc3BvbnNlXHJcbiAgICAgICAgZm9ya0pvaW4ocXVlcnlMaXN0KS5zdWJzY3JpYmUoKGZvcmtyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGN1c3RvbUJ1YmJsZXMgPSBbXTtcclxuICAgICAgICAgIGZvcmtyZXMuZm9yRWFjaCgocikgPT4geyBjdXN0b21CdWJibGVzLnB1c2goeyBjb3VudDogMCwgZW50aXR5OiByIH0pOyB9KTtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIGN1c3RvbUJ1YmJsZXMpO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcyk7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySXRlbVRhZ3MoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==