import { __extends } from "tslib";
import { EventHandler } from '@n7-frontend/core';
var FacetMapEH = /** @class */ (function (_super) {
    __extends(FacetMapEH, _super);
    function FacetMapEH() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FacetMapEH.prototype.listen = function () {
        var _this = this;
        this.outerEvents$.subscribe(function (_a) {
            var type = _a.type;
            switch (type) {
                case 'mr-search-facets-layout.facetloaded':
                    // Listen for incoming marker events
                    _this.dataSource.markerEvents$.subscribe(function (event) {
                        switch (event.type) {
                            // trigger search facet logic
                            case 'marker.click':
                                {
                                    // detect "multiple: true | false" in config > facet > schema
                                    // and apply the correct logic.
                                    var isMultiple = _this.dataSource.options.isMultiple;
                                    if (isMultiple) {
                                        _this.dataSource.toggleValue(event.id);
                                    }
                                    else {
                                        var currentValue = _this.dataSource.value;
                                        if (currentValue[0] === event.id) {
                                            _this.dataSource.toggleValue(event.id);
                                        }
                                        else {
                                            _this.dataSource.setValue([event.id]);
                                        }
                                    }
                                    // (make request and update component)
                                    _this.emitOuter('change', {
                                        value: _this.dataSource.getValue(),
                                        id: _this.dataSource.id
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
    };
    return FacetMapEH;
}(EventHandler));
export { FacetMapEH };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbWFwLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtbWFwLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHakQ7SUFBZ0MsOEJBQVk7SUFBNUM7O0lBMkNBLENBQUM7SUF0Q1EsMkJBQU0sR0FBYjtRQUFBLGlCQXFDQztRQXBDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUNqQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHFDQUFxQztvQkFDeEMsb0NBQW9DO29CQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO3dCQUM1QyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7NEJBQ2xCLDZCQUE2Qjs0QkFDN0IsS0FBSyxjQUFjO2dDQUFFO29DQUNuQiw2REFBNkQ7b0NBQzdELCtCQUErQjtvQ0FDdkIsSUFBQSxnREFBVSxDQUE2QjtvQ0FDL0MsSUFBSSxVQUFVLEVBQUU7d0NBQ2QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FDQUN2Qzt5Q0FBTTt3Q0FDTCxJQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzt3Q0FDM0MsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTs0Q0FDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lDQUN2Qzs2Q0FBTTs0Q0FDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lDQUN0QztxQ0FDRjtvQ0FDRCxzQ0FBc0M7b0NBQ3RDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO3dDQUN2QixLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7d0NBQ2pDLEVBQUUsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7cUNBQ3ZCLENBQUMsQ0FBQztpQ0FDSjtnQ0FBQyxNQUFNOzRCQUNSO2dDQUNFLE1BQU07eUJBQ1Q7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUEzQ0QsQ0FBZ0MsWUFBWSxHQTJDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEZhY2V0TWFwRFMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LW1hcC5kcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRNYXBFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgZGF0YVNvdXJjZTogRmFjZXRNYXBEUztcclxuXHJcbiAgaXNNdWx0aXBsZTogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbXItc2VhcmNoLWZhY2V0cy1sYXlvdXQuZmFjZXRsb2FkZWQnOlxyXG4gICAgICAgICAgLy8gTGlzdGVuIGZvciBpbmNvbWluZyBtYXJrZXIgZXZlbnRzXHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UubWFya2VyRXZlbnRzJC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICAgIC8vIHRyaWdnZXIgc2VhcmNoIGZhY2V0IGxvZ2ljXHJcbiAgICAgICAgICAgICAgY2FzZSAnbWFya2VyLmNsaWNrJzoge1xyXG4gICAgICAgICAgICAgICAgLy8gZGV0ZWN0IFwibXVsdGlwbGU6IHRydWUgfCBmYWxzZVwiIGluIGNvbmZpZyA+IGZhY2V0ID4gc2NoZW1hXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgYXBwbHkgdGhlIGNvcnJlY3QgbG9naWMuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzTXVsdGlwbGUgfSA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVZhbHVlKGV2ZW50LmlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZGF0YVNvdXJjZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZVswXSA9PT0gZXZlbnQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UudG9nZ2xlVmFsdWUoZXZlbnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRWYWx1ZShbZXZlbnQuaWRdKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gKG1ha2UgcmVxdWVzdCBhbmQgdXBkYXRlIGNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdjaGFuZ2UnLCB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0VmFsdWUoKSxcclxuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5pZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19