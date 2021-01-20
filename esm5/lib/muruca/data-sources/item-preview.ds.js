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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaXRlbS1wcmV2aWV3LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxJQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQUVGO0lBQXFDLG1DQUFVO0lBQS9DOztJQXdCQSxDQUFDO0lBckJXLG1DQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDckIsSUFBQSxpQkFBdUMsRUFBckMsb0JBQU8sRUFBRSw0QkFBNEIsQ0FBQztRQUM5QyxJQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdFLFlBQVk7UUFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsUUFBUTtRQUNSLElBQUksa0JBQWtCLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0UsSUFBSSxDQUFDLElBQUksR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFFBQUssQ0FBQztTQUN0RTtRQUNELDZCQUNLLElBQUksS0FDUCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuRCxFQUNELE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRSxJQUN0QjtJQUNKLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBcUMsVUFBVSxHQXdCOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcnMnO1xuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcblxuY29uc3QgSVRFTV9QUkVWSUVXX0RFRkFVTFRTID0ge1xuICBsaW1pdDogMTAwLFxuICBzdHJpcHRhZ3M6IHRydWVcbn07XG5cbmV4cG9ydCBjbGFzcyBNckl0ZW1QcmV2aWV3RFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyBjbGFzc2VzLCBpdGVtUHJldmlldyB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IGl0ZW1QcmV2aWV3T3B0aW9ucyA9IG1lcmdlKElURU1fUFJFVklFV19ERUZBVUxUUywgKGl0ZW1QcmV2aWV3IHx8IHt9KSk7XG5cbiAgICAvLyBzdHJpcHRhZ3NcbiAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLnN0cmlwdGFncykge1xuICAgICAgZGF0YS50ZXh0ID0gaGVscGVycy5zdHJpcHRhZ3MoZGF0YS50ZXh0KTtcbiAgICB9XG4gICAgLy8gbGltaXRcbiAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0ICYmIChkYXRhLnRleHQubGVuZ3RoID4gaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KSkge1xuICAgICAgZGF0YS50ZXh0ID0gYCR7ZGF0YS50ZXh0LnN1YnN0cmluZygwLCBpdGVtUHJldmlld09wdGlvbnMubGltaXQpfS4uLmA7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6IGxpbmtzSGVscGVyLmdldFJvdXRlckxpbmsoZGF0YS5saW5rKSxcbiAgICAgICAgcXVlcnlQYXJhbXM6IGxpbmtzSGVscGVyLmdldFF1ZXJ5UGFyYW1zKGRhdGEubGluaylcbiAgICAgIH0sXG4gICAgICBjbGFzc2VzOiBjbGFzc2VzIHx8ICcnXG4gICAgfTtcbiAgfVxufVxuIl19