/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { debounce, debounceTime } from 'rxjs/operators';
export class AwHomeLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
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
                            typeOfConfigKey: payload.inputPayload.replace('-search', ''),
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
                            this.emitOuter('facetswrapperresponse', { facetId: payload, response });
                            this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                            { key: payload.value, response }, // DATA
                            { config: this.configuration } // OPTIONS
                            );
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
                        path: [`aw/entita/${payload.entityId}/overview`]
                    });
                    break;
                case "aw-bubble-chart.bubble-tooltip-select-click":
                    payload._bubbleChart = this.dataSource._bubbleChart;
                    this.emitOuter('bubble-tooltip-select-click', payload);
                    break;
                case 'aw-bubble-chart.click':
                    if (payload.source === 'bubble') {
                        if (payload.bubble) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBYSxPQUFPLEVBQVksTUFBTSxNQUFNLENBQUM7OztBQUlwRCxNQUFNLE9BQU8sY0FBZSxTQUFRLFlBQVk7SUFBaEQ7O1FBQ1UsZUFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBcUluRCxDQUFDOzs7O0lBaklRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxxQkFBcUI7b0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDM0MsTUFBTTtnQkFDUixLQUFLLHdCQUF3QjtvQkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGdCQUFnQjtvQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM1QyxNQUFNO2dCQUNSLEtBQUssOEJBQThCO29CQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoRCxNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7OzRCQUNiLE1BQU0sR0FBRzs0QkFDWCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7NEJBQ3BCLGVBQWUsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDOzRCQUM1RCxlQUFlLEVBQUU7O2dDQUVmLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQzs2QkFDekU7eUJBQ0Y7d0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7d0JBQUMsUUFBUSxDQUFDLEVBQUU7NEJBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUE7NEJBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUM3Qix5QkFBeUIsRUFBRSxLQUFLOzRCQUNoQyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU87NEJBQ3pDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxVQUFVOzZCQUMxQyxDQUFBO3dCQUNILENBQUMsRUFBQyxDQUFBO3FCQUNIO29CQUNELE1BQU07Z0JBQ1IsS0FBSyw4QkFBOEI7b0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hELE1BQU07Z0JBQ1IsS0FBSyw0Q0FBNEM7b0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUN2RCxNQUFNO2dCQUNSLEtBQUssMkNBQTJDO29CQUM5QyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7d0JBQUUsT0FBTztvQkFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7d0JBQzFCLE9BQU8sRUFBRSxRQUFRO3dCQUNqQixJQUFJLEVBQUUsQ0FBQyxhQUFhLE9BQU8sQ0FBQyxRQUFRLFdBQVcsQ0FBQztxQkFDakQsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1IsS0FBSyw2Q0FBNkM7b0JBQ2hELE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7b0JBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3ZELE1BQU07Z0JBQ1IsS0FBSyx1QkFBdUI7b0JBQzFCLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7d0JBQy9CLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTs0QkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDNUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQ0FDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTOzs7O2dDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7b0NBQ3JELElBQUksUUFBUSxFQUFFO3dDQUNaLHNEQUFzRDt3Q0FDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0NBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FDQUN6QztnQ0FDSCxDQUFDLEVBQUMsQ0FBQzs2QkFDSjt5QkFDRjtxQkFDRjt5QkFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO3dCQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOzRCQUNqQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWE7NEJBQ3BDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTt5QkFDdkIsQ0FBQyxDQUFDLFNBQVM7Ozs7d0JBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTs0QkFDeEIsSUFBSSxRQUFRLEVBQUU7Z0NBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0NBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzZCQUN6Qzt3QkFDSCxDQUFDLEVBQUMsQ0FBQztxQkFDSjtvQkFDRCxNQUFNO2dCQUNSLEtBQUssaUNBQWlDO29CQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDOzswQkFDdkIsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO29CQUNsQyxVQUFVOzs7b0JBQUM7d0JBQ1QsVUFBVSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7b0JBQ3BDLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztvQkFDUixNQUFNO2dCQUVSOzttQkFFRztnQkFDSCxLQUFLLGlDQUFpQztvQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO3dCQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25DLENBQUMsRUFBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzVELElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLElBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUc7O3dCQUNoQyxhQUFhLEdBQUc7d0JBQ2xCLGNBQWM7Ozs7d0JBQUUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQTt3QkFDekUsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLEtBQUssRUFBRSxLQUFLO3dCQUNaLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7cUJBQ3JDO29CQUNELElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsYUFBYSxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjs7Ozs7O0lBcklDLG9DQUFpRDs7Ozs7SUFDakQsdUNBQTJCOzs7OztJQUMzQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG4vLyBpbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBpbXBvcnQgeyBkZWJvdW5jZSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmxvYWRGaWx0ZXJzKCk7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25IZXJvQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRIZWFkZXJDbGljayhwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgIGlmIChwYXlsb2FkLnZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbnB1dDogcGF5bG9hZC52YWx1ZSxcbiAgICAgICAgICAgICAgdHlwZU9mQ29uZmlnS2V5OiBwYXlsb2FkLmlucHV0UGF5bG9hZC5yZXBsYWNlKCctc2VhcmNoJywgJycpLFxuICAgICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAvLyBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywgcGFyYW1zKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZSB9KVxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsIC8vIElEXG4gICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlIH0sIC8vIERBVEFcbiAgICAgICAgICAgICAgICB7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0gLy8gT1BUSU9OU1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5lbnRlcic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0U2VhcmNoRW50ZXIocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtY2xvc2UtY2xpY2tcIjpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVUb29sdGlwQ2xpY2soJ2Nsb3NlJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGlja1wiOlxuICAgICAgICAgIGlmICghcGF5bG9hZCB8fCAhcGF5bG9hZC5lbnRpdHlJZCkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtgYXcvZW50aXRhLyR7cGF5bG9hZC5lbnRpdHlJZH0vb3ZlcnZpZXdgXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLXNlbGVjdC1jbGlja1wiOlxuICAgICAgICAgIHBheWxvYWQuX2J1YmJsZUNoYXJ0ID0gdGhpcy5kYXRhU291cmNlLl9idWJibGVDaGFydDtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQuc291cmNlID09PSAnYnViYmxlJykge1xuICAgICAgICAgICAgaWYgKHBheWxvYWQuYnViYmxlKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVGaWx0ZXIocGF5bG9hZCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVTZWxlY3RlZChwYXlsb2FkLmJ1YmJsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyUmVxdWVzdCgpIHJldHVybmVkOiAnLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZXMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnNvdXJjZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZUZpbHRlcihwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZURlc2VsZWN0ZWQoe1xuICAgICAgICAgICAgICBidWJibGVQYXlsb2FkOiBwYXlsb2FkLmJ1YmJsZVBheWxvYWQsXG4gICAgICAgICAgICAgIGJ1YmJsZTogcGF5bG9hZC5idWJibGVcbiAgICAgICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlcyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS1maWx0ZXJlZCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZUZpbHRlcihwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVGFncygpO1xuICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYXRhU291cmNlLmxvYWRpbmdCdWJibGVzID0gZmFsc2U7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGFncyAmIEl0ZW0gUHJldmlld3MgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblRhZ0NsaWNrZWQocGF5bG9hZCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJJdGVtVGFncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRmlsdGVycygpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuaW5pdGlhbEZpbHRlclJlcXVlc3QoKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpO1xuICAgICAgICBpZiAoIHRoaXMuZGF0YVNvdXJjZS5idWJibGVzRW5hYmxlZCApIHtcbiAgICAgICAgICBsZXQgYnViYmxlUGF5bG9hZCA9IHtcbiAgICAgICAgICAgIHNldEJ1YmJsZUNoYXJ0OiAoYnViYmxlQ3JlZikgPT4gdGhpcy5kYXRhU291cmNlLl9idWJibGVDaGFydCA9IGJ1YmJsZUNyZWYsXG4gICAgICAgICAgICBzb3VyY2U6IHJlc3BvbnNlLFxuICAgICAgICAgICAgcmVzZXQ6IGZhbHNlLFxuICAgICAgICAgICAgZmFjZXREYXRhOiB0aGlzLmRhdGFTb3VyY2UuZmFjZXREYXRhXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCBidWJibGVQYXlsb2FkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19