import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
import { Subject } from 'rxjs';
var MARKER_ICON = L.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [30, 45.5],
    popupAnchor: [0, -25],
    iconAnchor: [15, 45.5],
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mapLoaded$ = new Subject();
        return _this;
    }
    // eslint-disable-next-line consistent-return
    MrMapDS.prototype.transform = function (data) {
        var _this = this;
        var markers;
        var d = data.find(function (z) { return z.zoom; });
        if (data.find(function (a) { return a.markers; })) {
            markers = data
                .map(function (area) { return (area.markers
                .map(function (m) {
                var _a, _b;
                return ({
                    // convert to leaflet marker format
                    coords: [+m.lat, +m.lng],
                    template: (_a = m.default_label) !== null && _a !== void 0 ? _a : m.label,
                    title: (_b = m.label) !== null && _b !== void 0 ? _b : m.default_label,
                    id: area.id,
                    slug: area.slug,
                });
            })); })
                // flatten the list of markers
                .reduce(function (acc, val) { return acc.concat(val); }, []);
        }
        var mapCenter = d.map_center ? [d.map_center.lat, d.map_center.lng]
            : [54.5260, 15.2551];
        var initialView = {
            // center of europe (only for initial load)
            center: mapCenter,
            zoom: d.zoom,
        };
        // if the map and the markers already exist
        // update the already existing layers.
        if (this.mapInstance && this.markerLayer) {
            this.buildMarkers(markers);
            this.fitMapToBounds(markers.map(function (m) { return m.coords; }), d.zoom);
        }
        return {
            // only called once, on component init!
            _setInstance: function (instance) {
                _this.mapInstance = instance;
                // center the map on the markers
                _this.fitMapToBounds(markers.map(function (m) { return m.coords; }), d.zoom);
                // load custom markers
                _this.buildMarkers(markers);
                _this.mapLoaded$.next({ map: instance, markers: _this.markerLayer });
            },
            containerId: 'map-canvas',
            libOptions: __assign({}, this.options.libOptions),
            tileLayers: [{
                    // url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
                    options: {}
                }],
            initialView: initialView,
        };
    };
    MrMapDS.prototype.fitMapToBounds = function (bounds, zoom) {
        if (zoom === void 0) { zoom = 10; }
        console.log(zoom);
        if (this.mapInstance) {
            this.mapInstance.fitBounds(bounds, {
                maxZoom: zoom,
                padding: [20, 20]
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
        var markerGroup = L.markerClusterGroup({
            maxClusterRadius: 5,
            disableClusteringAtZoom: 20
        });
        markers.forEach(function (_a) {
            var coords = _a.coords, template = _a.template, id = _a.id, slug = _a.slug;
            // create custom icon marker
            var newMarker = L.marker(coords, { icon: MARKER_ICON });
            if (id && slug) {
                newMarker.id = id;
                newMarker.slug = slug;
            }
            newMarker
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBMkIvQixJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUN0QixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQTZCLDJCQUFVO0lBQXZDO1FBQUEscUVBNkhDO1FBcEhDLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUE7O0lBb0gxQyxDQUFDO0lBbEhDLDZDQUE2QztJQUNuQywyQkFBUyxHQUFuQixVQUFvQixJQUFzQjtRQUExQyxpQkFzREM7UUFyREMsSUFBSSxPQUF1QixDQUFDO1FBQzVCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FB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R0FBRyxJQUFJLENBQUM7YUFDdkI7WUFDRCxTQUFTO2dCQUNQLDhCQUE4QjtpQkFDN0IsS0FBSyxDQUFDLFdBQVcsQ0FBQztnQkFDbkIsMkJBQTJCO2lCQUMxQixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkIsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxFQUFVO29CQUFSLGtCQUFNO2dCQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztZQUVILFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsRUFBVTtvQkFBUixrQkFBTTtnQkFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUE3SEQsQ0FBNkIsVUFBVSxHQTZIdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBEYXRhLCBNYXJrZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgJ2xlYWZsZXQubWFya2VyY2x1c3Rlcic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSAnbGVhZmxldCc7XHJcbi8vIGxlYWZsZXQgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSB3aW5kb3csXHJcbi8vIGEgZG91YmxlIGltcG9ydCByZXN1bHRzIGluIGVycm9ycyB3aXRoIHRvb2x0aXBzLlxyXG5kZWNsYXJlIGNvbnN0IEw7XHJcblxyXG5pbnRlcmZhY2UgQ29vcmRzIHsgbGF0OiBudW1iZXI7IGxuZzogbnVtYmVyIH1cclxuXHJcbmludGVyZmFjZSBNYXJrZXIgZXh0ZW5kcyBDb29yZHMge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVmYXVsdF9sYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFRpbWVsaW5lUmVzcG9uc2UgPSB7XHJcbiAgaWQ/OiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzbHVnOiBzdHJpbmc7XHJcbiAgem9vbTogbnVtYmVyO1xyXG4gIG1hcF9jZW50ZXI6IENvb3JkcztcclxuICBtYXJrZXJzOiBNYXJrZXJbXTtcclxufVtdXHJcblxyXG5pbnRlcmZhY2UgTWFya2VyV2l0aElEIGV4dGVuZHMgTWFya2VyRGF0YSB7XHJcbiAgaWQ/OiBudW1iZXI7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTiA9IEwuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLnBuZycsXHJcbiAgaWNvblNpemU6IFszMCwgNDUuNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMjVdLFxyXG4gIGljb25BbmNob3I6IFsxNSwgNDUuNV0sXHJcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24nXHJcbn0pO1xyXG5cclxuY29uc3QgTUFSS0VSX0lDT05fU0VMRUNURUQgPSBMLmljb24oe1xyXG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi1zZWxlY3RlZC5wbmcnLFxyXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbi1zZWxlY3RlZCdcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJNYXBEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBJbnN0YW5jZSBvZiB0aGUgbGVhZmxldCBtYXAgKi9cclxuICBtYXBJbnN0YW5jZTtcclxuXHJcbiAgLyoqIEluc3RhbmNlIG9mIHRoZSBtYXJrZXIgbGF5ZXJHcm91cCAqL1xyXG4gIG1hcmtlckxheWVyO1xyXG5cclxuICBtYXBMb2FkZWQkOiBTdWJqZWN0PE1hcD4gPSBuZXcgU3ViamVjdCgpXHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogVGltZWxpbmVSZXNwb25zZSk6IE1hcERhdGEge1xyXG4gICAgbGV0IG1hcmtlcnM6IE1hcmtlcldpdGhJRFtdO1xyXG4gICAgY29uc3QgZCA9IGRhdGEuZmluZCgoeikgPT4gei56b29tKTtcclxuICAgIGlmIChkYXRhLmZpbmQoKGEpID0+IGEubWFya2VycykpIHtcclxuICAgICAgbWFya2VycyA9IGRhdGFcclxuICAgICAgICAubWFwKChhcmVhKSA9PiAoYXJlYS5tYXJrZXJzXHJcbiAgICAgICAgICAubWFwKChtKSA9PiAoe1xyXG4gICAgICAgICAgLy8gY29udmVydCB0byBsZWFmbGV0IG1hcmtlciBmb3JtYXRcclxuICAgICAgICAgICAgY29vcmRzOiBbK20ubGF0LCArbS5sbmddIGFzIFtudW1iZXIsIG51bWJlcl0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBtLmRlZmF1bHRfbGFiZWwgPz8gbS5sYWJlbCxcclxuICAgICAgICAgICAgdGl0bGU6IG0ubGFiZWwgPz8gbS5kZWZhdWx0X2xhYmVsLFxyXG4gICAgICAgICAgICBpZDogYXJlYS5pZCxcclxuICAgICAgICAgICAgc2x1ZzogYXJlYS5zbHVnLFxyXG4gICAgICAgICAgfSkpKSlcclxuICAgICAgICAvLyBmbGF0dGVuIHRoZSBsaXN0IG9mIG1hcmtlcnNcclxuICAgICAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXBDZW50ZXI6IFtudW1iZXIsIG51bWJlcl0gPSBkLm1hcF9jZW50ZXIgPyBbZC5tYXBfY2VudGVyLmxhdCwgZC5tYXBfY2VudGVyLmxuZ11cclxuICAgICAgOiBbNTQuNTI2MCwgMTUuMjU1MV07XHJcbiAgICBjb25zdCBpbml0aWFsVmlldzogeyBjZW50ZXI6IFtudW1iZXIsIG51bWJlcl07IHpvb206IG51bWJlciB9ID0ge1xyXG4gICAgLy8gY2VudGVyIG9mIGV1cm9wZSAob25seSBmb3IgaW5pdGlhbCBsb2FkKVxyXG4gICAgICBjZW50ZXI6IG1hcENlbnRlcixcclxuICAgICAgem9vbTogZC56b29tLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpZiB0aGUgbWFwIGFuZCB0aGUgbWFya2VycyBhbHJlYWR5IGV4aXN0XHJcbiAgICAvLyB1cGRhdGUgdGhlIGFscmVhZHkgZXhpc3RpbmcgbGF5ZXJzLlxyXG4gICAgaWYgKHRoaXMubWFwSW5zdGFuY2UgJiYgdGhpcy5tYXJrZXJMYXllcikge1xyXG4gICAgICB0aGlzLmJ1aWxkTWFya2VycyhtYXJrZXJzKTtcclxuICAgICAgdGhpcy5maXRNYXBUb0JvdW5kcyhtYXJrZXJzLm1hcCgobSkgPT4gbS5jb29yZHMpLCBkLnpvb20pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIG9ubHkgY2FsbGVkIG9uY2UsIG9uIGNvbXBvbmVudCBpbml0IVxyXG4gICAgICBfc2V0SW5zdGFuY2U6IChpbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgICAgICAvLyBjZW50ZXIgdGhlIG1hcCBvbiB0aGUgbWFya2Vyc1xyXG4gICAgICAgIHRoaXMuZml0TWFwVG9Cb3VuZHMobWFya2Vycy5tYXAoKG0pID0+IG0uY29vcmRzKSwgZC56b29tKTtcclxuICAgICAgICAvLyBsb2FkIGN1c3RvbSBtYXJrZXJzXHJcbiAgICAgICAgdGhpcy5idWlsZE1hcmtlcnMobWFya2Vycyk7XHJcbiAgICAgICAgdGhpcy5tYXBMb2FkZWQkLm5leHQoeyBtYXA6IGluc3RhbmNlLCBtYXJrZXJzOiB0aGlzLm1hcmtlckxheWVyIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLmxpYk9wdGlvbnMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbGVMYXllcnM6IFt7XHJcbiAgICAgICAgLy8gdXJsOiAnaHR0cHM6Ly9jYXJ0b2RiLWJhc2VtYXBzLXtzfS5nbG9iYWwuc3NsLmZhc3RseS5uZXQvbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsXHJcbiAgICAgICAgLy8gdXJsOiAnaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8ve3N9LmJhc2VtYXBzLmNhcnRvY2RuLmNvbS9yYXN0ZXJ0aWxlcy92b3lhZ2VyX2xhYmVsc191bmRlci97en0ve3h9L3t5fXtyfS5wbmcnLFxyXG4gICAgICAgIG9wdGlvbnM6IHt9XHJcbiAgICAgIH1dLFxyXG4gICAgICBpbml0aWFsVmlldyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpdE1hcFRvQm91bmRzKGJvdW5kcywgem9vbSA9IDEwKSB7XHJcbiAgICBjb25zb2xlLmxvZyh6b29tKTtcclxuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuZml0Qm91bmRzKGJvdW5kcywge1xyXG4gICAgICAgIG1heFpvb206IHpvb20sXHJcbiAgICAgICAgcGFkZGluZzogWzIwLCAyMF1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ21hcCBpbnN0YW5jZSBpcyBtaXNzaW5nJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZHMgbWFya2VycyB3aXRoIGEgY3VzdG9tIGljb24gYW5kIGFkZHMgdGhlbSB0byB0aGUgbWFwLlxyXG4gICAqIEBwYXJhbSBtYXJrZXJzIGFuIGFycmF5IG9mIG1hcmtlcnNcclxuICAgKi9cclxuICBwcml2YXRlIGJ1aWxkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJXaXRoSURbXSkge1xyXG4gICAgaWYgKCFtYXJrZXJzKSByZXR1cm47XHJcbiAgICAvLyByZW1vdmUgYWxsIGV4aXN0aW5nIG1hcmtlcnNcclxuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XHJcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIuY2xlYXJMYXllcnMoKTtcclxuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmtlckdyb3VwID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoXHJcbiAgICAgIHtcclxuICAgICAgICBtYXhDbHVzdGVyUmFkaXVzOiA1LFxyXG4gICAgICAgIGRpc2FibGVDbHVzdGVyaW5nQXRab29tOiAyMFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgbWFya2Vycy5mb3JFYWNoKCh7XHJcbiAgICAgIGNvb3JkcywgdGVtcGxhdGUsIGlkLCBzbHVnXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgIC8vIGNyZWF0ZSBjdXN0b20gaWNvbiBtYXJrZXJcclxuICAgICAgY29uc3QgbmV3TWFya2VyID0gTC5tYXJrZXIoY29vcmRzLCB7IGljb246IE1BUktFUl9JQ09OIH0pO1xyXG4gICAgICBpZiAoaWQgJiYgc2x1Zykge1xyXG4gICAgICAgIG5ld01hcmtlci5pZCA9IGlkO1xyXG4gICAgICAgIG5ld01hcmtlci5zbHVnID0gc2x1ZztcclxuICAgICAgfVxyXG4gICAgICBuZXdNYXJrZXJcclxuICAgICAgICAvLyBhZGQgdGhlIG1hcmtlciB0byB0aGUgZ3JvdXBcclxuICAgICAgICAuYWRkVG8obWFya2VyR3JvdXApXHJcbiAgICAgICAgLy8gYWRkIHRoZSBvbi1jbGljayB0b29sdGlwXHJcbiAgICAgICAgLmJpbmRQb3B1cCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbigncmVtb3ZlJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbignYWRkJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OX1NFTEVDVEVEKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGFkZCB0aGUgbWFya2VycyB0byB0aGUgbWFwIGluc3RhbmNlXHJcbiAgICB0aGlzLm1hcEluc3RhbmNlLmFkZExheWVyKG1hcmtlckdyb3VwKTtcclxuICAgIC8vIHVwZGF0ZSB0aGUgbWFya2VyIGxheWVyIGluc3RhbmNlXHJcbiAgICB0aGlzLm1hcmtlckxheWVyID0gbWFya2VyR3JvdXA7XHJcbiAgfVxyXG59XHJcbiJdfQ==