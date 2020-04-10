/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtdGlwcHkuZWguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZXZlbnQtaGFuZGxlcnMvY2hhcnQtdGlwcHkuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRTdCO0lBQW9DLDBDQUFZO0lBQWhEO1FBQUEscUVBMERDO1FBekRTLGVBQVMsR0FBVSxFQUFFLENBQUEsQ0FBQywyQkFBMkI7UUE2QnpELGdCQUFVOzs7O1FBQUcsVUFBQyxPQUFPO1lBQ25COzs7Y0FHRTtZQUNGLDBCQUEwQjtZQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLENBQUMsSUFBTyxJQUFJLENBQUMsRUFBRTtnQkFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLHNCQUFzQjtZQUN0QixPQUFPLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsQ0FBQzs7O29CQUNWLE1BQU0sR0FBWSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFJLENBQUM7Z0JBQ25FLElBQUksTUFBTSxFQUFFO29CQUNWLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLDJDQUEyQztvQkFDOUQsS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDWixPQUFPLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBSSxDQUFDO3dCQUM1RCxXQUFXLEVBQUUsSUFBSTt3QkFDakIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJOzt3QkFDdkIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsS0FBSyxFQUFFLHlCQUF5Qjt3QkFDaEMsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7d0JBQ2hCLGNBQWMsRUFBRSxHQUFHO3FCQUNwQixDQUFDLENBQ0gsQ0FBQztpQkFDSDtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFBOztJQUNILENBQUM7Ozs7O0lBdkRRLCtCQUFNOzs7OztJQUFiO1FBQUEsaUJBeUJDO1FBeEJDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDbEMsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNsRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsRUFBaUI7Z0JBQWYsY0FBSSxFQUFFLG9CQUFPO1lBQzFDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssc0JBQXNCLENBQUM7Z0JBQzVCLEtBQUssd0JBQXdCLENBQUM7Z0JBQzlCLEtBQUssd0JBQXdCO29CQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLG9DQUFvQztvQkFDckUsVUFBVTs7O29CQUFDO3dCQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0NBQWtDO29CQUN0RSxDQUFDLEVBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQThCSCxxQkFBQztBQUFELENBQUMsQUExREQsQ0FBb0MsWUFBWSxHQTBEL0M7Ozs7Ozs7SUF6REMsbUNBQTZCOztJQTZCN0Isb0NBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzJztcblxuZXhwb3J0IGNsYXNzIEF3Q2hhcnRUaXBweUVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSB0aXBweUxpc3Q6IGFueVtdID0gW10gLy8gYXJyYXkgb2YgdGlwcHkgaW5zdGFuY2VzXG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXctY2hhcnQtdGlwcHkuc2VsZWN0JzpcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcignc2VsZWN0JywgcGF5bG9hZCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCcoY2hhcnQtdGlwcHkpIHVuaGFuZGxlZCBpbm5lciBldmVudCBvZiB0eXBlJywgdHlwZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vdXRlckV2ZW50cyQuc3Vic2NyaWJlKCh7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2F3LWhvbWUtbGF5b3V0LmQzZW5kJzpcbiAgICAgICAgY2FzZSAnYXctZW50aXRhLWxheW91dC5kM2VuZCc6XG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZDNlbmQnOlxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGUocGF5bG9hZCk7IC8vIGNyZWF0aW5nIERPTSBFbGVtZW50cyAodGVtcGxhdGVzKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyB3YWl0IERPTSB0byBiZSByZWFkeVxuICAgICAgICAgICAgdGhpcy50aXBweU1ha2VyKHBheWxvYWQuYnViYmxlcyk7IC8vIGFzc2lnbiB0ZW1wbGF0ZXMgdG8gdGhlIGJ1YmJsZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRpcHB5TWFrZXIgPSAoYnViYmxlcykgPT4ge1xuICAgIC8qXG4gICAgICBEZXN0cm95cyBldmVyeSBleGlzdGluZyB0b29sdGlwLFxuICAgICAgdGhlbiBjcmVhdGVzIGEgbmV3IFRpcHB5IGluc3RhbmNlIGZvciBlYWNoIGJ1YmJsZS5cbiAgICAqL1xuICAgIC8vIGZsdXNoIGV4aXN0aW5nIHRvb2x0aXBzXG4gICAgdGhpcy50aXBweUxpc3QuZm9yRWFjaCgodCkgPT4geyBpZiAodCkgeyB0LmRlc3Ryb3koKTsgfSB9KTtcbiAgICB0aGlzLnRpcHB5TGlzdCA9IFtdO1xuICAgIC8vIGNyZWF0ZSBuZXcgdG9vbHRpcHNcbiAgICBidWJibGVzLmZvckVhY2goKGIpID0+IHsgLy8gZ2l2ZSBhIHRvb2x0aXAgdG8gZWFjaCBidWJibGVcbiAgICAgIGNvbnN0IHRhcmdldDogRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBnXyR7Yi5lbnRpdHkuaWR9YCk7XG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGlwcHlMaXN0LnB1c2goIC8vIGFkZCB0aGlzIHRpcHB5IHRvIHRoZSBhcnJheSBvZiBpbnN0YW5jZXNcbiAgICAgICAgICB0aXBweSh0YXJnZXQsIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0ZW1wbGF0ZV9fJHtiLmVudGl0eS5pZH1gKSxcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHN1cHByZXNzIGludGVyYWN0aXZlIHdhcm5pbmdcbiAgICAgICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgICBkZWxheTogWzE1MCwgMzBdLFxuICAgICAgICAgICAgdXBkYXRlRHVyYXRpb246IDQwMCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19