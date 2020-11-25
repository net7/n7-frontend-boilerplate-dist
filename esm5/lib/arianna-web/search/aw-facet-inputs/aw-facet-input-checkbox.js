import { __extends } from "tslib";
import { AwFacetInput } from './aw-facet-input';
var AwFacetInputCheckbox = /** @class */ (function (_super) {
    __extends(AwFacetInputCheckbox, _super);
    function AwFacetInputCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwFacetInputCheckbox.prototype.transform = function () {
        var _this = this;
        var facetId = this.getFacetId();
        return this.data.map(function (_a, index) {
            var label = _a.label, value = _a.value;
            return ({
                type: 'checkbox',
                id: _this.getId() + "-" + index,
                label: label,
                payload: {
                    facetId: facetId,
                    source: 'input-checkbox',
                    value: "" + value,
                },
                _meta: { facetId: facetId, value: "" + value },
            });
        });
    };
    AwFacetInputCheckbox.prototype.setActive = function (facetValue) {
        var isArray = this.config.filterConfig.isArray;
        this.output.forEach(function (config) {
            if (isArray && Array.isArray(facetValue) && facetValue.indexOf(config._meta.value) !== -1) {
                config.checked = true;
            }
            else if (facetValue === config._meta.value) {
                config.checked = true;
            }
            else {
                config.checked = false;
            }
        });
    };
    return AwFacetInputCheckbox;
}(AwFacetInput));
export { AwFacetInputCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXctZmFjZXQtaW5wdXQtY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvc2VhcmNoL2F3LWZhY2V0LWlucHV0cy9hdy1mYWNldC1pbnB1dC1jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWhEO0lBQTBDLHdDQUFZO0lBQXREOztJQThCQSxDQUFDO0lBN0JXLHdDQUFTLEdBQW5CO1FBQUEsaUJBY0M7UUFiQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQWdCLEVBQUUsS0FBSztnQkFBckIsZ0JBQUssRUFBRSxnQkFBSztZQUFjLE9BQUEsQ0FBQztnQkFDakQsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEVBQUUsRUFBSyxLQUFJLENBQUMsS0FBSyxFQUFFLFNBQUksS0FBTztnQkFDOUIsS0FBSyxPQUFBO2dCQUNMLE9BQU8sRUFBRTtvQkFDUCxPQUFPLFNBQUE7b0JBQ1AsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsS0FBSyxFQUFFLEtBQUcsS0FBTztpQkFDbEI7Z0JBQ0QsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUcsS0FBTyxFQUFFO2FBQ3RDLENBQUM7UUFWZ0QsQ0FVaEQsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVNLHdDQUFTLEdBQWhCLFVBQWlCLFVBQVU7UUFDakIsSUFBQSwwQ0FBTyxDQUE4QjtRQUU3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDekIsSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksVUFBVSxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM1QyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTlCRCxDQUEwQyxZQUFZLEdBOEJyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3RmFjZXRJbnB1dCB9IGZyb20gJy4vYXctZmFjZXQtaW5wdXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3RmFjZXRJbnB1dENoZWNrYm94IGV4dGVuZHMgQXdGYWNldElucHV0IHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCkge1xyXG4gICAgY29uc3QgZmFjZXRJZCA9IHRoaXMuZ2V0RmFjZXRJZCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmRhdGEubWFwKCh7IGxhYmVsLCB2YWx1ZSB9LCBpbmRleCkgPT4gKHtcclxuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgaWQ6IGAke3RoaXMuZ2V0SWQoKX0tJHtpbmRleH1gLFxyXG4gICAgICBsYWJlbCxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGZhY2V0SWQsXHJcbiAgICAgICAgc291cmNlOiAnaW5wdXQtY2hlY2tib3gnLFxyXG4gICAgICAgIHZhbHVlOiBgJHt2YWx1ZX1gLFxyXG4gICAgICB9LFxyXG4gICAgICBfbWV0YTogeyBmYWNldElkLCB2YWx1ZTogYCR7dmFsdWV9YCB9LFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEFjdGl2ZShmYWNldFZhbHVlKSB7XHJcbiAgICBjb25zdCB7IGlzQXJyYXkgfSA9IHRoaXMuY29uZmlnLmZpbHRlckNvbmZpZztcclxuXHJcbiAgICB0aGlzLm91dHB1dC5mb3JFYWNoKChjb25maWcpID0+IHtcclxuICAgICAgaWYgKGlzQXJyYXkgJiYgQXJyYXkuaXNBcnJheShmYWNldFZhbHVlKSAmJiBmYWNldFZhbHVlLmluZGV4T2YoY29uZmlnLl9tZXRhLnZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICBjb25maWcuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmFjZXRWYWx1ZSA9PT0gY29uZmlnLl9tZXRhLnZhbHVlKSB7XHJcbiAgICAgICAgY29uZmlnLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbmZpZy5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=