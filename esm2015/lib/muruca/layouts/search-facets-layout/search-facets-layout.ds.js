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
            [header, ...inputs].forEach((input) => {
                // set id
                const widgetDataSource = this.getWidgetDataSource(input.id);
                widgetDataSource.id = input.id;
                // caching DS for next updates
                this.inputsDS[input.id] = widgetDataSource;
                // first update
                widgetDataSource.update(input.data);
            });
        });
    }
    updateInputValue(id, newValue) {
        const ds = this.inputsDS[id];
        ds.setValue(newValue, ds.value !== newValue);
    }
    updateInputData(id, newData) {
        const ds = this.inputsDS[id];
        ds.update(Object.assign(Object.assign({}, ds.input), newData));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHckQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjtJQUExRDs7UUFHVSxhQUFRLEdBRVosRUFBRSxDQUFDO0lBdURULENBQUM7SUFqREMsTUFBTSxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1Isc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDbEQsQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDcEMsU0FBUztnQkFDVCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVELGdCQUFnQixDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMvQiw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUMzQyxlQUFlO2dCQUNmLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsUUFBUTtRQUMzQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGVBQWUsQ0FBQyxFQUFVLEVBQUUsT0FBTztRQUNqQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLGlDQUNKLEVBQUUsQ0FBQyxLQUFLLEdBQ1IsT0FBTyxFQUNWLENBQUM7UUFDSCxtQkFBbUI7UUFDbkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsRUFBVTtRQUNuQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgTXJTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFjZXRzTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBzZWFyY2hTZXJ2aWNlOiBNclNlYXJjaFNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBpbnB1dHNEUzoge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfSA9IHt9O1xuXG4gIHB1YmxpYyBzZWFyY2hDb25maWc7XG5cbiAgcHVibGljIGZhY2V0cztcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IHBheWxvYWQuc2VhcmNoU2VydmljZTtcbiAgICB0aGlzLnNlYXJjaENvbmZpZyA9IHRoaXMuc2VhcmNoU2VydmljZS5nZXRDb25maWcoKTtcbiAgICB0aGlzLmZhY2V0cyA9IHRoaXMuc2VhcmNoQ29uZmlnLmZhY2V0cztcblxuICAgIHRoaXMuaW5pdElucHV0cygpO1xuICB9XG5cbiAgaW5pdElucHV0cygpIHtcbiAgICAvLyBzZXQgY29tcG9uZW50cyBkYXRhXG4gICAgdGhpcy5mYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XG4gICAgICBbaGVhZGVyLCAuLi5pbnB1dHNdLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIC8vIHNldCBpZFxuICAgICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlucHV0LmlkKTtcbiAgICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlucHV0LmlkO1xuICAgICAgICAvLyBjYWNoaW5nIERTIGZvciBuZXh0IHVwZGF0ZXNcbiAgICAgICAgdGhpcy5pbnB1dHNEU1tpbnB1dC5pZF0gPSB3aWRnZXREYXRhU291cmNlO1xuICAgICAgICAvLyBmaXJzdCB1cGRhdGVcbiAgICAgICAgd2lkZ2V0RGF0YVNvdXJjZS51cGRhdGUoaW5wdXQuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0VmFsdWUoaWQsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3QgZHMgPSB0aGlzLmlucHV0c0RTW2lkXTtcbiAgICBkcy5zZXRWYWx1ZShuZXdWYWx1ZSwgZHMudmFsdWUgIT09IG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0RGF0YShpZDogc3RyaW5nLCBuZXdEYXRhKSB7XG4gICAgY29uc3QgZHMgPSB0aGlzLmlucHV0c0RTW2lkXTtcbiAgICBkcy51cGRhdGUoe1xuICAgICAgLi4uZHMuaW5wdXQsXG4gICAgICAuLi5uZXdEYXRhXG4gICAgfSk7XG4gICAgLy8gcmVmcmVzaCBzZWxlY3RlZFxuICAgIGRzLnNldFZhbHVlKGRzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIGNsZWFySW5wdXQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGRzID0gdGhpcy5pbnB1dHNEU1tpZF07XG4gICAgZHMuY2xlYXIoKTtcbiAgICBkcy5zZXRWYWx1ZShkcy52YWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICBjbGVhcklucHV0cygpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmlucHV0c0RTKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgdGhpcy5jbGVhcklucHV0KGlkKTtcbiAgICB9KTtcbiAgfVxufVxuIl19