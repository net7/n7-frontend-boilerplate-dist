/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
export class AwHomeLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
        this.handleSimpleAutocompleteClick = (/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            /** @type {?} */
            let thebubble = this.dataSource.allBubbles.find((/**
             * @param {?} b
             * @return {?}
             */
            b => {
                /** @type {?} */
                let s = 'B_' + payload.replace(/-/g, '_');
                return b.id == s;
            }));
            if (thebubble) {
                this.dataSource.onBubbleSelected(thebubble);
            }
            if (this.dataSource.selectedEntitiesIds.indexOf(payload) < 0) {
                this.dataSource.selectedEntitiesIds.push(payload);
                this.dataSource.communication.request$('globalFilter', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    (error) => console.error(error)),
                    params: {
                        selectedEntitiesIds: this.dataSource.selectedEntitiesIds,
                        itemsPagination: {
                            offset: 0,
                            limit: this.dataSource.resultsLimit
                        }
                    },
                }).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    if (res) {
                        this.dataSource.updateBubbleFilter({
                            allBubbles: this.dataSource.allBubbles,
                            bubble: thebubble,
                            bubblePayload: { id: thebubble.id },
                            entityIdmap: this.dataSource.entityBubbleIdMap,
                            source: 'bubble'
                        });
                        this.dataSource.filterRequest().subscribe((/**
                         * @param {?} res
                         * @return {?}
                         */
                        res => {
                            if (res) {
                                this.emitOuter('filterbubbleresponse', this.dataSource.getBubblePayload(res));
                                this.dataSource.updateBubbles(res);
                            }
                        }));
                        // this.renderPreviewsFromApolloQuery(res)
                    }
                }));
            }
        });
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
                            typeOfEntity: payload.inputPayload.replace('-search', ''),
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
                        path: [`aw/entita/${payload.entityId}`]
                    });
                    break;
                case "aw-bubble-chart.bubble-tooltip-select-click":
                    payload._bubbleChart = this.dataSource._bubbleChart;
                    this.emitOuter('bubble-tooltip-select-click', payload);
                    break;
                case 'aw-bubble-chart.click':
                    if (payload.source === 'bubble') {
                        if (payload.bubble) {
                            console.log({ payload });
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
                case 'aw-linked-objects.datarequest':
                    let { currentPage } = payload;
                    /** @type {?} */
                    let params = {
                        selectedEntitiesIds: this.dataSource.selectedEntitiesIds,
                        itemsPagination: {
                            offset: currentPage * this.dataSource.resultsLimit,
                            limit: this.dataSource.resultsLimit
                        }
                    };
                    this.dataSource.makeRequest$('globalFilter', params).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    res => {
                        if (res) {
                            this.emitOuter('dataresponse', { res });
                        }
                        else {
                            console.log('Unable to fetch additional data.');
                        }
                    }));
                    break;
                case 'aw-autocomplete-wrapper.clickresult':
                    this.handleSimpleAutocompleteClick(payload);
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
            console.log('(home) Apollo responded with:', response);
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
    /** @type {?} */
    AwHomeLayoutEH.prototype.handleSimpleAutocompleteClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsTUFBTSxPQUFPLGNBQWUsU0FBUSxZQUFZO0lBQWhEOztRQUNVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQTRKMUMsa0NBQTZCOzs7O1FBQUcsT0FBTyxDQUFDLEVBQUU7O2dCQUMzQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFOztvQkFDOUMsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDbEIsQ0FBQyxFQUFDO1lBQ0YsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUM1QztZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1RCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtvQkFDckQsT0FBTzs7OztvQkFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMs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SUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxhQUFhLENBQUMsQ0FBQztpQkFDdkQ7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQTBDRjs7Ozs7O0lBcE1DLG9DQUFpRDs7Ozs7SUFDakQsdUNBQTJCOzs7OztJQUMzQiwrQkFBbUI7O0lBMEpuQix1REFzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgZGVzdHJveWVkJDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgcm91dGU6IGFueTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5pbml0JzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25Jbml0KHBheWxvYWQpO1xuICAgICAgICAgIHRoaXMubG9hZEZpbHRlcnMoKTtcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmRlc3Ryb3knOlxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaGVyby5jaGFuZ2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkhlcm9DaGFuZ2UocGF5bG9hZC52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVGYWNldEhlYWRlckNsaWNrKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNoYW5nZSc6XG4gICAgICAgICAgaWYgKHBheWxvYWQudmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgIGlucHV0OiBwYXlsb2FkLnZhbHVlLFxuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHk6IHBheWxvYWQuaW5wdXRQYXlsb2FkLnJlcGxhY2UoJy1zZWFyY2gnLCAnJyksXG4gICAgICAgICAgICAgIGl0ZW1zUGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIC8vIG9mZnNldDogMCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXVxuICAgICAgICAgICAgICAgIG9mZnNldDogMCwgbGltaXQ6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3Jlc3VsdHMtbGltaXQnXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdhdXRvQ29tcGxldGUnLCBwYXJhbXMpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmYWNldHN3cmFwcGVycmVzcG9uc2UnLCB7IGZhY2V0SWQ6IHBheWxvYWQsIHJlc3BvbnNlIH0pXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgJ2F3LWF1dG9jb21wbGV0ZS13cmFwcGVyJywgLy8gSURcbiAgICAgICAgICAgICAgICB7IGtleTogcGF5bG9hZC52YWx1ZSwgcmVzcG9uc2UgfSwgLy8gREFUQVxuICAgICAgICAgICAgICAgIHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24gfSAvLyBPUFRJT05TXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmVudGVyJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRTZWFyY2hFbnRlcihwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1jbG9zZS1jbGlja1wiOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVRvb2x0aXBDbGljaygnY2xvc2UnLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrXCI6XG4gICAgICAgICAgaWYgKCFwYXlsb2FkIHx8ICFwYXlsb2FkLmVudGl0eUlkKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW2Bhdy9lbnRpdGEvJHtwYXlsb2FkLmVudGl0eUlkfWBdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrXCI6XG4gICAgICAgICAgcGF5bG9hZC5fYnViYmxlQ2hhcnQgPSB0aGlzLmRhdGFTb3VyY2UuX2J1YmJsZUNoYXJ0O1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdidWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2snLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmNsaWNrJzpcbiAgICAgICAgICBpZiAocGF5bG9hZC5zb3VyY2UgPT09ICdidWJibGUnKSB7XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5idWJibGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coe3BheWxvYWR9KVxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlRmlsdGVyKHBheWxvYWQpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm9uQnViYmxlU2VsZWN0ZWQocGF5bG9hZC5idWJibGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlclJlcXVlc3QoKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlclJlcXVlc3QoKSByZXR1cm5lZDogJywgcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHRoaXMuZGF0YVNvdXJjZS5nZXRCdWJibGVQYXlsb2FkKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAocGF5bG9hZC5zb3VyY2UgPT09ICdjbG9zZScpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVGaWx0ZXIocGF5bG9hZCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVEZXNlbGVjdGVkKHtcbiAgICAgICAgICAgICAgYnViYmxlUGF5bG9hZDogcGF5bG9hZC5idWJibGVQYXlsb2FkLFxuICAgICAgICAgICAgICBidWJibGU6IHBheWxvYWQuYnViYmxlXG4gICAgICAgICAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHRoaXMuZGF0YVNvdXJjZS5nZXRCdWJibGVQYXlsb2FkKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZXMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5idWJibGUtZmlsdGVyZWQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVGaWx0ZXIocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZVRhZ3MoKTtcbiAgICAgICAgICBjb25zdCBkYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGF0YVNvdXJjZS5sb2FkaW5nQnViYmxlcyA9IGZhbHNlO1xuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRhZ3MgJiBJdGVtIFByZXZpZXdzIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgICAqL1xuICAgICAgICBjYXNlICdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25UYWdDbGlja2VkKHBheWxvYWQpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIHRoaXMuZGF0YVNvdXJjZS5nZXRCdWJibGVQYXlsb2FkKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlcyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucmVuZGVySXRlbVRhZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctbGlua2VkLW9iamVjdHMuZGF0YXJlcXVlc3QnOlxuICAgICAgICAgIGxldCB7IGN1cnJlbnRQYWdlIH0gPSBwYXlsb2FkXG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHM6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgIG9mZnNldDogY3VycmVudFBhZ2UgKiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0LFxuICAgICAgICAgICAgICBsaW1pdDogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCBwYXJhbXMpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZGF0YXJlc3BvbnNlJywgeyByZXMgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gZmV0Y2ggYWRkaXRpb25hbCBkYXRhLicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXIuY2xpY2tyZXN1bHQnOlxuICAgICAgICAgIHRoaXMuaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2socGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEZpbHRlcnMoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmluaXRpYWxGaWx0ZXJSZXF1ZXN0KCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJyhob21lKSBBcG9sbG8gcmVzcG9uZGVkIHdpdGg6JywgcmVzcG9uc2UpO1xuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5idWJibGVzRW5hYmxlZCkge1xuICAgICAgICAgIGxldCBidWJibGVQYXlsb2FkID0ge1xuICAgICAgICAgICAgc2V0QnViYmxlQ2hhcnQ6IChidWJibGVDcmVmKSA9PiB0aGlzLmRhdGFTb3VyY2UuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZixcbiAgICAgICAgICAgIHNvdXJjZTogcmVzcG9uc2UsXG4gICAgICAgICAgICByZXNldDogZmFsc2UsXG4gICAgICAgICAgICBmYWNldERhdGE6IHRoaXMuZGF0YVNvdXJjZS5mYWNldERhdGFcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIGJ1YmJsZVBheWxvYWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2ltcGxlQXV0b2NvbXBsZXRlQ2xpY2sgPSBwYXlsb2FkID0+IHtcbiAgICBsZXQgdGhlYnViYmxlID0gdGhpcy5kYXRhU291cmNlLmFsbEJ1YmJsZXMuZmluZChiID0+IHtcbiAgICAgIGxldCBzID0gJ0JfJyArIHBheWxvYWQucmVwbGFjZSgvLS9nLCAnXycpXG4gICAgICByZXR1cm4gYi5pZCA9PSBzXG4gICAgfSlcbiAgICBpZiAodGhlYnViYmxlKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVTZWxlY3RlZCh0aGVidWJibGUpXG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRFbnRpdGllc0lkcy5pbmRleE9mKHBheWxvYWQpIDwgMCkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkRW50aXRpZXNJZHMucHVzaChwYXlsb2FkKVxuICAgICAgdGhpcy5kYXRhU291cmNlLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHtcbiAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICBsaW1pdDogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZUZpbHRlcih7XG4gICAgICAgICAgICBhbGxCdWJibGVzOiB0aGlzLmRhdGFTb3VyY2UuYWxsQnViYmxlcyxcbiAgICAgICAgICAgIGJ1YmJsZTogdGhlYnViYmxlLFxuICAgICAgICAgICAgYnViYmxlUGF5bG9hZDogeyBpZDogdGhlYnViYmxlLmlkIH0sXG4gICAgICAgICAgICBlbnRpdHlJZG1hcDogdGhpcy5kYXRhU291cmNlLmVudGl0eUJ1YmJsZUlkTWFwLFxuICAgICAgICAgICAgc291cmNlOiAnYnViYmxlJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlclJlcXVlc3QoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzKSlcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZXMocmVzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbn1cblxuIl19