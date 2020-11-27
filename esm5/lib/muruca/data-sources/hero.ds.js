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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvZGF0YS1zb3VyY2VzL2hlcm8uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRDtJQUE4Qiw0QkFBVTtJQUF4Qzs7SUF5QkEsQ0FBQztJQXRCVyw0QkFBUyxHQUFuQixVQUFvQixJQUFTO1FBQ3JCLElBQUEsaUJBQXNDLEVBQXBDLG9CQUFPLEVBQUUsMEJBQTJCLENBQUM7UUFFM0MsSUFBQSxnQkFBSSxFQUFFLGtCQUFLLEVBQUUsa0JBQUssRUFBRSxvQkFBTSxDQUNuQjtRQUNULElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFbEQsT0FBTztZQUNMLElBQUksTUFBQTtZQUNKLEtBQUssT0FBQTtZQUNMLE9BQU8sU0FBQTtZQUNQLGVBQWUsaUJBQUE7WUFDZixLQUFLLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUN0QyxNQUFNLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyx1QkFDMUIsTUFBTSxLQUNULE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUM1QyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2lCQUNyRCxJQUNELENBQUMsQ0FBQyxJQUFJO1NBQ1QsQ0FBQztJQUNKLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUE4QixVQUFVLEdBeUJ2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgTXJIZXJvRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyBjbGFzc2VzLCBiYWNrZ3JvdW5kIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3Qge1xuICAgICAgdGV4dCwgaW1hZ2UsIHRpdGxlLCBidXR0b25cbiAgICB9ID0gZGF0YTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBiYWNrZ3JvdW5kID8gaW1hZ2UgOiBudWxsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQsXG4gICAgICB0aXRsZSxcbiAgICAgIGNsYXNzZXMsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICBpbWFnZTogIWJhY2tncm91bmRJbWFnZSA/IGltYWdlIDogbnVsbCxcbiAgICAgIGJ1dHRvbjogYnV0dG9uICYmIGJ1dHRvbi5saW5rID8ge1xuICAgICAgICAuLi5idXR0b24sXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsoYnV0dG9uLmxpbmspLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhidXR0b24ubGluaylcbiAgICAgICAgfVxuICAgICAgfSA6IG51bGxcbiAgICB9O1xuICB9XG59XG4iXX0=