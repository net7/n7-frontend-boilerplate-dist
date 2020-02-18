/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUFxQywyQ0FBWTtJQUFqRDtRQUFBLHFFQW9HQztRQW5HUSxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQTZFcEMscUJBQWU7Ozs7UUFBRyxVQUFBLEVBQUU7WUFDbEI7OztjQUdFO1lBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNyQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZELENBQUMsRUFBQTtRQUVELGtCQUFZOzs7O1FBQUcsVUFBQSxDQUFDO1lBQ2Q7OztjQUdFO1lBQ0YsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDdEU7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ2hDO1lBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyx1Q0FBdUM7UUFDM0UsQ0FBQyxFQUFBOztJQUVILENBQUM7Ozs7SUFqR1EsZ0NBQU07OztJQUFiO1FBQUEsaUJBeUVDO1FBeEVDLElB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Q0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDL0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtxQkFDOUI7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLDZCQUE2QjtvQkFDaEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDMUIsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO29CQUM3QixLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQTtvQkFDL0IsTUFBTTtnQkFDUixLQUFLLHVDQUF1QyxDQUFDO2dCQUM3QyxLQUFLLHVDQUF1QyxDQUFDO2dCQUM3QyxLQUFLLHFDQUFxQztvQkFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3BDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBd0JILHNCQUFDO0FBQUQsQ0FBQyxBQXBHRCxDQUFxQyxZQUFZLEdBb0doRDs7OztJQW5HQyxzQ0FBb0M7O0lBNkVwQywwQ0FPQzs7SUFFRCx1Q0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBpbml0aWFsTG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5jbGljayc6XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNlbGVjdGFibGUgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maW5kKGVsID0+IHBheWxvYWQgPT0gZWwuZW50aXR5LmlkKSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmQzZW5kJzogLy8gZW5kIG9mIGQzLmpzIGRyYXcoKVxuICAgICAgICAgIGxldCBmaWx0ZXJlZENoYXJ0RGF0YVxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIGRhdGEgYmVmb3JlIGFkZGluZyB0b29sdGlwc1xuICAgICAgICAgICAgZmlsdGVyZWRDaGFydERhdGEgPSB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbHRlcihlbCA9PiAhdGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWx0ZXJlZENoYXJ0RGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGFcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2QzZW5kJywge1xuICAgICAgICAgICAgYnViYmxlczogdGhpcy5kYXRhU291cmNlLnNtYXJ0U2xpY2UoZmlsdGVyZWRDaGFydERhdGEpLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrJzpcbiAgICAgICAgLy8gICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtZ290by1jbGljaycsIHtcbiAgICAgICAgLy8gICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuZm9jdXNlZEJ1YmJsZSxcbiAgICAgICAgLy8gICAgIGxhYmVsOiB0aGlzLmRhdGFTb3VyY2UuZm9jdXNlZEJ1YmJsZUxhYmVsXG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgIC8vIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2snOlxuICAgICAgICAvLyAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHRoaXMuZGF0YVNvdXJjZS5mb2N1c2VkQnViYmxlKVxuICAgICAgICAvLyAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maW5kKGVsID0+IHRoaXMuZGF0YVNvdXJjZS5mb2N1c2VkQnViYmxlID09IGVsLmVudGl0eS5pZCkpXG4gICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUsICd3aXRoIHBheWxvYWQnLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnNlbGVjdCc6XG4gICAgICAgICAgY29uc3QgeyBpZCB9ID0gcGF5bG9hZFxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKGlkKVxuICAgICAgICAgIGNvbnN0IGZvdW5kQnViYmxlID0gdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maW5kKGVsID0+IGlkID09IGVsLmVudGl0eS5pZClcbiAgICAgICAgICBpZiAoZm91bmRCdWJibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgZm91bmRCdWJibGUpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIGRldGVybWluZSB3aGljaCBidWJibGUgd2FzIHNlbGVjdGVkLicpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50YWdjbGljayc6XG4gICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmFjZXRjbGljayc6XG4gICAgICAgICAgaWYgKCF0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQuaW5jbHVkZXMocGF5bG9hZCkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50b2dnbGVmaWx0ZXInOlxuICAgICAgICAgIHRoaXMudG9nZ2xlRmlsdGVyKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQgPSBbXVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCBbXSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNoYXJ0KHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVTZWxlY3Rpb24gPSBpZCA9PiB7XG4gICAgLypcbiAgICAgIEV4cGVjdHMgdGhlIElEIG9mIGEgYnViYmxlLlxuICAgICAgVXBkYXRlcyB0aGUgZ3JhcGggd2l0aCBhIG5ldyByZXF1ZXN0XG4gICAgKi9cbiAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlQnViYmxlQ2xpY2soaWQpXG4gICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdGlvbicsIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZClcbiAgfVxuXG4gIHRvZ2dsZUZpbHRlciA9IGYgPT4ge1xuICAgIC8qXG4gICAgICBUb2dnbGUgdGhlIGNsaWNrZWQgZXllLWZpbHRlciBpbiB0aGUgZmlsdGVyZXMgYXJyYXkgYW5kXG4gICAgICByZWRyYXcgdGhlIGdyYXBoLlxuICAgICovXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluY2x1ZGVzKGYpKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5zcGxpY2UodGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5kZXhPZihmKSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcnMucHVzaChmKVxuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ2hhcnQobnVsbCkgLy8gbnVsbCBtZWFucyBcInJldXNlIHRoZSBsYXN0IHJlc3BvbnNlXCJcbiAgfVxuXG59Il19