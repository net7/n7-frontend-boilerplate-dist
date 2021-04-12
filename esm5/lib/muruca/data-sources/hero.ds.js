import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import linksHelper from '../helpers/links-helper';
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
            image: !backgroundImage ? image : null,
            button: button && button.link ? __assign(__assign({}, button), { anchor: {
                    href: linksHelper.getRouterLink(button.link),
                    queryParams: linksHelper.getQueryParams(button.link)
                } }) : null
        };
    };
    return MrHeroDS;
}(DataSource));
export { MrHeroDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2hlcm8uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRDtJQUE4Qiw0QkFBVTtJQUF4Qzs7SUF5QkEsQ0FBQztJQXRCVyw0QkFBUyxHQUFuQixVQUFvQixJQUFTO1FBQ3JCLElBQUEsaUJBQXNDLEVBQXBDLG9CQUFPLEVBQUUsMEJBQTJCLENBQUM7UUFFM0MsSUFBQSxnQkFBSSxFQUFFLGtCQUFLLEVBQUUsa0JBQUssRUFBRSxvQkFBTSxDQUNuQjtRQUNULElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFbEQsT0FBTztZQUNMLElBQUksTUFBQTtZQUNKLEtBQUssT0FBQTtZQUNMLE9BQU8sU0FBQTtZQUNQLGVBQWUsaUJBQUE7WUFDZixLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN0QyxNQUFNLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyx1QkFDMUIsTUFBTSxLQUNULE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUM1QyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2lCQUNyRCxJQUNELENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUE4QixVQUFVLEdBeUJ2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJIZXJvRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCB7IGNsYXNzZXMsIGJhY2tncm91bmQgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGV4dCwgaW1hZ2UsIHRpdGxlLCBidXR0b25cclxuICAgIH0gPSBkYXRhO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZCA/IGltYWdlIDogbnVsbDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0ZXh0LFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgY2xhc3NlcyxcclxuICAgICAgYmFja2dyb3VuZEltYWdlLFxyXG4gICAgICBpbWFnZTogIWJhY2tncm91bmRJbWFnZSA/IGltYWdlIDogbnVsbCxcclxuICAgICAgYnV0dG9uOiBidXR0b24gJiYgYnV0dG9uLmxpbmsgPyB7XHJcbiAgICAgICAgLi4uYnV0dG9uLFxyXG4gICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhidXR0b24ubGluayksXHJcbiAgICAgICAgICBxdWVyeVBhcmFtczogbGlua3NIZWxwZXIuZ2V0UXVlcnlQYXJhbXMoYnV0dG9uLmxpbmspXHJcbiAgICAgICAgfVxyXG4gICAgICB9IDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19