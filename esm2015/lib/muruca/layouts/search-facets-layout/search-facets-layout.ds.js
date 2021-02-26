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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvc2VhcmNoLWZhY2V0cy1sYXlvdXQvc2VhcmNoLWZhY2V0cy1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHckQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjtJQUExRDs7UUFHVSxhQUFRLEdBRVosRUFBRSxDQUFDO0lBeURULENBQUM7SUFuREMsTUFBTSxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFFdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1Isc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDbEQsQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUM7aUJBQ2hCLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO2lCQUN4QixPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDakIsU0FBUztnQkFDVCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVELGdCQUFnQixDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMvQiw4QkFBOEI7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUMzQyxlQUFlO2dCQUNmLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsUUFBUTtRQUMzQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGVBQWUsQ0FBQyxFQUFVLEVBQUUsT0FBTztRQUNqQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxNQUFNLGlDQUNKLEVBQUUsQ0FBQyxLQUFLLEdBQ1IsT0FBTyxFQUNWLENBQUM7UUFDSCxtQkFBbUI7UUFDbkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsRUFBVTtRQUNuQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBNclNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFjZXRzTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IE1yU2VhcmNoU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBpbnB1dHNEUzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH0gPSB7fTtcclxuXHJcbiAgcHVibGljIHNlYXJjaENvbmZpZztcclxuXHJcbiAgcHVibGljIGZhY2V0cztcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuc2VhcmNoU2VydmljZSA9IHBheWxvYWQuc2VhcmNoU2VydmljZTtcclxuICAgIHRoaXMuc2VhcmNoQ29uZmlnID0gdGhpcy5zZWFyY2hTZXJ2aWNlLmdldENvbmZpZygpO1xyXG4gICAgdGhpcy5mYWNldHMgPSB0aGlzLnNlYXJjaENvbmZpZy5mYWNldHM7XHJcblxyXG4gICAgdGhpcy5pbml0SW5wdXRzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0SW5wdXRzKCkge1xyXG4gICAgLy8gc2V0IGNvbXBvbmVudHMgZGF0YVxyXG4gICAgdGhpcy5mYWNldHMuc2VjdGlvbnMuZm9yRWFjaCgoeyBoZWFkZXIsIGlucHV0cyB9KSA9PiB7XHJcbiAgICAgIFtoZWFkZXIsIC4uLmlucHV0c11cclxuICAgICAgICAuZmlsdGVyKChpbnB1dCkgPT4gaW5wdXQpXHJcbiAgICAgICAgLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAvLyBzZXQgaWRcclxuICAgICAgICAgIGNvbnN0IHdpZGdldERhdGFTb3VyY2UgPSB0aGlzLmdldFdpZGdldERhdGFTb3VyY2UoaW5wdXQuaWQpO1xyXG4gICAgICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlucHV0LmlkO1xyXG4gICAgICAgICAgLy8gY2FjaGluZyBEUyBmb3IgbmV4dCB1cGRhdGVzXHJcbiAgICAgICAgICB0aGlzLmlucHV0c0RTW2lucHV0LmlkXSA9IHdpZGdldERhdGFTb3VyY2U7XHJcbiAgICAgICAgICAvLyBmaXJzdCB1cGRhdGVcclxuICAgICAgICAgIHdpZGdldERhdGFTb3VyY2UudXBkYXRlKGlucHV0LmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dFZhbHVlKGlkLCBuZXdWYWx1ZSkge1xyXG4gICAgY29uc3QgZHMgPSB0aGlzLmlucHV0c0RTW2lkXTtcclxuICAgIGRzLnNldFZhbHVlKG5ld1ZhbHVlLCBkcy52YWx1ZSAhPT0gbmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXREYXRhKGlkOiBzdHJpbmcsIG5ld0RhdGEpIHtcclxuICAgIGNvbnN0IGRzID0gdGhpcy5pbnB1dHNEU1tpZF07XHJcbiAgICBkcy51cGRhdGUoe1xyXG4gICAgICAuLi5kcy5pbnB1dCxcclxuICAgICAgLi4ubmV3RGF0YVxyXG4gICAgfSk7XHJcbiAgICAvLyByZWZyZXNoIHNlbGVjdGVkXHJcbiAgICBkcy5zZXRWYWx1ZShkcy52YWx1ZSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjbGVhcklucHV0KGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRzID0gdGhpcy5pbnB1dHNEU1tpZF07XHJcbiAgICBkcy5jbGVhcigpO1xyXG4gICAgZHMuc2V0VmFsdWUoZHMudmFsdWUsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJJbnB1dHMoKSB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmlucHV0c0RTKS5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICB0aGlzLmNsZWFySW5wdXQoaWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==