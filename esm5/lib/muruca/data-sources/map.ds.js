import { __assign, __extends } from "tslib";
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
            libOptions: __assign({}, this.options.libOptions),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBMkIvQixJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsU0FBUyxFQUFFLGFBQWE7Q0FDekIsQ0FBQyxDQUFDO0FBRUgsSUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xDLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsU0FBUyxFQUFFLHNCQUFzQjtDQUNsQyxDQUFDLENBQUM7QUFFSDtJQUE2QiwyQkFBVTtJQUF2QztRQUFBLHFFQW9IQztRQTNHQyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFBOztJQTJHMUMsQ0FBQztJQXpHQyw2Q0FBNkM7SUFDbkMsMkJBQVMsR0FBbkIsVUFBb0IsSUFBc0I7UUFBMUMsaUJBbURDO1FBbERDLElBQUksT0FBdUIsQ0FBQztRQUU1QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sR0FB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QyxDQUFDO1FBQ3ZDLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFwSEQsQ0FBNkIsVUFBVSxHQW9IdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBEYXRhLCBNYXJrZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCAnbGVhZmxldC5tYXJrZXJjbHVzdGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2xlYWZsZXQnO1xuLy8gbGVhZmxldCBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHdpbmRvdyxcbi8vIGEgZG91YmxlIGltcG9ydCByZXN1bHRzIGluIGVycm9ycyB3aXRoIHRvb2x0aXBzLlxuZGVjbGFyZSBjb25zdCBMO1xuXG5pbnRlcmZhY2UgQ29vcmRzIHsgbGF0OiBudW1iZXI7IGxuZzogbnVtYmVyIH1cblxuaW50ZXJmYWNlIE1hcmtlciBleHRlbmRzIENvb3JkcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlZmF1bHRfbGFiZWw6IHN0cmluZztcbn1cblxudHlwZSBUaW1lbGluZVJlc3BvbnNlID0ge1xuICBpZD86IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xuICB6b29tOiBudW1iZXI7XG4gIG1hcF9jZW50ZXI6IENvb3JkcztcbiAgbWFya2VyczogTWFya2VyW107XG59W11cblxuaW50ZXJmYWNlIE1hcmtlcldpdGhJRCBleHRlbmRzIE1hcmtlckRhdGEge1xuICBpZD86IG51bWJlcjtcbiAgc2x1Zzogc3RyaW5nO1xufVxuXG5jb25zdCBNQVJLRVJfSUNPTiA9IEwuaWNvbih7XG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi5wbmcnLFxuICBpY29uU2l6ZTogWzMwLCA0NS41XSxcbiAgcG9wdXBBbmNob3I6IFswLCAtMjVdLFxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbidcbn0pO1xuXG5jb25zdCBNQVJLRVJfSUNPTl9TRUxFQ1RFRCA9IEwuaWNvbih7XG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi1zZWxlY3RlZC5wbmcnLFxuICBpY29uU2l6ZTogWzMwLCA0NS41XSxcbiAgcG9wdXBBbmNob3I6IFswLCAtMjVdLFxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbi1zZWxlY3RlZCdcbn0pO1xuXG5leHBvcnQgY2xhc3MgTXJNYXBEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xuICBpZDogc3RyaW5nO1xuXG4gIC8qKiBJbnN0YW5jZSBvZiB0aGUgbGVhZmxldCBtYXAgKi9cbiAgbWFwSW5zdGFuY2U7XG5cbiAgLyoqIEluc3RhbmNlIG9mIHRoZSBtYXJrZXIgbGF5ZXJHcm91cCAqL1xuICBtYXJrZXJMYXllcjtcblxuICBtYXBMb2FkZWQkOiBTdWJqZWN0PE1hcD4gPSBuZXcgU3ViamVjdCgpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YTogVGltZWxpbmVSZXNwb25zZSk6IE1hcERhdGEge1xuICAgIGxldCBtYXJrZXJzOiBNYXJrZXJXaXRoSURbXTtcblxuICAgIGlmIChkYXRhLmZpbmQoKGQpID0+IGQubWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBkYXRhXG4gICAgICAgIC5tYXAoKGFyZWEpID0+IChhcmVhLm1hcmtlcnNcbiAgICAgICAgICAubWFwKChtKSA9PiAoe1xuICAgICAgICAgIC8vIGNvbnZlcnQgdG8gbGVhZmxldCBtYXJrZXIgZm9ybWF0XG4gICAgICAgICAgICBjb29yZHM6IFsrbS5sYXQsICttLmxuZ10gYXMgW251bWJlciwgbnVtYmVyXSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBtLmRlZmF1bHRfbGFiZWwgPz8gbS5sYWJlbCxcbiAgICAgICAgICAgIHRpdGxlOiBtLmxhYmVsID8/IG0uZGVmYXVsdF9sYWJlbCxcbiAgICAgICAgICAgIGlkOiBhcmVhLmlkLFxuICAgICAgICAgICAgc2x1ZzogYXJlYS5zbHVnLFxuICAgICAgICAgIH0pKSkpXG4gICAgICAgIC8vIGZsYXR0ZW4gdGhlIGxpc3Qgb2YgbWFya2Vyc1xuICAgICAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbFZpZXc6IHsgY2VudGVyOiBbbnVtYmVyLCBudW1iZXJdOyB6b29tOiBudW1iZXIgfSA9IHtcbiAgICAgIC8vIGNlbnRlciBvZiBldXJvcGUgKG9ubHkgZm9yIGluaXRpYWwgbG9hZClcbiAgICAgIGNlbnRlcjogWzU0LjUyNjAsIDE1LjI1NTFdLFxuICAgICAgem9vbTogNSxcbiAgICB9O1xuXG4gICAgLy8gaWYgdGhlIG1hcCBhbmQgdGhlIG1hcmtlcnMgYWxyZWFkeSBleGlzdFxuICAgIC8vIHVwZGF0ZSB0aGUgYWxyZWFkeSBleGlzdGluZyBsYXllcnMuXG4gICAgaWYgKHRoaXMubWFwSW5zdGFuY2UgJiYgdGhpcy5tYXJrZXJMYXllcikge1xuICAgICAgdGhpcy5idWlsZE1hcmtlcnMobWFya2Vycyk7XG4gICAgICB0aGlzLmZpdE1hcFRvQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBtLmNvb3JkcykpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAvLyBvbmx5IGNhbGxlZCBvbmNlLCBvbiBjb21wb25lbnQgaW5pdCFcbiAgICAgIF9zZXRJbnN0YW5jZTogKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgLy8gY2VudGVyIHRoZSBtYXAgb24gdGhlIG1hcmtlcnNcbiAgICAgICAgdGhpcy5maXRNYXBUb0JvdW5kcyhtYXJrZXJzLm1hcCgobSkgPT4gbS5jb29yZHMpKTtcbiAgICAgICAgLy8gbG9hZCBjdXN0b20gbWFya2Vyc1xuICAgICAgICB0aGlzLmJ1aWxkTWFya2VycyhtYXJrZXJzKTtcbiAgICAgICAgdGhpcy5tYXBMb2FkZWQkLm5leHQoeyBtYXA6IGluc3RhbmNlLCBtYXJrZXJzOiB0aGlzLm1hcmtlckxheWVyIH0pO1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5lcklkOiAnbWFwLWNhbnZhcycsXG4gICAgICBsaWJPcHRpb25zOiB7XG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5saWJPcHRpb25zLFxuICAgICAgfSxcbiAgICAgIHRpbGVMYXllcnM6IFt7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vY2FydG9kYi1iYXNlbWFwcy17c30uZ2xvYmFsLnNzbC5mYXN0bHkubmV0L2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLFxuICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgfV0sXG4gICAgICBpbml0aWFsVmlldyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBmaXRNYXBUb0JvdW5kcyhib3VuZHMpIHtcbiAgICBpZiAodGhpcy5tYXBJbnN0YW5jZSkge1xuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5maXRCb3VuZHMoYm91bmRzLCB7XG4gICAgICAgIG1heFpvb206IDE1LFxuICAgICAgICBwYWRkaW5nOiBbMjAsIDIwXSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ21hcCBpbnN0YW5jZSBpcyBtaXNzaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBtYXJrZXJzIHdpdGggYSBjdXN0b20gaWNvbiBhbmQgYWRkcyB0aGVtIHRvIHRoZSBtYXAuXG4gICAqIEBwYXJhbSBtYXJrZXJzIGFuIGFycmF5IG9mIG1hcmtlcnNcbiAgICovXG4gIHByaXZhdGUgYnVpbGRNYXJrZXJzKG1hcmtlcnM6IE1hcmtlcldpdGhJRFtdKSB7XG4gICAgaWYgKCFtYXJrZXJzKSByZXR1cm47XG4gICAgLy8gcmVtb3ZlIGFsbCBleGlzdGluZyBtYXJrZXJzXG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIuY2xlYXJMYXllcnMoKTtcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgfVxuICAgIGNvbnN0IG1hcmtlckdyb3VwID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoKTtcbiAgICBtYXJrZXJzLmZvckVhY2goKHtcbiAgICAgIGNvb3JkcywgdGVtcGxhdGUsIGlkLCBzbHVnXG4gICAgfSkgPT4ge1xuICAgICAgLy8gY3JlYXRlIGN1c3RvbSBpY29uIG1hcmtlclxuICAgICAgY29uc3QgbmV3TWFya2VyID0gTC5tYXJrZXIoY29vcmRzLCB7IGljb246IE1BUktFUl9JQ09OIH0pO1xuICAgICAgaWYgKGlkICYmIHNsdWcpIHtcbiAgICAgICAgbmV3TWFya2VyLmlkID0gaWQ7XG4gICAgICAgIG5ld01hcmtlci5zbHVnID0gc2x1ZztcbiAgICAgIH1cbiAgICAgIG5ld01hcmtlclxuICAgICAgICAvLyBhZGQgdGhlIG1hcmtlciB0byB0aGUgZ3JvdXBcbiAgICAgICAgLmFkZFRvKG1hcmtlckdyb3VwKVxuICAgICAgICAvLyBhZGQgdGhlIG9uLWNsaWNrIHRvb2x0aXBcbiAgICAgICAgLmJpbmRQb3B1cCh0ZW1wbGF0ZSk7XG5cbiAgICAgIG5ld01hcmtlci5nZXRQb3B1cCgpLm9uKCdyZW1vdmUnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICB0YXJnZXQuX3NvdXJjZS5zZXRJY29uKE1BUktFUl9JQ09OKTtcbiAgICAgIH0pO1xuXG4gICAgICBuZXdNYXJrZXIuZ2V0UG9wdXAoKS5vbignYWRkJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgdGFyZ2V0Ll9zb3VyY2Uuc2V0SWNvbihNQVJLRVJfSUNPTl9TRUxFQ1RFRCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBhZGQgdGhlIG1hcmtlcnMgdG8gdGhlIG1hcCBpbnN0YW5jZVxuICAgIHRoaXMubWFwSW5zdGFuY2UuYWRkTGF5ZXIobWFya2VyR3JvdXApO1xuICAgIC8vIHVwZGF0ZSB0aGUgbWFya2VyIGxheWVyIGluc3RhbmNlXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IG1hcmtlckdyb3VwO1xuICB9XG59XG4iXX0=