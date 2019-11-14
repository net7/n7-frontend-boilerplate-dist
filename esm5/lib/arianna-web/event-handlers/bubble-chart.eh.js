/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
var AwBubbleChartEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwBubbleChartEH, _super);
    function AwBubbleChartEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AwBubbleChartEH.prototype.listen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.type) {
                case 'aw-bubble-chart.init':
                    break;
                case 'aw-bubble-chart.click':
                    event.payload.entityIdmap = _this.dataSource.getEntityIdMap();
                    event.payload.allBubbles = _this.dataSource.getAllBubbles();
                    _this.emitOuter('click', event.payload);
                    break;
                case 'aw-bubble-chart.mouse_enter':
                    /** @type {?} */
                    var currBubble = _this.dataSource.onBubbleMouseEnter({
                        bubblePayload: event.payload.bubblePayload,
                        bubble: event.payload.bubble
                    });
                    event.payload.currBubble = currBubble;
                    _this.emitOuter('mouse_enter', event.payload);
                    break;
                case 'aw-bubble-chart.mouse_leave':
                    _this.emitOuter('mouse_leave', event.payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-close-click":
                    _this.emitOuter('bubble-tooltip-close-click', event.payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-goto-click":
                    _this.emitOuter('bubble-tooltip-goto-click', event.payload);
                    break;
                case "aw-bubble-chart.bubble-tooltip-select-click":
                    _this.emitOuter('bubble-tooltip-select-click', event.payload);
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
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case "aw-home-layout.bubble-tooltip-select-click":
                    /** @type {?} */
                    var selectData = {
                        'bubble': _this.dataSource.onBubbleTooltipClick('select', payload),
                        'entityIdmap': _this.dataSource.getEntityIdMap(),
                        'allBubbles': _this.dataSource.getAllBubbles(),
                        'source': 'bubble'
                    };
                    _this.emitOuter('click', selectData);
                    break;
                case 'aw-home-layout.bubble-filter':
                    _this.emitOuter('bubble-filtered', {
                        'allBubbles': _this.dataSource.getAllBubbles(),
                        'selected': _this.dataSource.getSelectedBubbles()
                    });
                    break;
                case 'aw-scheda-layout.filterbubbleresponse':
                case 'aw-entita-layout.filterbubbleresponse':
                case 'aw-home-layout.filterbubbleresponse':
                    if (payload.source) {
                        _this.dataSource.setAllBubblesFromApolloQuery(payload, payload.reload);
                        _this.emitOuter('bubble-filtered', {
                            'allBubbles': _this.dataSource.getAllBubbles(),
                            'selected': _this.dataSource.getSelectedBubbles(),
                            'entityIdmap': _this.dataSource.getEntityIdMap()
                        });
                    }
                    else {
                        _this.dataSource.update(payload);
                    }
                    break;
            }
        }));
    };
    return AwBubbleChartEH;
}(EventHandler));
export { AwBubbleChartEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRDtJQUFxQywyQ0FBWTtJQUFqRDs7SUEyRUEsQ0FBQzs7OztJQXpFUSxnQ0FBTTs7O0lBQWI7UUFBQSxpQkF3RUM7UUF2RUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQy9CLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDbEIsS0FBSyxzQkFBc0I7b0JBQ3pCLE1BQU07Z0JBQ1IsS0FBSyx1QkFBdUI7b0JBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzdELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQzNELEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdkMsTUFBTTtnQkFDUixLQUFLLDZCQUE2Qjs7d0JBQzFCLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUNuRDt3QkFDRSxhQUFhLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhO3dCQUN6QyxNQUFNLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNO3FCQUM1QixDQUFDO29CQUNKLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDdEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QyxNQUFNO2dCQUNSLEtBQUssNkJBQTZCO29CQUNoQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdDLE1BQU07Z0JBQ1IsS0FBSyw0Q0FBNEM7b0JBQzdDLEtBQUksQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1RCxNQUFNO2dCQUNWLEtBQUssMkNBQTJDO29CQUM5QyxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekQsTUFBTTtnQkFDVixLQUFLLDZDQUE2QztvQkFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNELE1BQU07Z0JBQ1Y7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3pELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxFQUFpQjtnQkFBZixjQUFJLEVBQUUsb0JBQU87WUFDMUMsUUFBTyxJQUFJLEVBQUM7Z0JBQ1YsS0FBSyw0Q0FBNEM7O3dCQUN2QyxVQUFVLEdBQUc7d0JBQ2YsUUFBUSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQzt3QkFDaEUsYUFBYSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO3dCQUMvQyxZQUFZLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7d0JBQzdDLFFBQVEsRUFBRSxRQUFRO3FCQUNuQjtvQkFDRCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDcEMsTUFBTTtnQkFDWixLQUFLLDhCQUE4QjtvQkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFDaEM7d0JBQ0UsWUFBWSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO3dCQUM3QyxVQUFVLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtxQkFDakQsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1IsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyx1Q0FBdUMsQ0FBQztnQkFDN0MsS0FBSyxxQ0FBcUM7b0JBQ3hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN0RSxLQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUNoQzs0QkFDRSxZQUFZLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7NEJBQzdDLFVBQVUsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFOzRCQUNoRCxhQUFhLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7eUJBQ2hELENBQUMsQ0FBQztxQkFDSjt5QkFBTTt3QkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDakM7b0JBQ0QsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBM0VELENBQXFDLFlBQVksR0EyRWhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmluaXQnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQuY2xpY2snOlxuICAgICAgICAgIGV2ZW50LnBheWxvYWQuZW50aXR5SWRtYXAgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKTtcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmFsbEJ1YmJsZXMgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0QWxsQnViYmxlcygpO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubW91c2VfZW50ZXInOlxuICAgICAgICAgIGNvbnN0IGN1cnJCdWJibGUgPSB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVNb3VzZUVudGVyKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWJibGVQYXlsb2FkOmV2ZW50LnBheWxvYWQuYnViYmxlUGF5bG9hZCxcbiAgICAgICAgICAgICAgYnViYmxlOmV2ZW50LnBheWxvYWQuYnViYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmN1cnJCdWJibGUgPSBjdXJyQnViYmxlO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdtb3VzZV9lbnRlcicsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhdy1idWJibGUtY2hhcnQubW91c2VfbGVhdmUnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdtb3VzZV9sZWF2ZScsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWNsb3NlLWNsaWNrXCI6XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtY2xvc2UtY2xpY2snLCBldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2tcIjpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtZ290by1jbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrXCI6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS10b29sdGlwLXNlbGVjdC1jbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIGV2ZW50LnR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgXCJhdy1ob21lLWxheW91dC5idWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2tcIjpcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ2J1YmJsZSc6IHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVRvb2x0aXBDbGljaygnc2VsZWN0JyxwYXlsb2FkKSxcbiAgICAgICAgICAgICAgICAnZW50aXR5SWRtYXAnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKSxcbiAgICAgICAgICAgICAgICAnYWxsQnViYmxlcyc6IHRoaXMuZGF0YVNvdXJjZS5nZXRBbGxCdWJibGVzKCksXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICdidWJibGUnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHNlbGVjdERhdGEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuYnViYmxlLWZpbHRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS1maWx0ZXJlZCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2FsbEJ1YmJsZXMnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0QWxsQnViYmxlcygpLFxuICAgICAgICAgICAgJ3NlbGVjdGVkJzogdGhpcy5kYXRhU291cmNlLmdldFNlbGVjdGVkQnViYmxlcygpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICAgIGlmKCBwYXlsb2FkLnNvdXJjZSApe1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocGF5bG9hZCwgcGF5bG9hZC5yZWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS1maWx0ZXJlZCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdhbGxCdWJibGVzJzogdGhpcy5kYXRhU291cmNlLmdldEFsbEJ1YmJsZXMoKSxcbiAgICAgICAgICAgICAgJ3NlbGVjdGVkJzogdGhpcy5kYXRhU291cmNlLmdldFNlbGVjdGVkQnViYmxlcygpLFxuICAgICAgICAgICAgICAnZW50aXR5SWRtYXAnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUocGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19