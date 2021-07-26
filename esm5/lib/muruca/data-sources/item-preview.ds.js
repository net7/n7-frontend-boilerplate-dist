import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import { merge } from 'lodash';
import helpers from '../../common/helpers';
import linksHelper from '../helpers/links-helper';
var ITEM_PREVIEW_DEFAULTS = {
    limit: 100,
    striptags: true
};
var MrItemPreviewDS = /** @class */ (function (_super) {
    __extends(MrItemPreviewDS, _super);
    function MrItemPreviewDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrItemPreviewDS.prototype.transform = function (data) {
        if (!data)
            return null;
        var _a = this.options, classes = _a.classes, itemPreview = _a.itemPreview;
        var itemPreviewOptions = merge(ITEM_PREVIEW_DEFAULTS, (itemPreview || {}));
        // striptags
        if (itemPreviewOptions.striptags) {
            data.text = helpers.striptags(data.text);
        }
        // limit
        if (itemPreviewOptions.limit && (data.text.length > itemPreviewOptions.limit)) {
            data.text = data.text.substring(0, itemPreviewOptions.limit) + "...";
        }
        return __assign(__assign({}, data), { anchor: {
                href: linksHelper.getRouterLink(data.link),
                queryParams: linksHelper.getQueryParams(data.link)
            }, classes: classes || '' });
    };
    return MrItemPreviewDS;
}(DataSource));
export { MrItemPreviewDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaXRlbS1wcmV2aWV3LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxJQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQUVGO0lBQXFDLG1DQUFVO0lBQS9DOztJQXlCQSxDQUFDO0lBdEJXLG1DQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDM0IsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNqQixJQUFBLGlCQUF1QyxFQUFyQyxvQkFBTyxFQUFFLDRCQUE0QixDQUFDO1FBQzlDLElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0UsWUFBWTtRQUNaLElBQUksa0JBQWtCLENBQUMsU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUM7UUFDRCxRQUFRO1FBQ1IsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsUUFBSyxDQUFDO1NBQ3RFO1FBQ0QsNkJBQ0ssSUFBSSxLQUNQLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxXQUFXLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25ELEVBQ0QsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFLElBQ3RCO0lBQ0osQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUFxQyxVQUFVLEdBeUI5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycyc7XHJcbmltcG9ydCBsaW5rc0hlbHBlciBmcm9tICcuLi9oZWxwZXJzL2xpbmtzLWhlbHBlcic7XHJcblxyXG5jb25zdCBJVEVNX1BSRVZJRVdfREVGQVVMVFMgPSB7XHJcbiAgbGltaXQ6IDEwMCxcclxuICBzdHJpcHRhZ3M6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNckl0ZW1QcmV2aWV3RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IEl0ZW1QcmV2aWV3RGF0YSB7XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgeyBjbGFzc2VzLCBpdGVtUHJldmlldyB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgaXRlbVByZXZpZXdPcHRpb25zID0gbWVyZ2UoSVRFTV9QUkVWSUVXX0RFRkFVTFRTLCAoaXRlbVByZXZpZXcgfHwge30pKTtcclxuXHJcbiAgICAvLyBzdHJpcHRhZ3NcclxuICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMuc3RyaXB0YWdzKSB7XHJcbiAgICAgIGRhdGEudGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGRhdGEudGV4dCk7XHJcbiAgICB9XHJcbiAgICAvLyBsaW1pdFxyXG4gICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoZGF0YS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcclxuICAgICAgZGF0YS50ZXh0ID0gYCR7ZGF0YS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGRhdGEubGluayksXHJcbiAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGRhdGEubGluaylcclxuICAgICAgfSxcclxuICAgICAgY2xhc3NlczogY2xhc3NlcyB8fCAnJ1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19