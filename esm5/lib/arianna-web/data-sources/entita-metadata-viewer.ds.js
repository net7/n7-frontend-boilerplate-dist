import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var AwEntitaMetadataViewerDS = /** @class */ (function (_super) {
    __extends(AwEntitaMetadataViewerDS, _super);
    function AwEntitaMetadataViewerDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasFields = false;
        return _this;
    }
    AwEntitaMetadataViewerDS.prototype.transform = function (data) {
        this.hasFields = !!(Array.isArray(data) && data.length);
        return {
            group: [{
                    items: data || []
                }]
        };
    };
    return AwEntitaMetadataViewerDS;
}(DataSource));
export { AwEntitaMetadataViewerDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvZW50aXRhLW1ldGFkYXRhLXZpZXdlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DO0lBQThDLDRDQUFVO0lBQXhEO1FBQUEscUVBWUM7UUFYUSxlQUFTLEdBQUcsS0FBSyxDQUFDOztJQVczQixDQUFDO0lBVFcsNENBQVMsR0FBbkIsVUFBb0IsSUFBSTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhELE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztvQkFDTixLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUU7aUJBQ2xCLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQVpELENBQThDLFVBQVUsR0FZdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3RW50aXRhTWV0YWRhdGFWaWV3ZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyBoYXNGaWVsZHMgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7XHJcbiAgICB0aGlzLmhhc0ZpZWxkcyA9ICEhKEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdyb3VwOiBbe1xyXG4gICAgICAgIGl0ZW1zOiBkYXRhIHx8IFtdXHJcbiAgICAgIH1dXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=