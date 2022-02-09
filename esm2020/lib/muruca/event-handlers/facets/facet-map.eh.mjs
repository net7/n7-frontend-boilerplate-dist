import { EventHandler } from '@n7-frontend/core';
export class FacetMapEH extends EventHandler {
    listen() {
        this.outerEvents$.subscribe(({ type }) => {
            switch (type) {
                case 'mr-search-facets-layout.facetloaded':
                    // Listen for incoming marker events
                    this.dataSource.markerEvents$.subscribe((event) => {
                        switch (event.type) {
                            // trigger search facet logic
                            case 'marker.click':
                                {
                                    // detect "multiple: true | false" in config > facet > schema
                                    // and apply the correct logic.
                                    const { isMultiple } = this.dataSource.options;
                                    if (isMultiple) {
                                        this.dataSource.toggleValue(event.id);
                                    }
                                    else {
                                        const currentValue = this.dataSource.value;
                                        if (currentValue[0] === event.id) {
                                            this.dataSource.toggleValue(event.id);
                                        }
                                        else {
                                            this.dataSource.setValue([event.id]);
                                        }
                                    }
                                    // (make request and update component)
                                    this.emitOuter('change', {
                                        value: this.dataSource.getValue(),
                                        id: this.dataSource.id
                                    });
                                }
                                break;
                            default:
                                break;
                        }
                    });
                    break;
                default:
                    break;
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbWFwLmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1tYXAuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pELE1BQU0sT0FBTyxVQUFXLFNBQVEsWUFBWTtJQUtuQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDdkMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxxQ0FBcUM7b0JBQ3hDLG9DQUFvQztvQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQ2hELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTs0QkFDbEIsNkJBQTZCOzRCQUM3QixLQUFLLGNBQWM7Z0NBQUU7b0NBQ25CLDZEQUE2RDtvQ0FDN0QsK0JBQStCO29DQUMvQixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0NBQy9DLElBQUksVUFBVSxFQUFFO3dDQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztxQ0FDdkM7eUNBQU07d0NBQ0wsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7d0NBQzNDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUU7NENBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzt5Q0FDdkM7NkNBQU07NENBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5Q0FDdEM7cUNBQ0Y7b0NBQ0Qsc0NBQXNDO29DQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTt3Q0FDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO3dDQUNqQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3FDQUN2QixDQUFDLENBQUM7aUNBQ0o7Z0NBQUMsTUFBTTs0QkFDUjtnQ0FDRSxNQUFNO3lCQUNUO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEZhY2V0TWFwRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LW1hcC5kcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRNYXBFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgZGF0YVNvdXJjZTogRmFjZXRNYXBEUztcclxuXHJcbiAgaXNNdWx0aXBsZTogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuZmFjZXRsb2FkZWQnOlxyXG4gICAgICAgICAgLy8gTGlzdGVuIGZvciBpbmNvbWluZyBtYXJrZXIgZXZlbnRzXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFya2VyRXZlbnRzJC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICAgIC8vIHRyaWdnZXIgc2VhcmNoIGZhY2V0IGxvZ2ljXHJcbiAgICAgICAgICAgICAgY2FzZSAnbWFya2VyLmNsaWNrJzoge1xyXG4gICAgICAgICAgICAgICAgLy8gZGV0ZWN0IFwibXVsdGlwbGU6IHRydWUgfCBmYWxzZVwiIGluIGNvbmZpZyA+IGZhY2V0ID4gc2NoZW1hXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgYXBwbHkgdGhlIGNvcnJlY3QgbG9naWMuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzTXVsdGlwbGUgfSA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVZhbHVlKGV2ZW50LmlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZGF0YVNvdXJjZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZVswXSA9PT0gZXZlbnQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlVmFsdWUoZXZlbnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRWYWx1ZShbZXZlbnQuaWRdKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gKG1ha2UgcmVxdWVzdCBhbmQgdXBkYXRlIGNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0VmFsdWUoKSxcclxuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5pZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19