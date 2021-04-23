import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
var MARKER_ICON = L.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon'
});
var MARKER_ICON_SELECTED = L.icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    className: 'marker-icon-selected'
});
var MrMapDS = /** @class */ (function (_super) {
    __extends(MrMapDS, _super);
    function MrMapDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line consistent-return
    MrMapDS.prototype.transform = function (data) {
        var _this = this;
        var markers;
        if (data.find(function (d) { return d.markers; })) {
            markers = data
                .map(function (area) { return (area.markers
                .map(function (m) {
                var _a, _b;
                return ({
                    // convert to leaflet marker format
                    coords: [+m.lat, +m.lng],
                    template: (_a = m.default_label) !== null && _a !== void 0 ? _a : m.label,
                    title: (_b = m.label) !== null && _b !== void 0 ? _b : m.default_label,
                });
            })); })
                // flatten the list of markers
                .reduce(function (acc, val) { return acc.concat(val); }, []);
        }
        var initialView = {
            // center of europe (only for initial load)
            center: [54.5260, 15.2551],
            zoom: 5,
        };
        // if the map and the markers already exist
        // update the already existing layers.
        if (this.mapInstance && this.markerLayer) {
            this.buildMarkers(markers);
            this.fitMapToBounds(markers.map(function (m) { return m.coords; }));
        }
        return {
            // only called once, on component init!
            _setInstance: function (instance) {
                _this.mapInstance = instance;
                // center the map on the markers
                _this.fitMapToBounds(markers.map(function (m) { return m.coords; }));
                // load custom markers
                _this.buildMarkers(markers);
            },
            containerId: 'map-canvas',
            libOptions: {
                scrollWheelZoom: false,
            },
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: {}
                }],
            initialView: initialView,
        };
    };
    MrMapDS.prototype.fitMapToBounds = function (bounds) {
        if (this.mapInstance) {
            this.mapInstance.fitBounds(bounds, {
                maxZoom: 15,
                padding: [20, 20],
            });
        }
        else {
            console.warn('map instance is missing');
        }
    };
    /**
     * Builds markers with a custom icon and adds them to the map.
     * @param markers an array of markers
     */
    MrMapDS.prototype.buildMarkers = function (markers) {
        if (!markers)
            return;
        // remove all existing markers
        if (this.markerLayer) {
            this.markerLayer.clearLayers();
            this.mapInstance.removeLayer(this.markerLayer);
        }
        var markerGroup = L.markerClusterGroup();
        markers.forEach(function (_a) {
            var coords = _a.coords, template = _a.template;
            // create custom icon marker
            var newMarker = L.marker(coords, { icon: MARKER_ICON })
                // add the marker to the group
                .addTo(markerGroup)
                // add the on-click tooltip
                .bindPopup(template);
            newMarker.getPopup().on('remove', function (_a) {
                var target = _a.target;
                target._source.setIcon(MARKER_ICON);
            });
            newMarker.getPopup().on('add', function (_a) {
                var target = _a.target;
                target._source.setIcon(MARKER_ICON_SELECTED);
            });
        });
        // add the markers to the map instance
        this.mapInstance.addLayer(markerGroup);
        // update the marker layer instance
        this.markerLayer = markerGroup;
    };
    return MrMapDS;
}(DataSource));
export { MrMapDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyx1QkFBdUIsQ0FBQztBQW9CL0IsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN6QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDcEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3JCLFNBQVMsRUFBRSxhQUFhO0NBQ3pCLENBQUMsQ0FBQztBQUVILElBQU0sb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsQyxPQUFPLEVBQUUsMEJBQTBCO0lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDcEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3JCLFNBQVMsRUFBRSxzQkFBc0I7Q0FDbEMsQ0FBQyxDQUFDO0FBRUg7SUFBNkIsMkJBQVU7SUFBdkM7O0lBd0dBLENBQUM7SUEvRkMsNkNBQTZDO0lBQ25DLDJCQUFTLEdBQW5CLFVBQW9CLElBQXNCO1FBQTFDLGlCQWdEQztRQS9DQyxJQUFJLE9BQXFCLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLENBQUMsRUFBRTtZQUMvQixPQUFPLEdBQUcsSUFBSTtpQkFDWCxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPO2lCQUN6QixHQUFHLENBQUMsVUFBQyxDQUFDOztnQkFBSyxPQUFBLENBQUM7b0JBQ2IsbUNBQW1DO29CQUNqQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFxQjtvQkFDNUMsUUFBUSxRQUFFLENBQUMsQ0FBQyxhQUFhLG1DQUFJLENBQUMsQ0FBQyxLQUFLO29CQUNwQyxLQUFLLFFBQUUsQ0FBQyxDQUFDLEtBQUssbUNBQUksQ0FBQyxDQUFDLGFBQWE7aUJBQ2xDLENBQUMsQ0FBQTthQUFBLENBQUMsQ0FBQyxFQU5TLENBTVQsQ0FBQztnQkFDUCw4QkFBOEI7aUJBQzdCLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFmLENBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM5QztRQUVELElBQU0sV0FBVyxHQUErQztZQUM5RCwyQ0FBMkM7WUFDM0MsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztZQUMxQixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUM7UUFFRiwyQ0FBMkM7UUFDM0Msc0NBQXNDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsT0FBTztZQUNMLHVDQUF1QztZQUN2QyxZQUFZLEVBQUUsVUFBQyxRQUFRO2dCQUNyQixLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQkFDNUIsZ0NBQWdDO2dCQUNoQyxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELHNCQUFzQjtnQkFDdEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBQ0QsV0FBVyxFQUFFLFlBQVk7WUFDekIsVUFBVSxFQUFFO2dCQUNWLGVBQWUsRUFBRSxLQUFLO2FBQ3ZCO1lBQ0QsVUFBVSxFQUFFLENBQUM7b0JBQ1gsR0FBRyxFQUFFLDhFQUE4RTtvQkFDbkYsT0FBTyxFQUFFLEVBQUU7aUJBQ1osQ0FBQztZQUNGLFdBQVcsYUFBQTtTQUNaLENBQUM7SUFDSixDQUFDO0lBRU8sZ0NBQWMsR0FBdEIsVUFBdUIsTUFBTTtRQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ2xCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssOEJBQVksR0FBcEIsVUFBcUIsT0FBcUI7UUFDeEMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQ3JCLDhCQUE4QjtRQUM5QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBb0I7Z0JBQWxCLGtCQUFNLEVBQUUsc0JBQVE7WUFDakMsNEJBQTRCO1lBQzVCLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO2dCQUN2RCw4QkFBOEI7aUJBQzdCLEtBQUssQ0FBQyxXQUFXLENBQUM7Z0JBQ25CLDJCQUEyQjtpQkFDMUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXZCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsRUFBVTtvQkFBUixrQkFBTTtnQkFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLEVBQVU7b0JBQVIsa0JBQU07Z0JBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILHNDQUFzQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2QyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBeEdELENBQTZCLFVBQVUsR0F3R3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwRGF0YSwgTWFya2VyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xyXG4vLyBsZWFmbGV0IGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgd2luZG93LFxyXG4vLyBhIGRvdWJsZSBpbXBvcnQgcmVzdWx0cyBpbiBlcnJvcnMgd2l0aCB0b29sdGlwcy5cclxuZGVjbGFyZSBjb25zdCBMO1xyXG5cclxuaW50ZXJmYWNlIENvb3JkcyB7IGxhdDogbnVtYmVyOyBsbmc6IG51bWJlciB9XHJcblxyXG5pbnRlcmZhY2UgTWFya2VyIGV4dGVuZHMgQ29vcmRzIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGRlZmF1bHRfbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBUaW1lbGluZVJlc3BvbnNlID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG4gIHpvb206IG51bWJlcjtcclxuICBtYXBfY2VudGVyOiBDb29yZHM7XHJcbiAgbWFya2VyczogTWFya2VyW107XHJcbn1bXVxyXG5cclxuY29uc3QgTUFSS0VSX0lDT04gPSBMLmljb24oe1xyXG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi5wbmcnLFxyXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbidcclxufSk7XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTl9TRUxFQ1RFRCA9IEwuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXNlbGVjdGVkLnBuZycsXHJcbiAgaWNvblNpemU6IFszMCwgNDUuNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMjVdLFxyXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uLXNlbGVjdGVkJ1xyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNck1hcERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgLyoqIEluc3RhbmNlIG9mIHRoZSBsZWFmbGV0IG1hcCAqL1xyXG4gIG1hcEluc3RhbmNlO1xyXG5cclxuICAvKiogSW5zdGFuY2Ugb2YgdGhlIG1hcmtlciBsYXllckdyb3VwICovXHJcbiAgbWFya2VyTGF5ZXI7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogVGltZWxpbmVSZXNwb25zZSk6IE1hcERhdGEge1xyXG4gICAgbGV0IG1hcmtlcnM6IE1hcmtlckRhdGFbXTtcclxuXHJcbiAgICBpZiAoZGF0YS5maW5kKChkKSA9PiBkLm1hcmtlcnMpKSB7XHJcbiAgICAgIG1hcmtlcnMgPSBkYXRhXHJcbiAgICAgICAgLm1hcCgoYXJlYSkgPT4gKGFyZWEubWFya2Vyc1xyXG4gICAgICAgICAgLm1hcCgobSkgPT4gKHtcclxuICAgICAgICAgIC8vIGNvbnZlcnQgdG8gbGVhZmxldCBtYXJrZXIgZm9ybWF0XHJcbiAgICAgICAgICAgIGNvb3JkczogWyttLmxhdCwgK20ubG5nXSBhcyBbbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogbS5kZWZhdWx0X2xhYmVsID8/IG0ubGFiZWwsXHJcbiAgICAgICAgICAgIHRpdGxlOiBtLmxhYmVsID8/IG0uZGVmYXVsdF9sYWJlbCxcclxuICAgICAgICAgIH0pKSkpXHJcbiAgICAgICAgLy8gZmxhdHRlbiB0aGUgbGlzdCBvZiBtYXJrZXJzXHJcbiAgICAgICAgLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxWaWV3OiB7IGNlbnRlcjogW251bWJlciwgbnVtYmVyXTsgem9vbTogbnVtYmVyIH0gPSB7XHJcbiAgICAgIC8vIGNlbnRlciBvZiBldXJvcGUgKG9ubHkgZm9yIGluaXRpYWwgbG9hZClcclxuICAgICAgY2VudGVyOiBbNTQuNTI2MCwgMTUuMjU1MV0sXHJcbiAgICAgIHpvb206IDUsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGlmIHRoZSBtYXAgYW5kIHRoZSBtYXJrZXJzIGFscmVhZHkgZXhpc3RcclxuICAgIC8vIHVwZGF0ZSB0aGUgYWxyZWFkeSBleGlzdGluZyBsYXllcnMuXHJcbiAgICBpZiAodGhpcy5tYXBJbnN0YW5jZSAmJiB0aGlzLm1hcmtlckxheWVyKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRNYXJrZXJzKG1hcmtlcnMpO1xyXG4gICAgICB0aGlzLmZpdE1hcFRvQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBtLmNvb3JkcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIG9ubHkgY2FsbGVkIG9uY2UsIG9uIGNvbXBvbmVudCBpbml0IVxyXG4gICAgICBfc2V0SW5zdGFuY2U6IChpbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgICAgICAvLyBjZW50ZXIgdGhlIG1hcCBvbiB0aGUgbWFya2Vyc1xyXG4gICAgICAgIHRoaXMuZml0TWFwVG9Cb3VuZHMobWFya2Vycy5tYXAoKG0pID0+IG0uY29vcmRzKSk7XHJcbiAgICAgICAgLy8gbG9hZCBjdXN0b20gbWFya2Vyc1xyXG4gICAgICAgIHRoaXMuYnVpbGRNYXJrZXJzKG1hcmtlcnMpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgdGlsZUxheWVyczogW3tcclxuICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcclxuICAgICAgICBvcHRpb25zOiB7fVxyXG4gICAgICB9XSxcclxuICAgICAgaW5pdGlhbFZpZXcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXRNYXBUb0JvdW5kcyhib3VuZHMpIHtcclxuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuZml0Qm91bmRzKGJvdW5kcywge1xyXG4gICAgICAgIG1heFpvb206IDE1LFxyXG4gICAgICAgIHBhZGRpbmc6IFsyMCwgMjBdLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignbWFwIGluc3RhbmNlIGlzIG1pc3NpbmcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBtYXJrZXJzIHdpdGggYSBjdXN0b20gaWNvbiBhbmQgYWRkcyB0aGVtIHRvIHRoZSBtYXAuXHJcbiAgICogQHBhcmFtIG1hcmtlcnMgYW4gYXJyYXkgb2YgbWFya2Vyc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgYnVpbGRNYXJrZXJzKG1hcmtlcnM6IE1hcmtlckRhdGFbXSkge1xyXG4gICAgaWYgKCFtYXJrZXJzKSByZXR1cm47XHJcbiAgICAvLyByZW1vdmUgYWxsIGV4aXN0aW5nIG1hcmtlcnNcclxuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XHJcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIuY2xlYXJMYXllcnMoKTtcclxuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmtlckdyb3VwID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoKTtcclxuICAgIG1hcmtlcnMuZm9yRWFjaCgoeyBjb29yZHMsIHRlbXBsYXRlIH0pID0+IHtcclxuICAgICAgLy8gY3JlYXRlIGN1c3RvbSBpY29uIG1hcmtlclxyXG4gICAgICBjb25zdCBuZXdNYXJrZXIgPSBMLm1hcmtlcihjb29yZHMsIHsgaWNvbjogTUFSS0VSX0lDT04gfSlcclxuICAgICAgICAvLyBhZGQgdGhlIG1hcmtlciB0byB0aGUgZ3JvdXBcclxuICAgICAgICAuYWRkVG8obWFya2VyR3JvdXApXHJcbiAgICAgICAgLy8gYWRkIHRoZSBvbi1jbGljayB0b29sdGlwXHJcbiAgICAgICAgLmJpbmRQb3B1cCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbigncmVtb3ZlJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbignYWRkJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OX1NFTEVDVEVEKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGFkZCB0aGUgbWFya2VycyB0byB0aGUgbWFwIGluc3RhbmNlXHJcbiAgICB0aGlzLm1hcEluc3RhbmNlLmFkZExheWVyKG1hcmtlckdyb3VwKTtcclxuICAgIC8vIHVwZGF0ZSB0aGUgbWFya2VyIGxheWVyIGluc3RhbmNlXHJcbiAgICB0aGlzLm1hcmtlckxheWVyID0gbWFya2VyR3JvdXA7XHJcbiAgfVxyXG59XHJcbiJdfQ==