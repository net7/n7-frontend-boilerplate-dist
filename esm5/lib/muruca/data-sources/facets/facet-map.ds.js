import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import 'leaflet.markercluster';
import { Subject } from 'rxjs';
var ACTIVE_CLASS = 'is-active';
var MARKER_ICON = L.icon({
    iconUrl: '/assets/pin.png',
    iconSize: [13, 20],
    popupAnchor: [0, -15],
    className: 'marker-icon'
});
var MARKER_ICON_UNAVAILABLE = L.icon({
    iconUrl: '/assets/pin-unavailable.png',
    iconSize: [13, 20],
    popupAnchor: [0, -15],
    className: 'marker-icon'
});
var MARKER_ICON_SELECTED = L.icon({
    iconUrl: '/assets/pin-selected.png',
    iconSize: [13, 20],
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
        _this.getZindex = function (id, counter) {
            if (_this.value.includes(id))
                return 19999;
            if (counter > 0)
                return 9999;
            return null;
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
                minZoom: 8,
                maxBounds: [[46.8505, 10.3393], [45.6635, 12.2429]]
            },
            tileLayers: [{
                    // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
                    // url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
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
            var newMarker = L.marker(coords, {
                icon: _this.getIcon(id, counter),
                zIndexOffset: _this.getZindex(id, counter)
            });
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
                    marker.getPopup()._source.setIcon(_this.getIcon(id, counter))
                        .setZIndexOffset(_this.getZindex(id, counter));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LW1hcC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU0vQixJQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7QUF5QmpDLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsT0FBTyxFQUFFLDZCQUE2QjtJQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQWdDLDhCQUFVO0lBQTFDO1FB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LFNBQVMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELE1BQU07WUFDTixJQUFJLENBQUMsTUFBTSx1QkFDTixJQUFJLENBQUMsS0FBSyxLQUNiLEtBQUssRUFBRSxZQUFZLElBQ25CLENBQUM7U0FDSjtJQUNILENBQUM7SUFjRCxnQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN2QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUVELFNBQVM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUlELDBCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBekxELENBQWdDLFVBQVUsR0F5THpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IE1hcERhdGEsIE1hcmtlckRhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgJ2xlYWZsZXQubWFya2VyY2x1c3Rlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWNldERhdGFTb3VyY2UgfSBmcm9tICcuL2ZhY2V0LWRhdGFzb3VyY2UnO1xuLy8gbGVhZmxldCBpcyBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIHdpbmRvdyxcbi8vIGEgZG91YmxlIGltcG9ydCByZXN1bHRzIGluIGVycm9ycyB3aXRoIHRvb2x0aXBzLlxuZGVjbGFyZSBjb25zdCBMO1xuXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnaXMtYWN0aXZlJztcblxudHlwZSBGQUNFVF9WQUxVRSA9IHN0cmluZ1tdO1xuXG50eXBlIENhZGFzdHJhbFVuaXQgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgcGF5bG9hZDogc3RyaW5nO1xuICBjb3VudGVyOiBudW1iZXI7XG4gIGFyZ3M6IHtcbiAgICBsYXQ6IHN0cmluZyB8IG51bGw7XG4gICAgbG9uOiBzdHJpbmcgfCBudWxsO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckV2ZW50IHtcbiAgdHlwZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgTWFya2VyV2l0aElEIGV4dGVuZHMgTWFya2VyRGF0YSB7XG4gIGlkPzogc3RyaW5nO1xuICBjb3VudGVyOiBudW1iZXI7XG4gIHNsdWc6IHN0cmluZztcbn1cblxuY29uc3QgTUFSS0VSX0lDT04gPSBMLmljb24oe1xuICBpY29uVXJsOiAnL2Fzc2V0cy9waW4ucG5nJyxcbiAgaWNvblNpemU6IFsxMywgMjBdLFxuICBwb3B1cEFuY2hvcjogWzAsIC0xNV0sXG4gIGNsYXNzTmFtZTogJ21hcmtlci1pY29uJ1xufSk7XG5cbmNvbnN0IE1BUktFUl9JQ09OX1VOQVZBSUxBQkxFID0gTC5pY29uKHtcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXVuYXZhaWxhYmxlLnBuZycsXG4gIGljb25TaXplOiBbMTMsIDIwXSxcbiAgcG9wdXBBbmNob3I6IFswLCAtMTVdLFxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbidcbn0pO1xuXG5jb25zdCBNQVJLRVJfSUNPTl9TRUxFQ1RFRCA9IEwuaWNvbih7XG4gIGljb25Vcmw6ICcvYXNzZXRzL3Bpbi1zZWxlY3RlZC5wbmcnLFxuICBpY29uU2l6ZTogWzEzLCAyMF0sXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTE1XSxcbiAgY2xhc3NOYW1lOiAnbWFya2VyLWljb24tc2VsZWN0ZWQnXG59KTtcblxuZXhwb3J0IGNsYXNzIEZhY2V0TWFwRFMgZXh0ZW5kcyBEYXRhU291cmNlIGltcGxlbWVudHMgRmFjZXREYXRhU291cmNlIHtcbiAgaWQ6IHN0cmluZztcblxuICB2YWx1ZTogRkFDRVRfVkFMVUUgPSBbXTtcblxuICBtYXBJbnN0YW5jZTtcblxuICBtYXJrZXJMYXllcjtcblxuICBtYXJrZXJFdmVudHMkID0gbmV3IFN1YmplY3Q8TWFya2VyRXZlbnQ+KCk7XG5cbiAgaXNVcGRhdGUgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKHsgbGlua3MgfTogeyBsaW5rczogQ2FkYXN0cmFsVW5pdFtdIH0pOiBNYXBEYXRhIHtcbiAgICBjb25zdCBtYXJrZXJzID0gW107XG4gICAgbGlua3NcbiAgICAgIC5maWx0ZXIoKGQpID0+IGQuYXJncz8ubGF0ICYmIGQuYXJncz8ubG9uKVxuICAgICAgLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgLy8gaWYgYSBsaW5rIGhhcyBtb3JlIHRoYW4gb25lIGNvcnJlc3BvbmRpbmcgbWFya2VyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGQuYXJncy5sYXQpKSB7XG4gICAgICAgICAgZC5hcmdzLmxhdC5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICAgICAgICBtYXJrZXJzLnB1c2goe1xuICAgICAgICAgICAgICBjb29yZHM6IFsrZC5hcmdzLmxhdFtpXSwgK2QuYXJncy5sb25baV1dIGFzIFtudW1iZXIsIG51bWJlcl0sXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiBkLnRleHQsXG4gICAgICAgICAgICAgIHRpdGxlOiBkLnRleHQsXG4gICAgICAgICAgICAgIGlkOiBkLnBheWxvYWQsXG4gICAgICAgICAgICAgIHNsdWc6IGQucGF5bG9hZCxcbiAgICAgICAgICAgICAgY291bnRlcjogZC5jb3VudGVyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgYSBsaW5rIGhhcyBvbmx5IG9uZSBtYXJrZXJcbiAgICAgICAgICBtYXJrZXJzLnB1c2goe1xuICAgICAgICAgICAgY29vcmRzOiBbK2QuYXJncy5sYXQsICtkLmFyZ3MubG9uXSBhcyBbbnVtYmVyLCBudW1iZXJdLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGQudGV4dCxcbiAgICAgICAgICAgIHRpdGxlOiBkLnRleHQsXG4gICAgICAgICAgICBpZDogZC5wYXlsb2FkLFxuICAgICAgICAgICAgc2x1ZzogZC5wYXlsb2FkLFxuICAgICAgICAgICAgY291bnRlcjogZC5jb3VudGVyLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVySWQ6ICdtYXAtY2FudmFzJyxcbiAgICAgIGxpYk9wdGlvbnM6IHtcbiAgICAgICAgYXR0cmlidXRpb25Db250cm9sOiBmYWxzZSxcbiAgICAgICAgbWluWm9vbTogOCxcbiAgICAgICAgbWF4Qm91bmRzOiBbWzQ2Ljg1MDUsIDEwLjMzOTNdLCBbNDUuNjYzNSwgMTIuMjQyOV1dXG4gICAgICB9LFxuICAgICAgdGlsZUxheWVyczogW3tcbiAgICAgICAgLy8gdXJsOiAnaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLFxuICAgICAgICB1cmw6ICdodHRwczovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vcmFzdGVydGlsZXMvdm95YWdlcl9sYWJlbHNfdW5kZXIve3p9L3t4fS97eX17cn0ucG5nJyxcbiAgICAgICAgLy8gdXJsOiAnaHR0cHM6Ly9jYXJ0b2RiLWJhc2VtYXBzLXtzfS5nbG9iYWwuc3NsLmZhc3RseS5uZXQvbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsXG4gICAgICAgIG9wdGlvbnM6IG51bGxcbiAgICAgIH1dLFxuICAgICAgaW5pdGlhbFZpZXc6IHtcbiAgICAgICAgY2VudGVyOiBbNDYuMDYsIDExLjIxXSxcbiAgICAgICAgem9vbTogOVxuICAgICAgfSxcbiAgICAgIF9zZXRJbnN0YW5jZTogKG1hcCkgPT4ge1xuICAgICAgICB0aGlzLm1hcEluc3RhbmNlID0gbWFwO1xuICAgICAgICB0aGlzLmJ1aWxkTWFya2VycyhtYXJrZXJzKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgbWFya2VycyB3aXRoIGEgY3VzdG9tIGljb24gYW5kIGFkZHMgdGhlbSB0byB0aGUgbWFwLlxuICAgKiBAcGFyYW0gbWFya2VycyBhbiBhcnJheSBvZiBtYXJrZXJzXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJXaXRoSURbXSkge1xuICAgIGlmICghbWFya2VycykgcmV0dXJuO1xuICAgIC8vIHJlbW92ZSBhbGwgZXhpc3RpbmcgbWFya2Vyc1xuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcmtlckxheWVyLmNsZWFyTGF5ZXJzKCk7XG4gICAgICB0aGlzLm1hcEluc3RhbmNlLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgIH1cbiAgICBjb25zdCBtYXJrZXJHcm91cCA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKFxuICAgICAge1xuICAgICAgICBtYXhDbHVzdGVyUmFkaXVzOiAxMCxcbiAgICAgICAgZGlzYWJsZUNsdXN0ZXJpbmdBdFpvb206IDhcbiAgICAgIH1cbiAgICApO1xuICAgIG1hcmtlcnMuZm9yRWFjaCgoe1xuICAgICAgY29vcmRzLCB0ZW1wbGF0ZSwgaWQsIHNsdWcsIGNvdW50ZXJcbiAgICB9KSA9PiB7XG4gICAgICAvLyBjcmVhdGUgY3VzdG9tIGljb24gbWFya2VyXG4gICAgICBjb25zdCBuZXdNYXJrZXIgPSBMLm1hcmtlcihjb29yZHMsIHtcbiAgICAgICAgaWNvbjogdGhpcy5nZXRJY29uKGlkLCBjb3VudGVyKSxcbiAgICAgICAgekluZGV4T2Zmc2V0OiB0aGlzLmdldFppbmRleChpZCwgY291bnRlcilcbiAgICAgIH0pO1xuICAgICAgaWYgKGlkICYmIHNsdWcpIHtcbiAgICAgICAgbmV3TWFya2VyLmlkID0gaWQ7XG4gICAgICAgIG5ld01hcmtlci5jb3VudGVyID0gY291bnRlcjtcbiAgICAgICAgbmV3TWFya2VyLnNsdWcgPSBzbHVnO1xuICAgICAgfVxuICAgICAgbmV3TWFya2VyXG4gICAgICAgIC8vIGFkZCB0aGUgbWFya2VyIHRvIHRoZSBncm91cFxuICAgICAgICAuYWRkVG8obWFya2VyR3JvdXApXG4gICAgICAgIC8vIGFkZCB0aGUgb24tY2xpY2sgdG9vbHRpcFxuICAgICAgICAuYmluZFBvcHVwKHRlbXBsYXRlKTtcblxuICAgICAgbmV3TWFya2VyLm9uKCdjbGljaycsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgIHRoaXMubWFya2VyRXZlbnRzJC5uZXh0KHtcbiAgICAgICAgICB0eXBlOiAnbWFya2VyLmNsaWNrJyxcbiAgICAgICAgICBpZDogdGFyZ2V0LmlkXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld01hcmtlci5vbignbW91c2VvdmVyJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgdGFyZ2V0Lm9wZW5Qb3B1cCgpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld01hcmtlci5vbignbW91c2VvdXQnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICB0YXJnZXQuY2xvc2VQb3B1cCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gYWRkIHRoZSBtYXJrZXJzIHRvIHRoZSBtYXAgaW5zdGFuY2VcbiAgICB0aGlzLm1hcEluc3RhbmNlLmFkZExheWVyKG1hcmtlckdyb3VwKTtcbiAgICAvLyB1cGRhdGUgdGhlIG1hcmtlciBsYXllciBpbnN0YW5jZVxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBtYXJrZXJHcm91cDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBGQUNFVF9WQUxVRSwgdXBkYXRlID0gZmFsc2UpIHtcbiAgICAvLyBwcmV2ZW50IHRoZSBzZWFyY2ggc2VydmljZSBmcm9tIGFzc2lnbmluZyBhIHBsYWluIHN0cmluZ1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9IFt2YWx1ZV07XG5cbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5pc1VwZGF0ZSA9IHVwZGF0ZSB8fCB0aGlzLnZhbHVlID09PSBbXTtcblxuICAgIGlmICh1cGRhdGUgJiYgdGhpcy5pbnB1dCkge1xuICAgICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5pbnB1dDtcbiAgICAgIGNvbnN0IHVwZGF0ZWRMaW5rcyA9IGxpbmtzLm1hcCgobGluazogQ2FkYXN0cmFsVW5pdCkgPT4gKHtcbiAgICAgICAgLi4ubGluayxcbiAgICAgICAgY2xhc3NlczogdGhpcy52YWx1ZS5pbmNsdWRlcyhsaW5rLnBheWxvYWQpID8gQUNUSVZFX0NMQVNTIDogJydcbiAgICAgIH0pKTtcbiAgICAgIC8vIHVwZGF0ZSBtYXJrZXIgaWNvbnNcbiAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICAgIHRoaXMubWFya2VyTGF5ZXIuZWFjaExheWVyKChtYXJrZXIpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGlkIH0gPSBtYXJrZXI7XG4gICAgICAgICAgY29uc3QgY291bnRlciA9IGxpbmtzLmZpbmQoKHsgcGF5bG9hZCB9KSA9PiBwYXlsb2FkID09PSBpZCk/LmNvdW50ZXIgfHwgMDtcbiAgICAgICAgICBtYXJrZXIuZ2V0UG9wdXAoKS5fc291cmNlLnNldEljb24odGhpcy5nZXRJY29uKGlkLCBjb3VudGVyKSlcbiAgICAgICAgICAgIC5zZXRaSW5kZXhPZmZzZXQodGhpcy5nZXRaaW5kZXgoaWQsIGNvdW50ZXIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyAtLS1cbiAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgLi4udGhpcy5pbnB1dCxcbiAgICAgICAgbGlua3M6IHVwZGF0ZWRMaW5rc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0SWNvbiA9IChpZDogc3RyaW5nLCBjb3VudGVyOiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy52YWx1ZS5pbmNsdWRlcyhpZCkpIHJldHVybiBNQVJLRVJfSUNPTl9TRUxFQ1RFRDtcbiAgICBpZiAoY291bnRlciA+IDApIHJldHVybiBNQVJLRVJfSUNPTjtcbiAgICByZXR1cm4gTUFSS0VSX0lDT05fVU5BVkFJTEFCTEU7XG4gIH1cblxuICBnZXRaaW5kZXggPSAoaWQ6IHN0cmluZywgY291bnRlcjogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMudmFsdWUuaW5jbHVkZXMoaWQpKSByZXR1cm4gMTk5OTk7XG4gICAgaWYgKGNvdW50ZXIgPiAwKSByZXR1cm4gOTk5OTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvZ2dsZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBleGlzdHMgPSB0aGlzLnZhbHVlLmluY2x1ZGVzKHZhbHVlKTtcbiAgICBpZiAoIWV4aXN0cykge1xuICAgICAgdGhpcy52YWx1ZS5wdXNoKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGV4aXN0cykge1xuICAgICAgdGhpcy52YWx1ZS5zcGxpY2UodGhpcy52YWx1ZS5pbmRleE9mKHZhbHVlKSwgMSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIGdldFZhbHVlID0gKCk6IEZBQ0VUX1ZBTFVFID0+IHRoaXMudmFsdWU7XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IFtdO1xuICB9XG59XG4iXX0=