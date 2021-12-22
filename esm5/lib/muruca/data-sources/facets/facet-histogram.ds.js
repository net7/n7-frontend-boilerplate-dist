import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var ACTIVE_CLASS = 'is-active';
var FacetHistogramDS = /** @class */ (function (_super) {
    __extends(FacetHistogramDS, _super);
    function FacetHistogramDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = '';
        _this.isUpdate = false;
        _this.getValue = function () { return _this.value; };
        return _this;
    }
    FacetHistogramDS.prototype.transform = function (_a) {
        var links = _a.links;
        // Remap the response values in the correct
        // format for histogram-range-component
        var items = links.map(function (link) { return ({
            label: link.text,
            value: link.counter,
            payload: link.payload,
            range: link.range ? {
                payload: link.range.payload,
                label: link.range.text
            } : undefined,
        }); }).sort(function (a, b) { return +a.label - b.label; });
        return {
            containerId: 'container-for-histogram',
            width: 450,
            height: 50,
            colours: {
                top: '#7091B3',
                bottom: '#96c2f2',
                accent: '#2F528B',
            },
            margin: {
                left: 30,
                right: 0,
                top: 10,
                bottom: 45
            },
            axis: {
                yAxis: {
                    show: true,
                    // tickAmount: 3
                    values: [0, 5, 20, 60]
                }
            },
            items: items,
        };
    };
    FacetHistogramDS.prototype.setValue = function (value, update) {
        var _this = this;
        if (update === void 0) { update = false; }
        this.value = value;
        this.isUpdate = update;
        if (update) {
            var links = this.input.links;
            var updatedLinks = links.map(function (link) { return (__assign(__assign({}, link), { classes: _this.value && (_this.value === link.payload) ? ACTIVE_CLASS : '' })); });
            this.update(__assign(__assign({}, this.input), { links: updatedLinks }));
        }
    };
    FacetHistogramDS.prototype.clear = function () {
        this.value = '';
    };
    return FacetHistogramDS;
}(DataSource));
export { FacetHistogramDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGlzdG9ncmFtLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhpc3RvZ3JhbS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUlqQztJQUFzQyxvQ0FBVTtJQUFoRDtRQUFBLHFFQW9FQztRQWpFQyxXQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUV4QixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBMERqQixjQUFRLEdBQUcsY0FBbUIsT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQzs7SUFLM0MsQ0FBQztJQTdEVyxvQ0FBUyxHQUFuQixVQUFvQixFQUFTO1lBQVAsZ0JBQUs7UUFDekIsMkNBQTJDO1FBQzNDLHVDQUF1QztRQUN2QyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsQ0FBQztZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Z0JBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7YUFDdkIsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUNkLENBQUMsRUFSZ0MsQ0FRaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBRXZDLE9BQU87WUFDTCxXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE1BQU0sRUFBRSxTQUFTO2FBQ2xCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxFQUFFO2dCQUNQLE1BQU0sRUFBRSxFQUFFO2FBQ1g7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRSxJQUFJO29CQUNWLGdCQUFnQjtvQkFDaEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2lCQUN2QjthQUNGO1lBQ0QsS0FBSyxPQUFBO1NBQ04sQ0FBQztJQUNKLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsS0FBSyxFQUFFLE1BQWM7UUFBOUIsaUJBZUM7UUFmZSx1QkFBQSxFQUFBLGNBQWM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFFdkIsSUFBSSxNQUFNLEVBQUU7WUFDRixJQUFBLHdCQUFLLENBQWdCO1lBQzdCLElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSx1QkFDcEMsSUFBSSxLQUNQLE9BQU8sRUFBRSxLQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUN4RSxFQUh1QyxDQUd2QyxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSx1QkFDTixJQUFJLENBQUMsS0FBSyxLQUNiLEtBQUssRUFBRSxZQUFZLElBQ25CLENBQUM7U0FDSjtJQUNILENBQUM7SUFJRCxnQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXBFRCxDQUFzQyxVQUFVLEdBb0UvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpc3RvZ3JhbVJhbmdlRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcclxuXHJcbmNvbnN0IEFDVElWRV9DTEFTUyA9ICdpcy1hY3RpdmUnO1xyXG5cclxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldEhpc3RvZ3JhbURTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFID0gJyc7XHJcblxyXG4gIGlzVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oeyBsaW5rcyB9KTogSGlzdG9ncmFtUmFuZ2VEYXRhIHtcclxuICAgIC8vIFJlbWFwIHRoZSByZXNwb25zZSB2YWx1ZXMgaW4gdGhlIGNvcnJlY3RcclxuICAgIC8vIGZvcm1hdCBmb3IgaGlzdG9ncmFtLXJhbmdlLWNvbXBvbmVudFxyXG4gICAgY29uc3QgaXRlbXMgPSBsaW5rcy5tYXAoKGxpbmspID0+ICh7XHJcbiAgICAgIGxhYmVsOiBsaW5rLnRleHQsXHJcbiAgICAgIHZhbHVlOiBsaW5rLmNvdW50ZXIsXHJcbiAgICAgIHBheWxvYWQ6IGxpbmsucGF5bG9hZCxcclxuICAgICAgcmFuZ2U6IGxpbmsucmFuZ2UgPyB7XHJcbiAgICAgICAgcGF5bG9hZDogbGluay5yYW5nZS5wYXlsb2FkLFxyXG4gICAgICAgIGxhYmVsOiBsaW5rLnJhbmdlLnRleHRcclxuICAgICAgfSA6IHVuZGVmaW5lZCxcclxuICAgIH0pKS5zb3J0KChhLCBiKSA9PiArYS5sYWJlbCAtIGIubGFiZWwpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnRhaW5lcklkOiAnY29udGFpbmVyLWZvci1oaXN0b2dyYW0nLFxyXG4gICAgICB3aWR0aDogNDUwLFxyXG4gICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICBjb2xvdXJzOiB7XHJcbiAgICAgICAgdG9wOiAnIzcwOTFCMycsXHJcbiAgICAgICAgYm90dG9tOiAnIzk2YzJmMicsXHJcbiAgICAgICAgYWNjZW50OiAnIzJGNTI4QicsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgIGxlZnQ6IDMwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgYm90dG9tOiA0NVxyXG4gICAgICB9LFxyXG4gICAgICBheGlzOiB7XHJcbiAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAvLyB0aWNrQW1vdW50OiAzXHJcbiAgICAgICAgICB2YWx1ZXM6IFswLCA1LCAyMCwgNjBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtcyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZSwgdXBkYXRlID0gZmFsc2UpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaXNVcGRhdGUgPSB1cGRhdGU7XHJcblxyXG4gICAgaWYgKHVwZGF0ZSkge1xyXG4gICAgICBjb25zdCB7IGxpbmtzIH0gPSB0aGlzLmlucHV0O1xyXG4gICAgICBjb25zdCB1cGRhdGVkTGlua3MgPSBsaW5rcy5tYXAoKGxpbmspID0+ICh7XHJcbiAgICAgICAgLi4ubGluayxcclxuICAgICAgICBjbGFzc2VzOiB0aGlzLnZhbHVlICYmICh0aGlzLnZhbHVlID09PSBsaW5rLnBheWxvYWQpID8gQUNUSVZFX0NMQVNTIDogJydcclxuICAgICAgfSkpO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcclxuICAgICAgICBsaW5rczogdXBkYXRlZExpbmtzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==