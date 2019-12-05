/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/bubble-chart.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventHandler } from '@n7-frontend/core';
export class AwBubbleChartEH extends EventHandler {
    /**
     * @return {?}
     */
    listen() {
        this.innerEvents$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            switch (event.type) {
                case 'aw-bubble-chart.init':
                    break;
                case 'aw-bubble-chart.click':
                    event.payload.entityIdmap = this.dataSource.getEntityIdMap();
                    event.payload.allBubbles = this.dataSource.getAllBubbles();
                    this.emitOuter('click', event.payload);
                    break;
                case 'aw-bubble-chart.mouseenter':
                    /** @type {?} */
                    const currBubble = this.dataSource.onBubbleMouseEnter({
                        bubblePayload: event.payload.bubblePayload,
                        bubble: event.payload.bubble
                    });
                    event.payload.currBubble = currBubble;
                    this.emitOuter('mouseenter', event.payload);
                    break;
                case 'aw-bubble-chart.mouseleave':
                    this.emitOuter('mouseleave', event.payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-close-click":
                    this.emitOuter('bubble-tooltip-close-click', event.payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    this.emitOuter('bubble-tooltip-goto-click', event.payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-select-click":
                    this.emitOuter('bubble-tooltip-select-click', event.payload);
                    break;
                default:
                    console.warn('unhandled inner event of type', event.type);
                    break;
            }
        }));
        this.outerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ type, payload }) => {
            switch (type) {
                case "aw-home-layout.bubble-tooltip-select-click":
                    /** @type {?} */
                    let selectData = {
                        'bubble': this.dataSource.onBubbleTooltipClick('select', payload),
                        'entityIdmap': this.dataSource.getEntityIdMap(),
                        'allBubbles': this.dataSource.getAllBubbles(),
                        'source': 'bubble'
                    };
                    this.emitOuter('click', selectData);
                    break;
                case 'aw-home-layout.bubble-filter':
                    this.emitOuter('bubble-filtered', {
                        'allBubbles': this.dataSource.getAllBubbles(),
                        'selected': this.dataSource.getSelectedBubbles()
                    });
                    break;
                case 'aw-scheda-layout.filterbubbleresponse':
                case 'aw-entita-layout.filterbubbleresponse':
                case 'aw-home-layout.filterbubbleresponse':
                    if (payload.source) {
                        this.dataSource.setAllBubblesFromApolloQuery(payload, payload.reload);
                        this.emitOuter('bubble-filtered', {
                            'allBubbles': this.dataSource.getAllBubbles(),
                            'selected': this.dataSource.getSelectedBubbles(),
                            'entityIdmap': this.dataSource.getEntityIdMap()
                        });
                    }
                    else {
                        this.dataSource.update(payload);
                    }
                    break;
            }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZOzs7O0lBRXhDLE1BQU07UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNsQyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLEtBQUssc0JBQXNCO29CQUN6QixNQUFNO2dCQUNSLEtBQUssdUJBQXVCO29CQUMxQixLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUM3RCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1IsS0FBSyw0QkFBNEI7OzBCQUN6QixVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FDbkQ7d0JBQ0UsYUFBYSxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYTt3QkFDekMsTUFBTSxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTTtxQkFDNUIsQ0FBQztvQkFDSixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjtvQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxNQUFNO2dCQUNSLEtBQUssNENBQTRDO29CQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUQsTUFBTTtnQkFDVixLQUFLLDJDQUEyQztvQkFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pELE1BQU07Z0JBQ1YsS0FBSyw2Q0FBNkM7b0JBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzRCxNQUFNO2dCQUNWO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUN6RCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFPLElBQUksRUFBQztnQkFDVixLQUFLLDRDQUE0Qzs7d0JBQ3ZDLFVBQVUsR0FBRzt3QkFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDO3dCQUNoRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7d0JBQy9DLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTt3QkFDN0MsUUFBUSxFQUFFLFFBQVE7cUJBQ25CO29CQUNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNwQyxNQUFNO2dCQUNaLEtBQUssOEJBQThCO29CQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUNoQzt3QkFDRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7d0JBQzdDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFO3FCQUNqRCxDQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUixLQUFLLHVDQUF1QyxDQUFDO2dCQUM3QyxLQUFLLHVDQUF1QyxDQUFDO2dCQUM3QyxLQUFLLHFDQUFxQztvQkFDeEMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO3dCQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQ2hDOzRCQUNFLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTs0QkFDN0MsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUU7NEJBQ2hELGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTt5QkFDaEQsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNqQztvQkFDRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5pbml0JzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmNsaWNrJzpcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmVudGl0eUlkbWFwID0gdGhpcy5kYXRhU291cmNlLmdldEVudGl0eUlkTWFwKCk7XG4gICAgICAgICAgZXZlbnQucGF5bG9hZC5hbGxCdWJibGVzID0gdGhpcy5kYXRhU291cmNlLmdldEFsbEJ1YmJsZXMoKTtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0Lm1vdXNlZW50ZXInOlxuICAgICAgICAgIGNvbnN0IGN1cnJCdWJibGUgPSB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVNb3VzZUVudGVyKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWJibGVQYXlsb2FkOmV2ZW50LnBheWxvYWQuYnViYmxlUGF5bG9hZCxcbiAgICAgICAgICAgICAgYnViYmxlOmV2ZW50LnBheWxvYWQuYnViYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmN1cnJCdWJibGUgPSBjdXJyQnViYmxlO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdtb3VzZWVudGVyJywgZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5tb3VzZWxlYXZlJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbW91c2VsZWF2ZScsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWNsb3NlLWNsaWNrXCI6XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtY2xvc2UtY2xpY2snLCBldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2tcIjpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtZ290by1jbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrXCI6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS10b29sdGlwLXNlbGVjdC1jbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIGV2ZW50LnR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgXCJhdy1ob21lLWxheW91dC5idWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2tcIjpcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ2J1YmJsZSc6IHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVRvb2x0aXBDbGljaygnc2VsZWN0JyxwYXlsb2FkKSxcbiAgICAgICAgICAgICAgICAnZW50aXR5SWRtYXAnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKSxcbiAgICAgICAgICAgICAgICAnYWxsQnViYmxlcyc6IHRoaXMuZGF0YVNvdXJjZS5nZXRBbGxCdWJibGVzKCksXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICdidWJibGUnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHNlbGVjdERhdGEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuYnViYmxlLWZpbHRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS1maWx0ZXJlZCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2FsbEJ1YmJsZXMnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0QWxsQnViYmxlcygpLFxuICAgICAgICAgICAgJ3NlbGVjdGVkJzogdGhpcy5kYXRhU291cmNlLmdldFNlbGVjdGVkQnViYmxlcygpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICAgIGlmKCBwYXlsb2FkLnNvdXJjZSApe1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocGF5bG9hZCwgcGF5bG9hZC5yZWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS1maWx0ZXJlZCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdhbGxCdWJibGVzJzogdGhpcy5kYXRhU291cmNlLmdldEFsbEJ1YmJsZXMoKSxcbiAgICAgICAgICAgICAgJ3NlbGVjdGVkJzogdGhpcy5kYXRhU291cmNlLmdldFNlbGVjdGVkQnViYmxlcygpLFxuICAgICAgICAgICAgICAnZW50aXR5SWRtYXAnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUocGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19