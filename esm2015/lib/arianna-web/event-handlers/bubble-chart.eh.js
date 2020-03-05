/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/bubble-chart.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwBubbleChartEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.initialLoad = false;
        this.toggleSelection = (/**
         * @param {?} id
         * @return {?}
         */
        (id) => {
            /*
              Expects the ID of a bubble.
              Updates the graph with a new request
            */
            this.dataSource.handleBubbleClick(id);
            this.emitOuter('selection', this.dataSource.selected);
        });
        this.toggleFilter = (/**
         * @param {?} f
         * @return {?}
         */
        (f) => {
            /*
              Toggle the clicked eye-filter in the filteres array and
              redraw the graph.
            */
            if (this.dataSource.filters.includes(f)) {
                this.dataSource.filters.splice(this.dataSource.filters.indexOf(f), 1);
            }
            else {
                this.dataSource.filters.push(f);
            }
            this.dataSource.updateChart(null); // null means "reuse the last response"
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
                case 'aw-bubble-chart.click':
                    if (this.dataSource.options.selectable !== false) {
                        this.toggleSelection(payload);
                    }
                    this.emitOuter('lockfilter', this.dataSource.chartData.find((/**
                     * @param {?} el
                     * @return {?}
                     */
                    (el) => payload === el.entity.id)));
                    break;
                case 'aw-bubble-chart.d3end':
                    { // end of d3.js draw()
                        // end of d3.js draw()
                        /** @type {?} */
                        let filteredChartData;
                        // apply filters to the data before adding tooltips
                        if (this.dataSource.filters.length > 0) {
                            filteredChartData = this.dataSource.chartData.filter((/**
                             * @param {?} el
                             * @return {?}
                             */
                            (el) => !this.dataSource.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-'))));
                        }
                        else {
                            filteredChartData = this.dataSource.chartData;
                        }
                        this.emitOuter('d3end', {
                            bubbles: this.dataSource.smartSlice(filteredChartData),
                            selected: this.dataSource.selected,
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
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.select':
                    {
                        const { id } = payload;
                        this.toggleSelection(id);
                        /** @type {?} */
                        const foundBubble = this.dataSource.chartData.find((/**
                         * @param {?} el
                         * @return {?}
                         */
                        (el) => id === el.entity.id));
                        if (foundBubble) {
                            this.emitOuter('lockfilter', foundBubble);
                        }
                        else {
                            console.warn('Unable to determine which bubble was selected.');
                        }
                    }
                    break;
                case 'aw-home-layout.tagclick':
                    this.toggleSelection(payload);
                    break;
                case 'aw-home-layout.facetclick':
                    if (!this.dataSource.selected.includes(payload)) {
                        this.toggleSelection(payload);
                    }
                    break;
                case 'aw-home-layout.togglefilter':
                    this.toggleFilter(payload);
                    break;
                case 'aw-home-layout.clearselection':
                    this.dataSource.selected = [];
                    this.emitOuter('selection', []);
                    break;
                case 'aw-scheda-layout.filterbubbleresponse':
                case 'aw-entita-layout.filterbubbleresponse':
                case 'aw-home-layout.filterbubbleresponse':
                    this.dataSource.updateChart(payload);
                    break;
                default:
                    break;
            }
        }));
    }
}
if (false) {
    /** @type {?} */
    AwBubbleChartEH.prototype.initialLoad;
    /** @type {?} */
    AwBubbleChartEH.prototype.toggleSelection;
    /** @type {?} */
    AwBubbleChartEH.prototype.toggleFilter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBQWpEOztRQUNTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBb0UzQixvQkFBZTs7OztRQUFHLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdkI7OztjQUdFO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELENBQUMsRUFBQTtRQUVELGlCQUFZOzs7O1FBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNuQjs7O2NBR0U7WUFDRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztRQUM1RSxDQUFDLEVBQUE7SUFDSCxDQUFDOzs7O0lBdkZRLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQzFCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTt3QkFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDL0I7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSTs7OztvQkFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztvQkFDL0YsTUFBTTtnQkFDUixLQUFLLHVCQUF1QjtvQkFBRSxFQUFFLHNCQUFzQjs7OzRCQUNoRCxpQkFBaUI7d0JBQ3JCLG1EQUFtRDt3QkFDbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUN0QyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7OzRCQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQzt5QkFDNUk7NkJBQU07NEJBQ0wsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7eUJBQy9DO3dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFOzRCQUN0QixPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7NEJBQ3RELFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7eUJBQ25DLENBQUMsQ0FBQztxQkFDSjtvQkFBQyxNQUFNO2dCQUNSO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDN0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyx1QkFBdUI7b0JBQUU7OEJBQ3RCLEVBQUUsRUFBRSxFQUFFLEdBQUcsT0FBTzt3QkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7OEJBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O3dCQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUM7d0JBQy9FLElBQUksV0FBVyxFQUFFOzRCQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO3lCQUMzQzs2QkFBTTs0QkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxDQUFDLENBQUM7eUJBQ2hFO3FCQUNGO29CQUFDLE1BQU07Z0JBQ1IsS0FBSyx5QkFBeUI7b0JBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzlCLE1BQU07Z0JBQ1IsS0FBSywyQkFBMkI7b0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQy9CO29CQUNELE1BQU07Z0JBQ1IsS0FBSyw2QkFBNkI7b0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNCLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1IsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyxxQ0FBcUM7b0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQXVCRjs7O0lBekZDLHNDQUEyQjs7SUFvRTNCLDBDQU9DOztJQUVELHVDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHVibGljIGluaXRpYWxMb2FkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5jbGljayc6XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm9wdGlvbnMuc2VsZWN0YWJsZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbG9ja2ZpbHRlcicsIHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmluZCgoZWwpID0+IHBheWxvYWQgPT09IGVsLmVudGl0eS5pZCkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmQzZW5kJzogeyAvLyBlbmQgb2YgZDMuanMgZHJhdygpXHJcbiAgICAgICAgICBsZXQgZmlsdGVyZWRDaGFydERhdGE7XHJcbiAgICAgICAgICAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSBkYXRhIGJlZm9yZSBhZGRpbmcgdG9vbHRpcHNcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkQ2hhcnREYXRhID0gdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maWx0ZXIoKGVsKSA9PiAhdGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkQ2hhcnREYXRhID0gdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkM2VuZCcsIHtcclxuICAgICAgICAgICAgYnViYmxlczogdGhpcy5kYXRhU291cmNlLnNtYXJ0U2xpY2UoZmlsdGVyZWRDaGFydERhdGEpLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUsICd3aXRoIHBheWxvYWQnLCBwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnNlbGVjdCc6IHtcclxuICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHBheWxvYWQ7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihpZCk7XHJcbiAgICAgICAgICBjb25zdCBmb3VuZEJ1YmJsZSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmluZCgoZWwpID0+IGlkID09PSBlbC5lbnRpdHkuaWQpO1xyXG4gICAgICAgICAgaWYgKGZvdW5kQnViYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgZm91bmRCdWJibGUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gZGV0ZXJtaW5lIHdoaWNoIGJ1YmJsZSB3YXMgc2VsZWN0ZWQuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50YWdjbGljayc6XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0Y2xpY2snOlxyXG4gICAgICAgICAgaWYgKCF0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQuaW5jbHVkZXMocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50b2dnbGVmaWx0ZXInOlxyXG4gICAgICAgICAgdGhpcy50b2dnbGVGaWx0ZXIocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5jbGVhcnNlbGVjdGlvbic6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCBbXSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcclxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ2hhcnQocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2VsZWN0aW9uID0gKGlkKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBFeHBlY3RzIHRoZSBJRCBvZiBhIGJ1YmJsZS5cclxuICAgICAgVXBkYXRlcyB0aGUgZ3JhcGggd2l0aCBhIG5ldyByZXF1ZXN0XHJcbiAgICAqL1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUJ1YmJsZUNsaWNrKGlkKTtcclxuICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRmlsdGVyID0gKGYpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIFRvZ2dsZSB0aGUgY2xpY2tlZCBleWUtZmlsdGVyIGluIHRoZSBmaWx0ZXJlcyBhcnJheSBhbmRcclxuICAgICAgcmVkcmF3IHRoZSBncmFwaC5cclxuICAgICovXHJcbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5jbHVkZXMoZikpIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcnMuc3BsaWNlKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluZGV4T2YoZiksIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcnMucHVzaChmKTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDaGFydChudWxsKTsgLy8gbnVsbCBtZWFucyBcInJldXNlIHRoZSBsYXN0IHJlc3BvbnNlXCJcclxuICB9XHJcbn1cclxuIl19