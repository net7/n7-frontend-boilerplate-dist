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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0M7SUFBNkIsMkJBQVU7SUFBdkM7O0lBc0NBLENBQUM7SUFqQ0MsNkRBQTZEO0lBQ25ELDJCQUFTLEdBQW5CLFVBQW9CLElBQVM7UUFBN0IsaUJBK0JDO1FBOUJDLE9BQU87WUFDTCxZQUFZLEVBQUUsVUFBQyxRQUFRO2dCQUNyQixLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztZQUM5QixDQUFDO1lBQ0QsV0FBVyxFQUFFLFlBQVk7WUFDekIsVUFBVSxFQUFFO2dCQUNWLGVBQWUsRUFBRSxLQUFLO2FBQ3ZCO1lBQ0QsVUFBVSxFQUFFLENBQUM7b0JBQ1gsR0FBRyxFQUFFLDhFQUE4RTtvQkFDbkYsT0FBTyxFQUFFLEVBQUU7aUJBQ1osQ0FBQztZQUNGLFdBQVcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxFQUFFO2FBQ1Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUN2QixRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxLQUFLLEVBQUUsUUFBUTtpQkFDaEIsRUFBRTtvQkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7b0JBQ3RCLFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDLEVBQUU7b0JBQ0QsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDaEQsUUFBUSxFQUFFLGVBQWU7aUJBQzFCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBdENELENBQTZCLFVBQVUsR0FzQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBNck1hcERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgbWFwSW5zdGFuY2U7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IGFueSk6IE1hcERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICBfc2V0SW5zdGFuY2U6IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICB0aGlzLm1hcEluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICB9LFxuICAgICAgY29udGFpbmVySWQ6ICdtYXAtY2FudmFzJyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB0aWxlTGF5ZXJzOiBbe1xuICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgICAgb3B0aW9uczoge31cbiAgICAgIH1dLFxuICAgICAgaW5pdGlhbFZpZXc6IHtcbiAgICAgICAgY2VudGVyOiBbNTEuNTA1LCAtMC4wOV0sXG4gICAgICAgIHpvb206IDEzXG4gICAgICB9LFxuICAgICAgbWFya2VyczogW1xuICAgICAgICB7XG4gICAgICAgICAgY29vcmRzOiBbNTEuNTA1LCAtMC4wOV0sXG4gICAgICAgICAgdGVtcGxhdGU6ICdUaGlzIGlzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcCcsXG4gICAgICAgICAgdGl0bGU6ICdMb25kb24nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBjb29yZHM6IFs1MS40OTUsIC0wLjFdLFxuICAgICAgICAgIHRlbXBsYXRlOiAnRWxlcGhhbnQgYW5kIGNhc3RsZScsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBjb29yZHM6IFs1MS40NjY4NzA4NDY1NDAxNSwgLTAuMjEzMDE1Njc1NTQ0NzM4OF0sXG4gICAgICAgICAgdGVtcGxhdGU6ICdQdXRuZXkgYnJpZGdlJyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==