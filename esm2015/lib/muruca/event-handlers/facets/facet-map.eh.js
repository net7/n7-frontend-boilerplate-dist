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
                                        this.dataSource.setValue([event.id]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbWFwLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtbWFwLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRCxNQUFNLE9BQU8sVUFBVyxTQUFRLFlBQVk7SUFLbkMsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO1lBQ3ZDLFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUsscUNBQXFDO29CQUN4QyxvQ0FBb0M7b0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO3dCQUNoRCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7NEJBQ2xCLDZCQUE2Qjs0QkFDN0IsS0FBSyxjQUFjO2dDQUFFO29DQUNuQiw2REFBNkQ7b0NBQzdELCtCQUErQjtvQ0FDL0IsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO29DQUMvQyxJQUFJLFVBQVUsRUFBRTt3Q0FDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7cUNBQ3ZDO3lDQUFNO3dDQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUNBQ3RDO29DQUNELHNDQUFzQztvQ0FDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7d0NBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTt3Q0FDakMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtxQ0FDdkIsQ0FBQyxDQUFDO2lDQUNKO2dDQUFDLE1BQU07NEJBQ1I7Z0NBQ0UsTUFBTTt5QkFDVDtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBGYWNldE1hcERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1tYXAuZHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2V0TWFwRUggZXh0ZW5kcyBFdmVudEhhbmRsZXIge1xyXG4gIGRhdGFTb3VyY2U6IEZhY2V0TWFwRFM7XHJcblxyXG4gIGlzTXVsdGlwbGU6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ21yLXNlYXJjaC1mYWNldHMtbGF5b3V0LmZhY2V0bG9hZGVkJzpcclxuICAgICAgICAgIC8vIExpc3RlbiBmb3IgaW5jb21pbmcgbWFya2VyIGV2ZW50c1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1hcmtlckV2ZW50cyQuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHNlYXJjaCBmYWNldCBsb2dpY1xyXG4gICAgICAgICAgICAgIGNhc2UgJ21hcmtlci5jbGljayc6IHtcclxuICAgICAgICAgICAgICAgIC8vIGRldGVjdCBcIm11bHRpcGxlOiB0cnVlIHwgZmFsc2VcIiBpbiBjb25maWcgPiBmYWNldCA+IHNjaGVtYVxyXG4gICAgICAgICAgICAgICAgLy8gYW5kIGFwcGx5IHRoZSBjb3JyZWN0IGxvZ2ljLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc011bHRpcGxlIH0gPSB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucztcclxuICAgICAgICAgICAgICAgIGlmIChpc011bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS50b2dnbGVWYWx1ZShldmVudC5pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0VmFsdWUoW2V2ZW50LmlkXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAobWFrZSByZXF1ZXN0IGFuZCB1cGRhdGUgY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZGF0YVNvdXJjZS5nZXRWYWx1ZSgpLFxyXG4gICAgICAgICAgICAgICAgICBpZDogdGhpcy5kYXRhU291cmNlLmlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9IGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=