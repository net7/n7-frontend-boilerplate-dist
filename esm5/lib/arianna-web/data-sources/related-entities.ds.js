import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwRelatedEntitiesDS = /** @class */ (function (_super) {
    __extends(AwRelatedEntitiesDS, _super);
    function AwRelatedEntitiesDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transform = function (data) {
            var basePath = _this.options.config.get('paths').entitaBasePath;
            var previews = data ? data.map(function (d) { return ({
                title: d.entity.label,
                anchor: {
                    href: "" + basePath + d.entity.id + "/" + d.entity.label,
                },
                classes: "is-" + d.entity.typeOfEntity,
                metadata: [{
                        items: [{
                                label: 'Tipo di entità',
                                value: d.entity.typeOfEntity,
                            }]
                    }]
            }); }) : [];
            return { previews: previews };
        };
        return _this;
    }
    return AwRelatedEntitiesDS;
}(DataSource));
export { AwRelatedEntitiesDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvcmVsYXRlZC1lbnRpdGllcy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXlDLHVDQUFVO0lBQW5EO1FBQUEscUVBa0JDO1FBakJXLGVBQVMsR0FBRyxVQUFDLElBQUk7WUFDekIsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUNqRSxJQUFNLFFBQVEsR0FBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQztnQkFDMUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDckIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxLQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQU87aUJBQ3BEO2dCQUNELE9BQU8sRUFBRSxRQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBYztnQkFDdEMsUUFBUSxFQUFFLENBQUM7d0JBQ1QsS0FBSyxFQUFFLENBQUM7Z0NBQ04sS0FBSyxFQUFFLGdCQUFnQjtnQ0FDdkIsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWTs2QkFDN0IsQ0FBQztxQkFDSCxDQUFDO2FBQ0gsQ0FBQyxFQVp5RCxDQVl6RCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBbEJELENBQXlDLFVBQVUsR0FrQmxEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIEF3UmVsYXRlZEVudGl0aWVzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKTogeyBwcmV2aWV3czogSXRlbVByZXZpZXdEYXRhW10gfSA9PiB7XG4gICAgY29uc3QgYmFzZVBhdGggPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aDtcbiAgICBjb25zdCBwcmV2aWV3czogSXRlbVByZXZpZXdEYXRhW10gPSBkYXRhID8gZGF0YS5tYXAoKGQpID0+ICh7XG4gICAgICB0aXRsZTogZC5lbnRpdHkubGFiZWwsXG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgaHJlZjogYCR7YmFzZVBhdGh9JHtkLmVudGl0eS5pZH0vJHtkLmVudGl0eS5sYWJlbH1gLFxuICAgICAgfSxcbiAgICAgIGNsYXNzZXM6IGBpcy0ke2QuZW50aXR5LnR5cGVPZkVudGl0eX1gLCAvLyBhZGRzIGNvbG9yIHRvIHRoZSB0aXRsZVxuICAgICAgbWV0YWRhdGE6IFt7XG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgIGxhYmVsOiAnVGlwbyBkaSBlbnRpdMOgJyxcbiAgICAgICAgICB2YWx1ZTogZC5lbnRpdHkudHlwZU9mRW50aXR5LFxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9KSkgOiBbXTtcbiAgICByZXR1cm4geyBwcmV2aWV3cyB9O1xuICB9O1xufVxuIl19