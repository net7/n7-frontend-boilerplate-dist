/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/bubble-chart.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataSource } from '@n7-frontend/core';
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
        _this.closedEyes = []; // array of the activated eye filters
        // array of the activated eye filters
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
            /** @type {?} */
            var response = res;
            if (res === null) {
                response = _this.chartData;
            }
            else {
                _this.chartData = res;
            }
            if (_this.filters.length > 0) { // apply filters to the response
                response = _this.chartData.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                function (el) { return !_this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); }));
            }
            if (!_this.draw) {
                _this.update(_this.smartSlice(response)); // component self-update
            }
            else {
                _this.output.selected = _this.selected;
                _this.output.data = _this.smartSlice(response);
                _this.output.smallView.data = _this.smartSlice(response, _this.options.smallChartSize);
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
            var l = length || _this.options.limit;
            if (l && l < d.length) {
                return d.slice(0, l);
            }
            return d;
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
        return _this;
    }
    // list of tippy instances
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    AwBubbleChartDS.prototype.transform = 
    // list of tippy instances
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
            function (draw) { _this.draw = draw; }),
            colorMatch: { domain: domain, range: range },
            selected: this.selected,
            sizeRange: [0.5, 500],
            fontRendering: fontRendering,
            height: 500,
            width: 500,
            transition: transition,
            shuffle: shuffle,
        };
        /*
        Two data streams are ouputted.
        The default stream is for the normal visualization,
        "smallView" is used for a compressed view of the same data.
        */
        return tslib_1.__assign({}, commonParams, { anchorData: { href: '/placeholder/' }, data: this.smartSlice(data), smallView: tslib_1.__assign({}, commonParams, { data: this.smartSlice(data, smallChartSize) }) });
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
    AwBubbleChartDS.prototype.updateChart;
    /** @type {?} */
    AwBubbleChartDS.prototype.smartSlice;
    /** @type {?} */
    AwBubbleChartDS.prototype.handleBubbleClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQXFDLDJDQUFVO0lBQS9DO1FBQUEscUVBaUdDO1FBaEdRLGVBQVMsR0FBUSxFQUFFLENBQUEsQ0FBQywrQkFBK0I7O1FBRW5ELFVBQUksR0FBUSxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7O1FBRXZFLGNBQVEsR0FBYSxFQUFFLENBQUEsQ0FBQywyQkFBMkI7O1FBRW5ELGFBQU8sR0FBVSxFQUFFLENBQUEsQ0FBQywyREFBMkQ7O1FBRS9FLGdCQUFVLEdBQVUsRUFBRSxDQUFBLENBQUMscUNBQXFDOztRQUU1RCxlQUFTLEdBQVUsRUFBRSxDQUFBLENBQUMsMEJBQTBCO1FBMEN2RCxpQkFBVzs7OztRQUFHLFVBQUMsR0FBRzs7Ozs7OztnQkFNWixRQUFRLEdBQUcsR0FBRztZQUNsQixJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ2hCLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxnQ0FBZ0M7Z0JBQzdELFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENB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RUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEdBQUc7WUFDVixVQUFVLFlBQUE7WUFDVixPQUFPLFNBQUE7U0FDUjtRQUNEOzs7O1VBSUU7UUFDRiw0QkFDSyxZQUFZLElBQ2YsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxFQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDM0IsU0FBUyx1QkFDSixZQUFZLElBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxPQUU3QztJQUNKLENBQUM7SUE4Q0gsc0JBQUM7QUFBRCxDQUFDLEFBakdELENBQXFDLFVBQVUsR0FpRzlDOzs7O0lBaEdDLG9DQUEwQjs7SUFFMUIsK0JBQXdCOztJQUV4QixtQ0FBOEI7O0lBRTlCLGtDQUEwQjs7SUFFMUIscUNBQTZCOztJQUU3QixvQ0FBNEI7O0lBMEM1QixzQ0F1QkM7O0lBRUQscUNBTUM7O0lBRUQsNENBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnREUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyBjaGFydERhdGE6IGFueSA9IFtdIC8vIGRhdGEgcmVuZGVyZWQgaW50byB0aGUgZ3JhcGhcclxuXHJcbiAgcHVibGljIGRyYXc6IGFueSA9IG51bGw7IC8vIGV4cG9zZWQgY29tcG9uZW50IGRyYXcgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB2aWV3XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RlZDogc3RyaW5nW10gPSBbXSAvLyBsaXN0IG9mIHNlbGVjdGVkIGJ1YmJsZXNcclxuXHJcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW10gLy8gbGlzdCBvZiBhY3RpdmUgZmlsdGVycyB0byBzaG93IG9ubHkgc29tZSBUeXBlT2ZFbnRpdHkocylcclxuXHJcbiAgcHVibGljIGNsb3NlZEV5ZXM6IGFueVtdID0gW10gLy8gYXJyYXkgb2YgdGhlIGFjdGl2YXRlZCBleWUgZmlsdGVyc1xyXG5cclxuICBwdWJsaWMgdGlwcHlMaXN0OiBhbnlbXSA9IFtdIC8vIGxpc3Qgb2YgdGlwcHkgaW5zdGFuY2VzXHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3QgeyBjb25maWcsIHNtYWxsQ2hhcnRTaXplIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCB7IGZvbnRSZW5kZXJpbmcsIHRyYW5zaXRpb24sIHNodWZmbGUgfSA9IGNvbmZpZy5nZXQoJ2J1YmJsZS1jaGFydCcpO1xyXG4gICAgY29uc3QgZG9tYWluID0gW107IGNvbnN0XHJcbiAgICAgIHJhbmdlID0gW107XHJcbiAgICBjb25zdCBjb2xvckNvbmZpZyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJyk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoY29sb3JDb25maWcpLmZvckVhY2goKGspID0+IHtcclxuICAgICAgZG9tYWluLnB1c2goay5yZXBsYWNlKC8tL2csICcgJykpO1xyXG4gICAgICByYW5nZS5wdXNoKCgoY29sb3JDb25maWdba10gfHwge30pLmNvbG9yIHx8IHt9KS5oZXgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY29tbW9uUGFyYW1zID0ge1xyXG4gICAgICBjb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcclxuICAgICAgc2V0RHJhdzogKGRyYXcpID0+IHsgdGhpcy5kcmF3ID0gZHJhdzsgfSxcclxuICAgICAgY29sb3JNYXRjaDogeyBkb21haW4sIHJhbmdlIH0sXHJcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxyXG4gICAgICBzaXplUmFuZ2U6IFswLjUsIDUwMF0sXHJcbiAgICAgIGZvbnRSZW5kZXJpbmcsXHJcbiAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICB3aWR0aDogNTAwLFxyXG4gICAgICB0cmFuc2l0aW9uLFxyXG4gICAgICBzaHVmZmxlLFxyXG4gICAgfTtcclxuICAgIC8qXHJcbiAgICBUd28gZGF0YSBzdHJlYW1zIGFyZSBvdXB1dHRlZC5cclxuICAgIFRoZSBkZWZhdWx0IHN0cmVhbSBpcyBmb3IgdGhlIG5vcm1hbCB2aXN1YWxpemF0aW9uLFxyXG4gICAgXCJzbWFsbFZpZXdcIiBpcyB1c2VkIGZvciBhIGNvbXByZXNzZWQgdmlldyBvZiB0aGUgc2FtZSBkYXRhLlxyXG4gICAgKi9cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNvbW1vblBhcmFtcyxcclxuICAgICAgYW5jaG9yRGF0YTogeyBocmVmOiAnL3BsYWNlaG9sZGVyLycgfSxcclxuICAgICAgZGF0YTogdGhpcy5zbWFydFNsaWNlKGRhdGEpLFxyXG4gICAgICBzbWFsbFZpZXc6IHtcclxuICAgICAgICAuLi5jb21tb25QYXJhbXMsXHJcbiAgICAgICAgZGF0YTogdGhpcy5zbWFydFNsaWNlKGRhdGEsIHNtYWxsQ2hhcnRTaXplKSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGFydCA9IChyZXMpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIFJlZHJhd3MgdGhlIGdyYXBoIHdpdGggdGhlIGluY29taW5nIGRhdGEuXHJcbiAgICAgIFwicmVzXCIgc2hvdWxkIGJlIEFwb2xsbydzIFwicmVzcG9uc2UuZW50aXRpZXNEYXRhXCIuXHJcbiAgICAgIFdoZW4gcmVzIGlzIHBhc3NlZCBhcyBudWxsLCB0aGUgY2hhcnQgaXMgcmVuZGVyZWQgd2l0aCB0aGUgcHJldmlvdXMgZGF0YS5cclxuICAgICovXHJcbiAgICBsZXQgcmVzcG9uc2UgPSByZXM7XHJcbiAgICBpZiAocmVzID09PSBudWxsKSB7XHJcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5jaGFydERhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoYXJ0RGF0YSA9IHJlcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSByZXNwb25zZVxyXG4gICAgICByZXNwb25zZSA9IHRoaXMuY2hhcnREYXRhLmZpbHRlcigoZWwpID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5kcmF3KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMuc21hcnRTbGljZShyZXNwb25zZSkpOyAvLyBjb21wb25lbnQgc2VsZi11cGRhdGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcclxuICAgICAgdGhpcy5vdXRwdXQuZGF0YSA9IHRoaXMuc21hcnRTbGljZShyZXNwb25zZSk7XHJcbiAgICAgIHRoaXMub3V0cHV0LnNtYWxsVmlldy5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlc3BvbnNlLCB0aGlzLm9wdGlvbnMuc21hbGxDaGFydFNpemUpO1xyXG4gICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNtYXJ0U2xpY2UgPSAoZCwgbGVuZ3RoPykgPT4ge1xyXG4gICAgY29uc3QgbCA9IGxlbmd0aCB8fCB0aGlzLm9wdGlvbnMubGltaXQ7XHJcbiAgICBpZiAobCAmJiBsIDwgZC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGQuc2xpY2UoMCwgbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZDtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJ1YmJsZUNsaWNrID0gKHBheWxvYWQpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIFRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBvZiB0aGUgY2xpY2tlZCBidWJibGUuXHJcbiAgICAqL1xyXG4gICAgY29uc3QgaWQgPSBwYXlsb2FkO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihpZCksIDEpOyAvLyByZW1vdmUgc2VsZWN0aW9uXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpOyAvLyBhZGQgc2VsZWN0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==