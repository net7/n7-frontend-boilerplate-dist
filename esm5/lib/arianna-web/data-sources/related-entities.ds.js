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
                    target: '_blank'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvcmVsYXRlZC1lbnRpdGllcy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXlDLHVDQUFVO0lBQW5EO1FBQUEscUVBbUJDO1FBbEJXLGVBQVMsR0FBRyxVQUFDLElBQUk7WUFDekIsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUNqRSxJQUFNLFFBQVEsR0FBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQztnQkFDMUQsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDckIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxLQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQU87b0JBQ25ELE1BQU0sRUFBRSxRQUFRO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsUUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQWM7Z0JBQ3RDLFFBQVEsRUFBRSxDQUFDO3dCQUNULEtBQUssRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxnQkFBZ0I7Z0NBQ3ZCLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVk7NkJBQzdCLENBQUM7cUJBQ0gsQ0FBQzthQUNILENBQUMsRUFieUQsQ0FhekQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVCxPQUFPLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7O0lBQ0osQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQW5CRCxDQUF5QyxVQUFVLEdBbUJsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd1JlbGF0ZWRFbnRpdGllc0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSk6IHsgcHJldmlld3M6IEl0ZW1QcmV2aWV3RGF0YVtdIH0gPT4ge1xuICAgIGNvbnN0IGJhc2VQYXRoID0gdGhpcy5vcHRpb25zLmNvbmZpZy5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGg7XG4gICAgY29uc3QgcHJldmlld3M6IEl0ZW1QcmV2aWV3RGF0YVtdID0gZGF0YSA/IGRhdGEubWFwKChkKSA9PiAoe1xuICAgICAgdGl0bGU6IGQuZW50aXR5LmxhYmVsLFxuICAgICAgYW5jaG9yOiB7XG4gICAgICAgIGhyZWY6IGAke2Jhc2VQYXRofSR7ZC5lbnRpdHkuaWR9LyR7ZC5lbnRpdHkubGFiZWx9YCxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgfSxcbiAgICAgIGNsYXNzZXM6IGBpcy0ke2QuZW50aXR5LnR5cGVPZkVudGl0eX1gLCAvLyBhZGRzIGNvbG9yIHRvIHRoZSB0aXRsZVxuICAgICAgbWV0YWRhdGE6IFt7XG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgIGxhYmVsOiAnVGlwbyBkaSBlbnRpdMOgJyxcbiAgICAgICAgICB2YWx1ZTogZC5lbnRpdHkudHlwZU9mRW50aXR5LFxuICAgICAgICB9XVxuICAgICAgfV1cbiAgICB9KSkgOiBbXTtcbiAgICByZXR1cm4geyBwcmV2aWV3cyB9O1xuICB9O1xufVxuIl19