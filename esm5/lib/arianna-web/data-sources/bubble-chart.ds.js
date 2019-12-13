/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
// import tippy from 'tippy.js/dist/tippy-bundle.esm';
var 
// import tippy from 'tippy.js/dist/tippy-bundle.esm';
AwBubbleChartDS = /** @class */ (function (_super) {
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
                var element = document.getElementsByClassName('bubble-chart__tippy-template')[0];
                element.getElementsByClassName('aw-bubble-popup-menu__text')[0].innerHTML =
                    "\u00C8 collegato a " + bubble.count + " entit\u00E0";
                element.getElementsByClassName('aw-bubble-popup-menu__title')[0].innerHTML =
                    "" + bubble.entity.label;
                /** @type {?} */
                var toggleBubbleText = _this.selected.includes(bubble.entity.id) ? "Deseleziona" : "Seleziona";
                element.getElementsByClassName('aw-bubble-popup-menu__link')[1].innerHTML = toggleBubbleText;
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
        if (data.response && data.response.entitiesData) {
            this.chartData = data.response.entitiesData;
        }
        return {
            containerId: 'bubbleChartContainer',
            width: 500,
            height: 500,
            transition: 750,
            sizeRange: [.5, 500],
            selected: this.selected,
            colorMatch: {
                domain: ['persona', 'luogo', 'organizzazione', 'cosa notevole'],
                range: ['#4d8df3', '#f2d04c', '#c99245', '#6cb286']
            },
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
// import tippy from 'tippy.js/dist/tippy-bundle.esm';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxLQUEwQixNQUFNLFVBQVUsQ0FBQzs7QUFHbEQ7OztJQUFxQywyQ0FBVTtJQUEvQztRQUFBLHFFQXlIQztRQXhIUSxlQUFTLEdBQVEsRUFBRSxDQUFBLENBQU0sK0JBQStCOztRQUN4RCxVQUFJLEdBQVEsSUFBSSxDQUFDLENBQVEscURBQXFEOztRQUM5RSxjQUFRLEdBQWEsRUFBRSxDQUFBLENBQUUsMkJBQTJCOztRQUNwRCxhQUFPLEdBQVUsRUFBRSxDQUFBLENBQU0sMkRBQTJEOztRQUNwRixnQkFBVSxHQUFVLEVBQUUsQ0FBQTtRQUN0QixlQUFTLEdBQVUsRUFBRSxDQUFBLENBQUksMEJBQTBCO1FBdUIxRCxpQkFBVzs7OztRQUFHLFVBQUEsR0FBRztZQUNmOzs7Y0FHRTtZQUNGLElBQUksR0FBRyxFQUFFO2dCQUNQLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO2FBQ3JCO2lCQUFNLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDdkIsR0FBRyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUE7YUFDckI7WUFDRCxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLDJEQUEyRDtnQkFDeEYsR0FBRyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztnQkFBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElB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c0JBQXNCO1lBQ25DLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxVQUFVLEVBQUUsR0FBRztZQUNmLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFVBQVUsRUFBRTtnQkFDVixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztnQkFDL0QsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3BCLE9BQU87Ozs7WUFBRSxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUFBO1NBQ2xDLENBQUE7SUFDSCxDQUFDO0lBOEZILHNCQUFDO0FBQUQsQ0FBQyxBQXpIRCxDQUFxQyxVQUFVLEdBeUg5Qzs7Ozs7SUF4SEMsb0NBQTBCOztJQUMxQiwrQkFBd0I7O0lBQ3hCLG1DQUE4Qjs7SUFDOUIsa0NBQTBCOztJQUMxQixxQ0FBNkI7O0lBQzdCLG9DQUE0Qjs7SUFDNUIsd0NBQTRCOztJQXNCNUIsc0NBb0JDOztJQUVELDRDQVVDOztJQUVELHFDQXlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgdGlwcHksIHsgY3JlYXRlU2luZ2xldG9uIH0gZnJvbSAndGlwcHkuanMnO1xuLy8gaW1wb3J0IHRpcHB5IGZyb20gJ3RpcHB5LmpzL2Rpc3QvdGlwcHktYnVuZGxlLmVzbSc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGNoYXJ0RGF0YTogYW55ID0gW10gICAgICAvLyBkYXRhIHJlbmRlcmVkIGludG8gdGhlIGdyYXBoXG4gIHB1YmxpYyBkcmF3OiBhbnkgPSBudWxsOyAgICAgICAgLy8gZXhwb3NlZCBjb21wb25lbnQgZHJhdyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHZpZXdcbiAgcHVibGljIHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdICAvLyBsaXN0IG9mIHNlbGVjdGVkIGJ1YmJsZXNcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW10gICAgICAvLyBsaXN0IG9mIGFjdGl2ZSBmaWx0ZXJzIHRvIHNob3cgb25seSBzb21lIFR5cGVPZkVudGl0eShzKVxuICBwdWJsaWMgY2xvc2VkRXllczogYW55W10gPSBbXVxuICBwdWJsaWMgdGlwcHlMaXN0OiBhbnlbXSA9IFtdICAgIC8vIGxpc3Qgb2YgdGlwcHkgaW5zdGFuY2VzXG4gIHB1YmxpYyBmb2N1c2VkQnViYmxlOiBzdHJpbmcgICAgLy8gaWQgb2YgdGhlIGZvY3VzZWQgYnViYmxlXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgaWYgKGRhdGEucmVzcG9uc2UgJiYgZGF0YS5yZXNwb25zZS5lbnRpdGllc0RhdGEpIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gZGF0YS5yZXNwb25zZS5lbnRpdGllc0RhdGFcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgdHJhbnNpdGlvbjogNzUwLFxuICAgICAgc2l6ZVJhbmdlOiBbLjUsIDUwMF0sXG4gICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgIGNvbG9yTWF0Y2g6IHtcbiAgICAgICAgZG9tYWluOiBbJ3BlcnNvbmEnLCAnbHVvZ28nLCAnb3JnYW5penphemlvbmUnLCAnY29zYSBub3Rldm9sZSddLFxuICAgICAgICByYW5nZTogWycjNGQ4ZGYzJywgJyNmMmQwNGMnLCAnI2M5OTI0NScsICcjNmNiMjg2J11cbiAgICAgIH0sXG4gICAgICBkYXRhOiB0aGlzLmNoYXJ0RGF0YSxcbiAgICAgIHNldERyYXc6IGRyYXcgPT4gdGhpcy5kcmF3ID0gZHJhd1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0ID0gcmVzID0+IHtcbiAgICAvKlxuICAgICAgUmVkcmF3cyB0aGUgZ3JhcGggd2l0aCB0aGUgaW5jb21pbmcgZGF0YS5cbiAgICAgIFwicmVzXCIgc2hvdWxkIGJlIEFwb2xsbydzIFwicmVzcG9uc2UuZW50aXRpZXNEYXRhXCJcbiAgICAqL1xuICAgIGlmIChyZXMpIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gcmVzXG4gICAgfSBlbHNlIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgIHJlcyA9IHRoaXMuY2hhcnREYXRhXG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSByZXNwb25zZSBiZWZvcmUgcmVkcmF3aW5nIHRoZSBncmFwaFxuICAgICAgcmVzID0gdGhpcy5jaGFydERhdGEuZmlsdGVyKGVsID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZHJhdykge1xuICAgICAgdGhpcy51cGRhdGUocmVzKSAvLyBjb21wb25lbnQgc2VsZi11cGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRwdXQuZGF0YSA9IHJlcztcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQnViYmxlQ2xpY2sgPSBwYXlsb2FkID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlcyB0aGUgc2VsZWN0aW9uIG9mIHRoZSBjbGlja2VkIGJ1YmJsZS5cbiAgICAqL1xuICAgIGNvbnN0IGlkID0gcGF5bG9hZFxuICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGlkKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UodGhpcy5zZWxlY3RlZC5pbmRleE9mKGlkKSwgMSkgLy8gcmVtb3ZlIHNlbGVjdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpIC8vIGFkZCBzZWxlY3Rpb25cbiAgICB9XG4gIH1cblxuICB0aXBweU1ha2VyID0gYnViYmxlcyA9PiB7XG4gICAgLy8gZmx1c2ggZXhpc3RpbmcgdG9vbHRpcHNcbiAgICB0aGlzLnRpcHB5TGlzdC5mb3JFYWNoKHQgPT4geyBpZiAodCkgeyB0LmRlc3Ryb3koKSB9IH0pXG4gICAgdGhpcy50aXBweUxpc3QgPSBbXVxuXG4gICAgY29uc3QgYnVpbGRUb29sdGlwID0gYnViYmxlID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnViYmxlLWNoYXJ0X190aXBweS10ZW1wbGF0ZScpWzBdXG4gICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F3LWJ1YmJsZS1wb3B1cC1tZW51X190ZXh0JylbMF0uaW5uZXJIVE1MID1cbiAgICAgICAgYMOIIGNvbGxlZ2F0byBhICR7YnViYmxlLmNvdW50fSBlbnRpdMOgYFxuICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fdGl0bGUnKVswXS5pbm5lckhUTUwgPVxuICAgICAgICBgJHtidWJibGUuZW50aXR5LmxhYmVsfWBcbiAgICAgIGxldCB0b2dnbGVCdWJibGVUZXh0ID0gdGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhidWJibGUuZW50aXR5LmlkKSA/IGBEZXNlbGV6aW9uYWAgOiBgU2VsZXppb25hYFxuICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhdy1idWJibGUtcG9wdXAtbWVudV9fbGluaycpWzFdLmlubmVySFRNTCA9IHRvZ2dsZUJ1YmJsZVRleHRcbiAgICAgIHJldHVybiBlbGVtZW50LmlubmVySFRNTFxuICAgIH1cbiAgICBjb25zdCBmb2N1c0J1YmJsZSA9IGlkID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZEJ1YmJsZSA9IGlkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIGRhdGEgYmVmb3JlIGFkZGluZyB0b29sdGlwc1xuICAgICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGVsID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKVxuICAgIH1cbiAgICAvLyBtYWtlIG5ldyB0b29sdGlwc1xuICAgIGJ1YmJsZXMuZm9yRWFjaChiID0+IHtcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGIuZW50aXR5LmlkKS5wYXJlbnRFbGVtZW50IC8vIHNlbGVjdHMgYSA8Zz4gZWxlbWVudFxuICAgICAgdGhpcy50aXBweUxpc3QucHVzaCggLy8gYWRkIHRoaXMgdGlwcHkgdG8gdGhlIGFycmF5IG9mIGluc3RhbmNlc1xuICAgICAgICB0aXBweShlbCwge1xuICAgICAgICAgIGNvbnRlbnQ6IGJ1aWxkVG9vbHRpcChiKSxcbiAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICBhcHBlbmRUbzogZG9jdW1lbnQuYm9keSwgLy8gc3VwcHJlc3MgaW50ZXJhY3RpdmUgd2FybmluZ1xuICAgICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIG5vLXBhZGRpbmcnLFxuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgZGVsYXk6IFsxNTAsIDMwXSxcbiAgICAgICAgICB1cGRhdGVEdXJhdGlvbjogNDAwLFxuICAgICAgICAgIG9uTW91bnQoKSB7XG4gICAgICAgICAgICBmb2N1c0J1YmJsZShiLmVudGl0eS5pZClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSk7XG5cbiAgICAvLyBjcmVhdGVTaW5nbGV0b24odGhpcy50aXBweUxpc3QsIHtcbiAgICAvLyAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgIC8vICAgYXBwZW5kVG86IGRvY3VtZW50LmJvZHksIC8vIHN1cHByZXNzIGludGVyYWN0aXZlIHdhcm5pbmdcbiAgICAvLyAgIGFycm93OiB0cnVlLFxuICAgIC8vICAgZmxpcDogZmFsc2UsXG4gICAgLy8gICB0aGVtZTogJ2xpZ2h0LWJvcmRlciBuby1wYWRkaW5nJyxcbiAgICAvLyAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgLy8gICBkZWxheTogWzE1MCwgMzBdLFxuICAgIC8vICAgdXBkYXRlRHVyYXRpb246IDQwMCxcbiAgICAgIC8vIG9uVHJpZ2dlcihyZWYpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coe3JlZn0pXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdmaXJlZCcpXG4gICAgICAvLyB9XG4gICAgLy8gfSlcbiAgfVxufSJdfQ==