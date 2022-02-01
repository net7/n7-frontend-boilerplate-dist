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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvYnViYmxlLWNoYXJ0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBQWpEOztRQUNTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBbUUzQixvQkFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDdkI7OztjQUdFO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQTtRQUVELGlCQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNuQjs7O2NBR0U7WUFDRixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztRQUM1RSxDQUFDLENBQUE7SUFDSCxDQUFDO0lBdEZRLE1BQU07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S0FBSyw2QkFBNkI7b0JBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNCLE1BQU07Z0JBQ1IsS0FBSywrQkFBK0I7b0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2hDLE1BQU07Z0JBQ1IsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyxxQ0FBcUM7b0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQXVCRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHB1YmxpYyBpbml0aWFsTG9hZCA9IGZhbHNlO1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5jbGljayc6XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNlbGVjdGFibGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbmQoKGVsKSA9PiBwYXlsb2FkID09PSBlbC5lbnRpdHkuaWQpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmQzZW5kJzogeyAvLyBlbmQgb2YgZDMuanMgZHJhdygpXG4gICAgICAgICAgbGV0IGZpbHRlcmVkQ2hhcnREYXRhO1xuICAgICAgICAgIC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIGRhdGEgYmVmb3JlIGFkZGluZyB0b29sdGlwc1xuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZENoYXJ0RGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmlsdGVyKChlbCkgPT4gIXRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQ2hhcnREYXRhID0gdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2QzZW5kJywge1xuICAgICAgICAgICAgYnViYmxlczogdGhpcy5kYXRhU291cmNlLnNtYXJ0U2xpY2UoZmlsdGVyZWRDaGFydERhdGEpLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSwgJ3dpdGggcGF5bG9hZCcsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnNlbGVjdCc6IHtcbiAgICAgICAgICBjb25zdCB7IGlkIH0gPSBwYXlsb2FkO1xuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKGlkKTtcbiAgICAgICAgICBjb25zdCBmb3VuZEJ1YmJsZSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmluZCgoZWwpID0+IGlkID09PSBlbC5lbnRpdHkuaWQpO1xuICAgICAgICAgIGlmIChmb3VuZEJ1YmJsZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCBmb3VuZEJ1YmJsZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIGRldGVybWluZSB3aGljaCBidWJibGUgd2FzIHNlbGVjdGVkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5mYWNldGNsaWNrJzpcbiAgICAgICAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZC5pbmNsdWRlcyhwYXlsb2FkKSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC50b2dnbGVmaWx0ZXInOlxuICAgICAgICAgIHRoaXMudG9nZ2xlRmlsdGVyKHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5jbGVhcnNlbGVjdGlvbic6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkID0gW107XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdGlvbicsIFtdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlQ2hhcnQocGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVTZWxlY3Rpb24gPSAoaWQpID0+IHtcbiAgICAvKlxuICAgICAgRXhwZWN0cyB0aGUgSUQgb2YgYSBidWJibGUuXG4gICAgICBVcGRhdGVzIHRoZSBncmFwaCB3aXRoIGEgbmV3IHJlcXVlc3RcbiAgICAqL1xuICAgIHRoaXMuZGF0YVNvdXJjZS5oYW5kbGVCdWJibGVDbGljayhpZCk7XG4gICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdGlvbicsIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZCk7XG4gIH1cblxuICB0b2dnbGVGaWx0ZXIgPSAoZikgPT4ge1xuICAgIC8qXG4gICAgICBUb2dnbGUgdGhlIGNsaWNrZWQgZXllLWZpbHRlciBpbiB0aGUgZmlsdGVyZXMgYXJyYXkgYW5kXG4gICAgICByZWRyYXcgdGhlIGdyYXBoLlxuICAgICovXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluY2x1ZGVzKGYpKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5zcGxpY2UodGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5kZXhPZihmKSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLnB1c2goZik7XG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDaGFydChudWxsKTsgLy8gbnVsbCBtZWFucyBcInJldXNlIHRoZSBsYXN0IHJlc3BvbnNlXCJcbiAgfVxufVxuIl19