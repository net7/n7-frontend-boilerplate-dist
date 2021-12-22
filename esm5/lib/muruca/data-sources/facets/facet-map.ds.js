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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbWFwLmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9kYXRhLXNvdXJjZXMvZmFjZXRzL2ZhY2V0LW1hcC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU0vQixJQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7QUF5QmpDLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsT0FBTyxFQUFFLDZCQUE2QjtJQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsYUFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxJQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNyQixTQUFTLEVBQUUsc0JBQXNCO0NBQ2xDLENBQUMsQ0FBQztBQUVIO0lBQWdDLDhCQUFVO0lBQTFDO1FB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LFNBQVMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELE1BQU07WUFDTixJQUFJLENBQUMsTUFBTSx1QkFDTixJQUFJLENBQUMsS0FBSyxLQUNiLEtBQUssRUFBRSxZQUFZLElBQ25CLENBQUM7U0FDSjtJQUNILENBQUM7SUFjRCxnQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN2QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUVELFNBQVM7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUlELDBCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBekxELENBQWdDLFVBQVUsR0F5THpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgTWFwRGF0YSwgTWFya2VyRGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZhY2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vZmFjZXQtZGF0YXNvdXJjZSc7XHJcbi8vIGxlYWZsZXQgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSB3aW5kb3csXHJcbi8vIGEgZG91YmxlIGltcG9ydCByZXN1bHRzIGluIGVycm9ycyB3aXRoIHRvb2x0aXBzLlxyXG5kZWNsYXJlIGNvbnN0IEw7XHJcblxyXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnaXMtYWN0aXZlJztcclxuXHJcbnR5cGUgRkFDRVRfVkFMVUUgPSBzdHJpbmdbXTtcclxuXHJcbnR5cGUgQ2FkYXN0cmFsVW5pdCA9IHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgcGF5bG9hZDogc3RyaW5nO1xyXG4gIGNvdW50ZXI6IG51bWJlcjtcclxuICBhcmdzOiB7XHJcbiAgICBsYXQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICBsb246IHN0cmluZyB8IG51bGw7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJFdmVudCB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNYXJrZXJXaXRoSUQgZXh0ZW5kcyBNYXJrZXJEYXRhIHtcclxuICBpZD86IHN0cmluZztcclxuICBjb3VudGVyOiBudW1iZXI7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTiA9IEwuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLnBuZycsXHJcbiAgaWNvblNpemU6IFsxMywgMjBdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTE1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbidcclxufSk7XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTl9VTkFWQUlMQUJMRSA9IEwuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXVuYXZhaWxhYmxlLnBuZycsXHJcbiAgaWNvblNpemU6IFsxMywgMjBdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTE1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbidcclxufSk7XHJcblxyXG5jb25zdCBNQVJLRVJfSUNPTl9TRUxFQ1RFRCA9IEwuaWNvbih7XHJcbiAgaWNvblVybDogJy9hc3NldHMvcGluLXNlbGVjdGVkLnBuZycsXHJcbiAgaWNvblNpemU6IFsxMywgMjBdLFxyXG4gIHBvcHVwQW5jaG9yOiBbMCwgLTE1XSxcclxuICBjbGFzc05hbWU6ICdtYXJrZXItaWNvbi1zZWxlY3RlZCdcclxufSk7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZXRNYXBEUyBleHRlbmRzIERhdGFTb3VyY2UgaW1wbGVtZW50cyBGYWNldERhdGFTb3VyY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIHZhbHVlOiBGQUNFVF9WQUxVRSA9IFtdO1xyXG5cclxuICBtYXBJbnN0YW5jZTtcclxuXHJcbiAgbWFya2VyTGF5ZXI7XHJcblxyXG4gIG1hcmtlckV2ZW50cyQgPSBuZXcgU3ViamVjdDxNYXJrZXJFdmVudD4oKTtcclxuXHJcbiAgaXNVcGRhdGUgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybSh7IGxpbmtzIH06IHsgbGlua3M6IENhZGFzdHJhbFVuaXRbXSB9KTogTWFwRGF0YSB7XHJcbiAgICBjb25zdCBtYXJrZXJzID0gW107XHJcbiAgICBsaW5rc1xyXG4gICAgICAuZmlsdGVyKChkKSA9PiBkLmFyZ3M/LmxhdCAmJiBkLmFyZ3M/LmxvbilcclxuICAgICAgLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAvLyBpZiBhIGxpbmsgaGFzIG1vcmUgdGhhbiBvbmUgY29ycmVzcG9uZGluZyBtYXJrZXJcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkLmFyZ3MubGF0KSkge1xyXG4gICAgICAgICAgZC5hcmdzLmxhdC5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIG1hcmtlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgY29vcmRzOiBbK2QuYXJncy5sYXRbaV0sICtkLmFyZ3MubG9uW2ldXSBhcyBbbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiBkLnRleHQsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IGQudGV4dCxcclxuICAgICAgICAgICAgICBpZDogZC5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgIHNsdWc6IGQucGF5bG9hZCxcclxuICAgICAgICAgICAgICBjb3VudGVyOiBkLmNvdW50ZXIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGlmIGEgbGluayBoYXMgb25seSBvbmUgbWFya2VyXHJcbiAgICAgICAgICBtYXJrZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBjb29yZHM6IFsrZC5hcmdzLmxhdCwgK2QuYXJncy5sb25dIGFzIFtudW1iZXIsIG51bWJlcl0sXHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiBkLnRleHQsXHJcbiAgICAgICAgICAgIHRpdGxlOiBkLnRleHQsXHJcbiAgICAgICAgICAgIGlkOiBkLnBheWxvYWQsXHJcbiAgICAgICAgICAgIHNsdWc6IGQucGF5bG9hZCxcclxuICAgICAgICAgICAgY291bnRlcjogZC5jb3VudGVyLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbnRhaW5lcklkOiAnbWFwLWNhbnZhcycsXHJcbiAgICAgIGxpYk9wdGlvbnM6IHtcclxuICAgICAgICBhdHRyaWJ1dGlvbkNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgIG1pblpvb206IDgsXHJcbiAgICAgICAgbWF4Qm91bmRzOiBbWzQ2Ljg1MDUsIDEwLjMzOTNdLCBbNDUuNjYzNSwgMTIuMjQyOV1dXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbGVMYXllcnM6IFt7XHJcbiAgICAgICAgLy8gdXJsOiAnaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8ve3N9LmJhc2VtYXBzLmNhcnRvY2RuLmNvbS9yYXN0ZXJ0aWxlcy92b3lhZ2VyX2xhYmVsc191bmRlci97en0ve3h9L3t5fXtyfS5wbmcnLFxyXG4gICAgICAgIC8vIHVybDogJ2h0dHBzOi8vY2FydG9kYi1iYXNlbWFwcy17c30uZ2xvYmFsLnNzbC5mYXN0bHkubmV0L2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLFxyXG4gICAgICAgIG9wdGlvbnM6IG51bGxcclxuICAgICAgfV0sXHJcbiAgICAgIGluaXRpYWxWaWV3OiB7XHJcbiAgICAgICAgY2VudGVyOiBbNDYuMDYsIDExLjIxXSxcclxuICAgICAgICB6b29tOiA5XHJcbiAgICAgIH0sXHJcbiAgICAgIF9zZXRJbnN0YW5jZTogKG1hcCkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFwSW5zdGFuY2UgPSBtYXA7XHJcbiAgICAgICAgdGhpcy5idWlsZE1hcmtlcnMobWFya2Vycyk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnVpbGRzIG1hcmtlcnMgd2l0aCBhIGN1c3RvbSBpY29uIGFuZCBhZGRzIHRoZW0gdG8gdGhlIG1hcC5cclxuICAgKiBAcGFyYW0gbWFya2VycyBhbiBhcnJheSBvZiBtYXJrZXJzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBidWlsZE1hcmtlcnMobWFya2VyczogTWFya2VyV2l0aElEW10pIHtcclxuICAgIGlmICghbWFya2VycykgcmV0dXJuO1xyXG4gICAgLy8gcmVtb3ZlIGFsbCBleGlzdGluZyBtYXJrZXJzXHJcbiAgICBpZiAodGhpcy5tYXJrZXJMYXllcikge1xyXG4gICAgICB0aGlzLm1hcmtlckxheWVyLmNsZWFyTGF5ZXJzKCk7XHJcbiAgICAgIHRoaXMubWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXJrZXJHcm91cCA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKFxyXG4gICAgICB7XHJcbiAgICAgICAgbWF4Q2x1c3RlclJhZGl1czogMTAsXHJcbiAgICAgICAgZGlzYWJsZUNsdXN0ZXJpbmdBdFpvb206IDhcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIG1hcmtlcnMuZm9yRWFjaCgoe1xyXG4gICAgICBjb29yZHMsIHRlbXBsYXRlLCBpZCwgc2x1ZywgY291bnRlclxyXG4gICAgfSkgPT4ge1xyXG4gICAgICAvLyBjcmVhdGUgY3VzdG9tIGljb24gbWFya2VyXHJcbiAgICAgIGNvbnN0IG5ld01hcmtlciA9IEwubWFya2VyKGNvb3Jkcywge1xyXG4gICAgICAgIGljb246IHRoaXMuZ2V0SWNvbihpZCwgY291bnRlciksXHJcbiAgICAgICAgekluZGV4T2Zmc2V0OiB0aGlzLmdldFppbmRleChpZCwgY291bnRlcilcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChpZCAmJiBzbHVnKSB7XHJcbiAgICAgICAgbmV3TWFya2VyLmlkID0gaWQ7XHJcbiAgICAgICAgbmV3TWFya2VyLmNvdW50ZXIgPSBjb3VudGVyO1xyXG4gICAgICAgIG5ld01hcmtlci5zbHVnID0gc2x1ZztcclxuICAgICAgfVxyXG4gICAgICBuZXdNYXJrZXJcclxuICAgICAgICAvLyBhZGQgdGhlIG1hcmtlciB0byB0aGUgZ3JvdXBcclxuICAgICAgICAuYWRkVG8obWFya2VyR3JvdXApXHJcbiAgICAgICAgLy8gYWRkIHRoZSBvbi1jbGljayB0b29sdGlwXHJcbiAgICAgICAgLmJpbmRQb3B1cCh0ZW1wbGF0ZSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIub24oJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICB0aGlzLm1hcmtlckV2ZW50cyQubmV4dCh7XHJcbiAgICAgICAgICB0eXBlOiAnbWFya2VyLmNsaWNrJyxcclxuICAgICAgICAgIGlkOiB0YXJnZXQuaWRcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuZXdNYXJrZXIub24oJ21vdXNlb3ZlcicsICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0Lm9wZW5Qb3B1cCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG5ld01hcmtlci5vbignbW91c2VvdXQnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIHRhcmdldC5jbG9zZVBvcHVwKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBhZGQgdGhlIG1hcmtlcnMgdG8gdGhlIG1hcCBpbnN0YW5jZVxyXG4gICAgdGhpcy5tYXBJbnN0YW5jZS5hZGRMYXllcihtYXJrZXJHcm91cCk7XHJcbiAgICAvLyB1cGRhdGUgdGhlIG1hcmtlciBsYXllciBpbnN0YW5jZVxyXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IG1hcmtlckdyb3VwO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IEZBQ0VUX1ZBTFVFLCB1cGRhdGUgPSBmYWxzZSkge1xyXG4gICAgLy8gcHJldmVudCB0aGUgc2VhcmNoIHNlcnZpY2UgZnJvbSBhc3NpZ25pbmcgYSBwbGFpbiBzdHJpbmdcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHZhbHVlID0gW3ZhbHVlXTtcclxuXHJcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc1VwZGF0ZSA9IHVwZGF0ZSB8fCB0aGlzLnZhbHVlID09PSBbXTtcclxuXHJcbiAgICBpZiAodXBkYXRlICYmIHRoaXMuaW5wdXQpIHtcclxuICAgICAgY29uc3QgeyBsaW5rcyB9ID0gdGhpcy5pbnB1dDtcclxuICAgICAgY29uc3QgdXBkYXRlZExpbmtzID0gbGlua3MubWFwKChsaW5rOiBDYWRhc3RyYWxVbml0KSA9PiAoe1xyXG4gICAgICAgIC4uLmxpbmssXHJcbiAgICAgICAgY2xhc3NlczogdGhpcy52YWx1ZS5pbmNsdWRlcyhsaW5rLnBheWxvYWQpID8gQUNUSVZFX0NMQVNTIDogJydcclxuICAgICAgfSkpO1xyXG4gICAgICAvLyB1cGRhdGUgbWFya2VyIGljb25zXHJcbiAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJMYXllci5lYWNoTGF5ZXIoKG1hcmtlcikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBpZCB9ID0gbWFya2VyO1xyXG4gICAgICAgICAgY29uc3QgY291bnRlciA9IGxpbmtzLmZpbmQoKHsgcGF5bG9hZCB9KSA9PiBwYXlsb2FkID09PSBpZCk/LmNvdW50ZXIgfHwgMDtcclxuICAgICAgICAgIG1hcmtlci5nZXRQb3B1cCgpLl9zb3VyY2Uuc2V0SWNvbih0aGlzLmdldEljb24oaWQsIGNvdW50ZXIpKVxyXG4gICAgICAgICAgICAuc2V0WkluZGV4T2Zmc2V0KHRoaXMuZ2V0WmluZGV4KGlkLCBjb3VudGVyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gLS0tXHJcbiAgICAgIHRoaXMudXBkYXRlKHtcclxuICAgICAgICAuLi50aGlzLmlucHV0LFxyXG4gICAgICAgIGxpbmtzOiB1cGRhdGVkTGlua3NcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJY29uID0gKGlkOiBzdHJpbmcsIGNvdW50ZXI6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHRoaXMudmFsdWUuaW5jbHVkZXMoaWQpKSByZXR1cm4gTUFSS0VSX0lDT05fU0VMRUNURUQ7XHJcbiAgICBpZiAoY291bnRlciA+IDApIHJldHVybiBNQVJLRVJfSUNPTjtcclxuICAgIHJldHVybiBNQVJLRVJfSUNPTl9VTkFWQUlMQUJMRTtcclxuICB9XHJcblxyXG4gIGdldFppbmRleCA9IChpZDogc3RyaW5nLCBjb3VudGVyOiBudW1iZXIpID0+IHtcclxuICAgIGlmICh0aGlzLnZhbHVlLmluY2x1ZGVzKGlkKSkgcmV0dXJuIDE5OTk5O1xyXG4gICAgaWYgKGNvdW50ZXIgPiAwKSByZXR1cm4gOTk5OTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgZXhpc3RzID0gdGhpcy52YWx1ZS5pbmNsdWRlcyh2YWx1ZSk7XHJcbiAgICBpZiAoIWV4aXN0cykge1xyXG4gICAgICB0aGlzLnZhbHVlLnB1c2godmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChleGlzdHMpIHtcclxuICAgICAgdGhpcy52YWx1ZS5zcGxpY2UodGhpcy52YWx1ZS5pbmRleE9mKHZhbHVlKSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlXHJcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUgPSAoKTogRkFDRVRfVkFMVUUgPT4gdGhpcy52YWx1ZTtcclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gW107XHJcbiAgfVxyXG59XHJcbiJdfQ==