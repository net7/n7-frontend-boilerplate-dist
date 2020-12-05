import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwBubbleChartEH = /** @class */ (function (_super) {
    __extends(AwBubbleChartEH, _super);
    function AwBubbleChartEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialLoad = false;
        _this.toggleSelection = function (id) {
            /*
              Expects the ID of a bubble.
              Updates the graph with a new request
            */
            _this.dataSource.handleBubbleClick(id);
            _this.emitOuter('selection', _this.dataSource.selected);
        };
        _this.toggleFilter = function (f) {
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
        };
        return _this;
    }
    AwBubbleChartEH.prototype.listen = function () {
        var _this = this;
        this.innerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-bubble-chart.click':
                    if (_this.dataSource.options.selectable !== false) {
                        _this.toggleSelection(payload);
                    }
                    _this.emitOuter('lockfilter', _this.dataSource.chartData.find(function (el) { return payload === el.entity.id; }));
                    break;
                case 'aw-bubble-chart.d3end':
                    { // end of d3.js draw()
                        var filteredChartData = void 0;
                        // apply filters to the data before adding tooltips
                        if (_this.dataSource.filters.length > 0) {
                            filteredChartData = _this.dataSource.chartData.filter(function (el) { return !_this.dataSource.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); });
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
        });
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-home-layout.select':
                    {
                        var id_1 = payload.id;
                        _this.toggleSelection(id_1);
                        var foundBubble = _this.dataSource.chartData.find(function (el) { return id_1 === el.entity.id; });
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
                case 'aw-entita-layout.filterbubbleresponse':
                case 'aw-home-layout.filterbubbleresponse':
                    _this.dataSource.updateChart(payload);
                    break;
                default:
                    break;
            }
        });
    };
    return AwBubbleChartEH;
}(EventHandler));
export { AwBubbleChartEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEO0lBQXFDLG1DQUFZO0lBQWpEO1FBQUEscUVBeUZDO1FBeEZRLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBbUUzQixxQkFBZSxHQUFHLFVBQUMsRUFBRTtZQUNuQjs7O2NBR0U7WUFDRixLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFBO1FBRUQsa0JBQVksR0FBRyxVQUFDLENBQUM7WUFDZjs7O2NBR0U7WUFDRixJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakM7WUFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztRQUM1RSxDQUFDLENBQUE7O0lBQ0gsQ0FBQztJQXRGUSxnQ0FBTSxHQUFiO1FBQUEsaUJBK0RDO1FBOURDLElBQUksQ0FBQyxZQUFZLENB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WUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzQixNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQzlCLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNoQyxNQUFNO2dCQUNSLEtBQUssdUNBQXVDLENBQUM7Z0JBQzdDLEtBQUsscUNBQXFDO29CQUN4QyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF1Qkgsc0JBQUM7QUFBRCxDQUFDLEFBekZELENBQXFDLFlBQVksR0F5RmhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGluaXRpYWxMb2FkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5jbGljayc6XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm9wdGlvbnMuc2VsZWN0YWJsZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbG9ja2ZpbHRlcicsIHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmluZCgoZWwpID0+IHBheWxvYWQgPT09IGVsLmVudGl0eS5pZCkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmQzZW5kJzogeyAvLyBlbmQgb2YgZDMuanMgZHJhdygpXHJcbiAgICAgICAgICBsZXQgZmlsdGVyZWRDaGFydERhdGE7XHJcbiAgICAgICAgICAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSBkYXRhIGJlZm9yZSBhZGRpbmcgdG9vbHRpcHNcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkQ2hhcnREYXRhID0gdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maWx0ZXIoKGVsKSA9PiAhdGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkQ2hhcnREYXRhID0gdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkM2VuZCcsIHtcclxuICAgICAgICAgICAgYnViYmxlczogdGhpcy5kYXRhU291cmNlLnNtYXJ0U2xpY2UoZmlsdGVyZWRDaGFydERhdGEpLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUsICd3aXRoIHBheWxvYWQnLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnNlbGVjdCc6IHtcclxuICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHBheWxvYWQ7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihpZCk7XHJcbiAgICAgICAgICBjb25zdCBmb3VuZEJ1YmJsZSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmluZCgoZWwpID0+IGlkID09PSBlbC5lbnRpdHkuaWQpO1xyXG4gICAgICAgICAgaWYgKGZvdW5kQnViYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgZm91bmRCdWJibGUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gZGV0ZXJtaW5lIHdoaWNoIGJ1YmJsZSB3YXMgc2VsZWN0ZWQuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50YWdjbGljayc6XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0Y2xpY2snOlxyXG4gICAgICAgICAgaWYgKCF0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQuaW5jbHVkZXMocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50b2dnbGVmaWx0ZXInOlxyXG4gICAgICAgICAgdGhpcy50b2dnbGVGaWx0ZXIocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5jbGVhcnNlbGVjdGlvbic6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCBbXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ2hhcnQocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2VsZWN0aW9uID0gKGlkKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBFeHBlY3RzIHRoZSBJRCBvZiBhIGJ1YmJsZS5cclxuICAgICAgVXBkYXRlcyB0aGUgZ3JhcGggd2l0aCBhIG5ldyByZXF1ZXN0XHJcbiAgICAqL1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUJ1YmJsZUNsaWNrKGlkKTtcclxuICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRmlsdGVyID0gKGYpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIFRvZ2dsZSB0aGUgY2xpY2tlZCBleWUtZmlsdGVyIGluIHRoZSBmaWx0ZXJlcyBhcnJheSBhbmRcclxuICAgICAgcmVkcmF3IHRoZSBncmFwaC5cclxuICAgICovXHJcbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5jbHVkZXMoZikpIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcnMuc3BsaWNlKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluZGV4T2YoZiksIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcnMucHVzaChmKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDaGFydChudWxsKTsgLy8gbnVsbCBtZWFucyBcInJldXNlIHRoZSBsYXN0IHJlc3BvbnNlXCJcclxuICB9XHJcbn1cclxuIl19