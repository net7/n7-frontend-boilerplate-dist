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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaXRlbS1wcmV2aWV3LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxJQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQUVGO0lBQXFDLG1DQUFVO0lBQS9DOztJQXdCQSxDQUFDO0lBckJXLG1DQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDckIsSUFBQSxpQkFBdUMsRUFBckMsb0JBQU8sRUFBRSw0QkFBNEIsQ0FBQztRQUM5QyxJQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdFLFlBQVk7UUFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsUUFBUTtRQUNSLElBQUksa0JBQWtCLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0UsSUFBSSxDQUFDLElBQUksR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFFBQUssQ0FBQztTQUN0RTtRQUNELDZCQUNLLElBQUksS0FDUCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuRCxFQUNELE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRSxJQUN0QjtJQUNKLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBcUMsVUFBVSxHQXdCOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbGlua3NIZWxwZXIgZnJvbSAnLi4vaGVscGVycy9saW5rcy1oZWxwZXInO1xyXG5cclxuY29uc3QgSVRFTV9QUkVWSUVXX0RFRkFVTFRTID0ge1xyXG4gIGxpbWl0OiAxMDAsXHJcbiAgc3RyaXB0YWdzOiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgTXJJdGVtUHJldmlld0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBJdGVtUHJldmlld0RhdGEge1xyXG4gICAgY29uc3QgeyBjbGFzc2VzLCBpdGVtUHJldmlldyB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgaXRlbVByZXZpZXdPcHRpb25zID0gbWVyZ2UoSVRFTV9QUkVWSUVXX0RFRkFVTFRTLCAoaXRlbVByZXZpZXcgfHwge30pKTtcclxuXHJcbiAgICAvLyBzdHJpcHRhZ3NcclxuICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMuc3RyaXB0YWdzKSB7XHJcbiAgICAgIGRhdGEudGV4dCA9IGhlbHBlcnMuc3RyaXB0YWdzKGRhdGEudGV4dCk7XHJcbiAgICB9XHJcbiAgICAvLyBsaW1pdFxyXG4gICAgaWYgKGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCAmJiAoZGF0YS50ZXh0Lmxlbmd0aCA+IGl0ZW1QcmV2aWV3T3B0aW9ucy5saW1pdCkpIHtcclxuICAgICAgZGF0YS50ZXh0ID0gYCR7ZGF0YS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBocmVmOiBsaW5rc0hlbHBlci5nZXRSb3V0ZXJMaW5rKGRhdGEubGluayksXHJcbiAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGRhdGEubGluaylcclxuICAgICAgfSxcclxuICAgICAgY2xhc3NlczogY2xhc3NlcyB8fCAnJ1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19