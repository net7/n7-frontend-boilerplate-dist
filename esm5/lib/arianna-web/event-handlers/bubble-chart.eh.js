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
              Toggle the clicked filter in the filteres array and
              redraw the graph.
            */
            if (_this.dataSource.filters.includes(f)) {
                _this.dataSource.filters.splice(_this.dataSource.filters.indexOf(f), 1);
            }
            else {
                _this.dataSource.filters.push(f);
            }
            _this.dataSource.updateChart(null); // null means "keep using the same response"
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
                    _this.dataSource.tippyMaker(_this.dataSource.chartData); // make tooltips
                    break;
                case 'aw-bubble-chart.bubble-tooltip-goto-click':
                    _this.emitOuter('bubble-tooltip-goto-click', {
                        id: _this.dataSource.focusedBubble,
                        label: _this.dataSource.focusedBubbleLabel
                    });
                    break;
                case 'aw-bubble-chart.bubble-tooltip-select-click':
                    _this.toggleSelection(_this.dataSource.focusedBubble);
                    _this.emitOuter('lockfilter', _this.dataSource.chartData.find((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) { return _this.dataSource.focusedBubble == el.entity.id; })));
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
    AwBubbleChartEH.prototype.toggleSelection;
    /** @type {?} */
    AwBubbleChartEH.prototype.toggleFilter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUFxQywyQ0FBWTtJQUFqRDtRQUFBLHFFQWdGQztRQXRCQyxxQkFBZTs7OztRQUFHLFVBQUEsRUFBRTtZQUNsQjs7O2NBR0U7WUFDRixLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkQsQ0FBQyxFQUFBO1FBRUQsa0JBQVk7Ozs7UUFBRyxVQUFBLENBQUM7WUFDZDs7O2NBR0U7WUFDRixJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTthQUN0RTtpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDaEM7WUFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLDRDQUE0QztRQUNoRixDQUFDLEVBQUE7O0lBRUgsQ0FBQzs7OztJQTlFUSxnQ0FBTTs7O0lBQWI7UUFBQSxpQkFzREM7UUFyREMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FB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MENBT0M7O0lBRUQsdUNBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5jbGljayc6XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNlbGVjdGFibGUgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maW5kKGVsID0+IHBheWxvYWQgPT0gZWwuZW50aXR5LmlkKSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmQzZW5kJzogLy8gZW5kIG9mIGQzLmpzIGRyYXcoKVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aXBweU1ha2VyKHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEpIC8vIG1ha2UgdG9vbHRpcHNcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdidWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrJywge1xuICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5mb2N1c2VkQnViYmxlLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMuZGF0YVNvdXJjZS5mb2N1c2VkQnViYmxlTGFiZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLXNlbGVjdC1jbGljayc6XG4gICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24odGhpcy5kYXRhU291cmNlLmZvY3VzZWRCdWJibGUpXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbmQoZWwgPT4gdGhpcy5kYXRhU291cmNlLmZvY3VzZWRCdWJibGUgPT0gZWwuZW50aXR5LmlkKSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSwgJ3dpdGggcGF5bG9hZCcsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0Y2xpY2snOlxuICAgICAgICAgIGlmICghdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkLmluY2x1ZGVzKHBheWxvYWQpKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXlsb2FkKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudG9nZ2xlZmlsdGVyJzpcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZpbHRlcihwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5jbGVhcnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkID0gW11cbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0aW9uJywgW10pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDaGFydChwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlU2VsZWN0aW9uID0gaWQgPT4ge1xuICAgIC8qXG4gICAgICBFeHBlY3RzIHRoZSBJRCBvZiBhIGJ1YmJsZS5cbiAgICAgIFVwZGF0ZXMgdGhlIGdyYXBoIHdpdGggYSBuZXcgcmVxdWVzdFxuICAgICovXG4gICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUJ1YmJsZUNsaWNrKGlkKVxuICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQpXG4gIH1cblxuICB0b2dnbGVGaWx0ZXIgPSBmID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlIHRoZSBjbGlja2VkIGZpbHRlciBpbiB0aGUgZmlsdGVyZXMgYXJyYXkgYW5kXG4gICAgICByZWRyYXcgdGhlIGdyYXBoLlxuICAgICovXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluY2x1ZGVzKGYpKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5zcGxpY2UodGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5kZXhPZihmKSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcnMucHVzaChmKVxuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ2hhcnQobnVsbCkgLy8gbnVsbCBtZWFucyBcImtlZXAgdXNpbmcgdGhlIHNhbWUgcmVzcG9uc2VcIlxuICB9XG5cbn0iXX0=