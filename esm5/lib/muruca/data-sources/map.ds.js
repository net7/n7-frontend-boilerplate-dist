import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
import { Subject } from 'rxjs';
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mapLoaded$ = new Subject();
        return _this;
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
                    id: area.id,
                    slug: area.slug,
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
                _this.mapLoaded$.next({ map: instance, markers: _this.markerLayer });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBMkIvQixJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsU0FBUyxFQUFFLGFBQWE7Q0FDekIsQ0FBQyxDQUFDO0FBRUgsSUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xDLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsU0FBUyxFQUFFLHNCQUFzQjtDQUNsQyxDQUFDLENBQUM7QUFFSDtJQUE2QiwyQkFBVTtJQUF2QztRQUFBLHFFQW9IQztRQTNHQyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFBOztJQTJHMUMsQ0FBQztJQXpHQyw2Q0FBNkM7SUFDbkMsMkJBQVMsR0FBbkIsVUFBb0IsSUFBc0I7UUFBMUMsaUJBbURDO1FBbERDLElBQUksT0FBdUIsQ0FBQztRQUU1QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sR0FB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QUM7UUFDdkMsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQXBIRCxDQUE2QixVQUFVLEdBb0h0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcERhdGEsIE1hcmtlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNYXAgfSBmcm9tICdsZWFmbGV0JztcclxuLy8gbGVhZmxldCBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHdpbmRvdyxcclxuLy8gYSBkb3VibGUgaW1wb3J0IHJlc3VsdHMgaW4gZXJyb3JzIHdpdGggdG9vbHRpcHMuXHJcbmRlY2xhcmUgY29uc3QgTDtcclxuXHJcbmludGVyZmFjZSBDb29yZHMgeyBsYXQ6IG51bWJlcjsgbG5nOiBudW1iZXIgfVxyXG5cclxuaW50ZXJmYWNlIE1hcmtlciBleHRlbmRzIENvb3JkcyB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBkZWZhdWx0X2xhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgVGltZWxpbmVSZXNwb25zZSA9IHtcclxuICBpZD86IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHNsdWc6IHN0cmluZztcclxuICB6b29tOiBudW1iZXI7XHJcbiAgbWFwX2NlbnRlcjogQ29vcmRzO1xyXG4gIG1hcmtlcnM6IE1hcmtlcltdO1xyXG59W11cclxuXHJcbmludGVyZmFjZSBNYXJrZXJXaXRoSUQgZXh0ZW5kcyBNYXJrZXJEYXRhIHtcclxuICBpZD86IG51bWJlcjtcclxuICBzbHVnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OID0gTC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4ucG5nJyxcclxuICBpY29uU2l6ZTogWzMwLCA0NS41XSxcclxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXHJcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24nXHJcbn0pO1xyXG5cclxuY29uc3QgTUFSS0VSX0lDT05fU0VMRUNURUQgPSBMLmljb24oe1xyXG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi1zZWxlY3RlZC5wbmcnLFxyXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTI1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbi1zZWxlY3RlZCdcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgTXJNYXBEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBJbnN0YW5jZSBvZiB0aGUgbGVhZmxldCBtYXAgKi9cclxuICBtYXBJbnN0YW5jZTtcclxuXHJcbiAgLyoqIEluc3RhbmNlIG9mIHRoZSBtYXJrZXIgbGF5ZXJHcm91cCAqL1xyXG4gIG1hcmtlckxheWVyO1xyXG5cclxuICBtYXBMb2FkZWQkOiBTdWJqZWN0PE1hcD4gPSBuZXcgU3ViamVjdCgpXHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogVGltZWxpbmVSZXNwb25zZSk6IE1hcERhdGEge1xyXG4gICAgbGV0IG1hcmtlcnM6IE1hcmtlcldpdGhJRFtdO1xyXG5cclxuICAgIGlmIChkYXRhLmZpbmQoKGQpID0+IGQubWFya2VycykpIHtcclxuICAgICAgbWFya2VycyA9IGRhdGFcclxuICAgICAgICAubWFwKChhcmVhKSA9PiAoYXJlYS5tYXJrZXJzXHJcbiAgICAgICAgICAubWFwKChtKSA9PiAoe1xyXG4gICAgICAgICAgLy8gY29udmVydCB0byBsZWFmbGV0IG1hcmtlciBmb3JtYXRcclxuICAgICAgICAgICAgY29vcmRzOiBbK20ubGF0LCArbS5sbmddIGFzIFtudW1iZXIsIG51bWJlcl0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBtLmRlZmF1bHRfbGFiZWwgPz8gbS5sYWJlbCxcclxuICAgICAgICAgICAgdGl0bGU6IG0ubGFiZWwgPz8gbS5kZWZhdWx0X2xhYmVsLFxyXG4gICAgICAgICAgICBpZDogYXJlYS5pZCxcclxuICAgICAgICAgICAgc2x1ZzogYXJlYS5zbHVnLFxyXG4gICAgICAgICAgfSkpKSlcclxuICAgICAgICAvLyBmbGF0dGVuIHRoZSBsaXN0IG9mIG1hcmtlcnNcclxuICAgICAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFZpZXc6IHsgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdOyB6b29tOiBudW1iZXIgfSA9IHtcclxuICAgICAgLy8gY2VudGVyIG9mIGV1cm9wZSAob25seSBmb3IgaW5pdGlhbCBsb2FkKVxyXG4gICAgICBjZW50ZXI6IFs1NC41MjYwLCAxNS4yNTUxXSxcclxuICAgICAgem9vbTogNSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gaWYgdGhlIG1hcCBhbmQgdGhlIG1hcmtlcnMgYWxyZWFkeSBleGlzdFxyXG4gICAgLy8gdXBkYXRlIHRoZSBhbHJlYWR5IGV4aXN0aW5nIGxheWVycy5cclxuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlICYmIHRoaXMubWFya2VyTGF5ZXIpIHtcclxuICAgICAgdGhpcy5idWlsZE1hcmtlcnMobWFya2Vycyk7XHJcbiAgICAgIHRoaXMuZml0TWFwVG9Cb3VuZHMobWFya2Vycy5tYXAoKG0pID0+IG0uY29vcmRzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLy8gb25seSBjYWxsZWQgb25jZSwgb24gY29tcG9uZW50IGluaXQhXHJcbiAgICAgIF9zZXRJbnN0YW5jZTogKGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gICAgICAgIC8vIGNlbnRlciB0aGUgbWFwIG9uIHRoZSBtYXJrZXJzXHJcbiAgICAgICAgdGhpcy5maXRNYXBUb0JvdW5kcyhtYXJrZXJzLm1hcCgobSkgPT4gbS5jb29yZHMpKTtcclxuICAgICAgICAvLyBsb2FkIGN1c3RvbSBtYXJrZXJzXHJcbiAgICAgICAgdGhpcy5idWlsZE1hcmtlcnMobWFya2Vycyk7XHJcbiAgICAgICAgdGhpcy5tYXBMb2FkZWQkLm5leHQoeyBtYXA6IGluc3RhbmNlLCBtYXJrZXJzOiB0aGlzLm1hcmtlckxheWVyIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxyXG4gICAgICBsaWJPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAgdGlsZUxheWVyczogW3tcclxuICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcclxuICAgICAgICBvcHRpb25zOiB7fVxyXG4gICAgICB9XSxcclxuICAgICAgaW5pdGlhbFZpZXcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXRNYXBUb0JvdW5kcyhib3VuZHMpIHtcclxuICAgIGlmICh0aGlzLm1hcEluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuZml0Qm91bmRzKGJvdW5kcywge1xyXG4gICAgICAgIG1heFpvb206IDE1LFxyXG4gICAgICAgIHBhZGRpbmc6IFsyMCwgMjBdLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignbWFwIGluc3RhbmNlIGlzIG1pc3NpbmcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBtYXJrZXJzIHdpdGggYSBjdXN0b20gaWNvbiBhbmQgYWRkcyB0aGVtIHRvIHRoZSBtYXAuXHJcbiAgICogQHBhcmFtIG1hcmtlcnMgYW4gYXJyYXkgb2YgbWFya2Vyc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgYnVpbGRNYXJrZXJzKG1hcmtlcnM6IE1hcmtlcldpdGhJRFtdKSB7XHJcbiAgICBpZiAoIW1hcmtlcnMpIHJldHVybjtcclxuICAgIC8vIHJlbW92ZSBhbGwgZXhpc3RpbmcgbWFya2Vyc1xyXG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcclxuICAgICAgdGhpcy5tYXJrZXJMYXllci5jbGVhckxheWVycygpO1xyXG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWFya2VyR3JvdXAgPSBMLm1hcmtlckNsdXN0ZXJHcm91cCgpO1xyXG4gICAgbWFya2Vycy5mb3JFYWNoKCh7XHJcbiAgICAgIGNvb3JkcywgdGVtcGxhdGUsIGlkLCBzbHVnXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgIC8vIGNyZWF0ZSBjdXN0b20gaWNvbiBtYXJrZXJcclxuICAgICAgY29uc3QgbmV3TWFya2VyID0gTC5tYXJrZXIoY29vcmRzLCB7IGljb246IE1BUktFUl9JQ09OIH0pO1xyXG4gICAgICBpZiAoaWQgJiYgc2x1Zykge1xyXG4gICAgICAgIG5ld01hcmtlci5pZCA9IGlkO1xyXG4gICAgICAgIG5ld01hcmtlci5zbHVnID0gc2x1ZztcclxuICAgICAgfVxyXG4gICAgICBuZXdNYXJrZXJcclxuICAgICAgICAvLyBhZGQgdGhlIG1hcmtlciB0byB0aGUgZ3JvdXBcclxuICAgICAgICAuYWRkVG8obWFya2VyR3JvdXApXHJcbiAgICAgICAgLy8gYWRkIHRoZSBvbi1jbGljayB0b29sdGlwXHJcbiAgICAgICAgLmJpbmRQb3B1cCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbigncmVtb3ZlJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbignYWRkJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OX1NFTEVDVEVEKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGFkZCB0aGUgbWFya2VycyB0byB0aGUgbWFwIGluc3RhbmNlXHJcbiAgICB0aGlzLm1hcEluc3RhbmNlLmFkZExheWVyKG1hcmtlckdyb3VwKTtcclxuICAgIC8vIHVwZGF0ZSB0aGUgbWFya2VyIGxheWVyIGluc3RhbmNlXHJcbiAgICB0aGlzLm1hcmtlckxheWVyID0gbWFya2VyR3JvdXA7XHJcbiAgfVxyXG59XHJcbiJdfQ==