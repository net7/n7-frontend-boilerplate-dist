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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlZC1lbnRpdGllcy5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvcmVsYXRlZC1lbnRpdGllcy5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DO0lBQXlDLHVDQUFVO0lBQW5EO1FBQUEscUVBd0JDO1FBdkJXLGVBQVMsR0FBRyxVQUFDLElBQUk7WUFDekIsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUN6RCxJQUFBLDJCQUFLLENBQWtCO1lBQy9CLElBQU0sUUFBUSxHQUFzQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDO2dCQUMxRCxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNyQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEtBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBTztpQkFDcEQ7Z0JBQ0QsT0FBTyxFQUFFLFFBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFjO2dCQUN0QyxRQUFRLEVBQUUsQ0FBQzt3QkFDVCxLQUFLLEVBQUUsQ0FBQztnQ0FDTixLQUFLLEVBQUUsZ0JBQWdCO2dDQUN2QixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZOzZCQUM3QixDQUFDO3FCQUNILENBQUM7Z0JBQ0YsaUVBQWlFO2dCQUNqRSxRQUFRLEVBQUU7b0JBQ1IsR0FBRyxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksS0FBSztvQkFDNUIsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7aUJBQ2pDO2FBQ0YsQ0FBQyxFQWpCeUQsQ0FpQnpELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDOztJQUNKLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUF4QkQsQ0FBeUMsVUFBVSxHQXdCbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdSZWxhdGVkRW50aXRpZXNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0gPSAoZGF0YSk6IHsgcHJldmlld3M6IEl0ZW1QcmV2aWV3RGF0YVtdIH0gPT4ge1xyXG4gICAgY29uc3QgYmFzZVBhdGggPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgncGF0aHMnKS5lbnRpdGFCYXNlUGF0aDtcclxuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IHByZXZpZXdzOiBJdGVtUHJldmlld0RhdGFbXSA9IGRhdGEgPyBkYXRhLm1hcCgoZCkgPT4gKHtcclxuICAgICAgdGl0bGU6IGQuZW50aXR5LmxhYmVsLFxyXG4gICAgICBhbmNob3I6IHtcclxuICAgICAgICBocmVmOiBgJHtiYXNlUGF0aH0ke2QuZW50aXR5LmlkfS8ke2QuZW50aXR5LmxhYmVsfWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsYXNzZXM6IGBpcy0ke2QuZW50aXR5LnR5cGVPZkVudGl0eX1gLCAvLyBhZGRzIGNvbG9yIHRvIHRoZSB0aXRsZVxyXG4gICAgICBtZXRhZGF0YTogW3tcclxuICAgICAgICBpdGVtczogW3tcclxuICAgICAgICAgIGxhYmVsOiAnVGlwbyBkaSBlbnRpdMOgJyxcclxuICAgICAgICAgIHZhbHVlOiBkLmVudGl0eS50eXBlT2ZFbnRpdHksXHJcbiAgICAgICAgfV0sXHJcbiAgICAgIH1dLFxyXG4gICAgICAvLyBBIHNwZWNpYWwga2luZCBvZiBtZXRhZGF0YSwgbm90IHRvIGJlIHZpZXdlZCBhcyBvdGhlciBtZXRhZGF0YVxyXG4gICAgICByZWxhdGlvbjoge1xyXG4gICAgICAgIGtleTogZC5yZWxhdGlvbk5hbWUgfHwgdGl0bGUsXHJcbiAgICAgICAgdmFsdWU6IGQuZW50aXR5LnJlbGF0aW9uIHx8IG51bGxcclxuICAgICAgfSxcclxuICAgIH0pKSA6IFtdO1xyXG4gICAgcmV0dXJuIHsgcHJldmlld3MgfTtcclxuICB9O1xyXG59XHJcbiJdfQ==