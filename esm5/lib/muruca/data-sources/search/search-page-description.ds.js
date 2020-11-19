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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9zZWFyY2gvc2VhcmNoLXBhZ2UtZGVzY3JpcHRpb24uZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHbkQ7SUFBK0MsNkNBQVU7SUFBekQ7O0lBbUJBLENBQUM7SUFsQlcsNkNBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUNkLElBQUEsNkNBQVcsQ0FBeUI7UUFFNUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRU8sSUFBQSwrQkFBUSxDQUFpQjtRQUN6QixJQUFBLGdCQUFJLENBQVU7UUFFdEIsT0FBTztZQUNMLElBQUksTUFBQTtZQUNKLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDbEIsT0FBTyxFQUFFLElBQUk7YUFDZDtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBbkJELENBQStDLFVBQVUsR0FtQnhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSwgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hQYWdlRGVzY3JpcHRpb25EYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWFyY2gtcGFnZS1kZXNjcmlwdGlvbi9zZWFyY2gtcGFnZS1kZXNjcmlwdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBNclNlYXJjaFBhZ2VEZXNjcmlwdGlvbkRTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSk6IFNlYXJjaFBhZ2VEZXNjcmlwdGlvbkRhdGEge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IHRoaXMub3B0aW9ucy5jb25maWc7XG5cbiAgICBpZiAoIWRlc2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGxpbmtUZXh0IH0gPSBkZXNjcmlwdGlvbjtcbiAgICBjb25zdCB7IHRleHQgfSA9IGRhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dCxcbiAgICAgIGxpbms6IHtcbiAgICAgICAgdGV4dDogX3QobGlua1RleHQpLFxuICAgICAgICBwYXlsb2FkOiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19