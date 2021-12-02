import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
import { Subject } from 'rxjs';
var ACTIVE_CLASS = 'is-active';
var MARKER_ICON = L.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [16, 25],
    popupAnchor: [0, -15],
    className: 'marker-icon'
});
var MARKER_ICON_UNAVAILABLE = L.icon({
    iconUrl: '/assets/pin-unavailable.png',
    iconSize: [16, 25],
    popupAnchor: [0, -15],
    className: 'marker-icon'
});
var MARKER_ICON_SELECTED = L.icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [16, 25],
    popupAnchor: [0, -15],
    className: 'marker-icon-selected'
});
var FacetMapDS = /** @class */ (function (_super) {
    __extends(FacetMapDS, _super);
    function FacetMapDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = [];
        _this.markerEvents$ = new Subject();
        _this.isUpdate = false;
        _this.getIcon = function (id, counter) {
            if (_this.value.includes(id))
                return MARKER_ICON_SELECTED;
            if (counter > 0)
                return MARKER_ICON;
            return MARKER_ICON_UNAVAILABLE;
        };
        _this.getValue = function () { return _this.value; };
        return _this;
    }
    FacetMapDS.prototype.transform = function (_a) {
        var _this = this;
        var links = _a.links;
        var markers = [];
        links
            .filter(function (d) { var _a, _b; return ((_a = d.args) === null || _a === void 0 ? void 0 : _a.lat) && ((_b = d.args) === null || _b === void 0 ? void 0 : _b.lon); })
            .forEach(function (d) {
            // if a link has more than one corresponding marker
            if (Array.isArray(d.args.lat)) {
                d.args.lat.forEach(function (element, i) {
                    markers.push({
                        coords: [+d.args.lat[i], +d.args.lon[i]],
                        template: d.text,
                        title: d.text,
                        id: d.payload,
                        slug: d.payload,
                        counter: d.counter,
                    });
                });
            }
            else {
                // if a link has only one marker
                markers.push({
                    coords: [+d.args.lat, +d.args.lon],
                    template: d.text,
                    title: d.text,
                    id: d.payload,
                    slug: d.payload,
                    counter: d.counter,
                });
            }
        });
        return {
            containerId: 'map-canvas',
            libOptions: {
                attributionControl: false,
            },
            tileLayers: [{
                    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                    options: null
                }],
            initialView: {
                center: [46.06, 11.21],
                zoom: 9
            },
            _setInstance: function (map) {
                _this.mapInstance = map;
                _this.buildMarkers(markers);
            },
        };
    };
    /**
     * Builds markers with a custom icon and adds them to the map.
     * @param markers an array of markers
     */
    FacetMapDS.prototype.buildMarkers = function (markers) {
        var _this = this;
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
            var coords = _a.coords, template = _a.template, id = _a.id, slug = _a.slug, counter = _a.counter;
            // create custom icon marker
            var newMarker = L.marker(coords, { icon: _this.getIcon(id, counter) });
            if (id && slug) {
                newMarker.id = id;
                newMarker.counter = counter;
                newMarker.slug = slug;
            }
            newMarker
                // add the marker to the group
                .addTo(markerGroup)
                // add the on-click tooltip
                .bindPopup(template);
            newMarker.on('click', function (_a) {
                var target = _a.target;
                _this.markerEvents$.next({
                    type: 'marker.click',
                    id: target.id
                });
            });
            newMarker.on('mouseover', function (_a) {
                var target = _a.target;
                target.openPopup();
            });
            newMarker.on('mouseout', function (_a) {
                var target = _a.target;
                target.closePopup();
            });
        });
        // add the markers to the map instance
        this.mapInstance.addLayer(markerGroup);
        // update the marker layer instance
        this.markerLayer = markerGroup;
    };
    FacetMapDS.prototype.setValue = function (value, update) {
        var _this = this;
        if (update === void 0) { update = false; }
        // prevent the search service from assigning a plain string
        // eslint-disable-next-line no-param-reassign
        if (typeof value === 'string')
            value = [value];
        if (this.value !== value) {
            this.value = value;
        }
        this.isUpdate = update || this.value === [];
        if (update && this.input) {
            var links_1 = this.input.links;
            var updatedLinks = links_1.map(function (link) { return (__assign(__assign({}, link), { classes: _this.value.includes(link.payload) ? ACTIVE_CLASS : '' })); });
            // update marker icons
            if (this.markerLayer) {
                this.markerLayer.eachLayer(function (marker) {
                    var _a;
                    var id = marker.id;
                    var counter = ((_a = links_1.find(function (_a) {
                        var payload = _a.payload;
                        return payload === id;
                    })) === null || _a === void 0 ? void 0 : _a.counter) || 0;
                    marker.getPopup()._source.setIcon(_this.getIcon(id, counter));
                });
            }
            // ---
            this.update(__assign(__assign({}, this.input), { links: updatedLinks }));
        }
    };
    FacetMapDS.prototype.toggleValue = function (value) {
        var exists = this.value.includes(value);
        if (!exists) {
            this.value.push(value);
        }
        else if (exists) {
            this.value.splice(this.value.indexOf(value), 1);
        }
        // update
        this.setValue(this.value, true);
    };
    FacetMapDS.prototype.clear = function () {
        this.value = [];
    };
    return FacetMapDS;
}(DataSource));
export { FacetMapDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LW1hcC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU0vQixJQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7QUF5QmpDLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsT0FBTyxFQUFFLDZCQUE2QjtJQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQWdDLDhCQUFVO0lBQTFDO1FB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QUMsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsU0FBUztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBSUQsMEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUEzS0QsQ0FBZ0MsVUFBVSxHQTJLekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXBEYXRhLCBNYXJrZXJEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgJ2xlYWZsZXQubWFya2VyY2x1c3Rlcic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRmFjZXREYXRhU291cmNlIH0gZnJvbSAnLi9mYWNldC1kYXRhc291cmNlJztcclxuLy8gbGVhZmxldCBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHdpbmRvdyxcclxuLy8gYSBkb3VibGUgaW1wb3J0IHJlc3VsdHMgaW4gZXJyb3JzIHdpdGggdG9vbHRpcHMuXHJcbmRlY2xhcmUgY29uc3QgTDtcclxuXHJcbmNvbnN0IEFDVElWRV9DTEFTUyA9ICdpcy1hY3RpdmUnO1xyXG5cclxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZ1tdO1xyXG5cclxudHlwZSBDYWRhc3RyYWxVbml0ID0ge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBwYXlsb2FkOiBzdHJpbmc7XHJcbiAgY291bnRlcjogbnVtYmVyO1xyXG4gIGFyZ3M6IHtcclxuICAgIGxhdDogc3RyaW5nIHwgbnVsbDtcclxuICAgIGxvbjogc3RyaW5nIHwgbnVsbDtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckV2ZW50IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE1hcmtlcldpdGhJRCBleHRlbmRzIE1hcmtlckRhdGEge1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIGNvdW50ZXI6IG51bWJlcjtcclxuICBzbHVnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OID0gTC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4ucG5nJyxcclxuICBpY29uU2l6ZTogWzE2LCAyNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMTVdLFxyXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xyXG59KTtcclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OX1VOQVZBSUxBQkxFID0gTC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4tdW5hdmFpbGFibGUucG5nJyxcclxuICBpY29uU2l6ZTogWzE2LCAyNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMTVdLFxyXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xyXG59KTtcclxuXHJcbmNvbnN0IE1BUktFUl9JQ09OX1NFTEVDVEVEID0gTC5pY29uKHtcclxuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4tc2VsZWN0ZWQucG5nJyxcclxuICBpY29uU2l6ZTogWzE2LCAyNV0sXHJcbiAgcG9wdXBBbmNob3I6IFswLCAtMTVdLFxyXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uLXNlbGVjdGVkJ1xyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNldE1hcERTIGV4dGVuZHMgRGF0YVNvdXJjZSBpbXBsZW1lbnRzIEZhY2V0RGF0YVNvdXJjZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgdmFsdWU6IEZBQ0VUX1ZBTFVFID0gW107XHJcblxyXG4gIG1hcEluc3RhbmNlO1xyXG5cclxuICBtYXJrZXJMYXllcjtcclxuXHJcbiAgbWFya2VyRXZlbnRzJCA9IG5ldyBTdWJqZWN0PE1hcmtlckV2ZW50PigpO1xyXG5cclxuICBpc1VwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHsgbGlua3MgfTogeyBsaW5rczogQ2FkYXN0cmFsVW5pdFtdIH0pOiBNYXBEYXRhIHtcclxuICAgIGNvbnN0IG1hcmtlcnMgPSBbXTtcclxuICAgIGxpbmtzXHJcbiAgICAgIC5maWx0ZXIoKGQpID0+IGQuYXJncz8ubGF0ICYmIGQuYXJncz8ubG9uKVxyXG4gICAgICAuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIGEgbGluayBoYXMgbW9yZSB0aGFuIG9uZSBjb3JyZXNwb25kaW5nIG1hcmtlclxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGQuYXJncy5sYXQpKSB7XHJcbiAgICAgICAgICBkLmFyZ3MubGF0LmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgbWFya2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgICBjb29yZHM6IFsrZC5hcmdzLmxhdFtpXSwgK2QuYXJncy5sb25baV1dIGFzIFtudW1iZXIsIG51bWJlcl0sXHJcbiAgICAgICAgICAgICAgdGVtcGxhdGU6IGQudGV4dCxcclxuICAgICAgICAgICAgICB0aXRsZTogZC50ZXh0LFxyXG4gICAgICAgICAgICAgIGlkOiBkLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgc2x1ZzogZC5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgIGNvdW50ZXI6IGQuY291bnRlcixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gaWYgYSBsaW5rIGhhcyBvbmx5IG9uZSBtYXJrZXJcclxuICAgICAgICAgIG1hcmtlcnMucHVzaCh7XHJcbiAgICAgICAgICAgIGNvb3JkczogWytkLmFyZ3MubGF0LCArZC5hcmdzLmxvbl0gYXMgW251bWJlciwgbnVtYmVyXSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IGQudGV4dCxcclxuICAgICAgICAgICAgdGl0bGU6IGQudGV4dCxcclxuICAgICAgICAgICAgaWQ6IGQucGF5bG9hZCxcclxuICAgICAgICAgICAgc2x1ZzogZC5wYXlsb2FkLFxyXG4gICAgICAgICAgICBjb3VudGVyOiBkLmNvdW50ZXIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29udGFpbmVySWQ6ICdtYXAtY2FudmFzJyxcclxuICAgICAgbGliT3B0aW9uczoge1xyXG4gICAgICAgIGF0dHJpYnV0aW9uQ29udHJvbDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbGVMYXllcnM6IFt7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jYXJ0b2RiLWJhc2VtYXBzLXtzfS5nbG9iYWwuc3NsLmZhc3RseS5uZXQvbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsXHJcbiAgICAgICAgb3B0aW9uczogbnVsbFxyXG4gICAgICB9XSxcclxuICAgICAgaW5pdGlhbFZpZXc6IHtcclxuICAgICAgICBjZW50ZXI6IFs0Ni4wNiwgMTEuMjFdLFxyXG4gICAgICAgIHpvb206IDlcclxuICAgICAgfSxcclxuICAgICAgX3NldEluc3RhbmNlOiAobWFwKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXBJbnN0YW5jZSA9IG1hcDtcclxuICAgICAgICB0aGlzLmJ1aWxkTWFya2VycyhtYXJrZXJzKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZHMgbWFya2VycyB3aXRoIGEgY3VzdG9tIGljb24gYW5kIGFkZHMgdGhlbSB0byB0aGUgbWFwLlxyXG4gICAqIEBwYXJhbSBtYXJrZXJzIGFuIGFycmF5IG9mIG1hcmtlcnNcclxuICAgKi9cclxuICBwcml2YXRlIGJ1aWxkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJXaXRoSURbXSkge1xyXG4gICAgaWYgKCFtYXJrZXJzKSByZXR1cm47XHJcbiAgICAvLyByZW1vdmUgYWxsIGV4aXN0aW5nIG1hcmtlcnNcclxuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XHJcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIuY2xlYXJMYXllcnMoKTtcclxuICAgICAgdGhpcy5tYXBJbnN0YW5jZS5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcmtlckdyb3VwID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoXHJcbiAgICAgIHtcclxuICAgICAgICBtYXhDbHVzdGVyUmFkaXVzOiAxMCxcclxuICAgICAgICBkaXNhYmxlQ2x1c3RlcmluZ0F0Wm9vbTogOFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgbWFya2Vycy5mb3JFYWNoKCh7XHJcbiAgICAgIGNvb3JkcywgdGVtcGxhdGUsIGlkLCBzbHVnLCBjb3VudGVyXHJcbiAgICB9KSA9PiB7XHJcbiAgICAgIC8vIGNyZWF0ZSBjdXN0b20gaWNvbiBtYXJrZXJcclxuICAgICAgY29uc3QgbmV3TWFya2VyID0gTC5tYXJrZXIoY29vcmRzLCB7IGljb246IHRoaXMuZ2V0SWNvbihpZCwgY291bnRlcikgfSk7XHJcbiAgICAgIGlmIChpZCAmJiBzbHVnKSB7XHJcbiAgICAgICAgbmV3TWFya2VyLmlkID0gaWQ7XHJcbiAgICAgICAgbmV3TWFya2VyLmNvdW50ZXIgPSBjb3VudGVyO1xyXG4gICAgICAgIG5ld01hcmtlci5zbHVnID0gc2x1ZztcclxuICAgICAgfVxyXG4gICAgICBuZXdNYXJrZXJcclxuICAgICAgICAvLyBhZGQgdGhlIG1hcmtlciB0byB0aGUgZ3JvdXBcclxuICAgICAgICAuYWRkVG8obWFya2VyR3JvdXApXHJcbiAgICAgICAgLy8gYWRkIHRoZSBvbi1jbGljayB0b29sdGlwXHJcbiAgICAgICAgLmJpbmRQb3B1cCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIub24oJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0aGlzLm1hcmtlckV2ZW50cyQubmV4dCh7XHJcbiAgICAgICAgICB0eXBlOiAnbWFya2VyLmNsaWNrJyxcclxuICAgICAgICAgIGlkOiB0YXJnZXQuaWRcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIub24oJ21vdXNlb3ZlcicsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0Lm9wZW5Qb3B1cCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG5ld01hcmtlci5vbignbW91c2VvdXQnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIHRhcmdldC5jbG9zZVBvcHVwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBhZGQgdGhlIG1hcmtlcnMgdG8gdGhlIG1hcCBpbnN0YW5jZVxyXG4gICAgdGhpcy5tYXBJbnN0YW5jZS5hZGRMYXllcihtYXJrZXJHcm91cCk7XHJcbiAgICAvLyB1cGRhdGUgdGhlIG1hcmtlciBsYXllciBpbnN0YW5jZVxyXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IG1hcmtlckdyb3VwO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xyXG4gICAgLy8gcHJldmVudCB0aGUgc2VhcmNoIHNlcnZpY2UgZnJvbSBhc3NpZ25pbmcgYSBwbGFpbiBzdHJpbmdcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gW3ZhbHVlXTtcclxuXHJcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc1VwZGF0ZSA9IHVwZGF0ZSB8fCB0aGlzLnZhbHVlID09PSBbXTtcclxuXHJcbiAgICBpZiAodXBkYXRlICYmIHRoaXMuaW5wdXQpIHtcclxuICAgICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5pbnB1dDtcclxuICAgICAgY29uc3QgdXBkYXRlZExpbmtzID0gbGlua3MubWFwKChsaW5rOiBDYWRhc3RyYWxVbml0KSA9PiAoe1xyXG4gICAgICAgIC4uLmxpbmssXHJcbiAgICAgICAgY2xhc3NlczogdGhpcy52YWx1ZS5pbmNsdWRlcyhsaW5rLnBheWxvYWQpID8gQUNUSVZFX0NMQVNTIDogJydcclxuICAgICAgfSkpO1xyXG4gICAgICAvLyB1cGRhdGUgbWFya2VyIGljb25zXHJcbiAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJMYXllci5lYWNoTGF5ZXIoKG1hcmtlcikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBpZCB9ID0gbWFya2VyO1xyXG4gICAgICAgICAgY29uc3QgY291bnRlciA9IGxpbmtzLmZpbmQoKHsgcGF5bG9hZCB9KSA9PiBwYXlsb2FkID09PSBpZCk/LmNvdW50ZXIgfHwgMDtcclxuICAgICAgICAgIG1hcmtlci5nZXRQb3B1cCgpLl9zb3VyY2Uuc2V0SWNvbih0aGlzLmdldEljb24oaWQsIGNvdW50ZXIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyAtLS1cclxuICAgICAgdGhpcy51cGRhdGUoe1xyXG4gICAgICAgIC4uLnRoaXMuaW5wdXQsXHJcbiAgICAgICAgbGlua3M6IHVwZGF0ZWRMaW5rc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEljb24gPSAoaWQ6IHN0cmluZywgY291bnRlcjogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodGhpcy52YWx1ZS5pbmNsdWRlcyhpZCkpIHJldHVybiBNQVJLRVJfSUNPTl9TRUxFQ1RFRDtcclxuICAgIGlmIChjb3VudGVyID4gMCkgcmV0dXJuIE1BUktFUl9JQ09OO1xyXG4gICAgcmV0dXJuIE1BUktFUl9JQ09OX1VOQVZBSUxBQkxFO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgZXhpc3RzID0gdGhpcy52YWx1ZS5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgICBpZiAoIWV4aXN0cykge1xyXG4gICAgICB0aGlzLnZhbHVlLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChleGlzdHMpIHtcclxuICAgICAgdGhpcy52YWx1ZS5zcGxpY2UodGhpcy52YWx1ZS5pbmRleE9mKHZhbHVlKSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlXHJcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gW107XHJcbiAgfVxyXG59XHJcbiJdfQ==