import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
import { Subject } from 'rxjs';
var MARKER_ICON = L.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [20, 30],
    popupAnchor: [0, -20],
    iconAnchor: [10, 30],
    className: 'marker-icon'
});
var MARKER_ICON_SELECTED = L.icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [20, 30],
    popupAnchor: [0, -20],
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
            maxClusterRadius: 10,
            disableClusteringAtZoom: 8
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBMkIvQixJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNsQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNwQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQTZCLDJCQUFVO0lBQXZDO1FBQUEscUVBNkhDO1FBcEhDLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUE7O0lBb0gxQyxDQUFDO0lBbEhDLDZDQUE2QztJQUNuQywyQkFBUyxHQUFuQixVQUFvQixJQUFzQjtRQUExQyxpQkFzREM7UUFyREMsSUFBSSxPQUF1QixDQUFDO1FBQzVCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FB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R0FBRyxJQUFJLENBQUM7YUFDdkI7WUFDRCxTQUFTO2dCQUNQLDhCQUE4QjtpQkFDN0IsS0FBSyxDQUFDLFdBQVcsQ0FBQztnQkFDbkIsMkJBQTJCO2lCQUMxQixTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFdkIsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxFQUFVO29CQUFSLGtCQUFNO2dCQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztZQUVILFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsRUFBVTtvQkFBUixrQkFBTTtnQkFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUE3SEQsQ0FBNkIsVUFBVSxHQTZIdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBEYXRhLCBNYXJrZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2xlYWZsZXQnO1xuLy8gbGVhZmxldCBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHdpbmRvdyxcbi8vIGEgZG91YmxlIGltcG9ydCByZXN1bHRzIGluIGVycm9ycyB3aXRoIHRvb2x0aXBzLlxuZGVjbGFyZSBjb25zdCBMO1xuXG5pbnRlcmZhY2UgQ29vcmRzIHsgbGF0OiBudW1iZXI7IGxuZzogbnVtYmVyIH1cblxuaW50ZXJmYWNlIE1hcmtlciBleHRlbmRzIENvb3JkcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlZmF1bHRfbGFiZWw6IHN0cmluZztcbn1cblxudHlwZSBUaW1lbGluZVJlc3BvbnNlID0ge1xuICBpZD86IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xuICB6b29tOiBudW1iZXI7XG4gIG1hcF9jZW50ZXI6IENvb3JkcztcbiAgbWFya2VyczogTWFya2VyW107XG59W11cblxuaW50ZXJmYWNlIE1hcmtlcldpdGhJRCBleHRlbmRzIE1hcmtlckRhdGEge1xuICBpZD86IG51bWJlcjtcbiAgc2x1Zzogc3RyaW5nO1xufVxuXG5jb25zdCBNQVJLRVJfSUNPTiA9IEwuaWNvbih7XG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi5wbmcnLFxuICBpY29uU2l6ZTogWzIwLCAzMF0sXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTIwXSxcbiAgaWNvbkFuY2hvcjogWzEwLCAzMF0sXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xufSk7XG5cbmNvbnN0IE1BUktFUl9JQ09OX1NFTEVDVEVEID0gTC5pY29uKHtcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXNlbGVjdGVkLnBuZycsXG4gIGljb25TaXplOiBbMjAsIDMwXSxcbiAgcG9wdXBBbmNob3I6IFswLCAtMjBdLFxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbi1zZWxlY3RlZCdcbn0pO1xuXG5leHBvcnQgY2xhc3MgTXJNYXBEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIC8qKiBJbnN0YW5jZSBvZiB0aGUgbGVhZmxldCBtYXAgKi9cbiAgbWFwSW5zdGFuY2U7XG5cbiAgLyoqIEluc3RhbmNlIG9mIHRoZSBtYXJrZXIgbGF5ZXJHcm91cCAqL1xuICBtYXJrZXJMYXllcjtcblxuICBtYXBMb2FkZWQkOiBTdWJqZWN0PE1hcD4gPSBuZXcgU3ViamVjdCgpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogVGltZWxpbmVSZXNwb25zZSk6IE1hcERhdGEge1xuICAgIGxldCBtYXJrZXJzOiBNYXJrZXJXaXRoSURbXTtcbiAgICBjb25zdCBkID0gZGF0YS5maW5kKCh6KSA9PiB6Lnpvb20pO1xuICAgIGlmIChkYXRhLmZpbmQoKGEpID0+IGEubWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBkYXRhXG4gICAgICAgIC5tYXAoKGFyZWEpID0+IChhcmVhLm1hcmtlcnNcbiAgICAgICAgICAubWFwKChtKSA9PiAoe1xuICAgICAgICAgIC8vIGNvbnZlcnQgdG8gbGVhZmxldCBtYXJrZXIgZm9ybWF0XG4gICAgICAgICAgICBjb29yZHM6IFsrbS5sYXQsICttLmxuZ10gYXMgW251bWJlciwgbnVtYmVyXSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBtLmRlZmF1bHRfbGFiZWwgPz8gbS5sYWJlbCxcbiAgICAgICAgICAgIHRpdGxlOiBtLmxhYmVsID8/IG0uZGVmYXVsdF9sYWJlbCxcbiAgICAgICAgICAgIGlkOiBhcmVhLmlkLFxuICAgICAgICAgICAgc2x1ZzogYXJlYS5zbHVnLFxuICAgICAgICAgIH0pKSkpXG4gICAgICAgIC8vIGZsYXR0ZW4gdGhlIGxpc3Qgb2YgbWFya2Vyc1xuICAgICAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XG4gICAgfVxuICAgIGNvbnN0IG1hcENlbnRlcjogW251bWJlciwgbnVtYmVyXSA9IGQubWFwX2NlbnRlciA/IFtkLm1hcF9jZW50ZXIubGF0LCBkLm1hcF9jZW50ZXIubG5nXVxuICAgICAgOiBbNTQuNTI2MCwgMTUuMjU1MV07XG4gICAgY29uc3QgaW5pdGlhbFZpZXc6IHsgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdOyB6b29tOiBudW1iZXIgfSA9IHtcbiAgICAvLyBjZW50ZXIgb2YgZXVyb3BlIChvbmx5IGZvciBpbml0aWFsIGxvYWQpXG4gICAgICBjZW50ZXI6IG1hcENlbnRlcixcbiAgICAgIHpvb206IGQuem9vbSxcbiAgICB9O1xuXG4gICAgLy8gaWYgdGhlIG1hcCBhbmQgdGhlIG1hcmtlcnMgYWxyZWFkeSBleGlzdFxuICAgIC8vIHVwZGF0ZSB0aGUgYWxyZWFkeSBleGlzdGluZyBsYXllcnMuXG4gICAgaWYgKHRoaXMubWFwSW5zdGFuY2UgJiYgdGhpcy5tYXJrZXJMYXllcikge1xuICAgICAgdGhpcy5idWlsZE1hcmtlcnMobWFya2Vycyk7XG4gICAgICB0aGlzLmZpdE1hcFRvQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBtLmNvb3JkcyksIGQuem9vbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIG9ubHkgY2FsbGVkIG9uY2UsIG9uIGNvbXBvbmVudCBpbml0IVxuICAgICAgX3NldEluc3RhbmNlOiAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICAvLyBjZW50ZXIgdGhlIG1hcCBvbiB0aGUgbWFya2Vyc1xuICAgICAgICB0aGlzLmZpdE1hcFRvQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBtLmNvb3JkcyksIGQuem9vbSk7XG4gICAgICAgIC8vIGxvYWQgY3VzdG9tIG1hcmtlcnNcbiAgICAgICAgdGhpcy5idWlsZE1hcmtlcnMobWFya2Vycyk7XG4gICAgICAgIHRoaXMubWFwTG9hZGVkJC5uZXh0KHsgbWFwOiBpbnN0YW5jZSwgbWFya2VyczogdGhpcy5tYXJrZXJMYXllciB9KTtcbiAgICAgIH0sXG4gICAgICBjb250YWluZXJJZDogJ21hcC1jYW52YXMnLFxuICAgICAgbGliT3B0aW9uczoge1xuICAgICAgICAuLi50aGlzLm9wdGlvbnMubGliT3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICB0aWxlTGF5ZXJzOiBbe1xuICAgICAgICAvLyB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgICAgLy8gdXJsOiAnaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLFxuICAgICAgICB1cmw6ICdodHRwczovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vcmFzdGVydGlsZXMvdm95YWdlcl9sYWJlbHNfdW5kZXIve3p9L3t4fS97eX17cn0ucG5nJyxcbiAgICAgICAgb3B0aW9uczoge31cbiAgICAgIH1dLFxuICAgICAgaW5pdGlhbFZpZXcsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZml0TWFwVG9Cb3VuZHMoYm91bmRzLCB6b29tID0gMTApIHtcbiAgICBjb25zb2xlLmxvZyh6b29tKTtcbiAgICBpZiAodGhpcy5tYXBJbnN0YW5jZSkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5maXRCb3VuZHMoYm91bmRzLCB7XG4gICAgICAgIG1heFpvb206IHpvb20sXG4gICAgICAgIHBhZGRpbmc6IFsyMCwgMjBdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdtYXAgaW5zdGFuY2UgaXMgbWlzc2luZycpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgbWFya2VycyB3aXRoIGEgY3VzdG9tIGljb24gYW5kIGFkZHMgdGhlbSB0byB0aGUgbWFwLlxuICAgKiBAcGFyYW0gbWFya2VycyBhbiBhcnJheSBvZiBtYXJrZXJzXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJXaXRoSURbXSkge1xuICAgIGlmICghbWFya2VycykgcmV0dXJuO1xuICAgIC8vIHJlbW92ZSBhbGwgZXhpc3RpbmcgbWFya2Vyc1xuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcmtlckxheWVyLmNsZWFyTGF5ZXJzKCk7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgIH1cbiAgICBjb25zdCBtYXJrZXJHcm91cCA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKFxuICAgICAge1xuICAgICAgICBtYXhDbHVzdGVyUmFkaXVzOiAxMCxcbiAgICAgICAgZGlzYWJsZUNsdXN0ZXJpbmdBdFpvb206IDhcbiAgICAgIH1cbiAgICApO1xuICAgIG1hcmtlcnMuZm9yRWFjaCgoe1xuICAgICAgY29vcmRzLCB0ZW1wbGF0ZSwgaWQsIHNsdWdcbiAgICB9KSA9PiB7XG4gICAgICAvLyBjcmVhdGUgY3VzdG9tIGljb24gbWFya2VyXG4gICAgICBjb25zdCBuZXdNYXJrZXIgPSBMLm1hcmtlcihjb29yZHMsIHsgaWNvbjogTUFSS0VSX0lDT04gfSk7XG4gICAgICBpZiAoaWQgJiYgc2x1Zykge1xuICAgICAgICBuZXdNYXJrZXIuaWQgPSBpZDtcbiAgICAgICAgbmV3TWFya2VyLnNsdWcgPSBzbHVnO1xuICAgICAgfVxuICAgICAgbmV3TWFya2VyXG4gICAgICAgIC8vIGFkZCB0aGUgbWFya2VyIHRvIHRoZSBncm91cFxuICAgICAgICAuYWRkVG8obWFya2VyR3JvdXApXG4gICAgICAgIC8vIGFkZCB0aGUgb24tY2xpY2sgdG9vbHRpcFxuICAgICAgICAuYmluZFBvcHVwKHRlbXBsYXRlKTtcblxuICAgICAgbmV3TWFya2VyLmdldFBvcHVwKCkub24oJ3JlbW92ZScsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIHRhcmdldC5fc291cmNlLnNldEljb24oTUFSS0VSX0lDT04pO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld01hcmtlci5nZXRQb3B1cCgpLm9uKCdhZGQnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OX1NFTEVDVEVEKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGFkZCB0aGUgbWFya2VycyB0byB0aGUgbWFwIGluc3RhbmNlXG4gICAgdGhpcy5tYXBJbnN0YW5jZS5hZGRMYXllcihtYXJrZXJHcm91cCk7XG4gICAgLy8gdXBkYXRlIHRoZSBtYXJrZXIgbGF5ZXIgaW5zdGFuY2VcbiAgICB0aGlzLm1hcmtlckxheWVyID0gbWFya2VyR3JvdXA7XG4gIH1cbn1cbiJdfQ==