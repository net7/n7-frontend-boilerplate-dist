import { __extends } from "tslib";
import { DataSource, _t } from '@n7-frontend/core';
var MrSearchPageDescriptionDS = /** @class */ (function (_super) {
    __extends(MrSearchPageDescriptionDS, _super);
    function MrSearchPageDescriptionDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrSearchPageDescriptionDS.prototype.transform = function (data) {
        var description = this.options.config.description;
        if (!description) {
            return null;
        }
        var linkText = description.linkText;
        var text = data.text;
        return {
            text: text,
            link: {
                text: _t(linkText),
                payload: true
            }
        };
    };
    return MrSearchPageDescriptionDS;
}(DataSource));
export { MrSearchPageDescriptionDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHbkQ7SUFBK0MsNkNBQVU7SUFBekQ7O0lBbUJBLENBQUM7SUFsQlcsNkNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsNkNBQVcsQ0FBeUI7UUFFNUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRU8sSUFBQSwrQkFBUSxDQUFpQjtRQUN6QixJQUFBLGdCQUFJLENBQVU7UUFFdEIsT0FBTztZQUNMLElBQUksTUFBQTtZQUNKLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDbEIsT0FBTyxFQUFFLElBQUk7YUFDZDtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBbkJELENBQStDLFVBQVUsR0FtQnhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IFNlYXJjaFBhZ2VEZXNjcmlwdGlvbkRhdGEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlYXJjaC1wYWdlLWRlc2NyaXB0aW9uL3NlYXJjaC1wYWdlLWRlc2NyaXB0aW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNclNlYXJjaFBhZ2VEZXNjcmlwdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKTogU2VhcmNoUGFnZURlc2NyaXB0aW9uRGF0YSB7XHJcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSB0aGlzLm9wdGlvbnMuY29uZmlnO1xyXG5cclxuICAgIGlmICghZGVzY3JpcHRpb24pIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBsaW5rVGV4dCB9ID0gZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCB7IHRleHQgfSA9IGRhdGE7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGV4dCxcclxuICAgICAgbGluazoge1xyXG4gICAgICAgIHRleHQ6IF90KGxpbmtUZXh0KSxcclxuICAgICAgICBwYXlsb2FkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==