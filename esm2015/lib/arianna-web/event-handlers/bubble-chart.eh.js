/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwBubbleChartEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.toggleSelection = (/**
         * @param {?} id
         * @return {?}
         */
        id => {
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
        f => {
            /*
              Toggle the clicked filter in the filteres array and
              redraw the graph.
            */
            if (this.dataSource.filters.includes(f)) {
                this.dataSource.filters.splice(this.dataSource.filters.indexOf(f), 1);
            }
            else {
                this.dataSource.filters.push(f);
            }
            this.dataSource.updateChart(null); // null means "keep using the same response"
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
                    if (this.dataSource.options.selectable != false) {
                        this.toggleSelection(payload);
                    }
                    this.emitOuter('lockfilter', this.dataSource.chartData.find((/**
                     * @param {?} el
                     * @return {?}
                     */
                    el => payload == el.entity.id)));
                    break;
                case 'aw-bubble-chart.d3end': // end of d3.js draw()
                    this.dataSource.tippyMaker(this.dataSource.chartData); // make tooltips
                    break;
                case 'aw-bubble-chart.bubble-tooltip-goto-click':
                    this.emitOuter('bubble-tooltip-goto-click', {
                        id: this.dataSource.focusedBubble,
                        label: this.dataSource.focusedBubbleLabel
                    });
                    break;
                case 'aw-bubble-chart.bubble-tooltip-select-click':
                    this.toggleSelection(this.dataSource.focusedBubble);
                    this.emitOuter('lockfilter', this.dataSource.chartData.find((/**
                     * @param {?} el
                     * @return {?}
                     */
                    el => this.dataSource.focusedBubble == el.entity.id)));
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
    AwBubbleChartEH.prototype.toggleSelection;
    /** @type {?} */
    AwBubbleChartEH.prototype.toggleFilter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxlQUFnQixTQUFRLFlBQVk7SUFBakQ7O1FBMERFLG9CQUFlOzs7O1FBQUcsRUFBRSxDQUFDLEVBQUU7WUFDckI7OztjQUdFO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3ZELENBQUMsRUFBQTtRQUVELGlCQUFZOzs7O1FBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDakI7OztjQUdFO1lBQ0YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDdEU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ2hDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyw0Q0FBNEM7UUFDaEYsQ0FBQyxFQUFBO0lBRUgsQ0FBQzs7OztJQTlFUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUU7d0JBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7cUJBQzlCO29CQUNELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7b0JBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFBO29CQUMzRixNQUFNO2dCQUNSLEtBQUssdUJBQXVCLEVBQUUsc0JBQXNCO29CQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUMsZ0JBQWdCO29CQUN0RSxNQUFNO2dCQUNSLEtBQUssMkNBQTJDO29CQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixFQUFFO3dCQUMxQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3dCQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0I7cUJBQzFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssNkNBQTZDO29CQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7b0JBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUk7Ozs7b0JBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUE7b0JBQ2pILE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFBO29CQUM1RSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHlCQUF5QjtvQkFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDN0IsTUFBTTtnQkFDUixLQUFLLDJCQUEyQjtvQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtxQkFDOUI7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLDZCQUE2QjtvQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDMUIsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO29CQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQTtvQkFDL0IsTUFBTTtnQkFDUixLQUFLLHVDQUF1QyxDQUFDO2dCQUM3QyxLQUFLLHVDQUF1QyxDQUFDO2dCQUM3QyxLQUFLLHFDQUFxQztvQkFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3BDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBd0JGOzs7SUF0QkMsMENBT0M7O0lBRUQsdUNBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5jbGljayc6XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNlbGVjdGFibGUgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maW5kKGVsID0+IHBheWxvYWQgPT0gZWwuZW50aXR5LmlkKSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmQzZW5kJzogLy8gZW5kIG9mIGQzLmpzIGRyYXcoKVxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50aXBweU1ha2VyKHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEpIC8vIG1ha2UgdG9vbHRpcHNcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdidWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrJywge1xuICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5mb2N1c2VkQnViYmxlLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMuZGF0YVNvdXJjZS5mb2N1c2VkQnViYmxlTGFiZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLXNlbGVjdC1jbGljayc6XG4gICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24odGhpcy5kYXRhU291cmNlLmZvY3VzZWRCdWJibGUpXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbmQoZWwgPT4gdGhpcy5kYXRhU291cmNlLmZvY3VzZWRCdWJibGUgPT0gZWwuZW50aXR5LmlkKSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSwgJ3dpdGggcGF5bG9hZCcsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0Y2xpY2snOlxuICAgICAgICAgIGlmICghdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkLmluY2x1ZGVzKHBheWxvYWQpKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXlsb2FkKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudG9nZ2xlZmlsdGVyJzpcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZpbHRlcihwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5jbGVhcnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkID0gW11cbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0aW9uJywgW10pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDaGFydChwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlU2VsZWN0aW9uID0gaWQgPT4ge1xuICAgIC8qXG4gICAgICBFeHBlY3RzIHRoZSBJRCBvZiBhIGJ1YmJsZS5cbiAgICAgIFVwZGF0ZXMgdGhlIGdyYXBoIHdpdGggYSBuZXcgcmVxdWVzdFxuICAgICovXG4gICAgdGhpcy5kYXRhU291cmNlLmhhbmRsZUJ1YmJsZUNsaWNrKGlkKVxuICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQpXG4gIH1cblxuICB0b2dnbGVGaWx0ZXIgPSBmID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlIHRoZSBjbGlja2VkIGZpbHRlciBpbiB0aGUgZmlsdGVyZXMgYXJyYXkgYW5kXG4gICAgICByZWRyYXcgdGhlIGdyYXBoLlxuICAgICovXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluY2x1ZGVzKGYpKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5zcGxpY2UodGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5kZXhPZihmKSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcnMucHVzaChmKVxuICAgIH1cbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ2hhcnQobnVsbCkgLy8gbnVsbCBtZWFucyBcImtlZXAgdXNpbmcgdGhlIHNhbWUgcmVzcG9uc2VcIlxuICB9XG5cbn0iXX0=