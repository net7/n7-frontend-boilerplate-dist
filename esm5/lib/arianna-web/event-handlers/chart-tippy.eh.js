/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvY2hhcnQtdGlwcHkuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCO0lBQW9DLDBDQUFZO0lBQWhEO1FBQUEscUVBMkRDO1FBekRTLGVBQVMsR0FBVSxFQUFFLENBQUEsQ0FBQywyQkFBMkI7UUE2QnpELGdCQUFVOzs7O1FBQUcsVUFBQSxPQUFPO1lBQ2xCOzs7Y0FHRTtZQUNGLDBCQUEwQjtZQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLENBQUMsSUFBTSxJQUFJLENBQUMsRUFBRTtnQkFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7YUFBRSxDQUFDLENBQUMsRUFBQyxDQUFBO1lBQ3ZELEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1lBQ25CLHNCQUFzQjtZQUN0QixPQUFPLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsQ0FBQzs7O29CQUNYLE1BQU0sR0FBWSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFJLENBQUM7Z0JBQ2pFLElBQUksTUFBTSxFQUFFO29CQUNWLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLDJDQUEyQztvQkFDOUQsS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDWixPQUFPLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBSSxDQUFDO3dCQUM1RCxXQUFXLEVBQUUsSUFBSTt3QkFDakIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJOzt3QkFDdkIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLHlCQUF5Qjt3QkFDaEMsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7d0JBQ2hCLGNBQWMsRUFBRSxHQUFHO3FCQUNwQixDQUFDLENBQ0gsQ0FBQTtpQkFDRjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7O0lBdkRRLCtCQUFNOzs7OztJQUFiO1FBQUEsaUJBeUJDO1FBeEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQTtvQkFDakMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUNqRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssc0JBQXNCLENBQUM7Z0JBQzVCLEtBQUssd0JBQXdCLENBQUM7Z0JBQzlCLEtBQUssd0JBQXdCO29CQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFJLG9DQUFvQztvQkFDdkUsVUFBVTs7O29CQUFDO3dCQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsa0NBQWtDO29CQUNyRSxDQUFDLEVBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQThCSCxxQkFBQztBQUFELENBQUMsQUEzREQsQ0FBb0MsWUFBWSxHQTJEL0M7Ozs7Ozs7SUF6REMsbUNBQTZCOztJQTZCN0Isb0NBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gXCJ0aXBweS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQXdDaGFydFRpcHB5RUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuXG4gIHByaXZhdGUgdGlwcHlMaXN0OiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIHRpcHB5IGluc3RhbmNlc1xuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5pbm5lckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWNoYXJ0LXRpcHB5LnNlbGVjdCc6XG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3NlbGVjdCcsIHBheWxvYWQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCcoY2hhcnQtdGlwcHkpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctaG9tZS1sYXlvdXQuZDNlbmQnOlxuICAgICAgICBjYXNlICdhdy1lbnRpdGEtbGF5b3V0LmQzZW5kJzpcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5kM2VuZCc6XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZShwYXlsb2FkKSAgICAvLyBjcmVhdGluZyBET00gRWxlbWVudHMgKHRlbXBsYXRlcylcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgICAgICAgICAgICAgICAgIC8vIHdhaXQgRE9NIHRvIGJlIHJlYWR5XG4gICAgICAgICAgICB0aGlzLnRpcHB5TWFrZXIocGF5bG9hZC5idWJibGVzKSAvLyBhc3NpZ24gdGVtcGxhdGVzIHRvIHRoZSBidWJibGVzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aXBweU1ha2VyID0gYnViYmxlcyA9PiB7XG4gICAgLypcbiAgICAgIERlc3Ryb3lzIGV2ZXJ5IGV4aXN0aW5nIHRvb2x0aXAsXG4gICAgICB0aGVuIGNyZWF0ZXMgYSBuZXcgVGlwcHkgaW5zdGFuY2UgZm9yIGVhY2ggYnViYmxlLlxuICAgICovXG4gICAgLy8gZmx1c2ggZXhpc3RpbmcgdG9vbHRpcHNcbiAgICB0aGlzLnRpcHB5TGlzdC5mb3JFYWNoKHQgPT4geyBpZiAodCkgeyB0LmRlc3Ryb3koKSB9IH0pXG4gICAgdGhpcy50aXBweUxpc3QgPSBbXVxuICAgIC8vIGNyZWF0ZSBuZXcgdG9vbHRpcHNcbiAgICBidWJibGVzLmZvckVhY2goYiA9PiB7IC8vIGdpdmUgYSB0b29sdGlwIHRvIGVhY2ggYnViYmxlXG4gICAgICBsZXQgdGFyZ2V0OiBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGdfJHtiLmVudGl0eS5pZH1gKVxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRpcHB5TGlzdC5wdXNoKCAvLyBhZGQgdGhpcyB0aXBweSB0byB0aGUgYXJyYXkgb2YgaW5zdGFuY2VzXG4gICAgICAgICAgdGlwcHkodGFyZ2V0LCB7XG4gICAgICAgICAgICBjb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGVtcGxhdGVfXyR7Yi5lbnRpdHkuaWR9YCksXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAgICAgICAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19