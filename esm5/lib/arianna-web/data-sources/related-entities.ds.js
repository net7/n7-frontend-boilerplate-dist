import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwRelatedEntitiesDS = /** @class */ (function (_super) {
    __extends(AwRelatedEntitiesDS, _super);
    function AwRelatedEntitiesDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transform = function (data) {
            var basePath = _this.options.config.get('paths').entitaBasePath;
            var configKeys = _this.options.config.get('config-keys');
            var title = _this.options.title;
            var previews = data ? data.map(function (d) { return ({
                title: d.entity.label,
                anchor: {
                    href: "" + basePath + d.entity.id + "/" + d.entity.label,
                },
                classes: (configKeys[d.entity.typeOfEntity])
                    ? "is-" + configKeys[d.entity.typeOfEntity]['class-name']
                    : null,
                metadata: [{
                        items: [{
                                label: 'Tipo di entità',
                                value: (configKeys[d.entity.typeOfEntity])
                                    ? configKeys[d.entity.typeOfEntity].label
                                    : d.entity.typeOfEntity,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvcmVsYXRlZC1lbnRpdGllcy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXlDLHVDQUFVO0lBQW5EO1FBQUEscUVBNkJDO1FBNUJXLGVBQVMsR0FBRyxVQUFDLElBQUk7WUFDekIsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUNqRSxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEQsSUFBQSwyQkFBSyxDQUFrQjtZQUMvQixJQUFNLFFBQVEsR0FBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQztnQkFDMUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDckIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxLQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQU87aUJBQ3BEO2dCQUNELE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUMsUUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUc7b0JBQ3pELENBQUMsQ0FBQyxJQUFJO2dCQUNSLFFBQVEsRUFBRSxDQUFDO3dCQUNULEtBQUssRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxnQkFBZ0I7Z0NBQ3ZCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29DQUN4QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSztvQ0FDekMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWTs2QkFDMUIsQ0FBQztxQkFDSCxDQUFDO2dCQUNGLGlFQUFpRTtnQkFDakUsUUFBUSxFQUFFO29CQUNSLEdBQUcsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLEtBQUs7b0JBQzVCLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJO2lCQUNqQzthQUNGLENBQUMsRUFyQnlELENBcUJ6RCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBN0JELENBQXlDLFVBQVUsR0E2QmxEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgSXRlbVByZXZpZXdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3UmVsYXRlZEVudGl0aWVzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtID0gKGRhdGEpOiB7IHByZXZpZXdzOiBJdGVtUHJldmlld0RhdGFbXSB9ID0+IHtcclxuICAgIGNvbnN0IGJhc2VQYXRoID0gdGhpcy5vcHRpb25zLmNvbmZpZy5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGg7XHJcbiAgICBjb25zdCBjb25maWdLZXlzID0gdGhpcy5vcHRpb25zLmNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJyk7XHJcbiAgICBjb25zdCB7IHRpdGxlIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICBjb25zdCBwcmV2aWV3czogSXRlbVByZXZpZXdEYXRhW10gPSBkYXRhID8gZGF0YS5tYXAoKGQpID0+ICh7XHJcbiAgICAgIHRpdGxlOiBkLmVudGl0eS5sYWJlbCxcclxuICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgaHJlZjogYCR7YmFzZVBhdGh9JHtkLmVudGl0eS5pZH0vJHtkLmVudGl0eS5sYWJlbH1gLFxyXG4gICAgICB9LFxyXG4gICAgICBjbGFzc2VzOiAoY29uZmlnS2V5c1tkLmVudGl0eS50eXBlT2ZFbnRpdHldKVxyXG4gICAgICAgID8gYGlzLSR7Y29uZmlnS2V5c1tkLmVudGl0eS50eXBlT2ZFbnRpdHldWydjbGFzcy1uYW1lJ119YFxyXG4gICAgICAgIDogbnVsbCwgLy8gYWRkcyBjb2xvciB0byB0aGUgdGl0bGVcclxuICAgICAgbWV0YWRhdGE6IFt7XHJcbiAgICAgICAgaXRlbXM6IFt7XHJcbiAgICAgICAgICBsYWJlbDogJ1RpcG8gZGkgZW50aXTDoCcsXHJcbiAgICAgICAgICB2YWx1ZTogKGNvbmZpZ0tleXNbZC5lbnRpdHkudHlwZU9mRW50aXR5XSlcclxuICAgICAgICAgICAgPyBjb25maWdLZXlzW2QuZW50aXR5LnR5cGVPZkVudGl0eV0ubGFiZWxcclxuICAgICAgICAgICAgOiBkLmVudGl0eS50eXBlT2ZFbnRpdHksXHJcbiAgICAgICAgfV0sXHJcbiAgICAgIH1dLFxyXG4gICAgICAvLyBBIHNwZWNpYWwga2luZCBvZiBtZXRhZGF0YSwgbm90IHRvIGJlIHZpZXdlZCBhcyBvdGhlciBtZXRhZGF0YVxyXG4gICAgICByZWxhdGlvbjoge1xyXG4gICAgICAgIGtleTogZC5yZWxhdGlvbk5hbWUgfHwgdGl0bGUsXHJcbiAgICAgICAgdmFsdWU6IGQuZW50aXR5LnJlbGF0aW9uIHx8IG51bGxcclxuICAgICAgfSxcclxuICAgIH0pKSA6IFtdO1xyXG4gICAgcmV0dXJuIHsgcHJldmlld3MgfTtcclxuICB9O1xyXG59XHJcbiJdfQ==