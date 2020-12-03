import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
var MrMapDS = /** @class */ (function (_super) {
    __extends(MrMapDS, _super);
    function MrMapDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    MrMapDS.prototype.transform = function (data) {
        var _this = this;
        return {
            _setInstance: function (instance) {
                _this.mapInstance = instance;
            },
            containerId: 'map-canvas',
            libOptions: {
                scrollWheelZoom: false,
            },
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {}
                }],
            initialView: {
                center: [51.505, -0.09],
                zoom: 13
            },
            markers: [
                {
                    coords: [51.505, -0.09],
                    template: 'This is the center of the map',
                    title: 'London'
                }, {
                    coords: [51.495, -0.1],
                    template: 'Elephant and castle',
                }, {
                    coords: [51.46687084654015, -0.2130156755447388],
                    template: 'Putney bridge',
                }
            ]
        };
    };
    return MrMapDS;
}(DataSource));
export { MrMapDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBNkIsMkJBQVU7SUFBdkM7O0lBc0NBLENBQUM7SUFqQ0MsNkRBQTZEO0lBQ25ELDJCQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBK0JDO1FBOUJDLE9BQU87WUFDTCxZQUFZLEVBQUUsVUFBQyxRQUFRO2dCQUNyQixLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztZQUM5QixDQUFDO1lBQ0QsV0FBVyxFQUFFLFlBQVk7WUFDekIsVUFBVSxFQUFFO2dCQUNWLGVBQWUsRUFBRSxLQUFLO2FBQ3ZCO1lBQ0QsVUFBVSxFQUFFLENBQUM7b0JBQ1gsR0FBRyxFQUFFLDhFQUE4RTtvQkFDbkYsT0FBTyxFQUFFLEVBQUU7aUJBQ1osQ0FBQztZQUNGLFdBQVcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxFQUFFO2FBQ1Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUN2QixRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxLQUFLLEVBQUUsUUFBUTtpQkFDaEIsRUFBRTtvQkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7b0JBQ3RCLFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDLEVBQUU7b0JBQ0QsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDaEQsUUFBUSxFQUFFLGVBQWU7aUJBQzFCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBdENELENBQTZCLFVBQVUsR0FzQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNck1hcERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgbWFwSW5zdGFuY2U7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IE1hcERhdGEge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgX3NldEluc3RhbmNlOiAoaW5zdGFuY2UpID0+IHtcclxuICAgICAgICB0aGlzLm1hcEluc3RhbmNlID0gaW5zdGFuY2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5lcklkOiAnbWFwLWNhbnZhcycsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICBzY3JvbGxXaGVlbFpvb206IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICB0aWxlTGF5ZXJzOiBbe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vY2FydG9kYi1iYXNlbWFwcy17c30uZ2xvYmFsLnNzbC5mYXN0bHkubmV0L2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLFxyXG4gICAgICAgIG9wdGlvbnM6IHt9XHJcbiAgICAgIH1dLFxyXG4gICAgICBpbml0aWFsVmlldzoge1xyXG4gICAgICAgIGNlbnRlcjogWzUxLjUwNSwgLTAuMDldLFxyXG4gICAgICAgIHpvb206IDEzXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hcmtlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb29yZHM6IFs1MS41MDUsIC0wLjA5XSxcclxuICAgICAgICAgIHRlbXBsYXRlOiAnVGhpcyBpcyB0aGUgY2VudGVyIG9mIHRoZSBtYXAnLFxyXG4gICAgICAgICAgdGl0bGU6ICdMb25kb24nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgY29vcmRzOiBbNTEuNDk1LCAtMC4xXSxcclxuICAgICAgICAgIHRlbXBsYXRlOiAnRWxlcGhhbnQgYW5kIGNhc3RsZScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgY29vcmRzOiBbNTEuNDY2ODcwODQ2NTQwMTUsIC0wLjIxMzAxNTY3NTU0NDczODhdLFxyXG4gICAgICAgICAgdGVtcGxhdGU6ICdQdXRuZXkgYnJpZGdlJyxcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==