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
                    // end of d3.js draw()
                    /** @type {?} */
                    let filteredChartData;
                    if (this.dataSource.filters.length > 0) { // apply filters to the data before adding tooltips
                        filteredChartData = this.dataSource.chartData.filter((/**
                         * @param {?} el
                         * @return {?}
                         */
                        el => !this.dataSource.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-'))));
                    }
                    else {
                        filteredChartData = this.dataSource.chartData;
                    }
                    this.emitOuter('d3end', {
                        bubbles: this.dataSource.smartSlice(filteredChartData),
                        selected: this.dataSource.selected
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
        ({ type, payload }) => {
            switch (type) {
                case 'aw-home-layout.select':
                    const { id } = payload;
                    this.toggleSelection(id);
                    /** @type {?} */
                    const foundBubble = this.dataSource.chartData.find((/**
                     * @param {?} el
                     * @return {?}
                     */
                    el => id == el.entity.id));
                    if (foundBubble) {
                        this.emitOuter('lockfilter', foundBubble);
                    }
                    else {
                        console.warn('Unable to determine which bubble was selected.');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBQWpEOztRQUNTLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBNkVwQyxvQkFBZTs7OztRQUFHLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCOzs7Y0FHRTtZQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN2RCxDQUFDLEVBQUE7UUFFRCxpQkFBWTs7OztRQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2pCOzs7Y0FHRTtZQUNGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3RFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNoQztZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsdUNBQXVDO1FBQzNFLENBQUMsRUFBQTtJQUVILENBQUM7Ozs7SUFqR1EsTUFBTTtRQUNYLElBQUksQ0FBQyxZ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QkFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtxQkFDOUI7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLDZCQUE2QjtvQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDMUIsTUFBTTtnQkFDUixLQUFLLCtCQUErQjtvQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO29CQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQTtvQkFDL0IsTUFBTTtnQkFDUixLQUFLLHVDQUF1QyxDQUFDO2dCQUM3QyxLQUFLLHVDQUF1QyxDQUFDO2dCQUM3QyxLQUFLLHFDQUFxQztvQkFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3BDLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBd0JGOzs7SUFuR0Msc0NBQW9DOztJQTZFcEMsMENBT0M7O0lBRUQsdUNBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwdWJsaWMgaW5pdGlhbExvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmNsaWNrJzpcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5zZWxlY3RhYmxlICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBheWxvYWQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbG9ja2ZpbHRlcicsIHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmluZChlbCA9PiBwYXlsb2FkID09IGVsLmVudGl0eS5pZCkpXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuZDNlbmQnOiAvLyBlbmQgb2YgZDMuanMgZHJhdygpXHJcbiAgICAgICAgICBsZXQgZmlsdGVyZWRDaGFydERhdGFcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIGRhdGEgYmVmb3JlIGFkZGluZyB0b29sdGlwc1xyXG4gICAgICAgICAgICBmaWx0ZXJlZENoYXJ0RGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGEuZmlsdGVyKGVsID0+ICF0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZENoYXJ0RGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5jaGFydERhdGFcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdkM2VuZCcsIHtcclxuICAgICAgICAgICAgYnViYmxlczogdGhpcy5kYXRhU291cmNlLnNtYXJ0U2xpY2UoZmlsdGVyZWRDaGFydERhdGEpLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snOlxyXG4gICAgICAgIC8vICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snLCB7XHJcbiAgICAgICAgLy8gICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuZm9jdXNlZEJ1YmJsZSxcclxuICAgICAgICAvLyAgICAgbGFiZWw6IHRoaXMuZGF0YVNvdXJjZS5mb2N1c2VkQnViYmxlTGFiZWxcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vICAgYnJlYWs7XHJcbiAgICAgICAgLy8gY2FzZSAnYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLXNlbGVjdC1jbGljayc6XHJcbiAgICAgICAgLy8gICB0aGlzLnRvZ2dsZVNlbGVjdGlvbih0aGlzLmRhdGFTb3VyY2UuZm9jdXNlZEJ1YmJsZSlcclxuICAgICAgICAvLyAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgdGhpcy5kYXRhU291cmNlLmNoYXJ0RGF0YS5maW5kKGVsID0+IHRoaXMuZGF0YVNvdXJjZS5mb2N1c2VkQnViYmxlID09IGVsLmVudGl0eS5pZCkpXHJcbiAgICAgICAgLy8gICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUsICd3aXRoIHBheWxvYWQnLCBwYXlsb2FkKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuc2VsZWN0JzpcclxuICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHBheWxvYWRcclxuICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKGlkKVxyXG4gICAgICAgICAgY29uc3QgZm91bmRCdWJibGUgPSB0aGlzLmRhdGFTb3VyY2UuY2hhcnREYXRhLmZpbmQoZWwgPT4gaWQgPT0gZWwuZW50aXR5LmlkKVxyXG4gICAgICAgICAgaWYgKGZvdW5kQnViYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdsb2NrZmlsdGVyJywgZm91bmRCdWJibGUpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VuYWJsZSB0byBkZXRlcm1pbmUgd2hpY2ggYnViYmxlIHdhcyBzZWxlY3RlZC4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQudGFnY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZClcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZhY2V0Y2xpY2snOlxyXG4gICAgICAgICAgaWYgKCF0aGlzLmRhdGFTb3VyY2Uuc2VsZWN0ZWQuaW5jbHVkZXMocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24ocGF5bG9hZClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LnRvZ2dsZWZpbHRlcic6XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZUZpbHRlcihwYXlsb2FkKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuY2xlYXJzZWxlY3Rpb24nOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkID0gW11cclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3Rpb24nLCBbXSlcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxyXG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxyXG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVDaGFydChwYXlsb2FkKVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdGlvbiA9IGlkID0+IHtcclxuICAgIC8qXHJcbiAgICAgIEV4cGVjdHMgdGhlIElEIG9mIGEgYnViYmxlLlxyXG4gICAgICBVcGRhdGVzIHRoZSBncmFwaCB3aXRoIGEgbmV3IHJlcXVlc3RcclxuICAgICovXHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuaGFuZGxlQnViYmxlQ2xpY2soaWQpXHJcbiAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0aW9uJywgdGhpcy5kYXRhU291cmNlLnNlbGVjdGVkKVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRmlsdGVyID0gZiA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBUb2dnbGUgdGhlIGNsaWNrZWQgZXllLWZpbHRlciBpbiB0aGUgZmlsdGVyZXMgYXJyYXkgYW5kXHJcbiAgICAgIHJlZHJhdyB0aGUgZ3JhcGguXHJcbiAgICAqL1xyXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLmluY2x1ZGVzKGYpKSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJzLnNwbGljZSh0aGlzLmRhdGFTb3VyY2UuZmlsdGVycy5pbmRleE9mKGYpLCAxKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcnMucHVzaChmKVxyXG4gICAgfVxyXG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZUNoYXJ0KG51bGwpIC8vIG51bGwgbWVhbnMgXCJyZXVzZSB0aGUgbGFzdCByZXNwb25zZVwiXHJcbiAgfVxyXG5cclxufSJdfQ==