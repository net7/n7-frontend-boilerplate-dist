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
                // return d.splice(d.length - l, l)
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
    // public bubbleBasket: any[]
    // id of the focused bubble
    // public bubbleBasket: any[]
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwBubbleChartDS.prototype.transform = 
    // id of the focused bubble
    // public bubbleBasket: any[]
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
        /** @type {?} */
        var commonParams = {
            fontRendering: fontRendering,
            containerId: 'bubbleChartContainer',
            width: 500,
            height: 500,
            shuffle: shuffle,
            transition: transition,
            sizeRange: [.5, 500],
            selected: this.selected,
            colorMatch: { domain: domain, range: range },
        };
        return tslib_1.__assign({}, commonParams, { data: this.smartSlice(data), smallView: tslib_1.__assign({}, commonParams, { data: this.smartSlice(data, (this.options.smallChartSize || null)) }), setDraw: (/**
             * @param {?} draw
             * @return {?}
             */
            function (draw) { return _this.draw = draw; }) });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUEwQixNQUFNLFVBQVUsQ0FBQztBQUVsRDtJQUFxQywyQ0FBVTtJQUEvQztRQUFBLHFFQWlLQztRQWhLUSxlQUFTLEdBQVEsRUFBRSxDQUFBLENBQU0sK0JBQStCOztRQUN4RCxVQUFJLEdBQVEsSUFBSSxDQUFDLENBQVEscURBQXFEOztRQUM5RSxjQUFRLEdBQWEsRUFBRSxDQUFBLENBQUUsMkJBQTJCOztRQUNwRCxhQUFPLEdBQVUsRUFBRSxDQUFBLENBQU0sMkRBQTJEOztRQUNwRixnQkFBVSxHQUFVLEVBQUUsQ0FBQTtRQUN0QixlQUFTLEdBQVUsRUFBRSxDQUFBLENBQUksMEJBQTBCO1FBMEMxRCxpQkFBVzs7OztRQUFHLFVBQUEsR0FBRztZQUNmOzs7O2NBSUU7WUFDRixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFBO2FBQ3JCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2FBQ3JCO1lBQ0QsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxnQ0FBZ0M7Z0JBQzdELEdBQUcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFD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QyxDQUFBO1FBQ3RELENBQUMsRUFBQyxDQUFBOztZQUVJLFlBQVksR0FBRztZQUNuQixhQUFhLGVBQUE7WUFDYixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxPQUFPLFNBQUE7WUFDUCxVQUFVLFlBQUE7WUFDVixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDO1lBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRTtTQUM5QjtRQUNELDRCQUNLLFlBQVksSUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFNM0IsU0FBUyx1QkFDSixZQUFZLElBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLENBQUMsS0FFcEUsT0FBTzs7OztZQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLEtBQ2xDO0lBQ0gsQ0FBQztJQW1ISCxzQkFBQztBQUFELENBQUMsQUFqS0QsQ0FBcUMsVUFBVSxHQWlLOUM7Ozs7SUFoS0Msb0NBQTBCOztJQUMxQiwrQkFBd0I7O0lBQ3hCLG1DQUE4Qjs7SUFDOUIsa0NBQTBCOztJQUMxQixxQ0FBNkI7O0lBQzdCLG9DQUE0Qjs7SUFDNUIsd0NBQTRCOztJQXlDNUIsc0NBcUJDOztJQUVELHFDQVFDOztJQUVELDRDQVVDOztJQUVELHFDQW1FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHksIHsgY3JlYXRlU2luZ2xldG9uIH0gZnJvbSAndGlwcHkuanMnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjaGFydERhdGE6IGFueSA9IFtdICAgICAgLy8gZGF0YSByZW5kZXJlZCBpbnRvIHRoZSBncmFwaFxuICBwdWJsaWMgZHJhdzogYW55ID0gbnVsbDsgICAgICAgIC8vIGV4cG9zZWQgY29tcG9uZW50IGRyYXcgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB2aWV3XG4gIHB1YmxpYyBzZWxlY3RlZDogc3RyaW5nW10gPSBbXSAgLy8gbGlzdCBvZiBzZWxlY3RlZCBidWJibGVzXG4gIHB1YmxpYyBmaWx0ZXJzOiBhbnlbXSA9IFtdICAgICAgLy8gbGlzdCBvZiBhY3RpdmUgZmlsdGVycyB0byBzaG93IG9ubHkgc29tZSBUeXBlT2ZFbnRpdHkocylcbiAgcHVibGljIGNsb3NlZEV5ZXM6IGFueVtdID0gW11cbiAgcHVibGljIHRpcHB5TGlzdDogYW55W10gPSBbXSAgICAvLyBsaXN0IG9mIHRpcHB5IGluc3RhbmNlc1xuICBwdWJsaWMgZm9jdXNlZEJ1YmJsZTogc3RyaW5nICAgIC8vIGlkIG9mIHRoZSBmb2N1c2VkIGJ1YmJsZVxuICAvLyBwdWJsaWMgYnViYmxlQmFza2V0OiBhbnlbXVxuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLm9wdGlvbnNcbiAgICBjb25zdCB7IGZvbnRSZW5kZXJpbmcsIHRyYW5zaXRpb24sIHNodWZmbGUgfSA9IGNvbmZpZy5nZXQoJ2J1YmJsZS1jaGFydCcpXG4gICAgY29uc3QgZG9tYWluID0gW10sIHJhbmdlID0gW11cbiAgICBjb25zdCBjb2xvckNvbmZpZyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJylcblxuICAgIE9iamVjdC5rZXlzKGNvbG9yQ29uZmlnKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgZG9tYWluLnB1c2goay5yZXBsYWNlKC8tL2csICcgJykpXG4gICAgICByYW5nZS5wdXNoKCgoY29sb3JDb25maWdba10gfHwge30pLmNvbG9yIHx8IHt9KS5oZXgpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbW1vblBhcmFtcyA9IHtcbiAgICAgIGZvbnRSZW5kZXJpbmcsXG4gICAgICBjb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIHNodWZmbGUsXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgc2l6ZVJhbmdlOiBbLjUsIDUwMF0sXG4gICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgIGNvbG9yTWF0Y2g6IHsgZG9tYWluLCByYW5nZSB9LFxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgZGF0YTogdGhpcy5zbWFydFNsaWNlKGRhdGEpLFxuICAgICAgLypcbiAgICAgICAgVGhpcyBjdXN0b20gb3V0cHV0IHN0cmVhbSBpcyB1c2VkIHdoZW5cbiAgICAgICAgeW91IG5lZWQgdG8gZGlzcGxheSBhIHNtYWxsZXIsIHNpbXBsZXIgdmVyc2lvblxuICAgICAgICBvZiB0aGUgc2FtZSB2aXN1YWxpemF0aW9uXG4gICAgICAqL1xuICAgICAgc21hbGxWaWV3OiB7XG4gICAgICAgIC4uLmNvbW1vblBhcmFtcyxcbiAgICAgICAgZGF0YTogdGhpcy5zbWFydFNsaWNlKGRhdGEsICh0aGlzLm9wdGlvbnMuc21hbGxDaGFydFNpemUgfHwgbnVsbCkpLFxuICAgICAgfSxcbiAgICAgIHNldERyYXc6IGRyYXcgPT4gdGhpcy5kcmF3ID0gZHJhd1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0ID0gcmVzID0+IHtcbiAgICAvKlxuICAgICAgUmVkcmF3cyB0aGUgZ3JhcGggd2l0aCB0aGUgaW5jb21pbmcgZGF0YS5cbiAgICAgIFwicmVzXCIgc2hvdWxkIGJlIEFwb2xsbydzIFwicmVzcG9uc2UuZW50aXRpZXNEYXRhXCIuXG4gICAgICBXaGVuIHJlcyBpcyBwYXNzZWQgYXMgbnVsbCwgdGhlIGNoYXJ0IGlzIHJlbmRlcmVkIHdpdGggdGhlIHByZXZpb3VzIGRhdGEuXG4gICAgKi9cbiAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICByZXMgPSB0aGlzLmNoYXJ0RGF0YVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXJ0RGF0YSA9IHJlc1xuICAgIH1cbiAgICBpZiAodGhpcy5maWx0ZXJzLmxlbmd0aCA+IDApIHsgLy8gYXBwbHkgZmlsdGVycyB0byB0aGUgcmVzcG9uc2VcbiAgICAgIHJlcyA9IHRoaXMuY2hhcnREYXRhLmZpbHRlcihlbCA9PiAhdGhpcy5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRyYXcpIHtcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMuc21hcnRTbGljZShyZXMpKSAvLyBjb21wb25lbnQgc2VsZi11cGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgdGhpcy5vdXRwdXQuZGF0YSA9IHRoaXMuc21hcnRTbGljZShyZXMpO1xuICAgICAgdGhpcy5kcmF3KClcbiAgICB9XG4gIH1cblxuICBzbWFydFNsaWNlID0gKGQsIGxlbmd0aD8pID0+IHtcbiAgICBjb25zdCBsID0gbGVuZ3RoID8gbGVuZ3RoIDogdGhpcy5vcHRpb25zLmxpbWl0XG4gICAgaWYgKGwgJiYgbCA8IGQubGVuZ3RoKSB7XG4gICAgICAvLyByZXR1cm4gZC5zcGxpY2UoZC5sZW5ndGggLSBsLCBsKVxuICAgICAgcmV0dXJuIGQuc2xpY2UoMCwgbClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCdWJibGVDbGljayA9IHBheWxvYWQgPT4ge1xuICAgIC8qXG4gICAgICBUb2dnbGVzIHRoZSBzZWxlY3Rpb24gb2YgdGhlIGNsaWNrZWQgYnViYmxlLlxuICAgICovXG4gICAgY29uc3QgaWQgPSBwYXlsb2FkXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnNwbGljZSh0aGlzLnNlbGVjdGVkLmluZGV4T2YoaWQpLCAxKSAvLyByZW1vdmUgc2VsZWN0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChpZCkgLy8gYWRkIHNlbGVjdGlvblxuICAgIH1cbiAgfVxuXG4gIHRpcHB5TWFrZXIgPSBidWJibGVzID0+IHtcbiAgICAvLyBmbHVzaCBleGlzdGluZyB0b29sdGlwc1xuICAgIHRoaXMudGlwcHlMaXN0LmZvckVhY2godCA9PiB7IGlmICh0KSB7IHQuZGVzdHJveSgpIH0gfSlcbiAgICB0aGlzLnRpcHB5TGlzdCA9IFtdXG5cbiAgICBjb25zdCBidWlsZFRvb2x0aXAgPSBidWJibGUgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSA8RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidWJibGUtY2hhcnRfX3RpcHB5LXRlbXBsYXRlJylbMF0uY2xvbmVOb2RlKHRydWUpXG4gICAgICBsZXQgZ290b0J1dHRvbiA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXctYnViYmxlLXBvcHVwLW1lbnVfX3RleHQnKVswXVxuICAgICAgZ290b0J1dHRvbi5pbm5lckhUTUwgPVxuICAgICAgICBgw4ggY29sbGVnYXRvIGEgJHtidWJibGUuY291bnR9IGVudGl0w6BgXG4gICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X190aXRsZScpWzBdLmlubmVySFRNTCA9XG4gICAgICAgIGAke2J1YmJsZS5lbnRpdHkubGFiZWx9YFxuICAgICAgbGV0IHNlbGVjdEJ1dHRvbiA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXctYnViYmxlLXBvcHVwLW1lbnVfX2xpbmsnKVsxXVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW1wbGUpIHtcbiAgICAgICAgaWYgKHNlbGVjdEJ1dHRvbikgc2VsZWN0QnV0dG9uLnJlbW92ZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdG9nZ2xlQnViYmxlVGV4dCA9IHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoYnViYmxlLmVudGl0eS5pZCkgPyBgRGVzZWxlemlvbmFgIDogYFNlbGV6aW9uYWBcbiAgICAgICAgc2VsZWN0QnV0dG9uLmlubmVySFRNTCA9IHRvZ2dsZUJ1YmJsZVRleHRcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgICByZXR1cm4gZWxlbWVudC5pbm5lckhUTUxcbiAgICB9XG4gICAgY29uc3QgZm9jdXNCdWJibGUgPSBpZCA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWRCdWJibGUgPSBpZFxuICAgIH1cblxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSBkYXRhIGJlZm9yZSBhZGRpbmcgdG9vbHRpcHNcbiAgICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihlbCA9PiAhdGhpcy5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSlcbiAgICB9XG4gICAgLy8gbWFrZSBuZXcgdG9vbHRpcHNcbiAgICBidWJibGVzLmZvckVhY2goYiA9PiB7XG4gICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiLmVudGl0eS5pZClcbiAgICAgIGxldCBncm91cCA9IGVsID8gZWwucGFyZW50RWxlbWVudCA6IGZhbHNlIC8vIHNlbGVjdHMgYSA8Zz4gZWxlbWVudFxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIHRoaXMudGlwcHlMaXN0LnB1c2goIC8vIGFkZCB0aGlzIHRpcHB5IHRvIHRoZSBhcnJheSBvZiBpbnN0YW5jZXNcbiAgICAgICAgICB0aXBweShncm91cCwge1xuICAgICAgICAgICAgY29udGVudDogYnVpbGRUb29sdGlwKGIpLFxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgICAgICAgICAgYXJyb3c6IHRydWUsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICAgIGRlbGF5OiBbMTUwLCAzMF0sXG4gICAgICAgICAgICB1cGRhdGVEdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgb25Nb3VudCgpIHtcbiAgICAgICAgICAgICAgZm9jdXNCdWJibGUoYi5lbnRpdHkuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlU2luZ2xldG9uKHRoaXMudGlwcHlMaXN0LCB7XG4gICAgLy8gICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZFRvOiBkb2N1bWVudC5ib2R5LCAvLyBzdXBwcmVzcyBpbnRlcmFjdGl2ZSB3YXJuaW5nXG4gICAgLy8gICBhcnJvdzogdHJ1ZSxcbiAgICAvLyAgIGZsaXA6IGZhbHNlLFxuICAgIC8vICAgdGhlbWU6ICdsaWdodC1ib3JkZXIgbm8tcGFkZGluZycsXG4gICAgLy8gICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgIC8vICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAvLyAgIHVwZGF0ZUR1cmF0aW9uOiA0MDAsXG4gICAgLy8gb25UcmlnZ2VyKHJlZikge1xuICAgIC8vICAgY29uc29sZS5sb2coe3JlZn0pXG4gICAgLy8gICBjb25zb2xlLmxvZygnZmlyZWQnKVxuICAgIC8vIH1cbiAgICAvLyB9KVxuICB9XG59Il19