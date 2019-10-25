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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE1BQU0sT0FBTyxlQUFnQixTQUFRLFlBQVk7Ozs7SUFFeEMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDbEIsS0FBSyxzQkFBc0I7b0JBQ3pCLE1BQU07Z0JBQ1IsS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzdELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkMsTUFBTTtnQkFDUixLQUFLLDZCQUE2Qjs7MEJBQzFCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUNuRDt3QkFDRSxhQUFhLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhO3dCQUN6QyxNQUFNLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNO3FCQUM1QixDQUFDO29CQUNKLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QyxNQUFNO2dCQUNSLEtBQUssNkJBQTZCO29CQUNqQzs7Ozs4QkFJVTtvQkFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdDLE1BQU07Z0JBQ04sS0FBSyw0Q0FBNEM7b0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1RCxNQUFNO2dCQUNWLEtBQUssMkNBQTJDO29CQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekQsTUFBTTtnQkFDVixLQUFLLDZDQUE2QztvQkFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNELE1BQU07Z0JBQ1Y7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3pELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssNENBQTRDOzt3QkFDdkMsVUFBVSxHQUFHO3dCQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUM7d0JBQ2hFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTt3QkFDL0MsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO3dCQUM3QyxRQUFRLEVBQUUsUUFBUTtxQkFDbkI7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1osS0FBSyw4QkFBOEI7b0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQ2hDO3dCQUNFLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTt3QkFDN0MsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUU7cUJBQ2pELENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssdUNBQXVDLENBQUM7Z0JBQzdDLEtBQUssdUNBQXVDLENBQUM7Z0JBQzdDLEtBQUsscUNBQXFDO29CQUN4QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQ2hDOzRCQUNFLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTs0QkFDN0MsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUU7NEJBQ2hELGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTt5QkFDaEQsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNqQztvQkFDRCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5pbml0JzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmNsaWNrJzpcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmVudGl0eUlkbWFwID0gdGhpcy5kYXRhU291cmNlLmdldEVudGl0eUlkTWFwKCk7XG4gICAgICAgICAgZXZlbnQucGF5bG9hZC5hbGxCdWJibGVzID0gdGhpcy5kYXRhU291cmNlLmdldEFsbEJ1YmJsZXMoKTtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0Lm1vdXNlX2VudGVyJzpcbiAgICAgICAgICBjb25zdCBjdXJyQnViYmxlID0gdGhpcy5kYXRhU291cmNlLm9uQnViYmxlTW91c2VFbnRlcihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnViYmxlUGF5bG9hZDpldmVudC5wYXlsb2FkLmJ1YmJsZVBheWxvYWQsXG4gICAgICAgICAgICAgIGJ1YmJsZTpldmVudC5wYXlsb2FkLmJ1YmJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgZXZlbnQucGF5bG9hZC5jdXJyQnViYmxlID0gY3VyckJ1YmJsZTtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbW91c2VfZW50ZXInLCBldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0Lm1vdXNlX2xlYXZlJzpcbiAgICAgICAgIC8qICAgdGhpcy5kYXRhU291cmNlLm9uQnViYmxlTW91c2VMZWF2ZShcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1YmJsZVBheWxvYWQ6ZXZlbnQucGF5bG9hZC5idWJibGVQYXlsb2FkLFxuICAgICAgICAgICAgICAgIGJ1YmJsZTpldmVudC5wYXlsb2FkLmJ1YmJsZVxuICAgICAgICAgICAgICB9KTsqL1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdtb3VzZV9sZWF2ZScsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtY2xvc2UtY2xpY2tcIjpcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdidWJibGUtdG9vbHRpcC1jbG9zZS1jbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtZ290by1jbGlja1wiOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdidWJibGUtdG9vbHRpcC1nb3RvLWNsaWNrJywgZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImF3LWJ1YmJsZS1jaGFydC5idWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2tcIjpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrJywgZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgZXZlbnQudHlwZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgY2FzZSBcImF3LWhvbWUtbGF5b3V0LmJ1YmJsZS10b29sdGlwLXNlbGVjdC1jbGlja1wiOlxuICAgICAgICAgICAgICBsZXQgc2VsZWN0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnYnViYmxlJzogdGhpcy5kYXRhU291cmNlLm9uQnViYmxlVG9vbHRpcENsaWNrKCdzZWxlY3QnLHBheWxvYWQpLFxuICAgICAgICAgICAgICAgICdlbnRpdHlJZG1hcCc6IHRoaXMuZGF0YVNvdXJjZS5nZXRFbnRpdHlJZE1hcCgpLFxuICAgICAgICAgICAgICAgICdhbGxCdWJibGVzJzogdGhpcy5kYXRhU291cmNlLmdldEFsbEJ1YmJsZXMoKSxcbiAgICAgICAgICAgICAgICAnc291cmNlJzogJ2J1YmJsZSdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NsaWNrJywgc2VsZWN0RGF0YSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5idWJibGUtZmlsdGVyJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLWZpbHRlcmVkJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnYWxsQnViYmxlcyc6IHRoaXMuZGF0YVNvdXJjZS5nZXRBbGxCdWJibGVzKCksXG4gICAgICAgICAgICAnc2VsZWN0ZWQnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0U2VsZWN0ZWRCdWJibGVzKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5maWx0ZXJidWJibGVyZXNwb25zZSc6XG4gICAgICAgICAgaWYoIHBheWxvYWQuc291cmNlICl7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0QWxsQnViYmxlc0Zyb21BcG9sbG9RdWVyeShwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdidWJibGUtZmlsdGVyZWQnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAnYWxsQnViYmxlcyc6IHRoaXMuZGF0YVNvdXJjZS5nZXRBbGxCdWJibGVzKCksXG4gICAgICAgICAgICAgICdzZWxlY3RlZCc6IHRoaXMuZGF0YVNvdXJjZS5nZXRTZWxlY3RlZEJ1YmJsZXMoKSxcbiAgICAgICAgICAgICAgJ2VudGl0eUlkbWFwJzogdGhpcy5kYXRhU291cmNlLmdldEVudGl0eUlkTWFwKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHBheWxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==