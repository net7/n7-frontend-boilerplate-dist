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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvcmVsYXRlZC1lbnRpdGllcy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXlDLHVDQUFVO0lBQW5EO1FBQUEscUVBNkJDO1FBNUJXLGVBQVMsR0FBRyxVQUFDLElBQUk7WUFDekIsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUNqRSxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEQsSUFBQSwyQkFBSyxDQUFrQjtZQUMvQixJQUFNLFFBQVEsR0FBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQztnQkFDMUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDckIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxLQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQU87aUJBQ3BEO2dCQUNELE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUMsUUFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUc7b0JBQ3pELENBQUMsQ0FBQyxJQUFJO2dCQUNSLFFBQVEsRUFBRSxDQUFDO3dCQUNULEtBQUssRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxnQkFBZ0I7Z0NBQ3ZCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29DQUN4QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSztvQ0FDekMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWTs2QkFDMUIsQ0FBQztxQkFDSCxDQUFDO2dCQUNGLGlFQUFpRTtnQkFDakUsUUFBUSxFQUFFO29CQUNSLEdBQUcsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLEtBQUs7b0JBQzVCLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJO2lCQUNqQzthQUNGLENBQUMsRUFyQnlELENBcUJ6RCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQzs7SUFDSixDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBN0JELENBQXlDLFVBQVUsR0E2QmxEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIEF3UmVsYXRlZEVudGl0aWVzRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSA9IChkYXRhKTogeyBwcmV2aWV3czogSXRlbVByZXZpZXdEYXRhW10gfSA9PiB7XG4gICAgY29uc3QgYmFzZVBhdGggPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aDtcbiAgICBjb25zdCBjb25maWdLZXlzID0gdGhpcy5vcHRpb25zLmNvbmZpZy5nZXQoJ2NvbmZpZy1rZXlzJyk7XG4gICAgY29uc3QgeyB0aXRsZSB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGNvbnN0IHByZXZpZXdzOiBJdGVtUHJldmlld0RhdGFbXSA9IGRhdGEgPyBkYXRhLm1hcCgoZCkgPT4gKHtcbiAgICAgIHRpdGxlOiBkLmVudGl0eS5sYWJlbCxcbiAgICAgIGFuY2hvcjoge1xuICAgICAgICBocmVmOiBgJHtiYXNlUGF0aH0ke2QuZW50aXR5LmlkfS8ke2QuZW50aXR5LmxhYmVsfWAsXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogKGNvbmZpZ0tleXNbZC5lbnRpdHkudHlwZU9mRW50aXR5XSlcbiAgICAgICAgPyBgaXMtJHtjb25maWdLZXlzW2QuZW50aXR5LnR5cGVPZkVudGl0eV1bJ2NsYXNzLW5hbWUnXX1gXG4gICAgICAgIDogbnVsbCwgLy8gYWRkcyBjb2xvciB0byB0aGUgdGl0bGVcbiAgICAgIG1ldGFkYXRhOiBbe1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICBsYWJlbDogJ1RpcG8gZGkgZW50aXTDoCcsXG4gICAgICAgICAgdmFsdWU6IChjb25maWdLZXlzW2QuZW50aXR5LnR5cGVPZkVudGl0eV0pXG4gICAgICAgICAgICA/IGNvbmZpZ0tleXNbZC5lbnRpdHkudHlwZU9mRW50aXR5XS5sYWJlbFxuICAgICAgICAgICAgOiBkLmVudGl0eS50eXBlT2ZFbnRpdHksXG4gICAgICAgIH1dLFxuICAgICAgfV0sXG4gICAgICAvLyBBIHNwZWNpYWwga2luZCBvZiBtZXRhZGF0YSwgbm90IHRvIGJlIHZpZXdlZCBhcyBvdGhlciBtZXRhZGF0YVxuICAgICAgcmVsYXRpb246IHtcbiAgICAgICAga2V5OiBkLnJlbGF0aW9uTmFtZSB8fCB0aXRsZSxcbiAgICAgICAgdmFsdWU6IGQuZW50aXR5LnJlbGF0aW9uIHx8IG51bGxcbiAgICAgIH0sXG4gICAgfSkpIDogW107XG4gICAgcmV0dXJuIHsgcHJldmlld3MgfTtcbiAgfTtcbn1cbiJdfQ==