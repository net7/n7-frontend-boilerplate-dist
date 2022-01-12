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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbWFwLmVoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9ldmVudC1oYW5kbGVycy9mYWNldHMvZmFjZXQtbWFwLmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHakQ7SUFBZ0MsOEJBQVk7SUFBNUM7O0lBMkNBLENBQUM7SUF0Q1EsMkJBQU0sR0FBYjtRQUFBLGlCQXFDQztRQXBDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUNqQyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHFDQUFxQztvQkFDeEMsb0NBQW9DO29CQUNwQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLO3dCQUM1QyxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7NEJBQ2xCLDZCQUE2Qjs0QkFDN0IsS0FBSyxjQUFjO2dDQUFFO29DQUNuQiw2REFBNkQ7b0NBQzdELCtCQUErQjtvQ0FDdkIsSUFBQSxnREFBVSxDQUE2QjtvQ0FDL0MsSUFBSSxVQUFVLEVBQUU7d0NBQ2QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FDQUN2Qzt5Q0FBTTt3Q0FDTCxJQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzt3Q0FDM0MsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTs0Q0FDaEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lDQUN2Qzs2Q0FBTTs0Q0FDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lDQUN0QztxQ0FDRjtvQ0FDRCxzQ0FBc0M7b0NBQ3RDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO3dDQUN2QixLQUFLLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7d0NBQ2pDLEVBQUUsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7cUNBQ3ZCLENBQUMsQ0FBQztpQ0FDSjtnQ0FBQyxNQUFNOzRCQUNSO2dDQUNFLE1BQU07eUJBQ1Q7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUEzQ0QsQ0FBZ0MsWUFBWSxHQTJDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBGYWNldE1hcERTIH0gZnJvbSAnLi4vLi4vZGF0YS1zb3VyY2VzL2ZhY2V0cy9mYWNldC1tYXAuZHMnO1xuXG5leHBvcnQgY2xhc3MgRmFjZXRNYXBFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XG4gIGRhdGFTb3VyY2U6IEZhY2V0TWFwRFM7XG5cbiAgaXNNdWx0aXBsZTogYm9vbGVhbjtcblxuICBwdWJsaWMgbGlzdGVuKCkge1xuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlIH0pID0+IHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdtci1zZWFyY2gtZmFjZXRzLWxheW91dC5mYWNldGxvYWRlZCc6XG4gICAgICAgICAgLy8gTGlzdGVuIGZvciBpbmNvbWluZyBtYXJrZXIgZXZlbnRzXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm1hcmtlckV2ZW50cyQuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICAgIC8vIHRyaWdnZXIgc2VhcmNoIGZhY2V0IGxvZ2ljXG4gICAgICAgICAgICAgIGNhc2UgJ21hcmtlci5jbGljayc6IHtcbiAgICAgICAgICAgICAgICAvLyBkZXRlY3QgXCJtdWx0aXBsZTogdHJ1ZSB8IGZhbHNlXCIgaW4gY29uZmlnID4gZmFjZXQgPiBzY2hlbWFcbiAgICAgICAgICAgICAgICAvLyBhbmQgYXBwbHkgdGhlIGNvcnJlY3QgbG9naWMuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc011bHRpcGxlIH0gPSB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucztcbiAgICAgICAgICAgICAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVZhbHVlKGV2ZW50LmlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5kYXRhU291cmNlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZVswXSA9PT0gZXZlbnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnRvZ2dsZVZhbHVlKGV2ZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRWYWx1ZShbZXZlbnQuaWRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gKG1ha2UgcmVxdWVzdCBhbmQgdXBkYXRlIGNvbXBvbmVudClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRPdXRlcignY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZGF0YVNvdXJjZS5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZGF0YVNvdXJjZS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=