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
                    _this.toggleSelection(payload);
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
                    _this.emitGlobal('navigate', {
                        handler: 'router',
                        path: ["aw/entita/" + _this.dataSource.focusedBubble]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUFxQywyQ0FBWTtJQUFqRDtRQUFBLHFFQThFQztRQXRCQyxxQkFBZTs7OztRQUFHLFVBQUEsRUFBRTtZQUNsQjs7O2NBR0U7WUFDRixLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkQsQ0FBQyxFQUFBO1FBRUQsa0JBQVk7Ozs7UUFBRyxVQUFBLENBQUM7WUFDZDs7O2NBR0U7WUFDRixJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTthQUN0RTtpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDaEM7WUFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLDRDQUE0QztRQUNoRixDQUFDLEVBQUE7O0lBRUgsQ0FBQzs7OztJQTVFUSxnQ0FBTTs7O0lBQWI7UUFBQSxpQkFvREM7UUFuREMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FB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ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbmQoZWwgPT4gcGF5bG9hZCA9PSBlbC5lbnRpdHkuaWQpKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiAvLyBlbmQgb2YgZDMuanMgZHJhdygpXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRpcHB5TWFrZXIodGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YSkgLy8gbWFrZSB0b29sdGlwc1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGljayc6XG4gICAgICAgICAgdGhpcy5lbWl0R2xvYmFsKCduYXZpZ2F0ZScsIHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICdyb3V0ZXInLFxuICAgICAgICAgICAgcGF0aDogW2Bhdy9lbnRpdGEvJHt0aGlzLmRhdGFTb3VyY2UuZm9jdXNlZEJ1YmJsZX1gXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrJzpcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbih0aGlzLmRhdGFTb3VyY2UuZm9jdXNlZEJ1YmJsZSlcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbG9ja2ZpbHRlcicsIHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmluZChlbCA9PiB0aGlzLmRhdGFTb3VyY2UuZm9jdXNlZEJ1YmJsZSA9PSBlbC5lbnRpdHkuaWQpKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlLCAnd2l0aCBwYXlsb2FkJywgcGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50YWdjbGljayc6XG4gICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmFjZXRjbGljayc6XG4gICAgICAgICAgaWYgKCF0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQuaW5jbHVkZXMocGF5bG9hZCkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50b2dnbGVmaWx0ZXInOlxuICAgICAgICAgIHRoaXMudG9nZ2xlRmlsdGVyKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQgPSBbXVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCBbXSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNoYXJ0KHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVTZWxlY3Rpb24gPSBpZCA9PiB7XG4gICAgLypcbiAgICAgIEV4cGVjdHMgdGhlIElEIG9mIGEgYnViYmxlLlxuICAgICAgVXBkYXRlcyB0aGUgZ3JhcGggd2l0aCBhIG5ldyByZXF1ZXN0XG4gICAgKi9cbiAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlQnViYmxlQ2xpY2soaWQpXG4gICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdGlvbicsIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZClcbiAgfVxuXG4gIHRvZ2dsZUZpbHRlciA9IGYgPT4ge1xuICAgIC8qXG4gICAgICBUb2dnbGUgdGhlIGNsaWNrZWQgZmlsdGVyIGluIHRoZSBmaWx0ZXJlcyBhcnJheSBhbmRcbiAgICAgIHJlZHJhdyB0aGUgZ3JhcGguXG4gICAgKi9cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5jbHVkZXMoZikpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLnNwbGljZSh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5pbmRleE9mKGYpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5wdXNoKGYpXG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDaGFydChudWxsKSAvLyBudWxsIG1lYW5zIFwia2VlcCB1c2luZyB0aGUgc2FtZSByZXNwb25zZVwiXG4gIH1cblxufSJdfQ==