import { DataSource } from '@n7-frontend/core';
export class AwBubbleChartDS extends DataSource {
    constructor() {
        super(...arguments);
        this.chartData = []; // data rendered into the graph
        this.draw = null; // exposed component draw function to update the view
        this.selected = []; // list of selected bubbles
        this.filters = []; // list of active filters to show only some TypeOfEntity(s)
        this.closedEyes = []; // array of the activated eye filters
        this.tippyList = []; // list of tippy instances
        this.updateChart = (res) => {
            /*
              Redraws the graph with the incoming data.
              "res" should be Apollo's "response.entitiesData".
              When res is passed as null, the chart is rendered with the previous data.
            */
            let response = res;
            if (res === null) {
                response = this.chartData;
            }
            else {
                this.chartData = res;
            }
            if (this.filters.length > 0) { // apply filters to the response
                response = this.chartData.filter((el) => !this.filters.includes(el.entity.typeOfEntity.replace(/ /g, '-')));
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
        };
        this.smartSlice = (d, length) => {
            const l = length || this.options.limit;
            if (l && l < d.length) {
                return d.slice(0, l);
            }
            return d;
        };
        this.handleBubbleClick = (payload) => {
            /*
              Toggles the selection of the clicked bubble.
            */
            const id = payload;
            if (this.selected.includes(id)) {
                this.selected.splice(this.selected.indexOf(id), 1); // remove selection
            }
            else {
                this.selected.push(id); // add selection
            }
        };
    }
    transform(data) {
        const { config, smallChartSize } = this.options;
        const { fontRendering, transition, shuffle } = config.get('bubble-chart');
        const domain = [];
        const range = [];
        const colorConfig = config.get('config-keys');
        Object.keys(colorConfig).forEach((k) => {
            domain.push(k.replace(/-/g, ' '));
            range.push(((colorConfig[k] || {}).color || {}).hex);
        });
        const commonParams = {
            containerId: 'bubbleChartContainer',
            setDraw: (draw) => { this.draw = draw; },
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
        return Object.assign(Object.assign({}, commonParams), { anchorData: { href: '/placeholder/' }, data: this.smartSlice(data), smallView: Object.assign(Object.assign({}, commonParams), { data: this.smartSlice(data, smallChartSize) }) });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBQ1MsY0FBUyxHQUFRLEVBQUUsQ0FBQSxDQUFDLCtCQUErQjtRQUVuRCxTQUFJLEdBQVEsSUFBSSxDQUFDLENBQUMscURBQXFEO1FBRXZFLGFBQVEsR0FBYSxFQUFFLENBQUEsQ0FBQywyQkFBMkI7UUFFbkQsWUFBTyxHQUFVLEVBQUUsQ0FBQSxDQUFDLDJEQUEyRDtRQUUvRSxlQUFVLEdBQVUsRUFBRSxDQUFBLENBQUMscUNBQXFDO1FBRTVELGNBQVMsR0FBVSxFQUFFLENBQUEsQ0FBQywwQkFBMEI7UUEwQ3ZELGdCQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQjs7OztjQUlFO1lBQ0YsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDaEIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7YUFDdEI7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLGdDQUFnQztnQkFDN0QsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVB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LEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNyQixhQUFhO1lBQ2IsTUFBTSxFQUFFLEdBQUc7WUFDWCxLQUFLLEVBQUUsR0FBRztZQUNWLFVBQVU7WUFDVixPQUFPO1NBQ1IsQ0FBQztRQUNGOzs7O1VBSUU7UUFDRix1Q0FDSyxZQUFZLEtBQ2YsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxFQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDM0IsU0FBUyxrQ0FDSixZQUFZLEtBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxPQUU3QztJQUNKLENBQUM7Q0E4Q0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQXdCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHB1YmxpYyBjaGFydERhdGE6IGFueSA9IFtdIC8vIGRhdGEgcmVuZGVyZWQgaW50byB0aGUgZ3JhcGhcblxuICBwdWJsaWMgZHJhdzogYW55ID0gbnVsbDsgLy8gZXhwb3NlZCBjb21wb25lbnQgZHJhdyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHZpZXdcblxuICBwdWJsaWMgc2VsZWN0ZWQ6IHN0cmluZ1tdID0gW10gLy8gbGlzdCBvZiBzZWxlY3RlZCBidWJibGVzXG5cbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW10gLy8gbGlzdCBvZiBhY3RpdmUgZmlsdGVycyB0byBzaG93IG9ubHkgc29tZSBUeXBlT2ZFbnRpdHkocylcblxuICBwdWJsaWMgY2xvc2VkRXllczogYW55W10gPSBbXSAvLyBhcnJheSBvZiB0aGUgYWN0aXZhdGVkIGV5ZSBmaWx0ZXJzXG5cbiAgcHVibGljIHRpcHB5TGlzdDogYW55W10gPSBbXSAvLyBsaXN0IG9mIHRpcHB5IGluc3RhbmNlc1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBzbWFsbENoYXJ0U2l6ZSB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHsgZm9udFJlbmRlcmluZywgdHJhbnNpdGlvbiwgc2h1ZmZsZSB9ID0gY29uZmlnLmdldCgnYnViYmxlLWNoYXJ0Jyk7XG4gICAgY29uc3QgZG9tYWluID0gW107IGNvbnN0XG4gICAgICByYW5nZSA9IFtdO1xuICAgIGNvbnN0IGNvbG9yQ29uZmlnID0gY29uZmlnLmdldCgnY29uZmlnLWtleXMnKTtcblxuICAgIE9iamVjdC5rZXlzKGNvbG9yQ29uZmlnKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICBkb21haW4ucHVzaChrLnJlcGxhY2UoLy0vZywgJyAnKSk7XG4gICAgICByYW5nZS5wdXNoKCgoY29sb3JDb25maWdba10gfHwge30pLmNvbG9yIHx8IHt9KS5oZXgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29tbW9uUGFyYW1zID0ge1xuICAgICAgY29udGFpbmVySWQ6ICdidWJibGVDaGFydENvbnRhaW5lcicsXG4gICAgICBzZXREcmF3OiAoZHJhdykgPT4geyB0aGlzLmRyYXcgPSBkcmF3OyB9LFxuICAgICAgY29sb3JNYXRjaDogeyBkb21haW4sIHJhbmdlIH0sXG4gICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCxcbiAgICAgIHNpemVSYW5nZTogWzAuNSwgNTAwXSxcbiAgICAgIGZvbnRSZW5kZXJpbmcsXG4gICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIHdpZHRoOiA1MDAsXG4gICAgICB0cmFuc2l0aW9uLFxuICAgICAgc2h1ZmZsZSxcbiAgICB9O1xuICAgIC8qXG4gICAgVHdvIGRhdGEgc3RyZWFtcyBhcmUgb3VwdXR0ZWQuXG4gICAgVGhlIGRlZmF1bHQgc3RyZWFtIGlzIGZvciB0aGUgbm9ybWFsIHZpc3VhbGl6YXRpb24sXG4gICAgXCJzbWFsbFZpZXdcIiBpcyB1c2VkIGZvciBhIGNvbXByZXNzZWQgdmlldyBvZiB0aGUgc2FtZSBkYXRhLlxuICAgICovXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNvbW1vblBhcmFtcyxcbiAgICAgIGFuY2hvckRhdGE6IHsgaHJlZjogJy9wbGFjZWhvbGRlci8nIH0sXG4gICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSksXG4gICAgICBzbWFsbFZpZXc6IHtcbiAgICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgICBkYXRhOiB0aGlzLnNtYXJ0U2xpY2UoZGF0YSwgc21hbGxDaGFydFNpemUpLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlQ2hhcnQgPSAocmVzKSA9PiB7XG4gICAgLypcbiAgICAgIFJlZHJhd3MgdGhlIGdyYXBoIHdpdGggdGhlIGluY29taW5nIGRhdGEuXG4gICAgICBcInJlc1wiIHNob3VsZCBiZSBBcG9sbG8ncyBcInJlc3BvbnNlLmVudGl0aWVzRGF0YVwiLlxuICAgICAgV2hlbiByZXMgaXMgcGFzc2VkIGFzIG51bGwsIHRoZSBjaGFydCBpcyByZW5kZXJlZCB3aXRoIHRoZSBwcmV2aW91cyBkYXRhLlxuICAgICovXG4gICAgbGV0IHJlc3BvbnNlID0gcmVzO1xuICAgIGlmIChyZXMgPT09IG51bGwpIHtcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5jaGFydERhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnREYXRhID0gcmVzO1xuICAgIH1cbiAgICBpZiAodGhpcy5maWx0ZXJzLmxlbmd0aCA+IDApIHsgLy8gYXBwbHkgZmlsdGVycyB0byB0aGUgcmVzcG9uc2VcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5jaGFydERhdGEuZmlsdGVyKChlbCkgPT4gIXRoaXMuZmlsdGVycy5pbmNsdWRlcyhlbC5lbnRpdHkudHlwZU9mRW50aXR5LnJlcGxhY2UoLyAvZywgJy0nKSkpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZHJhdykge1xuICAgICAgdGhpcy51cGRhdGUodGhpcy5zbWFydFNsaWNlKHJlc3BvbnNlKSk7IC8vIGNvbXBvbmVudCBzZWxmLXVwZGF0ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm91dHB1dC5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQ7XG4gICAgICB0aGlzLm91dHB1dC5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlc3BvbnNlKTtcbiAgICAgIHRoaXMub3V0cHV0LnNtYWxsVmlldy5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlc3BvbnNlLCB0aGlzLm9wdGlvbnMuc21hbGxDaGFydFNpemUpO1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgc21hcnRTbGljZSA9IChkLCBsZW5ndGg/KSA9PiB7XG4gICAgY29uc3QgbCA9IGxlbmd0aCB8fCB0aGlzLm9wdGlvbnMubGltaXQ7XG4gICAgaWYgKGwgJiYgbCA8IGQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZC5zbGljZSgwLCBsKTtcbiAgICB9XG4gICAgcmV0dXJuIGQ7XG4gIH1cblxuICBoYW5kbGVCdWJibGVDbGljayA9IChwYXlsb2FkKSA9PiB7XG4gICAgLypcbiAgICAgIFRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBvZiB0aGUgY2xpY2tlZCBidWJibGUuXG4gICAgKi9cbiAgICBjb25zdCBpZCA9IHBheWxvYWQ7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnNwbGljZSh0aGlzLnNlbGVjdGVkLmluZGV4T2YoaWQpLCAxKTsgLy8gcmVtb3ZlIHNlbGVjdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpOyAvLyBhZGQgc2VsZWN0aW9uXG4gICAgfVxuICB9XG59XG4iXX0=