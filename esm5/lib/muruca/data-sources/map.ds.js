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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvbWFwLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBMkIvQixJQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsU0FBUyxFQUFFLGFBQWE7Q0FDekIsQ0FBQyxDQUFDO0FBRUgsSUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xDLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDckIsU0FBUyxFQUFFLHNCQUFzQjtDQUNsQyxDQUFDLENBQUM7QUFFSDtJQUE2QiwyQkFBVTtJQUF2QztRQUFBLHFFQW9IQztRQTNHQyxnQkFBVSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFBOztJQTJHMUMsQ0FBQztJQXpHQyw2Q0FBNkM7SUFDbkMsMkJBQVMsR0FBbkIsVUFBb0IsSUFBc0I7UUFBMUMsaUJBbURDO1FBbERDLElBQUksT0FBdUIsQ0FBQztRQUU1QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sR0FB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QyxDQUFDO1FBQ3ZDLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFwSEQsQ0FBNkIsVUFBVSxHQW9IdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXBEYXRhLCBNYXJrZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgJ2xlYWZsZXQubWFya2VyY2x1c3Rlcic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSAnbGVhZmxldCc7XHJcbi8vIGxlYWZsZXQgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSB3aW5kb3csXHJcbi8vIGEgZG91YmxlIGltcG9ydCByZXN1bHRzIGluIGVycm9ycyB3aXRoIHRvb2x0aXBzLlxyXG5kZWNsYXJlIGNvbnN0IEw7XHJcblxyXG5pbnRlcmZhY2UgQ29vcmRzIHsgbGF0OiBudW1iZXI7IGxuZzogbnVtYmVyIH1cclxuXHJcbmludGVyZmFjZSBNYXJrZXIgZXh0ZW5kcyBDb29yZHMge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgZGVmYXVsdF9sYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFRpbWVsaW5lUmVzcG9uc2UgPSB7XHJcbiAgaWQ/OiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzbHVnOiBzdHJpbmc7XHJcbiAgem9vbTogbnVtYmVyO1xyXG4gIG1hcF9jZW50ZXI6IENvb3JkcztcclxuICBtYXJrZXJzOiBNYXJrZXJbXTtcclxufVtdXHJcblxyXG5pbnRlcmZhY2UgTWFya2VyV2l0aElEIGV4dGVuZHMgTWFya2VyRGF0YSB7XHJcbiAgaWQ/OiBudW1iZXI7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTiA9IEwuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLnBuZycsXHJcbiAgaWNvblNpemU6IFszMCwgNDUuNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMjVdLFxyXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xyXG59KTtcclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OX1NFTEVDVEVEID0gTC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4tc2VsZWN0ZWQucG5nJyxcclxuICBpY29uU2l6ZTogWzMwLCA0NS41XSxcclxuICBwb3B1cEFuY2hvcjogWzAsIC0yNV0sXHJcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24tc2VsZWN0ZWQnXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yTWFwRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICAvKiogSW5zdGFuY2Ugb2YgdGhlIGxlYWZsZXQgbWFwICovXHJcbiAgbWFwSW5zdGFuY2U7XHJcblxyXG4gIC8qKiBJbnN0YW5jZSBvZiB0aGUgbWFya2VyIGxheWVyR3JvdXAgKi9cclxuICBtYXJrZXJMYXllcjtcclxuXHJcbiAgbWFwTG9hZGVkJDogU3ViamVjdDxNYXA+ID0gbmV3IFN1YmplY3QoKVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGE6IFRpbWVsaW5lUmVzcG9uc2UpOiBNYXBEYXRhIHtcclxuICAgIGxldCBtYXJrZXJzOiBNYXJrZXJXaXRoSURbXTtcclxuXHJcbiAgICBpZiAoZGF0YS5maW5kKChkKSA9PiBkLm1hcmtlcnMpKSB7XHJcbiAgICAgIG1hcmtlcnMgPSBkYXRhXHJcbiAgICAgICAgLm1hcCgoYXJlYSkgPT4gKGFyZWEubWFya2Vyc1xyXG4gICAgICAgICAgLm1hcCgobSkgPT4gKHtcclxuICAgICAgICAgIC8vIGNvbnZlcnQgdG8gbGVhZmxldCBtYXJrZXIgZm9ybWF0XHJcbiAgICAgICAgICAgIGNvb3JkczogWyttLmxhdCwgK20ubG5nXSBhcyBbbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogbS5kZWZhdWx0X2xhYmVsID8/IG0ubGFiZWwsXHJcbiAgICAgICAgICAgIHRpdGxlOiBtLmxhYmVsID8/IG0uZGVmYXVsdF9sYWJlbCxcclxuICAgICAgICAgICAgaWQ6IGFyZWEuaWQsXHJcbiAgICAgICAgICAgIHNsdWc6IGFyZWEuc2x1ZyxcclxuICAgICAgICAgIH0pKSkpXHJcbiAgICAgICAgLy8gZmxhdHRlbiB0aGUgbGlzdCBvZiBtYXJrZXJzXHJcbiAgICAgICAgLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxWaWV3OiB7IGNlbnRlcjogW251bWJlciwgbnVtYmVyXTsgem9vbTogbnVtYmVyIH0gPSB7XHJcbiAgICAgIC8vIGNlbnRlciBvZiBldXJvcGUgKG9ubHkgZm9yIGluaXRpYWwgbG9hZClcclxuICAgICAgY2VudGVyOiBbNTQuNTI2MCwgMTUuMjU1MV0sXHJcbiAgICAgIHpvb206IDUsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGlmIHRoZSBtYXAgYW5kIHRoZSBtYXJrZXJzIGFscmVhZHkgZXhpc3RcclxuICAgIC8vIHVwZGF0ZSB0aGUgYWxyZWFkeSBleGlzdGluZyBsYXllcnMuXHJcbiAgICBpZiAodGhpcy5tYXBJbnN0YW5jZSAmJiB0aGlzLm1hcmtlckxheWVyKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRNYXJrZXJzKG1hcmtlcnMpO1xyXG4gICAgICB0aGlzLmZpdE1hcFRvQm91bmRzKG1hcmtlcnMubWFwKChtKSA9PiBtLmNvb3JkcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIG9ubHkgY2FsbGVkIG9uY2UsIG9uIGNvbXBvbmVudCBpbml0IVxyXG4gICAgICBfc2V0SW5zdGFuY2U6IChpbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICAgICAgICAvLyBjZW50ZXIgdGhlIG1hcCBvbiB0aGUgbWFya2Vyc1xyXG4gICAgICAgIHRoaXMuZml0TWFwVG9Cb3VuZHMobWFya2Vycy5tYXAoKG0pID0+IG0uY29vcmRzKSk7XHJcbiAgICAgICAgLy8gbG9hZCBjdXN0b20gbWFya2Vyc1xyXG4gICAgICAgIHRoaXMuYnVpbGRNYXJrZXJzKG1hcmtlcnMpO1xyXG4gICAgICAgIHRoaXMubWFwTG9hZGVkJC5uZXh0KHsgbWFwOiBpbnN0YW5jZSwgbWFya2VyczogdGhpcy5tYXJrZXJMYXllciB9KTtcclxuICAgICAgfSxcclxuICAgICAgY29udGFpbmVySWQ6ICdtYXAtY2FudmFzJyxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5saWJPcHRpb25zLFxyXG4gICAgICB9LFxyXG4gICAgICB0aWxlTGF5ZXJzOiBbe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vY2FydG9kYi1iYXNlbWFwcy17c30uZ2xvYmFsLnNzbC5mYXN0bHkubmV0L2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLFxyXG4gICAgICAgIG9wdGlvbnM6IHt9XHJcbiAgICAgIH1dLFxyXG4gICAgICBpbml0aWFsVmlldyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpdE1hcFRvQm91bmRzKGJvdW5kcykge1xyXG4gICAgaWYgKHRoaXMubWFwSW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5maXRCb3VuZHMoYm91bmRzLCB7XHJcbiAgICAgICAgbWF4Wm9vbTogMTUsXHJcbiAgICAgICAgcGFkZGluZzogWzIwLCAyMF0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKCdtYXAgaW5zdGFuY2UgaXMgbWlzc2luZycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIG1hcmtlcnMgd2l0aCBhIGN1c3RvbSBpY29uIGFuZCBhZGRzIHRoZW0gdG8gdGhlIG1hcC5cclxuICAgKiBAcGFyYW0gbWFya2VycyBhbiBhcnJheSBvZiBtYXJrZXJzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBidWlsZE1hcmtlcnMobWFya2VyczogTWFya2VyV2l0aElEW10pIHtcclxuICAgIGlmICghbWFya2VycykgcmV0dXJuO1xyXG4gICAgLy8gcmVtb3ZlIGFsbCBleGlzdGluZyBtYXJrZXJzXHJcbiAgICBpZiAodGhpcy5tYXJrZXJMYXllcikge1xyXG4gICAgICB0aGlzLm1hcmtlckxheWVyLmNsZWFyTGF5ZXJzKCk7XHJcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXJrZXJHcm91cCA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKCk7XHJcbiAgICBtYXJrZXJzLmZvckVhY2goKHtcclxuICAgICAgY29vcmRzLCB0ZW1wbGF0ZSwgaWQsIHNsdWdcclxuICAgIH0pID0+IHtcclxuICAgICAgLy8gY3JlYXRlIGN1c3RvbSBpY29uIG1hcmtlclxyXG4gICAgICBjb25zdCBuZXdNYXJrZXIgPSBMLm1hcmtlcihjb29yZHMsIHsgaWNvbjogTUFSS0VSX0lDT04gfSk7XHJcbiAgICAgIGlmIChpZCAmJiBzbHVnKSB7XHJcbiAgICAgICAgbmV3TWFya2VyLmlkID0gaWQ7XHJcbiAgICAgICAgbmV3TWFya2VyLnNsdWcgPSBzbHVnO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld01hcmtlclxyXG4gICAgICAgIC8vIGFkZCB0aGUgbWFya2VyIHRvIHRoZSBncm91cFxyXG4gICAgICAgIC5hZGRUbyhtYXJrZXJHcm91cClcclxuICAgICAgICAvLyBhZGQgdGhlIG9uLWNsaWNrIHRvb2x0aXBcclxuICAgICAgICAuYmluZFBvcHVwKHRlbXBsYXRlKTtcclxuXHJcbiAgICAgIG5ld01hcmtlci5nZXRQb3B1cCgpLm9uKCdyZW1vdmUnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIHRhcmdldC5fc291cmNlLnNldEljb24oTUFSS0VSX0lDT04pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG5ld01hcmtlci5nZXRQb3B1cCgpLm9uKCdhZGQnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIHRhcmdldC5fc291cmNlLnNldEljb24oTUFSS0VSX0lDT05fU0VMRUNURUQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8gYWRkIHRoZSBtYXJrZXJzIHRvIHRoZSBtYXAgaW5zdGFuY2VcclxuICAgIHRoaXMubWFwSW5zdGFuY2UuYWRkTGF5ZXIobWFya2VyR3JvdXApO1xyXG4gICAgLy8gdXBkYXRlIHRoZSBtYXJrZXIgbGF5ZXIgaW5zdGFuY2VcclxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBtYXJrZXJHcm91cDtcclxuICB9XHJcbn1cclxuIl19