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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbWFwLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtbWFwLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRCxNQUFNLE9BQU8sVUFBVyxTQUFRLFlBQVk7SUFLbkMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ3ZDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsscUNBQXFDO29CQUN4QyxvQ0FBb0M7b0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO3dCQUNoRCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7NEJBQ2xCLDZCQUE2Qjs0QkFDN0IsS0FBSyxjQUFjO2dDQUFFO29DQUNuQiw2REFBNkQ7b0NBQzdELCtCQUErQjtvQ0FDL0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO29DQUMvQyxJQUFJLFVBQVUsRUFBRTt3Q0FDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7cUNBQ3ZDO3lDQUFNO3dDQUNMLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO3dDQUMzQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFOzRDQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7eUNBQ3ZDOzZDQUFNOzRDQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUNBQ3RDO3FDQUNGO29DQUNELHNDQUFzQztvQ0FDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7d0NBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTt3Q0FDakMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtxQ0FDdkIsQ0FBQyxDQUFDO2lDQUNKO2dDQUFDLE1BQU07NEJBQ1I7Z0NBQ0UsTUFBTTt5QkFDVDtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgRmFjZXRNYXBEUyB9IGZyb20gJy4uLy4uL2RhdGEtc291cmNlcy9mYWNldHMvZmFjZXQtbWFwLmRzJztcblxuZXhwb3J0IGNsYXNzIEZhY2V0TWFwRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xuICBkYXRhU291cmNlOiBGYWNldE1hcERTO1xuXG4gIGlzTXVsdGlwbGU6IGJvb2xlYW47XG5cbiAgcHVibGljIGxpc3RlbigpIHtcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuZmFjZXRsb2FkZWQnOlxuICAgICAgICAgIC8vIExpc3RlbiBmb3IgaW5jb21pbmcgbWFya2VyIGV2ZW50c1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5tYXJrZXJFdmVudHMkLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHNlYXJjaCBmYWNldCBsb2dpY1xuICAgICAgICAgICAgICBjYXNlICdtYXJrZXIuY2xpY2snOiB7XG4gICAgICAgICAgICAgICAgLy8gZGV0ZWN0IFwibXVsdGlwbGU6IHRydWUgfCBmYWxzZVwiIGluIGNvbmZpZyA+IGZhY2V0ID4gc2NoZW1hXG4gICAgICAgICAgICAgICAgLy8gYW5kIGFwcGx5IHRoZSBjb3JyZWN0IGxvZ2ljLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNNdWx0aXBsZSB9ID0gdGhpcy5kYXRhU291cmNlLm9wdGlvbnM7XG4gICAgICAgICAgICAgICAgaWYgKGlzTXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVWYWx1ZShldmVudC5pZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZGF0YVNvdXJjZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWVbMF0gPT09IGV2ZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVWYWx1ZShldmVudC5pZCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0VmFsdWUoW2V2ZW50LmlkXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIChtYWtlIHJlcXVlc3QgYW5kIHVwZGF0ZSBjb21wb25lbnQpXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmRhdGFTb3VyY2UuaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19