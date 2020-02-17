/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/event-handlers/chart-tippy.eh.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventHandler } from '@n7-frontend/core';
import tippy from "tippy.js";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvY2hhcnQtdGlwcHkuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QjtJQUFvQywwQ0FBWTtJQUFoRDtRQUFBLHFFQTJEQztRQXpEUyxlQUFTLEdBQVUsRUFBRSxDQUFBLENBQUMsMkJBQTJCO1FBNkJ6RCxnQkFBVTs7OztRQUFHLFVBQUEsT0FBTztZQUNsQjs7O2NBR0U7WUFDRiwwQkFBMEI7WUFDMUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxDQUFDLElBQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQTtZQUN2RCxLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtZQUNuQixzQkFBc0I7WUFDdEIsT0FBTyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLENBQUM7OztvQkFDWCxNQUFNLEdBQVksUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBSSxDQUFDO2dCQUNqRSxJQUFJLE1BQU0sRUFBRTtvQkFDVixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSwyQ0FBMkM7b0JBQzlELEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ1osT0FBTyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUksQ0FBQzt3QkFDNUQsV0FBVyxFQUFFLElBQUk7d0JBQ2pCLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTs7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJO3dCQUNYLElBQUksRUFBRSxLQUFLO3dCQUNYLEtBQUssRUFBRSx5QkFBeUI7d0JBQ2hDLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO3dCQUNoQixjQUFjLEVBQUUsR0FBRztxQkFDcEIsQ0FBQyxDQUNILENBQUE7aUJBQ0Y7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQTs7SUFDSCxDQUFDOzs7OztJQXZEUSwrQkFBTTs7Ozs7SUFBYjtRQUFBLGlCQXlCQztRQXhCQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFDMUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUE7b0JBQ2pDLE1BQU07Z0JBQ1I7b0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsRUFBRSxJQUFJLENBQUMsQ0FBQTtvQkFDakUsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQWlCO2dCQUFmLGNBQUksRUFBRSxvQkFBTztZQUMxQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHNCQUFzQixDQUFDO2dCQUM1QixLQUFLLHdCQUF3QixDQUFDO2dCQUM5QixLQUFLLHdCQUF3QjtvQkFDM0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBSSxvQ0FBb0M7b0JBQ3ZFLFVBQVU7OztvQkFBQzt3QkFDVCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLGtDQUFrQztvQkFDckUsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUE4QkgscUJBQUM7QUFBRCxDQUFDLEFBM0RELENBQW9DLFlBQVksR0EyRC9DOzs7Ozs7O0lBekRDLG1DQUE2Qjs7SUE2QjdCLG9DQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSBmcm9tIFwidGlwcHkuanNcIjtcblxuZXhwb3J0IGNsYXNzIEF3Q2hhcnRUaXBweUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcblxuICBwcml2YXRlIHRpcHB5TGlzdDogYW55W10gPSBbXSAvLyBhcnJheSBvZiB0aXBweSBpbnN0YW5jZXNcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhdy1jaGFydC10aXBweS5zZWxlY3QnOlxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdzZWxlY3QnLCBwYXlsb2FkKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignKGNoYXJ0LXRpcHB5KSB1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmQzZW5kJzpcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5kM2VuZCc6XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZDNlbmQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUocGF5bG9hZCkgICAgLy8gY3JlYXRpbmcgRE9NIEVsZW1lbnRzICh0ZW1wbGF0ZXMpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ICAgICAgICAgICAgICAgICAvLyB3YWl0IERPTSB0byBiZSByZWFkeVxuICAgICAgICAgICAgdGhpcy50aXBweU1ha2VyKHBheWxvYWQuYnViYmxlcykgLy8gYXNzaWduIHRlbXBsYXRlcyB0byB0aGUgYnViYmxlc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdGlwcHlNYWtlciA9IGJ1YmJsZXMgPT4ge1xuICAgIC8qXG4gICAgICBEZXN0cm95cyBldmVyeSBleGlzdGluZyB0b29sdGlwLFxuICAgICAgdGhlbiBjcmVhdGVzIGEgbmV3IFRpcHB5IGluc3RhbmNlIGZvciBlYWNoIGJ1YmJsZS5cbiAgICAqL1xuICAgIC8vIGZsdXNoIGV4aXN0aW5nIHRvb2x0aXBzXG4gICAgdGhpcy50aXBweUxpc3QuZm9yRWFjaCh0ID0+IHsgaWYgKHQpIHsgdC5kZXN0cm95KCkgfSB9KVxuICAgIHRoaXMudGlwcHlMaXN0ID0gW11cbiAgICAvLyBjcmVhdGUgbmV3IHRvb2x0aXBzXG4gICAgYnViYmxlcy5mb3JFYWNoKGIgPT4geyAvLyBnaXZlIGEgdG9vbHRpcCB0byBlYWNoIGJ1YmJsZVxuICAgICAgbGV0IHRhcmdldDogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBnXyR7Yi5lbnRpdHkuaWR9YClcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50aXBweUxpc3QucHVzaCggLy8gYWRkIHRoaXMgdGlwcHkgdG8gdGhlIGFycmF5IG9mIGluc3RhbmNlc1xuICAgICAgICAgIHRpcHB5KHRhcmdldCwge1xuICAgICAgICAgICAgY29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRlbXBsYXRlX18ke2IuZW50aXR5LmlkfWApLFxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgICAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgIGRlbGF5OiBbMTUwLCAzMF0sXG4gICAgICAgICAgICB1cGRhdGVEdXJhdGlvbjogNDAwLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==