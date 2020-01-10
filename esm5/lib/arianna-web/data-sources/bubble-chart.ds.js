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
              "res" should be Apollo's "response.entitiesData".
              When res is passed as null, the chart is rendered with the previous data.
            */
            if (res === null) {
                res = _this.chartData;
            }
            else {
                _this.chartData = res;
            }
            if (_this.filters.length > 0) { // apply filters to the response
                res = _this.chartData.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) { return !_this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); }));
            }
            if (!_this.draw) {
                _this.update(_this.smartSlice(res)); // component self-update
            }
            else {
                _this.output.selected = _this.selected;
                _this.output.data = _this.smartSlice(res);
                _this.output.smallView.data = _this.smartSlice(res, _this.options.smallChartSize);
                _this.draw();
            }
        });
        _this.smartSlice = (/**
         * @param {?} d
         * @param {?=} length
         * @return {?}
         */
        function (d, length) {
            /** @type {?} */
            var l = length ? length : _this.options.limit;
            if (l && l < d.length) {
                return d.slice(0, l);
            }
            else {
                return d;
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
                var el = document.getElementById(b.entity.id);
                /** @type {?} */
                var group = el ? el.parentElement : false // selects a <g> element
                ;
                if (group) {
                    _this.tippyList.push(// add this tippy to the array of instances
                    tippy(group, {
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
                }
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
        var _a = this.options, config = _a.config, smallChartSize = _a.smallChartSize;
        var _b = config.get('bubble-chart'), fontRendering = _b.fontRendering, transition = _b.transition, shuffle = _b.shuffle;
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
        /** @type {?} */
        var commonParams = {
            containerId: 'bubbleChartContainer',
            setDraw: (/**
             * @param {?} draw
             * @return {?}
             */
            function (draw) { return _this.draw = draw; }),
            colorMatch: { domain: domain, range: range },
            selected: this.selected,
            sizeRange: [.5, 500],
            fontRendering: fontRendering,
            height: 500,
            width: 500,
            transition: transition,
            shuffle: shuffle,
        }
        /*
          Two data streams are ouputted.
          The default stream is for the normal visualization,
          "smallView" is used for a compressed view of the same data.
        */
        ;
        /*
          Two data streams are ouputted.
          The default stream is for the normal visualization,
          "smallView" is used for a compressed view of the same data.
        */
        return tslib_1.__assign({}, commonParams, { data: this.smartSlice(data), smallView: tslib_1.__assign({}, commonParams, { data: this.smartSlice(data, smallChartSize) }) });
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
    AwBubbleChartDS.prototype.smartSlice;
    /** @type {?} */
    AwBubbleChartDS.prototype.handleBubbleClick;
    /** @type {?} */
    AwBubbleChartDS.prototype.tippyMaker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUEwQixNQUFNLFVBQVUsQ0FBQztBQUVsRDtJQUFxQywyQ0FBVTtJQUEvQztRQUFBLHFFQWdLQztRQS9KUSxlQUFTLEdBQVEsRUFBRSxDQUFBLENBQU0sK0JBQStCOztRQUN4RCxVQUFJLEdBQVEsSUFBSSxDQUFDLENBQVEscURBQXFEOztRQUM5RSxjQUFRLEdBQWEsRUFBRSxDQUFBLENBQUUsMkJBQTJCOztRQUNwRCxhQUFPLEdBQVUsRUFBRSxDQUFBLENBQU0sMkRBQTJEOztRQUNwRixnQkFBVSxHQUFVLEVBQUUsQ0FBQTtRQUN0QixlQUFTLEdBQVUsRUFBRSxDQUFBLENBQUksMEJBQTBCO1FBeUMxRCxpQkFBVzs7OztRQUFHLFVBQUEsR0FBRztZQUNmOzs7O2NBSUU7WUFDRixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFBO2FBQ3JCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2FBQ3JCO1lBQ0QsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxnQ0FBZ0M7Z0JBQzdELEdBQUcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFD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Ny1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSwgeyBjcmVhdGVTaW5nbGV0b24gfSBmcm9tICd0aXBweS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGNoYXJ0RGF0YTogYW55ID0gW10gICAgICAvLyBkYXRhIHJlbmRlcmVkIGludG8gdGhlIGdyYXBoXG4gIHB1YmxpYyBkcmF3OiBhbnkgPSBudWxsOyAgICAgICAgLy8gZXhwb3NlZCBjb21wb25lbnQgZHJhdyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHZpZXdcbiAgcHVibGljIHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdICAvLyBsaXN0IG9mIHNlbGVjdGVkIGJ1YmJsZXNcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW10gICAgICAvLyBsaXN0IG9mIGFjdGl2ZSBmaWx0ZXJzIHRvIHNob3cgb25seSBzb21lIFR5cGVPZkVudGl0eShzKVxuICBwdWJsaWMgY2xvc2VkRXllczogYW55W10gPSBbXVxuICBwdWJsaWMgdGlwcHlMaXN0OiBhbnlbXSA9IFtdICAgIC8vIGxpc3Qgb2YgdGlwcHkgaW5zdGFuY2VzXG4gIHB1YmxpYyBmb2N1c2VkQnViYmxlOiBzdHJpbmcgICAgLy8gaWQgb2YgdGhlIGZvY3VzZWQgYnViYmxlXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHNtYWxsQ2hhcnRTaXplIH0gPSB0aGlzLm9wdGlvbnNcbiAgICBjb25zdCB7IGZvbnRSZW5kZXJpbmcsIHRyYW5zaXRpb24sIHNodWZmbGUgfSA9IGNvbmZpZy5nZXQoJ2J1YmJsZS1jaGFydCcpXG4gICAgY29uc3QgZG9tYWluID0gW10sIHJhbmdlID0gW11cbiAgICBjb25zdCBjb2xvckNvbmZpZyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylcblxuICAgIE9iamVjdC5rZXlzKGNvbG9yQ29uZmlnKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgZG9tYWluLnB1c2goay5yZXBsYWNlKC8tL2csICcgJykpXG4gICAgICByYW5nZS5wdXNoKCgoY29sb3JDb25maWdba10gfHwge30pLmNvbG9yIHx8IHt9KS5oZXgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbW1vblBhcmFtcyA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgc2V0RHJhdzogZHJhdyA9PiB0aGlzLmRyYXcgPSBkcmF3LFxuICAgICAgY29sb3JNYXRjaDogeyBkb21haW4sIHJhbmdlIH0sXG4gICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgIHNpemVSYW5nZTogWy41LCA1MDBdLFxuICAgICAgZm9udFJlbmRlcmluZyxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBzaHVmZmxlLFxuICAgIH1cbiAgICAvKlxuICAgICAgVHdvIGRhdGEgc3RyZWFtcyBhcmUgb3VwdXR0ZWQuXG4gICAgICBUaGUgZGVmYXVsdCBzdHJlYW0gaXMgZm9yIHRoZSBub3JtYWwgdmlzdWFsaXphdGlvbixcbiAgICAgIFwic21hbGxWaWV3XCIgaXMgdXNlZCBmb3IgYSBjb21wcmVzc2VkIHZpZXcgb2YgdGhlIHNhbWUgZGF0YS5cbiAgICAqL1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jb21tb25QYXJhbXMsXG4gICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSksXG4gICAgICBzbWFsbFZpZXc6IHtcbiAgICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSwgc21hbGxDaGFydFNpemUpLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDaGFydCA9IHJlcyA9PiB7XG4gICAgLypcbiAgICAgIFJlZHJhd3MgdGhlIGdyYXBoIHdpdGggdGhlIGluY29taW5nIGRhdGEuXG4gICAgICBcInJlc1wiIHNob3VsZCBiZSBBcG9sbG8ncyBcInJlc3BvbnNlLmVudGl0aWVzRGF0YVwiLlxuICAgICAgV2hlbiByZXMgaXMgcGFzc2VkIGFzIG51bGwsIHRoZSBjaGFydCBpcyByZW5kZXJlZCB3aXRoIHRoZSBwcmV2aW91cyBkYXRhLlxuICAgICovXG4gICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgcmVzID0gdGhpcy5jaGFydERhdGFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFydERhdGEgPSByZXNcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIHJlc3BvbnNlXG4gICAgICByZXMgPSB0aGlzLmNoYXJ0RGF0YS5maWx0ZXIoZWwgPT4gIXRoaXMuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpXG4gICAgfVxuICAgIGlmICghdGhpcy5kcmF3KSB7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLnNtYXJ0U2xpY2UocmVzKSkgLy8gY29tcG9uZW50IHNlbGYtdXBkYXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMub3V0cHV0LmRhdGEgPSB0aGlzLnNtYXJ0U2xpY2UocmVzKTtcbiAgICAgIHRoaXMub3V0cHV0LnNtYWxsVmlldy5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlcywgdGhpcy5vcHRpb25zLnNtYWxsQ2hhcnRTaXplKTtcbiAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuICB9XG5cbiAgc21hcnRTbGljZSA9IChkLCBsZW5ndGg/KSA9PiB7XG4gICAgY29uc3QgbCA9IGxlbmd0aCA/IGxlbmd0aCA6IHRoaXMub3B0aW9ucy5saW1pdFxuICAgIGlmIChsICYmIGwgPCBkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGQuc2xpY2UoMCwgbClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCdWJibGVDbGljayA9IHBheWxvYWQgPT4ge1xuICAgIC8qXG4gICAgICBUb2dnbGVzIHRoZSBzZWxlY3Rpb24gb2YgdGhlIGNsaWNrZWQgYnViYmxlLlxuICAgICovXG4gICAgY29uc3QgaWQgPSBwYXlsb2FkXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnNwbGljZSh0aGlzLnNlbGVjdGVkLmluZGV4T2YoaWQpLCAxKSAvLyByZW1vdmUgc2VsZWN0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChpZCkgLy8gYWRkIHNlbGVjdGlvblxuICAgIH1cbiAgfVxuXG4gIHRpcHB5TWFrZXIgPSBidWJibGVzID0+IHtcbiAgICAvLyBmbHVzaCBleGlzdGluZyB0b29sdGlwc1xuICAgIHRoaXMudGlwcHlMaXN0LmZvckVhY2godCA9PiB7IGlmICh0KSB7IHQuZGVzdHJveSgpIH0gfSlcbiAgICB0aGlzLnRpcHB5TGlzdCA9IFtdXG5cbiAgICBjb25zdCBidWlsZFRvb2x0aXAgPSBidWJibGUgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSA8RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidWJibGUtY2hhcnRfX3RpcHB5LXRlbXBsYXRlJylbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICBsZXQgZ290b0J1dHRvbiA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXctYnViYmxlLXBvcHVwLW1lbnVfX3RleHQnKVswXVxuICAgICAgZ290b0J1dHRvbi5pbm5lckhUTUwgPVxuICAgICAgICBgw4ggY29sbGVnYXRvIGEgJHtidWJibGUuY291bnR9IGVudGl0w6BgXG4gICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X190aXRsZScpWzBdLmlubmVySFRNTCA9XG4gICAgICAgIGAke2J1YmJsZS5lbnRpdHkubGFiZWx9YFxuICAgICAgbGV0IHNlbGVjdEJ1dHRvbiA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXctYnViYmxlLXBvcHVwLW1lbnVfX2xpbmsnKVsxXVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW1wbGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdEJ1dHRvbikgc2VsZWN0QnV0dG9uLnJlbW92ZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdG9nZ2xlQnViYmxlVGV4dCA9IHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoYnViYmxlLmVudGl0eS5pZCkgPyBgRGVzZWxlemlvbmFgIDogYFNlbGV6aW9uYWBcbiAgICAgICAgc2VsZWN0QnV0dG9uLmlubmVySFRNTCA9IHRvZ2dsZUJ1YmJsZVRleHRcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgICByZXR1cm4gZWxlbWVudC5pbm5lckhUTUxcbiAgICB9XG4gICAgY29uc3QgZm9jdXNCdWJibGUgPSBpZCA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWRCdWJibGUgPSBpZFxuICAgIH1cblxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSBkYXRhIGJlZm9yZSBhZGRpbmcgdG9vbHRpcHNcbiAgICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihlbCA9PiAhdGhpcy5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSlcbiAgICB9XG4gICAgLy8gbWFrZSBuZXcgdG9vbHRpcHNcbiAgICBidWJibGVzLmZvckVhY2goYiA9PiB7XG4gICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiLmVudGl0eS5pZClcbiAgICAgIGxldCBncm91cCA9IGVsID8gZWwucGFyZW50RWxlbWVudCA6IGZhbHNlIC8vIHNlbGVjdHMgYSA8Zz4gZWxlbWVudFxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIHRoaXMudGlwcHlMaXN0LnB1c2goIC8vIGFkZCB0aGlzIHRpcHB5IHRvIHRoZSBhcnJheSBvZiBpbnN0YW5jZXNcbiAgICAgICAgICB0aXBweShncm91cCwge1xuICAgICAgICAgICAgY29udGVudDogYnVpbGRUb29sdGlwKGIpLFxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgICAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgIGRlbGF5OiBbMTUwLCAzMF0sXG4gICAgICAgICAgICB1cGRhdGVEdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgb25Nb3VudCgpIHtcbiAgICAgICAgICAgICAgZm9jdXNCdWJibGUoYi5lbnRpdHkuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlU2luZ2xldG9uKHRoaXMudGlwcHlMaXN0LCB7XG4gICAgLy8gICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgLy8gICBhcnJvdzogdHJ1ZSxcbiAgICAvLyAgIGZsaXA6IGZhbHNlLFxuICAgIC8vICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgLy8gICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIC8vICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAvLyAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXG4gICAgLy8gb25UcmlnZ2VyKHJlZikge1xuICAgIC8vICAgY29uc29sZS5sb2coe3JlZn0pXG4gICAgLy8gICBjb25zb2xlLmxvZygnZmlyZWQnKVxuICAgIC8vIH1cbiAgICAvLyB9KVxuICB9XG59Il19