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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXBhZ2UtdGl0bGUuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFBeUMsdUNBQVU7SUFBbkQ7O0lBd0JBLENBQUM7SUF2QlcsdUNBQVMsR0FBbkI7UUFDUSxJQUFBLHdCQUFzRCxFQUFwRCxnQkFBSyxFQUFFLDRCQUFXLEVBQUUsc0JBQWdDLENBQUM7UUFDN0QsSUFBTSxJQUFJLEdBQW1CO1lBQzNCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNiLE9BQU8sRUFBRSxDQUFDO3dCQUNSLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQzt3QkFDaEMsTUFBTSxFQUFFOzRCQUNOLE9BQU8sRUFBRSxRQUFRO3lCQUNsQjtxQkFDRixDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBeEJELENBQXlDLFVBQVUsR0F3QmxEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1yU2VhcmNoUGFnZVRpdGxlRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSgpOiBJbm5lclRpdGxlRGF0YSB7XG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHNlYXJjaElkIH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xuICAgIGNvbnN0IGRhdGE6IElubmVyVGl0bGVEYXRhID0ge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgIHRleHQ6IF90KHRpdGxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbi5idXR0b25UZXh0KSB7XG4gICAgICBkYXRhLmFjdGlvbnMgPSB7XG4gICAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgICAgdGV4dDogX3QoZGVzY3JpcHRpb24uYnV0dG9uVGV4dCksXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBwYXlsb2FkOiBzZWFyY2hJZFxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiJdfQ==