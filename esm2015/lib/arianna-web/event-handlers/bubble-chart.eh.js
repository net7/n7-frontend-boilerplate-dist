/**
 * @fileoverview added by tsickle
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
                case 'aw-bubble-chart.mouse_enter':
                    /** @type {?} */
                    const currBubble = this.dataSource.onBubbleMouseEnter({
                        bubblePayload: event.payload.bubblePayload,
                        bubble: event.payload.bubble
                    });
                    event.payload.currBubble = currBubble;
                    this.emitOuter('mouse_enter', event.payload);
                    break;
                case 'aw-bubble-chart.mouse_leave':
                    /*   this.dataSource.onBubbleMouseLeave(
                         {
                           bubblePayload:event.payload.bubblePayload,
                           bubble:event.payload.bubble
                         });*/
                    this.emitOuter('mouse_leave', event.payload);
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
                        this.dataSource.setAllBubblesFromApolloQuery(payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxlQUFnQixTQUFRLFlBQVk7Ozs7SUFFeEMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDbEIsS0FBSyxzQkFBc0I7b0JBQ3pCLE1BQU07Z0JBQ1IsS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzdELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkMsTUFBTTtnQkFDUixLQUFLLDZCQUE2Qjs7MEJBQzFCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUNuRDt3QkFDRSxhQUFhLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhO3dCQUN6QyxNQUFNLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNO3FCQUM1QixDQUFDO29CQUNKLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QyxNQUFNO2dCQUNSLEtBQUssNkJBQTZCO29CQUNqQzs7Ozs4QkFJVTtvQkFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdDLE1BQU07Z0JBQ04sS0FBSyw0Q0FBNEM7b0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1RCxNQUFNO2dCQUNWLEtBQUssMkNBQTJDO29CQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekQsTUFBTTtnQkFDVixLQUFLLDZDQUE2QztvQkFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNELE1BQU07Z0JBQ1Y7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDaEQsUUFBTyxJQUFJLEVBQUM7Z0JBQ1YsS0FBSyw0Q0FBNEM7O3dCQUN2QyxVQUFVLEdBQUc7d0JBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQzt3QkFDaEUsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO3dCQUMvQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7d0JBQzdDLFFBQVEsRUFBRSxRQUFRO3FCQUNuQjtvQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDcEMsTUFBTTtnQkFDWixLQUFLLDhCQUE4QjtvQkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFDaEM7d0JBQ0UsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO3dCQUM3QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtxQkFDakQsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1IsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyxxQ0FBcUM7b0JBQ3hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFDaEM7NEJBQ0UsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFOzRCQUM3QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTs0QkFDaEQsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO3lCQUNoRCxDQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ2pDO29CQUNELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmluaXQnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIGV2ZW50LnBheWxvYWQuZW50aXR5SWRtYXAgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKTtcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmFsbEJ1YmJsZXMgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0QWxsQnViYmxlcygpO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubW91c2VfZW50ZXInOlxuICAgICAgICAgIGNvbnN0IGN1cnJCdWJibGUgPSB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVNb3VzZUVudGVyKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWJibGVQYXlsb2FkOmV2ZW50LnBheWxvYWQuYnViYmxlUGF5bG9hZCxcbiAgICAgICAgICAgICAgYnViYmxlOmV2ZW50LnBheWxvYWQuYnViYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmN1cnJCdWJibGUgPSBjdXJyQnViYmxlO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdtb3VzZV9lbnRlcicsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubW91c2VfbGVhdmUnOlxuICAgICAgICAgLyogICB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVNb3VzZUxlYXZlKFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnViYmxlUGF5bG9hZDpldmVudC5wYXlsb2FkLmJ1YmJsZVBheWxvYWQsXG4gICAgICAgICAgICAgICAgYnViYmxlOmV2ZW50LnBheWxvYWQuYnViYmxlXG4gICAgICAgICAgICAgIH0pOyovXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ21vdXNlX2xlYXZlJywgZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImF3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1jbG9zZS1jbGlja1wiOlxuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS10b29sdGlwLWNsb3NlLWNsaWNrJywgZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrXCI6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS10b29sdGlwLWdvdG8tY2xpY2snLCBldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLXNlbGVjdC1jbGlja1wiOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdidWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2snLCBldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICBjYXNlIFwiYXctaG9tZS1sYXlvdXQuYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrXCI6XG4gICAgICAgICAgICAgIGxldCBzZWxlY3REYXRhID0ge1xuICAgICAgICAgICAgICAgICdidWJibGUnOiB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVUb29sdGlwQ2xpY2soJ3NlbGVjdCcscGF5bG9hZCksXG4gICAgICAgICAgICAgICAgJ2VudGl0eUlkbWFwJzogdGhpcy5kYXRhU291cmNlLmdldEVudGl0eUlkTWFwKCksXG4gICAgICAgICAgICAgICAgJ2FsbEJ1YmJsZXMnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0QWxsQnViYmxlcygpLFxuICAgICAgICAgICAgICAgICdzb3VyY2UnOiAnYnViYmxlJ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBzZWxlY3REYXRhKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmJ1YmJsZS1maWx0ZXInOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdidWJibGUtZmlsdGVyZWQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdhbGxCdWJibGVzJzogdGhpcy5kYXRhU291cmNlLmdldEFsbEJ1YmJsZXMoKSxcbiAgICAgICAgICAgICdzZWxlY3RlZCc6IHRoaXMuZGF0YVNvdXJjZS5nZXRTZWxlY3RlZEJ1YmJsZXMoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgICBpZiggcGF5bG9hZC5zb3VyY2UgKXtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRBbGxCdWJibGVzRnJvbUFwb2xsb1F1ZXJ5KHBheWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS1maWx0ZXJlZCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdhbGxCdWJibGVzJzogdGhpcy5kYXRhU291cmNlLmdldEFsbEJ1YmJsZXMoKSxcbiAgICAgICAgICAgICAgJ3NlbGVjdGVkJzogdGhpcy5kYXRhU291cmNlLmdldFNlbGVjdGVkQnViYmxlcygpLFxuICAgICAgICAgICAgICAnZW50aXR5SWRtYXAnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUocGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19