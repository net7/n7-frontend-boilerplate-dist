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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGlzdG9ncmFtLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LWhpc3RvZ3JhbS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUlqQztJQUFzQyxvQ0FBVTtJQUFoRDtRQUFBLHFFQW9FQztRQWpFQyxXQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUV4QixjQUFRLEdBQUcsS0FBSyxDQUFDO1FBMERqQixjQUFRLEdBQUcsY0FBbUIsT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQzs7SUFLM0MsQ0FBQztJQTdEVyxvQ0FBUyxHQUFuQixVQUFvQixFQUFTO1lBQVAsZ0JBQUs7UUFDekIsMkNBQTJDO1FBQzNDLHVDQUF1QztRQUN2QyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsQ0FBQztZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Z0JBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7YUFDdkIsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUNkLENBQUMsRUFSZ0MsQ0FRaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBRXZDLE9BQU87WUFDTCxXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUU7Z0JBQ1AsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE1BQU0sRUFBRSxTQUFTO2FBQ2xCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxFQUFFO2dCQUNQLE1BQU0sRUFBRSxFQUFFO2FBQ1g7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRSxJQUFJO29CQUNWLGdCQUFnQjtvQkFDaEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2lCQUN2QjthQUNGO1lBQ0QsS0FBSyxPQUFBO1NBQ04sQ0FBQztJQUNKLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsS0FBSyxFQUFFLE1BQWM7UUFBOUIsaUJBZUM7UUFmZSx1QkFBQSxFQUFBLGNBQWM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFFdkIsSUFBSSxNQUFNLEVBQUU7WUFDRixJQUFBLHdCQUFLLENBQWdCO1lBQzdCLElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSx1QkFDcEMsSUFBSSxLQUNQLE9BQU8sRUFBRSxLQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUN4RSxFQUh1QyxDQUd2QyxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSx1QkFDTixJQUFJLENBQUMsS0FBSyxLQUNiLEtBQUssRUFBRSxZQUFZLElBQ25CLENBQUM7U0FDSjtJQUNILENBQUM7SUFJRCxnQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXBFRCxDQUFzQyxVQUFVLEdBb0UvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpc3RvZ3JhbVJhbmdlRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnaXMtYWN0aXZlJztcblxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZztcblxuZXhwb3J0IGNsYXNzIEZhY2V0SGlzdG9ncmFtRFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2YWx1ZTogRkFDRVRfVkFMVUUgPSAnJztcblxuICBpc1VwZGF0ZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oeyBsaW5rcyB9KTogSGlzdG9ncmFtUmFuZ2VEYXRhIHtcbiAgICAvLyBSZW1hcCB0aGUgcmVzcG9uc2UgdmFsdWVzIGluIHRoZSBjb3JyZWN0XG4gICAgLy8gZm9ybWF0IGZvciBoaXN0b2dyYW0tcmFuZ2UtY29tcG9uZW50XG4gICAgY29uc3QgaXRlbXMgPSBsaW5rcy5tYXAoKGxpbmspID0+ICh7XG4gICAgICBsYWJlbDogbGluay50ZXh0LFxuICAgICAgdmFsdWU6IGxpbmsuY291bnRlcixcbiAgICAgIHBheWxvYWQ6IGxpbmsucGF5bG9hZCxcbiAgICAgIHJhbmdlOiBsaW5rLnJhbmdlID8ge1xuICAgICAgICBwYXlsb2FkOiBsaW5rLnJhbmdlLnBheWxvYWQsXG4gICAgICAgIGxhYmVsOiBsaW5rLnJhbmdlLnRleHRcbiAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgfSkpLnNvcnQoKGEsIGIpID0+ICthLmxhYmVsIC0gYi5sYWJlbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVySWQ6ICdjb250YWluZXItZm9yLWhpc3RvZ3JhbScsXG4gICAgICB3aWR0aDogNDUwLFxuICAgICAgaGVpZ2h0OiA1MCxcbiAgICAgIGNvbG91cnM6IHtcbiAgICAgICAgdG9wOiAnIzcwOTFCMycsXG4gICAgICAgIGJvdHRvbTogJyM5NmMyZjInLFxuICAgICAgICBhY2NlbnQ6ICcjMkY1MjhCJyxcbiAgICAgIH0sXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgbGVmdDogMzAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IDEwLFxuICAgICAgICBib3R0b206IDQ1XG4gICAgICB9LFxuICAgICAgYXhpczoge1xuICAgICAgICB5QXhpczoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgLy8gdGlja0Ftb3VudDogM1xuICAgICAgICAgIHZhbHVlczogWzAsIDUsIDIwLCA2MF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGl0ZW1zLFxuICAgIH07XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5pc1VwZGF0ZSA9IHVwZGF0ZTtcblxuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgbGlua3MgfSA9IHRoaXMuaW5wdXQ7XG4gICAgICBjb25zdCB1cGRhdGVkTGlua3MgPSBsaW5rcy5tYXAoKGxpbmspID0+ICh7XG4gICAgICAgIC4uLmxpbmssXG4gICAgICAgIGNsYXNzZXM6IHRoaXMudmFsdWUgJiYgKHRoaXMudmFsdWUgPT09IGxpbmsucGF5bG9hZCkgPyBBQ1RJVkVfQ0xBU1MgOiAnJ1xuICAgICAgfSkpO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICAuLi50aGlzLmlucHV0LFxuICAgICAgICBsaW5rczogdXBkYXRlZExpbmtzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSA9ICgpOiBGQUNFVF9WQUxVRSA9PiB0aGlzLnZhbHVlO1xuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgfVxufVxuIl19