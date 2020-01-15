/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/bubble-chart.ds.ts
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
                var group = document.getElementById("g_" + b.entity.id) // select 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBMEIsTUFBTSxVQUFVLENBQUM7QUFFbEQ7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUE4SkM7UUE3SlEsZUFBUyxHQUFRLEVBQUUsQ0FBQSxDQUFNLCtCQUErQjs7UUFDeEQsVUFBSSxHQUFRLElBQUksQ0FBQyxDQUFRLHFEQUFxRDs7UUFDOUUsY0FBUSxHQUFhLEVBQUUsQ0FBQSxDQUFFLDJCQUEyQjs7UUFDcEQsYUFBTyxHQUFVLEVBQUUsQ0FBQSxDQUFNLDJEQUEyRDs7UUFDcEYsZ0JBQVUsR0FBVSxFQUFFLENBQUE7UUFDdEIsZUFBUyxHQUFVLEVBQUUsQ0FBQSxDQUFJLDBCQUEwQjtRQXlDMUQsaUJBQVc7Ozs7UUFBRyxVQUFBLEdBQUc7WUFDZjs7OztjQUlFO1lBQ0YsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNoQixHQUFHLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQTthQUNyQjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTthQUNyQjtZQUNELElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsZ0NBQWdDO2dCQUM3RCxHQUFHLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O2dCQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FB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QUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEQsQ0FBQyxFQUFDLENBQUE7O1lBRUksWUFBWSxHQUFHO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsT0FBTzs7OztZQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUE7WUFDakMsVUFBVSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUU7WUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7WUFDcEIsYUFBYSxlQUFBO1lBQ2IsTUFBTSxFQUFFLEdBQUc7WUFDWCxLQUFLLEVBQUUsR0FBRztZQUNWLFVBQVUsWUFBQTtZQUNWLE9BQU8sU0FBQTtTQUNSO1FBQ0Q7Ozs7VUFJRTs7UUFKRjs7OztVQUlFO1FBQ0YsNEJBQ0ssWUFBWSxJQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUMzQixTQUFTLHVCQUNKLFlBQVksSUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLE9BRTlDO0lBQ0gsQ0FBQztJQWlISCxzQkFBQztBQUFELENBQUMsQUE5SkQsQ0FBcUMsVUFBVSxHQThKOUM7Ozs7SUE3SkMsb0NBQTBCOztJQUMxQiwrQkFBd0I7O0lBQ3hCLG1DQUE4Qjs7SUFDOUIsa0NBQTBCOztJQUMxQixxQ0FBNkI7O0lBQzdCLG9DQUE0Qjs7SUFDNUIsd0NBQTRCOztJQXdDNUIsc0NBc0JDOztJQUVELHFDQU9DOztJQUVELDRDQVVDOztJQUVELHFDQWlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHksIHsgY3JlYXRlU2luZ2xldG9uIH0gZnJvbSAndGlwcHkuanMnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjaGFydERhdGE6IGFueSA9IFtdICAgICAgLy8gZGF0YSByZW5kZXJlZCBpbnRvIHRoZSBncmFwaFxuICBwdWJsaWMgZHJhdzogYW55ID0gbnVsbDsgICAgICAgIC8vIGV4cG9zZWQgY29tcG9uZW50IGRyYXcgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB2aWV3XG4gIHB1YmxpYyBzZWxlY3RlZDogc3RyaW5nW10gPSBbXSAgLy8gbGlzdCBvZiBzZWxlY3RlZCBidWJibGVzXG4gIHB1YmxpYyBmaWx0ZXJzOiBhbnlbXSA9IFtdICAgICAgLy8gbGlzdCBvZiBhY3RpdmUgZmlsdGVycyB0byBzaG93IG9ubHkgc29tZSBUeXBlT2ZFbnRpdHkocylcbiAgcHVibGljIGNsb3NlZEV5ZXM6IGFueVtdID0gW11cbiAgcHVibGljIHRpcHB5TGlzdDogYW55W10gPSBbXSAgICAvLyBsaXN0IG9mIHRpcHB5IGluc3RhbmNlc1xuICBwdWJsaWMgZm9jdXNlZEJ1YmJsZTogc3RyaW5nICAgIC8vIGlkIG9mIHRoZSBmb2N1c2VkIGJ1YmJsZVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBzbWFsbENoYXJ0U2l6ZSB9ID0gdGhpcy5vcHRpb25zXG4gICAgY29uc3QgeyBmb250UmVuZGVyaW5nLCB0cmFuc2l0aW9uLCBzaHVmZmxlIH0gPSBjb25maWcuZ2V0KCdidWJibGUtY2hhcnQnKVxuICAgIGNvbnN0IGRvbWFpbiA9IFtdLCByYW5nZSA9IFtdXG4gICAgY29uc3QgY29sb3JDb25maWcgPSBjb25maWcuZ2V0KCdjb25maWcta2V5cycpXG5cbiAgICBPYmplY3Qua2V5cyhjb2xvckNvbmZpZykuZm9yRWFjaChrID0+IHtcbiAgICAgIGRvbWFpbi5wdXNoKGsucmVwbGFjZSgvLS9nLCAnICcpKVxuICAgICAgcmFuZ2UucHVzaCgoKGNvbG9yQ29uZmlnW2tdIHx8IHt9KS5jb2xvciB8fCB7fSkuaGV4KVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21tb25QYXJhbXMgPSB7XG4gICAgICBjb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIHNldERyYXc6IGRyYXcgPT4gdGhpcy5kcmF3ID0gZHJhdyxcbiAgICAgIGNvbG9yTWF0Y2g6IHsgZG9tYWluLCByYW5nZSB9LFxuICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICBzaXplUmFuZ2U6IFsuNSwgNTAwXSxcbiAgICAgIGZvbnRSZW5kZXJpbmcsXG4gICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgc2h1ZmZsZSxcbiAgICB9XG4gICAgLypcbiAgICAgIFR3byBkYXRhIHN0cmVhbXMgYXJlIG91cHV0dGVkLlxuICAgICAgVGhlIGRlZmF1bHQgc3RyZWFtIGlzIGZvciB0aGUgbm9ybWFsIHZpc3VhbGl6YXRpb24sXG4gICAgICBcInNtYWxsVmlld1wiIGlzIHVzZWQgZm9yIGEgY29tcHJlc3NlZCB2aWV3IG9mIHRoZSBzYW1lIGRhdGEuXG4gICAgKi9cbiAgICByZXR1cm4ge1xuICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgZGF0YTogdGhpcy5zbWFydFNsaWNlKGRhdGEpLFxuICAgICAgc21hbGxWaWV3OiB7XG4gICAgICAgIC4uLmNvbW1vblBhcmFtcyxcbiAgICAgICAgZGF0YTogdGhpcy5zbWFydFNsaWNlKGRhdGEsIHNtYWxsQ2hhcnRTaXplKSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ2hhcnQgPSByZXMgPT4ge1xuICAgIC8qXG4gICAgICBSZWRyYXdzIHRoZSBncmFwaCB3aXRoIHRoZSBpbmNvbWluZyBkYXRhLlxuICAgICAgXCJyZXNcIiBzaG91bGQgYmUgQXBvbGxvJ3MgXCJyZXNwb25zZS5lbnRpdGllc0RhdGFcIi5cbiAgICAgIFdoZW4gcmVzIGlzIHBhc3NlZCBhcyBudWxsLCB0aGUgY2hhcnQgaXMgcmVuZGVyZWQgd2l0aCB0aGUgcHJldmlvdXMgZGF0YS5cbiAgICAqL1xuICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgIHJlcyA9IHRoaXMuY2hhcnREYXRhXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gcmVzXG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSByZXNwb25zZVxuICAgICAgcmVzID0gdGhpcy5jaGFydERhdGEuZmlsdGVyKGVsID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZHJhdykge1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5zbWFydFNsaWNlKHJlcykpIC8vIGNvbXBvbmVudCBzZWxmLXVwZGF0ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dHB1dC5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLm91dHB1dC5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlcyk7XG4gICAgICB0aGlzLm91dHB1dC5zbWFsbFZpZXcuZGF0YSA9IHRoaXMuc21hcnRTbGljZShyZXMsIHRoaXMub3B0aW9ucy5zbWFsbENoYXJ0U2l6ZSk7XG4gICAgICB0aGlzLmRyYXcoKVxuICAgIH1cbiAgfVxuXG4gIHNtYXJ0U2xpY2UgPSAoZCwgbGVuZ3RoPykgPT4ge1xuICAgIGNvbnN0IGwgPSBsZW5ndGggPyBsZW5ndGggOiB0aGlzLm9wdGlvbnMubGltaXRcbiAgICBpZiAobCAmJiBsIDwgZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkLnNsaWNlKDAsIGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQnViYmxlQ2xpY2sgPSBwYXlsb2FkID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlcyB0aGUgc2VsZWN0aW9uIG9mIHRoZSBjbGlja2VkIGJ1YmJsZS5cbiAgICAqL1xuICAgIGNvbnN0IGlkID0gcGF5bG9hZFxuICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGlkKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UodGhpcy5zZWxlY3RlZC5pbmRleE9mKGlkKSwgMSkgLy8gcmVtb3ZlIHNlbGVjdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpIC8vIGFkZCBzZWxlY3Rpb25cbiAgICB9XG4gIH1cblxuICB0aXBweU1ha2VyID0gYnViYmxlcyA9PiB7XG4gICAgLy8gZmx1c2ggZXhpc3RpbmcgdG9vbHRpcHNcbiAgICB0aGlzLnRpcHB5TGlzdC5mb3JFYWNoKHQgPT4geyBpZiAodCkgeyB0LmRlc3Ryb3koKSB9IH0pXG4gICAgdGhpcy50aXBweUxpc3QgPSBbXVxuXG4gICAgY29uc3QgYnVpbGRUb29sdGlwID0gYnViYmxlID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gPEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnViYmxlLWNoYXJ0X190aXBweS10ZW1wbGF0ZScpWzBdLmNsb25lTm9kZSh0cnVlKVxuICAgICAgbGV0IGdvdG9CdXR0b24gPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X190ZXh0JylbMF1cbiAgICAgIGdvdG9CdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICAgYMOIIGNvbGxlZ2F0byBhICR7YnViYmxlLmNvdW50fSBlbnRpdMOgYFxuICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fdGl0bGUnKVswXS5pbm5lckhUTUwgPVxuICAgICAgICBgJHtidWJibGUuZW50aXR5LmxhYmVsfWBcbiAgICAgIGxldCBzZWxlY3RCdXR0b24gPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X19saW5rJylbMV1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2ltcGxlKSB7XG4gICAgICAgIGlmIChzZWxlY3RCdXR0b24pIHNlbGVjdEJ1dHRvbi5yZW1vdmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRvZ2dsZUJ1YmJsZVRleHQgPSB0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGJ1YmJsZS5lbnRpdHkuaWQpID8gYERlc2VsZXppb25hYCA6IGBTZWxlemlvbmFgXG4gICAgICAgIHNlbGVjdEJ1dHRvbi5pbm5lckhUTUwgPSB0b2dnbGVCdWJibGVUZXh0XG4gICAgICB9XG4gICAgICByZXR1cm4gZWxlbWVudC5pbm5lckhUTUxcbiAgICB9XG4gICAgY29uc3QgZm9jdXNCdWJibGUgPSBpZCA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWRCdWJibGUgPSBpZFxuICAgIH1cblxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSBkYXRhIGJlZm9yZSBhZGRpbmcgdG9vbHRpcHNcbiAgICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihlbCA9PiAhdGhpcy5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSlcbiAgICB9XG4gICAgLy8gbWFrZSBuZXcgdG9vbHRpcHNcbiAgICBidWJibGVzLmZvckVhY2goYiA9PiB7XG4gICAgICBsZXQgZ3JvdXA6IEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ18ke2IuZW50aXR5LmlkfWApIC8vIHNlbGVjdCBcbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICB0aGlzLnRpcHB5TGlzdC5wdXNoKCAvLyBhZGQgdGhpcyB0aXBweSB0byB0aGUgYXJyYXkgb2YgaW5zdGFuY2VzXG4gICAgICAgICAgdGlwcHkoZ3JvdXAsIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGJ1aWxkVG9vbHRpcChiKSxcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHN1cHByZXNzIGludGVyYWN0aXZlIHdhcm5pbmdcbiAgICAgICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgICBkZWxheTogWzE1MCwgMzBdLFxuICAgICAgICAgICAgdXBkYXRlRHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgIG9uTW91bnQoKSB7XG4gICAgICAgICAgICAgIGZvY3VzQnViYmxlKGIuZW50aXR5LmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGNyZWF0ZVNpbmdsZXRvbih0aGlzLnRpcHB5TGlzdCwge1xuICAgIC8vICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgLy8gICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgIC8vICAgYXJyb3c6IHRydWUsXG4gICAgLy8gICBmbGlwOiBmYWxzZSxcbiAgICAvLyAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgIC8vICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAvLyAgIGRlbGF5OiBbMTUwLCAzMF0sXG4gICAgLy8gICB1cGRhdGVEdXJhdGlvbjogNDAwLFxuICAgIC8vIG9uVHJpZ2dlcihyZWYpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHtyZWZ9KVxuICAgIC8vICAgY29uc29sZS5sb2coJ2ZpcmVkJylcbiAgICAvLyB9XG4gICAgLy8gfSlcbiAgfVxufSJdfQ==