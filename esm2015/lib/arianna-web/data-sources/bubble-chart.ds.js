/**
 * @fileoverview added by tsickle
 * Generated from: lib/arianna-web/data-sources/bubble-chart.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwBubbleChartDS extends DataSource {
    constructor() {
        super(...arguments);
        this.chartData = []; // data rendered into the graph
        // data rendered into the graph
        this.draw = null; // exposed component draw function to update the view
        // exposed component draw function to update the view
        this.selected = []; // list of selected bubbles
        // list of selected bubbles
        this.filters = []; // list of active filters to show only some TypeOfEntity(s)
        // list of active filters to show only some TypeOfEntity(s)
        this.closedEyes = []; // array of the activated eye filters
        // array of the activated eye filters
        this.tippyList = []; // list of tippy instances
        this.updateChart = (/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            /*
                  Redraws the graph with the incoming data.
                  "res" should be Apollo's "response.entitiesData".
                  When res is passed as null, the chart is rendered with the previous data.
                */
            /** @type {?} */
            let response = res;
            if (res === null) {
                response = this.chartData;
            }
            else {
                this.chartData = res;
            }
            if (this.filters.length > 0) { // apply filters to the response
                response = this.chartData.filter((/**
                 * @param {?} el
                 * @return {?}
                 */
                (el) => !this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-'))));
            }
            if (!this.draw) {
                this.update(this.smartSlice(response)); // component self-update
            }
            else {
                this.output.selected = this.selected;
                this.output.data = this.smartSlice(response);
                this.output.smallView.data = this.smartSlice(response, this.options.smallChartSize);
                this.draw();
            }
        });
        this.smartSlice = (/**
         * @param {?} d
         * @param {?=} length
         * @return {?}
         */
        (d, length) => {
            /** @type {?} */
            const l = length || this.options.limit;
            if (l && l < d.length) {
                return d.slice(0, l);
            }
            return d;
        });
        this.handleBubbleClick = (/**
         * @param {?} payload
         * @return {?}
         */
        (payload) => {
            /*
                  Toggles the selection of the clicked bubble.
                */
            /** @type {?} */
            const id = payload;
            if (this.selected.includes(id)) {
                this.selected.splice(this.selected.indexOf(id), 1); // remove selection
            }
            else {
                this.selected.push(id); // add selection
            }
        });
    }
    // list of tippy instances
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { config, smallChartSize } = this.options;
        const { fontRendering, transition, shuffle } = config.get('bubble-chart');
        /** @type {?} */
        const domain = [];
        /** @type {?} */
        const range = [];
        /** @type {?} */
        const colorConfig = config.get('config-keys');
        Object.keys(colorConfig).forEach((/**
         * @param {?} k
         * @return {?}
         */
        (k) => {
            domain.push(k.replace(/-/g, ' '));
            range.push(((colorConfig[k] || {}).color || {}).hex);
        }));
        /** @type {?} */
        const commonParams = {
            containerId: 'bubbleChartContainer',
            setDraw: (/**
             * @param {?} draw
             * @return {?}
             */
            (draw) => { this.draw = draw; }),
            colorMatch: { domain, range },
            selected: this.selected,
            sizeRange: [0.5, 500],
            fontRendering,
            height: 500,
            width: 500,
            transition,
            shuffle,
        };
        /*
        Two data streams are ouputted.
        The default stream is for the normal visualization,
        "smallView" is used for a compressed view of the same data.
        */
        return Object.assign({}, commonParams, { anchorData: { href: '/placeholder/' }, data: this.smartSlice(data), smallView: Object.assign({}, commonParams, { data: this.smartSlice(data, smallChartSize) }) });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUEvQzs7UUFDUyxjQUFTLEdBQVEsRUFBRSxDQUFBLENBQUMsK0JBQStCOztRQUVuRCxTQUFJLEdBQVEsSUFBSSxDQUFDLENBQUMscURBQXFEOztRQUV2RSxhQUFRLEdBQWEsRUFBRSxDQUFBLENBQUMsMkJBQTJCOztRQUVuRCxZQUFPLEdBQVUsRUFBRSxDQUFBLENBQUMsMkRBQTJEOztRQUUvRSxlQUFVLEdBQVUsRUFBRSxDQUFBLENBQUMscUNBQXFDOztRQUU1RCxjQUFTLEdBQVUsRUFBRSxDQUFBLENBQUMsMEJBQTBCO1FBMEN2RCxnQkFBVzs7OztRQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7Ozs7Ozs7Z0JBTWhCLFFBQVEsR0FBRyxHQUFHO1lBQ2xCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDaEIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7YUFDdEI7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLGdDQUFnQztnQkFDN0QsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztnQkFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxF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LEdBQUcsQ0FBQztZQUNyQixhQUFhO1lBQ2IsTUFBTSxFQUFFLEdBQUc7WUFDWCxLQUFLLEVBQUUsR0FBRztZQUNWLFVBQVU7WUFDVixPQUFPO1NBQ1I7UUFDRDs7OztVQUlFO1FBQ0YseUJBQ0ssWUFBWSxJQUNmLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsRUFDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQzNCLFNBQVMsb0JBQ0osWUFBWSxJQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsT0FFN0M7SUFDSixDQUFDO0NBOENGOzs7SUFoR0Msb0NBQTBCOztJQUUxQiwrQkFBd0I7O0lBRXhCLG1DQUE4Qjs7SUFFOUIsa0NBQTBCOztJQUUxQixxQ0FBNkI7O0lBRTdCLG9DQUE0Qjs7SUEwQzVCLHNDQXVCQzs7SUFFRCxxQ0FNQzs7SUFFRCw0Q0FVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHVibGljIGNoYXJ0RGF0YTogYW55ID0gW10gLy8gZGF0YSByZW5kZXJlZCBpbnRvIHRoZSBncmFwaFxyXG5cclxuICBwdWJsaWMgZHJhdzogYW55ID0gbnVsbDsgLy8gZXhwb3NlZCBjb21wb25lbnQgZHJhdyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHZpZXdcclxuXHJcbiAgcHVibGljIHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdIC8vIGxpc3Qgb2Ygc2VsZWN0ZWQgYnViYmxlc1xyXG5cclxuICBwdWJsaWMgZmlsdGVyczogYW55W10gPSBbXSAvLyBsaXN0IG9mIGFjdGl2ZSBmaWx0ZXJzIHRvIHNob3cgb25seSBzb21lIFR5cGVPZkVudGl0eShzKVxyXG5cclxuICBwdWJsaWMgY2xvc2VkRXllczogYW55W10gPSBbXSAvLyBhcnJheSBvZiB0aGUgYWN0aXZhdGVkIGV5ZSBmaWx0ZXJzXHJcblxyXG4gIHB1YmxpYyB0aXBweUxpc3Q6IGFueVtdID0gW10gLy8gbGlzdCBvZiB0aXBweSBpbnN0YW5jZXNcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICBjb25zdCB7IGNvbmZpZywgc21hbGxDaGFydFNpemUgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IHsgZm9udFJlbmRlcmluZywgdHJhbnNpdGlvbiwgc2h1ZmZsZSB9ID0gY29uZmlnLmdldCgnYnViYmxlLWNoYXJ0Jyk7XHJcbiAgICBjb25zdCBkb21haW4gPSBbXTsgY29uc3RcclxuICAgICAgcmFuZ2UgPSBbXTtcclxuICAgIGNvbnN0IGNvbG9yQ29uZmlnID0gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhjb2xvckNvbmZpZykuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICBkb21haW4ucHVzaChrLnJlcGxhY2UoLy0vZywgJyAnKSk7XHJcbiAgICAgIHJhbmdlLnB1c2goKChjb2xvckNvbmZpZ1trXSB8fCB7fSkuY29sb3IgfHwge30pLmhleCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjb21tb25QYXJhbXMgPSB7XHJcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxyXG4gICAgICBzZXREcmF3OiAoZHJhdykgPT4geyB0aGlzLmRyYXcgPSBkcmF3OyB9LFxyXG4gICAgICBjb2xvck1hdGNoOiB7IGRvbWFpbiwgcmFuZ2UgfSxcclxuICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXHJcbiAgICAgIHNpemVSYW5nZTogWzAuNSwgNTAwXSxcclxuICAgICAgZm9udFJlbmRlcmluZyxcclxuICAgICAgaGVpZ2h0OiA1MDAsXHJcbiAgICAgIHdpZHRoOiA1MDAsXHJcbiAgICAgIHRyYW5zaXRpb24sXHJcbiAgICAgIHNodWZmbGUsXHJcbiAgICB9O1xyXG4gICAgLypcclxuICAgIFR3byBkYXRhIHN0cmVhbXMgYXJlIG91cHV0dGVkLlxyXG4gICAgVGhlIGRlZmF1bHQgc3RyZWFtIGlzIGZvciB0aGUgbm9ybWFsIHZpc3VhbGl6YXRpb24sXHJcbiAgICBcInNtYWxsVmlld1wiIGlzIHVzZWQgZm9yIGEgY29tcHJlc3NlZCB2aWV3IG9mIHRoZSBzYW1lIGRhdGEuXHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uY29tbW9uUGFyYW1zLFxyXG4gICAgICBhbmNob3JEYXRhOiB7IGhyZWY6ICcvcGxhY2Vob2xkZXIvJyB9LFxyXG4gICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSksXHJcbiAgICAgIHNtYWxsVmlldzoge1xyXG4gICAgICAgIC4uLmNvbW1vblBhcmFtcyxcclxuICAgICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSwgc21hbGxDaGFydFNpemUpLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoYXJ0ID0gKHJlcykgPT4ge1xyXG4gICAgLypcclxuICAgICAgUmVkcmF3cyB0aGUgZ3JhcGggd2l0aCB0aGUgaW5jb21pbmcgZGF0YS5cclxuICAgICAgXCJyZXNcIiBzaG91bGQgYmUgQXBvbGxvJ3MgXCJyZXNwb25zZS5lbnRpdGllc0RhdGFcIi5cclxuICAgICAgV2hlbiByZXMgaXMgcGFzc2VkIGFzIG51bGwsIHRoZSBjaGFydCBpcyByZW5kZXJlZCB3aXRoIHRoZSBwcmV2aW91cyBkYXRhLlxyXG4gICAgKi9cclxuICAgIGxldCByZXNwb25zZSA9IHJlcztcclxuICAgIGlmIChyZXMgPT09IG51bGwpIHtcclxuICAgICAgcmVzcG9uc2UgPSB0aGlzLmNoYXJ0RGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gcmVzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIHJlc3BvbnNlXHJcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5jaGFydERhdGEuZmlsdGVyKChlbCkgPT4gIXRoaXMuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmRyYXcpIHtcclxuICAgICAgdGhpcy51cGRhdGUodGhpcy5zbWFydFNsaWNlKHJlc3BvbnNlKSk7IC8vIGNvbXBvbmVudCBzZWxmLXVwZGF0ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xyXG4gICAgICB0aGlzLm91dHB1dC5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlc3BvbnNlKTtcclxuICAgICAgdGhpcy5vdXRwdXQuc21hbGxWaWV3LmRhdGEgPSB0aGlzLnNtYXJ0U2xpY2UocmVzcG9uc2UsIHRoaXMub3B0aW9ucy5zbWFsbENoYXJ0U2l6ZSk7XHJcbiAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc21hcnRTbGljZSA9IChkLCBsZW5ndGg/KSA9PiB7XHJcbiAgICBjb25zdCBsID0gbGVuZ3RoIHx8IHRoaXMub3B0aW9ucy5saW1pdDtcclxuICAgIGlmIChsICYmIGwgPCBkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZC5zbGljZSgwLCBsKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnViYmxlQ2xpY2sgPSAocGF5bG9hZCkgPT4ge1xyXG4gICAgLypcclxuICAgICAgVG9nZ2xlcyB0aGUgc2VsZWN0aW9uIG9mIHRoZSBjbGlja2VkIGJ1YmJsZS5cclxuICAgICovXHJcbiAgICBjb25zdCBpZCA9IHBheWxvYWQ7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UodGhpcy5zZWxlY3RlZC5pbmRleE9mKGlkKSwgMSk7IC8vIHJlbW92ZSBzZWxlY3Rpb25cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChpZCk7IC8vIGFkZCBzZWxlY3Rpb25cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19