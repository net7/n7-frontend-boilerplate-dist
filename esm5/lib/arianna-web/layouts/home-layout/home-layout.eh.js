/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { debounce, debounceTime } from 'rxjs/operators';
var 
// import { takeUntil } from 'rxjs/operators';
// import { debounce, debounceTime } from 'rxjs/operators';
AwHomeLayoutEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutEH, _super);
    function AwHomeLayoutEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.destroyed$ = new Subject();
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
            console.log(response);
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
// import { takeUntil } from 'rxjs/operators';
// import { debounce, debounceTime } from 'rxjs/operators';
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQWEsT0FBTyxFQUFZLE1BQU0sTUFBTSxDQUFDOzs7QUFJcEQ7Ozs7SUFBb0MsMENBQVk7SUFBaEQ7UUFBQSxxRUF3SkM7UUF2SlMsZ0JBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQzs7SUF1Sm5ELENBQUM7Ozs7SUFuSlEsK0JBQU07OztJQUFiO1FBQUEsaUJBZ0lDO1FBL0hDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsscUJBQXFCO29CQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixLQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7b0JBQzNDLE1BQU07Z0JBQ1IsS0FBSyx3QkFBd0I7b0JBQzNCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLGdCQUFnQjtvQkFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZ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QixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QyxJQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFHOzt3QkFDaEMsYUFBYSxHQUFHO3dCQUNsQixjQUFjOzs7O3dCQUFFLFVBQUMsVUFBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsVUFBVSxFQUF6QyxDQUF5QyxDQUFBO3dCQUN6RSxNQUFNLEVBQUUsUUFBUTt3QkFDaEIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osU0FBUyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztxQkFDckM7b0JBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxhQUFhLENBQUMsQ0FBQztpQkFDdkQ7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXhKRCxDQUFvQyxZQUFZLEdBd0ovQzs7Ozs7Ozs7O0lBdkpDLG9DQUFpRDs7Ozs7SUFDakQsdUNBQTJCOzs7OztJQUMzQiwrQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG4vLyBpbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBpbXBvcnQgeyBkZWJvdW5jZSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIHJvdXRlOiBhbnk7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuaW5pdCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmxvYWRGaWx0ZXJzKCk7XG4gICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kZXN0cm95JzpcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhlcm8uY2hhbmdlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25IZXJvQ2hhbmdlKHBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWZhY2V0cy13cmFwcGVyLmNsaWNrJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlRmFjZXRIZWFkZXJDbGljayhwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5jaGFuZ2UnOlxuICAgICAgICAgIGlmIChwYXlsb2FkLnZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbnB1dDogcGF5bG9hZC52YWx1ZSxcbiAgICAgICAgICAgICAgdHlwZU9mRW50aXR5OiBwYXlsb2FkLmlucHV0UGF5bG9hZC5yZXBsYWNlKCctc2VhcmNoJywgJycpLFxuICAgICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAvLyBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1ha2VSZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywgcGFyYW1zKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZmFjZXRzd3JhcHBlcnJlc3BvbnNlJywgeyBmYWNldElkOiBwYXlsb2FkLCByZXNwb25zZSB9KVxuICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICdhdy1hdXRvY29tcGxldGUtd3JhcHBlcicsIC8vIElEXG4gICAgICAgICAgICAgICAgeyBrZXk6IHBheWxvYWQudmFsdWUsIHJlc3BvbnNlIH0sIC8vIERBVEFcbiAgICAgICAgICAgICAgICB7IGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0gLy8gT1BUSU9OU1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1mYWNldHMtd3JhcHBlci5lbnRlcic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUZhY2V0U2VhcmNoRW50ZXIocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtY2xvc2UtY2xpY2tcIjpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVUb29sdGlwQ2xpY2soJ2Nsb3NlJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGlja1wiOlxuICAgICAgICAgIGlmICghcGF5bG9hZCB8fCAhcGF5bG9hZC5lbnRpdHlJZCkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZW1pdEdsb2JhbCgnbmF2aWdhdGUnLCB7XG4gICAgICAgICAgICBoYW5kbGVyOiAncm91dGVyJyxcbiAgICAgICAgICAgIHBhdGg6IFtgYXcvZW50aXRhLyR7cGF5bG9hZC5lbnRpdHlJZH1gXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLXNlbGVjdC1jbGlja1wiOlxuICAgICAgICAgIHBheWxvYWQuX2J1YmJsZUNoYXJ0ID0gdGhpcy5kYXRhU291cmNlLl9idWJibGVDaGFydDtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrJywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5jbGljayc6XG4gICAgICAgICAgaWYgKHBheWxvYWQuc291cmNlID09PSAnYnViYmxlJykge1xuICAgICAgICAgICAgaWYgKHBheWxvYWQuYnViYmxlKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVGaWx0ZXIocGF5bG9hZCk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVTZWxlY3RlZChwYXlsb2FkLmJ1YmJsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyUmVxdWVzdCgpIHJldHVybmVkOiAnLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZXMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnNvdXJjZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZUZpbHRlcihwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZURlc2VsZWN0ZWQoe1xuICAgICAgICAgICAgICBidWJibGVQYXlsb2FkOiBwYXlsb2FkLmJ1YmJsZVBheWxvYWQsXG4gICAgICAgICAgICAgIGJ1YmJsZTogcGF5bG9hZC5idWJibGVcbiAgICAgICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQnViYmxlcyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS1maWx0ZXJlZCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUJ1YmJsZUZpbHRlcihwYXlsb2FkKTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlVGFncygpO1xuICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYXRhU291cmNlLmxvYWRpbmdCdWJibGVzID0gZmFsc2U7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGFncyAmIEl0ZW0gUHJldmlld3MgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXIuY2xpY2snOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vblRhZ0NsaWNrZWQocGF5bG9hZCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2ZpbHRlcmJ1YmJsZXJlc3BvbnNlJywgdGhpcy5kYXRhU291cmNlLmdldEJ1YmJsZVBheWxvYWQocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVCdWJibGVzKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5yZW5kZXJJdGVtVGFncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1saW5rZWQtb2JqZWN0cy5kYXRhcmVxdWVzdCc6XG4gICAgICAgICAgbGV0IHsgY3VycmVudFBhZ2UgfSA9IHBheWxvYWRcbiAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRFbnRpdGllc0lkczogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkRW50aXRpZXNJZHMsXG4gICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiBjdXJyZW50UGFnZSAqIHRoaXMuZGF0YVNvdXJjZS5yZXN1bHRzTGltaXQgLFxuICAgICAgICAgICAgICBsaW1pdDogdGhpcy5kYXRhU291cmNlLnJlc3VsdHNMaW1pdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFrZVJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCBwYXJhbXMpLnN1YnNjcmliZSggcmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2RhdGFyZXNwb25zZScsIHsgcmVzIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIGZldGNoIGFkZGl0aW9uYWwgZGF0YS4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRGaWx0ZXJzKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5pbml0aWFsRmlsdGVyUmVxdWVzdCgpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFyc2VJbml0aWFsUmVxdWVzdChyZXNwb25zZSk7XG4gICAgICAgIGlmICggdGhpcy5kYXRhU291cmNlLmJ1YmJsZXNFbmFibGVkICkge1xuICAgICAgICAgIGxldCBidWJibGVQYXlsb2FkID0ge1xuICAgICAgICAgICAgc2V0QnViYmxlQ2hhcnQ6IChidWJibGVDcmVmKSA9PiB0aGlzLmRhdGFTb3VyY2UuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZixcbiAgICAgICAgICAgIHNvdXJjZTogcmVzcG9uc2UsXG4gICAgICAgICAgICByZXNldDogZmFsc2UsXG4gICAgICAgICAgICBmYWNldERhdGE6IHRoaXMuZGF0YVNvdXJjZS5mYWNldERhdGFcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdmaWx0ZXJidWJibGVyZXNwb25zZScsIGJ1YmJsZVBheWxvYWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXX0=