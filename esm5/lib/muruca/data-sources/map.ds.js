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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBMkIvQixJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsU0FBUyxFQUFFLGFBQWE7Q0FDekIsQ0FBQyxDQUFDO0FBRUgsSUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xDLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsU0FBUyxFQUFFLHNCQUFzQjtDQUNsQyxDQUFDLENBQUM7QUFFSDtJQUE2QiwyQkFBVTtJQUF2QztRQUFBLHFFQW9IQztRQTNHQyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFBOztJQTJHMUMsQ0FBQztJQXpHQyw2Q0FBNkM7SUFDbkMsMkJBQVMsR0FBbkIsVUFBb0IsSUFBc0I7UUFBMUMsaUJBbURDO1FBbERDLElBQUksT0FBdUIsQ0FBQztRQUU1QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sR0FB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QUM7UUFDdkMsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQXBIRCxDQUE2QixVQUFVLEdBb0h0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcERhdGEsIE1hcmtlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWFwIH0gZnJvbSAnbGVhZmxldCc7XG4vLyBsZWFmbGV0IGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgd2luZG93LFxuLy8gYSBkb3VibGUgaW1wb3J0IHJlc3VsdHMgaW4gZXJyb3JzIHdpdGggdG9vbHRpcHMuXG5kZWNsYXJlIGNvbnN0IEw7XG5cbmludGVyZmFjZSBDb29yZHMgeyBsYXQ6IG51bWJlcjsgbG5nOiBudW1iZXIgfVxuXG5pbnRlcmZhY2UgTWFya2VyIGV4dGVuZHMgQ29vcmRzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVmYXVsdF9sYWJlbDogc3RyaW5nO1xufVxuXG50eXBlIFRpbWVsaW5lUmVzcG9uc2UgPSB7XG4gIGlkPzogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBzbHVnOiBzdHJpbmc7XG4gIHpvb206IG51bWJlcjtcbiAgbWFwX2NlbnRlcjogQ29vcmRzO1xuICBtYXJrZXJzOiBNYXJrZXJbXTtcbn1bXVxuXG5pbnRlcmZhY2UgTWFya2VyV2l0aElEIGV4dGVuZHMgTWFya2VyRGF0YSB7XG4gIGlkPzogbnVtYmVyO1xuICBzbHVnOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1BUktFUl9JQ09OID0gTC5pY29uKHtcbiAgaWNvblVybDogJy9hc3NldHMvcGluLnBuZycsXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xufSk7XG5cbmNvbnN0IE1BUktFUl9JQ09OX1NFTEVDVEVEID0gTC5pY29uKHtcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXNlbGVjdGVkLnBuZycsXG4gIGljb25TaXplOiBbMzAsIDQ1LjVdLFxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uLXNlbGVjdGVkJ1xufSk7XG5cbmV4cG9ydCBjbGFzcyBNck1hcERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIGlkOiBzdHJpbmc7XG5cbiAgLyoqIEluc3RhbmNlIG9mIHRoZSBsZWFmbGV0IG1hcCAqL1xuICBtYXBJbnN0YW5jZTtcblxuICAvKiogSW5zdGFuY2Ugb2YgdGhlIG1hcmtlciBsYXllckdyb3VwICovXG4gIG1hcmtlckxheWVyO1xuXG4gIG1hcExvYWRlZCQ6IFN1YmplY3Q8TWFwPiA9IG5ldyBTdWJqZWN0KClcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBUaW1lbGluZVJlc3BvbnNlKTogTWFwRGF0YSB7XG4gICAgbGV0IG1hcmtlcnM6IE1hcmtlcldpdGhJRFtdO1xuXG4gICAgaWYgKGRhdGEuZmluZCgoZCkgPT4gZC5tYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IGRhdGFcbiAgICAgICAgLm1hcCgoYXJlYSkgPT4gKGFyZWEubWFya2Vyc1xuICAgICAgICAgIC5tYXAoKG0pID0+ICh7XG4gICAgICAgICAgLy8gY29udmVydCB0byBsZWFmbGV0IG1hcmtlciBmb3JtYXRcbiAgICAgICAgICAgIGNvb3JkczogWyttLmxhdCwgK20ubG5nXSBhcyBbbnVtYmVyLCBudW1iZXJdLFxuICAgICAgICAgICAgdGVtcGxhdGU6IG0uZGVmYXVsdF9sYWJlbCA/PyBtLmxhYmVsLFxuICAgICAgICAgICAgdGl0bGU6IG0ubGFiZWwgPz8gbS5kZWZhdWx0X2xhYmVsLFxuICAgICAgICAgICAgaWQ6IGFyZWEuaWQsXG4gICAgICAgICAgICBzbHVnOiBhcmVhLnNsdWcsXG4gICAgICAgICAgfSkpKSlcbiAgICAgICAgLy8gZmxhdHRlbiB0aGUgbGlzdCBvZiBtYXJrZXJzXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsVmlldzogeyBjZW50ZXI6IFtudW1iZXIsIG51bWJlcl07IHpvb206IG51bWJlciB9ID0ge1xuICAgICAgLy8gY2VudGVyIG9mIGV1cm9wZSAob25seSBmb3IgaW5pdGlhbCBsb2FkKVxuICAgICAgY2VudGVyOiBbNTQuNTI2MCwgMTUuMjU1MV0sXG4gICAgICB6b29tOiA1LFxuICAgIH07XG5cbiAgICAvLyBpZiB0aGUgbWFwIGFuZCB0aGUgbWFya2VycyBhbHJlYWR5IGV4aXN0XG4gICAgLy8gdXBkYXRlIHRoZSBhbHJlYWR5IGV4aXN0aW5nIGxheWVycy5cbiAgICBpZiAodGhpcy5tYXBJbnN0YW5jZSAmJiB0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICB0aGlzLmJ1aWxkTWFya2VycyhtYXJrZXJzKTtcbiAgICAgIHRoaXMuZml0TWFwVG9Cb3VuZHMobWFya2Vycy5tYXAoKG0pID0+IG0uY29vcmRzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIG9ubHkgY2FsbGVkIG9uY2UsIG9uIGNvbXBvbmVudCBpbml0IVxuICAgICAgX3NldEluc3RhbmNlOiAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICAvLyBjZW50ZXIgdGhlIG1hcCBvbiB0aGUgbWFya2Vyc1xuICAgICAgICB0aGlzLmZpdE1hcFRvQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBtLmNvb3JkcykpO1xuICAgICAgICAvLyBsb2FkIGN1c3RvbSBtYXJrZXJzXG4gICAgICAgIHRoaXMuYnVpbGRNYXJrZXJzKG1hcmtlcnMpO1xuICAgICAgICB0aGlzLm1hcExvYWRlZCQubmV4dCh7IG1hcDogaW5zdGFuY2UsIG1hcmtlcnM6IHRoaXMubWFya2VyTGF5ZXIgfSk7XG4gICAgICB9LFxuICAgICAgY29udGFpbmVySWQ6ICdtYXAtY2FudmFzJyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB0aWxlTGF5ZXJzOiBbe1xuICAgICAgICB1cmw6ICdodHRwczovL2NhcnRvZGItYmFzZW1hcHMte3N9Lmdsb2JhbC5zc2wuZmFzdGx5Lm5ldC9saWdodF9hbGwve3p9L3t4fS97eX0ucG5nJyxcbiAgICAgICAgb3B0aW9uczoge31cbiAgICAgIH1dLFxuICAgICAgaW5pdGlhbFZpZXcsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZml0TWFwVG9Cb3VuZHMoYm91bmRzKSB7XG4gICAgaWYgKHRoaXMubWFwSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UuZml0Qm91bmRzKGJvdW5kcywge1xuICAgICAgICBtYXhab29tOiAxNSxcbiAgICAgICAgcGFkZGluZzogWzIwLCAyMF0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdtYXAgaW5zdGFuY2UgaXMgbWlzc2luZycpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgbWFya2VycyB3aXRoIGEgY3VzdG9tIGljb24gYW5kIGFkZHMgdGhlbSB0byB0aGUgbWFwLlxuICAgKiBAcGFyYW0gbWFya2VycyBhbiBhcnJheSBvZiBtYXJrZXJzXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJXaXRoSURbXSkge1xuICAgIGlmICghbWFya2VycykgcmV0dXJuO1xuICAgIC8vIHJlbW92ZSBhbGwgZXhpc3RpbmcgbWFya2Vyc1xuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcmtlckxheWVyLmNsZWFyTGF5ZXJzKCk7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgIH1cbiAgICBjb25zdCBtYXJrZXJHcm91cCA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKCk7XG4gICAgbWFya2Vycy5mb3JFYWNoKCh7XG4gICAgICBjb29yZHMsIHRlbXBsYXRlLCBpZCwgc2x1Z1xuICAgIH0pID0+IHtcbiAgICAgIC8vIGNyZWF0ZSBjdXN0b20gaWNvbiBtYXJrZXJcbiAgICAgIGNvbnN0IG5ld01hcmtlciA9IEwubWFya2VyKGNvb3JkcywgeyBpY29uOiBNQVJLRVJfSUNPTiB9KTtcbiAgICAgIGlmIChpZCAmJiBzbHVnKSB7XG4gICAgICAgIG5ld01hcmtlci5pZCA9IGlkO1xuICAgICAgICBuZXdNYXJrZXIuc2x1ZyA9IHNsdWc7XG4gICAgICB9XG4gICAgICBuZXdNYXJrZXJcbiAgICAgICAgLy8gYWRkIHRoZSBtYXJrZXIgdG8gdGhlIGdyb3VwXG4gICAgICAgIC5hZGRUbyhtYXJrZXJHcm91cClcbiAgICAgICAgLy8gYWRkIHRoZSBvbi1jbGljayB0b29sdGlwXG4gICAgICAgIC5iaW5kUG9wdXAodGVtcGxhdGUpO1xuXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbigncmVtb3ZlJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgdGFyZ2V0Ll9zb3VyY2Uuc2V0SWNvbihNQVJLRVJfSUNPTik7XG4gICAgICB9KTtcblxuICAgICAgbmV3TWFya2VyLmdldFBvcHVwKCkub24oJ2FkZCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIHRhcmdldC5fc291cmNlLnNldEljb24oTUFSS0VSX0lDT05fU0VMRUNURUQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gYWRkIHRoZSBtYXJrZXJzIHRvIHRoZSBtYXAgaW5zdGFuY2VcbiAgICB0aGlzLm1hcEluc3RhbmNlLmFkZExheWVyKG1hcmtlckdyb3VwKTtcbiAgICAvLyB1cGRhdGUgdGhlIG1hcmtlciBsYXllciBpbnN0YW5jZVxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBtYXJrZXJHcm91cDtcbiAgfVxufVxuIl19