import { __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrSearchPageTitleDS = /** @class */ (function (_super) {
    __extends(MrSearchPageTitleDS, _super);
    function MrSearchPageTitleDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrSearchPageTitleDS.prototype.transform = function () {
        var _a = this.options.config, title = _a.title, description = _a.description, searchId = _a.searchId;
        var data = {
            title: {
                main: {
                    text: _t(title)
                }
            }
        };
        if (description && description.buttonText) {
            data.actions = {
                buttons: [{
                        text: _t(description.buttonText),
                        anchor: {
                            payload: searchId
                        }
                    }]
            };
        }
        return data;
    };
    return MrSearchPageTitleDS;
}(DataSource));
export { MrSearchPageTitleDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXBhZ2UtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBeUMsdUNBQVU7SUFBbkQ7O0lBd0JBLENBQUM7SUF2QlcsdUNBQVMsR0FBbkI7UUFDUSxJQUFBLHdCQUFzRCxFQUFwRCxnQkFBSyxFQUFFLDRCQUFXLEVBQUUsc0JBQWdDLENBQUM7UUFDN0QsSUFBTSxJQUFJLEdBQW1CO1lBQzNCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNiLE9BQU8sRUFBRSxDQUFDO3dCQUNSLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQzt3QkFDaEMsTUFBTSxFQUFFOzRCQUNOLE9BQU8sRUFBRSxRQUFRO3lCQUNsQjtxQkFDRixDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBeEJELENBQXlDLFVBQVUsR0F3QmxEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUGFnZVRpdGxlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKCk6IElubmVyVGl0bGVEYXRhIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzZWFyY2hJZCB9ID0gdGhpcy5vcHRpb25zLmNvbmZpZztcclxuICAgIGNvbnN0IGRhdGE6IElubmVyVGl0bGVEYXRhID0ge1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIG1haW46IHtcclxuICAgICAgICAgIHRleHQ6IF90KHRpdGxlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24uYnV0dG9uVGV4dCkge1xyXG4gICAgICBkYXRhLmFjdGlvbnMgPSB7XHJcbiAgICAgICAgYnV0dG9uczogW3tcclxuICAgICAgICAgIHRleHQ6IF90KGRlc2NyaXB0aW9uLmJ1dHRvblRleHQpLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHNlYXJjaElkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuIl19