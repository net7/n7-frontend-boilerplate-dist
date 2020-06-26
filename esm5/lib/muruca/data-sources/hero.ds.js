import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrHeroDS = /** @class */ (function (_super) {
    __extends(MrHeroDS, _super);
    function MrHeroDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrHeroDS.prototype.transform = function (data) {
        var _a = this.options, classes = _a.classes, background = _a.background;
        var text = data.text, image = data.image, title = data.title, button = data.button;
        var backgroundImage = background ? image : null;
        return {
            text: text,
            title: title,
            classes: classes,
            backgroundImage: backgroundImage,
            image: backgroundImage ? image : null,
            button: button ? __assign(__assign({}, button), { anchor: {
                    href: button.anchor
                } }) : null
        };
    };
    return MrHeroDS;
}(DataSource));
export { MrHeroDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2hlcm8uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQztJQUE4Qiw0QkFBVTtJQUF4Qzs7SUF3QkEsQ0FBQztJQXJCVyw0QkFBUyxHQUFuQixVQUFvQixJQUFTO1FBQ3JCLElBQUEsaUJBQXNDLEVBQXBDLG9CQUFPLEVBQUUsMEJBQTJCLENBQUM7UUFFM0MsSUFBQSxnQkFBSSxFQUFFLGtCQUFLLEVBQUUsa0JBQUssRUFBRSxvQkFBTSxDQUNuQjtRQUNULElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFbEQsT0FBTztZQUNMLElBQUksTUFBQTtZQUNKLEtBQUssT0FBQTtZQUNMLE9BQU8sU0FBQTtZQUNQLGVBQWUsaUJBQUE7WUFDZixLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDckMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLHVCQUNYLE1BQU0sS0FDVCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2lCQUNwQixJQUNELENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUE4QixVQUFVLEdBd0J2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNckhlcm9EUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcbiAgICBjb25zdCB7IGNsYXNzZXMsIGJhY2tncm91bmQgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCB7XG4gICAgICB0ZXh0LCBpbWFnZSwgdGl0bGUsIGJ1dHRvblxuICAgIH0gPSBkYXRhO1xuICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmQgPyBpbWFnZSA6IG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dCxcbiAgICAgIHRpdGxlLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcbiAgICAgIGltYWdlOiBiYWNrZ3JvdW5kSW1hZ2UgPyBpbWFnZSA6IG51bGwsXG4gICAgICBidXR0b246IGJ1dHRvbiA/IHtcbiAgICAgICAgLi4uYnV0dG9uLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiBidXR0b24uYW5jaG9yXG4gICAgICAgIH1cbiAgICAgIH0gOiBudWxsXG4gICAgfTtcbiAgfVxufVxuIl19