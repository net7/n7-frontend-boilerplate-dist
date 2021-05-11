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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2dhbGxlcnkuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVUvQztJQUFpQywrQkFBVTtJQUEzQzs7SUE2QkEsQ0FBQztJQTFCVywrQkFBUyxHQUFuQixVQUFvQixJQUFxQjtRQUN2QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFFaEI7b0JBREMsVUFBRSxFQUFFLGdCQUFLLEVBQUUsd0JBQVMsRUFBRSxnQkFBSztnQkFDdkIsT0FBQSxDQUFDO29CQUNMLEVBQUUsSUFBQTtvQkFDRixLQUFLLE9BQUE7b0JBQ0wsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUM7WUFOSSxDQU1KLENBQUM7U0FDSixDQUFDO0lBQ0osQ0FBQztJQUVNLGlDQUFXLEdBQWxCLFVBQW1CLE1BQXVCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQU07Z0JBQUosVUFBRTtZQUFPLE9BQUEsRUFBRSxLQUFLLE1BQU07UUFBYixDQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sb0NBQWMsR0FBckI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTdCRCxDQUFpQyxVQUFVLEdBNkIxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlEYXRhIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnknO1xyXG5cclxudHlwZSBHYWxsZXJ5UmVzcG9uc2UgPSB7XHJcbiAgaWQ6IHN0cmluZyB8IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbn1bXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNckdhbGxlcnlEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogR2FsbGVyeVJlc3BvbnNlKTogR2FsbGVyeURhdGEge1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlbGVjdGVkOiBudWxsLFxyXG4gICAgICBpdGVtczogZGF0YS5tYXAoKHtcclxuICAgICAgICBpZCwgdGl0bGUsIHRodW1ibmFpbCwgaW1hZ2VcclxuICAgICAgfSkgPT4gKHtcclxuICAgICAgICBpZCxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICB0aHVtYlNyYzogdGh1bWJuYWlsLFxyXG4gICAgICAgIGZ1bGxTcmM6IGltYWdlLFxyXG4gICAgICAgIHBheWxvYWQ6IGlkXHJcbiAgICAgIH0pKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTZWxlY3RlZChpdGVtSWQ6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSB0aGlzLm91dHB1dC5pdGVtcy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBpdGVtSWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVNlbGVjdGVkKCkge1xyXG4gICAgdGhpcy5vdXRwdXQuc2VsZWN0ZWQgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=