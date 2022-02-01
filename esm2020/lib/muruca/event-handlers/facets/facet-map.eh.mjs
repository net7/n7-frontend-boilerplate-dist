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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbWFwLmVoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2V2ZW50LWhhbmRsZXJzL2ZhY2V0cy9mYWNldC1tYXAuZWgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pELE1BQU0sT0FBTyxVQUFXLFNBQVEsWUFBWTtJQUtuQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDdkMsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxxQ0FBcUM7b0JBQ3hDLG9DQUFvQztvQkFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQ2hELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTs0QkFDbEIsNkJBQTZCOzRCQUM3QixLQUFLLGNBQWM7Z0NBQUU7b0NBQ25CLDZEQUE2RDtvQ0FDN0QsK0JBQStCO29DQUMvQixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0NBQy9DLElBQUksVUFBVSxFQUFFO3dDQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztxQ0FDdkM7eUNBQU07d0NBQ0wsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7d0NBQzNDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUU7NENBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzt5Q0FDdkM7NkNBQU07NENBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5Q0FDdEM7cUNBQ0Y7b0NBQ0Qsc0NBQXNDO29DQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTt3Q0FDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO3dDQUNqQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO3FDQUN2QixDQUFDLENBQUM7aUNBQ0o7Z0NBQUMsTUFBTTs0QkFDUjtnQ0FDRSxNQUFNO3lCQUNUO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBGYWNldE1hcERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1tYXAuZHMnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRNYXBFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIGRhdGFTb3VyY2U6IEZhY2V0TWFwRFM7XG5cbiAgaXNNdWx0aXBsZTogYm9vbGVhbjtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zZWFyY2gtZmFjZXRzLWxheW91dC5mYWNldGxvYWRlZCc6XG4gICAgICAgICAgLy8gTGlzdGVuIGZvciBpbmNvbWluZyBtYXJrZXIgZXZlbnRzXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1hcmtlckV2ZW50cyQuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICAgIC8vIHRyaWdnZXIgc2VhcmNoIGZhY2V0IGxvZ2ljXG4gICAgICAgICAgICAgIGNhc2UgJ21hcmtlci5jbGljayc6IHtcbiAgICAgICAgICAgICAgICAvLyBkZXRlY3QgXCJtdWx0aXBsZTogdHJ1ZSB8IGZhbHNlXCIgaW4gY29uZmlnID4gZmFjZXQgPiBzY2hlbWFcbiAgICAgICAgICAgICAgICAvLyBhbmQgYXBwbHkgdGhlIGNvcnJlY3QgbG9naWMuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc011bHRpcGxlIH0gPSB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucztcbiAgICAgICAgICAgICAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVZhbHVlKGV2ZW50LmlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5kYXRhU291cmNlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZVswXSA9PT0gZXZlbnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVZhbHVlKGV2ZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRWYWx1ZShbZXZlbnQuaWRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gKG1ha2UgcmVxdWVzdCBhbmQgdXBkYXRlIGNvbXBvbmVudClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZGF0YVNvdXJjZS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=