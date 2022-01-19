import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
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
    FacetHistogramDS.prototype.loadTooltips = function () {
        var elements = document.querySelectorAll('#container-for-histogram g.bars rect.bars');
        tippy(elements, {
            content: function (reference) {
                var start = reference.getAttribute('data-start');
                var end = reference.getAttribute('data-end');
                return "<span class=\"tippy-template\">" + start + "<br>" + end + "</span>";
            },
            allowHTML: true,
            appendTo: function () { return document.body; },
        });
    };
    return FacetHistogramDS;
}(DataSource));
export { FacetHistogramDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGlzdG9ncmFtLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhpc3RvZ3JhbS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUM3QixPQUFPLHlCQUF5QixDQUFDO0FBR2pDLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUlqQztJQUFzQyxvQ0FBVTtJQUFoRDtRQUFBLHFFQWlGQztRQTlFQyxXQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUV4QixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBMERqQixjQUFRLEdBQUcsY0FBbUIsT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQzs7SUFrQjNDLENBQUM7SUExRVcsb0NBQVMsR0FBbkIsVUFBb0IsRUFBUztZQUFQLGdCQUFLO1FBQ3pCLDJDQUEyQztRQUMzQyx1Q0FBdUM7UUFDdkMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUM7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTztZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO2dCQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2FBQ3ZCLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDZCxDQUFDLEVBUmdDLENBUWhDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUV2QyxPQUFPO1lBQ0wsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFO2dCQUNQLEdBQUcsRUFBRSxTQUFTO2dCQUNkLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixNQUFNLEVBQUUsU0FBUzthQUNsQjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsRUFBRTtnQkFDUixLQUFLLEVBQUUsQ0FBQztnQkFDUixHQUFHLEVBQUUsRUFBRTtnQkFDUCxNQUFNLEVBQUUsRUFBRTthQUNYO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUUsSUFBSTtvQkFDVixnQkFBZ0I7b0JBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztpQkFDdkI7YUFDRjtZQUNELEtBQUssT0FBQTtTQUNOLENBQUM7SUFDSixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLEtBQUssRUFBRSxNQUFjO1FBQTlCLGlCQWVDO1FBZmUsdUJBQUEsRUFBQSxjQUFjO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBRXZCLElBQUksTUFBTSxFQUFFO1lBQ0YsSUFBQSx3QkFBSyxDQUFnQjtZQUM3QixJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsdUJBQ3BDLElBQUksS0FDUCxPQUFPLEVBQUUsS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFDeEUsRUFIdUMsQ0FHdkMsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sdUJBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixLQUFLLEVBQUUsWUFBWSxJQUNuQixDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBSUQsZ0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0UsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDeEYsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNkLE9BQU8sWUFBQyxTQUFTO2dCQUNmLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ25ELElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sb0NBQWdDLEtBQUssWUFBTyxHQUFHLFlBQVMsQ0FBQztZQUNsRSxDQUFDO1lBQ0QsU0FBUyxFQUFFLElBQUk7WUFDZixRQUFRLEVBQUUsY0FBTSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQWIsQ0FBYTtTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBakZELENBQXNDLFVBQVUsR0FpRi9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGlzdG9ncmFtUmFuZ2VEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xyXG5pbXBvcnQgJ3RpcHB5LmpzL2Rpc3QvdGlwcHkuY3NzJztcclxuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcclxuXHJcbmNvbnN0IEFDVElWRV9DTEFTUyA9ICdpcy1hY3RpdmUnO1xyXG5cclxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldEhpc3RvZ3JhbURTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFID0gJyc7XHJcblxyXG4gIGlzVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oeyBsaW5rcyB9KTogSGlzdG9ncmFtUmFuZ2VEYXRhIHtcclxuICAgIC8vIFJlbWFwIHRoZSByZXNwb25zZSB2YWx1ZXMgaW4gdGhlIGNvcnJlY3RcclxuICAgIC8vIGZvcm1hdCBmb3IgaGlzdG9ncmFtLXJhbmdlLWNvbXBvbmVudFxyXG4gICAgY29uc3QgaXRlbXMgPSBsaW5rcy5tYXAoKGxpbmspID0+ICh7XHJcbiAgICAgIGxhYmVsOiBsaW5rLnRleHQsXHJcbiAgICAgIHZhbHVlOiBsaW5rLmNvdW50ZXIsXHJcbiAgICAgIHBheWxvYWQ6IGxpbmsucGF5bG9hZCxcclxuICAgICAgcmFuZ2U6IGxpbmsucmFuZ2UgPyB7XHJcbiAgICAgICAgcGF5bG9hZDogbGluay5yYW5nZS5wYXlsb2FkLFxyXG4gICAgICAgIGxhYmVsOiBsaW5rLnJhbmdlLnRleHRcclxuICAgICAgfSA6IHVuZGVmaW5lZCxcclxuICAgIH0pKS5zb3J0KChhLCBiKSA9PiArYS5sYWJlbCAtIGIubGFiZWwpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnRhaW5lcklkOiAnY29udGFpbmVyLWZvci1oaXN0b2dyYW0nLFxyXG4gICAgICB3aWR0aDogNDUwLFxyXG4gICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICBjb2xvdXJzOiB7XHJcbiAgICAgICAgdG9wOiAnIzcwOTFCMycsXHJcbiAgICAgICAgYm90dG9tOiAnIzk2YzJmMicsXHJcbiAgICAgICAgYWNjZW50OiAnIzJGNTI4QicsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgIGxlZnQ6IDMwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMTAsXHJcbiAgICAgICAgYm90dG9tOiA0NVxyXG4gICAgICB9LFxyXG4gICAgICBheGlzOiB7XHJcbiAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAvLyB0aWNrQW1vdW50OiAzXHJcbiAgICAgICAgICB2YWx1ZXM6IFswLCA1LCAyMCwgNjBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtcyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZSwgdXBkYXRlID0gZmFsc2UpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaXNVcGRhdGUgPSB1cGRhdGU7XHJcblxyXG4gICAgaWYgKHVwZGF0ZSkge1xyXG4gICAgICBjb25zdCB7IGxpbmtzIH0gPSB0aGlzLmlucHV0O1xyXG4gICAgICBjb25zdCB1cGRhdGVkTGlua3MgPSBsaW5rcy5tYXAoKGxpbmspID0+ICh7XHJcbiAgICAgICAgLi4ubGluayxcclxuICAgICAgICBjbGFzc2VzOiB0aGlzLnZhbHVlICYmICh0aGlzLnZhbHVlID09PSBsaW5rLnBheWxvYWQpID8gQUNUSVZFX0NMQVNTIDogJydcclxuICAgICAgfSkpO1xyXG4gICAgICB0aGlzLnVwZGF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcclxuICAgICAgICBsaW5rczogdXBkYXRlZExpbmtzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgfVxyXG5cclxuICBsb2FkVG9vbHRpcHMoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb250YWluZXItZm9yLWhpc3RvZ3JhbSBnLmJhcnMgcmVjdC5iYXJzJyk7XHJcbiAgICB0aXBweShlbGVtZW50cywge1xyXG4gICAgICBjb250ZW50KHJlZmVyZW5jZSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcpO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZW5kJyk7XHJcbiAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInRpcHB5LXRlbXBsYXRlXCI+JHtzdGFydH08YnI+JHtlbmR9PC9zcGFuPmA7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFsbG93SFRNTDogdHJ1ZSxcclxuICAgICAgYXBwZW5kVG86ICgpID0+IGRvY3VtZW50LmJvZHksXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19