/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLL0M7SUFBcUMsMkNBQVU7SUFBL0M7UUFBQSxxRUEyRkM7UUExRlEsZUFBUyxHQUFRLEVBQUUsQ0FBQSxDQUFTLCtCQUErQjs7UUFDM0QsVUFBSSxHQUFRLElBQUksQ0FBQyxDQUFXLHFEQUFxRDs7UUFDakYsY0FBUSxHQUFhLEVBQUUsQ0FBQSxDQUFLLDJCQUEyQjs7UUFDdkQsYUFBTyxHQUFVLEVBQUUsQ0FBQSxDQUFTLDJEQUEyRDs7UUFDdkYsZ0JBQVUsR0FBVSxFQUFFLENBQUEsQ0FBTSxzQ0FBc0M7O1FBQ2xFLGVBQVMsR0FBVSxFQUFFLENBQUEsQ0FBTywwQkFBMEI7UUF5QzdELGlCQUFXOzs7O1FBQUcsVUFBQSxHQUFHO1lBQ2Y7Ozs7Y0FJRTtZQUNGLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDaEIsR0FBRyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUE7YUFDckI7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7YUFDckI7WUFDRCxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLGdDQUFnQztnQkFDN0QsR0FBRyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztnQkFBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFqRSxDQUFpRSxF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QUM7WUFDcEIsYUFBYSxlQUFBO1lBQ2IsTUFBTSxFQUFFLEdBQUc7WUFDWCxLQUFLLEVBQUUsR0FBRztZQUNWLFVBQVUsWUFBQTtZQUNWLE9BQU8sU0FBQTtTQUNSO1FBQ0Q7Ozs7VUFJRTs7UUFKRjs7OztVQUlFO1FBQ0gsNEJBQ0ssWUFBWSxJQUNkLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsRUFDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQzNCLFNBQVMsdUJBQ0osWUFBWSxJQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsT0FFOUM7SUFDSCxDQUFDO0lBOENILHNCQUFDO0FBQUQsQ0FBQyxBQTNGRCxDQUFxQyxVQUFVLEdBMkY5Qzs7OztJQTFGQyxvQ0FBMEI7O0lBQzFCLCtCQUF3Qjs7SUFDeEIsbUNBQThCOztJQUM5QixrQ0FBMEI7O0lBQzFCLHFDQUE2Qjs7SUFDN0Isb0NBQTRCOztJQXlDNUIsc0NBc0JDOztJQUVELHFDQU9DOztJQUVELDRDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB0aXBweSwgeyBjcmVhdGVTaW5nbGV0b24gfSBmcm9tICd0aXBweS5qcyc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBjb25maWcgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnREUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgY2hhcnREYXRhOiBhbnkgPSBbXSAgICAgICAgIC8vIGRhdGEgcmVuZGVyZWQgaW50byB0aGUgZ3JhcGhcbiAgcHVibGljIGRyYXc6IGFueSA9IG51bGw7ICAgICAgICAgICAvLyBleHBvc2VkIGNvbXBvbmVudCBkcmF3IGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdmlld1xuICBwdWJsaWMgc2VsZWN0ZWQ6IHN0cmluZ1tdID0gW10gICAgIC8vIGxpc3Qgb2Ygc2VsZWN0ZWQgYnViYmxlc1xuICBwdWJsaWMgZmlsdGVyczogYW55W10gPSBbXSAgICAgICAgIC8vIGxpc3Qgb2YgYWN0aXZlIGZpbHRlcnMgdG8gc2hvdyBvbmx5IHNvbWUgVHlwZU9mRW50aXR5KHMpXG4gIHB1YmxpYyBjbG9zZWRFeWVzOiBhbnlbXSA9IFtdICAgICAgLy8gYXJyYXkgb2YgdGhlIGFjdGl2YXRlZCBleWUgZmlsdGVycyBcbiAgcHVibGljIHRpcHB5TGlzdDogYW55W10gPSBbXSAgICAgICAvLyBsaXN0IG9mIHRpcHB5IGluc3RhbmNlc1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBzbWFsbENoYXJ0U2l6ZSB9ID0gdGhpcy5vcHRpb25zXG4gICAgY29uc3QgeyBmb250UmVuZGVyaW5nLCB0cmFuc2l0aW9uLCBzaHVmZmxlIH0gPSBjb25maWcuZ2V0KCdidWJibGUtY2hhcnQnKVxuICAgIGNvbnN0IGRvbWFpbiA9IFtdLCByYW5nZSA9IFtdXG4gICAgY29uc3QgY29sb3JDb25maWcgPSBjb25maWcuZ2V0KCdjb25maWcta2V5cycpXG5cbiAgICBPYmplY3Qua2V5cyhjb2xvckNvbmZpZykuZm9yRWFjaChrID0+IHtcbiAgICAgIGRvbWFpbi5wdXNoKGsucmVwbGFjZSgvLS9nLCAnICcpKVxuICAgICAgcmFuZ2UucHVzaCgoKGNvbG9yQ29uZmlnW2tdIHx8IHt9KS5jb2xvciB8fCB7fSkuaGV4KVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21tb25QYXJhbXMgPSB7XG4gICAgICBjb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIHNldERyYXc6IGRyYXcgPT4gdGhpcy5kcmF3ID0gZHJhdyxcbiAgICAgIGNvbG9yTWF0Y2g6IHsgZG9tYWluLCByYW5nZSB9LFxuICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICBzaXplUmFuZ2U6IFsuNSwgNTAwXSxcbiAgICAgIGZvbnRSZW5kZXJpbmcsXG4gICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgc2h1ZmZsZSxcbiAgICB9XG4gICAgLypcbiAgICBUd28gZGF0YSBzdHJlYW1zIGFyZSBvdXB1dHRlZC5cbiAgICBUaGUgZGVmYXVsdCBzdHJlYW0gaXMgZm9yIHRoZSBub3JtYWwgdmlzdWFsaXphdGlvbixcbiAgICBcInNtYWxsVmlld1wiIGlzIHVzZWQgZm9yIGEgY29tcHJlc3NlZCB2aWV3IG9mIHRoZSBzYW1lIGRhdGEuXG4gICAgKi9cbiAgIHJldHVybiB7XG4gICAgIC4uLmNvbW1vblBhcmFtcyxcbiAgICAgIGFuY2hvckRhdGE6IHsgaHJlZjogJy9wbGFjZWhvbGRlci8nIH0sXG4gICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSksXG4gICAgICBzbWFsbFZpZXc6IHtcbiAgICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSwgc21hbGxDaGFydFNpemUpLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDaGFydCA9IHJlcyA9PiB7XG4gICAgLypcbiAgICAgIFJlZHJhd3MgdGhlIGdyYXBoIHdpdGggdGhlIGluY29taW5nIGRhdGEuXG4gICAgICBcInJlc1wiIHNob3VsZCBiZSBBcG9sbG8ncyBcInJlc3BvbnNlLmVudGl0aWVzRGF0YVwiLlxuICAgICAgV2hlbiByZXMgaXMgcGFzc2VkIGFzIG51bGwsIHRoZSBjaGFydCBpcyByZW5kZXJlZCB3aXRoIHRoZSBwcmV2aW91cyBkYXRhLlxuICAgICovXG4gICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgcmVzID0gdGhpcy5jaGFydERhdGFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFydERhdGEgPSByZXNcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIHJlc3BvbnNlXG4gICAgICByZXMgPSB0aGlzLmNoYXJ0RGF0YS5maWx0ZXIoZWwgPT4gIXRoaXMuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpXG4gICAgfVxuICAgIGlmICghdGhpcy5kcmF3KSB7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLnNtYXJ0U2xpY2UocmVzKSkgLy8gY29tcG9uZW50IHNlbGYtdXBkYXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMub3V0cHV0LmRhdGEgPSB0aGlzLnNtYXJ0U2xpY2UocmVzKTtcbiAgICAgIHRoaXMub3V0cHV0LnNtYWxsVmlldy5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlcywgdGhpcy5vcHRpb25zLnNtYWxsQ2hhcnRTaXplKTtcbiAgICAgIHRoaXMuZHJhdygpXG4gICAgfVxuICB9XG5cbiAgc21hcnRTbGljZSA9IChkLCBsZW5ndGg/KSA9PiB7XG4gICAgY29uc3QgbCA9IGxlbmd0aCA/IGxlbmd0aCA6IHRoaXMub3B0aW9ucy5saW1pdFxuICAgIGlmIChsICYmIGwgPCBkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGQuc2xpY2UoMCwgbClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCdWJibGVDbGljayA9IHBheWxvYWQgPT4ge1xuICAgIC8qXG4gICAgICBUb2dnbGVzIHRoZSBzZWxlY3Rpb24gb2YgdGhlIGNsaWNrZWQgYnViYmxlLlxuICAgICovXG4gICAgY29uc3QgaWQgPSBwYXlsb2FkXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnNwbGljZSh0aGlzLnNlbGVjdGVkLmluZGV4T2YoaWQpLCAxKSAvLyByZW1vdmUgc2VsZWN0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChpZCkgLy8gYWRkIHNlbGVjdGlvblxuICAgIH1cbiAgfVxufSJdfQ==