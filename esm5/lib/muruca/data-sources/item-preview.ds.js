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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmV2aWV3LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvaXRlbS1wcmV2aWV3LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxJQUFNLHFCQUFxQixHQUFHO0lBQzVCLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztBQUVGO0lBQXFDLG1DQUFVO0lBQS9DOztJQXdCQSxDQUFDO0lBckJXLG1DQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFDckIsSUFBQSxpQkFBdUMsRUFBckMsb0JBQU8sRUFBRSw0QkFBNEIsQ0FBQztRQUM5QyxJQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdFLFlBQVk7UUFDWixJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsUUFBUTtRQUNSLElBQUksa0JBQWtCLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0UsSUFBSSxDQUFDLElBQUksR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFFBQUssQ0FBQztTQUN0RTtRQUNELDZCQUNLLElBQUksS0FDUCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDMUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNuRCxFQUNELE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRSxJQUN0QjtJQUNKLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBcUMsVUFBVSxHQXdCOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuaW1wb3J0IGxpbmtzSGVscGVyIGZyb20gJy4uL2hlbHBlcnMvbGlua3MtaGVscGVyJztcclxuXHJcbmNvbnN0IElURU1fUFJFVklFV19ERUZBVUxUUyA9IHtcclxuICBsaW1pdDogMTAwLFxyXG4gIHN0cmlwdGFnczogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ySXRlbVByZXZpZXdEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHsgY2xhc3NlcywgaXRlbVByZXZpZXcgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IGl0ZW1QcmV2aWV3T3B0aW9ucyA9IG1lcmdlKElURU1fUFJFVklFV19ERUZBVUxUUywgKGl0ZW1QcmV2aWV3IHx8IHt9KSk7XHJcblxyXG4gICAgLy8gc3RyaXB0YWdzXHJcbiAgICBpZiAoaXRlbVByZXZpZXdPcHRpb25zLnN0cmlwdGFncykge1xyXG4gICAgICBkYXRhLnRleHQgPSBoZWxwZXJzLnN0cmlwdGFncyhkYXRhLnRleHQpO1xyXG4gICAgfVxyXG4gICAgLy8gbGltaXRcclxuICAgIGlmIChpdGVtUHJldmlld09wdGlvbnMubGltaXQgJiYgKGRhdGEudGV4dC5sZW5ndGggPiBpdGVtUHJldmlld09wdGlvbnMubGltaXQpKSB7XHJcbiAgICAgIGRhdGEudGV4dCA9IGAke2RhdGEudGV4dC5zdWJzdHJpbmcoMCwgaXRlbVByZXZpZXdPcHRpb25zLmxpbWl0KX0uLi5gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgaHJlZjogbGlua3NIZWxwZXIuZ2V0Um91dGVyTGluayhkYXRhLmxpbmspLFxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBsaW5rc0hlbHBlci5nZXRRdWVyeVBhcmFtcyhkYXRhLmxpbmspXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMgfHwgJydcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==