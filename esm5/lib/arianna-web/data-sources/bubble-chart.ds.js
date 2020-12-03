import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwBubbleChartDS = /** @class */ (function (_super) {
    __extends(AwBubbleChartDS, _super);
    function AwBubbleChartDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartData = []; // data rendered into the graph
        _this.draw = null; // exposed component draw function to update the view
        _this.selected = []; // list of selected bubbles
        _this.filters = []; // list of active filters to show only some TypeOfEntity(s)
        _this.closedEyes = []; // array of the activated eye filters
        _this.tippyList = []; // list of tippy instances
        _this.updateChart = function (res) {
            /*
              Redraws the graph with the incoming data.
              "res" should be Apollo's "response.entitiesData".
              When res is passed as null, the chart is rendered with the previous data.
            */
            var response = res;
            if (res === null) {
                response = _this.chartData;
            }
            else {
                _this.chartData = res;
            }
            if (_this.filters.length > 0) { // apply filters to the response
                response = _this.chartData.filter(function (el) { return !_this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')); });
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
        };
        _this.smartSlice = function (d, length) {
            var l = length || _this.options.limit;
            if (l && l < d.length) {
                return d.slice(0, l);
            }
            return d;
        };
        _this.handleBubbleClick = function (payload) {
            /*
              Toggles the selection of the clicked bubble.
            */
            var id = payload;
            if (_this.selected.includes(id)) {
                _this.selected.splice(_this.selected.indexOf(id), 1); // remove selection
            }
            else {
                _this.selected.push(id); // add selection
            }
        };
        return _this;
    }
    AwBubbleChartDS.prototype.transform = function (data) {
        var _this = this;
        var _a = this.options, config = _a.config, smallChartSize = _a.smallChartSize;
        var _b = config.get('bubble-chart'), fontRendering = _b.fontRendering, transition = _b.transition, shuffle = _b.shuffle;
        var domain = [];
        var range = [];
        var colorConfig = config.get('config-keys');
        Object.keys(colorConfig).forEach(function (k) {
            domain.push(k.replace(/-/g, ' '));
            range.push(((colorConfig[k] || {}).color || {}).hex);
        });
        var commonParams = {
            containerId: 'bubbleChartContainer',
            setDraw: function (draw) { _this.draw = draw; },
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
        return __assign(__assign({}, commonParams), { anchorData: { href: '/placeholder/' }, data: this.smartSlice(data), smallView: __assign(__assign({}, commonParams), { data: this.smartSlice(data, smallChartSize) }) });
    };
    return AwBubbleChartDS;
}(DataSource));
export { AwBubbleChartDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUFxQyxtQ0FBVTtJQUEvQztRQUFBLHFFQWlHQztRQWhHUSxlQUFTLEdBQVEsRUFBRSxDQUFBLENBQUMsK0JBQStCO1FBRW5ELFVBQUksR0FBUSxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7UUFFdkUsY0FBUSxHQUFhLEVBQUUsQ0FBQSxDQUFDLDJCQUEyQjtRQUVuRCxhQUFPLEdBQVUsRUFBRSxDQUFBLENBQUMsMkRBQTJEO1FBRS9FLGdCQUFVLEdBQVUsRUFBRSxDQUFBLENBQUMscUNBQXFDO1FBRTVELGVBQVMsR0FBVSxFQUFFLENBQUEsQ0FBQywwQkFBMEI7UUEwQ3ZELGlCQUFXLEdBQUcsVUFBQyxHQUFHO1lBQ2hCOzs7O2NBSUU7WUFDRixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNoQixRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUN0QjtZQUNELElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsZ0NBQWdDO2dCQUM3RCxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENB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R0FBRyxDQUFDO1lBQ3JCLGFBQWEsZUFBQTtZQUNiLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEdBQUc7WUFDVixVQUFVLFlBQUE7WUFDVixPQUFPLFNBQUE7U0FDUixDQUFDO1FBQ0Y7Ozs7VUFJRTtRQUNGLDZCQUNLLFlBQVksS0FDZixVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEVBQ3JDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUMzQixTQUFTLHdCQUNKLFlBQVksS0FDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLE9BRTdDO0lBQ0osQ0FBQztJQThDSCxzQkFBQztBQUFELENBQUMsQUFqR0QsQ0FBcUMsVUFBVSxHQWlHOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjaGFydERhdGE6IGFueSA9IFtdIC8vIGRhdGEgcmVuZGVyZWQgaW50byB0aGUgZ3JhcGhcblxuICBwdWJsaWMgZHJhdzogYW55ID0gbnVsbDsgLy8gZXhwb3NlZCBjb21wb25lbnQgZHJhdyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHZpZXdcblxuICBwdWJsaWMgc2VsZWN0ZWQ6IHN0cmluZ1tdID0gW10gLy8gbGlzdCBvZiBzZWxlY3RlZCBidWJibGVzXG5cbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW10gLy8gbGlzdCBvZiBhY3RpdmUgZmlsdGVycyB0byBzaG93IG9ubHkgc29tZSBUeXBlT2ZFbnRpdHkocylcblxuICBwdWJsaWMgY2xvc2VkRXllczogYW55W10gPSBbXSAvLyBhcnJheSBvZiB0aGUgYWN0aXZhdGVkIGV5ZSBmaWx0ZXJzXG5cbiAgcHVibGljIHRpcHB5TGlzdDogYW55W10gPSBbXSAvLyBsaXN0IG9mIHRpcHB5IGluc3RhbmNlc1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBzbWFsbENoYXJ0U2l6ZSB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHsgZm9udFJlbmRlcmluZywgdHJhbnNpdGlvbiwgc2h1ZmZsZSB9ID0gY29uZmlnLmdldCgnYnViYmxlLWNoYXJ0Jyk7XG4gICAgY29uc3QgZG9tYWluID0gW107IGNvbnN0XG4gICAgICByYW5nZSA9IFtdO1xuICAgIGNvbnN0IGNvbG9yQ29uZmlnID0gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKTtcblxuICAgIE9iamVjdC5rZXlzKGNvbG9yQ29uZmlnKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBkb21haW4ucHVzaChrLnJlcGxhY2UoLy0vZywgJyAnKSk7XG4gICAgICByYW5nZS5wdXNoKCgoY29sb3JDb25maWdba10gfHwge30pLmNvbG9yIHx8IHt9KS5oZXgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29tbW9uUGFyYW1zID0ge1xuICAgICAgY29udGFpbmVySWQ6ICdidWJibGVDaGFydENvbnRhaW5lcicsXG4gICAgICBzZXREcmF3OiAoZHJhdykgPT4geyB0aGlzLmRyYXcgPSBkcmF3OyB9LFxuICAgICAgY29sb3JNYXRjaDogeyBkb21haW4sIHJhbmdlIH0sXG4gICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgIHNpemVSYW5nZTogWzAuNSwgNTAwXSxcbiAgICAgIGZvbnRSZW5kZXJpbmcsXG4gICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgc2h1ZmZsZSxcbiAgICB9O1xuICAgIC8qXG4gICAgVHdvIGRhdGEgc3RyZWFtcyBhcmUgb3VwdXR0ZWQuXG4gICAgVGhlIGRlZmF1bHQgc3RyZWFtIGlzIGZvciB0aGUgbm9ybWFsIHZpc3VhbGl6YXRpb24sXG4gICAgXCJzbWFsbFZpZXdcIiBpcyB1c2VkIGZvciBhIGNvbXByZXNzZWQgdmlldyBvZiB0aGUgc2FtZSBkYXRhLlxuICAgICovXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNvbW1vblBhcmFtcyxcbiAgICAgIGFuY2hvckRhdGE6IHsgaHJlZjogJy9wbGFjZWhvbGRlci8nIH0sXG4gICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSksXG4gICAgICBzbWFsbFZpZXc6IHtcbiAgICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSwgc21hbGxDaGFydFNpemUpLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlQ2hhcnQgPSAocmVzKSA9PiB7XG4gICAgLypcbiAgICAgIFJlZHJhd3MgdGhlIGdyYXBoIHdpdGggdGhlIGluY29taW5nIGRhdGEuXG4gICAgICBcInJlc1wiIHNob3VsZCBiZSBBcG9sbG8ncyBcInJlc3BvbnNlLmVudGl0aWVzRGF0YVwiLlxuICAgICAgV2hlbiByZXMgaXMgcGFzc2VkIGFzIG51bGwsIHRoZSBjaGFydCBpcyByZW5kZXJlZCB3aXRoIHRoZSBwcmV2aW91cyBkYXRhLlxuICAgICovXG4gICAgbGV0IHJlc3BvbnNlID0gcmVzO1xuICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5jaGFydERhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gcmVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5maWx0ZXJzLmxlbmd0aCA+IDApIHsgLy8gYXBwbHkgZmlsdGVycyB0byB0aGUgcmVzcG9uc2VcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5jaGFydERhdGEuZmlsdGVyKChlbCkgPT4gIXRoaXMuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZHJhdykge1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5zbWFydFNsaWNlKHJlc3BvbnNlKSk7IC8vIGNvbXBvbmVudCBzZWxmLXVwZGF0ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dHB1dC5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLm91dHB1dC5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlc3BvbnNlKTtcbiAgICAgIHRoaXMub3V0cHV0LnNtYWxsVmlldy5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlc3BvbnNlLCB0aGlzLm9wdGlvbnMuc21hbGxDaGFydFNpemUpO1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgc21hcnRTbGljZSA9IChkLCBsZW5ndGg/KSA9PiB7XG4gICAgY29uc3QgbCA9IGxlbmd0aCB8fCB0aGlzLm9wdGlvbnMubGltaXQ7XG4gICAgaWYgKGwgJiYgbCA8IGQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZC5zbGljZSgwLCBsKTtcbiAgICB9XG4gICAgcmV0dXJuIGQ7XG4gIH1cblxuICBoYW5kbGVCdWJibGVDbGljayA9IChwYXlsb2FkKSA9PiB7XG4gICAgLypcbiAgICAgIFRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBvZiB0aGUgY2xpY2tlZCBidWJibGUuXG4gICAgKi9cbiAgICBjb25zdCBpZCA9IHBheWxvYWQ7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnNwbGljZSh0aGlzLnNlbGVjdGVkLmluZGV4T2YoaWQpLCAxKTsgLy8gcmVtb3ZlIHNlbGVjdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpOyAvLyBhZGQgc2VsZWN0aW9uXG4gICAgfVxuICB9XG59XG4iXX0=