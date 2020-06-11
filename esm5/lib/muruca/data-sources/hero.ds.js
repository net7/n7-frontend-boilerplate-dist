import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrHeroDS = /** @class */ (function (_super) {
    __extends(MrHeroDS, _super);
    function MrHeroDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrHeroDS.prototype.transform = function (data) {
        var _a = this.options, classes = _a.classes, background = _a.background;
        var back;
        var image;
        if (background) {
            back = data.image;
            image = false;
        }
        else {
            image = data.image;
            back = false;
        }
        return __assign(__assign({}, data), { classes: classes, backgroundImage: back, image: image || '' });
    };
    return MrHeroDS;
}(DataSource));
export { MrHeroDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2hlcm8uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4Qiw0QkFBVTtJQUF4Qzs7SUFnQkEsQ0FBQztJQWJXLDRCQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDckIsSUFBQSxpQkFBc0MsRUFBcEMsb0JBQU8sRUFBRSwwQkFBMkIsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQztRQUNULElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDbEM7YUFBTTtZQUNMLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNsQztRQUNELDZCQUNLLElBQUksS0FBRSxPQUFPLFNBQUEsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLElBQUksRUFBRSxJQUMzRDtJQUNKLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUE4QixVQUFVLEdBZ0J2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNckhlcm9EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBjb25zdCB7IGNsYXNzZXMsIGJhY2tncm91bmQgfSA9IHRoaXMub3B0aW9ucztcbiAgICBsZXQgYmFjaztcbiAgICBsZXQgaW1hZ2U7XG4gICAgaWYgKGJhY2tncm91bmQpIHtcbiAgICAgIGJhY2sgPSBkYXRhLmltYWdlOyBpbWFnZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZSA9IGRhdGEuaW1hZ2U7IGJhY2sgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsIGNsYXNzZXMsIGJhY2tncm91bmRJbWFnZTogYmFjaywgaW1hZ2U6IGltYWdlIHx8ICcnXG4gICAgfTtcbiAgfVxufVxuIl19