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
        return {
            ...commonParams,
            anchorData: { href: '/placeholder/' },
            data: this.smartSlice(data),
            smallView: {
                ...commonParams,
                data: this.smartSlice(data, smallChartSize),
            },
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLWNoYXJ0LmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2J1YmJsZS1jaGFydC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtJQUEvQzs7UUFDUyxjQUFTLEdBQVEsRUFBRSxDQUFBLENBQUMsK0JBQStCO1FBRW5ELFNBQUksR0FBUSxJQUFJLENBQUMsQ0FBQyxxREFBcUQ7UUFFdkUsYUFBUSxHQUFhLEVBQUUsQ0FBQSxDQUFDLDJCQUEyQjtRQUVuRCxZQUFPLEdBQVUsRUFBRSxDQUFBLENBQUMsMkRBQTJEO1FBRS9FLGVBQVUsR0FBVSxFQUFFLENBQUEsQ0FBQyxxQ0FBcUM7UUFFNUQsY0FBUyxHQUFVLEVBQUUsQ0FBQSxDQUFDLDBCQUEwQjtRQTBDdkQsZ0JBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3BCOzs7O2NBSUU7WUFDRixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNoQixRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUN0QjtZQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsZ0NBQWdDO2dCQUM3RCxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENB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S0FBSyxFQUFFO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3JCLGFBQWE7WUFDYixNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxHQUFHO1lBQ1YsVUFBVTtZQUNWLE9BQU87U0FDUixDQUFDO1FBQ0Y7Ozs7VUFJRTtRQUNGLE9BQU87WUFDTCxHQUFHLFlBQVk7WUFDZixVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3JDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUMzQixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxZQUFZO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUM7YUFDNUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQThDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBBd0J1YmJsZUNoYXJ0RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHVibGljIGNoYXJ0RGF0YTogYW55ID0gW10gLy8gZGF0YSByZW5kZXJlZCBpbnRvIHRoZSBncmFwaFxuXG4gIHB1YmxpYyBkcmF3OiBhbnkgPSBudWxsOyAvLyBleHBvc2VkIGNvbXBvbmVudCBkcmF3IGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdmlld1xuXG4gIHB1YmxpYyBzZWxlY3RlZDogc3RyaW5nW10gPSBbXSAvLyBsaXN0IG9mIHNlbGVjdGVkIGJ1YmJsZXNcblxuICBwdWJsaWMgZmlsdGVyczogYW55W10gPSBbXSAvLyBsaXN0IG9mIGFjdGl2ZSBmaWx0ZXJzIHRvIHNob3cgb25seSBzb21lIFR5cGVPZkVudGl0eShzKVxuXG4gIHB1YmxpYyBjbG9zZWRFeWVzOiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIHRoZSBhY3RpdmF0ZWQgZXllIGZpbHRlcnNcblxuICBwdWJsaWMgdGlwcHlMaXN0OiBhbnlbXSA9IFtdIC8vIGxpc3Qgb2YgdGlwcHkgaW5zdGFuY2VzXG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XG4gICAgY29uc3QgeyBjb25maWcsIHNtYWxsQ2hhcnRTaXplIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgeyBmb250UmVuZGVyaW5nLCB0cmFuc2l0aW9uLCBzaHVmZmxlIH0gPSBjb25maWcuZ2V0KCdidWJibGUtY2hhcnQnKTtcbiAgICBjb25zdCBkb21haW4gPSBbXTsgY29uc3RcbiAgICAgIHJhbmdlID0gW107XG4gICAgY29uc3QgY29sb3JDb25maWcgPSBjb25maWcuZ2V0KCdjb25maWcta2V5cycpO1xuXG4gICAgT2JqZWN0LmtleXMoY29sb3JDb25maWcpLmZvckVhY2goKGspID0+IHtcbiAgICAgIGRvbWFpbi5wdXNoKGsucmVwbGFjZSgvLS9nLCAnICcpKTtcbiAgICAgIHJhbmdlLnB1c2goKChjb2xvckNvbmZpZ1trXSB8fCB7fSkuY29sb3IgfHwge30pLmhleCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb21tb25QYXJhbXMgPSB7XG4gICAgICBjb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIHNldERyYXc6IChkcmF3KSA9PiB7IHRoaXMuZHJhdyA9IGRyYXc7IH0sXG4gICAgICBjb2xvck1hdGNoOiB7IGRvbWFpbiwgcmFuZ2UgfSxcbiAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgc2l6ZVJhbmdlOiBbMC41LCA1MDBdLFxuICAgICAgZm9udFJlbmRlcmluZyxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIHRyYW5zaXRpb24sXG4gICAgICBzaHVmZmxlLFxuICAgIH07XG4gICAgLypcbiAgICBUd28gZGF0YSBzdHJlYW1zIGFyZSBvdXB1dHRlZC5cbiAgICBUaGUgZGVmYXVsdCBzdHJlYW0gaXMgZm9yIHRoZSBub3JtYWwgdmlzdWFsaXphdGlvbixcbiAgICBcInNtYWxsVmlld1wiIGlzIHVzZWQgZm9yIGEgY29tcHJlc3NlZCB2aWV3IG9mIHRoZSBzYW1lIGRhdGEuXG4gICAgKi9cbiAgICByZXR1cm4ge1xuICAgICAgLi4uY29tbW9uUGFyYW1zLFxuICAgICAgYW5jaG9yRGF0YTogeyBocmVmOiAnL3BsYWNlaG9sZGVyLycgfSxcbiAgICAgIGRhdGE6IHRoaXMuc21hcnRTbGljZShkYXRhKSxcbiAgICAgIHNtYWxsVmlldzoge1xuICAgICAgICAuLi5jb21tb25QYXJhbXMsXG4gICAgICAgIGRhdGE6IHRoaXMuc21hcnRTbGljZShkYXRhLCBzbWFsbENoYXJ0U2l6ZSksXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVDaGFydCA9IChyZXMpID0+IHtcbiAgICAvKlxuICAgICAgUmVkcmF3cyB0aGUgZ3JhcGggd2l0aCB0aGUgaW5jb21pbmcgZGF0YS5cbiAgICAgIFwicmVzXCIgc2hvdWxkIGJlIEFwb2xsbydzIFwicmVzcG9uc2UuZW50aXRpZXNEYXRhXCIuXG4gICAgICBXaGVuIHJlcyBpcyBwYXNzZWQgYXMgbnVsbCwgdGhlIGNoYXJ0IGlzIHJlbmRlcmVkIHdpdGggdGhlIHByZXZpb3VzIGRhdGEuXG4gICAgKi9cbiAgICBsZXQgcmVzcG9uc2UgPSByZXM7XG4gICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgcmVzcG9uc2UgPSB0aGlzLmNoYXJ0RGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFydERhdGEgPSByZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMubGVuZ3RoID4gMCkgeyAvLyBhcHBseSBmaWx0ZXJzIHRvIHRoZSByZXNwb25zZVxuICAgICAgcmVzcG9uc2UgPSB0aGlzLmNoYXJ0RGF0YS5maWx0ZXIoKGVsKSA9PiAhdGhpcy5maWx0ZXJzLmluY2x1ZGVzKGVsLmVudGl0eS50eXBlT2ZFbnRpdHkucmVwbGFjZSgvIC9nLCAnLScpKSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5kcmF3KSB7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLnNtYXJ0U2xpY2UocmVzcG9uc2UpKTsgLy8gY29tcG9uZW50IHNlbGYtdXBkYXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMub3V0cHV0LmRhdGEgPSB0aGlzLnNtYXJ0U2xpY2UocmVzcG9uc2UpO1xuICAgICAgdGhpcy5vdXRwdXQuc21hbGxWaWV3LmRhdGEgPSB0aGlzLnNtYXJ0U2xpY2UocmVzcG9uc2UsIHRoaXMub3B0aW9ucy5zbWFsbENoYXJ0U2l6ZSk7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gIH1cblxuICBzbWFydFNsaWNlID0gKGQsIGxlbmd0aD8pID0+IHtcbiAgICBjb25zdCBsID0gbGVuZ3RoIHx8IHRoaXMub3B0aW9ucy5saW1pdDtcbiAgICBpZiAobCAmJiBsIDwgZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkLnNsaWNlKDAsIGwpO1xuICAgIH1cbiAgICByZXR1cm4gZDtcbiAgfVxuXG4gIGhhbmRsZUJ1YmJsZUNsaWNrID0gKHBheWxvYWQpID0+IHtcbiAgICAvKlxuICAgICAgVG9nZ2xlcyB0aGUgc2VsZWN0aW9uIG9mIHRoZSBjbGlja2VkIGJ1YmJsZS5cbiAgICAqL1xuICAgIGNvbnN0IGlkID0gcGF5bG9hZDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihpZCksIDEpOyAvLyByZW1vdmUgc2VsZWN0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChpZCk7IC8vIGFkZCBzZWxlY3Rpb25cbiAgICB9XG4gIH1cbn1cbiJdfQ==