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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsWUFBWTtJQUFqRDs7UUFDUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQW1FM0Isb0JBQWUsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3ZCOzs7Y0FHRTtZQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUE7UUFFRCxpQkFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbkI7OztjQUdFO1lBQ0YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdkU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7UUFDNUUsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQXRGUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVks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QUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzQixNQUFNO2dCQUNSLEtBQUssK0JBQStCO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNoQyxNQUFNO2dCQUNSLEtBQUssdUNBQXVDLENBQUM7Z0JBQzdDLEtBQUsscUNBQXFDO29CQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0F1QkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgaW5pdGlhbExvYWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmNsaWNrJzpcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5zZWxlY3RhYmxlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXlsb2FkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maW5kKChlbCkgPT4gcGF5bG9hZCA9PT0gZWwuZW50aXR5LmlkKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiB7IC8vIGVuZCBvZiBkMy5qcyBkcmF3KClcclxuICAgICAgICAgIGxldCBmaWx0ZXJlZENoYXJ0RGF0YTtcclxuICAgICAgICAgIC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIGRhdGEgYmVmb3JlIGFkZGluZyB0b29sdGlwc1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRDaGFydERhdGEgPSB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbHRlcigoZWwpID0+ICF0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRDaGFydERhdGEgPSB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2QzZW5kJywge1xyXG4gICAgICAgICAgICBidWJibGVzOiB0aGlzLmRhdGFTb3VyY2Uuc21hcnRTbGljZShmaWx0ZXJlZENoYXJ0RGF0YSksXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSwgJ3dpdGggcGF5bG9hZCcsIHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuc2VsZWN0Jzoge1xyXG4gICAgICAgICAgY29uc3QgeyBpZCB9ID0gcGF5bG9hZDtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKGlkKTtcclxuICAgICAgICAgIGNvbnN0IGZvdW5kQnViYmxlID0gdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maW5kKChlbCkgPT4gaWQgPT09IGVsLmVudGl0eS5pZCk7XHJcbiAgICAgICAgICBpZiAoZm91bmRCdWJibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2xvY2tmaWx0ZXInLCBmb3VuZEJ1YmJsZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBkZXRlcm1pbmUgd2hpY2ggYnViYmxlIHdhcyBzZWxlY3RlZC4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnRhZ2NsaWNrJzpcclxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmFjZXRjbGljayc6XHJcbiAgICAgICAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZC5pbmNsdWRlcyhwYXlsb2FkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXlsb2FkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnRvZ2dsZWZpbHRlcic6XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZpbHRlcihwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmNsZWFyc2VsZWN0aW9uJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdGlvbicsIFtdKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDaGFydChwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTZWxlY3Rpb24gPSAoaWQpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIEV4cGVjdHMgdGhlIElEIG9mIGEgYnViYmxlLlxyXG4gICAgICBVcGRhdGVzIHRoZSBncmFwaCB3aXRoIGEgbmV3IHJlcXVlc3RcclxuICAgICovXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlQnViYmxlQ2xpY2soaWQpO1xyXG4gICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdGlvbicsIHRoaXMuZGF0YVNvdXJjZS5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVGaWx0ZXIgPSAoZikgPT4ge1xyXG4gICAgLypcclxuICAgICAgVG9nZ2xlIHRoZSBjbGlja2VkIGV5ZS1maWx0ZXIgaW4gdGhlIGZpbHRlcmVzIGFycmF5IGFuZFxyXG4gICAgICByZWRyYXcgdGhlIGdyYXBoLlxyXG4gICAgKi9cclxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5pbmNsdWRlcyhmKSkge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5zcGxpY2UodGhpcy5kYXRhU291cmNlLmZpbHRlcnMuaW5kZXhPZihmKSwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5wdXNoKGYpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNoYXJ0KG51bGwpOyAvLyBudWxsIG1lYW5zIFwicmV1c2UgdGhlIGxhc3QgcmVzcG9uc2VcIlxyXG4gIH1cclxufVxyXG4iXX0=