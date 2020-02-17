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
                    if (_this.dataSource.options.selectable != false) {
                        _this.toggleSelection(payload);
                    }
                    _this.emitOuter('lockfilter', _this.dataSource.chartData.find((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) { return payload == el.entity.id; })));
                    break;
                case 'aw-bubble-chart.d3end': // end of d3.js draw()
                    // end of d3.js draw()
                    /** @type {?} */
                    var filteredChartData = void 0;
                    if (_this.dataSource.filters.length > 0) { // apply filters to the data before adding tooltips
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
                        selected: _this.dataSource.selected
                    });
                    break;
                // case 'aw-bubble-chart.bubble-tooltip-goto-click':
                //   this.emitOuter('bubble-tooltip-goto-click', {
                //     id: this.dataSource.focusedBubble,
                //     label: this.dataSource.focusedBubbleLabel
                //   });
                //   break;
                // case 'aw-bubble-chart.bubble-tooltip-select-click':
                //   this.toggleSelection(this.dataSource.focusedBubble)
                //   this.emitOuter('lockfilter', this.dataSource.chartData.find(el => this.dataSource.focusedBubble == el.entity.id))
                //   break;
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
                    var id_1 = payload.id;
                    _this.toggleSelection(id_1);
                    /** @type {?} */
                    var foundBubble = _this.dataSource.chartData.find((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) { return id_1 == el.entity.id; }));
                    if (foundBubble) {
                        _this.emitOuter('lockfilter', foundBubble);
                    }
                    else {
                        console.warn('Unable to determine which bubble was selected.');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBcUMsMkNBQVk7SUFBakQ7UUFBQSxxRUFvR0M7UUFuR1EsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUE2RXBDLHFCQUFlOzs7O1FBQUcsVUFBQSxFQUFFO1lBQ2xCOzs7Y0FHRTtZQUNGLEtBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2RCxDQUFDLEVBQUE7UUFFRCxrQkFBWTs7OztRQUFHLFVBQUEsQ0FBQztZQUNkOzs7Y0FHRTtZQUNGLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3RFO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNoQztZQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsdUNBQXVDO1FBQzNFLENBQUMsRUFBQTs7SUFFSCxDQUFDOzs7O0lBakdRLGdDQUFNOzs7SUFBYjtRQUFBLGlCQXlFQztRQXhFQyxJ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LENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQy9DLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7cUJBQzlCO29CQUNELE1BQU07Z0JBQ1IsS0FBSyw2QkFBNkI7b0JBQ2hDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQzFCLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtvQkFDN0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7b0JBQy9CLE1BQU07Z0JBQ1IsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyxxQ0FBcUM7b0JBQ3hDLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNwQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQXdCSCxzQkFBQztBQUFELENBQUMsQUFwR0QsQ0FBcUMsWUFBWSxHQW9HaEQ7Ozs7SUFuR0Msc0NBQW9DOztJQTZFcEMsMENBT0M7O0lBRUQsdUNBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBwdWJsaWMgaW5pdGlhbExvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5zZWxlY3RhYmxlICE9IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXlsb2FkKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbG9ja2ZpbHRlcicsIHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmluZChlbCA9PiBwYXlsb2FkID09IGVsLmVudGl0eS5pZCkpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5kM2VuZCc6IC8vIGVuZCBvZiBkMy5qcyBkcmF3KClcbiAgICAgICAgICBsZXQgZmlsdGVyZWRDaGFydERhdGFcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSBkYXRhIGJlZm9yZSBhZGRpbmcgdG9vbHRpcHNcbiAgICAgICAgICAgIGZpbHRlcmVkQ2hhcnREYXRhID0gdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maWx0ZXIoZWwgPT4gIXRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyZWRDaGFydERhdGEgPSB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkM2VuZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuZGF0YVNvdXJjZS5zbWFydFNsaWNlKGZpbHRlcmVkQ2hhcnREYXRhKSxcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWRcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlICdhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGljayc6XG4gICAgICAgIC8vICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snLCB7XG4gICAgICAgIC8vICAgICBpZDogdGhpcy5kYXRhU291cmNlLmZvY3VzZWRCdWJibGUsXG4gICAgICAgIC8vICAgICBsYWJlbDogdGhpcy5kYXRhU291cmNlLmZvY3VzZWRCdWJibGVMYWJlbFxuICAgICAgICAvLyAgIH0pO1xuICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlICdhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrJzpcbiAgICAgICAgLy8gICB0aGlzLnRvZ2dsZVNlbGVjdGlvbih0aGlzLmRhdGFTb3VyY2UuZm9jdXNlZEJ1YmJsZSlcbiAgICAgICAgLy8gICB0aGlzLmVtaXRPdXRlcignbG9ja2ZpbHRlcicsIHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmluZChlbCA9PiB0aGlzLmRhdGFTb3VyY2UuZm9jdXNlZEJ1YmJsZSA9PSBlbC5lbnRpdHkuaWQpKVxuICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlLCAnd2l0aCBwYXlsb2FkJywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5zZWxlY3QnOlxuICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHBheWxvYWRcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihpZClcbiAgICAgICAgICBjb25zdCBmb3VuZEJ1YmJsZSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmluZChlbCA9PiBpZCA9PSBlbC5lbnRpdHkuaWQpXG4gICAgICAgICAgaWYgKGZvdW5kQnViYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbG9ja2ZpbHRlcicsIGZvdW5kQnViYmxlKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBkZXRlcm1pbmUgd2hpY2ggYnViYmxlIHdhcyBzZWxlY3RlZC4nKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0Y2xpY2snOlxuICAgICAgICAgIGlmICghdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkLmluY2x1ZGVzKHBheWxvYWQpKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXlsb2FkKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudG9nZ2xlZmlsdGVyJzpcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZpbHRlcihwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5jbGVhcnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkID0gW11cbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0aW9uJywgW10pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDaGFydChwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlU2VsZWN0aW9uID0gaWQgPT4ge1xuICAgIC8qXG4gICAgICBFeHBlY3RzIHRoZSBJRCBvZiBhIGJ1YmJsZS5cbiAgICAgIFVwZGF0ZXMgdGhlIGdyYXBoIHdpdGggYSBuZXcgcmVxdWVzdFxuICAgICovXG4gICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUJ1YmJsZUNsaWNrKGlkKVxuICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQpXG4gIH1cblxuICB0b2dnbGVGaWx0ZXIgPSBmID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlIHRoZSBjbGlja2VkIGV5ZS1maWx0ZXIgaW4gdGhlIGZpbHRlcmVzIGFycmF5IGFuZFxuICAgICAgcmVkcmF3IHRoZSBncmFwaC5cbiAgICAqL1xuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5pbmNsdWRlcyhmKSkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcnMuc3BsaWNlKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluZGV4T2YoZiksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLnB1c2goZilcbiAgICB9XG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNoYXJ0KG51bGwpIC8vIG51bGwgbWVhbnMgXCJyZXVzZSB0aGUgbGFzdCByZXNwb25zZVwiXG4gIH1cblxufSJdfQ==