/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/bubble-chart.eh.ts
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
                case 'aw-bubble-chart.mouseenter':
                    /** @type {?} */
                    var currBubble = _this.dataSource.onBubbleMouseEnter({
                        bubblePayload: event.payload.bubblePayload,
                        bubble: event.payload.bubble
                    });
                    event.payload.currBubble = currBubble;
                    _this.emitOuter('mouseenter', event.payload);
                    break;
                case 'aw-bubble-chart.mouseleave':
                    _this.emitOuter('mouseleave', event.payload);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2V2ZW50LWhhbmRsZXJzL2J1YmJsZS1jaGFydC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFBcUMsMkNBQVk7SUFBakQ7O0lBMkVBLENBQUM7Ozs7SUF6RVEsZ0NBQU07OztJQUFiO1FBQUEsaUJBd0VDO1FBdkVDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUMvQixRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLEtBQUssc0JBQXNCO29CQUN6QixNQUFNO2dCQUNSLEtBQUssdUJBQXVCO29CQUMxQixLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUM3RCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUMzRCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1IsS0FBSyw0QkFBNEI7O3dCQUN6QixVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FDbkQ7d0JBQ0UsYUFBYSxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYTt3QkFDekMsTUFBTSxFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTTtxQkFDNUIsQ0FBQztvQkFDSixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7b0JBQ3RDLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUMsTUFBTTtnQkFDUixLQUFLLDRCQUE0QjtvQkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxNQUFNO2dCQUNSLEtBQUssNENBQTRDO29CQUM3QyxLQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUQsTUFBTTtnQkFDVixLQUFLLDJDQUEyQztvQkFDOUMsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pELE1BQU07Z0JBQ1YsS0FBSyw2Q0FBNkM7b0JBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzRCxNQUFNO2dCQUNWO29CQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUN6RCxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQU8sSUFBSSxFQUFDO2dCQUNWLEtBQUssNENBQTRDOzt3QkFDdkMsVUFBVSxHQUFHO3dCQUNmLFFBQVEsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUM7d0JBQ2hFLGFBQWEsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTt3QkFDL0MsWUFBWSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO3dCQUM3QyxRQUFRLEVBQUUsUUFBUTtxQkFDbkI7b0JBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQ3BDLE1BQU07Z0JBQ1osS0FBSyw4QkFBOEI7b0JBQ2pDLEtBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQ2hDO3dCQUNFLFlBQVksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTt3QkFDN0MsVUFBVSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUU7cUJBQ2pELENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssdUNBQXVDLENBQUM7Z0JBQzdDLEtBQUssdUNBQXVDLENBQUM7Z0JBQzdDLEtBQUsscUNBQXFDO29CQUN4QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQ2xCLEtBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDdEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFDaEM7NEJBQ0UsWUFBWSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFOzRCQUM3QyxVQUFVLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTs0QkFDaEQsYUFBYSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO3lCQUNoRCxDQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ2pDO29CQUNELE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTNFRCxDQUFxQyxZQUFZLEdBMkVoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5pbml0JzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0LmNsaWNrJzpcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmVudGl0eUlkbWFwID0gdGhpcy5kYXRhU291cmNlLmdldEVudGl0eUlkTWFwKCk7XG4gICAgICAgICAgZXZlbnQucGF5bG9hZC5hbGxCdWJibGVzID0gdGhpcy5kYXRhU291cmNlLmdldEFsbEJ1YmJsZXMoKTtcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2xpY2snLCBldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctYnViYmxlLWNoYXJ0Lm1vdXNlZW50ZXInOlxuICAgICAgICAgIGNvbnN0IGN1cnJCdWJibGUgPSB0aGlzLmRhdGFTb3VyY2Uub25CdWJibGVNb3VzZUVudGVyKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBidWJibGVQYXlsb2FkOmV2ZW50LnBheWxvYWQuYnViYmxlUGF5bG9hZCxcbiAgICAgICAgICAgICAgYnViYmxlOmV2ZW50LnBheWxvYWQuYnViYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBldmVudC5wYXlsb2FkLmN1cnJCdWJibGUgPSBjdXJyQnViYmxlO1xuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdtb3VzZWVudGVyJywgZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LWJ1YmJsZS1jaGFydC5tb3VzZWxlYXZlJzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignbW91c2VsZWF2ZScsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWNsb3NlLWNsaWNrXCI6XG4gICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtY2xvc2UtY2xpY2snLCBldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXctYnViYmxlLWNoYXJ0LmJ1YmJsZS10b29sdGlwLWdvdG8tY2xpY2tcIjpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignYnViYmxlLXRvb2x0aXAtZ290by1jbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdy1idWJibGUtY2hhcnQuYnViYmxlLXRvb2x0aXAtc2VsZWN0LWNsaWNrXCI6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS10b29sdGlwLXNlbGVjdC1jbGljaycsIGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIGV2ZW50LnR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgIGNhc2UgXCJhdy1ob21lLWxheW91dC5idWJibGUtdG9vbHRpcC1zZWxlY3QtY2xpY2tcIjpcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgJ2J1YmJsZSc6IHRoaXMuZGF0YVNvdXJjZS5vbkJ1YmJsZVRvb2x0aXBDbGljaygnc2VsZWN0JyxwYXlsb2FkKSxcbiAgICAgICAgICAgICAgICAnZW50aXR5SWRtYXAnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKSxcbiAgICAgICAgICAgICAgICAnYWxsQnViYmxlcyc6IHRoaXMuZGF0YVNvdXJjZS5nZXRBbGxCdWJibGVzKCksXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICdidWJibGUnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjbGljaycsIHNlbGVjdERhdGEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuYnViYmxlLWZpbHRlcic6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS1maWx0ZXJlZCcsXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ2FsbEJ1YmJsZXMnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0QWxsQnViYmxlcygpLFxuICAgICAgICAgICAgJ3NlbGVjdGVkJzogdGhpcy5kYXRhU291cmNlLmdldFNlbGVjdGVkQnViYmxlcygpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmZpbHRlcmJ1YmJsZXJlc3BvbnNlJzpcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZmlsdGVyYnViYmxlcmVzcG9uc2UnOlxuICAgICAgICAgIGlmKCBwYXlsb2FkLnNvdXJjZSApe1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldEFsbEJ1YmJsZXNGcm9tQXBvbGxvUXVlcnkocGF5bG9hZCwgcGF5bG9hZC5yZWxvYWQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2J1YmJsZS1maWx0ZXJlZCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdhbGxCdWJibGVzJzogdGhpcy5kYXRhU291cmNlLmdldEFsbEJ1YmJsZXMoKSxcbiAgICAgICAgICAgICAgJ3NlbGVjdGVkJzogdGhpcy5kYXRhU291cmNlLmdldFNlbGVjdGVkQnViYmxlcygpLFxuICAgICAgICAgICAgICAnZW50aXR5SWRtYXAnOiB0aGlzLmRhdGFTb3VyY2UuZ2V0RW50aXR5SWRNYXAoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUocGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19