import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwRelatedEntitiesDS = /** @class */ (function (_super) {
    __extends(AwRelatedEntitiesDS, _super);
    function AwRelatedEntitiesDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transform = function (data) {
            var basePath = _this.options.config.get('paths').entitaBasePath;
            var title = _this.options.title;
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
                            }],
                    }],
                // A special kind of metadata, not to be viewed as other metadata
                relation: {
                    key: d.relationName || title,
                    value: d.entity.relation || null
                },
            }); }) : [];
            return { previews: previews };
        };
        return _this;
    }
    return AwRelatedEntitiesDS;
}(DataSource));
export { AwRelatedEntitiesDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvcmVsYXRlZC1lbnRpdGllcy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXlDLHVDQUFVO0lBQW5EO1FBQUEscUVBd0JDO1FBdkJXLGVBQVMsR0FBRyxVQUFDLElBQUk7WUFDekIsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUN6RCxJQUFBLDJCQUFLLENBQWtCO1lBQy9CLElBQU0sUUFBUSxHQUFzQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDO2dCQUMxRCxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNyQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEtBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBTztpQkFDcEQ7Z0JBQ0QsT0FBTyxFQUFFLFFBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFjO2dCQUN0QyxRQUFRLEVBQUUsQ0FBQzt3QkFDVCxLQUFLLEVBQUUsQ0FBQztnQ0FDTixLQUFLLEVBQUUsZ0JBQWdCO2dDQUN2QixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZOzZCQUM3QixDQUFDO3FCQUNILENBQUM7Z0JBQ0YsaUVBQWlFO2dCQUNqRSxRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksS0FBSztvQkFDNUIsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7aUJBQ2pDO2FBQ0YsQ0FBQyxFQWpCeUQsQ0FpQnpELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDOztJQUNKLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBeUMsVUFBVSxHQXdCbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQXdSZWxhdGVkRW50aXRpZXNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpOiB7IHByZXZpZXdzOiBJdGVtUHJldmlld0RhdGFbXSB9ID0+IHtcbiAgICBjb25zdCBiYXNlUGF0aCA9IHRoaXMub3B0aW9ucy5jb25maWcuZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoO1xuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBwcmV2aWV3czogSXRlbVByZXZpZXdEYXRhW10gPSBkYXRhID8gZGF0YS5tYXAoKGQpID0+ICh7XG4gICAgICB0aXRsZTogZC5lbnRpdHkubGFiZWwsXG4gICAgICBhbmNob3I6IHtcbiAgICAgICAgaHJlZjogYCR7YmFzZVBhdGh9JHtkLmVudGl0eS5pZH0vJHtkLmVudGl0eS5sYWJlbH1gLFxuICAgICAgfSxcbiAgICAgIGNsYXNzZXM6IGBpcy0ke2QuZW50aXR5LnR5cGVPZkVudGl0eX1gLCAvLyBhZGRzIGNvbG9yIHRvIHRoZSB0aXRsZVxuICAgICAgbWV0YWRhdGE6IFt7XG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgIGxhYmVsOiAnVGlwbyBkaSBlbnRpdMOgJyxcbiAgICAgICAgICB2YWx1ZTogZC5lbnRpdHkudHlwZU9mRW50aXR5LFxuICAgICAgICB9XSxcbiAgICAgIH1dLFxuICAgICAgLy8gQSBzcGVjaWFsIGtpbmQgb2YgbWV0YWRhdGEsIG5vdCB0byBiZSB2aWV3ZWQgYXMgb3RoZXIgbWV0YWRhdGFcbiAgICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIGtleTogZC5yZWxhdGlvbk5hbWUgfHwgdGl0bGUsXG4gICAgICAgIHZhbHVlOiBkLmVudGl0eS5yZWxhdGlvbiB8fCBudWxsXG4gICAgICB9LFxuICAgIH0pKSA6IFtdO1xuICAgIHJldHVybiB7IHByZXZpZXdzIH07XG4gIH07XG59XG4iXX0=