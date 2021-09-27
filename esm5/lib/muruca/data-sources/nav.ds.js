import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrNavDS = /** @class */ (function (_super) {
    __extends(MrNavDS, _super);
    function MrNavDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    MrNavDS.prototype.transform = function (data) {
        var items = [];
        data.nav.forEach(function (el) {
            items.push({
                text: el.title,
                anchor: {
                    href: "http://localhost:4200/mr/static/" + el.id,
                    target: '_blank',
                    payload: el.id
                }
            });
        });
        return {
            items: items,
        };
    };
    return MrNavDS;
}(DataSource));
export { MrNavDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbmF2LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBNkIsMkJBQVU7SUFBdkM7O0lBa0JBLENBQUM7SUFqQkMsNkRBQTZEO0lBQ25ELDJCQUFTLEdBQW5CLFVBQW9CLElBQUk7UUFDdEIsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRTtZQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNULElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztnQkFDZCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLHFDQUFtQyxFQUFFLENBQUMsRUFBSTtvQkFDaEQsTUFBTSxFQUFFLFFBQVE7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRTtpQkFDZjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTztZQUNMLEtBQUssT0FBQTtTQUNOLENBQUM7SUFDSixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFsQkQsQ0FBNkIsVUFBVSxHQWtCdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTXJOYXZEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgZGF0YS5uYXYuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICB0ZXh0OiBlbC50aXRsZSxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogYGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9tci9zdGF0aWMvJHtlbC5pZH1gLFxuICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgICAgcGF5bG9hZDogZWwuaWRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==