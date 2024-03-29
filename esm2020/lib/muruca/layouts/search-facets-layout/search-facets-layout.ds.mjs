import { LayoutDataSource } from '@n7-frontend/core';
export class SearchFacetsLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.inputsDS = {};
    }
    onInit(payload) {
        this.searchService = payload.searchService;
        this.searchConfig = this.searchService.getConfig();
        this.facets = this.searchConfig.facets;
        this.initInputs();
    }
    initInputs() {
        // set components data
        this.facets.sections.forEach(({ header, inputs }) => {
            [header, ...inputs]
                .filter((input) => input)
                .forEach((input) => {
                // set id
                const widgetDataSource = this.getWidgetDataSource(input.id);
                widgetDataSource.id = input.id;
                // caching DS for next updates
                this.inputsDS[input.id] = widgetDataSource;
                // first update
                if (input.data) {
                    widgetDataSource.update(input.data);
                }
            });
        });
    }
    updateInputValue(id, newValue) {
        const ds = this.inputsDS[id];
        ds.setValue(newValue, ds.value !== newValue);
    }
    updateInputData(id, newData) {
        const ds = this.inputsDS[id];
        ds.update({
            ...ds.input,
            ...newData
        });
        // refresh selected
        ds.setValue(ds.value, true);
    }
    clearInput(id) {
        const ds = this.inputsDS[id];
        ds.clear();
        ds.setValue(ds.value, true);
    }
    clearInputs() {
        Object.keys(this.inputsDS).forEach((id) => {
            this.clearInput(id);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9tdXJ1Y2EvbGF5b3V0cy9zZWFyY2gtZmFjZXRzLWxheW91dC9zZWFyY2gtZmFjZXRzLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdyRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQWdCO0lBQTFEOztRQUdVLGFBQVEsR0FFWixFQUFFLENBQUM7SUEyRFQsQ0FBQztJQXJEQyxNQUFNLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUNsRCxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQztpQkFDaEIsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUJBQ3hCLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNqQixTQUFTO2dCQUNULE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDNUQsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLDhCQUE4QjtnQkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzNDLGVBQWU7Z0JBQ2YsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO29CQUNkLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsUUFBUTtRQUMzQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGVBQWUsQ0FBQyxFQUFVLEVBQUUsT0FBTztRQUNqQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDUixHQUFHLEVBQUUsQ0FBQyxLQUFLO1lBQ1gsR0FBRyxPQUFPO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsbUJBQW1CO1FBQ25CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsVUFBVSxDQUFDLEVBQVU7UUFDbkIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhY2V0c0xheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgaW5wdXRzRFM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9ID0ge307XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hDb25maWc7XHJcblxyXG4gIHB1YmxpYyBmYWNldHM7XHJcblxyXG4gIG9uSW5pdChwYXlsb2FkKSB7XHJcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBwYXlsb2FkLnNlYXJjaFNlcnZpY2U7XHJcbiAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoU2VydmljZS5nZXRDb25maWcoKTtcclxuICAgIHRoaXMuZmFjZXRzID0gdGhpcy5zZWFyY2hDb25maWcuZmFjZXRzO1xyXG5cclxuICAgIHRoaXMuaW5pdElucHV0cygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdElucHV0cygpIHtcclxuICAgIC8vIHNldCBjb21wb25lbnRzIGRhdGFcclxuICAgIHRoaXMuZmFjZXRzLnNlY3Rpb25zLmZvckVhY2goKHsgaGVhZGVyLCBpbnB1dHMgfSkgPT4ge1xyXG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdXHJcbiAgICAgICAgLmZpbHRlcigoaW5wdXQpID0+IGlucHV0KVxyXG4gICAgICAgIC5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgLy8gc2V0IGlkXHJcbiAgICAgICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlucHV0LmlkKTtcclxuICAgICAgICAgIHdpZGdldERhdGFTb3VyY2UuaWQgPSBpbnB1dC5pZDtcclxuICAgICAgICAgIC8vIGNhY2hpbmcgRFMgZm9yIG5leHQgdXBkYXRlc1xyXG4gICAgICAgICAgdGhpcy5pbnB1dHNEU1tpbnB1dC5pZF0gPSB3aWRnZXREYXRhU291cmNlO1xyXG4gICAgICAgICAgLy8gZmlyc3QgdXBkYXRlXHJcbiAgICAgICAgICBpZiAoaW5wdXQuZGF0YSkge1xyXG4gICAgICAgICAgICB3aWRnZXREYXRhU291cmNlLnVwZGF0ZShpbnB1dC5kYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRWYWx1ZShpZCwgbmV3VmFsdWUpIHtcclxuICAgIGNvbnN0IGRzID0gdGhpcy5pbnB1dHNEU1tpZF07XHJcbiAgICBkcy5zZXRWYWx1ZShuZXdWYWx1ZSwgZHMudmFsdWUgIT09IG5ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0RGF0YShpZDogc3RyaW5nLCBuZXdEYXRhKSB7XHJcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xyXG4gICAgZHMudXBkYXRlKHtcclxuICAgICAgLi4uZHMuaW5wdXQsXHJcbiAgICAgIC4uLm5ld0RhdGFcclxuICAgIH0pO1xyXG4gICAgLy8gcmVmcmVzaCBzZWxlY3RlZFxyXG4gICAgZHMuc2V0VmFsdWUoZHMudmFsdWUsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJJbnB1dChpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkcyA9IHRoaXMuaW5wdXRzRFNbaWRdO1xyXG4gICAgZHMuY2xlYXIoKTtcclxuICAgIGRzLnNldFZhbHVlKGRzLnZhbHVlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGNsZWFySW5wdXRzKCkge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnB1dHNEUykuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgdGhpcy5jbGVhcklucHV0KGlkKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=