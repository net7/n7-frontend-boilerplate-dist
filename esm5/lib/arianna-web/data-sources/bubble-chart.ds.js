/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
var AwBubbleChartDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwBubbleChartDS, _super);
    function AwBubbleChartDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartData = []; // data rendered into the graph
        // data rendered into the graph
        _this.draw = null; // exposed component draw function to update the view
        // exposed component draw function to update the view
        _this.selected = []; // list of selected bubbles
        // list of selected bubbles
        _this.filters = []; // list of active filters to show only some TypeOfEntity(s)
        // list of active filters to show only some TypeOfEntity(s)
        _this.closedEyes = [];
        _this.tippyList = []; // list of tippy instances
        _this.updateChart = (/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /*
              Redraws the graph with the incoming data.
              "res" should be Apollo's "response.entitiesData"
            */
            if (res) {
                _this.chartData = res;
            }
            else if (res === null) {
                res = _this.chartData;
            }
            if (_this.filters.length > 0) { // apply filters to the response before redrawing the graph
                res = _this.chartData.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) { return !_this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); }));
            }
            if (!_this.draw) {
                _this.update(res); // component self-update
            }
            else {
                _this.output.data = res;
                _this.output.selected = _this.selected;
                _this.draw();
            }
        });
        _this.handleBubbleClick = (/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            /*
                  Toggles the selection of the clicked bubble.
                */
            /** @type {?} */
            var id = payload;
            if (_this.selected.includes(id)) {
                _this.selected.splice(_this.selected.indexOf(id), 1); // remove selection
            }
            else {
                _this.selected.push(id); // add selection
            }
        });
        _this.tippyMaker = (/**
         * @param {?} bubbles
         * @return {?}
         */
        function (bubbles) {
            // flush existing tooltips
            _this.tippyList.forEach((/**
             * @param {?} t
             * @return {?}
             */
            function (t) { if (t) {
                t.destroy();
            } }));
            _this.tippyList = [];
            /** @type {?} */
            var buildTooltip = (/**
             * @param {?} bubble
             * @return {?}
             */
            function (bubble) {
                /** @type {?} */
                var element = (/** @type {?} */ (document.getElementsByClassName('bubble-chart__tippy-template')[0].cloneNode(true)));
                /** @type {?} */
                var gotoButton = element.getElementsByClassName('aw-bubble-popup-menu__text')[0];
                gotoButton.innerHTML =
                    "\u00C8 collegato a " + bubble.count + " entit\u00E0";
                element.getElementsByClassName('aw-bubble-popup-menu__title')[0].innerHTML =
                    "" + bubble.entity.label;
                /** @type {?} */
                var selectButton = element.getElementsByClassName('aw-bubble-popup-menu__link')[1];
                if (_this.options.simple) {
                    if (selectButton)
                        selectButton.remove();
                }
                else {
                    /** @type {?} */
                    var toggleBubbleText = _this.selected.includes(bubble.entity.id) ? "Deseleziona" : "Seleziona";
                    selectButton.innerHTML = toggleBubbleText;
                }
                // console.log(element)
                return element.innerHTML;
            });
            /** @type {?} */
            var focusBubble = (/**
             * @param {?} id
             * @return {?}
             */
            function (id) {
                _this.focusedBubble = id;
            });
            if (_this.filters.length > 0) { // apply filters to the data before adding tooltips
                bubbles = bubbles.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) { return !_this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); }));
            }
            // make new tooltips
            bubbles.forEach((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                /** @type {?} */
                var el = document.getElementById(b.entity.id).parentElement // selects a <g> element
                ;
                _this.tippyList.push(// add this tippy to the array of instances
                tippy(el, {
                    content: buildTooltip(b),
                    interactive: true,
                    appendTo: document.body,
                    // suppress interactive warning
                    arrow: true,
                    flip: false,
                    theme: 'light-border no-padding',
                    placement: 'top',
                    delay: [150, 30],
                    updateDuration: 400,
                    onMount: /**
                     * @return {?}
                     */
                    function () {
                        focusBubble(b.entity.id);
                    }
                }));
            }));
            // createSingleton(this.tippyList, {
            //   interactive: true,
            //   appendTo: document.body, // suppress interactive warning
            //   arrow: true,
            //   flip: false,
            //   theme: 'light-border no-padding',
            //   placement: 'top',
            //   delay: [150, 30],
            //   updateDuration: 400,
            // onTrigger(ref) {
            //   console.log({ref})
            //   console.log('fired')
            // }
            // })
        });
        return _this;
    }
    // id of the focused bubble
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwBubbleChartDS.prototype.transform = 
    // id of the focused bubble
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        var config = this.options.config;
        var _a = config.get('bubble-chart'), fontRendering = _a.fontRendering, transition = _a.transition, shuffle = _a.shuffle;
        /** @type {?} */
        var domain = [];
        /** @type {?} */
        var range = [];
        /** @type {?} */
        var colorConfig = config.get('config-keys');
        Object.keys(colorConfig).forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            domain.push(k.replace(/-/g, ' '));
            range.push(((colorConfig[k] || {}).color || {}).hex);
        }));
        if (data.response && data.response.entitiesData) {
            this.chartData = data.response.entitiesData;
        }
        return {
            fontRendering: fontRendering,
            containerId: 'bubbleChartContainer',
            width: 500,
            height: 500,
            shuffle: shuffle,
            transition: transition,
            sizeRange: [.5, 500],
            selected: this.selected,
            colorMatch: { domain: domain, range: range },
            data: this.chartData,
            setDraw: (/**
             * @param {?} draw
             * @return {?}
             */
            function (draw) { return _this.draw = draw; })
        };
    };
    return AwBubbleChartDS;
}(DataSource));
export { AwBubbleChartDS };
if (false) {
    /** @type {?} */
    AwBubbleChartDS.prototype.chartData;
    /** @type {?} */
    AwBubbleChartDS.prototype.draw;
    /** @type {?} */
    AwBubbleChartDS.prototype.selected;
    /** @type {?} */
    AwBubbleChartDS.prototype.filters;
    /** @type {?} */
    AwBubbleChartDS.prototype.closedEyes;
    /** @type {?} */
    AwBubbleChartDS.prototype.tippyList;
    /** @type {?} */
    AwBubbleChartDS.prototype.focusedBubble;
    /** @type {?} */
    AwBubbleChartDS.prototype.updateChart;
    /** @type {?} */
    AwBubbleChartDS.prototype.handleBubbleClick;
    /** @type {?} */
    AwBubbleChartDS.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUEwQixNQUFNLFVBQVUsQ0FBQztBQUVsRDtJQUFxQywyQ0FBVTtJQUEvQztRQUFBLHFFQXlJQztRQXhJUSxlQUFTLEdBQVEsRUFBRSxDQUFBLENBQU0sK0JBQStCOztRQUN4RCxVQUFJLEdBQVEsSUFBSSxDQUFDLENBQVEscURBQXFEOztRQUM5RSxjQUFRLEdBQWEsRUFBRSxDQUFBLENBQUUsMkJBQTJCOztRQUNwRCxhQUFPLEdBQVUsRUFBRSxDQUFBLENBQU0sMkRBQTJEOztRQUNwRixnQkFBVSxHQUFVLEVBQUUsQ0FBQTtRQUN0QixlQUFTLEdBQVUsRUFBRSxDQUFBLENBQUksMEJBQTBCO1FBZ0MxRCxpQkFBVzs7OztRQUFHLFVBQUEsR0FBRztZQUNmOzs7Y0FHRTtZQUNGLElBQUksR0FBRyxFQUFFO2dCQUNQLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2FBQ3JCO2lCQUFNLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDdkIsR0FBRyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUE7YUFDckI7WUFDRCxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLDJEQUEyRDtnQkFDeEYsR0FBRyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztnQkFBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUks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LFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUE7U0FDbEMsQ0FBQTtJQUNILENBQUM7SUFxR0gsc0JBQUM7QUFBRCxDQUFDLEFBeklELENBQXFDLFVBQVUsR0F5STlDOzs7O0lBeElDLG9DQUEwQjs7SUFDMUIsK0JBQXdCOztJQUN4QixtQ0FBOEI7O0lBQzlCLGtDQUEwQjs7SUFDMUIscUNBQTZCOztJQUM3QixvQ0FBNEI7O0lBQzVCLHdDQUE0Qjs7SUErQjVCLHNDQW9CQzs7SUFFRCw0Q0FVQzs7SUFFRCxxQ0FnRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHRpcHB5LCB7IGNyZWF0ZVNpbmdsZXRvbiB9IGZyb20gJ3RpcHB5LmpzJztcblxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnREUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgY2hhcnREYXRhOiBhbnkgPSBbXSAgICAgIC8vIGRhdGEgcmVuZGVyZWQgaW50byB0aGUgZ3JhcGhcbiAgcHVibGljIGRyYXc6IGFueSA9IG51bGw7ICAgICAgICAvLyBleHBvc2VkIGNvbXBvbmVudCBkcmF3IGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdmlld1xuICBwdWJsaWMgc2VsZWN0ZWQ6IHN0cmluZ1tdID0gW10gIC8vIGxpc3Qgb2Ygc2VsZWN0ZWQgYnViYmxlc1xuICBwdWJsaWMgZmlsdGVyczogYW55W10gPSBbXSAgICAgIC8vIGxpc3Qgb2YgYWN0aXZlIGZpbHRlcnMgdG8gc2hvdyBvbmx5IHNvbWUgVHlwZU9mRW50aXR5KHMpXG4gIHB1YmxpYyBjbG9zZWRFeWVzOiBhbnlbXSA9IFtdXG4gIHB1YmxpYyB0aXBweUxpc3Q6IGFueVtdID0gW10gICAgLy8gbGlzdCBvZiB0aXBweSBpbnN0YW5jZXNcbiAgcHVibGljIGZvY3VzZWRCdWJibGU6IHN0cmluZyAgICAvLyBpZCBvZiB0aGUgZm9jdXNlZCBidWJibGVcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zXG4gICAgY29uc3QgeyBmb250UmVuZGVyaW5nLCB0cmFuc2l0aW9uLCBzaHVmZmxlIH0gPSBjb25maWcuZ2V0KCdidWJibGUtY2hhcnQnKVxuICAgIGNvbnN0IGRvbWFpbiA9IFtdLCByYW5nZSA9IFtdXG4gICAgY29uc3QgY29sb3JDb25maWcgPSBjb25maWcuZ2V0KCdjb25maWcta2V5cycpXG5cbiAgICBPYmplY3Qua2V5cyhjb2xvckNvbmZpZykuZm9yRWFjaChrID0+IHtcbiAgICAgIGRvbWFpbi5wdXNoKGsucmVwbGFjZSgvLS9nLCAnICcpKVxuICAgICAgcmFuZ2UucHVzaCgoKGNvbG9yQ29uZmlnW2tdIHx8IHt9KS5jb2xvciB8fCB7fSkuaGV4KVxuICAgIH0pXG5cbiAgICBpZiAoZGF0YS5yZXNwb25zZSAmJiBkYXRhLnJlc3BvbnNlLmVudGl0aWVzRGF0YSkge1xuICAgICAgdGhpcy5jaGFydERhdGEgPSBkYXRhLnJlc3BvbnNlLmVudGl0aWVzRGF0YVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZm9udFJlbmRlcmluZyxcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgc2h1ZmZsZSxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBzaXplUmFuZ2U6IFsuNSwgNTAwXSxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgY29sb3JNYXRjaDogeyBkb21haW4sIHJhbmdlIH0sXG4gICAgICBkYXRhOiB0aGlzLmNoYXJ0RGF0YSxcbiAgICAgIHNldERyYXc6IGRyYXcgPT4gdGhpcy5kcmF3ID0gZHJhd1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0ID0gcmVzID0+IHtcbiAgICAvKlxuICAgICAgUmVkcmF3cyB0aGUgZ3JhcGggd2l0aCB0aGUgaW5jb21pbmcgZGF0YS5cbiAgICAgIFwicmVzXCIgc2hvdWxkIGJlIEFwb2xsbydzIFwicmVzcG9uc2UuZW50aXRpZXNEYXRhXCJcbiAgICAqL1xuICAgIGlmIChyZXMpIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gcmVzXG4gICAgfSBlbHNlIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgIHJlcyA9IHRoaXMuY2hhcnREYXRhXG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSByZXNwb25zZSBiZWZvcmUgcmVkcmF3aW5nIHRoZSBncmFwaFxuICAgICAgcmVzID0gdGhpcy5jaGFydERhdGEuZmlsdGVyKGVsID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZHJhdykge1xuICAgICAgdGhpcy51cGRhdGUocmVzKSAvLyBjb21wb25lbnQgc2VsZi11cGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRwdXQuZGF0YSA9IHJlcztcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQnViYmxlQ2xpY2sgPSBwYXlsb2FkID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlcyB0aGUgc2VsZWN0aW9uIG9mIHRoZSBjbGlja2VkIGJ1YmJsZS5cbiAgICAqL1xuICAgIGNvbnN0IGlkID0gcGF5bG9hZFxuICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGlkKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UodGhpcy5zZWxlY3RlZC5pbmRleE9mKGlkKSwgMSkgLy8gcmVtb3ZlIHNlbGVjdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpIC8vIGFkZCBzZWxlY3Rpb25cbiAgICB9XG4gIH1cblxuICB0aXBweU1ha2VyID0gYnViYmxlcyA9PiB7XG4gICAgLy8gZmx1c2ggZXhpc3RpbmcgdG9vbHRpcHNcbiAgICB0aGlzLnRpcHB5TGlzdC5mb3JFYWNoKHQgPT4geyBpZiAodCkgeyB0LmRlc3Ryb3koKSB9IH0pXG4gICAgdGhpcy50aXBweUxpc3QgPSBbXVxuXG4gICAgY29uc3QgYnVpbGRUb29sdGlwID0gYnViYmxlID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gPEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnViYmxlLWNoYXJ0X190aXBweS10ZW1wbGF0ZScpWzBdLmNsb25lTm9kZSh0cnVlKVxuICAgICAgbGV0IGdvdG9CdXR0b24gPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X190ZXh0JylbMF1cbiAgICAgIGdvdG9CdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICAgYMOIIGNvbGxlZ2F0byBhICR7YnViYmxlLmNvdW50fSBlbnRpdMOgYFxuICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fdGl0bGUnKVswXS5pbm5lckhUTUwgPVxuICAgICAgICBgJHtidWJibGUuZW50aXR5LmxhYmVsfWBcbiAgICAgIGxldCBzZWxlY3RCdXR0b24gPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X19saW5rJylbMV1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2ltcGxlKSB7XG4gICAgICAgIGlmIChzZWxlY3RCdXR0b24pIHNlbGVjdEJ1dHRvbi5yZW1vdmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRvZ2dsZUJ1YmJsZVRleHQgPSB0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGJ1YmJsZS5lbnRpdHkuaWQpID8gYERlc2VsZXppb25hYCA6IGBTZWxlemlvbmFgXG4gICAgICAgIHNlbGVjdEJ1dHRvbi5pbm5lckhUTUwgPSB0b2dnbGVCdWJibGVUZXh0XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgICAgcmV0dXJuIGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgfVxuICAgIGNvbnN0IGZvY3VzQnViYmxlID0gaWQgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkQnViYmxlID0gaWRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXJzLmxlbmd0aCA+IDApIHsgLy8gYXBwbHkgZmlsdGVycyB0byB0aGUgZGF0YSBiZWZvcmUgYWRkaW5nIHRvb2x0aXBzXG4gICAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZWwgPT4gIXRoaXMuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpXG4gICAgfVxuICAgIC8vIG1ha2UgbmV3IHRvb2x0aXBzXG4gICAgYnViYmxlcy5mb3JFYWNoKGIgPT4ge1xuICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYi5lbnRpdHkuaWQpLnBhcmVudEVsZW1lbnQgLy8gc2VsZWN0cyBhIDxnPiBlbGVtZW50XG4gICAgICB0aGlzLnRpcHB5TGlzdC5wdXNoKCAvLyBhZGQgdGhpcyB0aXBweSB0byB0aGUgYXJyYXkgb2YgaW5zdGFuY2VzXG4gICAgICAgIHRpcHB5KGVsLCB7XG4gICAgICAgICAgY29udGVudDogYnVpbGRUb29sdGlwKGIpLFxuICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBkZWxheTogWzE1MCwgMzBdLFxuICAgICAgICAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgb25Nb3VudCgpIHtcbiAgICAgICAgICAgIGZvY3VzQnViYmxlKGIuZW50aXR5LmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9KTtcblxuICAgIC8vIGNyZWF0ZVNpbmdsZXRvbih0aGlzLnRpcHB5TGlzdCwge1xuICAgIC8vICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgLy8gICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgIC8vICAgYXJyb3c6IHRydWUsXG4gICAgLy8gICBmbGlwOiBmYWxzZSxcbiAgICAvLyAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgIC8vICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAvLyAgIGRlbGF5OiBbMTUwLCAzMF0sXG4gICAgLy8gICB1cGRhdGVEdXJhdGlvbjogNDAwLFxuICAgIC8vIG9uVHJpZ2dlcihyZWYpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHtyZWZ9KVxuICAgIC8vICAgY29uc29sZS5sb2coJ2ZpcmVkJylcbiAgICAvLyB9XG4gICAgLy8gfSlcbiAgfVxufSJdfQ==