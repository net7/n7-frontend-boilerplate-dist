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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUEvQzs7UUFDUyxjQUFTLEdBQVEsRUFBRSxDQUFBLENBQUMsK0JBQStCOztRQUVuRCxTQUFJLEdBQVEsSUFBSSxDQUFDLENBQUMscURBQXFEOztRQUV2RSxhQUFRLEdBQWEsRUFBRSxDQUFBLENBQUMsMkJBQTJCOztRQUVuRCxZQUFPLEdBQVUsRUFBRSxDQUFBLENBQUMsMkRBQTJEOztRQUUvRSxlQUFVLEdBQVUsRUFBRSxDQUFBLENBQUMscUNBQXFDOztRQUU1RCxjQUFTLEdBQVUsRUFBRSxDQUFBLENBQUMsMEJBQTBCO1FBMEN2RCxnQkFBVzs7OztRQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7Ozs7Ozs7Z0JBTWhCLFFBQVEsR0FBRyxHQUFHO1lBQ2xCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDaEIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7YUFDdEI7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLGdDQUFnQztnQkFDN0QsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztnQkFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxF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LEdBQUcsQ0FBQztZQUNyQixhQUFhO1lBQ2IsTUFBTSxFQUFFLEdBQUc7WUFDWCxLQUFLLEVBQUUsR0FBRztZQUNWLFVBQVU7WUFDVixPQUFPO1NBQ1I7UUFDRDs7OztVQUlFO1FBQ0YseUJBQ0ssWUFBWSxJQUNmLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsRUFDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQzNCLFNBQVMsb0JBQ0osWUFBWSxJQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsT0FFN0M7SUFDSixDQUFDO0NBOENGOzs7SUFoR0Msb0NBQTBCOztJQUUxQiwrQkFBd0I7O0lBRXhCLG1DQUE4Qjs7SUFFOUIsa0NBQTBCOztJQUUxQixxQ0FBNkI7O0lBRTdCLG9DQUE0Qjs7SUEwQzVCLHNDQXVCQzs7SUFFRCxxQ0FNQzs7SUFFRCw0Q0FVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGNoYXJ0RGF0YTogYW55ID0gW10gLy8gZGF0YSByZW5kZXJlZCBpbnRvIHRoZSBncmFwaFxuXG4gIHB1YmxpYyBkcmF3OiBhbnkgPSBudWxsOyAvLyBleHBvc2VkIGNvbXBvbmVudCBkcmF3IGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdmlld1xuXG4gIHB1YmxpYyBzZWxlY3RlZDogc3RyaW5nW10gPSBbXSAvLyBsaXN0IG9mIHNlbGVjdGVkIGJ1YmJsZXNcblxuICBwdWJsaWMgZmlsdGVyczogYW55W10gPSBbXSAvLyBsaXN0IG9mIGFjdGl2ZSBmaWx0ZXJzIHRvIHNob3cgb25seSBzb21lIFR5cGVPZkVudGl0eShzKVxuXG4gIHB1YmxpYyBjbG9zZWRFeWVzOiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIHRoZSBhY3RpdmF0ZWQgZXllIGZpbHRlcnNcblxuICBwdWJsaWMgdGlwcHlMaXN0OiBhbnlbXSA9IFtdIC8vIGxpc3Qgb2YgdGlwcHkgaW5zdGFuY2VzXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHNtYWxsQ2hhcnRTaXplIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyBmb250UmVuZGVyaW5nLCB0cmFuc2l0aW9uLCBzaHVmZmxlIH0gPSBjb25maWcuZ2V0KCdidWJibGUtY2hhcnQnKTtcbiAgICBjb25zdCBkb21haW4gPSBbXTsgY29uc3RcbiAgICAgIHJhbmdlID0gW107XG4gICAgY29uc3QgY29sb3JDb25maWcgPSBjb25maWcuZ2V0KCdjb25maWcta2V5cycpO1xuXG4gICAgT2JqZWN0LmtleXMoY29sb3JDb25maWcpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGRvbWFpbi5wdXNoKGsucmVwbGFjZSgvLS9nLCAnICcpKTtcbiAgICAgIHJhbmdlLnB1c2goKChjb2xvckNvbmZpZ1trXSB8fCB7fSkuY29sb3IgfHwge30pLmhleCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb21tb25QYXJhbXMgPSB7XG4gICAgICBjb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIHNldERyYXc6IChkcmF3KSA9PiB7IHRoaXMuZHJhdyA9IGRyYXc7IH0sXG4gICAgICBjb2xvck1hdGNoOiB7IGRvbWFpbiwgcmFuZ2UgfSxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgc2l6ZVJhbmdlOiBbMC41LCA1MDBdLFxuICAgICAgZm9udFJlbmRlcmluZyxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBzaHVmZmxlLFxuICAgIH07XG4gICAgLypcbiAgICBUd28gZGF0YSBzdHJlYW1zIGFyZSBvdXB1dHRlZC5cbiAgICBUaGUgZGVmYXVsdCBzdHJlYW0gaXMgZm9yIHRoZSBub3JtYWwgdmlzdWFsaXphdGlvbixcbiAgICBcInNtYWxsVmlld1wiIGlzIHVzZWQgZm9yIGEgY29tcHJlc3NlZCB2aWV3IG9mIHRoZSBzYW1lIGRhdGEuXG4gICAgKi9cbiAgICByZXR1cm4ge1xuICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgYW5jaG9yRGF0YTogeyBocmVmOiAnL3BsYWNlaG9sZGVyLycgfSxcbiAgICAgIGRhdGE6IHRoaXMuc21hcnRTbGljZShkYXRhKSxcbiAgICAgIHNtYWxsVmlldzoge1xuICAgICAgICAuLi5jb21tb25QYXJhbXMsXG4gICAgICAgIGRhdGE6IHRoaXMuc21hcnRTbGljZShkYXRhLCBzbWFsbENoYXJ0U2l6ZSksXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVDaGFydCA9IChyZXMpID0+IHtcbiAgICAvKlxuICAgICAgUmVkcmF3cyB0aGUgZ3JhcGggd2l0aCB0aGUgaW5jb21pbmcgZGF0YS5cbiAgICAgIFwicmVzXCIgc2hvdWxkIGJlIEFwb2xsbydzIFwicmVzcG9uc2UuZW50aXRpZXNEYXRhXCIuXG4gICAgICBXaGVuIHJlcyBpcyBwYXNzZWQgYXMgbnVsbCwgdGhlIGNoYXJ0IGlzIHJlbmRlcmVkIHdpdGggdGhlIHByZXZpb3VzIGRhdGEuXG4gICAgKi9cbiAgICBsZXQgcmVzcG9uc2UgPSByZXM7XG4gICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgcmVzcG9uc2UgPSB0aGlzLmNoYXJ0RGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFydERhdGEgPSByZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSByZXNwb25zZVxuICAgICAgcmVzcG9uc2UgPSB0aGlzLmNoYXJ0RGF0YS5maWx0ZXIoKGVsKSA9PiAhdGhpcy5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5kcmF3KSB7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLnNtYXJ0U2xpY2UocmVzcG9uc2UpKTsgLy8gY29tcG9uZW50IHNlbGYtdXBkYXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMub3V0cHV0LmRhdGEgPSB0aGlzLnNtYXJ0U2xpY2UocmVzcG9uc2UpO1xuICAgICAgdGhpcy5vdXRwdXQuc21hbGxWaWV3LmRhdGEgPSB0aGlzLnNtYXJ0U2xpY2UocmVzcG9uc2UsIHRoaXMub3B0aW9ucy5zbWFsbENoYXJ0U2l6ZSk7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gIH1cblxuICBzbWFydFNsaWNlID0gKGQsIGxlbmd0aD8pID0+IHtcbiAgICBjb25zdCBsID0gbGVuZ3RoIHx8IHRoaXMub3B0aW9ucy5saW1pdDtcbiAgICBpZiAobCAmJiBsIDwgZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkLnNsaWNlKDAsIGwpO1xuICAgIH1cbiAgICByZXR1cm4gZDtcbiAgfVxuXG4gIGhhbmRsZUJ1YmJsZUNsaWNrID0gKHBheWxvYWQpID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlcyB0aGUgc2VsZWN0aW9uIG9mIHRoZSBjbGlja2VkIGJ1YmJsZS5cbiAgICAqL1xuICAgIGNvbnN0IGlkID0gcGF5bG9hZDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihpZCksIDEpOyAvLyByZW1vdmUgc2VsZWN0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChpZCk7IC8vIGFkZCBzZWxlY3Rpb25cbiAgICB9XG4gIH1cbn1cbiJdfQ==