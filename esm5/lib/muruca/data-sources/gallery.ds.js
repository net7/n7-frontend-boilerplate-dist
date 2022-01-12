import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrGalleryDS = /** @class */ (function (_super) {
    __extends(MrGalleryDS, _super);
    function MrGalleryDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrGalleryDS.prototype.transform = function (data) {
        if (!data) {
            return null;
        }
        return {
            selected: null,
            items: data.map(function (_a) {
                var id = _a.id, title = _a.title, thumbnail = _a.thumbnail, image = _a.image;
                return ({
                    id: id,
                    title: title,
                    thumbSrc: thumbnail,
                    fullSrc: image,
                    payload: id
                });
            })
        };
    };
    MrGalleryDS.prototype.setSelected = function (itemId) {
        this.output.selected = this.output.items.find(function (_a) {
            var id = _a.id;
            return id === itemId;
        });
    };
    MrGalleryDS.prototype.removeSelected = function () {
        this.output.selected = null;
    };
    return MrGalleryDS;
}(DataSource));
export { MrGalleryDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2dhbGxlcnkuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVUvQztJQUFpQywrQkFBVTtJQUEzQzs7SUE2QkEsQ0FBQztJQTFCVywrQkFBUyxHQUFuQixVQUFvQixJQUFxQjtRQUN2QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFFaEI7b0JBREMsVUFBRSxFQUFFLGdCQUFLLEVBQUUsd0JBQVMsRUFBRSxnQkFBSztnQkFDdkIsT0FBQSxDQUFDO29CQUNMLEVBQUUsSUFBQTtvQkFDRixLQUFLLE9BQUE7b0JBQ0wsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUM7WUFOSSxDQU1KLENBQUM7U0FDSixDQUFDO0lBQ0osQ0FBQztJQUVNLGlDQUFXLEdBQWxCLFVBQW1CLE1BQXVCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU07Z0JBQUosVUFBRTtZQUFPLE9BQUEsRUFBRSxLQUFLLE1BQU07UUFBYixDQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sb0NBQWMsR0FBckI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTdCRCxDQUFpQyxVQUFVLEdBNkIxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBHYWxsZXJ5RGF0YSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5JztcblxudHlwZSBHYWxsZXJ5UmVzcG9uc2UgPSB7XG4gIGlkOiBzdHJpbmcgfCBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xufVtdO1xuXG5leHBvcnQgY2xhc3MgTXJHYWxsZXJ5RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IEdhbGxlcnlSZXNwb25zZSk6IEdhbGxlcnlEYXRhIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZDogbnVsbCxcbiAgICAgIGl0ZW1zOiBkYXRhLm1hcCgoe1xuICAgICAgICBpZCwgdGl0bGUsIHRodW1ibmFpbCwgaW1hZ2VcbiAgICAgIH0pID0+ICh7XG4gICAgICAgIGlkLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGh1bWJTcmM6IHRodW1ibmFpbCxcbiAgICAgICAgZnVsbFNyYzogaW1hZ2UsXG4gICAgICAgIHBheWxvYWQ6IGlkXG4gICAgICB9KSlcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHNldFNlbGVjdGVkKGl0ZW1JZDogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSB0aGlzLm91dHB1dC5pdGVtcy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBpdGVtSWQpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkKCkge1xuICAgIHRoaXMub3V0cHV0LnNlbGVjdGVkID0gbnVsbDtcbiAgfVxufVxuIl19