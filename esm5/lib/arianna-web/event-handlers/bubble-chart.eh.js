/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/bubble-chart.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwBubbleChartEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwBubbleChartEH, _super);
    function AwBubbleChartEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialLoad = false;
        _this.toggleSelection = (/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /*
              Expects the ID of a bubble.
              Updates the graph with a new request
            */
            _this.dataSource.handleBubbleClick(id);
            _this.emitOuter('selection', _this.dataSource.selected);
        });
        _this.toggleFilter = (/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            /*
              Toggle the clicked eye-filter in the filteres array and
              redraw the graph.
            */
            if (_this.dataSource.filters.includes(f)) {
                _this.dataSource.filters.splice(_this.dataSource.filters.indexOf(f), 1);
            }
            else {
                _this.dataSource.filters.push(f);
            }
            _this.dataSource.updateChart(null); // null means "reuse the last response"
        });
        return _this;
    }
    /**
     * @return {?}
     */
    AwBubbleChartEH.prototype.listen = /**
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
                case 'aw-bubble-chart.click':
                    if (_this.dataSource.options.selectable !== false) {
                        _this.toggleSelection(payload);
                    }
                    _this.emitOuter('lockfilter', _this.dataSource.chartData.find((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) { return payload === el.entity.id; })));
                    break;
                case 'aw-bubble-chart.d3end':
                    { // end of d3.js draw()
                        // end of d3.js draw()
                        /** @type {?} */
                        var filteredChartData = void 0;
                        // apply filters to the data before adding tooltips
                        if (_this.dataSource.filters.length > 0) {
                            filteredChartData = _this.dataSource.chartData.filter((/**
                             * @param {?} el
                             * @return {?}
                             */
                            function (el) { return !_this.dataSource.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); }));
                        }
                        else {
                            filteredChartData = _this.dataSource.chartData;
                        }
                        _this.emitOuter('d3end', {
                            bubbles: _this.dataSource.smartSlice(filteredChartData),
                            selected: _this.dataSource.selected,
                        });
                    }
                    break;
                default:
                    console.warn('unhandled inner event of type', type, 'with payload', payload);
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
                case 'aw-home-layout.select':
                    {
                        var id_1 = payload.id;
                        _this.toggleSelection(id_1);
                        /** @type {?} */
                        var foundBubble = _this.dataSource.chartData.find((/**
                         * @param {?} el
                         * @return {?}
                         */
                        function (el) { return id_1 === el.entity.id; }));
                        if (foundBubble) {
                            _this.emitOuter('lockfilter', foundBubble);
                        }
                        else {
                            console.warn('Unable to determine which bubble was selected.');
                        }
                    }
                    break;
                case 'aw-home-layout.tagclick':
                    _this.toggleSelection(payload);
                    break;
                case 'aw-home-layout.facetclick':
                    if (!_this.dataSource.selected.includes(payload)) {
                        _this.toggleSelection(payload);
                    }
                    break;
                case 'aw-home-layout.togglefilter':
                    _this.toggleFilter(payload);
                    break;
                case 'aw-home-layout.clearselection':
                    _this.dataSource.selected = [];
                    _this.emitOuter('selection', []);
                    break;
                case 'aw-scheda-layout.filterbubbleresponse':
                case 'aw-entita-layout.filterbubbleresponse':
                case 'aw-home-layout.filterbubbleresponse':
                    _this.dataSource.updateChart(payload);
                    break;
                default:
                    break;
            }
        }));
    };
    return AwBubbleChartEH;
}(EventHandler));
export { AwBubbleChartEH };
if (false) {
    /** @type {?} */
    AwBubbleChartEH.prototype.initialLoad;
    /** @type {?} */
    AwBubbleChartEH.prototype.toggleSelection;
    /** @type {?} */
    AwBubbleChartEH.prototype.toggleFilter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBcUMsMkNBQVk7SUFBakQ7UUFBQSxxRUEwRkM7UUF6RlEsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUFvRTNCLHFCQUFlOzs7O1FBQUcsVUFBQyxFQUFFO1lBQ25COzs7Y0FHRTtZQUNGLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUE7UUFFRCxrQkFBWTs7OztRQUFHLFVBQUMsQ0FBQztZQUNmOzs7Y0FHRTtZQUNGLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQztZQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDO1FBQzVFLENBQUMsRUFBQTs7SUFDSCxDQUFDOzs7O0lBdkZRLGdDQUFNOzs7SUFBYjtRQUFBLGlCQWdFQztRQS9EQyxJ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LEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNCLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDOUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1IsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyxxQ0FBcUM7b0JBQ3hDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQXVCSCxzQkFBQztBQUFELENBQUMsQUExRkQsQ0FBcUMsWUFBWSxHQTBGaEQ7Ozs7SUF6RkMsc0NBQTJCOztJQW9FM0IsMENBT0M7O0lBRUQsdUNBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgaW5pdGlhbExvYWQgPSBmYWxzZTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5zZWxlY3RhYmxlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maW5kKChlbCkgPT4gcGF5bG9hZCA9PT0gZWwuZW50aXR5LmlkKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5kM2VuZCc6IHsgLy8gZW5kIG9mIGQzLmpzIGRyYXcoKVxuICAgICAgICAgIGxldCBmaWx0ZXJlZENoYXJ0RGF0YTtcbiAgICAgICAgICAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSBkYXRhIGJlZm9yZSBhZGRpbmcgdG9vbHRpcHNcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsdGVyZWRDaGFydERhdGEgPSB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbHRlcigoZWwpID0+ICF0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWx0ZXJlZENoYXJ0RGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkM2VuZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuZGF0YVNvdXJjZS5zbWFydFNsaWNlKGZpbHRlcmVkQ2hhcnREYXRhKSxcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUsICd3aXRoIHBheWxvYWQnLCBwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5zZWxlY3QnOiB7XG4gICAgICAgICAgY29uc3QgeyBpZCB9ID0gcGF5bG9hZDtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihpZCk7XG4gICAgICAgICAgY29uc3QgZm91bmRCdWJibGUgPSB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbmQoKGVsKSA9PiBpZCA9PT0gZWwuZW50aXR5LmlkKTtcbiAgICAgICAgICBpZiAoZm91bmRCdWJibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgZm91bmRCdWJibGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBkZXRlcm1pbmUgd2hpY2ggYnViYmxlIHdhcyBzZWxlY3RlZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnRhZ2NsaWNrJzpcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmFjZXRjbGljayc6XG4gICAgICAgICAgaWYgKCF0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQuaW5jbHVkZXMocGF5bG9hZCkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudG9nZ2xlZmlsdGVyJzpcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZpbHRlcihwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuY2xlYXJzZWxlY3Rpb24nOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZCA9IFtdO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCBbXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDaGFydChwYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdGlvbiA9IChpZCkgPT4ge1xuICAgIC8qXG4gICAgICBFeHBlY3RzIHRoZSBJRCBvZiBhIGJ1YmJsZS5cbiAgICAgIFVwZGF0ZXMgdGhlIGdyYXBoIHdpdGggYSBuZXcgcmVxdWVzdFxuICAgICovXG4gICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUJ1YmJsZUNsaWNrKGlkKTtcbiAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0aW9uJywgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkKTtcbiAgfVxuXG4gIHRvZ2dsZUZpbHRlciA9IChmKSA9PiB7XG4gICAgLypcbiAgICAgIFRvZ2dsZSB0aGUgY2xpY2tlZCBleWUtZmlsdGVyIGluIHRoZSBmaWx0ZXJlcyBhcnJheSBhbmRcbiAgICAgIHJlZHJhdyB0aGUgZ3JhcGguXG4gICAgKi9cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5jbHVkZXMoZikpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLnNwbGljZSh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5pbmRleE9mKGYpLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcnMucHVzaChmKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNoYXJ0KG51bGwpOyAvLyBudWxsIG1lYW5zIFwicmV1c2UgdGhlIGxhc3QgcmVzcG9uc2VcIlxuICB9XG59XG4iXX0=