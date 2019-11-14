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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxlQUFnQixTQUFRLFlBQVk7Ozs7SUFFeEMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDbEIsS0FBSyxzQkFBc0I7b0JBQ3pCLE1BQU07Z0JBQ1IsS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzdELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkMsTUFBTTtnQkFDUixLQUFLLDZCQUE2Qjs7MEJBQzFCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUNuRDt3QkFDRSxhQUFhLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhO3dCQUN6QyxNQUFNLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNO3FCQUM1QixDQUFDO29CQUNKLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QyxNQUFNO2dCQUNSLEtBQUssNkJBQTZCO29CQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1IsS0FBSyw0Q0FBNEM7b0JBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1RCxNQUFNO2dCQUNWLEtBQUssMkNBQTJDO29CQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekQsTUFBTTtnQkFDVixLQUFLLDZDQUE2QztvQkFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNELE1BQU07Z0JBQ1Y7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3pELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssNENBQTRDOzt3QkFDdkMsVUFBVSxHQUFHO3dCQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUM7d0JBQ2hFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTt3QkFDL0MsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO3dCQUM3QyxRQUFRLEVBQUUsUUFBUTtxQkFDbkI7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1osS0FBSyw4QkFBOEI7b0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQ2hDO3dCQUNFLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTt3QkFDN0MsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUU7cUJBQ2pELENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssdUNBQXVDLENBQUM7Z0JBQzdDLEtBQUssdUNBQXVDLENBQUM7Z0JBQzdDLEtBQUsscUNBQXFDO29CQUN4QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFDaEM7NEJBQ0UsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFOzRCQUM3QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTs0QkFDaEQsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO3lCQUNoRCxDQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ2pDO29CQUNELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmluaXQnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIGV2ZW50LnBheWxvYWQuZW50aXR5SWRtYXAgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKTtcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmFsbEJ1YmJsZXMgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0QWxsQnViYmxlcygpO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubW91c2VfZW50ZXInOlxuICAgICAgICAgIGNvbnN0IGN1cnJCdWJibGUgPSB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVNb3VzZUVudGVyKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWJibGVQYXlsb2FkOmV2ZW50LnBheWxvYWQuYnViYmxlUGF5bG9hZCxcbiAgICAgICAgICAgICAgYnViYmxlOmV2ZW50LnBheWxvYWQuYnViYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmN1cnJCdWJibGUgPSBjdXJyQnViYmxlO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdtb3VzZV9lbnRlcicsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubW91c2VfbGVhdmUnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdtb3VzZV9sZWF2ZScsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWNsb3NlLWNsaWNrXCI6XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtY2xvc2UtY2xpY2snLCBldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2tcIjpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtZ290by1jbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrXCI6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS10b29sdGlwLXNlbGVjdC1jbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIGV2ZW50LnR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgXCJhdy1ob21lLWxheW91dC5idWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2tcIjpcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ2J1YmJsZSc6IHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVRvb2x0aXBDbGljaygnc2VsZWN0JyxwYXlsb2FkKSxcbiAgICAgICAgICAgICAgICAnZW50aXR5SWRtYXAnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKSxcbiAgICAgICAgICAgICAgICAnYWxsQnViYmxlcyc6IHRoaXMuZGF0YVNvdXJjZS5nZXRBbGxCdWJibGVzKCksXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICdidWJibGUnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHNlbGVjdERhdGEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuYnViYmxlLWZpbHRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS1maWx0ZXJlZCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2FsbEJ1YmJsZXMnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0QWxsQnViYmxlcygpLFxuICAgICAgICAgICAgJ3NlbGVjdGVkJzogdGhpcy5kYXRhU291cmNlLmdldFNlbGVjdGVkQnViYmxlcygpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICAgIGlmKCBwYXlsb2FkLnNvdXJjZSApe1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocGF5bG9hZCwgcGF5bG9hZC5yZWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS1maWx0ZXJlZCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdhbGxCdWJibGVzJzogdGhpcy5kYXRhU291cmNlLmdldEFsbEJ1YmJsZXMoKSxcbiAgICAgICAgICAgICAgJ3NlbGVjdGVkJzogdGhpcy5kYXRhU291cmNlLmdldFNlbGVjdGVkQnViYmxlcygpLFxuICAgICAgICAgICAgICAnZW50aXR5SWRtYXAnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUocGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19