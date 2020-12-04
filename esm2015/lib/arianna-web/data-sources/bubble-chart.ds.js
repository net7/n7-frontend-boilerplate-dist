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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FyaWFubmEtd2ViL2RhdGEtc291cmNlcy9idWJibGUtY2hhcnQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxlQUFnQixTQUFRLFVBQVU7SUFBL0M7O1FBQ1MsY0FBUyxHQUFRLEVBQUUsQ0FBQSxDQUFDLCtCQUErQjtRQUVuRCxTQUFJLEdBQVEsSUFBSSxDQUFDLENBQUMscURBQXFEO1FBRXZFLGFBQVEsR0FBYSxFQUFFLENBQUEsQ0FBQywyQkFBMkI7UUFFbkQsWUFBTyxHQUFVLEVBQUUsQ0FBQSxDQUFDLDJEQUEyRDtRQUUvRSxlQUFVLEdBQVUsRUFBRSxDQUFBLENBQUMscUNBQXFDO1FBRTVELGNBQVMsR0FBVSxFQUFFLENBQUEsQ0FBQywwQkFBMEI7UUEwQ3ZELGdCQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQjs7OztjQUlFO1lBQ0YsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDaEIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7YUFDdEI7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLGdDQUFnQztnQkFDN0QsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVB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LEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNyQixhQUFhO1lBQ2IsTUFBTSxFQUFFLEdBQUc7WUFDWCxLQUFLLEVBQUUsR0FBRztZQUNWLFVBQVU7WUFDVixPQUFPO1NBQ1IsQ0FBQztRQUNGOzs7O1VBSUU7UUFDRix1Q0FDSyxZQUFZLEtBQ2YsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxFQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDM0IsU0FBUyxrQ0FDSixZQUFZLEtBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxPQUU3QztJQUNKLENBQUM7Q0E4Q0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3QnViYmxlQ2hhcnREUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyBjaGFydERhdGE6IGFueSA9IFtdIC8vIGRhdGEgcmVuZGVyZWQgaW50byB0aGUgZ3JhcGhcclxuXHJcbiAgcHVibGljIGRyYXc6IGFueSA9IG51bGw7IC8vIGV4cG9zZWQgY29tcG9uZW50IGRyYXcgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB2aWV3XHJcblxyXG4gIHB1YmxpYyBzZWxlY3RlZDogc3RyaW5nW10gPSBbXSAvLyBsaXN0IG9mIHNlbGVjdGVkIGJ1YmJsZXNcclxuXHJcbiAgcHVibGljIGZpbHRlcnM6IGFueVtdID0gW10gLy8gbGlzdCBvZiBhY3RpdmUgZmlsdGVycyB0byBzaG93IG9ubHkgc29tZSBUeXBlT2ZFbnRpdHkocylcclxuXHJcbiAgcHVibGljIGNsb3NlZEV5ZXM6IGFueVtdID0gW10gLy8gYXJyYXkgb2YgdGhlIGFjdGl2YXRlZCBleWUgZmlsdGVyc1xyXG5cclxuICBwdWJsaWMgdGlwcHlMaXN0OiBhbnlbXSA9IFtdIC8vIGxpc3Qgb2YgdGlwcHkgaW5zdGFuY2VzXHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgY29uc3QgeyBjb25maWcsIHNtYWxsQ2hhcnRTaXplIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCB7IGZvbnRSZW5kZXJpbmcsIHRyYW5zaXRpb24sIHNodWZmbGUgfSA9IGNvbmZpZy5nZXQoJ2J1YmJsZS1jaGFydCcpO1xyXG4gICAgY29uc3QgZG9tYWluID0gW107IGNvbnN0XHJcbiAgICAgIHJhbmdlID0gW107XHJcbiAgICBjb25zdCBjb2xvckNvbmZpZyA9IGNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJyk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoY29sb3JDb25maWcpLmZvckVhY2goKGspID0+IHtcclxuICAgICAgZG9tYWluLnB1c2goay5yZXBsYWNlKC8tL2csICcgJykpO1xyXG4gICAgICByYW5nZS5wdXNoKCgoY29sb3JDb25maWdba10gfHwge30pLmNvbG9yIHx8IHt9KS5oZXgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY29tbW9uUGFyYW1zID0ge1xyXG4gICAgICBjb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcclxuICAgICAgc2V0RHJhdzogKGRyYXcpID0+IHsgdGhpcy5kcmF3ID0gZHJhdzsgfSxcclxuICAgICAgY29sb3JNYXRjaDogeyBkb21haW4sIHJhbmdlIH0sXHJcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxyXG4gICAgICBzaXplUmFuZ2U6IFswLjUsIDUwMF0sXHJcbiAgICAgIGZvbnRSZW5kZXJpbmcsXHJcbiAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICB3aWR0aDogNTAwLFxyXG4gICAgICB0cmFuc2l0aW9uLFxyXG4gICAgICBzaHVmZmxlLFxyXG4gICAgfTtcclxuICAgIC8qXHJcbiAgICBUd28gZGF0YSBzdHJlYW1zIGFyZSBvdXB1dHRlZC5cclxuICAgIFRoZSBkZWZhdWx0IHN0cmVhbSBpcyBmb3IgdGhlIG5vcm1hbCB2aXN1YWxpemF0aW9uLFxyXG4gICAgXCJzbWFsbFZpZXdcIiBpcyB1c2VkIGZvciBhIGNvbXByZXNzZWQgdmlldyBvZiB0aGUgc2FtZSBkYXRhLlxyXG4gICAgKi9cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmNvbW1vblBhcmFtcyxcclxuICAgICAgYW5jaG9yRGF0YTogeyBocmVmOiAnL3BsYWNlaG9sZGVyLycgfSxcclxuICAgICAgZGF0YTogdGhpcy5zbWFydFNsaWNlKGRhdGEpLFxyXG4gICAgICBzbWFsbFZpZXc6IHtcclxuICAgICAgICAuLi5jb21tb25QYXJhbXMsXHJcbiAgICAgICAgZGF0YTogdGhpcy5zbWFydFNsaWNlKGRhdGEsIHNtYWxsQ2hhcnRTaXplKSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGFydCA9IChyZXMpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIFJlZHJhd3MgdGhlIGdyYXBoIHdpdGggdGhlIGluY29taW5nIGRhdGEuXHJcbiAgICAgIFwicmVzXCIgc2hvdWxkIGJlIEFwb2xsbydzIFwicmVzcG9uc2UuZW50aXRpZXNEYXRhXCIuXHJcbiAgICAgIFdoZW4gcmVzIGlzIHBhc3NlZCBhcyBudWxsLCB0aGUgY2hhcnQgaXMgcmVuZGVyZWQgd2l0aCB0aGUgcHJldmlvdXMgZGF0YS5cclxuICAgICovXHJcbiAgICBsZXQgcmVzcG9uc2UgPSByZXM7XHJcbiAgICBpZiAocmVzID09PSBudWxsKSB7XHJcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5jaGFydERhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoYXJ0RGF0YSA9IHJlcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSByZXNwb25zZVxyXG4gICAgICByZXNwb25zZSA9IHRoaXMuY2hhcnREYXRhLmZpbHRlcigoZWwpID0+ICF0aGlzLmZpbHRlcnMuaW5jbHVkZXMoZWwuZW50aXR5LnR5cGVPZkVudGl0eS5yZXBsYWNlKC8gL2csICctJykpKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5kcmF3KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMuc21hcnRTbGljZShyZXNwb25zZSkpOyAvLyBjb21wb25lbnQgc2VsZi11cGRhdGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcclxuICAgICAgdGhpcy5vdXRwdXQuZGF0YSA9IHRoaXMuc21hcnRTbGljZShyZXNwb25zZSk7XHJcbiAgICAgIHRoaXMub3V0cHV0LnNtYWxsVmlldy5kYXRhID0gdGhpcy5zbWFydFNsaWNlKHJlc3BvbnNlLCB0aGlzLm9wdGlvbnMuc21hbGxDaGFydFNpemUpO1xyXG4gICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNtYXJ0U2xpY2UgPSAoZCwgbGVuZ3RoPykgPT4ge1xyXG4gICAgY29uc3QgbCA9IGxlbmd0aCB8fCB0aGlzLm9wdGlvbnMubGltaXQ7XHJcbiAgICBpZiAobCAmJiBsIDwgZC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGQuc2xpY2UoMCwgbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZDtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJ1YmJsZUNsaWNrID0gKHBheWxvYWQpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIFRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBvZiB0aGUgY2xpY2tlZCBidWJibGUuXHJcbiAgICAqL1xyXG4gICAgY29uc3QgaWQgPSBwYXlsb2FkO1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihpZCksIDEpOyAvLyByZW1vdmUgc2VsZWN0aW9uXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkLnB1c2goaWQpOyAvLyBhZGQgc2VsZWN0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==