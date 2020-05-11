/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBQS9DOztRQUNTLGNBQVMsR0FBUSxFQUFFLENBQUEsQ0FBQywrQkFBK0I7O1FBRW5ELFNBQUksR0FBUSxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7O1FBRXZFLGFBQVEsR0FBYSxFQUFFLENBQUEsQ0FBQywyQkFBMkI7O1FBRW5ELFlBQU8sR0FBVSxFQUFFLENBQUEsQ0FBQywyREFBMkQ7O1FBRS9FLGVBQVUsR0FBVSxFQUFFLENBQUEsQ0FBQyxxQ0FBcUM7O1FBRTVELGNBQVMsR0FBVSxFQUFFLENBQUEsQ0FBQywwQkFBMEI7UUEwQ3ZELGdCQUFXOzs7O1FBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7Ozs7OztnQkFNaEIsUUFBUSxHQUFHLEdBQUc7WUFDbEIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNoQixRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUN0QjtZQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsZ0NBQWdDO2dCQUM3RCxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVB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R0FBRyxDQUFDO1lBQ3JCLGFBQWE7WUFDYixNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxHQUFHO1lBQ1YsVUFBVTtZQUNWLE9BQU87U0FDUjtRQUNEOzs7O1VBSUU7UUFDRix5QkFDSyxZQUFZLElBQ2YsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxFQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDM0IsU0FBUyxvQkFDSixZQUFZLElBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxPQUU3QztJQUNKLENBQUM7Q0E4Q0Y7OztJQWhHQyxvQ0FBMEI7O0lBRTFCLCtCQUF3Qjs7SUFFeEIsbUNBQThCOztJQUU5QixrQ0FBMEI7O0lBRTFCLHFDQUE2Qjs7SUFFN0Isb0NBQTRCOztJQTBDNUIsc0NBdUJDOztJQUVELHFDQU1DOztJQUVELDRDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnREUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwdWJsaWMgY2hhcnREYXRhOiBhbnkgPSBbXSAvLyBkYXRhIHJlbmRlcmVkIGludG8gdGhlIGdyYXBoXG5cbiAgcHVibGljIGRyYXc6IGFueSA9IG51bGw7IC8vIGV4cG9zZWQgY29tcG9uZW50IGRyYXcgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB2aWV3XG5cbiAgcHVibGljIHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdIC8vIGxpc3Qgb2Ygc2VsZWN0ZWQgYnViYmxlc1xuXG4gIHB1YmxpYyBmaWx0ZXJzOiBhbnlbXSA9IFtdIC8vIGxpc3Qgb2YgYWN0aXZlIGZpbHRlcnMgdG8gc2hvdyBvbmx5IHNvbWUgVHlwZU9mRW50aXR5KHMpXG5cbiAgcHVibGljIGNsb3NlZEV5ZXM6IGFueVtdID0gW10gLy8gYXJyYXkgb2YgdGhlIGFjdGl2YXRlZCBleWUgZmlsdGVyc1xuXG4gIHB1YmxpYyB0aXBweUxpc3Q6IGFueVtdID0gW10gLy8gbGlzdCBvZiB0aXBweSBpbnN0YW5jZXNcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgc21hbGxDaGFydFNpemUgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCB7IGZvbnRSZW5kZXJpbmcsIHRyYW5zaXRpb24sIHNodWZmbGUgfSA9IGNvbmZpZy5nZXQoJ2J1YmJsZS1jaGFydCcpO1xuICAgIGNvbnN0IGRvbWFpbiA9IFtdOyBjb25zdFxuICAgICAgcmFuZ2UgPSBbXTtcbiAgICBjb25zdCBjb2xvckNvbmZpZyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJyk7XG5cbiAgICBPYmplY3Qua2V5cyhjb2xvckNvbmZpZykuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgZG9tYWluLnB1c2goay5yZXBsYWNlKC8tL2csICcgJykpO1xuICAgICAgcmFuZ2UucHVzaCgoKGNvbG9yQ29uZmlnW2tdIHx8IHt9KS5jb2xvciB8fCB7fSkuaGV4KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbW1vblBhcmFtcyA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlQ2hhcnRDb250YWluZXInLFxuICAgICAgc2V0RHJhdzogKGRyYXcpID0+IHsgdGhpcy5kcmF3ID0gZHJhdzsgfSxcbiAgICAgIGNvbG9yTWF0Y2g6IHsgZG9tYWluLCByYW5nZSB9LFxuICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICBzaXplUmFuZ2U6IFswLjUsIDUwMF0sXG4gICAgICBmb250UmVuZGVyaW5nLFxuICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICB3aWR0aDogNTAwLFxuICAgICAgdHJhbnNpdGlvbixcbiAgICAgIHNodWZmbGUsXG4gICAgfTtcbiAgICAvKlxuICAgIFR3byBkYXRhIHN0cmVhbXMgYXJlIG91cHV0dGVkLlxuICAgIFRoZSBkZWZhdWx0IHN0cmVhbSBpcyBmb3IgdGhlIG5vcm1hbCB2aXN1YWxpemF0aW9uLFxuICAgIFwic21hbGxWaWV3XCIgaXMgdXNlZCBmb3IgYSBjb21wcmVzc2VkIHZpZXcgb2YgdGhlIHNhbWUgZGF0YS5cbiAgICAqL1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jb21tb25QYXJhbXMsXG4gICAgICBhbmNob3JEYXRhOiB7IGhyZWY6ICcvcGxhY2Vob2xkZXIvJyB9LFxuICAgICAgZGF0YTogdGhpcy5zbWFydFNsaWNlKGRhdGEpLFxuICAgICAgc21hbGxWaWV3OiB7XG4gICAgICAgIC4uLmNvbW1vblBhcmFtcyxcbiAgICAgICAgZGF0YTogdGhpcy5zbWFydFNsaWNlKGRhdGEsIHNtYWxsQ2hhcnRTaXplKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUNoYXJ0ID0gKHJlcykgPT4ge1xuICAgIC8qXG4gICAgICBSZWRyYXdzIHRoZSBncmFwaCB3aXRoIHRoZSBpbmNvbWluZyBkYXRhLlxuICAgICAgXCJyZXNcIiBzaG91bGQgYmUgQXBvbGxvJ3MgXCJyZXNwb25zZS5lbnRpdGllc0RhdGFcIi5cbiAgICAgIFdoZW4gcmVzIGlzIHBhc3NlZCBhcyBudWxsLCB0aGUgY2hhcnQgaXMgcmVuZGVyZWQgd2l0aCB0aGUgcHJldmlvdXMgZGF0YS5cbiAgICAqL1xuICAgIGxldCByZXNwb25zZSA9IHJlcztcbiAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICByZXNwb25zZSA9IHRoaXMuY2hhcnREYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXJ0RGF0YSA9IHJlcztcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsdGVycy5sZW5ndGggPiAwKSB7IC8vIGFwcGx5IGZpbHRlcnMgdG8gdGhlIHJlc3BvbnNlXG4gICAgICByZXNwb25zZSA9IHRoaXMuY2hhcnREYXRhLmZpbHRlcigoZWwpID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRyYXcpIHtcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMuc21hcnRTbGljZShyZXNwb25zZSkpOyAvLyBjb21wb25lbnQgc2VsZi11cGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgdGhpcy5vdXRwdXQuZGF0YSA9IHRoaXMuc21hcnRTbGljZShyZXNwb25zZSk7XG4gICAgICB0aGlzLm91dHB1dC5zbWFsbFZpZXcuZGF0YSA9IHRoaXMuc21hcnRTbGljZShyZXNwb25zZSwgdGhpcy5vcHRpb25zLnNtYWxsQ2hhcnRTaXplKTtcbiAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgfVxuXG4gIHNtYXJ0U2xpY2UgPSAoZCwgbGVuZ3RoPykgPT4ge1xuICAgIGNvbnN0IGwgPSBsZW5ndGggfHwgdGhpcy5vcHRpb25zLmxpbWl0O1xuICAgIGlmIChsICYmIGwgPCBkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGQuc2xpY2UoMCwgbCk7XG4gICAgfVxuICAgIHJldHVybiBkO1xuICB9XG5cbiAgaGFuZGxlQnViYmxlQ2xpY2sgPSAocGF5bG9hZCkgPT4ge1xuICAgIC8qXG4gICAgICBUb2dnbGVzIHRoZSBzZWxlY3Rpb24gb2YgdGhlIGNsaWNrZWQgYnViYmxlLlxuICAgICovXG4gICAgY29uc3QgaWQgPSBwYXlsb2FkO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGlkKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UodGhpcy5zZWxlY3RlZC5pbmRleE9mKGlkKSwgMSk7IC8vIHJlbW92ZSBzZWxlY3Rpb25cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKGlkKTsgLy8gYWRkIHNlbGVjdGlvblxuICAgIH1cbiAgfVxufVxuIl19