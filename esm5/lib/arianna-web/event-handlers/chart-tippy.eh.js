/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/chart-tippy.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import tippy from 'tippy.js';
var AwChartTippyEH = /** @class */ (function (_super) {
    tslib_1.__extends(AwChartTippyEH, _super);
    function AwChartTippyEH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tippyList = []; // array of tippy instances
        _this.tippyMaker = (/**
         * @param {?} bubbles
         * @return {?}
         */
        function (bubbles) {
            /*
              Destroys every existing tooltip,
              then creates a new Tippy instance for each bubble.
            */
            // flush existing tooltips
            _this.tippyList.forEach((/**
             * @param {?} t
             * @return {?}
             */
            function (t) { if (t) {
                t.destroy();
            } }));
            _this.tippyList = [];
            // create new tooltips
            bubbles.forEach((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                // give a tooltip to each bubble
                /** @type {?} */
                var target = document.getElementById("g_" + b.entity.id);
                if (target) {
                    _this.tippyList.push(// add this tippy to the array of instances
                    tippy(target, {
                        content: document.getElementById("template__" + b.entity.id),
                        interactive: true,
                        appendTo: document.body,
                        // suppress interactive warning
                        arrow: true,
                        flip: false,
                        theme: 'light-border no-padding',
                        placement: 'top',
                        delay: [150, 30],
                        updateDuration: 400,
                    }));
                }
            }));
        });
        return _this;
    }
    // array of tippy instances
    /**
     * @return {?}
     */
    AwChartTippyEH.prototype.listen = 
    // array of tippy instances
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.innerEvents$.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case 'aw-chart-tippy.select':
                    _this.emitOuter('select', payload);
                    break;
                default:
                    console.warn('(chart-tippy) unhandled inner event of type', type);
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
                case 'aw-home-layout.d3end':
                case 'aw-entita-layout.d3end':
                case 'aw-scheda-layout.d3end':
                    _this.dataSource.update(payload); // creating DOM Elements (templates)
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.tippyMaker(payload.bubbles); // assign templates to the bubbles
                    }));
                    break;
                default:
                    break;
            }
        }));
    };
    return AwChartTippyEH;
}(EventHandler));
export { AwChartTippyEH };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwChartTippyEH.prototype.tippyList;
    /** @type {?} */
    AwChartTippyEH.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvY2hhcnQtdGlwcHkuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QjtJQUFvQywwQ0FBWTtJQUFoRDtRQUFBLHFFQTBEQztRQXpEUyxlQUFTLEdBQVUsRUFBRSxDQUFBLENBQUMsMkJBQTJCO1FBNkJ6RCxnQkFBVTs7OztRQUFHLFVBQUMsT0FBTztZQUNuQjs7O2NBR0U7WUFDRiwwQkFBMEI7WUFDMUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxDQUFDLElBQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixzQkFBc0I7WUFDdEIsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLENBQUM7OztvQkFDVixNQUFNLEdBQVksUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBSSxDQUFDO2dCQUNuRSxJQUFJLE1BQU0sRUFBRTtvQkFDVixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSwyQ0FBMkM7b0JBQzlELEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ1osT0FBTyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUksQ0FBQzt3QkFDNUQsV0FBVyxFQUFFLElBQUk7d0JBQ2pCLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTs7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJO3dCQUNYLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSx5QkFBeUI7d0JBQ2hDLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO3dCQUNoQixjQUFjLEVBQUUsR0FBRztxQkFDcEIsQ0FBQyxDQUNILENBQUM7aUJBQ0g7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQTs7SUFDSCxDQUFDOzs7OztJQXZEUSwrQkFBTTs7Ozs7SUFBYjtRQUFBLGlCQXlCQztRQXhCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbEUsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHNCQUFzQixDQUFDO2dCQUM1QixLQUFLLHdCQUF3QixDQUFDO2dCQUM5QixLQUFLLHdCQUF3QjtvQkFDM0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxvQ0FBb0M7b0JBQ3JFLFVBQVU7OztvQkFBQzt3QkFDVCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztvQkFDdEUsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUE4QkgscUJBQUM7QUFBRCxDQUFDLEFBMURELENBQW9DLFlBQVksR0EwRC9DOzs7Ozs7O0lBekRDLG1DQUE2Qjs7SUE2QjdCLG9DQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0NoYXJ0VGlwcHlFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIHByaXZhdGUgdGlwcHlMaXN0OiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIHRpcHB5IGluc3RhbmNlc1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWNoYXJ0LXRpcHB5LnNlbGVjdCc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdCcsIHBheWxvYWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKGNoYXJ0LXRpcHB5KSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1ob21lLWxheW91dC5kM2VuZCc6XG4gICAgICAgIGNhc2UgJ2F3LWVudGl0YS1sYXlvdXQuZDNlbmQnOlxuICAgICAgICBjYXNlICdhdy1zY2hlZGEtbGF5b3V0LmQzZW5kJzpcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlKHBheWxvYWQpOyAvLyBjcmVhdGluZyBET00gRWxlbWVudHMgKHRlbXBsYXRlcylcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gd2FpdCBET00gdG8gYmUgcmVhZHlcbiAgICAgICAgICAgIHRoaXMudGlwcHlNYWtlcihwYXlsb2FkLmJ1YmJsZXMpOyAvLyBhc3NpZ24gdGVtcGxhdGVzIHRvIHRoZSBidWJibGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aXBweU1ha2VyID0gKGJ1YmJsZXMpID0+IHtcbiAgICAvKlxuICAgICAgRGVzdHJveXMgZXZlcnkgZXhpc3RpbmcgdG9vbHRpcCxcbiAgICAgIHRoZW4gY3JlYXRlcyBhIG5ldyBUaXBweSBpbnN0YW5jZSBmb3IgZWFjaCBidWJibGUuXG4gICAgKi9cbiAgICAvLyBmbHVzaCBleGlzdGluZyB0b29sdGlwc1xuICAgIHRoaXMudGlwcHlMaXN0LmZvckVhY2goKHQpID0+IHsgaWYgKHQpIHsgdC5kZXN0cm95KCk7IH0gfSk7XG4gICAgdGhpcy50aXBweUxpc3QgPSBbXTtcbiAgICAvLyBjcmVhdGUgbmV3IHRvb2x0aXBzXG4gICAgYnViYmxlcy5mb3JFYWNoKChiKSA9PiB7IC8vIGdpdmUgYSB0b29sdGlwIHRvIGVhY2ggYnViYmxlXG4gICAgICBjb25zdCB0YXJnZXQ6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ18ke2IuZW50aXR5LmlkfWApO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRpcHB5TGlzdC5wdXNoKCAvLyBhZGQgdGhpcyB0aXBweSB0byB0aGUgYXJyYXkgb2YgaW5zdGFuY2VzXG4gICAgICAgICAgdGlwcHkodGFyZ2V0LCB7XG4gICAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGVtcGxhdGVfXyR7Yi5lbnRpdHkuaWR9YCksXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAgICAgICAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==