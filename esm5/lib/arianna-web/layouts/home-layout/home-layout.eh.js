/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
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
            /** @type {?} */
            var thebubble = _this.dataSource.allBubbles.find((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                /** @type {?} */
                var s = 'B_' + payload.replace(/-/g, '_');
                return b.id == s;
            }));
            if (thebubble) {
                _this.dataSource.onBubbleSelected(thebubble);
            }
            if (_this.dataSource.selectedEntitiesIds.indexOf(payload) < 0) {
                _this.dataSource.selectedEntitiesIds.push(payload);
                _this.dataSource.communication.request$('globalFilter', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return console.error(error); }),
                    params: {
                        selectedEntitiesIds: _this.dataSource.selectedEntitiesIds,
                        itemsPagination: {
                            offset: 0,
                            limit: _this.dataSource.resultsLimit
                        }
                    },
                }).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if (res) {
                        _this.dataSource.updateBubbleFilter({
                            allBubbles: _this.dataSource.allBubbles,
                            bubble: thebubble,
                            bubblePayload: { id: thebubble.id },
                            entityIdmap: _this.dataSource.entityBubbleIdMap,
                            source: 'bubble'
                        });
                        _this.dataSource.filterRequest().subscribe((/**
                         * @param {?} res
                         * @return {?}
                         */
                        function (res) {
                            if (res) {
                                _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(res));
                                _this.dataSource.updateBubbles(res);
                            }
                        }));
                        // this.renderPreviewsFromApolloQuery(res)
                    }
                }));
            }
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
                case 'aw-home-layout.destroy':
                    _this.destroyed$.next();
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
                    _this.dataSource.handleFacetHeaderClick(payload);
                    break;
                case 'aw-home-facets-wrapper.change':
                    if (payload.value) {
                        /** @type {?} */
                        var params_1 = {
                            input: payload.value,
                            typeOfEntity: payload.inputPayload.replace('-search', ''),
                            itemsPagination: {
                                // offset: 0, limit: this.configuration.get('home-layout')['results-limit']
                                offset: 0, limit: _this.configuration.get('home-layout')['results-limit']
                            }
                        };
                        _this.dataSource.makeRequest$('autoComplete', params_1).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            _this.emitOuter('facetswrapperresponse', { facetId: payload, response: response });
                            _this.dataSource.updateComponent('aw-autocomplete-wrapper', // ID
                            { key: payload.value, response: response }, // DATA
                            { config: _this.configuration } // OPTIONS
                            );
                        }));
                    }
                    break;
                case 'aw-home-facets-wrapper.enter':
                    _this.dataSource.handleFacetSearchEnter(payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-close-click":
                    _this.dataSource.onBubbleTooltipClick('close', payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    if (!payload || !payload.entityId)
                        return;
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + payload.entityId]
                    });
                    break;
                case "aw-bubble-chart.bubble-tooltip-select-click":
                    payload._bubbleChart = _this.dataSource._bubbleChart;
                    _this.emitOuter('bubble-tooltip-select-click', payload);
                    break;
                case 'aw-bubble-chart.click':
                    if (payload.source === 'bubble') {
                        if (payload.bubble) {
                            console.log({ payload: payload });
                            _this.dataSource.updateBubbleFilter(payload);
                            if (_this.dataSource.onBubbleSelected(payload.bubble)) {
                                _this.dataSource.filterRequest().subscribe((/**
                                 * @param {?} response
                                 * @return {?}
                                 */
                                function (response) {
                                    if (response) {
                                        // console.log('filterRequest() returned: ', response)
                                        _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(response));
                                        _this.dataSource.updateBubbles(response);
                                    }
                                }));
                            }
                        }
                    }
                    else if (payload.source === 'close') {
                        _this.dataSource.updateBubbleFilter(payload);
                        _this.dataSource.onBubbleDeselected({
                            bubblePayload: payload.bubblePayload,
                            bubble: payload.bubble
                        }).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            if (response) {
                                _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(response));
                                _this.dataSource.updateBubbles(response);
                            }
                        }));
                    }
                    break;
                case 'aw-bubble-chart.bubble-filtered':
                    _this.dataSource.updateBubbleFilter(payload);
                    _this.dataSource.updateTags();
                    /** @type {?} */
                    var dataSource_1 = _this.dataSource;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        dataSource_1.loadingBubbles = false;
                    }), 500);
                    break;
                /**
                 * Tags & Item Previews Event Handlers
                 */
                case 'aw-home-item-tags-wrapper.click':
                    _this.dataSource.onTagClicked(payload).subscribe((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        _this.emitOuter('filterbubbleresponse', _this.dataSource.getBubblePayload(response));
                        _this.dataSource.updateBubbles(response);
                        _this.dataSource.renderItemTags();
                    }));
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
            console.log('(home) Apollo responded with:', response);
            if (response) {
                _this.dataSource.parseInitialRequest(response);
                if (_this.dataSource.bubblesEnabled) {
                    /** @type {?} */
                    var bubblePayload = {
                        setBubbleChart: (/**
                         * @param {?} bubbleCref
                         * @return {?}
                         */
                        function (bubbleCref) { return _this.dataSource._bubbleChart = bubbleCref; }),
                        source: response,
                        reset: false,
                        facetData: _this.dataSource.facetData
                    };
                    _this.emitOuter('filterbubbleresponse', bubblePayload);
                }
            }
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBQW9DLDBDQUFZO0lBQWhEO1FBQUEscUVBcU1DO1FBcE1TLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUE0SjFDLG1DQUE2Qjs7OztRQUFHLFVBQUEsT0FBTzs7Z0JBQ3hDLFNBQVMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxDQUFDOztvQkFDM0MsQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDbEIsQ0FBQyxFQUFDO1lBQ0YsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUM1QztZQUNELElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1RCxLQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDakQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtvQkFDckQsT0FBTzs7OztvQkFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFL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RUFBRSxhQUFhLENBQUMsQ0FBQztpQkFDdkQ7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQTBDSCxxQkFBQztBQUFELENBQUMsQUFyTUQsQ0FBb0MsWUFBWSxHQXFNL0M7Ozs7Ozs7SUFwTUMsb0NBQWlEOzs7OztJQUNqRCx1Q0FBMkI7Ozs7O0lBQzNCLCtCQUFtQjs7SUEwSm5CLHVEQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IGFueTtcbiAgcHJpdmF0ZSByb3V0ZTogYW55O1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmluaXQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XG4gICAgICAgICAgdGhpcy5sb2FkRmlsdGVycygpO1xuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZGVzdHJveSc6XG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1oZXJvLmNoYW5nZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSGVyb0NoYW5nZShwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jbGljayc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0SGVhZGVyQ2xpY2socGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuY2hhbmdlJzpcbiAgICAgICAgICBpZiAocGF5bG9hZC52YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IHBheWxvYWQudmFsdWUsXG4gICAgICAgICAgICAgIHR5cGVPZkVudGl0eTogcGF5bG9hZC5pbnB1dFBheWxvYWQucmVwbGFjZSgnLXNlYXJjaCcsICcnKSxcbiAgICAgICAgICAgICAgaXRlbXNQYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgLy8gb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2F1dG9Db21wbGV0ZScsIHBhcmFtcykuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZhY2V0c3dyYXBwZXJyZXNwb25zZScsIHsgZmFjZXRJZDogcGF5bG9hZCwgcmVzcG9uc2UgfSlcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAnYXctYXV0b2NvbXBsZXRlLXdyYXBwZXInLCAvLyBJRFxuICAgICAgICAgICAgICAgIHsga2V5OiBwYXlsb2FkLnZhbHVlLCByZXNwb25zZSB9LCAvLyBEQVRBXG4gICAgICAgICAgICAgICAgeyBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbiB9IC8vIE9QVElPTlNcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXIuZW50ZXInOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVGYWNldFNlYXJjaEVudGVyKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWNsb3NlLWNsaWNrXCI6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uQnViYmxlVG9vbHRpcENsaWNrKCdjbG9zZScsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2tcIjpcbiAgICAgICAgICBpZiAoIXBheWxvYWQgfHwgIXBheWxvYWQuZW50aXR5SWQpIHJldHVybjtcbiAgICAgICAgICB0aGlzLmVtaXRHbG9iYWwoJ25hdmlnYXRlJywge1xuICAgICAgICAgICAgaGFuZGxlcjogJ3JvdXRlcicsXG4gICAgICAgICAgICBwYXRoOiBbYGF3L2VudGl0YS8ke3BheWxvYWQuZW50aXR5SWR9YF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2tcIjpcbiAgICAgICAgICBwYXlsb2FkLl9idWJibGVDaGFydCA9IHRoaXMuZGF0YVNvdXJjZS5fYnViYmxlQ2hhcnQ7XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS10b29sdGlwLXNlbGVjdC1jbGljaycsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIGlmIChwYXlsb2FkLnNvdXJjZSA9PT0gJ2J1YmJsZScpIHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmJ1YmJsZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7cGF5bG9hZH0pXG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVGaWx0ZXIocGF5bG9hZCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVTZWxlY3RlZChwYXlsb2FkLmJ1YmJsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyUmVxdWVzdCgpIHJldHVybmVkOiAnLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZXMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnNvdXJjZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZUZpbHRlcihwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZURlc2VsZWN0ZWQoe1xuICAgICAgICAgICAgICBidWJibGVQYXlsb2FkOiBwYXlsb2FkLmJ1YmJsZVBheWxvYWQsXG4gICAgICAgICAgICAgIGJ1YmJsZTogcGF5bG9hZC5idWJibGVcbiAgICAgICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlcyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS1maWx0ZXJlZCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZUZpbHRlcihwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVGFncygpO1xuICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYXRhU291cmNlLmxvYWRpbmdCdWJibGVzID0gZmFsc2U7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGFncyAmIEl0ZW0gUHJldmlld3MgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblRhZ0NsaWNrZWQocGF5bG9hZCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJJdGVtVGFncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5kYXRhcmVxdWVzdCc6XG4gICAgICAgICAgbGV0IHsgY3VycmVudFBhZ2UgfSA9IHBheWxvYWRcbiAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBjdXJyZW50UGFnZSAqIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXQsXG4gICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYWtlUmVxdWVzdCQoJ2dsb2JhbEZpbHRlcicsIHBhcmFtcykuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkYXRhcmVzcG9uc2UnLCB7IHJlcyB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBmZXRjaCBhZGRpdGlvbmFsIGRhdGEuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1hdXRvY29tcGxldGUtd3JhcHBlci5jbGlja3Jlc3VsdCc6XG4gICAgICAgICAgdGhpcy5oYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayhwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRmlsdGVycygpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuaW5pdGlhbEZpbHRlclJlcXVlc3QoKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnKGhvbWUpIEFwb2xsbyByZXNwb25kZWQgd2l0aDonLCByZXNwb25zZSk7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhcnNlSW5pdGlhbFJlcXVlc3QocmVzcG9uc2UpO1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmJ1YmJsZXNFbmFibGVkKSB7XG4gICAgICAgICAgbGV0IGJ1YmJsZVBheWxvYWQgPSB7XG4gICAgICAgICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuZGF0YVNvdXJjZS5fYnViYmxlQ2hhcnQgPSBidWJibGVDcmVmLFxuICAgICAgICAgICAgc291cmNlOiByZXNwb25zZSxcbiAgICAgICAgICAgIHJlc2V0OiBmYWxzZSxcbiAgICAgICAgICAgIGZhY2V0RGF0YTogdGhpcy5kYXRhU291cmNlLmZhY2V0RGF0YVxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgYnViYmxlUGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTaW1wbGVBdXRvY29tcGxldGVDbGljayA9IHBheWxvYWQgPT4ge1xuICAgIGxldCB0aGVidWJibGUgPSB0aGlzLmRhdGFTb3VyY2UuYWxsQnViYmxlcy5maW5kKGIgPT4ge1xuICAgICAgbGV0IHMgPSAnQl8nICsgcGF5bG9hZC5yZXBsYWNlKC8tL2csICdfJylcbiAgICAgIHJldHVybiBiLmlkID09IHNcbiAgICB9KVxuICAgIGlmICh0aGVidWJibGUpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVNlbGVjdGVkKHRoZWJ1YmJsZSlcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZEVudGl0aWVzSWRzLmluZGV4T2YocGF5bG9hZCkgPCAwKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRFbnRpdGllc0lkcy5wdXNoKHBheWxvYWQpXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzOiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRFbnRpdGllc0lkcyxcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIGxpbWl0OiB0aGlzLmRhdGFTb3VyY2UucmVzdWx0c0xpbWl0XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlRmlsdGVyKHtcbiAgICAgICAgICAgIGFsbEJ1YmJsZXM6IHRoaXMuZGF0YVNvdXJjZS5hbGxCdWJibGVzLFxuICAgICAgICAgICAgYnViYmxlOiB0aGVidWJibGUsXG4gICAgICAgICAgICBidWJibGVQYXlsb2FkOiB7IGlkOiB0aGVidWJibGUuaWQgfSxcbiAgICAgICAgICAgIGVudGl0eUlkbWFwOiB0aGlzLmRhdGFTb3VyY2UuZW50aXR5QnViYmxlSWRNYXAsXG4gICAgICAgICAgICBzb3VyY2U6ICdidWJibGUnXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmlsdGVyYnViYmxlcmVzcG9uc2UnLCB0aGlzLmRhdGFTb3VyY2UuZ2V0QnViYmxlUGF5bG9hZChyZXMpKVxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlcyhyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxufVxuXG4iXX0=