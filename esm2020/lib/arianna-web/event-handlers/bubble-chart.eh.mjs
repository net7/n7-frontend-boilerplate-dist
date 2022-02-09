import { EventHandler } from '@n7-frontend/core';
export class AwBubbleChartEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.initialLoad = false;
        this.toggleSelection = (id) => {
            /*
              Expects the ID of a bubble.
              Updates the graph with a new request
            */
            this.dataSource.handleBubbleClick(id);
            this.emitOuter('selection', this.dataSource.selected);
        };
        this.toggleFilter = (f) => {
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
        };
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-bubble-chart.click':
                    if (this.dataSource.options.selectable !== false) {
                        this.toggleSelection(payload);
                    }
                    this.emitOuter('lockfilter', this.dataSource.chartData.find((el) => payload === el.entity.id));
                    break;
                case 'aw-bubble-chart.d3end':
                    { // end of d3.js draw()
                        let filteredChartData;
                        // apply filters to the data before adding tooltips
                        if (this.dataSource.filters.length > 0) {
                            filteredChartData = this.dataSource.chartData.filter((el) => !this.dataSource.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')));
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
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.select':
                    {
                        const { id } = payload;
                        this.toggleSelection(id);
                        const foundBubble = this.dataSource.chartData.find((el) => id === el.entity.id);
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
                case 'aw-entita-layout.filterbubbleresponse':
                case 'aw-home-layout.filterbubbleresponse':
                    this.dataSource.updateChart(payload);
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvYnViYmxlLWNoYXJ0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBQWpEOztRQUNTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBbUUzQixvQkFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdkI7OztjQUdFO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQTtRQUVELGlCQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNuQjs7O2NBR0U7WUFDRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztRQUM1RSxDQUFDLENBQUE7SUFDSCxDQUFDO0lBdEZRLE1BQU07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S0FBSyw2QkFBNkI7b0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNCLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1IsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyxxQ0FBcUM7b0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQXVCRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIHB1YmxpYyBpbml0aWFsTG9hZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuKCkge1xyXG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuY2xpY2snOlxyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNlbGVjdGFibGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbmQoKGVsKSA9PiBwYXlsb2FkID09PSBlbC5lbnRpdHkuaWQpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5kM2VuZCc6IHsgLy8gZW5kIG9mIGQzLmpzIGRyYXcoKVxyXG4gICAgICAgICAgbGV0IGZpbHRlcmVkQ2hhcnREYXRhO1xyXG4gICAgICAgICAgLy8gYXBwbHkgZmlsdGVycyB0byB0aGUgZGF0YSBiZWZvcmUgYWRkaW5nIHRvb2x0aXBzXHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLmZpbHRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZENoYXJ0RGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmlsdGVyKChlbCkgPT4gIXRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZENoYXJ0RGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignZDNlbmQnLCB7XHJcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRoaXMuZGF0YVNvdXJjZS5zbWFydFNsaWNlKGZpbHRlcmVkQ2hhcnREYXRhKSxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlLCAnd2l0aCBwYXlsb2FkJywgcGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5zZWxlY3QnOiB7XHJcbiAgICAgICAgICBjb25zdCB7IGlkIH0gPSBwYXlsb2FkO1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24oaWQpO1xyXG4gICAgICAgICAgY29uc3QgZm91bmRCdWJibGUgPSB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbmQoKGVsKSA9PiBpZCA9PT0gZWwuZW50aXR5LmlkKTtcclxuICAgICAgICAgIGlmIChmb3VuZEJ1YmJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbG9ja2ZpbHRlcicsIGZvdW5kQnViYmxlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIGRldGVybWluZSB3aGljaCBidWJibGUgd2FzIHNlbGVjdGVkLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldGNsaWNrJzpcclxuICAgICAgICAgIGlmICghdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkLmluY2x1ZGVzKHBheWxvYWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudG9nZ2xlZmlsdGVyJzpcclxuICAgICAgICAgIHRoaXMudG9nZ2xlRmlsdGVyKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuY2xlYXJzZWxlY3Rpb24nOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkID0gW107XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0aW9uJywgW10pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNoYXJ0KHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdGlvbiA9IChpZCkgPT4ge1xyXG4gICAgLypcclxuICAgICAgRXhwZWN0cyB0aGUgSUQgb2YgYSBidWJibGUuXHJcbiAgICAgIFVwZGF0ZXMgdGhlIGdyYXBoIHdpdGggYSBuZXcgcmVxdWVzdFxyXG4gICAgKi9cclxuICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVCdWJibGVDbGljayhpZCk7XHJcbiAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0aW9uJywgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUZpbHRlciA9IChmKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBUb2dnbGUgdGhlIGNsaWNrZWQgZXllLWZpbHRlciBpbiB0aGUgZmlsdGVyZXMgYXJyYXkgYW5kXHJcbiAgICAgIHJlZHJhdyB0aGUgZ3JhcGguXHJcbiAgICAqL1xyXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluY2x1ZGVzKGYpKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLnNwbGljZSh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5pbmRleE9mKGYpLCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLnB1c2goZik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ2hhcnQobnVsbCk7IC8vIG51bGwgbWVhbnMgXCJyZXVzZSB0aGUgbGFzdCByZXNwb25zZVwiXHJcbiAgfVxyXG59XHJcbiJdfQ==